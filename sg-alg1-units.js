/* =====================================================================
   ✏️ UNIT STUDY GUIDES: ALGEBRA 1 (the rest of the year-long course)
   sg-alg1-ineq       Unit 3  Compound & Absolute Value Inequalities
   sg-alg1-functions  Unit 4  Functions: Notation, Domain & Range
   sg-alg1-systems    Unit 6  Systems of Equations & Inequalities
   sg-alg1-expo       Unit 7  Exponents & Exponential Functions
   sg-alg1-factor     Unit 9  Factoring & Solving by Factoring
   sg-alg1-radicals   Unit 11 Radicals & Rational Exponents
   sg-alg1-stats      Unit 12 Statistics & Data
   Simulations used here live in rc-sims-a1.js (and rc-sims.js).
   Key words have a Spanish translation as the third item: [term, meaning, español].
   (See the top of rc-engine.js and sg-math.js for the formats.)
   ===================================================================== */

/* ---------- number line drawing used by the diagrams below ---------- */
const A1NL = (function () {
  const X = v => 40 + (v + 8) * 32.5;
  const mn = v => v < 0 ? "−" + (-v) : String(v);
  function line(y, segs, label, sub) {
    let s = `<line x1="20" y1="${y}" x2="580" y2="${y}" class="ink"/>`;
    for (let v = -8; v <= 8; v++) s += `<line x1="${X(v)}" y1="${y - 7}" x2="${X(v)}" y2="${y + 7}" class="ink"/>` + (v % 2 === 0 ? `<text x="${X(v)}" y="${y + 24}" text-anchor="middle" class="tm">${mn(v)}</text>` : "");
    segs.forEach(([a, b, ca, cb, col]) => {
      const xa = a === null ? 22 : X(a), xb = b === null ? 578 : X(b);
      s += `<line x1="${xa}" y1="${y}" x2="${xb}" y2="${y}" stroke="${col}" stroke-width="8" stroke-linecap="round"/>`;
      if (a === null) s += `<path d="M30 ${y - 10} L16 ${y} L30 ${y + 10}z" fill="${col}"/>`;
      if (b === null) s += `<path d="M570 ${y - 10} L584 ${y} L570 ${y + 10}z" fill="${col}"/>`;
      if (a !== null) s += `<circle cx="${xa}" cy="${y}" r="8" fill="${ca ? col : "#fff"}" stroke="${col}" stroke-width="3"/>`;
      if (b !== null) s += `<circle cx="${xb}" cy="${y}" r="8" fill="${cb ? col : "#fff"}" stroke="${col}" stroke-width="3"/>`;
    });
    return s + `<text x="20" y="${y - 20}" class="t">${label}</text>` + (sub ? `<text x="580" y="${y - 20}" text-anchor="end" class="tm">${sub}</text>` : "");
  }
  return { X, line };
})();

/* =====================================================================
   UNIT 3. COMPOUND & ABSOLUTE VALUE INEQUALITIES
   ===================================================================== */
