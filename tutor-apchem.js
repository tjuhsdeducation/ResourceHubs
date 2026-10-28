/* =====================================================================
   ✏️ TUTOR GUIDE: AP CHEMISTRY (shown on tutor-math.html, tutors only)
   Follows the 9 units of the College Board AP Chemistry course.
   Same format as the other tutor files (see the top of tutor-alg1.js).
   R = 0.08206 L·atm/(mol·K), F = 96,485 C/mol, Kw = 1.0 × 10⁻¹⁴.
   Visuals marked "ACV_..." are drawn at the bottom of this file.
   ===================================================================== */
(window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(

/* ---------------- UNIT 1 ---------------- */
{ id: "ac-01", course: "AP Chemistry", unit: 1, title: "Atomic Structure & Properties (Mass Spectra, PES, Coulomb’s Law)", standards: "AP Chemistry Unit 1",
  bigIdea: "AP Chemistry starts by asking “how do we know?” Mass spectrometry shows the isotopes of an element; photoelectron spectroscopy (PES) shows how electrons are arranged in shells. Nearly every periodic trend is explained by one idea, Coulomb’s law: the attraction between the nucleus and an electron gets stronger with more protons (effective nuclear charge) and weaker with more distance (more shells).",
  tips: "AP free responses want <b>explanations, not just answers</b>. For any trend question, have the student use this sentence frame: “___ has a higher ___ because it has more protons / fewer shells, so its valence electrons feel a stronger Coulombic attraction to the nucleus.” Saying “because it’s farther right on the table” earns no credit.",
  vocab: [
    ["mass spectrum", "A graph of isotope mass vs. relative abundance. Use it to calculate average atomic mass."],
    ["photoelectron spectrum (PES)", "Peaks show electrons in each subshell. Peak position = binding energy (higher = closer to the nucleus); peak height = number of electrons."],
    ["Coulomb’s law", "F ∝ q₁q₂/r². Bigger charges → stronger attraction; bigger distance → weaker."],
    ["effective nuclear charge (Z<sub>eff</sub>)", "The pull a valence electron actually feels: protons minus the shielding by inner (core) electrons."],
    ["shielding", "Inner electrons block some of the nucleus’s pull from outer electrons."],
    ["ionization energy (IE)", "Energy to remove an electron. A huge jump between IEs means you’ve started removing core electrons."],
    ["empirical formula", "Simplest whole-number ratio of atoms, found from percent composition or combustion data."],
    ["mole / Avogadro’s number", "6.022 × 10²³ particles."]
  ],
  steps: [
    { name: "Average atomic mass from a mass spectrum", list: ["Read each isotope mass and its percent abundance.", "Convert percents to decimals.", "Multiply each mass by its abundance and add.", "Check: the answer is closest to the most abundant isotope."] },
    { name: "Reading a PES spectrum", list: ["Peaks on the left (high binding energy) are the core electrons (1s).", "Each peak is a subshell: 1s, 2s, 2p, 3s, 3p, …", "Relative peak height = number of electrons in that subshell (s up to 2, p up to 6).", "Write the configuration and identify the element by counting electrons."] },
    { name: "Explaining a trend (the AP way)", list: ["Name what is different: number of protons, number of shells (distance), or shielding.", "Connect to Coulomb’s law: stronger or weaker attraction.", "Connect to the property asked about (radius, IE, electronegativity)."] }
  ],
  examples: [
    { q: "A mass spectrum of copper shows peaks at 63 amu (69.2%) and 65 amu (30.8%). Find the average atomic mass.", steps: ["0.692 × 63 = 43.60.", "0.308 × 65 = 20.02.", "Total = 63.62."], answer: "≈ 63.6 amu" },
    { q: "A PES spectrum shows peaks with relative heights 2, 2, 6, 2, 1 (from high to low binding energy). Identify the element.", steps: ["Peaks → 1s², 2s², 2p⁶, 3s², 3p¹.", "Total electrons: 2 + 2 + 6 + 2 + 1 = 13.", "Element 13 is aluminum."], answer: "Aluminum (1s² 2s² 2p⁶ 3s² 3p¹)" },
    { q: "Explain why Mg has a higher first ionization energy than Na.", steps: ["Both have valence electrons in the n = 3 shell (about the same distance, same core shielding).", "Mg has 12 protons; Na has 11. Mg’s Z<sub>eff</sub> is greater.", "By Coulomb’s law, Mg’s valence electrons are attracted more strongly, so more energy is needed to remove one."], answer: "Same shell and shielding, but more protons → stronger attraction → higher IE" },
    { q: "Mg’s ionization energies: IE₁ = 738, IE₂ = 1451, IE₃ = 7733 kJ/mol. Explain the big jump.", steps: ["Mg has 2 valence electrons (3s²).", "IE₁ and IE₂ remove those valence electrons.", "IE₃ removes a 2p core electron, which is in a lower shell, much closer to the nucleus and less shielded.", "Much stronger attraction → huge jump."], answer: "The third electron comes from the core (n = 2), which is held much more tightly." },
    { q: "A hydrocarbon is 85.6% C and 14.4% H by mass. Find the empirical formula.", steps: ["Assume 100 g: 85.6 g C and 14.4 g H.", "C: 85.6/12.01 = 7.13 mol. H: 14.4/1.01 = 14.3 mol.", "Divide by the smaller: C 1, H 2.00."], answer: "CH₂" }
  ],
  mistakes: [
    ["Explains trends with location only (“it’s further right”).", "“That’s where it is, but WHY? Talk about protons, shells, and attraction.”"],
    ["Says more electrons make an atom bigger across a period.", "“Electrons are added to the same shell while protons increase. What does a stronger pull do?”"],
    ["Reads PES peak height as energy.", "“Position (left-right) is energy. Height is the number of electrons.”"],
    ["Thinks the leftmost PES peak is the valence shell.", "“High binding energy means it’s hard to remove. Are those the inner or outer electrons?”"],
    ["Uses ‘shielding’ to explain differences across a period.", "“Across a period, the core electrons stay the same. Is shielding really changing?”"]
  ],
  ask: ["What’s different between these two atoms: protons, shells, or shielding?", "How does Coulomb’s law apply here?", "Which PES peak is the valence electrons?", "Where is the big jump in ionization energy? What does it tell you?", "Can you write the answer as a ‘because…’ sentence?"],
  check: [
    { q: "Which has a larger radius, K or Ca? Why?", a: "K: same shell, but fewer protons → weaker attraction." },
    { q: "In PES, what does a peak twice as tall mean?", a: "Twice as many electrons in that subshell." },
    { q: "Which IE jump would identify a group 1 element?", a: "Big jump between IE₁ and IE₂" }
  ],
  visual: "ACV_PES" },

/* ---------------- UNIT 2 ---------------- */
{ id: "ac-02", course: "AP Chemistry", unit: 2, title: "Compound Structure & Properties (Bonding, Lewis, VSEPR, Formal Charge)", standards: "AP Chemistry Unit 2",
  bigIdea: "The type of bond (ionic, covalent, metallic) explains a substance’s properties. Lewis structures, formal charge, and resonance show where electrons are. VSEPR predicts 3-D shape, which decides polarity. A potential energy diagram shows bond length (the lowest point) and bond energy (how deep the well is).",
  tips: "For any molecule question, run the same routine: <b>count valence electrons → draw the Lewis structure → check formal charges → count electron domains → name the shape and angle → decide polarity</b>. When there are several possible Lewis structures, the best one has formal charges closest to zero (and any negative charge on the more electronegative atom).",
  vocab: [
    ["ionic / covalent / metallic", "Transfer of electrons (metal + nonmetal) / sharing (nonmetals) / a sea of delocalized electrons (metals)."],
    ["formal charge", "FC = valence electrons − (lone-pair electrons + ½ bonding electrons). Best structure: FCs closest to 0."],
    ["resonance", "When more than one valid Lewis structure exists, the real molecule is an average (bond lengths are equal)."],
    ["electron domains", "Bonds (single, double, triple each count once) + lone pairs around the central atom."],
    ["VSEPR shapes", "2 → linear; 3 → trigonal planar/bent; 4 → tetrahedral/trigonal pyramidal/bent; 5 → trigonal bipyramidal/seesaw/T-shaped/linear; 6 → octahedral/square pyramidal/square planar."],
    ["hybridization", "2 domains sp, 3 domains sp², 4 domains sp³."],
    ["σ and π bonds", "Single = 1σ. Double = 1σ + 1π. Triple = 1σ + 2π."],
    ["potential energy vs. distance", "The minimum of the curve = bond length; depth = bond energy. Smaller atoms and more bonds → shorter, stronger bonds."],
    ["alloys", "Interstitial (small atoms in the gaps, like C in steel: harder) vs. substitutional (similar-sized atoms swapped in, like brass)."]
  ],
  steps: [
    { name: "Lewis structure + shape", list: ["Total valence electrons (add for − charge, subtract for +).", "Least electronegative atom in the center; single bonds to each outer atom.", "Complete outer octets, then put extra electrons on the center (elements in period 3 and below can expand past 8).", "Make multiple bonds if the center is short of an octet.", "Check formal charges; pick the structure with FCs closest to 0.", "Count domains on the center → shape, angle, hybridization."] }
  ],
  examples: [
    { q: "Draw the resonance structures of NO₃⁻ and find the formal charges.", steps: ["Valence electrons: 5 + 3(6) + 1 = 24.", "N in the center with one double bond and two single bonds to O.", "N: 5 − (0 + 4) = +1. Double-bonded O: 6 − (4 + 2) = 0. Single-bonded O: 6 − (6 + 1) = −1 (two of them).", "The double bond can be on any of the 3 oxygens → 3 resonance structures. All N–O bonds are actually the same length."], answer: "3 resonance structures; N +1, two O −1, one O 0 (net −1)" },
    { q: "Find the shape of SF₄.", steps: ["Valence: 6 + 4(7) = 34.", "4 S–F bonds use 8; each F gets 3 lone pairs (24). Total used 32.", "2 left → 1 lone pair on S (S expands its octet).", "5 domains: 4 bonds + 1 lone pair → seesaw."], answer: "Seesaw (polar)" },
    { q: "How many σ and π bonds are in ethylene, C₂H₄? What is the hybridization of carbon?", steps: ["Structure: H₂C=CH₂. Four C–H single bonds and one C=C double bond.", "σ: 4 (C–H) + 1 (in C=C) = 5. π: 1 (in C=C).", "Each C has 3 domains → sp²."], answer: "5 σ, 1 π; sp² carbons" },
    { q: "Explain why NaCl has a much higher melting point than CH₄.", steps: ["NaCl is ionic: a lattice of Na⁺ and Cl⁻ held by strong Coulombic attractions.", "CH₄ is a nonpolar molecule held to other molecules by weak London dispersion forces.", "Melting NaCl breaks ionic attractions; melting CH₄ only overcomes weak intermolecular forces."], answer: "Strong ionic attractions vs. weak dispersion forces between molecules" }
  ],
  mistakes: [
    ["Confuses bonds within a molecule with forces between molecules.", "“When ice melts, do the O–H bonds break, or do the molecules just separate?”"],
    ["Picks the shape from the number of atoms, ignoring lone pairs.", "“Count the lone pairs on the center too. They take up space.”"],
    ["Says a molecule with polar bonds is always polar.", "“Is the shape symmetric? Do the bond dipoles cancel?”"],
    ["Thinks resonance means the molecule flips back and forth.", "“The real structure is one average of all of them, all the time.”"],
    ["Gives a central atom more than 8 electrons in period 2.", "“Carbon, nitrogen, and oxygen can’t expand their octet. Only period 3 and below can.”"]
  ],
  ask: ["How many total valence electrons?", "What are the formal charges? Can you make them closer to zero?", "How many electron domains are on the center? How many are lone pairs?", "Is the shape symmetric?", "Is the question about bonds inside molecules or attractions between them?"],
  check: [
    { q: "Shape of XeF₄?", a: "Square planar (4 bonds, 2 lone pairs)" },
    { q: "σ and π bonds in N₂?", a: "1 σ, 2 π" },
    { q: "On a PE vs. distance graph, what does the minimum show?", a: "The bond length (and the depth = bond energy)" }
  ],
  visual: "ACV_PE" },

/* ---------------- UNIT 3 ---------------- */
{ id: "ac-03", course: "AP Chemistry", unit: 3, title: "Properties of Substances & Mixtures (IMFs, Gases, Solutions, Spectroscopy)", standards: "AP Chemistry Unit 3",
  bigIdea: "Intermolecular forces (IMFs) explain physical properties: stronger IMFs → higher boiling point, lower vapor pressure. Gases follow PV = nRT when particles are far apart and attractions don’t matter. Spectroscopy and Beer’s law let chemists measure concentration with light.",
  tips: "For any “which has the higher boiling point” question, have the student <b>name the strongest IMF in each substance</b> first, then compare. If both have the same IMF type, compare the number of electrons (more electrons → more polarizable → stronger dispersion forces). Stress that every molecule has London dispersion forces.",
  vocab: [
    ["London dispersion forces", "Temporary dipoles. In every substance. Stronger with more electrons (bigger electron cloud, more polarizable)."],
    ["dipole–dipole", "Between polar molecules."],
    ["hydrogen bonding", "Strong dipole attraction when H is bonded to N, O, or F and attracted to a lone pair on another N, O, or F."],
    ["ideal gas law", "PV = nRT. Also M = dRT/P (molar mass from density)."],
    ["Dalton’s law", "P<sub>total</sub> = P₁ + P₂ + …; P<sub>A</sub> = (mole fraction of A) × P<sub>total</sub>."],
    ["kinetic molecular theory", "Average kinetic energy ∝ Kelvin temperature. At the same T, lighter molecules move faster."],
    ["real gases", "Deviate from ideal at HIGH pressure (molecules take up space) and LOW temperature (attractions matter)."],
    ["Beer–Lambert law", "A = εbc. Absorbance is proportional to concentration."],
    ["chromatography / distillation", "Separate mixtures using differences in IMFs (polarity) or boiling points."]
  ],
  steps: [
    { name: "Comparing boiling points (or vapor pressure)", list: ["Identify the IMFs in each substance (dispersion always; dipole if polar; H-bonding if H–N, H–O, or H–F).", "Stronger IMFs → higher boiling point, higher viscosity, lower vapor pressure.", "Same IMF type → compare electron count (dispersion) or polarity.", "Explain in a sentence using the names of the forces."] },
    { name: "Gas calculations", list: ["Convert: T to K, V to L, P to atm (if using R = 0.08206).", "PV = nRT for one set of conditions; combined gas law for changes.", "Partial pressure = mole fraction × total pressure."] }
  ],
  examples: [
    { q: "Rank by boiling point: CH₄, HF, Ne. Explain.", steps: ["CH₄: nonpolar → dispersion only (10 electrons).", "Ne: atom → dispersion only (10 electrons).", "HF: hydrogen bonding (H bonded to F).", "CH₄ and Ne have similar dispersion forces (similar electron counts, both very low boiling points); HF is much higher."], answer: "HF highest (hydrogen bonding); CH₄ and Ne are both very low (dispersion only)" },
    { q: "A gas has a density of 1.25 g/L at STP (273 K, 1.00 atm). Find its molar mass.", steps: ["M = dRT/P.", "M = (1.25)(0.08206)(273)/1.00.", "= 28.0 g/mol (probably N₂)."], answer: "28.0 g/mol" },
    { q: "A container holds 2.0 mol N₂ and 1.0 mol O₂ at a total pressure of 3.0 atm. Find the partial pressure of O₂.", steps: ["Mole fraction of O₂ = 1.0/3.0.", "P<sub>O₂</sub> = (1/3)(3.0 atm)."], answer: "1.0 atm" },
    { q: "A solution has absorbance 0.40 in a 1.0 cm cuvette. ε = 200 M⁻¹cm⁻¹. Find the concentration.", steps: ["A = εbc → c = A/(εb).", "c = 0.40/(200 × 1.0)."], answer: "2.0 × 10⁻³ M" },
    { q: "Under what conditions does a gas behave least ideally? Why?", steps: ["High pressure: molecules are close together, so their own volume matters.", "Low temperature: molecules move slowly, so attractions between them matter."], answer: "High pressure and low temperature" }
  ],
  mistakes: [
    ["Says boiling breaks covalent bonds.", "“When water boils, is it still H₂O in the steam? What gets overcome?”"],
    ["Calls any molecule with H ‘hydrogen bonding’.", "“Hydrogen bonding needs H bonded directly to N, O, or F. Is it here?”"],
    ["Forgets dispersion forces exist in polar molecules.", "“Every molecule has dispersion forces. Could they be the bigger factor here?”"],
    ["Uses °C in PV = nRT.", "“The gas constant uses Kelvin. Add 273.”"],
    ["Thinks a bigger molecule has a lower boiling point because it’s heavier.", "“More electrons → stronger dispersion forces. Which way does that push the boiling point?”"]
  ],
  ask: ["What is the strongest IMF in each substance?", "Is the molecule polar? Is there an H bonded to N, O, or F?", "If the IMF types are the same, which has more electrons?", "Are your units ready for R = 0.08206?", "What does Beer’s law say about absorbance and concentration?"],
  check: [
    { q: "Which has a higher boiling point, Br₂ or Cl₂? Why?", a: "Br₂: more electrons → stronger dispersion forces." },
    { q: "Stronger IMFs → vapor pressure is…?", a: "Lower" },
    { q: "Two gases at the same T: which molecules move faster?", a: "The lighter ones (same average KE)." }
  ],
  visual: "ACV_MB" },

/* ---------------- UNIT 4 ---------------- */
{ id: "ac-04", course: "AP Chemistry", unit: 4, title: "Chemical Reactions (Net Ionic Equations, Stoichiometry, Titration, Redox)", standards: "AP Chemistry Unit 4",
  bigIdea: "AP Chemistry writes reactions the way they really happen in water: as net ionic equations, showing only the particles that change. Stoichiometry and titrations use mole ratios to connect amounts. The three big reaction types are precipitation, acid–base, and oxidation–reduction (redox).",
  tips: "For net ionic equations: <b>only strong electrolytes split into ions</b> (soluble ionic compounds, strong acids, strong bases). Solids, liquids, gases, and weak acids/bases stay together. Then cross out ions that look exactly the same on both sides (spectators). Have the student draw a quick particle picture if they’re unsure what is dissolved.",
  vocab: [
    ["net ionic equation", "Shows only the species that actually react; spectator ions are removed."],
    ["spectator ion", "An ion that is the same (dissolved) on both sides."],
    ["solubility rules (AP)", "All Na⁺, K⁺, NH₄⁺, and NO₃⁻ compounds are soluble. (AP expects you to know these; others are given.)"],
    ["strong acids", "HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ (ionize completely)."],
    ["oxidation / reduction", "Oxidation = loss of electrons (oxidation number goes up). Reduction = gain (goes down). “OIL RIG.”"],
    ["oxidizing / reducing agent", "The oxidizing agent gets reduced; the reducing agent gets oxidized."],
    ["equivalence point", "Moles of acid = moles of base (by the reaction’s ratio) in a titration."],
    ["limiting reactant", "Runs out first and determines the theoretical yield."]
  ],
  steps: [
    { name: "Writing a net ionic equation", list: ["Write the balanced molecular equation with states.", "Split only strong electrolytes (aq) into ions.", "Keep solids, liquids, gases, and weak electrolytes together.", "Cancel spectator ions.", "Check: atoms AND charges balance."] },
    { name: "Titration math", list: ["Moles of titrant = M × V(L).", "Use the mole ratio from the balanced equation.", "Concentration of unknown = moles ÷ volume (L)."] },
    { name: "Oxidation numbers", list: ["Elements alone = 0. Monatomic ions = their charge.", "O is usually −2; H is usually +1; F is always −1.", "The numbers add up to the overall charge.", "The species whose number goes up is oxidized; down is reduced."] }
  ],
  examples: [
    { q: "Write the net ionic equation for mixing AgNO₃(aq) and NaCl(aq).", steps: ["Molecular: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq).", "Ionic: Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl(s) + Na⁺ + NO₃⁻.", "Cancel spectators Na⁺ and NO₃⁻."], answer: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)" },
    { q: "Write the net ionic equation for HCl(aq) + NaOH(aq).", steps: ["Both are strong, so both split: H⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + H₂O(l).", "Cancel Na⁺ and Cl⁻."], answer: "H⁺(aq) + OH⁻(aq) → H₂O(l)" },
    { q: "22.0 mL of 0.150 M NaOH neutralizes 25.0 mL of HCl. Find [HCl].", steps: ["mol NaOH = 0.150 × 0.0220 = 0.00330 mol.", "1 : 1 ratio → 0.00330 mol HCl.", "[HCl] = 0.00330/0.0250 = 0.132 M."], answer: "0.132 M" },
    { q: "In Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), what is oxidized and what is reduced?", steps: ["Zn: 0 → +2 (lost electrons) → oxidized; it’s the reducing agent.", "Cu: +2 → 0 (gained electrons) → reduced; Cu²⁺ is the oxidizing agent."], answer: "Zn is oxidized; Cu²⁺ is reduced" },
    { q: "10.0 g of H₂ reacts with 64.0 g of O₂ (2H₂ + O₂ → 2H₂O). Find the limiting reactant and the mass of water formed.", steps: ["mol H₂ = 10.0/2.02 = 4.95. mol O₂ = 64.0/32.00 = 2.00.", "H₂ would need 4.95/2 = 2.48 mol O₂, but only 2.00 is there → O₂ is limiting.", "Water: 2.00 mol O₂ × 2 = 4.00 mol × 18.02 g/mol = 72.1 g."], answer: "O₂ limiting; 72.1 g H₂O" }
  ],
  mistakes: [
    ["Splits a solid precipitate into ions.", "“Is AgCl dissolved? If it’s a solid, it stays together.”"],
    ["Splits a weak acid, like CH₃COOH, completely into ions.", "“Is it on the strong acid list? If not, it stays mostly as molecules.”"],
    ["Forgets to check charge balance.", "“Add up the charges on each side. Do they match?”"],
    ["Mixes up ‘oxidizing agent’ with ‘what is oxidized.’", "“The oxidizing agent causes oxidation in something else, so it gets reduced itself.”"],
    ["Uses mL in the mole calculation.", "“Molarity is per liter. Convert mL to L first.”"]
  ],
  ask: ["Which substances are strong electrolytes (actually split into ions)?", "What’s the state of each product?", "Which ions are the same on both sides?", "Which element’s oxidation number went up?", "What’s the mole ratio at the equivalence point?"],
  check: [
    { q: "Spectator ions in Ba(NO₃)₂ + Na₂SO₄ → BaSO₄(s) + 2NaNO₃?", a: "Na⁺ and NO₃⁻" },
    { q: "Oxidation number of Mn in MnO₄⁻?", a: "+7" },
    { q: "Is HF a strong acid?", a: "No (weak); it stays mostly as HF molecules." }
  ],
  visual: "ACV_NIE" },

/* ---------------- UNIT 5 ---------------- */
{ id: "ac-05", course: "AP Chemistry", unit: 5, title: "Kinetics (Rate Laws, Integrated Rate Laws, Mechanisms)", standards: "AP Chemistry Unit 5",
  bigIdea: "Kinetics is about HOW FAST reactions go. The rate law (rate = k[A]ᵐ[B]ⁿ) must be found from experiments, not from the balanced equation. Integrated rate laws connect concentration and time, and the order can be found from which graph is a straight line. A mechanism is the series of steps; the slowest step controls the rate.",
  tips: "For initial-rate tables, teach the <b>“what happens when I double it?”</b> trick: find two trials where only one concentration changes. If doubling it doubles the rate → 1st order; quadruples → 2nd order; no change → zero order. Remind the student that the exponents in the rate law come from data, not coefficients (except for elementary steps).",
  vocab: [
    ["rate law", "rate = k[A]ᵐ[B]ⁿ. m and n are the orders; overall order = m + n."],
    ["rate constant k", "Depends on temperature (and catalyst), not on concentration. Units depend on the overall order."],
    ["zero / first / second order", "Straight line for [A] vs. t / ln[A] vs. t / 1/[A] vs. t."],
    ["half-life (first order)", "t½ = 0.693/k. Constant: it doesn’t depend on the starting concentration."],
    ["elementary step", "One single collision step. Its rate law CAN be written from its coefficients."],
    ["rate-determining step", "The slowest step in a mechanism. The overall rate law matches it."],
    ["intermediate vs. catalyst", "Intermediate: made in one step, used up in a later step. Catalyst: used in an early step, made again later."],
    ["activation energy / Arrhenius", "Higher T → more collisions have energy ≥ Eₐ → faster rate (larger k). A catalyst lowers Eₐ."]
  ],
  steps: [
    { name: "Method of initial rates", list: ["Pick two trials where only [A] changes.", "Ratio of concentrations → ratio of rates: (conc ratio)ᵐ = rate ratio. Solve for m.", "Repeat for [B].", "Write the rate law. Plug one trial’s data in to solve for k (with units)."] },
    { name: "Finding order from graphs", list: ["Plot [A], ln[A], and 1/[A] vs. time.", "The straight-line graph gives the order (0, 1, or 2).", "k comes from the slope: −k for zero and first order, +k for second order."] },
    { name: "Checking a mechanism", list: ["Add the steps; cancel anything on both sides. The result must equal the overall equation.", "Find the slow step. Write its rate law from its coefficients.", "If that rate law contains an intermediate, your teacher may ask you to substitute it out using a fast equilibrium step."] }
  ],
  examples: [
    { q: "Trial 1: [A] = 0.10, [B] = 0.10, rate = 2.0 × 10⁻³. Trial 2: [A] = 0.20, [B] = 0.10, rate = 8.0 × 10⁻³. Trial 3: [A] = 0.10, [B] = 0.20, rate = 4.0 × 10⁻³ M/s. Find the rate law and k.", steps: ["Trials 1 → 2: [A] doubles, rate ×4 → 2ᵐ = 4 → m = 2.", "Trials 1 → 3: [B] doubles, rate ×2 → n = 1.", "rate = k[A]²[B].", "k = 2.0 × 10⁻³ / (0.10² × 0.10) = 2.0 × 10⁻³ / 0.0010 = 2.0 M⁻²s⁻¹."], answer: "rate = k[A]²[B]; k = 2.0 M⁻² s⁻¹" },
    { q: "A first-order reaction has k = 0.0231 s⁻¹. Find the half-life and the fraction left after 90 s.", steps: ["t½ = 0.693/k = 0.693/0.0231 = 30.0 s.", "90 s = 3 half-lives.", "(1/2)³ = 1/8."], answer: "t½ = 30.0 s; 1/8 remains" },
    { q: "A plot of ln[A] vs. time is a straight line with slope −0.050 min⁻¹. What is the order and k?", steps: ["ln[A] linear → first order.", "Slope = −k → k = 0.050 min⁻¹."], answer: "First order; k = 0.050 min⁻¹" },
    { q: "Mechanism: Step 1 (slow): NO₂ + NO₂ → NO₃ + NO. Step 2 (fast): NO₃ + CO → NO₂ + CO₂. Find the overall reaction, the intermediate, and the rate law.", steps: ["Add: 2NO₂ + NO₃ + CO → NO₃ + NO + NO₂ + CO₂. Cancel NO₃ and one NO₂.", "Overall: NO₂ + CO → NO + CO₂.", "NO₃ is made then used → intermediate.", "Slow step is elementary: rate = k[NO₂]²."], answer: "NO₂ + CO → NO + CO₂; NO₃ is the intermediate; rate = k[NO₂]²" }
  ],
  mistakes: [
    ["Uses coefficients of the overall equation as orders.", "“Is the overall equation an elementary step? The rate law has to come from the data.”"],
    ["Compares two trials where both concentrations changed.", "“Find two trials where only ONE thing changes.”"],
    ["Thinks k changes when concentration changes.", "“k only changes with temperature or a catalyst.”"],
    ["Confuses intermediates and catalysts.", "“Which one appears first as a product? Which appears first as a reactant?”"],
    ["Says a catalyst shifts equilibrium or changes ΔH.", "“A catalyst speeds up both directions equally. Does it change where you end up?”"]
  ],
  ask: ["Which two trials change only one concentration?", "When that concentration doubled, what happened to the rate?", "Which graph is linear?", "Which step is slow?", "Is that species an intermediate or a catalyst?"],
  check: [
    { q: "Doubling [A] has no effect on rate. Order in A?", a: "Zero order" },
    { q: "Graph of 1/[A] vs. t is linear. Order?", a: "Second order" },
    { q: "Units of k for a first-order reaction?", a: "s⁻¹ (1/time)" }
  ],
  visual: "ACV_KIN" },

/* ---------------- UNIT 6 ---------------- */
{ id: "ac-06", course: "AP Chemistry", unit: 6, title: "Thermochemistry (Calorimetry, Hess’s Law, Bond Enthalpies, ΔH°f)", standards: "AP Chemistry Unit 6",
  bigIdea: "Energy is conserved: heat lost by one thing is gained by another. Calorimetry measures that heat (q = mcΔT). Enthalpy change (ΔH) can be found several ways: from calorimetry, from bond energies (break bonds costs energy, make bonds releases it), from Hess’s law (adding reactions), or from standard enthalpies of formation.",
  tips: "Signs cause most errors. Teach: <b>q<sub>reaction</sub> = −q<sub>solution</sub></b>. If the water gets hotter, the reaction released heat, so ΔH is negative. For bond enthalpies the order flips from the formation method: ΔH = <b>bonds broken − bonds formed</b> (reactants − products). For ΔH°f it’s <b>products − reactants</b>.",
  vocab: [
    ["system / surroundings", "System = the reaction. Surroundings = everything else (often the water in a calorimeter)."],
    ["q = mcΔT", "Heat in J. For dilute solutions, use c = 4.18 J/(g·°C) and the total mass of solution."],
    ["ΔH (enthalpy change)", "Heat at constant pressure, usually in kJ/mol of reaction. Negative = exothermic."],
    ["heat transfer between objects", "q<sub>lost</sub> = −q<sub>gained</sub>; both end at the same final temperature."],
    ["Hess’s law", "If you add reactions, add their ΔH values. Reverse a reaction → flip the sign. Multiply a reaction → multiply ΔH."],
    ["bond enthalpy", "Energy to break 1 mol of a bond (always positive). ΔH ≈ Σ(bonds broken) − Σ(bonds formed)."],
    ["standard enthalpy of formation ΔH°f", "ΔH to form 1 mol of a compound from its elements in standard states. Elements = 0."],
    ["phase changes", "Melting and boiling absorb energy (endothermic) to overcome IMFs; temperature stays constant during the change."]
  ],
  steps: [
    { name: "Coffee-cup calorimetry", list: ["q<sub>solution</sub> = m × 4.18 × ΔT (mass of ALL the solution).", "q<sub>reaction</sub> = −q<sub>solution</sub>.", "Find moles of the limiting reactant.", "ΔH = q<sub>reaction</sub> / moles (convert J to kJ)."] },
    { name: "Hess’s law", list: ["Look at the target equation. Find where each substance appears in the given equations.", "Reverse or multiply the given equations so substances end up on the correct side with the right coefficients.", "Change ΔH the same way (flip sign / multiply).", "Add the equations (cancel) and add the ΔH values."] },
    { name: "Using ΔH°f", list: ["ΔH°rxn = Σ n ΔH°f(products) − Σ n ΔH°f(reactants).", "Multiply each ΔH°f by its coefficient. Elements in standard state (O₂, H₂…) = 0."] }
  ],
  examples: [
    { q: "50.0 mL of 1.0 M HCl and 50.0 mL of 1.0 M NaOH are mixed. The temperature rises 6.7 °C. Find ΔH of neutralization per mole of water (assume 100. g of solution, c = 4.18).", steps: ["q<sub>solution</sub> = (100.)(4.18)(6.7) = 2800 J.", "q<sub>rxn</sub> = −2800 J.", "Moles of water formed = 0.0500 L × 1.0 M = 0.050 mol.", "ΔH = −2.80 kJ / 0.050 mol = −56 kJ/mol."], answer: "≈ −56 kJ/mol" },
    { q: "A 50.0 g metal at 100.0 °C is dropped into 100.0 g of water at 20.0 °C. The final temperature is 25.0 °C. Find the metal’s specific heat.", steps: ["Water gains: q = 100.0 × 4.18 × 5.0 = 2090 J.", "Metal loses 2090 J: −2090 = 50.0 × c × (25.0 − 100.0).", "c = 2090 / (50.0 × 75.0) = 0.557 J/(g·°C)."], answer: "0.557 J/(g·°C)" },
    { q: "Estimate ΔH for H₂ + Cl₂ → 2HCl. Bond enthalpies: H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol.", steps: ["Broken: 1 H–H + 1 Cl–Cl = 436 + 242 = 678 kJ.", "Formed: 2 H–Cl = 862 kJ.", "ΔH = 678 − 862."], answer: "−184 kJ" },
    { q: "Given C + O₂ → CO₂, ΔH = −393.5 kJ and CO + ½O₂ → CO₂, ΔH = −283.0 kJ. Find ΔH for C + ½O₂ → CO.", steps: ["Keep the first equation: C + O₂ → CO₂ (−393.5).", "Reverse the second: CO₂ → CO + ½O₂ (+283.0).", "Add: C + ½O₂ → CO (CO₂ and ½O₂ cancel).", "ΔH = −393.5 + 283.0."], answer: "−110.5 kJ" },
    { q: "Find ΔH° for CH₄ + 2O₂ → CO₂ + 2H₂O(l). ΔH°f: CH₄ −74.8, CO₂ −393.5, H₂O(l) −285.8 kJ/mol.", steps: ["Products: −393.5 + 2(−285.8) = −965.1.", "Reactants: −74.8 + 2(0) = −74.8.", "ΔH° = −965.1 − (−74.8)."], answer: "−890.3 kJ" }
  ],
  mistakes: [
    ["Uses only the mass of one solution (50 g) instead of the total.", "“Both solutions are in the cup getting warmer. What is the total mass?”"],
    ["Gives a positive ΔH when the water got hotter.", "“If the surroundings gained heat, did the reaction gain or lose it?”"],
    ["Does products − reactants with bond enthalpies.", "“Bond enthalpies: breaking costs energy, forming releases it. It’s broken minus formed.”"],
    ["Forgets to flip the sign when reversing an equation in Hess’s law.", "“If forward releases 283 kJ, what does backward do?”"],
    ["Forgets to multiply ΔH°f by coefficients.", "“There are 2 waters. How many times do we count −285.8?”"]
  ],
  ask: ["Did the solution get hotter or colder? What does that say about the reaction?", "What is the total mass being heated?", "How many moles reacted?", "For Hess’s law, which equation must be reversed or multiplied?", "Is this bond energies (broken − formed) or formation (products − reactants)?"],
  check: [
    { q: "Reverse a reaction with ΔH = +50 kJ. New ΔH?", a: "−50 kJ" },
    { q: "ΔH°f of O₂(g)?", a: "0" },
    { q: "Why does temperature stay constant while ice melts?", a: "The energy goes into overcoming IMFs (changing phase), not raising KE." }
  ],
  visual: "ACV_HESS" },

/* ---------------- UNIT 7 ---------------- */
{ id: "ac-07", course: "AP Chemistry", unit: 7, title: "Equilibrium (K, Q, ICE Tables, Le Châtelier, K<sub>sp</sub>)", standards: "AP Chemistry Unit 7",
  bigIdea: "At equilibrium, the forward and reverse rates are equal, so concentrations stop changing. The equilibrium constant K tells whether products or reactants are favored. Comparing Q (the current ratio) to K predicts which way a reaction will shift. ICE tables solve for equilibrium concentrations, and K<sub>sp</sub> applies the same ideas to dissolving salts.",
  tips: "Make every equilibrium problem an <b>ICE table</b> (Initial, Change, Equilibrium) with one column per species. The “Change” row always uses the coefficients times x. For Q vs. K: “<b>Q is too small → make more products (shift right)</b>.” Students should leave solids and pure liquids out of K expressions.",
  vocab: [
    ["equilibrium constant K", "K = [products]<sup>coefficients</sup> / [reactants]<sup>coefficients</sup>. Leave out (s) and (l)."],
    ["K<sub>c</sub> vs. K<sub>p</sub>", "K<sub>c</sub> uses molarities; K<sub>p</sub> uses partial pressures of gases."],
    ["reaction quotient Q", "Same expression as K, using current (not equilibrium) values."],
    ["Q vs. K", "Q &lt; K → shifts right (toward products). Q > K → shifts left. Q = K → at equilibrium."],
    ["manipulating K", "Reverse the reaction → 1/K. Multiply coefficients by n → Kⁿ. Add reactions → multiply K’s."],
    ["Le Châtelier’s principle", "A stressed system shifts to relieve the stress (concentration, pressure/volume, temperature). Only temperature changes the value of K."],
    ["K<sub>sp</sub>", "Solubility product: K for a solid dissolving, e.g., AgCl(s) ⇌ Ag⁺ + Cl⁻, K<sub>sp</sub> = [Ag⁺][Cl⁻]."],
    ["molar solubility (s)", "Moles of solid that dissolve per liter."],
    ["common ion effect", "Adding an ion that’s already in the equilibrium lowers solubility."]
  ],
  steps: [
    { name: "ICE table", list: ["Write the balanced equation and the K expression.", "I: initial concentrations (0 for any product not added).", "C: −x for reactants, +x for products, times their coefficients.", "E: I + C. Plug into K and solve for x (take a square root if it’s a perfect square; use a small-x approximation if K is very small).", "Find each equilibrium concentration."] },
    { name: "K<sub>sp</sub> and molar solubility", list: ["Write the dissolving equation. Ion concentrations in terms of s (using the subscripts).", "AgCl: K<sub>sp</sub> = s². CaF₂: K<sub>sp</sub> = (s)(2s)² = 4s³.", "Solve for s.", "With a common ion: the starting concentration of that ion is not 0 (so s becomes very small)."] }
  ],
  examples: [
    { q: "H₂(g) + I₂(g) ⇌ 2HI(g), K = 49. Start with 1.0 M H₂ and 1.0 M I₂. Find the equilibrium concentrations.", steps: ["I: H₂ 1.0, I₂ 1.0, HI 0. C: −x, −x, +2x. E: 1.0 − x, 1.0 − x, 2x.", "K = (2x)²/[(1.0 − x)²] = 49.", "Square root of both sides: 2x/(1.0 − x) = 7 → 2x = 7 − 7x → 9x = 7 → x = 0.778.", "[H₂] = [I₂] = 0.22 M; [HI] = 1.56 M."], answer: "[H₂] = [I₂] ≈ 0.22 M; [HI] ≈ 1.56 M" },
    { q: "For N₂ + 3H₂ ⇌ 2NH₃, K = 0.50. At one moment, Q = 0.10. Which way does the reaction shift?", steps: ["Q (0.10) &lt; K (0.50): there are too few products right now.", "The reaction shifts right to make more NH₃."], answer: "Shifts right (toward products)" },
    { q: "K<sub>sp</sub> of AgCl is 1.8 × 10⁻¹⁰. Find the molar solubility in water and in 0.10 M NaCl.", steps: ["Water: K<sub>sp</sub> = s² → s = √(1.8 × 10⁻¹⁰) = 1.3 × 10⁻⁵ M.", "In 0.10 M NaCl: [Cl⁻] starts at 0.10. K<sub>sp</sub> = (s)(0.10 + s) ≈ 0.10s.", "s = 1.8 × 10⁻¹⁰ / 0.10 = 1.8 × 10⁻⁹ M (much smaller: common ion effect)."], answer: "1.3 × 10⁻⁵ M in water; 1.8 × 10⁻⁹ M in 0.10 M NaCl" },
    { q: "K<sub>sp</sub> of CaF₂ is 3.9 × 10⁻¹¹. Find the molar solubility.", steps: ["CaF₂(s) ⇌ Ca²⁺ + 2F⁻ → [Ca²⁺] = s, [F⁻] = 2s.", "K<sub>sp</sub> = s(2s)² = 4s³.", "s³ = 3.9 × 10⁻¹¹ / 4 = 9.75 × 10⁻¹² → s = 2.1 × 10⁻⁴ M."], answer: "2.1 × 10⁻⁴ M" },
    { q: "A + B ⇌ C has K = 4.0. What is K for 2C ⇌ 2A + 2B?", steps: ["Reverse: K = 1/4.0 = 0.25.", "Multiply by 2: K = 0.25² = 0.0625."], answer: "0.0625" }
  ],
  mistakes: [
    ["Puts solids or liquids in the K expression.", "“Do pure solids and liquids have a concentration that changes? Leave them out.”"],
    ["Forgets coefficients in the change row (uses x instead of 2x).", "“For every 1 H₂ used, how many HI are made?”"],
    ["Says adding a catalyst changes K or shifts equilibrium.", "“A catalyst speeds up both directions equally. Does it change the ratio?”"],
    ["Thinks any change changes K.", "“Only temperature changes the value of K. The others just shift the position.”"],
    ["Uses s² for every K<sub>sp</sub>.", "“How many of each ion does one formula unit make? Look at the subscripts.”"]
  ],
  ask: ["Can you set up an ICE table?", "What are the coefficients in the change row?", "Is Q bigger or smaller than K?", "What stress was applied? Which direction relieves it?", "How many ions does this solid make when it dissolves?"],
  check: [
    { q: "K = 1 × 10⁻⁸. Products or reactants favored?", a: "Reactants" },
    { q: "K expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?", a: "K = [CO₂] (or K<sub>p</sub> = P<sub>CO₂</sub>)" },
    { q: "Reverse a reaction with K = 5. New K?", a: "1/5 = 0.2" }
  ],
  visual: "ACV_EQ" },

/* ---------------- UNIT 8 ---------------- */
{ id: "ac-08", course: "AP Chemistry", unit: 8, title: "Acids & Bases (pH, K<sub>a</sub>, Buffers, Titration Curves)", standards: "AP Chemistry Unit 8",
  bigIdea: "Strong acids and bases ionize completely, so pH comes straight from the concentration. Weak acids only partly ionize, so you need K<sub>a</sub> and an ICE table. A buffer (a weak acid with its conjugate base) resists pH changes. Titration curves show the whole story: the half-equivalence point (pH = pK<sub>a</sub>) and the equivalence point.",
  tips: "The first question for any acid–base problem: <b>“strong or weak?”</b> Strong → pH directly from the concentration. Weak → K<sub>a</sub> and x = √(K<sub>a</sub> × C). Buffer (both HA and A⁻ present) → Henderson–Hasselbalch. Have the student label which case it is before doing any math.",
  vocab: [
    ["pH, pOH, K<sub>w</sub>", "pH = −log[H₃O⁺], pOH = −log[OH⁻], pH + pOH = 14, K<sub>w</sub> = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C."],
    ["K<sub>a</sub> and pK<sub>a</sub>", "K<sub>a</sub> = [H₃O⁺][A⁻]/[HA]. pK<sub>a</sub> = −log K<sub>a</sub>. Smaller pK<sub>a</sub> = stronger acid."],
    ["K<sub>a</sub> × K<sub>b</sub> = K<sub>w</sub>", "For a conjugate pair. A weaker acid has a stronger conjugate base."],
    ["percent ionization", "[H₃O⁺]<sub>eq</sub>/[HA]<sub>initial</sub> × 100%. Small for weak acids."],
    ["buffer", "A weak acid and its conjugate base (or weak base and conjugate acid) in similar amounts. Resists pH changes."],
    ["Henderson–Hasselbalch", "pH = pK<sub>a</sub> + log([A⁻]/[HA])."],
    ["equivalence point", "Moles of base added = moles of acid. For weak acid + strong base, pH > 7 there."],
    ["half-equivalence point", "Half the acid has been neutralized, so [HA] = [A⁻] and pH = pK<sub>a</sub>."],
    ["indicator choice", "Choose an indicator whose pK<sub>a</sub> (color change) is close to the equivalence pH."]
  ],
  steps: [
    { name: "Weak acid pH", list: ["HA ⇌ H⁺ + A⁻. ICE: C − x, x, x.", "K<sub>a</sub> = x²/(C − x) ≈ x²/C if K<sub>a</sub> is small.", "x = √(K<sub>a</sub> · C) = [H⁺].", "pH = −log x. (Check: x should be less than 5% of C.)"] },
    { name: "Buffer pH", list: ["Identify the weak acid (HA) and its conjugate base (A⁻) and their amounts.", "If strong acid/base is added, do the reaction first (it goes to completion): update moles of HA and A⁻.", "pH = pK<sub>a</sub> + log(A⁻/HA). Moles can be used instead of molarity (same volume)."] },
    { name: "Reading a titration curve", list: ["Starting pH: tells strong vs. weak acid.", "Steep part: the equivalence point (volume tells moles of acid).", "Halfway to the equivalence volume: pH = pK<sub>a</sub>.", "Flat region before equivalence: the buffer region."] }
  ],
  examples: [
    { q: "Find the pH of 0.010 M HCl and of 0.0050 M Ba(OH)₂.", steps: ["HCl is strong: [H⁺] = 0.010 → pH = 2.00.", "Ba(OH)₂ gives 2 OH⁻ each: [OH⁻] = 0.010 → pOH = 2.00 → pH = 12.00."], answer: "pH 2.00 and pH 12.00" },
    { q: "Find the pH of 0.10 M acetic acid (K<sub>a</sub> = 1.8 × 10⁻⁵).", steps: ["Weak acid: x = √(K<sub>a</sub> · C) = √(1.8 × 10⁻⁵ × 0.10) = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M.", "pH = −log(1.34 × 10⁻³) = 2.87.", "Check: 1.34 × 10⁻³ / 0.10 = 1.3% (&lt; 5%, approximation OK)."], answer: "pH ≈ 2.87" },
    { q: "A buffer has 0.20 M acetic acid and 0.10 M acetate (pK<sub>a</sub> = 4.74). Find the pH.", steps: ["pH = pK<sub>a</sub> + log([A⁻]/[HA]) = 4.74 + log(0.10/0.20).", "log(0.5) = −0.30.", "pH = 4.44 (less than pK<sub>a</sub> because there’s more acid than base)."], answer: "pH ≈ 4.44" },
    { q: "Find K<sub>b</sub> for acetate if K<sub>a</sub> of acetic acid is 1.8 × 10⁻⁵.", steps: ["K<sub>a</sub> × K<sub>b</sub> = K<sub>w</sub>.", "K<sub>b</sub> = 1.0 × 10⁻¹⁴ / 1.8 × 10⁻⁵."], answer: "5.6 × 10⁻¹⁰" },
    { q: "25.0 mL of a weak acid is titrated with 0.100 M NaOH. Equivalence is reached at 30.0 mL, and the pH at 15.0 mL is 4.20. Find the acid’s concentration and K<sub>a</sub>.", steps: ["Moles NaOH at equivalence = 0.100 × 0.0300 = 0.00300 mol = moles of acid.", "[HA] = 0.00300/0.0250 = 0.120 M.", "15.0 mL is the half-equivalence point → pH = pK<sub>a</sub> = 4.20.", "K<sub>a</sub> = 10⁻⁴·²⁰ = 6.3 × 10⁻⁵."], answer: "0.120 M; K<sub>a</sub> ≈ 6.3 × 10⁻⁵" }
  ],
  mistakes: [
    ["Uses the weak acid concentration directly as [H⁺].", "“Is this acid strong? If it’s weak, only a little bit ionizes. We need K<sub>a</sub>.”"],
    ["Says the pH at the equivalence point is always 7.", "“What’s left at equivalence for a weak acid? The conjugate base. Is that acidic, basic, or neutral?”"],
    ["Uses Henderson–Hasselbalch before reacting the added strong base.", "“Strong base reacts completely first. What are the new moles of HA and A⁻?”"],
    ["Flips the ratio in Henderson–Hasselbalch.", "“Base over acid. If there’s more base, should the pH be above or below pK<sub>a</sub>?”"],
    ["Forgets Ba(OH)₂ makes 2 OH⁻.", "“How many hydroxides are in the formula?”"]
  ],
  ask: ["Is this acid (or base) strong or weak?", "Is this a buffer? Are both HA and A⁻ there?", "Was strong acid or base added? Did you react it first?", "Where is the half-equivalence point on the curve?", "Is the equivalence pH above, below, or at 7? Why?"],
  check: [
    { q: "Buffer with [A⁻] = [HA]. pH?", a: "pH = pK<sub>a</sub>" },
    { q: "Stronger acid: pK<sub>a</sub> 3 or pK<sub>a</sub> 6?", a: "pK<sub>a</sub> 3" },
    { q: "pH of 0.0010 M NaOH?", a: "pOH 3 → pH 11" }
  ],
  visual: "ACV_TITR" },

/* ---------------- UNIT 9 ---------------- */
{ id: "ac-09", course: "AP Chemistry", unit: 9, title: "Thermodynamics & Electrochemistry (ΔS, ΔG, Cells, Electrolysis)", standards: "AP Chemistry Unit 9",
  bigIdea: "Whether a reaction is thermodynamically favorable depends on enthalpy (ΔH) AND entropy (ΔS, dispersal of energy and matter). Gibbs free energy combines them: ΔG = ΔH − TΔS. Negative ΔG is favorable. ΔG connects to K (ΔG° = −RT ln K) and to cell voltage (ΔG° = −nFE°). Galvanic cells use favorable redox reactions to make electricity; electrolytic cells use electricity to force unfavorable ones.",
  tips: "Units are the #1 trap: ΔH is usually in <b>kJ</b> but ΔS is in <b>J/K</b>. Convert ΔS to kJ/K before using ΔG = ΔH − TΔS. For cells, use memory tricks: “<b>An Ox, Red Cat</b>” (anode = oxidation, reduction = cathode) and “electrons flow from anode to cathode (A to C, alphabetical).”",
  vocab: [
    ["entropy (ΔS)", "Dispersal of matter and energy. Increases when solids → liquids → gases, more gas moles form, or things dissolve/mix."],
    ["Gibbs free energy", "ΔG = ΔH − TΔS. ΔG &lt; 0 → thermodynamically favorable."],
    ["ΔG° and K", "ΔG° = −RT ln K. ΔG° &lt; 0 ↔ K > 1."],
    ["galvanic (voltaic) cell", "A favorable redox reaction produces current. E°<sub>cell</sub> > 0."],
    ["anode / cathode", "Anode: oxidation (loses mass). Cathode: reduction (gains mass if metal plates out)."],
    ["E°<sub>cell</sub>", "E°<sub>cathode</sub> − E°<sub>anode</sub> (using reduction potentials). Don’t multiply E° by coefficients."],
    ["ΔG° = −nFE°", "n = moles of electrons transferred, F = 96,485 C/mol e⁻."],
    ["salt bridge", "Lets ions flow to keep each half-cell neutral. Without it, current stops."],
    ["electrolysis / Faraday", "Charge q = It (amps × seconds). Moles of e⁻ = q/F."],
    ["kinetic vs. thermodynamic control", "A favorable reaction (ΔG &lt; 0) can still be very slow if Eₐ is high (like diamond → graphite)."]
  ],
  steps: [
    { name: "ΔG and temperature", list: ["Predict signs of ΔH and ΔS.", "ΔH − and ΔS + → favorable at all T. ΔH + and ΔS − → never favorable.", "ΔH − and ΔS − → favorable at low T. ΔH + and ΔS + → favorable at high T.", "Crossover temperature: T = ΔH/ΔS (same units!)."] },
    { name: "Galvanic cell problems", list: ["Find both reduction half-reactions and E° values.", "The one with the higher (more positive) E° is reduced (cathode); the other is reversed and oxidized (anode).", "E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>.", "Balance electrons to find n. ΔG° = −nFE° (in J, then convert to kJ)."] },
    { name: "Electrolysis (how much metal plates out)", list: ["q = I × t (A × s = coulombs).", "mol e⁻ = q / 96,485.", "Use the half-reaction (e.g., Cu²⁺ + 2e⁻ → Cu) to convert to moles of metal.", "Multiply by molar mass for grams."] }
  ],
  examples: [
    { q: "Predict the sign of ΔS for 2H₂(g) + O₂(g) → 2H₂O(l).", steps: ["Reactants: 3 moles of gas. Products: liquid only.", "Gas → liquid is less dispersed."], answer: "ΔS &lt; 0" },
    { q: "N₂ + 3H₂ → 2NH₃: ΔH° = −92 kJ, ΔS° = −199 J/K. Find ΔG° at 298 K. Above what temperature is it unfavorable?", steps: ["Convert ΔS: −0.199 kJ/K.", "ΔG° = −92 − (298)(−0.199) = −92 + 59.3 = −32.7 kJ → favorable.", "Crossover: T = ΔH/ΔS = (−92)/(−0.199) = 462 K.", "Both signs negative → favorable only at LOW T, so it becomes unfavorable above ≈ 462 K."], answer: "ΔG° ≈ −33 kJ (favorable); unfavorable above ≈ 460 K" },
    { q: "A cell uses Zn and Cu. E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = −0.76 V. Find the anode, E°<sub>cell</sub>, and ΔG°.", steps: ["Cu²⁺ has the higher E° → reduced at the cathode. Zn is oxidized at the anode.", "E°<sub>cell</sub> = 0.34 − (−0.76) = 1.10 V.", "2 electrons transferred: ΔG° = −(2)(96,485)(1.10) = −212,000 J.", "≈ −212 kJ."], answer: "Anode Zn; E° = 1.10 V; ΔG° ≈ −212 kJ" },
    { q: "A current of 2.00 A runs for 965 s through a Cu²⁺ solution. What mass of copper plates out?", steps: ["q = It = 2.00 × 965 = 1930 C.", "mol e⁻ = 1930 / 96,485 = 0.0200 mol.", "Cu²⁺ + 2e⁻ → Cu: 0.0200/2 = 0.0100 mol Cu.", "0.0100 × 63.55 = 0.636 g."], answer: "0.636 g Cu" },
    { q: "ΔG° for a reaction is +15 kJ. Is K greater or less than 1?", steps: ["ΔG° = −RT ln K. Positive ΔG° → ln K is negative.", "ln K &lt; 0 → K &lt; 1 (reactants favored)."], answer: "K &lt; 1" }
  ],
  mistakes: [
    ["Mixes kJ and J in ΔG = ΔH − TΔS.", "“What units is ΔS in? Convert to kJ/K before subtracting.”"],
    ["Multiplies E° by the coefficients.", "“Voltage doesn’t depend on how much reacts. Only ΔG gets multiplied (by n).”"],
    ["Reverses the wrong half-reaction.", "“Which one wants electrons more (higher E°)? That one stays as a reduction.”"],
    ["Thinks a favorable reaction must be fast.", "“ΔG says if it CAN happen. What decides how fast? Activation energy.”"],
    ["Uses minutes instead of seconds in q = It.", "“Amps are coulombs per SECOND. Convert the time.”"]
  ],
  ask: ["Are there more or fewer moles of gas on the product side?", "What are the signs of ΔH and ΔS? At which temperatures is it favorable?", "Are your units for ΔH and ΔS the same?", "Which half-reaction has the higher reduction potential?", "How many electrons are transferred?"],
  check: [
    { q: "E°<sub>cell</sub> is positive. Sign of ΔG°?", a: "Negative (favorable)" },
    { q: "Where does oxidation happen?", a: "At the anode" },
    { q: "Sign of ΔS for dissolving a salt in water (usually)?", a: "Positive" }
  ],
  visual: "ACV_CELL" }
);

/* ===== AP Chemistry visuals ===== */
(function () {
  const G = window.TGA;
  const t = (x, y, s, o) => `<text x="${x}" y="${y}" font-size="${(o && o.fs) || 12}" text-anchor="${(o && o.a) || "middle"}" font-weight="${o && o.b ? 700 : 400}" fill="${(o && o.c) || "#333"}">${s}</text>`;
  const ln = (x1, y1, x2, y2, c, w, d) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c || "#333"}" stroke-width="${w || 2}"${d ? ' stroke-dasharray="5 4"' : ""}/>`;
  const arrow = (x1, y1, x2, y2, c, w) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 9; return ln(x1, y1, x2, y2, c, w || 2.5) + `<polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)} ${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}" fill="${c || "#333"}"/>`; };
  const svg = (w, h, inner, alt) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${alt}" style="background:#fff;border-radius:12px;max-width:100%;height:auto">${inner}</svg>`;
  const BLUE = "#2b7de9", PINK = "#e8368f", ORANGE = "#e08a00", GREEN = "#1aa36f", RED = "#d0453a", PURPLE = "#8a54e0";
  const note = s => `<p style="text-align:center;margin:6px 0 0;font-size:.9rem">${s}</p>`;

  /* PES of Al */
  const pes = (() => {
    const peaks = [[60, 2, "1s"], [160, 2, "2s"], [230, 6, "2p"], [370, 2, "3s"], [440, 1, "3p"]];
    let g = ln(30, 200, 490, 200) + t(260, 236, "← higher binding energy (core)        lower binding energy (valence) →", { fs: 11, b: 1 });
    peaks.forEach(([x, h, l]) => { g += `<rect x="${x - 10}" y="${200 - h * 26}" width="20" height="${h * 26}" fill="${h === 6 ? PURPLE : BLUE}"/>` + t(x, 192 - h * 26, h, { b: 1 }) + t(x, 216, l, { b: 1, fs: 11 }); });
    g += t(260, 24, "PES of aluminum: 1s² 2s² 2p⁶ 3s² 3p¹ (13 electrons)", { b: 1, fs: 13 }) + t(400, 60, "peak height = # of electrons", { fs: 11, c: PURPLE, b: 1 });
    return svg(520, 246, g, "photoelectron spectrum of aluminum");
  })();

  /* potential energy vs distance */
  const pe = (() => {
    const X = r => 50 + r * 1.6, Y = e => 80 - e * 0.3, f = r => 436 * ((1 - Math.exp(-0.035 * (r - 74))) ** 2) - 436;
    let d = ""; for (let r = 50; r <= 280; r += 2) { const e = f(r); if (e > 200) continue; d += (d ? "L" : "M") + X(r).toFixed(1) + " " + Y(e).toFixed(1); }
    let g = ln(X(40), Y(0), X(285), Y(0), "#555") + ln(X(40), 20, X(40), 230, "#555") + `<path d="${d}" fill="none" stroke="${BLUE}" stroke-width="3"/>`;
    g += ln(X(74), Y(-436), X(74), Y(0), ORANGE, 1.5, 1) + t(X(74) + 4, Y(0) + 16, "74 pm = bond length", { a: "start", fs: 11, b: 1, c: ORANGE });
    g += arrow(X(200), Y(0), X(200), Y(-430), RED) + t(X(200) + 6, Y(-220), "436 kJ/mol", { a: "start", b: 1, c: RED, fs: 11 }) + t(X(200) + 6, Y(-220) + 14, "= bond energy", { a: "start", c: RED, fs: 11 });
    g += t(X(160), 244, "internuclear distance (pm)", { fs: 11, b: 1 }) + `<text x="26" y="130" font-size="11" font-weight="700" fill="#333" text-anchor="middle" transform="rotate(-90 26 130)">potential energy</text>` + t(X(140), 18, "H–H: potential energy vs. distance", { b: 1, fs: 13 });
    return svg(520, 252, g, "potential energy curve for H2");
  })();

  /* Maxwell-Boltzmann */
  const mb = (() => {
    const X = v => 40 + v * 4.4, Y = p => 210 - p * 3600, f = (v, a) => 4 / Math.sqrt(Math.PI) * v * v / (a ** 3) * Math.exp(-(v * v) / (a * a));
    const path = a => { let d = ""; for (let v = 0; v <= 100; v += 1) d += (v ? "L" : "M") + X(v).toFixed(1) + " " + Y(f(v, a)).toFixed(1); return d; };
    let g = ln(40, 210, 490, 210) + ln(40, 210, 40, 20) + `<path d="${path(25)}" fill="none" stroke="${BLUE}" stroke-width="3"/><path d="${path(40)}" fill="none" stroke="${RED}" stroke-width="3"/>`;
    g += t(X(22), Y(f(25, 25)) - 8, "low T", { b: 1, c: BLUE }) + t(X(44), Y(f(40, 40)) - 8, "high T", { b: 1, c: RED });
    g += ln(X(70), 30, X(70), 210, ORANGE, 2, 1) + t(X(70) + 4, 44, "energy needed (Eₐ)", { a: "start", b: 1, fs: 11, c: ORANGE });
    g += t(265, 232, "molecular speed (or kinetic energy)", { fs: 11, b: 1 }) + `<text x="24" y="120" font-size="11" font-weight="700" fill="#333" text-anchor="middle" transform="rotate(-90 24 120)">fraction of molecules</text>`;
    return svg(520, 242, g, "Maxwell-Boltzmann distribution at two temperatures") + note("Higher temperature spreads the curve out: more molecules have enough energy to react or escape (higher vapor pressure).");
  })();

  /* particle view of net ionic */
  const nie = (() => {
    const ion = (x, y, l, c) => `<circle cx="${x}" cy="${y}" r="14" fill="${c}"/>` + t(x, y + 4, l, { fs: 10, b: 1, c: "#fff" });
    let g = `<rect x="20" y="40" width="200" height="160" rx="10" fill="#eaf4ff" stroke="${BLUE}" stroke-width="2"/><rect x="300" y="40" width="200" height="160" rx="10" fill="#eaf4ff" stroke="${BLUE}" stroke-width="2"/>`;
    g += ion(60, 80, "Ag⁺", "#7d8590") + ion(120, 150, "Ag⁺", "#7d8590") + ion(170, 90, "Cl⁻", GREEN) + ion(80, 160, "Cl⁻", GREEN) + ion(130, 80, "Na⁺", PURPLE) + ion(180, 160, "Na⁺", PURPLE) + ion(60, 120, "NO₃⁻", ORANGE) + ion(160, 125, "NO₃⁻", ORANGE);
    g += arrow(232, 120, 288, 120);
    g += ion(340, 80, "Na⁺", PURPLE) + ion(460, 90, "Na⁺", PURPLE) + ion(380, 120, "NO₃⁻", ORANGE) + ion(450, 140, "NO₃⁻", ORANGE);
    g += `<rect x="350" y="170" width="100" height="24" rx="4" fill="#ddd" stroke="#888"/>` + t(400, 187, "AgCl(s)", { b: 1, fs: 12 });
    g += t(120, 28, "Mixing AgNO₃ and NaCl", { b: 1 }) + t(400, 28, "After: Na⁺ and NO₃⁻ are unchanged", { b: 1 }) + t(260, 228, "Net ionic: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)   (Na⁺, NO₃⁻ are spectators)", { b: 1, fs: 12, c: RED });
    return svg(520, 240, g, "particle diagram of a precipitation reaction");
  })();

  const kin = (() => {
    const X = x => 50 + x * 4.4, Y = c => 210 - c * 170;
    let g = ""; for (let k = 0; k <= 100; k += 10) g += ln(X(k), Y(0), X(k), Y(1.05), "#eee", 1) + t(X(k), Y(0) + 15, k, { fs: 10 });
    [0, 0.25, 0.5, 0.75, 1].forEach(c => g += ln(X(0), Y(c), X(100), Y(c), "#eee", 1) + t(X(0) - 6, Y(c) + 4, c, { fs: 10, a: "end" }));
    let d = ""; for (let x = 0; x <= 100; x += 1) d += (x ? "L" : "M") + X(x).toFixed(1) + " " + Y(Math.exp(-0.0231 * x)).toFixed(1);
    g += ln(X(0), Y(0), X(100), Y(0)) + ln(X(0), Y(0), X(0), Y(1.05)) + `<path d="${d}" fill="none" stroke="${BLUE}" stroke-width="3"/>`;
    [[30, 0.5, "½ left at 30 s"], [60, 0.25, "¼ left at 60 s"], [90, 0.125, "⅛ left at 90 s"]].forEach(([x, y, l]) => g += ln(X(x), Y(0), X(x), Y(y), ORANGE, 1.5, 1) + `<circle cx="${X(x)}" cy="${Y(y)}" r="5" fill="${RED}"/>` + t(X(x) + 6, Y(y) - 9, l, { a: "start", b: 1, fs: 11 }));
    g += t(X(50), 244, "time (s)", { fs: 11, b: 1 }) + `<text x="16" y="${Y(0.5)}" font-size="11" font-weight="700" fill="#333" text-anchor="middle" transform="rotate(-90 16 ${Y(0.5)})">[A] / [A]₀</text>` + t(X(50), 22, "First-order decay, t½ = 30 s", { b: 1, fs: 13 });
    return svg(520, 252, g, "first order decay with a 30 second half-life") + note("First order: the half-life stays the same (30 s each time). A plot of ln[A] vs. t would be a straight line.");
  })();

  /* Hess energy diagram */
  const hess = (() => {
    const lvl = (y, x1, x2, l, c) => ln(x1, y, x2, y, c || "#333", 3) + t(x2 + 6, y + 4, l, { a: "start", b: 1, fs: 12 });
    let g = lvl(50, 40, 170, "C + O₂") + lvl(130, 220, 330, "CO + ½O₂") + lvl(230, 40, 170, "CO₂");
    g += arrow(80, 54, 80, 226, RED) + t(74, 150, "−393.5 kJ", { a: "end", b: 1, c: RED, fs: 11 });
    g += arrow(150, 54, 240, 126, BLUE) + t(200, 80, "ΔH = ? (−110.5)", { a: "start", b: 1, c: BLUE, fs: 11 });
    g += arrow(290, 134, 170, 226, GREEN) + t(250, 196, "−283.0 kJ", { a: "start", b: 1, c: GREEN, fs: 11 });
    g += t(250, 22, "Hess’s law: two paths, same total ΔH", { b: 1, fs: 13 }) + t(250, 262, "−393.5 = ? + (−283.0) → ? = −110.5 kJ", { b: 1, fs: 12 });
    return svg(460, 272, g, "Hess's law energy level diagram");
  })();

  const eq = G ? G.graph({ x: [0, 10], y: [0, 1.8], step: 1, fns: [{ f: x => 1 - (7 / 9) * (1 - Math.exp(-0.7 * x)), c: "#2b7de9", label: "[H₂] = [I₂]", lx: 9.8 }, { f: x => (14 / 9) * (1 - Math.exp(-0.7 * x)), c: "#d0453a", label: "[HI]", lx: 9.8 }],
    shade: [(X, Y) => `<line x1="${X(5)}" y1="${Y(0)}" x2="${X(5)}" y2="${Y(1.8)}" stroke="#8a54e0" stroke-dasharray="5 4"/>` + t(X(5.2), Y(1.15), "equilibrium reached:", { a: "start", b: 1, fs: 11, c: "#8a54e0" }) + t(X(5.2), Y(1.02), "concentrations stop changing", { a: "start", fs: 11, c: "#8a54e0" }) + t(X(5), Y(0) + 28, "time →", { fs: 11, b: 1 })], alt: "concentrations approach equilibrium values" }) + note("They level off at 0.22 M and 1.56 M. Equal RATES, not equal amounts.") : "";

  /* titration curve: 25.0 mL 0.120 M HA (pKa 4.20) with 0.100 M NaOH */
  const titr = (() => {
    const Ka = Math.pow(10, -4.2), Ca = 0.12, Va = 25, Cb = 0.1, nA = Ca * Va;
    const pH = v => { const nb = Cb * v, Vt = Va + v; if (v === 0) return -Math.log10(Math.sqrt(Ka * Ca)); if (nb < nA - 1e-9) { const ha = nA - nb, a = nb; return 4.2 + Math.log10(a / ha); } if (Math.abs(nb - nA) < 1e-9) { const Cbase = nA / Vt, Kb = 1e-14 / Ka; return 14 + Math.log10(Math.sqrt(Kb * Cbase)); } return 14 + Math.log10((nb - nA) / Vt); };
    const X = v => 40 + v * 9, Y = p => 220 - p * 14;
    let d = ""; for (let v = 0; v <= 50; v += 0.25) { let p = pH(v); if (v > 29.5 && v < 30.5) { const lo = pH(29.5), hi = pH(30.5); p = lo + (hi - lo) * (v - 29.5); } d += (v ? "L" : "M") + X(v).toFixed(1) + " " + Y(p).toFixed(1); }
    let g = ""; for (let p = 0; p <= 14; p += 2) g += ln(X(0), Y(p), X(50), Y(p), "#eee", 1) + t(X(0) - 6, Y(p) + 4, p, { fs: 10, a: "end" });
    for (let v = 0; v <= 50; v += 10) g += t(X(v), 236, v, { fs: 10 });
    g += ln(X(0), Y(0), X(50), Y(0)) + ln(X(0), Y(0), X(0), Y(14)) + `<path d="${d}" fill="none" stroke="${BLUE}" stroke-width="3"/>`;
    g += `<circle cx="${X(15)}" cy="${Y(4.2)}" r="6" fill="${GREEN}"/>` + t(X(15), Y(4.2) - 12, "half-equivalence: pH = pKₐ = 4.20", { b: 1, fs: 11, c: GREEN });
    g += `<circle cx="${X(30)}" cy="${Y(pH(30))}" r="6" fill="${RED}"/>` + t(X(30) + 10, Y(pH(30)) + 4, "equivalence (30.0 mL), pH > 7", { a: "start", b: 1, fs: 11, c: RED });
    g += t(X(10), Y(6.3), "buffer region", { fs: 11, b: 1, c: PURPLE });
    g += t(X(25), 252, "volume of NaOH added (mL)", { fs: 11, b: 1 }) + `<text x="14" y="${Y(7)}" font-size="11" font-weight="700" fill="#333" text-anchor="middle" transform="rotate(-90 14 ${Y(7)})">pH</text>`;
    return svg(520, 262, g, "weak acid strong base titration curve");
  })();

  /* galvanic cell */
  const cell = (() => {
    let g = `<path d="M40 120 L40 240 L190 240 L190 120" fill="#e9f0ff" stroke="#555" stroke-width="2"/><path d="M330 120 L330 240 L480 240 L480 120" fill="#e3f3ff" stroke="#555" stroke-width="2"/>`;
    g += `<rect x="95" y="80" width="40" height="130" fill="#9aa3ad" stroke="#555"/>` + t(115, 150, "Zn", { b: 1, c: "#fff", fs: 13 }) + `<rect x="385" y="80" width="40" height="130" fill="#c27a3a" stroke="#555"/>` + t(405, 150, "Cu", { b: 1, c: "#fff", fs: 13 });
    g += `<path d="M160 140 L160 95 L360 95 L360 140" fill="none" stroke="#bbb" stroke-width="14"/>` + t(260, 88, "salt bridge (ions flow)", { fs: 11, b: 1 });
    g += ln(115, 80, 115, 30) + ln(115, 30, 405, 30) + ln(405, 30, 405, 80) + `<rect x="232" y="16" width="56" height="28" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>` + t(260, 35, "1.10 V", { b: 1, fs: 12 });
    g += arrow(150, 22, 220, 22, ORANGE, 2) + t(185, 14, "e⁻", { b: 1, c: ORANGE }) + arrow(300, 22, 370, 22, ORANGE, 2);
    g += t(115, 262, "ANODE (oxidation)", { b: 1, fs: 11, c: RED }) + t(115, 278, "Zn → Zn²⁺ + 2e⁻", { fs: 11 }) + t(405, 262, "CATHODE (reduction)", { b: 1, fs: 11, c: BLUE }) + t(405, 278, "Cu²⁺ + 2e⁻ → Cu", { fs: 11 });
    return svg(520, 290, g, "zinc copper galvanic cell") + note("“An Ox, Red Cat”: anode = oxidation, reduction = cathode. Electrons flow anode → cathode through the wire.");
  })();

  const V = { ACV_PES: pes, ACV_PE: pe, ACV_MB: mb, ACV_NIE: nie, ACV_KIN: kin, ACV_HESS: hess, ACV_EQ: eq, ACV_TITR: titr, ACV_CELL: cell };
  (window.TUTOR_UNITS || []).forEach(u => { if (u.course === "AP Chemistry" && V[u.visual] !== undefined) u.visual = V[u.visual]; });
})();
