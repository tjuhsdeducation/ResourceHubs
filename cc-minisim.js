/* =====================================================================
   MINI LAB EXPERIMENT BLOCK (no need to edit; set it up in the lab file)
   minisim : students test each condition (tap ▶ Test), read the measurement,
             record it in a data table with one interpretation choice per
             row, and see a bar graph of their results.
   Options:
     { title, how, measure:"what is measured", unit:"cm", top:100 (graph max),
       color:"#2b7de9", tol:0.5 (how close a typed value must be),
       col:{ head:"Column heading", opts:[...] },   // interpretation column
       conds:[{ k, name, desc, val, pick }],        // pick = index in col.opts
       max }
   Fast test hook: window.MS_FAST = 1 (skips the animation time).
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$ } = H;
  if (!document.getElementById("ms-css")) {
    const css = document.createElement("style"); css.id = "ms-css";
    css.textContent = `
    .ms{box-sizing:border-box;max-width:100%;border:3px solid var(--line);border-radius:22px;padding:14px 16px;background:var(--surface)}
    .ms h4{margin:0 0 6px}
    .ms-bench{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin:8px 0}
    .ms-c{border:3px solid var(--line);border-radius:16px;padding:8px;display:grid;gap:4px;justify-items:center;text-align:center;background:var(--surface)}
    .ms-c.done{border-color:color-mix(in srgb,var(--lc) 45%,var(--line))}
    .ms-c b{font-size:.9rem}.ms-c .mu{font-size:.78rem;line-height:1.3}
    .ms-tube{width:44px;height:110px;border:3px solid #555;border-top:0;border-radius:0 0 22px 22px;position:relative;overflow:hidden;background:#f7f9fb}
    .ms-tube i{position:absolute;left:0;right:0;bottom:0;height:0;transition:height 1.4s ease-out;background:var(--mc)}
    .ms-read{font:700 1.05rem ui-monospace,monospace;background:#1f2a1f;color:#b6ffb0;border-radius:8px;padding:2px 8px;min-width:80px}
    .ms-tw{overflow-x:auto;margin-top:10px}
    .ms-tbl{width:100%;border-collapse:collapse;font-size:.86rem;min-width:480px}
    .ms-tbl th,.ms-tbl td{border:1px solid var(--line);padding:5px;text-align:center;vertical-align:middle}.ms-tbl th{background:var(--soft)}
    .ms-tbl input{width:70px;font:inherit;font-weight:700;text-align:center;border:2px solid var(--line);border-radius:8px;padding:3px}
    .ms-tbl select{font:inherit;font-size:.82rem;max-width:220px;border:2px solid var(--line);border-radius:8px;padding:3px;background:var(--surface);color:var(--fg)}
    .ms-tbl td.ok{background:color-mix(in srgb,var(--ok) 16%,transparent)}.ms-tbl td.no{background:color-mix(in srgb,var(--bad) 14%,transparent)}
    .ms-graph{width:100%;max-width:620px;height:auto;display:block;margin:10px auto 0;background:#fff;border:2px solid var(--line);border-radius:14px}`;
    document.head.appendChild(css);
  }
  const fmt = (b, v) => (b.dec != null ? (+v).toFixed(b.dec) : String(v));
  function graph(b, st) {
    const C = b.conds, W = 620, Hh = 270, P = { l: 52, r: 12, t: 18, b: 70 }, top = b.top || Math.max(...C.map(c => c.val)) * 1.15, bw = (W - P.l - P.r) / C.length;
    const Y = v => Hh - P.b - v / top * (Hh - P.t - P.b); let g = "";
    for (let i = 0; i <= 5; i++) { const v = top * i / 5; g += `<line x1="${P.l}" x2="${W - P.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="#eee"/><text x="${P.l - 6}" y="${Y(v) + 4}" font-size="10" text-anchor="end" fill="#555">${Math.round(v * 10) / 10}</text>`; }
    C.forEach((c, i) => { const x = P.l + i * bw + bw * 0.18, w = bw * 0.64, done = (st.tested || {})[c.k];
      if (done) g += `<rect x="${x}" y="${Y(c.val)}" width="${w}" height="${Y(0) - Y(c.val)}" rx="4" fill="${b.color || "#2b7de9"}"/><text x="${x + w / 2}" y="${Y(c.val) - 5}" font-size="10" text-anchor="middle" font-weight="700" fill="#333">${fmt(b, c.val)}</text>`;
      const words = c.name.split(" "), lines = []; words.forEach(wd => { if (lines.length && (lines[lines.length - 1] + " " + wd).length <= 14) lines[lines.length - 1] += " " + wd; else lines.push(wd); });
      lines.slice(0, 4).forEach((ln, j) => g += `<text x="${x + w / 2}" y="${Hh - P.b + 14 + j * 12}" font-size="10" text-anchor="middle" fill="#333">${ln}</text>`); });
    g += `<line x1="${P.l}" x2="${W - P.r}" y1="${Y(0)}" y2="${Y(0)}" stroke="#555"/><line x1="${P.l}" x2="${P.l}" y1="${P.t}" y2="${Y(0)}" stroke="#555"/><text transform="translate(14 ${(P.t + Y(0)) / 2}) rotate(-90)" font-size="11" text-anchor="middle" font-weight="700" fill="#333">${b.measure}${b.unit ? ` (${b.unit})` : ""}</text>`;
    return `<svg class="ms-graph" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="Bar graph of ${b.measure}">${g}</svg>`;
  }
  BT.minisim = {
    html(b, st) {
      const T = st.tested || {}, r = st.r || {}, chk = !!st.checked, top = b.top || Math.max(...b.conds.map(c => c.val)) * 1.15;
      let h = `<div class="ms" style="--mc:${b.color || "#2b7de9"}"><h4>${b.title}</h4>${b.how ? `<p class="mu small">${b.how}</p>` : ""}
        <div class="ms-bench">${b.conds.map(c => `<div class="ms-c ${T[c.k] ? "done" : ""}"><b>${c.name}</b>${c.desc ? `<span class="mu">${c.desc}</span>` : ""}
          <div class="ms-tube"><i data-msbar="${c.k}" style="height:${T[c.k] ? Math.min(100, c.val / top * 100) : 0}%"></i></div>
          <span class="ms-read" data-msr="${c.k}">${T[c.k] ? fmt(b, c.val) + (b.unit ? " " + b.unit : "") : "---"}</span>
          ${T[c.k] ? `<span class="mu">✓ tested</span>` : `<button class="btn sm" data-mst="${c.k}">▶ Test</button>`}</div>`).join("")}</div>`;
      const cell = (ok, inner) => `<td class="${chk ? (ok ? "ok" : "no") : ""}">${inner}</td>`;
      h += `<div class="ms-tw"><table class="ms-tbl"><thead><tr><th>Condition</th><th>${b.measure}${b.unit ? ` (${b.unit})` : ""}</th>${b.col ? `<th>${b.col.head}</th>` : ""}</tr></thead><tbody>${b.conds.map(c => { const v = r[c.k] || {};
        const okV = v.v !== "" && v.v != null && Math.abs(+String(v.v).replace(/−/g, "-") - c.val) <= (b.tol ?? 0.5) + 1e-9, okP = b.col ? v.p !== "" && v.p != null && +v.p === c.pick : true;
        return `<tr><td style="text-align:left"><b>${c.name}</b></td>${cell(okV, `<input inputmode="decimal" data-msf="${c.k}|v" value="${v.v ?? ""}" ${chk ? "disabled" : ""} aria-label="${b.measure} for ${c.name}">`)}${b.col ? cell(okP, `<select data-msf="${c.k}|p" ${chk ? "disabled" : ""}><option value="">Choose…</option>${b.col.opts.map((o, j) => `<option value="${j}" ${String(v.p) === String(j) ? "selected" : ""}>${o}</option>`).join("")}</select>`) : ""}</tr>`; }).join("")}</tbody></table></div>`;
      if (b.conds.every(c => T[c.k])) h += graph(b, st);
      const per = b.col ? 2 : 1;
      h += chk ? `<p class="score">Correct: <b>${BT.minisim.right(b, st)} / ${b.conds.length * per}</b>. Green = correct.</p><div class="btnrow"><button class="btn ghost" data-msfix>✏️ Fix my red boxes</button></div>`
        : `<div class="btnrow"><button class="btn" data-mscheck>Check my data table</button><span class="msg"></span></div>`;
      return h + `</div>`;
    },
    right(b, st) { const r = st.r || {}; let n = 0; b.conds.forEach(c => { const v = r[c.k] || {}; if (v.v !== "" && v.v != null && Math.abs(+String(v.v).replace(/−/g, "-") - c.val) <= (b.tol ?? 0.5) + 1e-9) n++; if (b.col && v.p !== "" && v.p != null && +v.p === c.pick) n++; }); return n; },
    wire(root, b, st, save, redraw) {
      $$("[data-mst]", root).forEach(x => x.onclick = () => {
        const c = b.conds.find(q => q.k === x.dataset.mst), top = b.top || Math.max(...b.conds.map(q => q.val)) * 1.15; x.disabled = true; x.textContent = "Testing…";
        const bar = $(`[data-msbar="${c.k}"]`, root), rd = $(`[data-msr="${c.k}"]`, root);
        requestAnimationFrame(() => { if (bar) bar.style.height = Math.min(100, c.val / top * 100) + "%"; });
        let i = 0; const n = 12, tick = setInterval(() => { i++; if (rd) rd.textContent = fmt(b, Math.round(c.val * i / n * 100) / 100) + (b.unit ? " " + b.unit : ""); if (i >= n) { clearInterval(tick); (st.tested = st.tested || {})[c.k] = true; save(); redraw(); } }, window.MS_FAST ? 5 : 120);
      });
      $$("[data-msf]", root).forEach(x => { const ev = x.tagName === "SELECT" ? "change" : "input"; x.addEventListener(ev, () => { const [k, f] = x.dataset.msf.split("|"); st.r = st.r || {}; (st.r[k] = st.r[k] || {})[f] = x.value.trim(); save(); }); });
      const fx = $("[data-msfix]", root); if (fx) fx.onclick = () => { st.checked = false; save(); redraw(); };
      const c = $("[data-mscheck]", root);
      if (c) c.onclick = () => { if (b.conds.some(q => !(st.tested || {})[q.k])) { $(".msg", root).textContent = "Test every condition first."; return; }
        const r = st.r || {}; if (b.conds.some(q => { const v = r[q.k] || {}; return v.v == null || v.v === "" || (b.col && (v.p == null || v.p === "")); })) { $(".msg", root).textContent = "Fill in every box first."; return; }
        st.checked = true; save(); redraw(); };
    },
    score(b, st) { const per = b.col ? 2 : 1; return { max: b.max || 4, pts: st.checked ? Math.round((b.max || 4) * BT.minisim.right(b, st) / (b.conds.length * per)) : 0, label: b.label || "lab data" }; },
    text(b, st) { const r = st.r || {}; return b.conds.map(c => { const v = r[c.k] || {}; return `${c.name}: ${v.v ?? "-"}${b.col ? " / " + (b.col.opts[v.p] || "-") : ""}`; }).join(" | "); }
  };
});