RC["sg-alg1-ineq"] = {
  subject: "Algebra 1", mins: 25,
  title: "Compound & Absolute Value Inequalities",
  blurb: "Solve and graph AND and OR inequalities, then use absolute value as distance to solve equations and inequalities like |x − 3| < 5.",
  eq: "How do “and,” “or,” and absolute value change what the solution to an inequality looks like?",
  target: "I can solve and graph compound inequalities, and I can solve absolute value equations and inequalities by thinking of absolute value as distance from a number.",
  sources: [
    { tab: "Key Ideas", title: "AND, OR, and Absolute Value", numbered: true, blocks: [
      { vocab: [
        ["compound inequality", "Two inequalities joined by the word AND or the word OR.", "desigualdad compuesta"],
        ["AND (intersection)", "x must make BOTH inequalities true. The graph is the overlap, usually a piece BETWEEN two numbers.", "y / intersección"],
        ["OR (union)", "x must make AT LEAST ONE inequality true. The graph is usually two pieces going OUTSIDE.", "o / unión"],
        ["absolute value", "The distance a number is from 0. |−6| = 6 and |6| = 6. Distance is never negative.", "valor absoluto"],
        ["isolate", "Get something alone on one side. Isolate the absolute value |…| before you split it into two cases.", "aislar"]
      ] },
      { p: "An <b>AND</b> inequality is often written as a “sandwich”: −3 &lt; 2x + 1 ≤ 7 means 2x + 1 is greater than −3 <b>and</b> less than or equal to 7. To solve it, do the same step to <b>all three parts</b> at once." },
      { box: "<b>Worked example 1 (AND).</b> Solve −3 &lt; 2x + 1 ≤ 7.<br>Subtract 1 from all three parts: −4 &lt; 2x ≤ 6<br>Divide all three parts by 2: <b>−2 &lt; x ≤ 3</b><br>Graph: open circle at −2, closed circle at 3, shade <b>between</b>." },
      { box: "<b>Worked example 2 (OR).</b> Solve 3x − 2 &lt; −8 <b>or</b> x + 4 ≥ 9.<br>Left: 3x &lt; −6, so x &lt; −2. Right: x ≥ 5.<br>Answer: <b>x &lt; −2 or x ≥ 5</b>. Graph: two arrows pointing <b>away</b> from each other." },
      { p: "<b>Absolute value is distance.</b> |x − 3| means “the distance between x and 3.” So |x − 3| = 5 asks: which numbers are 5 units from 3? Count 5 right (8) and 5 left (−2). Every absolute value equation splits into <b>two cases</b>: the inside equals the positive number, or the inside equals the negative number." },
      { box: "<b>Worked example 3.</b> Solve 3|x − 2| + 1 = 13.<br>Isolate first: subtract 1 → 3|x − 2| = 12. Divide by 3 → |x − 2| = 4.<br>Two cases: x − 2 = 4 → <b>x = 6</b>, or x − 2 = −4 → <b>x = −2</b>.<br>Check: 3|6 − 2| + 1 = 3(4) + 1 = 13 ✓ and 3|−2 − 2| + 1 = 13 ✓" },
      { table: { cap: "Absolute value inequalities: Less thAND, GreatOR", head: ["Form", "Means", "Rewrite as", "Graph"], rowHead: true, rows: [
        ["|x − c| &lt; r", "distance from c is LESS than r", "−r &lt; x − c &lt; r (AND)", "between"],
        ["|x − c| &gt; r", "distance from c is MORE than r", "x − c &lt; −r OR x − c &gt; r", "outside"],
        ["|x| = −3", "a distance can’t be negative", "no solution", "nothing shaded"],
        ["|x| &gt; −3", "every distance is more than −3", "all real numbers", "whole line"]
      ] } },
      { box: "<b>Worked example 4.</b> Solve |2x + 1| ≥ 7. “Greater” → OR.<br>2x + 1 ≤ −7 → 2x ≤ −8 → x ≤ −4, <b>or</b> 2x + 1 ≥ 7 → 2x ≥ 6 → x ≥ 3.<br>Answer: <b>x ≤ −4 or x ≥ 3</b>." }
    ] },
    { tab: "Visual", title: "Picture It: Between vs. Outside", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 600 330" role="img" aria-label="Three number lines. First: the AND inequality negative 2 is less than x which is less than or equal to 3, shaded between negative 2 with an open circle and 3 with a closed circle. Second: the OR inequality x less than negative 2 or x greater than or equal to 5, shaded with two arrows going outward. Third: absolute value of x minus 1 is less than 3, shown as all points within 3 units of the center 1, from negative 2 to 4.">
        ${A1NL.line(55, [[-2, 3, false, true, "#2b7de9"]], "AND: −2 < x ≤ 3", "y = BOTH are true → between")}
        ${A1NL.line(155, [[null, -2, false, false, "#e8368f"], [5, null, true, true, "#e8368f"]], "OR: x < −2 or x ≥ 5", "o = at least one → outside")}
        ${A1NL.line(270, [[-2, 4, false, false, "#1aa36f"]], "|x − 1| < 3", "distancia: within 3 of the center 1")}
        <path d="M${A1NL.X(1)} 236 L${A1NL.X(-2)} 236 M${A1NL.X(1)} 236 L${A1NL.X(4)} 236" stroke="#e08a00" stroke-width="3"/><circle cx="${A1NL.X(1)}" cy="236" r="5" fill="#e08a00"/>
        <text x="${(A1NL.X(1) + A1NL.X(-2)) / 2}" y="228" text-anchor="middle" class="tm">3 units</text><text x="${(A1NL.X(1) + A1NL.X(4)) / 2}" y="228" text-anchor="middle" class="tm">3 units</text></svg>`,
        cap: "Figure 1. Open circle ○ = the number is NOT included (&lt; or &gt;). Closed circle ● = it IS included (≤ or ≥)." },
      { table: { cap: "Test a number to check your graph", head: ["Inequality", "Test x = 0", "Test x = 6"], rowHead: true, rows: [
        ["−2 &lt; x ≤ 3", "−2 &lt; 0 ≤ 3 ✅", "6 ≤ 3? ❌"],
        ["x &lt; −2 or x ≥ 5", "0 &lt; −2? ❌ 0 ≥ 5? ❌ → ❌", "6 ≥ 5 ✅"],
        ["|x − 1| &lt; 3", "|0 − 1| = 1 &lt; 3 ✅", "|6 − 1| = 5 &lt; 3? ❌"]
      ] } },
      { p: "<b>Memory trick:</b> “Less th<b>AND</b>” (|…| &lt; r becomes an AND, between) and “Great<b>OR</b>” (|…| &gt; r becomes an OR, outside).", n: false }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Compound Inequality Builder", blocks: [
      { box: "<b>Try this:</b> 1) Choose <b>AND</b>. Set a = −2 and b = 3. Check the box to include the endpoints. Slide the test number and watch the ✅ and ❌. 2) Choose <b>OR</b>. Where are the solutions now? 3) Choose <b>|x − c| &lt; r</b>. Set c = −2 and r = 3. What are the endpoints? 4) Switch to <b>|x − c| &gt; r</b>. What happens to the shading?" },
      { sim: "compound", title: "Compound Inequality Builder", tip: "Absolute value is distance: |x − c| is how far x is from c.", mode: "and", a: -2, b: 3, inc: true }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Solve: −7 &lt; 3x − 1 ≤ 8", opts: ["−2 &lt; x ≤ 3", "−8 &lt; x ≤ 7", "−2 &lt; x ≤ 9", "x &lt; −2 or x ≥ 3"], a: 0,
      why: "Add 1 to all three parts: −6 &lt; 3x ≤ 9. Divide all three parts by 3: −2 &lt; x ≤ 3." },
    { t: "grid", ref: 1, q: "Is each solution BETWEEN two numbers or OUTSIDE two numbers?", cols: ["Between (AND)", "Outside (OR)"],
      rows: [["−4 ≤ x &lt; 2", 0], ["x &lt; −1 or x &gt; 5", 1], ["|x| &lt; 6", 0], ["|x − 2| ≥ 3", 1], ["|x + 4| ≤ 1", 0]],
      why: "AND and “less than” absolute value inequalities are between. OR and “greater than” absolute value inequalities are outside (Less thAND, GreatOR)." },
    { t: "inline", ref: 1, q: "Solve |x − 4| = 9.", text: "x − 4 = [[]] or x − 4 = [[]], so x = [[]] or x = [[]].",
      blanks: [{ opts: ["9", "4", "13"], a: 0 }, { opts: ["−4", "−9", "9"], a: 1 }, { opts: ["5", "13", "−13"], a: 1 }, { opts: ["−5", "5", "−13"], a: 0 }],
      why: "The numbers 9 units from 4 are 4 + 9 = 13 and 4 − 9 = −5. Check: |13 − 4| = 9 ✓ and |−5 − 4| = |−9| = 9 ✓" },
    { t: "num", ref: 1, q: "Solve 2|x + 3| − 4 = 10. Enter the <b>smaller</b> solution.", a: -10, tol: 0.01, pre: "x =",
      why: "Isolate: 2|x + 3| = 14, so |x + 3| = 7. Then x + 3 = 7 → x = 4, or x + 3 = −7 → x = −10. The smaller solution is −10." },
    { t: "mc", ref: 1, q: "Solve |x + 2| = −5.", opts: ["x = 3 or x = −7", "x = −7", "No solution", "All real numbers"], a: 2,
      why: "An absolute value is a distance, so it can never equal a negative number. There is no solution." },
    { t: "mc", ref: 1, q: "Solve |2x − 1| &lt; 7.", opts: ["x &lt; 4", "−3 &lt; x &lt; 4", "x &lt; −3 or x &gt; 4", "−4 &lt; x &lt; 3"], a: 1,
      why: "“Less than” means AND: −7 &lt; 2x − 1 &lt; 7. Add 1: −6 &lt; 2x &lt; 8. Divide by 2: −3 &lt; x &lt; 4." },
    { t: "multi", need: 3, ref: 2, q: "Which <b>three</b> numbers are solutions of x ≤ −2 or x &gt; 3?", opts: ["−5", "−2", "0", "3", "4"], a: [0, 1, 4],
      why: "−5 and −2 make x ≤ −2 true (−2 is included because of ≤). 4 makes x &gt; 3 true. 0 and 3 make neither part true (3 &gt; 3 is false)." },
    { t: "hot", ref: 1, q: "A student solved |x − 1| ≥ 4. Click the step with the mistake.",
      text: ["Step 1: x − 1 ≥ 4 or x − 1 ≥ −4", "Step 2: x ≥ 5 or x ≥ −3", "Step 3: So x ≥ −3"], a: [0],
      why: "For the negative case the sign must reverse: x − 1 ≤ −4. The correct answer is x ≤ −3 or x ≥ 5 (outside, because it is “greater than”)." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Choose |x − c| &lt; r and set c = −2 and r = 3. What are the endpoints of the shaded piece?", opts: ["−3 and 3", "−5 and 1", "−2 and 3", "1 and 5"], a: 1,
      why: "The solutions are within 3 units of −2: from −2 − 3 = −5 to −2 + 3 = 1. So |x + 2| &lt; 3 means −5 &lt; x &lt; 1." },
    { t: "num", ref: 1, q: "A thermostat keeps a classroom within 3 degrees of 70°F. This is written |T − 70| ≤ 3. What is the <b>highest</b> temperature allowed?", a: 73, tol: 0, unit: "°F",
      why: "−3 ≤ T − 70 ≤ 3, so 67 ≤ T ≤ 73. The highest temperature is 73°F." },
    { t: "mc", ref: 2, q: "Which absolute value inequality means “x is between 1 and 9”?", opts: ["|x − 5| &lt; 4", "|x − 1| &lt; 9", "|x + 5| &lt; 4", "|x − 5| &gt; 4"], a: 0,
      why: "The center of 1 and 9 is 5, and each endpoint is 4 units from 5. “Between” means less than: |x − 5| &lt; 4." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain the difference between an AND inequality and an OR inequality. Then explain why |x| &lt; −3 has no solution.", min: 35,
      checks: [
        { label: "Explains AND: both must be true / between", re: /and.{0,60}(both|between|overlap|middle)|(both|between|overlap).{0,60}and/i },
        { label: "Explains OR: at least one / outside / two pieces", re: /or.{0,60}(one|either|outside|two (pieces|parts|arrows)|away)|(either|outside|at least one).{0,60}or/i },
        { label: "Says absolute value is a distance that can’t be negative", re: /distance|never negative|can'?t be negative|cannot be negative|always positive|not negative|positive or zero/i },
        { label: "Uses an example number", re: /-?\d/ }
      ],
      rubric: "2 points: AND vs OR explained correctly and the no-solution case explained with distance. 1 point: one part correct. 0 points: no correct explanation.",
      why: "AND means both inequalities must be true, so the solution is the overlap between two numbers. OR means at least one must be true, so the solution is usually two pieces going outside. |x| is a distance, which is always 0 or more, so it can never be less than −3.",
      model: "An AND inequality means both parts must be true, so the answer is the numbers between, like −2 < x ≤ 3. An OR inequality means at least one part is true, so the graph has two pieces going outside, like x < −2 or x ≥ 5. |x| < −3 has no solution because absolute value is a distance and a distance is never negative, so it can never be less than −3." }
  ]
};

/* =====================================================================
   UNIT 4. FUNCTIONS: NOTATION, DOMAIN & RANGE
   ===================================================================== */
RC["sg-alg1-functions"] = {
  subject: "Algebra 1", mins: 25,
  title: "Functions: Notation, Domain & Range",
  blurb: "Decide if a relation is a function with mapping diagrams and the vertical line test, evaluate f(x), and find domain, range, and rate of change.",
  eq: "What makes a relationship a function, and how do we use function notation to describe it?",
  target: "I can decide whether a relation is a function, evaluate and solve with function notation, find domain and range from sets, graphs, and real situations, and find the average rate of change.",
  sources: [
    { tab: "Key Ideas", title: "What Is a Function?", numbered: true, blocks: [
      { vocab: [
        ["relation", "Any set of ordered pairs (input, output).", "relación"],
        ["function", "A relation where every input has EXACTLY ONE output.", "función"],
        ["domain", "The set of all inputs (x-values).", "dominio"],
        ["range", "The set of all outputs (y-values).", "rango / recorrido"],
        ["function notation", "f(x) is read “f of x.” It means the output of function f when the input is x. It does NOT mean f times x.", "notación de función"],
        ["rate of change", "How much the output changes for each 1 unit of input: (change in y) ÷ (change in x).", "tasa de cambio"]
      ] },
      { p: "A <b>function</b> is like a vending machine: each button (input) gives exactly one snack (output). Two different buttons can give the same snack, and that is fine. But if one button could give two different snacks, the machine would not be a function." },
      { box: "<b>Worked example 1.</b> Is {(1, 4), (2, 4), (3, 9)} a function? <b>Yes.</b> Each x appears once. (Two inputs share the output 4, which is allowed.)<br>Is {(2, 1), (2, 5), (3, 0)} a function? <b>No.</b> The input 2 has two outputs, 1 and 5." },
      { p: "<b>The vertical line test.</b> On a graph, imagine a vertical line sliding left to right. If the line ever touches the graph in <b>more than one point</b>, some x has two y-values, so the graph is <b>not</b> a function." },
      { box: "<b>Worked example 2 (evaluate).</b> f(x) = 3x² − 2x + 1. Find f(−2).<br>Substitute with parentheses: 3(−2)² − 2(−2) + 1 = 3(4) + 4 + 1 = <b>17</b>. So f(−2) = 17 means the point (−2, 17) is on the graph." },
      { box: "<b>Worked example 3 (solve).</b> g(x) = −4x + 7. When does g(x) = −13?<br>−4x + 7 = −13 → −4x = −20 → <b>x = 5</b>. Here we know the OUTPUT and find the INPUT." },
      { p: "<b>Domain and range in real life.</b> If C(t) = 12t is the cost of t movie tickets, t can only be 0, 1, 2, 3, … (you can’t buy 2.5 tickets). That domain is <b>discrete</b> (separate dots). If d(t) = 60t is the distance a car drives in t hours, any t ≥ 0 makes sense, so the domain is <b>continuous</b> (a solid line)." },
      { box: "<b>Worked example 4 (average rate of change).</b> f(x) = x². Find the average rate of change from x = 1 to x = 4.<br>(f(4) − f(1)) ÷ (4 − 1) = (16 − 1) ÷ 3 = <b>5</b>. On average, y goes up 5 for each 1 that x goes up." }
    ] },
    { tab: "Visual", title: "Picture It: Mapping Diagrams", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 286" role="img" aria-label="Two mapping diagrams. Left, a function: inputs negative 1, 0, 2 map to outputs 3, 5, with negative 1 and 2 both going to 3 and 0 going to 5. Each input has one arrow. Right, not a function: input 4 has two arrows, to 1 and to 6, and input 7 goes to 6.">
        <defs><marker id="a1Ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fillfg"/></marker></defs>
        <text x="160" y="24" text-anchor="middle" class="t">✅ Function (función)</text><text x="480" y="24" text-anchor="middle" class="t">❌ Not a function</text>
        <ellipse cx="90" cy="135" rx="48" ry="86" class="c1"/><ellipse cx="230" cy="135" rx="48" ry="86" class="c4"/>
        <ellipse cx="410" cy="135" rx="48" ry="86" class="c1"/><ellipse cx="550" cy="135" rx="48" ry="86" class="c2"/>
        <text x="90" y="276" text-anchor="middle" class="tm">input x</text><text x="230" y="276" text-anchor="middle" class="tm">output y</text><text x="410" y="276" text-anchor="middle" class="tm">input x</text><text x="550" y="276" text-anchor="middle" class="tm">output y</text>
        <text x="90" y="85" text-anchor="middle" class="t">−1</text><text x="90" y="140" text-anchor="middle" class="t">0</text><text x="90" y="195" text-anchor="middle" class="t">2</text>
        <text x="230" y="110" text-anchor="middle" class="t">3</text><text x="230" y="175" text-anchor="middle" class="t">5</text>
        <line x1="106" y1="81" x2="212" y2="104" class="ink" marker-end="url(#a1Ar)"/><line x1="106" y1="136" x2="212" y2="170" class="ink" marker-end="url(#a1Ar)"/><line x1="106" y1="190" x2="212" y2="112" class="ink" marker-end="url(#a1Ar)"/>
        <text x="410" y="110" text-anchor="middle" class="t">4</text><text x="410" y="175" text-anchor="middle" class="t">7</text>
        <text x="550" y="85" text-anchor="middle" class="t">1</text><text x="550" y="150" text-anchor="middle" class="t">6</text>
        <line x1="426" y1="105" x2="532" y2="83" stroke="#d0453a" stroke-width="3" marker-end="url(#a1Ar)"/><line x1="426" y1="108" x2="532" y2="143" stroke="#d0453a" stroke-width="3" marker-end="url(#a1Ar)"/><line x1="426" y1="171" x2="532" y2="149" class="ink" marker-end="url(#a1Ar)"/>
        <text x="480" y="244" text-anchor="middle" class="t" style="fill:#d0453a">4 has TWO outputs</text></svg>`,
        cap: "Figure 1. Count the arrows leaving each input. Exactly one arrow from every input = function. Two outputs going to the same place is fine." },
      { table: { cap: "Reading function notation", head: ["Statement", "In words", "Point on the graph"], rowHead: true, rows: [
        ["f(3) = 10", "When the input is 3, the output is 10.", "(3, 10)"],
        ["f(0) = −2", "When x = 0, y = −2 (the y-intercept).", "(0, −2)"],
        ["f(x) = 0 when x = 4", "The output is 0 when x = 4 (a zero / x-intercept).", "(4, 0)"]
      ] } }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Vertical Line Test", blocks: [
      { box: "<b>Try this:</b> 1) Choose the parabola and press <b>▶ Sweep</b>. Does the line ever hit 2 points? 2) Choose the circle. Stop the line at x = 2. How many points does it touch? 3) Choose <b>x = y²</b> and set the line at x = 4. 4) Compare Points A and Points B. Which set has an input with two outputs?" },
      { sim: "vline", title: "Vertical Line Test", tip: "If any vertical line touches the graph more than once, it is NOT a function.", rel: "para", x: -5 }
    ] }
  ],
  qs: [
    { t: "grid", ref: 1, q: "Is each relation a function?", cols: ["Function", "Not a function"],
      rows: [["{(1, 2), (2, 4), (3, 6)}", 0], ["{(2, 1), (2, 5), (3, 0)}", 1], ["{(−1, 7), (0, 7), (1, 7)}", 0], ["Each student → that student’s birthday", 0], ["Each month → the students born in that month", 1]],
      why: "A function needs one output per input. In {(2, 1), (2, 5)…}, the input 2 has two outputs. Every student has one birthday, but one month can have many students, so that relation is not a function." },
    { t: "num", ref: 1, q: "f(x) = 3x² − 2x + 1. Find f(−2).", a: 17, tol: 0, pre: "f(−2) =",
      why: "3(−2)² − 2(−2) + 1 = 3(4) + 4 + 1 = 12 + 4 + 1 = 17." },
    { t: "num", ref: 1, q: "g(x) = −4x + 7. For what value of x is g(x) = −13?", a: 5, tol: 0, pre: "x =",
      why: "−4x + 7 = −13. Subtract 7: −4x = −20. Divide by −4: x = 5. Check: −4(5) + 7 = −13 ✓" },
    { t: "mc", ref: 1, q: "What is the <b>domain</b> of {(−3, 4), (0, 4), (2, −1), (5, 6)}?", opts: ["{−3, 0, 2, 5}", "{−1, 4, 6}", "{4, −1, 6, 4}", "all real numbers"], a: 0,
      why: "The domain is the set of inputs, the first number in each pair: −3, 0, 2, and 5." },
    { t: "mc", ref: 1, q: "What is the <b>range</b> of {(−3, 4), (0, 4), (2, −1), (5, 6)}?", opts: ["{−3, 0, 2, 5}", "{−1, 4, 6}", "{4, 6}", "{−3, 6}"], a: 1,
      why: "The range is the set of outputs. List each one once: −1, 4, and 6." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Choose <b>x = y²</b> and set the vertical line at x = 4. What happens?", opts: ["It touches 1 point, so it is a function", "It touches 2 points, (4, 2) and (4, −2), so it is not a function", "It touches no points", "It touches infinitely many points"], a: 1,
      why: "When x = 4, y² = 4, so y = 2 or y = −2. One input has two outputs, so x = y² is not a function." },
    { t: "num", ref: 1, q: "f(x) = x². Find the average rate of change from x = 1 to x = 4.", a: 5, tol: 0,
      why: "(f(4) − f(1)) ÷ (4 − 1) = (16 − 1) ÷ 3 = 15 ÷ 3 = 5." },
    { t: "mc", ref: 1, q: "Which equation is <b>NOT</b> a function?", opts: ["y = x²", "y = |x|", "x = y²", "y = 2x − 1"], a: 2,
      why: "In x = y², an input like x = 9 gives y = 3 and y = −3. The others give one y for every x." },
    { t: "multi", need: 2, ref: 1, q: "Movie tickets cost $12 each, so C(t) = 12t. Which <b>two</b> statements about the domain are true?", opts: ["The domain is discrete (separate dots).", "The domain is 0, 1, 2, 3, … (whole numbers).", "The domain is continuous (a solid line).", "t = 2.5 is in the domain."], a: [0, 1],
      why: "You can only buy whole numbers of tickets, so the inputs are 0, 1, 2, 3, … and the graph is separate dots." },
    { t: "mc", ref: 2, q: "What does f(4) = −1 mean?", opts: ["When x = 4, the output is −1, so (4, −1) is on the graph", "When x = −1, the output is 4", "f times 4 equals −1", "The slope is −1"], a: 0,
      why: "The number inside the parentheses is the input. The number after the equal sign is the output." },
    { t: "order", ref: 1, q: "Put the steps in order to evaluate f(−3) for f(x) = 2x² − 5 (first at the top).",
      items: ["Substitute with parentheses: 2(−3)² − 5", "Do the exponent: (−3)² = 9, so 2(9) − 5", "Multiply: 18 − 5", "Subtract: f(−3) = 13"],
      why: "Substitute with parentheses, then follow the order of operations: exponents, multiplication, subtraction." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain why x = y² is not a function. Use the vertical line test and one input that has two outputs.", min: 30,
      checks: [
        { label: "Uses the definition: one input, more than one output", re: /two outputs|2 outputs|more than one|one input|same (x|input)|two (y|values)/i },
        { label: "Mentions the vertical line test", re: /vertical/i },
        { label: "Gives a specific input and outputs", re: /\d.{0,40}(and|or|,).{0,10}(−|-)\s?\d/i }
      ],
      rubric: "2 points: uses the definition, the vertical line test, and a correct example. 1 point: one correct reason. 0 points: no correct reasoning.",
      why: "A function gives exactly one output for every input. For x = y², the input 4 gives y = 2 and y = −2, so a vertical line at x = 4 hits the graph twice.",
      model: "x = y² is not a function because one input has two outputs. If x = 4, then y can be 2 or −2, because both 2² and (−2)² equal 4. On the graph, a vertical line at x = 4 touches the graph at (4, 2) and (4, −2), so it fails the vertical line test." }
  ]
};

