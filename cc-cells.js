/* =====================================================================
   CELL EXPLORER LAB BLOCKS (no need to edit)
   cellexp   : animated cell (cell: "animal" | "plant" | "bacteria").
               Tap an organelle to learn its job. Graded for exploring.
   celllabel : number labels on a cell drawing; pick the names (graded)
   venn      : two-circle Venn diagram sort (graded)
   mystery   : identify 4 cells under the microscope from their clues
   Motion pauses with the ⏸ button and starts paused for people who set
   "reduce motion" on their device.
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$ } = H;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ES = s => `<i class="cl-es">${s}</i>`;
  let REDUCED = false; try { REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  /* ---------------- organelle facts ---------------- */
  const INFO = {
    membrane: ["Cell membrane", "membrana celular", "Controls what goes in and out of the cell. It is thin, flexible, and made of lipids.", "🚧 City border with security gates", "All cells"],
    cytoplasm: ["Cytoplasm", "citoplasma", "The jelly-like fluid that fills the cell and holds the organelles. Many chemical reactions happen here.", "🛣️ The streets and land of the city", "All cells"],
    nucleus: ["Nucleus", "núcleo", "Holds the cell’s DNA and controls the cell’s activities.", "🏛️ City hall (keeps the plans)", "Eukaryotes: plants, animals, fungi, protists"],
    nucleolus: ["Nucleolus", "nucléolo", "A dark spot inside the nucleus that makes ribosomes.", "🏗️ The ribosome factory in city hall", "Eukaryotes"],
    rer: ["Rough ER", "retículo endoplasmático rugoso", "Folded membranes covered with ribosomes. It builds and moves proteins.", "🏭 Factory assembly line", "Eukaryotes"],
    ser: ["Smooth ER", "retículo endoplasmático liso", "Tubes with no ribosomes. It makes lipids (fats) and breaks down toxins.", "⚗️ Chemical plant", "Eukaryotes"],
    ribo: ["Ribosomes", "ribosomas", "Tiny dots that build proteins by reading instructions copied from DNA.", "👷 Construction workers", "ALL cells, even bacteria"],
    golgi: ["Golgi apparatus", "aparato de Golgi", "A stack of flat sacs that packages, labels, and ships proteins in vesicles.", "📦 Post office", "Eukaryotes"],
    mito: ["Mitochondria", "mitocondrias", "Release energy from food (glucose) by cellular respiration and make ATP.", "⚡ Power plant", "Eukaryotes: BOTH plant and animal cells"],
    lyso: ["Lysosome", "lisosoma", "A sac of enzymes that breaks down waste, worn-out parts, and germs.", "♻️ Recycling center and clean-up crew", "Mostly animal cells"],
    vesicle: ["Vesicle", "vesícula", "A small bubble of membrane that carries materials around the cell. Watch them travel from the ER to the Golgi to the membrane!", "🚚 Delivery truck", "Eukaryotes"],
    centriole: ["Centrioles", "centríolos", "A pair of tubes that organize the spindle fibers that pull chromosomes apart during mitosis.", "🧰 Moving crew", "Animal cells"],
    vacs: ["Vacuole (small)", "vacuola", "Stores water, food, and waste. Animal cells have a few small vacuoles.", "🏬 Storage closet", "Both (small in animals, huge in plants)"],
    vac: ["Central vacuole", "vacuola central", "A huge sac of water that presses against the cell wall to keep the plant firm (turgor pressure). When it loses water, the plant wilts.", "🗼 Water tower", "Plant cells"],
    wall: ["Cell wall", "pared celular", "A stiff outer layer made of cellulose that supports and protects the plant cell and gives it a box shape.", "🧱 City wall", "Plants, fungi, and bacteria (NOT animals)"],
    chloro: ["Chloroplast", "cloroplasto", "Uses sunlight, water, and CO₂ to make glucose by photosynthesis. Green chlorophyll is inside. Watch them stream around the cell!", "☀️ Solar power plant and food factory", "Plant cells and algae"],
    capsule: ["Capsule", "cápsula", "A sticky outer coat that protects some bacteria and helps them stick to surfaces.", "🧥 Raincoat", "Some bacteria"],
    bwall: ["Cell wall", "pared celular", "Gives the bacterium its shape and protects it (made of peptidoglycan, not cellulose).", "🧱 City wall", "Bacteria, plants, and fungi"],
    nucleoid: ["Nucleoid (DNA)", "nucleoide", "One big loop of DNA floating in the cytoplasm. Prokaryotes have NO nucleus.", "📋 Plans left out on the table", "Prokaryotes"],
    plasmid: ["Plasmid", "plásmido", "A small extra ring of DNA. It can carry genes like antibiotic resistance and can be shared.", "📝 Pocket notes", "Prokaryotes"],
    flagellum: ["Flagellum", "flagelo", "A whip-like tail that spins like a propeller to move the cell. Watch it spin!", "🚤 Outboard motor", "Some bacteria (and a few eukaryotic cells, like sperm)"],
    pili: ["Pili", "pili", "Short hairs that help the bacterium stick to things and pass DNA to other bacteria.", "🪝 Grappling hooks", "Bacteria"]
  };
  const KEYS = {
    animal: ["membrane", "cytoplasm", "nucleus", "nucleolus", "rer", "ser", "ribo", "golgi", "mito", "lyso", "vesicle", "centriole", "vacs"],
    plant: ["wall", "membrane", "cytoplasm", "vac", "nucleus", "nucleolus", "rer", "ser", "ribo", "golgi", "mito", "chloro"],
    bacteria: ["capsule", "bwall", "membrane", "cytoplasm", "nucleoid", "plasmid", "ribo", "flagellum", "pili"]
  };
  window.CL_KEYS = KEYS;

  if (!document.getElementById("cl-css")) {
    const c = document.createElement("style"); c.id = "cl-css";
    c.textContent = `
    .cl{border:3px solid var(--line);border-radius:22px;padding:14px 16px;background:var(--surface)}
    .cl h4{margin:0 0 6px}.cl-es{color:var(--muted);font-weight:600;font-size:.85em}
    .cl-wrap{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:14px;align-items:start}
    .cl-wrap>div{min-width:0}
    .cl svg.cell{width:100%;height:auto;display:block;background:#fbfcff;border-radius:16px;border:2px solid var(--line);touch-action:manipulation}
    .cl [data-org]{cursor:pointer}.cl [data-org]:hover{filter:brightness(1.08) drop-shadow(0 0 3px #fff)}
    .cl .sel{filter:drop-shadow(0 0 6px #ffcc00) drop-shadow(0 0 2px #ff9900)}
    .cl-card{border:3px solid var(--line);border-radius:16px;padding:10px 12px;background:var(--soft);display:grid;gap:6px}
    .cl-card h5{margin:0;font:700 1.15rem var(--display)}.cl-card .row{font-size:.92rem}.cl-card .row b{color:var(--lc)}
    .cl-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0}
    .cl-chip{all:unset;cursor:pointer;border:2px solid var(--line);border-radius:999px;padding:3px 10px;font:800 .8rem var(--body);background:var(--surface)}
    .cl-chip.seen{border-color:#7cc49a;background:#e5f4ea;color:#1d5c36}.cl-chip.on{border-color:var(--lc);background:var(--lc);color:#fff}
    .cl-prog{height:10px;border-radius:999px;background:var(--soft);overflow:hidden}.cl-prog i{display:block;height:100%;background:var(--lc);transition:width .3s}
    .cl-pins{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:6px;margin-top:8px}
    .cl-pins label{display:flex;gap:6px;align-items:center;font-weight:800;font-size:.88rem;border:2px solid var(--line);border-radius:12px;padding:4px 8px}
    .cl-pins label.ok{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 12%,transparent)}.cl-pins label.no{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 10%,transparent)}
    .cl-pins .n{display:grid;place-items:center;min-width:26px;height:26px;border-radius:50%;background:#13294b;color:#fff}
    .cl-pins select{flex:1;min-width:0;font:inherit;font-size:.85rem;border:2px solid var(--line);border-radius:8px;padding:2px}
    .cl-venn svg{width:100%;max-width:560px;height:auto;display:block;margin:auto}
    .cl-pool{display:flex;flex-wrap:wrap;gap:6px;min-height:40px;padding:8px;border-radius:14px;background:var(--soft);margin:8px 0}
    .cl-tile{all:unset;cursor:pointer;border:2px solid var(--line);border-radius:10px;padding:4px 9px;background:var(--surface);font-weight:800;font-size:.85rem}
    .cl-tile.pick{border-color:var(--lc);box-shadow:0 0 0 3px color-mix(in srgb,var(--lc) 30%,transparent)}
    .cl-tile.ok{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 14%,var(--surface))}.cl-tile.no{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 12%,var(--surface))}
    .cl-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
    .cl-col{border:3px dashed var(--line);border-radius:14px;padding:8px;min-height:90px;display:flex;flex-direction:column;gap:5px;cursor:pointer}
    .cl-col h6{margin:0 0 2px;font:800 .82rem var(--body);text-transform:uppercase;letter-spacing:.03em}
    .cl-myst{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px}
    .cl-sp{border:3px solid var(--line);border-radius:16px;padding:8px;display:grid;gap:6px}.cl-sp.ok{border-color:var(--ok)}.cl-sp.no{border-color:var(--bad)}
    .cl-sp svg{width:100%;height:auto;background:#111;border-radius:12px}
    .cl-sp select{font:inherit;font-size:.88rem;border:2px solid var(--line);border-radius:8px;padding:3px}
    .cl-sp .ck{display:grid;grid-template-columns:1fr 1fr;gap:2px 6px;font-size:.82rem;font-weight:700}
    @media (max-width:820px){.cl-wrap{grid-template-columns:1fr}.cl-cols{grid-template-columns:1fr}}`;
    document.head.appendChild(c);
  }

  /* ---------------- drawings ---------------- */
  const blob = (cx, cy, rx, ry, t, amp) => { let d = ""; for (let i = 0; i <= 48; i++) { const a = i / 48 * Math.PI * 2, k = 1 + amp * (Math.sin(3 * a + t * .9) * .6 + Math.sin(5 * a - t * 1.3) * .4); d += (i ? "L" : "M") + (cx + rx * k * Math.cos(a)).toFixed(1) + " " + (cy + ry * k * Math.sin(a)).toFixed(1); } return d + "Z"; };
  const mitoG = (x, y, r = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><ellipse rx="30" ry="14" fill="#f6a04d" stroke="#b5601a" stroke-width="3"/><path d="M-22 0 q4 -9 8 0 q4 9 8 0 q4 -9 8 0 q4 9 8 0 q4 -9 8 0" stroke="#b5601a" stroke-width="2.4" fill="none"/></g>`;
  const golgiG = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">${[0, 1, 2, 3].map(i => `<path d="M${-34 + i * 3} ${-16 + i * 11} q34 ${-12} ${68 - i * 6} 0" stroke="#e8368f" stroke-width="7" fill="none" stroke-linecap="round"/>`).join("")}</g>`;
  const nucG = (x, y, r, t) => `<g data-org="nucleus"><circle cx="${x}" cy="${y}" r="${r}" fill="#dcc6f3" stroke="#6b3fa0" stroke-width="5" stroke-dasharray="${r * .5} 4"/>${[...Array(6)].map((_, i) => `<path d="M${x - r * .6 + i * r * .22} ${y + r * .35} q6 -10 12 0" stroke="#9a74c9" stroke-width="2" fill="none"/>`).join("")}</g><circle data-org="nucleolus" cx="${x + r * .15}" cy="${y - r * .1}" r="${r * .3}" fill="#6b3fa0"/>`;
  const rerG = (x, y, r0) => { let g = ""; for (let k = 0; k < 3; k++) { const r = r0 + k * 13; let d = ""; for (let i = 0; i <= 20; i++) { const a = -1.15 + i / 20 * 2.3, w = 1 + .05 * Math.sin(i * 1.7); d += (i ? "L" : "M") + (x + r * w * Math.cos(a)).toFixed(1) + " " + (y + r * w * Math.sin(a)).toFixed(1); } g += `<path d="${d}" stroke="#5b8def" stroke-width="6" fill="none" stroke-linecap="round"/>`; for (let i = 0; i <= 10; i++) { const a = -1.1 + i / 10 * 2.2; g += `<circle cx="${(x + (r + 4) * Math.cos(a)).toFixed(1)}" cy="${(y + (r + 4) * Math.sin(a)).toFixed(1)}" r="2.2" fill="#13294b"/>`; } } return `<g data-org="rer">${g}</g>`; };
  const serG = (x, y) => `<g data-org="ser">${[0, 1, 2].map(i => `<path d="M${x} ${y + i * 12} q12 -10 24 0 t24 0 t24 0" stroke="#7fb0f5" stroke-width="7" fill="none" stroke-linecap="round"/>`).join("")}</g>`;
  const lysoG = (x, y) => `<g transform="translate(${x} ${y})"><circle r="11" fill="#ffd27a" stroke="#c98a00" stroke-width="2.5"/><circle cx="-3" cy="-2" r="2" fill="#c98a00"/><circle cx="3" cy="3" r="2" fill="#c98a00"/></g>`;
  const riboDots = (pts, t) => pts.map(([x, y], i) => `<circle cx="${(x + Math.sin(t * 2 + i) * 1.5).toFixed(1)}" cy="${(y + Math.cos(t * 1.7 + i * 2) * 1.5).toFixed(1)}" r="2.6" fill="#13294b"/>`).join("");
  const RIBO_A = [[120, 150], [140, 260], [300, 110], [330, 300], [430, 170], [380, 330], [100, 200], [250, 330], [450, 250], [180, 70], [400, 110], [280, 280], [90, 270], [350, 60]];
  const RIBO_P = [[60, 300], [470, 60], [460, 330], [180, 50], [60, 60], [420, 340], [200, 340], [470, 180]];
  /* path the vesicles follow: rough ER → Golgi → membrane */
  const vesPath = (u) => { const P = [[270, 180], [340, 150], [395, 140], [478, 120]], n = P.length - 1, s = Math.min(n - 1e-6, u * n), i = Math.floor(s), f = s - i; return [P[i][0] + (P[i + 1][0] - P[i][0]) * f, P[i][1] + (P[i + 1][1] - P[i][1]) * f]; };

  function animalSVG(t) {
    let g = `<path data-org="cytoplasm" d="${blob(260, 190, 238, 168, t, .018)}" fill="#fde9ee"/>`;
    g += riboDots(RIBO_A, t).replace(/<circle/g, `<circle data-org="ribo"`);
    g += serG(95, 290);
    g += `<g data-org="vacs"><circle cx="420" cy="290" r="18" fill="#d7ecff" stroke="#6ba7d8" stroke-width="2.5"/></g>`;
    g += `<g data-org="lyso">${lysoG(112 + Math.sin(t * .6) * 6, 215 + Math.cos(t * .5) * 5)}${lysoG(330 + Math.cos(t * .4) * 6, 78 + Math.sin(t * .7) * 4)}${lysoG(255 + Math.sin(t * .5 + 2) * 5, 315)}</g>`;
    g += `<g data-org="centriole" transform="translate(300 258)"><rect x="-14" y="-6" width="28" height="12" rx="4" fill="#9dd6a8" stroke="#2f8a4b" stroke-width="2"/><rect x="-6" y="-18" width="12" height="28" rx="4" fill="#9dd6a8" stroke="#2f8a4b" stroke-width="2" transform="translate(22 6)"/></g>`;
    g += `<g data-org="mito">${[[345, 230, 20], [415, 205, -30], [150, 95, 15], [180, 300, -10]].map(([x, y, r], i) => mitoG(x + Math.sin(t * .45 + i * 2) * 8, y + Math.cos(t * .4 + i) * 6, r + Math.sin(t * .6 + i) * 12)).join("")}</g>`;
    g += rerG(195, 185, 70);
    g += nucG(195, 185, 58, t);
    g += `<g data-org="golgi">${golgiG(368, 145)}</g>`;
    g += `<g data-org="vesicle">${[0, .33, .66].map(o => { const [x, y] = vesPath((t * .12 + o) % 1); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="#ffc2dd" stroke="#e8368f" stroke-width="2.5"/>`; }).join("")}</g>`;
    g += `<path data-org="membrane" d="${blob(260, 190, 238, 168, t, .018)}" fill="none" stroke="#e5627d" stroke-width="7" pointer-events="stroke"/>`;
    g += `<path d="${blob(260, 190, 238, 168, t, .018)}" fill="none" stroke="transparent" stroke-width="22" pointer-events="stroke" data-org="membrane"/>`;
    return g;
  }
  function plantSVG(t) {
    let g = `<rect data-org="wall" x="16" y="16" width="488" height="348" rx="28" fill="#d7efc6" stroke="#3f8f3a" stroke-width="16"/>`;
    g += `<rect data-org="cytoplasm" x="34" y="34" width="452" height="312" rx="18" fill="#f2fbe8"/>`;
    g += riboDots(RIBO_P, t).replace(/<circle/g, `<circle data-org="ribo"`);
    g += `<g data-org="vac"><rect x="150" y="80" width="300" height="210" rx="70" fill="#cfe6ff" stroke="#5aa0d8" stroke-width="4"/><path d="M190 140 q30 -20 60 0 M330 230 q30 -20 60 0" stroke="#fff" stroke-width="5" opacity=".6" fill="none" stroke-linecap="round"/></g>`;
    /* chloroplasts stream around the cell (cytoplasmic streaming) */
    g += `<g data-org="chloro">${[...Array(9)].map((_, i) => { const u = (t * .045 + i / 9) % 1, a = u * Math.PI * 2, x = 260 + 205 * Math.cos(a), y = 190 + 140 * Math.sin(a);
      return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(a * 180 / Math.PI + 90).toFixed(0)})"><ellipse rx="22" ry="12" fill="#5fbf4a" stroke="#2f7a24" stroke-width="2.5"/>${[-10, -3, 4, 11].map(dx => `<rect x="${dx - 2.5}" y="-6" width="5" height="12" rx="1.5" fill="#2f7a24"/>`).join("")}</g>`; }).join("")}</g>`;
    g += serG(70, 255);
    g += `<g data-org="mito">${[[460, 120, 70], [300, 318, 0], [90, 330, -20]].map(([x, y, r], i) => mitoG(x + Math.sin(t * .4 + i) * 4, y + Math.cos(t * .5 + i) * 3, r + Math.sin(t * .6 + i) * 8, .75)).join("")}</g>`;
    g += `<g data-org="golgi">${golgiG(108, 205, .7)}</g>`;
    g += rerG(100, 110, 50);
    g += nucG(100, 110, 40, t);
    g += `<rect data-org="membrane" x="34" y="34" width="452" height="312" rx="18" fill="none" stroke="#86c96f" stroke-width="5" pointer-events="stroke"/>`;
    return g;
  }
  function bacteriaSVG(t) {
    const bob = Math.sin(t * 1.2) * 5;
    let g = `<g transform="translate(0 ${bob.toFixed(1)})">`;
    let fl = ""; for (let i = 0; i <= 40; i++) { const x = 432 + i * 2.2, y = 190 + Math.sin(i * .45 - t * 9) * (4 + i * .35); fl += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1); }
    g += `<path data-org="flagellum" d="${fl}" stroke="#8a5a1e" stroke-width="5" fill="none" stroke-linecap="round"/><path d="${fl}" stroke="transparent" stroke-width="20" fill="none" data-org="flagellum"/>`;
    g += `<g data-org="pili">${[...Array(12)].map((_, i) => { const x = 130 + i * 24, top = i % 2 === 0; const w = Math.sin(t * 2 + i) * 3; return `<line x1="${x}" y1="${top ? 108 : 272}" x2="${x + w}" y2="${top ? 86 : 294}" stroke="#b77c2a" stroke-width="3" stroke-linecap="round"/>`; }).join("")}<rect x="120" y="80" width="290" height="30" fill="transparent"/><rect x="120" y="270" width="290" height="30" fill="transparent"/></g>`;
    g += `<rect data-org="capsule" x="78" y="104" width="364" height="172" rx="86" fill="#fff1cc" stroke="#e0b25a" stroke-width="3" stroke-dasharray="7 5"/>`;
    g += `<rect data-org="bwall" x="92" y="118" width="336" height="144" rx="72" fill="#f4d79c" stroke="#b77c2a" stroke-width="8"/>`;
    g += `<rect data-org="cytoplasm" x="104" y="130" width="312" height="120" rx="60" fill="#fff8e6"/>`;
    g += `<rect data-org="membrane" x="104" y="130" width="312" height="120" rx="60" fill="none" stroke="#e08a00" stroke-width="4" pointer-events="stroke"/>`;
    let dn = ""; for (let i = 0; i <= 60; i++) { const a = i / 60 * Math.PI * 2, r = 38 + 12 * Math.sin(5 * a + t * .8) + 6 * Math.sin(9 * a); dn += (i ? "L" : "M") + (250 + r * 1.6 * Math.cos(a)).toFixed(1) + " " + (190 + r * .7 * Math.sin(a)).toFixed(1); }
    g += `<path data-org="nucleoid" d="${dn}Z" fill="rgba(138,84,224,.08)" stroke="#8a54e0" stroke-width="3.5"/>`;
    g += `<g data-org="plasmid"><circle cx="${355 + Math.sin(t) * 4}" cy="160" r="11" fill="none" stroke="#e8368f" stroke-width="3.5"/><circle cx="150" cy="${215 + Math.cos(t * .8) * 4}" r="9" fill="none" stroke="#e8368f" stroke-width="3.5"/></g>`;
    g += riboDots([[140, 165], [175, 230], [330, 225], [370, 205], [300, 150], [200, 150], [390, 175], [130, 195]], t).replace(/<circle/g, `<circle data-org="ribo"`);
    return g + `</g>`;
  }
  const DRAW = { animal: animalSVG, plant: plantSVG, bacteria: bacteriaSVG };
  const TITLE = { animal: "Animal cell", plant: "Plant cell", bacteria: "Bacterial cell (prokaryote)" };
  /* where to put the label for each organelle (for "Show labels") */
  const LAB = {
    animal: { membrane: [455, 58], cytoplasm: [60, 120], nucleus: [195, 260], nucleolus: [205, 162], rer: [290, 100], ser: [120, 345], ribo: [250, 352], golgi: [380, 112], mito: [420, 245], lyso: [90, 240], vesicle: [470, 100], centriole: [315, 285], vacs: [420, 322] },
    plant: { wall: [450, 373], membrane: [80, 46], cytoplasm: [470, 230], vac: [300, 190], nucleus: [100, 170], nucleolus: [112, 96], rer: [170, 60], ser: [110, 290], ribo: [60, 318], golgi: [150, 214], mito: [450, 150], chloro: [260, 58] },
    bacteria: { capsule: [64, 190], bwall: [440, 252], membrane: [260, 268], cytoplasm: [180, 245], nucleoid: [250, 192], plasmid: [355, 142], ribo: [140, 150], flagellum: [470, 150], pili: [130, 72] }
  };
  function labels(kind) { return Object.entries(LAB[kind]).map(([k, [x, y]]) => { const n = INFO[k][0]; return `<g pointer-events="none"><rect x="${x - n.length * 3.4 - 6}" y="${y - 12}" width="${n.length * 6.8 + 12}" height="18" rx="9" fill="#13294b" opacity=".82"/><text x="${x}" y="${y + 1}" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">${n}</text></g>`; }).join(""); }

  /* ================= cellexp ================= */
  BT.cellexp = {
    html(b, st) {
      const kind = b.cell || "animal", keys = KEYS[kind], seen = st.seen || {}, n = keys.filter(k => seen[k]).length, cur = st.cur, I = cur ? INFO[cur] : null;
      const paused = st.paused ?? REDUCED;
      return `<div class="cl"><h4>${b.title || TITLE[kind]}</h4><p class="mu small">${b.how || "Tap any part of the cell to learn its job. Find all of them!"}</p>
        <div class="cl-wrap"><div><svg class="cell" viewBox="0 0 520 380" role="img" aria-label="Animated ${TITLE[kind]}. Tap a part to learn about it."><g data-live>${DRAW[kind](st.t0 || 0)}</g><g data-labs>${st.labs ? labels(kind) : ""}</g></svg>
          <div class="cl-bar"><button type="button" class="cl-chip" data-pause>${paused ? "▶ Play motion" : "⏸ Pause motion"}</button><button type="button" class="cl-chip ${st.labs ? "on" : ""}" data-labsb>🏷️ ${st.labs ? "Hide" : "Show"} labels</button></div></div>
        <div><div class="cl-card" aria-live="polite">${I ? `<h5>${I[0]} ${ES("(" + I[1] + ")")}</h5><div class="row"><b>Job:</b> ${I[2]}</div><div class="row"><b>In Cell City it’s like a…</b> ${I[3]}</div><div class="row"><b>Found in:</b> ${I[4]}</div>` : `<h5>👆 Tap a part of the cell</h5><div class="row">Each organelle (small organ) has a job, like the buildings in a city.</div>`}</div>
          <p class="small" style="margin:10px 0 4px"><b>Found ${n} of ${keys.length}</b></p><div class="cl-prog"><i style="width:${Math.round(100 * n / keys.length)}%"></i></div>
          <div class="cl-bar">${keys.map(k => `<button type="button" class="cl-chip ${seen[k] ? "seen" : ""} ${cur === k ? "on" : ""}" data-orgb="${k}">${seen[k] ? "✓ " + INFO[k][0] : "?"}</button>`).join("")}</div>
          ${n === keys.length ? `<p class="score">🎉 You found every part of the ${TITLE[kind].toLowerCase()}!</p>` : ""}</div></div></div>`;
    },
    wire(root, b, st, save, redraw) {
      const kind = b.cell || "animal", live = $("[data-live]", root), svg = $("svg.cell", root);
      const pick = k => { if (!INFO[k]) return; st.cur = k; (st.seen = st.seen || {})[k] = true; save(); redraw(); };
      svg.addEventListener("pointerdown", e => { const o = e.target.closest("[data-org]"); if (o) { e.preventDefault(); pick(o.dataset.org); } });
      $$("[data-orgb]", root).forEach(x => x.onclick = () => { const k = x.dataset.orgb; if ((st.seen || {})[k]) { st.cur = k; save(); redraw(); } });
      $("[data-labsb]", root).onclick = () => { st.labs = !st.labs; save(); redraw(); };
      $("[data-pause]", root).onclick = () => { st.paused = !(st.paused ?? REDUCED); save(); redraw(); };
      const mark = () => { $$(".sel", live).forEach(x => x.classList.remove("sel")); if (st.cur) $$(`[data-org="${st.cur}"]`, live).forEach(x => x.classList.add("sel")); };
      mark();
      if (st.paused ?? REDUCED) return;
      const start = performance.now() - (st.t0 || 0) * 1000;
      const loop = now => { if (!root.isConnected) return; const t = (now - start) / 1000; st.t0 = t; live.innerHTML = DRAW[kind](t); mark(); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
    },
    score(b, st) { const keys = KEYS[b.cell || "animal"], n = keys.filter(k => (st.seen || {})[k]).length; return { max: b.max || 2, pts: n === keys.length ? (b.max || 2) : n >= keys.length / 2 ? 1 : 0, label: "organelles explored" }; },
    text(b, st) { return "Explored: " + Object.keys(st.seen || {}).join(", "); }
  };

  /* ================= celllabel ================= */
  BT.celllabel = {
    html(b, st) {
      const kind = b.cell || "plant", pins = b.pins, a = st.a || {}, chk = !!st.checked, opts = b.options || pins.map(p => INFO[p.k][0]);
      const pinG = pins.map((p, i) => `<line x1="${p.x}" y1="${p.y}" x2="${p.lx}" y2="${p.ly}" stroke="#13294b" stroke-width="2"/><circle cx="${p.x}" cy="${p.y}" r="4" fill="#13294b"/><circle cx="${p.lx}" cy="${p.ly}" r="14" fill="${chk ? (a[i] === INFO[p.k][0] ? "#1a8f5a" : "#d0453a") : "#13294b"}" stroke="#fff" stroke-width="2"/><text x="${p.lx}" y="${p.ly + 5}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">${i + 1}</text>`).join("");
      const sorted = [...opts].sort();
      return `<div class="cl"><h4>${b.title || "Label the cell"}</h4><p class="mu small">${b.how || "Choose the name of each numbered part."}</p>
        <svg class="cell" viewBox="-70 -6 700 392" role="img" aria-label="${TITLE[kind]} with numbered parts" style="max-width:640px;margin:auto">${DRAW[kind](1.5).replace(/data-org="[^"]*"/g, "")}${pinG}</svg>
        <div class="cl-pins">${pins.map((p, i) => `<label class="${chk ? (a[i] === INFO[p.k][0] ? "ok" : "no") : ""}"><span class="n">${i + 1}</span><select data-lb="${i}" ${chk ? "disabled" : ""}><option value="">Choose…</option>${sorted.map(o => `<option ${a[i] === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>`).join("")}</div>
        ${chk ? `<p class="score">Labeled correctly: <b>${BT.celllabel.right(b, st)} / ${pins.length}</b>.</p><div class="btnrow"><button class="btn ghost" data-lbfix>✏️ Fix my labels</button></div>` : `<div class="btnrow"><button class="btn" data-lbcheck>Check my labels</button><span class="msg"></span></div>`}</div>`;
    },
    right(b, st) { const a = st.a || {}; return b.pins.filter((p, i) => a[i] === INFO[p.k][0]).length; },
    wire(root, b, st, save, redraw) {
      $$("[data-lb]", root).forEach(x => x.onchange = () => { (st.a = st.a || {})[x.dataset.lb] = x.value; save(); });
      const c = $("[data-lbcheck]", root); if (c) c.onclick = () => { if (b.pins.some((p, i) => !(st.a || {})[i])) { $(".msg", root).textContent = "Label every number first."; return; } st.checked = true; save(); redraw(); };
      const f = $("[data-lbfix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
    },
    score(b, st) { return { max: b.max || 4, pts: st.checked ? Math.round((b.max || 4) * BT.celllabel.right(b, st) / b.pins.length) : 0, label: b.label || "labels" }; },
    text(b, st) { const a = st.a || {}; return b.pins.map((p, i) => `${i + 1}=${a[i] || "-"}`).join(", "); }
  };

  /* ================= venn ================= */
  BT.venn = {
    html(b, st) {
      const p = st.p || {}, chk = !!st.checked, sel = st.sel, cA = b.colors ? b.colors[0] : "#1aa36f", cB = b.colors ? b.colors[1] : "#2b7de9";
      const names = [b.A + " only", "Both", b.B + " only"];
      const tile = (i, inZone) => { const t = b.tiles[i]; return `<button type="button" class="cl-tile ${sel === i ? "pick" : ""} ${chk && inZone ? (p[i] === t[1] ? "ok" : "no") : ""}" data-vt="${i}" ${chk ? "disabled" : ""}>${t[0]}</button>`; };
      const count = z => b.tiles.filter((_, i) => p[i] === z).length;
      const svg = `<svg viewBox="0 0 560 230" role="img" aria-label="Venn diagram: ${esc(b.A)} and ${esc(b.B)}"><circle cx="205" cy="118" r="105" fill="${cA}" fill-opacity=".18" stroke="${cA}" stroke-width="4"/><circle cx="355" cy="118" r="105" fill="${cB}" fill-opacity=".18" stroke="${cB}" stroke-width="4"/>
        <rect data-vz="0" x="100" y="40" width="130" height="160" fill="transparent" style="cursor:pointer"/><rect data-vz="1" x="232" y="50" width="96" height="140" fill="transparent" style="cursor:pointer"/><rect data-vz="2" x="330" y="40" width="130" height="160" fill="transparent" style="cursor:pointer"/>
        <text x="150" y="20" text-anchor="middle" font-size="16" font-weight="800" fill="${cA}">${esc(b.A)}</text><text x="410" y="20" text-anchor="middle" font-size="16" font-weight="800" fill="${cB}">${esc(b.B)}</text>
        <text x="150" y="125" text-anchor="middle" font-size="26" font-weight="800" fill="${cA}" pointer-events="none">${count(0)}</text><text x="280" y="125" text-anchor="middle" font-size="26" font-weight="800" fill="#444" pointer-events="none">${count(1)}</text><text x="410" y="125" text-anchor="middle" font-size="26" font-weight="800" fill="${cB}" pointer-events="none">${count(2)}</text>
        <text x="150" y="150" text-anchor="middle" font-size="11" fill="#555" pointer-events="none">${esc(b.A)} only</text><text x="280" y="150" text-anchor="middle" font-size="11" fill="#555" pointer-events="none">both</text><text x="410" y="150" text-anchor="middle" font-size="11" fill="#555" pointer-events="none">${esc(b.B)} only</text></svg>`;
      const pool = b.tiles.map((_, i) => i).filter(i => p[i] == null);
      return `<div class="cl cl-venn"><h4>${b.title || "Venn diagram"}</h4><p class="mu small">Tap a card, then tap where it goes: in one circle, or in the middle if it is true for both.</p>${svg}
        <div class="cl-pool">${pool.length ? pool.map(i => tile(i, false)).join("") : `<span class="mu small">All cards placed. ${chk ? "" : "Press Check."}</span>`}</div>
        <div class="cl-cols">${[0, 1, 2].map(z => `<div class="cl-col" data-vz="${z}" style="border-color:${z === 0 ? cA : z === 2 ? cB : "#9aa6b2"}"><h6 style="color:${z === 0 ? cA : z === 2 ? cB : "#555"}">${names[z]}</h6>${b.tiles.map((_, i) => i).filter(i => p[i] === z).map(i => tile(i, true)).join("")}</div>`).join("")}</div>
        ${chk ? `<p class="score">Placed correctly: <b>${BT.venn.right(b, st)} / ${b.tiles.length}</b>. ${b.why || ""}</p><div class="btnrow"><button class="btn ghost" data-vfix>✏️ Move my red cards</button></div>` : `<div class="btnrow"><button class="btn" data-vcheck>Check</button><span class="msg"></span></div>`}</div>`;
    },
    right(b, st) { const p = st.p || {}; return b.tiles.filter((t, i) => p[i] === t[1]).length; },
    wire(root, b, st, save, redraw) {
      $$("[data-vt]", root).forEach(x => x.onclick = e => { e.stopPropagation(); const i = +x.dataset.vt, p = st.p || {};
        if (st.sel != null && st.sel !== i && p[i] != null) { p[st.sel] = p[i]; st.p = p; st.sel = null; }   /* tapping a card in a column drops the selected card there */
        else st.sel = st.sel === i ? null : i; save(); redraw(); });
      $$("[data-vz]", root).forEach(x => x.onclick = () => { if (st.sel == null || st.checked) return; (st.p = st.p || {})[st.sel] = +x.dataset.vz; st.sel = null; save(); redraw(); });
      const c = $("[data-vcheck]", root); if (c) c.onclick = () => { if (b.tiles.some((_, i) => (st.p || {})[i] == null)) { $(".msg", root).textContent = "Place every card first."; return; } st.checked = true; save(); redraw(); };
      const f = $("[data-vfix]", root); if (f) f.onclick = () => { const p = st.p || {}; b.tiles.forEach((t, i) => { if (p[i] !== t[1]) delete p[i]; }); st.checked = false; save(); redraw(); };
    },
    score(b, st) { return { max: b.max || 3, pts: st.checked ? Math.round((b.max || 3) * BT.venn.right(b, st) / b.tiles.length) : 0, label: b.label || "Venn diagram" }; },
    text(b, st) { const p = st.p || {}; return b.tiles.map((t, i) => `${t[0]}=${["A", "Both", "B"][p[i]] || "-"}`).join("; "); }
  };

  /* ================= mystery cells ================= */
  const SPEC = [
    { k: "onion", name: "Specimen 1", type: "Plant cell", clues: ["Cell wall", "Nucleus", "Large central vacuole"], draw: () => { let g = `<rect width="230" height="150" fill="#f7f2e4"/>`; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const x = c * 62 - (r % 2) * 30, y = r * 40; g += `<rect x="${x + 2}" y="${y + 2}" width="58" height="36" rx="3" fill="#fbf8ee" stroke="#a8956a" stroke-width="3"/><circle cx="${x + 46}" cy="${y + 12}" r="5" fill="#b07ab8"/>`; } return g; } },
    { k: "elodea", name: "Specimen 2", type: "Plant cell", clues: ["Cell wall", "Nucleus", "Chloroplasts", "Large central vacuole"], draw: t => { let g = `<rect width="230" height="150" fill="#eef8e6"/>`; for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { const x = c * 78 + 2, y = r * 50 + 2; g += `<rect x="${x}" y="${y}" width="74" height="46" rx="4" fill="#e3f4d9" stroke="#4d8f3c" stroke-width="3"/><circle cx="${x + 14}" cy="${y + 34}" r="5" fill="#9a74c9"/>`; for (let k = 0; k < 9; k++) { const u = ((t || 0) * .05 + k / 9) % 1, a = u * 2 * Math.PI; g += `<ellipse cx="${(x + 37 + 30 * Math.cos(a)).toFixed(1)}" cy="${(y + 23 + 16 * Math.sin(a)).toFixed(1)}" rx="5" ry="3" fill="#3aa33a"/>`; } } return g; } },
    { k: "cheek", name: "Specimen 3", type: "Animal cell", clues: ["Nucleus"], draw: () => { let g = `<rect width="230" height="150" fill="#f4f6fb"/>`; [[50, 45], [150, 50], [95, 105], [190, 115]].forEach(([x, y], i) => g += `<path d="M${x - 38} ${y} q8 -34 40 -32 q34 4 36 34 q-6 32 -38 32 q-34 -4 -38 -34z" fill="#dfe7fb" stroke="#7a8fc8" stroke-width="2.5"/><circle cx="${x + 2}" cy="${y + 2}" r="7" fill="#4b61a8"/>`); return g; } },
    { k: "ecoli", name: "Specimen 4", type: "Prokaryote (bacteria)", clues: ["Cell wall", "No nucleus", "Flagellum"], draw: t => { let g = `<rect width="230" height="150" fill="#fbf7ee"/>`; [[40, 40, 10], [130, 30, -20], [70, 105, 25], [160, 100, 0]].forEach(([x, y, r], i) => { let f = ""; for (let k = 0; k <= 14; k++) f += (k ? "L" : "M") + (x + 30 + k * 2.4) + " " + (y + Math.sin(k * .8 - (t || 0) * 6 + i) * 4); g += `<g transform="rotate(${r} ${x} ${y})"><path d="${f}" stroke="#8a5a1e" stroke-width="2" fill="none"/><rect x="${x - 30}" y="${y - 11}" width="60" height="22" rx="11" fill="#f4d79c" stroke="#b77c2a" stroke-width="3"/><path d="M${x - 14} ${y} q6 -6 12 0 t12 0" stroke="#8a54e0" stroke-width="2" fill="none"/></g>`; }); return g; } }
  ];
  const CLUES = ["Cell wall", "Nucleus", "Chloroplasts", "Large central vacuole", "No nucleus", "Flagellum"], TYPES = ["Plant cell", "Animal cell", "Prokaryote (bacteria)"];
  window.CL_MYST = SPEC.map(s => ({ k: s.k, type: s.type, clues: s.clues }));
  const same = (a, b) => a.length === b.length && a.every(x => b.includes(x));
  BT.mystery = {
    html(b, st) {
      const a = st.a || {}, chk = !!st.checked;
      return `<div class="cl"><h4>${b.title || "Mystery cells"}</h4><p class="mu small">${b.how || "Look at each specimen. Check every clue you can SEE, then decide what kind of cell it is."}</p>
        <div class="cl-myst">${SPEC.map(s => { const v = a[s.k] || {}, cl = v.c || [], ok = v.t === s.type && same(cl, s.clues);
          return `<div class="cl-sp ${chk ? (ok ? "ok" : "no") : ""}"><b>🔬 ${s.name} (40x)</b><svg viewBox="0 0 230 150" data-msv="${s.k}">${s.draw(0)}</svg>
            <div class="ck">${CLUES.map(c => `<label><input type="checkbox" data-mc="${s.k}|${c}" ${cl.includes(c) ? "checked" : ""} ${chk ? "disabled" : ""}> ${c}</label>`).join("")}</div>
            <select data-mt="${s.k}" ${chk ? "disabled" : ""} aria-label="${s.name} cell type"><option value="">This is a…</option>${TYPES.map(o => `<option ${v.t === o ? "selected" : ""}>${o}</option>`).join("")}</select>
            ${chk ? `<span class="small">${v.t === s.type ? "✅" : "❌"} type · ${same(cl, s.clues) ? "✅" : "❌"} clues${ok ? "" : ` <span class="mu">(look again: ${s.type === "Plant cell" ? "a cell wall and a big vacuole mean plant, even without green chloroplasts" : s.type === "Animal cell" ? "a nucleus but no cell wall means animal" : "no nucleus means prokaryote"})</span>`}</span>` : ""}</div>`; }).join("")}</div>
        ${chk ? `<p class="score">Correct: <b>${BT.mystery.right(st)} / ${SPEC.length * 2}</b> (type + clues for each specimen).</p><div class="btnrow"><button class="btn ghost" data-myfix>✏️ Try again</button></div>` : `<div class="btnrow"><button class="btn" data-mycheck>Check my answers</button><span class="msg"></span></div>`}</div>`;
    },
    right(st) { const a = st.a || {}; let n = 0; SPEC.forEach(s => { const v = a[s.k] || {}; if (v.t === s.type) n++; if (same(v.c || [], s.clues)) n++; }); return n; },
    wire(root, b, st, save, redraw) {
      $$("[data-mc]", root).forEach(x => x.onchange = () => { const [k, c] = x.dataset.mc.split("|"); st.a = st.a || {}; const v = st.a[k] = st.a[k] || {}; v.c = (v.c || []).filter(y => y !== c); if (x.checked) v.c.push(c); save(); });
      $$("[data-mt]", root).forEach(x => x.onchange = () => { st.a = st.a || {}; (st.a[x.dataset.mt] = st.a[x.dataset.mt] || {}).t = x.value; save(); });
      const c = $("[data-mycheck]", root); if (c) c.onclick = () => { if (SPEC.some(s => !((st.a || {})[s.k] || {}).t)) { $(".msg", root).textContent = "Choose a cell type for every specimen first."; return; } st.checked = true; save(); redraw(); };
      const f = $("[data-myfix]", root); if (f) f.onclick = () => { st.checked = false; save(); redraw(); };
      if (REDUCED) return;
      const t0 = performance.now(); const loop = now => { if (!root.isConnected) return; const t = (now - t0) / 1000; SPEC.forEach(s => { const sv = $(`[data-msv="${s.k}"]`, root); if (sv && (s.k === "elodea" || s.k === "ecoli")) sv.innerHTML = s.draw(t); }); requestAnimationFrame(loop); }; requestAnimationFrame(loop);
    },
    score(b, st) { return { max: b.max || 4, pts: st.checked ? Math.round((b.max || 4) * BT.mystery.right(st) / (SPEC.length * 2)) : 0, label: "mystery cells" }; },
    text(b, st) { const a = st.a || {}; return SPEC.map(s => { const v = a[s.k] || {}; return `${s.name}: ${v.t || "-"} [${(v.c || []).join(", ")}]`; }).join(" | "); }
  };
});
