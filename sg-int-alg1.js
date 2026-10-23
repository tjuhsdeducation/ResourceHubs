/* =====================================================================
   ✏️ UNIT STUDY GUIDES: ALGEBRA 1 · INTEGER PRACTICE WITH VARIABLES
   About 25 minutes each. Key Ideas, practice notes, a Visual tab, and a
   🔬 Simulation tab on the left; 12 graded questions on the right.
   Simulations used here live in rc-sims-int.js.
   (See the top of rc-engine.js and sg-math.js for the formats.)
   ===================================================================== */

/* =====================================================================
   A1. ALGEBRA 1: INTEGER OPERATIONS & EVALUATING EXPRESSIONS
   ===================================================================== */
RC["sg-alg1-integers"] = {
  subject: "Algebra 1", mins: 25,
  title: "Integer Operations & Evaluating Expressions",
  blurb: "Master the sign rules for adding, subtracting, multiplying, and dividing integers, then substitute negative numbers into expressions without sign mistakes.",
  eq: "How do the rules for positive and negative numbers help us evaluate expressions correctly every time?",
  target: "I can add, subtract, multiply, and divide integers, and I can evaluate expressions by substituting negative values with parentheses and following the order of operations.",
  sources: [
    { tab: "Key Ideas", title: "The Integer Rules", numbered: true, blocks: [
      { vocab: [
        ["integer", "A whole number or its opposite: …, −3, −2, −1, 0, 1, 2, 3, …"],
        ["opposite (additive inverse)", "The number the same distance from 0 on the other side. The opposite of 6 is −6. A number plus its opposite is 0."],
        ["absolute value", "The distance a number is from 0. Distance is never negative: |−9| = 9 and |9| = 9."],
        ["zero pair", "A +1 and a −1 together. They add to 0, so they cancel."],
        ["evaluate", "Find the value of an expression by substituting numbers for the variables and simplifying."]
      ] },
      { p: "<b>Adding integers.</b> If the signs are the <b>same</b>, add the absolute values and keep the sign: −4 + (−7) = −11. If the signs are <b>different</b>, subtract the absolute values and keep the sign of the number with the larger absolute value: −9 + 5 = −4, because 9 − 5 = 4 and −9 is “bigger” in size." },
      { p: "<b>Subtracting integers.</b> Subtracting is the same as <b>adding the opposite</b>. Keep the first number, change subtraction to addition, and change the second number to its opposite (“keep, change, change”): 3 − 8 = 3 + (−8) = −5, and −5 − (−8) = −5 + 8 = 3." },
      { p: "<b>Multiplying and dividing.</b> Same signs give a <b>positive</b> answer. Different signs give a <b>negative</b> answer. With several factors, count the negatives: an <b>even</b> number of negative factors gives a positive product, and an <b>odd</b> number gives a negative product." },
      { box: "<b>Worked example 1.</b> −7 + 4 = <b>−3</b> (different signs: 7 − 4 = 3, keep the sign of −7).<br><b>Worked example 2.</b> −5 − (−8) = −5 + 8 = <b>3</b>.<br><b>Worked example 3.</b> (−3)(−4)(−2): three negative factors (odd), so the answer is negative. 3 · 4 · 2 = 24, so the product is <b>−24</b>.<br><b>Worked example 4.</b> −36 ÷ (−4) = <b>9</b> (same signs → positive)." },
      { box: "<b>Zero is neutral.</b> 0 is neither positive nor negative. Any number times 0 is 0. You can divide 0 by a number (0 ÷ −5 = 0), but you can never divide <b>by</b> 0." }
    ] },
    { tab: "Evaluating", title: "Substituting Negative Numbers into Expressions", numbered: true, blocks: [
      { p: "To <b>evaluate</b> an expression, replace each variable with its value <b>inside parentheses</b>, then follow the order of operations: <b>P</b>arentheses, <b>E</b>xponents, <b>M</b>ultiplication and <b>D</b>ivision (left to right), <b>A</b>ddition and <b>S</b>ubtraction (left to right)." },
      { p: "The parentheses matter most with exponents. In <b>(−3)²</b>, the base is −3, so (−3)(−3) = 9. In <b>−3²</b>, the base is only 3: square first, then take the opposite, so −3² = −9. That is why <b>−x²</b> is always negative or zero, even when x is negative: if x = −3, then −x² = −(−3)² = −9." },
      { box: "<b>Worked example 5.</b> Evaluate 2x² − 5x + 3 when x = −2.<br>Substitute with parentheses: 2(−2)² − 5(−2) + 3<br>Exponent: (−2)² = 4, so 2(4) − 5(−2) + 3<br>Multiply: 8 − (−10) + 3<br>Add the opposite: 8 + 10 + 3 = <b>21</b>" },
      { box: "<b>Worked example 6.</b> Evaluate 3a − b² when a = −2 and b = −3.<br>3(−2) − (−3)² = −6 − 9 = <b>−15</b>. (Careful: (−3)² = +9, and then the subtraction sign in front makes it −9.)" },
      { box: "<b>Worked example 7.</b> Evaluate |x − 9| + x when x = 4.<br>|4 − 9| + 4 = |−5| + 4 = 5 + 4 = <b>9</b>. Absolute value bars work like parentheses: simplify inside first." },
      { p: "<b>Common mistakes to avoid:</b> forgetting parentheses around a negative number, squaring before you apply the negative in (−x)², changing the sign of the first number when subtracting, and doing addition before multiplication." }
    ] },
    { tab: "Visual", title: "Sign Rules and a Real-World Example", blocks: [
      { table: { cap: "Sign rules for multiplying and dividing", head: ["Signs of the two numbers", "Sign of the answer", "Examples"], rows: [
        ["positive and positive", "positive (+)", "6 · 3 = 18 and 18 ÷ 3 = 6"],
        ["negative and negative", "positive (+)", "(−6)(−3) = 18 and −18 ÷ (−3) = 6"],
        ["positive and negative", "negative (−)", "6(−3) = −18 and 18 ÷ (−3) = −6"],
        ["negative and positive", "negative (−)", "(−6)(3) = −18 and −18 ÷ 3 = −6"]
      ], rowHead: true } },
      { fig: RCG.bar({ title: "Low Temperature Each Morning (practice data)", cats: ["Mon", "Tue", "Wed", "Thu", "Fri"], y: { min: -12, max: 12, step: 4, label: "Temperature (°F)" },
          series: [{ vals: [5, -3, -10, 2, -6], cls: "s1", label: "Morning low" }], values: true,
          alt: "Bar graph of morning low temperatures: Monday 5, Tuesday negative 3, Wednesday negative 10, Thursday 2, Friday negative 6 degrees Fahrenheit." }),
        cap: "Figure 1. Change from Wednesday to Thursday: 2 − (−10) = 2 + 10 = 12 degrees warmer. Average low: (5 − 3 − 10 + 2 − 6) ÷ 5 = −12 ÷ 5 = −2.4°F." },
      { box: "<b>Read the graph:</b> To find a change, always compute <b>new − old</b>. From Monday (5) to Tuesday (−3): −3 − 5 = −8, so the temperature dropped 8 degrees." }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Integer Hop and Substitution Station", blocks: [
      { box: "<b>Try this:</b> 1) In Integer Hop, set a = −4 and b = −6. Press <b>a − b</b>. Watch how subtracting −6 becomes adding +6. 2) Set a = 7 and b = −7 and press <b>a + b</b>. Count the zero pairs. 3) In Substitution Station, compare <b>−x²</b> and <b>(−x)²</b> for x = −3. Why are the answers different?" },
      { sim: "intline", title: "Integer Hop", tip: "Subtracting a negative hops to the RIGHT. Zero pairs (🟡+🔴) cancel out.", a: -4, b: -6, op: "-" },
      { sim: "evaluate", title: "Substitution Station", tip: "Every negative number goes in parentheses before you do any math.", exprs: ["neg-sq", "sq-neg", "lin", "quad", "abs", "dist"], x: -3, y: 2 }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "What is the value of −8 + 3 − (−6)?", opts: ["−11", "1", "−5", "17"], a: 1,
      why: "Work left to right: −8 + 3 = −5. Then −5 − (−6) = −5 + 6 = 1. Subtracting a negative is the same as adding a positive." },
    { t: "num", ref: 1, q: "Simplify: −4(−3)(−2) ÷ 6", a: -4, tol: 0.01, pre: "=",
      why: "−4 · −3 = 12. Then 12 · −2 = −24. Finally −24 ÷ 6 = −4. There are three negative factors (odd), so the answer is negative." },
    { t: "grid", ref: 2, q: "Is each value positive, negative, or zero? (Watch the parentheses!)", cols: ["Positive", "Negative", "Zero"],
      rows: [["(−2)⁵", 1], ["(−3)⁴", 0], ["−3⁴", 1], ["(−7)(0)(−2)", 2], ["(−1)¹⁰⁰", 0]],
      why: "(−2)⁵ has 5 negative factors (odd) → −32. (−3)⁴ has 4 (even) → 81. In −3⁴ the base is 3, so it is −(81) = −81. Anything times 0 is 0. (−1)¹⁰⁰ has an even number of factors → 1." },
    { t: "num", ref: 2, q: "Evaluate 2x² − 5x + 3 when x = −3.", a: 36, tol: 0.01, pre: "=",
      why: "2(−3)² − 5(−3) + 3 = 2(9) + 15 + 3 = 18 + 15 + 3 = 36. Remember: −5 times −3 is +15." },
    { t: "inline", ref: 2, q: "Evaluate 3a − b² when a = −2 and b = −3. Complete each step.", text: "3(−2) − (−3)² = [[]] − [[]] = [[]]",
      blanks: [{ opts: ["6", "−6"], a: 1 }, { opts: ["9", "−9"], a: 0 }, { opts: ["−15", "3", "−3", "15"], a: 0 }],
      why: "3(−2) = −6 and (−3)² = 9. So the expression is −6 − 9 = −15." },
    { t: "hot", ref: 2, q: "A student evaluated −x² + 4x when x = −5. Click the <b>one</b> step with the mistake.",
      text: ["Step 1: −(−5)² + 4(−5)", "Step 2: = 25 + 4(−5)", "Step 3: = 25 − 20", "Step 4: = 5"], a: [1],
      why: "In −x², the exponent happens first and then the negative: −(−5)² = −(25) = −25, not +25. The correct work is −25 + (−20) = −45." },
    { t: "num", ref: 2, q: "What is the correct value of −x² + 4x when x = −5?", a: -45, tol: 0.01, pre: "=",
      why: "−(−5)² + 4(−5) = −25 + (−20) = −45." },
    { t: "mc", ref: 3, q: "At 6 a.m. the temperature was −7°F. By noon it rose 15 degrees. By midnight it dropped 11 degrees from the noon temperature. What was the temperature at midnight?", opts: ["−3°F", "3°F", "−33°F", "19°F"], a: 0,
      why: "−7 + 15 = 8°F at noon. Then 8 − 11 = −3°F at midnight." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> In Integer Hop, set a = −4 and b = −6 and press <b>a − b</b>. What happens?", opts: ["Hop 6 to the left and land on −10", "Hop 6 to the right and land on 2", "Hop 4 to the right and land on 2", "Hop 6 to the right and land on −10"], a: 1,
      why: "−4 − (−6) = −4 + 6 = 2. Subtracting −6 means adding +6, which is a hop 6 to the right, from −4 to 2." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> expressions equal −12?", opts: ["(−3)(4)", "−24 ÷ (−2)", "−6 − 6", "(−2)² · 3", "−4 − (−8)"], a: [0, 2],
      why: "(−3)(4) = −12 and −6 − 6 = −12. But −24 ÷ (−2) = 12, (−2)² · 3 = 4 · 3 = 12, and −4 − (−8) = −4 + 8 = 4." },
    { t: "order", ref: 2, q: "Put the steps in order to evaluate 5 − 2(x − 4)² when x = 1.", items: [
        "Substitute with parentheses: 5 − 2((1) − 4)²",
        "Parentheses: 1 − 4 = −3, so 5 − 2(−3)²",
        "Exponent: (−3)² = 9, so 5 − 2(9)",
        "Multiply: 2(9) = 18, so 5 − 18",
        "Subtract: 5 − 18 = −13"],
      why: "Follow PEMDAS: parentheses first, then the exponent, then multiplication, then subtraction. The answer is −13." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Explain why −3² and (−3)² have different values. Use the words <b>base</b>, <b>exponent</b>, and <b>order of operations</b>, and give the value of each.", min: 30,
      checks: [
        { label: "Gives both values (−9 and 9)", re: /(−|-)\s?9[\s\S]*\b9\b|\b9\b[\s\S]*(−|-)\s?9/ },
        { label: "Explains the base (−3 vs. 3)", re: /base/i },
        { label: "Uses the order of operations / exponent first", re: /order of operations|pemdas|exponent (comes |goes |is done )?first|square (it )?first|before/i }
      ],
      rubric: "2 points: gives both values and explains that the parentheses make −3 the base, while in −3² the exponent is applied to 3 first and then the negative. 1 point: correct values with a partial explanation. 0 points: incorrect or no reasoning.",
      model: "(−3)² = 9 but −3² = −9. In (−3)², the parentheses make −3 the base, so the exponent tells you to multiply (−3)(−3) = 9. In −3², the base is only 3. The order of operations says to do the exponent first, so 3² = 9, and then the negative sign makes it −9.",
      why: "The parentheses decide what the base is. Exponents come before the negative sign in the order of operations unless parentheses say otherwise." }
  ]
};

/* =====================================================================
   A2. ALGEBRA 1: MULTI-STEP EQUATIONS & INEQUALITIES WITH INTEGERS
   ===================================================================== */
RC["sg-alg1-solving"] = {
  subject: "Algebra 1", mins: 25,
  title: "Multi-Step Equations & Inequalities with Integers",
  blurb: "Solve equations with negatives, the distributive property, and variables on both sides, then solve inequalities and learn exactly when to flip the sign.",
  eq: "How do we keep an equation balanced, and why does an inequality sign flip when we multiply or divide by a negative?",
  target: "I can solve multi-step equations and inequalities with integer coefficients, recognize equations with no solution or infinitely many solutions, and graph inequality solutions on a number line.",
  sources: [
    { tab: "Key Ideas", title: "Solving Multi-Step Equations", numbered: true, blocks: [
      { vocab: [
        ["inverse operations", "Operations that undo each other: addition and subtraction, multiplication and division."],
        ["distributive property", "a(b + c) = ab + ac. With a negative: −3(x − 4) = −3x + 12. The negative multiplies EVERY term."],
        ["like terms", "Terms with the same variable part, such as 5x and −2x. Combine them by adding their coefficients: 5x + (−2x) = 3x."],
        ["coefficient", "The number multiplied by a variable. In −7x, the coefficient is −7. In −x, it is −1."],
        ["identity / no solution", "An equation that is true for every value (like 0 = 0) is an identity with infinitely many solutions. One that is never true (like 0 = 6) has no solution."]
      ] },
      { p: "An equation is like a <b>balance</b>. Whatever you do to one side, you must do to the other side. The goal is to get the variable alone. A good order: 1) distribute, 2) combine like terms on each side, 3) move the variable terms to one side, 4) move the constants to the other side, 5) divide by the coefficient, 6) check." },
      { box: "<b>Worked example 1.</b> Solve −3(x − 4) + 2x = 20.<br>Distribute: −3x + 12 + 2x = 20 <span class='mu'>(−3 times −4 is +12)</span><br>Combine like terms: −x + 12 = 20<br>Subtract 12: −x = 8<br>Divide by −1: <b>x = −8</b><br>Check: −3(−8 − 4) + 2(−8) = −3(−12) − 16 = 36 − 16 = 20 ✓" },
      { box: "<b>Worked example 2.</b> Solve 5x − 7 = 2x + 11.<br>Subtract 2x: 3x − 7 = 11. Add 7: 3x = 18. Divide by 3: <b>x = 6</b>.<br>Check: 5(6) − 7 = 23 and 2(6) + 11 = 23 ✓" },
      { box: "<b>Special cases.</b> 2(x + 3) = 2x + 6 simplifies to 6 = 6, which is always true: <b>infinitely many solutions</b>. 4x − 1 = 4x + 5 simplifies to −1 = 5, which is never true: <b>no solution</b>." }
    ] },
    { tab: "Inequalities", title: "Solving and Graphing Inequalities", numbered: true, blocks: [
      { p: "Solve an inequality almost exactly like an equation. There is one big difference: when you <b>multiply or divide both sides by a negative number, flip the inequality sign</b>. Adding or subtracting (even a negative) never flips it." },
      { p: "Why? Start with 2 &lt; 5, which is true. Multiply both sides by −1: −2 and −5. On the number line, −2 is to the <b>right</b> of −5, so −2 &gt; −5. Multiplying by a negative reverses the order of numbers, so the sign must reverse too." },
      { box: "<b>Worked example 3.</b> Solve 4 − 2x ≥ 10.<br>Subtract 4: −2x ≥ 6<br>Divide by −2 and <b>flip</b>: <b>x ≤ −3</b><br>Check a value in the solution, like x = −4: 4 − 2(−4) = 4 + 8 = 12, and 12 ≥ 10 ✓" },
      { table: { cap: "Graphing inequalities on a number line", head: ["Symbol", "Meaning", "Circle", "Shade"], rows: [
        ["x &lt; a", "less than", "open ○ (a is not included)", "left"],
        ["x &gt; a", "greater than", "open ○", "right"],
        ["x ≤ a", "less than or equal to", "closed ● (a is included)", "left"],
        ["x ≥ a", "greater than or equal to", "closed ●", "right"]
      ], rowHead: true } },
      { p: "<b>Tip:</b> If the variable ends up on the right, like −3 &lt; x, read it from the variable’s point of view: x &gt; −3. The sign still points to the smaller number." }
    ] },
    { tab: "Visual", title: "Graph: The Solution x ≤ −3", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 600 110" role="img" aria-label="Number line from negative 8 to 4 with a closed circle at negative 3 and shading to the left, showing x is less than or equal to negative 3.">
        <line x1="20" y1="55" x2="580" y2="55" class="ink" stroke-width="2"/>
        ${[...Array(13).keys()].map(i => { const v = i - 8, x = 40 + i * 43; return `<line x1="${x}" y1="47" x2="${x}" y2="63" class="ink"/><text x="${x}" y="85" text-anchor="middle" class="tm">${v < 0 ? "−" + (-v) : v}</text>`; }).join("")}
        <line x1="25" y1="55" x2="255" y2="55" stroke="#2b7de9" stroke-width="8" stroke-linecap="round"/><path d="M28 45 L14 55 L28 65" fill="#2b7de9"/>
        <circle cx="255" cy="55" r="9" fill="#2b7de9" stroke="#fff" stroke-width="2"/><text x="255" y="30" text-anchor="middle" class="t">x ≤ −3</text></svg>`,
        cap: "Figure 1. The closed circle at −3 shows that −3 IS a solution. Every number to the left (−4, −5, −10, …) also works." },
      { table: { cap: "Testing values in 4 − 2x ≥ 10", head: ["x", "4 − 2x", "Is it ≥ 10?"], rows: [
        ["−5", "4 − 2(−5) = 14", "✅ yes"], ["−3", "4 − 2(−3) = 10", "✅ yes (equal)"], ["−2", "4 − 2(−2) = 8", "❌ no"], ["0", "4 − 2(0) = 4", "❌ no"]
      ], rowHead: true } }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Algebra Tile Balance and Flip the Sign", blocks: [
      { box: "<b>Try this:</b> 1) In the Tile Balance, start with 2x + 3 = −5. Press <b>−1</b> three times and watch the zero pairs cancel. Then divide by 2. 2) Press <b>New equation</b> until you get 3x − 4 = x + 6. Get the x-tiles on one side first. 3) In Flip the Sign, slide k from 3 down to −3. Watch the two dots switch order when k becomes negative." },
      { sim: "tiles", title: "Algebra Tile Balance", tip: "Do the SAME thing to both sides. A positive tile and a negative tile make a zero pair." },
      { sim: "ineq", title: "Flip the Sign?", tip: "Multiplying by a negative reverses the order of numbers on the number line.", k: -2 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "Solve: 7 − 3x = 22", a: -5, tol: 0.01, pre: "x =",
      why: "Subtract 7: −3x = 15. Divide by −3: x = −5. Check: 7 − 3(−5) = 7 + 15 = 22 ✓" },
    { t: "num", ref: 1, q: "Solve: −2(x + 6) = 4x", a: -2, tol: 0.01, pre: "x =",
      why: "Distribute: −2x − 12 = 4x. Add 2x: −12 = 6x. Divide by 6: x = −2. Check: −2(−2 + 6) = −8 and 4(−2) = −8 ✓" },
    { t: "hot", ref: 1, q: "A student solved −4(x − 3) = 28. Click the <b>one</b> step with the mistake.",
      text: ["Step 1: −4x − 12 = 28", "Step 2: −4x = 40", "Step 3: x = −10"], a: [0],
      why: "−4 times −3 is +12, not −12. The first line should be −4x + 12 = 28. Distributing a negative changes the sign of EVERY term inside the parentheses." },
    { t: "num", ref: 1, q: "What is the correct solution to −4(x − 3) = 28?", a: -4, tol: 0.01, pre: "x =",
      why: "−4x + 12 = 28, so −4x = 16 and x = −4. Check: −4(−4 − 3) = −4(−7) = 28 ✓" },
    { t: "mc", ref: 1, q: "Solve: 6x − 5 = 2(3x + 1)", opts: ["x = 7", "x = −1", "No solution", "Infinitely many solutions"], a: 2,
      why: "Distribute: 6x − 5 = 6x + 2. Subtract 6x: −5 = 2, which is never true. There is no solution." },
    { t: "grid", ref: 1, q: "How many solutions does each equation have?", cols: ["Exactly one", "No solution", "Infinitely many"],
      rows: [["3(x − 2) = 3x − 6", 2], ["4x + 1 = 4x − 1", 1], ["2x + 5 = −x − 4", 0], ["−(x − 8) = 8 − x", 2]],
      why: "3(x − 2) = 3x − 6 is an identity. 4x + 1 = 4x − 1 leads to 1 = −1 (false). 2x + 5 = −x − 4 gives 3x = −9, so x = −3. −(x − 8) = −x + 8 = 8 − x is an identity." },
    { t: "mc", ref: 2, q: "Solve: −5x + 3 &lt; 18", opts: ["x &lt; −3", "x &gt; −3", "x &lt; 3", "x &gt; 3"], a: 1,
      why: "Subtract 3: −5x &lt; 15. Divide by −5 and FLIP the sign: x &gt; −3. Check x = 0: −5(0) + 3 = 3, and 3 &lt; 18 ✓" },
    { t: "mc", ref: 2, q: "Which description matches the graph of x ≤ −2?", opts: ["Open circle at −2, shaded to the right", "Closed circle at −2, shaded to the left", "Closed circle at −2, shaded to the right", "Open circle at 2, shaded to the left"], a: 1,
      why: "≤ includes −2, so the circle is closed. “Less than” means smaller numbers, which are to the left." },
    { t: "inline", ref: 2, q: "Solve 9 − 4x ≥ −11.", text: "Subtract 9: −4x ≥ [[]]. Divide by −4 and [[]] the sign: x [[]] 5.",
      blanks: [{ opts: ["−20", "−2", "20"], a: 0 }, { opts: ["flip", "keep"], a: 0 }, { opts: ["≤", "≥", "&lt;", "&gt;"], a: 0 }],
      why: "−11 − 9 = −20, so −4x ≥ −20. Dividing by −4 flips the sign: x ≤ 5. Check x = 0: 9 − 0 = 9 ≥ −11 ✓" },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Press <b>New equation</b> in the Tile Balance until it shows 3x − 4 = x + 6, then solve it with the tiles. What is the solution?", opts: ["x = 5", "x = 1", "x = −5", "x = 2.5"], a: 0,
      why: "Subtract x from both sides: 2x − 4 = 6. Add 4 (four +1 tiles cancel the −1 tiles): 2x = 10. Divide by 2: x = 5. Check: 3(5) − 4 = 11 and 5 + 6 = 11 ✓" },
    { t: "num", ref: 1, q: "A submarine is 120 feet below sea level (−120 ft). It rises 15 feet every minute. After how many minutes will it be at −45 feet? Write and solve an equation.", a: 5, tol: 0.01, pre: "", unit: "minutes",
      why: "−120 + 15m = −45. Add 120: 15m = 75. Divide by 15: m = 5 minutes." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Explain why you must flip the inequality sign when you multiply or divide by a negative number. Use a true inequality with numbers (like 2 &lt; 5) as your example.", min: 30,
      checks: [
        { label: "Uses a numerical example", re: /\d\s*(<|&lt;|>|&gt;|less|greater)/i },
        { label: "Multiplies or divides by a negative", re: /negative|−\s?1|-\s?1|× ?−|times ?(−|-)/i },
        { label: "Explains that the order reverses / it would become false", re: /revers|switch|opposite (side|order)|flip|false|not true|order/i }
      ],
      rubric: "2 points: uses a numerical example, shows multiplying both sides by a negative, and explains that the order of the numbers reverses so the sign must flip to stay true. 1 point: states the rule with a partial explanation. 0 points: no reasoning.",
      model: "2 < 5 is true. If I multiply both sides by −1, I get −2 and −5. On the number line −2 is to the right of −5, so −2 > −5. If I kept the < sign, −2 < −5 would be false. Multiplying by a negative reverses the order of the numbers, so the inequality sign has to flip to keep the statement true.",
      why: "Multiplying by a negative reflects numbers across 0 on the number line, which reverses their order." }
  ]
};

/* =====================================================================
   A3. ALGEBRA 1: POLYNOMIAL OPERATIONS WITH INTEGER COEFFICIENTS
   ===================================================================== */
RC["sg-alg1-poly"] = {
  subject: "Algebra 1", mins: 25,
  title: "Polynomial Operations with Integer Coefficients",
  blurb: "Add, subtract, and multiply polynomials with negative coefficients, use the box method, and factor trinomials with negative constants.",
  eq: "How do the integer rules help us add, subtract, multiply, and factor polynomials without sign errors?",
  target: "I can add, subtract, and multiply polynomials with integer coefficients, and I can factor out a GCF (including a negative GCF) and factor trinomials of the form x² + bx + c.",
  sources: [
    { tab: "Key Ideas", title: "Adding and Subtracting Polynomials", numbered: true, blocks: [
      { vocab: [
        ["polynomial", "A sum of terms with whole-number exponents, like 3x² − 5x + 2."],
        ["term / coefficient", "In −5x, the term is −5x and the coefficient is −5. The sign in front of a term belongs to that term."],
        ["like terms", "Terms with the same variable and exponent: 4x² and −x² are like terms; 4x² and 4x are not."],
        ["degree", "The highest exponent of the variable. 3x² − 5x + 2 has degree 2."],
        ["standard form", "Terms written from the highest exponent to the lowest."]
      ] },
      { p: "<b>Adding:</b> combine like terms by adding their coefficients. Keep each sign attached to its term. (4x² − 3x + 1) + (−6x² + 3x − 8) = (4 − 6)x² + (−3 + 3)x + (1 − 8) = −2x² + 0x − 7 = <b>−2x² − 7</b>." },
      { p: "<b>Subtracting:</b> subtracting a polynomial means adding its <b>opposite</b>. Distribute the negative to <b>every</b> term in the second polynomial, then combine like terms." },
      { box: "<b>Worked example 1.</b> (3x² − 5x + 2) − (−x² + 4x − 7)<br>Distribute the negative: 3x² − 5x + 2 <b>+ x² − 4x + 7</b><br>Combine like terms: (3 + 1)x² + (−5 − 4)x + (2 + 7) = <b>4x² − 9x + 9</b>" },
      { box: "<b>Check by substitution:</b> Let x = 1. Original: (3 − 5 + 2) − (−1 + 4 − 7) = 0 − (−4) = 4. Answer: 4 − 9 + 9 = 4 ✓. Substituting a number is a quick way to catch sign mistakes." }
    ] },
    { tab: "Multiply & Factor", title: "Multiplying and Factoring", numbered: true, blocks: [
      { p: "<b>Multiplying:</b> multiply every term in the first polynomial by every term in the second, then combine like terms. The <b>box method</b> keeps it organized: write one factor across the top and the other down the side, fill in each cell, and add the cells. Multiply the signs carefully in every cell." },
      { box: "<b>Worked example 2.</b> (2x − 3)(x + 5)<br>Cells: 2x · x = 2x², 2x · 5 = 10x, −3 · x = −3x, −3 · 5 = −15<br>Combine: 2x² + 10x − 3x − 15 = <b>2x² + 7x − 15</b>" },
      { box: "<b>Special products.</b> (x − 6)² = (x − 6)(x − 6) = x² − 6x − 6x + 36 = <b>x² − 12x + 36</b>. It is NOT x² + 36 or x² − 36. (x + 4)(x − 4) = x² − 16 (the middle terms cancel)." },
      { p: "<b>Factoring</b> undoes multiplying. First look for a <b>greatest common factor (GCF)</b>. When the leading coefficient is negative, it is common to factor out a negative GCF: −6x³ + 9x² = <b>−3x²(2x − 3)</b>. Check: −3x² · 2x = −6x³ and −3x² · (−3) = +9x² ✓" },
      { box: "<b>Worked example 3.</b> Factor x² − 2x − 15.<br>Find two integers that <b>multiply to −15</b> and <b>add to −2</b>. Since the product is negative, the signs are different. Try −5 and 3: (−5)(3) = −15 ✓ and −5 + 3 = −2 ✓.<br>So x² − 2x − 15 = <b>(x − 5)(x + 3)</b>." },
      { table: { cap: "Sign clues for factoring x² + bx + c", head: ["c (constant)", "b (middle)", "Signs of the two numbers", "Example"], rows: [
        ["positive", "positive", "both positive", "x² + 8x + 15 = (x + 5)(x + 3)"],
        ["positive", "negative", "both negative", "x² − 8x + 15 = (x − 5)(x − 3)"],
        ["negative", "positive", "different; the larger is positive", "x² + 2x − 15 = (x + 5)(x − 3)"],
        ["negative", "negative", "different; the larger is negative", "x² − 2x − 15 = (x − 5)(x + 3)"]
      ], rowHead: true } }
    ] },
    { tab: "Visual", title: "The Box Method as Area", blocks: [
      { fig: `<svg class="dg" viewBox="0 0 520 260" role="img" aria-label="An area model for 2x minus 3 times x plus 5. Top labels 2x and negative 3. Side labels x and 5. Cells: 2x squared, negative 3x, 10x, negative 15. Total 2x squared plus 7x minus 15.">
        <text x="190" y="28" text-anchor="middle" class="t">2x</text><text x="370" y="28" text-anchor="middle" class="t">−3</text>
        <text x="72" y="100" text-anchor="middle" class="t">x</text><text x="72" y="200" text-anchor="middle" class="t">5</text>
        <rect x="100" y="40" width="180" height="110" fill="#fff2c4" stroke="#8a7f68" stroke-width="2"/><rect x="280" y="40" width="180" height="110" fill="#fde0dc" stroke="#8a7f68" stroke-width="2"/>
        <rect x="100" y="150" width="180" height="100" fill="#fff2c4" stroke="#8a7f68" stroke-width="2"/><rect x="280" y="150" width="180" height="100" fill="#fde0dc" stroke="#8a7f68" stroke-width="2"/>
        <text x="190" y="100" text-anchor="middle" class="t">2x²</text><text x="370" y="100" text-anchor="middle" class="t">−3x</text>
        <text x="190" y="205" text-anchor="middle" class="t">10x</text><text x="370" y="205" text-anchor="middle" class="t">−15</text></svg>`,
        cap: "Figure 1. (2x − 3)(x + 5). Yellow cells are positive and pink cells are negative. The two x-terms (−3x and 10x) combine to 7x, so the product is 2x² + 7x − 15." },
      { box: "<b>Pattern:</b> In (x + p)(x + q), the constant is p · q and the middle coefficient is p + q. That is why factoring looks for two numbers that <b>multiply to c</b> and <b>add to b</b>." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Box Method Multiplier", blocks: [
      { box: "<b>Try this:</b> 1) Set a = 2, b = −3, c = 1, d = 5 and match Figure 1. 2) Set a = 1, b = −6, c = 1, d = −6. Is (x − 6)² equal to x² + 36? 3) Find values where the middle term disappears (hint: try (x + 4)(x − 4)). 4) Set a = −2, b = 3, c = 1, d = −4 and record the product for question 10." },
      { sim: "boxmult", title: "Box Method Multiplier", tip: "Yellow cells are positive and red cells are negative. The two diagonal x-terms combine.", a: 2, b: -3, c: 1, d: 5 }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Simplify: (4x² − 3x + 1) + (−6x² + 3x − 8)", opts: ["−2x² − 7", "−2x² − 6x − 7", "10x² − 7", "−2x² + 9"], a: 0,
      why: "x²: 4 + (−6) = −2. x: −3 + 3 = 0. Constants: 1 + (−8) = −7. The answer is −2x² − 7." },
    { t: "mc", ref: 1, q: "Simplify: (5x − 2) − (3x − 9)", opts: ["2x − 11", "2x + 7", "8x − 11", "2x − 7"], a: 1,
      why: "Distribute the negative: 5x − 2 − 3x + 9 = 2x + 7. Subtracting −9 is adding 9." },
    { t: "hot", ref: 1, q: "A student simplified (2x² + 4x − 1) − (x² − 6x + 3). Click the <b>one</b> step with the mistake.",
      text: ["Step 1: 2x² + 4x − 1 − x² − 6x + 3", "Step 2: x² − 2x + 2", "Step 3: The answer is x² − 2x + 2."], a: [0],
      why: "The negative must go to EVERY term: −(x² − 6x + 3) = −x² + 6x − 3. The student only changed the first term. The correct answer is x² + 10x − 4." },
    { t: "inline", ref: 2, q: "Multiply: (x − 7)(x + 4)", text: "(x − 7)(x + 4) = x² [[]]x [[]]",
      blanks: [{ opts: ["− 3", "+ 3", "− 11", "+ 11"], a: 0 }, { opts: ["− 28", "+ 28", "− 3", "+ 11"], a: 0 }],
      why: "x · x = x², x · 4 = 4x, −7 · x = −7x, −7 · 4 = −28. Combine 4x − 7x = −3x. The product is x² − 3x − 28." },
    { t: "num", ref: 2, q: "When you multiply (3x − 4)(−2x + 5), what is the coefficient of the <b>x</b> term?", a: 23, tol: 0.01, pre: "",
      why: "The x-terms come from 3x · 5 = 15x and −4 · (−2x) = +8x. 15x + 8x = 23x. (Full product: −6x² + 23x − 20.)" },
    { t: "mc", ref: 2, q: "Which is equal to (x − 6)²?", opts: ["x² + 36", "x² − 36", "x² − 12x + 36", "x² − 12x − 36"], a: 2,
      why: "(x − 6)(x − 6) = x² − 6x − 6x + 36 = x² − 12x + 36. The last term is positive because (−6)(−6) = +36." },
    { t: "grid", ref: 2, q: "Match each trinomial with its factored form.", cols: ["(x + 5)(x − 3)", "(x − 5)(x + 3)", "(x − 5)(x − 3)", "(x + 5)(x + 3)"],
      rows: [["x² + 2x − 15", 0], ["x² − 8x + 15", 2], ["x² − 2x − 15", 1], ["x² + 8x + 15", 3]],
      why: "Look for numbers that multiply to c and add to b. +5 and −3 → +2. −5 and −3 → −8. −5 and +3 → −2. +5 and +3 → +8." },
    { t: "mc", ref: 2, q: "Factor out a negative GCF: −4x² + 12x", opts: ["−4x(x + 3)", "−4x(x − 3)", "4x(−x − 3)", "−4(x² − 12x)"], a: 1,
      why: "The GCF of −4x² and 12x is −4x. −4x² ÷ (−4x) = x and 12x ÷ (−4x) = −3. So −4x(x − 3). Check: −4x · x = −4x² and −4x · (−3) = +12x ✓" },
    { t: "multi", need: 2, ref: 2, q: "Which <b>two</b> binomials are factors of x² − x − 12?", opts: ["x − 4", "x + 4", "x + 3", "x − 3", "x − 12"], a: [0, 2],
      why: "Find two numbers that multiply to −12 and add to −1: −4 and 3. So x² − x − 12 = (x − 4)(x + 3)." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Set a = −2, b = 3, c = 1, d = −4. What is (−2x + 3)(x − 4)?", opts: ["−2x² + 11x − 12", "−2x² − 5x − 12", "−2x² + 11x + 12", "2x² − 11x − 12"], a: 0,
      why: "Cells: −2x · x = −2x², −2x · (−4) = +8x, 3 · x = 3x, 3 · (−4) = −12. Combine 8x + 3x = 11x: −2x² + 11x − 12." },
    { t: "num", ref: 2, q: "A rectangle is (x + 3) units long and (2x − 1) units wide. Write its area as a polynomial, then find the area when x = 4.", a: 49, tol: 0.01, pre: "Area =", unit: "square units",
      why: "(x + 3)(2x − 1) = 2x² − x + 6x − 3 = 2x² + 5x − 3. At x = 4: 2(16) + 20 − 3 = 49. Check: the sides are 7 and 7, and 7 · 7 = 49 ✓" },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain why you have to distribute the negative to <b>every</b> term when you subtract a polynomial. Use (5x + 2) − (3x − 4) as your example and give the correct answer.", min: 30,
      checks: [
        { label: "Gives the correct answer 2x + 6", re: /2x\s*\+\s*6/ },
        { label: "Explains the negative (or −1) multiplies every term / adding the opposite", re: /every|each|all|opposite|−\s?1|-\s?1|distribut/i },
        { label: "Points out −(−4) becomes +4", re: /\+\s?4|plus 4|positive 4|−\s?\(−\s?4\)|-\s?\(-\s?4\)/i }
      ],
      rubric: "2 points: correct answer and explains that subtracting means multiplying every term of the second polynomial by −1, including −4 becoming +4. 1 point: correct answer with limited explanation. 0 points: incorrect.",
      model: "Subtracting a polynomial means subtracting the WHOLE thing, so the minus sign is like multiplying every term by −1. (5x + 2) − (3x − 4) = 5x + 2 − 3x + 4, because −(−4) is +4. Then combine like terms: 2x + 6. If you only changed the 3x, you would get 2x − 2, which is wrong.",
      why: "The subtraction sign applies to the entire second polynomial, so each of its terms changes sign." }
  ]
};