/* =====================================================================
   UNIT 6. SYSTEMS OF EQUATIONS & INEQUALITIES
   ===================================================================== */
RC["sg-alg1-systems"] = {
  subject: "Algebra 1", mins: 25,
  title: "Systems of Equations & Inequalities",
  blurb: "Solve systems by graphing, substitution, and elimination, decide how many solutions a system has, write systems for word problems, and graph systems of inequalities.",
  eq: "How can two equations or inequalities work together to describe a situation, and how do we find the values that make both true?",
  target: "I can solve systems of linear equations by graphing, substitution, and elimination, explain one, none, or infinitely many solutions, model word problems with systems, and graph the solution of a system of inequalities.",
  sources: [
    { tab: "Key Ideas", title: "Three Ways to Solve a System", numbered: true, blocks: [
      { vocab: [
        ["system of equations", "Two or more equations with the same variables, solved together.", "sistema de ecuaciones"],
        ["solution of a system", "An ordered pair that makes EVERY equation true. On a graph, it is where the lines cross.", "solución del sistema"],
        ["substitution", "Solve one equation for a variable, then plug that expression into the other equation.", "sustitución"],
        ["elimination", "Add or subtract the equations so one variable cancels (becomes 0).", "eliminación"],
        ["parallel lines", "Lines with the same slope and different y-intercepts. They never cross.", "rectas paralelas"]
      ] },
      { p: "<b>Graphing:</b> graph both lines and find where they cross. This works well when the answer is a whole number. <b>Substitution:</b> best when one equation already says y = … or x = … . <b>Elimination:</b> best when both equations are in standard form, Ax + By = C." },
      { box: "<b>Worked example 1 (substitution).</b> y = 2x − 3 and 3x + y = 12.<br>Replace y in the second equation: 3x + (2x − 3) = 12 → 5x − 3 = 12 → 5x = 15 → x = 3.<br>Then y = 2(3) − 3 = 3. Solution: <b>(3, 3)</b>. Check in both equations: 3 = 6 − 3 ✓ and 9 + 3 = 12 ✓" },
      { box: "<b>Worked example 2 (elimination).</b> 2x + 3y = 7 and 4x − 3y = 5.<br>The y-terms are opposites, so add: 6x = 12 → x = 2. Then 2(2) + 3y = 7 → 3y = 3 → y = 1. Solution: <b>(2, 1)</b>." },
      { box: "<b>Worked example 3 (multiply first).</b> 3x + 2y = 16 and 2x − 5y = −21.<br>Multiply the first by 5 and the second by 2: 15x + 10y = 80 and 4x − 10y = −42.<br>Add: 19x = 38 → x = 2. Then 3(2) + 2y = 16 → y = 5. Solution: <b>(2, 5)</b>." },
      { table: { cap: "How many solutions?", head: ["Slopes and intercepts", "Graph", "Algebra ends with…", "Solutions"], rowHead: true, rows: [
        ["Different slopes", "lines cross once", "x = a number", "exactly one"],
        ["Same slope, different intercepts", "parallel lines", "a false statement like 0 = 6", "none"],
        ["Same slope, same intercept", "the same line", "a true statement like 0 = 0", "infinitely many"]
      ] } },
      { box: "<b>Worked example 4 (word problem).</b> A theater sold 200 tickets. Adult tickets cost $8 and student tickets cost $5. It made $1,330. Let a = adult tickets and s = student tickets.<br>a + s = 200 (number of tickets) and 8a + 5s = 1,330 (money).<br>Substitute s = 200 − a: 8a + 5(200 − a) = 1,330 → 3a + 1,000 = 1,330 → a = 110, s = 90. <b>110 adult and 90 student tickets.</b>" },
      { p: "<b>Systems of inequalities.</b> Graph each inequality: a <b>dashed</b> line for &lt; or &gt;, a <b>solid</b> line for ≤ or ≥. Shade <b>above</b> for y &gt; and <b>below</b> for y &lt;. The solution is the region where the shadings <b>overlap</b>. Test a point like (0, 0) to check." }
    ] },
    { tab: "Visual", title: "Picture It: One, None, or Infinitely Many", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 660 250" role="img" aria-label="Three small graphs. First: two lines crossing at one point, exactly one solution. Second: two parallel lines that never meet, no solution. Third: two lines on top of each other, infinitely many solutions.">
        ${[0, 1, 2].map(k => { const x0 = 20 + k * 215; let g = `<rect x="${x0}" y="20" width="190" height="170" rx="12" class="soft"/><line x1="${x0 + 95}" y1="28" x2="${x0 + 95}" y2="182" class="ink" stroke-width="1"/><line x1="${x0 + 8}" y1="105" x2="${x0 + 182}" y2="105" class="ink" stroke-width="1"/>`;
          if (k === 0) g += `<line x1="${x0 + 15}" y1="175" x2="${x0 + 175}" y2="35" stroke="#2b7de9" stroke-width="4"/><line x1="${x0 + 15}" y1="45" x2="${x0 + 175}" y2="165" stroke="#e8368f" stroke-width="4"/><circle cx="${x0 + 99}" cy="102" r="8" fill="#e08a00" stroke="#fff" stroke-width="2"/>`;
          if (k === 1) g += `<line x1="${x0 + 15}" y1="160" x2="${x0 + 150}" y2="35" stroke="#2b7de9" stroke-width="4"/><line x1="${x0 + 45}" y1="175" x2="${x0 + 180}" y2="50" stroke="#e8368f" stroke-width="4"/>`;
          if (k === 2) g += `<line x1="${x0 + 15}" y1="165" x2="${x0 + 175}" y2="45" stroke="#2b7de9" stroke-width="8"/><line x1="${x0 + 15}" y1="165" x2="${x0 + 175}" y2="45" stroke="#e8368f" stroke-width="3" stroke-dasharray="10 8"/>`;
          return g + `<text x="${x0 + 95}" y="212" text-anchor="middle" class="t">${["One solution", "No solution", "Infinitely many"][k]}</text><text x="${x0 + 95}" y="230" text-anchor="middle" class="tm">${["una solución", "sin solución", "infinitas soluciones"][k]}</text>`; }).join("")}</svg>`,
        cap: "Figure 1. The solution of a system is where the lines meet. Parallel lines never meet. The same line meets itself everywhere." },
      { table: { cap: "Which method should I use?", head: ["The system looks like…", "Try…"], rowHead: true, rows: [
        ["y = 2x − 3 and 3x + y = 12", "Substitution (y is already alone)"],
        ["2x + 3y = 7 and 4x − 3y = 5", "Elimination (+3y and −3y cancel)"],
        ["y = x + 1 and y = −x + 5", "Graphing or substitution"]
      ] } }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Two Lines and Shaded Regions", blocks: [
      { box: "<b>Try this:</b> 1) In the Slope Explorer, make Line 1 y = 2x − 3 and Line 2 y = −3x + 7. Where do they cross? 2) Give both lines slope 2. What happens? 3) In Systems of Inequalities, tap different points. Find one point in the overlap and one that only works for one inequality." },
      { sim: "slope", title: "Slope Explorer: Systems", tip: "The intersection point is the solution.", lines: [{ m: 2, b: -3, label: "Line 1" }, { m: -3, b: 7, label: "Line 2" }], range: 10 },
      { sim: "sysineq", title: "Systems of Inequalities", tip: "The solution is where BOTH colors overlap.", lines: [{ m: 1, b: 1, sg: ">=" }, { m: -2, b: 4, sg: "<" }], point: [0, 3] }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Solve the system y = x + 4 and 2x + y = 19. What is <b>y</b>?", a: 9, tol: 0, pre: "y =",
      why: "Substitute: 2x + (x + 4) = 19 → 3x = 15 → x = 5. Then y = 5 + 4 = 9. Check: 2(5) + 9 = 19 ✓" },
    { t: "inline", ref: 1, q: "Solve x + y = 10 and x − y = 4 by elimination.", text: "Add the equations: 2x = [[]]. So x = [[]] and y = [[]].",
      blanks: [{ opts: ["6", "14", "40"], a: 1 }, { opts: ["7", "14", "3"], a: 0 }, { opts: ["7", "3", "−3"], a: 1 }],
      why: "Adding cancels y: 2x = 14, so x = 7. Then 7 + y = 10, so y = 3. Check: 7 − 3 = 4 ✓" },
    { t: "mc", ref: 1, q: "How many solutions does the system 3x − 2y = 4 and 6x − 4y = 8 have?", opts: ["Exactly one", "None", "Infinitely many", "Two"], a: 2,
      why: "The second equation is the first one multiplied by 2. They are the same line, so every point on it is a solution." },
    { t: "mc", ref: 1, q: "How many solutions does the system y = 2x + 1 and y = 2x − 5 have?", opts: ["Exactly one", "None", "Infinitely many", "One, at (0, 1)"], a: 1,
      why: "Same slope (2) but different y-intercepts: the lines are parallel and never cross. Algebra gives 2x + 1 = 2x − 5 → 1 = −5, which is false." },
    { t: "grid", ref: 1, q: "How many solutions?", cols: ["Exactly one", "None", "Infinitely many"],
      rows: [["Lines have different slopes", 0], ["Same slope, different y-intercepts", 1], ["Same slope, same y-intercept", 2], ["y = −x + 3 and y = x − 1", 0], ["Solving ends with 0 = 0", 2]],
      why: "Different slopes cross once. Parallel lines never cross. Identical lines share every point. y = −x + 3 and y = x − 1 have slopes −1 and 1, so they cross once (at (2, 1)). 0 = 0 is always true, so there are infinitely many solutions." },
    { t: "num", ref: 1, q: "Solve 2x + y = 7 and 3x − 2y = 0. What is <b>y</b>?", a: 3, tol: 0, pre: "y =",
      why: "Multiply the first by 2: 4x + 2y = 14. Add to 3x − 2y = 0: 7x = 14, so x = 2. Then 2(2) + y = 7, so y = 3." },
    { t: "multi", need: 2, ref: 1, q: "A market sells bags of oranges for $4 and bags of grapes for $6. Maria buys 9 bags and pays $44. Let o = bags of oranges and g = bags of grapes. Which <b>two</b> equations model this?", opts: ["o + g = 9", "4o + 6g = 44", "4o + 6g = 9", "o + g = 44", "10(o + g) = 44"], a: [0, 1],
      why: "One equation counts bags (o + g = 9). The other counts money: $4 per orange bag plus $6 per grape bag (4o + 6g = 44)." },
    { t: "num", ref: 1, q: "Solve Maria’s system from the last question. How many bags of <b>grapes</b> did she buy?", a: 4, tol: 0, unit: "bags",
      why: "o = 9 − g. Substitute: 4(9 − g) + 6g = 44 → 36 + 2g = 44 → g = 4. Then o = 5. Check: 4(5) + 6(4) = 20 + 24 = 44 ✓" },
    { t: "mc", ref: 1, q: "Is (2, −1) a solution of the system y &lt; 3x − 4 and y ≥ −x?", opts: ["Yes, it makes both inequalities true", "No, it only makes the first true", "No, it only makes the second true", "No, it makes neither true"], a: 0,
      why: "First: −1 &lt; 3(2) − 4 = 2 ✓. Second: −1 ≥ −2 ✓. It makes both true, so it is in the overlap." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> In Systems of Inequalities (y ≥ x + 1 and y &lt; −2x + 4), tap the point (−2, 3). What does the simulation show?", opts: ["✅ It is in the overlap: true for both", "Only true for inequality 1", "Only true for inequality 2", "False for both"], a: 0,
      why: "3 ≥ −2 + 1 = −1 ✓ and 3 &lt; −2(−2) + 4 = 8 ✓. Both are true, so (−2, 3) is a solution." },
    { t: "mc", ref: 1, q: "When you graph y &gt; 2x − 1, what kind of boundary line do you draw, and where do you shade?", opts: ["Solid line, shade below", "Dashed line, shade above", "Dashed line, shade below", "Solid line, shade above"], a: 1,
      why: "&gt; does not include the line, so it is dashed. y is GREATER than the line, so shade above it." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain two ways to know that a system has <b>no solution</b>: one using the graph and one using the algebra. Give an example system.", min: 35,
      checks: [
        { label: "Graph: parallel lines / never cross", re: /parallel|never (cross|meet|touch|intersect)|don'?t cross/i },
        { label: "Slopes are the same and intercepts different", re: /same slope|slopes? (are|is) (the )?(same|equal)|equal slope/i },
        { label: "Algebra: a false statement (like 0 = 6)", re: /false|not true|never true|\d\s?=\s?−?-?\d|impossible/i },
        { label: "Gives an example system", re: /y\s?=|x\s?\+|=\s?−?-?\d+x/i }
      ],
      rubric: "2 points: correct graph reason, correct algebra reason, and an example. 1 point: one correct reason. 0 points: no correct reasoning.",
      why: "On a graph, no solution means parallel lines (same slope, different y-intercepts). With algebra, the variables cancel and you get a false statement like 1 = −5.",
      model: "A system has no solution when the lines are parallel, which means they have the same slope but different y-intercepts, so they never cross. For example, y = 2x + 1 and y = 2x − 5. With algebra, 2x + 1 = 2x − 5 becomes 1 = −5, which is false, so there is no solution." }
  ]
};

/* =====================================================================
   UNIT 7. EXPONENTS & EXPONENTIAL FUNCTIONS
   ===================================================================== */
RC["sg-alg1-expo"] = {
  subject: "Algebra 1", mins: 25,
  title: "Exponents & Exponential Functions",
  blurb: "Use the exponent rules (including zero and negative exponents), then model growth and decay with y = a·bˣ and compare linear and exponential change.",
  eq: "How is multiplying by the same factor over and over different from adding the same amount over and over?",
  target: "I can simplify expressions with the exponent rules, tell linear and exponential patterns apart, and write and use exponential growth and decay models, including percent rates.",
  sources: [
    { tab: "Key Ideas", title: "Exponent Rules and Exponential Functions", numbered: true, blocks: [
      { vocab: [
        ["base / exponent", "In 2⁵, the base is 2 and the exponent is 5: multiply 2 by itself 5 times.", "base / exponente"],
        ["exponential function", "y = a · bˣ, where a is the starting value and b is the factor you multiply by each step.", "función exponencial"],
        ["growth factor", "b &gt; 1. Growth by r percent means b = 1 + r (5% growth → b = 1.05).", "factor de crecimiento"],
        ["decay factor", "0 &lt; b &lt; 1. Decay by r percent means b = 1 − r (15% decay → b = 0.85).", "factor de decrecimiento"],
        ["half-life", "The time it takes for an amount to shrink to half.", "vida media"]
      ] },
      { table: { cap: "The exponent rules", head: ["Rule", "Pattern", "Example"], rowHead: true, rows: [
        ["Product", "xᵃ · xᵇ = xᵃ⁺ᵇ (add exponents)", "x⁵ · x³ = x⁸"],
        ["Quotient", "xᵃ ÷ xᵇ = xᵃ⁻ᵇ (subtract)", "x⁹ ÷ x² = x⁷"],
        ["Power of a power", "(xᵃ)ᵇ = xᵃᵇ (multiply)", "(x⁴)³ = x¹²"],
        ["Power of a product", "(xy)ᵃ = xᵃyᵃ", "(2x³)² = 4x⁶"],
        ["Zero", "x⁰ = 1 (x ≠ 0)", "7⁰ = 1"],
        ["Negative", "x⁻ᵃ = 1 ÷ xᵃ (a reciprocal, NOT a negative number)", "5⁻² = 1/25"]
      ] } },
      { box: "<b>Worked example 1.</b> Simplify (3x²y)³ · x⁻⁴.<br>Power of a product: 3³ · x⁶ · y³ = 27x⁶y³. Then multiply by x⁻⁴: add exponents 6 + (−4) = 2.<br>Answer: <b>27x²y³</b>." },
      { p: "<b>Linear vs. exponential.</b> In a linear pattern you <b>add</b> the same amount each step (constant difference). In an exponential pattern you <b>multiply</b> by the same factor each step (constant ratio). Check a table: subtract neighbors (linear) or divide neighbors (exponential)." },
      { box: "<b>Worked example 2 (growth).</b> A town has 1,200 people and grows 5% per year. Write a model and find the population after 3 years.<br>a = 1,200, b = 1 + 0.05 = 1.05, so P = 1,200(1.05)ᵗ.<br>P(3) = 1,200(1.05)³ = 1,200(1.157625) ≈ <b>1,389 people</b>." },
      { box: "<b>Worked example 3 (decay).</b> A $250 phone loses 15% of its value every year: V = 250(0.85)ᵗ. After 2 years, V = 250(0.7225) ≈ <b>$180.63</b>." },
      { box: "<b>Worked example 4 (half-life).</b> A medicine starts at 80 mg and half of it leaves the body every 6 hours. After 18 hours there have been 18 ÷ 6 = 3 half-lives: 80 → 40 → 20 → <b>10 mg</b>. Model: A = 80(½)^(t/6)." }
    ] },
    { tab: "Visual", title: "Picture It: Adding vs. Multiplying", blocks: [
      { table: { cap: "Constant difference or constant ratio?", head: ["x", "Linear: y = 3 + 4x", "Exponential: y = 3 · 2ˣ"], rows: [
        ["0", "3", "3"], ["1", "7 (+4)", "6 (×2)"], ["2", "11 (+4)", "12 (×2)"], ["3", "15 (+4)", "24 (×2)"], ["4", "19 (+4)", "48 (×2)"], ["5", "23 (+4)", "96 (×2)"]
      ] } },
      { fig: RCG.line({ title: "Growth and decay", alt: "Graph of y equals 3 times 2 to the x, which curves up quickly, y equals 3 plus 4x, a straight line, and y equals 48 times one half to the x, which curves down toward zero.", w: 540, h: 320,
          x: { min: 0, max: 5, step: 1, label: "x" }, y: { min: 0, max: 100, step: 20, label: "y" },
          series: [{ fn: x => 3 * 2 ** x, cls: "s2", label: "exponential growth: 3·2ˣ" }, { fn: x => 3 + 4 * x, cls: "s1", label: "linear: 3 + 4x" }, { fn: x => 48 * 0.5 ** x, cls: "s3", dash: true, label: "decay: 48·(½)ˣ" }], legend: "left" }),
        cap: "Figure 1. Exponential growth starts slow, then shoots past any linear function. Exponential decay drops fast, then levels off near 0 but never reaches it." },
      { p: "<b>Read the model y = a · bˣ:</b> a = the starting value (the y-intercept, when x = 0). b = what you multiply by each step. If b &gt; 1, it grows. If 0 &lt; b &lt; 1, it decays.", n: false }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Linear vs. Exponential and the Exponent Lab", blocks: [
      { box: "<b>Try this:</b> 1) In Linear vs. Exponential, keep a = 10, add 5, multiply by 1.3. Press ▶ Play. In what year does B pass A? 2) Change b to 0.8. What happens to Plan B? 3) In the Exponent Lab, set the base to 2 and slide the exponent from 3 down to −3. Each step left divides by 2." },
      { sim: "growth", title: "Linear vs. Exponential", tip: "Adding the same amount makes a line. Multiplying by the same factor makes a curve.", a: 10, d: 5, b: 1.3, n: 4 },
      { sim: "expo", title: "Exponent Lab", tip: "A negative exponent means a reciprocal (1 over…), not a negative number.", b: 2, n: 3 }
    ] }
  ],
  qs: [
    { t: "inline", ref: 1, q: "Use the exponent rules.", text: "x⁵ · x³ = x^[[]] &nbsp;·&nbsp; (x⁴)³ = x^[[]] &nbsp;·&nbsp; x⁹ ÷ x² = x^[[]]",
      blanks: [{ opts: ["8", "15", "2"], a: 0 }, { opts: ["7", "12", "64"], a: 1 }, { opts: ["7", "11", "4.5"], a: 0 }],
      why: "Multiplying: add exponents (5 + 3 = 8). Power of a power: multiply (4 · 3 = 12). Dividing: subtract (9 − 2 = 7)." },
    { t: "mc", ref: 1, q: "What is 5⁻²?", opts: ["−25", "−10", "1/25", "25"], a: 2,
      why: "A negative exponent means reciprocal: 5⁻² = 1 ÷ 5² = 1/25. It is still positive." },
    { t: "mc", ref: 1, q: "Simplify (2x³)².", opts: ["2x⁶", "4x⁵", "4x⁶", "2x⁵"], a: 2,
      why: "Square both factors: 2² = 4 and (x³)² = x⁶. A common mistake is forgetting to square the 2." },
    { t: "grid", ref: 2, q: "Is each table linear or exponential? (x = 0, 1, 2, 3)", cols: ["Linear", "Exponential"],
      rows: [["y: 3, 6, 12, 24", 1], ["y: 5, 8, 11, 14", 0], ["y: 80, 40, 20, 10", 1], ["y: 100, 90, 80, 70", 0]],
      why: "3, 6, 12, 24 multiplies by 2. 5, 8, 11, 14 adds 3. 80, 40, 20, 10 multiplies by ½. 100, 90, 80, 70 subtracts 10 (still a constant difference, so linear)." },
    { t: "mc", ref: 1, q: "What does V = 250(0.85)ᵗ describe?", opts: ["Growth of 85% per year", "Decay of 15% per year", "Decay of 85% per year", "Growth of 15% per year"], a: 1,
      why: "b = 0.85 is less than 1, so it is decay. 1 − 0.85 = 0.15, so the value loses 15% each year." },
    { t: "num", ref: 1, q: "A town of 1,200 people grows 5% per year. About how many people will live there after 3 years? Round to the nearest person.", a: 1389, tol: 1, unit: "people",
      why: "P = 1,200(1.05)³ = 1,200(1.157625) = 1,389.15 ≈ 1,389." },
    { t: "mc", ref: 1, q: "A colony starts with 40 bacteria and doubles every hour. Which equation models it?", opts: ["y = 40 + 2x", "y = 2(40)ˣ", "y = 40(2)ˣ", "y = 40x²"], a: 2,
      why: "The starting value is a = 40 and the factor is b = 2 (doubling), so y = 40(2)ˣ." },
    { t: "num", ref: 1, q: "A medicine starts at 80 mg and its half-life is 6 hours. How much is left after 18 hours?", a: 10, tol: 0, unit: "mg",
      why: "18 ÷ 6 = 3 half-lives: 80 → 40 → 20 → 10 mg." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> In Linear vs. Exponential with a = 10, add 5, and multiply by 1.3, in which year does Plan B first pass Plan A?", opts: ["Year 2", "Year 4", "Year 5", "It never passes"], a: 2,
      why: "Year 4: A = 30 and B ≈ 28.56. Year 5: A = 35 and B ≈ 37.13. B passes A in year 5, and the gap keeps growing." },
    { t: "mc", ref: 1, q: "Which expression equals 1/8?", opts: ["2⁻³", "−2³", "(−2)³", "3⁻²"], a: 0,
      why: "2⁻³ = 1 ÷ 2³ = 1/8. −2³ and (−2)³ both equal −8, and 3⁻² = 1/9." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> functions show exponential <b>growth</b>?", opts: ["y = 3(1.2)ˣ", "y = 0.5(4)ˣ", "y = 10(0.9)ˣ", "y = 2x + 7", "y = 5(1)ˣ"], a: [0, 1],
      why: "Growth needs b &gt; 1: 1.2 and 4. b = 0.9 is decay, 2x + 7 is linear, and b = 1 never changes." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Job A starts at $300 a week and adds $50 each year. Job B starts at $300 and gives a 10% raise each year. Which pays more in the long run? Explain using the words <i>constant difference</i> or <i>constant ratio</i>.", min: 35,
      checks: [
        { label: "Chooses Job B (the 10% raise) for the long run", re: /job b|b pays|10\s?%|percent/i },
        { label: "Linear / adds the same amount (constant difference)", re: /difference|same amount|adds?|linear|\+\s?\$?50/i },
        { label: "Exponential / multiplies (constant ratio, 1.10)", re: /ratio|multipl|exponential|1\.1|times/i },
        { label: "Uses numbers to compare", re: /\d{3}/ }
      ],
      rubric: "2 points: picks Job B and explains linear vs. exponential with numbers. 1 point: correct choice with a weak explanation. 0 points: incorrect reasoning.",
      why: "Job A is linear: it adds $50 every year (constant difference). Job B is exponential: it multiplies by 1.10 every year (constant ratio). At first A is ahead, but B’s raises keep getting bigger, so B passes A in year 11 and stays ahead forever.",
      model: "Job B pays more in the long run. Job A has a constant difference because it adds the same $50 every year, so it is linear: 300 + 50x. Job B has a constant ratio because it multiplies by 1.10 every year, so it is exponential: 300(1.1)^x. After 1 year A is $350 and B is $330, but after 10 years A is $800 and B is about $778, and by year 11 B is about $856 while A is only $850. Exponential growth always passes linear growth eventually." }
  ]
};

/* =====================================================================
   UNIT 9. FACTORING & SOLVING BY FACTORING
   ===================================================================== */
RC["sg-alg1-factor"] = {
  subject: "Algebra 1", mins: 25,
  title: "Factoring & Solving Quadratics by Factoring",
  blurb: "Factor out the GCF, factor trinomials with the pair (X) method and the box, spot special patterns, and use the zero product property to solve equations.",
  eq: "How does “undoing” multiplication help us solve quadratic equations?",
  target: "I can factor polynomials using the GCF, trinomial methods, and special patterns, and I can solve quadratic equations by factoring and the zero product property.",
  sources: [
    { tab: "Key Ideas", title: "Factoring Step by Step", numbered: true, blocks: [
      { vocab: [
        ["factor", "To write an expression as a product (multiplication). Factoring undoes multiplying.", "factorizar"],
        ["greatest common factor (GCF)", "The biggest number and variable part that divides every term.", "máximo común divisor"],
        ["trinomial", "A polynomial with three terms, like x² + 7x + 12.", "trinomio"],
        ["prime polynomial", "A polynomial that cannot be factored with integers, like x² + 2x + 5.", "polinomio primo"],
        ["zero product property", "If a · b = 0, then a = 0 or b = 0.", "propiedad del producto cero"]
      ] },
      { p: "<b>Always start with the GCF.</b> 12x³ + 18x²: the GCF of 12 and 18 is 6, and the smallest power of x is x². So 12x³ + 18x² = <b>6x²(2x + 3)</b>. Check by distributing." },
      { box: "<b>Worked example 1 (a = 1).</b> Factor x² − 3x − 28.<br>Find two numbers that <b>multiply to −28</b> and <b>add to −3</b>. Factor pairs of −28: (1, −28), (2, −14), (4, −7) … 4 + (−7) = −3 ✓<br>Answer: <b>(x + 4)(x − 7)</b>. Check: x² − 7x + 4x − 28 = x² − 3x − 28 ✓" },
      { p: "<b>Sign clues:</b> if c is positive, both numbers have the same sign as b. If c is negative, the numbers have different signs, and the bigger one has the sign of b." },
      { box: "<b>Worked example 2 (a ≠ 1, the AC method).</b> Factor 2x² + 7x + 3.<br>a · c = 2 · 3 = 6. Two numbers that multiply to 6 and add to 7: 1 and 6.<br>Split the middle: 2x² + x + 6x + 3. Group: x(2x + 1) + 3(2x + 1) = <b>(2x + 1)(x + 3)</b>." },
      { table: { cap: "Special patterns", head: ["Pattern", "Factored form", "Example"], rowHead: true, rows: [
        ["Difference of squares", "a² − b² = (a + b)(a − b)", "x² − 49 = (x + 7)(x − 7)"],
        ["Perfect square trinomial", "a² + 2ab + b² = (a + b)²", "x² + 10x + 25 = (x + 5)²"],
        ["Perfect square trinomial", "a² − 2ab + b² = (a − b)²", "x² − 6x + 9 = (x − 3)²"],
        ["Sum of squares", "a² + b² is prime", "x² + 4 does not factor"]
      ] } },
      { box: "<b>Worked example 3 (solve).</b> Solve x² − 5x = 14.<br>Set it equal to 0 first: x² − 5x − 14 = 0.<br>Factor: (x − 7)(x + 2) = 0. Zero product property: x − 7 = 0 or x + 2 = 0.<br><b>x = 7 or x = −2.</b> These are the zeros (x-intercepts) of y = x² − 5x − 14." }
    ] },
    { tab: "Visual", title: "Picture It: Factoring Is Finding the Sides of a Rectangle", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 600 300" role="img" aria-label="Area model of x squared plus 5x plus 6. A rectangle with sides x plus 3 across the top and x plus 2 down the side is split into four parts: a big x squared square, a 3x rectangle, a 2x rectangle, and a small rectangle of 6 unit squares.">
        <rect x="90" y="50" width="150" height="150" class="c1"/><rect x="240" y="50" width="90" height="150" class="c4"/><rect x="90" y="200" width="150" height="60" class="c4"/><rect x="240" y="200" width="90" height="60" class="c3"/>
        ${[0, 1, 2].map(i => [0, 1].map(j => `<rect x="${240 + i * 30}" y="${200 + j * 30}" width="30" height="30" fill="none" class="ink" stroke-width="1"/>`).join("")).join("")}
        <text x="165" y="130" text-anchor="middle" class="t" style="font-size:20px">x²</text><text x="285" y="130" text-anchor="middle" class="t" style="font-size:18px">3x</text><text x="165" y="236" text-anchor="middle" class="t" style="font-size:18px">2x</text><rect x="271" y="218" width="28" height="24" rx="6" fill="#fff" stroke="#e08a00"/><text x="285" y="236" text-anchor="middle" class="t">6</text>
        <text x="165" y="40" text-anchor="middle" class="t">x</text><text x="285" y="40" text-anchor="middle" class="t">+ 3</text><text x="74" y="130" text-anchor="end" class="t">x</text><text x="74" y="236" text-anchor="end" class="t">+ 2</text>
        <text x="360" y="90" class="t">Area = x² + 3x + 2x + 6</text><text x="360" y="114" class="t">= x² + 5x + 6</text><text x="360" y="150" class="t">Sides: (x + 2)(x + 3)</text>
        <text x="360" y="186" class="tm">2 · 3 = 6 (multiply to c)</text><text x="360" y="206" class="tm">2 + 3 = 5 (add to b)</text><text x="360" y="240" class="tm">área = base × altura</text></svg>`,
        cap: "Figure 1. Multiplying finds the area from the sides. Factoring works backward: it finds the sides from the area." },
      { table: { cap: "A factoring checklist", head: ["Step", "Ask yourself"], rowHead: true, rows: [
        ["1", "Is there a GCF? Factor it out first."],
        ["2", "Two terms? Look for a difference of squares."],
        ["3", "Three terms? Find the pair that multiplies to a·c and adds to b."],
        ["4", "Check by multiplying your factors back together."]
      ] } }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Factoring Lab and Box Method", blocks: [
      { box: "<b>Try this:</b> 1) In the Factoring Lab, press <b>Next example</b> and find the green row each time. 2) Set a = 1, b = 0, c = −16. Which pair adds to 0? 3) Find a trinomial that is prime (no green row). 4) In the Box Method, multiply your answer back to check it." },
      { sim: "factor", title: "Factoring Lab", tip: "Find two numbers that MULTIPLY to a·c and ADD to b.", a: 1, b: 7, c: 12 },
      { sim: "boxmult", title: "Box Method: Check by Multiplying", tip: "The two diagonal cells combine into the middle term.", a: 1, b: 4, c: 1, d: -7 }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Factor out the GCF: 12x³ + 18x²", opts: ["6x(2x² + 3x)", "6x²(2x + 3)", "3x²(4x + 6)", "x²(12x + 18)"], a: 1,
      why: "The GCF of 12 and 18 is 6, and the smallest power of x is x². 6x² · 2x = 12x³ and 6x² · 3 = 18x². (The other choices are not fully factored or are wrong.)" },
    { t: "mc", ref: 1, q: "Factor x² + 9x + 20.", opts: ["(x + 2)(x + 10)", "(x + 4)(x + 5)", "(x − 4)(x − 5)", "(x + 1)(x + 20)"], a: 1,
      why: "4 · 5 = 20 and 4 + 5 = 9." },
    { t: "mc", ref: 1, q: "Factor x² − 3x − 28.", opts: ["(x − 4)(x + 7)", "(x − 7)(x + 4)", "(x − 14)(x + 2)", "(x + 28)(x − 1)"], a: 1,
      why: "−7 · 4 = −28 and −7 + 4 = −3. c is negative, so the signs are different, and the bigger number (7) gets the sign of b (negative)." },
    { t: "inline", ref: 1, q: "Factor x² − 49.", text: "x² − 49 = (x + [[]])(x − [[]]). This pattern is called a difference of [[]].",
      blanks: [{ opts: ["7", "49", "24.5"], a: 0 }, { opts: ["7", "49", "1"], a: 0 }, { opts: ["cubes", "squares", "trinomials"], a: 1 }],
      why: "49 = 7², so x² − 7² = (x + 7)(x − 7). The middle terms +7x and −7x cancel." },
    { t: "grid", ref: 1, q: "Which pattern fits each polynomial?", cols: ["Difference of squares", "Perfect square trinomial", "Neither: use the pair method"],
      rows: [["x² − 36", 0], ["x² + 10x + 25", 1], ["x² + 5x + 6", 2], ["4x² − 9", 0], ["x² − 6x + 9", 1]],
      why: "x² − 36 = (x + 6)(x − 6) and 4x² − 9 = (2x + 3)(2x − 3). x² + 10x + 25 = (x + 5)² and x² − 6x + 9 = (x − 3)². x² + 5x + 6 = (x + 2)(x + 3) is a regular trinomial." },
    { t: "num", ref: 1, q: "Solve x² + 2x − 15 = 0. Enter the <b>positive</b> solution.", a: 3, tol: 0, pre: "x =",
      why: "(x + 5)(x − 3) = 0, so x = −5 or x = 3. The positive solution is 3." },
    { t: "mc", ref: 1, q: "Factor 2x² + 7x + 3.", opts: ["(2x + 3)(x + 1)", "(2x + 1)(x + 3)", "(x + 7)(2x + 3)", "(2x − 1)(x − 3)"], a: 1,
      why: "a · c = 6. 1 and 6 multiply to 6 and add to 7. Split: 2x² + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)." },
    { t: "hot", ref: 1, q: "A student solved x² − 5x = 14. Click the step with the mistake.",
      text: ["Step 1: x(x − 5) = 14", "Step 2: x = 14 or x − 5 = 14", "Step 3: x = 14 or x = 19"], a: [1],
      why: "The zero product property only works when the product equals 0. Step 2 uses 14 instead. The student should first write x² − 5x − 14 = 0, then (x − 7)(x + 2) = 0." },
    { t: "num", ref: 1, q: "Now solve x² − 5x = 14 correctly. Enter the <b>negative</b> solution.", a: -2, tol: 0, pre: "x =",
      why: "x² − 5x − 14 = 0 → (x − 7)(x + 2) = 0 → x = 7 or x = −2. Check: (−2)² − 5(−2) = 4 + 10 = 14 ✓" },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> In the Factoring Lab, set a = 1, b = 0, c = −16. Which pair is green, and what is the factored form?", opts: ["−2 and 8: (x − 2)(x + 8)", "−4 and 4: (x − 4)(x + 4)", "−1 and 16: (x − 1)(x + 16)", "No pair works"], a: 1,
      why: "−4 · 4 = −16 and −4 + 4 = 0. So x² − 16 = (x − 4)(x + 4), a difference of squares." },
    { t: "mc", ref: 1, q: "Which trinomial is <b>prime</b> (cannot be factored with integers)?", opts: ["x² + 6x + 5", "x² + 2x + 5", "x² + 4x + 4", "x² − 4"], a: 1,
      why: "The only factor pairs of 5 are 1 and 5 (sum 6) and −1 and −5 (sum −6). None add to 2. The others factor: (x + 1)(x + 5), (x + 2)², (x + 2)(x − 2)." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Solve x² − 9x + 18 = 0 by factoring. Explain the zero product property and why the equation must equal 0 before you use it.", min: 35,
      checks: [
        { label: "Correct factors (x − 3)(x − 6)", re: /\(x\s?[−-]\s?3\)\s?\(x\s?[−-]\s?6\)|\(x\s?[−-]\s?6\)\s?\(x\s?[−-]\s?3\)/i },
        { label: "Correct solutions x = 3 and x = 6", re: /3.{0,25}6|6.{0,25}3/ },
        { label: "Explains the zero product property", re: /zero product|product (is|equals|=) (0|zero)|one (of the )?factors? (must|has to) (be|equal) (0|zero)|times .{0,20}(0|zero)/i },
        { label: "Explains why it must equal 0", re: /only (works|zero)|other numbers?|many ways|not (just|only)|if it equals|must be 0|equal to 0|equal zero/i }
      ],
      rubric: "2 points: correct factoring and solutions plus a clear explanation. 1 point: correct solutions or explanation only. 0 points: neither.",
      why: "−3 · −6 = 18 and −3 + −6 = −9, so x² − 9x + 18 = (x − 3)(x − 6). If a product equals 0, one factor must be 0, so x = 3 or x = 6. This only works with 0: two numbers can multiply to 18 in many ways, but they can only multiply to 0 if one of them is 0.",
      model: "x² − 9x + 18 = (x − 3)(x − 6) = 0, because −3 and −6 multiply to 18 and add to −9. The zero product property says if two factors multiply to 0, then one of them must equal 0. So x − 3 = 0 or x − 6 = 0, and x = 3 or x = 6. The equation must equal 0 because only zero works this way; if it equaled 14, the factors could be 2 and 7 or 1 and 14 or many other numbers." }
  ]
};

