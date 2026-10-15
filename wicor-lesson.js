/* =====================================================================
   WICOR LESSON ENGINE (shared by every lesson page, no need to edit)
   Each lesson page defines a LESSON object, then loads this file.
   Builds the R, W, C and O stations from the data, mounts the lesson's
   own Inquiry (I) station, saves work in the browser, and handles printing.
   ===================================================================== */
(function () {
  const L = LESSON; // defined by the lesson page
  const ORDER = L.order || ["R", "W", "I", "C", "O"];
  const META = {
    W: { name: "Writing", color: "var(--W)" }, I: { name: "Inquiry", color: "var(--I)" },
    C: { name: "Collaboration", color: "var(--C)" }, O: { name: "Organization", color: "var(--O)" },
    R: { name: "Reading", color: "var(--R)" }
  };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const words = s => (String(s).trim().match(/[A-Za-z0-9'’%₂₆-]+/g) || []).length;

  /* ---------- saved state (this browser only) ---------- */
  const KEY = "wicor-lesson-" + L.id;
  let S = {};
  try { S = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { S = {}; }
  S.inputs = S.inputs || {}; S.marks = S.marks || {}; S.circles = S.circles || []; S.notes = S.notes || {};
  S.done = S.done || {}; S.sort = S.sort || {}; S.sim = S.sim || {};
  let saveT;
  function save() { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }, 250); }

  /* ---------- page header ---------- */
  document.title = `${L.title} | WICOR ${L.subject}`;
  $("#lessonHead").innerHTML = `
    <div class="kicker">AVID WICOR Lesson · ${esc(L.subject)}</div>
    <h1><span class="grad">${esc(L.title)}</span></h1>
    <p>${esc(L.intro)}</p>
    <div class="student-info no-print-hide">
      <label>Name <input data-save="name" autocomplete="off"></label>
      <label>Period <input data-save="period" style="width:70px" autocomplete="off"></label>
      <label>Date <input data-save="date" style="width:120px" autocomplete="off"></label>
    </div>`;

  /* ---------- station map ---------- */
  $("#map").innerHTML = ORDER.map((k, i) => `
    <button class="stop" data-st="${k}" style="--c:${META[k].color}">
      <span class="step">${i + 1}</span><span class="L">${k}</span><span class="nm">${META[k].name}</span><span class="chk">✓</span>
    </button>`).join("");
  $("#map").addEventListener("click", e => { const b = e.target.closest(".stop"); if (b) show(b.dataset.st, true); });

  /* ---------- station shells ---------- */
  const host = $("#stations");
  ORDER.forEach((k, i) => {
    const d = L.stations[k];
    const sec = document.createElement("section");
    sec.className = "station"; sec.id = "st-" + k; sec.hidden = true; sec.style.setProperty("--c", META[k].color);
    const next = ORDER[i + 1];
    sec.innerHTML = `
      <div class="st-head"><div class="st-badge">${k}</div>
        <div><h2>${esc(d.title)}</h2><div class="time">${META[k].name} · ⏱ ${esc(d.time || "5–10 min")}</div></div></div>
      <div class="goal">🎯 ${d.goal}</div>
      <div class="st-body"></div>
      <div class="st-foot"><span class="status" id="status-${k}">Not finished yet</span>
        ${next ? `<button class="btn solid" data-next="${next}">Next: ${next} · ${META[next].name} →</button>` : `<button class="btn solid" data-print>🖨️ Print my work</button>`}</div>`;
    host.appendChild(sec);
  });
  host.addEventListener("click", e => {
    const n = e.target.closest("[data-next]"); if (n) show(n.dataset.next, true);
  });

  function show(k, scroll) {
    ORDER.forEach(x => { $("#st-" + x).hidden = x !== k; });
    $$(".stop").forEach(b => b.classList.toggle("on", b.dataset.st === k));
    S.current = k; save();
    if (scroll) $("#map").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- completion ---------- */
  function complete(k, msg) {
    const first = !S.done[k];
    S.done[k] = true; save(); paintDone();
    const st = $("#status-" + k); st.textContent = "✅ " + (msg || "Station complete!"); st.classList.add("ok");
    if (first) confetti(70);
    if (ORDER.every(x => S.done[x]) && first) { $("#finish").hidden = false; confetti(160); }
  }
  function paintDone() {
    $$(".stop").forEach(b => b.classList.toggle("done", !!S.done[b.dataset.st]));
    const n = ORDER.filter(x => S.done[x]).length;
    $("#progress").style.width = (n / ORDER.length * 100) + "%";
    ORDER.forEach(k => { if (S.done[k]) { const st = $("#status-" + k); st.textContent = "✅ Station complete!"; st.classList.add("ok"); } });
    $("#finish").hidden = n < ORDER.length;
  }
  function confetti(n) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#0b6fb8", "#7b5cff", "#e8573f", "#14a396", "#d08a00", "#ffb703"];
    for (let i = 0; i < n; i++) {
      const d = document.createElement("div"); d.className = "confetti";
      d.style.left = Math.random() * 100 + "vw"; d.style.background = colors[i % colors.length];
      d.style.animationDuration = 1.6 + Math.random() * 1.6 + "s"; d.style.animationDelay = Math.random() * .4 + "s";
      document.body.appendChild(d); setTimeout(() => d.remove(), 3800);
    }
  }
  const body = k => $("#st-" + k + " .st-body");
  const part = (n, title, inner) => `<div class="part"><h3><span class="n">${n}</span>${title}</h3>${inner}</div>`;

  /* =====================================================================
     R: READ & ANNOTATE
     ===================================================================== */
  (function () {
    const A = L.stations.R;
    let html = `<div class="legend no-print">
        <span><span style="display:inline-block;width:16px;border-bottom:3px solid var(--claim);vertical-align:3px"></span> Underline the CLAIM (1 sentence)</span>
        <span><span class="sw" style="display:inline-block;width:14px;height:14px;border-radius:4px;background:color-mix(in srgb,var(--evid) 40%,#fff)"></span> Highlight EVIDENCE</span>
        <span><span class="sw" style="display:inline-block;width:14px;height:14px;border-radius:4px;background:color-mix(in srgb,var(--reas) 35%,#fff)"></span> Highlight REASONING</span>
        <span>⭕ Circle KEY TERMS</span><span>💬 Write margin NOTES</span></div>
      <div class="tools">
        <button class="tool" data-mode="claim"><span class="sw" style="border-bottom:3px solid var(--claim);border-radius:0"></span>Claim</button>
        <button class="tool" data-mode="evid"><span class="sw" style="background:var(--evid)"></span>Evidence</button>
        <button class="tool" data-mode="reas"><span class="sw" style="background:var(--reas)"></span>Reasoning</button>
        <button class="tool on" data-mode="circle">⭕ Key term</button>
        <button class="tool" data-mode="note">💬 Note</button>
        <button class="tool" data-mode="erase">🧽 Erase</button>
        <button class="btn solid" id="rCheck" style="margin-left:auto">Check my annotations</button>
      </div>
      <div class="article" id="article"><h3>${esc(A.article.title)}</h3><div class="by">${esc(A.article.byline || "")}</div>`;
    let wid = 0;
    A.article.paragraphs.forEach((para, pi) => {
      html += `<p><span class="pn">¶${pi + 1}</span>`;
      para.forEach((raw, si) => {
        const m = raw.match(/^\[(C|E|R)\]\s*/); const role = m ? m[1] : ""; const text = m ? raw.slice(m[0].length) : raw;
        const sid = `${pi}-${si}`;
        let inner = "";
        text.split(/(\{\{.*?\}\})/).forEach(part => {
          if (!part) return;
          if (part.startsWith("{{")) inner += `<span class="wd k" data-w="${wid++}" data-key="1">${esc(part.slice(2, -2))}</span>`;
          else part.split(/(\s+)/).forEach(t => { inner += /^\s*$/.test(t) ? t : `<span class="wd" data-w="${wid++}">${esc(t)}</span>`; });
        });
        html += `<span class="s" data-sid="${sid}" data-role="${role}">${inner}</span> `;
      });
      html += `</p>`;
    });
    html += `</div><div class="feedback" id="rFb"></div>`;
    html += part("✍", "Quick check: in your own words", `<p class="hint" style="margin-top:0">${esc(A.gist)}</p><textarea class="box" rows="2" data-save="r-gist" placeholder="The author wants me to understand that…"></textarea>`);
    body("R").innerHTML = html;

    const art = $("#article");
    let mode = "circle";
    $$("#st-R .tool").forEach(b => b.onclick = () => { mode = b.dataset.mode; $$("#st-R .tool").forEach(x => x.classList.toggle("on", x === b)); });

    // restore
    Object.entries(S.marks).forEach(([sid, t]) => { const s = art.querySelector(`[data-sid="${sid}"]`); if (s) s.classList.add("m-" + t); });
    S.circles.forEach(w => { const el = art.querySelector(`[data-w="${w}"]`); if (el) el.classList.add("circ"); });
    Object.entries(S.notes).forEach(([sid, t]) => addNote(sid, t));

    function addNote(sid, text) {
      const s = art.querySelector(`[data-sid="${sid}"]`); if (!s) return;
      let n = s.nextElementSibling && s.nextElementSibling.classList.contains("note") ? s.nextElementSibling : null;
      if (!n) {
        n = document.createElement("span"); n.className = "note"; n.dataset.for = sid;
        n.innerHTML = `💬<input placeholder="Type your note…"><button title="Delete note">✕</button>`;
        s.after(n);
        n.querySelector("input").addEventListener("input", e => { S.notes[sid] = e.target.value; save(); });
        n.querySelector("button").onclick = () => { delete S.notes[sid]; n.remove(); save(); };
      }
      n.querySelector("input").value = text || "";
      if (text === undefined) n.querySelector("input").focus();
      S.notes[sid] = text || S.notes[sid] || ""; save();
    }
    art.addEventListener("click", e => {
      if (e.target.closest(".note")) return;
      $$(".right,.wrong,.wrongk", art).forEach(x => x.classList.remove("right", "wrong", "wrongk"));
      const w = e.target.closest(".wd"), s = e.target.closest(".s");
      if (mode === "circle" && w) {
        w.classList.toggle("circ");
        const id = +w.dataset.w; S.circles = S.circles.filter(x => x !== id); if (w.classList.contains("circ")) S.circles.push(id);
      } else if (["claim", "evid", "reas"].includes(mode) && s) {
        const had = s.classList.contains("m-" + mode);
        s.classList.remove("m-claim", "m-evid", "m-reas"); delete S.marks[s.dataset.sid];
        if (!had) { s.classList.add("m-" + mode); S.marks[s.dataset.sid] = mode; }
      } else if (mode === "note" && s) {
        addNote(s.dataset.sid);
      } else if (mode === "erase") {
        if (w && w.classList.contains("circ")) { w.classList.remove("circ"); S.circles = S.circles.filter(x => x !== +w.dataset.w); }
        else if (s) { s.classList.remove("m-claim", "m-evid", "m-reas"); delete S.marks[s.dataset.sid]; }
      }
      save();
    });

    $("#rCheck").onclick = () => {
      const sents = $$(".s", art);
      let claimRight = 0, claimWrong = 0, eR = 0, eW = 0, rR = 0, rW = 0;
      const totalE = sents.filter(s => s.dataset.role === "E").length;
      sents.forEach(s => {
        const r = s.dataset.role;
        if (s.classList.contains("m-claim")) { if (r === "C") { claimRight++; s.classList.add("right"); } else { claimWrong++; s.classList.add("wrong"); } }
        if (s.classList.contains("m-evid")) { if (r === "E") { eR++; s.classList.add("right"); } else { eW++; s.classList.add("wrong"); } }
        if (s.classList.contains("m-reas")) { if (r === "R") { rR++; s.classList.add("right"); } else { rW++; s.classList.add("wrong"); } }
      });
      const keys = $$(".k", art).length, kc = $$(".k.circ", art).length;
      const extra = $$(".wd.circ:not(.k)", art).length;
      const notes = Object.values(S.notes).filter(t => t && t.trim().length > 2).length;
      const need = A.minKeys || 5;
      const tips = [];
      if (!claimRight) tips.push("Underline the author's CLAIM. It's the one sentence that states the author's position and could be argued.");
      if (claimWrong) tips.push("One of your underlined sentences isn't the claim (dashed red). Only one sentence is the claim.");
      if (eR < 2) tips.push(`Highlight at least 2 EVIDENCE sentences: facts, data, or examples that support the claim (${eR} of ${totalE} found).`);
      if (eW) tips.push(`${eW} evidence highlight${eW > 1 ? "s are" : " is"} really background information or reasoning (dashed red). Ask yourself: does it PROVE the claim?`);
      if (rR < 1) tips.push("Highlight the REASONING: the sentence that explains WHY the evidence supports the claim. Look for words like \"because\" or \"without it.\"");
      if (rW) tips.push("A reasoning highlight is marked dashed red. Reasoning explains, rather than giving a fact.");
      if (kc < need) tips.push(`Circle at least ${need} KEY TERMS (${kc} of ${keys} found). Look for science vocabulary you'd put in a glossary.`);
      if (notes < 1) tips.push("Add at least 1 margin NOTE 💬: a question, a connection, or a reaction.");
      const fb = $("#rFb");
      if (!tips.length) {
        fb.className = "feedback good";
        fb.innerHTML = `🌟 Expert annotation! Claim ✓ · Evidence ${eR}/${totalE} ✓ · Reasoning ✓ · Key terms ${kc}/${keys} ✓ · Notes ${notes} ✓` + (extra ? `<br><small>(You also circled ${extra} other word${extra > 1 ? "s" : ""}. That's fine if they helped you!)</small>` : "");
        complete("R", "Annotations complete!");
      } else { fb.className = "feedback try"; fb.innerHTML = "Keep going:<br>• " + tips.join("<br>• "); }
    };
  })();

  /* =====================================================================
     W: CER WRITING
     ===================================================================== */
  (function () {
    const W = L.stations.W;
    const colors = { claim: "var(--claim)", evidence: "var(--evid)", reasoning: "var(--reas)" };
    let html = `<div class="statement" style="background:linear-gradient(135deg,var(--W),#3d8bfd)"><small>Writing prompt</small>${esc(W.prompt)}</div>
      ${part(1, "Build your CER paragraph", `<div class="cer">${W.parts.map(p => `
        <div class="cer-row"><div class="cer-tag" id="tag-${p.key}" style="background:${colors[p.key]}">${p.label}<small>${esc(p.sub)}</small></div>
        <div><textarea class="box" rows="${p.rows || 2}" data-save="w-${p.key}" placeholder="${esc(p.starter)}"></textarea><p class="hint">${p.hint}</p></div></div>`).join("")}</div>`)}
      ${part(2, "Your finished paragraph", `<div class="paragraph" id="wPara"></div>
        <ul class="checks" id="wChecks">
          ${W.parts.map(p => `<li data-k="${p.key}">${esc(p.checkLabel)}</li>`).join("")}
          <li data-k="terms">Uses at least ${W.minTerms} vocabulary words (${W.terms.map(t => t[0]).join(", ")})</li>
          <li data-k="len">${W.minWords}+ words total</li>
        </ul>`)}`;
    body("W").innerHTML = html;
    function update() {
      const v = {}; W.parts.forEach(p => v[p.key] = (S.inputs["w-" + p.key] || "").trim());
      const all = W.parts.map(p => v[p.key]).join(" ");
      const res = {};
      W.parts.forEach(p => { res[p.key] = p.check(v[p.key]); $("#tag-" + p.key).classList.toggle("ok", res[p.key]); });
      res.terms = W.terms.filter(t => t[1].test(all)).length >= W.minTerms;
      res.len = words(all) >= W.minWords;
      $$("#wChecks li").forEach(li => li.classList.toggle("ok", !!res[li.dataset.k]));
      $("#wPara").innerHTML = [["claim", "pc"], ["evidence", "pe"], ["reasoning", "pr"]].map(([k, c]) => v[k] ? `<span class="${c}">${esc(v[k])}</span>` : "").filter(Boolean).join(" ");
      if (Object.values(res).every(Boolean)) complete("W", "CER paragraph complete!");
    }
    body("W").addEventListener("input", update);
    W._update = update;
  })();

  /* =====================================================================
     I: INQUIRY (custom per lesson: the page supplies it)
     ===================================================================== */
  (function () {
    const I = L.stations.I;
    body("I").innerHTML = I.html;
    I.mount({ root: body("I"), state: S, save, complete: msg => complete("I", msg), part, esc, words });
  })();

  /* =====================================================================
     C: COLLABORATION
     ===================================================================== */
  (function () {
    const C = L.stations.C;
    const stanceBtns = key => `<div class="stance" data-stance="${key}">
      <button data-v="agree"><span>👍</span>Agree</button><button data-v="depends"><span>🤔</span>It depends</button><button data-v="disagree"><span>👎</span>Disagree</button></div>`;
    body("C").innerHTML = `
      <div class="statement"><small>Philosophical Chairs statement</small>${esc(C.statement)}</div>
      ${part(1, "Take a stand", stanceBtns("c-stance1"))}
      ${part(2, "Explain your thinking", `<textarea class="box" rows="3" data-save="c-reason" placeholder="${esc(C.reasonStarter)}"></textarea><p class="hint">Use evidence from the article or your simulation. Include the word <b>because</b>.</p>`)}
      ${part(3, "Respond to a classmate", `
        <div class="peer"><div class="who">${esc(C.peer.name)} says:</div>"${esc(C.peer.says)}"</div>
        <p class="hint">Working with a partner? Respond to their argument instead and write their name here: <input class="box" data-save="c-partner" style="width:180px;display:inline-block;padding:4px 10px" placeholder="Partner's name"></p>
        <div class="frames">${C.frames.map(f => `<button class="stem" data-frame="${esc(f)}">${esc(f)}</button>`).join("")}</div>
        <textarea class="box" rows="3" data-save="c-respond" placeholder="Tap a sentence frame above to get started…"></textarea>`)}
      ${part(4, "Move your chair?", `${stanceBtns("c-stance2")}
        <textarea class="box" rows="2" data-save="c-reflect" style="margin-top:10px" placeholder="My thinking changed / stayed the same because…"></textarea>`)}
      <ul class="checks" id="cChecks"><li data-k="s1">Took a stand</li><li data-k="reason">Explained with "because" + evidence (15+ words)</li><li data-k="respond">Responded respectfully using a frame (12+ words)</li><li data-k="s2">Final position + reflection</li></ul>`;
    const root = body("C");
    function paintStance() { $$("[data-stance]", root).forEach(g => $$("button", g).forEach(b => b.classList.toggle("on", S.inputs[g.dataset.stance] === b.dataset.v))); }
    root.addEventListener("click", e => {
      const b = e.target.closest("[data-stance] button");
      if (b) { S.inputs[b.parentElement.dataset.stance] = b.dataset.v; save(); paintStance(); update(); }
      const f = e.target.closest("[data-frame]");
      if (f) { const ta = $('[data-save="c-respond"]', root); ta.value = (ta.value ? ta.value.trim() + " " : "") + f.dataset.frame + " "; ta.focus(); ta.dispatchEvent(new Event("input", { bubbles: true })); }
    });
    function update() {
      const i = S.inputs;
      const r = { s1: !!i["c-stance1"], reason: words(i["c-reason"] || "") >= 15 && /because/i.test(i["c-reason"] || ""), respond: words(i["c-respond"] || "") >= 12, s2: !!i["c-stance2"] && words(i["c-reflect"] || "") >= 6 };
      $$("#cChecks li").forEach(li => li.classList.toggle("ok", r[li.dataset.k]));
      if (Object.values(r).every(Boolean)) complete("C", "Discussion complete!");
    }
    root.addEventListener("input", update);
    C._paint = () => { paintStance(); update(); };
  })();

  /* =====================================================================
     O: ORGANIZE (sort into a graphic organizer)
     ===================================================================== */
  (function () {
    const O = L.stations.O;
    body("O").innerHTML = `
      ${part(1, esc(O.sortTitle), `<p class="hint" style="margin-top:0">Drag each card into the right box, or <b>tap a card, then tap a box</b>.</p>
        <div class="bank" id="bank" data-zone="-1"></div>
        <div class="zones">${O.zones.map((z, i) => `<div class="zone" data-zone="${i}"><h4>${esc(z)}</h4><div class="drop"></div></div>`).join("")}</div>
        <div style="margin-top:12px"><button class="btn solid" id="oCheck">Check my organizer</button> <button class="btn" id="oReset">Reset</button></div>
        <div class="feedback" id="oFb"></div>`)}
      ${part(2, "Summarize it", `<p class="hint" style="margin-top:0">${esc(O.summaryPrompt)}</p>
        <textarea class="box" rows="3" data-save="o-sum" placeholder="${esc(O.summaryStarter)}"></textarea>
        <ul class="checks" id="oChecks"><li data-k="sort">Every card is in the right box</li><li data-k="sum">Summary is 2+ sentences (20+ words)</li></ul>`)}`;
    const root = body("O");
    let sel = null, sorted = false;
    function place(ti, zi) {
      const t = $(`.tile[data-t="${ti}"]`, root);
      const dest = zi < 0 ? $("#bank") : $(`.zone[data-zone="${zi}"] .drop`, root);
      dest.appendChild(t); S.sort[ti] = zi; save();
      $$(".tile", root).forEach(x => x.classList.remove("right", "wrong"));
    }
    function build() {
      $("#bank").innerHTML = ""; $$(".drop", root).forEach(d => d.innerHTML = "");
      const idx = O.tiles.map((_, i) => i).sort(() => Math.random() - .5);
      idx.forEach(i => {
        const t = document.createElement("div"); t.className = "tile"; t.draggable = true; t.dataset.t = i; t.textContent = O.tiles[i][0];
        $("#bank").appendChild(t);
        if (S.sort[i] !== undefined && S.sort[i] >= 0) place(i, S.sort[i]);
      });
    }
    build();
    root.addEventListener("click", e => {
      const t = e.target.closest(".tile");
      if (t) { e.stopPropagation(); if (sel === t) { t.classList.remove("sel"); sel = null; return; } $$(".tile", root).forEach(x => x.classList.remove("sel")); sel = t; t.classList.add("sel"); return; }
      const z = e.target.closest(".zone, #bank");
      if (z && sel) { place(+sel.dataset.t, +z.dataset.zone); sel.classList.remove("sel"); sel = null; }
    });
    root.addEventListener("dragstart", e => { const t = e.target.closest(".tile"); if (t) e.dataTransfer.setData("text/plain", t.dataset.t); });
    root.addEventListener("dragover", e => { const z = e.target.closest(".zone, #bank"); if (z) { e.preventDefault(); z.classList.add("over"); } });
    root.addEventListener("dragleave", e => { const z = e.target.closest(".zone, #bank"); if (z) z.classList.remove("over"); });
    root.addEventListener("drop", e => { const z = e.target.closest(".zone, #bank"); if (!z) return; e.preventDefault(); z.classList.remove("over"); place(+e.dataTransfer.getData("text/plain"), +z.dataset.zone); });
    $("#oReset").onclick = () => { S.sort = {}; save(); build(); $("#oFb").textContent = ""; sorted = false; update(); };
    $("#oCheck").onclick = () => {
      let right = 0, placed = 0;
      $$(".tile", root).forEach(t => {
        const zi = S.sort[t.dataset.t]; if (zi === undefined || zi < 0) return; placed++;
        const ok = O.tiles[t.dataset.t][1] === zi; t.classList.add(ok ? "right" : "wrong"); if (ok) right++;
      });
      const fb = $("#oFb"), total = O.tiles.length;
      sorted = right === total;
      if (sorted) { fb.className = "feedback good"; fb.textContent = `🌟 All ${total} cards are organized correctly!`; }
      else { fb.className = "feedback try"; fb.textContent = placed < total ? `${right} correct so far. ${total - placed} card${total - placed > 1 ? "s are" : " is"} still in the bank.` : `${right} of ${total} correct. Move the red cards to a different box.`; }
      update();
    };
    function update() {
      const r = { sort: sorted, sum: words(S.inputs["o-sum"] || "") >= 20 && ((S.inputs["o-sum"] || "").match(/[.!?](\s|$)/g) || []).length >= 2 };
      $$("#oChecks li").forEach(li => li.classList.toggle("ok", r[li.dataset.k]));
      if (r.sort && r.sum) complete("O", "Organizer complete!");
    }
    root.addEventListener("input", update);
    if (S.done.O) sorted = true;
  })();

  /* ---------- generic save/restore for every [data-save] field ---------- */
  $$("[data-save]").forEach(el => {
    const k = el.dataset.save;
    if (S.inputs[k] !== undefined) el.value = S.inputs[k];
    el.addEventListener("input", () => { S.inputs[k] = el.value; save(); });
  });
  // run checkers once with restored values
  L.stations.W._update && L.stations.W._update();
  L.stations.C._paint && L.stations.C._paint();

  /* ---------- printing ---------- */
  function doPrint() { window.print(); }
  $$("[data-print]").forEach(b => b.addEventListener("click", doPrint));
  window.addEventListener("beforeprint", () => {
    $$("textarea.box").forEach(t => {
      let c = t.nextElementSibling && t.nextElementSibling.classList.contains("print-copy") ? t.nextElementSibling : null;
      if (!c) { c = document.createElement("div"); c.className = "print-copy"; t.after(c); }
      c.textContent = t.value || " ";
    });
  });
  const ps = document.createElement("style");
  ps.textContent = `.print-copy{display:none}@media print{textarea.box{display:none!important}.print-copy{display:block;border:1px solid #999;border-radius:8px;padding:8px 10px;min-height:3em;white-space:pre-wrap;font-family:Georgia,serif}}`;
  document.head.appendChild(ps);
  $("#resetAll") && ($("#resetAll").onclick = () => { if (confirm("Erase all your work on this lesson and start over?")) { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); } });

  /* ---------- start ---------- */
  paintDone();
  show(S.current && ORDER.includes(S.current) ? S.current : ORDER[0], false);
})();
