/* =====================================================================
   cc-graphs.js — graphing blocks for the Graphing Mini Lessons
   Blocks:
     gview   – show one or more graphs (no score)
     glabel  – label the missing parts of a graph (title, axes, key, source)
     gplot   – build a graph from a data table by tapping (line or bar)
     gread   – read a graph and answer questions (multiple choice or number)
               with a "trace" tool: tap the graph to draw guide lines to the axes
   Graph spec:
     { type:"line"|"bar"|"scatter", title, src,
       x:{label, min,max,step} or x:{label, cats:[...]},
       y:{label, min,max,step},
       series:[{name, color, pts:[[x,y],...]}]  (line/scatter)
       series:[{name, color, vals:[...]}]       (bar, one value per category) }
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$, esc } = H;
  const COLORS = ["#2b7de9", "#e8368f", "#1aa36f", "#e08a00", "#8a54e0"];
  const css = `
  .gx h4{margin:0 0 6px}.gx .gsvg{width:100%;height:auto;display:block;background:#fff;border:2px solid #e3e6ef;border-radius:14px;touch-action:manipulation}
  .gx .gtw{max-width:640px}.gx .gpair{display:grid;grid-template-columns:1fr 1fr;gap:12px}.gx .gpair figure{margin:0}.gx figcaption{font-size:.88rem;color:#5b6275;margin-top:4px;font-weight:700}
  @media(max-width:700px){.gx .gpair{grid-template-columns:1fr}}
  .gx .ghow{font-size:.92rem;color:#5b6275;margin:4px 0 8px}
  .gx .gparts{display:grid;gap:8px;margin-top:10px;max-width:640px}.gx .gpart{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:8px 10px;border:2px solid #e3e6ef;border-radius:12px;background:#fff}
  .gx .gpart .gl{display:inline-grid;place-items:center;min-width:28px;height:28px;border-radius:8px;background:#2b2f3a;color:#fff;font-weight:900}
  .gx .gpart b{min-width:110px}.gx .gpart select,.gx .gq input{font:inherit;padding:6px 8px;border:2px solid #cfd5e3;border-radius:10px;max-width:100%;min-width:0;flex:1 1 220px}
  .gx .gpart.ok,.gx .gq.ok{border-color:#1aa36f;background:#eefaf4}.gx .gpart.no,.gx .gq.no{border-color:#d0453a;background:#fff2f1}
  .gx .gqs{display:grid;gap:10px;margin-top:12px}.gx .gq{padding:10px 12px;border:2px solid #e3e6ef;border-radius:12px;background:#fff}
  .gx .gq .qq{font-weight:700;margin-bottom:6px}.gx .gq .gopts{display:grid;gap:6px}.gx .gq .gopt{font:inherit;text-align:left;padding:8px 10px;border:2px solid #e3e6ef;border-radius:10px;background:#f7f8fc;cursor:pointer}
  .gx .gq .gopt.sel{border-color:#2b7de9;background:#eaf2fe;font-weight:800}.gx .gq .gopt:disabled{cursor:default}
  .gx .gq .gnum{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.gx .gq .gnum input{flex:0 1 120px}
  .gx .gfb{font-size:.9rem;margin-top:6px}.gx .gtools{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
  .gx .gchip{font:inherit;font-weight:800;font-size:.88rem;padding:6px 12px;border-radius:999px;border:2px solid #cfd5e3;background:#fff;cursor:pointer}.gx .gchip.on{background:#2b2f3a;border-color:#2b2f3a;color:#fff}
  .gx .gtbl{border-collapse:collapse;margin:6px 0 10px;font-size:.92rem;background:#fff}.gx .gtbl th,.gx .gtbl td{border:1px solid #cfd5e3;padding:5px 10px;text-align:center}.gx .gtbl th{background:#f1f3f9}
  .gx .gtbl td.on{background:#fff7d6;font-weight:800}.gx .gtbl td.ok{background:#eefaf4}
  .gx .gread{font-weight:800;margin:6px 0}.gx .gnudge{display:flex;gap:6px;align-items:center;flex-wrap:wrap}.gx .gnudge button{font:inherit;font-weight:900;padding:6px 12px;border-radius:10px;border:2px solid #cfd5e3;background:#fff;cursor:pointer}
  .gx .gtwrap{overflow-x:auto;max-width:100%}
  .gx{min-width:0;max-width:100%}.gx .gparts,.gx .gqs{grid-template-columns:minmax(0,1fr)}.gx .gpart,.gx .gq{min-width:0}.gx .gpart select{width:100%;min-width:0;flex:1 1 100%;text-overflow:ellipsis}.gx .gpart b{flex:1 1 auto}`;
  if (!document.getElementById("cc-graphs-css")) { const s = document.createElement("style"); s.id = "cc-graphs-css"; s.textContent = css; document.head.appendChild(s); }

  /* ---------- geometry + drawing ---------- */
  const W = 560;
  function geo(g) {
    const key = (g.series || []).length > 1 && !g.nokey, P = { l: 74, r: 22, t: key ? 74 : 48, b: g.src ? 78 : 60 }, Hh = g.h || 340;
    const pw = W - P.l - P.r, ph = Hh - P.t - P.b, y = g.y, x = g.x;
    const Y = v => P.t + ph - (v - y.min) / (y.max - y.min) * ph;
    const cats = x.cats, X = cats ? (i => P.l + (i + .5) * pw / cats.length) : (v => P.l + (v - x.min) / (x.max - x.min) * pw);
    const invY = py => y.min + (P.t + ph - py) / ph * (y.max - y.min), invX = px => cats ? Math.floor((px - P.l) / (pw / cats.length)) : x.min + (px - P.l) / pw * (x.max - x.min);
    return { P, H: Hh, pw, ph, X, Y, invX, invY, key, cats };
  }
  const fmt = v => (Math.round(v * 100) / 100).toLocaleString("en-US");
  const tag = (x, y, L, anchor) => `<g><rect x="${x - 15}" y="${y - 15}" width="30" height="26" rx="7" fill="#2b2f3a"/><text x="${x}" y="${y + 4}" text-anchor="middle" font-size="15" font-weight="900" fill="#fff">${L}</text></g>`;
  /* o: { blank:{title:"A",x:"B",y:"C",key:"D",src:"E"}, plot:{pts|vals}, trace:[px,py], hideData, hl:{s,i} } */
  function chart(g, o = {}) {
    const G = geo(g), { P, X, Y } = G, bl = o.blank || {}, y = g.y, x = g.x, ser = g.series || [];
    let s = `<rect width="${W}" height="${G.H}" fill="#fff"/>`;
    // grid + y ticks
    for (let v = y.min; v <= y.max + 1e-9; v += y.step) { const py = Y(v); s += `<line x1="${P.l}" x2="${W - P.r}" y1="${py}" y2="${py}" stroke="#e7eaf2"/>` + (bl.scale ? "" : `<text x="${P.l - 8}" y="${py + 4}" text-anchor="end" font-size="12" fill="#444">${fmt(v)}</text>`); }
    if (G.cats) G.cats.forEach((c, i) => { s += `<text x="${X(i)}" y="${P.t + G.ph + 18}" text-anchor="middle" font-size="12" fill="#444">${c}</text>`; });
    else for (let v = x.min; v <= x.max + 1e-9; v += x.step) { const px = X(v); s += `<line x1="${px}" x2="${px}" y1="${P.t}" y2="${P.t + G.ph}" stroke="#f0f2f7"/>${Math.round((v - x.min) / x.step) % (x.every || 1) === 0 ? `<text x="${px}" y="${P.t + G.ph + 18}" text-anchor="middle" font-size="12" fill="#444">${x.noComma ? Math.round(v) : fmt(v)}</text>` : ""}`; }
    if (bl.scale) s += tag(P.l - 26, P.t + G.ph / 2, bl.scale);
    // axes
    s += `<line x1="${P.l}" x2="${P.l}" y1="${P.t - 6}" y2="${P.t + G.ph}" stroke="#2b2f3a" stroke-width="2.5"/><line x1="${P.l}" x2="${W - P.r}" y1="${P.t + G.ph}" y2="${P.t + G.ph}" stroke="#2b2f3a" stroke-width="2.5"/>`;
    if (y.min > 0 && !g.hideBreak) s += ""; // honest axis breaks are discussed in the lessons, not drawn
    // labels
    s += bl.title ? tag(W / 2, 24, bl.title) : `<text x="${W / 2}" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#1d2130">${esc(g.title || "")}</text>`;
    s += bl.x ? tag(P.l + G.pw / 2, P.t + G.ph + 42, bl.x) : `<text x="${P.l + G.pw / 2}" y="${P.t + G.ph + 42}" text-anchor="middle" font-size="13.5" font-weight="800" fill="#1d2130">${esc(x.label || "")}</text>`;
    s += bl.y ? tag(20, P.t + G.ph / 2, bl.y) : `<text transform="translate(20 ${P.t + G.ph / 2}) rotate(-90)" text-anchor="middle" font-size="13.5" font-weight="800" fill="#1d2130">${esc(y.label || "")}</text>`;
    if (g.src) s += bl.src ? tag(P.l + 10, G.H - 14, bl.src) : `<text x="${P.l - 60}" y="${G.H - 10}" font-size="11" font-style="italic" fill="#5b6275">${esc(g.src)}</text>`;
    if (G.key) { if (bl.key) s += tag(W / 2, 52, bl.key); else { const n = ser.length, wEach = 150, x0 = W / 2 - n * wEach / 2; ser.forEach((se, i) => { const c = se.color || COLORS[i]; s += `<rect x="${x0 + i * wEach}" y="44" width="16" height="12" rx="3" fill="${c}"/><text x="${x0 + i * wEach + 22}" y="55" font-size="12.5" font-weight="700" fill="#1d2130">${esc(se.name)}</text>`; }); } }
    // data
    if (!o.hideData) ser.forEach((se, si) => {
      const c = se.color || COLORS[si];
      if (g.type === "bar") { const n = ser.length, bw = G.pw / G.cats.length * .66 / n; se.vals.forEach((v, i) => { const bx = X(i) - n * bw / 2 + si * bw; s += `<rect x="${bx + 1}" y="${Y(v)}" width="${bw - 2}" height="${Y(y.min) - Y(v)}" rx="3" fill="${c}"/>`; }); }
      else { if (g.type === "line") s += `<polyline points="${se.pts.map(p => X(p[0]) + "," + Y(p[1])).join(" ")}" fill="none" stroke="${c}" stroke-width="3"/>`; se.pts.forEach((p, i) => { const h = o.hl && o.hl.s === si && o.hl.i === i; s += `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="${h ? 8 : 5}" fill="${c}" stroke="#fff" stroke-width="2"/>`; }); }
    });
    // student plot
    if (o.plot) { const c = o.plot.color || "#2b7de9";
      if (g.type === "bar") (o.plot.vals || []).forEach((v, i) => { if (v == null) return; const bw = G.pw / G.cats.length * .6; s += `<rect x="${X(i) - bw / 2}" y="${Y(v)}" width="${bw}" height="${Y(y.min) - Y(v)}" rx="3" fill="${c}" opacity="${o.plot.sel === i ? 1 : .8}" ${o.plot.sel === i ? 'stroke="#2b2f3a" stroke-width="3"' : ""}/>`; });
      else { const pts = (o.plot.pts || []).map((v, i) => v == null ? null : [o.plot.xs[i], v]).filter(Boolean);
        if (g.type === "line" && pts.length > 1) s += `<polyline points="${pts.map(p => X(p[0]) + "," + Y(p[1])).join(" ")}" fill="none" stroke="${c}" stroke-width="3"/>`;
        (o.plot.pts || []).forEach((v, i) => { if (v == null) return; const sel = o.plot.sel === i; s += `<circle cx="${X(o.plot.xs[i])}" cy="${Y(v)}" r="${sel ? 9 : 6}" fill="${c}" stroke="${sel ? "#2b2f3a" : "#fff"}" stroke-width="${sel ? 3 : 2}"/>`; }); } }
    // trace guide lines
    if (o.trace) { const [tx, ty] = o.trace; s += `<line x1="${P.l}" x2="${tx}" y1="${ty}" y2="${ty}" stroke="#e8368f" stroke-width="2" stroke-dasharray="6 5"/><line x1="${tx}" x2="${tx}" y1="${ty}" y2="${P.t + G.ph}" stroke="#e8368f" stroke-width="2" stroke-dasharray="6 5"/><circle cx="${tx}" cy="${ty}" r="5" fill="none" stroke="#e8368f" stroke-width="2.5"/>`; }
    return `<svg class="gsvg" viewBox="0 0 ${W} ${G.H}" role="img" aria-label="${esc(g.title || "graph")}">${s}</svg>`;
  }
  const svgPt = (svg, e) => { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; const m = svg.getScreenCTM(); return m ? p.matrixTransform(m.inverse()) : { x: 0, y: 0 }; };
  window.GRAPH_CHART = chart; window.GRAPH_GEO = geo;

  /* ---------- gview ---------- */
  BT.gview = { html: b => { const gs = b.gs || [b.g]; return `<div class="gx">${b.title ? `<h4>${b.title}</h4>` : ""}${gs.length > 1 ? `<div class="gpair">${gs.map((g, i) => `<figure>${chart(g)}${(b.caps || [])[i] ? `<figcaption>${b.caps[i]}</figcaption>` : ""}</figure>`).join("")}</div>` : `<div class="gtw">${chart(gs[0])}</div>`}${b.cap ? `<p class="ghow">${b.cap}</p>` : ""}</div>`; } };

  /* ---------- glabel ---------- */
  const PART = { title: "Title", x: "x-axis label", y: "y-axis label", key: "Key (legend)", src: "Source", scale: "Scale numbers" };
  BT.glabel = {
    html(b, st) {
      const r = st.r || {}, chk = !!st.checked, ok = p => r[p.k] === p.a, allOk = chk && b.parts.every(ok);
      const blank = {}; b.parts.forEach((p, i) => { if (!(chk && ok(p))) blank[p.k] = String.fromCharCode(65 + i); });
      let h = `<div class="gx"><h4>🏷️ ${b.title || "Label the graph"}</h4><p class="ghow">${b.how || "Each lettered box is a missing part of the graph. Choose the best label for each letter."}</p><div class="gtw">${chart(b.g, { blank: allOk ? {} : blank })}</div><div class="gparts">`;
      b.parts.forEach((p, i) => { const opts = p.opts || b.opts; h += `<div class="gpart ${chk ? (ok(p) ? "ok" : "no") : ""}"><span class="gl">${String.fromCharCode(65 + i)}</span><b>${p.name || PART[p.k]}</b><select data-gl="${p.k}" ${chk ? "disabled" : ""}><option value="">Choose…</option>${opts.map(o => `<option value="${esc(o)}" ${r[p.k] === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>${chk && !ok(p) && p.why ? `<div class="gfb">💡 ${p.why}</div>` : ""}</div>`; });
      h += `</div>`;
      h += chk ? `<p class="score">Labels correct: <b>${b.parts.filter(ok).length} / ${b.parts.length}</b>${allOk ? " · 🎉 Your graph is complete!" : ""}</p>${allOk ? "" : `<div class="btnrow"><button class="btn ghost" data-glfix>✏️ Fix my red labels</button></div>`}`
        : `<div class="btnrow"><button class="btn" data-glcheck>Check my labels</button><span class="msg"></span></div>`;
      return h + `</div>`;
    },
    wire(root, b, st, save, redraw) {
      $$("[data-gl]", root).forEach(x => x.onchange = () => { (st.r = st.r || {})[x.dataset.gl] = x.value; save(); });
      const c = $("[data-glcheck]", root); if (c) c.onclick = () => { const r = st.r || {}; if (b.parts.some(p => !r[p.k])) { $(".msg", root).textContent = "Choose a label for every letter first."; return; } st.checked = true; st.tries = (st.tries || 0) + 1; save(); redraw(); };
      const f = $("[data-glfix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
    },
    score: (b, st) => { const r = st.r || {}, n = b.parts.filter(p => r[p.k] === p.a).length, mx = b.max || 2; return { max: mx, pts: st.checked ? Math.round(mx * n / b.parts.length) : 0, label: b.label || "label the graph" }; },
    text: (b, st) => "Labels: " + b.parts.map(p => `${PART[p.k] || p.k}=${(st.r || {})[p.k] || "-"}`).join("; ")
  };

  /* ---------- gplot ---------- */
  /* b: { g (spec WITHOUT data, or with series ignored), data:[[x,y],...] or for bar data:[v,...] with g.x.cats,
          snap, tol, head:[xHead,yHead], axisQ:[{q,opts,a}] } */
  BT.gplot = {
    xs: b => b.g.type === "bar" ? b.g.x.cats.map((_, i) => i) : b.data.map(d => d[0]),
    ys: b => b.g.type === "bar" ? b.data : b.data.map(d => d[1]),
    html(b, st) {
      const xs = BT.gplot.xs(b), ys = BT.gplot.ys(b), pts = st.p || [], chk = !!st.checked, tol = b.tol != null ? b.tol : b.g.y.step / 4, bar = b.g.type === "bar";
      const good = i => pts[i] != null && Math.abs(pts[i] - ys[i]) <= tol + 1e-9, sel = st.sel != null ? st.sel : pts.findIndex(v => v == null);
      const head = b.head || [b.g.x.label, b.g.y.label];
      let h = `<div class="gx"><h4>📈 ${b.title || "Build the graph"}</h4><p class="ghow">${b.how || (bar ? "Tap a column on the graph to set the height of its bar. Use ▲ ▼ to fine-tune." : "Pick a row in the table, then tap the graph where that point belongs. Use ▲ ▼ to fine-tune.")}</p>`;
      h += `<div class="gtwrap"><table class="gtbl"><tr><th>${esc(head[0])}</th>${xs.map((x, i) => `<td class="${sel === i ? "on" : chk && good(i) ? "ok" : ""}" data-gsel="${i}" style="cursor:pointer">${bar ? esc(b.g.x.cats[i]) : x}</td>`).join("")}</tr><tr><th>${esc(head[1])}</th>${ys.map((y, i) => `<td class="${sel === i ? "on" : chk && good(i) ? "ok" : ""}" data-gsel="${i}" style="cursor:pointer">${fmt(y)}</td>`).join("")}</tr></table></div>`;
      h += `<div class="gtw" data-gplotbox>${chart(Object.assign({}, b.g, { series: [] }), { plot: bar ? { vals: pts, sel } : { pts, xs, sel } })}</div>`;
      const cur = sel >= 0 && sel < xs.length ? sel : null;
      h += cur != null ? `<div class="gnudge"><span class="gread">${bar ? esc(b.g.x.cats[cur]) : `Point for ${esc(head[0])} = ${xs[cur]}`}: ${pts[cur] != null ? `you placed it at <b>${fmt(pts[cur])}</b>` : "not placed yet"}</span>${pts[cur] != null && !chk ? `<button type="button" data-gn="1">▲</button><button type="button" data-gn="-1">▼</button>` : ""}</div>` : "";
      if (b.axisQ) h += `<div class="gqs">${b.axisQ.map((q, k) => { const a = (st.q || {})[k]; return `<div class="gq ${chk ? (a === q.a ? "ok" : "no") : ""}"><div class="qq">${q.q}</div><div class="gopts">${q.opts.map((o, j) => `<button type="button" class="gopt ${a === j ? "sel" : ""}" data-gaq="${k}|${j}" ${chk ? "disabled" : ""}>${String.fromCharCode(65 + j)}. ${o}</button>`).join("")}</div>${chk && a !== q.a && q.why ? `<div class="gfb">💡 ${q.why}</div>` : ""}</div>`; }).join("")}</div>`;
      if (chk) { const n = xs.filter((_, i) => good(i)).length; h += `<p class="score">Points placed correctly: <b>${n} / ${xs.length}</b>${b.axisQ ? ` · Questions: <b>${b.axisQ.filter((q, k) => (st.q || {})[k] === q.a).length} / ${b.axisQ.length}</b>` : ""}</p>${n < xs.length ? `<p class="gfb">💡 Check the highlighted boxes: find the number on the ${bar ? "y-axis" : "x-axis first, then go up to the y-value"}. Count the grid lines carefully.</p>` : ""}<div class="btnrow"><button class="btn ghost" data-gpfix>✏️ Fix my graph</button></div>`; }
      else h += `<div class="btnrow"><button class="btn" data-gpcheck>Check my graph</button><span class="msg"></span></div>`;
      return h + `</div>`;
    },
    wire(root, b, st, save, redraw) {
      const xs = BT.gplot.xs(b), bar = b.g.type === "bar", snap = b.snap || b.g.y.step / 2, G = geo(b.g), y = b.g.y;
      const clampY = v => Math.max(y.min, Math.min(y.max, Math.round(v / snap) * snap));
      $$("[data-gsel]", root).forEach(x => x.onclick = () => { if (st.checked) return; st.sel = +x.dataset.gsel; save(); redraw(); });
      const svg = $("[data-gplotbox] svg", root);
      if (svg && !st.checked) svg.addEventListener("pointerdown", e => {
        const p = svgPt(svg, e); if (p.x < G.P.l - 10 || p.x > W - G.P.r + 10 || p.y < G.P.t - 14 || p.y > G.P.t + G.ph + 10) return;
        st.p = st.p || []; let i;
        if (bar) { i = Math.max(0, Math.min(xs.length - 1, G.invX(p.x))); }
        else { const vx = G.invX(p.x); i = st.sel != null && st.sel >= 0 ? st.sel : 0; const near = xs.reduce((a, x, k) => Math.abs(x - vx) < Math.abs(xs[a] - vx) ? k : a, 0); i = near; }
        st.p[i] = clampY(G.invY(p.y)); st.sel = i; save(); redraw();
      });
      $$("[data-gn]", root).forEach(x => x.onclick = () => { const i = st.sel; if (i == null || (st.p || [])[i] == null) return; st.p[i] = clampY(st.p[i] + (+x.dataset.gn) * snap); save(); redraw(); });
      $$("[data-gaq]", root).forEach(x => x.onclick = () => { const [k, j] = x.dataset.gaq.split("|").map(Number); (st.q = st.q || {})[k] = j; save(); redraw(); });
      const c = $("[data-gpcheck]", root); if (c) c.onclick = () => { const p = st.p || []; if (xs.some((_, i) => p[i] == null)) { $(".msg", root).textContent = bar ? "Set every bar first." : "Place every point first (tap each column in the table)."; return; } if (b.axisQ && b.axisQ.some((_, k) => (st.q || {})[k] == null)) { $(".msg", root).textContent = "Answer the question(s) below the graph."; return; } st.checked = true; save(); redraw(); };
      const f = $("[data-gpfix]", root); if (f) f.onclick = () => { st.checked = false; const ys = BT.gplot.ys(b), tol = b.tol != null ? b.tol : b.g.y.step / 4; const bad = (st.p || []).findIndex((v, i) => Math.abs(v - ys[i]) > tol + 1e-9); st.sel = bad >= 0 ? bad : null; save(); redraw(); };
    },
    score(b, st) {
      const xs = BT.gplot.xs(b), ys = BT.gplot.ys(b), p = st.p || [], tol = b.tol != null ? b.tol : b.g.y.step / 4, mx = b.max || 2;
      const n = xs.filter((_, i) => p[i] != null && Math.abs(p[i] - ys[i]) <= tol + 1e-9).length, q = b.axisQ ? b.axisQ.filter((qq, k) => (st.q || {})[k] === qq.a).length : 0, tot = xs.length + (b.axisQ ? b.axisQ.length : 0);
      return { max: mx, pts: st.checked ? Math.round(mx * (n + q) / tot) : 0, label: b.label || "build the graph" };
    },
    text: (b, st) => "Plotted: " + (st.p || []).map(v => v == null ? "-" : fmt(v)).join(", ")
  };

  /* ---------- gread ---------- */
  /* items: {q, opts, a, why} or {q, num, tol, unit, why} */
  BT.gread = {
    ok: (it, v) => it.opts ? v === it.a : (v != null && v !== "" && !isNaN(parseFloat(String(v).replace(/[$,%]/g, ""))) && Math.abs(parseFloat(String(v).replace(/[$,%]/g, "")) - it.num) <= (it.tol || 0) + 1e-9),
    html(b, st) {
      const a = st.a || {}, chk = !!st.checked, gs = b.gs || [b.g];
      let h = `<div class="gx"><h4>🔎 ${b.title || "Read the graph"}</h4>`;
      if (b.trace !== false) h += `<p class="ghow">🖍️ <b>Trace tool:</b> tap any spot on the graph to draw guide lines to both axes. Use it to read values carefully.</p>`;
      h += gs.length > 1 ? `<div class="gpair">${gs.map((g, i) => `<figure data-gtrace="${i}">${chart(g, { trace: (st.tr || {})[i] })}${(b.caps || [])[i] ? `<figcaption>${b.caps[i]}</figcaption>` : ""}</figure>`).join("")}</div>` : `<div class="gtw" data-gtrace="0">${chart(gs[0], { trace: (st.tr || {})[0] })}</div>`;
      h += `<div class="gqs">${b.items.map((it, k) => { const v = a[k], good = BT.gread.ok(it, v);
        return `<div class="gq ${chk ? (good ? "ok" : "no") : ""}"><div class="qq">${k + 1}. ${it.q}</div>${it.opts ? `<div class="gopts">${it.opts.map((o, j) => `<button type="button" class="gopt ${v === j ? "sel" : ""}" data-gra="${k}|${j}" ${chk ? "disabled" : ""}>${String.fromCharCode(65 + j)}. ${o}</button>`).join("")}</div>`
          : `<div class="gnum">${it.pre ? `<span>${it.pre}</span>` : ""}<input inputmode="decimal" data-grn="${k}" value="${esc(v ?? "")}" ${chk ? "disabled" : ""} aria-label="answer ${k + 1}"><span>${it.unit || ""}</span></div>`}
          ${chk ? `<div class="gfb">${good ? "✅ " : "❌ "}${it.why || ""}</div>` : ""}</div>`; }).join("")}</div>`;
      h += chk ? `<p class="score">Correct: <b>${b.items.filter((it, k) => BT.gread.ok(it, a[k])).length} / ${b.items.length}</b></p>${b.items.every((it, k) => BT.gread.ok(it, a[k])) ? "" : `<div class="btnrow"><button class="btn ghost" data-grfix>✏️ Fix my red answers</button></div>`}`
        : `<div class="btnrow"><button class="btn" data-grcheck>Check my answers</button><span class="msg"></span></div>`;
      return h + `</div>`;
    },
    wire(root, b, st, save, redraw) {
      const gs = b.gs || [b.g];
      if (b.trace !== false) $$("[data-gtrace]", root).forEach(box => { const i = +box.dataset.gtrace; BT.gread.wire1(box, gs[i], i, st, save); });
      $$("[data-gra]", root).forEach(x => x.onclick = () => { const [k, j] = x.dataset.gra.split("|").map(Number); (st.a = st.a || {})[k] = j; save(); $$(`[data-gra^="${k}|"]`, root).forEach(y => y.classList.toggle("sel", y === x)); });
      $$("[data-grn]", root).forEach(x => x.oninput = () => { (st.a = st.a || {})[x.dataset.grn] = x.value.trim(); save(); });
      const c = $("[data-grcheck]", root); if (c) c.onclick = () => { const a = st.a || {}; if (b.items.some((_, k) => a[k] == null || a[k] === "")) { $(".msg", root).textContent = "Answer every question first."; return; } st.checked = true; save(); redraw(); };
      const f = $("[data-grfix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
    },
    wire1(box, g, i, st, save) { const svg = $("svg", box), G = geo(g); svg.addEventListener("pointerdown", e => { const p = svgPt(svg, e); if (p.x < G.P.l || p.x > W - G.P.r || p.y < G.P.t || p.y > G.P.t + G.ph) return; (st.tr = st.tr || {})[i] = [p.x, p.y]; save(); svg.outerHTML = chart(g, { trace: st.tr[i] }); BT.gread.wire1(box, g, i, st, save); }); },
    score: (b, st) => { const a = st.a || {}, n = b.items.filter((it, k) => BT.gread.ok(it, a[k])).length, mx = b.max || b.items.length; return { max: mx, pts: st.checked ? Math.round(mx * n / b.items.length) : 0, label: b.label || "read the graph" }; },
    text: (b, st) => "Answers: " + b.items.map((it, k) => { const v = (st.a || {})[k]; return v == null ? "-" : it.opts ? String.fromCharCode(65 + v) : v; }).join(", ")
  };
});
