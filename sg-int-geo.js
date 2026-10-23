/* =====================================================================
   ✏️ UNIT STUDY GUIDES: GEOMETRY · INTEGER PRACTICE WITH VARIABLES
   About 25 minutes each. Key Ideas, practice notes, a Visual tab, and a
   🔬 Simulation tab on the left; 12 graded questions on the right.
   Simulations used here live in rc-sims-int.js.
   ===================================================================== */

/* angle-number diagram shared by the angle guide (matches the simulation’s numbering) */
const SGI_ANGLES = (function () {
  const th = 60 * Math.PI / 180, cx = 300, y1 = 70, y2 = 170, cy = 120;
  const ix = y => cx + (cy - y) / Math.tan(th);
  const P = [[ix(y1), y1], [ix(y2), y2]], ux = Math.cos(th), uy = -Math.sin(th);
  const rays = { R: [1, 0], L: [-1, 0], U: [ux, uy], D: [-ux, -uy] }, B = { TL: ["U", "L"], TR: ["R", "U"], BL: ["L", "D"], BR: ["D", "R"] }, POS = ["TL", "TR", "BL", "BR"];
  let s = `<line x1="40" y1="${y1}" x2="560" y2="${y1}" class="ink" stroke-width="2.5"/><line x1="40" y1="${y2}" x2="560" y2="${y2}" class="ink" stroke-width="2.5"/>
    <line x1="${cx - ux * 170}" y1="${cy - uy * 170}" x2="${cx + ux * 170}" y2="${cy + uy * 170}" stroke="#2b7de9" stroke-width="3"/>
    <text x="555" y="${y1 - 8}" text-anchor="end" class="tm">line m</text><text x="555" y="${y2 - 8}" text-anchor="end" class="tm">line n (m ∥ n)</text><text x="${cx + ux * 160 + 6}" y="${cy + uy * 160}" class="tm">transversal t</text>`;
  for (let k = 0; k < 8; k++) { const C = P[k < 4 ? 0 : 1], [a, b] = B[POS[k % 4]].map(r => rays[r]), bx = a[0] + b[0], by = a[1] + b[1], L = Math.hypot(bx, by);
    s += `<text x="${(C[0] + bx / L * 26).toFixed(1)}" y="${(C[1] + by / L * 26 + 5).toFixed(1)}" text-anchor="middle" class="t">${k + 1}</text>`; }
  return `<svg class="dg" viewBox="0 0 600 230" role="img" aria-label="Two horizontal parallel lines m and n cut by a slanted transversal t. At the top intersection the angles are numbered 1 top-left, 2 top-right, 3 bottom-left, 4 bottom-right. At the bottom intersection they are numbered 5 top-left, 6 top-right, 7 bottom-left, 8 bottom-right.">${s}</svg>`;
})();

/* =====================================================================
   C1. GEOMETRY: COORDINATE GEOMETRY WITH INTEGERS
   ===================================================================== */
