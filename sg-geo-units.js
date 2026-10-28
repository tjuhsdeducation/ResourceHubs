/* =====================================================================
   ✏️ UNIT STUDY GUIDES: GEOMETRY (the rest of the year-long course)
   sg-geo-proof       Unit 2  Reasoning & Proof
   sg-geo-congruent   Unit 5  Congruent Triangles
   sg-geo-trirel      Unit 6  Relationships in Triangles
   sg-geo-similar     Unit 7  Similarity
   sg-geo-quads       Unit 9  Quadrilaterals & Polygons
   sg-geo-circles     Unit 10 Circles
   sg-geo-volume      Unit 11 Area, Surface Area & Volume
   sg-geo-prob        Unit 12 Probability
   Simulations used here live in rc-sims-geo.js (and rc-sims-int.js).
   Key words have a Spanish translation as the third item: [term, meaning, español].
   ===================================================================== */

/* ---------- small triangle with congruence markings (for diagrams) ---------- */
const GEOMK = function (x0, title, sides, angs, right) {
  const A = [x0 + 10, 110], B = [x0 + 110, 110], C = [x0 + 40, 30], T = [A, B, C], seg = [[0, 1], [1, 2], [2, 0]];
  let g = `<polygon points="${T.map(p => p.join(",")).join(" ")}" class="c1"/>`;
  sides.forEach((si, k) => { const [u, v] = seg[si], P = T[u], Q = T[v], mx = (P[0] + Q[0]) / 2, my = (P[1] + Q[1]) / 2, L = Math.hypot(Q[0] - P[0], Q[1] - P[1]), ux = (Q[0] - P[0]) / L, uy = (Q[1] - P[1]) / L;
    for (let t = 0; t <= k; t++) { const ox = mx + ux * (t - k / 2) * 6, oy = my + uy * (t - k / 2) * 6; g += `<line x1="${ox - uy * 8}" y1="${oy + ux * 8}" x2="${ox + uy * 8}" y2="${oy - ux * 8}" stroke="#e08a00" stroke-width="3"/>`; } });
  angs.forEach((vi, k) => { const P = T[vi], U = T[(vi + 1) % 3], W = T[(vi + 2) % 3]; const a1 = Math.atan2(U[1] - P[1], U[0] - P[0]), a2 = Math.atan2(W[1] - P[1], W[0] - P[0]); let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    for (let t = 0; t <= k; t++) { const r = 16 + t * 5; g += `<path d="M${P[0] + r * Math.cos(a1)} ${P[1] + r * Math.sin(a1)} A${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${P[0] + r * Math.cos(a2)} ${P[1] + r * Math.sin(a2)}" fill="none" stroke="#1aa36f" stroke-width="3"/>`; } });
  if (right) g += `<path d="M${A[0] + 14} 110 V96 H${A[0]}" fill="none" class="ink"/>`;
  return g + `<text x="${x0 + 60}" y="140" text-anchor="middle" class="t">${title}</text>`;
};

/* =====================================================================
   UNIT 2. REASONING & PROOF
   ===================================================================== */
