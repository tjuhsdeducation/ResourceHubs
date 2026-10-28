/* =====================================================================
   DNA EXTRACTION LAB BLOCKS (no need to edit)
   dnazoom   : zoom from a strawberry down to base pairs (not graded)
   dnaex     : predict (mode "predict") or run the extraction bench and
               record data (mode "run") for 8 festive samples
   scope     : virtual microscope (4x / 10x / 40x) with 4 slides; label the
               mitosis phases in an onion root tip (graded)
   replicate : unzip a DNA molecule and add matching bases (graded)
   cellcycle : labeled cell cycle diagram (not graded)
   Fast test hook: window.DX_FAST = 1 (skips the animation time).
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$ } = H;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ES = s => `<i class="dx-es">${s}</i>`;
  const ms = n => window.DX_FAST ? 30 : n;

  /* ---------- the 8 samples (sample data that follow the real pattern; mg of DNA from 10 g of sample) ---------- */
  const SAM = [
    { k: "straw", name: "Strawberry", emoji: "🍓", col: "#e8476a", mg: 28, see: "Yes, lots", kind: "Living", note: "Strawberries are <b>octoploid</b>: each cell has 8 copies of every chromosome, so there is a LOT of DNA." },
    { k: "kiwi", name: "Kiwi", emoji: "🥝", col: "#8dbb3c", mg: 18, see: "Yes, lots", kind: "Living", note: "Kiwis are <b>hexaploid</b> (6 copies of each chromosome)." },
    { k: "banana", name: "Banana", emoji: "🍌", col: "#f1d564", mg: 14, see: "Yes, lots", kind: "Living", note: "Most bananas are <b>triploid</b> (3 copies of each chromosome)." },
    { k: "pumpkin", name: "Pumpkin", emoji: "🎃", col: "#f0892a", mg: 8, see: "Yes, a little", kind: "Living", note: "Pumpkins are <b>diploid</b> (2 copies), and the flesh is mostly water, so there is less DNA per gram." },
    { k: "apple", name: "Apple", emoji: "🍎", col: "#efe3b5", mg: 5, see: "Yes, a little", kind: "Living", note: "Apples are diploid, and the flesh is mostly water and sugar." },
    { k: "pie", name: "Baked pumpkin pie", emoji: "🥧", col: "#c47a35", mg: 2, see: "Yes, a little", kind: "Once living", note: "The pie came from a living pumpkin, but baking heat breaks DNA into tiny pieces, so only a few flecks appear." },
    { k: "candy", name: "Candy corn", emoji: "🍬", col: "#f7c548", mg: 0, see: "No", kind: "Never had cells", note: "Candy corn is made of sugar, corn syrup, and wax. It has <b>no cells</b>, so it has no DNA." },
    { k: "bucket", name: "Plastic pumpkin bucket", emoji: "🪣", col: "#f28c28", mg: 0, see: "No", kind: "Never had cells", note: "Plastic was never alive and has no cells, so there is no DNA." }
  ];
  const STEPS = [
    { k: "mash", label: "🔨 Mash it in a bag", why: "Mashing breaks the tough <b>cell walls</b> and separates the cells.", es: "aplastar" },
    { k: "buffer", label: "🧴 Add extraction buffer (dish soap + salt + water)", why: "The <b>soap</b> breaks open the cell and nuclear <b>membranes</b> (they are made of lipids, like grease). The <b>salt</b> helps the DNA strands clump together.", es: "jabón y sal" },
    { k: "filter", label: "☕ Pour through a coffee filter", why: "The filter removes the pulp and cell pieces. The liquid that drips through has the DNA dissolved in it.", es: "filtrar" },
    { k: "alcohol", label: "🧊 Slowly pour ice-cold rubbing alcohol down the side", why: "DNA does <b>not dissolve</b> in cold alcohol, so it comes out of the liquid as white, cloudy strands where the two layers meet.", es: "alcohol frío" },
    { k: "spool", label: "🥢 Spool the DNA with a wooden stick", why: "The long DNA strands wind around the stick so you can lift them out and measure them.", es: "enrollar" }
  ];
  const PRED = ["Lots of DNA", "A little DNA", "No DNA"];
  const SEE = ["Yes, lots", "Yes, a little", "No"];
  const KIND = ["Living", "Once living", "Never had cells"];
  window.DX_DATA = { samples: SAM.map(s => ({ k: s.k, mg: s.mg, see: s.see, kind: s.kind })), steps: STEPS.map(s => s.k) };

  if (!document.getElementById("dx-css")) {
    const c = document.createElement("style"); c.id = "dx-css";
    c.textContent = `
    .dx{border:3px solid var(--line);border-radius:22px;padding:14px 16px;background:var(--surface)}
    .dx h4{margin:0 0 6px}.dx-es{color:var(--muted);font-weight:600;font-size:.85em}
    .dx-sams{display:grid;grid-template-columns:repeat(auto-fill,minmax(118px,1fr));gap:8px;margin:8px 0}
    .dx-sams button{all:unset;box-sizing:border-box;cursor:pointer;border:3px solid var(--line);border-radius:16px;padding:8px;background:var(--surface);text-align:center;display:grid;gap:2px;font-weight:800;font-size:.85rem}
    .dx-sams button .e{font-size:1.9rem;line-height:1.1}.dx-sams button.on{border-color:var(--lc);background:color-mix(in srgb,var(--lc) 12%,var(--surface))}
    .dx-sams button.done::after{content:"✓ done";color:#1d7a45;font-size:.75rem}.dx-sams select{font:inherit;font-size:.78rem;border:2px solid var(--line);border-radius:8px;padding:2px;max-width:100%}
    .dx-bench{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:14px;align-items:start;background:linear-gradient(#f4f1ea,#e8e2d4);border:2px solid #cfc6b0;border-radius:18px;padding:12px}
    .dx-bench svg{width:100%;max-width:300px;height:auto;display:block;margin:auto;background:#fffdf8;border-radius:14px}
    .dx-steps{display:grid;gap:6px}.dx-steps button{all:unset;box-sizing:border-box;cursor:pointer;border:2px solid #cfc6b0;border-radius:12px;padding:8px 10px;background:#fff;font-weight:800;font-size:.9rem;color:#1f2430}
    .dx-steps button:hover{border-color:var(--lc)}.dx-steps button.did{background:#e5f4ea;border-color:#7cc49a;color:#1d5c36}.dx-steps button[disabled]{cursor:default}
    .dx-msg{border-radius:12px;padding:8px 10px;font-size:.92rem;background:#fff;border:2px solid #cfc6b0;color:#1f2430}.dx-msg.bad{background:#fdecea;border-color:#e7a29b}.dx-msg.good{background:#e8f5ec;border-color:#9fd3b2}
    .dx-scale{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:8px;padding:8px 12px;border-radius:14px;background:#2d2f36;color:#fff;font-weight:800}
    .dx-scale .lcd{font:700 1.5rem ui-monospace,Menlo,monospace;background:#a9d39e;color:#17330f;border-radius:8px;padding:3px 12px;min-width:110px;text-align:right}
    .dx-tw{overflow-x:auto}.dx-tbl{width:100%;border-collapse:collapse;margin-top:10px;font-size:.86rem}.dx-tbl th,.dx-tbl td{border:1px solid var(--line);padding:5px;text-align:center}
    .dx-tbl th{background:var(--soft)}.dx-tbl td:first-child{text-align:left;font-weight:800;white-space:nowrap}
    .dx-tbl input,.dx-tbl select{width:100%;min-width:70px;font:inherit;border:2px solid var(--line);border-radius:8px;padding:3px 5px}
    .dx-tbl td.ok{background:color-mix(in srgb,var(--ok) 16%,transparent)}.dx-tbl td.no{background:color-mix(in srgb,var(--bad) 14%,transparent)}
    .dx-zoom{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;align-items:center}
    .dx-zoom svg{width:100%;max-width:320px;height:auto;display:block;margin:auto;background:#fff;border-radius:16px;border:2px solid var(--line)}
    .dx-lv{display:flex;gap:4px;flex-wrap:wrap;margin:8px 0}.dx-lv span{font:800 .75rem var(--body);padding:3px 8px;border-radius:999px;background:var(--soft);color:var(--muted)}.dx-lv span.on{background:var(--lc);color:#fff}
    .dx-scope{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:14px;align-items:start}.dx-scope>div{min-width:0}
    .dx-scope svg{width:100%;height:auto;display:block;background:#111;border-radius:22px}
    .dx-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:4px 0}.dx-row .lbl{font-weight:800;font-size:.85rem;color:var(--muted)}
    .dx-pill{all:unset;cursor:pointer;border:2px solid var(--line);border-radius:999px;padding:4px 11px;font-weight:800;font-size:.85rem;background:var(--surface)}
    .dx-pill.on{border-color:var(--lc);background:var(--lc);color:#fff}
    .dx-cnt{width:100%;border-collapse:collapse;font-size:.85rem;margin-top:6px}.dx-cnt td,.dx-cnt th{border:1px solid var(--line);padding:3px 6px;text-align:center}.dx-cnt th{background:var(--soft)}
    .dx-rep svg{width:100%;height:auto;display:block;background:#fff;border-radius:16px;border:2px solid var(--line)}
    .dx-bases{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}.dx-bases button{all:unset;cursor:pointer;width:46px;height:46px;border-radius:12px;display:grid;place-items:center;font:800 1.3rem var(--display);color:#fff}
    .dx-cc svg{width:100%;max-width:520px;height:auto;display:block;margin:auto;background:#fff;border-radius:16px;border:2px solid var(--line)}
    @keyframes dxpulse{0%,100%{box-shadow:0 0 0 0 color-mix(in srgb,var(--lc) 45%,transparent)}50%{box-shadow:0 0 0 7px transparent}}
    .dx .pulse{animation:dxpulse 1.6s ease-in-out infinite}
    @media (max-width:760px){.dx-bench,.dx-zoom,.dx-scope{grid-template-columns:1fr}}`;
    document.head.appendChild(c);
  }
  const BC = { A: "#d0453a", T: "#e0a100", C: "#1aa36f", G: "#2b7de9" }, PAIR = { A: "T", T: "A", C: "G", G: "C" };

  /* ================= DNA ZOOM ================= */
  const LV = [
    ["Organism", "organismo", "A strawberry is made of millions of tiny <b>cells</b>.", () => `<text x="160" y="150" text-anchor="middle" font-size="120">🍓</text><circle cx="182" cy="112" r="16" fill="none" stroke="#2b7de9" stroke-width="3" stroke-dasharray="5 4"/>`],
    ["Cell", "célula", "Each plant cell has a <b>cell wall</b>, a cell membrane, and a <b>nucleus</b>. The nucleus holds the DNA.", () => `<rect x="50" y="50" width="220" height="180" rx="16" fill="#fde1e6" stroke="#b5485e" stroke-width="6"/><rect x="60" y="60" width="200" height="160" rx="12" fill="none" stroke="#e58aa0" stroke-width="2"/><circle cx="175" cy="135" r="38" fill="#c9a3ee" stroke="#6b3fa0" stroke-width="3"/><circle cx="170" cy="130" r="9" fill="#6b3fa0"/><text x="70" y="44" font-size="13" font-weight="700" fill="#b5485e">cell wall</text><text x="175" y="196" text-anchor="middle" font-size="13" font-weight="700" fill="#6b3fa0">nucleus</text>`],
    ["Nucleus", "núcleo", "Inside the nucleus, DNA is wrapped up into <b>chromosomes</b>.", () => { let g = `<circle cx="160" cy="140" r="110" fill="#e7d6f8" stroke="#6b3fa0" stroke-width="4"/>`; [[100, 110, 30], [170, 90, -20], [210, 160, 45], [130, 180, 10], [190, 120, 70], [120, 140, -40]].forEach(([x, y, r], i) => g += `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M-14 -16 Q0 0 14 -16 M-14 16 Q0 0 14 16" stroke="${["#d0453a", "#2b7de9", "#1aa36f", "#e0a100", "#8a54e0", "#e8368f"][i]}" stroke-width="7" fill="none" stroke-linecap="round"/></g>`); return g; }],
    ["Chromosome", "cromosoma", "A chromosome is one very long DNA molecule coiled tightly around proteins.", () => `<path d="M110 50 Q160 140 110 230 M210 50 Q160 140 210 230" stroke="#8a54e0" stroke-width="34" fill="none" stroke-linecap="round"/><path d="M110 50 Q160 140 110 230 M210 50 Q160 140 210 230" stroke="#fff" stroke-width="2" stroke-dasharray="3 7" fill="none" opacity=".7"/><circle cx="160" cy="140" r="12" fill="#5b2d91"/><text x="230" y="145" font-size="13" font-weight="700" fill="#5b2d91">centromere</text>`],
    ["DNA double helix", "doble hélice", "Unwind the chromosome and you find the <b>double helix</b>: two strands twisted like a ladder.", () => { let g = ""; for (let i = 0; i <= 14; i++) { const y = 30 + i * 16, a = i / 14 * Math.PI * 3, x1 = 160 + 60 * Math.sin(a), x2 = 160 - 60 * Math.sin(a), b = "ATCGGCTA"[i % 8]; g += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${BC[b]}" stroke-width="5"/>`; }
      let p1 = "", p2 = ""; for (let i = 0; i <= 56; i++) { const y = 30 + i * 4, a = i / 56 * Math.PI * 3; p1 += (i ? "L" : "M") + (160 + 60 * Math.sin(a)).toFixed(1) + " " + y; p2 += (i ? "L" : "M") + (160 - 60 * Math.sin(a)).toFixed(1) + " " + y; }
      return g + `<path d="${p1}" stroke="#13294b" stroke-width="6" fill="none"/><path d="${p2}" stroke="#6b7280" stroke-width="6" fill="none"/>`; }],
    ["Base pairs", "pares de bases", "The rungs are <b>base pairs</b>: <b style=color:#d0453a>A</b> always pairs with <b style=color:#e0a100>T</b>, and <b style=color:#1aa36f>C</b> always pairs with <b style=color:#2b7de9>G</b>. The order of the bases is the genetic code.", () => { let g = `<line x1="80" y1="30" x2="80" y2="250" stroke="#13294b" stroke-width="8"/><line x1="240" y1="30" x2="240" y2="250" stroke="#6b7280" stroke-width="8"/>`; "ATCG".split("").forEach((b, i) => { const y = 55 + i * 55, p = PAIR[b]; g += `<rect x="84" y="${y - 16}" width="74" height="32" rx="6" fill="${BC[b]}"/><rect x="162" y="${y - 16}" width="74" height="32" rx="6" fill="${BC[p]}"/><text x="121" y="${y + 7}" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">${b}</text><text x="199" y="${y + 7}" text-anchor="middle" font-size="20" font-weight="800" fill="#fff">${p}</text>`; }); return g; }]
  ];
  BT.dnazoom = {
    html(b, st) { const i = Math.max(0, Math.min(LV.length - 1, st.i || 0)), L = LV[i];
      return `<div class="dx"><h4>${b.title || "Zoom In: Where Is the DNA?"}</h4><div class="dx-lv">${LV.map((l, k) => `<span class="${k === i ? "on" : ""}">${k + 1}. ${l[0]}</span>`).join("")}</div>
        <div class="dx-zoom"><svg viewBox="0 0 320 280" role="img" aria-label="${L[0]}">${L[3]()}</svg><div><h4 style="margin:0">${L[0]} ${ES("(" + L[1] + ")")}</h4><p>${L[2]}</p>
        <div class="btnrow"><button class="btn ghost" data-zo ${i ? "" : "disabled"}>➖ Zoom out</button><button class="btn ${i < LV.length - 1 ? "pulse" : ""}" data-zi ${i < LV.length - 1 ? "" : "disabled"}>➕ Zoom in</button></div></div></div></div>`; },
    wire(root, b, st, save, redraw) { const zi = $("[data-zi]", root), zo = $("[data-zo]", root); if (zi) zi.onclick = () => { st.i = Math.min(LV.length - 1, (st.i || 0) + 1); st.seen = Math.max(st.seen || 0, st.i); save(); redraw(); }; if (zo) zo.onclick = () => { st.i = Math.max(0, (st.i || 0) - 1); save(); redraw(); }; },
    text: (b, st) => "Zoom levels viewed: " + ((st.seen || 0) + 1) + " of " + LV.length
  };

  /* ================= EXTRACTION BENCH ================= */
  /* draws the tube (or bag) for a sample at a step (0 = whole, 1 mashed … 5 spooled); p = progress 0–1 of the current step */
  function tube(s, step, p) {
    const lc = s.col, dna = s.mg;
    let g = `<rect x="0" y="0" width="300" height="300" fill="#fffdf8"/>`;
    if (step <= 0) return g + `<text x="150" y="190" text-anchor="middle" font-size="130">${s.emoji}</text><text x="150" y="285" text-anchor="middle" font-size="14" font-weight="700" fill="#6b7280">10 g of ${esc(s.name.toLowerCase())}</text>`;
    if (step === 1 || step === 2) {   /* zip bag */
      const sq = step === 1 ? p : 1, liquid = step === 2 ? p : 0;
      g += `<path d="M70 60 H230 L240 250 Q150 275 60 250 Z" fill="#eef6fb" stroke="#9fb4c4" stroke-width="4"/><rect x="66" y="52" width="168" height="12" rx="4" fill="#cfdbe4"/>`;
      if (liquid) g += `<path d="M64 ${250 - 120 * liquid} H236 L240 250 Q150 275 60 250 Z" fill="#dbeefd" opacity=".9"/>` + [...Array(10)].map((_, i) => `<circle cx="${80 + i * 15}" cy="${248 - 110 * liquid + (i % 3) * 6}" r="${3 + (i % 2) * 2}" fill="#fff" stroke="#9fc6e8"/>`).join("");
      if (s.mg === 0 && s.k === "bucket") g += `<g opacity="${1 - sq * .3}">${[...Array(7)].map((_, i) => `<rect x="${95 + (i % 4) * 28}" y="${200 + Math.floor(i / 4) * 22 - sq * 6}" width="22" height="14" rx="3" fill="${lc}" transform="rotate(${i * 23} ${106 + (i % 4) * 28} ${207 + Math.floor(i / 4) * 22})"/>`).join("")}</g>`;
      else g += `<ellipse cx="150" cy="${222 - 10 * (1 - sq)}" rx="${55 + 25 * sq}" ry="${38 - 14 * sq}" fill="${lc}" opacity=".92"/>` + (sq < .5 ? `<text x="150" y="235" text-anchor="middle" font-size="${70 - 60 * sq}">${s.emoji}</text>` : [...Array(9)].map((_, i) => `<circle cx="${108 + (i % 5) * 20}" cy="${214 + Math.floor(i / 5) * 12}" r="4" fill="#fff" opacity=".35"/>`).join(""));
      return g + `<text x="150" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#6b7280">${step === 1 ? "mashing…" : "mixing in the buffer…"}</text>`;
    }
    /* test tube */
    const top = 40, bot = 270, x0 = 115, x1 = 185;
    g += `<path d="M${x0} ${top} V${bot - 25} a35 35 0 0 0 70 0 V${top}" fill="#fff" stroke="#6b7280" stroke-width="4"/>`;
    const fil = step === 2 ? 0 : step === 3 ? p : 1, lvl = bot + 8 - 120 * fil;   /* filtrate level */
    if (fil > 0) g += `<path d="M${x0 + 3} ${lvl} V${bot - 25} a32 32 0 0 0 64 0 V${lvl} Z" fill="${s.mg === 0 && s.k === "bucket" ? "#e8f1f7" : lc}" opacity=".55"/>`;
    if (step === 3 && p < 1) g += `<path d="M95 20 H205 L160 60 H140 Z" fill="#f4e7d0" stroke="#b49a6a" stroke-width="3"/><line x1="150" y1="60" x2="150" y2="${lvl}" stroke="${lc}" stroke-width="3" stroke-dasharray="4 5" opacity=".7"/>`;
    const al = step === 4 ? p : step > 4 ? 1 : 0;
    if (al > 0) g += `<rect x="${x0 + 3}" y="${lvl - 70 * al}" width="64" height="${70 * al}" fill="#eaf4ff" opacity=".9"/><line x1="${x0 + 3}" y1="${lvl}" x2="${x1 - 3}" y2="${lvl}" stroke="#9fb4c4" stroke-width="1.5"/>`;
    if (step === 4 && p < 1) g += `<path d="M200 10 L170 ${lvl - 70 * al}" stroke="#9fd0ff" stroke-width="4" opacity=".8"/>`;
    /* DNA strands at the boundary: white, stringy, and easy to see (more DNA = more strands) */
    const shown = step === 4 ? Math.max(0, p - .35) / .65 : step > 4 ? 1 : 0, lift = step === 5 ? p : 0;
    if (dna > 0 && shown > 0) {
      const n = Math.max(2, Math.round(dna * .75 * shown)), hgt = (8 + dna * 1.7) * shown;
      let str = "";
      for (let i = 0; i < n; i++) { const x = x0 + 10 + ((i * 29) % 50), w = 3 + (i % 3); let d = `M${x} ${lvl}`; for (let k = 1; k <= 4; k++) d += ` Q${x + (k % 2 ? w * 2 : -w * 2)} ${lvl - hgt * (k - .5) / 4} ${x + (k % 2 ? 1 : -1)} ${lvl - hgt * k / 4}`; str += `<path d="${d}" stroke="#8e9bab" stroke-width="5" fill="none" stroke-linecap="round" opacity="${1 - lift}"/><path d="${d}" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity="${1 - lift}"/>`; }
      g += `<ellipse cx="150" cy="${lvl - 2}" rx="${8 + dna * .9}" ry="${3 + dna * .18}" fill="#fff" stroke="#8e9bab" stroke-width="1.5" opacity="${(1 - lift) * .95}"/>` + str;
    }
    if (step === 5) { const yb = lvl - 30 - (lvl - 100) * lift;
      g += `<line x1="150" y1="${yb}" x2="150" y2="${yb - 190}" stroke="#a0703c" stroke-width="7" stroke-linecap="round"/>`;
      if (dna > 0) { const rx = 5 + dna * .55, ry = 4 + dna * .45; g += `<ellipse cx="150" cy="${yb}" rx="${rx}" ry="${ry}" fill="#fff" stroke="#8e9bab" stroke-width="2"/>` + [...Array(Math.min(8, 2 + Math.round(dna / 4)))].map((_, i) => `<path d="M${150 - rx} ${yb - ry + i * ry * 2 / 8} q${rx} ${4 + i % 3} ${rx * 2} 0" stroke="#b7c2ce" stroke-width="1.4" fill="none"/>`).join(""); } }
    const lab = step === 2 ? "" : step === 3 ? (p < 1 ? "filtering…" : "the filtered liquid") : step === 4 ? "cold alcohol layer on top" : dna ? "DNA on the stick!" : "nothing to spool";
    return g + `<text x="150" y="294" text-anchor="middle" font-size="13" font-weight="700" fill="#6b7280">${lab}</text>`;
  }
  BT.dnaex = {
    html(b, st) {
      if (b.mode === "predict") {
        const p = st.p || {}, n = SAM.filter(s => p[s.k]).length;
        return `<div class="dx"><h4>${b.title || "Predict"}</h4><p class="mu small">Which samples do you think will give you DNA? Choose one for each.</p>
          <div class="dx-sams">${SAM.map(s => `<div style="display:grid;gap:4px;text-align:center;font-weight:800;font-size:.82rem;border:2px solid var(--line);border-radius:14px;padding:6px"><span style="font-size:1.8rem">${s.emoji}</span>${esc(s.name)}<select data-dp="${s.k}" aria-label="Prediction for ${esc(s.name)}"><option value="">Predict…</option>${PRED.map(x => `<option ${p[s.k] === x ? "selected" : ""}>${x}</option>`).join("")}</select></div>`).join("")}</div>
          <p class="mu small">Predictions made: <b>${n} of ${SAM.length}</b>.</p></div>`;
      }
      if (st.busy && !window.__dxBusy) st.busy = false;
      const on = SAM.find(s => s.k === st.on) || null, prog = st.prog || {}, step = on ? (prog[on.k] || 0) : 0, done = on && step >= 5;
      let h = `<div class="dx"><h4>${b.title || "DNA Extraction Bench"}</h4><p class="mu small"><b>Step 1:</b> Choose a sample. <b>Step 2:</b> Do the 5 steps in the right order. <b>Step 3:</b> Read the scale and record your data. Do all ${SAM.length} samples.</p>
        <div class="dx-sams">${SAM.map(s => `<button type="button" class="${st.on === s.k ? "on" : ""} ${(prog[s.k] || 0) >= 5 ? "done" : ""}" data-ds="${s.k}" ${st.busy ? "disabled" : ""}><span class="e">${s.emoji}</span>${esc(s.name)}</button>`).join("")}</div>`;
      if (on) {
        const did = STEPS.slice(0, step).map(x => x.k);
        h += `<div class="dx-bench"><div><svg viewBox="0 0 300 300" role="img" aria-label="${esc(on.name)} extraction">${tube(on, step, 1)}</svg></div><div class="dx-steps">
          ${STEPS.map(x => `<button type="button" data-dst="${x.k}" class="${did.includes(x.k) ? "did" : ""}" ${did.includes(x.k) || done || st.busy ? "disabled" : ""}>${did.includes(x.k) ? "✅ " : ""}${x.label}</button>`).join("")}
          <div class="dx-msg ${st.msg && st.msg.bad ? "bad" : done ? "good" : ""}" aria-live="polite">${st.msg ? st.msg.t : done ? "" : "Which step comes first? Tap it."}${done ? `<div>✅ <b>${esc(on.name)} is done.</b> ${on.note}</div>` : ""}</div>
          ${done ? `<div class="dx-scale"><span>⚖️ DNA collected</span><span class="lcd">${on.mg.toFixed(1)} mg</span></div>` : ""}</div></div>`;
      } else h += `<p class="mu">👆 Choose a sample to start.</p>`;
      const r = st.r || {}, chk = !!st.checked, allDone = SAM.every(s => (prog[s.k] || 0) >= 5);
      const cell = (k, f, ok, inner) => `<td class="${chk ? (ok ? "ok" : "no") : ""}">${inner}</td>`;
      h += `<div class="dx-tw"><table class="dx-tbl"><thead><tr><th>Sample</th><th>DNA collected (mg)</th><th>Did you see DNA?</th><th>Living, once living, or never had cells?</th></tr></thead><tbody>${SAM.map(s => { const v = r[s.k] || {};
        const okM = v.m !== "" && v.m != null && Math.abs(+v.m - s.mg) <= 1, okS = v.s === s.see, okK = v.c === s.kind;
        return `<tr><td>${s.emoji} ${esc(s.name)}</td>${cell(s.k, "m", okM, `<input inputmode="decimal" data-df="${s.k}|m" value="${esc(v.m ?? "")}" ${chk ? "disabled" : ""} aria-label="${esc(s.name)} DNA mass">`)}
          ${cell(s.k, "s", okS, `<select data-df="${s.k}|s" ${chk ? "disabled" : ""}><option value="">Choose…</option>${SEE.map(o => `<option ${v.s === o ? "selected" : ""}>${o}</option>`).join("")}</select>`)}
          ${cell(s.k, "c", okK, `<select data-df="${s.k}|c" ${chk ? "disabled" : ""}><option value="">Choose…</option>${KIND.map(o => `<option ${v.c === o ? "selected" : ""}>${o}</option>`).join("")}</select>`)}</tr>`; }).join("")}</tbody></table></div>`;
      h += chk ? `<p class="score">Data recorded correctly: <b>${BT.dnaex.right(st)} / ${SAM.length * 3}</b>. Green = correct.</p><div class="btnrow"><button class="btn ghost" data-dfix>✏️ Fix my red boxes</button></div>`
        : `<div class="btnrow"><button class="btn" data-dcheck>Check my data table</button><span class="msg">${allDone ? "" : "Extract all " + SAM.length + " samples to fill in the table."}</span></div>`;
      return h + `</div>`;
    },
    right(st) { const r = st.r || {}; let n = 0; SAM.forEach(s => { const v = r[s.k] || {}; if (v.m !== "" && v.m != null && Math.abs(+v.m - s.mg) <= 1) n++; if (v.s === s.see) n++; if (v.c === s.kind) n++; }); return n; },
    wire(root, b, st, save, redraw) {
      $$("[data-dp]", root).forEach(x => x.onchange = () => { (st.p = st.p || {})[x.dataset.dp] = x.value; save(); redraw(); });
      $$("[data-ds]", root).forEach(x => x.onclick = () => { if (st.busy) return; st.on = x.dataset.ds; st.msg = null; save(); redraw(); });
      $$("[data-df]", root).forEach(x => { const ev = x.tagName === "SELECT" ? "change" : "input"; x.addEventListener(ev, () => { const [k, f] = x.dataset.df.split("|"); st.r = st.r || {}; (st.r[k] = st.r[k] || {})[f] = x.value.trim(); save(); }); });
      $$("[data-dst]", root).forEach(x => x.onclick = () => {
        const s = SAM.find(q => q.k === st.on); if (!s || st.busy) return;
        st.prog = st.prog || {}; const cur = st.prog[s.k] || 0, want = STEPS[cur], pick = STEPS.find(q => q.k === x.dataset.dst);
        if (pick.k !== want.k) { st.msg = { bad: true, t: `❌ Not yet. ${cur === 0 ? "First you need to break the cells apart." : "Next: " + want.label.replace(/^\S+\s/, "") + "."} ${want.why}` }; save(); redraw(); return; }
        st.busy = true; window.__dxBusy = true; st.msg = { t: `✅ ${pick.why}` };
        const svg = $(".dx-bench svg", root), t0 = performance.now(), dur = ms(1400);
        $$("[data-dst]", root).forEach(q => q.disabled = true);
        const stepper = now => {
          if (!root.isConnected) { st.busy = false; window.__dxBusy = false; return; }
          const p = Math.min(1, (now - t0) / dur); if (svg) svg.innerHTML = tube(s, cur + 1, p);
          if (p < 1) requestAnimationFrame(stepper); else { st.prog[s.k] = cur + 1; st.busy = false; window.__dxBusy = false; if (cur + 1 >= 5) st.msg = null; save(); redraw(); }
        };
        requestAnimationFrame(stepper);
      });
      const fx = $("[data-dfix]", root); if (fx) fx.onclick = () => { st.checked = false; save(); redraw(); };
      const c = $("[data-dcheck]", root);
      if (c) c.onclick = () => { const r = st.r || {}; if (SAM.some(s => { const v = r[s.k] || {}; return v.m == null || v.m === "" || !v.s || !v.c; })) { $(".msg", root).textContent = "Fill in every box first."; return; } st.checked = true; save(); redraw(); };
    },
    score(b, st) {
      if (b.mode === "predict") { const n = SAM.filter(s => (st.p || {})[s.k]).length; return { max: 2, pts: n === SAM.length ? 2 : n >= 4 ? 1 : 0, label: "predictions" }; }
      return { max: b.max || 6, pts: st.checked ? Math.round((b.max || 6) * BT.dnaex.right(st) / (SAM.length * 3)) : 0, label: "extraction data" };
    },
    text(b, st) {
      if (b.mode === "predict") return "Predictions: " + SAM.map(s => `${s.name}=${(st.p || {})[s.k] || "-"}`).join("; ");
      const r = st.r || {}; return SAM.map(s => { const v = r[s.k] || {}; return `${s.name}: ${v.m || "-"} mg, ${v.s || "-"}, ${v.c || "-"}`; }).join(" | ");
    }
  };

  /* ================= VIRTUAL MICROSCOPE ================= */
  const PH = { I: ["Interphase", "interfase"], P: ["Prophase", "profase"], M: ["Metaphase", "metafase"], A: ["Anaphase", "anafase"], T: ["Telophase", "telofase"] };
  const ROOT = ["I", "I", "P", "I", "M", "I", "I", "T", "I", "A", "I", "P", "I", "I", "M", "I", "T", "I", "P", "I"];
  window.DX_PHASES = ROOT.slice();
  const SLIDES = [
    { k: "straw", name: "🍓 Strawberry cells", note: { 4: "Pink tissue. Zoom in to see the cells.", 10: "Many box-shaped plant cells, each with a dark dot: the <b>nucleus</b>.", 40: "Each cell has a <b>cell wall</b> (thick pink line) and a <b>nucleus</b> (purple circle). The nucleus holds the DNA you extracted." } },
    { k: "cheek", name: "👄 Cheek cells (animal)", note: { 4: "A thin layer of cells. Zoom in.", 10: "Round, flat cells with no cell wall.", 40: "Animal cells have a <b>membrane</b> but no cell wall. They still have a <b>nucleus</b> with DNA." } },
    { k: "root", name: "🧅 Onion root tip", note: { 4: "The tip of a root, where the plant grows fastest.", 10: "Rows of small cells. Some have dark, thread-like chromosomes: they are dividing!", 40: "Tap a cell, then tap its phase. Label all 20 cells." } },
    { k: "candy", name: "🍬 Candy corn", note: { 4: "Shiny, grainy specks.", 10: "Sugar crystals with sharp edges. No cells.", 40: "Crystals only: <b>no cells, no nucleus, no DNA</b>. Candy corn was never alive." } }
  ];
  function rootCell(x, y, w, hgt, ph, hi) {
    let g = `<rect x="${x - w / 2 + 2}" y="${y - hgt / 2 + 2}" width="${w - 4}" height="${hgt - 4}" rx="5" fill="#f6e9d6" stroke="${hi || "#b98a5a"}" stroke-width="${hi ? 4 : 2}"/>`;
    const C = "#6b3fa0", X = (cx, cy, r = 0) => `<g transform="translate(${cx} ${cy}) rotate(${r})"><path d="M-4 -5 L4 5 M4 -5 L-4 5" stroke="${C}" stroke-width="2.6" stroke-linecap="round"/></g>`;
    if (ph === "I") g += `<circle cx="${x}" cy="${y}" r="10" fill="#d9c2f1" stroke="${C}" stroke-width="1.8"/><circle cx="${x + 2}" cy="${y - 1}" r="3" fill="${C}"/>` + [[-5, 4], [4, 5], [-3, -5]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="1.2" fill="${C}"/>`).join("");
    if (ph === "P") g += `<circle cx="${x}" cy="${y}" r="12" fill="none" stroke="${C}" stroke-width="1.4" stroke-dasharray="3 3"/>` + X(x - 5, y - 4, 20) + X(x + 5, y - 3, -30) + X(x - 3, y + 6, 60) + X(x + 6, y + 6, 10);
    if (ph === "M") g += [-12, 12].map(d => `<path d="M${x} ${y + d * 1.6} L${x - 8} ${y} M${x} ${y + d * 1.6} L${x} ${y} M${x} ${y + d * 1.6} L${x + 8} ${y}" stroke="#9aa6b2" stroke-width="1"/>`).join("") + X(x - 9, y) + X(x - 3, y) + X(x + 3, y) + X(x + 9, y);
    if (ph === "A") { const V = (cx, cy, up) => `<path d="M${cx - 3} ${cy + (up ? 4 : -4)} L${cx} ${cy} L${cx + 3} ${cy + (up ? 4 : -4)}" stroke="${C}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`; g += [-6, -2, 2, 6].map(d => V(x + d, y - 13, true) + V(x + d, y + 13, false)).join("") + `<path d="M${x - 8} ${y - 19} L${x} ${y} L${x + 8} ${y - 19} M${x - 8} ${y + 19} L${x} ${y} L${x + 8} ${y + 19}" stroke="#9aa6b2" stroke-width=".8" fill="none"/>`; }
    if (ph === "T") g += `<line x1="${x - w / 2 + 4}" y1="${y}" x2="${x + w / 2 - 4}" y2="${y}" stroke="#b98a5a" stroke-width="2" stroke-dasharray="4 2"/><circle cx="${x}" cy="${y - 13}" r="7" fill="#d9c2f1" stroke="${C}" stroke-width="1.6"/><circle cx="${x}" cy="${y + 13}" r="7" fill="#d9c2f1" stroke="${C}" stroke-width="1.6"/>`;
    return g;
  }
  function field(sl, mag, st, chk) {
    let g = `<rect width="340" height="260" fill="#fbf7ee"/>`;
    const rnd = i => { const v = Math.sin(i * 12.9898 + 78.233) * 43758.5453; return v - Math.floor(v); };
    if (sl === "straw") { const s = mag === 4 ? 9 : mag === 10 ? 30 : 78; for (let y = -s; y < 260 + s; y += s * .8) for (let x = -s; x < 340 + s; x += s) { const ox = (Math.floor(y / s) % 2) * s / 2, cx = x + ox; g += `<rect x="${cx}" y="${y}" width="${s * .96}" height="${s * .76}" rx="${s * .12}" fill="#f8c9d3" stroke="#c4536d" stroke-width="${mag === 40 ? 4 : mag === 10 ? 2 : 1}"/>`; if (mag > 4) g += `<circle cx="${cx + s * .55}" cy="${y + s * .4}" r="${s * .13}" fill="#7b3fb0" opacity=".85"/>`; if (mag === 40) g += `<circle cx="${cx + s * .25}" cy="${y + s * .22}" r="5" fill="#e88aa0"/><circle cx="${cx + s * .75}" cy="${y + s * .6}" r="4" fill="#e88aa0"/>`; }
}
    if (sl === "cheek") { const n = mag === 4 ? 60 : mag === 10 ? 14 : 5, r = mag === 4 ? 9 : mag === 10 ? 30 : 55; for (let i = 0; i < n; i++) { const cx = 20 + rnd(i + 1) * 300, cy = 20 + rnd(i + 7) * 220; g += `<path d="M${cx - r} ${cy} q${r * .2} ${-r} ${r} ${-r * .9} q${r * .9} ${r * .1} ${r} ${r} q${-r * .2} ${r * .9} ${-r} ${r * .8} q${-r * .9} ${-r * .1} ${-r} ${-r * .9}z" fill="#dfe7fb" stroke="#7a8fc8" stroke-width="${mag === 40 ? 3 : 1.5}" opacity=".9"/>`; if (mag > 4) g += `<circle cx="${cx + r * .1}" cy="${cy}" r="${r * .17}" fill="#4b61a8"/>`; } }
    if (sl === "candy") { const n = mag === 4 ? 140 : mag === 10 ? 34 : 9, z = mag === 4 ? 6 : mag === 10 ? 22 : 60; for (let i = 0; i < n; i++) { const cx = rnd(i + 3) * 340, cy = rnd(i + 11) * 260; g += `<polygon points="${cx},${cy - z} ${cx + z * .9},${cy - z * .2} ${cx + z * .5},${cy + z * .8} ${cx - z * .6},${cy + z * .7} ${cx - z * .8},${cy - z * .3}" fill="${["#fff3c4", "#ffd9a0", "#ffffff"][i % 3]}" stroke="#d8b46a" stroke-width="${mag === 40 ? 2.5 : 1}" opacity=".9" transform="rotate(${i * 37} ${cx} ${cy})"/>`; } }
    if (sl === "root") {
      if (mag === 4) g += `<path d="M110 0 Q100 160 170 245 Q240 160 230 0 Z" fill="#f3e3c8" stroke="#b98a5a" stroke-width="3"/><path d="M150 210 Q170 255 190 210" fill="#e9cfa3" stroke="#b98a5a"/><text x="170" y="120" text-anchor="middle" font-size="13" font-weight="800" fill="#7a5530">growth zone</text>`;
      else if (mag === 10) { for (let r = 0; r < 9; r++) for (let c = 0; c < 13; c++) { const ph = ROOT[(r * 13 + c) % 20]; g += `<g transform="translate(${c * 26 + 13} ${r * 29 + 14}) scale(.42) translate(${-c * 26 - 13} ${-r * 29 - 14})">${rootCell(c * 26 + 13, r * 29 + 14, 62, 69, ph)}</g>`; } }
      else { const lab = st.lab || {}; ROOT.forEach((ph, i) => { const c = i % 5, r = Math.floor(i / 5), x = 36 + c * 67, y = 34 + r * 64, mine = lab[i];
        const hi = chk ? (mine === ph ? "#1a8f5a" : "#d0453a") : st.sel === i ? "#2b7de9" : null;
        g += `<g data-cell="${i}" style="cursor:pointer">${rootCell(x, y, 66, 62, ph, hi)}${mine ? `<rect x="${x - 15}" y="${y + 18}" width="30" height="13" rx="4" fill="#13294b" opacity=".85"/><text x="${x}" y="${y + 28}" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">${PH[mine][0].slice(0, 5)}</text>` : ""}</g>`; }); }
    }
    return g;
  }
  BT.scope = {
    html(b, st) {
      const sl = st.sl || "straw", mag = st.mag || 10, S = SLIDES.find(s => s.k === sl), chk = !!st.checked, lab = st.lab || {}, n = Object.keys(lab).length;
      const counts = {}; Object.values(lab).forEach(p => counts[p] = (counts[p] || 0) + 1);
      let h = `<div class="dx"><h4>${b.title || "Virtual Microscope"}</h4><div class="dx-scope"><div><svg viewBox="0 0 340 260" role="img" aria-label="${esc(S.name)} at ${mag}x"><defs><clipPath id="dxclip"><rect x="6" y="6" width="328" height="248" rx="${sl === "root" && mag === 40 ? 24 : 110}"/></clipPath></defs><g clip-path="url(#dxclip)">${field(sl, mag, st, chk)}</g><rect x="6" y="6" width="328" height="248" rx="${sl === "root" && mag === 40 ? 24 : 110}" fill="none" stroke="#111" stroke-width="10" pointer-events="none"/></svg></div>
        <div><div class="dx-row"><span class="lbl">Slide:</span>${SLIDES.map(s => `<button type="button" class="dx-pill ${s.k === sl ? "on" : ""}" data-sl="${s.k}">${s.name}</button>`).join("")}</div>
        <div class="dx-row"><span class="lbl">Lens:</span>${[4, 10, 40].map(m => `<button type="button" class="dx-pill ${m === mag ? "on" : ""}" data-mg="${m}">${m}x</button>`).join("")}</div>
        <div class="dx-msg" style="margin:8px 0">🔬 <b>${S.name} · ${mag}x</b><br>${S.note[mag]}</div>`;
      if (sl === "root" && mag === 40) {
        h += `<div class="dx-row"><span class="lbl">${st.sel != null && !chk ? "Cell " + (st.sel + 1) + " is in…" : "Tap a cell first, then its phase:"}</span>${Object.keys(PH).map(k => `<button type="button" class="dx-pill" data-ph="${k}" ${st.sel == null || chk ? "disabled" : ""}>${PH[k][0]}</button>`).join("")}</div>
          <div class="dx-tw"><table class="dx-cnt"><tr><th>Phase</th>${Object.keys(PH).map(k => `<th>${PH[k][0]}<br>${ES(PH[k][1])}</th>`).join("")}<th>Total</th></tr><tr><td>Cells I counted</td>${Object.keys(PH).map(k => `<td>${counts[k] || 0}</td>`).join("")}<td>${n}</td></tr></table></div>`;
        h += chk ? `<p class="score">Cells labeled correctly: <b>${BT.scope.right(st)} / 20</b>. Green = correct, red = check again.</p><div class="btnrow"><button class="btn ghost" data-scfix>✏️ Fix my labels</button></div>`
          : `<div class="btnrow"><button class="btn" data-sccheck ${n < 20 ? "disabled" : ""}>Check my labels</button><span class="msg">${n < 20 ? `Labeled ${n} of 20.` : ""}</span></div>`;
      } else h += `<p class="mu small">The graded task is on the <b>🧅 Onion root tip</b> slide at <b>40x</b>.${n ? ` You have labeled ${n} of 20 cells.` : ""}</p>`;
      return h + `</div></div></div>`;
    },
    right(st) { const lab = st.lab || {}; return ROOT.filter((p, i) => lab[i] === p).length; },
    wire(root, b, st, save, redraw) {
      $$("[data-sl]", root).forEach(x => x.onclick = () => { st.sl = x.dataset.sl; (st.seen = st.seen || {})[st.sl] = 1; save(); redraw(); });
      $$("[data-mg]", root).forEach(x => x.onclick = () => { st.mag = +x.dataset.mg; save(); redraw(); });
      $$("[data-cell]", root).forEach(x => x.onclick = () => { if (st.checked) return; st.sel = +x.dataset.cell; save(); redraw(); });
      $$("[data-ph]", root).forEach(x => x.onclick = () => { if (st.sel == null) return; (st.lab = st.lab || {})[st.sel] = x.dataset.ph; const nx = ROOT.findIndex((_, i) => i > st.sel && !st.lab[i]); st.sel = nx >= 0 ? nx : ROOT.findIndex((_, i) => !st.lab[i]); if (st.sel < 0) st.sel = null; save(); redraw(); });
      const c = $("[data-sccheck]", root); if (c) c.onclick = () => { st.checked = true; st.sel = null; save(); redraw(); };
      const f = $("[data-scfix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
    },
    score: (b, st) => ({ max: b.max || 4, pts: st.checked ? Math.round((b.max || 4) * BT.scope.right(st) / 20) : 0, label: "mitosis phases" }),
    text(b, st) { const lab = st.lab || {}; return "Root tip labels: " + ROOT.map((_, i) => lab[i] || "-").join(","); }
  };

  /* ================= DNA REPLICATION ================= */
  const TOP = "ATGCGTAC".split(""), BOT = TOP.map(x => PAIR[x]);
  window.DX_REP = { top: TOP.join(""), bot: BOT.join("") };
  BT.replicate = {
    html(b, st) {
      const ph = st.ph || 0, nt = st.nt || {}, nb = st.nb || {}, chk = !!st.checked, sel = st.sel || "t0";
      const W = 560, x0 = 50, dx = 64, base = (x, y, l, c, o = 1, hi) => `<rect x="${x - 22}" y="${y - 17}" width="44" height="34" rx="7" fill="${c}" opacity="${o}" ${hi ? `stroke="${hi}" stroke-width="4"` : ""}/><text x="${x}" y="${y + 7}" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">${l}</text>`;
      let g = "";
      if (ph === 0) { g += `<line x1="30" y1="95" x2="${W - 30}" y2="95" stroke="#13294b" stroke-width="6"/><line x1="30" y1="165" x2="${W - 30}" y2="165" stroke="#13294b" stroke-width="6"/>`;
        TOP.forEach((l, i) => { const x = x0 + i * dx; g += base(x, 112, l, BC[l]) + base(x, 148, BOT[i], BC[BOT[i]]); }); g += `<text x="${W / 2}" y="40" text-anchor="middle" font-size="15" font-weight="800" fill="#13294b">The original DNA molecule (blue = original strands)</text>`; }
      else {
        g += `<line x1="30" y1="40" x2="${W - 30}" y2="40" stroke="#13294b" stroke-width="6"/><line x1="30" y1="230" x2="${W - 30}" y2="230" stroke="#13294b" stroke-width="6"/>`;
        TOP.forEach((l, i) => { const x = x0 + i * dx; g += base(x, 58, l, BC[l]) + base(x, 212, BOT[i], BC[BOT[i]]);
          const a = nt[i], c = nb[i], ok1 = a === PAIR[l], ok2 = c === PAIR[BOT[i]];
          g += `<g data-slot="t${i}" style="cursor:pointer">${a ? base(x, 98, a, BC[a], 1, chk ? (ok1 ? "#1a8f5a" : "#d0453a") : sel === "t" + i ? "#13294b" : "#f28c28") : `<rect x="${x - 22}" y="81" width="44" height="34" rx="7" fill="#fff" stroke="${sel === "t" + i ? "#13294b" : "#c9ced8"}" stroke-width="${sel === "t" + i ? 4 : 2}" stroke-dasharray="5 4"/>`}</g>`;
          g += `<g data-slot="b${i}" style="cursor:pointer">${c ? base(x, 172, c, BC[c], 1, chk ? (ok2 ? "#1a8f5a" : "#d0453a") : sel === "b" + i ? "#13294b" : "#f28c28") : `<rect x="${x - 22}" y="155" width="44" height="34" rx="7" fill="#fff" stroke="${sel === "b" + i ? "#13294b" : "#c9ced8"}" stroke-width="${sel === "b" + i ? 4 : 2}" stroke-dasharray="5 4"/>`}</g>`; });
        g += `<text x="${W - 26}" y="135" text-anchor="end" font-size="12" font-weight="700" fill="#6b7280">helicase unzipped the middle ⟷</text>`;
        if (ph === 2) g += `<line x1="30" y1="120" x2="${W - 30}" y2="120" stroke="#f28c28" stroke-width="6"/><line x1="30" y1="150" x2="${W - 30}" y2="150" stroke="#f28c28" stroke-width="6"/><text x="${W / 2}" y="140" text-anchor="middle" font-size="13" font-weight="800" fill="#b45309">orange = new strands built by DNA polymerase</text>`;
      }
      const filled = Object.keys(nt).length + Object.keys(nb).length, right = BT.replicate.right(st);
      let h = `<div class="dx dx-rep"><h4>${b.title || "Copy the DNA: Replication"}</h4><svg viewBox="0 0 ${W} 270" role="img" aria-label="DNA replication model">${g}</svg>`;
      if (ph === 0) h += `<div class="btnrow"><button class="btn pulse" data-unzip>✂️ Unzip it with helicase</button><span class="mu small">Before a cell divides, it copies its DNA. First, an enzyme called <b>helicase</b> unzips the two strands.</span></div>`;
      else {
        h += `<p class="mu small">Tap an empty box, then tap the base that pairs with the blue base next to it. <b style="color:#d0453a">A</b>–<b style="color:#e0a100">T</b> and <b style="color:#1aa36f">C</b>–<b style="color:#2b7de9">G</b>. Filled: <b>${filled} of 16</b>.</p>
          <div class="dx-bases">${"ATCG".split("").map(x => `<button type="button" data-base="${x}" style="background:${BC[x]}" ${chk ? "disabled" : ""} aria-label="Base ${x}">${x}</button>`).join("")}</div>`;
        h += chk ? `<p class="score">Bases paired correctly: <b>${right} / 16</b>. ${right === 16 ? "🎉 You made <b>two identical DNA molecules</b>. Each one has one old (blue) strand and one new (orange) strand. This is called <b>semi-conservative replication</b>." : "Green = correct, red = fix it."}</p>${right < 16 ? `<div class="btnrow"><button class="btn ghost" data-rfix>✏️ Fix my bases</button></div>` : ""}`
          : `<div class="btnrow"><button class="btn" data-rcheck ${filled < 16 ? "disabled" : ""}>Check my bases</button></div>`;
      }
      return h + `</div>`;
    },
    right(st) { const nt = st.nt || {}, nb = st.nb || {}; let n = 0; TOP.forEach((l, i) => { if (nt[i] === PAIR[l]) n++; if (nb[i] === PAIR[BOT[i]]) n++; }); return n; },
    wire(root, b, st, save, redraw) {
      const u = $("[data-unzip]", root); if (u) u.onclick = () => { st.ph = 1; st.sel = "t0"; save(); redraw(); };
      $$("[data-slot]", root).forEach(x => x.onclick = () => { if (st.checked) return; st.sel = x.dataset.slot; save(); redraw(); });
      $$("[data-base]", root).forEach(x => x.onclick = () => { const s = st.sel || "t0", side = s[0], i = +s.slice(1); st[side === "t" ? "nt" : "nb"] = st[side === "t" ? "nt" : "nb"] || {}; st[side === "t" ? "nt" : "nb"][i] = x.dataset.base;
        const order = TOP.map((_, k) => "t" + k).concat(TOP.map((_, k) => "b" + k)); const nx = order.find(o => !(o[0] === "t" ? (st.nt || {}) : (st.nb || {}))[+o.slice(1)]); st.sel = nx || s; save(); redraw(); });
      const c = $("[data-rcheck]", root); if (c) c.onclick = () => { st.checked = true; if (BT.replicate.right(st) === 16) st.ph = 2; save(); redraw(); };
      const f = $("[data-rfix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
    },
    score: (b, st) => ({ max: b.max || 3, pts: st.checked ? Math.round((b.max || 3) * BT.replicate.right(st) / 16) : 0, label: "base pairing" }),
    text(b, st) { const nt = st.nt || {}, nb = st.nb || {}; return "New strands: " + TOP.map((_, i) => nt[i] || "-").join("") + " / " + TOP.map((_, i) => nb[i] || "-").join(""); }
  };

  /* ================= CELL CYCLE DIAGRAM ================= */
  BT.cellcycle = {
    html(b) {
      const cx = 170, cy = 150, r = 115, arc = (a0, a1, col, rr = r) => { const p = a => [cx + rr * Math.sin(a * Math.PI / 180), cy - rr * Math.cos(a * Math.PI / 180)], [x0, y0] = p(a0), [x1, y1] = p(a1); return `<path d="M${cx} ${cy} L${x0} ${y0} A${rr} ${rr} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1} Z" fill="${col}" stroke="#fff" stroke-width="3"/>`; };
      const lab = (a, rr, t, s, c = "#1f2430", fs = 13) => { const x = cx + rr * Math.sin(a * Math.PI / 180), y = cy - rr * Math.cos(a * Math.PI / 180); return `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fs}" font-weight="800" fill="${c}">${t}</text>${s ? `<text x="${x}" y="${y + 14}" text-anchor="middle" font-size="10" fill="#555" font-style="italic">${s}</text>` : ""}`; };
      let g = arc(0, 130, "#cfe4ff") + arc(130, 230, "#ffe0a3") + arc(230, 320, "#d9f2e3") + arc(320, 350, "#f8c9d3") + arc(350, 360, "#e9d5ff");
      g += lab(65, 70, "G1", "growth") + lab(180, 70, "S", "DNA is copied!", "#b45309") + lab(275, 70, "G2", "gets ready") + lab(335, 92, "M", "", "#9b1c31", 12) + lab(355, 92, "C", "", "#6b3fa0", 11);
      g += `<circle cx="${cx}" cy="${cy}" r="34" fill="#fff"/><text x="${cx}" y="${cy + 5}" text-anchor="middle" font-size="12" font-weight="800">Cell cycle</text>`;
      g += `<text x="300" y="40" font-size="14" font-weight="800" fill="#1f5fa8">INTERPHASE ≈ 90%</text><text x="300" y="58" font-size="11" fill="#555">G1 + S + G2 (interfase)</text>`;
      g += `<text x="300" y="100" font-size="14" font-weight="800" fill="#9b1c31">M = MITOSIS ≈ 10%</text><text x="300" y="118" font-size="11" fill="#555">Prophase → Metaphase →</text><text x="300" y="132" font-size="11" fill="#555">Anaphase → Telophase (PMAT)</text>`;
      g += `<text x="300" y="170" font-size="14" font-weight="800" fill="#6b3fa0">C = CYTOKINESIS</text><text x="300" y="188" font-size="11" fill="#555">the cell splits in two (citocinesis)</text>`;
      g += `<text x="300" y="230" font-size="12" font-weight="700" fill="#1f2430">DNA must be copied in S phase</text><text x="300" y="246" font-size="12" font-weight="700" fill="#1f2430">so each new cell gets a full set.</text>`;
      return `<div class="dx dx-cc"><h4>${b.title || "The Cell Cycle"}</h4><svg viewBox="0 0 540 300" role="img" aria-label="Cell cycle: interphase with G1, S where DNA is copied, and G2 takes about 90 percent of the time; mitosis and cytokinesis take about 10 percent">${g}</svg>${b.cap ? `<p class="mu small">${b.cap}</p>` : ""}</div>`;
    }
  };
});
