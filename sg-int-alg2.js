/* =====================================================================
   ✏️ UNIT STUDY GUIDES: ALGEBRA 2 · INTEGER PRACTICE WITH VARIABLES
   About 25 minutes each. Key Ideas, practice notes, a Visual tab, and a
   🔬 Simulation tab on the left; 12 graded questions on the right.
   Simulations used here live in rc-sims-int.js.
   ===================================================================== */

/* =====================================================================
   B1. ALGEBRA 2: FUNCTION NOTATION, OPERATIONS & COMPOSITION
   ===================================================================== */
RC["sg-alg2-functions"] = {
  subject: "Algebra 2", mins: 25,
  title: "Function Notation, Operations & Composition",
  blurb: "Evaluate functions at negative inputs and at expressions like f(x − 1), combine functions, compose them inside-out, and find inverses.",
  eq: "How does function notation help us track inputs and outputs, especially when the inputs are negative numbers or other functions?",
  target: "I can evaluate functions for integer and expression inputs, add, subtract, and multiply functions, find f(g(x)) and g(f(x)), and find the inverse of a linear function.",
  sources: [
    { tab: "Key Ideas", title: "Function Notation and Evaluating", numbered: true, blocks: [
      { vocab: [
        ["function", "A rule that gives exactly one output for each input."],
        ["f(x)", "Read “f of x.” It means the output of function f when the input is x. It does NOT mean f times x."],
        ["composition f(g(x))", "Put the output of g into f. Work from the inside out."],
        ["inverse function f⁻¹(x)", "A function that undoes f. If f(2) = 7, then f⁻¹(7) = 2. The −1 is NOT an exponent."],
        ["domain", "All the inputs a function can use. You can’t divide by 0 or take the square root of a negative (in the real numbers)."]
      ] },
      { p: "In this guide, <b>f(x) = x² − 3x + 2</b> and <b>g(x) = 2x − 5</b>." },
      { p: "To evaluate f(−4), replace <b>every</b> x with (−4), using parentheses: f(−4) = (−4)² − 3(−4) + 2. Then follow the order of operations and the integer rules." },
      { box: "<b>Worked example 1.</b> f(−4) = (−4)² − 3(−4) + 2 = 16 + 12 + 2 = <b>30</b>.<br>(Two common errors: writing −4² = −16, and writing −3(−4) = −12.)" },
      { p: "The input can be an <b>expression</b>. To find f(x − 1), replace every x with (x − 1) and simplify." },
      { box: "<b>Worked example 2.</b> f(x − 1) = (x − 1)² − 3(x − 1) + 2<br>= x² − 2x + 1 − 3x + 3 + 2<br>= <b>x² − 5x + 6</b><br>(−3 times −1 is +3. That sign is the one most people miss.)" },
      { box: "<b>Watch out:</b> g(−x) and −g(x) are different. g(−x) = 2(−x) − 5 = <b>−2x − 5</b> (change the input). −g(x) = −(2x − 5) = <b>−2x + 5</b> (change the output)." }
    ] },
    { tab: "Combine & Compose", title: "Operations, Composition, and Inverses", numbered: true, blocks: [
      { p: "<b>Operations.</b> (f + g)(x) = f(x) + g(x), (f − g)(x) = f(x) − g(x), and (fg)(x) = f(x) · g(x). When you subtract, put g(x) in parentheses so the negative reaches every term: (f − g)(x) = (x² − 3x + 2) − (2x − 5) = x² − 5x + 7." },
      { p: "<b>Composition.</b> f(g(x)) means “do g first, then f.” g is the <b>inside</b> function. The order matters: f(g(x)) and g(f(x)) are usually different." },
      { box: "<b>Worked example 3.</b> f(g(2)): First g(2) = 2(2) − 5 = −1. Then f(−1) = (−1)² − 3(−1) + 2 = 1 + 3 + 2 = <b>6</b>.<br>g(f(2)): First f(2) = 4 − 6 + 2 = 0. Then g(0) = 2(0) − 5 = <b>−5</b>.<br>Same input, different order, different answer." },
      { box: "<b>Worked example 4: inverse.</b> Find the inverse of g(x) = 2x − 5.<br>Write y = 2x − 5. Swap x and y: x = 2y − 5. Solve for y: x + 5 = 2y, so y = (x + 5) ÷ 2.<br><b>g⁻¹(x) = (x + 5)/2</b>. Check: g(4) = 3 and g⁻¹(3) = 8 ÷ 2 = 4 ✓" }
    ] },
    { tab: "Visual", title: "Tables for f, g, and f(g(x))", blocks: [
      { table: { cap: "f(x) = x² − 3x + 2 and g(x) = 2x − 5", head: ["x", "−2", "−1", "0", "1", "2", "3"], rows: [
        ["f(x)", "12", "6", "2", "0", "0", "2"],
        ["g(x)", "−9", "−7", "−5", "−3", "−1", "1"],
        ["f(g(x))", "f(−9) = 110", "f(−7) = 72", "f(−5) = 42", "f(−3) = 20", "f(−1) = 6", "f(1) = 0"]
      ], rowHead: true } },
      { fig: RCG.line({ title: "f(x) = x² − 3x + 2 and g(x) = 2x − 5", x: { min: -3, max: 6, step: 1, label: "x" }, y: { min: -10, max: 14, step: 2, label: "y" },
          series: [{ fn: x => x * x - 3 * x + 2, from: -2.2, to: 5.3, cls: "s1", label: "f(x)" }, { fn: x => 2 * x - 5, cls: "s2", label: "g(x)" }],
          marks: [{ x: -1, y: 6, text: "f(−1) = 6", cls: "s1" }, { x: 2, y: -1, text: "g(2) = −1", cls: "s2", dy: 16 }],
          alt: "A parabola f opening up with zeros at 1 and 2, and a line g with slope 2 and y-intercept negative 5. Point f of negative 1 equals 6 and g of 2 equals negative 1 are marked." }),
        cap: "Figure 1. To find f(g(2)), read g(2) = −1 from the line, then use −1 as the input to f: f(−1) = 6." }
    ] },
    { tab: "🔬 Simulation", title: "Simulations: Function Machines and Substitution Station", blocks: [
      { box: "<b>Try this:</b> 1) Use f(x) = 2x − 3 and g(x) = x² + 1 with input −2. Run f(g(x)), then g(f(x)). Are they the same? 2) Try f(x) = −x + 4 and g(x) = −2x with several inputs. 3) In Substitution Station, evaluate f(x) = 2x² − 3x − 5 at x = −2 and x = 3." },
      { sim: "machine", title: "Function Machines", tip: "The inside function goes first. Watch the number change in each machine.", f: "2x-3", g: "x^2+1", x: -2 },
      { sim: "evaluate", title: "Substitution Station", tip: "Put the input in parentheses everywhere x appears.", exprs: ["f", "g", "quad", "neg-sq"], x: -2 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "f(x) = x² − 3x + 2. Find f(−3).", a: 20, tol: 0.01, pre: "f(−3) =",
      why: "(−3)² − 3(−3) + 2 = 9 + 9 + 2 = 20." },
    { t: "num", ref: 1, q: "h(x) = −2x² + x − 4. Find h(−2).", a: -14, tol: 0.01, pre: "h(−2) =",
      why: "−2(−2)² + (−2) − 4 = −2(4) − 2 − 4 = −8 − 2 − 4 = −14. Square first, then multiply by −2." },
    { t: "mc", ref: 1, q: "g(x) = 2x − 5. What is g(−x)?", opts: ["−2x − 5", "2x + 5", "−2x + 5", "−(2x − 5)"], a: 0,
      why: "Replace x with −x: 2(−x) − 5 = −2x − 5. Note that −(2x − 5) = −2x + 5 is −g(x), which is different." },
    { t: "num", ref: 2, q: "Find f(g(1)) using f(x) = x² − 3x + 2 and g(x) = 2x − 5.", a: 20, tol: 0.01, pre: "f(g(1)) =",
      why: "Inside first: g(1) = 2 − 5 = −3. Then f(−3) = 9 + 9 + 2 = 20." },
    { t: "num", ref: 2, q: "Find g(f(−1)).", a: 7, tol: 0.01, pre: "g(f(−1)) =",
      why: "Inside first: f(−1) = 1 + 3 + 2 = 6. Then g(6) = 12 − 5 = 7." },
    { t: "mc", ref: 1, q: "f(x) = x² − 3x + 2. What is f(x + 2)?", opts: ["x² + x", "x² − 3x + 4", "x² + x + 12", "x² − x"], a: 0,
      why: "(x + 2)² − 3(x + 2) + 2 = x² + 4x + 4 − 3x − 6 + 2 = x² + x. Check with x = 1: f(3) = 9 − 9 + 2 = 2, and 1² + 1 = 2 ✓" },
    { t: "inline", ref: 2, q: "Find (f − g)(x).", text: "(x² − 3x + 2) − (2x − 5) = x² [[]]x [[]]",
      blanks: [{ opts: ["− 5", "− x", "+ 5", "− 1"], a: 0 }, { opts: ["+ 7", "− 3", "− 7", "+ 3"], a: 0 }],
      why: "Distribute the negative: x² − 3x + 2 − 2x + 5. Combine: −3x − 2x = −5x and 2 + 5 = 7. So x² − 5x + 7." },
    { t: "hot", ref: 2, q: "A student found g(f(−2)). Click the <b>one</b> step with the mistake.",
      text: ["Step 1: f(−2) = (−2)² − 3(−2) + 2", "Step 2: = 4 − 6 + 2 = 0", "Step 3: g(0) = 2(0) − 5", "Step 4: = −5"], a: [1],
      why: "−3(−2) = +6, not −6. So f(−2) = 4 + 6 + 2 = 12, and g(12) = 24 − 5 = 19." },
    { t: "num", ref: 2, q: "What is the correct value of g(f(−2))?", a: 19, tol: 0.01, pre: "g(f(−2)) =",
      why: "f(−2) = 4 + 6 + 2 = 12. Then g(12) = 2(12) − 5 = 19." },
    { t: "mc", ref: 2, q: "Find the inverse of k(x) = −3x + 6.", opts: ["k⁻¹(x) = −x/3 + 2", "k⁻¹(x) = 3x − 6", "k⁻¹(x) = −3x − 6", "k⁻¹(x) = x/3 − 2"], a: 0,
      why: "y = −3x + 6. Swap: x = −3y + 6. Solve: x − 6 = −3y, so y = (x − 6) ÷ (−3) = −x/3 + 2. Check: k(1) = 3 and k⁻¹(3) = −1 + 2 = 1 ✓" },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> With f(x) = 2x − 3, g(x) = x² + 1, and input −2, what are f(g(−2)) and g(f(−2))?", opts: ["f(g(−2)) = 7 and g(f(−2)) = 50", "Both equal 7", "f(g(−2)) = 50 and g(f(−2)) = 7", "f(g(−2)) = −1 and g(f(−2)) = 2"], a: 0,
      why: "f(g(−2)): g(−2) = 4 + 1 = 5, then f(5) = 10 − 3 = 7. g(f(−2)): f(−2) = −4 − 3 = −7, then g(−7) = 49 + 1 = 50." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Explain why f(g(x)) is usually NOT the same as g(f(x)). Use f(x) = x² and g(x) = x − 3 with the input x = −1 to support your answer.", min: 30,
      checks: [
        { label: "Computes f(g(−1)) = 16", re: /\b16\b/ },
        { label: "Computes g(f(−1)) = −2", re: /(−|-)\s?2\b/ },
        { label: "Explains that order / the inside function changes the result", re: /order|inside|first|second|outside/i }
      ],
      rubric: "2 points: both values are correct (16 and −2) and the explanation says the inside function is done first, so changing the order changes the input to the outer function. 1 point: one value correct or a partial explanation. 0 points: no reasoning.",
      model: "In composition you do the inside function first. f(g(−1)): g(−1) = −1 − 3 = −4, then f(−4) = 16. g(f(−1)): f(−1) = 1, then g(1) = 1 − 3 = −2. The answers are different because squaring and subtracting 3 happen in a different order, so the outside function gets a different input.",
      why: "Composition is like a recipe: doing the steps in a different order usually gives a different result." }
  ]
};

/* =====================================================================
   B2. ALGEBRA 2: EXPONENT RULES, NEGATIVE EXPONENTS & RADICALS
   ===================================================================== */
RC["sg-alg2-exponents"] = {
  subject: "Algebra 2", mins: 25,
  title: "Exponent Rules, Negative Exponents & Radicals",
  blurb: "Use the exponent rules with negative bases and negative exponents, tell (−b)ⁿ from −bⁿ, and connect rational exponents to roots, including roots of negative numbers.",
  eq: "What do negative bases, negative exponents, and fractional exponents really mean, and how do we simplify them without sign errors?",
  target: "I can apply the product, quotient, power, zero, and negative exponent rules, evaluate expressions with negative bases, and rewrite rational exponents as radicals.",
  sources: [
    { tab: "Key Ideas", title: "The Exponent Rules", numbered: true, blocks: [
      { vocab: [
        ["base and exponent", "In bⁿ, b is the base and n tells how many times b is used as a factor."],
        ["negative exponent", "b⁻ⁿ = 1/bⁿ. It means “take the reciprocal.” It does NOT make the number negative."],
        ["zero exponent", "b⁰ = 1 for any nonzero b."],
        ["rational exponent", "b^(m/n) = (ⁿ√b)^m. The denominator is the root; the numerator is the power."],
        ["imaginary unit i", "i = √−1, so i² = −1. It lets us take even roots of negative numbers."]
      ] },
      { table: { cap: "Exponent rules (b ≠ 0)", head: ["Rule", "In symbols", "Example"], rows: [
        ["Product", "bᵐ · bⁿ = bᵐ⁺ⁿ", "x⁴ · x⁻⁶ = x⁻² = 1/x²"],
        ["Quotient", "bᵐ ÷ bⁿ = bᵐ⁻ⁿ", "x³ ÷ x⁻² = x³⁻⁽⁻²⁾ = x⁵"],
        ["Power of a power", "(bᵐ)ⁿ = bᵐⁿ", "(x⁻³)⁴ = x⁻¹²"],
        ["Power of a product", "(ab)ⁿ = aⁿbⁿ", "(−2x)³ = (−2)³x³ = −8x³"],
        ["Zero", "b⁰ = 1", "(−7)⁰ = 1, but −7⁰ = −1"],
        ["Negative", "b⁻ⁿ = 1/bⁿ", "(−2)⁻³ = 1/(−8) = −1/8"]
      ], rowHead: true } },
      { p: "<b>Negative bases.</b> A negative base raised to an <b>even</b> power is positive: (−2)⁴ = 16. To an <b>odd</b> power it is negative: (−2)³ = −8. Without parentheses, the negative is NOT part of the base: −2⁴ = −(2⁴) = −16." },
      { box: "<b>Worked example 1.</b> (−2x³y⁻²)³ = (−2)³ · (x³)³ · (y⁻²)³ = −8x⁹y⁻⁶ = <b>−8x⁹ / y⁶</b>" },
      { box: "<b>Worked example 2.</b> 12x⁻³y⁵ ÷ (−4x²y⁻¹) = (12 ÷ −4) · x⁻³⁻² · y⁵⁻⁽⁻¹⁾ = −3x⁻⁵y⁶ = <b>−3y⁶ / x⁵</b>" }
    ] },
    { tab: "Radicals", title: "Rational Exponents and Roots", numbered: true, blocks: [
      { p: "A rational exponent combines a power and a root: b^(m/n) = (ⁿ√b)^m. It is usually easiest to take the root first, so the numbers stay small: 27^(2/3) = (∛27)² = 3² = <b>9</b>." },
      { p: "<b>Odd roots of negatives are real.</b> ∛−8 = −2, because (−2)(−2)(−2) = −8. So (−8)^(2/3) = (∛−8)² = (−2)² = <b>4</b> and (−27)^(1/3) = <b>−3</b>." },
      { p: "<b>Even roots of negatives are not real numbers.</b> No real number squared gives −49. Using the imaginary unit, √−49 = √49 · √−1 = <b>7i</b>." },
      { box: "<b>Worked example 3.</b> 16^(−3/4) = 1 ÷ 16^(3/4) = 1 ÷ (⁴√16)³ = 1 ÷ 2³ = <b>1/8</b>. The negative exponent means reciprocal; the 4 means fourth root; the 3 means cube." },
      { box: "<b>Worked example 4.</b> Simplify √72: find the largest perfect-square factor. 72 = 36 · 2, so √72 = √36 · √2 = <b>6√2</b>." }
    ] },
    { tab: "Visual", title: "The Pattern Behind Zero and Negative Exponents", blocks: [
      { table: { cap: "Powers of −2: moving left divides by −2 each time", head: ["Exponent", "3", "2", "1", "0", "−1", "−2", "−3"], rows: [
        ["(−2)ⁿ", "−8", "4", "−2", "1", "−1/2", "1/4", "−1/8"]
      ], rowHead: true } },
      { box: "<b>Read the pattern:</b> Each step to the right divides by −2. Dividing −2 by −2 gives 1, so (−2)⁰ = 1. Dividing again gives −1/2, so (−2)⁻¹ = −1/2. The sign alternates because the base is negative; the size shrinks because the exponent is negative." },
      { table: { cap: "Parentheses change everything", head: ["Expression", "Base", "Value"], rows: [
        ["(−3)²", "−3", "9"], ["−3²", "3", "−9"], ["(−3)³", "−3", "−27"], ["−3³", "3", "−27"], ["(−3)⁻²", "−3", "1/9"], ["−3⁻²", "3", "−1/9"]
      ], rowHead: true } }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Exponent Lab", blocks: [
      { box: "<b>Try this:</b> 1) Set the base to −3 and slide the exponent from 2 to 3 to 4. What happens to the sign? 2) Set the exponent to −2 for base 3 and for base −3. 3) Set the exponent to 0 for several bases. What is always true? 4) Look at the bar pattern: what happens each time you move one bar to the left?" },
      { sim: "expo", title: "Exponent Lab", tip: "Red bars are negative values. A negative exponent shrinks the value; it does not make it negative.", b: -3, n: 2 }
    ] }
  ],
  qs: [
    { t: "grid", ref: 1, q: "Is each value positive or negative?", cols: ["Positive", "Negative"],
      rows: [["(−4)³", 1], ["(−4)⁻²", 0], ["−4²", 1], ["(−1)⁰", 0], ["−(−2)⁴", 1]],
      why: "(−4)³ = −64 (odd power). (−4)⁻² = 1/16 (even power, reciprocal). −4² = −16 (base is 4). (−1)⁰ = 1. −(−2)⁴ = −(16) = −16." },
    { t: "num", ref: 1, q: "Evaluate 2⁻³. (You may type a fraction like 1/8 or a decimal.)", a: 0.125, tol: 0.001, pre: "2⁻³ =",
      why: "2⁻³ = 1 ÷ 2³ = 1/8 = 0.125. A negative exponent means reciprocal, not a negative answer." },
    { t: "mc", ref: 1, q: "Simplify: (x⁻⁴ · x⁶) ÷ x⁻³", opts: ["x⁵", "x⁻¹", "x⁻⁵", "x¹³"], a: 0,
      why: "Product: x⁻⁴⁺⁶ = x². Quotient: x²⁻⁽⁻³⁾ = x²⁺³ = x⁵. Subtracting a negative exponent adds." },
    { t: "mc", ref: 1, q: "Simplify: (−3a²b⁻¹)²", opts: ["9a⁴/b²", "−9a⁴/b²", "−6a⁴b⁻²", "9a⁴b²"], a: 0,
      why: "(−3)² = 9 (even power → positive). (a²)² = a⁴. (b⁻¹)² = b⁻² = 1/b². So 9a⁴/b²." },
    { t: "hot", ref: 1, q: "A student simplified (−2x⁻³)⁴. Click the <b>one</b> step with the mistake.",
      text: ["Step 1: (−2)⁴ · (x⁻³)⁴", "Step 2: = −16 · x⁻¹²", "Step 3: = −16/x¹²"], a: [1],
      why: "(−2)⁴ = (−2)(−2)(−2)(−2) = +16, because there are four (an even number of) negative factors. The answer is 16/x¹²." },
    { t: "num", ref: 2, q: "Evaluate 16^(3/4).", a: 8, tol: 0.01, pre: "=",
      why: "Root first: ⁴√16 = 2. Then cube: 2³ = 8." },
    { t: "num", ref: 2, q: "Evaluate (−27)^(1/3).", a: -3, tol: 0.01, pre: "=",
      why: "The exponent 1/3 means cube root. (−3)(−3)(−3) = −27, so ∛−27 = −3. Odd roots of negative numbers are real." },
    { t: "mc", ref: 2, q: "Evaluate 9^(−3/2).", opts: ["1/27", "−27", "−1/27", "27"], a: 0,
      why: "9^(−3/2) = 1 ÷ 9^(3/2) = 1 ÷ (√9)³ = 1 ÷ 27. The negative exponent gives a reciprocal, so the answer is positive." },
    { t: "multi", need: 2, ref: 2, q: "Which <b>two</b> expressions equal 4?", opts: ["(−2)²", "−2²", "8^(2/3)", "16^(−1/2)", "(−64)^(1/3)"], a: [0, 2],
      why: "(−2)² = 4 and 8^(2/3) = (∛8)² = 2² = 4. But −2² = −4, 16^(−1/2) = 1/4, and (−64)^(1/3) = −4." },
    { t: "mc", ref: 2, q: "Simplify √−49.", opts: ["−7", "7i", "−7i", "It has no value of any kind."], a: 1,
      why: "√−49 = √49 · √−1 = 7i. It is not −7, because (−7)² = +49, not −49." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Set the base to −3. As the exponent goes from 2 to 3 to 4, what values appear?", opts: ["9, −27, 81", "−9, −27, −81", "9, 27, 81", "−9, 27, −81"], a: 0,
      why: "(−3)² = 9, (−3)³ = −27, (−3)⁴ = 81. The sign alternates: even powers are positive, odd powers are negative." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> A classmate says, “A negative exponent makes the answer negative.” Explain why that is wrong. Use 2⁻³ and (−2)⁻³ in your explanation.", min: 30,
      checks: [
        { label: "Says 2⁻³ = 1/8 (positive)", re: /1\s?\/\s?8|0?\.125|one.?eighth/i },
        { label: "Says (−2)⁻³ = −1/8", re: /(−|-)\s?1\s?\/\s?8|(−|-)\s?0?\.125|negative one.?eighth/i },
        { label: "Explains that a negative exponent means reciprocal / the base decides the sign", re: /reciprocal|1 ?(÷|\/|over)|flip|divide|base/i }
      ],
      rubric: "2 points: shows 2⁻³ = 1/8 and (−2)⁻³ = −1/8 and explains that the negative exponent means reciprocal while the sign comes from the base. 1 point: one correct example with partial reasoning. 0 points: no reasoning.",
      model: "A negative exponent means take the reciprocal, not make it negative. 2⁻³ = 1/2³ = 1/8, which is positive. (−2)⁻³ = 1/(−2)³ = 1/(−8) = −1/8, which is negative, but only because the base −2 is negative and the power is odd. The sign comes from the base, and the negative exponent just flips the number into a fraction.",
      why: "The exponent’s sign controls reciprocal vs. not; the base’s sign and whether the power is even or odd control the answer’s sign." }
  ]
};

/* =====================================================================
   B3. ALGEBRA 2: POLYNOMIAL DIVISION, THE REMAINDER THEOREM & ZEROS
   ===================================================================== */
RC["sg-alg2-polydiv"] = {
  subject: "Algebra 2", mins: 25,
  title: "Polynomial Division, the Remainder Theorem & Zeros",
  blurb: "Divide polynomials with synthetic division using negative values of c, use the Remainder and Factor Theorems, and find all the zeros of a cubic.",
  eq: "How does dividing a polynomial help us find its factors and zeros, and how does the remainder connect to evaluating p(c)?",
  target: "I can use synthetic division to divide by x − c (including negative c), apply the Remainder and Factor Theorems, and use one known zero to find all the zeros of a cubic polynomial.",
  sources: [
    { tab: "Key Ideas", title: "Synthetic Division", numbered: true, blocks: [
      { vocab: [
        ["synthetic division", "A shortcut for dividing a polynomial by a linear factor x − c, using only the coefficients."],
        ["c", "The number you divide by. For x − 3, c = 3. For x + 3, c = −3, because x + 3 = x − (−3)."],
        ["placeholder zero", "If a power of x is missing, write 0 for its coefficient. x³ − 7x + 6 has coefficients 1, 0, −7, 6."],
        ["quotient and remainder", "The bottom row gives the quotient’s coefficients (one degree lower) and the remainder (last number)."],
        ["zero (root)", "A value of x that makes p(x) = 0."]
      ] },
      { p: "<b>Steps:</b> 1) Write c on the left and the coefficients across the top (with placeholder zeros). 2) Bring down the first coefficient. 3) <b>Multiply</b> it by c and write the product under the next coefficient. 4) <b>Add</b> down the column. 5) Repeat multiply–add to the end. The last number is the remainder." },
      { box: "<b>Worked example 1.</b> (x³ − 2x² − 5x + 6) ÷ (x − 1), so c = 1.<br>Coefficients: 1, −2, −5, 6<br>Bring down 1 → 1 · 1 = 1, −2 + 1 = −1 → −1 · 1 = −1, −5 + (−1) = −6 → −6 · 1 = −6, 6 + (−6) = 0<br>Bottom row: 1, −1, −6 | <b>0</b>. Quotient: <b>x² − x − 6</b>, remainder 0.<br>Factor the quotient: (x − 3)(x + 2). The zeros are <b>1, 3, and −2</b>." },
      { box: "<b>Worked example 2 (negative c).</b> (2x³ + 3x² − 11x − 6) ÷ (x + 3), so c = <b>−3</b>.<br>Bring down 2 → 2(−3) = −6, 3 + (−6) = −3 → −3(−3) = 9, −11 + 9 = −2 → −2(−3) = 6, −6 + 6 = 0<br>Quotient: <b>2x² − 3x − 2</b> = (2x + 1)(x − 2). Zeros: <b>−3, −1/2, and 2</b>." }
    ] },
    { tab: "Theorems", title: "The Remainder and Factor Theorems", numbered: true, blocks: [
      { p: "<b>Remainder Theorem:</b> When p(x) is divided by x − c, the remainder equals <b>p(c)</b>. So synthetic division is a fast way to evaluate a polynomial, and evaluating is a way to check your division." },
      { box: "<b>Worked example 3.</b> p(x) = x³ − 3x² + 4. Find p(−2).<br>Direct: (−2)³ − 3(−2)² + 4 = −8 − 12 + 4 = <b>−16</b>.<br>Synthetic with c = −2 and coefficients 1, −3, 0, 4: bring down 1 → −2, −5 → 10, 10 → −20, −16. The remainder is −16 ✓" },
      { p: "<b>Factor Theorem:</b> (x − c) is a factor of p(x) <b>exactly when p(c) = 0</b>, which means the remainder is 0. A remainder of 0 tells you c is a zero, and the quotient is the other factor." },
      { p: "<b>Finding all zeros:</b> If you know one zero of a cubic, divide it out with synthetic division. The quotient is a quadratic; factor it or use the quadratic formula to find the other two zeros." }
    ] },
    { tab: "Visual", title: "Graph: Zeros of a Cubic", blocks: [
      { fig: RCG.line({ title: "p(x) = x³ − 2x² − 5x + 6", x: { min: -4, max: 5, step: 1, label: "x" }, y: { min: -10, max: 12, step: 2, label: "p(x)" },
          series: [{ fn: x => x ** 3 - 2 * x * x - 5 * x + 6, from: -2.5, to: 3.75, cls: "s1", label: "p(x)" }],
          marks: [{ x: -2, y: 0, text: "(−2, 0)", dy: -10, anchor: "end", dx: -6 }, { x: 1, y: 0, text: "(1, 0)", dy: -10 }, { x: 3, y: 0, text: "(3, 0)", dy: 16 }],
          alt: "A cubic curve crossing the x-axis at negative 2, 1, and 3. It rises to a local maximum between negative 2 and 1 and dips to a local minimum between 1 and 3." }),
        cap: "Figure 1. The zeros −2, 1, and 3 are exactly the values of c that give a remainder of 0. p(x) = (x + 2)(x − 1)(x − 3)." },
      { table: { cap: "Testing values of c for p(x) = x³ − 2x² − 5x + 6", head: ["c", "−2", "−1", "0", "1", "2", "3"], rows: [
        ["p(c) = remainder", "0 ✅", "8", "6", "0 ✅", "−4", "0 ✅"]
      ], rowHead: true } }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Synthetic Division Step-Through", blocks: [
      { box: "<b>Try this:</b> 1) Choose P1 (x³ − 2x² − 5x + 6) with c = 1 and press <b>Next step</b> until done. 2) Change c to −2. Is (x + 2) a factor? 3) Choose P3 (x³ − 7x + 6), which needs a placeholder 0. Find all three values of c from −5 to 5 that give remainder 0. 4) Choose P2 and try c = −3." },
      { sim: "synth", title: "Synthetic Division Step-Through", tip: "Multiply diagonally, add straight down. The last number is the remainder, which equals p(c).", c: 1 }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which setup is correct for (x³ − 7x + 6) ÷ (x + 3)?", opts: ["−3 | 1  0  −7  6", "3 | 1  0  −7  6", "−3 | 1  −7  6", "3 | 1  −7  6"], a: 0,
      why: "x + 3 = x − (−3), so c = −3. There is no x² term, so a placeholder 0 is needed: 1, 0, −7, 6." },
    { t: "num", ref: 2, q: "Find the remainder when x³ − 3x² + 4 is divided by x + 2.", a: -16, tol: 0.01, pre: "Remainder =",
      why: "By the Remainder Theorem, the remainder is p(−2) = −8 − 12 + 0 + 4 = −16." },
    { t: "inline", ref: 1, q: "Divide (x³ − 2x² − 5x + 6) ÷ (x − 3) with synthetic division.", text: "Bottom row: 1, [[]], [[]], remainder [[]]",
      blanks: [{ opts: ["1", "−5", "5", "−1"], a: 0 }, { opts: ["−2", "2", "−8", "8"], a: 0 }, { opts: ["0", "12", "−12", "6"], a: 0 }],
      why: "c = 3. Bring down 1 → 3, −2 + 3 = 1 → 3, −5 + 3 = −2 → −6, 6 + (−6) = 0. Quotient x² + x − 2, remainder 0." },
    { t: "mc", ref: 2, q: "Is (x + 1) a factor of p(x) = x³ + 2x² − x − 2?", opts: ["Yes, because p(−1) = 0.", "No, because p(1) ≠ 0.", "Yes, because p(1) = 0.", "No, because p(−1) = −4."], a: 0,
      why: "For (x + 1), c = −1. p(−1) = −1 + 2 + 1 − 2 = 0, so (x + 1) is a factor. (p(1) = 0 too, but that tells us about (x − 1).)" },
    { t: "num", ref: 2, q: "p(x) = 2x³ − x² + 3x − 10. Find p(−2).", a: -36, tol: 0.01, pre: "p(−2) =",
      why: "2(−8) − (4) + 3(−2) − 10 = −16 − 4 − 6 − 10 = −36. Check with synthetic division: 2 → −4, −5 → 10, 13 → −26, −36 ✓" },
    { t: "hot", ref: 1, q: "A student divided (x³ − 4x + 3) by (x − 1). Click the <b>one</b> step with the mistake.",
      text: ["Step 1: Write c = 1 and the coefficients 1, −4, 3.", "Step 2: Bring down 1. 1 · 1 = 1, and −4 + 1 = −3.", "Step 3: −3 · 1 = −3, and 3 + (−3) = 0.", "Step 4: The quotient is x − 3, with remainder 0."], a: [0],
      why: "The x² term is missing, so a placeholder 0 is required: 1, 0, −4, 3. The correct bottom row is 1, 1, −3 | 0, so the quotient is x² + x − 3." },
    { t: "grid", ref: 2, q: "p(x) = x³ + 2x² − 5x − 6. Is each value of x a zero of p?", cols: ["Zero (gives a factor)", "Not a zero"],
      rows: [["x = −1", 0], ["x = 1", 1], ["x = 2", 0], ["x = −3", 0]],
      why: "p(−1) = −1 + 2 + 5 − 6 = 0. p(1) = 1 + 2 − 5 − 6 = −8. p(2) = 8 + 8 − 10 − 6 = 0. p(−3) = −27 + 18 + 15 − 6 = 0. So p(x) = (x + 1)(x − 2)(x + 3)." },
    { t: "mc", ref: 2, q: "One zero of x³ − 7x + 6 is x = 1. What are ALL the zeros?", opts: ["1, 2, −3", "−1, −2, 3", "1, −2, 3", "1, 6, −7"], a: 0,
      why: "Synthetic with c = 1 and 1, 0, −7, 6: bottom row 1, 1, −6 | 0. Quotient x² + x − 6 = (x + 3)(x − 2). Zeros: 1, −3, 2." },
    { t: "mc", ref: 1, q: "What is the quotient of (2x³ + 3x² − 11x − 6) ÷ (x − 2)?", opts: ["2x² + 7x + 3", "2x² − x − 9", "2x³ + 7x² + 3x", "2x² + 3x − 11"], a: 0,
      why: "c = 2: bring down 2 → 4, 3 + 4 = 7 → 14, −11 + 14 = 3 → 6, −6 + 6 = 0. Quotient 2x² + 7x + 3 (one degree lower), remainder 0." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Choose P1 (x³ − 2x² − 5x + 6) and set c = −2. Step through to the end. What do you find?", opts: ["Remainder 0, so (x + 2) is a factor", "Remainder 12, so it is not a factor", "Remainder −4, so it is not a factor", "Remainder 0, so (x − 2) is a factor"], a: 0,
      why: "Bring down 1 → −2, −2 + (−2) = −4 → 8, −5 + 8 = 3 → −6, 6 + (−6) = 0. With c = −2 the factor is (x + 2), not (x − 2)." },
    { t: "num", ref: 2, q: "x = 2 is a zero of x³ − 4x² + x + 6. Find the other two zeros. What is their <b>sum</b>?", a: 2, tol: 0.01, pre: "Sum =",
      why: "Synthetic with c = 2: 1 → 2, −2 → −4, −3 → −6, 0. Quotient x² − 2x − 3 = (x − 3)(x + 1). The other zeros are 3 and −1, and 3 + (−1) = 2." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Explain the Remainder Theorem in your own words. Use p(x) = x² − 5x + 2 divided by (x + 1) as your example, and show that the remainder equals p(−1).", min: 30,
      checks: [
        { label: "Finds the remainder / p(−1) = 8", re: /\b8\b/ },
        { label: "Uses c = −1 for (x + 1)", re: /(−|-)\s?1/ },
        { label: "States that the remainder equals p(c)", re: /remainder[\s\S]{0,40}(equal|same|=)|p\s?\(\s?(−|-)?\s?\w\s?\)\s?(=|is|equals)/i }
      ],
      rubric: "2 points: correctly finds 8 both by division and by evaluating p(−1), and states that the remainder from dividing by x − c is p(c). 1 point: correct value with a partial explanation. 0 points: no reasoning.",
      model: "The Remainder Theorem says that when you divide p(x) by x − c, the remainder is the same as p(c). For x + 1, c = −1. Synthetic division with 1, −5, 2: bring down 1 → −1, −6 → 6, 8. The remainder is 8. Evaluating directly: p(−1) = 1 + 5 + 2 = 8. They match.",
      why: "Dividing by x − c and plugging in c are connected: p(x) = (x − c)q(x) + r, so p(c) = 0 · q(c) + r = r." }
  ]
};
