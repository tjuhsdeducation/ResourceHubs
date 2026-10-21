/* =====================================================================
   BROMOTHYMOL BLUE VIRTUAL LAB BLOCKS (no need to edit)
   bblab  : 8 test tubes (Elodea, snails, both, none) in light and dark.
            mode "predict" = choose predicted colors
            mode "run"     = run 24 hours (animated), then record the data
   iogrid : sort inputs and outputs of photosynthesis and cellular respiration
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$, esc } = H;
  /* Tube results are based on the classic BTB lab: BTB turns YELLOW when CO2 rises (more carbonic acid)
     and BLUE when CO2 is used up. All tubes start GREEN (a little CO2 was bubbled in). */
  const TUBES = [
    { n: 1, who: "BTB only", e: 0, s: 0, light: true, end: 0, ans: ["Green"], co2: "Same" },
    { n: 2, who: "Elodea", e: 1, s: 0, light: true, end: -1, ans: ["Blue"], co2: "Less" },
    { n: 3, who: "Snail", e: 0, s: 1, light: true, end: 1, ans: ["Yellow"], co2: "More" },
    { n: 4, who: "Elodea + Snail", e: 1, s: 1, light: true, end: -0.25, ans: ["Green", "Blue"], co2: "Same" },
    { n: 5, who: "BTB only", e: 0, s: 0, light: false, end: 0, ans: ["Green"], co2: "Same" },
    { n: 6, who: "Elodea", e: 1, s: 0, light: false, end: 0.8, ans: ["Yellow"], co2: "More" },
    { n: 7, who: "Snail", e: 0, s: 1, light: false, end: 1, ans: ["Yellow"], co2: "More" },
    { n: 8, who: "Elodea + Snail", e: 1, s: 1, light: false, end: 1, ans: ["Yellow"], co2: "More" }
  ];
  window.BB_TUBES = TUBES;
  const COLORS = ["Blue", "Green", "Yellow"];
  const mix = (a, b, t) => a.map((x, i) => Math.round(x + (b[i] - x) * t));
  const BLUE = [38, 98, 214], GREEN = [52, 160, 90], YELLOW = [232, 196, 38];
  const rgb = v => { const c = v < 0 ? mix(GREEN, BLUE, -v) : mix(GREEN, YELLOW, v); return `rgb(${c.join(",")})`; };

  if (!document.getElementById("bb-css")) {
    const css = document.createElement("style"); css.id = "bb-css";
    css.textContent = `
    .bb{border:3px solid var(--line);border-radius:22px;padding:14px 16px;background:var(--surface)}
    .bb h4{margin:0 0 6px}
    .bb-legend{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-weight:800;font-size:.9rem;margin:6px 0 12px}
    .bb-scale{flex:1;min-width:220px;height:18px;border-radius:999px;background:linear-gradient(90deg,${rgb(-1)},${rgb(0)},${rgb(1)});border:2px solid rgba(0,0,0,.15)}
    .bb-bench{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .bb-side{border-radius:18px;padding:10px 8px 8px;position:relative;overflow:hidden}
    .bb-side.light{background:linear-gradient(#fff7cf,#fffbe8);border:2px solid #f0d96a}
    .bb-side.dark{background:linear-gradient(#1d1a2b,#2b2740);border:2px solid #3b3552;color:#e9e4ff}
    .bb-side h5{margin:0 0 4px;font:700 1rem var(--display);text-align:center}
    .bb-rack{display:flex;justify-content:space-around;align-items:flex-end}
    .bb-tube{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:.8rem;font-weight:800;text-align:center;width:24%}
    .bb-tube svg{width:100%;max-width:74px;height:auto}
    .bb-tube select{font:inherit;font-size:.82rem;padding:3px 4px;border-radius:8px;border:2px solid var(--line);background:#fff;color:#1f2430;max-width:100%}
    .bb-ctrl{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:12px 0 4px}
    .bb-clock{font:700 1.2rem var(--display);background:var(--soft);border-radius:999px;padding:6px 14px}
    .bb-table{width:100%;border-collapse:collapse;margin-top:10px;font-size:.92rem}
    .bb-table th,.bb-table td{border:1px solid var(--line);padding:5px 6px;text-align:center}
    .bb-table th{background:var(--soft)}
    .bb-table td.ok{background:color-mix(in srgb,var(--ok) 16%,transparent)} .bb-table td.no{background:color-mix(in srgb,var(--bad) 14%,transparent)}
    .bb-table select{font:inherit;padding:3px;border-radius:8px;border:2px solid var(--line)}
    .bb-sw{display:inline-block;width:14px;height:14px;border-radius:4px;vertical-align:middle;margin-right:4px;border:1px solid rgba(0,0,0,.2)}
    .io-bank{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 12px}
    .io-chip{border:2px solid var(--line);background:var(--surface);border-radius:999px;padding:6px 12px;font-weight:800;cursor:pointer}
    .io-chip.on{border-color:var(--lc);box-shadow:0 0 0 3px color-mix(in srgb,var(--lc) 30%,transparent)}
    .io-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .io-proc{border:3px solid var(--line);border-radius:18px;padding:10px}
    .io-proc h5{margin:0 0 6px;font:700 1.05rem var(--display)}
    .io-proc small{color:var(--muted);font-weight:700}
    .io-cells{display:grid;grid-template-columns:1fr 1fr;gap:8px}
    .io-cell{min-height:92px;border:2px dashed var(--line);border-radius:14px;padding:6px;cursor:pointer;background:var(--soft)}
    .io-cell b{display:block;font-size:.82rem;text-transform:uppercase;letter-spacing:.04em;color:var(--muted)}
    .io-cell .io-chip{font-size:.85rem;padding:3px 9px;margin:3px 3px 0 0;display:inline-block}
    .io-cell.ok{border-color:var(--ok);border-style:solid} .io-cell.no{border-color:var(--bad);border-style:solid}
    @media (max-width:720px){.bb-bench,.io-grid{grid-template-columns:1fr}}`;
    document.head.appendChild(css);
  }

  function tubeSVG(t, v, tt, k) {
    const liquid = rgb(v), lit = t.light;
    let life = "";
    if (t.e) {
      life += `<path d="M37 150 C 33 125, 41 110, 36 90 M37 150 C 42 128, 33 112, 41 96" stroke="#2f8a3b" stroke-width="3.5" fill="none"/>` +
        [100, 112, 124, 136].map((y, i) => `<ellipse cx="${i % 2 ? 43 : 31}" cy="${y}" rx="6" ry="2.6" fill="#3fa34d" transform="rotate(${i % 2 ? -30 : 30} ${i % 2 ? 43 : 31} ${y})"/>`).join("");
      if (lit && tt > 0 && tt < 1) for (let i = 0; i < 4; i++) { const y = 140 - ((k * 40 + i * 25) % 95); life += `<circle cx="${36 + (i % 2 ? 4 : -3)}" cy="${y}" r="2.4" fill="#fff" opacity=".9"/>`; }
    }
    if (t.s) { const y = 156 - (tt * 30 + (k % 1) * 2); life += `<g transform="translate(${t.e ? 18 : 26} ${Math.min(156, y)})"><ellipse cx="9" cy="6" rx="10" ry="4" fill="#8a6a4a"/><circle cx="11" cy="1" r="6.5" fill="#c79b63" stroke="#7a5534" stroke-width="1.5"/><path d="M11 1 m-3 0 a3 3 0 1 0 3 -3" stroke="#7a5534" stroke-width="1.2" fill="none"/><path d="M0 5 l-3 -4 M2 4 l-1 -5" stroke="#8a6a4a" stroke-width="1.4"/></g>`; }
    return `<svg viewBox="0 0 74 190" role="img" aria-label="Tube ${t.n}: ${t.who}, ${t.light ? "light" : "dark"}">
      <rect x="20" y="4" width="34" height="12" rx="3" fill="#9a8f7a"/>
      <path d="M22 16 V160 a15 15 0 0 0 30 0 V16" fill="${liquid}" fill-opacity=".85" stroke="${lit ? "#5b5f6e" : "#cfc8ea"}" stroke-width="2.5"/>
      <path d="M22 16 V40 H52 V16" fill="#fff" fill-opacity=".55"/>
      ${life}
      <path d="M27 30 V150" stroke="#fff" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/>
      <text x="37" y="186" text-anchor="middle" font-size="13" font-weight="800" fill="${lit ? "#1f2430" : "#fff"}">#${t.n}</text></svg>`;
  }

  function predState(ctx) {
    const L = ctx.L, S = ctx.S;
    for (let i = 0; i < L.stations.length; i++) for (let j = 0; j < L.stations[i].blocks.length; j++) { const b = L.stations[i].blocks[j]; if (b.t === "bblab" && b.mode === "predict") return S.b[i + "-" + j] || {}; }
    return {};
  }

  BT.bblab = {
    html(b, st, ctx) {
      const run = b.mode === "run", tt = st.done ? 1 : (st.tt || 0), hours = Math.round(tt * 24);
      const cur = t => run ? t.end * tt : 0;
      const pred = run ? (predState(ctx).p || {}) : (st.p || {});
      const side = light => `<div class="bb-side ${light ? "light" : "dark"}"><h5>${light ? "☀️ Under the grow light" : "🌑 Inside a dark cabinet"}</h5><div class="bb-rack">${TUBES.filter(t => t.light === light).map(t => `<div class="bb-tube">${tubeSVG(t, cur(t), run ? tt : 0, 0)}<span>${t.who}</span>${run ? "" : `<select data-p="${t.n}" aria-label="Prediction for tube ${t.n}"><option value="">Predict…</option>${COLORS.map(c => `<option ${pred[t.n] === c ? "selected" : ""}>${c}</option>`).join("")}</select>`}</div>`).join("")}</div></div>`;
      let h = `<div class="bb"><h4>🧪 ${b.title || "Bromothymol Blue Lab"}</h4>
        <div class="bb-legend"><span>BTB color key:</span><span>Blue = LESS CO₂</span><span class="bb-scale" aria-hidden="true"></span><span>Yellow = MORE CO₂</span></div>
        <p class="mu small">All 8 tubes start <b style="color:${rgb(0)}">GREEN</b> (a little CO₂ was bubbled in) and are sealed with a stopper.</p>
        <div class="bb-bench">${side(true)}${side(false)}</div>`;
      if (!run) {
        const n = Object.values(pred).filter(Boolean).length;
        h += `<p class="mu small" style="margin-top:10px">Predictions made: <b>${n} of 8</b>. ${n === 8 ? "✅ All set! Explain your thinking below." : "Use the drop-down under each tube."}</p>`;
      } else {
        h += `<div class="bb-ctrl"><button class="btn" data-bbrun ${st.done || st.going ? "disabled" : ""}>${st.done ? "✅ 24 hours complete" : "▶ Start the 24-hour lab"}</button><span class="bb-clock">⏱ ${hours} h</span><span class="mu small">${st.done ? "Now record the color of every tube." : "Watch the tubes. Elodea in light gives off tiny bubbles."}</span></div>`;
        if (st.done) {
          const rec = st.r || {}, co = st.c || {}, chk = !!st.checked;
          h += `<table class="bb-table"><thead><tr><th>Tube</th><th>Contents</th><th>Light?</th><th>My prediction</th><th>Start</th><th>End color (observed)</th><th>CO₂ compared to start</th></tr></thead><tbody>` +
            TUBES.map(t => { const ok1 = t.ans.includes(rec[t.n]), ok2 = co[t.n] === t.co2;
              return `<tr><td><b>#${t.n}</b></td><td>${t.who}</td><td>${t.light ? "☀️ Light" : "🌑 Dark"}</td><td>${pred[t.n] ? `<span class="bb-sw" style="background:${rgb({ Blue: -1, Green: 0, Yellow: 1 }[pred[t.n]])}"></span>${pred[t.n]}` : "<span class='mu'>none</span>"}</td><td><span class="bb-sw" style="background:${rgb(0)}"></span>Green</td>
                <td class="${chk ? (ok1 ? "ok" : "no") : ""}"><select data-r="${t.n}" ${chk ? "disabled" : ""}><option value="">Choose…</option>${COLORS.map(c => `<option ${rec[t.n] === c ? "selected" : ""}>${c}</option>`).join("")}</select></td>
                <td class="${chk ? (ok2 ? "ok" : "no") : ""}"><select data-c="${t.n}" ${chk ? "disabled" : ""}><option value="">Choose…</option>${["More", "Less", "Same"].map(c => `<option ${co[t.n] === c ? "selected" : ""}>${c}</option>`).join("")}</select></td></tr>`; }).join("") + `</tbody></table>`;
          h += chk ? `<p class="score">Data recorded correctly: <b>${BT.bblab.score(b, st).pts} / ${BT.bblab.score(b, st).max}</b>. Green cells match the lab. Look closely at any red cells, then use these results in the next stations.</p>`
            : `<div class="btnrow"><button class="btn" data-bbcheck>Check my data table</button><span class="msg"></span></div>`;
        }
      }
      return h + "</div>";
    },
    wire(root, b, st, save, redraw, ctx) {
      $$("[data-p]", root).forEach(s => s.onchange = () => { (st.p = st.p || {})[s.dataset.p] = s.value; save(); redraw(); });
      $$("[data-r]", root).forEach(s => s.onchange = () => { (st.r = st.r || {})[s.dataset.r] = s.value; save(); });
      $$("[data-c]", root).forEach(s => s.onchange = () => { (st.c = st.c || {})[s.dataset.c] = s.value; save(); });
      const go = $("[data-bbrun]", root);
      if (go) go.onclick = () => {
        st.going = true; const t0 = performance.now(), dur = window.BB_FAST ? 300 : 9000;
        const tubes = $$(".bb-tube svg", root), lightList = TUBES.filter(t => t.light).concat(TUBES.filter(t => !t.light));
        const step = now => {
          if (!root.isConnected) return;
          const tt = Math.min(1, (now - t0) / dur), k = (now - t0) / 1000;
          tubes.forEach((svg, i) => { const t = lightList[i]; svg.outerHTML = tubeSVG(t, t.end * tt, tt, k); });
          const c = $(".bb-clock", root); if (c) c.textContent = `⏱ ${Math.round(tt * 24)} h`;
          if (tt < 1) { requestAnimationFrame(step); $$(".bb-tube svg", root).forEach((s, i) => tubes[i] = s); }
          else { st.done = true; st.going = false; save(); redraw(); }
        };
        go.disabled = true; requestAnimationFrame(step);
      };
      const c = $("[data-bbcheck]", root);
      if (c) c.onclick = () => { const r = st.r || {}, co = st.c || {}; if (TUBES.some(t => !r[t.n] || !co[t.n])) { $(".msg", root).textContent = "Fill in every box first."; return; } st.checked = true; save(); redraw(); };
    },
    score(b, st) {
      if (b.mode === "predict") { const n = Object.values(st.p || {}).filter(Boolean).length; return { max: 2, pts: n === 8 ? 2 : n >= 4 ? 1 : 0, label: "predictions" }; }
      const r = st.r || {}, co = st.c || {}, right = TUBES.filter(t => t.ans.includes(r[t.n])).length + TUBES.filter(t => co[t.n] === t.co2).length;
      return { max: 4, pts: st.checked ? Math.round(4 * right / 16) : 0, label: "lab data" };
    },
    text(b, st) {
      if (b.mode === "predict") return "Predictions: " + TUBES.map(t => `#${t.n}=${(st.p || {})[t.n] || "-"}`).join(" ");
      return "Observed: " + TUBES.map(t => `#${t.n}=${(st.r || {})[t.n] || "-"}/${(st.c || {})[t.n] || "-"}`).join(" ");
    }
  };

  /* ---------- inputs and outputs grid ---------- */
  BT.iogrid = {
    html(b, st) {
      const pl = st.pl || {}, sel = st.sel, chk = !!st.checked;
      const cells = [["ps-in", "Inputs (reactants)"], ["ps-out", "Outputs (products)"], ["cr-in", "Inputs (reactants)"], ["cr-out", "Outputs (products)"]];
      const cell = ([id, lab]) => { const items = pl[id] || [], key = b.key[id], ok = chk && items.length === key.length && key.every(x => items.includes(x));
        return `<div class="io-cell ${chk ? (ok ? "ok" : "no") : ""}" data-cell="${id}"><b>${lab}</b>${items.map(x => `<span class="io-chip" data-rm="${id}|${x}">${x} ✕</span>`).join("")}${chk && !ok ? `<div class="mu small">Answer: ${key.join(", ")}</div>` : ""}</div>`; };
      return `<div class="bb"><h4>🔁 ${b.title}</h4><p class="mu">${b.how}</p>
        <div class="io-bank">${b.terms.map(x => `<button class="io-chip ${sel === x ? "on" : ""}" data-term="${x}" ${chk ? "disabled" : ""}>${x}</button>`).join("")}</div>
        <div class="io-grid"><div class="io-proc"><h5>🌿 Photosynthesis</h5><small>happens in the chloroplast</small><div class="io-cells">${cell(cells[0])}${cell(cells[1])}</div></div>
        <div class="io-proc"><h5>⚡ Cellular respiration</h5><small>happens in the mitochondria (glycolysis starts in the cytoplasm)</small><div class="io-cells">${cell(cells[2])}${cell(cells[3])}</div></div></div>
        ${chk ? `<p class="score">Boxes correct: <b>${BT.iogrid.score(b, st).pts} / 4</b> · Notice that the outputs of one process are the inputs of the other!</p>` : `<div class="btnrow"><button class="btn" data-iocheck>Check my boxes</button><span class="msg"></span></div>`}</div>`;
    },
    wire(root, b, st, save, redraw) {
      $$("[data-term]", root).forEach(x => x.onclick = () => { st.sel = st.sel === x.dataset.term ? null : x.dataset.term; save(); redraw(); });
      $$("[data-cell]", root).forEach(c => c.onclick = e => {
        if (st.checked) return; const rm = e.target.closest("[data-rm]");
        if (!st.sel && rm) { const [id, t] = rm.dataset.rm.split("|"); st.pl[id] = (st.pl[id] || []).filter(x => x !== t); save(); redraw(); return; }
        if (!st.sel) return; const id = c.dataset.cell; st.pl = st.pl || {}; st.pl[id] = st.pl[id] || []; if (!st.pl[id].includes(st.sel)) st.pl[id].push(st.sel); st.sel = null; save(); redraw();
      });
      const k = $("[data-iocheck]", root); if (k) k.onclick = () => { if (Object.keys(b.key).some(id => !(st.pl || {})[id] || !st.pl[id].length)) { $(".msg", root).textContent = "Put at least one term in every box."; return; } st.checked = true; save(); redraw(); };
    },
    score(b, st) { const pl = st.pl || {}; return { max: 4, pts: st.checked ? Object.keys(b.key).filter(id => { const it = pl[id] || [], key = b.key[id]; return it.length === key.length && key.every(x => it.includes(x)); }).length : 0, label: "inputs & outputs" }; },
    text(b, st) { const pl = st.pl || {}; return Object.keys(b.key).map(id => `${id}: ${(pl[id] || []).join("+")}`).join(" | "); }
  };
});
