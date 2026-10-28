/* =====================================================================
   ATP POWER-UP LAB BLOCKS (no need to edit)
   atpmodel : ATP ⇄ ADP + P "battery" (snap off a phosphate, recharge it)
   atpmake  : break down glucose step by step (glycolysis → Krebs → ETC),
              with and without oxygen, then record the ATP data (graded)
   atpspend : spend ATP on cell jobs (active transport, muscle contraction,
              DNA replication, enzymes, proteins…) with animations.
              mode "cell" = one cell (b.org), mode "orgs" = 4 organisms
   Fast test hook: window.ATP_FAST = 1 (skips the animation time).
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$ } = H;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ES = s => `<i class="ap-es">${s}</i>`;
  const ms = n => window.ATP_FAST ? 30 : n;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  function tween(dur, fn, done) { const t0 = performance.now(); const f = now => { const p = clamp((now - t0) / dur, 0, 1); fn(p); if (p < 1) requestAnimationFrame(f); else if (done) done(); }; requestAnimationFrame(f); }

  if (!document.getElementById("ap-css")) {
    const c = document.createElement("style"); c.id = "ap-css";
    c.textContent = `
    .ap{border:3px solid var(--line);border-radius:22px;padding:14px 16px;background:var(--surface)}
    .ap h4{margin:0 0 6px}.ap-es{color:var(--muted);font-weight:600;font-size:.85em}
    .ap svg.sc{width:100%;height:auto;display:block;background:#fbfcff;border-radius:16px;border:2px solid var(--line)}
    .ap-row{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:14px;align-items:start}.ap-row>div{min-width:0}
    .ap-bat{display:flex;align-items:center;gap:10px;font:800 1.05rem var(--display)}
    .ap-bat .cell{position:relative;width:150px;height:34px;border:4px solid #13294b;border-radius:8px;background:#fff;overflow:hidden}
    .ap-bat .cell::after{content:"";position:absolute;right:-12px;top:8px;width:8px;height:12px;background:#13294b;border-radius:0 3px 3px 0}
    .ap-bat .cell i{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,#f6c90e,#f39c12);transition:width .35s}
    .ap-bat b{font-size:1.5rem;color:#b45309}
    .ap-btns{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
    .ap-chip{all:unset;cursor:pointer;border:2px solid var(--line);border-radius:999px;padding:5px 12px;font:800 .86rem var(--body);background:var(--surface)}
    .ap-chip.on{border-color:var(--lc);background:var(--lc);color:#fff}.ap-chip[disabled]{opacity:.45;cursor:default}
    .ap-msg{border-radius:12px;padding:8px 10px;font-size:.92rem;background:var(--soft);border:2px solid var(--line)}.ap-msg.bad{background:#fdecea;border-color:#e7a29b}.ap-msg.good{background:#e8f5ec;border-color:#9fd3b2}
    .ap-jobs{display:grid;gap:6px}
    .ap-job{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;border:2px solid var(--line);border-radius:14px;padding:8px 10px;background:var(--surface);font-weight:800;font-size:.9rem}
    .ap-job:hover{border-color:var(--lc)}.ap-job .cost{background:#fff3c4;border:2px solid #f2b705;border-radius:999px;padding:1px 8px;font-size:.8rem;color:#7a5600;white-space:nowrap}
    .ap-job.done{background:#e5f4ea;border-color:#7cc49a;color:#1d5c36;cursor:default}.ap-job .ic{font-size:1.4rem}
    .ap-orgs{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:6px 0 10px}
    .ap-org{all:unset;cursor:pointer;box-sizing:border-box;border:3px solid var(--line);border-radius:16px;padding:8px;display:grid;gap:2px;text-align:center;font-weight:800;font-size:.86rem}
    .ap-org .e{font-size:1.9rem}.ap-org.on{border-color:var(--lc);background:color-mix(in srgb,var(--lc) 12%,var(--surface))}.ap-org.done::after{content:"✓ day complete";color:#1d7a45;font-size:.75rem}
    .ap-tw{overflow-x:auto}.ap-tbl{width:100%;border-collapse:collapse;margin-top:10px;font-size:.88rem}.ap-tbl th,.ap-tbl td{border:1px solid var(--line);padding:5px 7px;text-align:left}
    .ap-tbl th{background:var(--soft)}.ap-tbl input,.ap-tbl select{width:100%;min-width:80px;font:inherit;border:2px solid var(--line);border-radius:8px;padding:3px 5px}
    .ap-tbl td.ok{background:color-mix(in srgb,var(--ok) 16%,transparent)}.ap-tbl td.no{background:color-mix(in srgb,var(--bad) 14%,transparent)}
    @keyframes appulse{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--lc) 45%,transparent)}50%{box-shadow:0 0 0 7px transparent}}.ap .pulse{animation:appulse 1.6s ease-in-out infinite}
    @media (max-width:820px){.ap-row{grid-template-columns:1fr}}`;
    document.head.appendChild(c);
  }
  const bat = (n, max, label) => `<div class="ap-bat"><span class="cell"><i style="width:${clamp(n / max * 100, 0, 100)}%"></i></span>⚡ <b>${n}</b> ATP ${label ? `<span class="ap-es">${label}</span>` : ""}</div>`;
  const atpIcon = (x, y, s = 1, o = 1) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${o}"><rect x="-13" y="-8" width="26" height="16" rx="4" fill="#f6c90e" stroke="#b45309" stroke-width="2"/><rect x="13" y="-3" width="3" height="6" fill="#b45309"/><text x="0" y="4" text-anchor="middle" font-size="9" font-weight="800" fill="#7a3d00">ATP</text></g>`;
  const hexG = (x, y, r, fill, lab) => { let p = ""; for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i + Math.PI / 6; p += `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)} `; } return `<polygon points="${p}" fill="${fill}" stroke="#7a5600" stroke-width="2.5"/>${lab ? `<text x="${x}" y="${y + 4}" text-anchor="middle" font-size="10" font-weight="800" fill="#5a3d00">${lab}</text>` : ""}`; };

  /* ================= ATP MODEL ================= */
  function atpSVG(state, p) {   /* state: "atp" | "adp"; p = animation progress */
    const off = state === "adp" ? 1 : 0, fly = state === "adp" ? p : 1 - p;
    let g = `<rect width="520" height="200" fill="#fbfcff"/>`;
    g += `<polygon points="40,70 75,55 105,75 95,110 55,112" fill="#8fd3f4" stroke="#1f6f99" stroke-width="3"/><polygon points="55,112 95,110 105,140 75,160 45,140" fill="#a8e0f7" stroke="#1f6f99" stroke-width="3"/><text x="74" y="98" text-anchor="middle" font-size="11" font-weight="800" fill="#0b3d5c">adenine</text>`;
    g += `<polygon points="125,95 165,80 195,105 180,140 140,140" fill="#d8c7f3" stroke="#6b3fa0" stroke-width="3"/><text x="160" y="118" text-anchor="middle" font-size="11" font-weight="800" fill="#3b1d5a">ribose</text><line x1="105" y1="100" x2="125" y2="105" stroke="#333" stroke-width="3"/>`;
    [0, 1, 2].forEach(i => { let x = 235 + i * 70, y = 105; if (i === 2) { x += 70 * fly; y -= 40 * fly; }
      if (i > 0) g += `<line x1="${235 + (i - 1) * 70 + 22}" y1="105" x2="${x - 22}" y2="${y}" stroke="${i === 2 ? "#e0a100" : "#333"}" stroke-width="${i === 2 ? 5 : 3}" ${i === 2 && fly > .05 ? 'stroke-dasharray="4 5" opacity=".4"' : ""}/>`;
      g += `<circle cx="${x}" cy="${y}" r="22" fill="#ffe08a" stroke="#b45309" stroke-width="3"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="15" font-weight="800" fill="#7a3d00">P</text>`; });
    g += `<line x1="182" y1="110" x2="213" y2="105" stroke="#333" stroke-width="3"/>`;
    if (state === "adp" && p > .2 && p < 1) g += `<g transform="translate(410 70) scale(${.6 + p})" opacity="${1 - p * .5}"><path d="M0 -26 L6 -6 L26 -6 L10 6 L16 26 L0 14 L-16 26 L-10 6 L-26 -6 L-6 -6 Z" fill="#fff3a0" stroke="#f39c12" stroke-width="2"/></g>`;
    g += `<text x="260" y="186" text-anchor="middle" font-size="15" font-weight="800" fill="${state === "adp" && p >= 1 ? "#9b1c31" : "#1a6e3c"}">${state === "adp" && p >= 1 ? "ADP + P: energy was released (battery used)" : "ATP = adenosine TRIphosphate (3 phosphates): charged battery"}</text>`;
    if (state === "adp" && p >= 1) g += `<text x="445" y="40" text-anchor="middle" font-size="13" font-weight="800" fill="#b45309">⚡ ENERGY for the cell!</text>`;
    return g;
  }
  BT.atpmodel = {
    html(b, st) { const s = st.s || "atp";
      return `<div class="ap"><h4>${b.title || "ATP: the cell’s rechargeable battery"}</h4><svg class="sc" viewBox="0 0 520 200" role="img" aria-label="ATP molecule">${atpSVG(s, 1)}</svg>
        <div class="ap-btns"><button type="button" class="btn ${s === "atp" ? "pulse" : ""}" data-snap ${s === "atp" ? "" : "disabled"}>⚡ Snap off the last phosphate</button><button type="button" class="btn ghost" data-charge ${s === "adp" ? "" : "disabled"}>🔋 Recharge it (energy from glucose, in the mitochondria)</button></div>
        <p class="mu small">Times recharged: <b>${st.n || 0}</b>. ${(st.n || 0) >= 2 ? "✅ Your body recycles about its own body weight in ATP every day! Each ATP is used and recharged over and over." : "Snap and recharge it at least twice."}</p></div>`; },
    wire(root, b, st, save, redraw) {
      const svg = $("svg", root), go = (to, done) => tween(ms(1100), p => svg.innerHTML = atpSVG(to, to === "adp" ? p : p), done);
      const sn = $("[data-snap]", root); if (sn) sn.onclick = () => { sn.disabled = true; tween(ms(1100), p => svg.innerHTML = atpSVG("adp", p), () => { st.s = "adp"; save(); redraw(); }); };
      const ch = $("[data-charge]", root); if (ch) ch.onclick = () => { ch.disabled = true; tween(ms(900), p => svg.innerHTML = atpSVG("adp", 1 - p), () => { st.s = "atp"; st.n = (st.n || 0) + 1; save(); redraw(); }); };
      void go;
    },
    text: (b, st) => "Recharged " + (st.n || 0) + " times"
  };

  /* ================= MAKE ATP: cellular respiration ================= */
  const MAKE = { gly: 2, krebs: 2, etc: 32, total: 36, no: 2 };
  window.ATP_DATA = { make: MAKE };
  function respSVG(run, stage, p) {   /* run: "o2" | "no"; stage 0..3 done; p progress of the CURRENT stage animation */
    let g = `<rect width="560" height="270" fill="#fff6f8"/><text x="18" y="24" font-size="13" font-weight="800" fill="#9b1c31">CYTOPLASM ${'(citoplasma)'}</text>`;
    g += `<ellipse cx="400" cy="150" rx="145" ry="98" fill="#ffd9b0" stroke="#b5601a" stroke-width="5"/><path d="M285 150 q15 -40 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" stroke="#b5601a" stroke-width="3" fill="none"/><text x="400" y="86" text-anchor="middle" font-size="13" font-weight="800" fill="#7a3d00">MITOCHONDRION ${'(mitocondria)'}</text>`;
    const s = stage, q = p;
    /* glucose → 2 pyruvate */
    if (s === 0 && q === 0) g += hexG(110, 150, 34, "#ffd166", "glucose") + `<text x="110" y="205" text-anchor="middle" font-size="11" fill="#555">C₆H₁₂O₆</text>`;
    const pyr = (x, y, lab = "pyruvate", col = "#ffb37a") => `<polygon points="${x - 22},${y + 14} ${x},${y - 20} ${x + 22},${y + 14}" fill="${col}" stroke="#a0521a" stroke-width="2.5"/><text x="${x}" y="${y + 30}" text-anchor="middle" font-size="10" font-weight="800" fill="#7a3d00">${lab}</text>`;
    if (s === 0 && q > 0) { const d = 40 * q; g += pyr(110, 150 - d) + pyr(110, 150 + d); }
    if (s === 1) { if (q === 0 || run === "no") { if (run === "no" && q > 0) g += pyr(110, 110, q > .5 ? "lactic acid" : "pyruvate", q > .5 ? "#f4a6b8" : "#ffb37a") + pyr(110, 190, q > .5 ? "lactic acid" : "pyruvate", q > .5 ? "#f4a6b8" : "#ffb37a"); else g += pyr(110, 110) + pyr(110, 190); }
      else { const x = 110 + 230 * Math.min(1, q * 1.6); g += pyr(x, 110 + 30 * Math.min(1, q * 1.6)) + pyr(x, 190 - 30 * Math.min(1, q * 1.6)); if (q > .55) { const a = (q - .55) * 14; g += `<circle cx="400" cy="150" r="38" fill="none" stroke="#e8368f" stroke-width="5" stroke-dasharray="20 10" transform="rotate(${a * 40} 400 150)"/><text x="400" y="155" text-anchor="middle" font-size="12" font-weight="800" fill="#9b1c31">Krebs</text>`; [0, 1, 2].forEach(i => g += `<text x="${400 + 60 + i * 18}" y="${100 - (q - .55) * 120 - i * 10}" font-size="11" font-weight="800" fill="#6b7280">CO₂</text>`); } } }
    if (s >= 2 && run === "o2") { g += `<circle cx="400" cy="150" r="38" fill="none" stroke="#e8368f" stroke-width="5" stroke-dasharray="20 10"/><text x="400" y="155" text-anchor="middle" font-size="12" font-weight="800" fill="#9b1c31">Krebs</text>`;
      if (s === 2) { g += [0, 1, 2, 3, 4, 5].map(i => `<circle cx="${285 + ((q * 260 + i * 45) % 230)}" cy="${150 + Math.sin(i + q * 9) * 4}" r="5" fill="#2b7de9"/>`).join("") + `<text x="300" y="${40 + q * 70}" font-size="12" font-weight="800" fill="#2b7de9">O₂</text><text x="470" y="${215 - q * 0}" font-size="12" font-weight="800" fill="#1f6f99">${q > .5 ? "💧 H₂O" : ""}</text>`;
        g += `<g transform="translate(470 170) rotate(${q * 720})"><rect x="-10" y="-10" width="20" height="20" rx="4" fill="#8a54e0"/></g><text x="470" y="200" text-anchor="middle" font-size="10" font-weight="800" fill="#5b2d91">ATP synthase</text>`; } }
    if (s === 2 && run === "no") g += `<rect x="150" y="238" width="260" height="26" rx="8" fill="#fff" stroke="#9b1c31"/><text x="280" y="256" text-anchor="middle" font-size="12" font-weight="800" fill="#9b1c31">❌ No oxygen: the ETC is stopped</text>`;
    /* flying ATP icons */
    const made = (s === 0 ? 2 : s === 1 ? (run === "o2" ? 2 : 0) : s === 2 ? 32 : 0);
    if (q > 0 && q < 1 && made) { const n = Math.min(made, 12); for (let i = 0; i < n; i++) { const f = clamp(q * 1.4 - i / n * .4, 0, 1), sx = s === 0 ? 110 : 400, sy = 150; g += atpIcon(sx + (520 - sx) * f, sy + (30 - sy) * f, 1, f < 1 ? 1 : 0); } }
    return g;
  }
  BT.atpmake = {
    html(b, st) {
      const run = st.run || "o2", stage = (st.stage || {})[run] || 0, runs = st.runs || {}, total = st.tot || 0;
      const steps = run === "o2" ? [["gly", "1. Glycolysis (cytoplasm)"], ["krebs", "2. Krebs cycle (mitochondria)"], ["etc", "3. Electron transport chain (mitochondria, needs O₂)"]] : [["gly", "1. Glycolysis (cytoplasm)"], ["ferm", "2. Fermentation (cytoplasm, no O₂)"], ["etc", "3. Electron transport chain (mitochondria, needs O₂)"]];
      const done = run === "o2" ? stage >= 3 : stage >= 2;
      let h = `<div class="ap"><h4>${b.title || "Power Up: break down glucose"}</h4>
        <div class="ap-btns"><span class="mu small" style="align-self:center;font-weight:800">Oxygen:</span><button type="button" class="ap-chip ${run === "o2" ? "on" : ""}" data-run="o2" ${st.busy ? "disabled" : ""}>🫁 Oxygen available ${runs.o2 != null ? "✓" : ""}</button><button type="button" class="ap-chip ${run === "no" ? "on" : ""}" data-run="no" ${st.busy ? "disabled" : ""}>🚫 No oxygen (sprinting hard) ${runs.no != null ? "✓" : ""}</button></div>
        <div class="ap-row"><div><svg class="sc" viewBox="0 0 560 270" role="img" aria-label="Cellular respiration in a cell">${respSVG(run, stage, 0)}</svg></div><div>
          ${bat(total, 36, "made from 1 glucose")}
          <div class="ap-jobs" style="margin-top:8px">${steps.map(([k, lab], i) => { const did = i < stage, blocked = run === "no" && k === "etc", next = i === stage && !done;
            return `<button type="button" class="ap-job ${did ? "done" : ""} ${next && !blocked ? "pulse" : ""}" data-stp="${k}" ${did || st.busy ? "disabled" : ""}><span class="ic">${did ? "✅" : blocked ? "🚫" : "▶"}</span><span>${lab}</span>${did ? `<span class="cost">+${k === "gly" ? 2 : k === "krebs" ? 2 : k === "etc" ? 32 : 0} ATP</span>` : ""}</button>`; }).join("")}</div>
          <div class="ap-msg ${st.msg && st.msg.bad ? "bad" : ""}" style="margin-top:8px" aria-live="polite">${st.msg ? st.msg.t : done ? `✅ <b>Run complete:</b> ${run === "o2" ? "with oxygen, 1 glucose made about <b>36 ATP</b>." : "without oxygen, 1 glucose made only <b>2 ATP</b>, and lactic acid built up (that’s the burn in your muscles)."} ${runs.o2 != null && runs.no != null ? "Now fill in the data table." : "Now try the other oxygen setting."}` : "Tap the steps in order to break down 1 glucose."}</div>
          ${done ? `<div class="btnrow"><button type="button" class="btn ghost" data-again>↺ Run again</button></div>` : ""}</div></div>`;
      const r = st.r || {}, chk = !!st.checked;
      const ROWS = [["gly", "ATP made by glycolysis", "num", MAKE.gly], ["glyLoc", "Where glycolysis happens", "loc", "Cytoplasm"], ["krebs", "ATP made by the Krebs cycle", "num", MAKE.krebs], ["krebsLoc", "Where the Krebs cycle happens", "loc", "Mitochondria"], ["etc", "ATP made by the electron transport chain", "num", MAKE.etc], ["etcLoc", "Where the electron transport chain happens", "loc", "Mitochondria"], ["total", "TOTAL ATP from 1 glucose WITH oxygen", "num", MAKE.total], ["no", "TOTAL ATP from 1 glucose WITHOUT oxygen", "num", MAKE.no]];
      const ok = (row) => { const v = r[row[0]]; return row[2] === "num" ? v !== "" && v != null && Math.abs(+v - row[3]) <= (row[0] === "total" ? 2 : row[0] === "etc" ? 2 : 0) : v === row[3]; };
      h += `<div class="ap-tw"><table class="ap-tbl"><thead><tr><th>Data table</th><th>My answer</th></tr></thead><tbody>${ROWS.map(row => `<tr><td>${row[1]}</td><td class="${chk ? (ok(row) ? "ok" : "no") : ""}">${row[2] === "num" ? `<input inputmode="numeric" data-af="${row[0]}" value="${esc(r[row[0]] ?? "")}" ${chk ? "disabled" : ""}>` : `<select data-af="${row[0]}" ${chk ? "disabled" : ""}><option value="">Choose…</option>${["Cytoplasm", "Mitochondria", "Nucleus", "Chloroplast"].map(o => `<option ${r[row[0]] === o ? "selected" : ""}>${o}</option>`).join("")}</select>`}</td></tr>`).join("")}</tbody></table></div>`;
      h += chk ? `<p class="score">Data recorded correctly: <b>${ROWS.filter(ok).length} / ${ROWS.length}</b>. (Scientists measure about 30–38 ATP per glucose; we use 36.)</p><div class="btnrow"><button class="btn ghost" data-afix>✏️ Fix my red boxes</button></div>`
        : `<div class="btnrow"><button class="btn" data-acheck>Check my data table</button><span class="msg">${runs.o2 != null && runs.no != null ? "" : "Do both runs (with and without oxygen) first."}</span></div>`;
      st._rows = ROWS.filter(ok).length;
      return h + `</div>`;
    },
    wire(root, b, st, save, redraw) {
      $$("[data-run]", root).forEach(x => x.onclick = () => { if (st.busy) return; st.run = x.dataset.run; st.stage = st.stage || {}; st.stage[st.run] = 0; st.tot = 0; st.msg = null; save(); redraw(); });
      $$("[data-af]", root).forEach(x => { const ev = x.tagName === "SELECT" ? "change" : "input"; x.addEventListener(ev, () => { (st.r = st.r || {})[x.dataset.af] = x.value.trim(); save(); }); });
      const again = $("[data-again]", root); if (again) again.onclick = () => { st.stage[st.run || "o2"] = 0; st.tot = 0; st.msg = null; save(); redraw(); };
      $$("[data-stp]", root).forEach(x => x.onclick = () => {
        const run = st.run || "o2"; st.stage = st.stage || {}; const stage = st.stage[run] || 0, k = x.dataset.stp;
        const order = run === "o2" ? ["gly", "krebs", "etc"] : ["gly", "ferm"];
        if (run === "no" && k === "etc") { st.msg = { bad: true, t: "🚫 The electron transport chain needs <b>oxygen</b> to accept the electrons at the end. With no oxygen, it stops, so the cell switches to fermentation." }; save(); redraw(); return; }
        if (order[stage] !== k) { st.msg = { bad: true, t: `❌ Not yet. ${stage === 0 ? "Every breakdown of glucose starts with <b>glycolysis</b> in the cytoplasm." : "Go in order: glycolysis → Krebs cycle → electron transport chain."}` }; save(); redraw(); return; }
        st.busy = true; st.msg = { t: k === "gly" ? "✅ Glycolysis splits glucose into 2 pyruvate in the cytoplasm: +2 ATP. It does NOT need oxygen." : k === "krebs" ? "✅ In the Krebs cycle, pyruvate is broken down in the mitochondria. CO₂ is released (you breathe it out): +2 ATP." : k === "etc" ? "✅ The electron transport chain uses oxygen. Oxygen joins with electrons and H⁺ to make water. ATP synthase spins and makes about 32 ATP!" : "✅ Fermentation turns pyruvate into lactic acid so glycolysis can keep going. It makes no extra ATP." };
        const svg = $("svg.sc", root), gain = k === "gly" ? 2 : k === "krebs" ? 2 : k === "etc" ? 32 : 0, base = st.tot || 0;
        $$("[data-stp],[data-run]", root).forEach(q => q.disabled = true);
        const bar = $(".ap-bat i", root), num = $(".ap-bat b", root);
        tween(ms(k === "etc" ? 2600 : 1600), p => { if (svg) svg.innerHTML = respSVG(run, stage, p); const v = Math.round(base + gain * p); if (num) num.textContent = v; if (bar) bar.style.width = clamp(v / 36 * 100, 0, 100) + "%"; },
          () => { st.tot = base + gain; st.stage[run] = stage + 1; st.busy = false; const fin = run === "o2" ? stage + 1 >= 3 : stage + 1 >= 2; if (fin) { (st.runs = st.runs || {})[run] = st.tot; st.msg = null; } save(); redraw(); });
      });
      const c = $("[data-acheck]", root); if (c) c.onclick = () => { const r = st.r || {}; if (["gly", "glyLoc", "krebs", "krebsLoc", "etc", "etcLoc", "total", "no"].some(k => r[k] == null || r[k] === "")) { $(".msg", root).textContent = "Fill in every box first."; return; } st.checked = true; save(); redraw(); };
      const f = $("[data-afix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
    },
    score(b, st) { return { max: b.max || 5, pts: st.checked ? Math.round((b.max || 5) * (st._rows || 0) / 8) : 0, label: "ATP data" }; },
    text(b, st) { const r = st.r || {}; return Object.entries(r).map(([k, v]) => k + "=" + v).join(", "); }
  };

  /* ================= SPEND ATP: cell jobs ================= */
  const JOB = {
    pump: { ic: "🚪", name: "Pump Na⁺ out and K⁺ in (active transport)", cost: 3, anim: "pump", why: "<b>Active transport</b> moves substances AGAINST their concentration gradient (from low to high). That takes energy: 1 ATP for each turn of the sodium–potassium pump. Your nerve cells do this all the time." },
    muscle: { ic: "💪", name: "Contract a muscle fiber", cost: 4, anim: "muscle", why: "Myosin heads use ATP to grab the actin fibers and pull. The fibers slide together, and the muscle gets shorter (contracts)." },
    dna: { ic: "🧬", name: "Copy the DNA before the cell divides", cost: 5, anim: "dna", why: "Unzipping DNA and adding new bases one at a time (DNA replication) takes energy from ATP and similar molecules." },
    enzyme: { ic: "🔑", name: "Use an enzyme to join two molecules", cost: 2, anim: "enzyme", why: "Enzymes are catalysts: they speed up reactions by lowering the activation energy. Reactions that BUILD bigger molecules still need energy, so the enzyme uses ATP to snap the pieces together." },
    protein: { ic: "🏗️", name: "Build a protein at a ribosome", cost: 4, anim: "protein", why: "The ribosome reads the mRNA and links amino acids into a chain. Each new link uses energy." },
    vesicle: { ic: "🚚", name: "Ship a vesicle along the cytoskeleton", cost: 2, anim: "vesicle", why: "Motor proteins “walk” along the cytoskeleton like tiny legs, using 1 ATP for every step, to carry vesicles where they need to go." },
    pumpP: { ic: "🌱", name: "Pump minerals into a root cell (active transport)", cost: 3, anim: "pump", lab: ["mineral", "mineral"], why: "Root cells pump minerals in from the soil even when there are already more inside. Moving against the gradient takes ATP." },
    cellulose: { ic: "🧱", name: "Build cellulose for a new cell wall", cost: 3, anim: "chain", why: "Plants link glucose molecules into long cellulose chains to build cell walls. Building big molecules takes energy." },
    stream: { ic: "🔄", name: "Stream chloroplasts around the cell", cost: 2, anim: "stream", why: "Motor proteins pull the chloroplasts along the cytoskeleton toward the light. Every step uses ATP." },
    secrete: { ic: "🪵", name: "Release digestive enzymes onto a log", cost: 2, anim: "secrete", why: "Fungi digest food OUTSIDE their cells. They package enzymes into vesicles and release them (exocytosis), which takes ATP." },
    flag: { ic: "🌀", name: "Spin the flagellum to swim", cost: 3, anim: "flag", why: "A bacterium’s flagellum is a spinning motor. It spins using energy from the cell." },
    pumpB: { ic: "🍬", name: "Pump sugar into the cell", cost: 3, anim: "pump", lab: ["sugar", "sugar"], why: "Bacteria pump food molecules in from their surroundings, even against the gradient. That active transport takes ATP." }
  };
  const ORG = {
    human: { e: "🧍", name: "Human muscle cell", photo: false, food: "from the food you eat (glucose in your blood)", resp: "in its mitochondria", jobs: ["pump", "muscle", "dna", "enzyme", "protein", "vesicle"] },
    plant: { e: "🌻", name: "Sunflower leaf cell", photo: true, food: "from its OWN chloroplasts (photosynthesis), but it still has to break it down", resp: "in its mitochondria", jobs: ["pumpP", "cellulose", "stream", "dna"] },
    dog: { e: "🐕", name: "Dog muscle cell", photo: false, food: "from the dog food it eats", resp: "in its mitochondria", jobs: ["muscle", "pump", "protein"] },
    fungus: { e: "🍄", name: "Mushroom cell", photo: false, food: "from the dead log it digests and absorbs", resp: "in its mitochondria", jobs: ["secrete", "protein", "dna"] },
    bacteria: { e: "🦠", name: "E. coli bacterium", photo: false, food: "from its surroundings (absorbed through its membrane)", resp: "across its cell membrane (bacteria have NO mitochondria)", jobs: ["flag", "pumpB", "dna"] }
  };
  window.ATP_DATA.jobs = JOB; window.ATP_DATA.orgs = ORG;
  function jobSVG(j, p) {
    const J = JOB[j]; let g = `<rect width="360" height="200" fill="#fbfcff"/>`;
    if (J.anim === "pump") { const a = J.lab ? J.lab[0] : "Na⁺", b2 = J.lab ? "" : "K⁺";
      g += `<rect x="0" y="85" width="360" height="30" fill="#ffe0c2"/><line x1="0" y1="85" x2="360" y2="85" stroke="#e08a00" stroke-width="3"/><line x1="0" y1="115" x2="360" y2="115" stroke="#e08a00" stroke-width="3"/><text x="8" y="22" font-size="11" font-weight="800" fill="#555">OUTSIDE the cell</text><text x="8" y="190" font-size="11" font-weight="800" fill="#555">INSIDE the cell</text>`;
      g += `<rect x="160" y="70" width="40" height="60" rx="12" fill="#8a54e0" stroke="#5b2d91" stroke-width="3"/><text x="180" y="146" text-anchor="middle" font-size="10" font-weight="800" fill="#5b2d91">pump protein</text>`;
      g += [...Array(9)].map((_, i) => `<circle cx="${30 + i * 36}" cy="${40 + (i % 2) * 12}" r="7" fill="#f39c12"/>`).join("") + `<text x="300" y="24" font-size="10" font-weight="800" fill="#b45309">lots of ${a} already</text>`;
      const cyc = Math.min(2, Math.floor(p * 3)), f = (p * 3) % 1;
      for (let k = 0; k < 3; k++) { const y = k < cyc ? 30 : k === cyc ? 160 - 130 * f : 160, x = k <= cyc ? 180 + (k < cyc ? (k - 1) * 14 : 0) : 120 + k * 20; g += `<circle cx="${x}" cy="${y}" r="7" fill="#f39c12" stroke="#7a3d00" stroke-width="1.5"/>`; }
      if (b2) for (let k = 0; k < 2; k++) { const y = k < cyc ? 175 : k === cyc ? 30 + 140 * f : 30; g += `<circle cx="${190 + k * 10}" cy="${y}" r="6" fill="#2b7de9"/>`; }
      g += atpIcon(220, 150 - 30 * f, 1, 1 - f) + `<text x="270" y="155" font-size="10" font-weight="800" fill="#7a3d00">ATP → ADP</text>`; }
    if (J.anim === "muscle") { const c = Math.sin(Math.min(1, p * 1.3) * Math.PI / 2) * 35, zl = 30 + c, zr = 330 - c;
      g += `<line x1="${zl}" y1="40" x2="${zl}" y2="160" stroke="#13294b" stroke-width="6"/><line x1="${zr}" y1="40" x2="${zr}" y2="160" stroke="#13294b" stroke-width="6"/>`;
      [60, 100, 140].forEach(y => { g += `<line x1="${zl}" y1="${y - 12}" x2="${zl + 115}" y2="${y - 12}" stroke="#e5627d" stroke-width="5"/><line x1="${zr}" y1="${y + 12}" x2="${zr - 115}" y2="${y + 12}" stroke="#e5627d" stroke-width="5"/><line x1="110" y1="${y}" x2="250" y2="${y}" stroke="#7a3d00" stroke-width="9"/>`;
        for (let k = 0; k < 6; k++) { const x = 118 + k * 24, ang = Math.sin(p * 30 + k) > 0 ? 30 : -10; g += `<line x1="${x}" y1="${y}" x2="${x + 8 * Math.cos(ang * Math.PI / 180)}" y2="${y - 12}" stroke="#7a3d00" stroke-width="3"/>`; } });
      g += `<text x="180" y="190" text-anchor="middle" font-size="11" font-weight="800" fill="#555">red = actin · brown = myosin · the Z lines move together</text>` + atpIcon(180, 22, 1, 1 - p); }
    if (J.anim === "dna") { const n = 9, fork = p * n;
      for (let i = 0; i < n; i++) { const x = 30 + i * 36, open = i < fork, b0 = "ATGCCGTAG"[i], pr = { A: "T", T: "A", G: "C", C: "G" }[b0], C = { A: "#d0453a", T: "#e0a100", C: "#1aa36f", G: "#2b7de9" };
        g += `<rect x="${x - 12}" y="${open ? 42 : 80}" width="24" height="20" rx="4" fill="${C[b0]}"/><text x="${x}" y="${open ? 57 : 95}" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">${b0}</text><rect x="${x - 12}" y="${open ? 138 : 100}" width="24" height="20" rx="4" fill="${C[pr]}"/><text x="${x}" y="${open ? 153 : 115}" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">${pr}</text>`;
        if (open) g += `<rect x="${x - 12}" y="64" width="24" height="20" rx="4" fill="${C[pr]}" stroke="#f28c28" stroke-width="2"/><text x="${x}" y="79" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">${pr}</text><rect x="${x - 12}" y="116" width="24" height="20" rx="4" fill="${C[b0]}" stroke="#f28c28" stroke-width="2"/><text x="${x}" y="131" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">${b0}</text>`; }
      const fx = 30 + Math.min(fork, n - 1) * 36; g += `<ellipse cx="${fx}" cy="100" rx="16" ry="26" fill="#8a54e0" opacity=".75"/><text x="${Math.min(fx, 300)}" y="186" text-anchor="middle" font-size="10" font-weight="800" fill="#5b2d91">DNA polymerase</text>` + atpIcon(Math.min(fx, 320), 20, .9, .9); }
    if (J.anim === "enzyme") { const s = Math.min(1, p / .45), bind = p > .45 && p < .7, out = Math.max(0, (p - .7) / .3);
      g += `<path d="M130 70 h100 v70 h-100 v-20 h30 v-12 h-14 v-10 h14 v-8 h-30z" fill="#9fd6f4" stroke="#1f6f99" stroke-width="3"/><text x="180" y="160" text-anchor="middle" font-size="11" font-weight="800" fill="#0b3d5c">enzyme (catalyst)</text>`;
      if (p <= .7) g += `<circle cx="${40 + 105 * s}" cy="${95 + 10 * (1 - s)}" r="10" fill="#e5627d"/><rect x="${300 - 140 * s}" y="${100 - 6}" width="18" height="14" rx="3" fill="#1aa36f"/>`;
      if (bind) g += `<text x="180" y="50" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">⚡ ATP snaps them together</text>` + atpIcon(250, 50, 1, 1);
      if (out > 0) g += `<g transform="translate(${180 + 120 * out} ${100 + 40 * out})"><circle cx="-8" cy="0" r="10" fill="#e5627d"/><rect x="2" y="-7" width="18" height="14" rx="3" fill="#1aa36f"/></g><text x="300" y="185" text-anchor="middle" font-size="10" font-weight="800" fill="#555">new product</text>`;
      g += `<text x="20" y="22" font-size="10" font-weight="800" fill="#555">The enzyme is not used up: it can do this again!</text>`; }
    if (J.anim === "protein") { const x = 40 + 260 * p;
      g += `<line x1="20" y1="150" x2="340" y2="150" stroke="#e0a100" stroke-width="5"/>${[...Array(10)].map((_, i) => `<text x="${30 + i * 32}" y="172" font-size="9" font-weight="800" fill="#7a5600">${["AUG", "GCU", "UUC", "GAA", "CCA", "UGG", "AAA", "GGC", "UAC", "UAA"][i]}</text>`).join("")}`;
      g += `<ellipse cx="${x}" cy="128" rx="34" ry="20" fill="#9fd6a8" stroke="#2f8a4b" stroke-width="3"/><ellipse cx="${x}" cy="98" rx="26" ry="16" fill="#c3e8c9" stroke="#2f8a4b" stroke-width="3"/><text x="${x}" y="132" text-anchor="middle" font-size="9" font-weight="800" fill="#1d5c36">ribosome</text>`;
      const n = Math.floor(p * 9) + 1; for (let i = 0; i < n; i++) g += `<circle cx="${x - i * 18}" cy="${60 - Math.sin(i * .9) * 10}" r="8" fill="${["#e5627d", "#2b7de9", "#e0a100", "#8a54e0", "#1aa36f"][i % 5]}"/>`;
      g += atpIcon(x + 46, 70, .9, .9) + `<text x="180" y="22" text-anchor="middle" font-size="10" font-weight="800" fill="#555">amino acids join into a protein chain</text>`; }
    if (J.anim === "vesicle" || J.anim === "stream" || J.anim === "secrete") { const x = 40 + 250 * p, legL = Math.sin(p * 40) * 6, green = J.anim === "stream";
      g += `<line x1="10" y1="140" x2="350" y2="140" stroke="#6b7280" stroke-width="6" stroke-dasharray="14 4"/><text x="16" y="165" font-size="10" font-weight="800" fill="#555">cytoskeleton track</text>`;
      if (J.anim === "secrete") g += `<rect x="318" y="20" width="12" height="170" fill="#e08a00"/><text x="345" y="16" text-anchor="end" font-size="9" font-weight="800" fill="#7a3d00">membrane</text>`;
      g += `<line x1="${x - 6}" y1="120" x2="${x - 10 + legL}" y2="138" stroke="#8a54e0" stroke-width="4"/><line x1="${x + 6}" y1="120" x2="${x + 10 - legL}" y2="138" stroke="#8a54e0" stroke-width="4"/>`;
      g += green ? `<ellipse cx="${x}" cy="100" rx="26" ry="14" fill="#5fbf4a" stroke="#2f7a24" stroke-width="3"/>` : `<circle cx="${x}" cy="100" r="20" fill="#ffc2dd" stroke="#e8368f" stroke-width="3"/>${J.anim === "secrete" ? [0, 1, 2].map(i => `<circle cx="${x - 6 + i * 6}" cy="${100 + (i % 2) * 5}" r="3" fill="#9b1c31"/>`).join("") : ""}`;
      if (J.anim === "secrete" && p > .85) g += [0, 1, 2, 3].map(i => `<circle cx="${336 + (p - .85) * 120 + i * 4}" cy="${80 + i * 12}" r="3" fill="#9b1c31"/>`).join("");
      g += atpIcon(x, 60, .8, .9) + `<text x="180" y="22" text-anchor="middle" font-size="10" font-weight="800" fill="#555">a motor protein walks: 1 ATP per step</text>`; }
    if (J.anim === "chain") { const n = Math.floor(p * 8) + 1; g += `<rect x="0" y="0" width="360" height="26" fill="#3f8f3a"/><text x="180" y="18" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">cell wall</text>`;
      for (let i = 0; i < n; i++) g += hexG(40 + i * 38, 100, 16, "#ffe08a", "G") + (i ? `<line x1="${40 + i * 38 - 22}" y1="100" x2="${40 + i * 38 - 16}" y2="100" stroke="#7a5600" stroke-width="4"/>` : "");
      g += atpIcon(40 + n * 38, 70, .9, .9) + `<text x="180" y="170" text-anchor="middle" font-size="11" font-weight="800" fill="#555">glucose units linked into a cellulose chain</text>`; }
    if (J.anim === "flag") { const x = 60 + 160 * p; let fl = ""; for (let i = 0; i <= 30; i++) fl += (i ? "L" : "M") + (x + 70 + i * 3) + " " + (100 + Math.sin(i * .5 - p * 60) * (3 + i * .4));
      g += `<path d="${fl}" stroke="#8a5a1e" stroke-width="4" fill="none"/><rect x="${x - 60}" y="78" width="130" height="44" rx="22" fill="#f4d79c" stroke="#b77c2a" stroke-width="4"/><text x="${x + 5}" y="105" text-anchor="middle" font-size="10" font-weight="800" fill="#7a3d00">E. coli</text>` + atpIcon(x + 70, 60, .9, .9) + `<text x="180" y="180" text-anchor="middle" font-size="10" font-weight="800" fill="#555">the flagellum motor spins and pushes the cell forward</text>`; }
    return g;
  }
  BT.atpspend = {
    html(b, st) {
      const mode = b.mode || "cell", okeys = mode === "orgs" ? (b.orgs || ["plant", "dog", "fungus", "bacteria"]) : [b.org || "human"];
      const ok = st.org && okeys.includes(st.org) ? st.org : okeys[0], O = ORG[ok], S = (st.s = st.s || {})[ok] = (st.s[ok] || { atp: 0, glu: 2, done: {} });
      const o2 = st.o2 !== false, alld = O.jobs.every(j => S.done[j]);
      let h = `<div class="ap"><h4>${b.title || "Spend your ATP"}</h4>`;
      if (mode === "orgs") h += `<p class="mu small">Pick an organism. Burn glucose to make ATP, then use the ATP to finish all of its jobs. Do all ${okeys.length} organisms.</p><div class="ap-orgs">${okeys.map(k => { const s2 = (st.s || {})[k], d = s2 && ORG[k].jobs.every(j => s2.done[j]); return `<button type="button" class="ap-org ${k === ok ? "on" : ""} ${d ? "done" : ""}" data-org="${k}" ${st.busy ? "disabled" : ""}><span class="e">${ORG[k].e}</span>${ORG[k].name}</button>`; }).join("")}</div>`;
      h += `<div class="ap-msg" style="margin-bottom:8px">${O.e} <b>${O.name}</b> · Photosynthesis? <b>${O.photo ? "Yes 🌞" : "No"}</b> · Cellular respiration? <b>YES</b>, ${O.resp}. Its glucose comes ${O.food}.</div>`;
      h += `<div class="ap-row"><div><svg class="sc" viewBox="0 0 360 200" role="img" aria-label="Cell job animation">${st.cur && st.cur.o === ok ? jobSVG(st.cur.j, 1) : `<rect width="360" height="200" fill="#fbfcff"/><text x="180" y="95" text-anchor="middle" font-size="40">${O.e}</text><text x="180" y="135" text-anchor="middle" font-size="13" font-weight="800" fill="#555">Tap a job to spend ATP on it</text>`}</svg>
          <div class="ap-msg ${st.msg && st.msg.bad ? "bad" : st.msg ? "good" : ""}" style="margin-top:8px" aria-live="polite">${st.msg ? st.msg.t : "Step 1: burn glucose to fill your ATP battery. Step 2: spend ATP on each job."}</div></div>
        <div>${bat(S.atp, 40)}
          <p class="small" style="margin:6px 0">🍬 Glucose left: <b>${S.glu}</b></p>
          <div class="ap-btns"><button type="button" class="btn ${S.atp < 2 && S.glu ? "pulse" : ""}" data-burn ${S.glu && !st.busy ? "" : "disabled"}>🔥 Burn 1 glucose (cellular respiration)</button>
            <button type="button" class="ap-chip ${o2 ? "on" : ""}" data-o2>${o2 ? "🫁 Oxygen ON" : "🚫 Oxygen OFF"}</button>${!S.glu && !alld ? `<button type="button" class="ap-chip" data-more>🍽️ Get more food</button>` : ""}</div>
          <div class="ap-jobs">${O.jobs.map(j => { const J = JOB[j], d = S.done[j]; return `<button type="button" class="ap-job ${d ? "done" : ""}" data-job="${j}" ${d || st.busy ? "disabled" : ""}><span class="ic">${d ? "✅" : J.ic}</span><span>${J.name}</span><span class="cost">⚡ ${J.cost} ATP</span></button>`; }).join("")}</div>
          ${alld ? `<p class="score">🎉 All jobs done for the ${O.name}!</p>` : ""}</div></div></div>`;
      return h;
    },
    wire(root, b, st, save, redraw) {
      const mode = b.mode || "cell", okeys = mode === "orgs" ? (b.orgs || ["plant", "dog", "fungus", "bacteria"]) : [b.org || "human"];
      const ok = st.org && okeys.includes(st.org) ? st.org : okeys[0], O = ORG[ok], S = st.s[ok];
      $$("[data-org]", root).forEach(x => x.onclick = () => { st.org = x.dataset.org; st.msg = null; st.cur = null; save(); redraw(); });
      const o2b = $("[data-o2]", root); if (o2b) o2b.onclick = () => { st.o2 = st.o2 === false; save(); redraw(); };
      const more = $("[data-more]", root); if (more) more.onclick = () => { S.glu += 1; st.msg = { t: ok === "plant" ? "🌞 The leaf made another glucose by photosynthesis." : "🍽️ The organism took in more food: +1 glucose." }; save(); redraw(); };
      const burn = $("[data-burn]", root); if (burn) burn.onclick = () => {
        if (!S.glu) return; const o2 = st.o2 !== false, gain = o2 ? 36 : 2; st.busy = true; S.glu -= 1;
        const svg = $("svg.sc", root), num = $(".ap-bat b", root), bar = $(".ap-bat i", root), base = S.atp;
        $$("button", root).forEach(q => q.disabled = true);
        tween(ms(1500), p => { if (svg) svg.innerHTML = `<rect width="360" height="200" fill="#fff6f8"/>${hexG(70 + 60 * p, 100, 30 * (1 - p * .6), "#ffd166", p < .5 ? "glucose" : "")}<ellipse cx="250" cy="100" rx="80" ry="52" fill="#ffd9b0" stroke="#b5601a" stroke-width="4"/><text x="250" y="105" text-anchor="middle" font-size="12" font-weight="800" fill="#7a3d00">${ok === "bacteria" ? "cell membrane" : "mitochondria"}</text>${p > .4 ? `<text x="${250 - 60 * p}" y="${40 - 20 * p}" font-size="12" font-weight="800" fill="#6b7280">CO₂</text><text x="${300}" y="${170 + 10 * p}" font-size="12" font-weight="800" fill="#1f6f99">${o2 ? "H₂O" : "lactic acid"}</text>` : ""}${[...Array(o2 ? 10 : 2)].map((_, i) => atpIcon(250 + Math.cos(i) * 60 * p, 100 + Math.sin(i) * 60 * p, .9, p)).join("")}`;
          const v = Math.round(base + gain * p); if (num) num.textContent = v; if (bar) bar.style.width = clamp(v / 40 * 100, 0, 100) + "%"; },
          () => { S.atp = base + gain; st.busy = false; st.msg = { t: o2 ? `🔥 Cellular respiration with oxygen: 1 glucose → <b>+36 ATP</b>, plus CO₂ and water.` : `⚠️ No oxygen, so only glycolysis + fermentation: 1 glucose → <b>+2 ATP</b> (and lactic acid). That’s not much!` }; save(); redraw(); });
      };
      $$("[data-job]", root).forEach(x => x.onclick = () => {
        const j = x.dataset.job, J = JOB[j];
        if (S.atp < J.cost) { st.msg = { bad: true, t: `🔋 Not enough ATP! This job costs ${J.cost} ATP and you have ${S.atp}. ${S.glu ? "Burn a glucose first." : "Get more food, then burn it."}` }; save(); redraw(); return; }
        st.busy = true; S.atp -= J.cost; st.cur = { o: ok, j }; const svg = $("svg.sc", root);
        $$("button", root).forEach(q => q.disabled = true); const num = $(".ap-bat b", root), bar = $(".ap-bat i", root); if (num) num.textContent = S.atp; if (bar) bar.style.width = clamp(S.atp / 40 * 100, 0, 100) + "%";
        tween(ms(2600), p => { if (svg) svg.innerHTML = jobSVG(j, p); }, () => { S.done[j] = true; st.busy = false; st.msg = { t: `✅ ${J.why}` }; save(); redraw(); });
      });
      void O;
    },
    score(b, st) {
      const mode = b.mode || "cell", okeys = mode === "orgs" ? (b.orgs || ["plant", "dog", "fungus", "bacteria"]) : [b.org || "human"];
      const s = st.s || {}, jobs = okeys.flatMap(k => ORG[k].jobs.map(j => (s[k] || { done: {} }).done[j]));
      const n = jobs.filter(Boolean).length, max = b.max || (mode === "orgs" ? 4 : 3);
      return { max, pts: Math.round(max * n / jobs.length), label: mode === "orgs" ? "organism jobs" : "cell jobs" };
    },
    text(b, st) { const s = st.s || {}; return Object.entries(s).map(([k, v]) => `${k}: ${Object.keys(v.done || {}).join("/")}`).join(" | "); }
  };
});
