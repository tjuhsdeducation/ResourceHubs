/* =====================================================================
   ✏️ TUTOR GUIDE: CHEMISTRY (shown on tutor-math.html, tutors only)
   High school chemistry (CA NGSS: HS-PS1, HS-PS2, HS-PS3).
   Same format as the math units:
     id, course, unit, title, standards, bigIdea, vocab:[[term, meaning]],
     steps:[{name, list:[...]}], examples:[{q, steps:[...], answer}],
     mistakes:[[what the student does, what to say]], ask:[...],
     check:[{q, a}], visual (optional SVG/HTML), tips (optional HTML)
   Visuals marked "CHV_..." are drawn at the bottom of this file.
   Atomic masses used: H 1.01, C 12.01, N 14.01, O 16.00, Na 22.99,
   Cl 35.45, K 39.10, Ca 40.08, Fe 55.85 (match most school tables).
   ===================================================================== */
(window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(

/* ---------------- UNIT 1 ---------------- */
{ id: "c-01", course: "Chemistry", unit: 1, title: "Measurement, Significant Figures & Dimensional Analysis", standards: "HS-PS1 (Science & Engineering Practices: math & computational thinking)",
  bigIdea: "Chemistry is a measuring science. Every measurement has a number AND a unit, and the number of significant figures shows how precise the measurement was. Dimensional analysis (the “train track” or factor-label method) is the single most useful skill in the whole course: it’s how students will do conversions, moles, stoichiometry, and more.",
  tips: "Make students write units on <b>every</b> number, every time. If the units cancel to the right answer unit, the setup is right. Tell them: “If your units are right, your answer is almost always right.”",
  vocab: [
    ["accuracy vs. precision", "Accuracy is how close you are to the true value. Precision is how close your measurements are to each other."],
    ["significant figures (sig figs)", "The digits in a measurement that are known for sure, plus one estimated digit."],
    ["scientific notation", "A number written as (1 to 9.99…) × 10<sup>n</sup>. 0.00031 = 3.1 × 10<sup>−4</sup>; 45,000 = 4.5 × 10<sup>4</sup>."],
    ["SI prefixes", "kilo (k) = 1000, centi (c) = 1/100, milli (m) = 1/1000. 1 km = 1000 m; 1 m = 100 cm; 1 L = 1000 mL."],
    ["conversion factor", "A fraction equal to 1, like (60 min / 1 h). Multiplying by it changes the unit, not the amount."],
    ["dimensional analysis", "Lining up conversion factors so unwanted units cancel (top and bottom), leaving the unit you want."],
    ["density", "Mass per volume: D = m/V, usually g/mL or g/cm³."],
    ["percent error", "|measured − accepted| / accepted × 100%."]
  ],
  steps: [
    { name: "Counting sig figs (the Atlantic–Pacific rule)", list: ["<b>Decimal point Present</b> → start on the <b>Pacific</b> (left) side. Begin counting at the first nonzero digit and count everything to the end. 0.004050 → 4 sig figs.", "<b>Decimal point Absent</b> → start on the <b>Atlantic</b> (right) side. Skip zeros until the first nonzero digit, then count everything. 1200 → 2 sig figs.", "Zeros between nonzero digits always count (1005 → 4)."] },
    { name: "Sig figs in calculations", list: ["× and ÷: round to the FEWEST sig figs of any number used.", "+ and −: round to the FEWEST decimal places of any number used.", "Only round at the very end."] },
    { name: "Dimensional analysis (train tracks)", list: ["Write the given number with its unit.", "Write what unit you want.", "Multiply by a conversion factor with the unit you want to cancel on the BOTTOM.", "Keep adding factors until only the wanted unit is left.", "Multiply across the top, divide by everything on the bottom."] }
  ],
  examples: [
    { q: "How many sig figs are in 0.004050 and in 3,200?", steps: ["0.004050 has a decimal point → start from the left at the first nonzero digit (4). Count 4, 0, 5, 0 → 4.", "3,200 has no decimal point → start from the right, skip the zeros, start at 2. Count 2, 3 → 2."], answer: "0.004050 → 4 sig figs; 3,200 → 2 sig figs" },
    { q: "Calculate with correct sig figs: 12.52 cm × 3.1 cm, and 25.1 g + 3.256 g.", steps: ["12.52 × 3.1 = 38.812. Multiplying: 3.1 has the fewest sig figs (2) → 39 cm².", "25.1 + 3.256 = 28.356. Adding: 25.1 has the fewest decimal places (1) → 28.4 g."], answer: "39 cm² and 28.4 g" },
    { q: "Convert 2.5 hours to seconds.", steps: ["Start: 2.5 h.", "× (60 min / 1 h): hours cancel.", "× (60 s / 1 min): minutes cancel.", "2.5 × 60 × 60 = 9000 s. 2.5 has 2 sig figs → 9.0 × 10³ s."], answer: "9.0 × 10³ s" },
    { q: "A metal block has a mass of 54.0 g and a volume of 20.0 mL. Find its density.", steps: ["D = m/V = 54.0 g / 20.0 mL.", "= 2.70 g/mL (3 sig figs)."], answer: "2.70 g/mL (that’s aluminum)" },
    { q: "A student measures the density as 2.65 g/mL. The accepted value is 2.70 g/mL. Find the percent error.", steps: ["|2.65 − 2.70| = 0.05.", "0.05 / 2.70 = 0.0185.", "× 100% = 1.85%."], answer: "≈ 1.9% error" }
  ],
  mistakes: [
    ["Puts the unit to cancel on the top of the conversion factor.", "“Which unit are we trying to get rid of? It has to be on the bottom so it cancels.”"],
    ["Counts leading zeros as sig figs (0.0045 → 5).", "“Zeros in front are just placeholders. Where’s the first real digit?”"],
    ["Rounds at every step.", "“Keep all the digits in your calculator and round once at the end.”"],
    ["Uses the multiplying rule for adding.", "“For adding, look at decimal places, not total sig figs.”"],
    ["Writes 9000 when the answer should have 2 sig figs.", "“How can you show exactly 2 sig figs? Scientific notation: 9.0 × 10³.”"]
  ],
  ask: ["What unit do you have, and what unit do you want?", "What conversion factor connects them?", "Which unit should be on the bottom so it cancels?", "Is there a decimal point? Which side do you start counting from?", "Are you multiplying or adding? Which rounding rule applies?"],
  check: [
    { q: "Write 0.00031 in scientific notation.", a: "3.1 × 10<sup>−4</sup>" },
    { q: "Convert 350 mL to liters.", a: "350 mL × (1 L / 1000 mL) = 0.350 L" },
    { q: "Sig figs in 1005 g?", a: "4 (zeros between nonzero digits count)" }
  ],
  visual: "CHV_TRAIN" },

/* ---------------- UNIT 2 ---------------- */
{ id: "c-02", course: "Chemistry", unit: 2, title: "Atomic Structure, Isotopes & Nuclear Chemistry", standards: "HS-PS1-1, HS-PS1-8",
  bigIdea: "Atoms have a tiny nucleus (protons + neutrons) surrounded by electrons. The number of protons is the atom’s identity: change it and you have a different element. Neutrons change the mass (isotopes). Electrons change the charge (ions). Nuclear reactions change the nucleus itself.",
  tips: "Teach the short version: <b>“Protons = atomic number. Mass number − protons = neutrons. Electrons = protons minus the charge.”</b> For ions, students get confused because losing a negative makes you positive. Ask, “Did it gain or lose electrons? Electrons are negative.”",
  vocab: [
    ["proton (p⁺)", "Positive particle in the nucleus. Mass ≈ 1 amu. The number of protons = the atomic number."],
    ["neutron (n⁰)", "Neutral particle in the nucleus. Mass ≈ 1 amu."],
    ["electron (e⁻)", "Negative particle outside the nucleus. Very tiny mass."],
    ["atomic number (Z)", "Number of protons. It’s the whole number on the periodic table that identifies the element."],
    ["mass number (A)", "Protons + neutrons. Written after the name (carbon-14) or as a superscript (¹⁴C)."],
    ["isotope", "Atoms of the same element (same protons) with different numbers of neutrons."],
    ["ion", "An atom with a charge. Lose electrons → positive (cation). Gain electrons → negative (anion)."],
    ["average atomic mass", "The weighted average of an element’s isotopes, the decimal number on the periodic table."],
    ["alpha, beta, gamma radiation", "Alpha (α) = a helium nucleus ⁴₂He. Beta (β) = an electron ⁰₋₁e from a neutron changing to a proton. Gamma (γ) = high-energy light (no mass or charge)."]
  ],
  steps: [
    { name: "Finding protons, neutrons, and electrons", list: ["Protons = atomic number (look it up on the periodic table).", "Neutrons = mass number − protons.", "Electrons = protons − charge. (For 3+, subtract 3. For 2−, subtract −2, which means add 2.)"] },
    { name: "Average atomic mass", list: ["Change each percent to a decimal (75.77% → 0.7577).", "Multiply each isotope’s mass by its decimal.", "Add the results.", "Check: the answer should be closer to the more common isotope."] },
    { name: "Balancing a nuclear equation", list: ["Mass numbers (top) must add up the same on both sides.", "Atomic numbers (bottom) must add up the same on both sides.", "Use the bottom number to look up the new element’s symbol."] }
  ],
  examples: [
    { q: "How many protons, neutrons, and electrons are in chlorine-37?", steps: ["Chlorine’s atomic number is 17 → 17 protons.", "Neutrons = 37 − 17 = 20.", "It’s a neutral atom, so electrons = protons = 17."], answer: "17 p⁺, 20 n⁰, 17 e⁻" },
    { q: "Find the protons, neutrons, and electrons in Fe³⁺ (mass number 56).", steps: ["Iron’s atomic number is 26 → 26 protons.", "Neutrons = 56 − 26 = 30.", "3+ means it lost 3 electrons: 26 − 3 = 23."], answer: "26 p⁺, 30 n⁰, 23 e⁻" },
    { q: "Find the protons, neutrons, and electrons in ¹⁶O²⁻.", steps: ["Oxygen: atomic number 8 → 8 protons.", "Neutrons = 16 − 8 = 8.", "2− means it gained 2 electrons: 8 + 2 = 10."], answer: "8 p⁺, 8 n⁰, 10 e⁻" },
    { q: "Chlorine is 75.77% Cl-35 (34.969 amu) and 24.23% Cl-37 (36.966 amu). Find the average atomic mass.", steps: ["0.7577 × 34.969 = 26.496.", "0.2423 × 36.966 = 8.957.", "Add: 26.496 + 8.957 = 35.453.", "Check: it’s closer to 35, the more common isotope ✓"], answer: "≈ 35.45 amu (matches the periodic table)" },
    { q: "Complete: ²³⁸₉₂U → ⁴₂He + ?", steps: ["Mass numbers: 238 = 4 + ? → ? = 234.", "Atomic numbers: 92 = 2 + ? → ? = 90.", "Element 90 is thorium (Th). This is alpha decay."], answer: "²³⁴₉₀Th" }
  ],
  mistakes: [
    ["Uses the average atomic mass (35.45) instead of the mass number to find neutrons.", "“Neutrons have to be a whole number. Which number tells us this specific isotope?”"],
    ["Adds electrons for a positive ion.", "“Electrons are negative. To become MORE positive, did it gain or lose them?”"],
    ["Thinks isotopes have different numbers of protons.", "“If the protons changed, would it still be the same element?”"],
    ["Divides by 100 twice or forgets to change percent to decimal.", "“Does your answer land between the two isotope masses? If not, check the decimals.”"],
    ["Only balances the mass numbers in a nuclear equation.", "“The bottom numbers have to balance too. That’s how we find the element.”"]
  ],
  ask: ["What does the atomic number tell you?", "Which number is the mass number?", "Is this an ion? Did it gain or lose electrons?", "Is your average closer to the more common isotope?", "Do the top numbers and bottom numbers both balance?"],
  check: [
    { q: "Protons and electrons in Na⁺?", a: "11 p⁺, 10 e⁻" },
    { q: "Neutrons in carbon-14?", a: "14 − 6 = 8" },
    { q: "What is different between two isotopes of the same element?", a: "The number of neutrons (and so the mass)." }
  ],
  visual: "CHV_ATOM" },

/* ---------------- UNIT 3 ---------------- */
{ id: "c-03", course: "Chemistry", unit: 3, title: "Electron Configuration & Periodic Trends", standards: "HS-PS1-1, HS-PS1-2",
  bigIdea: "Electrons fill energy levels in a predictable order, and the outer (valence) electrons decide how an element behaves. The periodic table is organized by those electrons: elements in the same column (group) have the same number of valence electrons, so they act alike. Trends across and down the table come from how strongly the nucleus pulls on those outer electrons.",
  tips: "Use the periodic table itself as the map for electron configuration: the s-block is the first two columns, the p-block is the right six columns, the d-block is the middle. Read it left to right, top to bottom. For trends, give one picture: <b>atoms get bigger going down and to the left; ionization energy and electronegativity grow going up and to the right</b> (toward fluorine).",
  vocab: [
    ["energy level (shell)", "Where electrons are found, numbered 1, 2, 3… Higher levels are farther from the nucleus."],
    ["sublevel / orbital (s, p, d, f)", "Parts of an energy level. s holds 2, p holds 6, d holds 10, f holds 14 electrons."],
    ["electron configuration", "A list of where the electrons are, like 1s² 2s² 2p⁴ for oxygen. The exponents add up to the total electrons."],
    ["noble gas notation", "A shortcut using the previous noble gas in brackets: sulfur = [Ne] 3s² 3p⁴."],
    ["valence electrons", "Electrons in the outermost energy level. For main-group elements: group 1 → 1, group 2 → 2, groups 13–18 → 3–8."],
    ["group vs. period", "Group = a column (similar properties). Period = a row (same number of energy levels)."],
    ["atomic radius", "The size of the atom. Bigger going DOWN (more shells) and to the LEFT (weaker pull)."],
    ["ionization energy", "The energy needed to remove an electron. Higher going UP and to the RIGHT."],
    ["electronegativity", "How strongly an atom pulls shared electrons in a bond. Highest at fluorine (top right, not counting noble gases)."]
  ],
  steps: [
    { name: "Writing an electron configuration", list: ["Find the atomic number (that’s the number of electrons in a neutral atom).", "Fill in order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p… (follow the periodic table row by row).", "s holds 2, p holds 6, d holds 10. Fill each before moving on.", "Check: the exponents should add up to the number of electrons.", "Noble gas shortcut: write the noble gas before the element in brackets, then continue from there."] },
    { name: "Comparing two elements on a trend", list: ["Find both elements on the table.", "Same column? The lower one is bigger, with lower ionization energy and electronegativity.", "Same row? The one on the left is bigger, with lower ionization energy and electronegativity.", "Explain WHY: more shells = bigger; more protons in the same row = stronger pull = smaller."] }
  ],
  examples: [
    { q: "Write the electron configuration of sulfur (S) and find its valence electrons.", steps: ["S has atomic number 16 → 16 electrons.", "1s² (2) 2s² (4) 2p⁶ (10) 3s² (12) 3p⁴ (16).", "Noble gas notation: [Ne] 3s² 3p⁴.", "Valence electrons are in level 3: 2 + 4 = 6."], answer: "1s² 2s² 2p⁶ 3s² 3p⁴ ([Ne] 3s² 3p⁴), 6 valence electrons" },
    { q: "Write the noble gas configuration of iron (Fe, 26).", steps: ["The noble gas before Fe is argon (18 electrons): [Ar].", "8 electrons left: 4s² takes 2, then 3d takes 6.", "Check: 18 + 2 + 6 = 26 ✓"], answer: "[Ar] 4s² 3d⁶" },
    { q: "Rank Na, Mg, and K from largest to smallest atomic radius.", steps: ["Na and Mg are in period 3. Na is to the left, so Na is bigger than Mg.", "K is below Na in group 1, with one more energy level, so K is bigger than Na."], answer: "K > Na > Mg" },
    { q: "Which has the higher electronegativity: O or C? F or I?", steps: ["O and C are in the same row. O is farther right (more protons pulling) → O is higher.", "F and I are in the same column. F is at the top (smaller, electrons closer to the nucleus) → F is higher."], answer: "O; F" },
    { q: "Why does calcium usually form a 2+ ion?", steps: ["Ca is in group 2, so it has 2 valence electrons: [Ar] 4s².", "Losing those 2 electrons leaves it with the same configuration as argon (a full outer level).", "Losing 2 negative electrons gives a charge of 2+."], answer: "It loses its 2 valence electrons to get a noble gas configuration → Ca²⁺" }
  ],
  mistakes: [
    ["Fills 3d before 4s.", "“Follow the periodic table: after row 3, row 4 starts with 4s (potassium and calcium) before the d-block.”"],
    ["Puts 8 or 10 electrons in a p sublevel.", "“How many electrons can a p sublevel hold?”"],
    ["Thinks atoms get bigger going to the right because they have more electrons.", "“They also have more protons in the same number of shells. Does a stronger pull make it bigger or smaller?”"],
    ["Counts all electrons as valence electrons.", "“Valence electrons are only the ones in the outermost energy level.”"],
    ["Mixes up groups and periods.", "“Groups go up and down like a group photo standing in columns. Periods go across like a sentence.”"]
  ],
  ask: ["How many electrons does a neutral atom of this element have?", "Which block of the table is it in (s, p, d)?", "Do your exponents add up to the total?", "Are these two elements in the same row or the same column?", "What is the nucleus doing to the outer electrons here?"],
  check: [
    { q: "Valence electrons in nitrogen?", a: "5 (group 15: 2s² 2p³)" },
    { q: "Which is larger: Cl or Cl⁻?", a: "Cl⁻ (an extra electron, more repulsion)" },
    { q: "Noble gas configuration of Ca?", a: "[Ar] 4s²" }
  ],
  visual: "CHV_TRENDS" },

/* ---------------- UNIT 4 ---------------- */
{ id: "c-04", course: "Chemistry", unit: 4, title: "Chemical Bonding, Lewis Structures & Molecular Shape", standards: "HS-PS1-1, HS-PS1-3, HS-PS2-6",
  bigIdea: "Atoms bond to get a full outer shell (usually 8 electrons, the octet rule). Metals give electrons to nonmetals (ionic bonds); nonmetals share electrons (covalent bonds). A Lewis structure shows where the valence electrons go, and VSEPR uses those electron groups to predict the 3-D shape, which decides whether a molecule is polar.",
  tips: "For Lewis structures, always start by <b>counting total valence electrons</b> and writing the number at the top of the page. At the end, count the dots and lines again. One line = 2 electrons. Most mistakes are just a wrong total. For shape, have students count electron groups around the center atom (each bond, single or double, counts as one group, and each lone pair counts as one).",
  vocab: [
    ["octet rule", "Atoms tend to gain, lose, or share electrons to get 8 valence electrons (H only needs 2)."],
    ["ionic bond", "Metal + nonmetal. The metal transfers electrons to the nonmetal, making + and − ions that attract."],
    ["covalent bond", "Nonmetal + nonmetal. Atoms share pairs of electrons. Single = 1 pair, double = 2, triple = 3."],
    ["metallic bond", "Metal atoms sharing a “sea” of moving electrons, which is why metals conduct electricity."],
    ["Lewis structure", "A drawing showing bonds as lines and lone pairs as dots."],
    ["lone pair", "A pair of valence electrons not shared in a bond."],
    ["VSEPR", "Electron groups push each other as far apart as possible, which gives the shape."],
    ["polar vs. nonpolar", "Polar molecules have uneven charge (one side slightly −, one side slightly +). Symmetric molecules are usually nonpolar even if their bonds are polar."],
    ["intermolecular forces", "Attractions between molecules: London dispersion (weakest) < dipole–dipole < hydrogen bonding (H bonded to N, O, or F)."]
  ],
  steps: [
    { name: "Drawing a Lewis structure", list: ["Add up the valence electrons of every atom (adjust for ions: add for −, subtract for +).", "Put the least electronegative atom in the center (never H).", "Connect each outer atom to the center with a single bond (2 electrons each).", "Give the outer atoms lone pairs until they have 8 (H gets just 2).", "Put any leftover electrons on the center atom.", "If the center atom has fewer than 8, move a lone pair from an outer atom into a double (or triple) bond."] },
    { name: "Predicting the shape (VSEPR)", list: ["Count electron groups around the center atom (bonds + lone pairs).", "2 groups → linear (180°).", "3 groups → trigonal planar (120°); with 1 lone pair → bent.", "4 groups → tetrahedral (109.5°); with 1 lone pair → trigonal pyramidal; with 2 lone pairs → bent."] },
    { name: "Ionic, polar covalent, or nonpolar covalent?", list: ["Look up the electronegativity of both atoms and subtract.", "Difference below about 0.4 → nonpolar covalent.", "About 0.4 to 1.7 → polar covalent.", "Above about 1.7 → ionic. (Quick rule: metal + nonmetal is usually ionic.)"] }
  ],
  examples: [
    { q: "Draw the Lewis structure of water (H₂O) and give its shape.", steps: ["Valence electrons: O = 6, H = 1 × 2 → 8 total.", "O goes in the center: H–O–H uses 4 electrons.", "4 left → 2 lone pairs on O. O has 8, each H has 2 ✓", "Around O: 2 bonds + 2 lone pairs = 4 groups, 2 are lone pairs → bent (about 104.5°).", "Bent and lopsided → polar."], answer: "H–O–H with 2 lone pairs on O; bent; polar" },
    { q: "Draw the Lewis structure of CO₂ and give its shape.", steps: ["Valence: C = 4, O = 6 × 2 → 16.", "O–C–O uses 4. Give each O 3 lone pairs (12 more). 16 used, but C only has 4 electrons.", "Move one lone pair from each O into a bond: O=C=O. Now everyone has 8.", "C has 2 groups (two double bonds), 0 lone pairs → linear, 180°.", "Symmetric → nonpolar overall."], answer: "O=C=O; linear; nonpolar" },
    { q: "What is the shape of NH₃? Is it polar?", steps: ["Valence: N = 5, H = 3 → 8.", "3 N–H bonds (6 electrons) + 1 lone pair on N.", "4 groups with 1 lone pair → trigonal pyramidal.", "The lone pair makes it lopsided → polar."], answer: "Trigonal pyramidal, polar" },
    { q: "Classify each bond: Na–Cl (0.93 and 3.16), H–Cl (2.20 and 3.16), Cl–Cl.", steps: ["Na–Cl: 3.16 − 0.93 = 2.23 → ionic.", "H–Cl: 3.16 − 2.20 = 0.96 → polar covalent.", "Cl–Cl: 0 → nonpolar covalent."], answer: "Ionic; polar covalent; nonpolar covalent" },
    { q: "Show how sodium and chlorine form an ionic bond.", steps: ["Na has 1 valence electron; Cl has 7.", "Na gives its 1 electron to Cl.", "Na becomes Na⁺ (now has a full shell underneath); Cl becomes Cl⁻ (8 valence electrons).", "Opposite charges attract → NaCl."], answer: "Na → Na⁺ + e⁻; Cl + e⁻ → Cl⁻; Na⁺ and Cl⁻ attract" }
  ],
  mistakes: [
    ["Uses total electrons instead of valence electrons.", "“For Lewis structures we only use the outer electrons. What group is it in?”"],
    ["Puts H in the center.", "“Hydrogen can only make one bond. Can it be in the middle?”"],
    ["Gives the center atom more than 8 or the wrong total.", "“Count every dot and every line (2 each). Does it match the total you started with?”"],
    ["Calls water linear because it’s drawn flat.", "“How many lone pairs are on oxygen? They push the hydrogens down.”"],
    ["Says CO₂ is polar because C=O bonds are polar.", "“The two bonds pull in opposite directions. What happens when two equal pulls go opposite ways?”"]
  ],
  ask: ["How many valence electrons do you have in total?", "Which atom goes in the center?", "Does every atom have an octet (or 2 for H)?", "How many electron groups are around the center? How many are lone pairs?", "Is the molecule symmetric?"],
  check: [
    { q: "Bond type in MgO?", a: "Ionic (metal + nonmetal)" },
    { q: "Shape of CH₄?", a: "Tetrahedral (4 bonds, 0 lone pairs), 109.5°" },
    { q: "Total valence electrons in NH₄⁺?", a: "5 + 4 − 1 = 8" }
  ],
  visual: "CHV_LEWIS" },

/* ---------------- UNIT 5 ---------------- */
{ id: "c-05", course: "Chemistry", unit: 5, title: "Naming Compounds & Writing Formulas", standards: "HS-PS1-2 (chemical language)",
  bigIdea: "There are two naming systems. Ionic compounds (a metal or NH₄⁺ + a nonmetal or polyatomic ion) are named by their ions, and their formulas must have a total charge of zero. Molecular (covalent) compounds (two nonmetals) use Greek prefixes to tell how many of each atom there are.",
  tips: "The first question is always: <b>“Does it start with a metal?”</b> If yes → ionic, no prefixes. If no (two nonmetals) → use prefixes. Keep a polyatomic ion list out on the table. Students are expected to look these up, not memorize them on the spot.",
  vocab: [
    ["cation / anion", "Positive ion / negative ion. In a name and formula, the cation always comes first."],
    ["ionic compound name", "Cation name + anion name ending in “-ide” (chloride, oxide, sulfide). NaCl = sodium chloride."],
    ["polyatomic ion", "A group of atoms with one charge, like nitrate NO₃⁻, sulfate SO₄²⁻, hydroxide OH⁻, ammonium NH₄⁺. Keep the name as is."],
    ["Roman numeral (Stock system)", "For transition metals with more than one possible charge, the Roman numeral shows the charge: iron(III) = Fe³⁺."],
    ["criss-cross method", "Use the number from each ion’s charge as the other ion’s subscript, then reduce."],
    ["covalent prefixes", "1 mono, 2 di, 3 tri, 4 tetra, 5 penta, 6 hexa, 7 hepta, 8 octa, 9 nona, 10 deca. Don’t use “mono” on the first element."],
    ["subscript", "The small number after an atom telling how many of that atom are in the formula."]
  ],
  steps: [
    { name: "Writing an ionic formula from the name", list: ["Write each ion with its charge (use the periodic table group or the polyatomic list; use the Roman numeral for transition metals).", "Criss-cross the charge numbers to become subscripts (drop the signs).", "Reduce if both subscripts can be divided by the same number.", "Use parentheses around a polyatomic ion if you need more than one: Ca(NO₃)₂.", "Check: total positive charge = total negative charge."] },
    { name: "Naming a transition metal compound", list: ["Find the anion’s charge and multiply by its subscript → total negative charge.", "The metal’s total positive charge must be the same.", "Divide by the number of metal atoms → that is the Roman numeral."] },
    { name: "Naming a molecular compound", list: ["Prefix + first element (skip “mono”).", "Prefix + second element ending in “-ide.”", "Drop the double vowel: pentaoxide → pentoxide, monooxide → monoxide."] }
  ],
  examples: [
    { q: "Write the formula for aluminum oxide.", steps: ["Aluminum: group 13 → Al³⁺. Oxide: group 16 → O²⁻.", "Criss-cross: Al gets 2, O gets 3 → Al₂O₃.", "Check: 2(+3) = +6 and 3(−2) = −6 ✓"], answer: "Al₂O₃" },
    { q: "Write the formula for calcium nitrate.", steps: ["Calcium → Ca²⁺. Nitrate → NO₃⁻ (polyatomic).", "Need 2 nitrates to cancel 2+: Ca(NO₃)₂.", "Parentheses keep the nitrate together."], answer: "Ca(NO₃)₂" },
    { q: "Name CuCl₂.", steps: ["Cu is a transition metal, so it needs a Roman numeral.", "Chloride is Cl⁻. Two of them → total −2.", "One Cu must be +2 → copper(II)."], answer: "copper(II) chloride" },
    { q: "Name Fe₂O₃.", steps: ["Oxide is O²⁻; three of them → −6.", "Two Fe atoms share +6 → each is +3.", "iron(III) oxide."], answer: "iron(III) oxide" },
    { q: "Name N₂O₅ and CO.", steps: ["N₂O₅: two nonmetals → prefixes. di + nitrogen, penta + oxide → dinitrogen pentoxide.", "CO: one carbon (no mono on the first element), one oxygen → carbon monoxide."], answer: "dinitrogen pentoxide; carbon monoxide" }
  ],
  mistakes: [
    ["Uses prefixes on ionic compounds (“dichloride” in CaCl₂).", "“Does it start with a metal? Then no prefixes. The charges already tell how many.”"],
    ["Writes NO₃₂ instead of (NO₃)₂.", "“Do you mean 32 oxygens, or two nitrate ions? Parentheses show you mean the whole group.”"],
    ["Uses the subscript as the Roman numeral (Fe₂O₃ → iron(II)).", "“The Roman numeral is the charge on ONE iron. What total charge do the oxides need to balance?”"],
    ["Forgets to reduce: Ca₂O₂.", "“Can both subscripts be divided by 2?”"],
    ["Changes the polyatomic ion’s name to “-ide.”", "“Polyatomic ions keep their own names: sulfate stays sulfate.”"]
  ],
  ask: ["Does it start with a metal? Ionic or molecular?", "What is the charge of each ion?", "Is there a polyatomic ion? Where’s your list?", "Do the charges add up to zero?", "Is this metal one that needs a Roman numeral?"],
  check: [
    { q: "Name MgCl₂.", a: "magnesium chloride" },
    { q: "Formula for sulfur hexafluoride?", a: "SF₆" },
    { q: "Formula for ammonium sulfate?", a: "(NH₄)₂SO₄" }
  ],
  visual: "CHV_NAME" },

/* ---------------- UNIT 6 ---------------- */
{ id: "c-06", course: "Chemistry", unit: 6, title: "The Mole, Molar Mass & Formulas", standards: "HS-PS1-7",
  bigIdea: "Atoms are too small to count one at a time, so chemists count them in groups called moles. One mole = 6.022 × 10²³ particles (like a “dozen,” but huge). The molar mass from the periodic table tells how many grams one mole weighs, so the mole is the bridge between grams (what we can weigh) and particles (what is actually reacting).",
  tips: "Draw the <b>mole map</b> (see the visual) and keep it in front of the student. Every problem is: “Where am I starting, where am I going, and which arrow do I follow?” <b>The mole is always in the middle.</b> You can’t go straight from grams to particles.",
  vocab: [
    ["mole (mol)", "6.022 × 10²³ particles (atoms, molecules, or formula units)."],
    ["Avogadro’s number", "6.022 × 10²³."],
    ["molar mass", "The mass in grams of 1 mole of a substance (g/mol). Add up the atomic masses in the formula."],
    ["formula unit", "One “unit” of an ionic compound, like one NaCl."],
    ["molar volume", "At STP (0 °C, 1 atm), 1 mole of any gas = 22.4 L."],
    ["percent composition", "(mass of the element in 1 mole ÷ molar mass) × 100%."],
    ["empirical formula", "The simplest whole-number ratio of atoms (CH₂O)."],
    ["molecular formula", "The actual number of atoms in a molecule (C₆H₁₂O₆). It’s a whole-number multiple of the empirical formula."]
  ],
  steps: [
    { name: "Finding molar mass", list: ["List each element and how many atoms of it are in the formula (multiply through parentheses).", "Multiply each count by its atomic mass.", "Add them up. Unit: g/mol."] },
    { name: "Converting with the mole map", list: ["Grams → moles: divide by molar mass (or × 1 mol / molar mass g).", "Moles → particles: multiply by 6.022 × 10²³.", "Particles → moles: divide by 6.022 × 10²³.", "Moles → grams: multiply by molar mass.", "Grams ↔ particles: always go through moles (two steps)."] },
    { name: "Empirical formula from percents", list: ["Assume 100 g, so each percent becomes grams.", "Change grams to moles for each element.", "Divide every mole value by the smallest one.", "If you get something like 1.5 or 1.33, multiply all by 2 or 3 to get whole numbers."] }
  ],
  examples: [
    { q: "Find the molar mass of water (H₂O) and of calcium nitrate, Ca(NO₃)₂.", steps: ["H₂O: 2 H × 1.01 = 2.02; 1 O × 16.00 = 16.00. Total 18.02 g/mol.", "Ca(NO₃)₂: 1 Ca = 40.08; 2 N × 14.01 = 28.02; 6 O × 16.00 = 96.00 (3 O × 2).", "Total: 40.08 + 28.02 + 96.00 = 164.10 g/mol."], answer: "18.02 g/mol; 164.10 g/mol" },
    { q: "How many moles are in 36.0 g of water?", steps: ["Grams → moles: divide by molar mass.", "36.0 g × (1 mol / 18.02 g) = 1.998 mol."], answer: "2.00 mol" },
    { q: "How many molecules are in 0.250 mol of CO₂?", steps: ["Moles → particles: multiply by Avogadro’s number.", "0.250 × 6.022 × 10²³ = 1.51 × 10²³."], answer: "1.51 × 10²³ molecules" },
    { q: "What is the mass of 3.01 × 10²⁴ atoms of iron?", steps: ["Particles → moles: 3.01 × 10²⁴ ÷ 6.022 × 10²³ = 5.00 mol.", "Moles → grams: 5.00 mol × 55.85 g/mol = 279 g."], answer: "279 g (two steps, through moles)" },
    { q: "A compound is 40.0% C, 6.7% H, and 53.3% O. Find its empirical formula.", steps: ["Assume 100 g: 40.0 g C, 6.7 g H, 53.3 g O.", "Moles: C 40.0 ÷ 12.01 = 3.33; H 6.7 ÷ 1.01 = 6.63; O 53.3 ÷ 16.00 = 3.33.", "Divide by the smallest (3.33): C 1, H 1.99 ≈ 2, O 1."], answer: "CH₂O" },
    { q: "What is the percent oxygen by mass in water?", steps: ["Mass of O in 1 mole: 16.00 g. Molar mass: 18.02 g.", "16.00 ÷ 18.02 × 100% = 88.8%."], answer: "88.8% O" }
  ],
  mistakes: [
    ["Multiplies by molar mass when going from grams to moles.", "“Check the units on your train tracks. Do the grams cancel?”"],
    ["Forgets to multiply through parentheses: Ca(NO₃)₂ has 3 O.", "“The 2 outside the parentheses applies to everything inside. How many oxygens is that?”"],
    ["Goes straight from grams to particles with Avogadro’s number.", "“Find it on the mole map. What’s always in the middle?”"],
    ["Rounds 1.5 to 2 in an empirical formula.", "“1.5 isn’t close to a whole number. What can you multiply by to make it whole?”"],
    ["Types 6.022 × 10²³ into the calculator as 6.022 × 10 ^ 23 without parentheses when dividing.", "“Use the EE (or ×10ˣ) button, or put the whole number in parentheses.”"]
  ],
  ask: ["Where are you starting and where are you going on the mole map?", "What is the molar mass? Did you count every atom?", "Which unit needs to cancel?", "Is your answer reasonable? (A few grams should be a small number of moles.)", "For empirical formulas: did you divide by the smallest?"],
  check: [
    { q: "Molar mass of NaCl?", a: "22.99 + 35.45 = 58.44 g/mol" },
    { q: "Moles in 11.0 g of CO₂ (44.01 g/mol)?", a: "0.250 mol" },
    { q: "Particles in 2.00 mol?", a: "1.20 × 10²⁴" }
  ],
  visual: "CHV_MOLE" },

/* ---------------- UNIT 7 ---------------- */
{ id: "c-07", course: "Chemistry", unit: 7, title: "Chemical Reactions: Balancing Equations & Reaction Types", standards: "HS-PS1-2, HS-PS1-7",
  bigIdea: "In a chemical reaction, atoms are rearranged, never created or destroyed (the Law of Conservation of Mass). A balanced equation has the same number of each kind of atom on both sides. Recognizing the five reaction types helps students predict what the products will be.",
  tips: "The golden rule: <b>change the big numbers in front (coefficients), never the small numbers (subscripts)</b>. Changing a subscript changes the substance itself (H₂O → H₂O₂ turns water into hydrogen peroxide). Have the student make an atom tally table under the equation and update it after every change.",
  vocab: [
    ["reactants → products", "Reactants are the starting substances (left). Products are what forms (right). The arrow means “yields.”"],
    ["coefficient", "The big number in front of a formula. It multiplies every atom in that formula."],
    ["subscript", "The small number in a formula. It is part of the substance’s identity, so you can’t change it while balancing."],
    ["Law of Conservation of Mass", "Mass (and the number of each atom) is the same before and after a reaction."],
    ["state symbols", "(s) solid, (l) liquid, (g) gas, (aq) dissolved in water."],
    ["synthesis / decomposition", "Synthesis: A + B → AB. Decomposition: AB → A + B."],
    ["single replacement", "A + BC → AC + B. A more reactive element kicks out a less reactive one."],
    ["double replacement", "AB + CD → AD + CB. Partners switch; often makes a precipitate (solid), water, or a gas."],
    ["combustion", "Fuel (CₓHᵧ) + O₂ → CO₂ + H₂O. Burning."],
    ["diatomic elements", "H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ exist as pairs (“Have No Fear Of Ice Cold Beer” or the “7” shape on the table)."]
  ],
  steps: [
    { name: "Balancing an equation", list: ["Write the correct formulas (don’t touch subscripts after this!).", "Make a tally table: count each element on the left and right.", "Balance one element at a time with coefficients. Start with the element that appears in the fewest formulas; save H and O (and any element that appears alone, like O₂) for last.", "Treat a polyatomic ion that appears on both sides as one unit.", "Re-count everything after each change.", "Make sure the coefficients are in the lowest whole-number ratio."] },
    { name: "Identifying the reaction type", list: ["One product from two or more reactants → synthesis.", "One reactant breaking apart → decomposition.", "Element + compound → single replacement.", "Two compounds trading partners → double replacement.", "Something with C and H + O₂ making CO₂ + H₂O → combustion."] }
  ],
  examples: [
    { q: "Balance: H₂ + O₂ → H₂O", steps: ["Tally: left H 2, O 2; right H 2, O 1.", "O is unbalanced. Put 2 in front of H₂O: H₂ + O₂ → 2H₂O. Now right has H 4, O 2.", "H is unbalanced. Put 2 in front of H₂: 2H₂ + O₂ → 2H₂O.", "Tally: H 4 = 4, O 2 = 2 ✓"], answer: "2H₂ + O₂ → 2H₂O (synthesis)" },
    { q: "Balance: CH₄ + O₂ → CO₂ + H₂O", steps: ["C: 1 = 1 ✓", "H: 4 on the left, 2 on the right → 2H₂O.", "O on the right: 2 (in CO₂) + 2 (in 2H₂O) = 4. Put 2 in front of O₂.", "Final tally: C 1 = 1, H 4 = 4, O 4 = 4 ✓"], answer: "CH₄ + 2O₂ → CO₂ + 2H₂O (combustion)" },
    { q: "Balance: Al + O₂ → Al₂O₃", steps: ["O: 2 on the left, 3 on the right. The least common multiple of 2 and 3 is 6.", "3O₂ (6 O) and 2Al₂O₃ (6 O).", "Al: now 4 on the right → 4Al.", "Tally: Al 4 = 4, O 6 = 6 ✓"], answer: "4Al + 3O₂ → 2Al₂O₃ (synthesis)" },
    { q: "Balance: C₃H₈ + O₂ → CO₂ + H₂O", steps: ["C: 3 on the left → 3CO₂.", "H: 8 on the left → 4H₂O.", "O on the right: 3 × 2 + 4 × 1 = 10 → 5O₂.", "Tally: C 3 = 3, H 8 = 8, O 10 = 10 ✓"], answer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O" },
    { q: "Predict the products and type: AgNO₃(aq) + NaCl(aq) →", steps: ["Two compounds → double replacement: switch partners.", "Ag⁺ pairs with Cl⁻ → AgCl. Na⁺ pairs with NO₃⁻ → NaNO₃.", "AgCl is insoluble, so it forms a solid precipitate.", "Already balanced: 1 of each."], answer: "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)" }
  ],
  mistakes: [
    ["Changes a subscript to balance (H₂O → H₂O₂).", "“If you change the small number, is it still water? We can only change how many molecules (the big number).”"],
    ["Puts a coefficient in the middle of a formula: H₂2O.", "“Coefficients go in front and multiply the whole formula.”"],
    ["Forgets the coefficient multiplies every atom: 3CO₂ has 6 O.", "“Multiply the coefficient by each subscript. How many O atoms is that?”"],
    ["Writes O instead of O₂ for oxygen gas.", "“Oxygen is diatomic. What does it look like on its own?”"],
    ["Leaves coefficients like 4, 6, 2, 6 that can be reduced.", "“Can all the coefficients be divided by the same number?”"]
  ],
  ask: ["Can you make a tally of each element on both sides?", "Which element is the most unbalanced?", "Are you changing a coefficient or a subscript?", "How many atoms does that coefficient give you?", "What kind of reaction pattern does this look like?"],
  check: [
    { q: "Balance: Na + Cl₂ → NaCl", a: "2Na + Cl₂ → 2NaCl (synthesis)" },
    { q: "Type of reaction: 2H₂O₂ → 2H₂O + O₂", a: "Decomposition" },
    { q: "Balance: Fe + O₂ → Fe₂O₃", a: "4Fe + 3O₂ → 2Fe₂O₃" }
  ],
  visual: "CHV_PART" },

/* ---------------- UNIT 8 ---------------- */
{ id: "c-08", course: "Chemistry", unit: 8, title: "Stoichiometry: Mole Ratios, Limiting Reactant & Percent Yield", standards: "HS-PS1-7",
  bigIdea: "A balanced equation is a recipe. The coefficients give the mole ratio, like “2 eggs for every 1 cup of flour.” Stoichiometry uses that ratio to figure out how much product you can make or how much reactant you need. The limiting reactant is the ingredient that runs out first and decides how much product is made.",
  tips: "Every stoich problem follows the same road: <b>grams A → moles A → moles B → grams B</b>. The only new step is the middle one, the mole ratio from the coefficients. Have the student write the balanced equation first and circle the two substances in the question. Ignore everything else in the equation.",
  vocab: [
    ["stoichiometry", "Using a balanced equation to calculate amounts of reactants and products."],
    ["mole ratio", "The ratio of coefficients in a balanced equation. In 2H₂ + O₂ → 2H₂O, the ratio of H₂ to H₂O is 2 : 2."],
    ["limiting reactant", "The reactant that runs out first. It limits how much product forms."],
    ["excess reactant", "The reactant that is left over."],
    ["theoretical yield", "The maximum amount of product you could make (from calculation)."],
    ["actual yield", "The amount you actually got in the lab."],
    ["percent yield", "(actual ÷ theoretical) × 100%."]
  ],
  steps: [
    { name: "Mass-to-mass stoichiometry", list: ["Balance the equation.", "Grams of the given → moles (÷ molar mass of the given).", "Moles of the given → moles of the wanted (× wanted coefficient / given coefficient).", "Moles of the wanted → grams (× molar mass of the wanted).", "Set it up as one train track so units cancel."] },
    { name: "Finding the limiting reactant", list: ["Change both reactants to moles.", "Use the mole ratio to find how much product EACH reactant could make.", "The one that makes LESS product is the limiting reactant.", "That smaller amount is the theoretical yield."] },
    { name: "Percent yield", list: ["Find the theoretical yield (calculation).", "Divide the actual yield (given) by the theoretical yield.", "Multiply by 100%. It should usually be under 100%."] }
  ],
  examples: [
    { q: "2H₂ + O₂ → 2H₂O. How many moles of water form from 3.0 mol of O₂?", steps: ["Mole ratio of H₂O to O₂ = 2 : 1.", "3.0 mol O₂ × (2 mol H₂O / 1 mol O₂) = 6.0 mol H₂O."], answer: "6.0 mol H₂O" },
    { q: "N₂ + 3H₂ → 2NH₃. How many grams of NH₃ can be made from 14.0 g of N₂?", steps: ["Grams N₂ → moles: 14.0 g ÷ 28.02 g/mol = 0.4996 mol N₂.", "Mole ratio: 2 mol NH₃ / 1 mol N₂ → 0.9993 mol NH₃.", "Moles → grams: 0.9993 × 17.04 g/mol = 17.03 g.", "3 sig figs."], answer: "17.0 g NH₃" },
    { q: "2H₂ + O₂ → 2H₂O. You have 4.0 mol H₂ and 3.0 mol O₂. Which is limiting? How much water forms? How much excess is left?", steps: ["From H₂: 4.0 mol × (2 H₂O / 2 H₂) = 4.0 mol H₂O.", "From O₂: 3.0 mol × (2 H₂O / 1 O₂) = 6.0 mol H₂O.", "H₂ makes less, so H₂ is limiting. Theoretical yield = 4.0 mol H₂O.", "O₂ used: 4.0 mol H₂ × (1 O₂ / 2 H₂) = 2.0 mol. Left over: 3.0 − 2.0 = 1.0 mol O₂."], answer: "H₂ is limiting; 4.0 mol H₂O; 1.0 mol O₂ left over" },
    { q: "The theoretical yield of NH₃ was 17.0 g, but the lab made 15.3 g. Find the percent yield.", steps: ["Percent yield = actual / theoretical × 100%.", "15.3 / 17.0 = 0.900.", "× 100% = 90.0%."], answer: "90.0%" }
  ],
  mistakes: [
    ["Skips the mole ratio and goes straight from moles of A to grams of B.", "“Which substance are these moles of right now? We have to switch to B first using the equation.”"],
    ["Flips the mole ratio.", "“The unit you want to cancel goes on the bottom. Which substance is that?”"],
    ["Uses an unbalanced equation.", "“Is the equation balanced? The ratio comes from the coefficients.”"],
    ["Picks the reactant with fewer grams (or fewer moles) as limiting.", "“The limiting reactant is the one that makes less PRODUCT. Calculate how much each one makes.”"],
    ["Puts theoretical on top for percent yield.", "“What did you actually get? That goes on top.”"]
  ],
  ask: ["Is the equation balanced?", "Which two substances does the question care about?", "Where are you on the grams → moles → moles → grams road?", "What’s the mole ratio between those two?", "How much product could each reactant make?"],
  check: [
    { q: "CH₄ + 2O₂ → CO₂ + 2H₂O. Moles of H₂O from 2 mol CH₄?", a: "4 mol" },
    { q: "Theoretical 10.0 g, actual 8.0 g. Percent yield?", a: "80%" },
    { q: "What does the limiting reactant decide?", a: "The maximum amount of product (theoretical yield)." }
  ],
  visual: "CHV_STOICH" },

/* ---------------- UNIT 9 ---------------- */
{ id: "c-09", course: "Chemistry", unit: 9, title: "Gases & the Gas Laws", standards: "HS-PS1-5 (particle motion), HS-PS3-2",
  bigIdea: "Gas particles move fast, spread out, and bump into the walls of their container. That bumping is pressure. Pressure, volume, temperature, and the number of moles are all connected: squeeze a gas into less space and the pressure goes up; heat it and it expands or pushes harder. Temperature must always be in Kelvin.",
  tips: "Have students sort the numbers into a table first: P₁, V₁, T₁, P₂, V₂, T₂. Cross out what doesn’t change, and the combined gas law turns into whichever law they need. <b>Always convert °C to K first (add 273).</b> That one step fixes most wrong answers.",
  vocab: [
    ["pressure", "Force from gas particles hitting the walls. Units: 1 atm = 760 mmHg = 101.3 kPa."],
    ["Kelvin temperature", "K = °C + 273. 0 K is absolute zero (particles have the least motion possible). Gas laws only work in Kelvin."],
    ["kinetic molecular theory", "Gas particles are far apart, move randomly and fast, and have elastic collisions. Higher temperature = faster particles."],
    ["Boyle’s law", "P₁V₁ = P₂V₂ (constant T). Pressure and volume are inversely related."],
    ["Charles’s law", "V₁/T₁ = V₂/T₂ (constant P). Volume and temperature are directly related."],
    ["Gay-Lussac’s law", "P₁/T₁ = P₂/T₂ (constant V). Pressure and temperature are directly related."],
    ["combined gas law", "P₁V₁/T₁ = P₂V₂/T₂."],
    ["ideal gas law", "PV = nRT. R = 0.0821 L·atm/(mol·K) (or 8.314 L·kPa/(mol·K))."],
    ["STP", "Standard temperature and pressure: 273 K and 1 atm. 1 mol of gas = 22.4 L at STP."]
  ],
  steps: [
    { name: "Solving a gas law problem", list: ["List the variables with labels (P₁, V₁, T₁, P₂, …).", "Convert all temperatures to Kelvin.", "Make sure both pressures (and both volumes) use the same unit.", "Start with the combined law P₁V₁/T₁ = P₂V₂/T₂ and cross out anything that stays the same.", "Solve for the unknown. Check: does it make sense? (More pressure → smaller volume; hotter → bigger volume or more pressure.)"] },
    { name: "Using PV = nRT", list: ["Use this one when moles (n) are in the problem, or there is only ONE set of conditions.", "Pick R to match your pressure unit (atm → 0.0821; kPa → 8.314).", "Volume in L, temperature in K.", "Rearrange for the unknown, then plug in."] }
  ],
  examples: [
    { q: "A gas has a volume of 2.0 L at 1.0 atm. What is its volume at 4.0 atm (same temperature)?", steps: ["Temperature is constant → Boyle’s law: P₁V₁ = P₂V₂.", "(1.0)(2.0) = (4.0)V₂.", "V₂ = 2.0 / 4.0 = 0.50 L.", "Check: 4 times the pressure → ¼ the volume ✓"], answer: "0.50 L" },
    { q: "A balloon is 3.0 L at 27 °C. What is its volume at 127 °C (same pressure)?", steps: ["Convert: 27 + 273 = 300 K; 127 + 273 = 400 K.", "Charles’s law: V₁/T₁ = V₂/T₂ → 3.0/300 = V₂/400.", "V₂ = 3.0 × 400 / 300 = 4.0 L.", "Check: hotter → bigger ✓"], answer: "4.0 L" },
    { q: "A tire is at 30. psi at 280 K. It heats up to 310 K. What is the new pressure?", steps: ["Volume stays the same → Gay-Lussac: P₁/T₁ = P₂/T₂.", "30./280 = P₂/310.", "P₂ = 30. × 310 / 280 = 33.2 psi."], answer: "≈ 33 psi" },
    { q: "A gas is 5.0 L at 1.0 atm and 300 K. Find its volume at 2.0 atm and 360 K.", steps: ["Combined: P₁V₁/T₁ = P₂V₂/T₂.", "V₂ = P₁V₁T₂ / (T₁P₂) = (1.0)(5.0)(360) / (300 × 2.0).", "= 1800 / 600 = 3.0 L."], answer: "3.0 L" },
    { q: "How many moles of gas are in a 10.0 L tank at 2.00 atm and 300. K?", steps: ["One set of conditions + moles → PV = nRT.", "n = PV / RT = (2.00)(10.0) / (0.0821 × 300.).", "= 20.0 / 24.63 = 0.812 mol."], answer: "0.812 mol" }
  ],
  mistakes: [
    ["Uses °C in a gas law.", "“What happens if T₁ is 0 °C? Can we divide by zero? Gas laws need Kelvin.”"],
    ["Uses R = 0.0821 with pressure in kPa.", "“Look at the units in R. Do they match your pressure?”"],
    ["Inverts the relationship in Boyle’s law.", "“If you squeeze a gas harder, does it get bigger or smaller? Does your answer agree?”"],
    ["Mixes units for pressure (atm and mmHg).", "“Both pressures need the same unit. Convert one with 1 atm = 760 mmHg.”"],
    ["Forgets to rearrange before plugging in and gets lost.", "“Solve for the letter first, then plug in the numbers.”"]
  ],
  ask: ["Which variables are given? Which one stays the same?", "Are your temperatures in Kelvin?", "Are your pressure units the same?", "Should the new volume be bigger or smaller? Why?", "Are moles in this problem? Then which law do we use?"],
  check: [
    { q: "Convert −73 °C to Kelvin.", a: "200 K" },
    { q: "Pressure doubles at constant temperature. What happens to the volume?", a: "It is cut in half (Boyle’s law)." },
    { q: "Volume of 2.0 mol of gas at STP?", a: "2.0 × 22.4 = 44.8 L" }
  ],
  visual: "CHV_GAS" },

/* ---------------- UNIT 10 ---------------- */
{ id: "c-10", course: "Chemistry", unit: 10, title: "Solutions: Solubility, Molarity & Dilution", standards: "HS-PS1-3, HS-PS1-5",
  bigIdea: "A solution is a solute dissolved evenly in a solvent (usually water). “Like dissolves like”: polar substances dissolve in polar solvents and nonpolar in nonpolar. Molarity (M) tells how concentrated a solution is: moles of solute per liter of solution.",
  tips: "Molarity has its formula built into the unit: <b>M = mol/L</b>. If students remember the unit, they can rearrange: mol = M × L. Remind them to change mL to L (÷ 1000) every time. For dilution, M₁V₁ = M₂V₂, and the volumes can stay in mL as long as both are in mL.",
  vocab: [
    ["solute / solvent", "The solute is what gets dissolved (salt). The solvent does the dissolving (water)."],
    ["solubility", "The most solute that can dissolve in a given amount of solvent at a certain temperature (often g per 100 g water)."],
    ["saturated / unsaturated / supersaturated", "Holding the max / less than the max / more than the max (unstable: it crystallizes if disturbed)."],
    ["solubility curve", "A graph of solubility vs. temperature. On the line = saturated, below = unsaturated, above = supersaturated."],
    ["molarity (M)", "moles of solute ÷ liters of solution."],
    ["dilution", "Adding solvent to lower the concentration. Moles of solute stay the same: M₁V₁ = M₂V₂."],
    ["like dissolves like", "Polar dissolves polar (salt, sugar in water). Nonpolar dissolves nonpolar (oil in gasoline). Oil and water don’t mix."],
    ["electrolyte", "A substance that makes ions in water so the solution conducts electricity (like NaCl)."]
  ],
  steps: [
    { name: "Molarity problems", list: ["Change grams of solute to moles (÷ molar mass) if needed.", "Change mL to L (÷ 1000).", "M = mol / L. Or rearrange: mol = M × L; L = mol / M."] },
    { name: "Dilution problems", list: ["Label: M₁ and V₁ (concentrated stock), M₂ and V₂ (the diluted solution).", "M₁V₁ = M₂V₂. Solve for the missing one.", "Explain what to do in the lab: measure V₁ of the stock, then add water until the total volume is V₂."] },
    { name: "Reading a solubility curve", list: ["Find the temperature on the x-axis.", "Go up to the curve and read the solubility on the y-axis.", "Compare the amount dissolved to the curve: below = unsaturated, on = saturated, above = supersaturated."] }
  ],
  examples: [
    { q: "0.50 mol of NaCl is dissolved to make 2.0 L of solution. What is the molarity?", steps: ["M = mol / L = 0.50 / 2.0."], answer: "0.25 M" },
    { q: "29.22 g of NaCl is dissolved in enough water to make 500. mL of solution. Find the molarity.", steps: ["Grams → moles: 29.22 ÷ 58.44 = 0.500 mol.", "mL → L: 500. ÷ 1000 = 0.500 L.", "M = 0.500 / 0.500 = 1.00 M."], answer: "1.00 M" },
    { q: "How many grams of KCl (74.55 g/mol) do you need to make 250. mL of a 0.200 M solution?", steps: ["mol = M × L = 0.200 × 0.250 = 0.0500 mol.", "Moles → grams: 0.0500 × 74.55 = 3.73 g."], answer: "3.73 g KCl" },
    { q: "You have 6.0 M HCl. How do you make 500. mL of 1.5 M HCl?", steps: ["M₁V₁ = M₂V₂ → (6.0)(V₁) = (1.5)(500.).", "V₁ = 750 / 6.0 = 125 mL.", "Measure 125 mL of the 6.0 M stock and add water until the total is 500. mL. (Safety: add acid to water.)"], answer: "125 mL of stock, diluted to 500. mL" },
    { q: "A solubility curve shows 60 g of a salt dissolves in 100 g of water at 40 °C. A student dissolves 45 g at 40 °C. Is the solution saturated?", steps: ["The maximum at 40 °C is 60 g.", "45 g is less than 60 g, so the point is below the curve.", "It could dissolve 15 g more."], answer: "Unsaturated" }
  ],
  mistakes: [
    ["Uses mL in the molarity formula.", "“Molarity is moles per LITER. What do you divide by to change mL to L?”"],
    ["Uses grams instead of moles.", "“Molarity counts moles. How do we turn grams into moles?”"],
    ["Thinks a more concentrated solution comes from adding water.", "“Adding water spreads the same solute out. Does that make it stronger or weaker?”"],
    ["Says V₂ is the amount of water to add.", "“V₂ is the total final volume. How much water is that, really?”"],
    ["Thinks oil dissolves in water because both are liquids.", "“Is oil polar or nonpolar? Is water? Like dissolves like.”"]
  ],
  ask: ["What is the solute and what is the solvent?", "Is the amount in grams or moles? Is the volume in mL or L?", "Is this a molarity problem or a dilution problem?", "Should the diluted solution be more or less concentrated?", "Is the point above, on, or below the solubility curve?"],
  check: [
    { q: "2 mol of sugar in 4 L of solution. Molarity?", a: "0.5 M" },
    { q: "Dilute 100. mL of 2.0 M to 400. mL. New molarity?", a: "(2.0)(100.) = M₂(400.) → 0.50 M" },
    { q: "Why don’t oil and water mix?", a: "Water is polar and oil is nonpolar; like dissolves like." }
  ],
  visual: "CHV_SOL" },

/* ---------------- UNIT 11 ---------------- */
{ id: "c-11", course: "Chemistry", unit: 11, title: "Acids, Bases & pH", standards: "HS-PS1-2, HS-PS1-6",
  bigIdea: "Acids release H⁺ ions (or donate protons) and bases release OH⁻ ions (or accept protons). The pH scale (0–14) measures how much H⁺ is in a solution: below 7 is acidic, 7 is neutral, above 7 is basic. Each step on the pH scale is 10 times stronger. Mixing an acid and a base neutralizes them into water and a salt.",
  tips: "pH is a logarithm, which scares students. Keep it simple: <b>“pH = the exponent with the sign flipped”</b> when [H⁺] is 1 × 10⁻ⁿ. Then show the calculator steps for other numbers: (−) LOG ( number ). Also stress the 10× rule: pH 3 is 10 times more acidic than pH 4, and 100 times more than pH 5.",
  vocab: [
    ["acid", "Arrhenius: makes H⁺ (H₃O⁺) in water. Brønsted–Lowry: a proton (H⁺) donor. Tastes sour, turns litmus red."],
    ["base", "Arrhenius: makes OH⁻ in water. Brønsted–Lowry: a proton acceptor. Bitter, slippery, turns litmus blue."],
    ["pH", "pH = −log[H⁺]. Below 7 acidic, 7 neutral, above 7 basic."],
    ["pOH", "pOH = −log[OH⁻]. pH + pOH = 14."],
    ["[H⁺][OH⁻] = 1 × 10⁻¹⁴", "In any water solution at 25 °C, the two concentrations multiply to this number."],
    ["strong vs. weak", "Strong acids/bases ionize 100% (HCl, HNO₃, H₂SO₄, NaOH, KOH). Weak ones only partly (acetic acid, ammonia). Strong ≠ concentrated."],
    ["neutralization", "Acid + base → salt + water. HCl + NaOH → NaCl + H₂O."],
    ["titration", "Adding a base of known concentration to an acid (or vice versa) until it is exactly neutralized, to find the unknown concentration."],
    ["conjugate acid–base pair", "Two substances that differ by one H⁺. The acid loses H⁺ to become its conjugate base."]
  ],
  steps: [
    { name: "pH calculations", list: ["Given [H⁺]: pH = −log[H⁺].", "Given pH: [H⁺] = 10<sup>−pH</sup>.", "Given [OH⁻]: find pOH = −log[OH⁻], then pH = 14 − pOH.", "Decide: less than 7 acidic, 7 neutral, greater than 7 basic."] },
    { name: "Titration (1 : 1 acid and base, like HCl and NaOH)", list: ["M<sub>acid</sub> × V<sub>acid</sub> = M<sub>base</sub> × V<sub>base</sub>.", "Plug in the three known values and solve for the fourth.", "For acids like H₂SO₄ (2 H⁺), the base needs twice as many moles. Ask your teacher which method they use."] },
    { name: "Finding conjugate pairs", list: ["Find what lost an H⁺ (that’s the acid) and what gained an H⁺ (that’s the base) on the left.", "On the right, the acid’s leftover is its conjugate base; the base with the extra H⁺ is its conjugate acid."] }
  ],
  examples: [
    { q: "What is the pH of a solution with [H⁺] = 1 × 10⁻³ M? Acidic or basic?", steps: ["pH = −log(1 × 10⁻³) = 3.", "3 is less than 7 → acidic."], answer: "pH 3, acidic" },
    { q: "Find the pH if [H⁺] = 2.5 × 10⁻⁴ M.", steps: ["pH = −log(2.5 × 10⁻⁴).", "Calculator: (−) LOG (2.5 EE −4) = 3.60."], answer: "pH ≈ 3.60" },
    { q: "A solution has a pH of 4. Find its pOH, [H⁺], and [OH⁻].", steps: ["pOH = 14 − 4 = 10.", "[H⁺] = 10⁻⁴ M = 1 × 10⁻⁴ M.", "[OH⁻] = 10⁻¹⁰ M = 1 × 10⁻¹⁰ M."], answer: "pOH 10, [H⁺] = 1 × 10⁻⁴ M, [OH⁻] = 1 × 10⁻¹⁰ M" },
    { q: "25.0 mL of HCl is neutralized by 30.0 mL of 0.100 M NaOH. What is the HCl concentration?", steps: ["HCl and NaOH react 1 : 1: M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub>.", "M<sub>a</sub>(25.0) = (0.100)(30.0).", "M<sub>a</sub> = 3.00 / 25.0 = 0.120 M."], answer: "0.120 M HCl" },
    { q: "Label the acid, base, and conjugates: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻", steps: ["H₂O gives an H⁺ to NH₃ → H₂O is the acid, NH₃ is the base.", "NH₃ + H⁺ = NH₄⁺ → conjugate acid.", "H₂O − H⁺ = OH⁻ → conjugate base."], answer: "Base NH₃, acid H₂O, conjugate acid NH₄⁺, conjugate base OH⁻" }
  ],
  mistakes: [
    ["Thinks pH 2 is twice as acidic as pH 4.", "“Each pH step is 10 times. How many steps apart are 2 and 4? So how many times stronger?”"],
    ["Forgets the negative sign and gets a negative pH.", "“pH = NEGATIVE log. Most pH values are between 0 and 14.”"],
    ["Says a higher pH is more acidic.", "“Lower pH = more H⁺ = more acidic. Look at the pH scale.”"],
    ["Mixes up strong and concentrated.", "“Strong means it breaks apart all the way. Concentrated means there’s a lot of it. A strong acid can be dilute.”"],
    ["Uses pH + pOH = 7.", "“They add up to 14. 7 is just the middle.”"]
  ],
  ask: ["Is this pH below, at, or above 7?", "Are you given [H⁺], [OH⁻], pH, or pOH? Which formula connects it to what you want?", "How many pH steps apart are they? So how many times different?", "Which molecule gave away an H⁺?", "In a titration, which three values do you know?"],
  check: [
    { q: "How many times more acidic is pH 2 than pH 4?", a: "100 times (10 × 10)" },
    { q: "pH of [H⁺] = 1 × 10⁻⁹ M? Acidic or basic?", a: "pH 9, basic" },
    { q: "Products of HNO₃ + KOH?", a: "KNO₃ + H₂O (salt + water)" }
  ],
  visual: "CHV_PH" },

/* ---------------- UNIT 12 ---------------- */
{ id: "c-12", course: "Chemistry", unit: 12, title: "Energy, Reaction Rates & Equilibrium", standards: "HS-PS1-4, HS-PS1-5, HS-PS1-6, HS-PS3-1",
  bigIdea: "Every reaction either releases energy (exothermic, feels hot) or absorbs energy (endothermic, feels cold). Reactions happen when particles collide hard enough (activation energy) and in the right direction, so anything that causes more or harder collisions speeds them up. Many reactions are reversible and reach equilibrium, where the forward and reverse reactions happen at the same rate. Le Châtelier’s principle predicts how equilibrium shifts when something changes.",
  tips: "For Le Châtelier, use the <b>“seesaw”</b> idea: the reaction shifts AWAY from whatever you add and TOWARD whatever you remove. Treat heat as a reactant (endothermic) or a product (exothermic). For q = mcΔT, have the student write the units next to each number. Joules will be left at the end.",
  vocab: [
    ["exothermic / endothermic", "Exo releases heat (ΔH negative, surroundings get warmer). Endo absorbs heat (ΔH positive, surroundings get colder)."],
    ["enthalpy change (ΔH)", "The heat released or absorbed by a reaction, in kJ."],
    ["specific heat (c)", "Energy needed to raise 1 g of a substance by 1 °C. Water: 4.18 J/(g·°C)."],
    ["q = mcΔT", "Heat (J) = mass (g) × specific heat × change in temperature (final − initial)."],
    ["activation energy (Eₐ)", "The minimum energy needed for a reaction to start (the “hill” on the energy diagram)."],
    ["catalyst", "Speeds up a reaction by lowering the activation energy. It is not used up and doesn’t change ΔH."],
    ["collision theory", "Particles must collide with enough energy and the right orientation. More collisions → faster rate."],
    ["chemical equilibrium", "Forward and reverse rates are equal, so the amounts stop changing (they are not necessarily equal amounts)."],
    ["Le Châtelier’s principle", "If you stress a system at equilibrium, it shifts to reduce that stress."],
    ["equilibrium constant K", "K = [products]<sup>coefficients</sup> / [reactants]<sup>coefficients</sup> (leave out solids and pure liquids). K > 1 → products favored."]
  ],
  steps: [
    { name: "q = mcΔT", list: ["List m (g), c, and both temperatures.", "ΔT = final − initial.", "Multiply: q = m × c × ΔT. Answer in J (÷ 1000 for kJ).", "To find c, m, or ΔT instead, rearrange first (c = q / (mΔT))."] },
    { name: "Factors that speed up a reaction", list: ["Higher temperature (faster particles, harder collisions).", "Higher concentration or pressure (more particles, more collisions).", "More surface area (smaller pieces; powder reacts faster than a chunk).", "Adding a catalyst (lower activation energy)."] },
    { name: "Predicting a Le Châtelier shift", list: ["Write where heat goes (reactant side for endothermic, product side for exothermic).", "Add a substance → shift away from it. Remove → shift toward it.", "Raise temperature → shift away from the heat side. Lower → toward it.", "Raise pressure (gases) → shift toward the side with fewer gas moles."] }
  ],
  examples: [
    { q: "How much heat does it take to warm 50.0 g of water from 20.0 °C to 45.0 °C? (c = 4.18 J/g·°C)", steps: ["ΔT = 45.0 − 20.0 = 25.0 °C.", "q = (50.0 g)(4.18 J/g·°C)(25.0 °C).", "q = 5225 J ≈ 5.23 kJ."], answer: "5.23 × 10³ J (5.23 kJ)" },
    { q: "A 100. g piece of metal absorbs 900. J and warms by 20.0 °C. What is its specific heat?", steps: ["c = q / (mΔT).", "c = 900. / (100. × 20.0) = 900. / 2000."], answer: "0.450 J/(g·°C) (that’s close to iron)" },
    { q: "CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = −890 kJ. Exothermic or endothermic?", steps: ["ΔH is negative → energy is released.", "The products are lower in energy than the reactants on the energy diagram."], answer: "Exothermic" },
    { q: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat. Which way does it shift if you (a) add N₂, (b) raise the temperature, (c) raise the pressure?", steps: ["(a) Adding N₂ (a reactant) → shift away from it → to the right (more NH₃).", "(b) Heat is on the product side. Adding heat → shift away from it → to the left.", "(c) Gas moles: left 1 + 3 = 4, right 2. Higher pressure → toward fewer moles → to the right."], answer: "(a) right, (b) left, (c) right" },
    { q: "Write the equilibrium expression for N₂(g) + 3H₂(g) ⇌ 2NH₃(g).", steps: ["Products on top, reactants on the bottom.", "Each concentration is raised to its coefficient."], answer: "K = [NH₃]² / ([N₂][H₂]³)" }
  ],
  mistakes: [
    ["Uses initial − final for ΔT and gets a negative heat when warming.", "“ΔT is always final minus initial. Did the temperature go up?”"],
    ["Thinks a catalyst changes ΔH or gets used up.", "“Look at the energy diagram. Which part does the catalyst change, the hill or the start and end?”"],
    ["Thinks equilibrium means equal amounts of reactants and products.", "“Equilibrium means equal RATES. The amounts just stop changing.”"],
    ["Shifts toward the substance that was added.", "“If you add more of something, the reaction uses it up. Which direction uses it?”"],
    ["Mixes up exothermic (feels hot) and endothermic (feels cold).", "“Exo = exit. Heat exits the reaction into your hand, so it feels hot.”"]
  ],
  ask: ["Is heat going in or coming out? How do you know?", "What are m, c, and ΔT here?", "What would make the particles collide more often or harder?", "What was added or removed? Which way will the reaction go to fix it?", "Which side has fewer gas moles?"],
  check: [
    { q: "Heat to warm 10.0 g of water by 5.0 °C?", a: "10.0 × 4.18 × 5.0 = 209 J" },
    { q: "What does a catalyst do to the activation energy?", a: "Lowers it (ΔH stays the same)." },
    { q: "K is very large (like 10⁸). What does that mean?", a: "Products are strongly favored at equilibrium." }
  ],
  visual: "CHV_ENERGY" }
);

/* ===== Chemistry visuals (white background so they print cleanly) ===== */
(function () {
  const t = (x, y, s, o) => `<text x="${x}" y="${y}" font-size="${(o && o.fs) || 12}" text-anchor="${(o && o.a) || "middle"}" font-weight="${o && o.b ? 700 : 400}" fill="${(o && o.c) || "#333"}">${s}</text>`;
  const ln = (x1, y1, x2, y2, c, w, d) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c || "#333"}" stroke-width="${w || 2}"${d ? ' stroke-dasharray="5 4"' : ""}/>`;
  const rect = (x, y, w, h, f, s, r) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r ?? 10}" fill="${f || "#fff"}" stroke="${s || "#333"}" stroke-width="2"/>`;
  const arrow = (x1, y1, x2, y2, c) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 9; return ln(x1, y1, x2, y2, c, 2.5) + `<polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)} ${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}" fill="${c || "#333"}"/>`; };
  const svg = (w, h, inner, alt) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${alt}" style="background:#fff;border-radius:12px;max-width:100%;height:auto">${inner}</svg>`;
  const PI = Math.PI;
  const BLUE = "#2b7de9", PINK = "#e8368f", ORANGE = "#e08a00", GREEN = "#1aa36f", RED = "#d0453a", PURPLE = "#8a54e0";

  /* 1. train tracks */
  const train = (() => {
    const cells = [["2.5 h", ""], ["60 min", "1 h"], ["60 s", "1 min"]];
    let g = "", x = 20;
    cells.forEach((c, i) => {
      g += t(x + 50, 58, c[0], { fs: 16, b: 1 }) + (c[1] ? t(x + 50, 98, c[1], { fs: 16, b: 1 }) : "");
      if (i) g += ln(x, 30, x, 110);
      x += 100;
    });
    g += ln(20, 74, 320, 74) + ln(320, 30, 320, 110) + t(355, 80, "= 9.0 × 10³ s", { fs: 15, b: 1, a: "start", c: GREEN });
    g += ln(30, 54, 70, 46, RED, 2) + ln(130, 94, 170, 86, RED, 2) + ln(130, 54, 172, 46, PURPLE, 2) + ln(230, 94, 270, 86, PURPLE, 2);
    g += t(250, 140, "Same unit on top and bottom → it cancels. Only seconds are left.", { fs: 12 });
    return svg(500, 155, g, "dimensional analysis train tracks");
  })();

  /* 2. atom: carbon-12 */
  const atom = (() => {
    const C = 140; let g = `<circle cx="${C}" cy="${C}" r="62" fill="none" stroke="#999" stroke-width="1.5"/><circle cx="${C}" cy="${C}" r="112" fill="none" stroke="#999" stroke-width="1.5"/>`;
    const nuc = [[-8, -8, 1], [8, -8, 0], [0, 0, 1], [-10, 8, 0], [10, 8, 1], [0, 14, 0], [-14, -1, 0], [14, -1, 1], [-4, -16, 0], [6, 18, 1], [-6, 20, 1], [16, 12, 0]];
    nuc.forEach(n => g += `<circle cx="${C + n[0]}" cy="${C + n[1] - 2}" r="8" fill="${n[2] ? RED : "#9aa3ad"}" stroke="#fff" stroke-width="1"/>`);
    [[0, 62], [PI, 62], [0.5, 112], [2.1, 112], [3.6, 112], [5.2, 112]].forEach(([a, r]) => g += `<circle cx="${C + r * Math.cos(a)}" cy="${C + r * Math.sin(a)}" r="7" fill="${BLUE}"/>`);
    g += t(300, 60, "Carbon-12", { a: "start", fs: 15, b: 1 }) + `<circle cx="306" cy="88" r="7" fill="${RED}"/>` + t(320, 92, "6 protons (atomic number)", { a: "start" }) +
      `<circle cx="306" cy="114" r="7" fill="#9aa3ad"/>` + t(320, 118, "6 neutrons (12 − 6)", { a: "start" }) + `<circle cx="306" cy="140" r="7" fill="${BLUE}"/>` + t(320, 144, "6 electrons (neutral)", { a: "start" }) +
      t(300, 180, "Shells: 2 in the first,", { a: "start" }) + t(300, 196, "4 in the second (valence)", { a: "start" }) + t(300, 226, "Mass number = protons + neutrons", { a: "start", b: 1, fs: 11 });
    return svg(500, 280, g, "Bohr model of a carbon-12 atom");
  })();

  /* 3. periodic trends */
  const trends = (() => {
    let g = "";
    const cols = [0, 1, 12, 13, 14, 15, 16, 17], W = 22, X0 = 30, Y0 = 30;
    for (let r = 0; r < 6; r++) for (let c = 0; c < 18; c++) {
      const isMain = c < 2 || c > 11; if (r === 0 && c > 0 && c < 17) continue; if (r < 3 && c > 1 && c < 12) continue;
      const f = c < 2 ? "#ffe3d6" : c > 11 ? "#dff3e8" : "#e6ecfb";
      g += `<rect x="${X0 + c * W}" y="${Y0 + r * W}" width="${W - 2}" height="${W - 2}" rx="3" fill="${f}" stroke="#bbb"/>`;
    }
    g += t(X0 + 17 * W + 10, Y0 + 15, "He", { fs: 9 }) + t(X0 + 16 * W + 10, Y0 + W + 15, "F", { fs: 10, b: 1, c: RED });
    g += arrow(X0 + 20, Y0 + 6 * W + 26, X0 + 17 * W, Y0 + 6 * W + 26, PINK) + t(X0 + 9 * W, Y0 + 6 * W + 44, "Ionization energy & electronegativity increase →", { fs: 12, b: 1, c: PINK });
    g += arrow(X0 + 18 * W + 22, Y0 + 6 * W, X0 + 18 * W + 22, Y0 + 4, PINK) + t(X0 + 18 * W + 34, Y0 + 70, "↑ IE & EN", { a: "start", fs: 12, b: 1, c: PINK });
    g += arrow(X0 + 17 * W, Y0 - 12, X0 + 20, Y0 - 12, BLUE) + t(X0 + 9 * W, Y0 - 18, "← Atomic radius increases", { fs: 12, b: 1, c: BLUE });
    g += arrow(X0 - 14, Y0 + 4, X0 - 14, Y0 + 6 * W, BLUE) + t(X0 - 20, Y0 + 6 * W + 24, "radius ↓", { a: "start", fs: 11, b: 1, c: BLUE });
    g += t(X0 + 1 * W, Y0 + 6 * W + 66, "s-block", { fs: 11, c: "#b05a2a" }) + t(X0 + 7 * W, Y0 + 6 * W + 66, "d-block (transition metals)", { fs: 11, c: "#4a62b0" }) + t(X0 + 15 * W, Y0 + 6 * W + 66, "p-block", { fs: 11, c: "#1d7a45" });
    return `<div style="text-align:center">` + svg(540, 250, `<g transform="translate(10,22)">${g}</g>`, "periodic table trend arrows") + `<p style="margin:6px 0 0;font-size:.9rem">Radius grows down and to the left. Ionization energy and electronegativity grow up and to the right, toward fluorine.</p></div>`;
  })();

  /* 4. Lewis water + VSEPR table */
  const lewis = (() => {
    const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="3.2" fill="#333"/>`;
    let g = t(150, 120, "O", { fs: 34, b: 1, c: RED }) + t(70, 168, "H", { fs: 28, b: 1 }) + t(230, 168, "H", { fs: 28, b: 1 });
    g += ln(130, 118, 86, 148) + ln(170, 118, 214, 148);
    g += dot(140, 76) + dot(160, 76) + dot(122, 92) + dot(122, 108);
    g += t(150, 210, "H₂O: 8 valence e⁻ · 2 bonds + 2 lone pairs", { fs: 12, b: 1 }) + t(150, 228, "4 electron groups → bent, about 104.5° · polar", { fs: 12 });
    const tbl = `<table style="border-collapse:collapse;font-size:.88rem;margin-top:8px">${[["Groups on center", "Lone pairs", "Shape", "Example"], ["2", "0", "linear (180°)", "CO₂"], ["3", "0", "trigonal planar (120°)", "BF₃"], ["4", "0", "tetrahedral (109.5°)", "CH₄"], ["4", "1", "trigonal pyramidal", "NH₃"], ["4", "2", "bent", "H₂O"]].map((r, i) => `<tr>${r.map(c => `<${i ? "td" : "th"} style="border:1px solid #ccc;padding:4px 8px">${c}</${i ? "td" : "th"}>`).join("")}</tr>`).join("")}</table>`;
    return `<div style="display:grid;justify-items:center">` + svg(300, 240, g, "Lewis structure of water") + tbl + "</div>";
  })();

  /* 5. naming flowchart */
  const naming = (() => {
    let g = rect(150, 10, 220, 46, "#fff7d6", ORANGE) + t(260, 30, "Does it start with a metal", { b: 1 }) + t(260, 46, "(or NH₄⁺)?", { b: 1 });
    g += arrow(200, 56, 110, 96, GREEN) + t(140, 76, "YES", { b: 1, c: GREEN, a: "end" }) + arrow(320, 56, 410, 96, RED) + t(380, 76, "NO", { b: 1, c: RED, a: "start" });
    g += rect(20, 98, 180, 44, "#e4f6ea", GREEN) + t(110, 117, "IONIC", { b: 1 }) + t(110, 134, "no prefixes; charges = 0", { fs: 11 });
    g += rect(320, 98, 180, 44, "#fde7ee", PINK) + t(410, 117, "MOLECULAR (2 nonmetals)", { b: 1, fs: 11 }) + t(410, 134, "use prefixes: di-, tri-…", { fs: 11 });
    g += arrow(110, 142, 110, 172, "#555") + rect(20, 174, 180, 44, "#fff", "#999") + t(110, 192, "Transition metal?", { b: 1, fs: 11 }) + t(110, 208, "Yes → Roman numeral", { fs: 11 });
    g += arrow(110, 218, 110, 246, "#555") + rect(20, 248, 180, 44, "#fff", "#999") + t(110, 266, "Polyatomic ion?", { b: 1, fs: 11 }) + t(110, 282, "Keep its name; use ( )", { fs: 11 });
    g += arrow(410, 142, 410, 172, "#555") + rect(320, 174, 180, 60, "#fff", "#999") + t(410, 192, "N₂O₅ → dinitrogen", { fs: 11 }) + t(410, 207, "pentoxide", { fs: 11 }) + t(410, 224, "no “mono” on the first", { fs: 11, b: 1 });
    g += t(260, 312, "Examples: NaCl sodium chloride · FeCl₃ iron(III) chloride · Ca(NO₃)₂ calcium nitrate", { fs: 11 });
    return svg(520, 322, g, "flowchart for naming ionic and molecular compounds");
  })();

  /* 6. mole map */
  const mole = (() => {
    let g = rect(20, 70, 120, 56, "#fff7d6", ORANGE) + t(80, 104, "GRAMS", { fs: 16, b: 1 });
    g += rect(210, 70, 120, 56, "#e8f1ff", BLUE) + t(270, 104, "MOLES", { fs: 16, b: 1 });
    g += rect(400, 70, 120, 56, "#e4f6ea", GREEN) + t(460, 98, "PARTICLES", { fs: 14, b: 1 }) + t(460, 114, "atoms/molecules", { fs: 10 });
    g += rect(210, 196, 120, 50, "#f3e9ff", PURPLE) + t(270, 218, "LITERS of gas", { fs: 13, b: 1 }) + t(270, 234, "(at STP)", { fs: 10 });
    g += arrow(142, 88, 206, 88, "#333") + t(174, 62, "÷ molar mass", { fs: 11, b: 1 }) + arrow(206, 110, 142, 110, "#333") + t(174, 144, "× molar mass", { fs: 11, b: 1 });
    g += arrow(332, 88, 396, 88, "#333") + t(364, 62, "× 6.022 × 10²³", { fs: 11, b: 1 }) + arrow(396, 110, 332, 110, "#333") + t(364, 144, "÷ 6.022 × 10²³", { fs: 11, b: 1 });
    g += arrow(255, 128, 255, 192, "#333") + arrow(285, 192, 285, 128, "#333") + t(232, 166, "× 22.4", { fs: 11, b: 1, a: "end" }) + t(308, 166, "÷ 22.4", { fs: 11, b: 1, a: "start" });
    g += t(270, 30, "The mole is always in the middle.", { fs: 14, b: 1, c: BLUE });
    return svg(540, 260, g, "mole map: grams, moles, particles, liters");
  })();

  /* 7. particle diagram 2H2 + O2 -> 2H2O */
  const part = (() => {
    const H = (x, y) => `<circle cx="${x}" cy="${y}" r="9" fill="#fff" stroke="#333" stroke-width="2"/>`, O = (x, y) => `<circle cx="${x}" cy="${y}" r="14" fill="${RED}" stroke="#333" stroke-width="2"/>`;
    let g = H(40, 60) + H(58, 60) + H(40, 110) + H(58, 110) + t(98, 90, "+", { fs: 22, b: 1 }) + O(140, 85) + O(166, 85);
    g += arrow(205, 85, 255, 85, "#333");
    g += O(300, 60) + H(282, 74) + H(318, 74) + O(300, 120) + H(282, 134) + H(318, 134);
    g += t(50, 150, "2H₂", { fs: 15, b: 1 }) + t(153, 150, "O₂", { fs: 15, b: 1 }) + t(300, 166, "2H₂O", { fs: 15, b: 1 });
    const tbl = `<table style="border-collapse:collapse;font-size:.9rem;margin-top:8px"><tr><th style="border:1px solid #ccc;padding:4px 10px">Atom</th><th style="border:1px solid #ccc;padding:4px 10px">Left</th><th style="border:1px solid #ccc;padding:4px 10px">Right</th></tr><tr><td style="border:1px solid #ccc;padding:4px 10px">H</td><td style="border:1px solid #ccc;padding:4px 10px">4</td><td style="border:1px solid #ccc;padding:4px 10px">4 ✓</td></tr><tr><td style="border:1px solid #ccc;padding:4px 10px">O</td><td style="border:1px solid #ccc;padding:4px 10px">2</td><td style="border:1px solid #ccc;padding:4px 10px">2 ✓</td></tr></table>`;
    return `<div style="display:grid;justify-items:center">` + svg(360, 180, g, "particle diagram of 2 H2 plus O2 makes 2 H2O") + tbl + `<p style="margin:6px 0 0;font-size:.9rem">Same atoms on both sides, just rearranged.</p></div>`;
  })();

  /* 8. stoich road */
  const stoich = (() => {
    const boxes = [["grams A", "#fff7d6", ORANGE], ["moles A", "#e8f1ff", BLUE], ["moles B", "#e8f1ff", BLUE], ["grams B", "#fff7d6", ORANGE]];
    let g = ""; boxes.forEach((b, i) => { const x = 10 + i * 140; g += rect(x, 50, 110, 50, b[1], b[2]) + t(x + 55, 80, b[0], { fs: 15, b: 1 }); if (i < 3) g += arrow(x + 112, 75, x + 138, 75, "#333"); });
    g += t(135, 125, "÷ molar mass A", { fs: 11, b: 1 }) + t(275, 125, "× mole ratio", { fs: 11, b: 1, c: PINK }) + t(275, 141, "(B coef / A coef)", { fs: 11, c: PINK }) + t(415, 125, "× molar mass B", { fs: 11, b: 1 });
    g += t(280, 30, "The only new step is the mole ratio from the balanced equation.", { fs: 13, b: 1 });
    return svg(570, 160, g, "stoichiometry road map");
  })();

  /* 9. gas law graphs */
  const gas = (() => {
    const panel = (ox, title, f, xl, yl, c) => {
      let g = ln(ox + 30, 150, ox + 220, 150) + ln(ox + 30, 150, ox + 30, 20) + t(ox + 125, 172, xl, { fs: 11, b: 1 }) + `<text x="${ox + 14}" y="90" font-size="11" font-weight="700" fill="#333" text-anchor="middle" transform="rotate(-90 ${ox + 14} 90)">${yl}</text>` + t(ox + 125, 14, title, { fs: 12, b: 1, c });
      let d = ""; for (let i = 0; i <= 60; i++) { const x = 0.15 + i / 60 * 0.85, y = f(x); d += (i ? "L" : "M") + (ox + 30 + x * 185).toFixed(1) + " " + (150 - y * 120).toFixed(1); }
      return g + `<path d="${d}" fill="none" stroke="${c}" stroke-width="3"/>`;
    };
    return svg(500, 185, panel(0, "Boyle: P × V = constant", x => Math.min(1, 0.15 / x), "volume", "pressure", BLUE) + panel(250, "Charles: V ÷ T = constant", x => 0.9 * x, "temperature (K)", "volume", RED), "Boyle's law curve and Charles's law line") +
      `<p style="text-align:center;margin:6px 0 0;font-size:.9rem">Squeeze it (less volume) → more pressure. Heat it (higher K) → more volume.</p>`;
  })();

  /* 10. solubility curve */
  const sol = (() => {
    const X = T => 50 + T * 4.5, Y = s => 220 - s * 1.6, f = T => 10 + 1.09 * T + 0.004 * T * T; // made-up salt, 60 g at 40 °C
    let g = ""; for (let T = 0; T <= 80; T += 10) g += ln(X(T), Y(0), X(T), Y(130), "#e2e2ea", 1) + t(X(T), 236, T, { fs: 10 });
    for (let s = 0; s <= 120; s += 20) g += ln(X(0), Y(s), X(80), Y(s), "#e2e2ea", 1) + t(X(0) - 6, Y(s) + 4, s, { fs: 10, a: "end" });
    let d = ""; for (let T = 0; T <= 80; T += 2) d += (T ? "L" : "M") + X(T).toFixed(1) + " " + Y(f(T)).toFixed(1);
    g += `<path d="${d}" fill="none" stroke="${BLUE}" stroke-width="3"/>` + ln(X(0), Y(0), X(80), Y(0)) + ln(X(0), Y(0), X(0), Y(130));
    g += `<circle cx="${X(40)}" cy="${Y(f(40))}" r="6" fill="${BLUE}"/>` + t(X(40) - 8, Y(f(40)) - 10, "on the line: saturated", { fs: 11, b: 1, a: "end", c: BLUE });
    g += `<circle cx="${X(40)}" cy="${Y(45)}" r="6" fill="${GREEN}"/>` + t(X(40) + 10, Y(45) + 4, "below: unsaturated (45 g)", { fs: 11, b: 1, a: "start", c: GREEN });
    g += `<circle cx="${X(60)}" cy="${Y(110)}" r="6" fill="${RED}"/>` + t(X(60) - 10, Y(110) + 4, "above: supersaturated", { fs: 11, b: 1, a: "end", c: RED });
    g += t(X(40), 256, "Temperature (°C)", { fs: 11, b: 1 }) + `<text x="14" y="${Y(65)}" font-size="11" font-weight="700" fill="#333" text-anchor="middle" transform="rotate(-90 14 ${Y(65)})">g solute / 100 g water</text>`;
    return svg(430, 265, g, "solubility curve with saturated, unsaturated and supersaturated points");
  })();

  /* 11. pH scale */
  const ph = (() => {
    const cols = ["#d7263d", "#e8452f", "#f0672c", "#f5902c", "#f7b52c", "#e9cf2c", "#b8d335", "#5cb85c", "#2fa58b", "#2b8fc4", "#2b6fd0", "#3a50c8", "#4b3ab8", "#5a2ca5", "#6a1f90"];
    let g = ""; cols.forEach((c, i) => g += `<rect x="${20 + i * 32}" y="40" width="32" height="34" fill="${c}"/>` + t(36 + i * 32, 62, i, { fs: 13, b: 1, c: "#fff" }));
    g += t(20, 30, "← more acidic", { a: "start", b: 1, c: "#d7263d" }) + t(260, 30, "neutral", { b: 1, c: "#3a8a3a" }) + t(500, 30, "more basic →", { a: "end", b: 1, c: "#5a2ca5" });
    [[1, "stomach acid"], [2, "lemon juice"], [5, "coffee"], [7, "pure water"], [9, "baking soda"], [11, "ammonia"], [13, "bleach"]].forEach(([p, l], i) => g += ln(36 + p * 32, 76, 36 + p * 32, 88 + (i % 2) * 16, "#777", 1) + t(36 + p * 32, 100 + (i % 2) * 16, l, { fs: 11 }));
    g += t(260, 145, "Each step is 10× more H⁺. pH 3 is 10× more acidic than pH 4 and 100× more than pH 5.", { fs: 11, b: 1 });
    return svg(520, 158, g, "pH scale from 0 to 14 with everyday examples");
  })();

  /* 12. energy diagram */
  const energy = (() => {
    let g = ln(50, 230, 470, 230) + ln(50, 230, 50, 20) + t(260, 252, "Reaction progress →", { fs: 11, b: 1 }) + `<text x="24" y="125" font-size="11" font-weight="700" fill="#333" text-anchor="middle" transform="rotate(-90 24 125)">Energy</text>`;
    g += `<path d="M60 150 L130 150 C190 150 200 40 250 40 C300 40 320 190 380 190 L460 190" fill="none" stroke="${BLUE}" stroke-width="3"/>`;
    g += `<path d="M130 150 C190 150 205 100 250 100 C295 100 320 190 380 190" fill="none" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="6 4"/>`;
    g += t(95, 142, "reactants", { fs: 11, b: 1 }) + t(400, 182, "products", { fs: 11, b: 1 });
    g += arrow(150, 150, 150, 46, ORANGE) + arrow(150, 46, 150, 148, ORANGE) + ln(150, 40, 250, 40, "#aaa", 1, 1) + t(146, 95, "Eₐ", { fs: 14, b: 1, c: ORANGE, a: "end" });
    g += arrow(440, 150, 440, 186, RED) + ln(380, 150, 460, 150, "#aaa", 1, 1) + t(446, 172, "ΔH < 0", { fs: 12, b: 1, c: RED, a: "start" });
    g += t(330, 56, "dashed = with a catalyst:", { fs: 11, b: 1, c: GREEN, a: "start" }) + t(330, 70, "lower hill, same ΔH", { fs: 11, c: GREEN, a: "start" });
    g += t(260, 16, "Exothermic: products are lower than reactants (heat released)", { fs: 12, b: 1 });
    return svg(520, 262, g, "energy diagram for an exothermic reaction with and without a catalyst");
  })();

  const V = { CHV_TRAIN: train, CHV_ATOM: atom, CHV_TRENDS: trends, CHV_LEWIS: lewis, CHV_NAME: naming, CHV_MOLE: mole, CHV_PART: part, CHV_STOICH: stoich, CHV_GAS: gas, CHV_SOL: sol, CHV_PH: ph, CHV_ENERGY: energy };
  (window.TUTOR_UNITS || []).forEach(u => { if (u.course === "Chemistry" && V[u.visual]) u.visual = V[u.visual]; });
})();
