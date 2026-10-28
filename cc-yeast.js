/* =====================================================================
   MYSTERY BALLOON LAB BLOCKS (no need to edit)
   yeastsim : 5 flasks of yeast / sugar / water. Run 30 minutes and watch
              the balloon, a glucose test strip, and a thermometer, then
              record the data (graded).
   gastest  : collect gas from the balloon and run 4 chemical tests
              (limewater, glowing splint, burning splint, BTB) on it and on
              room air, then use an ID guide to name the mystery gas (graded).
   The gas is never named until the student identifies it.
   Fast test hook: window.YS_FAST = 1 (skips the animation time).
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$ } = H;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ms = n => window.YS_FAST ? 30 : n;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, p) => a + (b - a) * p;
  function tween(dur, fn, done) { const t0 = performance.now(); const f = now => { const p = clamp((now - t0) / dur, 0, 1); fn(p); if (p < 1) requestAnimationFrame(f); else if (done) done(); }; requestAnimationFrame(f); }
  const mix = (c1, c2, p) => { const h = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16)); const a = h(c1), b = h(c2); return "#" + a.map((v, i) => Math.round(lerp(v, b[i], p)).toString(16).padStart(2, "0")).join(""); };

  if (!document.getElementById("ys-css")) {
    const c = document.createElement("style"); c.id = "ys-css";
    c.textContent = `
    .ys{border:3px solid var(--line);border-radius:22px;padding:14px 16px;background:var(--surface);min-width:0}
    .ys h4{margin:0 0 6px}.ys .how{font-size:.93rem;color:var(--muted);margin:2px 0 10px}
    .ys-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px}
    .ys-f{border:2px solid var(--line);border-radius:16px;padding:8px;background:#fbfcff;display:grid;gap:6px;min-width:0}
    .ys-f.on{border-color:var(--lc)}.ys-f h5{margin:0;font:800 .92rem var(--body)}.ys-f .lb{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#2b2f3a;color:#fff;font-weight:900;margin-right:6px;font-size:.85rem}
    .ys-f svg{width:100%;height:auto;display:block}
    .ys-read{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;font-size:.78rem;text-align:center}
    .ys-read div{background:#fff;border:1.5px solid var(--line);border-radius:10px;padding:3px 2px}.ys-read b{display:block;font-size:.98rem}
    .ys-tw{overflow-x:auto;max-width:100%;margin-top:12px}
    .ys-tbl{border-collapse:collapse;font-size:.9rem;background:#fff;min-width:520px}.ys-tbl th,.ys-tbl td{border:1px solid #cfd5e3;padding:6px 8px;text-align:left}.ys-tbl th{background:#f1f3f9}
    .ys-tbl input,.ys-tbl select{font:inherit;width:100%;min-width:70px;box-sizing:border-box;padding:5px 6px;border:2px solid #cfd5e3;border-radius:8px}
    .ys-tbl td.ok{background:#e8f5ec}.ys-tbl td.no{background:#fdecea}
    .ys-tests{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:12px;align-items:start}
    @media(max-width:720px){.ys-tests{grid-template-columns:1fr}}
    .ys-chips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}
    .ys-chip{all:unset;cursor:pointer;border:2px solid var(--line);border-radius:999px;padding:6px 12px;font:800 .86rem var(--body);background:var(--surface)}
    .ys-chip.on{background:var(--lc);border-color:var(--lc);color:#fff}.ys-chip[disabled]{opacity:.45;cursor:default}
    .ys-guide{border:2px dashed #b7bfd3;border-radius:14px;padding:8px 12px;background:#fffdf3;font-size:.9rem}.ys-guide h5{margin:0 0 4px}.ys-guide ul{margin:0;padding-left:18px}
    .ys-obs{border-radius:12px;padding:8px 10px;font-size:.93rem;background:var(--soft);border:2px solid var(--line);margin-top:6px}
    .ys svg.sc{width:100%;height:auto;display:block;background:#fbfcff;border-radius:16px;border:2px solid var(--line)}
    .ys .pulse{animation:yspulse 1.3s ease-in-out infinite}@keyframes yspulse{50%{box-shadow:0 0 0 6px color-mix(in srgb,var(--lc) 30%,transparent)}}`;
    document.head.appendChild(c);
  }

  /* ---------------- flask data (sample data, real pattern) ---------------- */
  const FLASKS = [
    { k: "A", name: "Yeast + sugar water (warm, 37 °C)", yeast: "live", sugar: true, temp: 37, ball: [0, 12, 20, 26], glu: [100, 70, 45, 25], t: [37, 38, 38.5, 39], liq: "#f4e3b5" },
    { k: "B", name: "Yeast + plain water (warm, 37 °C)", yeast: "live", sugar: false, temp: 37, ball: [0, 0, 1, 1], glu: [0, 0, 0, 0], t: [37, 37, 37, 37], liq: "#e4eef6" },
    { k: "C", name: "Sugar water, NO yeast (warm, 37 °C)", yeast: "none", sugar: true, temp: 37, ball: [0, 0, 0, 0], glu: [100, 100, 100, 100], t: [37, 37, 37, 37], liq: "#f6edd2" },
    { k: "D", name: "Boiled yeast + sugar water (warm, 37 °C)", yeast: "dead", sugar: true, temp: 37, ball: [0, 0, 0, 0], glu: [100, 100, 100, 100], t: [37, 37, 37, 37], liq: "#efdcae" },
    { k: "E", name: "Yeast + sugar water (ice cold, 5 °C)", yeast: "live", sugar: true, temp: 5, ball: [0, 2, 3, 5], glu: [100, 96, 93, 90], t: [5, 5, 5, 5], liq: "#e2eefb" }];
  const at = (arr, p) => { const x = p * 3, i = Math.min(2, Math.floor(x)); return lerp(arr[i], arr[i + 1], x - i); };
  window.YS_DATA = { flasks: FLASKS };
  const strip = g => mix("#3aa7c9", "#7a4a12", clamp(g / 100, 0, 1)); /* glucose strip: teal (none) → brown (lots) */

  function flaskSVG(f, p, tick) {
    const c = at(f.ball, p), r = 7 + c * 1.5, gl = at(f.glu, p), tp = at(f.t, p), act = f.yeast === "live" && f.sugar && p > 0 && p < 1;
    let s = `<rect width="220" height="280" fill="#fbfcff"/><g transform="translate(0 30)">`;
    /* balloon */
    const by = 70 - r;
    s += `<path d="M104 78 L116 78 L113 92 L107 92 Z" fill="#c0392b"/>`;
    s += c < .5 ? `<path d="M100 78 q10 -14 20 0 z" fill="#e74c3c" opacity=".9"/>` : `<ellipse cx="110" cy="${by + 4}" rx="${r * .92}" ry="${r}" fill="#e74c3c" opacity=".92"/><ellipse cx="${110 - r * .35}" cy="${by - r * .35}" rx="${r * .18}" ry="${r * .28}" fill="#fff" opacity=".45"/>`;
    /* flask */
    s += `<path d="M96 92 L96 128 L52 214 Q48 228 64 228 L156 228 Q172 228 168 214 L124 128 L124 92 Z" fill="#eef6fb" stroke="#7c8aa5" stroke-width="3"/>`;
    s += `<path d="M78 164 L142 164 L166 214 Q169 225 156 225 L64 225 Q51 225 54 214 Z" fill="${f.liq}" opacity=".95"/>`;
    if (f.temp < 10) s += [[78, 172], [120, 180], [100, 196], [140, 200]].map(([x, y]) => `<rect x="${x}" y="${y}" width="16" height="14" rx="3" fill="#ffffff" stroke="#9cc5ea" stroke-width="2" opacity=".9"/>`).join("");
    /* yeast cells */
    if (f.yeast !== "none") for (let i = 0; i < 16; i++) { const x = 66 + (i * 37) % 92 + (f.yeast === "live" ? Math.sin(tick / 300 + i) * 2 : 0), y = 182 + (i * 23) % 38; s += `<ellipse cx="${x}" cy="${y}" rx="4.2" ry="3.4" fill="${f.yeast === "dead" ? "#8a7a62" : "#c9a15a"}" stroke="#7a5a22" stroke-width="1"/>`; }
    /* bubbles rising */
    if (act || (p >= 1 && f.k === "A")) { const rate = f.temp < 10 ? 3 : 9; for (let i = 0; i < rate; i++) { const ph = ((tick / 900) + i / rate) % 1, x = 80 + (i * 29) % 64, y = 220 - ph * 115; if (y > 100) s += `<circle cx="${x + Math.sin(ph * 9 + i) * 3}" cy="${y}" r="${2 + (i % 3)}" fill="#fff" stroke="#9fb3c8" stroke-width="1.2" opacity=".9"/>`; } }
    /* thermometer + strip */
    s += `<rect x="186" y="110" width="10" height="110" rx="5" fill="#fff" stroke="#7c8aa5" stroke-width="2"/><circle cx="191" cy="224" r="9" fill="#e74c3c"/><rect x="188.5" y="${220 - tp * 2.4}" width="5" height="${tp * 2.4}" fill="#e74c3c"/>`;
    s += `<rect x="20" y="120" width="14" height="70" rx="3" fill="#f3f3f3" stroke="#7c8aa5" stroke-width="1.5"/><rect x="21.5" y="164" width="11" height="18" fill="${f.sugar || f.k === "B" ? strip(gl) : strip(0)}"/><text x="27" y="112" text-anchor="middle" font-size="9" font-weight="800" fill="#555">strip</text></g>`;
    return s;
  }

  /* ---------------- yeastsim ---------------- */
  const COLS = [["ball", "Balloon size after 30 min (cm around)", "num"], ["glu", "Glucose strip after 30 min (%)", "num"], ["dt", "Did the temperature go up?", ["Yes", "No"]]];
  const answer = (f, k) => k === "ball" ? f.ball[3] : k === "glu" ? f.glu[3] : (f.t[3] > f.t[0] ? "Yes" : "No");
  const okCell = (f, k, v) => { if (v == null || v === "") return false; if (k === "dt") return v === answer(f, k); const n = parseFloat(String(v).replace(/[^\d.\-]/g, "")); return !isNaN(n) && Math.abs(n - answer(f, k)) <= 1; };
  BT.yeastsim = {
    html(b, st) {
      const ran = st.ran || {}, r = st.r || {}, chk = !!st.checked, all = FLASKS.every(f => ran[f.k]);
      let h = `<div class="ys"><h4>🧪 ${b.title || "Run the flasks"}</h4><p class="how">${b.how || ""}</p><div class="ys-grid">`;
      FLASKS.forEach(f => { const p = ran[f.k] ? 1 : 0;
        h += `<div class="ys-f ${st.busy === f.k ? "on" : ""}" data-fk="${f.k}"><h5><span class="lb">${f.k}</span>${f.name}</h5><svg viewBox="0 0 220 280" data-fsvg="${f.k}" role="img" aria-label="Flask ${f.k}">${flaskSVG(f, p, 0)}</svg>
          <div class="ys-read"><div>🎈 Balloon<b data-rb="${f.k}">${p ? f.ball[3] : 0} cm</b></div><div>🟫 Glucose<b data-rg="${f.k}">${p ? f.glu[3] : f.glu[0]}%</b></div><div>🌡️ Temp<b data-rt="${f.k}">${p ? f.t[3] : f.t[0]} °C</b></div></div>
          <button type="button" class="btn ${ran[f.k] ? "ghost" : ""}" data-frun="${f.k}" ${st.busy ? "disabled" : ""}>${ran[f.k] ? "↻ Run again" : "▶ Run 30 minutes"}</button></div>`; });
      h += `</div><p class="how" style="margin-top:8px">🟫 <b>Glucose test strip:</b> brown = lots of glucose, teal = no glucose. 100% means all of the glucose that was added at the start is still there.</p>`;
      h += `<div class="ys-tw"><table class="ys-tbl"><thead><tr><th>Flask</th>${COLS.map(c => `<th>${c[1]}</th>`).join("")}</tr></thead><tbody>${FLASKS.map(f => `<tr><td><b>${f.k}</b> ${f.name}</td>${COLS.map(([k, , ty]) => { const v = (r[f.k] || {})[k] ?? "", cls = chk ? (okCell(f, k, v) ? "ok" : "no") : "";
        return `<td class="${cls}">${ty === "num" ? `<input inputmode="decimal" data-yf="${f.k}|${k}" value="${esc(v)}" ${chk ? "disabled" : ""}>` : `<select data-yf="${f.k}|${k}" ${chk ? "disabled" : ""}><option value="">Choose…</option>${ty.map(o => `<option ${v === o ? "selected" : ""}>${o}</option>`).join("")}</select>`}</td>`; }).join("")}</tr>`).join("")}</tbody></table></div>`;
      const n = FLASKS.reduce((a, f) => a + COLS.filter(([k]) => okCell(f, k, (r[f.k] || {})[k])).length, 0);
      h += chk ? `<p class="score">Data recorded correctly: <b>${n} / ${FLASKS.length * COLS.length}</b></p>${n < FLASKS.length * COLS.length ? `<div class="btnrow"><button class="btn ghost" data-yfix>✏️ Fix my red boxes</button></div>` : ""}`
        : `<div class="btnrow"><button class="btn" data-ycheck>Check my data table</button><span class="msg">${all ? "" : "Run all 5 flasks first."}</span></div>`;
      return h + `</div>`;
    },
    wire(root, b, st, save, redraw) {
      $$("[data-yf]", root).forEach(x => { const ev = x.tagName === "SELECT" ? "change" : "input"; x.addEventListener(ev, () => { const [k, c] = x.dataset.yf.split("|"); st.r = st.r || {}; (st.r[k] = st.r[k] || {})[c] = x.value.trim(); save(); }); });
      $$("[data-frun]", root).forEach(btn => btn.onclick = () => {
        if (st.busy) return; const f = FLASKS.find(x => x.k === btn.dataset.frun), svg = $(`[data-fsvg="${f.k}"]`, root);
        st.busy = f.k; $$("[data-frun]", root).forEach(q => q.disabled = true); $(`[data-fk="${f.k}"]`, root).classList.add("on");
        const t0 = performance.now();
        tween(ms(4200), p => { svg.innerHTML = flaskSVG(f, p, performance.now() - t0); const bb = $(`[data-rb="${f.k}"]`, root), gg = $(`[data-rg="${f.k}"]`, root), tt = $(`[data-rt="${f.k}"]`, root);
          if (bb) bb.textContent = Math.round(at(f.ball, p)) + " cm"; if (gg) gg.textContent = Math.round(at(f.glu, p)) + "%"; if (tt) tt.textContent = (Math.round(at(f.t, p) * 2) / 2) + " °C"; },
          () => { st.busy = null; (st.ran = st.ran || {})[f.k] = true; save(); redraw(); });
      });
      const c = $("[data-ycheck]", root); if (c) c.onclick = () => { if (!FLASKS.every(f => (st.ran || {})[f.k])) { $(".msg", root).textContent = "Run all 5 flasks first."; return; } const r = st.r || {}; if (FLASKS.some(f => COLS.some(([k]) => ((r[f.k] || {})[k] ?? "") === ""))) { $(".msg", root).textContent = "Fill in every box first."; return; } st.checked = true; save(); redraw(); };
      const fx = $("[data-yfix]", root); if (fx) fx.onclick = () => { st.checked = false; save(); redraw(); };
      /* keep the finished flask A bubbling */
      const svgA = $(`[data-fsvg="A"]`, root);
      if (svgA && (st.ran || {}).A && !st.busy) { const t0 = performance.now(); const loop = now => { if (!document.body.contains(svgA) || st.busy) return; svgA.innerHTML = flaskSVG(FLASKS[0], 1, now - t0); requestAnimationFrame(loop); }; if (!window.YS_FAST) requestAnimationFrame(loop); }
    },
    score(b, st) { const r = st.r || {}, n = FLASKS.reduce((a, f) => a + COLS.filter(([k]) => okCell(f, k, (r[f.k] || {})[k])).length, 0), mx = b.max || 4; return { max: mx, pts: st.checked ? Math.round(mx * n / (FLASKS.length * COLS.length)) : 0, label: b.label || "flask data" }; },
    text: (b, st) => "Data: " + FLASKS.map(f => `${f.k}=${COLS.map(([k]) => ((st.r || {})[f.k] || {})[k] || "-").join("/")}`).join("; ")
  };

  /* ---------------- gastest ---------------- */
  const TESTS = [
    { k: "lime", name: "Limewater", short: "Limewater", ic: "🧪", air: "The limewater stays clear.", gas: "The limewater turns cloudy and milky white." },
    { k: "glow", name: "Glowing splint", short: "Glowing splint", ic: "🪵", air: "The glowing tip keeps glowing (it does not burst into flame).", gas: "The glowing tip goes dark. It goes out." },
    { k: "burn", name: "Burning splint", short: "Burning splint", ic: "🔥", air: "The flame keeps burning. No sound.", gas: "The flame goes out right away. No pop or squeak." },
    { k: "btb", name: "Bromothymol blue (BTB)", short: "BTB", ic: "💧", air: "The BTB stays blue.", gas: "The BTB slowly turns from blue to green to yellow." }];
  window.YS_TESTS = TESTS;
  function testSVG(t, src, p) {
    const gas = src === "gas";
    let s = `<rect width="360" height="220" fill="#fbfcff"/>`;
    /* source: balloon or open air */
    s += gas ? `<ellipse cx="62" cy="70" rx="40" ry="44" fill="#e74c3c" opacity=".92"/><path d="M58 112 L66 112 L66 132 L58 132 Z" fill="#c0392b"/><path d="M62 132 L62 150 Q62 160 120 160 L150 160" fill="none" stroke="#8a94a8" stroke-width="5"/><text x="62" y="30" text-anchor="middle" font-size="12" font-weight="800" fill="#555">gas from balloon A</text>`
      : `<text x="62" y="70" text-anchor="middle" font-size="40">🌬️</text><text x="62" y="110" text-anchor="middle" font-size="12" font-weight="800" fill="#555">room air</text><path d="M62 125 L62 150 Q62 160 120 160 L150 160" fill="none" stroke="#8a94a8" stroke-width="5" stroke-dasharray="6 5"/>`;
    const flow = gas ? p : p;
    if (t.k === "lime" || t.k === "btb") {
      const c0 = t.k === "lime" ? "#e6f3ff" : "#2f6fd6", c1 = gas ? (t.k === "lime" ? "#f3f1ea" : (p < .5 ? mix("#2f6fd6", "#3fae5a", p * 2) : mix("#3fae5a", "#f2c718", (p - .5) * 2))) : c0;
      const liq = gas ? (t.k === "lime" ? mix(c0, "#f3f1ea", p) : c1) : c0;
      s += `<path d="M190 40 L190 190 Q190 206 214 206 Q238 206 238 190 L238 40" fill="#eef6fb" stroke="#7c8aa5" stroke-width="3"/><path d="M192 96 L236 96 L236 190 Q236 204 214 204 Q192 204 192 190 Z" fill="${liq}"/>`;
      if (t.k === "lime" && gas) s += `<path d="M192 96 L236 96 L236 190 Q236 204 214 204 Q192 204 192 190 Z" fill="#ffffff" opacity="${p * .55}"/>`;
      s += `<path d="M150 160 L170 160 Q180 160 180 150 L180 30 L214 30 L214 180" fill="none" stroke="#8a94a8" stroke-width="4"/>`;
      for (let i = 0; i < 6; i++) { const ph = (p * 4 + i / 6) % 1, y = 185 - ph * 85; if (p > 0 && p < 1) s += `<circle cx="${214 + Math.sin(i * 2 + ph * 6) * 6}" cy="${y}" r="3" fill="#fff" stroke="#9fb3c8"/>`; }
      s += `<text x="305" y="110" text-anchor="middle" font-size="13" font-weight="800" fill="#333">${t.short}</text>`;
    } else {
      const out = gas ? p : 0;
      s += `<path d="M150 160 L170 160 Q180 160 180 150 L180 120" fill="none" stroke="#8a94a8" stroke-width="4"/><path d="M196 60 L196 200 L252 200 L252 60" fill="#eef6fb" fill-opacity=".6" stroke="#7c8aa5" stroke-width="3"/>`;
      s += `<rect x="219" y="40" width="10" height="140" rx="3" fill="#c49a5a" stroke="#7a5a22" transform="rotate(8 224 110)"/>`;
      if (t.k === "glow") s += `<circle cx="214" cy="178" r="${7}" fill="${mix("#ff6a00", "#2b2b2b", out)}"/><circle cx="214" cy="178" r="${14 * (1 - out)}" fill="#ffb347" opacity="${.45 * (1 - out)}"/>`;
      else { const fl = 1 - out; s += fl > .02 ? `<path d="M214 ${178 - 30 * fl} Q${204 - 4 * fl} 172 214 182 Q${224 + 4 * fl} 172 214 ${178 - 30 * fl} Z" fill="#ff8c1a"/><path d="M214 ${178 - 16 * fl} Q209 174 214 180 Q219 174 214 ${178 - 16 * fl} Z" fill="#ffe066"/>` : `<path d="M214 170 q-6 -14 2 -26 q6 -10 -2 -22" fill="none" stroke="#9aa3b5" stroke-width="3" opacity=".7"/>`; }
      s += `<text x="310" y="110" text-anchor="middle" font-size="13" font-weight="800" fill="#333">${t.short}</text>`;
    }
    return s;
  }
  const GASES = ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide", "Water vapor"];
  BT.gastest = {
    html(b, st) {
      const log = st.log || {}, t = TESTS.find(x => x.k === st.t), src = st.src || "gas", chk = !!st.checked, allGas = TESTS.every(x => (log.gas || {})[x.k]);
      let h = `<div class="ys"><h4>🎈 ${b.title || "Identify the mystery gas"}</h4><p class="how">${b.how || ""}</p><div class="ys-tests"><div>`;
      h += `<div class="ys-chips"><b style="align-self:center">Sample:</b><button type="button" class="ys-chip ${src === "gas" ? "on" : ""}" data-gsrc="gas">🎈 Gas from balloon A</button><button type="button" class="ys-chip ${src === "air" ? "on" : ""}" data-gsrc="air">🌬️ Room air (comparison)</button></div>`;
      h += `<div class="ys-chips"><b style="align-self:center">Test:</b>${TESTS.map(x => `<button type="button" class="ys-chip ${st.t === x.k ? "on" : ""} ${!(log[src] || {})[x.k] ? "" : ""}" data-gt="${x.k}" ${st.busy ? "disabled" : ""}>${x.ic} ${x.name}${(log[src] || {})[x.k] ? " ✓" : ""}</button>`).join("")}</div>`;
      h += `<svg class="sc" viewBox="0 0 360 220" data-gsvg role="img" aria-label="gas test">${t ? testSVG(t, src, (log[src] || {})[t.k] ? 1 : 0) : `<rect width="360" height="220" fill="#fbfcff"/><text x="180" y="105" text-anchor="middle" font-size="14" font-weight="800" fill="#666">Pick a sample and a test.</text>`}</svg>`;
      h += t ? `<div class="ys-btns btnrow"><button type="button" class="btn ${(log[src] || {})[t.k] ? "ghost" : "pulse"}" data-grun ${st.busy ? "disabled" : ""}>▶ Run the ${t.name.toLowerCase()} test</button></div>` : "";
      if (t && (log[src] || {})[t.k]) h += `<div class="ys-obs">👀 <b>Observation:</b> ${src === "gas" ? t.gas : t.air}</div>`;
      h += `</div><div><div class="ys-guide"><h5>📘 Gas ID guide (from a chemistry lab manual)</h5><ul>
        <li><b>Oxygen:</b> makes a glowing splint burst into flame. Limewater stays clear.</li>
        <li><b>Hydrogen:</b> a burning splint makes a squeaky “pop.” Limewater stays clear.</li>
        <li><b>Nitrogen:</b> puts out a flame. Limewater stays clear. BTB stays blue.</li>
        <li><b>Carbon dioxide:</b> puts out a flame, turns limewater milky, and turns BTB from blue to yellow (it makes an acid in water).</li>
        <li><b>Water vapor:</b> turns blue cobalt chloride paper pink. Limewater stays clear.</li></ul></div>
        <div class="ys-tw"><table class="ys-tbl" style="min-width:0"><thead><tr><th>Test</th><th>Room air</th><th>Balloon gas</th></tr></thead><tbody>${TESTS.map(x => `<tr><td>${x.ic} ${x.name}</td><td>${(log.air || {})[x.k] ? x.air : "—"}</td><td>${(log.gas || {})[x.k] ? x.gas : "—"}</td></tr>`).join("")}</tbody></table></div></div></div>`;
      const qs = b.items || [];
      h += `<div class="gqs" style="display:grid;gap:10px;margin-top:12px">`;
      h += `<div class="gq ${chk ? (st.gas === b.answer ? "ok" : "no") : ""}" style="padding:10px 12px;border:2px solid var(--line);border-radius:12px"><div style="font-weight:800;margin-bottom:6px">Based on your observations and the guide, the mystery gas is…</div><select data-gname ${chk ? "disabled" : ""} style="font:inherit;padding:6px 8px;border-radius:10px;border:2px solid #cfd5e3;max-width:100%"><option value="">Choose…</option>${GASES.map(g => `<option ${st.gas === g ? "selected" : ""}>${g}</option>`).join("")}</select></div>`;
      qs.forEach((it, k) => { const v = (st.a || {})[k]; h += `<div class="gq" style="padding:10px 12px;border:2px solid ${chk ? (v === it.a ? "#1aa36f" : "#d0453a") : "var(--line)"};border-radius:12px;background:${chk ? (v === it.a ? "#eefaf4" : "#fff2f1") : "#fff"}"><div style="font-weight:700;margin-bottom:6px">${k + 1}. ${it.q}</div><div style="display:grid;gap:6px">${it.opts.map((o, j) => `<button type="button" class="opt ${v === j ? "sel" : ""}" data-gq="${k}|${j}" ${chk ? "disabled" : ""}><span class="lt">${String.fromCharCode(65 + j)}</span><span>${o}</span></button>`).join("")}</div>${chk && it.why ? `<div class="fb ${v === it.a ? "ok" : "bad"}">${it.why}</div>` : ""}</div>`; });
      h += `</div>`;
      const nOk = (st.gas === b.answer ? 1 : 0) + qs.filter((it, k) => (st.a || {})[k] === it.a).length;
      h += chk ? `<p class="score">Correct: <b>${nOk} / ${qs.length + 1}</b>${st.gas === b.answer ? " · 🎉 You identified the gas from your evidence!" : ""}</p>${nOk < qs.length + 1 ? `<div class="btnrow"><button class="btn ghost" data-gfix>✏️ Look again and fix</button></div>` : ""}`
        : `<div class="btnrow"><button class="btn" data-gcheck>Check my answers</button><span class="msg">${allGas ? "" : "Run all 4 tests on the balloon gas first."}</span></div>`;
      return h + `</div>`;
    },
    wire(root, b, st, save, redraw) {
      $$("[data-gsrc]", root).forEach(x => x.onclick = () => { if (st.busy) return; st.src = x.dataset.gsrc; save(); redraw(); });
      $$("[data-gt]", root).forEach(x => x.onclick = () => { if (st.busy) return; st.t = x.dataset.gt; save(); redraw(); });
      const run = $("[data-grun]", root); if (run) run.onclick = () => { const t = TESTS.find(x => x.k === st.t), src = st.src || "gas", svg = $("[data-gsvg]", root); st.busy = true; run.disabled = true;
        tween(ms(2600), p => svg.innerHTML = testSVG(t, src, p), () => { st.busy = false; st.log = st.log || {}; (st.log[src] = st.log[src] || {})[t.k] = true; save(); redraw(); }); };
      const g = $("[data-gname]", root); if (g) g.onchange = () => { st.gas = g.value; save(); };
      $$("[data-gq]", root).forEach(x => x.onclick = () => { const [k, j] = x.dataset.gq.split("|").map(Number); (st.a = st.a || {})[k] = j; save(); redraw(); });
      const c = $("[data-gcheck]", root); if (c) c.onclick = () => { if (!TESTS.every(x => ((st.log || {}).gas || {})[x.k])) { $(".msg", root).textContent = "Run all 4 tests on the balloon gas first."; return; } if (!st.gas || (b.items || []).some((_, k) => (st.a || {})[k] == null)) { $(".msg", root).textContent = "Answer every question first."; return; } st.checked = true; save(); redraw(); };
      const f = $("[data-gfix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
    },
    score(b, st) { const qs = b.items || [], n = (st.gas === b.answer ? 1 : 0) + qs.filter((it, k) => (st.a || {})[k] === it.a).length, mx = b.max || 3; return { max: mx, pts: st.checked ? Math.round(mx * n / (qs.length + 1)) : 0, label: b.label || "gas tests" }; },
    text: (b, st) => `Gas: ${st.gas || "-"} · tests run: ${Object.keys(((st.log || {}).gas) || {}).join(",")}`
  };
});
