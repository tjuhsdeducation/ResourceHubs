/* =====================================================================
   🔬 ALGEBRA 1 UNIT SIMULATIONS (no need to edit)
   Loaded after rc-sims.js. Add to any study guide with a block like:
       { sim: "compound", title: "Compound Inequality Builder", mode: "and", a: -2, b: 4 }
   Available here: compound, vline, sysineq, growth, factor, radtree, dotplot
   Simulations are for practice. They are NOT graded.
   ===================================================================== */
(function () {
  if (!window.RCSIM) return;
  const S = window.RCSIM;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const N = n => { const r = Math.round(n * 1000) / 1000; const z = Object.is(r, -0) ? 0 : r; return z < 0 ? "−" + Math.abs(z) : String(z); };
  const P = n => n < 0 ? `(${N(n)})` : N(n);
  const R2 = n => Math.round(n * 100) / 100;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const $ = (s, r) => r.querySelector(s), $$ = (s, r) => [...r.querySelectorAll(s)];
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  function shell(el, o, def, icon) {
    el.innerHTML = `<div class="sim"><div class="simhead"><span class="simic">${icon}</span><b>${esc(o.title || def)}</b><span class="simtag">Simulation · try it · not graded</span></div><div class="simbody"></div>${o.tip ? `<p class="simtip">💡 ${o.tip}</p>` : ""}</div>`;
    return $(".simbody", el);
  }
  const sl = (id, label, min, max, step, val) => `<label class="simsl"><span>${label} <b data-v="${id}">${N(val)}</b></span><input type="range" data-s="${id}" min="${min}" max="${max}" step="${step}" value="${val}" aria-label="${esc(label)}"></label>`;
  const rd = (body, id) => { const v = +$(`[data-s=${id}]`, body).value; const b = $(`[data-v=${id}]`, body); if (b) b.textContent = N(v); return v; };
  const setv = (body, id, v) => { $(`[data-s=${id}]`, body).value = v; };
  function tween(ms, fn, done) { const t0 = performance.now(); const f = t => { const p = clamp((t - t0) / ms, 0, 1); fn(p); if (p < 1) requestAnimationFrame(f); else if (done) done(); }; requestAnimationFrame(f); }
  const es = s => `<i class="a1es">${s}</i>`;   /* Spanish helper label */

  if (!document.getElementById("rcsa1-css")) {
    const c = document.createElement("style"); c.id = "rcsa1-css";
    c.textContent = `
    .a1es{color:var(--muted);font-weight:600;font-size:.82em}
    .sim .nl{stroke:var(--fg);stroke-width:2}.sim .nlt{stroke:var(--muted);stroke-width:1.5}
    .sim .shade{stroke:var(--c1);stroke-width:9;stroke-linecap:round}.sim .shadeF{fill:var(--c1)}
    .sim .opn{fill:var(--surface);stroke:var(--c1);stroke-width:3}.sim .cls{fill:var(--c1);stroke:var(--c1);stroke-width:3}
    .sim .okp{fill:var(--c4);stroke:var(--surface);stroke-width:2}.sim .badp{fill:var(--bad);stroke:var(--surface);stroke-width:2}
    .sim .dist{stroke:var(--c3);stroke-width:2.5;fill:none}.sim .curve{stroke:var(--c1);stroke-width:3.5;fill:none}.sim .curvep{fill:var(--c1)}
    .sim .vln{stroke:var(--c2);stroke-width:3}.sim .vhit{fill:var(--c2);stroke:var(--surface);stroke-width:2}
    .sim .hp1{fill:color-mix(in srgb,var(--c1) 26%,transparent)}.sim .hp2{fill:color-mix(in srgb,var(--c2) 26%,transparent)}
    .sim .bd1{stroke:var(--c1);stroke-width:3}.sim .bd2{stroke:var(--c2);stroke-width:3}
    .sim .lnA{stroke:var(--c1);stroke-width:3;fill:none}.sim .lnB{stroke:var(--c2);stroke-width:3;fill:none}.sim .dA{fill:var(--c1)}.sim .dB{fill:var(--c2)}
    .sim .gl{stroke:var(--line);stroke-width:1}
    .a1tbl{border-collapse:collapse;font:700 .9rem var(--body);width:100%}.a1tbl th,.a1tbl td{border:1px solid var(--line);padding:4px 8px;text-align:center}.a1tbl th{background:var(--soft)}
    .a1tbl tr.hl td{background:color-mix(in srgb,var(--c4) 24%,var(--surface))}.a1tbl tr.now td{outline:2px solid var(--c3);outline-offset:-2px}
    .a1box{border-collapse:collapse;font:800 1.05rem var(--display);margin:4px auto}.a1box td,.a1box th{border:2px solid var(--line);padding:10px 14px;text-align:center;min-width:62px}
    .a1box th{background:var(--soft)}.a1box td{background:color-mix(in srgb,var(--c1) 12%,var(--surface));animation:simpop .4s both}.a1box td.k{background:color-mix(in srgb,var(--c3) 22%,var(--surface))}
    .a1dia{display:block;margin:auto;max-width:230px;width:100%}
    .sim .tnode circle{stroke:var(--fg);stroke-width:2;fill:var(--surface)}.sim .tnode.pr circle{fill:color-mix(in srgb,var(--c3) 35%,var(--surface));stroke:var(--c3);stroke-width:3}
    .sim .tnode text{font:800 14px var(--body);fill:var(--fg)}.sim .tnode{animation:simpop .45s both}.sim .tbr{stroke:var(--muted);stroke-width:2}
    .a1chips{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font:800 1.05rem var(--display)}
    .a1chips span{display:inline-grid;place-items:center;min-width:34px;height:34px;padding:0 6px;border-radius:10px;background:var(--soft);border:2px solid var(--line)}
    .a1chips span.pair{border-color:var(--c4);background:color-mix(in srgb,var(--c4) 20%,var(--surface))}.a1chips span.left{border-color:var(--c3);background:color-mix(in srgb,var(--c3) 20%,var(--surface))}
    .sim .ddot{fill:var(--c1);stroke:var(--surface);stroke-width:1.5;cursor:pointer}.sim .ddot.out{fill:var(--bad)}
    .sim .bxp{fill:color-mix(in srgb,var(--c4) 22%,transparent);stroke:var(--c4);stroke-width:2.5}.sim .bxl{stroke:var(--c4);stroke-width:2.5}
    .sim .mean{fill:var(--c3)}.sim .med{stroke:var(--c2);stroke-width:3}
    .a1stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px}.a1stats div{background:var(--soft);border-radius:10px;padding:6px 8px;font-size:.88rem}.a1stats b{display:block;font:800 1.15rem var(--display)}
    .sim svg.click{cursor:crosshair}`;
    document.head.appendChild(c);
  }

  /* ---------- number line helper (−10 … 10) ---------- */
  const NLW = 600, NX = v => 30 + (v + 10) * 27;
  function numberLine(y) {
    let s = `<line class="nl" x1="10" x2="${NLW - 10}" y1="${y}" y2="${y}"/><path d="M14 ${y - 6} L6 ${y} L14 ${y + 6}M${NLW - 14} ${y - 6} L${NLW - 6} ${y} L${NLW - 14} ${y + 6}" class="nl" fill="none"/>`;
    for (let v = -10; v <= 10; v++) s += `<line class="nlt" x1="${NX(v)}" x2="${NX(v)}" y1="${y - (v % 5 ? 5 : 9)}" y2="${y + (v % 5 ? 5 : 9)}"/>` + (v % 2 === 0 ? `<text class="st" x="${NX(v)}" y="${y + 24}" text-anchor="middle">${N(v)}</text>` : "");
    return s;
  }
  function shadeSeg(a, b, y, ca, cb) { /* a or b may be ±Infinity */
    const xa = a === -Infinity ? 14 : NX(a), xb = b === Infinity ? NLW - 14 : NX(b);
    let s = `<line class="shade" x1="${xa}" x2="${xb}" y1="${y}" y2="${y}"/>`;
    if (a === -Infinity) s += `<path class="shadeF" d="M${xa + 4} ${y - 11} L${xa - 10} ${y} L${xa + 4} ${y + 11}z"/>`;
    if (b === Infinity) s += `<path class="shadeF" d="M${xb - 4} ${y - 11} L${xb + 10} ${y} L${xb - 4} ${y + 11}z"/>`;
    if (a !== -Infinity) s += `<circle class="${ca ? "cls" : "opn"}" cx="${xa}" cy="${y}" r="8"/>`;
    if (b !== Infinity) s += `<circle class="${cb ? "cls" : "opn"}" cx="${xb}" cy="${y}" r="8"/>`;
    return s;
  }

  /* ================= 1. COMPOUND & ABSOLUTE VALUE INEQUALITIES ================= */
  S.compound = (el, o) => {
    const body = shell(el, o, "Compound Inequality Builder", "↔️");
    const M = [["and", "AND: between two numbers (y)"], ["or", "OR: outside two numbers (o)"], ["absl", "|x − c| < r (distance less than)"], ["absg", "|x − c| > r (distance more than)"]];
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 ${NLW} 150" class="simsvg"><g class="g0">${numberLine(92)}</g><g class="g1"></g></svg>
      <div class="simrow2"><div class="simgrp k1"><label class="simsl">Type <select data-m>${M.map(m => `<option value="${m[0]}" ${m[0] === (o.mode || "and") ? "selected" : ""}>${m[1]}</option>`).join("")}</select></label>
        <div data-p="ab">${sl("a", "left number a", -9, 9, 1, o.a ?? -2)}${sl("b", "right number b", -9, 9, 1, o.b ?? 4)}</div>
        <div data-p="cr" hidden>${sl("c", "center c", -6, 6, 1, o.c ?? 1)}${sl("r", "distance r", 1, 6, 1, o.r ?? 3)}</div>
        <label class="simsl" style="grid-template-columns:auto 1fr;align-items:center;gap:8px"><input type="checkbox" data-inc ${o.inc ? "checked" : ""} style="width:auto"> <span>Include the endpoints (≤ or ≥)</span></label></div>
      <div class="simgrp k2">${sl("t", "Test a number: x =", -10, 10, 1, o.t ?? 0)}<div class="steps"></div></div></div></div>`;
    function draw() {
      const m = $("[data-m]", body).value, inc = $("[data-inc]", body).checked, le = inc ? "≤" : "&lt;", ge = inc ? "≥" : "&gt;";
      $("[data-p=ab]", body).hidden = m.startsWith("abs"); $("[data-p=cr]", body).hidden = !m.startsWith("abs");
      let a = rd(body, "a"), b = rd(body, "b"); const c = rd(body, "c"), r = rd(body, "r"), t = rd(body, "t");
      let g = "", txt = "", segs = [], ok, why = "";
      if (m.startsWith("abs")) { a = c - r; b = c + r;
        g += `<path class="dist" d="M${NX(c)} 50 L${NX(a)} 50 M${NX(c)} 50 L${NX(b)} 50" marker-end=""/><circle cx="${NX(c)}" cy="50" r="5" class="dotA"/><text class="st b" x="${NX(c)}" y="38" text-anchor="middle">center ${N(c)}</text><text class="st" x="${(NX(a) + NX(c)) / 2}" y="66" text-anchor="middle">${r} units</text><text class="st" x="${(NX(b) + NX(c)) / 2}" y="66" text-anchor="middle">${r} units</text>`;
      }
      const cc = c < 0 ? `x + ${-c}` : c === 0 ? "x" : `x − ${c}`;
      if (m === "and" || m === "absl") {
        if (a > b || (a === b && !inc)) { txt = "No number is in both pieces: <b>no solution</b>."; ok = false; }
        else { segs = [[a, b]]; ok = inc ? t >= a && t <= b : t > a && t < b; }
        if (m === "and") txt = txt || `<b>${N(a)} ${le} x ${le} ${N(b)}</b> ${es("(y: x is between)")}`;
        else txt = `|${cc}| ${le} ${r} &nbsp;→&nbsp; <b>${N(a)} ${le} x ${le} ${N(b)}</b>`;
        why = ok ? `${N(t)} is ${m === "and" ? "between " + N(a) + " and " + N(b) : "within " + r + " units of " + N(c)}.` : `${N(t)} is ${m === "and" ? "not between " + N(a) + " and " + N(b) : "more than " + r + " units from " + N(c)}.`;
      } else {
        segs = [[-Infinity, a], [b, Infinity]]; ok = inc ? t <= a || t >= b : t < a || t > b;
        if (a >= b) { segs = [[-Infinity, Infinity]]; ok = true; }
        if (m === "or") txt = `<b>x ${le} ${N(a)} &nbsp;or&nbsp; x ${ge} ${N(b)}</b> ${es("(o: x is outside)")}` + (a >= b ? "<br>The pieces overlap, so <b>every number</b> is a solution." : "");
        else txt = `|${cc}| ${ge} ${r} &nbsp;→&nbsp; <b>x ${le} ${N(a)} or x ${ge} ${N(b)}</b>`;
        why = ok ? `${N(t)} is in one of the two pieces.` : `${N(t)} is in the gap between the pieces.`;
      }
      segs.forEach(([p, q]) => g += shadeSeg(p, q, 92, inc, inc));
      if (m === "and" && (a > b || (a === b && !inc))) g += `<text class="st b" x="300" y="40" text-anchor="middle">x ≥ a AND x ≤ b never overlap here</text>`;
      g += `<path d="M${NX(t)} 128 l-8 12 h16z" class="${ok ? "okp" : "badp"}"/>`;
      $(".g1", body).innerHTML = g;
      const sub = m.startsWith("abs") ? `<div>|${N(t)} ${c < 0 ? "+ " + -c : "− " + c}| = |${N(t - c)}| = ${Math.abs(t - c)}</div>` : "";
      $(".steps", body).innerHTML = `<div>${txt}</div>${sub}<div class="${ok ? "simbig win" : "simbig"}">x = ${N(t)} ${ok ? "✅ is a solution" : "❌ is not a solution"}</div><div class="note">${why}</div>`;
    }
    body.addEventListener("input", draw); body.addEventListener("change", draw); draw();
  };

  /* ---------- coordinate grid helper ---------- */
  function grid(R, W, every = 2) {
    const s = W / (2 * R); let g = "";
    for (let i = -R; i <= R; i++) { const p = W / 2 + i * s; g += `<line class="sg ${i === 0 ? "ax" : ""}" x1="${p}" y1="0" x2="${p}" y2="${W}"/><line class="sg ${i === 0 ? "ax" : ""}" x1="0" y1="${p}" x2="${W}" y2="${p}"/>`;
      if (i && i % every === 0) g += `<text class="st" x="${p}" y="${W / 2 + 13}" text-anchor="middle">${N(i)}</text><text class="st" x="${W / 2 - 5}" y="${W / 2 - i * s + 4}" text-anchor="end">${N(i)}</text>`; }
    return g + `<text class="st" x="${W - 6}" y="${W / 2 - 6}" text-anchor="end">x</text><text class="st" x="${W / 2 + 6}" y="12">y</text>`;
  }

  /* ================= 2. VERTICAL LINE TEST ================= */
  const REL = {
    line: { l: "y = 2x − 1 (a line)", ys: x => [2 * x - 1], fn: x => 2 * x - 1, dr: "Domain: all real numbers · Range: all real numbers" },
    para: { l: "y = x² − 3 (a parabola)", ys: x => [x * x - 3], fn: x => x * x - 3, dr: "Domain: all real numbers · Range: y ≥ −3" },
    abs: { l: "y = |x| − 2 (absolute value)", ys: x => [Math.abs(x) - 2], fn: x => Math.abs(x) - 2, dr: "Domain: all real numbers · Range: y ≥ −2" },
    circ: { l: "x² + y² = 16 (a circle)", ys: x => Math.abs(x) > 4 ? [] : Math.abs(x) === 4 ? [0] : [Math.sqrt(16 - x * x), -Math.sqrt(16 - x * x)], dr: "Domain: −4 ≤ x ≤ 4 · Range: −4 ≤ y ≤ 4" },
    side: { l: "x = y² (a sideways parabola)", ys: x => x < 0 ? [] : x === 0 ? [0] : [Math.sqrt(x), -Math.sqrt(x)], dr: "Domain: x ≥ 0 · Range: all real numbers" },
    vert: { l: "x = 2 (a vertical line)", ys: x => x === 2 ? "all" : [], dr: "Domain: x = 2 only · Range: all real numbers" },
    ptsA: { l: "Points A: (−3, 1), (−1, 2), (1, 2), (3, −1)", pts: [[-3, 1], [-1, 2], [1, 2], [3, -1]], dr: "Domain: {−3, −1, 1, 3} · Range: {−1, 1, 2}" },
    ptsB: { l: "Points B: (−2, 1), (1, 3), (1, −2), (4, 0)", pts: [[-2, 1], [1, 3], [1, -2], [4, 0]], dr: "Domain: {−2, 1, 4} · Range: {−2, 0, 1, 3}" }
  };
  S.vline = (el, o) => {
    const body = shell(el, o, "Vertical Line Test", "📏"), R = 7, W = 360, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s, ks = Object.keys(REL);
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq">${grid(R, W)}<g class="cv"></g><g class="vl"></g></svg>
      <div class="simctl"><div class="simgrp k1"><label class="simsl">Relation <select data-r>${ks.map(k => `<option value="${k}" ${k === (o.rel || "para") ? "selected" : ""}>${REL[k].l}</option>`).join("")}</select></label>
        ${sl("x", "Vertical line at x =", -6, 6, 0.5, o.x ?? -5)}<div class="simbtns"><button class="pill-btn dark sm" data-go>▶ Sweep the line across</button></div></div>
        <div class="simout"></div></div></div>`;
    const ys = (rl, x) => rl.pts ? rl.pts.filter(p => p[0] === x).map(p => p[1]) : rl.ys(x);
    let bad = null;
    function curve(rl) {
      if (rl.pts) return rl.pts.map(p => `<circle class="curvep" cx="${X(p[0])}" cy="${Y(p[1])}" r="6"/>`).join("");
      if (rl === REL.circ) return `<circle class="curve" cx="${X(0)}" cy="${Y(0)}" r="${4 * s}"/>`;
      if (rl === REL.vert) return `<line class="curve" x1="${X(2)}" x2="${X(2)}" y1="0" y2="${W}"/>`;
      let d = "";
      if (rl === REL.side) { for (let y = -2.7; y <= 2.7001; y += 0.05) d += (d ? "L" : "M") + X(y * y).toFixed(1) + " " + Y(y).toFixed(1); }
      else for (let x = -R; x <= R + 1e-9; x += 0.05) { const y = rl.fn(x); if (Math.abs(y) <= R + 2) d += (d ? "L" : "M") + X(x).toFixed(1) + " " + Y(y).toFixed(1); }
      return `<path class="curve" d="${d}"/>`;
    }
    function draw(x) {
      const rl = REL[$("[data-r]", body).value]; x = x ?? rd(body, "x");
      $(".cv", body).innerHTML = curve(rl);
      const h = ys(rl, x), n = h === "all" ? Infinity : h.length;
      $(".vl", body).innerHTML = `<line class="vln" x1="${X(x)}" x2="${X(x)}" y1="0" y2="${W}" stroke-dasharray="8 5"/>` + (h === "all" ? "" : h.filter(y => Math.abs(y) <= R).map(y => `<circle class="vhit" cx="${X(x)}" cy="${Y(y)}" r="7"/>`).join(""));
      if (n > 1 && bad === null) bad = x;
      const msg = n === 0 ? "misses the graph (no input here)" : n === 1 ? "touches the graph <b>1 time</b> ✓" : n === Infinity ? "lies ON the graph: <b>infinitely many</b> points ✗" : `touches the graph <b>${n} times</b> ✗`;
      return { rl, x, n, msg };
    }
    function show(r, final) {
      const fun = bad === null;
      $(".simout", body).innerHTML = `<div class="simbig">At x = ${N(r.x)}, the line ${r.msg}</div>${r.n > 1 ? `<div>One input (x = ${N(r.x)}) has ${r.n === Infinity ? "infinitely many" : r.n} outputs, so this is <b>not a function</b>. ${es("no es una función")}</div>` : ""}
        ${final ? `<div class="simbig ${fun ? "win" : ""}">${fun ? "✅ The line never hit 2 points. This relation <b>IS a function</b>. " + es("es una función") : `❌ At x = ${N(bad)} the line hit more than 1 point. <b>NOT a function</b>.`}</div>` : `<div class="mu small">Press ▶ Sweep to test every x.</div>`}
        <div class="note mu">${r.rl.dr}</div>`;
    }
    $("[data-go]", body).onclick = () => { bad = null; tween(3200, p => { const x = Math.round((-6 + 12 * p) * 4) / 4; const r = draw(x); setv(body, "x", Math.round(x * 2) / 2); $("[data-v=x]", body).textContent = N(Math.round(x * 2) / 2); show(r, p >= 1); }); };
    body.addEventListener("input", () => { bad = null; show(draw(), false); });
    body.addEventListener("change", e => { if (e.target.matches("[data-r]")) { bad = null; show(draw(), false); } });
    show(draw(), false);
  };

  /* ================= 3. SYSTEMS OF LINEAR INEQUALITIES ================= */
  S.sysineq = (el, o) => {
    const body = shell(el, o, "Systems of Inequalities", "🟦"), R = 8, W = 360, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    const L = (o.lines || [{ m: 1, b: 1, sg: ">=" }, { m: -2, b: 4, sg: "<" }]).slice(0, 2);
    const SG = { ">": ">", ">=": "≥", "<": "<", "<=": "≤" };
    const ex = (m, b) => { const mm = m === 0 ? "" : m === 1 ? "x" : m === -1 ? "−x" : N(m) + "x"; return mm ? mm + (b ? (b > 0 ? " + " : " − ") + Math.abs(b) : "") : N(b); };
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq click"><g class="hp"></g>${grid(R, W)}<g class="bd"></g><g class="tp"></g></svg>
      <div class="simctl">${L.map((l, i) => `<div class="simgrp k${i + 1}"><b>Inequality ${i + 1}</b><div class="simsel">y <select data-g="${i}" style="width:auto">${Object.keys(SG).map(k => `<option value="${k}" ${k === l.sg ? "selected" : ""}>${SG[k]}</option>`).join("")}</select> mx + b</div>${sl("m" + i, "slope m", -4, 4, 0.5, l.m)}${sl("b" + i, "y-intercept b", -6, 6, 1, l.b)}</div>`).join("")}
        <p class="mu small" style="margin:0">👆 Tap the graph to drop a test point.</p><div class="simout"></div></div></div>`;
    let tp = o.point || [0, 0];
    const test = (l, x, y) => { const v = l.m * x + l.b; return l.sg === ">" ? y > v : l.sg === ">=" ? y >= v : l.sg === "<" ? y < v : y <= v; };
    function draw() {
      L.forEach((l, i) => { l.m = rd(body, "m" + i); l.b = rd(body, "b" + i); l.sg = $(`[data-g="${i}"]`, body).value; });
      $(".hp", body).innerHTML = L.map((l, i) => { const up = l.sg[0] === ">", yb = up ? 200 : -200; return `<polygon class="hp${i + 1}" points="${X(-R - 1)},${Y(l.m * (-R - 1) + l.b)} ${X(R + 1)},${Y(l.m * (R + 1) + l.b)} ${X(R + 1)},${Y(yb)} ${X(-R - 1)},${Y(yb)}"/>`; }).join("");
      $(".bd", body).innerHTML = L.map((l, i) => `<line class="bd${i + 1}" x1="${X(-R - 1)}" y1="${Y(l.m * (-R - 1) + l.b)}" x2="${X(R + 1)}" y2="${Y(l.m * (R + 1) + l.b)}" ${l.sg.length === 1 ? 'stroke-dasharray="9 6"' : ""}/>`).join("");
      const [x, y] = tp, r = L.map(l => test(l, x, y)), both = r[0] && r[1];
      $(".tp", body).innerHTML = `<circle cx="${X(x)}" cy="${Y(y)}" r="8" class="${both ? "okp" : "badp"}"/><text class="st b" x="${X(x) + 11}" y="${Y(y) - 9}">(${N(x)}, ${N(y)})</text>`;
      $(".simout", body).innerHTML = L.map((l, i) => `<div><b style="color:var(--c${i + 1})">${i + 1}.</b> y ${SG[l.sg]} ${ex(l.m, l.b)} &nbsp;→&nbsp; ${N(y)} ${SG[l.sg]} ${N(l.m)}(${N(x)}) ${l.b < 0 ? "−" : "+"} ${Math.abs(l.b)} = ${N(l.m * x + l.b)} &nbsp;${r[i] ? "✅" : "❌"}</div>`).join("") +
        `<div class="simbig ${both ? "win" : ""}">${both ? "✅ True for BOTH: this point is in the solution (the overlap, where both colors mix)." : r[0] || r[1] ? "Only true for one inequality. A solution must make BOTH true." : "❌ False for both inequalities."}</div>
        <div class="note mu small">Dashed line = &lt; or &gt; (points on the line do NOT count). Solid line = ≤ or ≥ (they count). Shade above for y &gt;, below for y &lt;.</div>`;
    }
    $("svg", body).addEventListener("click", e => { const bb = e.currentTarget.getBoundingClientRect(); const x = Math.round(((e.clientX - bb.left) / bb.width * W - W / 2) / s), y = Math.round((W / 2 - (e.clientY - bb.top) / bb.height * W) / s); tp = [clamp(x, -R, R), clamp(y, -R, R)]; draw(); });
    body.addEventListener("input", draw); body.addEventListener("change", draw); draw();
  };

  /* ================= 4. LINEAR vs EXPONENTIAL GROWTH ================= */
  S.growth = (el, o) => {
    const body = shell(el, o, "Linear vs. Exponential", "📈");
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 600 270" class="simsvg"><g class="gg"></g></svg>
      <div class="simrow2"><div class="simgrp k1">${sl("a", "Start value a", 1, 50, 1, o.a ?? 10)}${sl("d", "Plan A (linear): ADD each year", 0, 20, 1, o.d ?? 5)}${sl("bb", "Plan B (exponential): MULTIPLY by b", 0.5, 2, 0.05, o.b ?? 1.3)}
        ${sl("n", "Year x =", 0, 10, 1, o.n ?? 4)}<div class="simbtns"><button class="pill-btn dark sm" data-go>▶ Play years 0 → 10</button></div></div>
        <div class="simcol"><div class="steps"></div><div class="tw" style="max-height:220px;overflow:auto"></div></div></div></div>`;
    function draw() {
      const a = rd(body, "a"), d = rd(body, "d"), b = rd(body, "bb"), n = rd(body, "n");
      const lin = x => a + d * x, exp = x => a * b ** x;
      let mx = 0; for (let x = 0; x <= 10; x++) mx = Math.max(mx, lin(x), exp(x)); mx = Math.max(mx * 1.1, 10);
      const L = 52, Rr = 585, T = 16, Bt = 236, sx = x => L + x / 10 * (Rr - L), sy = v => Bt - v / mx * (Bt - T);
      let g = `<line class="ax" x1="${L}" x2="${Rr}" y1="${Bt}" y2="${Bt}" stroke="var(--muted)"/><line x1="${L}" x2="${L}" y1="${T}" y2="${Bt}" stroke="var(--muted)"/>`;
      for (let x = 0; x <= 10; x++) g += `<line class="gl" x1="${sx(x)}" x2="${sx(x)}" y1="${T}" y2="${Bt}"/><text class="st" x="${sx(x)}" y="${Bt + 16}" text-anchor="middle">${x}</text>`;
      for (let k = 0; k <= 4; k++) { const v = mx * k / 4; g += `<text class="st" x="${L - 6}" y="${sy(v) + 4}" text-anchor="end">${Math.round(v)}</text>`; }
      g += `<text class="st b" x="${(L + Rr) / 2}" y="${Bt + 32}" text-anchor="middle">year x</text>`;
      const pa = [], pb = []; for (let x = 0; x <= 10; x += 0.1) { pa.push(`${sx(x).toFixed(1)},${sy(lin(x)).toFixed(1)}`); pb.push(`${sx(x).toFixed(1)},${sy(exp(x)).toFixed(1)}`); }
      g += `<polyline class="lnA" points="${pa.join(" ")}"/><polyline class="lnB" points="${pb.join(" ")}"/>`;
      g += `<line x1="${sx(n)}" x2="${sx(n)}" y1="${T}" y2="${Bt}" stroke="var(--c3)" stroke-width="2" stroke-dasharray="5 4"/><circle class="dA" cx="${sx(n)}" cy="${sy(lin(n))}" r="6"/><circle class="dB" cx="${sx(n)}" cy="${sy(exp(n))}" r="6"/>`;
      g += `<rect x="${L + 8}" y="${T + 4}" width="214" height="44" rx="8" fill="var(--surface)" opacity=".9"/><line class="lnA" x1="${L + 16}" x2="${L + 36}" y1="${T + 18}" y2="${T + 18}"/><text class="st b" x="${L + 42}" y="${T + 22}">A: y = ${a} + ${d}x</text><line class="lnB" x1="${L + 16}" x2="${L + 36}" y1="${T + 38}" y2="${T + 38}"/><text class="st b" x="${L + 42}" y="${T + 42}">B: y = ${a}(${N(b)})ˣ</text>`;
      $(".gg", body).innerHTML = g;
      let cross = null; for (let x = 1; x <= 10; x++) if (exp(x) > lin(x) && exp(x - 1) <= lin(x - 1)) { cross = x; break; }
      const pct = Math.round(Math.abs(b - 1) * 100);
      $(".steps", body).innerHTML = `<div>Year ${n}: A = ${a} + ${d}(${n}) = <b style="color:var(--c1)">${R2(lin(n))}</b></div><div>Year ${n}: B = ${a}(${N(b)})<sup>${n}</sup> = <b style="color:var(--c2)">${R2(exp(n))}</b></div>
        <div class="note">${b > 1 ? `b = ${N(b)} = 1 + ${R2(b - 1)}: <b>growth</b> of ${pct}% per year ${es("crecimiento")}` : b < 1 ? `b = ${N(b)} = 1 − ${R2(1 - b)}: <b>decay</b> of ${pct}% per year ${es("decrecimiento")}` : "b = 1: no change at all"}</div>
        <div class="note">A goes up by the <b>same amount</b> (+${d}) each year. B goes up by the <b>same factor</b> (×${N(b)}) each year.${cross ? ` B passes A in year ${cross}.` : ""}</div>`;
      $(".tw", body).innerHTML = `<table class="a1tbl"><tr><th>x</th><th style="color:var(--c1)">A (add ${d})</th><th style="color:var(--c2)">B (× ${N(b)})</th></tr>${[...Array(11).keys()].map(x => `<tr class="${x === n ? "now" : ""}"><td>${x}</td><td>${R2(lin(x))}</td><td>${R2(exp(x))}</td></tr>`).join("")}</table>`;
    }
    $("[data-go]", body).onclick = () => { let x = 0; const step = () => { setv(body, "n", x); draw(); if (x++ < 10) setTimeout(step, 380); }; step(); };
    body.addEventListener("input", draw); draw();
  };

  /* ================= 5. FACTORING TRINOMIALS (diamond + area model) ================= */
  S.factor = (el, o) => {
    const body = shell(el, o, "Factoring Lab", "🧩");
    const presets = o.presets || [[1, 7, 12], [1, -2, -15], [1, -9, 20], [1, 3, -10], [2, 7, 3], [3, -10, 8], [1, 0, -16], [1, 2, 5]];
    let pi = 0;
    body.innerHTML = `<div class="simrow"><div class="simctl"><div class="simgrp k1"><b>Factor ax² + bx + c</b>${sl("a", "a", 1, 3, 1, o.a ?? presets[0][0])}${sl("b", "b", -12, 12, 1, o.b ?? presets[0][1])}${sl("c", "c", -24, 24, 1, o.c ?? presets[0][2])}
        <div class="simbtns"><button class="pill-btn dark sm" data-nx>Next example ▶</button></div></div><div class="simeq" data-eq style="text-align:center;font-size:1.3rem"></div><svg class="a1dia" viewBox="0 0 220 204"><g class="dm"></g></svg></div>
      <div class="simcol"><div class="tw"></div><div class="bx"></div><div class="steps"></div></div></div>`;
    const term = (k, v, first) => { if (k === 0) return ""; const s = Math.abs(k) === 1 && v ? v : Math.abs(k) + v; return first ? (k < 0 ? "−" : "") + s : (k < 0 ? " − " : " + ") + s; };
    const poly = (a, b, c) => (term(a, "x²", 1) + term(b, "x", !a) + term(c, "", !a && !b)) || "0";
    const bin = (p, q) => `(${term(p, "x", 1)}${term(q, "", 0)})`;
    function draw() {
      const a = rd(body, "a"), b = rd(body, "b"), c = rd(body, "c"), ac = a * c;
      $("[data-eq]", body).innerHTML = poly(a, b, c);
      const pairs = []; if (ac !== 0) for (let p = -Math.abs(ac); p <= Math.abs(ac); p++) { if (p === 0 || ac % p) continue; const q = ac / p; if (p <= q) pairs.push([p, q]); }
      const hit = pairs.find(([p, q]) => p + q === b);
      $(".dm", body).innerHTML = `<line x1="25" y1="18" x2="195" y2="182" stroke="var(--fg)" stroke-width="3"/><line x1="195" y1="18" x2="25" y2="182" stroke="var(--fg)" stroke-width="3"/>
        <text class="st" x="110" y="22" text-anchor="middle">multiply to</text><text class="st big" x="110" y="52" text-anchor="middle" style="font-size:18px">${N(ac)}</text><text class="st big" x="110" y="166" text-anchor="middle" style="font-size:18px">${N(b)}</text><text class="st" x="110" y="196" text-anchor="middle">add to</text>
        <text class="st big" x="40" y="106" text-anchor="middle" style="font-size:18px;fill:var(--c4)">${hit ? N(hit[0]) : "?"}</text><text class="st big" x="180" y="106" text-anchor="middle" style="font-size:18px;fill:var(--c4)">${hit ? N(hit[1]) : "?"}</text>`;
      $(".tw", body).innerHTML = ac === 0 ? `<p class="mu">c = 0: factor out x first: x(${term(a, "x", 1)}${term(b, "", 0)}).</p>` : `<b class="small">Factor pairs of ${a === 1 ? "c" : "a·c"} = ${N(ac)}</b><div style="max-height:170px;overflow:auto"><table class="a1tbl"><tr><th>pair</th><th>multiply</th><th>add</th></tr>${pairs.map(([p, q]) => `<tr class="${hit && p === hit[0] ? "hl" : ""}"><td>${N(p)}, ${N(q)}</td><td>${N(p * q)}</td><td>${N(p + q)} ${p + q === b ? "✅" : ""}</td></tr>`).join("")}</table></div>`;
      if (ac === 0) { $(".bx", body).innerHTML = ""; $(".steps", body).innerHTML = ""; return; }
      if (!hit) { $(".bx", body).innerHTML = ""; $(".steps", body).innerHTML = `<div class="simbig">No pair adds to ${N(b)}. This trinomial is <b>prime</b> ${es("primo")}: it does not factor with integers.</div><div class="note">You can still solve ${poly(a, b, c)} = 0 with the quadratic formula.</div>`; return; }
      const [p, q] = hit;
      /* find (dx + e)(fx + g) */
      let F = null; for (let d = 1; d <= a && !F; d++) { if (a % d) continue; const f = a / d; for (let e = -Math.abs(c); e <= Math.abs(c) && !F; e++) { if (e === 0 || c % e) continue; const g = c / e; if (d * g + e * f === b) F = [d, e, f, g]; } }
      const k = gcd(gcd(a, b), c);
      if (!F) { $(".steps", body).innerHTML = ""; return; }
      const [d, e, f, g] = F;
      $(".bx", body).innerHTML = `<b class="small">Area model (box)</b><table class="a1box"><tr><th>×</th><th>${term(d, "x", 1)}</th><th>${N(e)}</th></tr><tr><th>${term(f, "x", 1)}</th><td class="k">${term(d * f, "x²", 1)}</td><td>${term(e * f, "x", 1)}</td></tr><tr><th>${N(g)}</th><td>${term(d * g, "x", 1)}</td><td class="k">${N(e * g)}</td></tr></table>`;
      $(".steps", body).innerHTML = (a === 1 ? `<div>Two numbers that multiply to ${N(c)} and add to ${N(b)}: <b>${N(p)} and ${N(q)}</b></div><div>${poly(a, b, c)} = <b>${bin(1, p)}${bin(1, q)}</b></div>`
        : `<div>Split the middle: ${term(a, "x²", 1)}${term(p, "x", 0)}${term(q, "x", 0)}${term(c, "", 0)}</div><div>Group and factor: <b>${bin(d, e)}${bin(f, g)}</b></div>`) +
        `<div class="note">Check by multiplying (FOIL or the box): the diagonal cells ${term(e * f, "x", 1)} and ${term(d * g, "x", 1)} add to ${term(b, "x", 1) || "0"}.${k > 1 ? ` Tip: first factor out the GCF ${k}.` : ""}</div><div class="note">Zeros: set each factor = 0 → x = ${N(R2(-e / d))} and x = ${N(R2(-g / f))}.</div>`;
    }
    $("[data-nx]", body).onclick = () => { pi = (pi + 1) % presets.length; const [a, b, c] = presets[pi]; setv(body, "a", a); setv(body, "b", b); setv(body, "c", c); draw(); };
    body.addEventListener("input", draw); draw();
  };

  /* ================= 6. SIMPLIFYING RADICALS (factor tree) ================= */
  S.radtree = (el, o) => {
    const body = shell(el, o, "Radical Factor Tree", "🌳");
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 340 330" class="simsvg"><g class="tr"></g></svg>
      <div class="simcol"><div class="simgrp k1">${sl("n", "Simplify √n, n =", 2, 200, 1, o.n ?? 72)}${sl("i", "root index (2 = square √, 3 = cube ∛)", 2, 3, 1, o.i ?? 2)}<div class="simbtns">${[12, 18, 50, 72, 98, 108, 128, 180].map(v => `<button class="pill-btn sm" data-n="${v}">${v}</button>`).join("")}</div></div>
        <div class="a1chips"></div><div class="steps"></div></div></div>`;
    function draw() {
      const n = rd(body, "n"), ix = rd(body, "i"), pr = []; let m = n;
      for (let p = 2; p * p <= m; p++) while (m % p === 0) { pr.push(p); m /= p; } if (m > 1) pr.push(m);
      let g = "", cur = n, x = 170, y = 26; const dx = 46, dy = Math.min(48, 290 / Math.max(pr.length, 1));
      g += `<g class="tnode"><circle cx="${x}" cy="${y}" r="20"/><text x="${x}" y="${y + 5}" text-anchor="middle">${n}</text></g>`;
      pr.slice(0, -1).forEach((p, k) => { const nx = x + dx * 0.55, ny = y + dy, lx = x - dx * 0.75; cur /= p;
        g += `<line class="tbr" x1="${x}" y1="${y + 18}" x2="${lx}" y2="${ny - 18}"/><line class="tbr" x1="${x}" y1="${y + 18}" x2="${nx}" y2="${ny - 18}"/>`;
        g += `<g class="tnode pr" style="animation-delay:${k * 0.25}s"><circle cx="${lx}" cy="${ny}" r="18"/><text x="${lx}" y="${ny + 5}" text-anchor="middle">${p}</text></g><g class="tnode ${k === pr.length - 2 ? "pr" : ""}" style="animation-delay:${k * 0.25 + 0.1}s"><circle cx="${nx}" cy="${ny}" r="18"/><text x="${nx}" y="${ny + 5}" text-anchor="middle">${cur}</text></g>`;
        x = nx; y = ny; });
      if (pr.length === 1) g += `<text class="st b" x="170" y="90" text-anchor="middle">${n} is prime: it has no factor tree.</text>`;
      $(".tr", body).innerHTML = g; $("svg", body).setAttribute("viewBox", `0 0 340 ${Math.max(140, y + 40)}`);
      const cnt = {}; pr.forEach(p => cnt[p] = (cnt[p] || 0) + 1);
      let out = 1, inn = 1, chips = ""; Object.keys(cnt).map(Number).sort((a, b) => a - b).forEach(p => { const k = Math.floor(cnt[p] / ix), r = cnt[p] % ix; out *= p ** k; inn *= p ** r;
        for (let j = 0; j < k; j++) chips += `<span class="pair">${Array(ix).fill(p).join("·")}</span>`; for (let j = 0; j < r; j++) chips += `<span class="left">${p}</span>`; });
      const rs = ix === 2 ? "√" : "∛", grp = ix === 2 ? "pair" : "group of 3";
      $(".a1chips", body).innerHTML = `<b class="small" style="font:700 .85rem var(--body)">${rs}${n} =</b> ${chips}`;
      $(".steps", body).innerHTML = `<div>${rs}${n} = ${rs}(${pr.join(" · ")})</div><div>= <b>${out === 1 ? "" : out}${inn === 1 ? (out === 1 ? "1" : "") : rs + inn}</b> ${out === 1 && inn === n ? "(already simplified)" : ""}</div>
        <div class="note">🟩 Each ${grp} of the same prime comes OUT of the root as ONE number. 🟧 Leftover primes stay INSIDE.</div><div class="note">Check: ${out}${ix === 2 ? "²" : "³"} × ${inn} = ${out ** ix} × ${inn} = ${out ** ix * inn}</div>`;
    }
    $$("[data-n]", body).forEach(b => b.onclick = () => { setv(body, "n", b.dataset.n); draw(); });
    body.addEventListener("input", draw); draw();
  };

  /* ================= 7. DOT PLOT + BOX PLOT STATISTICS ================= */
  S.dotplot = (el, o) => {
    const body = shell(el, o, "Data Lab: Center & Spread", "📊");
    const sets = o.sets || [{ name: "Quiz scores", d: [6, 7, 7, 8, 8, 8, 9, 9, 10, 11, 12] }, { name: "Add an outlier", d: [6, 7, 7, 8, 8, 8, 9, 9, 10, 11, 12, 20] }, { name: "Skewed", d: [1, 2, 2, 2, 3, 3, 4, 5, 7, 10, 14] }];
    let data = [...sets[0].d];
    const X = v => 30 + v * 27;
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 600 300" class="simsvg click"><g class="dp"></g></svg>
      <div class="simbtns">${sets.map((s, i) => `<button class="pill-btn sm ${i ? "" : "on"}" data-set="${i}">${esc(s.name)}</button>`).join("")}<button class="pill-btn sm" data-clr>Clear</button><span class="mu small">👆 Tap above the line to add a dot. Tap a dot to remove it.</span></div>
      <div class="a1stats"></div><div class="steps"></div></div>`;
    const med = a => { const n = a.length, m = Math.floor(n / 2); return n % 2 ? a[m] : (a[m - 1] + a[m]) / 2; };
    function draw() {
      const a = [...data].sort((p, q) => p - q), n = a.length;
      let g = `<line class="nl" x1="20" x2="580" y1="200" y2="200"/>`; for (let v = 0; v <= 20; v++) g += `<line class="nlt" x1="${X(v)}" x2="${X(v)}" y1="195" y2="205"/><text class="st" x="${X(v)}" y="220" text-anchor="middle">${v}</text>`;
      if (!n) { $(".dp", body).innerHTML = g; $(".a1stats", body).innerHTML = ""; $(".steps", body).innerHTML = `<div class="mu">Add some data!</div>`; return; }
      const mean = a.reduce((s, v) => s + v, 0) / n, md = med(a), lo = a.slice(0, Math.floor(n / 2)), hi = a.slice(Math.ceil(n / 2));
      const q1 = lo.length ? med(lo) : a[0], q3 = hi.length ? med(hi) : a[n - 1], iqr = q3 - q1, fl = q1 - 1.5 * iqr, fh = q3 + 1.5 * iqr;
      const sd = Math.sqrt(a.reduce((s, v) => s + (v - mean) ** 2, 0) / n), inl = a.filter(v => v >= fl && v <= fh);
      const st = {}; data.forEach((v, i) => { st[v] = (st[v] || 0) + 1; });
      const seen = {}; data.forEach((v, i) => { seen[v] = (seen[v] || 0) + 1; const out = v < fl || v > fh; g += `<circle class="ddot ${out ? "out" : ""}" data-i="${i}" cx="${X(v)}" cy="${188 - (seen[v] - 1) * 15}" r="7"/>`; });
      g += `<path class="mean" d="M${X(mean)} 204 l-9 15 h18z"/><text class="st b" x="${X(mean)}" y="234" text-anchor="middle" style="fill:var(--c3)">mean ${R2(mean)}</text>`;
      const by = 264; g += `<line class="bxl" x1="${X(inl[0])}" x2="${X(q1)}" y1="${by}" y2="${by}"/><line class="bxl" x1="${X(q3)}" x2="${X(inl[inl.length - 1])}" y1="${by}" y2="${by}"/><line class="bxl" x1="${X(inl[0])}" x2="${X(inl[0])}" y1="${by - 8}" y2="${by + 8}"/><line class="bxl" x1="${X(inl[inl.length - 1])}" x2="${X(inl[inl.length - 1])}" y1="${by - 8}" y2="${by + 8}"/>
        <rect class="bxp" x="${X(q1)}" y="${by - 16}" width="${Math.max(X(q3) - X(q1), 1)}" height="32"/><line class="med" x1="${X(md)}" x2="${X(md)}" y1="${by - 16}" y2="${by + 16}"/>`;
      a.filter(v => v < fl || v > fh).forEach(v => g += `<text class="st b" x="${X(v)}" y="${by + 5}" text-anchor="middle" style="fill:var(--bad)">✱</text>`);
      g += `<text class="st b" x="10" y="${by - 22}">box plot</text>`;
      $(".dp", body).innerHTML = g;
      $$(".ddot", body).forEach(c => c.onclick = e => { e.stopPropagation(); data.splice(+c.dataset.i, 1); draw(); });
      const cards = [["Mean", "media", R2(mean)], ["Median", "mediana", md], ["Range", "rango", a[n - 1] - a[0]], ["Q1 · Q3", "cuartiles", `${q1} · ${q3}`], ["IQR", "rango intercuartil", iqr], ["Std. dev. σ", "desviación estándar", R2(sd)]];
      $(".a1stats", body).innerHTML = cards.map(c => `<div>${c[0]} ${es(c[1])}<b>${c[2]}</b></div>`).join("");
      const outs = a.filter(v => v < fl || v > fh);
      $(".steps", body).innerHTML = `<div class="note">n = ${n} values: ${a.join(", ")}</div><div class="note">Outlier fences: Q1 − 1.5·IQR = ${R2(fl)} and Q3 + 1.5·IQR = ${R2(fh)}. ${outs.length ? `<b style="color:var(--bad)">Outlier: ${outs.join(", ")}</b> (red dot).` : "No outliers."}</div>
        <div class="note">${Math.abs(mean - md) < 0.5 ? "Mean ≈ median: the data is fairly <b>symmetric</b>." : mean > md ? "Mean &gt; median: the data is <b>skewed right</b> (a tail of big values pulls the mean up)." : "Mean &lt; median: the data is <b>skewed left</b>."} The median and IQR resist outliers; the mean and σ do not.</div>`;
    }
    $("svg", body).addEventListener("click", e => { const bb = e.currentTarget.getBoundingClientRect(), x = (e.clientX - bb.left) / bb.width * 600, y = (e.clientY - bb.top) / bb.height * 300; if (y > 210) return; const v = clamp(Math.round((x - 30) / 27), 0, 20); if (data.filter(d => d === v).length >= 12) return; data.push(v); draw(); });
    $$("[data-set]", body).forEach(b => b.onclick = () => { data = [...sets[+b.dataset.set].d]; $$("[data-set]", body).forEach(x => x.classList.toggle("on", x === b)); draw(); });
    $("[data-clr]", body).onclick = () => { data = []; draw(); };
    draw();
  };
})();
