/* =====================================================================
   📐 TUTOR MATH REFERENCE: GEOMETRY (9th/10th grade, CA Common Core)
   For AVID tutors. Plain-language notes, worked examples, common
   mistakes, questions to ask, and quick checks for every unit.
   ✏️ To edit: change the text between the quotes. Keep the commas.
   Format: see the top of tutor-alg1.js (same fields).
   ===================================================================== */
(function () {
  /* small SVG helpers so diagrams stay readable in light and dark mode */
  const T = (x, y, s, o) => `<text x="${x}" y="${y}" font-size="${(o && o.fs) || 13}" text-anchor="${(o && o.a) || "middle"}" fill="currentColor"${o && o.b ? ' font-weight="700"' : ""}>${s}</text>`;
  const L = (x1, y1, x2, y2, o) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${(o && o.c) || "currentColor"}" stroke-width="${(o && o.w) || 2}"${o && o.d ? ' stroke-dasharray="5 4"' : ""}/>`;
  const D = (x, y, c) => `<circle cx="${x}" cy="${y}" r="4" fill="${c || "currentColor"}"/>`;
  const P = (pts, o) => `<polygon points="${pts}" fill="${(o && o.f) || "none"}" stroke="${(o && o.c) || "currentColor"}" stroke-width="2"/>`;
  const svg = (w, h, inner, label) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${label}" style="max-width:100%;height:auto">${inner}</svg>`;
  const BLUE = "#2b7de9", PINK = "#e8368f", ORANGE = "#e08a00", GREEN = "#1aa36f";

  /* coordinate grid helper: range -R..R, size W */
  function grid(R, W, inner) {
    const s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    let g = "";
    for (let i = -R; i <= R; i++) {
      g += L(X(i), 0, X(i), W, { c: "#9993", w: i === 0 ? 2 : 1 }) + L(0, Y(i), W, Y(i), { c: "#9993", w: i === 0 ? 2 : 1 });
    }
    g += L(X(-R), Y(0), X(R), Y(0), { w: 1.5 }) + L(X(0), Y(-R), X(0), Y(R), { w: 1.5 });
    return { g, X, Y, s };
  }

  const U = [];

  /* ---------------- UNIT 1 ---------------- */
  U.push({ id: "g-01", course: "Geometry", unit: 1, title: "Foundations: Points, Segments, Angles, Midpoint & Distance",
    standards: "G.CO.1, G.GPE.4, G.GPE.6, G.GPE.7",
    bigIdea: "Geometry starts with a few basic objects (points, lines, planes) and simple rules about how lengths and angles add together. Most problems in this unit are “the parts add up to the whole” or “find the middle.”",
    vocab: [
      ["point, line, plane", "A point is a location (a dot). A line goes on forever in both directions. A plane is a flat surface that goes on forever, like an endless sheet of paper."],
      ["segment", "Part of a line with two endpoints, written AB with a bar over it. Its length is written AB (no bar)."],
      ["midpoint", "The point exactly in the middle of a segment. It splits the segment into two equal halves."],
      ["congruent (≅)", "Exactly the same size. Congruent segments have equal lengths; congruent angles have equal measures. Tick marks or arcs show congruent parts in diagrams."],
      ["acute / right / obtuse / straight angle", "Less than 90° / exactly 90° (little square in the corner) / between 90° and 180° / exactly 180° (a straight line)."],
      ["complementary / supplementary", "Two angles that add to 90° / two angles that add to 180°. Memory trick: C comes before S, and 90 comes before 180."],
      ["Segment Addition Postulate", "If B is on segment AC between A and C, then AB + BC = AC. The two pieces add up to the whole."],
      ["Angle Addition Postulate", "If point D is inside ∠ABC, then m∠ABD + m∠DBC = m∠ABC. The two smaller angles add up to the big one."]
    ],
    steps: [
      { name: "How to solve a “parts add to the whole” problem", list: ["Draw or look at the picture and find the two parts and the whole.", "Write: part + part = whole (using the expressions given).", "Combine like terms and solve for x.", "Plug x back in to find each length or angle. Check that the parts really add to the whole and that nothing is negative."] },
      { name: "Midpoint and distance on a coordinate grid", list: ["Midpoint: average the x’s and average the y’s: ((x₁ + x₂)/2, (y₁ + y₂)/2).", "Distance: find the change in x and the change in y (subtract carefully with negatives!), square both, add, then take the square root: √((x₂ − x₁)² + (y₂ − y₁)²).", "Distance is really the Pythagorean theorem: the changes in x and y are the legs of a right triangle."] }
    ],
    examples: [
      { q: "B is between A and C. AB = 3x − 2, BC = 2x + 5, and AC = 33. Find x, AB, and BC.", steps: ["The two parts add to the whole: (3x − 2) + (2x + 5) = 33.", "Combine like terms: 5x + 3 = 33.", "Subtract 3: 5x = 30. Divide by 5: x = 6.", "AB = 3(6) − 2 = 16 and BC = 2(6) + 5 = 17.", "Check: 16 + 17 = 33 ✓"], answer: "x = 6, AB = 16, BC = 17" },
      { q: "Point D is inside ∠ABC. m∠ABD = (2x + 10)°, m∠DBC = (3x − 5)°, and m∠ABC = 80°. Find x and both smaller angles.", steps: ["Small angle + small angle = big angle: (2x + 10) + (3x − 5) = 80.", "5x + 5 = 80, so 5x = 75 and x = 15.", "m∠ABD = 2(15) + 10 = 40° and m∠DBC = 3(15) − 5 = 40°.", "Check: 40 + 40 = 80 ✓ (Since they’re equal, ray BD bisects the angle.)"], answer: "x = 15; both angles are 40°" },
      { q: "Find the midpoint and the length of the segment from A(−2, 5) to B(4, −3).", steps: ["Midpoint x: (−2 + 4) ÷ 2 = 2 ÷ 2 = 1. Midpoint y: (5 + (−3)) ÷ 2 = 2 ÷ 2 = 1. Midpoint (1, 1).", "Change in x: 4 − (−2) = 6. Change in y: −3 − 5 = −8.", "Distance = √(6² + (−8)²) = √(36 + 64) = √100 = 10."], answer: "Midpoint (1, 1); length 10" },
      { q: "An angle measures 38°. Find its complement and its supplement.", steps: ["Complement: they must add to 90°, so 90 − 38 = 52°.", "Supplement: they must add to 180°, so 180 − 38 = 142°."], answer: "Complement 52°, supplement 142°" }
    ],
    mistakes: [
      ["Adds the two parts and sets them equal to each other instead of to the whole.", "Ask: “Which length is the whole segment? Point to it.” Then write part + part = whole."],
      ["Subtracts negatives wrong in the distance formula, like 4 − (−2) = 2.", "Have them rewrite subtraction of a negative as adding: 4 − (−2) = 4 + 2 = 6."],
      ["For midpoint, subtracts the coordinates instead of averaging them.", "Remind them the middle is the average: add, then divide by 2."],
      ["Stops after finding x when the question asks for a length or angle.", "Have them circle what the question is asking for before they start."],
      ["Mixes up complementary (90°) and supplementary (180°).", "Memory trick: C before S in the alphabet, 90 before 180; or “Complementary = Corner, Supplementary = Straight.”"]
    ],
    ask: ["What is the whole, and what are the parts in this picture?", "What equation shows that the parts add up to the whole?", "Does your answer make sense? Are any of your lengths negative?", "How could you check your midpoint by looking at the graph?", "Why do we square the differences in the distance formula?", "What do the tick marks in the diagram tell you?"],
    check: [
      { q: "Find the midpoint of (−3, 7) and (5, −1).", a: "(1, 3), because (−3 + 5)/2 = 1 and (7 + (−1))/2 = 3." },
      { q: "Find the distance from (0, 0) to (5, 12).", a: "13, because √(25 + 144) = √169 = 13." },
      { q: "What is the supplement of 117°?", a: "63°, because 180 − 117 = 63." },
      { q: "M is the midpoint of AB. AM = 4x − 1 and MB = 2x + 9. Find AB.", a: "AB = 38. Midpoint means AM = MB: 4x − 1 = 2x + 9, so x = 5 and AM = 19, so AB = 2(19) = 38." }
    ],
    visual: svg(560, 170, `${L(30, 60, 330, 60, { w: 3 })}${D(30, 60)}${D(170, 60, PINK)}${D(330, 60)}${T(30, 40, "A", { b: 1 })}${T(170, 40, "B", { b: 1 })}${T(330, 40, "C", { b: 1 })}${T(100, 85, "AB")}${T(250, 85, "BC")}${T(180, 120, "AB + BC = AC (part + part = whole)", { fs: 12 })}
      ${L(390, 140, 540, 140, { w: 2.5 })}${L(390, 140, 520, 40, { w: 2.5 })}${L(390, 140, 470, 30, { w: 2.5, c: PINK })}${T(395, 160, "B", { b: 1 })}${T(546, 145, "C", { a: "start" })}${T(526, 40, "A", { a: "start" })}${T(468, 22, "D", { b: 1 })}${T(470, 165, "∠ABD + ∠DBC = ∠ABC", { fs: 12 })}`, "Segment addition: points A, B, C on a line with AB plus BC equals AC. Angle addition: ray BD inside angle ABC splits it into two smaller angles."),
    tips: "Encourage students to <b>label the diagram with the expressions</b> before writing any equation. Most errors in this unit come from writing the wrong equation, not from the algebra."
  });

  /* ---------------- UNIT 2 ---------------- */
  U.push({ id: "g-02", course: "Geometry", unit: 2, title: "Reasoning & Proof",
    standards: "G.CO.9, G.CO.10, G.CO.11 (proof skills); MP.3",
    bigIdea: "A proof is an argument where every step has a reason. Students write a statement (what they know) and a reason (the rule, definition, or given fact that says it’s true). Conditional statements (“if…then…”) are the building blocks.",
    vocab: [
      ["conditional statement", "An if–then statement. “If p, then q.” The “if” part is the hypothesis; the “then” part is the conclusion."],
      ["converse", "Switch the parts: “If q, then p.” It is NOT automatically true."],
      ["inverse", "Negate both parts: “If not p, then not q.”"],
      ["contrapositive", "Switch AND negate: “If not q, then not p.” It is always true when the original is true."],
      ["counterexample", "One example that shows a statement is false."],
      ["two-column proof", "A proof written as a table: statements on the left, reasons on the right."],
      ["given", "Information the problem tells you is true. It is always step 1 of a proof."],
      ["properties of equality", "Rules for working with equations: Reflexive (a = a), Symmetric (if a = b, then b = a), Transitive (if a = b and b = c, then a = c), Substitution, and Addition/Subtraction/Multiplication/Division Properties."]
    ],
    steps: [
      { name: "How to write the converse, inverse, and contrapositive", list: ["Underline the “if” part (p) and the “then” part (q).", "Converse: swap them (if q, then p).", "Inverse: add “not” to both (if not p, then not q).", "Contrapositive: swap AND add “not” (if not q, then not p).", "Decide if each is true. If false, give a counterexample."] },
      { name: "How to read (or start) a two-column proof", list: ["Write the Given as step 1 with the reason “Given.”", "Look at what you need to Prove. Ask: what definition or theorem gets me there?", "Each new statement must come from earlier statements. The reason names the rule that lets you make that step.", "The last statement should match exactly what you were asked to prove."] }
    ],
    examples: [
      { q: "Conditional: “If an angle measures 90°, then it is a right angle.” Write the converse, inverse, and contrapositive and decide if each is true.", steps: ["p = “an angle measures 90°”, q = “it is a right angle.”", "Converse: If an angle is a right angle, then it measures 90°. TRUE (that’s the definition).", "Inverse: If an angle does not measure 90°, then it is not a right angle. TRUE.", "Contrapositive: If an angle is not a right angle, then it does not measure 90°. TRUE.", "This one is true in all directions because it is a definition. Definitions are biconditional: “An angle is right if and only if it measures 90°.”"], answer: "All four statements are true (it’s a definition)." },
      { q: "“If a number is divisible by 2, then it is divisible by 4.” True or false?", steps: ["Look for a counterexample: a number divisible by 2 but NOT by 4.", "6 ÷ 2 = 3, but 6 ÷ 4 = 1.5.", "So the statement is false. One counterexample is enough."], answer: "False; counterexample: 6" },
      { q: "Write a two-column proof: Given 2(x − 3) = 14. Prove x = 10.", steps: ["1. 2(x − 3) = 14 → Reason: Given", "2. 2x − 6 = 14 → Reason: Distributive Property", "3. 2x = 20 → Reason: Addition Property of Equality (added 6 to both sides)", "4. x = 10 → Reason: Division Property of Equality (divided both sides by 2)"], answer: "x = 10, with a reason for every step" },
      { q: "Given: M is the midpoint of AB. Prove: AM = ½·AB.", steps: ["1. M is the midpoint of AB → Given", "2. AM = MB → Definition of midpoint", "3. AM + MB = AB → Segment Addition Postulate", "4. AM + AM = AB → Substitution (replace MB with AM)", "5. 2·AM = AB → Combine like terms (Simplify)", "6. AM = ½·AB → Division Property of Equality"], answer: "Proved; each statement has a reason." }
    ],
    mistakes: [
      ["Thinks the converse is always true because the original is true.", "Give a quick counterexample: “If you live in Tulare, then you live in California.” Converse: “If you live in California, then you live in Tulare.” Not true!"],
      ["Mixes up inverse and contrapositive.", "Contrapositive = flip AND not. Point out that the contrapositive always has the same truth value as the original."],
      ["Leaves a reason blank or writes the statement again as the reason.", "Ask: “What rule or definition allowed you to write that?” A reason is a rule, not a calculation."],
      ["Skips steps in a proof (jumps from Given to the answer).", "Ask them to explain out loud how they got from one line to the next. Each sentence they say is a step."],
      ["Uses an example as proof that a statement is ALWAYS true.", "Examples can prove something false (a counterexample), but they can’t prove something is always true."]
    ],
    ask: ["What is the hypothesis and what is the conclusion?", "Can you think of a counterexample?", "What do you know for sure from the Given?", "What definition connects this step to the next one?", "How do you know that is true? What’s the rule?", "Does your last statement match exactly what you were asked to prove?"],
    check: [
      { q: "Write the contrapositive of “If it is raining, then the ground is wet.”", a: "If the ground is not wet, then it is not raining." },
      { q: "Name the property: If AB = CD, then CD = AB.", a: "Symmetric Property of Equality (you can flip the sides)." },
      { q: "Name the property: If m∠1 = m∠2 and m∠2 = m∠3, then m∠1 = m∠3.", a: "Transitive Property of Equality (if both equal the same thing, they equal each other)." },
      { q: "Solve 3x + 4 = 19 and give the reason for each step.", a: "3x = 15 (Subtraction Property of Equality), x = 5 (Division Property of Equality)." }
    ],
    visual: svg(560, 150, `${P("10,20 270,20 270,70 10,70", { c: BLUE })}${T(140, 42, "If p, then q", { b: 1 })}${T(140, 60, "(conditional)", { fs: 11 })}
      ${P("290,20 550,20 550,70 290,70", { c: ORANGE })}${T(420, 42, "If q, then p", { b: 1 })}${T(420, 60, "converse: swap", { fs: 11 })}
      ${P("10,85 270,85 270,135 10,135", { c: ORANGE })}${T(140, 107, "If not p, then not q", { b: 1 })}${T(140, 125, "inverse: add “not”", { fs: 11 })}
      ${P("290,85 550,85 550,135 290,135", { c: BLUE })}${T(420, 107, "If not q, then not p", { b: 1 })}${T(420, 125, "contrapositive: swap + “not” (same truth)", { fs: 11 })}`, "Four boxes: conditional if p then q; converse if q then p; inverse if not p then not q; contrapositive if not q then not p, which has the same truth value as the original."),
    tips: "Tutors don’t need to know every theorem name. Ask the student to <b>say each step in a sentence</b>, then help them find the matching reason in their notes or textbook. Many teachers allow a reference sheet of reasons."
  });

  /* ---------------- UNIT 3 ---------------- */
  const par = (() => { const y1 = 55, y2 = 135, x1 = 300, x2 = 250; let s = L(40, y1, 520, y1, { w: 2.5 }) + L(40, y2, 520, y2, { w: 2.5 }) + L(330, 20, 225, 170, { w: 2.5, c: BLUE });
    const xa = 305.5, xb = 249.5, off = [[-24, -10], [28, -8], [-38, 20], [18, 20]]; const lab = [...off.map(([dx, dy], i) => [xa + dx, y1 + dy, i + 1]), ...off.map(([dx, dy], i) => [xb + dx, y2 + dy, i + 5])];
    s += lab.map(([x, y, n]) => T(x, y, n, { b: 1 })).join("") + T(510, y1 - 8, "line m", { a: "end", fs: 12 }) + T(510, y2 - 8, "line n (∥ m)", { a: "end", fs: 12 }) + T(338, 22, "transversal", { a: "start", fs: 12 });
    return svg(560, 180, s, "Two parallel lines m and n cut by a transversal, making angles numbered 1 to 8. Angles 1, 2, 3, 4 are at line m and angles 5, 6, 7, 8 are at line n."); })();
  U.push({ id: "g-03", course: "Geometry", unit: 3, title: "Parallel & Perpendicular Lines",
    standards: "G.CO.9, G.GPE.5",
    bigIdea: "When a line (a transversal) crosses two parallel lines, it makes 8 angles but only two different sizes. Every angle pair is either EQUAL or adds to 180°. On a graph, parallel lines have the same slope and perpendicular lines have “negative reciprocal” slopes.",
    vocab: [
      ["parallel (∥)", "Lines in the same plane that never cross. Shown with matching arrow marks."],
      ["perpendicular (⊥)", "Lines that cross at a right angle (90°)."],
      ["transversal", "A line that crosses two or more other lines."],
      ["corresponding angles", "Angles in the same position at each crossing (like ∠2 and ∠6). EQUAL when lines are parallel."],
      ["alternate interior angles", "Between the parallel lines, on opposite sides of the transversal (like ∠3 and ∠6). EQUAL."],
      ["alternate exterior angles", "Outside the parallel lines, on opposite sides (like ∠1 and ∠8). EQUAL."],
      ["same-side (consecutive) interior angles", "Between the lines, on the same side (like ∠3 and ∠5). They ADD to 180°."],
      ["slope", "Steepness of a line: rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)."]
    ],
    steps: [
      { name: "How to solve for x with angle pairs", list: ["Name the angle pair (corresponding, alternate interior, etc.).", "Decide: are they EQUAL or do they ADD to 180°? (Shortcut: if both angles look acute or both look obtuse, they’re equal. If one is acute and one is obtuse, they add to 180°.)", "Write the equation: expression = expression, or expression + expression = 180.", "Solve for x, then plug in to find the angle measures."] },
      { name: "How to write a parallel or perpendicular line", list: ["Find the slope of the given line (in y = mx + b, it’s m).", "Parallel: use the SAME slope. Perpendicular: flip the fraction and change the sign (negative reciprocal).", "Use the point: y − y₁ = m(x − x₁). Watch signs with negative coordinates: x − (−6) becomes x + 6.", "Solve for y to put it in y = mx + b form. Check by plugging in the point."] }
    ],
    examples: [
      { q: "Corresponding angles measure (5x − 12)° and (3x + 20)°. Find x and the angle.", steps: ["Corresponding angles are equal: 5x − 12 = 3x + 20.", "Subtract 3x: 2x − 12 = 20. Add 12: 2x = 32. x = 16.", "Angle: 5(16) − 12 = 68°. Check: 3(16) + 20 = 68° ✓"], answer: "x = 16; each angle is 68°" },
      { q: "Same-side interior angles measure (2x + 14)° and (4x − 8)°. Find both angles.", steps: ["Same-side interior angles add to 180°: (2x + 14) + (4x − 8) = 180.", "6x + 6 = 180, so 6x = 174 and x = 29.", "Angles: 2(29) + 14 = 72° and 4(29) − 8 = 108°. Check: 72 + 108 = 180 ✓"], answer: "72° and 108°" },
      { q: "Write the line parallel to y = −3x + 2 that passes through (2, −1).", steps: ["Parallel → same slope: m = −3.", "y − (−1) = −3(x − 2) → y + 1 = −3x + 6.", "Subtract 1: y = −3x + 5.", "Check (2, −1): −3(2) + 5 = −1 ✓"], answer: "y = −3x + 5" },
      { q: "Write the line perpendicular to y = (2/3)x − 4 through (−6, 1).", steps: ["Perpendicular → negative reciprocal of 2/3 is −3/2.", "y − 1 = −3/2 (x − (−6)) → y − 1 = −3/2 (x + 6).", "Distribute: y − 1 = −3/2 x − 9. Add 1: y = −3/2 x − 8.", "Check (−6, 1): −3/2(−6) − 8 = 9 − 8 = 1 ✓"], answer: "y = −(3/2)x − 8" }
    ],
    mistakes: [
      ["Sets same-side interior angles equal instead of adding to 180°.", "Ask: “Does one angle look bigger than 90° and the other smaller? Then they can’t be equal.”"],
      ["For a perpendicular slope, only flips the fraction OR only changes the sign.", "Both: flip AND change sign. 2/3 → −3/2. Check: the slopes should multiply to −1."],
      ["Writes y − y₁ = m(x − x₁) with the wrong signs when the point is negative.", "Have them write the parentheses first: x − (−6), then simplify to x + 6."],
      ["Uses angle pair rules when the lines are NOT marked parallel.", "The equal/supplementary rules only work if the lines are parallel. Look for the arrow marks."],
      ["Mixes up “interior” and “exterior.”", "Interior = between the two parallel lines (inside the sandwich). Exterior = outside."]
    ],
    ask: ["Are the lines parallel? How do you know from the picture?", "Where are the two angles: inside or outside the parallel lines? Same side or opposite sides?", "Do the angles look the same size, or does one look bigger?", "Should your equation be “equal” or “add to 180”? Why?", "What is the slope of the line you were given?", "How can you check that your new line goes through the point?"],
    check: [
      { q: "Alternate interior angles are (7x − 4)° and (5x + 18)°. Find x.", a: "x = 11 (angles are 73°), because alternate interior angles are equal: 2x = 22." },
      { q: "What slope is perpendicular to a line with slope 4?", a: "−1/4 (flip and change the sign)." },
      { q: "Is the line through (1, 2) and (3, 8) parallel to the line through (0, 0) and (−1, −3)?", a: "Yes. Both slopes are 3: 6/2 = 3 and −3/−1 = 3." },
      { q: "∠1 = 110°. What is the measure of an angle that forms a linear pair with ∠1?", a: "70°, because a linear pair adds to 180°." }
    ],
    visual: par,
    tips: "Using the diagram: angles 2, 3, 6, 7 are all equal, and angles 1, 4, 5, 8 are all equal. Any “small” angle + any “big” angle = 180°. This shortcut lets a student check any answer without memorizing names."
  });

  /* ---------------- UNIT 4 ---------------- */
  const tr = (() => { const G = grid(6, 300, ""), X = G.X, Y = G.Y; const pre = [[1, 2], [4, 2], [1, 5]], img = pre.map(([x, y]) => [x - 3, y - 2]), rot = pre.map(([x, y]) => [x, -y]);
    const pts = a => a.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ");
    let s = G.g + P(pts(pre), { c: BLUE, f: "#2b7de922" }) + P(pts(img), { c: PINK, f: "#e8368f22" }) + P(pts(rot), { c: ORANGE, f: "#e0800022" });
    s += T(X(2), Y(3) + 4, "ABC", { fs: 11, b: 1 }) + T(X(-1.3), Y(1) + 4, "slide", { fs: 10 }) + T(X(2), Y(-3) + 4, "flip", { fs: 10 }) + T(X(4.5), Y(-0.5), "x-axis", { fs: 9, a: "start" });
    return svg(300, 300, s, "Coordinate grid. Blue triangle ABC at (1,2), (4,2), (1,5). Pink image translated 3 left and 2 down at (−2,0), (1,0), (−2,3). Orange image reflected over the x-axis at (1,−2), (4,−2), (1,−5)."); })();
  U.push({ id: "g-04", course: "Geometry", unit: 4, title: "Transformations & Symmetry",
    standards: "G.CO.2, G.CO.3, G.CO.4, G.CO.5, G.SRT.1",
    bigIdea: "A transformation moves or resizes a figure. Translations (slides), reflections (flips), and rotations (turns) keep the shape and size the same. Dilations make it bigger or smaller but keep the shape. On a grid, each one has a simple coordinate rule.",
    vocab: [
      ["pre-image / image", "The original figure / the figure after the transformation. Image points get a prime mark: A → A′ (“A prime”)."],
      ["translation", "A slide. Every point moves the same distance in the same direction: (x, y) → (x + a, y + b)."],
      ["reflection", "A flip over a line (the line of reflection). The image is a mirror image."],
      ["rotation", "A turn around a fixed point (usually the origin). Counterclockwise is the usual positive direction."],
      ["dilation", "A resize from a center point by a scale factor k. k > 1 enlarges, 0 < k < 1 shrinks."],
      ["rigid motion (isometry)", "A transformation that keeps lengths and angles the same: translations, reflections, rotations. The image is congruent."],
      ["line of symmetry / rotational symmetry", "A line that folds a figure onto itself / a turn less than 360° that maps a figure onto itself."]
    ],
    steps: [
      { name: "Coordinate rules to keep handy", list: ["Translation a right/left and b up/down: (x, y) → (x + a, y + b). Left and down are negative.", "Reflect over x-axis: (x, y) → (x, −y). Over y-axis: (x, y) → (−x, y). Over y = x: (x, y) → (y, x).", "Rotate 90° counterclockwise about the origin: (x, y) → (−y, x). 180°: (x, y) → (−x, −y). 270° counterclockwise (= 90° clockwise): (x, y) → (y, −x).", "Dilate by k from the origin: (x, y) → (kx, ky)."] },
      { name: "How to apply a rule", list: ["List every vertex of the pre-image.", "Apply the rule to each point, one coordinate at a time. Use parentheses for negatives.", "Plot the image and label with primes (A′, B′, C′).", "Check: for rigid motions, side lengths should match the original."] }
    ],
    examples: [
      { q: "Triangle A(1, 2), B(4, 2), C(1, 5) is translated 3 units left and 2 units down. Find the image.", steps: ["Rule: (x, y) → (x − 3, y − 2).", "A′ = (1 − 3, 2 − 2) = (−2, 0).", "B′ = (4 − 3, 2 − 2) = (1, 0).", "C′ = (1 − 3, 5 − 2) = (−2, 3)."], answer: "A′(−2, 0), B′(1, 0), C′(−2, 3)" },
      { q: "Rotate the point (3, −2) 90° counterclockwise about the origin.", steps: ["Rule: (x, y) → (−y, x).", "x = 3 and y = −2, so −y = −(−2) = 2 and the new y is x = 3.", "Image: (2, 3)."], answer: "(2, 3)" },
      { q: "Reflect (−4, 1) over the y-axis, then (separately) over the line y = x.", steps: ["Over the y-axis: change the sign of x: (4, 1).", "Over y = x: swap the coordinates: (1, −4)."], answer: "(4, 1) and (1, −4)" },
      { q: "Dilate (−2, 6) by a scale factor of 1/2 centered at the origin.", steps: ["Multiply both coordinates by 1/2.", "(−2 · 1/2, 6 · 1/2) = (−1, 3).", "The point moved halfway toward the origin, so the figure shrinks."], answer: "(−1, 3)" }
    ],
    mistakes: [
      ["Mixes up which coordinate changes sign when reflecting over the x-axis vs. the y-axis.", "Reflecting over the x-axis means flipping up/down, so the y changes. Have them picture folding the paper along that axis."],
      ["Uses the clockwise rule for a counterclockwise rotation.", "Have them test a simple point like (1, 0). 90° counterclockwise should land on (0, 1), straight up."],
      ["For a translation, adds to x when it should subtract (moving left).", "Left and down are negative. Say the direction out loud before writing the rule."],
      ["Thinks a dilation keeps the same size.", "Only rigid motions keep size. A dilation changes size but keeps the shape (similar, not congruent)."],
      ["Forgets the prime marks or mixes up which point maps to which.", "A always maps to A′. Keep the same order of letters."]
    ],
    ask: ["What kind of move is this: slide, flip, turn, or resize?", "Which coordinate should change, and how?", "Can you test your rule on an easy point first?", "Is the image the same size as the original? Should it be?", "Where would the image land if you traced and moved the paper?", "How can you check your answer on the graph?"],
    check: [
      { q: "Reflect (5, −3) over the x-axis.", a: "(5, 3): the y-coordinate changes sign." },
      { q: "Rotate (−2, 7) 180° about the origin.", a: "(2, −7): both coordinates change sign." },
      { q: "Dilate (−1, 4) by a scale factor of 3 from the origin.", a: "(−3, 12): multiply both coordinates by 3." },
      { q: "Which transformations are rigid motions?", a: "Translations, reflections, and rotations. Dilations are not (they change size)." }
    ],
    visual: tr,
    tips: "Tracing paper (or a sheet of notebook paper held up to the window) is a great tool. Students can trace the figure and physically slide, flip, or turn it."
  });

  /* ---------------- UNIT 5 ---------------- */
  const cong = (() => { const tk = (x1, y1, x2, y2, n, c) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, Ln = Math.hypot(dx, dy), nx = -dy / Ln * 7, ny = dx / Ln * 7, ux = dx / Ln, uy = dy / Ln; let s = ""; for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 6; s += L((mx + ux * o - nx).toFixed(1), (my + uy * o - ny).toFixed(1), (mx + ux * o + nx).toFixed(1), (my + uy * o + ny).toFixed(1), { c: c || PINK }); } return s; };
    const tri = (o, A, B, C, names) => P(`${o + A[0]},${A[1]} ${o + B[0]},${B[1]} ${o + C[0]},${C[1]}`, { c: BLUE }) + tk(o + A[0], A[1], o + B[0], B[1], 1) + tk(o + B[0], B[1], o + C[0], C[1], 2) + tk(o + C[0], C[1], o + A[0], A[1], 3) + T(o + A[0] - 10, A[1] + 15, names[0], { b: 1 }) + T(o + B[0] + 10, B[1] + 15, names[1], { b: 1 }) + T(o + C[0], C[1] - 8, names[2], { b: 1 });
    const A = [30, 150], B = [210, 150], C = [80, 40];
    return svg(560, 190, tri(0, A, B, C, ["A", "B", "C"]) + tri(290, A, B, C, ["D", "E", "F"]) + T(280, 185, "△ABC ≅ △DEF by SSS: matching tick marks show matching sides", { fs: 12 }), "Two triangles ABC and DEF with matching tick marks on all three pairs of sides, showing they are congruent by SSS."); })();
  U.push({ id: "g-05", course: "Geometry", unit: 5, title: "Congruent Triangles",
    standards: "G.CO.7, G.CO.8, G.CO.10, G.SRT.5",
    bigIdea: "Two triangles are congruent when they are exact copies. You don’t have to check all six parts: there are five shortcuts (SSS, SAS, ASA, AAS, HL). Once triangles are congruent, all their matching parts are equal (CPCTC).",
    vocab: [
      ["congruent triangles", "Triangles with all matching sides and all matching angles equal. Written △ABC ≅ △DEF. The ORDER of letters tells which parts match: A ↔ D, B ↔ E, C ↔ F."],
      ["SSS", "Side-Side-Side: all three pairs of sides are equal."],
      ["SAS", "Side-Angle-Side: two sides and the angle BETWEEN them (the included angle)."],
      ["ASA / AAS", "Angle-Side-Angle (the side is between the angles) / Angle-Angle-Side (the side is not between them)."],
      ["HL", "Hypotenuse-Leg: for RIGHT triangles only. The hypotenuses match and one pair of legs match."],
      ["CPCTC", "“Corresponding Parts of Congruent Triangles are Congruent.” Used AFTER proving triangles congruent to say a specific side or angle is equal."],
      ["isosceles triangle", "A triangle with two equal sides (legs). The angles opposite those sides (base angles) are also equal."],
      ["NOT shortcuts", "AAA (same shape, maybe different size) and SSA (spells a bad word, and it can make two different triangles) do NOT prove congruence."]
    ],
    steps: [
      { name: "How to decide which shortcut works", list: ["Mark everything you know on the diagram: given sides (tick marks), angles (arcs), right angles, shared sides, vertical angles.", "Shared side? It’s equal to itself (Reflexive Property). Vertical angles? They’re equal.", "List the matching parts in order around the triangle, like S-A-S. Is the angle between the two sides?", "Match your list to SSS, SAS, ASA, AAS, or HL. If you get AAA or SSA, there is not enough information."] }
    ],
    examples: [
      { q: "In △ABC and △DEF, AB = DE, BC = EF, and ∠B = ∠E. Are the triangles congruent? Which shortcut?", steps: ["The angle ∠B is between sides AB and BC, and ∠E is between DE and EF.", "So we have Side, the angle between, Side.", "That is SAS."], answer: "Yes, by SAS" },
      { q: "△ABC ≅ △DEF. AB = 3x + 1 and DE = 2x + 9. Find x and AB.", steps: ["The letter order says AB matches DE, so they’re equal: 3x + 1 = 2x + 9.", "x = 8.", "AB = 3(8) + 1 = 25."], answer: "x = 8, AB = 25" },
      { q: "An isosceles triangle has a vertex angle of 40°. Find each base angle.", steps: ["The base angles are equal; call each one b.", "40 + b + b = 180, so 2b = 140.", "b = 70°."], answer: "Each base angle is 70°" },
      { q: "Two right triangles have equal hypotenuses (13 cm) and one equal leg (5 cm). Are they congruent?", steps: ["Both are right triangles, with hypotenuse and a leg matching.", "That is the HL shortcut. (The other leg is 12 cm in both, by the Pythagorean theorem.)"], answer: "Yes, by HL" }
    ],
    mistakes: [
      ["Says SAS when the angle is NOT between the two sides.", "Have them trace the angle’s two sides with a finger. Both marked sides must form the angle."],
      ["Uses AAA or SSA to prove congruence.", "AAA: a small and a large equilateral triangle have the same angles but aren’t congruent. SSA doesn’t work either."],
      ["Matches the wrong parts because they ignore the letter order in △ABC ≅ △DEF.", "Write the two names one above the other and draw lines connecting A–D, B–E, C–F."],
      ["Forgets shared sides and vertical angles as “free” information.", "Ask: “Is there a side both triangles use? Any angles that are vertical?”"],
      ["Uses CPCTC before proving the triangles congruent.", "CPCTC is always a later step. The triangles must be proven congruent first."]
    ],
    ask: ["What do you already know is equal? Can you mark it on the picture?", "Is there a side the two triangles share?", "Is the angle you marked between the two sides?", "Which shortcut matches the parts you marked?", "Does the order of the letters tell you which parts match?", "If you only know angles, could the triangles be different sizes?"],
    check: [
      { q: "△PQR ≅ △XYZ. Which angle matches ∠Q?", a: "∠Y (second letter matches second letter)." },
      { q: "Two angles and a side that is NOT between them are equal. Which shortcut?", a: "AAS." },
      { q: "The base angles of an isosceles triangle are (2x + 10)° and (3x − 15)°. Find x.", a: "x = 25. Base angles are equal: 2x + 10 = 3x − 15. (Each is 60°.)" },
      { q: "All three angles of two triangles are equal. Must the triangles be congruent?", a: "No. AAA only proves they’re the same shape (similar), not the same size." }
    ],
    visual: cong,
    tips: "Highlighters help: have the student color matching parts in the same color in both triangles before deciding on a shortcut."
  });

  /* ---------------- UNIT 6 ---------------- */
  U.push({ id: "g-06", course: "Geometry", unit: 6, title: "Relationships in Triangles",
    standards: "G.CO.10, G.CO.12, G.C.3",
    bigIdea: "Every triangle follows a few reliable rules: the angles add to 180°, an outside (exterior) angle equals the two far inside angles, a midsegment is half the third side, and the two shortest sides must add to more than the longest side.",
    vocab: [
      ["Triangle Sum Theorem", "The three angles of any triangle add to 180°."],
      ["exterior angle", "An angle formed outside the triangle by extending one side. It equals the sum of the two remote (far) interior angles."],
      ["midsegment", "A segment connecting the midpoints of two sides. It is parallel to the third side and exactly HALF as long."],
      ["Triangle Inequality Theorem", "Any two sides of a triangle must add to MORE than the third side."],
      ["median / centroid", "A median goes from a vertex to the midpoint of the opposite side. The three medians meet at the centroid, which is 2/3 of the way from each vertex."],
      ["perpendicular bisector / circumcenter", "A line that cuts a side in half at a right angle. All three meet at the circumcenter, which is the same distance from all three vertices."],
      ["angle bisector / incenter", "A ray that splits an angle in half. All three meet at the incenter, the same distance from all three sides."]
    ],
    steps: [
      { name: "How to check whether three lengths can make a triangle", list: ["Add the two SHORTEST sides.", "If that sum is greater than the longest side, it’s a triangle. If it is equal or less, it isn’t.", "To find the possible range for a third side when you know two sides a and b: (bigger − smaller) < third side < (bigger + smaller)."] },
      { name: "Angle rules to try first", list: ["Inside the triangle? All three add to 180.", "Outside angle? Exterior = remote interior + remote interior.", "Exterior angle and the interior angle next to it form a straight line, so they add to 180."] }
    ],
    examples: [
      { q: "A triangle’s angles are x°, 2x°, and 3x°. Find each angle.", steps: ["x + 2x + 3x = 180, so 6x = 180 and x = 30.", "Angles: 30°, 60°, 90°. (It’s a right triangle!)"], answer: "30°, 60°, 90°" },
      { q: "The two remote interior angles of a triangle are 45° and 67°. Find the exterior angle.", steps: ["Exterior angle = sum of the two remote interior angles.", "45 + 67 = 112°."], answer: "112°" },
      { q: "DE is a midsegment of △ABC, parallel to BC. DE = 2x + 3 and BC = 5x − 4. Find x, DE, and BC.", steps: ["The midsegment is half the third side, so BC = 2 · DE: 5x − 4 = 2(2x + 3).", "5x − 4 = 4x + 6, so x = 10.", "DE = 2(10) + 3 = 23 and BC = 5(10) − 4 = 46. Check: 46 is twice 23 ✓"], answer: "x = 10, DE = 23, BC = 46" },
      { q: "Two sides of a triangle are 5 and 9. What lengths are possible for the third side?", steps: ["Smallest: greater than 9 − 5 = 4.", "Largest: less than 9 + 5 = 14.", "So 4 < third side < 14."], answer: "Between 4 and 14 (not equal to either)" }
    ],
    mistakes: [
      ["Adds the exterior angle to the interior angles and sets the total to 180.", "Remind them: exterior = the two far inside angles. It is not one of the three interior angles."],
      ["Sets the midsegment equal to the third side instead of half of it.", "Ask: “The midsegment connects the middles. Is it as long as the bottom or shorter?”"],
      ["Says 3, 4, 7 can be a triangle because 3 + 4 = 7.", "The sum must be GREATER. Equal makes a flat line, not a triangle. Try building it with pencils."],
      ["Uses the adjacent interior angle in the exterior angle rule.", "The exterior angle uses the two angles NOT touching it."],
      ["Mixes up the triangle centers.", "Most classes focus on centroid (medians, balance point) and circumcenter (perpendicular bisectors). Check the student’s notes for which ones they need."]
    ],
    ask: ["What do all three angles of a triangle add to?", "Which two angles are far away from the exterior angle?", "Is the midsegment longer or shorter than the side it’s parallel to? By how much?", "Could you build this triangle with sticks of those lengths?", "Does your answer make sense with the picture?"],
    check: [
      { q: "Can sides of 3, 4, and 8 form a triangle?", a: "No. 3 + 4 = 7, which is not greater than 8." },
      { q: "Two angles of a triangle are 50° and 60°. Find the third.", a: "70°, because 180 − 50 − 60 = 70." },
      { q: "An exterior angle is 120° and one remote interior angle is 75°. Find the other remote interior angle.", a: "45°, because 120 − 75 = 45." },
      { q: "A median of a triangle is 18 units long. How far is the centroid from the vertex?", a: "12 units: the centroid is 2/3 of the way along the median (2/3 · 18 = 12)." }
    ],
    visual: svg(560, 190, `${P("40,160 260,160 110,40", { c: BLUE })}${L(260, 160, 340, 160, { d: 1 })}<path d="M285 160 A25 25 0 0 0 250 145" fill="none" stroke="${PINK}" stroke-width="2.5"/>${T(305, 150, "exterior", { fs: 11, a: "start" })}${T(70, 150, "a", { b: 1 })}${T(112, 66, "b", { b: 1 })}${T(150, 182, "exterior angle = a + b", { fs: 12 })}
      ${P("380,160 540,160 430,40", { c: BLUE })}${D(405, 100, ORANGE)}${D(485, 100, ORANGE)}${L(405, 100, 485, 100, { c: ORANGE, w: 3 })}${T(445, 92, "midsegment", { fs: 11 })}${T(460, 182, "midsegment = ½ of the base", { fs: 12 })}`, "Left: a triangle with one side extended to show an exterior angle equal to the two remote interior angles a plus b. Right: a triangle with a midsegment connecting the midpoints of two sides, half as long as the base."),
    tips: "Most angle questions can be checked in seconds: add up the three angles and make sure you get 180. Encourage students to always do this check."
  });

  /* ---------------- UNIT 7 ---------------- */
  U.push({ id: "g-07", course: "Geometry", unit: 7, title: "Similarity, Ratios & Proportions",
    standards: "G.SRT.2, G.SRT.3, G.SRT.4, G.SRT.5",
    bigIdea: "Similar figures have the same SHAPE but can be different sizes. Their angles are equal and their sides are in proportion (multiplied by the same scale factor). Most problems come down to setting up and solving a proportion.",
    vocab: [
      ["ratio / proportion", "A ratio compares two numbers (3:4 or 3/4). A proportion says two ratios are equal (3/4 = 6/8)."],
      ["similar (~)", "Same shape, possibly different size. All matching angles are equal and matching sides are proportional. Written △ABC ~ △DEF."],
      ["scale factor (k)", "The number you multiply every side by to go from one figure to the similar one. k = new length ÷ original length."],
      ["cross multiply", "To solve a/b = c/d, multiply diagonally: a · d = b · c."],
      ["AA similarity", "If two angles of one triangle equal two angles of another, the triangles are similar. (The third angle has to match too.)"],
      ["SSS / SAS similarity", "All three side ratios are equal / two side ratios are equal and the angle between them is equal."],
      ["Side-Splitter (Triangle Proportionality) Theorem", "A line parallel to one side of a triangle splits the other two sides proportionally."]
    ],
    steps: [
      { name: "How to set up a proportion for similar figures", list: ["Match the corresponding sides (use the letter order or the angles).", "Write the ratios in the SAME order: small/big = small/big (or left triangle/right triangle on both sides).", "Cross multiply and solve.", "Check: is the bigger figure’s side actually bigger?"] },
      { name: "Scale factor effects", list: ["Lengths and perimeters multiply by k.", "Areas multiply by k².", "Volumes multiply by k³."] }
    ],
    examples: [
      { q: "△ABC ~ △DEF. AB = 6, DE = 9, and BC = 8. Find EF.", steps: ["AB matches DE and BC matches EF.", "AB/DE = BC/EF → 6/9 = 8/EF.", "Cross multiply: 6 · EF = 72, so EF = 12.", "Scale factor check: 9 ÷ 6 = 1.5 and 8 × 1.5 = 12 ✓"], answer: "EF = 12" },
      { q: "A 1.6 m tall student casts a 2 m shadow. At the same time, a tree casts a 15 m shadow. How tall is the tree?", steps: ["The sun makes the same angle, so the triangles are similar (AA).", "height/shadow: 1.6/2 = h/15.", "Cross multiply: 2h = 24, so h = 12."], answer: "12 m" },
      { q: "In △ABC, DE ∥ BC with D on AB and E on AC. AD = 4, DB = 6, and AE = 5. Find EC.", steps: ["Side-Splitter: AD/DB = AE/EC.", "4/6 = 5/EC → 4 · EC = 30.", "EC = 7.5."], answer: "EC = 7.5" },
      { q: "Two similar rectangles have a scale factor of 3. The small one has area 10 cm². What is the area of the large one?", steps: ["Areas multiply by k² = 3² = 9.", "10 × 9 = 90."], answer: "90 cm²" }
    ],
    mistakes: [
      ["Sets up the proportion with the sides in mixed-up order (small/big = big/small).", "Have them label each ratio “left/right” or “small/big” and keep the same order on both sides."],
      ["Matches sides by position on the page instead of by the angles or letter order.", "Triangles are often flipped or rotated. Match using equal angles or the similarity statement."],
      ["Adds instead of multiplies (thinks if one side is 3 more, all sides are 3 more).", "Similar means multiplied by the same number. Try a quick example: 2→4 is ×2, so 5→10, not 7."],
      ["Uses k instead of k² for area.", "Draw a 1×1 square and a 2×2 square. The sides doubled, but the area went from 1 to 4."],
      ["Forgets that similar is not the same as congruent.", "Congruent = same shape AND size. Similar = same shape only."]
    ],
    ask: ["Which side in the big triangle matches this side in the small one? How do you know?", "Are your ratios in the same order on both sides?", "What is the scale factor? Is it bigger or smaller than 1?", "Do two angles match? What does that tell you?", "Does your answer make sense: should it be bigger or smaller?"],
    check: [
      { q: "Solve 3/x = 9/12.", a: "x = 4, because 9x = 36." },
      { q: "Two similar triangles have a scale factor of 2:5. The smaller perimeter is 20. Find the larger perimeter.", a: "50, because perimeters scale by k: 20 × 5/2 = 50." },
      { q: "One triangle has angles 40° and 60°; another has angles 40° and 80°. Are they similar?", a: "Yes. The missing angles are 80° and 60°, so both are 40°-60°-80° (AA)." },
      { q: "A map scale is 1 inch : 25 miles. Two towns are 3.2 inches apart. How far apart are they?", a: "80 miles, because 3.2 × 25 = 80." }
    ],
    visual: svg(560, 190, `${P("30,160 150,160 30,70", { c: BLUE })}${T(90, 180, "8", { b: 1 })}${T(18, 120, "6", { b: 1 })}${T(30, 62, "A")}${T(20, 175, "B")}${T(160, 175, "C")}
      ${P("230,160 410,160 230,25", { c: PINK })}${T(320, 180, "12", { b: 1 })}${T(216, 95, "9", { b: 1 })}${T(230, 18, "D")}${T(220, 175, "E")}${T(420, 175, "F")}
      ${T(490, 80, "scale factor", { fs: 12 })}${T(490, 100, "9 ÷ 6 = 1.5", { fs: 13, b: 1 })}${T(490, 120, "8 × 1.5 = 12", { fs: 13, b: 1 })}`, "Two similar right triangles. Triangle ABC has sides 6 and 8. Triangle DEF has matching sides 9 and 12. The scale factor is 1.5."),
    tips: "If a student is stuck on matching sides, have them redraw the triangles side by side facing the same direction. Students often do this naturally once they see it."
  });

  /* ---------------- UNIT 8 ---------------- */
  U.push({ id: "g-08", course: "Geometry", unit: 8, title: "Right Triangles & Trigonometry",
    standards: "G.SRT.6, G.SRT.7, G.SRT.8",
    bigIdea: "In a right triangle, the Pythagorean theorem connects the three sides, and trigonometry (sine, cosine, tangent) connects the sides to the angles. Special 45-45-90 and 30-60-90 triangles have side patterns that make calculations quick.",
    vocab: [
      ["hypotenuse", "The longest side of a right triangle, across from the right angle."],
      ["legs", "The two shorter sides that form the right angle."],
      ["Pythagorean theorem", "a² + b² = c², where a and b are legs and c is the hypotenuse."],
      ["opposite / adjacent", "For a chosen angle θ: the opposite side is across from it; the adjacent side touches it (and is not the hypotenuse)."],
      ["SOH-CAH-TOA", "sin θ = Opposite/Hypotenuse, cos θ = Adjacent/Hypotenuse, tan θ = Opposite/Adjacent."],
      ["inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)", "Used to find an ANGLE when you know two sides."],
      ["angle of elevation / depression", "The angle looking UP from horizontal / looking DOWN from horizontal."]
    ],
    steps: [
      { name: "Pythagorean theorem", list: ["Identify the hypotenuse (across from the right angle).", "Finding the hypotenuse: c = √(a² + b²).", "Finding a leg: a = √(c² − b²). (Subtract!)", "Converse: if a² + b² = c² for the longest side c, the triangle is right."] },
      { name: "Trig: which ratio do I use?", list: ["Mark the angle you know (or want).", "Label the sides from that angle: opposite, adjacent, hypotenuse.", "Circle the two sides involved (the one you know and the one you want). Pick SOH, CAH, or TOA that uses those two.", "Missing side: set up the equation and solve. Missing angle: use the inverse button.", "Calculator must be in DEGREE mode."] },
      { name: "Special right triangles", list: ["45-45-90: legs are equal; hypotenuse = leg × √2.", "30-60-90: short leg = s; long leg = s√3; hypotenuse = 2s. The short leg is across from 30°."] }
    ],
    examples: [
      { q: "A right triangle has legs 6 and 8. Find the hypotenuse.", steps: ["c² = 6² + 8² = 36 + 64 = 100.", "c = √100 = 10."], answer: "10" },
      { q: "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.", steps: ["Finding a leg means subtract: b² = 13² − 5² = 169 − 25 = 144.", "b = 12."], answer: "12" },
      { q: "In a 30-60-90 triangle, the short leg is 4. Find the long leg and hypotenuse.", steps: ["Hypotenuse = 2 × short leg = 8.", "Long leg = short leg × √3 = 4√3 ≈ 6.93."], answer: "Long leg 4√3 ≈ 6.93, hypotenuse 8" },
      { q: "You stand 50 ft from a building. The angle of elevation to the top is 62°. How tall is the building?", steps: ["From the 62° angle: the height is OPPOSITE, the 50 ft is ADJACENT.", "Opposite and adjacent → TOA: tan 62° = h/50.", "h = 50 × tan 62° ≈ 50 × 1.8807 ≈ 94.0 ft."], answer: "About 94.0 ft" },
      { q: "A right triangle has opposite side 7 and adjacent side 10 from angle θ. Find θ.", steps: ["Opposite and adjacent → tan θ = 7/10 = 0.7.", "θ = tan⁻¹(0.7) ≈ 35.0°."], answer: "About 35.0°" }
    ],
    mistakes: [
      ["Adds when finding a leg (c² + b² instead of c² − b²).", "Ask: “Should a leg be longer or shorter than the hypotenuse?” If longer, they added."],
      ["Uses the hypotenuse as a or b in a² + b² = c².", "c is ALWAYS the side across from the right angle."],
      ["Labels opposite/adjacent from the wrong angle (or from the right angle).", "Have them put a finger on the angle θ. Opposite is across the triangle from the finger."],
      ["Calculator is in radian mode, giving strange answers.", "Check: sin 30 should equal 0.5. If not, switch to degree mode."],
      ["Uses sin when they need sin⁻¹ (finding an angle).", "If the answer is an ANGLE, use the inverse (2nd) button."],
      ["Mixes up the 30-60-90 pattern.", "The hypotenuse is always the biggest number (2s). The short leg is across from the smallest angle (30°)."]
    ],
    ask: ["Where is the right angle? Which side is the hypotenuse?", "Which angle are we working from? What’s opposite it?", "Which two sides do you know or need? Which ratio uses those two?", "Are you looking for a side or an angle?", "Is your hypotenuse the longest side?", "Is your calculator in degree mode? How can you check?"],
    check: [
      { q: "Legs of 9 and 12. Find the hypotenuse.", a: "15, because 81 + 144 = 225 and √225 = 15." },
      { q: "A 30-60-90 triangle has hypotenuse 10. Find both legs.", a: "Short leg 5 (half of 10), long leg 5√3 ≈ 8.66." },
      { q: "What is sin 30°?", a: "0.5 (a good check that the calculator is in degree mode)." },
      { q: "A 13 ft ladder leans on a wall with its foot 5 ft from the wall. How high does it reach?", a: "12 ft, because √(169 − 25) = √144 = 12." }
    ],
    visual: svg(560, 200, `${P("40,170 260,170 260,40", { c: BLUE })}<path d="M248 170 V158 H260" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M80 170 A40 40 0 0 0 76 152" fill="none" stroke="${PINK}" stroke-width="2.5"/>${T(92, 162, "θ", { b: 1 })}${T(150, 190, "adjacent (touches θ)", { fs: 12 })}${T(266, 100, "opposite", { fs: 12, a: "start" })}${T(266, 116, "(across from θ)", { fs: 11, a: "start" })}${T(130, 92, "hypotenuse", { fs: 12 })}
      ${T(440, 50, "SOH: sin = opp / hyp", { fs: 14, b: 1 })}${T(440, 85, "CAH: cos = adj / hyp", { fs: 14, b: 1 })}${T(440, 120, "TOA: tan = opp / adj", { fs: 14, b: 1 })}${T(440, 160, "a² + b² = c²", { fs: 14, b: 1 })}`, "A right triangle labeled from angle theta: adjacent side along the bottom, opposite side on the right, hypotenuse across from the right angle. Next to it: SOH sine equals opposite over hypotenuse, CAH cosine equals adjacent over hypotenuse, TOA tangent equals opposite over adjacent, and a squared plus b squared equals c squared."),
    tips: "Have students write <b>SOH-CAH-TOA</b> at the top of the page and label O, A, H on every triangle before choosing a ratio. Labeling first prevents most trig mistakes."
  });

  /* ---------------- UNIT 9 ---------------- */
  U.push({ id: "g-09", course: "Geometry", unit: 9, title: "Quadrilaterals & Polygons",
    standards: "G.CO.11, G.GPE.4, G.GPE.7",
    bigIdea: "Quadrilaterals form a family: a square is a special rectangle AND a special rhombus, and all of them are parallelograms. Each type has properties about sides, angles, and diagonals that turn into equations. For any polygon, the interior angles add to (n − 2) · 180°.",
    vocab: [
      ["parallelogram", "Both pairs of opposite sides are parallel. Opposite sides are equal, opposite angles are equal, consecutive angles add to 180°, and the diagonals cut each other in half."],
      ["rectangle", "A parallelogram with four right angles. Its diagonals are equal in length."],
      ["rhombus", "A parallelogram with four equal sides. Its diagonals are perpendicular and bisect the angles."],
      ["square", "A rectangle AND a rhombus: four equal sides and four right angles. It has every property above."],
      ["trapezoid", "Exactly one pair of parallel sides (the bases). In an isosceles trapezoid the legs and base angles are equal."],
      ["polygon interior angle sum", "(n − 2) · 180°, where n is the number of sides."],
      ["exterior angle sum", "The exterior angles of any polygon add to 360°. In a regular polygon, each exterior angle = 360° ÷ n."],
      ["regular polygon", "All sides equal and all angles equal."]
    ],
    steps: [
      { name: "How to solve quadrilateral problems", list: ["Identify the shape and look up its properties (sides, angles, diagonals).", "Pick the property that connects the two expressions you have.", "Equal parts → set expressions equal. Consecutive angles → add to 180. Diagonals halves → half = half.", "Solve for x and plug back in. Answer the actual question."] },
      { name: "Polygon angle formulas", list: ["Sum of interior angles = (n − 2) · 180.", "Each interior angle (regular) = (n − 2) · 180 ÷ n.", "Each exterior angle (regular) = 360 ÷ n.", "Number of sides from an exterior angle: n = 360 ÷ exterior angle."] }
    ],
    examples: [
      { q: "In parallelogram ABCD, m∠A = (3x + 10)° and m∠B = (2x + 20)°. Find both angles.", steps: ["∠A and ∠B are consecutive, so they add to 180: 5x + 30 = 180.", "5x = 150, x = 30.", "m∠A = 100° and m∠B = 80°."], answer: "100° and 80°" },
      { q: "In a parallelogram, opposite sides are 4x − 3 and 2x + 7. Find x and the side length.", steps: ["Opposite sides are equal: 4x − 3 = 2x + 7.", "2x = 10, x = 5.", "Side = 4(5) − 3 = 17."], answer: "x = 5, side 17" },
      { q: "In rectangle ABCD, diagonal AC = 3x + 4 and diagonal BD = 5x − 10. Find the length of each diagonal.", steps: ["A rectangle’s diagonals are equal: 3x + 4 = 5x − 10.", "14 = 2x, x = 7.", "AC = 3(7) + 4 = 25."], answer: "Each diagonal is 25" },
      { q: "Find the interior angle sum of a hexagon and each angle if it is regular.", steps: ["n = 6. Sum = (6 − 2) · 180 = 720°.", "Regular: 720 ÷ 6 = 120° each."], answer: "720° total; 120° each" }
    ],
    mistakes: [
      ["Uses a rectangle or rhombus property for a general parallelogram.", "Ask: “Which shape is it exactly?” Only rectangles have equal diagonals; only rhombi have perpendicular diagonals."],
      ["Sets consecutive angles of a parallelogram equal.", "Consecutive (next to each other) angles add to 180. Opposite angles are equal."],
      ["Uses n · 180 instead of (n − 2) · 180.", "Have them draw diagonals from one corner and count the triangles: always n − 2."],
      ["Thinks a square is not a rectangle.", "A rectangle just needs four right angles. A square has those, so it is a special rectangle."],
      ["Forgets the diagonals of a parallelogram bisect each other, not necessarily equal.", "Bisect means each diagonal is cut in half. The two halves of ONE diagonal are equal."]
    ],
    ask: ["What kind of quadrilateral is this? How do you know?", "What properties does this shape have?", "Are these two angles opposite or next to each other?", "Which property connects the two expressions you were given?", "How many triangles can you split this polygon into?"],
    check: [
      { q: "What is the interior angle sum of an octagon?", a: "1080°, because (8 − 2) · 180 = 1080." },
      { q: "Each interior angle of a regular pentagon?", a: "108°, because 540 ÷ 5 = 108." },
      { q: "One angle of a parallelogram is 65°. Find the other three.", a: "115°, 65°, 115° (opposite angles equal, consecutive angles add to 180)." },
      { q: "A regular polygon has exterior angles of 30°. How many sides?", a: "12, because 360 ÷ 30 = 12." }
    ],
    visual: svg(560, 190, `${P("200,10 360,10 360,40 200,40", { c: BLUE })}${T(280, 30, "Parallelogram", { b: 1, fs: 12 })}
      ${L(250, 40, 130, 75)}${L(310, 40, 430, 75)}${P("60,75 200,75 200,105 60,105", { c: ORANGE })}${T(130, 95, "Rectangle", { b: 1, fs: 12 })}${P("360,75 500,75 500,105 360,105", { c: PINK })}${T(430, 95, "Rhombus", { b: 1, fs: 12 })}
      ${L(130, 105, 260, 140)}${L(430, 105, 300, 140)}${P("210,140 350,140 350,170 210,170", { c: GREEN })}${T(280, 160, "Square", { b: 1, fs: 12 })}
      ${T(130, 122, "4 right angles, equal diagonals", { fs: 10 })}${T(430, 122, "4 equal sides, ⊥ diagonals", { fs: 10 })}${T(280, 185, "is BOTH a rectangle and a rhombus", { fs: 10 })}`, "Quadrilateral family tree: parallelogram at top; rectangle (four right angles, equal diagonals) and rhombus (four equal sides, perpendicular diagonals) below; square at the bottom, which is both a rectangle and a rhombus."),
    tips: "A properties chart (shape names across the top, properties down the side, with checkmarks) is one of the most useful study tools for this unit. Many teachers provide one."
  });

  /* ---------------- UNIT 10 ---------------- */
  U.push({ id: "g-10", course: "Geometry", unit: 10, title: "Circles",
    standards: "G.C.1, G.C.2, G.C.3, G.C.5, G.GPE.1",
    bigIdea: "Circle problems use a few connected ideas: arcs are measured in degrees like angles, an inscribed angle is half its arc, a tangent line meets the radius at a right angle, and arc length or sector area is just a fraction (degrees out of 360) of the whole circle.",
    vocab: [
      ["radius / diameter", "Radius: center to the edge. Diameter: all the way across through the center (2 × radius)."],
      ["chord", "A segment with both endpoints on the circle. The diameter is the longest chord."],
      ["tangent", "A line that touches the circle at exactly one point. It is perpendicular (90°) to the radius at that point."],
      ["central angle", "An angle with its vertex at the center. It equals its arc."],
      ["inscribed angle", "An angle with its vertex ON the circle. It equals HALF its intercepted arc."],
      ["arc length / sector area", "Arc length = (θ/360) · 2πr. Sector area = (θ/360) · πr². (θ = the central angle.)"],
      ["equation of a circle", "(x − h)² + (y − k)² = r², where (h, k) is the center and r is the radius. Watch the signs!"]
    ],
    steps: [
      { name: "Arc length and sector area", list: ["Find the fraction of the circle: θ ÷ 360.", "Arc length: fraction × circumference (2πr).", "Sector area: fraction × area (πr²).", "Leave in terms of π if asked, or multiply by 3.14… for a decimal."] },
      { name: "Equation of a circle", list: ["Write (x − h)² + (y − k)² = r².", "Center (−2, 5): x − (−2) = x + 2 and y − 5. So (x + 2)² + (y − 5)².", "Radius 4: r² = 16.", "Reading an equation: the center coordinates have the OPPOSITE signs of what you see in the parentheses."] }
    ],
    examples: [
      { q: "A circle has radius 6. Find the length of a 60° arc and the area of a 60° sector.", steps: ["Fraction: 60/360 = 1/6.", "Circumference = 2π(6) = 12π. Arc length = 12π ÷ 6 = 2π ≈ 6.28.", "Area = π(6²) = 36π. Sector area = 36π ÷ 6 = 6π ≈ 18.85."], answer: "Arc 2π ≈ 6.28; sector 6π ≈ 18.85" },
      { q: "An inscribed angle intercepts an arc of 110°. Find the inscribed angle.", steps: ["Inscribed angle = half the arc.", "110 ÷ 2 = 55°."], answer: "55°" },
      { q: "Write the equation of a circle with center (−2, 5) and radius 4.", steps: ["(x − (−2))² + (y − 5)² = 4².", "(x + 2)² + (y − 5)² = 16."], answer: "(x + 2)² + (y − 5)² = 16" },
      { q: "A tangent from point P touches a circle with radius 5 at point T. The distance from P to the center is 13. Find PT.", steps: ["The tangent is perpendicular to the radius, so there is a right triangle with hypotenuse 13 (center to P) and leg 5 (radius).", "PT = √(13² − 5²) = √(169 − 25) = √144 = 12."], answer: "PT = 12" }
    ],
    mistakes: [
      ["Sets the inscribed angle equal to the arc instead of half.", "Vertex at the CENTER = equal to the arc. Vertex ON the circle = half the arc."],
      ["Uses diameter instead of radius in the area formula.", "Circle area uses r. If they’re given a diameter, divide by 2 first."],
      ["Gets the center signs wrong in the circle equation.", "(x − 3) means center x = 3; (x + 3) means x = −3. Have them write x − (−3) to see it."],
      ["Forgets to square the radius (writes r instead of r² on the right side).", "Ask: (x − h)² + (y − k)² = what? The right side is radius SQUARED."],
      ["Forgets the right angle where a tangent meets a radius.", "Draw the radius to the point of tangency and mark the 90° angle. It almost always makes a Pythagorean problem."]
    ],
    ask: ["Where is the vertex of this angle: at the center or on the circle?", "What fraction of the whole circle is this arc?", "Do you have the radius or the diameter?", "Where is the right angle in this tangent problem?", "What is the center of this circle? Why is the sign switched?"],
    check: [
      { q: "Find the circumference of a circle with radius 10.", a: "20π ≈ 62.83, because C = 2πr." },
      { q: "An inscribed angle measures 40°. What is its intercepted arc?", a: "80° (the arc is twice the inscribed angle)." },
      { q: "Find the center and radius of (x + 4)² + y² = 9.", a: "Center (−4, 0), radius 3." },
      { q: "Find the area of a 90° sector of a circle with radius 4.", a: "4π ≈ 12.57, because (90/360) · π(16) = 4π." }
    ],
    visual: svg(560, 220, `<circle cx="140" cy="110" r="90" fill="none" stroke="currentColor" stroke-width="2.5"/>${D(140, 110)}${L(140, 110, 230, 110, { c: BLUE, w: 2.5 })}${T(185, 104, "radius", { fs: 11 })}${L(76, 46, 204, 174, { c: ORANGE })}${T(98, 85, "diameter", { fs: 11 })}${L(230, 20, 230, 200, { c: PINK, w: 2.5 })}${T(236, 40, "tangent ⊥ radius", { fs: 11, a: "start" })}<path d="M220 110 V100 H230" fill="none" stroke="currentColor"/>
      <circle cx="430" cy="110" r="90" fill="none" stroke="currentColor" stroke-width="2.5"/>${D(430, 110)}${L(430, 110, 500, 53, { c: BLUE })}${L(430, 110, 500, 167, { c: BLUE })}${L(345, 140, 500, 53, { c: GREEN })}${L(345, 140, 500, 167, { c: GREEN })}${D(345, 140, GREEN)}${T(455, 115, "central", { fs: 11, a: "start" })}${T(360, 160, "inscribed = ½ arc", { fs: 11, a: "start" })}${T(430, 214, "central angle = arc; inscribed angle = half the arc", { fs: 11 })}`, "Left circle shows a radius, a diameter, and a tangent line perpendicular to the radius. Right circle shows a central angle with vertex at the center and an inscribed angle with vertex on the circle intercepting the same arc; the inscribed angle is half the arc."),
    tips: "Ask students to keep answers “in terms of π” (like 6π) unless the problem asks for a decimal. It avoids rounding errors and is what most teachers expect."
  });

  /* ---------------- UNIT 11 ---------------- */
  U.push({ id: "g-11", course: "Geometry", unit: 11, title: "Area, Surface Area & Volume",
    standards: "G.GMD.1, G.GMD.3, G.GMD.4, G.MG.1, G.MG.2",
    bigIdea: "Area measures the flat space inside a shape (square units). Surface area is the total area of all the outside faces of a solid. Volume measures how much space a solid fills (cubic units). Pointed solids (pyramids, cones) hold exactly 1/3 of the matching prism or cylinder.",
    vocab: [
      ["area formulas", "Rectangle: lw. Triangle: ½bh. Parallelogram: bh. Trapezoid: ½(b₁ + b₂)h. Circle: πr²."],
      ["height (h)", "Always measured at a right angle (straight up) to the base, not along a slanted side."],
      ["B (base area)", "The area of the base shape of a solid. For a cylinder, B = πr²."],
      ["volume formulas", "Prism or cylinder: V = Bh. Pyramid or cone: V = ⅓Bh. Sphere: V = (4/3)πr³."],
      ["surface area", "Add the areas of all faces. Rectangular prism: 2(lw + lh + wh). Cylinder: 2πr² + 2πrh. Sphere: 4πr²."],
      ["Cavalieri’s Principle", "Two solids with the same height and the same cross-section area at every level have the same volume, even if one is slanted."],
      ["units", "Length: cm. Area: cm² (square units). Volume: cm³ (cubic units)."]
    ],
    steps: [
      { name: "How to find a volume", list: ["Identify the solid: prism, cylinder, pyramid, cone, or sphere.", "Find B, the area of the base (use the right area formula).", "Multiply by the height. If it comes to a point (pyramid or cone), multiply by ⅓.", "Use cubic units in the answer."] },
      { name: "Scale factor effects", list: ["If every length is multiplied by k:", "Perimeter × k, surface area × k², volume × k³."] }
    ],
    examples: [
      { q: "Find the volume of a cylinder with radius 3 cm and height 10 cm, and of a cone with the same radius and height.", steps: ["Cylinder: V = πr²h = π(9)(10) = 90π ≈ 282.74 cm³.", "Cone: one-third of that: V = ⅓(90π) = 30π ≈ 94.25 cm³."], answer: "Cylinder 90π ≈ 282.74 cm³; cone 30π ≈ 94.25 cm³" },
      { q: "Find the surface area and volume of a box 4 cm × 5 cm × 6 cm.", steps: ["Surface area = 2(lw + lh + wh) = 2(20 + 24 + 30) = 2(74) = 148 cm².", "Volume = 4 × 5 × 6 = 120 cm³."], answer: "SA = 148 cm²; V = 120 cm³" },
      { q: "Find the volume of a sphere with radius 6.", steps: ["V = (4/3)πr³ = (4/3)π(216).", "(4/3)(216) = 288, so V = 288π ≈ 904.78."], answer: "288π ≈ 904.78 cubic units" },
      { q: "Find the area of a trapezoid with bases 8 and 12 and height 5.", steps: ["A = ½(b₁ + b₂)h = ½(8 + 12)(5).", "= ½(20)(5) = 50."], answer: "50 square units" }
    ],
    mistakes: [
      ["Uses the slanted side as the height.", "The height must make a right angle with the base. Look for the little square or a dashed line."],
      ["Forgets the ⅓ for pyramids and cones.", "Ask: “Does it come to a point?” If yes, it’s one-third of the prism or cylinder."],
      ["Uses diameter instead of radius.", "Circle the radius on the diagram. If you’re given a diameter, divide by 2 first."],
      ["Writes area in cubic units or volume in square units.", "Area = flat = squared. Volume = filling = cubed."],
      ["Thinks doubling the sides doubles the volume.", "Volume scales by k³: doubling sides makes the volume 2³ = 8 times bigger."]
    ],
    ask: ["Is the question asking for area, surface area, or volume?", "What shape is the base? What is its area?", "Does this solid come to a point?", "Is that measurement the radius or the diameter?", "What units should your answer have?"],
    check: [
      { q: "Area of a triangle with base 10 and height 7?", a: "35, because ½ · 10 · 7 = 35." },
      { q: "Volume of a square pyramid with base side 6 and height 9?", a: "108, because ⅓ · 36 · 9 = 108." },
      { q: "Surface area of a cube with side 3?", a: "54, because 6 faces × 9 = 54." },
      { q: "Volume of a cylinder with radius 2 and height 5?", a: "20π ≈ 62.83, because π · 4 · 5 = 20π." }
    ],
    visual: svg(560, 190, `<ellipse cx="90" cy="40" rx="50" ry="14" fill="none" stroke="${BLUE}" stroke-width="2"/>${L(40, 40, 40, 150, { c: BLUE })}${L(140, 40, 140, 150, { c: BLUE })}<path d="M40 150 A50 14 0 0 0 140 150" fill="none" stroke="${BLUE}" stroke-width="2"/>${L(90, 40, 140, 40, { c: PINK })}${T(115, 34, "r", { b: 1 })}${L(155, 40, 155, 150, { d: 1 })}${T(165, 100, "h", { b: 1, a: "start" })}${T(90, 180, "cylinder: V = πr²h", { fs: 12 })}
      <ellipse cx="300" cy="150" rx="50" ry="14" fill="none" stroke="${ORANGE}" stroke-width="2"/>${L(250, 150, 300, 40, { c: ORANGE })}${L(350, 150, 300, 40, { c: ORANGE })}${L(300, 40, 300, 150, { d: 1 })}${T(308, 100, "h", { b: 1, a: "start" })}${T(300, 180, "cone: V = ⅓πr²h", { fs: 12 })}
      <circle cx="470" cy="95" r="55" fill="none" stroke="${GREEN}" stroke-width="2"/><ellipse cx="470" cy="95" rx="55" ry="14" fill="none" stroke="${GREEN}" stroke-dasharray="4 3"/>${L(470, 95, 525, 95, { c: PINK })}${T(497, 89, "r", { b: 1 })}${T(470, 180, "sphere: V = (4/3)πr³", { fs: 12 })}`, "A cylinder with radius r and height h, volume pi r squared h; a cone with the same base and height, volume one third pi r squared h; and a sphere with radius r, volume four thirds pi r cubed."),
    tips: "Most students get these right if they first write the formula, then substitute. Encourage “formula → plug in → calculate” on separate lines."
  });

  /* ---------------- UNIT 12 ---------------- */
  U.push({ id: "g-12", course: "Geometry", unit: 12, title: "Probability",
    standards: "S.CP.1, S.CP.2, S.CP.3, S.CP.4, S.CP.6, S.CP.7, S.CP.9",
    bigIdea: "Probability measures how likely something is, from 0 (impossible) to 1 (certain). Basic probability is favorable outcomes ÷ total outcomes. Two-way tables, tree diagrams, and the AND/OR rules help with more complex situations.",
    vocab: [
      ["sample space", "The list of all possible outcomes. Two coin flips: HH, HT, TH, TT."],
      ["probability", "P(event) = number of favorable outcomes ÷ total number of outcomes. Between 0 and 1."],
      ["complement", "Everything that is NOT the event. P(not A) = 1 − P(A)."],
      ["independent events", "One doesn’t affect the other (like two coin flips). P(A and B) = P(A) · P(B)."],
      ["OR rule", "P(A or B) = P(A) + P(B) − P(A and B). Subtract the overlap so it isn’t counted twice."],
      ["conditional probability", "P(A | B) means “the probability of A, given that B already happened.” It equals P(A and B) ÷ P(B). In a table, use only the B row or column."],
      ["permutation / combination", "Permutation: order matters (1st, 2nd, 3rd place): nPr. Combination: order doesn’t matter (choosing a committee): nCr."]
    ],
    steps: [
      { name: "Two-way tables and conditional probability", list: ["Read the “given” part. That row or column is your new total.", "Find the cell where both things happen.", "Divide that cell by the given total.", "“Of the 9th graders, what fraction play a sport?” means given 9th grade."] },
      { name: "Permutations vs. combinations", list: ["Ask: does order matter? (President/VP: yes. Choose 3 friends: no.)", "Permutation: multiply down: 8 runners for 1st, 2nd, 3rd = 8 × 7 × 6.", "Combination: do the permutation, then divide by the number of ways to arrange the chosen items (3! = 6 for 3 items)."] }
    ],
    examples: [
      { q: "You flip two coins. What is the probability of getting at least one head?", steps: ["Sample space: HH, HT, TH, TT (4 outcomes).", "At least one head: HH, HT, TH = 3.", "P = 3/4. (Or: 1 − P(no heads) = 1 − 1/4.)"], answer: "3/4 = 0.75" },
      { q: "A survey of 100 students: 9th grade: 30 play a sport, 20 don’t. 10th grade: 25 play, 25 don’t. Find P(plays a sport | 9th grade) and P(9th grade | plays a sport).", steps: ["Given 9th grade: total 9th graders = 30 + 20 = 50. Of those, 30 play. P = 30/50 = 0.6.", "Given plays a sport: total players = 30 + 25 = 55. Of those, 30 are 9th graders. P = 30/55 ≈ 0.545.", "Notice the two answers are different: the “given” changes the total."], answer: "0.6 and about 0.545" },
      { q: "From a standard 52-card deck, find P(heart or face card).", steps: ["Hearts: 13. Face cards (J, Q, K): 12. Both (J, Q, K of hearts): 3.", "P = 13/52 + 12/52 − 3/52 = 22/52 = 11/26 ≈ 0.423."], answer: "11/26 ≈ 0.423" },
      { q: "8 runners race. How many ways can 1st, 2nd, and 3rd place be awarded? How many ways can a coach pick 3 of the 8 for a relay (order doesn’t matter)?", steps: ["Order matters for places: 8 × 7 × 6 = 336.", "For the relay, order doesn’t matter: 336 ÷ (3 × 2 × 1) = 336 ÷ 6 = 56."], answer: "336 permutations; 56 combinations" }
    ],
    mistakes: [
      ["Uses the grand total instead of the “given” row or column for conditional probability.", "Ask: “Who are we talking about? Only the 9th graders?” Then cover the rest of the table."],
      ["Adds P(A) + P(B) for “or” without subtracting the overlap.", "Ask: “Did you count any outcomes twice?” The king of hearts is both a heart and a face card."],
      ["Multiplies probabilities for events that are not independent.", "Check whether the first event changes the second (like drawing without putting the card back)."],
      ["Uses a permutation when order doesn’t matter.", "Ask: “Is picking Ana then Ben different from Ben then Ana?” If not, it’s a combination."],
      ["Gives a probability bigger than 1.", "Probability can never be more than 1 (100%). Something went wrong; recheck the total."]
    ],
    ask: ["What are all the possible outcomes?", "What is the total you’re dividing by? Why?", "What does “given” tell you to focus on?", "Does the first event change the second one?", "Does order matter here?", "Is your answer between 0 and 1?"],
    check: [
      { q: "You roll one die. What is P(not rolling a 5)?", a: "5/6, because 1 − 1/6 = 5/6." },
      { q: "A bag has 3 red and 2 blue marbles. You draw one, put it back, and draw again. P(red both times)?", a: "9/25, because (3/5)(3/5) = 9/25." },
      { q: "How many ways can you choose 2 students from 5 (order doesn’t matter)?", a: "10, because (5 × 4) ÷ 2 = 10." },
      { q: "How many ways can 5 students fill President and Vice President?", a: "20, because order matters: 5 × 4 = 20." }
    ],
    visual: svg(560, 200, `${T(40, 105, "Start", { b: 1 })}${L(65, 100, 170, 50)}${L(65, 100, 170, 150)}${T(185, 55, "H", { b: 1 })}${T(185, 155, "T", { b: 1 })}${T(115, 65, "½", { fs: 12 })}${T(115, 140, "½", { fs: 12 })}
      ${L(200, 50, 300, 25)}${L(200, 50, 300, 75)}${L(200, 150, 300, 125)}${L(200, 150, 300, 175)}${T(315, 30, "H → HH", { a: "start" })}${T(315, 80, "T → HT", { a: "start" })}${T(315, 130, "H → TH", { a: "start" })}${T(315, 180, "T → TT", { a: "start" })}
      ${T(480, 80, "4 equally likely", { fs: 12 })}${T(480, 98, "outcomes", { fs: 12 })}${T(480, 125, "P(at least one H)", { fs: 12 })}${T(480, 143, "= 3/4", { fs: 14, b: 1 })}`, "A tree diagram for flipping two coins. The first flip branches to heads or tails, each with probability one half, and each of those branches again, giving four outcomes: HH, HT, TH, TT. The probability of at least one head is 3 out of 4."),
    tips: "For any two-way table question, have the student <b>highlight the “given” row or column first</b>. That one habit fixes most conditional probability mistakes."
  });

  (window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(...U);
})();