/* =====================================================================
   UNIT 11. RADICALS & RATIONAL EXPONENTS
   ===================================================================== */
RC["sg-alg1-radicals"] = {
  subject: "Algebra 1", mins: 25,
  title: "Radicals & Rational Exponents",
  blurb: "Simplify square roots with factor trees, add and multiply radicals, rationalize denominators, rewrite rational exponents, and sort rational and irrational numbers.",
  eq: "How can we rewrite square roots and fractional exponents so they are simpler and easier to compare?",
  target: "I can simplify, add, subtract, and multiply radicals, rationalize a denominator, rewrite expressions with rational exponents, and explain whether a number is rational or irrational.",
  sources: [
    { tab: "Key Ideas", title: "Square Roots, Cube Roots, and Fraction Exponents", numbered: true, blocks: [
      { vocab: [
        ["square root", "√n is the number that, times itself, equals n. √49 = 7 because 7 · 7 = 49.", "raíz cuadrada"],
        ["perfect square", "A number that is a whole number squared: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, …", "cuadrado perfecto"],
        ["radicand", "The number inside the radical sign. In √72, the radicand is 72.", "radicando"],
        ["simplest radical form", "No perfect-square factor (other than 1) is left inside the root, and no root is in a denominator.", "forma radical simplificada"],
        ["irrational number", "A number that cannot be written as a fraction of integers. Its decimal never ends and never repeats, like √2 or π.", "número irracional"]
      ] },
      { p: "<b>Simplify a square root</b> by finding the largest perfect-square factor, or by making a factor tree and pulling out <b>pairs</b>. √(a · b) = √a · √b, so √72 = √(36 · 2) = √36 · √2 = <b>6√2</b>." },
      { box: "<b>Worked example 1.</b> Simplify √108.<br>Factor tree: 108 = 2 · 2 · 3 · 3 · 3. Pairs: (2 · 2) and (3 · 3). Each pair comes out as one number: 2 · 3 = 6. One 3 is left inside.<br>√108 = <b>6√3</b>. Check: 6² · 3 = 36 · 3 = 108 ✓" },
      { p: "<b>Add and subtract</b> only <b>like radicals</b> (same radicand), the same way you combine like terms: 3√5 + 4√5 = 7√5, just like 3x + 4x = 7x. Simplify first if needed: √8 + √18 = 2√2 + 3√2 = 5√2. But √2 + √3 cannot be combined." },
      { box: "<b>Worked example 2 (multiply).</b> 2√3 · 5√6 = (2 · 5)√(3 · 6) = 10√18 = 10 · 3√2 = <b>30√2</b>. Multiply the outside numbers, multiply the inside numbers, then simplify." },
      { box: "<b>Worked example 3 (rationalize).</b> Simplify 6 ÷ √3. Multiply the top and bottom by √3: (6√3) ÷ (√3 · √3) = 6√3 ÷ 3 = <b>2√3</b>. Now there is no root in the denominator." },
      { table: { cap: "Rational exponents: the bottom is the root, the top is the power", head: ["Exponent form", "Radical form", "Value"], rowHead: true, rows: [
        ["25^(1/2)", "√25", "5"],
        ["27^(1/3)", "∛27", "3"],
        ["8^(2/3)", "(∛8)² = 2²", "4"],
        ["16^(3/4)", "(⁴√16)³ = 2³", "8"],
        ["x^(2/3)", "∛(x²)", "—"]
      ] } },
      { p: "<b>Rational or irrational?</b> √49 = 7 is rational. √12 is irrational (12 is not a perfect square). Rational + rational is rational. Rational + irrational is always <b>irrational</b> (3 + √2). A rational number times an irrational number (not 0) is irrational, but irrational · irrational can be rational: √2 · √8 = √16 = 4." }
    ] },
    { tab: "Visual", title: "Picture It: Where Do Square Roots Live?", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 230" role="img" aria-label="Number line from 0 to 8. Perfect squares are marked: square root of 1 is 1, square root of 4 is 2, up to square root of 64 is 8. Irrational roots are placed between them: square root of 2 is about 1.41, square root of 10 about 3.16, square root of 20 about 4.47, square root of 40 about 6.32, and square root of 50 about 7.07.">
        <line x1="30" y1="120" x2="610" y2="120" class="ink"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(v => `<line x1="${40 + v * 70}" y1="110" x2="${40 + v * 70}" y2="130" class="ink"/><text x="${40 + v * 70}" y="150" text-anchor="middle" class="t">${v}</text><text x="${40 + v * 70}" y="170" text-anchor="middle" class="tm">${v ? "√" + v * v : ""}</text>`).join("")}
        ${[[2, 1.414, "#2b7de9"], [10, 3.162, "#e8368f"], [20, 4.472, "#e08a00"], [40, 6.325, "#1aa36f"], [50, 7.071, "#8a54e0"]].map(([n, v, c], i) => `<circle cx="${40 + v * 70}" cy="120" r="8" fill="${c}"/><line x1="${40 + v * 70}" y1="112" x2="${40 + v * 70}" y2="${62 - (i % 2) * 22}" stroke="${c}" stroke-width="2"/><text x="${40 + v * 70}" y="${56 - (i % 2) * 22}" text-anchor="middle" class="t" style="fill:${c}">√${n} ≈ ${v.toFixed(2)}</text>`).join("")}
        <text x="320" y="205" text-anchor="middle" class="tm">√40 is between √36 = 6 and √49 = 7, and closer to 6. (entre 6 y 7)</text></svg>`,
        cap: "Figure 1. Use the perfect squares you know to estimate any square root." },
      { fig: `<svg class="dg" viewBox="0 0 640 170" role="img" aria-label="Square root of 72 shown as pairs. 72 equals 2 times 2 times 2 times 3 times 3. The pair of 2s and the pair of 3s come out of the root as 2 and 3, giving 6. One 2 stays inside. The answer is 6 root 2.">
        <text x="20" y="40" class="t" style="font-size:18px">√72 = √( 2 · 2 · 2 · 3 · 3 )</text>
        <rect x="40" y="62" width="96" height="40" rx="10" class="c4"/><text x="88" y="88" text-anchor="middle" class="t">2 · 2</text><rect x="152" y="62" width="96" height="40" rx="10" class="c4"/><text x="200" y="88" text-anchor="middle" class="t">3 · 3</text><rect x="264" y="62" width="50" height="40" rx="10" class="c3"/><text x="289" y="88" text-anchor="middle" class="t">2</text>
        <text x="88" y="128" text-anchor="middle" class="tm">pair → 2 out</text><text x="200" y="128" text-anchor="middle" class="tm">pair → 3 out</text><text x="289" y="128" text-anchor="middle" class="tm">stays in</text>
        <text x="350" y="88" class="t" style="font-size:20px">= 2 · 3 · √2 = 6√2</text><text x="350" y="128" class="tm">un par sale de la raíz</text></svg>`,
        cap: "Figure 2. For square roots, each PAIR of matching primes leaves the root as one number. For cube roots, you need a group of THREE." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Radical Factor Tree", blocks: [
      { box: "<b>Try this:</b> 1) Tap 72 and watch the tree grow. Find the pairs. 2) Tap 180. What number comes out, and what stays in? 3) Set the root index to 3 and tap 128. A cube root needs groups of three. 4) Try a prime number like 97. What happens?" },
      { sim: "radtree", title: "Radical Factor Tree", tip: "Square root: pairs come out. Cube root: groups of three come out.", n: 72, i: 2 }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Simplify √50.", opts: ["25√2", "5√2", "2√5", "10√5"], a: 1,
      why: "50 = 25 · 2, and √25 = 5. So √50 = 5√2. Check: 5² · 2 = 50 ✓" },
    { t: "mc", ref: 1, q: "Simplify √108.", opts: ["6√3", "3√12", "9√2", "2√27"], a: 0,
      why: "108 = 36 · 3, so √108 = 6√3. (3√12 and 2√27 are equal to it but not simplified, because 12 and 27 still have perfect-square factors.)" },
    { t: "inline", ref: 1, q: "Simplify each expression.", text: "3√5 + 4√5 = [[]] &nbsp;·&nbsp; 2√3 · 5√3 = [[]] &nbsp;·&nbsp; √8 + √18 = [[]]",
      blanks: [{ opts: ["7√10", "7√5", "12√5"], a: 1 }, { opts: ["10√3", "30", "10√9"], a: 1 }, { opts: ["√26", "5√2", "6√2"], a: 1 }],
      why: "Like radicals add like terms: 7√5. 2 · 5 = 10 and √3 · √3 = 3, so 10 · 3 = 30. √8 = 2√2 and √18 = 3√2, so the sum is 5√2." },
    { t: "num", ref: 1, q: "Evaluate 27^(1/3).", a: 3, tol: 0,
      why: "An exponent of 1/3 means the cube root: ∛27 = 3, because 3 · 3 · 3 = 27." },
    { t: "num", ref: 1, q: "Evaluate 16^(3/4).", a: 8, tol: 0,
      why: "The bottom (4) is the root and the top (3) is the power: ⁴√16 = 2, and 2³ = 8." },
    { t: "mc", ref: 2, q: "Between which two whole numbers is √40?", opts: ["4 and 5", "5 and 6", "6 and 7", "20 and 21"], a: 2,
      why: "36 &lt; 40 &lt; 49, so √36 &lt; √40 &lt; √49, which means 6 &lt; √40 &lt; 7. (√40 ≈ 6.32.)" },
    { t: "grid", ref: 1, q: "Is each number rational or irrational?", cols: ["Rational", "Irrational"],
      rows: [["√49", 0], ["√12", 1], ["0.75", 0], ["π", 1], ["3 + √2", 1], ["√2 · √8", 0]],
      why: "√49 = 7 and 0.75 = 3/4 are rational. √12 and π never end or repeat. Rational + irrational (3 + √2) is irrational. √2 · √8 = √16 = 4 is rational." },
    { t: "mc", ref: 1, q: "Simplify 6 ÷ √3 (rationalize the denominator).", opts: ["2√3", "6√3", "√2", "3√6"], a: 0,
      why: "Multiply top and bottom by √3: 6√3 ÷ 3 = 2√3." },
    { t: "mc", ref: 1, q: "Which expression equals ∛(x²)?", opts: ["x^(3/2)", "x^(2/3)", "x⁶", "x^(1/6)"], a: 1,
      why: "The root (3) goes in the bottom of the fraction and the power (2) goes on top: x^(2/3)." },
    { t: "num", ref: 3, q: "<b>Use the simulation.</b> Tap 180 in the Radical Factor Tree. √180 = k√5. What is k?", a: 6, tol: 0, pre: "k =",
      why: "180 = 2 · 2 · 3 · 3 · 5. The pairs give 2 · 3 = 6 outside, and 5 stays inside: √180 = 6√5." },
    { t: "hot", ref: 1, q: "A student simplified √48. Click the step with the mistake.",
      text: ["Step 1: 48 = 16 · 3", "Step 2: √48 = √16 · √3", "Step 3: √48 = 16√3"], a: [2],
      why: "√16 is 4, not 16. The 16 must come out of the root as its square root: √48 = 4√3. Check: 4² · 3 = 48 ✓" },
    { t: "write", ref: 1, q: "<b>Brief write.</b> A classmate says √2 + √3 = √5. Explain why that is wrong. Use decimal approximations as evidence, and explain when radicals CAN be added.", min: 30,
      checks: [
        { label: "Says it is wrong / not equal", re: /wrong|not equal|≠|isn'?t|is not|doesn'?t|does not|can'?t|cannot/i },
        { label: "Uses decimals (1.41, 1.73, 2.24 or 3.14…)", re: /1\.4|1\.7|2\.2|3\.1/ },
        { label: "Explains like radicals (same number inside)", re: /like radical|same (number|radicand|root)|same .{0,20}inside/i }
      ],
      rubric: "2 points: shows with decimals that it is wrong and explains like radicals. 1 point: one part. 0 points: no correct reasoning.",
      why: "√2 ≈ 1.41 and √3 ≈ 1.73, so √2 + √3 ≈ 3.15. But √5 ≈ 2.24. You can only add radicals with the same radicand, like 2√3 + 5√3 = 7√3.",
      model: "That is wrong because √2 is about 1.41 and √3 is about 1.73, so √2 + √3 is about 3.14, but √5 is only about 2.24. They are not equal. You can only add radicals when they are like radicals with the same number inside, like 2√3 + 5√3 = 7√3, just like combining like terms." }
  ]
};

/* =====================================================================
   UNIT 12. STATISTICS & DATA
   ===================================================================== */
RC["sg-alg1-stats"] = {
  subject: "Algebra 1", mins: 25,
  title: "Statistics & Data: Center, Spread, and Scatter Plots",
  blurb: "Find the mean, median, IQR, and outliers, read box plots and two-way tables, and describe correlation and lines of best fit, without confusing correlation with causation.",
  eq: "How do we use numbers and graphs to describe data and make fair predictions?",
  target: "I can describe the center, spread, and shape of data with dot plots, box plots, and statistics, use two-way tables, and interpret correlation and a line of best fit in context.",
  sources: [
    { tab: "Key Ideas", title: "Describing One Set of Data", numbered: true, blocks: [
      { vocab: [
        ["mean", "The average: add all values and divide by how many there are.", "media / promedio"],
        ["median", "The middle value when the data is in order. With an even count, average the two middle values.", "mediana"],
        ["interquartile range (IQR)", "Q3 − Q1, the spread of the middle 50% of the data.", "rango intercuartil"],
        ["outlier", "A value far from the rest. Rule: below Q1 − 1.5·IQR or above Q3 + 1.5·IQR.", "valor atípico"],
        ["standard deviation", "About how far a typical value is from the mean. Bigger = more spread out.", "desviación estándar"],
        ["skewed", "Lopsided: a long tail of values on one side.", "sesgado"]
      ] },
      { box: "<b>Worked example 1 (five-number summary).</b> Data: 2, 4, 5, 7, 8, 9, 12 (7 values, already in order).<br>Minimum = 2, maximum = 12, median = 7 (the 4th value).<br>Lower half: 2, 4, 5 → <b>Q1 = 4</b>. Upper half: 8, 9, 12 → <b>Q3 = 9</b>. IQR = 9 − 4 = <b>5</b>.<br>Fences: 4 − 1.5(5) = −3.5 and 9 + 1.5(5) = 16.5. No value is outside, so there are no outliers." },
      { p: "<b>Which center should I use?</b> If the data is <b>symmetric</b>, the mean and median are close, and the mean with the standard deviation works well. If the data is <b>skewed</b> or has an <b>outlier</b>, use the <b>median and IQR</b>, because the mean is pulled toward the tail. Skewed right (tail of big values): mean &gt; median." },
      { h: "Two-way tables" },
      { table: { cap: "Do 9th and 10th graders play a school sport? (120 students surveyed)", head: ["", "Plays a sport", "No sport", "Total"], rowHead: true, rows: [
        ["9th grade", "30", "40", "70"], ["10th grade", "35", "15", "50"], ["Total", "65", "55", "120"]
      ] } },
      { p: "A <b>conditional relative frequency</b> looks only inside one row or column. Of the 70 ninth graders, 30 play a sport: 30 ÷ 70 ≈ 43%. Of the 50 tenth graders, 35 ÷ 50 = 70% play a sport. That difference suggests an <b>association</b> between grade and playing a sport in this group." },
      { h: "Two sets of data: scatter plots" },
      { p: "A <b>scatter plot</b> shows pairs of data. <b>Positive correlation:</b> as x goes up, y tends to go up. <b>Negative:</b> as x goes up, y tends to go down. The <b>correlation coefficient r</b> is between −1 and 1: close to 1 or −1 is strong, close to 0 is weak or none. A <b>line of best fit</b> like y = 2.5x + 60 can be used to predict. Its slope is the rate (2.5 points per hour) and its y-intercept is the starting value (60 points with 0 hours)." },
      { box: "<b>Correlation is not causation.</b> Ice cream sales and sunburns rise together, but ice cream does not cause sunburns. A third variable, hot sunny weather, causes both. Only a controlled experiment can show cause and effect." }
    ] },
    { tab: "Visual", title: "Picture It: Box Plots and Scatter Plots", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 640 170" role="img" aria-label="Box plot of the data 2, 4, 5, 7, 8, 9, 12 on a number line from 0 to 14. The whisker starts at the minimum 2, the box runs from Q1 equals 4 to Q3 equals 9 with the median line at 7, and the other whisker ends at the maximum 12. The box is labeled as the middle 50 percent, IQR 5.">
        <line x1="30" y1="130" x2="610" y2="130" class="ink"/>${[...Array(15).keys()].map(v => `<line x1="${40 + v * 40}" y1="124" x2="${40 + v * 40}" y2="136" class="ink"/><text x="${40 + v * 40}" y="155" text-anchor="middle" class="tm">${v}</text>`).join("")}
        <line x1="120" y1="80" x2="200" y2="80" class="ink" stroke-width="3"/><line x1="400" y1="80" x2="520" y2="80" class="ink" stroke-width="3"/><line x1="120" y1="64" x2="120" y2="96" class="ink" stroke-width="3"/><line x1="520" y1="64" x2="520" y2="96" class="ink" stroke-width="3"/>
        <rect x="200" y="56" width="200" height="48" class="c4"/><line x1="320" y1="56" x2="320" y2="104" stroke="#e8368f" stroke-width="4"/>
        ${[[120, "min 2"], [200, "Q1 4"], [320, "median 7"], [400, "Q3 9"], [520, "max 12"]].map(([x, l]) => `<text x="${x}" y="44" text-anchor="middle" class="t">${l}</text>`).join("")}
        <text x="300" y="20" text-anchor="middle" class="tm">box = middle 50% · IQR = 9 − 4 = 5 (rango intercuartil)</text></svg>`,
        cap: "Figure 1. The five-number summary: minimum, Q1, median, Q3, maximum. About 25% of the data is in each section." },
      { fig: `<svg class="dg" viewBox="0 0 560 330" role="img" aria-label="Scatter plot of hours studied from 0 to 10 versus test score from 50 to 100. Twelve points rise from about 61 at 1 hour to about 83 at 9 hours, showing a strong positive correlation. A line of best fit y equals 2.5x plus 60 runs through the points.">
        ${(() => { const X = h => 60 + h * 46, Y = s => 280 - (s - 50) * 5; let g = `<line x1="60" y1="280" x2="530" y2="280" class="ink"/><line x1="60" y1="30" x2="60" y2="280" class="ink"/>`;
          for (let h = 0; h <= 10; h++) g += `<text x="${X(h)}" y="298" text-anchor="middle" class="tm">${h}</text>`;
          for (let s = 50; s <= 100; s += 10) g += `<text x="52" y="${Y(s) + 4}" text-anchor="end" class="tm">${s}</text><line x1="60" x2="530" y1="${Y(s)}" y2="${Y(s)}" stroke="#ccc" stroke-width=".7"/>`;
          g += `<line x1="${X(0)}" y1="${Y(60)}" x2="${X(10)}" y2="${Y(85)}" stroke="#e8368f" stroke-width="3" stroke-dasharray="8 5"/>`;
          [[1, 61], [2, 65], [2, 68], [3, 67], [4, 71], [5, 70], [5, 76], [6, 75], [7, 79], [8, 78], [8, 83], [9, 83]].forEach(([h, s]) => g += `<circle cx="${X(h)}" cy="${Y(s)}" r="7" fill="#2b7de9" stroke="#fff" stroke-width="1.5"/>`);
          return g + `<text x="295" y="322" text-anchor="middle" class="t">Hours studied (horas de estudio)</text><text transform="translate(18 155) rotate(-90)" text-anchor="middle" class="t">Test score</text><text x="${X(6.2)}" y="${Y(91)}" class="t" style="fill:#e8368f">y = 2.5x + 60</text><text x="${X(6.2)}" y="${Y(87.5)}" class="tm">strong positive, r ≈ 0.96</text>`; })()}</svg>`,
        cap: "Figure 2. Each dot is one student. The dashed line of best fit predicts about 2.5 more points for each extra hour of study." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Data Lab", blocks: [
      { box: "<b>Try this:</b> 1) Start with Quiz scores. Read the mean and the median. 2) Press <b>Add an outlier</b>. Which changes more, the mean or the median? Is the 20 marked red? 3) Press <b>Skewed</b>. Is the mean bigger or smaller than the median? 4) Tap to add your own dots and try to make the mean and median equal." },
      { sim: "dotplot", title: "Data Lab: Center & Spread", tip: "The median and IQR resist outliers. The mean and standard deviation get pulled by them." }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Find the <b>mean</b> of 4, 8, 9, 10, 14.", a: 9, tol: 0,
      why: "4 + 8 + 9 + 10 + 14 = 45, and 45 ÷ 5 = 9." },
    { t: "num", ref: 1, q: "Find the <b>median</b> of 3, 7, 2, 9, 11, 6.", a: 6.5, tol: 0.01,
      why: "In order: 2, 3, 6, 7, 9, 11. There are 6 values, so average the two middle ones: (6 + 7) ÷ 2 = 6.5." },
    { t: "inline", ref: 1, q: "Data: 2, 4, 5, 7, 8, 9, 12.", text: "Q1 = [[]], Q3 = [[]], and IQR = [[]].",
      blanks: [{ opts: ["4", "4.5", "5"], a: 0 }, { opts: ["8.5", "9", "12"], a: 1 }, { opts: ["5", "10", "4.5"], a: 0 }],
      why: "The median is 7. Lower half 2, 4, 5 has median 4. Upper half 8, 9, 12 has median 9. IQR = 9 − 4 = 5." },
    { t: "mc", ref: 1, q: "A data set has Q1 = 10 and Q3 = 18. Which value would be an <b>outlier</b>?", opts: ["0", "25", "30", "31"], a: 3,
      why: "IQR = 8, and 1.5 · 8 = 12. Fences: 10 − 12 = −2 and 18 + 12 = 30. Only 31 is outside the fences (30 is exactly on the fence, so it is not an outlier)." },
    { t: "mc", ref: 1, q: "A new very large value is added to a data set. Which statistic changes the <b>most</b>?", opts: ["The median", "The mean", "Q1", "The mode"], a: 1,
      why: "The mean uses every value, so one extreme value pulls it strongly. The median and quartiles depend on position, so they barely move." },
    { t: "mc", ref: 1, q: "Home prices in a town are skewed right (a few very expensive homes). Which measure best describes a typical price?", opts: ["The mean", "The median", "The range", "The maximum"], a: 1,
      why: "Skewed data pulls the mean toward the tail. The median is resistant, so it better shows a typical value." },
    { t: "grid", ref: 1, q: "What kind of correlation would you expect?", cols: ["Positive", "Negative", "None"],
      rows: [["Hours studied and test score", 0], ["Outside temperature and hot chocolate sales", 1], ["Shoe size and the last digit of your phone number", 2], ["Height and arm span", 0], ["Hours of TV per night and hours of sleep", 1]],
      why: "Both increase together for study/score and height/arm span. Hotter weather means fewer hot chocolate sales, and more TV usually means less sleep (negative). Shoe size has nothing to do with a phone number." },
    { t: "mc", ref: 1, q: "A scatter plot has r = −0.92. How would you describe it?", opts: ["Weak positive", "Strong positive", "Weak negative", "Strong negative"], a: 3,
      why: "The negative sign means y tends to go down as x goes up. −0.92 is close to −1, so it is strong." },
    { t: "num", ref: 1, q: "Use the two-way table. What <b>percent</b> of 10th graders play a sport?", a: 70, tol: 0.5, unit: "%",
      why: "Look only at the 10th grade row: 35 of 50 play a sport. 35 ÷ 50 = 0.70 = 70%." },
    { t: "num", ref: 2, q: "Use the line of best fit y = 2.5x + 60 (x = hours studied). Predict the score for a student who studies 8 hours.", a: 80, tol: 0, unit: "points",
      why: "y = 2.5(8) + 60 = 20 + 60 = 80." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Start with Quiz scores, then press <b>Add an outlier</b> (a 20). What happens?", opts: ["The median rises a lot, but the mean stays the same", "The mean rises from about 8.6 to about 9.6, but the median only moves from 8 to 8.5", "Both stay exactly the same", "The IQR doubles"], a: 1,
      why: "The total grows by 20, so the mean jumps to 115 ÷ 12 ≈ 9.58. The median only shifts to the average of 8 and 9 = 8.5. The 20 is beyond the fence 10.5 + 1.5(3) = 15, so it is marked as an outlier." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> A news story says, “Towns that sell more ice cream have more sunburns, so ice cream causes sunburns.” Is this a good conclusion? Explain using the words <i>correlation</i> and <i>causation</i>.", min: 35,
      checks: [
        { label: "Says it is not a good conclusion", re: /not (a )?good|no[,. ]|wrong|doesn'?t|does not|isn'?t|is not|not cause|bad/i },
        { label: "Uses the word correlation", re: /correlat/i },
        { label: "Uses the word causation / cause", re: /caus/i },
        { label: "Names a third variable (heat, sun, summer, weather)", re: /heat|hot|sun(ny|shine)?\b|summer|weather|temperature|warm/i }
      ],
      rubric: "2 points: explains correlation vs. causation and names the lurking variable. 1 point: one part. 0 points: accepts the claim.",
      why: "The two variables are positively correlated, but correlation does not prove causation. Hot, sunny weather is a third (lurking) variable that makes people buy ice cream AND get sunburned.",
      model: "This is not a good conclusion. Ice cream sales and sunburns have a positive correlation, which means they go up together, but correlation is not causation. A third variable, hot sunny weather in the summer, causes people to buy more ice cream and also causes more sunburns. To show causation you would need a controlled experiment." }
  ]
};
