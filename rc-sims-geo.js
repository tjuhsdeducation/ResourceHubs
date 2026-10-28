/* =====================================================================
   🔬 GEOMETRY UNIT SIMULATIONS (no need to edit)
   Loaded after rc-sims.js. Add to any study guide with a block like:
       { sim: "quadlab", title: "Quadrilateral Lab", shape: "kite" }
   Available here: conditional, congruent, triangle, triineq, dilate,
                   quadlab, circle, solids, dice
   Simulations are for practice. They are NOT graded.
   ===================================================================== */
(function () {
  if (!window.RCSIM) return;
  const S = window.RCSIM;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const N = n => { const r = Math.round(n * 100) / 100; const z = Object.is(r, -0) ? 0 : r; return z < 0 ? "−" + Math.abs(z) : String(z); };
  const R1 = n => Math.round(n * 10) / 10;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const $ = (s, r) => r.querySelector(s), $$ = (s, r) => [...r.querySelectorAll(s)];
  const es = s => `<i class="gsES">${s}</i>`;
  function shell(el, o, def, icon) {
    el.innerHTML = `<div class="sim"><div class="simhead"><span class="simic">${icon}</span><b>${esc(o.title || def)}</b><span class="simtag">Simulation · try it · not graded</span></div><div class="simbody"></div>${o.tip ? `<p class="simtip">💡 ${o.tip}</p>` : ""}</div>`;
    return $(".simbody", el);
  }
  const sl = (id, label, min, max, step, val) => `<label class="simsl"><span>${label} <b data-v="${id}">${N(val)}</b></span><input type="range" data-s="${id}" min="${min}" max="${max}" step="${step}" value="${val}" aria-label="${esc(label)}"></label>`;
  const rd = (body, id) => { const v = +$(`[data-s=${id}]`, body).value; const b = $(`[data-v=${id}]`, body); if (b) b.textContent = N(v); return v; };
  function tween(ms, fn, done) { const t0 = performance.now(); const f = t => { const p = clamp((t - t0) / ms, 0, 1); fn(p); if (p < 1) requestAnimationFrame(f); else if (done) done(); }; requestAnimationFrame(f); }
  /* pointer dragging inside an SVG: handles with data-h="name" */
  function dragger(svg, onMove) {
    let cur = null;
    const pt = e => { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); };
    svg.addEventListener("pointerdown", e => { const h = e.target.closest("[data-h]"); if (!h) return; cur = h.dataset.h; svg.setPointerCapture(e.pointerId); e.preventDefault(); });
    svg.addEventListener("pointermove", e => { if (!cur) return; const p = pt(e); onMove(cur, p.x, p.y); });
    const up = () => cur = null; svg.addEventListener("pointerup", up); svg.addEventListener("pointercancel", up);
  }
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const angAt = (P, Q, R) => { const v1 = [P[0] - Q[0], P[1] - Q[1]], v2 = [R[0] - Q[0], R[1] - Q[1]]; const c = (v1[0] * v2[0] + v1[1] * v2[1]) / (Math.hypot(...v1) * Math.hypot(...v2) || 1); return Math.acos(clamp(c, -1, 1)) * 180 / Math.PI; };

  if (!document.getElementById("rcsgeo-css")) {
    const c = document.createElement("style"); c.id = "rcsgeo-css";
    c.textContent = `
    .sim svg{-webkit-user-select:none;user-select:none}.sim svg.gsv{max-width:460px;margin:auto}
    .gsES{color:var(--muted);font-weight:600;font-size:.82em}
    .sim .hdl{fill:var(--c3);stroke:var(--surface);stroke-width:3;cursor:grab;touch-action:none}.sim .hdl:hover{r:12}
    .sim .gtri{fill:color-mix(in srgb,var(--c1) 18%,transparent);stroke:var(--c1);stroke-width:3;stroke-linejoin:round}
    .sim .gtri2{fill:color-mix(in srgb,var(--c2) 18%,transparent);stroke:var(--c2);stroke-width:3;stroke-linejoin:round}
    .sim .gmk{stroke:var(--c3);stroke-width:3;fill:none}.sim .gmkA{stroke:var(--c4);stroke-width:3;fill:none}
    .sim .glbl{font:800 14px var(--body);fill:var(--fg)}.sim .glblm{font:700 12px var(--body);fill:var(--muted)}
    .sim .gdot{fill:var(--fg)}.sim .ray{stroke:var(--muted);stroke-width:1.5;stroke-dasharray:5 4}
    .sim .ext{stroke:var(--c2);stroke-width:2.5;stroke-dasharray:6 4}.sim .arcF{fill:color-mix(in srgb,var(--c3) 30%,transparent);stroke:var(--c3);stroke-width:2}
    .sim .arcG{fill:color-mix(in srgb,var(--c4) 30%,transparent);stroke:var(--c4);stroke-width:2}.sim .arcP{fill:color-mix(in srgb,var(--c2) 26%,transparent);stroke:var(--c2);stroke-width:2}
    .sim .gcirc{fill:none;stroke:var(--fg);stroke-width:2.5}.sim .chord{stroke:var(--c1);stroke-width:3}.sim .chord2{stroke:var(--c2);stroke-width:3}
    .sim .hiarc{fill:none;stroke:var(--c3);stroke-width:8;stroke-linecap:round;opacity:.85}
    .sim .gdiag{stroke:var(--c2);stroke-width:2;stroke-dasharray:6 4}.sim .quad{fill:color-mix(in srgb,var(--c4) 16%,transparent);stroke:var(--c4);stroke-width:3;stroke-linejoin:round}
    .sim .stick{stroke-width:9;stroke-linecap:round}
    .gpbtns{display:flex;flex-wrap:wrap;gap:6px}.gpbtns .pill-btn.on{background:var(--fg);color:var(--surface)}
    .gcards{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px}
    .gcard{border:2px solid var(--line);border-radius:14px;padding:8px 10px;background:var(--surface);display:grid;gap:6px}.gcard h5{margin:0;font:800 .78rem var(--body);text-transform:uppercase;letter-spacing:.04em;color:var(--muted)}
    .gcard p{margin:0;font-weight:700}.gcard .p{color:var(--c1)}.gcard .q{color:var(--c2)}.gcard.ok{border-color:var(--ok)}.gcard.no{border-color:var(--bad)}
    .gcard .fb{font-size:.85rem}.gcard .btns{display:flex;gap:6px}
    .gsamp{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;font:700 .72rem var(--body);text-align:center}
    .gsamp div{padding:3px 0;border-radius:5px;background:var(--soft)}.gsamp .h{background:transparent;color:var(--muted)}.gsamp .on{background:color-mix(in srgb,var(--c4) 45%,var(--surface))}
    .gbars{display:grid;grid-template-columns:repeat(11,1fr);gap:3px;align-items:end;height:120px;padding:6px;background:var(--soft);border-radius:12px}
    .gbars div{background:var(--c1);border-radius:5px 5px 0 0;position:relative;transition:height .3s}.gbars div.on{background:var(--c4)}
    .gbars span{position:absolute;bottom:-18px;left:0;right:0;text-align:center;font:700 .7rem var(--body);color:var(--fg)}
    .die{display:inline-grid;grid-template-columns:repeat(3,10px);grid-template-rows:repeat(3,10px);gap:3px;padding:7px;border-radius:10px;background:var(--surface);border:2px solid var(--fg);margin-right:6px}
    .die i{width:10px;height:10px;border-radius:50%}.die i.d{background:var(--fg)}.die.roll{animation:gsroll .35s}
    @keyframes gsroll{0%{transform:rotate(0)}50%{transform:rotate(40deg) scale(1.15)}100%{transform:rotate(0)}}`;
    document.head.appendChild(c);
  }

  /* ================= 1. CONDITIONAL STATEMENTS ================= */
  const COND = [
    { p: "two angles are vertical angles", q: "they are congruent", np: "two angles are not vertical angles", nq: "they are not congruent", t: [1, 0, 0, 1],
      cx: { 1: "Two 40° angles in different triangles are congruent but are not vertical angles.", 2: "Two 40° angles in different triangles are not vertical, but they ARE congruent." } },
    { p: "a figure is a square", q: "it is a rectangle", np: "a figure is not a square", nq: "it is not a rectangle", t: [1, 0, 0, 1],
      cx: { 1: "A 2 by 5 rectangle is not a square.", 2: "A 2 by 5 rectangle is not a square, but it is a rectangle." } },
    { p: "x = 3", q: "x² = 9", np: "x ≠ 3", nq: "x² ≠ 9", t: [1, 0, 0, 1], cx: { 1: "x = −3 makes x² = 9, but x is not 3.", 2: "x = −3 is not 3, but x² = 9." } },
    { p: "an angle measures 90°", q: "it is a right angle", np: "an angle does not measure 90°", nq: "it is not a right angle", t: [1, 1, 1, 1], cx: {} },
    { p: "a number is even", q: "it is divisible by 4", np: "a number is not even", nq: "it is not divisible by 4", t: [0, 1, 1, 0],
      cx: { 0: "6 is even but is not divisible by 4.", 3: "6 is not divisible by 4, but it IS even." } }
  ];
  S.conditional = (el, o) => {
    const body = shell(el, o, "Conditional Statement Lab", "🔁"); let k = o.k || 0;
    body.innerHTML = `<div class="simcol"><div class="gpbtns">${COND.map((c, i) => `<button class="pill-btn sm" data-k="${i}">${i + 1}</button>`).join("")}<span class="mu small">Pick a statement. Decide if each version is true or false.</span></div>
      <div class="simrow"><div class="gcards"></div><svg viewBox="0 0 300 220" class="simsvg gsv"><g class="vn"></g></svg></div></div>`;
    function draw() {
      const c = COND[k]; $$("[data-k]", body).forEach(b => b.classList.toggle("on", +b.dataset.k === k));
      const P = s => `<span class="p">${s}</span>`, Q = s => `<span class="q">${s}</span>`;
      const V = [["Conditional (condicional) p → q", `If ${P(c.p)}, then ${Q(c.q)}.`], ["Converse (recíproco) q → p", `If ${Q(c.q)}, then ${P(c.p)}.`], ["Inverse (inverso) ~p → ~q", `If ${P(c.np)}, then ${Q(c.nq)}.`], ["Contrapositive (contrarrecíproco) ~q → ~p", `If ${Q(c.nq)}, then ${P(c.np)}.`]];
      $(".gcards", body).innerHTML = V.map((v, i) => `<div class="gcard" data-c="${i}"><h5>${v[0]}</h5><p>${v[1]}</p><div class="btns"><button class="pill-btn sm" data-a="1">True</button><button class="pill-btn sm" data-a="0">False</button></div><div class="fb"></div></div>`).join("");
      $$(".gcard", body).forEach(card => $$("[data-a]", card).forEach(b => b.onclick = () => { const i = +card.dataset.c, ans = c.t[i], ok = +b.dataset.a === ans;
        card.classList.toggle("ok", ok); card.classList.toggle("no", !ok);
        $(".fb", card).innerHTML = `${ok ? "✅" : "❌"} It is <b>${ans ? "TRUE" : "FALSE"}</b>. ${ans ? "" : "Counterexample (contraejemplo): " + (c.cx[i] || "")}`; }));
      const sT = c.t[0], cT = c.t[1];
      let g = "";
      if (sT && cT) g = `<ellipse cx="150" cy="105" rx="110" ry="80" class="gtri2"/><ellipse cx="150" cy="105" rx="104" ry="74" class="gtri"/><text class="glbl" x="150" y="110" text-anchor="middle">p and q are the same set</text><text class="glblm" x="150" y="205" text-anchor="middle">biconditional: p ↔ q</text>`;
      else if (sT) g = `<ellipse cx="150" cy="105" rx="130" ry="88" class="gtri2"/><ellipse cx="125" cy="115" rx="60" ry="42" class="gtri"/><text class="glbl" x="125" y="120" text-anchor="middle" style="fill:var(--c1)">p</text><text class="glbl" x="240" y="60" text-anchor="middle" style="fill:var(--c2)">q</text><circle cx="225" cy="120" r="6" class="gdot"/><text class="glblm" x="225" y="142" text-anchor="middle">q but not p</text><text class="glblm" x="150" y="210" text-anchor="middle">Every p is inside q, so p → q is true.</text>`;
      else g = `<ellipse cx="190" cy="110" rx="70" ry="50" class="gtri2"/><ellipse cx="120" cy="110" rx="90" ry="70" class="gtri"/><text class="glbl" x="70" y="80" text-anchor="middle" style="fill:var(--c1)">p</text><text class="glbl" x="240" y="80" text-anchor="middle" style="fill:var(--c2)">q</text><circle cx="80" cy="130" r="6" class="gdot"/><text class="glblm" x="80" y="152" text-anchor="middle">p but not q</text><text class="glblm" x="150" y="210" text-anchor="middle">Some p are outside q, so p → q is false.</text>`;
      $(".vn", body).innerHTML = g;
    }
    $$("[data-k]", body).forEach(b => b.onclick = () => { k = +b.dataset.k; draw(); });
    draw();
  };

  /* ================= 2. CONGRUENT TRIANGLE SHORTCUTS ================= */
  S.congruent = (el, o) => {
    const body = shell(el, o, "Congruence Shortcut Checker", "🔺");
    const A = [50, 190], B = [210, 190], C = [150, 60];
    const M = (p, dx) => [dx - p[0] + 0, p[1]]; /* mirror */
    const D = M(A, 560), E = M(B, 560), F = M(C, 560);
    const PARTS = [["AB", "s", [0, 1]], ["BC", "s", [1, 2]], ["CA", "s", [2, 0]], ["∠A", "a", 0], ["∠B", "a", 1], ["∠C", "a", 2]];
    const on = new Set(o.marked || []);
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 560 230" class="simsvg"><g class="ct"></g></svg>
      <div class="gpbtns"><b class="small" style="align-self:center">Mark congruent parts:</b>${PARTS.map((p, i) => `<button class="pill-btn sm" data-p="${i}">${p[0]} ≅ ${["DE", "EF", "FD", "∠D", "∠E", "∠F"][i]}</button>`).join("")}<button class="pill-btn sm" data-clr>Clear</button></div>
      <div class="gpbtns"><b class="small" style="align-self:center">Try:</b>${["SSS", "SAS", "ASA", "AAS", "SSA", "AAA"].map(x => `<button class="pill-btn sm" data-try="${x}">${x}</button>`).join("")}</div><div class="simout"></div></div>`;
    const TRY = { SSS: [0, 1, 2], SAS: [0, 1, 4], ASA: [3, 4, 0], AAS: [3, 4, 1], SSA: [0, 1, 3], AAA: [3, 4, 5] };
    function marks(T, set) {
      let g = ""; const n = [0, 0, 0];
      let si = 0; PARTS.forEach((p, i) => { if (!set.has(i)) return;
        if (p[1] === "s") { si++; const [u, v] = p[2], P1 = T[u], P2 = T[v], mx = (P1[0] + P2[0]) / 2, my = (P1[1] + P2[1]) / 2, L = dist(P1, P2), ux = (P2[0] - P1[0]) / L, uy = (P2[1] - P1[1]) / L;
          for (let t = 0; t < si; t++) { const ox = mx + ux * (t - (si - 1) / 2) * 7; const oy = my + uy * (t - (si - 1) / 2) * 7; g += `<line class="gmk" x1="${ox - uy * 9}" y1="${oy + ux * 9}" x2="${ox + uy * 9}" y2="${oy - ux * 9}"/>`; } }
        else { const v = p[2], P = T[v], Q1 = T[(v + 1) % 3], Q2 = T[(v + 2) % 3]; n[v]++;
          const a1 = Math.atan2(Q1[1] - P[1], Q1[0] - P[0]), a2 = Math.atan2(Q2[1] - P[1], Q2[0] - P[0]);
          const cnt = [3, 4, 5].filter(j => set.has(j)).indexOf(i) + 1;
          for (let t = 0; t < cnt; t++) { const r = 20 + t * 6; let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
            g += `<path class="gmkA" d="M${P[0] + r * Math.cos(a1)} ${P[1] + r * Math.sin(a1)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${P[0] + r * Math.cos(a2)} ${P[1] + r * Math.sin(a2)}"/>`; } } });
      return g;
    }
    function judge(set) {
      const s = [0, 1, 2].filter(i => set.has(i)), a = [3, 4, 5].filter(i => set.has(i));
      const incAng = (s1, s2) => { const S1 = PARTS[s1][2], S2 = PARTS[s2][2]; const v = S1.find(x => S2.includes(x)); return 3 + v; };
      const incSide = (a1, a2) => { const v1 = a1 - 3, v2 = a2 - 3; return [0, 1, 2].find(i => PARTS[i][2].includes(v1) && PARTS[i][2].includes(v2)); };
      if (s.length === 3) return ["SSS", true, "All three pairs of sides are congruent."];
      if (s.length === 2 && a.length >= 1) { const inc = incAng(s[0], s[1]); if (a.includes(inc)) return ["SAS", true, `The marked angle ${PARTS[inc][0]} is between the two marked sides (included).`]; if (a.length >= 2) { for (const x of a) for (const y of a) if (x < y) { const is = incSide(x, y); return [s.includes(is) ? "ASA" : "AAS", true, "Two angles and a side are marked."]; } } return ["SSA", false, "The angle is NOT between the two sides. SSA (or ASS) can make two different triangles, so it does not prove congruence (except HL for right triangles)."]; }
      if (a.length >= 2 && s.length >= 1) { const is = incSide(a[0], a[1]); if (s.includes(is)) return ["ASA", true, `The marked side ${PARTS[is][0]} is between the two marked angles (included).`]; return ["AAS", true, "The marked side is NOT between the two angles, but AAS still works: the third angles must be equal too (180° rule)."]; }
      if (a.length === 3 && !s.length) return ["AAA", false, "Same angles only proves the triangles are SIMILAR (same shape). One could be bigger."];
      return ["?", null, `You have marked ${set.size} part${set.size === 1 ? "" : "s"}. Mark at least 3 pairs.`];
    }
    function draw() {
      $$("[data-p]", body).forEach(b => b.classList.toggle("on", on.has(+b.dataset.p)));
      const T1 = [A, B, C], T2 = [D, E, F];
      let g = `<polygon class="gtri" points="${T1.map(p => p.join(",")).join(" ")}"/><polygon class="gtri2" points="${T2.map(p => p.join(",")).join(" ")}"/>` + marks(T1, on) + marks(T2, on);
      [["A", A, -14, 18], ["B", B, 12, 18], ["C", C, 0, -12], ["D", D, 14, 18], ["E", E, -12, 18], ["F", F, 0, -12]].forEach(([l, p, dx, dy]) => g += `<text class="glbl" x="${p[0] + dx}" y="${p[1] + dy}" text-anchor="middle">${l}</text>`);
      $(".ct", body).innerHTML = g;
      const [nm, ok, why] = judge(on);
      $(".simout", body).innerHTML = `<div class="simbig ${ok ? "win" : ""}">${ok === null ? "🤔" : ok ? "✅" : "❌"} <b>${nm}</b> ${ok ? "proves △ABC ≅ △DEF" : ok === false ? "does NOT prove congruence" : ""}</div><div class="note">${why}</div>`;
    }
    $$("[data-p]", body).forEach(b => b.onclick = () => { const i = +b.dataset.p; on.has(i) ? on.delete(i) : on.add(i); draw(); });
    $$("[data-try]", body).forEach(b => b.onclick = () => { on.clear(); TRY[b.dataset.try].forEach(i => on.add(i)); draw(); });
    $("[data-clr]", body).onclick = () => { on.clear(); draw(); };
    draw();
  };

  /* ================= 3. TRIANGLE ANGLE & SIDE EXPLORER ================= */
  S.triangle = (el, o) => {
    const body = shell(el, o, "Triangle Explorer", "📐");
    const P = { A: [70, 250], B: [330, 250], C: [190, 70] };
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 420 300" class="simsvg gsv"><g class="tg"></g></svg><div class="simcol"><p class="mu small" style="margin:0">👆 Drag the orange corners.</p><div class="simout"></div></div></div>`;
    const svg = $("svg", body);
    function arc(V, U, W, r, cls) { const a1 = Math.atan2(U[1] - V[1], U[0] - V[0]), a2 = Math.atan2(W[1] - V[1], W[0] - V[0]); let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      return `<path class="${cls}" d="M${V[0]} ${V[1]} L${V[0] + r * Math.cos(a1)} ${V[1] + r * Math.sin(a1)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${V[0] + r * Math.cos(a2)} ${V[1] + r * Math.sin(a2)} Z"/>`; }
    function draw() {
      const { A, B, C } = P; let a = angAt(B, A, C), b = angAt(A, B, C); a = Math.round(a); b = Math.round(b); const c = 180 - a - b;
      const sa = dist(B, C) / 20, sb = dist(A, C) / 20, sc = dist(A, B) / 20;
      const ext = [C[0] + (C[0] - A[0]) * 0.45, C[1] + (C[1] - A[1]) * 0.45];
      let g = `<line class="ext" x1="${C[0]}" y1="${C[1]}" x2="${ext[0]}" y2="${ext[1]}"/>` + arc(A, B, C, 30, "arcF") + arc(B, A, C, 30, "arcG") + arc(C, A, B, 30, "arcP") + arc(C, B, ext, 22, "arcF");
      g += `<polygon class="gtri" points="${[A, B, C].map(p => p.join(",")).join(" ")}" style="fill-opacity:.4"/>`;
      const lab = (p, t, dx, dy) => `<text class="glbl" x="${p[0] + dx}" y="${p[1] + dy}" text-anchor="middle">${t}</text>`;
      const cen = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3], off = (p, k) => { const v = [p[0] - cen[0], p[1] - cen[1]], L = Math.hypot(...v) || 1; return [v[0] / L * k, v[1] / L * k]; };
      [["A", A, a], ["B", B, b], ["C", C, c]].forEach(([n, p, v]) => { const d = off(p, 20); g += lab(p, n, d[0], d[1] + 5); const d2 = off(p, -56); g += `<text class="glblm" x="${p[0] + d2[0]}" y="${p[1] + d2[1] + 4}" text-anchor="middle">${v}°</text>`; });
      g += `<text class="glblm" x="${ext[0]}" y="${ext[1] - 8}" text-anchor="middle" style="fill:var(--c2)">exterior ${180 - c}°</text>`;
      g += ["A", "B", "C"].map(n => `<circle class="hdl" data-h="${n}" cx="${P[n][0]}" cy="${P[n][1]}" r="10"/>`).join("");
      $(".tg", body).innerHTML = g;
      const sides = [["BC (across from ∠A)", sa, a], ["CA (across from ∠B)", sb, b], ["AB (across from ∠C)", sc, c]].sort((x, y) => y[1] - x[1]);
      const kind = Math.max(a, b, c) > 90 ? "obtuse (obtusángulo)" : Math.max(a, b, c) === 90 ? "right (rectángulo)" : "acute (acutángulo)";
      const eq = [sa, sb, sc].map(R1), sk = eq[0] === eq[1] && eq[1] === eq[2] ? "equilateral" : eq[0] === eq[1] || eq[1] === eq[2] || eq[0] === eq[2] ? "isosceles" : "scalene";
      $(".simout", body).innerHTML = `<div class="simbig">∠A + ∠B + ∠C = ${a}° + ${b}° + ${c}° = <b>180°</b></div>
        <div>Exterior angle at C = ${180 - c}° = ∠A + ∠B = ${a}° + ${b}° ✓ ${es("ángulo exterior")}</div>
        <div><b>Longest side:</b> ${sides[0][0]} = ${R1(sides[0][1])} → the <b>largest angle</b> (${sides[0][2]}°) is across from it.</div>
        <div><b>Shortest side:</b> ${sides[2][0]} = ${R1(sides[2][1])} → across from the smallest angle (${sides[2][2]}°).</div>
        <div class="note">This triangle is <b>${kind}</b> and <b>${sk}</b>.</div>`;
    }
    dragger(svg, (h, x, y) => { P[h] = [clamp(x, 15, 405), clamp(y, 15, 285)]; draw(); });
    draw();
  };

  /* ================= 4. TRIANGLE INEQUALITY STICKS ================= */
  S.triineq = (el, o) => {
    const body = shell(el, o, "Can These Sticks Make a Triangle?", "🥢");
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 520 230" class="simsvg"><g class="sg2"></g></svg>
      <div class="simrow2"><div class="simgrp k1">${sl("a", "Side a (red)", 1, 12, 1, o.a ?? 4)}${sl("b", "Side b (blue)", 1, 12, 1, o.b ?? 5)}${sl("c", "Base c (green)", 1, 12, 1, o.c ?? 10)}</div><div class="steps"></div></div></div>`;
    function draw() {
      const a = rd(body, "a"), b = rd(body, "b"), c = rd(body, "c"), u = 34, x0 = 260 - c * u / 2, x1 = 260 + c * u / 2, y = 200;
      const ok = a + b > c && a + c > b && b + c > a;
      let g = `<line class="stick" x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#1aa36f"/>`;
      if (ok) { const px = (a * a - b * b + c * c) / (2 * c), py = Math.sqrt(Math.max(0, a * a - px * px)); const T = [x0 + px * u, y - py * u];
        const sc = Math.min(1, 180 / (py * u || 1)); const T2 = [x0 + px * u, y - py * u * sc];
        g += `<line class="stick" x1="${x0}" y1="${y}" x2="${T2[0]}" y2="${T2[1]}" stroke="#d0453a"/><line class="stick" x1="${x1}" y1="${y}" x2="${T2[0]}" y2="${T2[1]}" stroke="#2b7de9"/><circle cx="${T2[0]}" cy="${T2[1]}" r="7" class="gdot"/>`; void T; }
      else { const ang = 0.35; g += `<line class="stick" x1="${x0}" y1="${y}" x2="${x0 + a * u * Math.cos(ang)}" y2="${y - a * u * Math.sin(ang)}" stroke="#d0453a"/><line class="stick" x1="${x1}" y1="${y}" x2="${x1 - b * u * Math.cos(ang)}" y2="${y - b * u * Math.sin(ang)}" stroke="#2b7de9"/>`;
        if (a + b <= c) g += `<text class="glbl" x="260" y="60" text-anchor="middle">${a + b === c ? "The ends just touch: they lie FLAT on the base." : "The two sides can’t reach each other!"}</text>`;
        else g += `<text class="glbl" x="260" y="60" text-anchor="middle">One stick is too long for the other two.</text>`; }
      g += `<text class="glblm" x="260" y="224" text-anchor="middle">c = ${c}</text>`;
      $(".sg2", body).innerHTML = g;
      const chk = (p, q, r, n) => `<div>${p} + ${q} = ${p + q} ${p + q > r ? "&gt;" : "≤"} ${r} ${p + q > r ? "✅" : "❌"} <span class="note">(${n})</span></div>`;
      $(".steps", body).innerHTML = chk(a, b, c, "a + b > c") + chk(a, c, b, "a + c > b") + chk(b, c, a, "b + c > a") +
        `<div class="simbig ${ok ? "win" : ""}">${ok ? "✅ Yes, a triangle!" : "❌ No triangle"}</div><div class="note">Triangle Inequality ${es("desigualdad triangular")}: the two shorter sides must add up to MORE than the longest side. The third side must be between ${Math.abs(a - b)} and ${a + b} (not equal).</div>`;
    }
    body.addEventListener("input", draw); draw();
  };

  /* ================= 5. DILATIONS & SIMILARITY ================= */
  S.dilate = (el, o) => {
    const body = shell(el, o, "Dilation Lab", "🔍"), R = 10, W = 380, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    const T = o.pts || [[1, 1], [3, 1], [1, 3]];
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq"><g class="gr"></g><g class="dl"></g></svg>
      <div class="simcol"><div class="simgrp k1">${sl("k", "Scale factor k", 0.25, 3, 0.25, o.k ?? 2)}</div><div class="simout"></div></div></div>`;
    let gr = ""; for (let i = -R; i <= R; i++) { const p = W / 2 + i * s; gr += `<line class="sg ${i === 0 ? "ax" : ""}" x1="${p}" y1="0" x2="${p}" y2="${W}"/><line class="sg ${i === 0 ? "ax" : ""}" x1="0" y1="${p}" x2="${W}" y2="${p}"/>`; if (i && i % 2 === 0) gr += `<text class="st" x="${p}" y="${W / 2 + 13}" text-anchor="middle">${N(i)}</text><text class="st" x="${W / 2 - 5}" y="${W / 2 - i * s + 4}" text-anchor="end">${N(i)}</text>`; }
    $(".gr", body).innerHTML = gr;
    const L = ["A", "B", "C"];
    function draw() {
      const k = rd(body, "k"), I = T.map(p => [p[0] * k, p[1] * k]);
      let g = I.map(p => `<line class="ray" x1="${X(0)}" y1="${Y(0)}" x2="${X(p[0] * 1.15)}" y2="${Y(p[1] * 1.15)}"/>`).join("");
      g += `<polygon class="gtri" points="${T.map(p => X(p[0]) + "," + Y(p[1])).join(" ")}"/><polygon class="gtri2" points="${I.map(p => X(p[0]) + "," + Y(p[1])).join(" ")}"/><circle cx="${X(0)}" cy="${Y(0)}" r="5" class="gdot"/><text class="glblm" x="${X(0) - 8}" y="${Y(0) + 16}" text-anchor="end">center</text>`;
      I.forEach((p, i) => g += `<text class="glbl" x="${X(p[0]) + 8}" y="${Y(p[1]) - 6}" style="fill:var(--c2)">${L[i]}′</text>`); T.forEach((p, i) => g += `<text class="glbl" x="${X(p[0]) - 14}" y="${Y(p[1]) + 16}" style="fill:var(--c1)">${L[i]}</text>`);
      $(".dl", body).innerHTML = g;
      const per = pts => dist(pts[0], pts[1]) + dist(pts[1], pts[2]) + dist(pts[2], pts[0]);
      const area = pts => Math.abs((pts[1][0] - pts[0][0]) * (pts[2][1] - pts[0][1]) - (pts[2][0] - pts[0][0]) * (pts[1][1] - pts[0][1])) / 2;
      $(".simout", body).innerHTML = `<table class="simtbl"><tr><th>Point</th><th>Original</th><th>Image (× ${N(k)})</th></tr>${T.map((p, i) => `<tr><td>${L[i]}</td><td>(${N(p[0])}, ${N(p[1])})</td><td>(${N(I[i][0])}, ${N(I[i][1])})</td></tr>`).join("")}</table>
        <div>Side AB: ${N(dist(T[0], T[1]))} → ${N(dist(I[0], I[1]))} (× ${N(k)})</div><div>Perimeter: ${N(per(T))} → ${N(per(I))} <b>(× ${N(k)})</b></div><div>Area: ${N(area(T))} → ${N(area(I))} <b>(× ${N(k)}² = × ${N(k * k)})</b></div>
        <div class="simbig">${k > 1 ? "k &gt; 1: an <b>enlargement</b> " + es("ampliación") : k < 1 ? "0 &lt; k &lt; 1: a <b>reduction</b> " + es("reducción") : "k = 1: same size (congruent)"}</div><div class="note">Angles stay the same, so the triangles are <b>similar</b>. Lengths multiply by k, but area multiplies by k².</div>`;
    }
    body.addEventListener("input", draw); draw();
  };

  /* ================= 6. QUADRILATERAL LAB ================= */
  const QP = { square: [[-3, -3], [3, -3], [3, 3], [-3, 3]], rectangle: [[-5, -2], [4, -2], [4, 3], [-5, 3]], rhombus: [[0, -5], [3, 0], [0, 5], [-3, 0]], parallelogram: [[-5, -3], [3, -3], [5, 2], [-3, 2]], trapezoid: [[-5, -3], [5, -3], [2, 3], [-2, 3]], kite: [[0, -5], [3, 1], [0, 3], [-3, 1]] };
  S.quadlab = (el, o) => {
    const body = shell(el, o, "Quadrilateral Lab", "🔷"), R = 7, W = 380, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    let V = (QP[o.shape] || QP.parallelogram).map(p => [...p]), diag = true;
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq"><g class="gr"></g><g class="qd"></g></svg>
      <div class="simcol"><div class="gpbtns">${Object.keys(QP).map(k => `<button class="pill-btn sm" data-q="${k}">${k}</button>`).join("")}<button class="pill-btn sm" data-dg>Diagonals on/off</button></div><p class="mu small" style="margin:0">👆 Drag a corner. Corners snap to the grid.</p><div class="simout"></div></div></div>`;
    let gr = ""; for (let i = -R; i <= R; i++) { const p = W / 2 + i * s; gr += `<line class="sg ${i === 0 ? "ax" : ""}" x1="${p}" y1="0" x2="${p}" y2="${W}"/><line class="sg ${i === 0 ? "ax" : ""}" x1="0" y1="${p}" x2="${W}" y2="${p}"/>`; }
    $(".gr", body).innerHTML = gr;
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1]], cr = (a, b) => a[0] * b[1] - a[1] * b[0], dot = (a, b) => a[0] * b[0] + a[1] * b[1], len = a => Math.hypot(...a);
    const par = (a, b) => cr(a, b) === 0, perp = (a, b) => dot(a, b) === 0;
    function classify() {
      const E = [0, 1, 2, 3].map(i => sub(V[(i + 1) % 4], V[i])), L = E.map(e => dot(e, e));
      const segX = (p1, p2, p3, p4) => { const d = (a, b, c) => cr(sub(b, a), sub(c, a)); return d(p1, p2, p3) * d(p1, p2, p4) < 0 && d(p3, p4, p1) * d(p3, p4, p2) < 0; };
      if (segX(V[0], V[1], V[2], V[3]) || segX(V[1], V[2], V[3], V[0]) || L.some(x => x === 0)) return { name: "Not a simple quadrilateral: the sides cross or two corners are on the same point. Move a corner.", bad: true };
      const p1 = par(E[0], E[2]), p2 = par(E[1], E[3]), rt = [0, 1, 2, 3].every(i => perp(E[i], E[(i + 1) % 4])), eqAll = L.every(x => x === L[0]);
      const d1 = sub(V[2], V[0]), d2 = sub(V[3], V[1]);
      const kite = (L[0] === L[1] && L[2] === L[3]) || (L[1] === L[2] && L[3] === L[0]);
      let name, es2;
      if (p1 && p2) { if (rt && eqAll) [name, es2] = ["Square", "cuadrado"]; else if (rt) [name, es2] = ["Rectangle", "rectángulo"]; else if (eqAll) [name, es2] = ["Rhombus", "rombo"]; else [name, es2] = ["Parallelogram", "paralelogramo"]; }
      else if (p1 || p2) { const legs = p1 ? [L[1], L[3]] : [L[0], L[2]]; [name, es2] = legs[0] === legs[1] ? ["Isosceles trapezoid", "trapecio isósceles"] : ["Trapezoid", "trapecio"]; }
      else if (kite) [name, es2] = ["Kite", "cometa / deltoide"]; else [name, es2] = ["Quadrilateral (no special name)", "cuadrilátero"];
      const mid1 = [(V[0][0] + V[2][0]) / 2, (V[0][1] + V[2][1]) / 2], mid2 = [(V[1][0] + V[3][0]) / 2, (V[1][1] + V[3][1]) / 2];
      return { name, es2, props: [
        ["Pairs of parallel sides", (p1 ? 1 : 0) + (p2 ? 1 : 0)],
        ["All 4 angles are right angles", rt ? "yes" : "no"],
        ["All 4 sides are congruent", eqAll ? "yes" : "no"],
        ["Opposite sides congruent", L[0] === L[2] && L[1] === L[3] ? "yes" : "no"],
        ["Diagonals bisect each other", mid1[0] === mid2[0] && mid1[1] === mid2[1] ? "yes" : "no"],
        ["Diagonals are congruent", dot(d1, d1) === dot(d2, d2) ? "yes" : "no"],
        ["Diagonals are perpendicular", perp(d1, d2) ? "yes" : "no"]], sides: L.map(x => N(Math.sqrt(x))) };
    }
    function draw() {
      const c = classify();
      let g = `<polygon class="quad" points="${V.map(p => X(p[0]) + "," + Y(p[1])).join(" ")}"/>`;
      if (diag) g += `<line class="gdiag" x1="${X(V[0][0])}" y1="${Y(V[0][1])}" x2="${X(V[2][0])}" y2="${Y(V[2][1])}"/><line class="gdiag" x1="${X(V[1][0])}" y1="${Y(V[1][1])}" x2="${X(V[3][0])}" y2="${Y(V[3][1])}"/>`;
      V.forEach((p, i) => g += `<circle class="hdl" data-h="${i}" cx="${X(p[0])}" cy="${Y(p[1])}" r="10"/><text class="glbl" x="${X(p[0]) + 12}" y="${Y(p[1]) - 10}">${"ABCD"[i]}</text>`);
      $(".qd", body).innerHTML = g;
      $(".simout", body).innerHTML = c.bad ? `<div class="simbig">${c.name}</div>` : `<div class="simbig win">This is a <b>${c.name}</b> ${es(c.es2)}</div><table class="simtbl">${c.props.map(p => `<tr><td>${p[0]}</td><td><b>${p[1]}</b></td></tr>`).join("")}</table><div class="note mu small">Side lengths AB, BC, CD, DA: ${c.sides.join(", ")}</div>`;
    }
    dragger($("svg", body), (h, x, y) => { const i = +h, nx = clamp(Math.round((x - W / 2) / s), -R + 1, R - 1), ny = clamp(Math.round((W / 2 - y) / s), -R + 1, R - 1); if (V[i][0] === nx && V[i][1] === ny) return; V[i] = [nx, ny]; draw(); });
    $$("[data-q]", body).forEach(b => b.onclick = () => { V = QP[b.dataset.q].map(p => [...p]); draw(); });
    $("[data-dg]", body).onclick = () => { diag = !diag; draw(); };
    draw();
  };

  /* ================= 7. CIRCLE ANGLES, ARCS & SECTORS ================= */
  S.circle = (el, o) => {
    const body = shell(el, o, "Circle Angle Lab", "⭕"), cx = 200, cy = 200, r = 150;
    const T = { A: o.A ?? 200, B: o.B ?? 320, P: o.P ?? 80 }; /* degrees (math direction, y up) */
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 400 400" class="simsvg sq"><g class="cg"></g></svg>
      <div class="simcol"><p class="mu small" style="margin:0">👆 Drag the orange points A, B, and P around the circle.</p><div class="simgrp k1">${sl("rr", "Radius r (cm)", 1, 12, 1, o.r ?? 6)}</div><div class="simout"></div></div></div>`;
    const pos = d => [cx + r * Math.cos(d * Math.PI / 180), cy - r * Math.sin(d * Math.PI / 180)];
    const m360 = x => ((x % 360) + 360) % 360;
    function draw() {
      const A = pos(T.A), B = pos(T.B), P = pos(T.P), rr = rd(body, "rr");
      const ccw = m360(T.B - T.A), pIn = m360(T.P - T.A) < ccw;
      const arc = pIn ? 360 - ccw : ccw; /* intercepted arc (the side away from P) */
      const insc = angAt(A, P, B);
      const start = pIn ? T.B : T.A, sweep = arc, large = sweep > 180 ? 1 : 0;
      const S0 = pos(start), S1 = pos(start + sweep);
      let g = `<path d="M${cx} ${cy} L${S0[0]} ${S0[1]} A${r} ${r} 0 ${large} 0 ${S1[0]} ${S1[1]} Z" class="arcG" style="opacity:.55"/>`;
      g += `<circle class="gcirc" cx="${cx}" cy="${cy}" r="${r}"/><path class="hiarc" d="M${S0[0]} ${S0[1]} A${r} ${r} 0 ${large} 0 ${S1[0]} ${S1[1]}"/>`;
      g += `<line class="chord" x1="${P[0]}" y1="${P[1]}" x2="${A[0]}" y2="${A[1]}"/><line class="chord" x1="${P[0]}" y1="${P[1]}" x2="${B[0]}" y2="${B[1]}"/>`;
      g += `<line class="chord2" x1="${cx}" y1="${cy}" x2="${A[0]}" y2="${A[1]}"/><line class="chord2" x1="${cx}" y1="${cy}" x2="${B[0]}" y2="${B[1]}"/><circle cx="${cx}" cy="${cy}" r="5" class="gdot"/><text class="glbl" x="${cx + 8}" y="${cy + 18}">O</text>`;
      const lab = (d, t) => { const q = [cx + (r + 22) * Math.cos(d * Math.PI / 180), cy - (r + 22) * Math.sin(d * Math.PI / 180) + 5]; return `<text class="glbl" x="${q[0]}" y="${q[1]}" text-anchor="middle">${t}</text>`; };
      g += lab(T.A, "A") + lab(T.B, "B") + lab(T.P, "P") + ["A", "B", "P"].map(k => { const q = pos(T[k]); return `<circle class="hdl" data-h="${k}" cx="${q[0]}" cy="${q[1]}" r="11"/>`; }).join("");
      $(".cg", body).innerHTML = g;
      const al = arc / 360 * 2 * Math.PI * rr, sa = arc / 360 * Math.PI * rr * rr;
      $(".simout", body).innerHTML = `<div><b style="color:var(--c4)">Intercepted arc AB</b> ${es("arco")} = <b>${Math.round(arc)}°</b></div>
        <div><b style="color:var(--c2)">Central angle ∠AOB</b> ${es("ángulo central")} = <b>${Math.round(arc)}°</b> (equals the arc)</div>
        <div><b style="color:var(--c1)">Inscribed angle ∠APB</b> ${es("ángulo inscrito")} = <b>${Math.round(insc)}°</b></div>
        <div class="simbig">${Math.round(insc)}° = ½ · ${Math.round(arc)}° ${Math.abs(Math.round(arc) - 180) <= 1 ? "· AB is a diameter, so the inscribed angle is 90°!" : ""}</div>
        <div>Arc length = (${Math.round(arc)}/360) · 2π(${rr}) ≈ <b>${R1(al)} cm</b></div><div>Sector area = (${Math.round(arc)}/360) · π(${rr})² ≈ <b>${R1(sa)} cm²</b></div>`;
    }
    dragger($("svg", body), (h, x, y) => { let d = Math.round(Math.atan2(cy - y, x - cx) * 180 / Math.PI); d = m360(d); const others = ["A", "B", "P"].filter(k => k !== h); if (others.some(k => Math.abs(m360(T[k] - d + 180) - 180) < 6)) return; T[h] = d; draw(); });
    body.addEventListener("input", draw); draw();
  };

  /* ================= 8. SOLIDS: VOLUME & SURFACE AREA ================= */
  S.solids = (el, o) => {
    const body = shell(el, o, "Solids Lab", "🧊");
    const K = { prism: "Rectangular prism", cyl: "Cylinder", pyr: "Square pyramid", cone: "Cone", sph: "Sphere" };
    let kind = o.kind || "cyl", fill = 0;
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 400 300" class="simsvg gsv"><g class="sd"></g></svg>
      <div class="simcol"><div class="gpbtns">${Object.keys(K).map(k => `<button class="pill-btn sm" data-k="${k}">${K[k]}</button>`).join("")}</div>
        <div class="simgrp k1">${sl("a", "r or side", 1, 8, 1, o.a ?? 3)}${sl("h", "height h", 1, 10, 1, o.h ?? 6)}${sl("w", "width w (prism only)", 1, 8, 1, o.w ?? 4)}</div>
        <div class="simbtns" data-pourw><button class="pill-btn dark sm" data-pour>🫗 Pour into the matching prism or cylinder</button></div><div class="simout"></div></div></div>`;
    function draw() {
      const a = rd(body, "a"), h = rd(body, "h"), w = rd(body, "w"); $$("[data-k]", body).forEach(b => b.classList.toggle("on", b.dataset.k === kind));
      $("[data-pourw]", body).hidden = !(kind === "pyr" || kind === "cone");
      const u = Math.min(16, 200 / Math.max(h, 2 * a, 1)), H = h * u, Rr = a * u, cx = kind === "pyr" || kind === "cone" ? 120 : 200, by = 250;
      let g = "", V, SA, fV, fS;
      const pi = Math.PI;
      if (kind === "prism") { const L = a * u * 1.6, D = w * u * 0.5; const x0 = 200 - L / 2;
        g = `<polygon class="quad" points="${x0},${by} ${x0 + L},${by} ${x0 + L},${by - H} ${x0},${by - H}"/><polygon class="quad" points="${x0},${by - H} ${x0 + D},${by - H - D} ${x0 + L + D},${by - H - D} ${x0 + L},${by - H}" style="fill-opacity:.35"/><polygon class="quad" points="${x0 + L},${by} ${x0 + L + D},${by - D} ${x0 + L + D},${by - H - D} ${x0 + L},${by - H}" style="fill-opacity:.25"/>
          <text class="glblm" x="200" y="${by + 18}" text-anchor="middle">l = ${a}</text><text class="glblm" x="${x0 - 8}" y="${by - H / 2}" text-anchor="end">h = ${h}</text><text class="glblm" x="${x0 + L + D / 2 + 10}" y="${by - D / 2 + 4}">w = ${w}</text>`;
        V = a * w * h; SA = 2 * (a * w + a * h + w * h); fV = `V = lwh = ${a} · ${w} · ${h}`; fS = `SA = 2(lw + lh + wh) = 2(${a * w} + ${a * h} + ${w * h})`; }
      const cyl = (x, R, Hh, lv) => `<path d="M${x - R} ${by - Hh} L${x - R} ${by} A${R} ${R * 0.3} 0 0 0 ${x + R} ${by} L${x + R} ${by - Hh}" class="quad"/>` + (lv ? `<path d="M${x - R} ${by - Hh * lv} L${x - R} ${by} A${R} ${R * 0.3} 0 0 0 ${x + R} ${by} L${x + R} ${by - Hh * lv} A${R} ${R * 0.3} 0 0 1 ${x - R} ${by - Hh * lv}" fill="color-mix(in srgb,var(--c1) 55%,transparent)"/>` : "") + `<ellipse cx="${x}" cy="${by - Hh}" rx="${R}" ry="${R * 0.3}" class="quad" style="fill-opacity:.3"/>`;
      const box = (x, L, Hh, lv) => `<rect x="${x - L / 2}" y="${by - Hh}" width="${L}" height="${Hh}" class="quad"/>` + (lv ? `<rect x="${x - L / 2}" y="${by - Hh * lv}" width="${L}" height="${Hh * lv}" fill="color-mix(in srgb,var(--c1) 55%,transparent)"/>` : "");
      if (kind === "cyl") { g = cyl(200, Rr, H, 0) + `<line x1="200" y1="${by}" x2="${200 + Rr}" y2="${by}" class="gdiag"/><text class="glblm" x="${200 + Rr / 2}" y="${by + Rr * 0.3 + 18}" text-anchor="middle">r = ${a}</text><text class="glblm" x="${200 - Rr - 8}" y="${by - H / 2}" text-anchor="end">h = ${h}</text>`;
        V = pi * a * a * h; SA = 2 * pi * a * a + 2 * pi * a * h; fV = `V = πr²h = π(${a})²(${h}) = ${a * a * h}π`; fS = `SA = 2πr² + 2πrh = ${2 * a * a}π + ${2 * a * h}π = ${2 * a * a + 2 * a * h}π`; }
      if (kind === "cone") { const sl2 = Math.sqrt(a * a + h * h);
        g = `<path d="M${cx - Rr} ${by} L${cx} ${by - H} L${cx + Rr} ${by} A${Rr} ${Rr * 0.3} 0 0 1 ${cx - Rr} ${by}" class="quad"/><ellipse cx="${cx}" cy="${by}" rx="${Rr}" ry="${Rr * 0.3}" class="quad" style="fill-opacity:.2"/><line x1="${cx}" y1="${by}" x2="${cx}" y2="${by - H}" class="gdiag"/><text class="glblm" x="${cx + 6}" y="${by - H / 2}">h = ${h}</text><text class="glblm" x="${cx}" y="${by + Rr * 0.3 + 18}" text-anchor="middle">r = ${a}</text>` + cyl(300, Rr, H, fill / 3) + `<text class="glblm" x="300" y="${by + Rr * 0.3 + 18}" text-anchor="middle">same r and h</text>`;
        V = pi * a * a * h / 3; SA = pi * a * a + pi * a * sl2; fV = `V = ⅓πr²h = ⅓π(${a})²(${h}) = ${N(a * a * h / 3)}π`; fS = `SA = πr² + πrℓ, slant ℓ = √(${a}² + ${h}²) ≈ ${R1(sl2)}`; }
      if (kind === "pyr") { const sl2 = Math.sqrt((a / 2) ** 2 + h * h), L = a * u * 1.4;
        g = `<polygon class="quad" points="${cx - L / 2},${by} ${cx + L / 2},${by} ${cx},${by - H}"/><polygon class="quad" points="${cx + L / 2},${by} ${cx + L / 2 + L * 0.3},${by - L * 0.2} ${cx},${by - H}" style="fill-opacity:.3"/><line x1="${cx}" y1="${by - L * 0.1}" x2="${cx}" y2="${by - H}" class="gdiag"/><text class="glblm" x="${cx + 6}" y="${by - H / 2}">h = ${h}</text><text class="glblm" x="${cx}" y="${by + 18}" text-anchor="middle">s = ${a}</text>` + box(310, L, H, fill / 3) + `<text class="glblm" x="310" y="${by + 18}" text-anchor="middle">same base and h</text>`;
        V = a * a * h / 3; SA = a * a + 2 * a * sl2; fV = `V = ⅓Bh = ⅓(${a}²)(${h}) = ${N(V)}`; fS = `SA = s² + 4(½ · s · ℓ), slant ℓ = √(${a / 2}² + ${h}²) ≈ ${R1(sl2)}`; }
      if (kind === "sph") { g = `<circle cx="200" cy="${by - Rr}" r="${Rr}" class="quad"/><ellipse cx="200" cy="${by - Rr}" rx="${Rr}" ry="${Rr * 0.28}" fill="none" class="gdiag"/><line x1="200" y1="${by - Rr}" x2="${200 + Rr}" y2="${by - Rr}" class="chord2"/><text class="glblm" x="${200 + Rr / 2}" y="${by - Rr - 8}" text-anchor="middle">r = ${a}</text>`;
        V = 4 / 3 * pi * a ** 3; SA = 4 * pi * a * a; fV = `V = ⁴⁄₃πr³ = ⁴⁄₃π(${a})³ = ${N(4 * a ** 3 / 3)}π`; fS = `SA = 4πr² = 4π(${a})² = ${4 * a * a}π`; }
      $(".sd", body).innerHTML = g;
      $(".simout", body).innerHTML = `<div class="simbig">${K[kind]}</div><div>${fV} ≈ <b>${R1(V)} units³</b> ${es("volumen")}</div><div>${fS} ≈ <b>${R1(SA)} units²</b> ${es("área total")}</div>
        ${kind === "pyr" || kind === "cone" ? `<div class="note">Poured ${fill} of 3 ${fill === 3 ? "→ it takes exactly <b>3</b> to fill it. That is why the formula has ⅓!" : ""}</div>` : `<div class="note">Volume counts cubes that fill the solid. Surface area counts squares that cover the outside.</div>`}`;
    }
    $$("[data-k]", body).forEach(b => b.onclick = () => { kind = b.dataset.k; fill = 0; draw(); });
    $("[data-pour]", body).onclick = () => { fill = fill >= 3 ? 1 : fill + 1; draw(); };
    body.addEventListener("input", () => { fill = 0; draw(); }); draw();
  };

  /* ================= 9. DICE PROBABILITY ================= */
  S.dice = (el, o) => {
    const body = shell(el, o, "Two-Dice Probability Lab", "🎲");
    const EV = { sum7: ["Sum is 7", (a, b) => a + b === 7], doubles: ["Doubles", (a, b) => a === b], sum10: ["Sum is 10 or more", (a, b) => a + b >= 10], six: ["At least one 6", (a, b) => a === 6 || b === 6], even: ["Sum is even", (a, b) => (a + b) % 2 === 0] };
    let ev = o.event || "sum7", rolls = [], last = [3, 4];
    body.innerHTML = `<div class="simcol"><div class="gpbtns">${Object.keys(EV).map(k => `<button class="pill-btn sm" data-e="${k}">${EV[k][0]}</button>`).join("")}</div>
      <div class="simrow"><div class="simcol"><div class="dz"></div><div class="simbtns"><button class="pill-btn dark sm" data-r="1">Roll 1</button><button class="pill-btn dark sm" data-r="10">Roll 10</button><button class="pill-btn dark sm" data-r="100">Roll 100</button><button class="pill-btn sm" data-r="0">↻ Reset</button></div>
        <b class="small">Frequency of each sum</b><div class="gbars"></div><div style="height:14px"></div></div>
        <div class="simcol"><b class="small">Sample space: all 36 outcomes ${es("espacio muestral")}</b><div class="gsamp"></div><div class="simout"></div></div></div></div>`;
    const PIPS = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
    const die = (n, roll) => `<span class="die ${roll ? "roll" : ""}">${[...Array(9).keys()].map(i => `<i class="${PIPS[n].includes(i) ? "d" : ""}"></i>`).join("")}</span>`;
    function draw(roll) {
      const f = EV[ev][1]; $$("[data-e]", body).forEach(b => b.classList.toggle("on", b.dataset.e === ev));
      $(".dz", body).innerHTML = die(last[0], roll) + die(last[1], roll) + `<b style="font:800 1.3rem var(--display)"> = ${last[0] + last[1]}</b>`;
      let cells = `<div class="h">+</div>${[1, 2, 3, 4, 5, 6].map(b => `<div class="h">${b}</div>`).join("")}`, fav = 0;
      for (let a = 1; a <= 6; a++) { cells += `<div class="h">${a}</div>`; for (let b = 1; b <= 6; b++) { const on = f(a, b); fav += on; cells += `<div class="${on ? "on" : ""}">${a + b}</div>`; } }
      $(".gsamp", body).innerHTML = cells;
      const cnt = Array(13).fill(0); rolls.forEach(([a, b]) => cnt[a + b]++); const mx = Math.max(1, ...cnt);
      $(".gbars", body).innerHTML = [...Array(11).keys()].map(i => { const s = i + 2, on = [...Array(6).keys()].some(a => { const b = s - (a + 1); return b >= 1 && b <= 6 && f(a + 1, b); }); return `<div class="${on ? "on" : ""}" style="height:${cnt[s] / mx * 100}%"><span>${s}</span></div>`; }).join("");
      const hits = rolls.filter(([a, b]) => f(a, b)).length, n = rolls.length;
      $(".simout", body).innerHTML = `<div><b>Theoretical</b> ${es("teórica")}: ${fav}/36 = <b>${R1(fav / 36 * 100)}%</b></div><div><b>Experimental</b> ${es("experimental")}: ${n ? `${hits}/${n} = <b>${R1(hits / n * 100)}%</b>` : "roll the dice!"}</div><div class="note">The more you roll, the closer the experimental probability usually gets to the theoretical probability (the Law of Large Numbers).</div>`;
    }
    $$("[data-e]", body).forEach(b => b.onclick = () => { ev = b.dataset.e; draw(); });
    $$("[data-r]", body).forEach(b => b.onclick = () => { const k = +b.dataset.r; if (!k) { rolls = []; draw(); return; } for (let i = 0; i < k; i++) { last = [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)]; rolls.push(last); } draw(true); });
    draw();
  };
})();