RC["sg-geo-proof"] = {
  subject: "Geometry", mins: 25,
  title: "Reasoning & Proof",
  blurb: "Use inductive and deductive reasoning, write converses, inverses, and contrapositives, find counterexamples, and build two-column proofs with properties of equality.",
  eq: "How do mathematicians prove that something is always true, not just true for a few examples?",
  target: "I can tell inductive from deductive reasoning, analyze conditional statements and their related forms, use the Laws of Detachment and Syllogism, and justify each step of a two-column proof.",
  sources: [
    { tab: "Key Ideas", title: "From Patterns to Proof", numbered: true, blocks: [
      { vocab: [
        ["inductive reasoning", "Making a guess (conjecture) from a pattern of examples. It can be wrong.", "razonamiento inductivo"],
        ["deductive reasoning", "Using facts, definitions, and rules to reach a conclusion that MUST be true.", "razonamiento deductivo"],
        ["counterexample", "One example that shows a statement is false.", "contraejemplo"],
        ["conditional statement", "An “if p, then q” statement. p is the hypothesis and q is the conclusion.", "enunciado condicional"],
        ["proof", "A logical argument where every step has a reason (a given, definition, property, postulate, or theorem).", "demostración"]
      ] },
      { p: "<b>Inductive</b> reasoning looks at examples: 2 + 4 = 6, 6 + 8 = 14, 10 + 12 = 22, so “the sum of two even numbers is even.” That is a good <b>conjecture</b>, but examples alone do not prove it. <b>Deductive</b> reasoning proves it: an even number is 2a, another is 2b, and 2a + 2b = 2(a + b), which is even for every a and b." },
      { p: "One <b>counterexample</b> is enough to prove a statement false. “All prime numbers are odd” is false because 2 is prime and even." },
      { table: { cap: "A conditional and its related statements (p: two angles are vertical; q: they are congruent)", head: ["Name", "Form", "Example", "True?"], rowHead: true, rows: [
        ["Conditional", "If p, then q.", "If two angles are vertical, then they are congruent.", "True"],
        ["Converse", "If q, then p.", "If two angles are congruent, then they are vertical.", "False"],
        ["Inverse", "If not p, then not q.", "If two angles are not vertical, then they are not congruent.", "False"],
        ["Contrapositive", "If not q, then not p.", "If two angles are not congruent, then they are not vertical.", "True"]
      ] } },
      { p: "A conditional and its <b>contrapositive</b> always have the same truth value. The converse and inverse also match each other. When a conditional AND its converse are both true, you can write a <b>biconditional</b> with “if and only if”: an angle is right if and only if it measures 90°." },
      { box: "<b>Law of Detachment:</b> If p → q is true and p is true, then q is true. <i>If you score above 90%, you get an A. Ana scored 94%. So Ana gets an A.</i><br><b>Law of Syllogism:</b> If p → q and q → r, then p → r. <i>If it snows, school closes. If school closes, I sleep in. So if it snows, I sleep in.</i>" },
      { table: { cap: "Reasons you can use in a proof", head: ["Property", "What it says"], rowHead: true, rows: [
        ["Addition / Subtraction", "If a = b, then a + c = b + c and a − c = b − c."],
        ["Multiplication / Division", "If a = b, then ac = bc and a ÷ c = b ÷ c (c ≠ 0)."],
        ["Substitution", "If a = b, you can replace a with b in any equation."],
        ["Distributive", "a(b + c) = ab + ac"],
        ["Reflexive", "a = a (AB ≅ AB)"],
        ["Symmetric", "If a = b, then b = a."],
        ["Transitive", "If a = b and b = c, then a = c."]
      ] } },
      { box: "<b>Worked example (algebraic proof).</b> Prove: if 3(x − 2) = 15, then x = 7.<br>1. 3(x − 2) = 15 — <i>Given</i><br>2. 3x − 6 = 15 — <i>Distributive Property</i><br>3. 3x = 21 — <i>Addition Property of Equality</i><br>4. x = 7 — <i>Division Property of Equality</i>" }
    ] },
    { tab: "Visual", title: "Picture It: A Two-Column Proof", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 620 230" role="img" aria-label="Two intersecting lines forming four angles numbered 1 to 4. Angle 1 and angle 3 are vertical angles. Angle 1 and angle 2 form a linear pair, and angle 2 and angle 3 form a linear pair.">
        <line x1="30" y1="40" x2="250" y2="190" class="ink" stroke-width="3"/><line x1="30" y1="190" x2="250" y2="40" class="ink" stroke-width="3"/>
        <text x="140" y="95" text-anchor="middle" class="t">2</text><text x="190" y="120" text-anchor="middle" class="t">3</text><text x="140" y="150" text-anchor="middle" class="t">4</text><text x="90" y="120" text-anchor="middle" class="t">1</text>
        <circle cx="140" cy="115" r="4" class="fillfg"/>
        <text x="280" y="40" class="t">Prove: ∠1 ≅ ∠3 (vertical angles)</text>
        <text x="280" y="70" class="tm">1. ∠1 and ∠2 are a linear pair — Given (diagram)</text>
        <text x="280" y="92" class="tm">2. m∠1 + m∠2 = 180° — Linear Pair Postulate</text>
        <text x="280" y="114" class="tm">3. m∠2 + m∠3 = 180° — Linear Pair Postulate</text>
        <text x="280" y="136" class="tm">4. m∠1 + m∠2 = m∠2 + m∠3 — Substitution</text>
        <text x="280" y="158" class="tm">5. m∠1 = m∠3 — Subtraction Property</text>
        <text x="280" y="180" class="tm">6. ∠1 ≅ ∠3 — Definition of congruent angles</text>
        <text x="280" y="212" class="t" style="fill:#1aa36f">Every statement needs a reason (razón).</text></svg>`,
        cap: "Figure 1. A two-column proof lists statements on the left and reasons on the right. This proof shows vertical angles are always congruent." },
      { p: "<b>Proof tips:</b> 1) Start with what is <b>given</b>. 2) Mark the diagram. 3) Work toward what you must <b>prove</b>. 4) Every step needs a reason that is a given, a definition, a property, a postulate, or a theorem already proved.", n: false }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Conditional Statement Lab", blocks: [
      { box: "<b>Try this:</b> 1) For statement 1, decide if each version is true or false. Read the counterexamples. 2) Try statement 4. Why are all four true? (That makes it a biconditional.) 3) Try statement 5. The conditional is false, but which versions are true? 4) Look at the diagram: when is “p inside q”?" },
      { sim: "conditional", title: "Conditional Statement Lab", tip: "A conditional and its contrapositive are always both true or both false." }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which is an example of <b>inductive</b> reasoning?", opts: ["The last 5 Fridays had a quiz, so there will probably be a quiz this Friday.", "All squares are rectangles, and ABCD is a square, so ABCD is a rectangle.", "By the Subtraction Property, if x + 4 = 9 then x = 5.", "Vertical angles are congruent, so ∠1 ≅ ∠3."], a: 0,
      why: "Inductive reasoning makes a conjecture from a pattern of past examples. The others use rules and facts (deductive reasoning)." },
    { t: "mc", ref: 1, q: "Which is a counterexample to “All prime numbers are odd”?", opts: ["3", "9", "2", "15"], a: 2,
      why: "2 is prime (its only factors are 1 and 2), but it is even. 9 and 15 are odd but not prime, so they do not test the statement." },
    { t: "grid", ref: 1, q: "Conditional: “If it is raining, then the ground is wet.” Name each statement.", cols: ["Converse", "Inverse", "Contrapositive"],
      rows: [["If the ground is wet, then it is raining.", 0], ["If it is not raining, then the ground is not wet.", 1], ["If the ground is not wet, then it is not raining.", 2]],
      why: "Converse switches p and q. Inverse negates both. Contrapositive switches AND negates." },
    { t: "mc", ref: 1, q: "Which statement <b>always</b> has the same truth value as the original conditional?", opts: ["The converse", "The inverse", "The contrapositive", "None of them"], a: 2,
      why: "A conditional and its contrapositive are logically equivalent: both true or both false." },
    { t: "mc", ref: 1, q: "If a student earns an A on the final, then the student makes the honor roll. Maria earned an A on the final. What can you conclude?", opts: ["Maria makes the honor roll.", "Maria did not make the honor roll.", "Every honor roll student earned an A.", "Nothing can be concluded."], a: 0,
      why: "The Law of Detachment: p → q is true and p is true (Maria earned an A), so q is true." },
    { t: "mc", ref: 1, q: "If a figure is a square, then it is a rhombus. If a figure is a rhombus, then it is a parallelogram. Which conclusion follows by the Law of Syllogism?", opts: ["If a figure is a parallelogram, then it is a square.", "If a figure is a square, then it is a parallelogram.", "If a figure is a rhombus, then it is a square.", "All parallelograms are rhombuses."], a: 1,
      why: "p → q and q → r give p → r: square → rhombus → parallelogram." },
    { t: "grid", ref: 1, q: "Name the property that justifies each step.", cols: ["Reflexive", "Symmetric", "Transitive", "Subtraction"],
      rows: [["If AB = CD, then CD = AB.", 1], ["AB = AB", 0], ["If x + 4 = 9, then x = 5.", 3], ["If m∠1 = m∠2 and m∠2 = m∠3, then m∠1 = m∠3.", 2]],
      why: "Symmetric flips the sides. Reflexive says anything equals itself. Subtracting 4 from both sides is the Subtraction Property. Transitive links two equalities through a shared middle." },
    { t: "order", ref: 1, q: "Put the steps of this proof in order (first at the top). Prove: if 2(x + 3) = 14, then x = 4.",
      items: ["2(x + 3) = 14 — Given", "2x + 6 = 14 — Distributive Property", "2x = 8 — Subtraction Property of Equality", "x = 4 — Division Property of Equality"],
      why: "Start with the given, distribute, subtract 6 from both sides, then divide both sides by 2." },
    { t: "inline", ref: 2, q: "Complete the reasons.", text: "∠1 and ∠2 form a linear pair, so m∠1 + m∠2 = [[]] by the [[]]. If m∠1 = m∠3, then ∠1 ≅ ∠3 by the [[]].",
      blanks: [{ opts: ["90°", "180°", "360°"], a: 1 }, { opts: ["Linear Pair Postulate", "Reflexive Property", "Law of Syllogism"], a: 0 }, { opts: ["definition of congruent angles", "Transitive Property", "converse"], a: 0 }],
      why: "Angles in a linear pair are supplementary (sum to 180°). Angles with equal measures are congruent by definition." },
    { t: "num", ref: 2, q: "∠1 and ∠3 are vertical angles. m∠1 = 3x + 10 and m∠3 = 5x − 30. Find m∠1.", a: 70, tol: 0, unit: "°",
      why: "Vertical angles are congruent: 3x + 10 = 5x − 30 → 40 = 2x → x = 20. m∠1 = 3(20) + 10 = 70°." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Pick statement 5: “If a number is even, then it is divisible by 4.” Which version is TRUE?", opts: ["The conditional", "The converse: If a number is divisible by 4, then it is even.", "The contrapositive", "None of them"], a: 1,
      why: "The conditional is false (6 is even but not divisible by 4), so the contrapositive is also false. The converse is true: every multiple of 4 is even. (The inverse is true too.)" },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Write the converse of “If two angles are vertical angles, then they are congruent.” Is the converse true? Explain and give a counterexample if it is false.", min: 30,
      checks: [
        { label: "Writes the converse correctly (if congruent, then vertical)", re: /if (two )?(the )?angles are congruent,? (then )?(they|the angles) are vertical/i },
        { label: "Says the converse is false", re: /false|not true|not always/i },
        { label: "Gives a counterexample", re: /\d+\s?°|degree|different (triangle|place|line|shape)|not (next to|across)|example/i }
      ],
      rubric: "2 points: correct converse, correct truth value, and a counterexample. 1 point: two of these. 0 points: one or none.",
      why: "The converse is “If two angles are congruent, then they are vertical angles.” It is false: two 40° angles in different triangles are congruent but are not vertical angles.",
      model: "The converse is: If two angles are congruent, then they are vertical angles. This is false. For example, two 40° angles in two different triangles are congruent, but they are not vertical angles because they are not formed by two intersecting lines." }
  ]
};

/* =====================================================================
   UNIT 5. CONGRUENT TRIANGLES
   ===================================================================== */
RC["sg-geo-congruent"] = {
  subject: "Geometry", mins: 25,
  title: "Congruent Triangles: SSS, SAS, ASA, AAS, HL & CPCTC",
  blurb: "Match corresponding parts, choose the right congruence shortcut, spot the ones that don’t work (SSA and AAA), and use CPCTC to finish a proof.",
  eq: "What is the least information we need to know that two triangles are exactly the same size and shape?",
  target: "I can name corresponding parts of congruent triangles, prove triangles congruent using SSS, SAS, ASA, AAS, and HL, explain why SSA and AAA do not work, and use CPCTC in proofs.",
  sources: [
    { tab: "Key Ideas", title: "Congruence Shortcuts", numbered: true, blocks: [
      { vocab: [
        ["congruent", "Same size and same shape. The symbol is ≅.", "congruente"],
        ["corresponding parts", "Matching sides and angles of two figures.", "partes correspondientes"],
        ["included angle / side", "An angle BETWEEN two sides, or a side BETWEEN two angles.", "ángulo / lado incluido"],
        ["hypotenuse", "The side across from the right angle in a right triangle.", "hipotenusa"],
        ["CPCTC", "Corresponding Parts of Congruent Triangles are Congruent.", "partes correspondientes de triángulos congruentes son congruentes"]
      ] },
      { p: "<b>The order of the letters matters.</b> △ABC ≅ △DEF means A ↔ D, B ↔ E, and C ↔ F. So ∠B ≅ ∠E, AB ≅ DE, BC ≅ EF, and CA ≅ FD. Read the matching letters in the same positions." },
      { table: { cap: "The five shortcuts that prove triangles congruent", head: ["Shortcut", "You need…"], rowHead: true, rows: [
        ["SSS", "All three pairs of sides congruent"],
        ["SAS", "Two pairs of sides and the angle BETWEEN them (included angle)"],
        ["ASA", "Two pairs of angles and the side BETWEEN them (included side)"],
        ["AAS", "Two pairs of angles and a side that is NOT between them"],
        ["HL", "Right triangles only: the hypotenuses and one pair of legs"]
      ] } },
      { p: "<b>These do NOT work:</b> <b>SSA</b> (two sides and an angle that is not between them) can make two different triangles. <b>AAA</b> only shows the triangles have the same shape (similar), not the same size." },
      { p: "<b>Hidden information in diagrams:</b> a side shared by both triangles is congruent to itself (<b>Reflexive Property</b>). Two lines that cross make <b>vertical angles</b>, which are congruent. Parallel lines make congruent <b>alternate interior angles</b>." },
      { box: "<b>Worked example (proof with CPCTC).</b> AC and BD cross at E. Given: AE ≅ CE and BE ≅ DE. Prove: AB ≅ CD.<br>1. AE ≅ CE, BE ≅ DE — <i>Given</i><br>2. ∠AEB ≅ ∠CED — <i>Vertical angles are congruent</i><br>3. △AEB ≅ △CED — <i>SAS</i> (the vertical angles are between the marked sides)<br>4. AB ≅ CD — <i>CPCTC</i>" },
      { box: "<b>Worked example (algebra).</b> △JKL ≅ △RST, JK = 2x + 3, and RS = 5x − 9. Corresponding sides are equal: 2x + 3 = 5x − 9 → 12 = 3x → x = 4, so JK = 2(4) + 3 = <b>11</b>." }
    ] },
    { tab: "Visual", title: "Picture It: The Tick Marks Tell the Story", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 160" role="img" aria-label="Five small triangles showing congruence markings. SSS has tick marks on all three sides. SAS has two sides marked and the angle between them. ASA has two angles marked and the side between them. AAS has two angles and a side not between them. HL has a right angle mark, the hypotenuse, and one leg marked.">
        ${GEOMK(0, "SSS", [0, 1, 2], [])}${GEOMK(128, "SAS", [0, 2], [0])}${GEOMK(256, "ASA", [0], [0, 1])}${GEOMK(384, "AAS", [1], [0, 1])}${GEOMK(512, "HL", [1, 2], [], true)}</svg>`,
        cap: "Figure 1. Orange tick marks = congruent sides. Green arcs = congruent angles. Count them and check what is BETWEEN what." },
      { table: { cap: "Did it work?", head: ["Marked parts", "Proves congruent?", "Why"], rowHead: true, rows: [
        ["Side, side, side", "✅ SSS", "Three sides lock the shape."],
        ["Side, angle between, side", "✅ SAS", "The angle is included."],
        ["Side, side, angle NOT between", "❌ SSA", "It can make two different triangles."],
        ["Angle, angle, angle", "❌ AAA", "Same shape, maybe a different size (similar)."]
      ] } }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Congruence Shortcut Checker", blocks: [
      { box: "<b>Try this:</b> 1) Press each “Try” button and read whether it proves congruence. 2) Clear, then mark AB, BC, and ∠B. Now swap ∠B for ∠A. What changes? 3) Mark all three angles. Why is it not enough? 4) Find two different ways to use 2 angles and 1 side." },
      { sim: "congruent", title: "Congruence Shortcut Checker", tip: "Look at what is BETWEEN what: an included angle or an included side.", marked: [0, 1, 4] }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "△ABC ≅ △XYZ. Which angle corresponds to ∠B?", opts: ["∠X", "∠Y", "∠Z", "∠C"], a: 1,
      why: "B is the second letter of △ABC, and Y is the second letter of △XYZ." },
    { t: "inline", ref: 1, q: "△PQR ≅ △LMN. Complete each statement.", text: "QR ≅ [[]] &nbsp;·&nbsp; ∠R ≅ [[]] &nbsp;·&nbsp; PR ≅ [[]]",
      blanks: [{ opts: ["LM", "MN", "LN"], a: 1 }, { opts: ["∠L", "∠M", "∠N"], a: 2 }, { opts: ["LN", "MN", "LM"], a: 0 }],
      why: "P ↔ L, Q ↔ M, R ↔ N. So QR ↔ MN, ∠R ↔ ∠N, and PR ↔ LN." },
    { t: "grid", ref: 1, q: "Which shortcut proves the triangles congruent?", cols: ["SSS", "SAS", "ASA", "AAS", "HL"],
      rows: [["All three pairs of sides are congruent", 0], ["Two sides and the angle between them", 1], ["Two angles and the side between them", 2], ["Two angles and a side that is not between them", 3], ["Two right triangles with congruent hypotenuses and one pair of legs", 4]],
      why: "Match the description to the letters in order: S = side, A = angle, and the middle letter is the part that is included." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> combinations do NOT prove triangles congruent?", opts: ["SSA", "AAA", "SAS", "ASA", "SSS"], a: [0, 1],
      why: "SSA can create two different triangles, and AAA only proves the triangles are similar (same shape, possibly different size)." },
    { t: "mc", ref: 1, q: "△ABD and △CBD share side BD. Which reason shows BD ≅ BD?", opts: ["Symmetric Property", "Reflexive Property", "CPCTC", "Vertical angles"], a: 1,
      why: "Any segment is congruent to itself. That is the Reflexive Property." },
    { t: "mc", ref: 1, q: "AC and BD cross at E. AE ≅ CE and BE ≅ DE. Which shortcut proves △AEB ≅ △CED?", opts: ["SSS", "SAS (using vertical angles)", "ASA", "HL"], a: 1,
      why: "∠AEB and ∠CED are vertical angles, so they are congruent. That angle is between the two pairs of marked sides, so SAS works." },
    { t: "mc", ref: 1, q: "What does CPCTC let you do?", opts: ["Prove two triangles are congruent", "Conclude that matching parts are congruent AFTER you prove the triangles congruent", "Find the area of a triangle", "Prove that two triangles are similar"], a: 1,
      why: "CPCTC comes after the triangles are proved congruent. Then every pair of corresponding parts is congruent." },
    { t: "order", ref: 1, q: "Put the proof in order (first at the top). Given AE ≅ CE and BE ≅ DE. Prove AB ≅ CD.",
      items: ["AE ≅ CE and BE ≅ DE — Given", "∠AEB ≅ ∠CED — Vertical angles are congruent", "△AEB ≅ △CED — SAS", "AB ≅ CD — CPCTC"],
      why: "Givens first, then the hidden vertical angles, then the shortcut, then CPCTC for the parts." },
    { t: "num", ref: 1, q: "△ABC ≅ △DEF. m∠A = 50° and m∠E = 70°. Find m∠F.", a: 60, tol: 0, unit: "°",
      why: "∠B ≅ ∠E, so m∠B = 70°. Then m∠C = 180 − 50 − 70 = 60°. ∠F corresponds to ∠C, so m∠F = 60°." },
    { t: "num", ref: 1, q: "△JKL ≅ △RST. JK = 2x + 3 and RS = 5x − 9. Find JK.", a: 11, tol: 0,
      why: "2x + 3 = 5x − 9 → 12 = 3x → x = 4. JK = 2(4) + 3 = 11." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Press <b>SSA</b>. What does the checker say?", opts: ["SSA proves the triangles congruent", "SSA does NOT prove congruence, because two different triangles can be made", "SSA is the same as SAS", "SSA proves the triangles are similar"], a: 1,
      why: "When the angle is not between the two sides, the third side can swing to two different positions. That is why SSA is not a shortcut (except HL in right triangles)." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain why AAA (three pairs of congruent angles) does not prove two triangles are congruent. Give an example.", min: 30,
      checks: [
        { label: "Says same shape but size can differ", re: /size|bigger|smaller|larger|scale/i },
        { label: "Uses the word similar", re: /similar/i },
        { label: "Gives an example (numbers or a real object)", re: /\d|equilateral|example|for instance/i }
      ],
      rubric: "2 points: explains that size can be different, uses “similar,” and gives an example. 1 point: partial explanation. 0 points: incorrect.",
      why: "Three equal angles fix the shape but not the size. Two equilateral triangles with sides 2 and 10 both have three 60° angles, so they are similar but not congruent.",
      model: "AAA does not prove congruence because the angles only control the shape, not the size. For example, an equilateral triangle with sides of 2 cm and one with sides of 10 cm both have three 60° angles, but one is much bigger. They are similar, not congruent." }
  ]
};

