/* =====================================================================
   🔬 MORE MATH SIMULATIONS: integers, variables, and algebra (no need to edit)
   Loaded after rc-sims.js. Add to any study guide with a block like:
       { sim: "intline", title: "Integer Hop", a: -3, b: 5, op: "-" }
   Available here: intline, evaluate, tiles, ineq, boxmult, machine,
                   expo, synth, coord, angles, segment, polygon
   Simulations are for practice. They are NOT graded.
   ===================================================================== */
(function () {
  if (!window.RCSIM) return;
  const S = window.RCSIM;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const N = n => { const r = Math.round(n * 1000) / 1000; return (Object.is(r, -0) ? 0 : r) < 0 ? "−" + Math.abs(r) : String(Object.is(r, -0) ? 0 : r); }; /* real minus sign */
  const P = n => n < 0 ? `(${N(n)})` : N(n);                  /* wrap negatives in parentheses */
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const $ = (s, r) => r.querySelector(s), $$ = (s, r) => [...r.querySelectorAll(s)];
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  const frac = (n, d) => { if (d === 0) return "undefined"; if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); n /= g; d /= g; return d === 1 ? N(n) : `${n < 0 ? "−" : ""}${Math.abs(n)}/${d}`; };
  function shell(el, o, def, icon) {
    el.innerHTML = `<div class="sim"><div class="simhead"><span class="simic">${icon}</span><b>${esc(o.title || def)}</b><span class="simtag">Simulation · try it · not graded</span></div><div class="simbody"></div>${o.tip ? `<p class="simtip">💡 ${o.tip}</p>` : ""}</div>`;
    return $(".simbody", el);
  }
  const sl = (id, label, min, max, step, val) => `<label class="simsl"><span>${label} <b data-v="${id}">${N(val)}</b></span><input type="range" data-s="${id}" min="${min}" max="${max}" step="${step}" value="${val}" aria-label="${esc(label)}"></label>`;
  const rd = (body, id) => { const v = +$(`[data-s=${id}]`, body).value; const b = $(`[data-v=${id}]`, body); if (b) b.textContent = N(v); return v; };
  function tween(ms, fn, done) { const t0 = performance.now(); const f = t => { const p = clamp((t - t0) / ms, 0, 1), e = p < .5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2; fn(e); if (p < 1) requestAnimationFrame(f); else if (done) done(); }; requestAnimationFrame(f); }

  if (!document.getElementById("rcsi-css")) {
    const c = document.createElement("style"); c.id = "rcsi-css";
    c.textContent = `
    .sim .nl{stroke:var(--fg);stroke-width:2}.sim .nlt{stroke:var(--muted);stroke-width:1.5}
    .sim .hop{fill:none;stroke:var(--c2);stroke-width:3;marker-end:url(#rcsi-ah)}.sim .hop.neg{stroke:var(--c1)}
    .sim .dotA{fill:var(--c3);stroke:var(--surface);stroke-width:2}.sim .dotZ{fill:var(--c4);stroke:var(--surface);stroke-width:2}
    .chips{display:flex;flex-wrap:wrap;gap:5px;min-height:34px;align-items:center;padding:6px;border-radius:12px;background:var(--soft)}
    .chip{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font:800 1rem var(--body);color:#fff;transition:opacity .5s,transform .5s}
    .chip.p{background:#e0a100}.chip.n{background:#d0453a}.chip.gone{opacity:.15;transform:scale(.6)}.chip.pair{box-shadow:0 0 0 3px var(--c4)}
    .steps{display:grid;gap:4px;font:700 1.05rem var(--display)}.steps div{animation:simpop .35s both}.steps div:nth-child(2){animation-delay:.15s}.steps div:nth-child(3){animation-delay:.3s}.steps div:nth-child(4){animation-delay:.45s}.steps div:nth-child(5){animation-delay:.6s}
    .steps .note{font:600 .85rem var(--body);color:var(--muted)}
    .pan{display:flex;flex-wrap:wrap;gap:4px;align-content:flex-start;justify-content:center;min-height:90px;padding:8px;border-radius:12px;background:var(--soft);border:2px solid var(--line)}
    .tile{display:grid;place-items:center;font:800 .85rem var(--body);color:#fff;border-radius:6px;transition:opacity .5s,transform .5s}
    .tile.x{width:22px;height:54px;background:#1aa36f}.tile.nx{width:22px;height:54px;background:#b0302a}.tile.u{width:24px;height:24px;background:#e0a100}.tile.nu{width:24px;height:24px;background:#d0453a}
    .tile.new{box-shadow:0 0 0 3px var(--c1)}.tile.gone{opacity:.15;transform:scale(.6)}
    .balrow{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center}.balrow .eqs{font:800 1.6rem var(--display)}
    .simbtns .pill-btn.sm{padding:5px 10px}
    .bm{border-collapse:collapse;font:700 1rem var(--display);margin:auto}.bm td,.bm th{border:2px solid var(--line);padding:10px 14px;text-align:center;min-width:64px}
    .bm th{background:var(--soft)}.bm td.pos{background:color-mix(in srgb,#e0a100 22%,var(--surface))}.bm td.neg{background:color-mix(in srgb,#d0453a 20%,var(--surface))}
    .bm td{animation:simpop .4s both}
    .sim .mach{fill:var(--surface);stroke:var(--lc);stroke-width:3}.sim .ball{fill:var(--c3);stroke:var(--surface);stroke-width:2}
    .sim select{font:inherit;font-weight:700;padding:6px 8px;border-radius:10px;border:2px solid var(--line);background:var(--surface);color:var(--fg)}
    .ex-bar{display:grid;grid-template-columns:repeat(9,1fr);gap:4px;align-items:end;height:120px;padding:6px;background:var(--soft);border-radius:12px}
    .ex-bar div{border-radius:6px 6px 0 0;display:flex;align-items:flex-end;justify-content:center;font:700 .7rem var(--body);color:var(--fg);transition:height .4s}
    .ex-bar .on{outline:3px solid var(--fg)}
    .syn{border-collapse:collapse;font:700 1.05rem var(--display);margin:auto}.syn td{padding:6px 12px;text-align:center;min-width:44px}
    .syn .c{border-right:3px solid var(--fg)}.syn .line td{border-top:3px solid var(--fg)}.syn .hl{background:color-mix(in srgb,var(--c3) 30%,var(--surface));border-radius:8px}.syn .rem{outline:3px solid var(--c2);border-radius:8px}
    .sim .gpt{cursor:grab}.sim .gpt circle{stroke:var(--surface);stroke-width:2}.sim .leg{stroke:var(--c3);stroke-width:2.5;stroke-dasharray:6 4}
    .sim .ang{cursor:pointer}.sim .ang path{fill:transparent;stroke:none}.sim .ang.eq path{fill:color-mix(in srgb,var(--c1) 45%,transparent)}.sim .ang.sup path{fill:none;stroke:var(--c3);stroke-width:3;stroke-dasharray:4 3}.sim .ang.sel path{fill:color-mix(in srgb,var(--c2) 60%,transparent)}
    .sim .ang text{font:800 13px var(--body);fill:var(--fg)}
    .sim .seg{stroke-width:10;stroke-linecap:round}.sim .poly{fill:color-mix(in srgb,var(--lc) 14%,transparent);stroke:var(--lc);stroke-width:3}.sim .diag{stroke:var(--c3);stroke-width:2;stroke-dasharray:5 4}
    .sim .tf{fill-opacity:.25}`;
    document.head.appendChild(c);
  }
  const AH = `<defs><marker id="rcsi-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>`;

  /* ================= 1. INTEGER HOP: number line + counters ================= */
  S.intline = (el, o) => {
    const body = shell(el, o, "Integer Hop", "🐸"), W = 600, R = 20, X = v => 20 + (v + R) / (2 * R) * (W - 40);
    let op = o.op || "+";
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 ${W} 110" class="simsvg wide" style="color:var(--c2)">${AH}<g class="nlg"></g><g class="hopg"></g></svg>
      <div class="simrow2"><div class="simgrp k1">${sl("a", "Start at a", -10, 10, 1, o.a ?? -3)}${sl("b", "Number b", -10, 10, 1, o.b ?? 5)}
        <div class="simbtns"><button class="pill-btn sm" data-op="+">a + b</button><button class="pill-btn sm" data-op="-">a − b</button><button class="pill-btn dark sm" data-go>▶ Hop!</button></div></div>
        <div><b class="small">Counters (🟡 = +1, 🔴 = −1)</b><div class="chips"></div></div></div>
      <div class="steps"></div></div>`;
    let tick = "";
    for (let v = -R; v <= R; v++) tick += `<line class="nlt" x1="${X(v)}" x2="${X(v)}" y1="${v % 5 ? 64 : 58}" y2="${v % 5 ? 76 : 82}"/>` + (v % 5 === 0 ? `<text class="st ${v === 0 ? "b" : ""}" x="${X(v)}" y="98" text-anchor="middle">${N(v)}</text>` : "");
    $(".nlg", body).innerHTML = `<line class="nl" x1="10" x2="${W - 10}" y1="70" y2="70"/>${tick}`;
    let a, b, add;
    function read() { a = rd(body, "a"); b = rd(body, "b"); add = op === "+" ? b : -b; $$("[data-op]", body).forEach(x => x.classList.toggle("on", x.dataset.op === op)); }
    function chips(anim) {
      const box = $(".chips", body), start = Array.from({ length: Math.abs(a) }, () => a > 0 ? "p" : "n"), more = Array.from({ length: Math.abs(add) }, () => add > 0 ? "p" : "n");
      const pairs = Math.min(start.filter(c => c === "p").length + more.filter(c => c === "p").length, start.filter(c => c === "n").length + more.filter(c => c === "n").length);
      box.innerHTML = [...start.map(c => `<span class="chip ${c}">${c === "p" ? "+" : "−"}</span>`), ...more.map(c => `<span class="chip ${c}" style="outline:2px dashed var(--c1)">${c === "p" ? "+" : "−"}</span>`)].join("") || `<span class="mu small">no counters (zero)</span>`;
      const fade = () => { const ps = $$(".chip.p", box), ns = $$(".chip.n", box); for (let i = 0; i < pairs; i++) { ps[ps.length - 1 - i].classList.add("pair", "gone"); ns[ns.length - 1 - i].classList.add("pair", "gone"); } };
      if (pairs) { if (anim) setTimeout(fade, 700); else fade(); }
      return pairs;
    }
    function draw(anim) {
      read(); const r = a + add, pairs = chips(anim);
      const g = $(".hopg", body), x0 = X(a), x1 = X(r), mid = (x0 + x1) / 2, h = Math.min(55, 12 + Math.abs(add) * 4);
      const path = add === 0 ? "" : `<path class="hop ${add < 0 ? "neg" : ""}" style="color:${add < 0 ? "var(--c1)" : "var(--c2)"}" d="M${x0} 66 Q${mid} ${66 - h * 2} ${x1} 66"/>`;
      g.innerHTML = `${path}<circle class="dotA" cx="${x0}" cy="70" r="7"/><circle class="dotZ fr" cx="${anim ? x0 : x1}" cy="70" r="8"/><text class="st b" x="${x0}" y="${add < 0 ? 18 : 18}" text-anchor="${add >= 0 ? "end" : "start"}" dx="${add >= 0 ? -4 : 4}">start ${N(a)}</text><line x1="${x0}" y1="22" x2="${x0}" y2="62" stroke="var(--c3)" stroke-dasharray="3 3"/>`;
      if (anim && add) { const f = $(".fr", g); tween(900, e => { f.setAttribute("cx", x0 + (x1 - x0) * e); f.setAttribute("cy", 70 - Math.sin(e * Math.PI) * h); }); }
      const rows = op === "+" ? [`${P(a)} + ${P(b)}`] : [`${P(a)} − ${P(b)}`, `= ${P(a)} + ${P(-b)} <span class="note">(subtract = add the opposite)</span>`];
      rows.push(`= <b style="color:var(--c4)">${N(r)}</b> <span class="note">${add === 0 ? "(adding zero changes nothing)" : `(hop ${Math.abs(add)} to the ${add > 0 ? "right" : "left"})`}</span>`);
      if (pairs) rows.push(`<span class="note">🟡🔴 ${pairs} zero pair${pairs > 1 ? "s" : ""} cancel out (+1 and −1 make 0).</span>`);
      $(".steps", body).innerHTML = rows.map(x => `<div>${x}</div>`).join("");
    }
    body.addEventListener("input", () => draw(false));
    $$("[data-op]", body).forEach(x => x.onclick = () => { op = x.dataset.op; draw(true); });
    $("[data-go]", body).onclick = () => draw(true);
    draw(false);
  };

  /* ================= 2. EXPRESSION EVALUATOR (substitute integers) ================= */
  const EXPR = {
    "neg-sq": { label: "−x²", y: false, v: x => -(x * x), s: x => [`−${P(x)}²`, `= −(${N(x * x)}) <span class="note">exponent first, then the negative</span>`, `= ${N(-x * x)}`] },
    "sq-neg": { label: "(−x)²", y: false, v: x => x * x, s: x => [`(−${P(x)})²`, `= (${N(-x)})²`, `= ${N(x * x)} <span class="note">a negative squared is positive</span>`] },
    "lin": { label: "3x − 2y", y: true, v: (x, y) => 3 * x - 2 * y, s: (x, y) => [`3${P(x)} − 2${P(y)}`, `= ${N(3 * x)} − ${P(2 * y)}`, `= ${N(3 * x)} + ${P(-2 * y)} <span class="note">add the opposite</span>`, `= ${N(3 * x - 2 * y)}`] },
    "quad": { label: "x² − 4x + 1", y: false, v: x => x * x - 4 * x + 1, s: x => [`${P(x)}² − 4${P(x)} + 1`, `= ${N(x * x)} − ${P(4 * x)} + 1`, `= ${N(x * x)} + ${P(-4 * x)} + 1`, `= ${N(x * x - 4 * x + 1)}`] },
    "abs": { label: "|2x − 7|", y: false, v: x => Math.abs(2 * x - 7), s: x => [`|2${P(x)} − 7|`, `= |${N(2 * x)} − 7|`, `= |${N(2 * x - 7)}|`, `= ${N(Math.abs(2 * x - 7))} <span class="note">absolute value = distance from 0</span>`] },
    "dist": { label: "−2x(y − 3)", y: true, v: (x, y) => -2 * x * (y - 3), s: (x, y) => [`−2${P(x)}(${P(y)} − 3)`, `= ${P(-2 * x)} · ${P(y - 3)} <span class="note">parentheses first</span>`, `= ${N(-2 * x * (y - 3))}`] },
    "xy": { label: "x² − y²", y: true, v: (x, y) => x * x - y * y, s: (x, y) => [`${P(x)}² − ${P(y)}²`, `= ${N(x * x)} − ${N(y * y)}`, `= ${N(x * x - y * y)}`] },
    "f": { label: "f(x) = 2x² − 3x − 5", y: false, v: x => 2 * x * x - 3 * x - 5, s: x => [`f(${N(x)}) = 2${P(x)}² − 3${P(x)} − 5`, `= 2(${N(x * x)}) − ${P(3 * x)} − 5`, `= ${N(2 * x * x)} + ${P(-3 * x)} − 5`, `= ${N(2 * x * x - 3 * x - 5)}`] },
    "g": { label: "g(x) = −x³ + x", y: false, v: x => -(x ** 3) + x, s: x => [`g(${N(x)}) = −${P(x)}³ + ${P(x)}`, `= −(${N(x ** 3)}) + ${P(x)}`, `= ${N(-(x ** 3))} + ${P(x)}`, `= ${N(-(x ** 3) + x)}`] }
  };
  S.evaluate = (el, o) => {
    const body = shell(el, o, "Substitution Station", "🧮"), keys = (o.exprs || Object.keys(EXPR)).filter(k => EXPR[k]);
    let k = keys[0];
    body.innerHTML = `<div class="simrow"><div class="simcol"><div class="simbtns">${keys.map(x => `<button class="pill-btn sm" data-e="${x}">${EXPR[x].label}</button>`).join("")}</div>
      <div class="simgrp k1">${sl("x", "x =", -6, 6, 1, o.x ?? -3)}<div class="yrow">${sl("y", "y =", -6, 6, 1, o.y ?? 2)}</div></div>
      <div class="simbig" style="font-family:var(--display)">💡 Put every substituted number in <b>parentheses</b>. Then follow the order of operations: <b>P E M D A S</b>.</div></div>
      <div class="simcol"><div class="steps"></div><svg viewBox="0 0 300 150" class="simsvg"><g class="bars"></g></svg><p class="mu small" style="margin:0">Bars: the value of the expression for x = −6 to 6 (the outlined bar is your x).</p></div></div>`;
    function draw() {
      const E = EXPR[k], x = rd(body, "x"), y = rd(body, "y");
      $(".yrow", body).style.display = E.y ? "" : "none";
      $$("[data-e]", body).forEach(b => b.classList.toggle("on", b.dataset.e === k));
      $(".steps", body).innerHTML = `<div class="note">Evaluate <b>${E.label}</b> for x = ${N(x)}${E.y ? `, y = ${N(y)}` : ""}</div>` + E.s(x, y).map(t => `<div>${t}</div>`).join("");
      const vals = []; for (let i = -6; i <= 6; i++) vals.push(E.v(i, y)); const m = Math.max(1, ...vals.map(Math.abs)), bw = 300 / 13;
      $(".bars", body).innerHTML = `<line class="sg ax" x1="0" x2="300" y1="75" y2="75"/>` + vals.map((v, i) => { const h = v / m * 65; return `<rect x="${i * bw + 2}" y="${h > 0 ? 75 - h : 75}" width="${bw - 4}" height="${Math.max(1, Math.abs(h))}" rx="3" fill="${v < 0 ? "#d0453a" : "#e0a100"}" ${i - 6 === x ? 'stroke="var(--fg)" stroke-width="3"' : ""}/>`; }).join("");
    }
    body.addEventListener("input", draw); $$("[data-e]", body).forEach(b => b.onclick = () => { k = b.dataset.e; draw(); }); draw();
  };

  /* ================= 3. ALGEBRA TILES BALANCE: solve ax + b = cx + d ================= */
  S.tiles = (el, o) => {
    const body = shell(el, o, "Algebra Tile Balance", "⚖️"), presets = o.presets || [[2, 3, 0, -5], [3, -4, 1, 6], [-2, 5, 0, -3], [4, 1, 2, -7]];
    let st, pi = 0;
    const reset = () => { const p = presets[pi % presets.length]; st = { lx: p[0], lu: p[1], rx: p[2], ru: p[3] }; };
    body.innerHTML = `<div class="simcol"><div class="balrow"><div class="pan" data-side="l"></div><div class="eqs">=</div><div class="pan" data-side="r"></div></div>
      <div class="simbig" style="text-align:center;font:800 1.3rem var(--display)" data-eq></div>
      <div class="simbtns"><b class="small">Do the same to both sides:</b><button class="pill-btn sm" data-d="u,1">+1</button><button class="pill-btn sm" data-d="u,-1">−1</button><button class="pill-btn sm" data-d="x,1">+x</button><button class="pill-btn sm" data-d="x,-1">−x</button><button class="pill-btn sm" data-div>÷ by the x-coefficient</button><button class="pill-btn sm" data-a="reset">↻ Reset</button><button class="pill-btn dark sm" data-a="next">New equation →</button></div>
      <div class="tcard" aria-live="polite"></div><p class="mu small" style="margin:0">🟩 = x · 🟥 tall = −x · 🟨 = +1 · 🟥 small = −1. A positive and a negative tile make a <b>zero pair</b> and cancel.</p></div>`;
    const term = (x, u) => { let s = x ? (x === 1 ? "x" : x === -1 ? "−x" : N(x) + "x") : ""; if (u) s += s ? (u > 0 ? " + " : " − ") + Math.abs(u) : N(u); return s || "0"; };
    function tiles(x, u, ax, au) { /* ax/au = amount just added (shown highlighted, then cancels) */
      const t = [], push = (n, pos, neg, isNew) => { for (let i = 0; i < Math.abs(n); i++) t.push(`<span class="tile ${n > 0 ? pos : neg} ${isNew ? "new" : ""}">${n > 0 ? (pos === "x" ? "x" : "+") : (neg === "nx" ? "−x" : "−")}</span>`); };
      push(x, "x", "nx"); push(ax || 0, "x", "nx", 1); push(u, "u", "nu"); push(au || 0, "u", "nu", 1); return t.join("") || `<span class="mu">0</span>`;
    }
    const msg = h => $(".tcard", body).innerHTML = h ? `<div class="tc"><p>${h}</p></div>` : "";
    function draw() {
      $("[data-side=l]", body).innerHTML = tiles(st.lx, st.lu); $("[data-side=r]", body).innerHTML = tiles(st.rx, st.ru);
      $("[data-eq]", body).textContent = `${term(st.lx, st.lu)} = ${term(st.rx, st.ru)}`;
      const solved = (st.lx === 1 && st.lu === 0 && st.rx === 0) || (st.rx === 1 && st.ru === 0 && st.lx === 0);
      if (solved) msg(`🎉 <b>Solved: x = ${N(st.lx ? st.ru : st.lu)}</b>. Check it by substituting into the original equation.`);
      if (st.lx === 0 && st.rx === 0) msg(st.lu === st.ru ? "Both sides are equal for every x: <b>infinitely many solutions</b>." : `${N(st.lu)} = ${N(st.ru)} is false: <b>no solution</b>.`);
    }
    function apply(type, d) {
      const L = $("[data-side=l]", body), R = $("[data-side=r]", body);
      L.innerHTML = type === "x" ? tiles(st.lx, st.lu, d, 0) : tiles(st.lx, st.lu, 0, d); R.innerHTML = type === "x" ? tiles(st.rx, st.ru, d, 0) : tiles(st.rx, st.ru, 0, d);
      const old = { ...st }; if (type === "x") { st.lx += d; st.rx += d; } else { st.lu += d; st.ru += d; }
      const zp = (a, b) => (a > 0 && b < 0) || (a < 0 && b > 0) ? 1 : 0;
      const cancel = type === "x" ? zp(old.lx, d) + zp(old.rx, d) : zp(old.lu, d) + zp(old.ru, d);
      msg(`Added <b>${d > 0 ? "+" : "−"}${type === "x" ? "x" : "1"}</b> to <b>both</b> sides to keep the balance.${cancel ? ` ${cancel === 2 ? "Both sides" : "One side"} formed a zero pair that cancels.` : ""}`);
      body.querySelectorAll(".tile.new").forEach(t => { const pos = /x|u/.test(t.className) && !/nx|nu/.test(t.className); const opp = [...t.parentElement.querySelectorAll(".tile:not(.new)")].reverse().find(q => (pos ? /nx|nu/ : / x| u/).test(" " + q.className.replace("tile", "")) && (type === "x" ? /x/ : /u/).test(q.className)); if (opp) setTimeout(() => { opp.classList.add("gone"); t.classList.add("gone"); }, 500); });
      setTimeout(draw, 1150);
    }
    $$("[data-d]", body).forEach(b => b.onclick = () => { const [t, d] = b.dataset.d.split(","); apply(t, +d); });
    $("[data-div]", body).onclick = () => {
      const side = st.lx !== 0 && st.lu === 0 && st.rx === 0 ? "l" : st.rx !== 0 && st.ru === 0 && st.lx === 0 ? "r" : null;
      if (!side) { msg("First get the x-tiles alone on one side and only number tiles on the other."); return; }
      const c = side === "l" ? st.lx : st.rx, other = side === "l" ? st.ru : st.lu;
      if (c === 1) { msg("x already has a coefficient of 1."); return; }
      if (other % c !== 0) { msg(`x = ${frac(other, c)}. The answer is a fraction, so tiles can’t show it, but it’s still correct!`); return; }
      msg(`Divide both sides by <b>${N(c)}</b>: ${N(other)} ÷ ${P(c)} = ${N(other / c)}.${c < 0 ? " A negative divided by a negative is positive; a positive divided by a negative is negative." : ""}`);
      if (side === "l") { st.lx = 1; st.ru = other / c; } else { st.rx = 1; st.lu = other / c; }
      setTimeout(draw, 300);
    };
    $("[data-a=reset]", body).onclick = () => { reset(); msg(""); draw(); };
    $("[data-a=next]", body).onclick = () => { pi++; reset(); msg(""); draw(); };
    reset(); draw();
  };

  /* ================= 4. WHY THE INEQUALITY SIGN FLIPS ================= */
  S.ineq = (el, o) => {
    const body = shell(el, o, "Flip the Sign?", "↔️"), W = 600, R = 16, X = v => 20 + (v + R) / (2 * R) * (W - 40);
    const p = o.p ?? 2, q = o.q ?? 5;
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 ${W} 150" class="simsvg wide"><g class="g0"></g><g class="g1"></g></svg>
      <div class="simrow2"><div class="simgrp k1">${sl("k", "Multiply both sides by k =", -3, 3, 1, o.k ?? -2)}</div><div class="simbig steps" style="font-size:1.1rem"></div></div></div>`;
    const line = y => { let s = `<line class="nl" x1="10" x2="${W - 10}" y1="${y}" y2="${y}"/>`; for (let v = -R; v <= R; v++) s += `<line class="nlt" x1="${X(v)}" x2="${X(v)}" y1="${y - (v % 5 ? 5 : 9)}" y2="${y + (v % 5 ? 5 : 9)}"/>` + (v % 5 === 0 ? `<text class="st" x="${X(v)}" y="${y + 22}" text-anchor="middle">${N(v)}</text>` : ""); return s; };
    $(".g0", body).innerHTML = line(40) + line(115) + `<text class="st b" x="14" y="26">before</text><text class="st b" x="14" y="101">after × k</text>`;
    let last = 1;
    function draw() {
      const k = rd(body, "k"), kk = k === 0 ? 1 : k; if (k === 0) { $("[data-s=k]", body).value = last; return draw(); } last = k;
      const a = p * kk, b = q * kk, sign = a < b ? "<" : a > b ? ">" : "=";
      $(".g1", body).innerHTML = `<circle class="dotA" cx="${X(p)}" cy="40" r="7"/><circle class="dotZ" cx="${X(q)}" cy="40" r="7"/><text class="st b" x="${X(p)}" y="24" text-anchor="middle">${p}</text><text class="st b" x="${X(q)}" y="24" text-anchor="middle">${q}</text>
        <line x1="${X(p)}" y1="46" x2="${X(a)}" y2="109" stroke="#e0a100" stroke-width="2" stroke-dasharray="4 3"/><line x1="${X(q)}" y1="46" x2="${X(b)}" y2="109" stroke="#1aa36f" stroke-width="2" stroke-dasharray="4 3"/>
        <circle class="dotA" cx="${X(a)}" cy="115" r="7"/><circle class="dotZ" cx="${X(b)}" cy="115" r="7"/>`;
      $(".steps", body).innerHTML = `<div>${p} &lt; ${q}</div><div>${p}${P(kk)} ? ${q}${P(kk)}</div><div>${N(a)} <span style="color:${kk < 0 ? "var(--c2)" : "var(--c4)"}">${sign === "<" ? "&lt;" : "&gt;"}</span> ${N(b)}</div><div class="note">${kk < 0 ? "🔄 Multiplying by a <b>negative</b> flips the order on the number line, so the sign <b>flips</b>." : "Multiplying by a positive keeps the order, so the sign stays the same."}</div>`;
    }
    body.addEventListener("input", draw); draw();
  };

  /* ================= 5. BOX METHOD: (ax + b)(cx + d) ================= */
  S.boxmult = (el, o) => {
    const body = shell(el, o, "Box Method Multiplier", "🟧");
    body.innerHTML = `<div class="simrow"><div class="simctl"><div class="simgrp k1"><b>First factor: (ax + b)</b>${sl("a", "a", -4, 4, 1, o.a ?? 2)}${sl("b", "b", -6, 6, 1, o.b ?? -3)}</div><div class="simgrp k2"><b>Second factor: (cx + d)</b>${sl("c", "c", -4, 4, 1, o.c ?? 1)}${sl("d", "d", -6, 6, 1, o.d ?? 5)}</div></div>
      <div class="simcol"><div class="bmwrap"></div><div class="steps"></div></div></div>`;
    const t = (c, v) => c === 0 ? "0" : v ? (c === 1 ? v : c === -1 ? "−" + v : N(c) + v) : N(c);
    const poly = (A, B, C) => { const parts = [[A, "x²"], [B, "x"], [C, ""]].filter(p => p[0] !== 0); if (!parts.length) return "0"; return parts.map((p, i) => { const s = t(Math.abs(p[0]), p[1]) ; return i === 0 ? (p[0] < 0 ? "−" : "") + s : (p[0] < 0 ? " − " : " + ") + s; }).join(""); };
    const fac = (m, n) => `(${poly(0, m, n)})`;
    function draw() {
      const a = rd(body, "a"), b = rd(body, "b"), c = rd(body, "c"), d = rd(body, "d");
      const cell = (k, v) => `<td class="${k < 0 ? "neg" : k > 0 ? "pos" : ""}">${t(k, v)}</td>`;
      $(".bmwrap", body).innerHTML = `<table class="bm"><tr><th>×</th><th>${t(a, "x")}</th><th>${N(b)}</th></tr><tr><th>${t(c, "x")}</th>${cell(a * c, "x²")}${cell(b * c, "x")}</tr><tr><th>${N(d)}</th>${cell(a * d, "x")}${cell(b * d, "")}</tr></table>`;
      $(".steps", body).innerHTML = `<div class="note">${fac(a, b)}${fac(c, d)}</div><div>= ${t(a * c, "x²")} + ${P(a * d)}x + ${P(b * c)}x + ${P(b * d)}</div><div>= <b>${poly(a * c, a * d + b * c, b * d)}</b></div><div class="note">Combine the two x-terms (the diagonal): ${P(a * d)} + ${P(b * c)} = ${N(a * d + b * c)}. Watch the signs: a 🟨 cell is positive, a 🟥 cell is negative.</div>`;
    }
    body.addEventListener("input", draw); draw();
  };

  /* ================= 6. FUNCTION MACHINES: composition ================= */
  const FN = {
    "2x-3": { l: "2x − 3", f: x => 2 * x - 3, s: x => `2${P(x)} − 3` },
    "x^2+1": { l: "x² + 1", f: x => x * x + 1, s: x => `${P(x)}² + 1` },
    "-x+4": { l: "−x + 4", f: x => -x + 4, s: x => `−${P(x)} + 4` },
    "|x|-2": { l: "|x| − 2", f: x => Math.abs(x) - 2, s: x => `|${N(x)}| − 2` },
    "x^2-3x": { l: "x² − 3x", f: x => x * x - 3 * x, s: x => `${P(x)}² − 3${P(x)}` },
    "-2x": { l: "−2x", f: x => -2 * x, s: x => `−2${P(x)}` }
  };
  S.machine = (el, o) => {
    const body = shell(el, o, "Function Machines", "⚙️"), ks = Object.keys(FN);
    const opt = sel => ks.map(k => `<option value="${k}" ${k === sel ? "selected" : ""}>${FN[k].l}</option>`).join("");
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 600 150" class="simsvg wide"><g class="mg"></g><circle class="ball" r="16" cx="30" cy="75"/><text class="st big bt" x="30" y="80" text-anchor="middle">0</text></svg>
      <div class="simrow2"><div class="simgrp k1"><label class="simsl">f(x) = <select data-f="f">${opt(o.f || "2x-3")}</select></label><label class="simsl">g(x) = <select data-f="g">${opt(o.g || "x^2+1")}</select></label>${sl("x", "input x =", -5, 5, 1, o.x ?? -2)}</div>
      <div class="simcol"><div class="simbtns"><button class="pill-btn dark sm" data-go="fg">▶ f(g(x))</button><button class="pill-btn dark sm" data-go="gf">▶ g(f(x))</button></div><div class="steps"></div></div></div></div>`;
    const mach = (x, lab) => `<rect class="mach" x="${x}" y="35" width="150" height="80" rx="16"/><text class="st big" x="${x + 75}" y="70" text-anchor="middle">${lab}</text>`;
    function run(order) {
      const f = FN[$("[data-f=f]", body).value], g = FN[$("[data-f=g]", body).value], x = rd(body, "x");
      const [A, B, an, bn] = order === "fg" ? [g, f, "g", "f"] : [f, g, "f", "g"], m = A.f(x), r = B.f(m);
      $(".mg", body).innerHTML = mach(150, `${an}(x) = ${A.l}`) + mach(370, `${bn}(x) = ${B.l}`) + `<text class="st" x="225" y="100" text-anchor="middle">inside: goes first</text><text class="st" x="445" y="100" text-anchor="middle">outside: goes second</text>`;
      const ball = $(".ball", body), bt = $(".bt", body); bt.textContent = N(x);
      const mv = (x0, x1, ms, done) => tween(ms, e => { const cx = x0 + (x1 - x0) * e; ball.setAttribute("cx", cx); bt.setAttribute("x", cx); }, done);
      $(".steps", body).innerHTML = `<div class="note">${bn}(${an}(${N(x)})): work from the <b>inside out</b>.</div>`;
      mv(30, 225, 600, () => { bt.textContent = N(m); $(".steps", body).innerHTML += `<div>${an}(${N(x)}) = ${A.s(x)} = <b>${N(m)}</b></div>`;
        mv(225, 445, 700, () => { bt.textContent = N(r); $(".steps", body).innerHTML += `<div>${bn}(${N(m)}) = ${B.s(m)} = <b>${N(r)}</b></div>`;
          mv(445, 570, 500, () => { $(".steps", body).innerHTML += `<div>So ${bn}(${an}(${N(x)})) = <b style="color:var(--c4)">${N(r)}</b></div><div class="note">Try the other order. Is f(g(x)) the same as g(f(x))? Usually not!</div>`; }); }); });
    }
    $$("[data-go]", body).forEach(b => b.onclick = () => run(b.dataset.go));
    body.addEventListener("input", () => run("fg")); run("fg");
  };

  /* ================= 7. EXPONENT LAB: negative bases and negative exponents ================= */
  S.expo = (el, o) => {
    const body = shell(el, o, "Exponent Lab", "🔢");
    body.innerHTML = `<div class="simrow"><div class="simcol"><div class="simgrp k1">${sl("b", "base b", -5, 5, 1, o.b ?? -2)}${sl("n", "exponent n", -3, 5, 1, o.n ?? 3)}</div>
      <div class="steps"></div></div><div class="simcol"><b class="small">The pattern: each step LEFT divides by the base</b><div class="ex-bar"></div><div class="simbig compare"></div></div></div>`;
    const pw = (b, n) => n >= 0 ? frac(b ** n, 1) : frac(1, b ** -n);
    function draw() {
      let b = rd(body, "b"), n = rd(body, "n");
      if (b === 0 && n <= 0) { $(".steps", body).innerHTML = `<div>0<sup>${N(n)}</sup> is <b>undefined</b>${n === 0 ? " (most textbooks)" : ": you can’t divide by 0"}.</div>`; $(".ex-bar", body).innerHTML = ""; $(".compare", body).innerHTML = ""; return; }
      const B = P(b), rows = [];
      if (n > 0) rows.push(`${B}<sup>${n}</sup> = ${Array(n).fill(B).join(" · ")}`, `= <b>${pw(b, n)}</b>`, `<span class="note">${b < 0 ? `${n} negative factor${n > 1 ? "s" : ""}: ${n % 2 ? "odd count → negative" : "even count → positive"}` : "positive base → positive result"}</span>`);
      else if (n === 0) rows.push(`${B}<sup>0</sup> = <b>1</b>`, `<span class="note">Any nonzero number to the 0 power is 1 (it’s ${B}<sup>1</sup> ÷ ${B}).</span>`);
      else rows.push(`${B}<sup>${N(n)}</sup> = 1 ÷ ${B}<sup>${-n}</sup>`, `= 1 ÷ ${frac(b ** -n, 1)}`, `= <b>${pw(b, n)}</b>`, `<span class="note">A negative exponent means <b>reciprocal</b>, not a negative number.</span>`);
      $(".steps", body).innerHTML = rows.map(r => `<div>${r}</div>`).join("");
      const vals = []; for (let e = -3; e <= 5; e++) vals.push(b === 0 && e <= 0 ? 0 : b ** e); const m = Math.max(...vals.map(Math.abs)) || 1;
      $(".ex-bar", body).innerHTML = vals.map((v, i) => `<div class="${i - 3 === n ? "on" : ""}" style="height:${Math.max(6, Math.sqrt(Math.abs(v) / m) * 100)}%;background:${v < 0 ? "#d0453a" : "#e0a100"}" title="${b}^${i - 3}">${i - 3}</div>`).join("");
      const a = Math.abs(b) || 2;
      $(".compare", body).innerHTML = n > 0 ? `Compare: (−${a})<sup>${n}</sup> = ${pw(-a, n)} but −${a}<sup>${n}</sup> = ${frac(-(a ** n), 1)}. The parentheses decide whether the negative is part of the base.` : `Compare: ${a}<sup>${N(n || -1)}</sup> = ${pw(a, n || -1)} and (−${a})<sup>${N(n || -1)}</sup> = ${pw(-a, n || -1)}.`;
    }
    body.addEventListener("input", draw); draw();
  };

  /* ================= 8. SYNTHETIC DIVISION (step by step) ================= */
  S.synth = (el, o) => {
    const body = shell(el, o, "Synthetic Division Step-Through", "➗"), polys = o.polys || [[1, -2, -5, 6], [2, 3, -11, -6], [1, 0, -7, 6], [1, -3, 0, 4]];
    let pi = 0, step = 0;
    body.innerHTML = `<div class="simcol"><div class="simrow2"><div class="simgrp k1"><div class="simbtns">${polys.map((p, i) => `<button class="pill-btn sm" data-p="${i}">P${i + 1}</button>`).join("")}</div>${sl("c", "divide by (x − c), c =", -5, 5, 1, o.c ?? 1)}</div>
      <div class="simbtns"><button class="pill-btn sm" data-a="back">◀ Back</button><button class="pill-btn dark sm" data-a="next">Next step ▶</button><button class="pill-btn sm" data-a="all">Show all</button></div></div>
      <div class="simbig" data-poly style="font-family:var(--display);font-size:1.15rem"></div><div class="synwrap"></div><div class="steps"></div></div>`;
    const polyStr = cs => { const d = cs.length - 1; const ps = cs.map((c, i) => [c, d - i]).filter(p => p[0] !== 0); return ps.map((p, i) => { const a = Math.abs(p[0]), v = p[1] === 0 ? "" : p[1] === 1 ? "x" : `x<sup>${p[1]}</sup>`, co = a === 1 && v ? "" : a; return (i ? (p[0] < 0 ? " − " : " + ") : (p[0] < 0 ? "−" : "")) + co + v; }).join("") || "0"; };
    function draw() {
      const cs = polys[pi], c = rd(body, "c"), n = cs.length, bot = [], mid = [""];
      bot[0] = cs[0]; for (let i = 1; i < n; i++) { mid[i] = bot[i - 1] * c; bot[i] = cs[i] + mid[i]; }
      const max = 2 * n - 1; step = clamp(step, 0, max);
      const showB = i => step >= (i === 0 ? 1 : 2 * i + 1), showM = i => step >= 2 * i;
      $$("[data-p]", body).forEach(b => b.classList.toggle("on", +b.dataset.p === pi));
      $("[data-poly]", body).innerHTML = `(${polyStr(cs)}) ÷ (x ${c < 0 ? "+ " + -c : "− " + c})`;
      const cur = step === 0 ? -1 : step === 1 ? 0 : Math.floor(step / 2);
      $(".synwrap", body).innerHTML = `<table class="syn"><tr><td class="c" rowspan="2" style="vertical-align:top;color:var(--c2)">${N(c)}</td>${cs.map(x => `<td>${N(x)}</td>`).join("")}</tr>
        <tr>${cs.map((x, i) => `<td class="${step % 2 === 0 && i === cur && i > 0 ? "hl" : ""}">${i && showM(i) ? N(mid[i]) : ""}</td>`).join("")}</tr>
        <tr class="line"><td></td>${cs.map((x, i) => `<td class="${showB(i) && i === n - 1 ? "rem" : ""} ${step % 2 === 1 && i === cur ? "hl" : ""}">${showB(i) ? N(bot[i]) : ""}</td>`).join("")}</tr></table>`;
      let say = "Press <b>Next step</b>. Write c on the left and the coefficients across the top (use 0 for any missing power).";
      if (step === 1) say = `Bring down the first coefficient: <b>${N(bot[0])}</b>.`;
      else if (step > 1 && step % 2 === 0) say = `Multiply: ${P(bot[cur - 1])} × ${P(c)} = <b>${N(mid[cur])}</b>. Write it under the next coefficient.`;
      else if (step > 1) say = `Add: ${P(cs[cur])} + ${P(mid[cur])} = <b>${N(bot[cur])}</b>.`;
      if (step === max) { const q = bot.slice(0, -1), r = bot[n - 1], pc = cs.reduce((s, x) => s * c + x, 0);
        say += `<br>✅ Quotient: <b>${polyStr(q)}</b>, remainder <b>${N(r)}</b>.<br>Remainder Theorem check: p(${N(c)}) = <b>${N(pc)}</b>. ${r === 0 ? `🎉 Remainder 0, so <b>(x ${c < 0 ? "+ " + -c : "− " + c})</b> is a factor and x = ${N(c)} is a zero.` : "Not 0, so it is not a factor."}`; }
      $(".steps", body).innerHTML = `<div class="note" style="font-size:.95rem">${say}</div>`;
    }
    $("[data-a=next]", body).onclick = () => { step++; draw(); }; $("[data-a=back]", body).onclick = () => { step--; draw(); }; $("[data-a=all]", body).onclick = () => { step = 99; draw(); };
    $$("[data-p]", body).forEach(b => b.onclick = () => { pi = +b.dataset.p; step = 0; draw(); });
    body.addEventListener("input", () => { step = 0; draw(); }); draw();
  };

  /* ================= 9. COORDINATE GEOMETRY: drag two points ================= */
  S.coord = (el, o) => {
    const body = shell(el, o, "Coordinate Lab", "📍"), R = 8, W = 360, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    const pts = [o.A || [-3, -2], o.B || [5, 4]];
    let g = ""; for (let i = -R; i <= R; i++) { const p = W / 2 + i * s; g += `<line class="sg ${i === 0 ? "ax" : ""}" x1="${p}" y1="0" x2="${p}" y2="${W}"/><line class="sg ${i === 0 ? "ax" : ""}" x1="0" y1="${p}" x2="${W}" y2="${p}"/>` + (i && i % 2 === 0 ? `<text class="st" x="${p}" y="${W / 2 + 13}" text-anchor="middle">${N(i)}</text><text class="st" x="${W / 2 - 5}" y="${W / 2 - i * s + 4}" text-anchor="end">${N(i)}</text>` : ""); }
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq" style="touch-action:none">${g}<g class="cg"></g></svg><div class="simcol"><p class="mu small" style="margin:0">Drag point <b style="color:var(--c1)">A</b> or <b style="color:var(--c2)">B</b>. They snap to whole numbers.</p><div class="steps"></div></div></div>`;
    const svg = $("svg", body);
    const simp = n => { let a = 1, b = n; for (let k = Math.floor(Math.sqrt(n)); k > 1; k--) if (n % (k * k) === 0) { a = k; b = n / (k * k); break; } return b === 1 ? String(a) : `${a > 1 ? a : ""}√${b}`; };
    function draw() {
      const [[x1, y1], [x2, y2]] = pts, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy;
      $(".cg", body).innerHTML = `<line class="leg" x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y1)}"/><line class="leg" x1="${X(x2)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}"/>
        <line class="sl1" x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}"/><text class="st b" x="${(X(x1) + X(x2)) / 2}" y="${Y(y1) + (dy >= 0 ? 15 : -6)}" text-anchor="middle">Δx = ${N(dx)}</text><text class="st b" x="${X(x2) + 5}" y="${(Y(y1) + Y(y2)) / 2}">Δy = ${N(dy)}</text>
        <circle cx="${X((x1 + x2) / 2)}" cy="${Y((y1 + y2) / 2)}" r="5" fill="var(--c4)"/>
        ${pts.map((p, i) => `<g class="gpt" data-i="${i}"><circle cx="${X(p[0])}" cy="${Y(p[1])}" r="9" fill="var(--c${i + 1})"/><text class="st b" x="${X(p[0]) + 11}" y="${Y(p[1]) - 9}">${"AB"[i]}(${N(p[0])}, ${N(p[1])})</text></g>`).join("")}`;
      const slope = dx === 0 ? "undefined (vertical)" : frac(dy, dx), perp = dy === 0 ? "undefined (vertical)" : dx === 0 ? "0" : frac(-dx, dy);
      $(".steps", body).innerHTML = `<div>Δx = x₂ − x₁ = ${N(x2)} − ${P(x1)} = <b>${N(dx)}</b></div><div>Δy = y₂ − y₁ = ${N(y2)} − ${P(y1)} = <b>${N(dy)}</b></div>
        <div>slope = Δy ÷ Δx = <b>${slope}</b></div><div>distance = √(${P(dx)}² + ${P(dy)}²) = √${d2} = <b>${simp(d2)}</b>${Number.isInteger(Math.sqrt(d2)) ? "" : ` ≈ ${N(Math.round(Math.sqrt(d2) * 100) / 100)}`}</div>
        <div>midpoint = (${frac(x1 + x2, 2)}, ${frac(y1 + y2, 2)}) <span class="note">🟢 green dot</span></div><div class="note">Perpendicular slope (negative reciprocal): ${perp}</div>`;
      $$(".gpt", body).forEach(gp => gp.onpointerdown = e => { e.preventDefault(); const i = +gp.dataset.i; svg.setPointerCapture(e.pointerId);
        const mv = ev => { const r = svg.getBoundingClientRect(), x = Math.round(((ev.clientX - r.left) / r.width * W - W / 2) / s), y = Math.round((W / 2 - (ev.clientY - r.top) / r.height * W) / s);
          const nx = clamp(x, -R + 1, R - 1), ny = clamp(y, -R + 1, R - 1); if (nx !== pts[i][0] || ny !== pts[i][1]) { pts[i] = [nx, ny]; if (pts[0][0] === pts[1][0] && pts[0][1] === pts[1][1]) pts[i] = [nx + (nx < R - 1 ? 1 : -1), ny]; draw(); } };
        const up = () => { svg.removeEventListener("pointermove", mv); svg.removeEventListener("pointerup", up); };
        svg.addEventListener("pointermove", mv); svg.addEventListener("pointerup", up); });
    }
    draw();
  };

  /* ================= 10. PARALLEL LINES + TRANSVERSAL ================= */
  S.angles = (el, o) => {
    const body = shell(el, o, "Angle Pair Explorer", "📐"), W = 600, H = 290, y1 = 95, y2 = 205, cx = 300, cy = 150;
    let sel = o.sel ?? 3;
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 ${W} ${H}" class="simsvg wide"><g class="ag"></g></svg>
      <div class="simrow2"><div class="simgrp k1">${sl("t", "Angle θ (angle 2) =", 25, 155, 5, o.t ?? 60)}<p class="mu small" style="margin:0">Tap any numbered angle. Pink = selected, blue = equal (congruent), dashed orange = supplementary (adds to 180° with the selected angle).</p></div><div class="steps" style="font-size:.95rem"></div></div></div>`;
    const NAME = { TL: "top-left", TR: "top-right", BL: "bottom-left", BR: "bottom-right" }, POS = ["TL", "TR", "BL", "BR"];
    function rel(i, j) {
      const I = i < 4 ? 0 : 1, J = j < 4 ? 0 : 1, pi = POS[i % 4], pj = POS[j % 4];
      if (I === J) return (pi[0] !== pj[0] && pi[1] !== pj[1]) ? "vertical angles" : "a linear pair";
      if (pi === pj) return "corresponding angles";
      const inter = (k, p) => (k === 0 && p[0] === "B") || (k === 1 && p[0] === "T");
      const ii = inter(I, pi), jj = inter(J, pj), same = pi[1] === pj[1];
      if (ii && jj) return same ? "same-side interior angles" : "alternate interior angles";
      if (!ii && !jj) return same ? "same-side exterior angles" : "alternate exterior angles";
      return "not a named pair";
    }
    function draw() {
      const th = rd(body, "t"), r = th * Math.PI / 180, ux = Math.cos(r), uy = -Math.sin(r);
      const ix = y => cx + (cy - y) / Math.sin(r) * Math.cos(r);
      const P1 = [ix(y1), y1], P2 = [ix(y2), y2], far = 400;
      const meas = p => (p === "TR" || p === "BL") ? th : 180 - th;
      const rays = { R: [1, 0], L: [-1, 0], U: [ux, uy], D: [-ux, -uy] }, between = { TR: ["R", "U"], TL: ["U", "L"], BL: ["L", "D"], BR: ["D", "R"] };
      const sm = meas(POS[sel % 4]);
      let g = `<line class="nl" x1="20" x2="${W - 20}" y1="${y1}" y2="${y1}"/><line class="nl" x1="20" x2="${W - 20}" y1="${y2}" y2="${y2}"/><text class="st" x="${W - 24}" y="${y1 - 6}" text-anchor="end">line m</text><text class="st" x="${W - 24}" y="${y2 - 6}" text-anchor="end">line n (parallel to m)</text>
        <line class="sl1" x1="${cx - ux * far}" y1="${cy - uy * far}" x2="${cx + ux * far}" y2="${cy + uy * far}"/>`;
      for (let k = 0; k < 8; k++) {
        const C = k < 4 ? P1 : P2, p = POS[k % 4], [a, b] = between[p].map(n => rays[n]), m = meas(p);
        const r0 = k === sel ? 32 : 26, ax = C[0] + a[0] * r0, ay = C[1] + a[1] * r0, bx = C[0] + b[0] * r0, by = C[1] + b[1] * r0, sweep = a[0] * b[1] - a[1] * b[0] > 0 ? 1 : 0;
        const bis = [a[0] + b[0], a[1] + b[1]], L = Math.hypot(...bis) || 1, lx = C[0] + bis[0] / L * 44, ly = C[1] + bis[1] / L * 44;
        const cls = k === sel ? "sel" : m === sm ? "eq" : "sup";
        g += `<g class="ang ${cls}" data-k="${k}" role="button" tabindex="0"><path d="M${C[0]} ${C[1]} L${ax} ${ay} A${r0} ${r0} 0 0 ${sweep} ${bx} ${by} Z"/><circle cx="${lx}" cy="${ly}" r="13" fill="var(--surface)" stroke="var(--line)"/><text x="${lx}" y="${ly + 4.5}" text-anchor="middle">${k + 1}</text></g>`;
      }
      $(".ag", body).innerHTML = g;
      const list = [...Array(8).keys()].filter(j => j !== sel).map(j => { const m = meas(POS[j % 4]), rl = rel(sel, j); return `<div>∠${j + 1} = ${m}° · <b>${rl}</b> · ${m === sm ? "🔵 equal" : "🟠 supplementary"}</div>`; }).join("");
      $(".steps", body).innerHTML = `<div><b>∠${sel + 1} = ${sm}°</b> (${NAME[POS[sel % 4]]} at line ${sel < 4 ? "m" : "n"})</div>${list}`;
      $$(".ang", body).forEach(a => { a.onclick = () => { sel = +a.dataset.k; draw(); }; a.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { sel = +a.dataset.k; draw(); } }; });
    }
    body.addEventListener("input", draw); draw();
  };

  /* ================= 11. SEGMENT ADDITION with expressions ================= */
  S.segment = (el, o) => {
    const body = shell(el, o, "Segment Addition Builder", "📏"), p1 = o.p1 || [2, 3], p2 = o.p2 || [4, -5], tot = o.total ?? 40, mid = !!o.midpoint;
    const ex = ([a, b]) => `${a === 1 ? "" : a === -1 ? "−" : a}x ${b < 0 ? "− " + -b : "+ " + b}`;
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 600 120" class="simsvg wide"><g class="sgg"></g></svg>
      <div class="simrow2"><div class="simgrp k1">${sl("x", "Try x =", -3, 15, 1, o.x ?? 3)}<p class="mu small" style="margin:0">AM = ${ex(p1)}, MB = ${ex(p2)}${mid ? ", and M is the <b>midpoint</b> of AB" : `, AB = ${tot}`}.</p></div><div class="steps"></div></div></div>`;
    function draw() {
      const x = rd(body, "x"), a = p1[0] * x + p1[1], b = p2[0] * x + p2[1], sum = a + b, ok = mid ? a === b && a > 0 : sum === tot && a > 0 && b > 0;
      const bad = a <= 0 || b <= 0, sc = 520 / Math.max(Math.abs(a) + Math.abs(b), 1), xa = 40, xm = xa + Math.abs(a) * sc, xb = xm + Math.abs(b) * sc;
      $(".sgg", body).innerHTML = `<line class="seg" x1="${xa}" x2="${xm}" y1="60" y2="60" stroke="${a > 0 ? "#2b7de9" : "#d0453a"}"/><line class="seg" x1="${xm}" x2="${xb}" y1="60" y2="60" stroke="${b > 0 ? "#e8368f" : "#d0453a"}"/>
        ${[[xa, "A"], [xm, "M"], [xb, "B"]].map(([px, l]) => `<circle cx="${px}" cy="60" r="8" fill="var(--fg)"/><text class="st b" x="${px}" y="38" text-anchor="middle">${l}</text>`).join("")}
        <text class="st b" x="${(xa + xm) / 2}" y="92" text-anchor="middle">AM = ${N(a)}</text><text class="st b" x="${(xm + xb) / 2}" y="92" text-anchor="middle">MB = ${N(b)}</text>`;
      $(".steps", body).innerHTML = `<div>AM = ${ex(p1).replace("x", "(" + N(x) + ")")} = ${N(a)}</div><div>MB = ${ex(p2).replace("x", "(" + N(x) + ")")} = ${N(b)}</div>
        <div>${mid ? `Is AM = MB? ${N(a)} ${a === b ? "=" : "≠"} ${N(b)}` : `AM + MB = ${N(sum)} ${sum === tot ? "=" : "≠"} ${tot}`}</div>
        <div class="${ok ? "simbig win" : "note"}">${ok ? `🎉 x = ${x} works! AB = ${N(sum)}.` : bad ? "⚠️ A length can’t be zero or negative. Try another x." : mid ? "Not a midpoint yet. Set the two expressions equal and solve." : "Not equal yet. Write AM + MB = AB and solve for x."}</div>`;
    }
    body.addEventListener("input", draw); draw();
  };

  /* ================= 12. POLYGON ANGLE SUMS ================= */
  S.polygon = (el, o) => {
    const body = shell(el, o, "Polygon Angle Lab", "⬡");
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 300 300" class="simsvg sq"><g class="pg"></g></svg><div class="simcol"><div class="simgrp k1">${sl("n", "Number of sides n =", 3, 12, 1, o.n ?? 6)}</div><div class="steps"></div></div></div>`;
    const NAMES = { 3: "triangle", 4: "quadrilateral", 5: "pentagon", 6: "hexagon", 7: "heptagon", 8: "octagon", 9: "nonagon", 10: "decagon", 11: "hendecagon", 12: "dodecagon" };
    function draw() {
      const n = rd(body, "n"), V = [...Array(n).keys()].map(i => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [150 + 115 * Math.cos(a), 155 + 115 * Math.sin(a)]; });
      let g = `<polygon class="poly" points="${V.map(v => v.join(",")).join(" ")}"/>`;
      for (let i = 2; i < n - 1; i++) g += `<line class="diag" x1="${V[0][0]}" y1="${V[0][1]}" x2="${V[i][0]}" y2="${V[i][1]}"/>`;
      for (let i = 1; i < n - 1; i++) { const c = [(V[0][0] + V[i][0] + V[i + 1][0]) / 3, (V[0][1] + V[i][1] + V[i + 1][1]) / 3]; g += `<text class="st b" x="${c[0]}" y="${c[1] + 4}" text-anchor="middle">${i}</text>`; }
      $(".pg", body).innerHTML = g; const sum = (n - 2) * 180, each = sum / n;
      $(".steps", body).innerHTML = `<div>${n} sides: a <b>${NAMES[n]}</b></div><div>Diagonals from one vertex make <b>${n - 2}</b> triangles.</div><div>Interior angle sum = (n − 2) · 180° = (${n} − 2) · 180° = <b>${sum}°</b></div><div>Each interior angle (if regular) = ${sum}° ÷ ${n} = <b>${Number.isInteger(each) ? each : each.toFixed(2)}°</b></div><div>Each exterior angle (if regular) = 360° ÷ ${n} = <b>${Number.isInteger(360 / n) ? 360 / n : (360 / n).toFixed(2)}°</b></div><div class="note">The exterior angles of ANY convex polygon add to 360°.</div>`;
    }
    body.addEventListener("input", draw); draw();
  };
})();