RC["sg-geo-coord"] = {
  subject: "Geometry", mins: 25,
  title: "Coordinate Geometry: Distance, Midpoint & Slope",
  blurb: "Use integer coordinates in all four quadrants to find distance, midpoint, and slope, identify parallel and perpendicular lines, and classify shapes.",
  eq: "How can we use integer coordinates and careful subtraction to prove facts about segments, lines, and shapes on the coordinate plane?",
  target: "I can find the distance, midpoint, and slope between two points with negative coordinates, write equations of parallel and perpendicular lines, and use these tools to classify triangles and quadrilaterals.",
  sources: [
    { tab: "Key Ideas", title: "The Three Formulas", numbered: true, blocks: [
      { vocab: [
        ["Δx and Δy", "The change in x (x₂ − x₁) and the change in y (y₂ − y₁). Always subtract in the same order."],
        ["distance formula", "d = √((x₂ − x₁)² + (y₂ − y₁)²). It is the Pythagorean theorem on the coordinate plane."],
        ["midpoint formula", "M = ((x₁ + x₂)/2, (y₁ + y₂)/2): the average of the x’s and the average of the y’s."],
        ["slope", "m = (y₂ − y₁) ÷ (x₂ − x₁). Parallel lines have equal slopes. Perpendicular slopes are negative reciprocals (their product is −1)."],
        ["partition", "To find a point a fraction k of the way from A to B: A + k · (Δx, Δy)."]
      ] },
      { p: "Most mistakes in coordinate geometry are <b>integer mistakes</b>. When a coordinate is negative, put it in parentheses: 5 − (−3) = 5 + 3 = 8. Squaring removes the sign, so (−8)² = 64, but you must subtract correctly first." },
      { box: "<b>Worked example 1.</b> A(−3, −2) and B(5, 4).<br>Δx = 5 − (−3) = 8 and Δy = 4 − (−2) = 6.<br>Distance: √(8² + 6²) = √(64 + 36) = √100 = <b>10</b>.<br>Midpoint: ((−3 + 5)/2, (−2 + 4)/2) = <b>(1, 1)</b>.<br>Slope: 6 ÷ 8 = <b>3/4</b>." },
      { box: "<b>Worked example 2: missing endpoint.</b> M(2, −1) is the midpoint of AB and A(−4, 3). Find B.<br>Use “double the midpoint, subtract the known endpoint”: x = 2(2) − (−4) = 4 + 4 = 8 and y = 2(−1) − 3 = −2 − 3 = −5. So <b>B(8, −5)</b>.<br>Check: ((−4 + 8)/2, (3 + (−5))/2) = (2, −1) ✓" }
    ] },
    { tab: "Lines & Shapes", title: "Parallel, Perpendicular, and Classifying Shapes", numbered: true, blocks: [
      { p: "To write a line parallel or perpendicular to a given line, find the new slope, then use point-slope form: y − y₁ = m(x − x₁). With negative coordinates, the signs flip: through (−2, 5) you write y − 5 = m(x + 2)." },
      { box: "<b>Worked example 3.</b> Line through (−2, 5) perpendicular to y = (2/3)x − 1.<br>Perpendicular slope: the negative reciprocal of 2/3 is <b>−3/2</b>.<br>y − 5 = −3/2 (x − (−2)) → y − 5 = −3/2 x − 3 → <b>y = −3/2 x + 2</b>." },
      { box: "<b>Worked example 4: partitioning.</b> Find the point 1/4 of the way from A(−6, 2) to B(10, −6).<br>Δx = 16 and Δy = −8. One fourth: (4, −2). Add to A: (−6 + 4, 2 + (−2)) = <b>(−2, 0)</b>." },
      { table: { cap: "Using the formulas to classify shapes", head: ["To show…", "Use", "What to look for"], rows: [
        ["sides are congruent", "distance", "equal lengths"],
        ["sides are parallel", "slope", "equal slopes"],
        ["a right angle", "slope", "slopes multiply to −1"],
        ["diagonals bisect each other", "midpoint", "both diagonals have the same midpoint"]
      ], rowHead: true } }
    ] },
    { tab: "Visual", title: "Distance Is the Pythagorean Theorem", blocks: [
      { fig: RCG.line({ title: "A(−3, −2) to B(5, 4)", x: { min: -5, max: 7, step: 1, label: "x" }, y: { min: -4, max: 6, step: 1, label: "y" },
          series: [{ pts: [[-3, -2], [5, 4]], cls: "s1", dots: true }, { pts: [[-3, -2], [5, -2], [5, 4]], cls: "s3", dash: true }],
          marks: [{ x: -3, y: -2, text: "A(−3, −2)", dy: 16, cls: "s1" }, { x: 5, y: 4, text: "B(5, 4)", dx: -10, anchor: "end", cls: "s1" }, { x: 1, y: 1, text: "M(1, 1)", cls: "s2" }],
          notes: [{ x: 1, y: -2.7, text: "Δx = 5 − (−3) = 8", anchor: "middle" }, { x: 5.2, y: 1, text: "Δy = 6" }],
          alt: "Segment from A at negative 3, negative 2 to B at 5, 4 with a dashed right triangle. The horizontal leg is 8, the vertical leg is 6, and the midpoint M is at 1, 1." }),
        cap: "Figure 1. The legs are Δx = 8 and Δy = 6, so the distance is √(8² + 6²) = 10. The midpoint M(1, 1) is halfway along the segment." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Coordinate Lab", blocks: [
      { box: "<b>Try this:</b> 1) Drag A to (−3, −2) and B to (5, 4) to match Figure 1. 2) Drag B straight up or down until the slope is 0. 3) Drag the points so the slope is undefined. 4) Drag A to (−4, 3) and B to (2, −5) and record the distance, slope, and midpoint for question 10." },
      { sim: "coord", title: "Coordinate Lab", tip: "Watch the signed subtraction: x₂ − x₁ with a negative x₁ becomes addition.", A: [-3, -2], B: [5, 4] }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Find the distance between (−2, 7) and (4, −1).", a: 10, tol: 0.01, pre: "d =",
      why: "Δx = 4 − (−2) = 6 and Δy = −1 − 7 = −8. d = √(36 + 64) = √100 = 10." },
    { t: "mc", ref: 1, q: "What is the midpoint of (−7, 4) and (3, −10)?", opts: ["(−2, −3)", "(−5, 7)", "(−4, −6)", "(5, −7)"], a: 0,
      why: "x: (−7 + 3) ÷ 2 = −4 ÷ 2 = −2. y: (4 + (−10)) ÷ 2 = −6 ÷ 2 = −3." },
    { t: "mc", ref: 1, q: "What is the slope of the line through (−3, 5) and (1, −7)?", opts: ["−3", "3", "−1/3", "1/3"], a: 0,
      why: "(−7 − 5) ÷ (1 − (−3)) = −12 ÷ 4 = −3." },
    { t: "hot", ref: 1, q: "A student found the distance between P(−1, −4) and Q(5, 4). Click the <b>one</b> step with the mistake.",
      text: ["Step 1: Δx = 5 − (−1) = 4", "Step 2: Δy = 4 − (−4) = 8", "Step 3: d = √(4² + 8²) = √80", "Step 4: d = 4√5"], a: [0],
      why: "5 − (−1) = 5 + 1 = 6, not 4. The correct distance is √(6² + 8²) = √100 = 10." },
    { t: "inline", ref: 1, q: "M(−1, 3) is the midpoint of AB, and A is at (4, −2). Find B.", text: "B = ([[]], [[]])",
      blanks: [{ opts: ["−6", "−5", "3", "1.5"], a: 0 }, { opts: ["8", "1", "−7", "0.5"], a: 0 }],
      why: "x = 2(−1) − 4 = −6. y = 2(3) − (−2) = 6 + 2 = 8. Check: ((4 + (−6))/2, (−2 + 8)/2) = (−1, 3) ✓" },
    { t: "grid", ref: 2, q: "Are the lines in each pair parallel, perpendicular, or neither?", cols: ["Parallel", "Perpendicular", "Neither"],
      rows: [["y = 3x − 2 and y = 3x + 5", 0], ["y = −2x + 1 and y = ½x − 4", 1], ["y = 4x and y = −4x", 2], ["2x + 3y = 6 and 3x − 2y = 4", 1]],
      why: "Equal slopes (3 and 3) → parallel. −2 · ½ = −1 → perpendicular. 4 and −4 multiply to −16 → neither. 2x + 3y = 6 has slope −2/3 and 3x − 2y = 4 has slope 3/2; (−2/3)(3/2) = −1 → perpendicular." },
    { t: "mc", ref: 2, q: "Which line passes through (4, −1) and is perpendicular to y = −2x + 3?", opts: ["y = ½x − 3", "y = −2x + 7", "y = ½x + 1", "y = 2x − 9"], a: 0,
      why: "The negative reciprocal of −2 is ½. y − (−1) = ½(x − 4) → y + 1 = ½x − 2 → y = ½x − 3." },
    { t: "mc", ref: 2, q: "Classify triangle ABC with A(−2, −1), B(2, 2), and C(5, −2).", opts: ["Isosceles right triangle", "Equilateral triangle", "Scalene acute triangle", "Isosceles obtuse triangle"], a: 0,
      why: "AB = √(16 + 9) = 5 and BC = √(9 + 16) = 5, so it is isosceles. Slope AB = 3/4 and slope BC = −4/3; their product is −1, so angle B is a right angle." },
    { t: "num", ref: 2, q: "Find the point that is 3/4 of the way from A(−6, 2) to B(10, −6). What is its <b>y</b>-coordinate?", a: -4, tol: 0.01, pre: "y =",
      why: "Δy = −6 − 2 = −8. Three fourths of −8 is −6. y = 2 + (−6) = −4. (The x-coordinate is −6 + 12 = 6, so the point is (6, −4).)" },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Drag A to (−4, 3) and B to (2, −5). What does the Coordinate Lab show?", opts: ["Distance 10, slope −4/3, midpoint (−1, −1)", "Distance 10, slope −3/4, midpoint (−1, −1)", "Distance 14, slope −4/3, midpoint (−3, 4)", "Distance √28, slope 4/3, midpoint (1, 1)"], a: 0,
      why: "Δx = 2 − (−4) = 6 and Δy = −5 − 3 = −8. d = √(36 + 64) = 10. Slope = −8/6 = −4/3. Midpoint = (−2/2, −2/2) = (−1, −1)." },
    { t: "multi", need: 2, ref: 2, q: "A quadrilateral has vertices (−3, 0), (0, 4), (4, 1), and (1, −3), in that order. Which <b>two</b> statements are true?", opts: ["All four sides have length 5.", "Consecutive sides are perpendicular.", "It is a rectangle but not a rhombus.", "Its diagonals have different lengths.", "It is a trapezoid with only one pair of parallel sides."], a: [0, 1],
      why: "The sides have changes (3, 4), (4, −3), (−3, −4), (−4, 3): each length is √(9 + 16) = 5. Slopes 4/3 and −3/4 multiply to −1, so consecutive sides are perpendicular. Four equal sides and right angles make it a square, so its diagonals are equal." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain how the distance formula comes from the Pythagorean theorem. Use the points (−1, 2) and (5, −6) and show how you handle the negative coordinates.", min: 35,
      checks: [
        { label: "Finds Δx = 6 and Δy = −8 (or 8)", re: /\b6\b[\s\S]*(−|-)?\s?8|(−|-)?\s?8[\s\S]*\b6\b/ },
        { label: "Gets the distance 10", re: /\b10\b/ },
        { label: "Connects to the legs / right triangle / a² + b² = c²", re: /leg|right triangle|pythag|a²|a\^2|hypotenuse/i }
      ],
      rubric: "2 points: shows Δx = 5 − (−1) = 6 and Δy = −6 − 2 = −8, explains these are the legs of a right triangle, and finds d = 10. 1 point: correct distance with a partial explanation. 0 points: no reasoning.",
      model: "The two points are the ends of the hypotenuse of a right triangle. The horizontal leg is Δx = 5 − (−1) = 5 + 1 = 6, and the vertical leg is Δy = −6 − 2 = −8, which has length 8. By the Pythagorean theorem, d² = 6² + 8² = 36 + 64 = 100, so d = 10. Squaring makes the negative change positive, but you still have to subtract the negative coordinates correctly first.",
      why: "The distance formula is a² + b² = c², where the legs are the horizontal and vertical changes between the points." }
  ]
};

/* =====================================================================
   C2. GEOMETRY: ANGLE RELATIONSHIPS & SOLVING FOR X
   ===================================================================== */
RC["sg-geo-angles"] = {
  subject: "Geometry", mins: 25,
  title: "Angle Relationships & Solving for x",
  blurb: "Identify vertical, linear-pair, and parallel-line angle pairs, decide whether to set expressions equal or add them to 180°, and solve for x with integer coefficients.",
  eq: "How do angle relationships tell us which equation to write, and how do we solve it accurately?",
  target: "I can identify angle pairs formed by parallel lines and a transversal, write an equation (equal or supplementary) for any angle pair, and solve for x and the angle measures.",
  sources: [
    { tab: "Key Ideas", title: "Angle Pairs: Equal or Supplementary?", numbered: true, blocks: [
      { vocab: [
        ["complementary angles", "Two angles that add to 90°."],
        ["supplementary angles", "Two angles that add to 180°. A linear pair (two angles that form a straight line) is always supplementary."],
        ["vertical angles", "Opposite angles formed by two intersecting lines. They are always equal (congruent)."],
        ["transversal", "A line that crosses two or more other lines."],
        ["triangle sum / exterior angle", "The angles of a triangle add to 180°. An exterior angle equals the sum of the two remote (non-adjacent) interior angles."]
      ] },
      { p: "Every angle problem comes down to one decision: <b>are the angles equal, or do they add up to a total</b> (90°, 180°, or 360°)? Once you know that, you write one equation and solve it with integer operations." },
      { box: "<b>Worked example 1: vertical angles.</b> (3x + 10)° and (5x − 30)° are vertical, so they are equal.<br>3x + 10 = 5x − 30 → 10 + 30 = 5x − 3x → 40 = 2x → <b>x = 20</b>. Each angle = 3(20) + 10 = <b>70°</b>." },
      { box: "<b>Worked example 2: linear pair.</b> (2x − 15)° and (x + 30)° form a linear pair, so they add to 180°.<br>3x + 15 = 180 → 3x = 165 → <b>x = 55</b>. The angles are 95° and 85°. Check: 95 + 85 = 180 ✓" },
      { box: "<b>Worked example 3: triangle sum.</b> A triangle has angles x°, (2x − 12)°, and (3x + 6)°.<br>x + 2x − 12 + 3x + 6 = 180 → 6x − 6 = 180 → 6x = 186 → <b>x = 31</b>. The angles are 31°, 50°, and 99°." }
    ] },
    { tab: "Parallel Lines", title: "Parallel Lines Cut by a Transversal", numbered: true, blocks: [
      { fig: SGI_ANGLES, cap: "Figure 1. The numbering used in this guide and the simulation. Angles 1–4 are at line m; angles 5–8 are at line n." },
      { p: "When a transversal crosses two <b>parallel</b> lines, it makes only two different angle measures. In Figure 1, angles 2, 3, 6, and 7 are all equal, and angles 1, 4, 5, and 8 are all equal. Any angle from the first group plus any angle from the second group adds to 180°." },
      { table: { cap: "Angle pairs (parallel lines only)", head: ["Pair", "Example from Figure 1", "Relationship"], rows: [
        ["Corresponding", "∠2 and ∠6 (same position)", "equal"],
        ["Alternate interior", "∠3 and ∠6 (between the lines, opposite sides)", "equal"],
        ["Alternate exterior", "∠1 and ∠8 (outside the lines, opposite sides)", "equal"],
        ["Same-side interior", "∠3 and ∠5 (between the lines, same side)", "supplementary (180°)"],
        ["Vertical", "∠1 and ∠4", "equal"],
        ["Linear pair", "∠1 and ∠2", "supplementary (180°)"]
      ], rowHead: true } },
      { box: "<b>Worked example 4: alternate interior angles.</b> ∠3 = (4x − 7)° and ∠6 = (2x + 25)°. They are equal: 4x − 7 = 2x + 25 → 2x = 32 → <b>x = 16</b>, so each is <b>57°</b>." }
    ] },
    { tab: "Visual", title: "Decision Chart", blocks: [
      { table: { cap: "Which equation do I write?", head: ["If the angles are…", "Write", "Example"], rows: [
        ["vertical, corresponding, alternate interior, or alternate exterior", "expression = expression", "5x − 30 = 3x + 10"],
        ["a linear pair or same-side interior", "expression + expression = 180", "(2x − 15) + (x + 30) = 180"],
        ["complementary", "expression + expression = 90", "(3x − 6) + (2x + 1) = 90"],
        ["the three angles of a triangle", "sum of all three = 180", "x + (2x − 12) + (3x + 6) = 180"],
        ["an exterior angle and its two remote interior angles", "exterior = interior + interior", "5x − 10 = (2x + 5) + (x + 25)"]
      ], rowHead: true } },
      { box: "<b>Always check:</b> after you find x, substitute it back. Every angle measure must be <b>positive</b>, and your equal angles should really be equal (or your pair should really add to 180°)." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Angle Pair Explorer", blocks: [
      { box: "<b>Try this:</b> 1) Tap ∠3. Which angles turn blue (equal)? Which turn orange (supplementary)? 2) Slide θ to 90°. What happens to every angle? 3) Set θ = 65° and tap ∠5 for question 10. 4) Tap ∠2 and find the angle that makes an alternate exterior pair with it." },
      { sim: "angles", title: "Angle Pair Explorer", tip: "Only two angle measures appear: θ and 180° − θ.", t: 60, sel: 2 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Vertical angles measure (6x − 22)° and (4x + 8)°. Find x.", a: 15, tol: 0.01, pre: "x =",
      why: "Vertical angles are equal: 6x − 22 = 4x + 8 → 2x = 30 → x = 15. Each angle is 6(15) − 22 = 68°." },
    { t: "num", ref: 2, q: "Same-side interior angles measure (3x + 12)° and (5x − 8)°. Find x.", a: 22, tol: 0.01, pre: "x =",
      why: "Same-side interior angles are supplementary: (3x + 12) + (5x − 8) = 180 → 8x + 4 = 180 → 8x = 176 → x = 22. The angles are 78° and 102°." },
    { t: "grid", ref: 2, q: "Use Figure 1. Name each angle pair.", cols: ["Vertical", "Alternate interior", "Corresponding", "Same-side interior", "Alternate exterior"],
      rows: [["∠1 and ∠4", 0], ["∠3 and ∠6", 1], ["∠2 and ∠6", 2], ["∠3 and ∠5", 3], ["∠1 and ∠8", 4]],
      why: "∠1 and ∠4 are opposite at the same intersection (vertical). ∠3 and ∠6 are between the lines on opposite sides (alternate interior). ∠2 and ∠6 are in the same position (corresponding). ∠3 and ∠5 are between the lines on the same side (same-side interior). ∠1 and ∠8 are outside the lines on opposite sides (alternate exterior)." },
    { t: "mc", ref: 1, q: "A triangle has angles (x + 15)°, (2x − 5)°, and (3x − 10)°. What is the largest angle?", opts: ["80°", "30°", "55°", "90°"], a: 0,
      why: "6x + 0 = 180, so x = 30. The angles are 45°, 55°, and 80°. Check: 45 + 55 + 80 = 180 ✓" },
    { t: "hot", ref: 2, q: "Corresponding angles measure (7x − 18)° and (4x + 21)°. Click the <b>one</b> step with the mistake.",
      text: ["Step 1: 7x − 18 = 4x + 21", "Step 2: 3x − 18 = 21", "Step 3: 3x = 3", "Step 4: x = 1"], a: [2],
      why: "To undo −18, ADD 18 to both sides: 3x = 21 + 18 = 39. The student subtracted instead. So x = 13." },
    { t: "num", ref: 2, q: "Using the correct value of x from the last question, find the measure of each corresponding angle.", a: 73, tol: 0.01, pre: "", unit: "degrees",
      why: "x = 13, so 7(13) − 18 = 91 − 18 = 73°, and 4(13) + 21 = 52 + 21 = 73° ✓" },
    { t: "mc", ref: 3, q: "An exterior angle of a triangle measures (5x − 10)°. The two remote interior angles measure (2x + 5)° and (x + 25)°. Find x.", opts: ["x = 20", "x = 5", "x = 25", "x = 40"], a: 0,
      why: "Exterior angle = sum of remote interior angles: 5x − 10 = 3x + 30 → 2x = 40 → x = 20. The exterior angle is 90°." },
    { t: "mc", ref: 1, q: "Complementary angles measure (3x − 6)° and (2x + 1)°. Find x.", opts: ["19", "37", "17", "23"], a: 0,
      why: "(3x − 6) + (2x + 1) = 90 → 5x − 5 = 90 → 5x = 95 → x = 19. The angles are 51° and 39°." },
    { t: "inline", ref: 1, q: "The base angles of an isosceles triangle measure (4x − 9)° and (2x + 15)°.", text: "x = [[]], each base angle = [[]]°, vertex angle = [[]]°",
      blanks: [{ opts: ["12", "4", "9", "24"], a: 0 }, { opts: ["39", "51", "57", "24"], a: 0 }, { opts: ["102", "78", "141", "90"], a: 0 }],
      why: "Base angles are equal: 4x − 9 = 2x + 15 → 2x = 24 → x = 12. Each base angle is 39°. Vertex angle: 180 − 39 − 39 = 102°." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Set θ = 65° and tap ∠5. What is its measure?", opts: ["115°", "65°", "25°", "130°"], a: 0,
      why: "∠5 is in the top-left position, which is supplementary to θ: 180° − 65° = 115°. It is equal to ∠1, ∠4, and ∠8." },
    { t: "multi", need: 2, ref: 2, q: "In Figure 1, ∠2 = (3x + 4)° and ∠7 = (5x − 36)°. Which <b>two</b> statements are true?", opts: ["∠2 and ∠7 are alternate exterior angles.", "x = 20", "∠2 = 116°", "∠2 and ∠7 are supplementary.", "x = 16"], a: [0, 1],
      why: "∠2 (top-right at m) and ∠7 (bottom-left at n) are outside the lines on opposite sides: alternate exterior, so they are equal. 3x + 4 = 5x − 36 → 40 = 2x → x = 20, and each angle is 64°." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> Explain how you decide whether to set two angle expressions <b>equal</b> or <b>add them to 180°</b>. Give one example of each type of pair.", min: 30,
      checks: [
        { label: "Names an equal pair (vertical, corresponding, alternate interior/exterior)", re: /vertical|corresponding|alternate/i },
        { label: "Names a supplementary pair (linear pair, same-side interior)", re: /linear pair|same.?side|consecutive interior|supplementary/i },
        { label: "Explains equal vs. sum to 180", re: /equal|congruent|same/i }
      ],
      rubric: "2 points: correctly names at least one equal pair and one supplementary pair and explains the matching equation. 1 point: partially correct. 0 points: incorrect.",
      model: "First I identify the angle pair. Vertical, corresponding, alternate interior, and alternate exterior angles are congruent, so I set the expressions equal, like 4x − 7 = 2x + 25. A linear pair or same-side interior angles are supplementary, so I add the expressions and set the sum equal to 180, like (2x − 15) + (x + 30) = 180. Then I solve and check that both angles are positive.",
      why: "The relationship between the angles, not the expressions themselves, decides the equation." }
  ]
};

/* =====================================================================
   C3. GEOMETRY: SEGMENT ADDITION, MIDPOINTS & POLYGON ANGLES
   ===================================================================== */
RC["sg-geo-segments"] = {
  subject: "Geometry", mins: 25,
  title: "Segment Addition, Midpoints & Polygon Angle Sums",
  blurb: "Write and solve equations for segment lengths and midpoints, decide when an answer is impossible, and find interior and exterior angles of polygons.",
  eq: "How can equations with variables help us find unknown lengths and angles, and how do we know when a solution doesn’t make sense?",
  target: "I can use the Segment Addition Postulate and the definition of a midpoint to solve for x, reject solutions that give negative lengths, and use polygon angle-sum formulas to find unknown angles.",
  sources: [
    { tab: "Key Ideas", title: "Segment Addition and Midpoints", numbered: true, blocks: [
      { vocab: [
        ["Segment Addition Postulate", "If point M is between A and B, then AM + MB = AB."],
        ["midpoint", "The point that divides a segment into two congruent (equal) parts: AM = MB."],
        ["segment bisector", "A line, ray, or segment that passes through the midpoint."],
        ["length", "A distance, so it must be positive. The variable x can be negative, but a length cannot."],
        ["congruent", "Having the same measure. Shown with matching tick marks."]
      ] },
      { box: "<b>Worked example 1.</b> M is between A and B. AM = 2x + 3, MB = 4x − 5, and AB = 40.<br>AM + MB = AB → (2x + 3) + (4x − 5) = 40 → 6x − 2 = 40 → 6x = 42 → <b>x = 7</b>.<br>AM = 2(7) + 3 = <b>17</b> and MB = 4(7) − 5 = <b>23</b>. Check: 17 + 23 = 40 ✓" },
      { box: "<b>Worked example 2.</b> M is the midpoint of AB. AM = 5x − 8 and MB = 3x + 6.<br>Midpoint → equal parts: 5x − 8 = 3x + 6 → 2x = 14 → <b>x = 7</b>.<br>AM = MB = 27, so <b>AB = 54</b>. (Don’t stop at x. Read what the question asks for!)" },
      { p: "<b>When is an answer impossible?</b> Solve, then substitute. If any length is zero or negative, the situation can’t exist. For example, if AM = 3x + 2 and MB = x − 6 for a midpoint M, then 3x + 2 = x − 6 gives x = −4, and AM = 3(−4) + 2 = −10. A negative length is impossible, so M can’t be the midpoint with these expressions." }
    ] },
    { tab: "Polygons", title: "Interior and Exterior Angles of Polygons", numbered: true, blocks: [
      { p: "Draw every diagonal from one vertex of an n-sided polygon and you split it into <b>n − 2 triangles</b>. Each triangle has 180°, so the <b>interior angle sum is (n − 2) · 180°</b>." },
      { table: { cap: "Polygon angle formulas", head: ["What you want", "Formula", "Hexagon (n = 6)"], rows: [
        ["Sum of the interior angles", "(n − 2) · 180°", "4 · 180° = 720°"],
        ["Each interior angle (regular)", "(n − 2) · 180° ÷ n", "720° ÷ 6 = 120°"],
        ["Sum of the exterior angles", "360° (always)", "360°"],
        ["Each exterior angle (regular)", "360° ÷ n", "360° ÷ 6 = 60°"],
        ["Number of sides from an exterior angle", "n = 360° ÷ (each exterior angle)", "360° ÷ 60° = 6"]
      ], rowHead: true } },
      { box: "<b>Worked example 3.</b> A pentagon’s angles are x°, (x + 10)°, (2x − 5)°, (3x − 20)°, and (2x + 15)°.<br>Pentagon sum: (5 − 2) · 180 = 540.<br>x + x + 10 + 2x − 5 + 3x − 20 + 2x + 15 = 540 → 9x + 0 = 540 → <b>x = 60</b>.<br>The angles are 60°, 70°, 115°, 160°, and 135°. Check: they add to 540 ✓" },
      { p: "<b>Is it possible?</b> A regular polygon must have a whole number of sides. If 360 ÷ (exterior angle) is not a whole number, that regular polygon can’t exist." }
    ] },
    { tab: "Visual", title: "Why the Formula Works", blocks: [
      { table: { cap: "Triangles from one vertex", head: ["Polygon", "Sides (n)", "Triangles (n − 2)", "Interior sum"], rows: [
        ["Triangle", "3", "1", "180°"], ["Quadrilateral", "4", "2", "360°"], ["Pentagon", "5", "3", "540°"], ["Hexagon", "6", "4", "720°"], ["Octagon", "8", "6", "1080°"], ["Decagon", "10", "8", "1440°"]
      ], rowHead: true } },
      { box: "<b>Pattern:</b> Each new side adds one more triangle, so the interior sum goes up by 180° each time. The exterior angles always add to 360°, no matter how many sides, because walking around the polygon you turn one full circle." }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Segment Builder and Polygon Lab", blocks: [
      { box: "<b>Try this:</b> 1) In the Segment Builder, try x = 3, 5, and 7. Which one makes AM + MB = 40? 2) Slide x below 2 and watch for the warning. 3) In the Polygon Lab, slide n from 3 to 12. How many triangles does each polygon split into? 4) Which regular polygon has interior angles of exactly 150°?" },
      { sim: "segment", title: "Segment Addition Builder", tip: "x can be any number, but the lengths must be positive.", p1: [2, 3], p2: [4, -5], total: 40, x: 3 },
      { sim: "polygon", title: "Polygon Angle Lab", tip: "Count the triangles: always n − 2.", n: 6 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "P is between Q and R. QP = 3x − 1, PR = 2x + 6, and QR = 30. Find x.", a: 5, tol: 0.01, pre: "x =",
      why: "(3x − 1) + (2x + 6) = 30 → 5x + 5 = 30 → 5x = 25 → x = 5. QP = 14 and PR = 16." },
    { t: "num", ref: 1, q: "M is the midpoint of AB. AM = 6x − 11 and MB = 2x + 9. Find the length of AB.", a: 38, tol: 0.01, pre: "AB =",
      why: "6x − 11 = 2x + 9 → 4x = 20 → x = 5. AM = MB = 19, so AB = 38." },
    { t: "hot", ref: 1, q: "Y is between X and Z. XY = 4x − 3, YZ = x + 8, and XZ = 25. Click the <b>one</b> step with the mistake.",
      text: ["Step 1: (4x − 3) + (x + 8) = 25", "Step 2: 5x + 5 = 25", "Step 3: 5x = 30", "Step 4: x = 6"], a: [2],
      why: "To undo + 5, SUBTRACT 5: 5x = 25 − 5 = 20, so x = 4." },
    { t: "mc", ref: 1, q: "Using the correct value of x from the last question, find XY and YZ.", opts: ["XY = 13, YZ = 12", "XY = 21, YZ = 4", "XY = 12, YZ = 13", "XY = 16, YZ = 9"], a: 0,
      why: "x = 4: XY = 4(4) − 3 = 13 and YZ = 4 + 8 = 12. Check: 13 + 12 = 25 ✓" },
    { t: "mc", ref: 2, q: "What is the sum of the interior angles of an octagon?", opts: ["1080°", "1440°", "900°", "360°"], a: 0,
      why: "(8 − 2) · 180° = 6 · 180° = 1080°." },
    { t: "num", ref: 2, q: "Find the measure of each interior angle of a regular decagon (10 sides).", a: 144, tol: 0.01, pre: "", unit: "degrees",
      why: "(10 − 2) · 180 = 1440. 1440 ÷ 10 = 144°. (Or: each exterior angle is 36°, and 180 − 36 = 144.)" },
    { t: "num", ref: 2, q: "Each exterior angle of a regular polygon measures 24°. How many sides does it have?", a: 15, tol: 0.01, pre: "n =", unit: "sides",
      why: "n = 360 ÷ 24 = 15 sides." },
    { t: "grid", ref: 2, q: "Is each regular polygon possible?", cols: ["Possible", "Not possible"],
      rows: [["Each interior angle is 150°", 0], ["Each interior angle is 100°", 1], ["Each exterior angle is 45°", 0], ["The interior angle sum is 1000°", 1]],
      why: "150° interior → 30° exterior → 360 ÷ 30 = 12 sides ✓. 100° interior → 80° exterior → 360 ÷ 80 = 4.5 ✗. 360 ÷ 45 = 8 sides ✓. (n − 2) · 180 = 1000 gives n − 2 ≈ 5.56 ✗. Sides must be a whole number." },
    { t: "num", ref: 2, q: "A pentagon has angles x°, (x + 10)°, (2x − 5)°, (3x − 20)°, and (2x + 15)°. What is the measure of the <b>largest</b> angle?", a: 160, tol: 0.01, pre: "", unit: "degrees",
      why: "The sum is 540: 9x = 540, so x = 60. The angles are 60, 70, 115, 160, and 135. The largest is 3(60) − 20 = 160°." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> In the Segment Builder (AM = 2x + 3, MB = 4x − 5, AB = 40), which x works?", opts: ["x = 7, AM = 17, MB = 23", "x = 6, AM = 15, MB = 19", "x = 7, AM = 23, MB = 17", "x = 8, AM = 19, MB = 27"], a: 0,
      why: "At x = 7: AM = 17 and MB = 23, and 17 + 23 = 40. At x = 6 the total is only 34." },
    { t: "mc", ref: 1, q: "M is the midpoint of AB, with AM = 3x + 2 and MB = x − 6. What can you conclude?", opts: ["x = −4, which makes the lengths negative, so M can’t be the midpoint with these expressions.", "x = −4 and AB = −20.", "x = 4 and AB = 28.", "x = −4 is fine because x can be negative, so AB = 20."], a: 0,
      why: "3x + 2 = x − 6 → 2x = −8 → x = −4. Then AM = −10 and MB = −10. A length can’t be negative, so this situation is impossible. (x itself being negative is not the problem; negative lengths are.)" },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Your friend says, “x = −2, so the answer is wrong, because x can’t be negative.” Is your friend right? Explain using AM = 4x + 15 and MB = x + 9, where M is the midpoint of AB.", min: 35,
      checks: [
        { label: "Solves x = −2", re: /x\s?=\s?(−|-)\s?2/ },
        { label: "Finds the lengths AM = MB = 7 (or AB = 14)", re: /\b7\b|\b14\b/ },
        { label: "Explains that x may be negative but lengths must be positive", re: /length[\s\S]{0,60}(positive|negative|can.?t|cannot)|(positive|negative)[\s\S]{0,40}length/i }
      ],
      rubric: "2 points: solves x = −2, shows AM = MB = 7, and explains that only the lengths (not x) must be positive, so the friend is wrong. 1 point: correct solution with a partial explanation. 0 points: no reasoning.",
      model: "My friend is wrong. Since M is the midpoint, 4x + 15 = x + 9, so 3x = −6 and x = −2. Substituting gives AM = 4(−2) + 15 = 7 and MB = −2 + 9 = 7. Both lengths are positive, so the answer works and AB = 14. The variable x can be negative; only the lengths have to be positive.",
      why: "x is just a number in the expression. The real test is whether every length it produces is positive." }
  ]
};