/* =====================================================================
   UNIT 6. RELATIONSHIPS IN TRIANGLES
   ===================================================================== */
RC["sg-geo-trirel"] = {
  subject: "Geometry", mins: 25,
  title: "Relationships in Triangles",
  blurb: "Use the triangle sum, exterior angle, isosceles, and midsegment theorems, test side lengths with the Triangle Inequality, and learn the four centers of a triangle.",
  eq: "What rules do every triangle’s angles, sides, and special segments always follow?",
  target: "I can use the Triangle Sum, Exterior Angle, Isosceles Triangle, and Midsegment Theorems, apply the Triangle Inequality and side-angle relationships, and identify points of concurrency.",
  sources: [
    { tab: "Key Ideas", title: "Triangle Theorems", numbered: true, blocks: [
      { vocab: [
        ["exterior angle", "An angle formed by one side of a triangle and the extension of another side.", "ángulo exterior"],
        ["remote interior angles", "The two inside angles that are NOT next to the exterior angle.", "ángulos interiores no adyacentes"],
        ["isosceles triangle", "A triangle with at least two congruent sides (legs). The angles across from them (base angles) are congruent.", "triángulo isósceles"],
        ["midsegment", "A segment joining the midpoints of two sides of a triangle.", "paralela media / segmento medio"],
        ["centroid", "The point where the three medians meet. It is the balance point.", "baricentro / centroide"]
      ] },
      { table: { cap: "The big theorems", head: ["Theorem", "Rule", "Example"], rowHead: true, rows: [
        ["Triangle Sum", "The three angles add to 180°.", "47° + 68° + x = 180° → x = 65°"],
        ["Exterior Angle", "An exterior angle equals the sum of the two remote interior angles.", "40° + 75° = 115°"],
        ["Isosceles Triangle", "If two sides are congruent, the angles across from them are congruent.", "Vertex 40° → base angles (180 − 40) ÷ 2 = 70° each"],
        ["Midsegment", "A midsegment is parallel to the third side and HALF as long.", "Third side 18 → midsegment 9"],
        ["Triangle Inequality", "Any two sides add to MORE than the third side.", "3, 4, 8: 3 + 4 = 7 &lt; 8, so no triangle"]
      ] } },
      { box: "<b>Worked example 1 (exterior angle with algebra).</b> An exterior angle measures (4x + 10)°. The remote interior angles are (2x + 20)° and (x + 15)°.<br>4x + 10 = (2x + 20) + (x + 15) → 4x + 10 = 3x + 35 → <b>x = 25</b>. The exterior angle is 4(25) + 10 = 110°." },
      { box: "<b>Worked example 2 (range for the third side).</b> Two sides are 7 and 10. The third side must be MORE than 10 − 7 = 3 and LESS than 10 + 7 = 17: <b>3 &lt; x &lt; 17</b>." },
      { p: "<b>Sides and angles match up.</b> The <b>longest side</b> is across from the <b>largest angle</b>, and the shortest side is across from the smallest angle. In a triangle with angles 30°, 70°, and 80°, the longest side is across from the 80° angle." },
      { table: { cap: "Points of concurrency (where three segments meet)", head: ["Segments", "Meet at the…", "Special fact"], rowHead: true, rows: [
        ["Perpendicular bisectors", "Circumcenter", "Same distance from all three VERTICES (center of the circle around the triangle)."],
        ["Angle bisectors", "Incenter", "Same distance from all three SIDES (center of the circle inside)."],
        ["Medians (vertex to midpoint of opposite side)", "Centroid", "Balance point. It is ⅔ of the way from each vertex along the median."],
        ["Altitudes (height lines)", "Orthocenter", "Can be outside the triangle if the triangle is obtuse."]
      ] } },
      { box: "<b>Worked example 3 (centroid).</b> A median is 18 cm long. The centroid splits it 2 : 1, so the distance from the vertex to the centroid is ⅔ · 18 = <b>12 cm</b>, and from the centroid to the midpoint is 6 cm." }
    ] },
    { tab: "Visual", title: "Picture It: Exterior Angles and Midsegments", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 230" role="img" aria-label="Left: a triangle with interior angles 40 and 75 degrees and an exterior angle of 115 degrees at the third vertex, equal to 40 plus 75. Right: a triangle with a midsegment joining the midpoints of two sides; it is parallel to the base of 18 and has length 9.">
        <polygon points="30,180 250,180 188,47" class="c1"/><line x1="250" y1="180" x2="320" y2="180" class="ink" stroke-dasharray="6 4"/>
        <path d="M64 180 A34 34 0 0 0 56 158" fill="none" stroke="#e08a00" stroke-width="3"/><text x="72" y="172" class="t">40°</text>
        <text x="186" y="86" text-anchor="middle" class="t">75°</text><text x="226" y="170" text-anchor="middle" class="tm">65°</text>
        <path d="M284 180 A34 34 0 0 0 236 150" fill="none" stroke="#e8368f" stroke-width="3"/><text x="290" y="150" class="t" style="fill:#e8368f">115°</text>
        <text x="160" y="214" text-anchor="middle" class="t">exterior = 40° + 75° = 115°</text>
        <polygon points="370,180 610,180 470,50" class="c4"/><line x1="420" y1="115" x2="540" y2="115" stroke="#e8368f" stroke-width="4"/>
        <circle cx="420" cy="115" r="5" class="fillfg"/><circle cx="540" cy="115" r="5" class="fillfg"/>
        <text x="480" y="138" text-anchor="middle" class="t" style="fill:#e8368f">midsegment = 9</text><text x="490" y="200" text-anchor="middle" class="t">base = 18</text><text x="490" y="218" text-anchor="middle" class="tm">parallel and half as long (paralela y la mitad)</text></svg>`,
        cap: "Figure 1. The exterior angle equals the two far-away (remote) interior angles added together. A midsegment is parallel to the third side and half its length." }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Triangle Explorer and Triangle Inequality", blocks: [
      { box: "<b>Try this:</b> 1) Drag the corners of the Triangle Explorer. Does the sum ever change from 180°? 2) Make ∠C bigger. What happens to side AB? 3) Check that the exterior angle always equals ∠A + ∠B. 4) In the sticks sim, try 4, 5, 10, then 4, 5, 9, then 4, 5, 8." },
      { sim: "triangle", title: "Triangle Explorer", tip: "The biggest angle is always across from the longest side." },
      { sim: "triineq", title: "Can These Sticks Make a Triangle?", tip: "The two shorter sides must add to MORE than the longest side.", a: 4, b: 5, c: 10 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Two angles of a triangle measure 47° and 68°. Find the third angle.", a: 65, tol: 0, unit: "°",
      why: "180 − 47 − 68 = 65°." },
    { t: "num", ref: 1, q: "The two remote interior angles of an exterior angle measure 40° and 75°. Find the exterior angle.", a: 115, tol: 0, unit: "°",
      why: "Exterior Angle Theorem: 40° + 75° = 115°." },
    { t: "num", ref: 1, q: "The vertex angle of an isosceles triangle is 40°. Find the measure of each base angle.", a: 70, tol: 0, unit: "°",
      why: "The base angles are equal: (180 − 40) ÷ 2 = 70°." },
    { t: "num", ref: 1, q: "A midsegment of a triangle has length 2x + 1. The parallel side has length 26. Find x.", a: 6, tol: 0, pre: "x =",
      why: "A midsegment is half the third side: 2x + 1 = 13 → 2x = 12 → x = 6." },
    { t: "mc", ref: 1, q: "Which three lengths can form a triangle?", opts: ["3, 4, 8", "5, 5, 11", "6, 7, 12", "2, 3, 5"], a: 2,
      why: "6 + 7 = 13 &gt; 12 ✓. The others fail: 3 + 4 = 7 &lt; 8, 5 + 5 = 10 &lt; 11, and 2 + 3 = 5 is not MORE than 5." },
    { t: "inline", ref: 1, q: "Two sides of a triangle are 7 and 10.", text: "The third side must be greater than [[]] and less than [[]].",
      blanks: [{ opts: ["3", "7", "0"], a: 0 }, { opts: ["10", "17", "70"], a: 1 }],
      why: "The third side is between the difference (10 − 7 = 3) and the sum (10 + 7 = 17)." },
    { t: "mc", ref: 1, q: "A triangle has angles of 30°, 70°, and 80°. Where is the longest side?", opts: ["Across from the 30° angle", "Across from the 70° angle", "Across from the 80° angle", "All sides are equal"], a: 2,
      why: "The longest side is always across from the largest angle." },
    { t: "grid", ref: 1, q: "Match the segments to their point of concurrency.", cols: ["Circumcenter", "Incenter", "Centroid", "Orthocenter"],
      rows: [["Perpendicular bisectors", 0], ["Angle bisectors", 1], ["Medians", 2], ["Altitudes", 3]],
      why: "Perpendicular bisectors → circumcenter, angle bisectors → incenter, medians → centroid, altitudes → orthocenter." },
    { t: "num", ref: 1, q: "A median of a triangle is 18 cm long. How far is the centroid from the vertex?", a: 12, tol: 0, unit: "cm",
      why: "The centroid is ⅔ of the way along the median from the vertex: ⅔ · 18 = 12 cm." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> In the Triangle Explorer, drag C so that ∠C gets bigger. What happens to side AB (across from ∠C)?", opts: ["It gets shorter", "It gets longer", "It stays the same", "It disappears"], a: 1,
      why: "As an angle grows, the side across from it grows. The largest angle is always across from the longest side." },
    { t: "num", ref: 1, q: "An exterior angle measures (4x + 10)°. Its remote interior angles measure (2x + 20)° and (x + 15)°. Find x.", a: 25, tol: 0, pre: "x =",
      why: "4x + 10 = 3x + 35 → x = 25." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> Use the sticks simulation. Explain why sticks of length 4, 5, and 10 cannot make a triangle, but 4, 5, and 8 can. Use the Triangle Inequality.", min: 30,
      checks: [
        { label: "Shows 4 + 5 = 9 is less than 10", re: /4\s?\+\s?5|9/ },
        { label: "Shows 4 + 5 = 9 is more than 8", re: /8/ },
        { label: "States the rule: two sides must add to more than the third", re: /more than|greater than|bigger than|longer than|>/i }
      ],
      rubric: "2 points: correct checks for both sets and states the rule. 1 point: one set explained. 0 points: no correct reasoning.",
      why: "4 + 5 = 9, which is less than 10, so the short sticks can’t reach each other. 4 + 5 = 9 is more than 8 (and 4 + 8 &gt; 5, 5 + 8 &gt; 4), so 4, 5, 8 works.",
      model: "The Triangle Inequality says any two sides must add up to more than the third side. With 4, 5, and 10, 4 + 5 = 9 and 9 is less than 10, so the two short sticks can't reach each other. With 4, 5, and 8, 4 + 5 = 9 is greater than 8, so the sticks meet and make a triangle." }
  ]
};

/* =====================================================================
   UNIT 7. SIMILARITY
   ===================================================================== */
RC["sg-geo-similar"] = {
  subject: "Geometry", mins: 25,
  title: "Similarity: Scale Factor, Proportions & Similar Triangles",
  blurb: "Solve proportions, find scale factors, prove triangles similar with AA, SSS~, and SAS~, use the side-splitter theorem and shadows, and see how area grows by k².",
  eq: "How can figures be the same shape but different sizes, and how do we use that to measure things we can’t reach?",
  target: "I can find a scale factor and missing lengths in similar figures, prove triangles similar, use the Triangle Proportionality Theorem and indirect measurement, and explain how perimeter and area change with a scale factor.",
  sources: [
    { tab: "Key Ideas", title: "Same Shape, Different Size", numbered: true, blocks: [
      { vocab: [
        ["similar", "Same shape: corresponding angles are congruent and corresponding sides are proportional. The symbol is ~.", "semejante"],
        ["scale factor", "The number you multiply each length by to get the other figure. Scale factor = new length ÷ original length.", "factor de escala"],
        ["proportion", "Two equal ratios, like 3/4 = 9/12. Solve by cross multiplying.", "proporción"],
        ["dilation", "A transformation that enlarges or reduces a figure by a scale factor from a center point.", "dilatación / homotecia"],
        ["indirect measurement", "Using similar triangles (like shadows) to find a length you can’t measure directly.", "medición indirecta"]
      ] },
      { box: "<b>Worked example 1 (proportion).</b> Solve x/6 = 10/15. Cross multiply: 15x = 60, so <b>x = 4</b>." },
      { box: "<b>Worked example 2 (missing side).</b> A triangle with sides 3, 4, and 5 is similar to a larger triangle whose shortest side is 9. Scale factor = 9 ÷ 3 = 3. The longest side is 5 · 3 = <b>15</b>." },
      { table: { cap: "Ways to prove triangles similar", head: ["Shortcut", "You need…"], rowHead: true, rows: [
        ["AA~", "Two pairs of congruent angles (the third pair is automatic)"],
        ["SSS~", "All three pairs of sides in the same ratio"],
        ["SAS~", "Two pairs of sides in the same ratio AND the included angles congruent"]
      ] } },
      { p: "<b>Triangle Proportionality (side splitter):</b> if a line is parallel to one side of a triangle, it splits the other two sides proportionally. If DE ∥ BC, then AD/DB = AE/EC." },
      { box: "<b>Worked example 3 (side splitter).</b> DE ∥ BC, AD = 4, DB = 6, and AE = 5. Find EC.<br>4/6 = 5/EC → 4 · EC = 30 → <b>EC = 7.5</b>." },
      { box: "<b>Worked example 4 (shadows).</b> A 6-foot person casts a 4-foot shadow. At the same time, a tree casts an 18-foot shadow. The sun makes the same angle, so the triangles are similar (AA).<br>6/4 = h/18 → 4h = 108 → <b>h = 27 feet</b>." },
      { table: { cap: "How a scale factor k changes things", head: ["Measure", "Multiply by", "Example (k = 3)"], rowHead: true, rows: [
        ["Lengths and perimeter", "k", "perimeter 12 → 36"],
        ["Area", "k²", "area 10 → 90"],
        ["Volume", "k³", "volume 2 → 54"],
        ["Angles", "do not change", "40° → 40°"]
      ] } }
    ] },
    { tab: "Visual", title: "Picture It: Similar Triangles and Shadows", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="Left: a small triangle with sides 3, 4, 5 and a larger similar triangle with sides 6, 8, 10; scale factor 2. Right: a person 6 feet tall casting a 4-foot shadow next to a tree casting an 18-foot shadow; the sun's rays make the same angle, so the tree is 27 feet tall.">
        <polygon points="20,200 80,200 20,120" class="c1"/><text x="50" y="218" text-anchor="middle" class="t">4</text><text x="10" y="165" text-anchor="end" class="t">3</text><text x="58" y="155" class="t">5</text>
        <polygon points="110,200 230,200 110,40" class="c2"/><text x="170" y="218" text-anchor="middle" class="t">8</text><text x="100" y="125" text-anchor="end" class="t">6</text><text x="178" y="115" class="t">10</text>
        <text x="130" y="20" text-anchor="middle" class="t">scale factor k = 6 ÷ 3 = 2</text>
        <line x1="300" y1="200" x2="630" y2="200" class="ink"/>
        <rect x="318" y="146" width="8" height="54" rx="3" class="f1"/><circle cx="322" cy="140" r="7" class="f1"/><line x1="322" y1="134" x2="358" y2="200" stroke="#e08a00" stroke-width="2" stroke-dasharray="5 4"/><line x1="322" y1="203" x2="358" y2="203" stroke="#555" stroke-width="5"/>
        <text x="306" y="175" text-anchor="end" class="t">6 ft</text><text x="340" y="222" text-anchor="middle" class="t">4 ft</text>
        <rect x="440" y="80" width="12" height="120" class="f4"/><circle cx="446" cy="70" r="30" class="c4"/><line x1="446" y1="40" x2="610" y2="200" stroke="#e08a00" stroke-width="2" stroke-dasharray="5 4"/><line x1="446" y1="203" x2="610" y2="203" stroke="#555" stroke-width="5"/>
        <text x="430" y="130" text-anchor="end" class="t">h = ?</text><text x="528" y="222" text-anchor="middle" class="t">18 ft</text><text x="470" y="245" text-anchor="middle" class="tm">6/4 = h/18 → h = 27 ft (sombra = shadow)</text></svg>`,
        cap: "Figure 1. Similar triangles have the same angles, so their sides are in the same ratio. The sun’s rays hit the person and the tree at the same angle." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Dilation Lab", blocks: [
      { box: "<b>Try this:</b> 1) Slide k to 2. Each image point is twice as far from the center. 2) Compare the perimeter (× 2) and the area (× 4). 3) Slide k to 0.5. Where does C(1, 3) go? 4) Slide k to 3. By how much does the area multiply?" },
      { sim: "dilate", title: "Dilation Lab", tip: "Lengths multiply by k. Area multiplies by k².", k: 2 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Solve the proportion x/6 = 10/15.", a: 4, tol: 0, pre: "x =",
      why: "Cross multiply: 15x = 60, so x = 4." },
    { t: "num", ref: 1, q: "A side of 4 cm in a small figure matches a side of 10 cm in a similar large figure. What is the scale factor from small to large?", a: 2.5, tol: 0.01,
      why: "Scale factor = new ÷ original = 10 ÷ 4 = 2.5." },
    { t: "num", ref: 1, q: "A triangle with sides 3, 4, and 5 is similar to a triangle whose shortest side is 9. Find the longest side of the larger triangle.", a: 15, tol: 0,
      why: "k = 9 ÷ 3 = 3, so the longest side is 5 · 3 = 15." },
    { t: "grid", ref: 1, q: "Which similarity shortcut is used?", cols: ["AA~", "SSS~", "SAS~"],
      rows: [["∠A ≅ ∠D and ∠B ≅ ∠E", 0], ["AB/DE = BC/EF = CA/FD", 1], ["AB/DE = AC/DF and ∠A ≅ ∠D", 2]],
      why: "Two angle pairs → AA~. All three side ratios equal → SSS~. Two side ratios with the included angle → SAS~." },
    { t: "num", ref: 1, q: "A 6-foot person casts a 4-foot shadow. At the same time a tree casts an 18-foot shadow. How tall is the tree?", a: 27, tol: 0, unit: "ft",
      why: "6/4 = h/18 → 4h = 108 → h = 27 feet." },
    { t: "num", ref: 1, q: "In △ABC, DE ∥ BC with D on AB and E on AC. AD = 4, DB = 6, and AE = 5. Find EC.", a: 7.5, tol: 0.01,
      why: "Side splitter: 4/6 = 5/EC → 4 · EC = 30 → EC = 7.5." },
    { t: "num", ref: 1, q: "Two similar figures have a scale factor of 3. The smaller one has an area of 10 cm². What is the area of the larger one?", a: 90, tol: 0, unit: "cm²",
      why: "Area multiplies by k² = 9: 10 · 9 = 90 cm²." },
    { t: "mc", ref: 1, q: "Two similar triangles have sides in the ratio 2 : 5. What is the ratio of their areas?", opts: ["2 : 5", "4 : 10", "4 : 25", "8 : 125"], a: 2,
      why: "Area ratio = (side ratio)² = 2² : 5² = 4 : 25. (8 : 125 would be the volume ratio of similar solids.)" },
    { t: "mc", ref: 1, q: "Which pair of figures is ALWAYS similar?", opts: ["Two rectangles", "Two squares", "Two isosceles triangles", "Two rhombuses"], a: 1,
      why: "All squares have four right angles and four equal sides, so the side ratios always match. Rectangles, isosceles triangles, and rhombuses can have different shapes." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Set the scale factor to k = 0.5. Where does C(1, 3) go?", opts: ["(2, 6)", "(0.5, 1.5)", "(1.5, 3.5)", "(1, 1.5)"], a: 1,
      why: "A dilation from the origin multiplies both coordinates by k: (1 · 0.5, 3 · 0.5) = (0.5, 1.5)." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Set k = 3. By how much does the area multiply?", opts: ["3", "6", "9", "27"], a: 2,
      why: "Area multiplies by k² = 3² = 9. The simulation shows area 2 → 18." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Explain how you could find the height of your school’s flagpole on a sunny day using only a meter stick and a tape measure. Explain why the triangles are similar.", min: 35,
      checks: [
        { label: "Measures shadows (stick shadow and flagpole shadow)", re: /shadow/i },
        { label: "Explains same angle / AA similarity", re: /same angle|AA|similar|angle of the sun|sun'?s angle/i },
        { label: "Sets up a proportion", re: /proportion|ratio|\/|divide|cross/i }
      ],
      rubric: "2 points: describes measuring both shadows, explains AA similarity, and sets up the proportion. 1 point: partly correct. 0 points: not similar-triangle reasoning.",
      why: "Stand the meter stick straight up and measure its shadow and the flagpole’s shadow at the same time. The sun’s rays make the same angle and both objects are vertical (right angles), so the triangles are similar by AA. Then stick height / stick shadow = pole height / pole shadow.",
      model: "I would stand the meter stick straight up and measure its shadow, then measure the flagpole's shadow at the same time. The sun hits both at the same angle and both make a right angle with the ground, so the triangles are similar by AA. Then I set up a proportion: 1 meter divided by the stick's shadow equals the flagpole height divided by the flagpole's shadow, and solve by cross multiplying." }
  ]
};

/* =====================================================================
   UNIT 9. QUADRILATERALS & POLYGONS
   ===================================================================== */
RC["sg-geo-quads"] = {
  subject: "Geometry", mins: 25,
  title: "Quadrilaterals & Polygons",
  blurb: "Find interior and exterior angle sums, learn the properties of parallelograms, rectangles, rhombuses, squares, trapezoids, and kites, and classify shapes on the coordinate plane.",
  eq: "What makes each kind of quadrilateral special, and how are the families related?",
  target: "I can find polygon angle measures, use the properties of special quadrilaterals to solve problems, and classify a quadrilateral using slopes and distances.",
  sources: [
    { tab: "Key Ideas", title: "Polygons and the Quadrilateral Family", numbered: true, blocks: [
      { vocab: [
        ["polygon", "A closed figure made of straight sides. A regular polygon has all sides and all angles equal.", "polígono"],
        ["parallelogram", "A quadrilateral with BOTH pairs of opposite sides parallel.", "paralelogramo"],
        ["rhombus", "A parallelogram with four congruent sides.", "rombo"],
        ["trapezoid", "A quadrilateral with exactly one pair of parallel sides (the bases).", "trapecio"],
        ["kite", "Two pairs of congruent sides that are next to each other (adjacent), and no parallel sides.", "cometa / deltoide"],
        ["diagonal", "A segment joining two corners that are not next to each other.", "diagonal"]
      ] },
      { table: { cap: "Polygon angle formulas (n = number of sides)", head: ["Find…", "Formula", "Example: hexagon (n = 6)"], rowHead: true, rows: [
        ["Sum of interior angles", "(n − 2) · 180°", "4 · 180° = 720°"],
        ["Each interior angle (regular)", "(n − 2) · 180° ÷ n", "720° ÷ 6 = 120°"],
        ["Sum of exterior angles", "360° (always)", "360°"],
        ["Each exterior angle (regular)", "360° ÷ n", "60°"]
      ] } },
      { table: { cap: "Properties of the special quadrilaterals", head: ["Shape", "Sides", "Angles", "Diagonals"], rowHead: true, rows: [
        ["Parallelogram", "Opposite sides parallel and congruent", "Opposite angles congruent; consecutive angles add to 180°", "Bisect each other"],
        ["Rectangle", "Parallelogram rules", "Four right angles", "Bisect each other AND are congruent"],
        ["Rhombus", "Four congruent sides", "Opposite angles congruent", "Bisect each other AND are perpendicular; they bisect the angles"],
        ["Square", "Four congruent sides", "Four right angles", "Congruent, perpendicular, and bisect each other"],
        ["Trapezoid", "Exactly one pair of parallel sides", "Angles on the same leg add to 180°", "Midsegment = (base₁ + base₂) ÷ 2"],
        ["Isosceles trapezoid", "Legs congruent", "Base angles congruent", "Diagonals congruent"],
        ["Kite", "Two pairs of adjacent congruent sides", "One pair of opposite angles congruent", "Perpendicular"]
      ] } },
      { box: "<b>Worked example 1.</b> In parallelogram ABCD, the diagonals meet at E. AE = 3x − 4 and EC = x + 8. Diagonals bisect each other, so 3x − 4 = x + 8 → 2x = 12 → <b>x = 6</b>, and AE = 14." },
      { box: "<b>Worked example 2.</b> A trapezoid has bases 10 and 18. Its midsegment is (10 + 18) ÷ 2 = <b>14</b>." },
      { box: "<b>Worked example 3 (coordinate plane).</b> Is A(0, 0), B(4, 0), C(5, 3), D(1, 3) a parallelogram?<br>Slopes: AB = 0 and DC = 0 (parallel). AD = 3/1 = 3 and BC = 3/1 = 3 (parallel). Both pairs are parallel, so it is a <b>parallelogram</b>. AB = 4 but AD = √10, so it is not a rhombus, and the slopes 0 and 3 are not perpendicular, so it is not a rectangle." }
    ] },
    { tab: "Visual", title: "Picture It: The Quadrilateral Family Tree", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="Family tree of quadrilaterals. Quadrilateral at the top branches to parallelogram, trapezoid, and kite. Parallelogram branches to rectangle and rhombus, which both lead to square. Trapezoid leads to isosceles trapezoid.">
        ${[[320, 30, "Quadrilateral", "cuadrilátero", "soft"], [170, 105, "Parallelogram", "paralelogramo", "c1"], [400, 105, "Trapezoid", "trapecio", "c3"], [560, 105, "Kite", "cometa", "c2"], [90, 185, "Rectangle", "rectángulo", "c1"], [250, 185, "Rhombus", "rombo", "c1"], [420, 185, "Isosceles trapezoid", "trapecio isósceles", "c3"], [170, 265, "Square", "cuadrado", "c4"]].map(([x, y, t, e, c]) => `<rect x="${x - 72}" y="${y - 22}" width="144" height="44" rx="12" class="${c}"/><text x="${x}" y="${y - 2}" text-anchor="middle" class="t">${t}</text><text x="${x}" y="${y + 14}" text-anchor="middle" class="tm">${e}</text>`).join("")}
        ${[[320, 52, 170, 83], [320, 52, 400, 83], [320, 52, 560, 83], [170, 127, 90, 163], [170, 127, 250, 163], [400, 127, 420, 163], [90, 207, 170, 243], [250, 207, 170, 243]].map(([a, b, c, d]) => `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" class="ink"/>`).join("")}
        <text x="300" y="256" class="tm">Every square is a rectangle AND a rhombus.</text><text x="300" y="274" class="tm">Not every rectangle is a square.</text></svg>`,
        cap: "Figure 1. Each shape has all the properties of the shapes above it. A square is the most special: it is a parallelogram, a rectangle, and a rhombus." }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Quadrilateral Lab and Polygon Angles", blocks: [
      { box: "<b>Try this:</b> 1) Press each shape button and read its properties. 2) Press rhombus, then rectangle. Which diagonal property is different? 3) Drag one corner of the square one unit. What does it become? 4) In the Polygon Angle Lab, find the interior angle sum of a hexagon." },
      { sim: "quadlab", title: "Quadrilateral Lab", tip: "Check the sides, angles, and diagonals to name the shape.", shape: "parallelogram" },
      { sim: "polygon", title: "Polygon Angle Lab", tip: "Diagonals from one corner split an n-gon into n − 2 triangles.", n: 6 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Find the sum of the interior angles of a hexagon.", a: 720, tol: 0, unit: "°",
      why: "(6 − 2) · 180° = 720°." },
    { t: "num", ref: 1, q: "Find the measure of each interior angle of a regular octagon.", a: 135, tol: 0, unit: "°",
      why: "(8 − 2) · 180° = 1080°, and 1080° ÷ 8 = 135°." },
    { t: "num", ref: 1, q: "Find the measure of each exterior angle of a regular pentagon.", a: 72, tol: 0, unit: "°",
      why: "The exterior angles always add to 360°: 360° ÷ 5 = 72°." },
    { t: "num", ref: 1, q: "One angle of a parallelogram measures 65°. What is the measure of a consecutive angle (next to it)?", a: 115, tol: 0, unit: "°",
      why: "Consecutive angles of a parallelogram are supplementary: 180 − 65 = 115°." },
    { t: "num", ref: 1, q: "The diagonals of parallelogram ABCD meet at E. AE = 3x − 4 and EC = x + 8. Find x.", a: 6, tol: 0, pre: "x =",
      why: "Diagonals of a parallelogram bisect each other, so AE = EC: 3x − 4 = x + 8 → x = 6." },
    { t: "multi", need: 3, ref: 1, q: "Which <b>three</b> properties are true for EVERY rhombus?", opts: ["All four sides are congruent", "The diagonals are perpendicular", "The diagonals are congruent", "Opposite sides are parallel", "All four angles are right angles"], a: [0, 1, 3],
      why: "A rhombus is a parallelogram with four equal sides, and its diagonals are perpendicular. Congruent diagonals and right angles belong to rectangles (a rhombus has them only if it is a square)." },
    { t: "num", ref: 1, q: "In rectangle ABCD, diagonal AC = 2x + 6 and diagonal BD = 4x − 8. Find x.", a: 7, tol: 0, pre: "x =",
      why: "The diagonals of a rectangle are congruent: 2x + 6 = 4x − 8 → 14 = 2x → x = 7." },
    { t: "num", ref: 1, q: "A trapezoid has bases of 10 and 18. Find the length of its midsegment.", a: 14, tol: 0,
      why: "Midsegment = (10 + 18) ÷ 2 = 14." },
    { t: "grid", ref: 2, q: "Is each statement always, sometimes, or never true?", cols: ["Always", "Sometimes", "Never"],
      rows: [["A square is a rectangle.", 0], ["A rectangle is a square.", 1], ["A rhombus is a parallelogram.", 0], ["A trapezoid is a parallelogram.", 2], ["A parallelogram is a rhombus.", 1]],
      why: "Use the family tree: a square is always a rectangle, but a rectangle is a square only when its sides are equal. A trapezoid has exactly one pair of parallel sides, so it is never a parallelogram." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Press <b>rhombus</b>, then <b>rectangle</b>. Which diagonal property says “yes” for the rhombus but “no” for the rectangle?", opts: ["Diagonals bisect each other", "Diagonals are congruent", "Diagonals are perpendicular", "There are 2 pairs of parallel sides"], a: 2,
      why: "Rhombus diagonals are perpendicular. Rectangle diagonals are congruent instead. Both bisect each other because both are parallelograms." },
    { t: "mc", ref: 1, q: "What is the most specific name for A(0, 0), B(4, 0), C(5, 3), D(1, 3)?", opts: ["Rectangle", "Rhombus", "Parallelogram", "Trapezoid"], a: 2,
      why: "AB and DC have slope 0, and AD and BC have slope 3, so both pairs of sides are parallel. AB = 4 and AD = √10 are not equal, and there are no right angles." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain how you could prove that a quadrilateral on the coordinate plane is a <b>rectangle</b>. Name the formulas you would use.", min: 30,
      checks: [
        { label: "Uses slope", re: /slope/i },
        { label: "Perpendicular / right angles (negative reciprocal slopes)", re: /perpendicular|right angle|negative reciprocal|opposite reciprocal/i },
        { label: "Parallel opposite sides or congruent diagonals (distance)", re: /parallel|diagonal|distance/i }
      ],
      rubric: "2 points: describes using slopes for parallel and perpendicular sides (or distance for diagonals) clearly. 1 point: partly correct. 0 points: no correct method.",
      why: "Find the slope of each side. Opposite sides with equal slopes are parallel (a parallelogram). Adjacent sides with negative reciprocal slopes are perpendicular (right angles). You could also use the distance formula to show the diagonals are congruent.",
      model: "I would use the slope formula to find the slope of all four sides. If opposite sides have the same slope, they are parallel, so it is a parallelogram. Then if two sides that meet have negative reciprocal slopes, like 2 and −1/2, they are perpendicular, so the angles are right angles and it is a rectangle. I could also use the distance formula to check that the diagonals are congruent." }
  ]
};

/* =====================================================================
   UNIT 10. CIRCLES
   ===================================================================== */
RC["sg-geo-circles"] = {
  subject: "Geometry", mins: 25,
  title: "Circles: Angles, Arcs, Tangents & Equations",
  blurb: "Name the parts of a circle, use central and inscribed angles, tangent and quadrilateral rules, find arc length and sector area, and write the equation of a circle.",
  eq: "How are the angles, arcs, and segments of a circle related to each other?",
  target: "I can use central and inscribed angles to find arcs and angles, apply tangent properties, calculate arc length and sector area, and write and read the equation of a circle.",
  sources: [
    { tab: "Key Ideas", title: "Circle Rules", numbered: true, blocks: [
      { vocab: [
        ["radius / diameter", "A radius goes from the center to the circle. A diameter goes across through the center: d = 2r.", "radio / diámetro"],
        ["chord", "A segment with both endpoints on the circle.", "cuerda"],
        ["tangent", "A line that touches the circle at exactly one point.", "tangente"],
        ["arc", "Part of the circle. A minor arc is less than 180°, a major arc is more than 180°, and a semicircle is exactly 180°.", "arco"],
        ["central angle", "An angle with its vertex at the center. It equals its arc.", "ángulo central"],
        ["inscribed angle", "An angle with its vertex ON the circle. It is HALF its intercepted arc.", "ángulo inscrito"]
      ] },
      { table: { cap: "Angle and segment rules", head: ["Rule", "Example"], rowHead: true, rows: [
        ["Central angle = its arc", "∠AOB = 80° → arc AB = 80°"],
        ["Inscribed angle = ½ its arc", "arc AB = 80° → inscribed angle = 40°"],
        ["An angle inscribed in a semicircle is 90°", "If AB is a diameter, ∠APB = 90°"],
        ["Opposite angles of an inscribed quadrilateral add to 180°", "One angle 110° → opposite angle 70°"],
        ["A tangent is perpendicular to the radius at the point of tangency", "Use the Pythagorean theorem"],
        ["Two tangent segments from the same outside point are congruent", "PA = PB"]
      ] } },
      { box: "<b>Worked example 1 (tangent).</b> A tangent segment from point P to the circle is 12 units long, and the radius is 5. The radius and tangent make a right angle, so the distance from P to the center is √(5² + 12²) = √169 = <b>13</b>." },
      { p: "<b>Arc length</b> is part of the circumference, and <b>sector area</b> is part of the circle’s area. Use the fraction of the circle: (central angle ÷ 360°)." },
      { box: "<b>Worked example 2.</b> r = 6, central angle 90°. Arc length = (90/360) · 2π(6) = 3π ≈ <b>9.42</b>. Sector area = (90/360) · π(6)² = 9π ≈ <b>28.27</b>." },
      { box: "<b>Equation of a circle:</b> (x − h)² + (y − k)² = r², with center (h, k) and radius r.<br>Center (2, −3), radius 4: (x − 2)² + (y + 3)² = 16. <i>Watch the signs: y − (−3) becomes y + 3.</i><br>(x + 1)² + (y − 5)² = 49 has center (−1, 5) and radius √49 = 7." }
    ] },
    { tab: "Visual", title: "Picture It: The Parts of a Circle", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 620 300" role="img" aria-label="A circle with center O. Labeled: a radius from O, a diameter through O, a chord, a tangent line touching the circle at one point with a right angle mark to the radius, a central angle at O and an inscribed angle at a point on the circle intercepting the same arc.">
        <circle cx="180" cy="150" r="120" class="soft" style="fill:none;stroke:var(--fg);stroke-width:2.5"/><circle cx="180" cy="150" r="4" class="fillfg"/><text x="168" y="146" class="t">O</text>
        <line x1="60" y1="150" x2="300" y2="150" stroke="#2b7de9" stroke-width="3"/><text x="90" y="142" class="t" style="fill:#2b7de9">diameter</text>
        <line x1="180" y1="150" x2="265" y2="65" stroke="#e8368f" stroke-width="3"/><text x="230" y="118" class="t" style="fill:#e8368f">radius</text>
        <line x1="95" y1="65" x2="80" y2="217" stroke="#e08a00" stroke-width="3"/><text x="14" y="60" class="t" style="fill:#e08a00">chord</text>
        <line x1="120" y1="270" x2="300" y2="270" stroke="#1aa36f" stroke-width="3"/><line x1="180" y1="150" x2="180" y2="270" class="ink" stroke-dasharray="5 4"/><path d="M180 256 h14 v14" fill="none" class="ink"/><text x="250" y="290" class="t" style="fill:#1aa36f">tangent</text>
        <text x="350" y="60" class="t">Central angle = arc</text><text x="350" y="80" class="tm">vertex at the center (centro)</text>
        <text x="350" y="120" class="t">Inscribed angle = ½ arc</text><text x="350" y="140" class="tm">vertex on the circle (en el círculo)</text>
        <text x="350" y="180" class="t">Tangent ⟂ radius</text><text x="350" y="200" class="tm">they meet at a right angle (90°)</text>
        <text x="350" y="240" class="t">Diameter = 2 × radius</text><text x="350" y="260" class="tm">C = 2πr · A = πr²</text></svg>`,
        cap: "Figure 1. The parts of a circle and the four rules you use most." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Circle Angle Lab", blocks: [
      { box: "<b>Try this:</b> 1) Drag P anywhere on the big arc. Does the inscribed angle change? 2) Drag A and B to make the arc bigger. Compare the central and inscribed angles. 3) Drag B so AB is a diameter (an arc of 180°). What is the inscribed angle? 4) Change the radius and watch the arc length and sector area." },
      { sim: "circle", title: "Circle Angle Lab", tip: "The inscribed angle is always half of the arc it intercepts.", A: 200, B: 320, P: 80, r: 6 }
    ] }
  ],
  qs: [
    { t: "grid", ref: 1, q: "Name each part of a circle.", cols: ["Radius", "Chord", "Tangent", "Diameter"],
      rows: [["A segment from the center to the circle", 0], ["A segment with both endpoints on the circle", 1], ["A line that touches the circle at exactly one point", 2], ["A chord that goes through the center", 3]],
      why: "A diameter is a special chord (it passes through the center). A tangent touches the circle only once." },
    { t: "num", ref: 1, q: "A central angle measures 80°. What is the measure of an inscribed angle that intercepts the same arc?", a: 40, tol: 0, unit: "°",
      why: "The arc equals the central angle (80°). An inscribed angle is half its arc: 40°." },
    { t: "num", ref: 1, q: "An inscribed angle measures 35°. Find the measure of its intercepted arc.", a: 70, tol: 0, unit: "°",
      why: "The arc is twice the inscribed angle: 2 · 35° = 70°." },
    { t: "num", ref: 1, q: "Triangle ABP is inscribed in a circle, and AB is a diameter. Find m∠APB.", a: 90, tol: 0, unit: "°",
      why: "A diameter cuts off a 180° arc, and an inscribed angle is half of that: 90°." },
    { t: "num", ref: 1, q: "A tangent segment from point P touches a circle of radius 5. The tangent segment is 12 long. How far is P from the center?", a: 13, tol: 0,
      why: "The tangent is perpendicular to the radius, so this is a right triangle: √(5² + 12²) = √169 = 13." },
    { t: "num", ref: 1, q: "A quadrilateral is inscribed in a circle. One angle measures 110°. Find the angle opposite it.", a: 70, tol: 0, unit: "°",
      why: "Opposite angles of an inscribed quadrilateral are supplementary: 180 − 110 = 70°." },
    { t: "num", ref: 1, q: "Find the arc length of a 90° arc in a circle with radius 6. Round to the nearest hundredth.", a: 9.42, tol: 0.02,
      why: "(90/360) · 2π(6) = ¼ · 12π = 3π ≈ 9.42." },
    { t: "num", ref: 1, q: "Find the area of a sector with radius 10 and central angle 72°. Round to the nearest hundredth.", a: 62.83, tol: 0.05,
      why: "(72/360) · π(10)² = ⅕ · 100π = 20π ≈ 62.83." },
    { t: "mc", ref: 1, q: "Which is the equation of a circle with center (2, −3) and radius 4?", opts: ["(x + 2)² + (y − 3)² = 16", "(x − 2)² + (y + 3)² = 16", "(x − 2)² + (y + 3)² = 4", "(x − 2)² + (y − 3)² = 16"], a: 1,
      why: "(x − h)² + (y − k)² = r² with h = 2, k = −3, r² = 16. y − (−3) = y + 3." },
    { t: "mc", ref: 1, q: "What are the center and radius of (x + 1)² + (y − 5)² = 49?", opts: ["Center (1, −5), radius 49", "Center (−1, 5), radius 7", "Center (−1, 5), radius 49", "Center (1, 5), radius 7"], a: 1,
      why: "x + 1 = x − (−1), so h = −1. k = 5. r = √49 = 7." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Drag A and B so the intercepted arc is 180° (AB is a diameter). What is the inscribed angle ∠APB?", opts: ["45°", "90°", "180°", "It depends on where P is"], a: 1,
      why: "Half of 180° is 90°. Any angle inscribed in a semicircle is a right angle, no matter where P is on the other side." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> Use the Circle Angle Lab. Describe what happens to the inscribed angle when you move P but keep A and B still. Then explain the rule that connects the inscribed angle, the central angle, and the arc.", min: 30,
      checks: [
        { label: "Says the inscribed angle stays the same", re: /same|doesn'?t change|does not change|stays|constant/i },
        { label: "Inscribed angle is half the arc / central angle", re: /half|½|1\/2|divide.{0,10}2|twice|double/i },
        { label: "Central angle equals the arc", re: /central.{0,40}(equal|same|=)|(equal|same).{0,30}arc/i }
      ],
      rubric: "2 points: notices the inscribed angle stays the same and states both rules. 1 point: one rule. 0 points: no correct rule.",
      why: "As long as P stays on the same side, the inscribed angle stays the same because it intercepts the same arc. The central angle equals the arc, and the inscribed angle is half of it.",
      model: "When I moved P around the circle but kept A and B still, the inscribed angle stayed the same, 60°. That is because it still intercepts the same 120° arc. The central angle is equal to the arc, 120°, and the inscribed angle is always half of the arc, so 120 ÷ 2 = 60°." }
  ]
};

/* =====================================================================
   UNIT 11. AREA, SURFACE AREA & VOLUME
   ===================================================================== */
RC["sg-geo-volume"] = {
  subject: "Geometry", mins: 25,
  title: "Area, Surface Area & Volume",
  blurb: "Find areas of 2-D shapes, then surface area and volume of prisms, cylinders, pyramids, cones, and spheres, including why pyramids and cones use ⅓.",
  eq: "How do we measure the space a shape covers and the space a solid fills?",
  target: "I can find the area of polygons and circles, the surface area and volume of prisms, cylinders, pyramids, cones, and spheres, identify cross sections, and explain how scale factor changes volume.",
  sources: [
    { tab: "Key Ideas", title: "Formulas and When to Use Them", numbered: true, blocks: [
      { vocab: [
        ["area", "The number of square units that cover a flat shape (units²).", "área"],
        ["surface area", "The total area of all the outside faces of a solid (units²).", "área total / área de superficie"],
        ["volume", "The number of cubic units that fill a solid (units³).", "volumen"],
        ["base (B)", "The area of the face the solid “stands on.” For a prism or cylinder, both ends are bases.", "área de la base"],
        ["slant height (ℓ)", "The height measured along the side face of a pyramid or cone.", "altura inclinada / apotema"],
        ["cross section", "The flat shape you see when you slice a solid.", "sección transversal"]
      ] },
      { table: { cap: "Area of flat shapes", head: ["Shape", "Area"], rowHead: true, rows: [
        ["Rectangle / parallelogram", "A = bh"], ["Triangle", "A = ½bh"], ["Trapezoid", "A = ½(b₁ + b₂)h"], ["Circle", "A = πr² (circumference C = 2πr)"]
      ] } },
      { table: { cap: "Volume and surface area of solids", head: ["Solid", "Volume", "Surface area"], rowHead: true, rows: [
        ["Prism", "V = Bh (box: lwh)", "SA = 2B + (perimeter of base)h"],
        ["Cylinder", "V = πr²h", "SA = 2πr² + 2πrh"],
        ["Pyramid", "V = ⅓Bh", "SA = B + area of the triangle faces"],
        ["Cone", "V = ⅓πr²h", "SA = πr² + πrℓ"],
        ["Sphere", "V = ⁴⁄₃πr³", "SA = 4πr²"]
      ] } },
      { box: "<b>Worked example 1 (cylinder).</b> r = 3 cm, h = 10 cm.<br>V = π(3)²(10) = 90π ≈ <b>282.7 cm³</b>. SA = 2π(3)² + 2π(3)(10) = 18π + 60π = 78π ≈ <b>245.0 cm²</b>." },
      { box: "<b>Worked example 2 (cone, same r and h).</b> V = ⅓π(3)²(10) = 30π ≈ <b>94.2 cm³</b>, exactly one third of the cylinder. A pyramid is also one third of the prism with the same base and height." },
      { p: "<b>Why ⅓?</b> If you fill a cone with water and pour it into a cylinder with the same radius and height, it takes exactly <b>3</b> cones to fill the cylinder. (Try it in the simulation.)" },
      { box: "<b>Worked example 3 (scale factor).</b> If you double every length of a solid (k = 2), the surface area multiplies by k² = 4 and the volume multiplies by k³ = <b>8</b>. A can with twice the radius and twice the height holds 8 times as much." }
    ] },
    { tab: "Visual", title: "Picture It: Nets and Cross Sections", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="Net of a cylinder: two circles of radius r and a rectangle whose width is the circumference 2 pi r and whose height is h. Next to it, three cross sections: slicing a cylinder parallel to the base gives a circle, slicing it vertically through the center gives a rectangle, and slicing a cone vertically through its tip gives a triangle.">
        <circle cx="120" cy="40" r="30" class="c1"/><rect x="30" y="72" width="180" height="100" class="c4"/><circle cx="120" cy="204" r="30" class="c1"/>
        <text x="120" y="45" text-anchor="middle" class="t">r</text><text x="120" y="128" text-anchor="middle" class="t">width = 2πr</text><text x="216" y="126" class="t">h</text><text x="120" y="252" text-anchor="middle" class="tm">net of a cylinder (red del cilindro)</text>
        <text x="460" y="22" text-anchor="middle" class="t">Cross sections</text>
        <ellipse cx="330" cy="70" rx="40" ry="12" class="ink"/><line x1="290" y1="70" x2="290" y2="150" class="ink"/><line x1="370" y1="70" x2="370" y2="150" class="ink"/><ellipse cx="330" cy="150" rx="40" ry="12" class="ink"/><ellipse cx="330" cy="110" rx="40" ry="12" class="c2"/><text x="330" y="186" text-anchor="middle" class="tm">parallel to base</text><text x="330" y="202" text-anchor="middle" class="t">→ circle</text>
        <ellipse cx="460" cy="70" rx="40" ry="12" class="ink"/><line x1="420" y1="70" x2="420" y2="150" class="ink"/><line x1="500" y1="70" x2="500" y2="150" class="ink"/><ellipse cx="460" cy="150" rx="40" ry="12" class="ink"/><rect x="452" y="70" width="16" height="80" class="c2"/><text x="460" y="186" text-anchor="middle" class="tm">vertical slice</text><text x="460" y="202" text-anchor="middle" class="t">→ rectangle</text>
        <path d="M550 150 L590 60 L630 150" class="ink"/><ellipse cx="590" cy="150" rx="40" ry="12" class="ink"/><polygon points="560,150 590,60 620,150" class="c2"/><text x="590" y="186" text-anchor="middle" class="tm">through the tip</text><text x="590" y="202" text-anchor="middle" class="t">→ triangle</text></svg>`,
        cap: "Figure 1. Surface area is the area of the net (all the pieces laid flat). A cross section is the shape of a slice." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Solids Lab", blocks: [
      { box: "<b>Try this:</b> 1) Choose the cylinder and change r and h. Watch the volume. 2) Choose the cone and press 🫗 Pour three times. How many cones fill the cylinder? 3) Try the square pyramid. 4) Choose the sphere and double r from 2 to 4. How many times bigger is the volume?" },
      { sim: "solids", title: "Solids Lab", tip: "Volume fills (units³). Surface area covers (units²).", kind: "cyl", a: 3, h: 6 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Find the area of a trapezoid with bases 6 and 10 and height 5.", a: 40, tol: 0, unit: "units²",
      why: "A = ½(6 + 10)(5) = ½(16)(5) = 40." },
    { t: "num", ref: 1, q: "Find the area of a circle with radius 5. Round to the nearest hundredth.", a: 78.54, tol: 0.05, unit: "units²",
      why: "A = π(5)² = 25π ≈ 78.54." },
    { t: "num", ref: 1, q: "Find the volume of a rectangular prism that is 4 by 3 by 5.", a: 60, tol: 0, unit: "units³",
      why: "V = lwh = 4 · 3 · 5 = 60." },
    { t: "num", ref: 1, q: "Find the volume of a cylinder with r = 3 and h = 10. Round to the nearest tenth.", a: 282.7, tol: 0.2, unit: "units³",
      why: "V = π(3)²(10) = 90π ≈ 282.7." },
    { t: "num", ref: 1, q: "Find the volume of a cone with r = 3 and h = 10. Round to the nearest tenth.", a: 94.2, tol: 0.2, unit: "units³",
      why: "V = ⅓π(3)²(10) = 30π ≈ 94.2." },
    { t: "num", ref: 1, q: "Find the volume of a sphere with radius 6. Round to the nearest tenth.", a: 904.8, tol: 0.3, unit: "units³",
      why: "V = ⁴⁄₃π(6)³ = ⁴⁄₃π(216) = 288π ≈ 904.8." },
    { t: "mc", ref: 1, q: "A pyramid and a prism have the same base and the same height. How does the pyramid’s volume compare?", opts: ["It is the same", "It is half", "It is one third", "It is three times bigger"], a: 2,
      why: "V(pyramid) = ⅓Bh and V(prism) = Bh. It takes 3 pyramids to fill the prism." },
    { t: "num", ref: 1, q: "Find the surface area of a box that is 2 by 3 by 4.", a: 52, tol: 0, unit: "units²",
      why: "SA = 2(lw + lh + wh) = 2(6 + 8 + 12) = 2(26) = 52." },
    { t: "num", ref: 1, q: "Find the surface area of a cylinder with r = 2 and h = 5. Round to the nearest tenth.", a: 88, tol: 0.2, unit: "units²",
      why: "SA = 2π(2)² + 2π(2)(5) = 8π + 20π = 28π ≈ 88.0." },
    { t: "grid", ref: 2, q: "What shape is each cross section?", cols: ["Circle", "Rectangle", "Triangle", "Square"],
      rows: [["A cylinder sliced parallel to its base", 0], ["A cylinder sliced vertically through the center", 1], ["A cone sliced vertically through its tip", 2], ["A cube sliced parallel to a face", 3], ["A sphere sliced anywhere", 0]],
      why: "Look at the outline of the slice. Every slice of a sphere is a circle. Slicing a cube parallel to a face gives a square." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Choose the cone and press 🫗 Pour until the cylinder is full. How many cones does it take?", opts: ["2", "3", "4", "π"], a: 1,
      why: "Three cones fill a cylinder with the same radius and height. That is why the cone formula has ⅓." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> A company makes a new soup can with <b>twice the radius and twice the height</b> of the old can. The ad says it holds “twice as much.” Is that right? Explain with the volume formula.", min: 30,
      checks: [
        { label: "Says the ad is wrong", re: /wrong|not (right|true|correct)|incorrect|no[,. ]|more than twice/i },
        { label: "Finds 8 times (2³ or 2 × 2 × 2)", re: /8|eight|2\s?[³^]\s?3?|2\s?[x×·]\s?2\s?[x×·]\s?2/i },
        { label: "Uses πr²h (radius is squared)", re: /πr²h|pi\s?r|r²|r\^2|squared/i }
      ],
      rubric: "2 points: correct answer (8 times) with the formula as evidence. 1 point: says more than twice with partial reasoning. 0 points: agrees with the ad.",
      why: "V = πr²h. With 2r and 2h: π(2r)²(2h) = π · 4r² · 2h = 8πr²h. The new can holds 8 times as much, not twice.",
      model: "The ad is wrong. The volume of a can is V = πr²h. If the radius doubles, r² becomes (2r)² = 4r², and the height doubles too, so the new volume is π · 4r² · 2h = 8πr²h. The new can holds 8 times as much soup, not twice as much." }
  ]
};

/* =====================================================================
   UNIT 12. PROBABILITY
   ===================================================================== */
RC["sg-geo-prob"] = {
  subject: "Geometry", mins: 25,
  title: "Probability: Compound Events, Conditional Probability & Counting",
  blurb: "Find theoretical and experimental probability, complements, AND and OR events, conditional probability from two-way tables, and count with permutations and combinations.",
  eq: "How do we measure how likely something is, especially when two events happen together?",
  target: "I can find probabilities of simple and compound events, decide whether events are independent, find conditional probability from a two-way table, and use the counting principle, permutations, and combinations.",
  sources: [
    { tab: "Key Ideas", title: "Probability Rules", numbered: true, blocks: [
      { vocab: [
        ["sample space", "The list of ALL possible outcomes.", "espacio muestral"],
        ["complement", "Everything that is NOT the event. P(not A) = 1 − P(A).", "complemento"],
        ["independent events", "One event does not change the probability of the other.", "eventos independientes"],
        ["conditional probability", "P(B | A) is the probability of B GIVEN that A already happened.", "probabilidad condicional"],
        ["permutation", "An arrangement where ORDER matters (president, vice president…).", "permutación"],
        ["combination", "A group where order does NOT matter (a team, a committee).", "combinación"]
      ] },
      { p: "<b>Theoretical probability</b> = favorable outcomes ÷ total outcomes. Rolling two dice has 6 · 6 = 36 outcomes, and 6 of them add to 7, so P(sum 7) = 6/36 = 1/6. <b>Experimental probability</b> comes from actually doing the trials, and it gets closer to the theoretical value as the number of trials grows." },
      { table: { cap: "Rules for compound events", head: ["Event", "Rule", "Example"], rowHead: true, rows: [
        ["A and B (independent)", "P(A) · P(B)", "Heads and a 6: ½ · ⅙ = 1/12"],
        ["A and B (dependent)", "P(A) · P(B | A)", "2 red marbles without replacement from 5 red, 3 blue: 5/8 · 4/7 = 5/14"],
        ["A or B", "P(A) + P(B) − P(A and B)", "Red card or king: 26/52 + 4/52 − 2/52 = 28/52 = 7/13"],
        ["Not A", "1 − P(A)", "P(rain) = 0.3 → P(no rain) = 0.7"]
      ] } },
      { h: "Two-way tables" },
      { table: { cap: "Juniors and seniors: do you have a pet? (120 students)", head: ["", "Has a pet", "No pet", "Total"], rowHead: true, rows: [
        ["Juniors", "40", "20", "60"], ["Seniors", "30", "30", "60"], ["Total", "70", "50", "120"]
      ] } },
      { p: "<b>Conditional probability:</b> P(pet | junior) means “look only at juniors.” 40 of the 60 juniors have a pet: 40/60 ≈ 66.7%. Overall, P(pet) = 70/120 ≈ 58.3%. Because P(pet | junior) ≠ P(pet), having a pet and being a junior are <b>not independent</b> in this group." },
      { box: "<b>Counting.</b> <b>Fundamental Counting Principle:</b> 3 shirts, 4 pants, 2 pairs of shoes → 3 · 4 · 2 = 24 outfits.<br><b>Permutation</b> (order matters): choose a president, vice president, and secretary from 5 people: ₅P₃ = 5 · 4 · 3 = 60.<br><b>Combination</b> (order does not matter): choose a 3-person committee from 5 people: ₅C₃ = 60 ÷ (3 · 2 · 1) = 10." }
    ] },
    { tab: "Visual", title: "Picture It: A Tree Diagram", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 620 270" role="img" aria-label="Tree diagram for drawing two marbles without replacement from a bag of 5 red and 3 blue. First draw: red 5 eighths or blue 3 eighths. After red: red 4 sevenths or blue 3 sevenths. After blue: red 5 sevenths or blue 2 sevenths. The outcome red then red has probability 20 over 56, which is 5 over 14.">
        <circle cx="40" cy="135" r="8" class="fillfg"/>
        <line x1="48" y1="130" x2="200" y2="70" stroke="#d0453a" stroke-width="3"/><line x1="48" y1="140" x2="200" y2="200" stroke="#2b7de9" stroke-width="3"/>
        <text x="110" y="88" class="t" style="fill:#d0453a">5/8</text><text x="110" y="195" class="t" style="fill:#2b7de9">3/8</text>
        <circle cx="210" cy="70" r="14" fill="#d0453a"/><circle cx="210" cy="200" r="14" fill="#2b7de9"/>
        <line x1="224" y1="66" x2="380" y2="35" stroke="#d0453a" stroke-width="3"/><line x1="224" y1="74" x2="380" y2="105" stroke="#2b7de9" stroke-width="3"/><line x1="224" y1="196" x2="380" y2="165" stroke="#d0453a" stroke-width="3"/><line x1="224" y1="204" x2="380" y2="235" stroke="#2b7de9" stroke-width="3"/>
        <text x="290" y="42" class="t">4/7</text><text x="290" y="106" class="t">3/7</text><text x="290" y="172" class="t">5/7</text><text x="290" y="236" class="t">2/7</text>
        ${[[35, "#d0453a", "#d0453a", "RR: 5/8 · 4/7 = 20/56"], [105, "#d0453a", "#2b7de9", "RB: 5/8 · 3/7 = 15/56"], [165, "#2b7de9", "#d0453a", "BR: 3/8 · 5/7 = 15/56"], [235, "#2b7de9", "#2b7de9", "BB: 3/8 · 2/7 = 6/56"]].map(([y, a, b, t]) => `<circle cx="392" cy="${y}" r="9" fill="${a}"/><circle cx="414" cy="${y}" r="9" fill="${b}"/><text x="432" y="${y + 5}" class="t">${t}</text>`).join("")}
        <text x="210" y="262" text-anchor="middle" class="tm">first draw → second draw (no replacement: sin reemplazo)</text></svg>`,
        cap: "Figure 1. Multiply along the branches. The four outcomes add to 56/56 = 1. Notice the second-draw fractions are out of 7 because one marble is gone." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Two-Dice Probability Lab", blocks: [
      { box: "<b>Try this:</b> 1) Choose “Sum is 7.” Count the green squares in the sample space. 2) Press Roll 10, then Roll 100 a few times. Does the experimental percent get closer to 16.7%? 3) Choose “Doubles.” What is the theoretical probability? 4) Which event is most likely?" },
      { sim: "dice", title: "Two-Dice Probability Lab", tip: "Theoretical = what should happen. Experimental = what did happen.", event: "sum7" }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Two dice are rolled. What is P(sum is 7)?", opts: ["1/12", "1/6", "7/36", "1/2"], a: 1,
      why: "6 of the 36 outcomes add to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). 6/36 = 1/6." },
    { t: "num", ref: 1, q: "The chance of rain tomorrow is 0.3. What is the probability that it does NOT rain?", a: 0.7, tol: 0.001,
      why: "P(not A) = 1 − P(A) = 1 − 0.3 = 0.7." },
    { t: "mc", ref: 1, q: "You flip a coin and roll a die. What is P(heads and a 6)?", opts: ["1/12", "1/8", "2/3", "7/12"], a: 0,
      why: "The events are independent: ½ · ⅙ = 1/12." },
    { t: "mc", ref: 1, q: "A bag has 5 red and 3 blue marbles. You draw two marbles without replacement. What is P(both red)?", opts: ["25/64", "5/14", "5/8", "1/2"], a: 1,
      why: "5/8 · 4/7 = 20/56 = 5/14. After one red is taken, 4 red are left out of 7 marbles. (25/64 would be WITH replacement.)" },
    { t: "mc", ref: 1, q: "You draw one card from a standard 52-card deck. What is P(red or king)?", opts: ["30/52", "28/52 = 7/13", "26/52", "4/52"], a: 1,
      why: "26/52 + 4/52 − 2/52 = 28/52. Subtract the 2 red kings so they are not counted twice." },
    { t: "grid", ref: 1, q: "Are the events independent or dependent?", cols: ["Independent", "Dependent"],
      rows: [["Flipping a coin twice", 0], ["Drawing two cards without putting the first one back", 1], ["Rolling a die and spinning a spinner", 0], ["Choosing a class president, then a vice president from the rest of the class", 1]],
      why: "If the first event changes what is left for the second (no replacement), the events are dependent." },
    { t: "num", ref: 1, q: "Use the two-way table. What is P(has a pet | junior)? Enter a percent rounded to the nearest tenth.", a: 66.7, tol: 0.1, unit: "%",
      why: "Look only at the juniors row: 40 of 60 have a pet. 40 ÷ 60 ≈ 0.667 = 66.7%." },
    { t: "mc", ref: 1, q: "Use the two-way table. Are “being a junior” and “having a pet” independent?", opts: ["Yes, because P(pet | junior) = P(pet)", "No, because P(pet | junior) ≈ 66.7% but P(pet) ≈ 58.3%", "Yes, because there are 60 juniors and 60 seniors", "No, because 40 is bigger than 30"], a: 1,
      why: "Events are independent only if knowing one does not change the probability of the other. 66.7% ≠ 58.3%, so they are not independent." },
    { t: "num", ref: 1, q: "You have 3 shirts, 4 pairs of pants, and 2 pairs of shoes. How many different outfits can you make?", a: 24, tol: 0, unit: "outfits",
      why: "Fundamental Counting Principle: 3 · 4 · 2 = 24." },
    { t: "num", ref: 1, q: "In how many ways can a club of 5 people choose a president, a vice president, and a secretary?", a: 60, tol: 0, unit: "ways",
      why: "Order matters (different jobs), so it is a permutation: ₅P₃ = 5 · 4 · 3 = 60." },
    { t: "num", ref: 1, q: "In how many ways can you choose a 3-person committee from 5 people?", a: 10, tol: 0, unit: "ways",
      why: "Order does not matter, so it is a combination: ₅C₃ = 60 ÷ 3! = 60 ÷ 6 = 10." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Choose “Doubles.” What is the theoretical probability?", opts: ["1/36", "2/36", "6/36 = 1/6", "12/36"], a: 2,
      why: "The doubles are (1,1), (2,2), (3,3), (4,4), (5,5), and (6,6): 6 of 36 outcomes. They are the diagonal of the sample space." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> In the dice lab, the experimental probability of “sum is 7” was not exactly 16.7%. Explain the difference between theoretical and experimental probability and what happens as you roll more times.", min: 30,
      checks: [
        { label: "Theoretical = what should happen (from the sample space)", re: /theoretical.{0,60}(should|expect|sample space|math|36|possible)/i },
        { label: "Experimental = what actually happened in trials", re: /experimental.{0,60}(actual|happen|rolled|trial|data|did)/i },
        { label: "More trials get closer to theoretical", re: /closer|more (rolls|trials|times)|large numbers|approach/i }
      ],
      rubric: "2 points: defines both and explains the effect of more trials. 1 point: partly correct. 0 points: incorrect.",
      why: "Theoretical probability comes from counting the sample space (6/36). Experimental probability comes from real trials and varies by chance. With more trials, it usually gets closer to the theoretical value (the Law of Large Numbers).",
      model: "Theoretical probability is what should happen based on the sample space: 6 of the 36 outcomes add to 7, so it is 16.7%. Experimental probability is what actually happened when I rolled the dice, like 9 out of 100. They are different because of random chance, but when you roll more times the experimental probability usually gets closer to the theoretical probability." }
  ]
};
