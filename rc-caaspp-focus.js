/* =====================================================================
   ✏️ CAASPP FOCUS SETS: the areas California 11th graders miss most
   Based on the 2024–25 statewide Grade 11 results (CAASPP Detailed Test
   Results, caaspp-elpac.ets.org). Percent of students BELOW STANDARD:
     Math   Concepts & Procedures 47.6% · Problem Solving/Modeling &
            Data Analysis 31.7% · Communicating Reasoning 28.2%
     ELA    Writing 24.1% · Reading 20.2% · Research 15.3% · Listening 13.5%
     CAST   Physical 43.8% · Earth & Space 43.6% · Life 42.5% (grade 11)
   The state reports results by area, not by single question, so each set
   practices the skills inside the weakest areas.
   Uses MATH_REF, CA, CAM, and draftHTML from the other CAASPP files.
   Opens at caaspp.html?id=THE-ID. All passages, drafts, and data sets
   were written for this site; data marked “sample” are made up for practice.
   ===================================================================== */
const FOCUS_NOTE = (area, pct) => ({ box: `🎯 <b>Focus area:</b> ${area}. In 2024–25, ${pct} of California 11th graders scored <b>Below Standard</b> here, so this set gives you extra practice.` });
const numbered = (sents, start) => draftHTML(sents).replace(/<span class="sn rc-noann">(\d+)<\/span>/g, (m, n) => `<span class="sn rc-noann">${+n + start - 1}</span>`);

/* ======================= MATH 1: FUNCTIONS ======================= */
RC["math-cp-functions"] = Object.assign({}, CAM, {
  subject: "Math", mins: 25,
  title: "Focus: Concepts & Procedures: Functions and Graphs",
  blurb: "Function notation, rate of change, key features of graphs, transformations, and interpreting functions in context.",
  eq: "How can I read what a function’s graph, table, or equation tells me about a real situation?",
  target: "I can evaluate functions, find rates of change, and interpret key features of graphs in context.",
  sources: [
    { tab: "Graphs", title: "Figure 1 and Figure 2", blocks: [
      FOCUS_NOTE("Math Claim 1, Concepts and Procedures", "47.6%"),
      { fig: RCG.line({ title: "Figure 1: Height of a Drone", x: { min: 0, max: 10, step: 1, label: "Time, t (seconds)" }, y: { min: 0, max: 35, step: 5, label: "Height, h(t) (meters)" },
          series: [{ pts: [[0, 0], [2, 30], [5, 30], [8, 10], [10, 0]], cls: "s1", dots: true }],
          alt: "A line graph of a drone's height. It rises from 0 meters at 0 seconds to 30 meters at 2 seconds, stays at 30 meters until 5 seconds, falls to 10 meters at 8 seconds, then falls to 0 meters at 10 seconds." }),
        cap: "Use Figure 1 for questions 1, 2, 3, and 11." },
      { fig: RCG.line({ title: "Figure 2: y = f(x)", x: { min: -2, max: 6, step: 1, label: "x" }, y: { min: -4, max: 10, step: 2, label: "y" }, hlines: [{ y: 0 }],
          series: [{ fn: x => -(x - 2) * (x - 2) + 9, from: -1.6, to: 5.6, cls: "s2" }], marks: [{ x: 2, y: 9, text: "(2, 9)", cls: "s2" }],
          alt: "A downward parabola with its highest point at (2, 9). It crosses the x-axis at x = −1 and x = 5 and crosses the y-axis at 5." }),
        cap: "Use Figure 2 for question 9." }
    ]},
    MATH_REF
  ],
  qs: [
    { t: "num", ref: 1, q: "Use Figure 1. What is the average rate of change of the drone’s height from t = 0 to t = 2 seconds?", a: 15, tol: 0.001, unit: "meters per second", why: "Rate of change = (30 − 0) ÷ (2 − 0) = 15 meters per second." },
    { t: "mc", ref: 1, q: "Use Figure 1. During which interval is the drone coming down the <b>fastest</b>?", opts: ["From t = 0 to t = 2", "From t = 2 to t = 5", "From t = 5 to t = 8", "From t = 8 to t = 10"], a: 2,
      why: "From 5 to 8 seconds it drops 20 meters in 3 seconds (about 6.7 m/s). From 8 to 10 it drops 10 meters in 2 seconds (5 m/s)." },
    { t: "multi", ref: 1, q: "Use Figure 1. Select <b>all</b> statements that are true.", opts: ["h(5) = 30", "h(t) is increasing from t = 0 to t = 2.", "The maximum height of the drone is 30 meters.", "h(10) = 10", "The domain shown is 0 ≤ t ≤ 30."], a: [0, 1, 2],
      why: "At t = 5 the height is 30, the graph rises from 0 to 2, and the highest value is 30. h(10) = 0, and the domain (time) is 0 ≤ t ≤ 10." },
    { t: "num", q: "f(x) = 2x² − 3x + 1. What is f(−2)?", a: 15, tol: 0.001, pre: "f(−2) =", why: "2(−2)² − 3(−2) + 1 = 2(4) + 6 + 1 = 15. Put −2 in parentheses so (−2)² = 4." },
    { t: "mc", q: "f(x) = 3x − 4. For what value of x does f(x) = 11?", opts: ["x = 5", "x = 29", "x = 7/3", "x = −1"], a: 0, why: "Set 3x − 4 = 11, so 3x = 15 and x = 5. (x = 29 is f(11), a common mix-up.)" },
    { t: "grid", q: "Classify each function.", cols: ["Linear", "Quadratic", "Exponential"],
      rows: [["y = 4x − 7", 0], ["y = x² − 9", 1], ["y = 5(1.03)<sup>x</sup>", 2], ["x: 0, 1, 2, 3 &nbsp;→&nbsp; y: 2, 6, 18, 54", 2], ["x: 0, 1, 2, 3 &nbsp;→&nbsp; y: 3, 8, 13, 18", 0]],
      why: "Linear functions add the same amount each step (+5). Exponential functions multiply by the same amount (×3). A quadratic has x² as its highest power." },
    { t: "mc", q: "The cost of buying n concert tickets online is C(n) = 12n + 40 dollars. What does the <b>40</b> represent?", opts: ["The price of one ticket", "A one-time fee added to every order", "The number of tickets bought", "The total cost of 12 tickets"], a: 1,
      why: "40 is added no matter how many tickets you buy (it’s the value when n = 0), so it’s a one-time fee. 12 is the price per ticket." },
    { t: "mc", q: "The graph of g(x) = f(x − 3) + 2 is the graph of f(x) moved…", opts: ["3 units left and 2 units up", "3 units right and 2 units up", "3 units right and 2 units down", "2 units right and 3 units up"], a: 1,
      why: "Inside the parentheses works backwards: x − 3 moves the graph RIGHT 3. Adding 2 outside moves it UP 2." },
    { t: "num", ref: 1, q: "Use Figure 2. What is the <b>positive</b> x-intercept of f(x)?", a: 5, tol: 0.001, pre: "x =", why: "The parabola crosses the x-axis at x = −1 and x = 5. The positive one is 5." },
    { t: "mc", q: "A theater has 200 seats. T(n) = 15n gives the ticket money from selling n seats. Which is the most reasonable domain?", opts: ["All real numbers", "Whole numbers from 0 to 200", "All numbers from 0 to 3000", "Whole numbers from 15 to 200"], a: 1,
      why: "You can only sell a whole number of seats, from 0 up to the 200 that exist. 3000 is the largest possible OUTPUT (range), not input." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Use Figure 1. Explain what the graph shows from t = 2 to t = 5 seconds. Use the words <i>height</i> and <i>time</i> in your answer.", min: 18,
      checks: [
        { label: "Says the height stays the same (constant / does not change / hovers)", re: /(stay|same|constant|not chang|doesn.?t chang|does not chang|hover|level|flat|stop)/i },
        { label: "Gives the height: 30 meters", re: /\b30\b/ },
        { label: "Mentions the time interval (2 to 5 seconds, or 3 seconds)", re: /\b(2|two)\b.{0,15}\b(5|five)\b|\b(3|three) seconds/i }
      ],
      rubric: "2 points: explains that the height stays at 30 meters for 3 seconds (from t = 2 to t = 5) and uses both words. 1 point: partly correct. 0 points: incorrect.",
      model: "From t = 2 to t = 5 seconds, the drone’s height stays at 30 meters. The time keeps increasing, but the height does not change, so the drone is hovering for 3 seconds. The rate of change is 0 meters per second." }
  ]
});

/* ======================= MATH 2: EXPRESSIONS ======================= */
RC["math-cp-expressions"] = Object.assign({}, CAM, {
  subject: "Math", mins: 25,
  title: "Focus: Concepts & Procedures: Expressions, Exponents & Polynomials",
  blurb: "Rational exponents, exponent rules, adding and multiplying polynomials, factoring, and equivalent forms.",
  eq: "How can rewriting an expression in a different form make a problem easier?",
  target: "I can use exponent rules, operate on polynomials, and write expressions in equivalent forms.",
  sources: [
    { tab: "Tips", title: "Before You Start", blocks: [
      FOCUS_NOTE("Math Claim 1, Concepts and Procedures", "47.6%"),
      { table: { cap: "Quick reminders", head: ["Skill", "Reminder"], rowHead: true, rows: [
        ["Rational exponents", "x<sup>m/n</sup> = (ⁿ√x)<sup>m</sup>. The bottom number is the root and the top number is the power."],
        ["Negative exponents", "x<sup>−n</sup> = 1 ÷ x<sup>n</sup>. A negative exponent flips; it does not make the number negative."],
        ["Subtracting polynomials", "Distribute the minus sign to EVERY term in the second polynomial."],
        ["Factoring x² + bx + c", "Find two numbers that multiply to c and add to b."],
        ["Check equivalence", "Plug the same number (like x = 2) into both expressions. Different results mean they are NOT equivalent."]] } }
    ]},
    MATH_REF
  ],
  qs: [
    { t: "mc", q: "Which expression is equivalent to ∛(x<sup>6</sup>) for x > 0?", opts: ["x<sup>2</sup>", "x<sup>3</sup>", "x<sup>18</sup>", "x<sup>1/2</sup>"], a: 0, why: "∛(x⁶) = x<sup>6/3</sup> = x²." },
    { t: "num", q: "What is the value of 16<sup>3/4</sup>?", a: 8, tol: 0.001, why: "Root first: ⁴√16 = 2. Then the power: 2³ = 8." },
    { t: "multi", q: "Select <b>all</b> expressions that are equivalent to x² − 9.", opts: ["(x − 3)(x + 3)", "(x − 3)²", "(3 − x)(−3 − x)", "x² − 3²", "(x + 9)(x − 1)"], a: [0, 2, 3],
      why: "x² − 9 is a difference of squares: (x − 3)(x + 3). (3 − x)(−3 − x) = −9 − 3x + 3x + x² = x² − 9. (x − 3)² = x² − 6x + 9, and (x + 9)(x − 1) = x² + 8x − 9." },
    { t: "mc", q: "Simplify: (2x² + 3x − 5) − (x² − 4x + 2)", opts: ["x² − x − 3", "x² + 7x − 7", "x² + 7x − 3", "3x² − x − 7"], a: 1, why: "Distribute the minus: 2x² + 3x − 5 − x² + 4x − 2 = x² + 7x − 7." },
    { t: "mc", q: "Multiply: (x + 4)(2x − 3)", opts: ["2x² − 12", "2x² + 5x − 12", "2x² + 11x − 12", "2x² − 5x + 12"], a: 1, why: "2x² − 3x + 8x − 12 = 2x² + 5x − 12." },
    { t: "inline", q: "Complete the factored form.", text: "x² − 5x − 14 = (x [[]] 7)(x [[]] 2)", blanks: [{ opts: ["+", "−"], a: 1 }, { opts: ["+", "−"], a: 0 }],
      why: "We need two numbers that multiply to −14 and add to −5: −7 and +2. So (x − 7)(x + 2)." },
    { t: "mc", q: "Which expression is equivalent to 3<sup>2x</sup>?", opts: ["9<sup>x</sup>", "6<sup>x</sup>", "3<sup>x²</sup>", "9x"], a: 0, why: "3<sup>2x</sup> = (3²)<sup>x</sup> = 9<sup>x</sup>." },
    { t: "grid", q: "Decide whether each statement is true or false (x ≠ 0).", cols: ["True", "False"],
      rows: [["x³ · x⁴ = x⁷", 0], ["(x²)³ = x⁵", 1], ["x<sup>−2</sup> = 1/x²", 0], ["x⁰ = 0", 1], ["(2x)³ = 8x³", 0]],
      why: "Multiply → add exponents (x⁷). Power of a power → multiply exponents ((x²)³ = x⁶). Any nonzero number to the 0 power is 1. (2x)³ = 2³x³ = 8x³." },
    { t: "num", q: "What value of c makes x² + 10x + c a perfect square trinomial?", a: 25, tol: 0.001, pre: "c =", why: "Take half of 10 (which is 5) and square it: 25. x² + 10x + 25 = (x + 5)²." },
    { t: "mc", q: "A bank account balance is modeled by B = 500(1.04)<sup>t</sup>, where t is in years. What does 1.04 tell you?", opts: ["The account starts with $1.04.", "The balance grows by 4% each year.", "The balance grows by $4 each year.", "The balance grows by 104% each year."], a: 1, why: "A growth factor of 1.04 means you keep 100% and add 4% every year." },
    { t: "mc", q: "The function y = x² − 6x − 7 can be written three ways. Which form shows the x-intercepts directly?", opts: ["y = x² − 6x − 7", "y = (x − 3)² − 16", "y = (x − 7)(x + 1)", "y = x(x − 6) − 7"], a: 2, why: "Factored form shows the zeros: x = 7 and x = −1. Vertex form, (x − 3)² − 16, shows the vertex (3, −16)." },
    { t: "write", q: "<b>Brief write.</b> A student says (x + 5)² = x² + 25. Explain the error and give the correct expanded form.", min: 15,
      checks: [
        { label: "Gives the correct answer x² + 10x + 25", re: /x\s*(²|\^2|2)\s*\+\s*10\s*x\s*\+\s*25/i },
        { label: "Explains that (x + 5)² means (x + 5)(x + 5), or names the missing middle term", re: /\(x\s*\+\s*5\)\s*\(x\s*\+\s*5\)|middle|10x|foil|times itself|distribut|multiply/i }
      ],
      rubric: "2 points: correct expansion and a clear explanation of the missing middle term. 1 point: correct expansion OR explanation. 0 points: neither.",
      model: "The student squared each term separately, but (x + 5)² means (x + 5)(x + 5). Using FOIL: x² + 5x + 5x + 25 = x² + 10x + 25. The student left out the middle term, 10x." }
  ]
});

/* ======================= MATH 3: EQUATIONS ======================= */
RC["math-cp-equations"] = Object.assign({}, CAM, {
  subject: "Math", mins: 25,
  title: "Focus: Concepts & Procedures: Equations, Inequalities & Systems",
  blurb: "Multi-step equations, inequalities, literal equations, systems, quadratics, and finding the error in a solution.",
  eq: "How do I solve equations accurately and check that my solution is correct?",
  target: "I can solve linear and quadratic equations, inequalities, and systems, and explain each step.",
  sources: [
    { tab: "Graph", title: "Figure 1: A System of Equations", blocks: [
      FOCUS_NOTE("Math Claim 1, Concepts and Procedures", "47.6%"),
      { fig: RCG.line({ title: "Figure 1", x: { min: -1, max: 6, step: 1, label: "x" }, y: { min: -1, max: 7, step: 1, label: "y" },
          series: [{ fn: x => x + 1, cls: "s1", label: "y = x + 1" }, { fn: x => -x + 5, cls: "s2", label: "y = −x + 5" }], marks: [{ x: 2, y: 3, text: "", cls: "s3" }],
          alt: "Two lines on a coordinate grid. The line y = x + 1 goes up to the right. The line y = −x + 5 goes down to the right. They cross at one point, (2, 3)." }),
        cap: "Use Figure 1 for question 11." },
      { box: "<b>Student work for question 9</b><br>Step 1: 3x − 4 = 2x + 6<br>Step 2: 3x = 2x + 2<br>Step 3: x = 2", n: false }
    ]},
    MATH_REF
  ],
  qs: [
    { t: "num", q: "Solve for x.<div class=\"eqn\">5 − 2(x + 3) = 3x + 9</div>", a: -2, tol: 0.001, pre: "x =", why: "5 − 2x − 6 = 3x + 9 → −1 − 2x = 3x + 9 → −10 = 5x → x = −2. Watch the sign when distributing −2." },
    { t: "num", q: "Solve for x.<div class=\"eqn\">x/4 − 2 = 3</div>", a: 20, tol: 0.001, pre: "x =", why: "Add 2: x/4 = 5. Multiply by 4: x = 20." },
    { t: "mc", q: "Solve: −3x + 7 ≤ 19", opts: ["x ≥ −4", "x ≤ −4", "x ≥ 4", "x ≤ 4"], a: 0, why: "−3x ≤ 12. Dividing by a NEGATIVE flips the inequality: x ≥ −4." },
    { t: "mc", q: "The area of a trapezoid is A = ½h(b₁ + b₂). Which equation is solved for h?", opts: ["h = 2A − (b₁ + b₂)", "h = 2A / (b₁ + b₂)", "h = A / (2(b₁ + b₂))", "h = (b₁ + b₂) / 2A"], a: 1, why: "Multiply both sides by 2: 2A = h(b₁ + b₂). Divide by (b₁ + b₂): h = 2A / (b₁ + b₂)." },
    { t: "num", q: "Solve the system. What is the value of <b>y</b>?<div class=\"eqn\">2x + y = 11<br>x − y = 1</div>", a: 3, tol: 0.001, pre: "y =", why: "Add the equations: 3x = 12, so x = 4. Then 4 − y = 1, so y = 3." },
    { t: "mc", q: "How many solutions does this system have?<div class=\"eqn\">y = 2x + 3<br>4x − 2y = 6</div>", opts: ["Exactly one", "None", "Infinitely many", "Exactly two"], a: 1,
      why: "Solve the second for y: −2y = −4x + 6 → y = 2x − 3. Same slope (2), different y-intercepts (3 and −3), so the lines are parallel and never meet." },
    { t: "multi", need: 2, q: "Select the <b>two</b> solutions of x² − 2x − 15 = 0.", opts: ["x = 5", "x = −5", "x = 3", "x = −3", "x = 15"], a: [0, 3], why: "Factor: (x − 5)(x + 3) = 0, so x = 5 or x = −3." },
    { t: "num", q: "What is the <b>positive</b> solution of 2x² = 50?", a: 5, tol: 0.001, pre: "x =", why: "Divide by 2: x² = 25, so x = ±5. The positive solution is 5." },
    { t: "hot", ref: 1, q: "Look at the student work on the Graph tab. Click the step where the student made the <b>first</b> error.", text: ["Step 1: 3x − 4 = 2x + 6", "Step 2: 3x = 2x + 2", "Step 3: x = 2"], a: [1],
      why: "To undo −4, you ADD 4 to both sides: 3x = 2x + 10. The student subtracted 4 from 6. The correct answer is x = 10." },
    { t: "num", q: "Phone Plan A costs $30 per month plus $5 per GB of data. Plan B costs $45 per month plus $2 per GB. For how many GB do the plans cost the same?", a: 5, tol: 0.001, unit: "GB", why: "30 + 5g = 45 + 2g → 3g = 15 → g = 5. Both plans cost $55." },
    { t: "mc", ref: 1, q: "Use Figure 1. What is the solution to the system y = x + 1 and y = −x + 5?", opts: ["(0, 1)", "(2, 3)", "(3, 2)", "(5, 0)"], a: 1, why: "The solution is where the lines cross: (2, 3). Check: 2 + 1 = 3 and −2 + 5 = 3." },
    { t: "write", q: "<b>Brief write.</b> Show or explain how you know that x = 4 is a solution of 3(x − 2) = x + 2.", min: 12,
      checks: [
        { label: "Substitutes 4 into the equation", re: /3\s*\(\s*4\s*[−-]\s*2\s*\)|4\s*\+\s*2|plug|substitut|replace/i },
        { label: "Shows both sides equal 6", re: /\b6\b/ }
      ],
      rubric: "2 points: substitutes x = 4 and shows both sides equal 6. 1 point: substitutes but makes an arithmetic error or doesn’t finish. 0 points: no valid reasoning.",
      model: "Substitute x = 4. The left side is 3(4 − 2) = 3(2) = 6. The right side is 4 + 2 = 6. Both sides equal 6, so x = 4 is a solution." }
  ]
});

/* ======================= MATH 4: DATA + TRIG ======================= */
RC["math-data-trig"] = Object.assign({}, CAM, {
  subject: "Math", mins: 25,
  title: "Focus: Data Analysis, Statistics & Right-Triangle Trig",
  blurb: "Scatter plots and lines of fit, two-way tables, mean vs. median, and right-triangle trigonometry.",
  eq: "How can I use data and right triangles to make predictions and justify conclusions?",
  target: "I can interpret data displays and use trigonometric ratios to solve problems.",
  sources: [
    { tab: "Data", title: "Screen Time and Sleep (sample data)", blocks: [
      FOCUS_NOTE("Math Claim 2/4, Problem Solving, Modeling & Data Analysis", "31.7%"),
      { fig: RCG.line({ title: "Figure 1: Screen Time Before Bed vs. Sleep", x: { min: 0, max: 5.5, step: 0.5, label: "Screen time before bed (hours)", every: 2 }, y: { min: 5, max: 9, step: 0.5, label: "Hours of sleep", every: 2 },
          series: [{ fn: x => -0.6 * x + 8.8, from: 0.2, to: 5.3, cls: "s2", dash: true, label: "line of fit: y = −0.6x + 8.8" }],
          marks: [[0.5, 8.6], [1, 8.1], [1.5, 8.0], [2, 7.5], [2.5, 7.3], [3, 7.1], [3.5, 6.6], [4, 6.5], [4.5, 6.0], [5, 5.8]].map(p => ({ x: p[0], y: p[1], cls: "s1" })), legend: "right",
          alt: "A scatter plot of 10 students. As screen time before bed increases from 0.5 to 5 hours, hours of sleep decrease from about 8.6 to 5.8. A dashed line of fit, y = −0.6x + 8.8, goes down to the right." }),
        cap: "Figure 1. Sample data from 10 students (made up for practice)." },
      { table: { cap: "Table 1. Students who play a school sport (sample data)", head: ["", "Plays a sport", "Does not play", "Total"], rowHead: true, rows: [["9th grade", "45", "55", "100"], ["10th grade", "60", "40", "100"], ["Total", "105", "95", "200"]] } },
      { table: { cap: "Table 2. Ten quiz scores", head: ["Scores (in order)"], rows: [["62, 70, 74, 75, 78, 80, 81, 85, 88, 99"]] } }
    ]},
    { tab: "Triangles", title: "Right Triangle Reminders", blocks: [
      { table: { cap: "SOH CAH TOA", head: ["Ratio", "Meaning"], rowHead: true, rows: [["sin θ", "opposite ÷ hypotenuse"], ["cos θ", "adjacent ÷ hypotenuse"], ["tan θ", "opposite ÷ adjacent"], ["Pythagorean theorem", "a² + b² = c² (c is the hypotenuse)"]] } },
      { box: "Make sure your calculator is in <b>degree</b> mode." }
    ]},
    MATH_REF
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which <b>best</b> describes the association in Figure 1?", opts: ["Strong positive linear", "Strong negative linear", "No association", "Positive nonlinear"], a: 1, why: "As screen time goes up, sleep goes down in a nearly straight pattern: strong negative linear." },
    { t: "num", ref: 1, q: "Use the line of fit, y = −0.6x + 8.8, to predict the hours of sleep for a student with <b>3 hours</b> of screen time.", a: 7, tol: 0.001, unit: "hours", why: "y = −0.6(3) + 8.8 = −1.8 + 8.8 = 7.0 hours." },
    { t: "mc", ref: 1, q: "What does the slope, −0.6, mean in this situation?", opts: ["Students sleep 0.6 hours each night.", "Each extra hour of screen time is associated with about 0.6 hours (36 minutes) less sleep.", "Each extra hour of sleep causes 0.6 hours less screen time.", "A student with no screen time sleeps 0.6 hours."], a: 1,
      why: "Slope = change in y per 1 unit of x: −0.6 hours of sleep for every 1 more hour of screen time. 8.8 (the y-intercept) is the predicted sleep with 0 screen time." },
    { t: "mc", ref: 1, q: "Which conclusion is <b>best</b> supported by Figure 1?", opts: ["Screen time causes students to lose sleep.", "Students in this sample with more screen time tended to sleep less.", "Every student who uses screens sleeps less than 7 hours.", "Sleep causes students to use screens more."], a: 1,
      why: "A scatter plot shows an association, not cause and effect. It also describes this sample, not every student." },
    { t: "num", ref: 1, q: "Use Table 1. What percent of 10th graders play a sport?", a: 60, tol: 0.001, unit: "%", why: "60 of the 100 10th graders: 60%." },
    { t: "num", ref: 1, q: "Use Table 1. A student who plays a sport is chosen at random. What is the probability the student is a 9th grader? Give your answer as a percent rounded to the nearest whole number.", a: 43, tol: 0.6, unit: "%",
      why: "Only look at students who play a sport (105). Of those, 45 are 9th graders: 45 ÷ 105 ≈ 0.4286 ≈ 43%." },
    { t: "num", ref: 1, q: "Use Table 2. What is the median of the quiz scores?", a: 79, tol: 0.001, why: "With 10 scores, the median is the average of the 5th and 6th scores: (78 + 80) ÷ 2 = 79." },
    { t: "mc", ref: 1, q: "Use Table 2. If the score of 99 were changed to 120, what would happen?", opts: ["The mean and median would both increase.", "The mean would increase, but the median would stay the same.", "The median would increase, but the mean would stay the same.", "Neither would change."], a: 1,
      why: "The mean uses every value, so it goes up. The median only depends on the middle two scores, which don’t change." },
    { t: "num", ref: 2, q: "A right triangle has a 35° angle and a hypotenuse of 20 cm. Find the length of the side <b>opposite</b> the 35° angle, to the nearest tenth.", a: 11.5, tol: 0.06, unit: "cm",
      why: "sin 35° = opposite ÷ 20, so opposite = 20 sin 35° ≈ 20(0.5736) ≈ 11.5 cm." },
    { t: "mc", ref: 2, q: "A 12-foot ladder leans against a wall and makes a 70° angle with the ground. Which expression gives how high up the wall the ladder reaches?", opts: ["12 sin 70°", "12 cos 70°", "12 tan 70°", "12 ÷ sin 70°"], a: 0,
      why: "The ladder is the hypotenuse, and the height is opposite the 70° angle. sin = opposite ÷ hypotenuse, so height = 12 sin 70° (about 11.3 ft)." },
    { t: "num", ref: 2, q: "A right triangle has legs of 9 and 12. How long is the hypotenuse?", a: 15, tol: 0.001, why: "9² + 12² = 81 + 144 = 225, and √225 = 15." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> A student says, “Figure 1 proves that screens cause teenagers to sleep less.” Do you agree? Explain using the data.", min: 25,
      checks: [
        { label: "Disagrees or says it doesn’t PROVE cause (correlation ≠ causation)", re: /(not|n.t|doesn.?t|does not|can.?t|cannot).{0,40}(prove|cause)|correlat|associat|relationship/i },
        { label: "Describes the trend (more screen time, less sleep)", re: /(more|higher|increas).{0,40}(less|fewer|decreas|lower)|negative/i },
        { label: "Gives another possible explanation or limitation (other factors, small sample, only 10 students)", re: /other|factor|homework|stress|job|sample|only 10|ten students|small|caffeine|reason/i }
      ],
      rubric: "2 points: explains that the plot shows a negative association but not causation, and gives another factor or limitation. 1 point: describes the trend or says it isn’t proof, but not both. 0 points: agrees without reasoning.",
      model: "I disagree. The scatter plot shows a negative association: students with more screen time tended to sleep less. But it doesn’t prove screens cause less sleep. Other factors, like homework, stress, or a job, could cause both. Also, it’s only a sample of 10 students." }
  ]
});

/* ======================= ELA 1: WRITING: EVIDENCE & ELABORATION ======================= */
RC["ela-write-elaborate"] = Object.assign({}, CA, {
  subject: "ELA", mins: 20,
  title: "Focus: Writing: Evidence, Elaboration & Organization",
  blurb: "Revise an argument draft: sharpen the claim, choose the best evidence, explain it, add transitions, use precise words, and answer a counterclaim.",
  eq: "How do strong writers choose evidence and explain how it supports their claim?",
  target: "I can revise an argument by choosing relevant evidence, elaborating on it, and organizing ideas clearly.",
  sources: [
    { tab: "Student Draft", title: "Student Draft: Should Personal Finance Be Required?", blocks: [
      FOCUS_NOTE("ELA Claim 2, Writing", "24.1%"),
      { box: "A student is writing an argument for the school board. Read the draft and help revise it. Sentences are numbered.", n: false },
      { html: numbered(["Money is important.", "Our district should require every student to take a one-semester personal finance class before graduating.", "After high school, students have to make a lot of stuff decisions about money right away."], 1) },
      { html: numbered(["Many students will sign a lease, open a credit card, or apply for student loans within a year or two of graduation.", "A required class would teach students how to make a budget and avoid high-interest debt.", "Personal finance is also really fun to learn about."], 4) },
      { html: numbered(["Some people argue that the schedule is already too full for another required class.", "A finance class could replace one elective semester, or it could be combined with an existing economics course.", "Students who understand money have more choices after high school."], 7) }
    ]},
    { tab: "Research Notes", title: "The Student’s Research Notes (made up for practice)", numbered: true, blocks: [
      { p: "<b>Note A.</b> In a survey of 400 graduates from our district, 68% said they wished they had learned how to budget in high school." },
      { p: "<b>Note B.</b> Personal finance teachers in a nearby district report that their classes are “usually full.”" },
      { p: "<b>Note C.</b> A study of states that require personal finance found that students who took the course were less likely to carry high-interest credit card debt as young adults." },
      { p: "<b>Note D.</b> The first credit card in the United States was introduced in the 1950s." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "The writer wants to replace sentence 1 with a stronger opening that leads to the claim. Which is the <b>best</b> choice?", opts: ["Money is very, very important to everyone.", "Within months of graduating, many students face financial decisions that can affect them for years.", "This essay will be about money.", "Do you like money?"], a: 1,
      why: "Choice B is specific, connects to the claim, and makes the reader care. A is vague, C announces the topic, and D is a weak hook." },
    { t: "mc", ref: 2, q: "The writer wants to add evidence after sentence 5 to support the idea that a class helps students avoid debt. Which note is <b>most</b> relevant?", opts: ["Note A", "Note B", "Note C", "Note D"], a: 2,
      why: "Note C directly connects taking the course to having less high-interest debt. Note D is an off-topic fact, and Note B is about class popularity." },
    { t: "hot", ref: 1, q: "Click the sentence that weakens the argument because it is an unsupported opinion and should be deleted.", text: ["(4) Many students will sign a lease, open a credit card, or apply for student loans within a year or two of graduation.", "(5) A required class would teach students how to make a budget and avoid high-interest debt.", "(6) Personal finance is also really fun to learn about.", "(8) A finance class could replace one elective semester, or it could be combined with an existing economics course."], a: [2],
      why: "Sentence 6 is an informal opinion with no support, and it doesn’t help convince the school board." },
    { t: "mc", ref: 2, q: "The writer adds Note A after sentence 4. Which sentence <b>best</b> elaborates on (explains) that evidence?", opts: ["That is a lot of graduates.", "This shows that many graduates felt unprepared for real financial decisions, which a required class could prevent.", "Surveys are a type of research.", "Some graduates did not answer the survey."], a: 1,
      why: "Elaboration explains HOW the evidence supports the claim. Choice B connects the 68% to the need for the class." },
    { t: "inline", ref: 1, q: "Replace the vague words in sentence 3 with precise, formal language.", text: "After high school, students have to make [[]] about money right away.", blanks: [{ opts: ["a lot of stuff decisions", "numerous important decisions", "tons of choices and things", "some decision stuff"], a: 1 }],
      why: "“Numerous important decisions” is precise and formal. The others are vague or informal." },
    { t: "mc", ref: 1, q: "Which transition would <b>best</b> begin sentence 8 to show it is a response to the counterclaim in sentence 7?", opts: ["For example,", "However,", "In addition,", "Similarly,"], a: 1,
      why: "Sentence 7 states an opposing view, and sentence 8 answers it. “However” signals that contrast." },
    { t: "order", q: "Put these sentences in the most logical order for a body paragraph (first at the top).", items: [
      "A required finance class would help students avoid costly debt.",
      "One study found that students who took personal finance were less likely to carry high-interest credit card debt as young adults.",
      "This suggests that learning how interest works helps students make smarter choices with credit.",
      "Avoiding debt early gives graduates more freedom to save, study, or start a business."],
      why: "Topic sentence (claim) → evidence → elaboration that explains the evidence → concluding connection." },
    { t: "mc", ref: 1, q: "What is the purpose of sentences 7 and 8?", opts: ["To introduce the claim", "To acknowledge a counterclaim and respond to it", "To provide a personal story", "To summarize every reason"], a: 1, why: "Sentence 7 gives an opposing argument, and sentence 8 rebuts it with a solution." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Write a body paragraph (3–4 sentences) supporting the claim. Use evidence from <b>one</b> research note, and explain how it supports the claim.", min: 40,
      checks: [
        { label: "States a reason that supports requiring the class", re: /(class|course|personal finance|require)/i },
        { label: "Uses evidence from Note A or Note C (68% / survey, or the debt study)", re: /68|survey|graduat.{0,30}wish|study|debt|credit card/i },
        { label: "Elaborates: explains how the evidence supports the claim (this shows / this means / because)", re: /this (shows|means|suggests|proves|demonstrates)|which means|because|so that|as a result/i },
        { label: "Uses formal language (no slang)", re: /\b(stuff|super|totally|kinda|gonna|cool|awesome|fun)\b/i, not: true }
      ],
      rubric: "2 points: a clear reason, relevant evidence from a note, and elaboration that explains the connection, in formal language. 1 point: evidence without elaboration, or elaboration without evidence. 0 points: off topic.",
      model: "A required personal finance class would prepare students for decisions they face right after graduation. In a survey of 400 graduates from our district, 68% said they wished they had learned to budget in high school. This shows that most graduates felt unprepared to manage their money. A required class would give every student these skills before they need them." }
  ]
});

/* ======================= ELA 2: WRITING: NARRATIVE + CONVENTIONS ======================= */
RC["ela-write-narrative"] = Object.assign({}, CA, {
  subject: "ELA", mins: 20,
  title: "Focus: Writing: Narrative Revision, Grammar & Conventions",
  blurb: "Revise a personal narrative: hooks, sensory details, transitions, verb tense, commas, modifiers, parallel structure, and showing instead of telling.",
  eq: "How do writers use details, structure, and correct conventions to make a story clear and vivid?",
  target: "I can revise a narrative for detail and organization and edit it for grammar, usage, and punctuation.",
  sources: [
    { tab: "Student Draft", title: "Student Draft: My First Saturday at the Market", blocks: [
      FOCUS_NOTE("ELA Claim 2, Writing", "24.1%"),
      { box: "A student wrote this personal narrative. Read it and help revise it. Sentences are numbered.", n: false },
      { html: numbered(["This is a story about my first job.", "Last summer, my aunt asked me to help at her fruit stand at the farmers market.", "I was nervous because I had never worked with customers before."], 1) },
      { html: numbered(["The first hour was slow.", "Then a long line formed and I panic.", "Customers wanted peaches, plums and nectarines, and I kept mixing up the prices.", "Covered in sticky juice, the cash box was hard to open."], 4) },
      { html: numbered(["My aunt showed me how to weigh fruit, count change, and how to smile at every customer.", "By noon, I could help people without asking her for help.", "Everyone was really nice and stuff.", "I was happy."], 8) }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which sentence would be the <b>best</b> replacement for sentence 1 to hook the reader?", opts: ["This is a story about my first job, which I will now tell.", "The scale beeped, a customer frowned, and I realized I had no idea what a pound of peaches cost.", "Jobs are things that people have.", "I am going to write about the market."], a: 1,
      why: "Choice B drops the reader into an exciting moment with specific details. The others announce the topic." },
    { t: "mc", ref: 1, q: "The writer wants to add a sensory detail after sentence 4. Which is the <b>best</b> choice?", opts: ["The market was a place.", "The air smelled like ripe peaches and kettle corn, and the sun was already warming the tables.", "It was a very good market.", "I think there were people there."], a: 1, why: "It uses smell, sight, and touch to help the reader picture the scene." },
    { t: "inline", ref: 1, q: "Fix the verb tense in sentence 5 so it matches the rest of the story.", text: "Then a long line formed and I [[]].", blanks: [{ opts: ["panic", "panicked", "am panicking", "will panic"], a: 1 }], why: "The story is told in past tense, so “panicked” keeps the tense consistent." },
    { t: "inline", ref: 1, q: "Choose the correct punctuation for sentence 6.", text: "Customers wanted peaches[[]] plums[[]] and nectarines.", blanks: [{ opts: [", (comma)", "; (semicolon)", "no punctuation"], a: 0 }, { opts: [", (comma)", "; (semicolon)", "no punctuation"], a: 0 }],
      why: "Use commas to separate items in a series. (The comma before “and” is called the serial comma.)" },
    { t: "mc", ref: 1, q: "Sentence 7 has a misplaced modifier (it sounds like the cash box was covered in juice). Which revision fixes it?", opts: ["Covered in sticky juice, the cash box was hard to open.", "Covered in sticky juice, my hands could barely open the cash box.", "The cash box, covered in sticky juice, my hands.", "Covered in sticky juice, it was hard."], a: 1,
      why: "The phrase “Covered in sticky juice” should sit right next to what it describes: my hands." },
    { t: "mc", ref: 1, q: "Which revision of sentence 8 uses parallel structure?", opts: ["My aunt showed me how to weigh fruit, count change, and how to smile at every customer.", "My aunt showed me how to weigh fruit, count change, and smile at every customer.", "My aunt showed me weighing fruit, to count change, and smiling.", "My aunt showed me how to weigh fruit, counting change, and to smile."], a: 1,
      why: "All three items use the same form: weigh, count, smile." },
    { t: "mc", ref: 1, q: "Which transition would <b>best</b> begin sentence 9 to show the passing of time?", opts: ["However,", "On the other hand,", "After a few hours of practice,", "For example,"], a: 2, why: "“After a few hours of practice” shows time passing and explains how the narrator improved." },
    { t: "mc", ref: 1, q: "Which is the <b>best</b> replacement for sentences 10 and 11 to end the narrative with a reflection?", opts: ["Everyone was really nice and stuff. I was happy.", "When the last customer left, I counted the cash box perfectly, and I realized that being nervous just meant I was learning something new.", "The end.", "That was the market, and it was fine."], a: 1,
      why: "Choice B uses a specific moment and reflects on what the narrator learned. Choice A is vague and uses slang (“and stuff”)." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Sentence 3 <i>tells</i> the reader “I was nervous.” Rewrite it to <i>show</i> the nervousness using actions, dialogue, or sensory details (2–3 sentences). Don’t use the word “nervous.”", min: 20,
      checks: [
        { label: "Shows the feeling with an action, body reaction, dialogue, or sensory detail", re: /hand|shak|sweat|heart|pound|stomach|breath|whisper|stutter|voice|knee|tremb|fidget|bit my|swallow|"|“|”/i },
        { label: "Does not use the word “nervous”", re: /nervous/i, not: true },
        { label: "Has at least two sentences", re: /[.!?].+[.!?]/ }
      ],
      rubric: "2 points: two or more sentences that clearly show the feeling with vivid details, without naming it. 1 point: some showing detail, but brief or still tells the feeling. 0 points: off topic.",
      model: "My hands shook as I tied on the apron, and I kept wiping my palms on my jeans. When my aunt said, “You’ll be fine,” my voice came out as a squeak: “Are you sure?”" }
  ]
});

/* ======================= ELA 3: READING: ARGUMENTS ACROSS TWO TEXTS ======================= */
RC["ela-read-arguments"] = Object.assign({}, CA, {
  subject: "ELA", mins: 25,
  title: "Focus: Reading: Analyzing Arguments Across Two Texts",
  blurb: "Two opinion pieces about replacing lawns in California: central claims, reasoning and evidence, word meaning, structure, and comparing arguments.",
  eq: "How do I evaluate and compare how two authors support their arguments?",
  target: "I can analyze an author’s claim, reasoning, and evidence and compare two arguments on the same topic.",
  sources: [
    { tab: "Passage A", title: "Passage A: Trade the Lawn for Something That Lasts", numbered: true, blocks: [
      FOCUS_NOTE("ELA Claim 1, Reading (second-lowest ELA area)", "20.2%"),
      { p: "Every summer, California’s cities beg residents to cut back on water. Yet many neighborhoods still keep thirsty green lawns that need watering several times a week. In much of the state, outdoor watering makes up about half of the water a household uses. If we are serious about drought, the lawn is the first place to look." },
      { p: "Cities should pay residents to replace lawns with drought-tolerant landscaping, such as native plants, shrubs, and mulch. These <b>incentives</b> work: when residents receive a rebate for every square foot of grass they remove, many more of them make the switch than when they are simply asked to save water." },
      { p: "Native plants are not just practical. They provide food and shelter for bees, butterflies, and birds, while a lawn offers little habitat. Once established, many native plants need only occasional watering." },
      { p: "Some homeowners worry that a yard without grass will look dry and brown. But a well-designed native garden can bloom with color for much of the year. The real eyesore is a lawn that turns brown every time the state runs low on water." }
    ]},
    { tab: "Passage B", title: "Passage B: Don’t Pull Up Every Patch of Green", numbered: true, blocks: [
      { p: "Replacing lawns has become a popular answer to California’s water problems, and it can make sense for yards nobody uses. But a one-size-fits-all push to remove grass ignores what lawns do well." },
      { p: "Grass gives kids a soft, safe place to play and gives families a cool spot outside. On a hot afternoon, a living lawn can feel noticeably cooler than bare rock or gravel, which soaks up heat and gives it off in the evening." },
      { p: "Rebate programs also cost money, and the benefits are not equal. Homeowners with large yards and time to plan a new garden collect most of the rebates, while renters and families in apartments rarely benefit." },
      { p: "Instead of pulling up every lawn, cities should help residents water smarter. Weather-based sprinkler controllers, fixing leaks, and watering early in the morning can save a large share of outdoor water while keeping useful green spaces. The goal should be using water wisely, not erasing every patch of grass." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "What is the central claim of Passage A?", opts: ["Native plants attract bees.", "Cities should pay residents to replace lawns with drought-tolerant landscaping.", "Lawns turn brown in summer.", "Californians use too much water indoors."], a: 1, why: "Paragraph 2 states the main argument; the other choices are supporting details." },
    { t: "ebsr", ref: 1,
      A: { q: "Which reason does the author of Passage A give to show that paying residents works?", opts: ["Native plants bloom for much of the year.", "More residents switch when they receive a rebate than when they are just asked to save water.", "Lawns need watering several times a week.", "Birds need shelter."], a: 1 },
      B: { q: "Which sentence <b>best</b> supports your answer to Part A?", opts: ["“Every summer, California’s cities beg residents to cut back on water.”", "“…when residents receive a rebate for every square foot of grass they remove, many more of them make the switch than when they are simply asked to save water.”", "“Once established, many native plants need only occasional watering.”", "“The real eyesore is a lawn that turns brown…”"], a: 1 },
      why: "Paragraph 2 compares rebates to simple requests, showing that incentives work." },
    { t: "mc", ref: 1, q: "In paragraph 2 of Passage A, what does <b>incentives</b> most likely mean?", opts: ["Rules that punish people", "Rewards that encourage people to act", "Plants that need little water", "Warnings about drought"], a: 1, why: "The next sentence explains that rebates (money) encourage residents to switch, so incentives are rewards." },
    { t: "hot", ref: 2, q: "Click the sentence in Passage B where the author <b>acknowledges</b> a point the other side might make.", text: ["Replacing lawns has become a popular answer to California’s water problems, and it can make sense for yards nobody uses.", "Grass gives kids a soft, safe place to play and gives families a cool spot outside.", "Rebate programs also cost money, and the benefits are not equal.", "The goal should be using water wisely, not erasing every patch of grass."], a: [0],
      why: "The author admits that replacing lawns “can make sense” for unused yards before arguing against removing every lawn." },
    { t: "mc", ref: 2, q: "How does the author of Passage B develop the argument?", opts: ["By telling a story about one family", "By naming the benefits of lawns and problems with rebates, then proposing a different solution", "By listing scientific measurements only", "By attacking people who plant native gardens"], a: 1, why: "Paragraphs 2–3 give reasons against removing all lawns, and paragraph 4 offers an alternative: water smarter." },
    { t: "grid", q: "Which passage makes each point? Choose Both if both authors agree.", cols: ["Passage A", "Passage B", "Both"],
      rows: [["California needs to save outdoor water.", 2], ["Lawns provide a cool, safe place to play.", 1], ["Native plants provide habitat for wildlife.", 0], ["Rebates mostly help homeowners with large yards.", 1]],
      why: "Both authors want to save water; they disagree on how. Habitat is Passage A’s point; play space and unequal rebates are Passage B’s." },
    { t: "mc", ref: 1, q: "Which statement from Passage A relies <b>most</b> on opinion rather than evidence?", opts: ["“In much of the state, outdoor watering makes up about half of the water a household uses.”", "“The real eyesore is a lawn that turns brown every time the state runs low on water.”", "“Native plants … provide food and shelter for bees, butterflies, and birds.”", "“Many native plants need only occasional watering.”"], a: 1, why: "Calling something an “eyesore” is a personal judgment about appearance, not evidence." },
    { t: "multi", need: 2, ref: 2, q: "Which <b>two</b> solutions does the author of Passage B suggest instead of removing lawns?", opts: ["Weather-based sprinkler controllers", "Paying everyone to remove grass", "Fixing leaks and watering early in the morning", "Replacing lawns with gravel", "Banning all outdoor watering"], a: [0, 2], why: "Paragraph 4 lists smart controllers, fixing leaks, and watering early." },
    { t: "write", q: "<b>Brief write.</b> Which author makes the stronger argument? State your claim and support it with evidence from <b>both</b> passages.", min: 45,
      checks: [
        { label: "States which passage (A or B) is stronger", re: /passage\s*(a|b)|first (passage|author)|second (passage|author)|author (a|b)/i },
        { label: "Uses evidence from Passage A (rebates, half of water, habitat, native plants)", re: /rebate|half|habitat|native|bee|butterfl|bird|incentive/i },
        { label: "Uses evidence from Passage B (play space, cooler, unequal rebates, renters, smart watering)", re: /play|cool|heat|renter|apartment|large yard|equal|controller|leak|morning|smart/i },
        { label: "Explains why the evidence makes the argument stronger (because / this shows)", re: /because|this shows|which shows|this proves|stronger|more convincing|weaker/i }
      ],
      rubric: "2 points: a clear claim with evidence from both passages and an explanation of why one argument is stronger. 1 point: a claim with evidence from only one passage or little explanation. 0 points: no claim or off topic.",
      model: "Passage B makes the stronger argument. Passage A shows that outdoor watering is about half of household water use and that rebates encourage people to switch, but it ignores who benefits. Passage B responds that rebates mostly help homeowners with large yards and offers solutions everyone can use, like weather-based controllers and fixing leaks. Because Passage B considers both sides and offers practical alternatives, it is more convincing." }
  ]
});

/* ======================= CAST 1: PHYSICAL SCIENCES ======================= */
RC["cast-phone-drop"] = Object.assign({}, CAM, {
  subject: "Science (CAST)", mins: 20,
  title: "Focus: CAST Physical Sciences: Why Do Some Phones Survive a Fall?",
  blurb: "Momentum, impulse, and Newton’s laws: analyze drop-test data for phone cases and explain which design protects the phone best.",
  eq: "How does increasing the time of a collision change the force on an object?",
  target: "I can use data and Newton’s laws to explain how a design reduces the force of a collision.",
  sources: [
    { tab: "Phenomenon", title: "The Phenomenon: Same Phone, Same Fall, Different Results", numbered: true, blocks: [
      FOCUS_NOTE("CAST Physical Sciences", "43.8%"),
      { p: "Two friends drop the same model of phone from the same height onto a tile floor. One phone, in a thin plastic case, cracks. The other, in a thick silicone case, survives without a scratch. Both phones were moving at the same speed when they hit the floor. Why did one break?" },
      { p: "A moving object has <b>momentum</b>, which equals its mass times its velocity (p = mv). To stop the phone, the floor must push on it with a force. The change in momentum depends on the force and on how long the force acts: <b>F × Δt = Δp</b>. This product of force and time is called <b>impulse</b>." },
      { p: "Both phones lose the same amount of momentum when they stop. But a soft case squishes, so the phone takes longer to stop. If the stopping time (Δt) is longer, the force (F) must be smaller to cause the same change in momentum. A smaller force is less likely to crack the glass." },
      { p: "Newton’s third law says that when the phone pushes on the floor, the floor pushes back on the phone with a force that is equal in size and opposite in direction. Engineers who design cases, helmets, and car airbags all use the same idea: make the collision last longer to make the force smaller." }
    ]},
    { tab: "Data", title: "Drop Test Results (sample data)", blocks: [
      { table: { cap: "Table 1. A 0.20 kg phone dropped from 1.5 m hits the floor at about 5.4 m/s in every trial. (Sample data made up for practice.)", head: ["Case", "Stopping time, Δt (s)", "Average force on phone (N)", "Screen cracked?"], rowHead: true, rows: [["No case", "0.002", "540", "Yes"], ["Thin plastic", "0.005", "216", "Yes"], ["Silicone", "0.010", "108", "No"], ["Air-cushion", "0.020", "54", "No"]] } },
      { fig: RCG.bar({ title: "Figure 1. Average Force on the Phone", cats: ["No case", "Thin plastic", "Silicone", "Air-cushion"], values: true, w: 520, h: 300, series: [{ vals: [540, 216, 108, 54], cls: "s3" }], y: { min: 0, max: 600, step: 100, label: "Average force (N)" },
          alt: "Bar graph of average force: no case 540 newtons, thin plastic 216, silicone 108, air-cushion 54." }), cap: "Figure 1. Same data as Table 1." }
    ]}
  ],
  qs: [
    { t: "num", ref: 1, q: "The 0.20 kg phone hits the floor at 5.4 m/s. What is its momentum just before it hits? (p = mv)", a: 1.08, tol: 0.011, unit: "kg·m/s", why: "p = 0.20 kg × 5.4 m/s = 1.08 kg·m/s." },
    { t: "num", ref: 2, q: "The phone in the silicone case stops in 0.010 s. Use F = Δp ÷ Δt with Δp = 1.08 kg·m/s to find the average force on the phone.", a: 108, tol: 1.1, unit: "N", why: "F = 1.08 ÷ 0.010 = 108 N, which matches Table 1." },
    { t: "mc", ref: 2, q: "Which pattern is shown in Table 1?", opts: ["As stopping time increases, the force on the phone increases.", "As stopping time increases, the force on the phone decreases.", "Stopping time has no effect on force.", "The phone’s speed changed for each case."], a: 1, why: "When Δt doubles (0.005 → 0.010 s), the force is cut in half (216 → 108 N)." },
    { t: "grid", ref: 2, q: "Identify each variable in the drop test.", cols: ["Independent", "Dependent", "Controlled"],
      rows: [["Type of case", 0], ["Average force on the phone", 1], ["Drop height (1.5 m)", 2], ["Mass of the phone", 2]],
      why: "The scientist changes the case (independent), measures the force (dependent), and keeps height and mass the same (controlled)." },
    { t: "ebsr", ref: 1,
      A: { q: "Why did the phone in the silicone case survive?", opts: ["It was moving slower when it hit the floor.", "The soft case made the phone take longer to stop, so the force was smaller.", "The silicone case made the phone lighter.", "The floor did not push on the phone at all."], a: 1 },
      B: { q: "Which sentence <b>best</b> supports your answer to Part A?", opts: ["“Both phones were moving at the same speed when they hit the floor.”", "“If the stopping time (Δt) is longer, the force (F) must be smaller to cause the same change in momentum.”", "“A moving object has momentum, which equals its mass times its velocity.”", "“Two friends drop the same model of phone…”"], a: 1 },
      why: "Paragraph 3 explains that a longer stopping time means a smaller force for the same change in momentum." },
    { t: "mc", ref: 1, q: "When the phone hits the floor, how does the force of the floor on the phone compare to the force of the phone on the floor?", opts: ["The floor’s force is larger.", "The phone’s force is larger.", "They are equal in size and opposite in direction.", "Only the phone exerts a force."], a: 2, why: "Newton’s third law: the forces in an interaction pair are always equal and opposite." },
    { t: "multi", need: 2, q: "An engineer wants to reduce the force on a phone even more. Which <b>two</b> design changes would help?", opts: ["Use a softer material that compresses more on impact", "Make the case harder and stiffer", "Add a thicker cushioning layer at the corners", "Make the phone heavier", "Test from a greater height"], a: [0, 2],
      why: "Softer and thicker cushioning makes the collision last longer, which lowers the force. A heavier phone or a higher drop increases the momentum, and a stiff case shortens the stopping time." },
    { t: "order", q: "Put the engineering design steps in order (first at the top).", items: ["Define the problem: phones crack when dropped.", "Research how force and collision time are related.", "Design and build several case prototypes.", "Drop-test each case and measure the force.", "Choose the best design and improve it."], why: "Engineers define the problem, research, design, test, then refine." },
    { t: "write", ref: 2, q: "<b>Brief write (CER).</b> Which case gives the best protection? Make a claim, use data from Table 1, and use the idea of stopping time (impulse) to explain your reasoning.", min: 40,
      checks: [
        { label: "Claim: the air-cushion case (or silicone) protects best", re: /air|cushion|silicone/i },
        { label: "Evidence: cites a force or time from the data", re: /\b(54|108|216|540|0\.02|0\.020|0\.01|0\.010|0\.005|0\.002)\b/ },
        { label: "Reasoning: a longer stopping time means a smaller force (impulse / momentum)", re: /(long|more|increas).{0,40}(time|stop)|impulse|momentum|Δt|spread/i }
      ],
      rubric: "2 points: a clear claim, data from the table, and reasoning about stopping time and force. 1 point: two of the three parts. 0 points: one or none.",
      model: "The air-cushion case gives the best protection. In Table 1, the force on the phone was only 54 N with the air-cushion case, compared with 540 N with no case. The cushion makes the phone take 0.020 s to stop instead of 0.002 s. Because the change in momentum is the same, a longer stopping time means a much smaller force, so the screen does not crack." }
  ]
});

/* ======================= CAST 2: EARTH AND SPACE SCIENCES ======================= */
RC["cast-groundwater"] = Object.assign({}, CAM, {
  subject: "Science (CAST)", mins: 20,
  title: "Focus: CAST Earth & Space Sciences: Why Is the San Joaquin Valley Sinking?",
  blurb: "Groundwater, drought, and land subsidence in our own valley: analyze well and subsidence data and evaluate solutions.",
  eq: "How does human use of groundwater change Earth’s surface, and how can we manage it?",
  target: "I can use data to explain how human activity affects Earth’s systems and evaluate a solution.",
  sources: [
    { tab: "Phenomenon", title: "The Phenomenon: The Ground Beneath Our Feet Is Dropping", numbered: true, blocks: [
      FOCUS_NOTE("CAST Earth and Space Sciences", "43.6%"),
      { p: "In a famous U.S. Geological Survey photograph taken near Mendota, a scientist stands next to a tall utility pole. Signs on the pole show where the ground surface was in 1925, 1955, and 1977. Over those 52 years, the land sank about 28 feet. This sinking of the land is called <b>subsidence</b>, and it is still happening in parts of the San Joaquin Valley, including Tulare County." },
      { p: "Under the valley are layers of sand, gravel, and clay. Water fills the spaces between the grains, forming an <b>aquifer</b>. Farms and towns pump this <b>groundwater</b> from wells, especially during droughts when there is less water in rivers and canals." },
      { p: "When too much water is pumped out, the water table drops. Clay layers lose the water that was holding their grains apart, so the clay compacts, like squeezing water out of a sponge. The land above sinks. Once clay is squeezed, it usually does not spring back, so the aquifer permanently loses some of its ability to store water." },
      { p: "Subsidence can crack canals, damage bridges and roads, and break well casings. To protect groundwater, California passed the Sustainable Groundwater Management Act (SGMA) in 2014, which requires local agencies to bring pumping and recharge into balance. One strategy is <b>managed aquifer recharge</b>: spreading floodwater from wet years onto fields or basins so it soaks into the ground and refills the aquifer." }
    ]},
    { tab: "Data", title: "Well and Subsidence Data (sample data)", blocks: [
      { fig: RCG.line({ title: "Figure 1. Depth to Groundwater at a Valley Well", x: { min: 2010, max: 2020, step: 1, label: "Year", every: 2 }, y: { min: 100, max: 220, step: 20, label: "Depth to water (feet below surface)" },
          bands: [{ x1: 2012, x2: 2016 }], notes: [{ x: 2014, y: 214, text: "drought years (shaded)", anchor: "middle" }],
          series: [{ pts: [[2010, 120], [2011, 115], [2012, 140], [2013, 165], [2014, 190], [2015, 210], [2016, 205], [2017, 180], [2018, 190], [2019, 185], [2020, 200]], cls: "s1", dots: true }],
          alt: "Line graph of depth to groundwater from 2010 to 2020. 2010: 120 feet, 2011: 115, 2012: 140, 2013: 165, 2014: 190, 2015: 210, 2016: 205, 2017: 180, 2018: 190, 2019: 185, 2020: 200. The drought years 2012 to 2016 are shaded. A bigger number means the water is deeper underground." }),
        cap: "Figure 1. A larger depth means the water table is LOWER (farther below the surface). Sample data made up for practice." },
      { table: { cap: "Table 1. Land elevation at a nearby benchmark (sample data)", head: ["Year", "Total sinking since 2012 (cm)"], rowHead: true, rows: [["2012", "0"], ["2014", "30"], ["2016", "60"], ["2018", "68"], ["2020", "80"]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "What is an aquifer?", opts: ["A river that flows above ground", "Underground layers of rock and sediment that hold water in their spaces", "A canal that carries water to farms", "A cloud that holds rain"], a: 1, why: "Paragraph 2: water fills the spaces between grains of sand, gravel, and clay underground." },
    { t: "order", ref: 1, q: "Put the events in order to explain how pumping causes the land to sink (first at the top).", items: ["Less surface water is available during a drought.", "More groundwater is pumped from wells.", "The water table drops.", "Clay layers lose water and compact.", "The land surface sinks."], why: "This cause-and-effect chain follows paragraphs 2 and 3." },
    { t: "num", ref: 2, q: "Use Figure 1. What was the depth to groundwater in <b>2015</b>?", a: 210, tol: 0.001, unit: "feet", why: "The point for 2015 is at 210 feet, the deepest on the graph." },
    { t: "mc", ref: 2, q: "Which conclusion is <b>best</b> supported by Figure 1?", opts: ["The water table rose during the drought.", "During the drought, the water table dropped about 90 feet, and it only partly recovered afterward.", "Groundwater depth stayed the same from 2010 to 2020.", "The water table was highest in 2015."], a: 1,
      why: "Depth went from 115–120 feet before the drought to 210 feet in 2015. In 2017 it improved to 180 feet but never returned to 120." },
    { t: "num", ref: 2, q: "Use Table 1. What was the average rate of sinking from 2012 to 2016, in centimeters per year?", a: 15, tol: 0.001, unit: "cm per year", why: "60 cm ÷ 4 years = 15 cm per year." },
    { t: "mc", ref: 2, q: "Compare Table 1 and Figure 1. Why did the land sink faster from 2012 to 2016 than from 2016 to 2020?", opts: ["There was more rain during the drought.", "More groundwater was pumped during the drought, so the water table dropped faster.", "The clay expanded during the drought.", "Earthquakes caused all of the sinking."], a: 1, why: "The fastest drop in the water table (2012–2015) lines up with the fastest sinking (30 cm every 2 years)." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> are effects of land subsidence described in the text?", opts: ["Cracked canals and damaged bridges", "More rainfall in the valley", "Permanent loss of the aquifer’s ability to store water", "Taller mountains", "Warmer ocean temperatures"], a: [0, 2], why: "Paragraphs 3 and 4: compacted clay loses storage permanently, and sinking cracks canals, bridges, roads, and wells." },
    { t: "grid", ref: 1, q: "Classify each as a <b>natural</b> factor or a <b>human</b> factor in subsidence.", cols: ["Natural factor", "Human factor"],
      rows: [["A multi-year drought with low rainfall", 0], ["Pumping groundwater faster than it is recharged", 1], ["Clay layers in the valley’s sediment", 0], ["Spreading floodwater onto recharge basins", 1]],
      why: "Drought and clay layers are natural conditions. Pumping and recharge basins are human choices." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Your community must reduce subsidence. Recommend <b>one</b> solution, use evidence from the text or data to explain why it would work, and describe one trade-off (cost or downside).", min: 45,
      checks: [
        { label: "Names a solution (recharge basins / floodwater, pump less, SGMA limits, conserve water)", re: /recharge|flood|basin|pump less|reduce pumping|limit|sgma|conserv|less water|fallow|drip|efficien/i },
        { label: "Explains how it helps (refills the aquifer / raises the water table / keeps clay from compacting)", re: /refill|raise|water table|aquifer|compact|clay|balance|stop.{0,10}sink|less sinking/i },
        { label: "Describes a trade-off or downside", re: /cost|expens|money|trade|downside|but|however|farm|job|crop|land|less food|fallow/i }
      ],
      rubric: "2 points: a solution, an evidence-based explanation of how it reduces subsidence, and a realistic trade-off. 1 point: a solution with only an explanation or only a trade-off. 0 points: no solution or off topic.",
      model: "Our community should build recharge basins that capture floodwater in wet years. The text explains that subsidence happens when pumping lowers the water table and clay compacts. Putting water back into the aquifer would raise the water table, so less clay would compact. One trade-off is that basins cost money and take up land that could be used for crops." }
  ]
});

/* ======================= CAST 3: LIFE SCIENCES ======================= */
RC["cast-kelp"] = Object.assign({}, CAM, {
  subject: "Science (CAST)", mins: 20,
  title: "Focus: CAST Life Sciences: Where Did Northern California’s Kelp Forests Go?",
  blurb: "Food webs and population changes: analyze kelp and sea urchin data to explain how losing one predator changed a whole ecosystem.",
  eq: "How can a change in one population ripple through an entire ecosystem?",
  target: "I can use data and a food web to explain how changes in one population affect an ecosystem.",
  sources: [
    { tab: "Phenomenon", title: "The Phenomenon: Underwater Forests Disappear", numbered: true, blocks: [
      FOCUS_NOTE("CAST Life Sciences", "42.5%"),
      { p: "Bull kelp is a giant brown seaweed that grows in cold water along the Northern California coast. Kelp forests are home to fish, abalone, crabs, and many other animals. Starting in 2014, divers noticed the forests disappearing. Scientists reported that more than 90% of Northern California’s bull kelp canopy was lost." },
      { p: "Kelp are <b>producers</b>: they use sunlight to make food by photosynthesis. Purple sea urchins are <b>herbivores</b> that graze on kelp. Sunflower sea stars eat urchins, and so do sea otters. However, sea otters live mostly along California’s central coast, not in the north." },
      { p: "Beginning in 2013, a disease called sea star wasting syndrome swept along the Pacific coast and killed most sunflower sea stars. At about the same time, a marine heat wave warmed the ocean from 2014 to 2016. Warm water holds fewer nutrients, so kelp grew poorly." },
      { p: "With their main predator gone, purple urchin populations exploded, increasing about 60-fold in some areas. The urchins ate the weakened kelp down to bare rock, creating “urchin barrens.” Urchins can survive for a long time without much food, so the barrens have lasted for years. Without kelp, the red abalone that depend on it starved, and California closed its red abalone fishery in 2018. Today, some groups remove urchins by hand, and scientists are working to restore sunflower sea stars." }
    ]},
    { tab: "Data", title: "Kelp and Urchin Data (sample data)", blocks: [
      { fig: RCG.line({ title: "Figure 1. Kelp Canopy at a Study Site", x: { min: 2012, max: 2020, step: 1, label: "Year" }, y: { min: 0, max: 100, step: 20, label: "Kelp canopy (% of 2012 amount)" },
          series: [{ pts: [[2012, 100], [2013, 95], [2014, 70], [2015, 30], [2016, 12], [2017, 8], [2018, 7], [2019, 9], [2020, 10]], cls: "s4", dots: true }],
          alt: "Line graph of kelp canopy as a percent of the 2012 amount. 2012: 100, 2013: 95, 2014: 70, 2015: 30, 2016: 12, 2017: 8, 2018: 7, 2019: 9, 2020: 10." }),
        cap: "Sample data based on the trend scientists reported (made up for practice)." },
      { table: { cap: "Table 1. Purple urchins at the same site (sample data)", head: ["Year", "Urchins per square meter"], rowHead: true, rows: [["2012", "0.5"], ["2014", "2"], ["2016", "18"], ["2018", "30"], ["2020", "30"]] } }
    ]}
  ],
  qs: [
    { t: "grid", ref: 1, q: "Classify each organism by its role in the kelp forest food web.", cols: ["Producer", "Primary consumer", "Secondary consumer"],
      rows: [["Bull kelp", 0], ["Purple sea urchin", 1], ["Sunflower sea star", 2], ["Sea otter", 2]],
      why: "Kelp makes its own food (producer). Urchins eat kelp (primary consumer). Sea stars and otters eat urchins (secondary consumers)." },
    { t: "num", ref: 2, q: "Use Figure 1. What was the kelp canopy in <b>2016</b>, as a percent of the 2012 amount?", a: 12, tol: 0.001, unit: "%", why: "The point for 2016 is at 12%." },
    { t: "mc", ref: 2, q: "Which statement is <b>best</b> supported by Figure 1 and Table 1?", opts: ["As urchin numbers increased, kelp canopy decreased.", "As urchin numbers increased, kelp canopy increased.", "Urchins and kelp did not change.", "Kelp recovered fully by 2020."], a: 0,
      why: "Urchins rose from 0.5 to 30 per square meter while kelp fell from 100% to about 10%." },
    { t: "order", ref: 1, q: "Put the events in order (first at the top).", items: ["Sea star wasting disease kills most sunflower sea stars.", "With fewer predators, purple urchin populations explode.", "Urchins eat the kelp down to bare rock.", "Animals that depend on kelp, like red abalone, lose food and habitat."], why: "Losing the predator led to more herbivores, which led to less kelp and less food for other animals (a trophic cascade)." },
    { t: "ebsr", ref: 1,
      A: { q: "Why have the urchin barrens lasted for years instead of recovering quickly?", opts: ["Urchins die quickly without food.", "Urchins can survive a long time with little food, so they keep eating any new kelp.", "Kelp cannot grow in cold water.", "Sea otters moved into the area."], a: 1 },
      B: { q: "Which sentence <b>best</b> supports your answer to Part A?", opts: ["“Kelp are producers: they use sunlight to make food by photosynthesis.”", "“Urchins can survive for a long time without much food, so the barrens have lasted for years.”", "“Bull kelp is a giant brown seaweed…”", "“Sea otters live mostly along California’s central coast.”"], a: 1 },
      why: "Paragraph 4 explains that hungry urchins survive and keep grazing." },
    { t: "mc", ref: 1, q: "Two factors were involved in the kelp loss. Which pair is correct?", opts: ["Overfishing of kelp and cold water", "Loss of sunflower sea stars and a marine heat wave", "Too many sea otters and pollution", "Volcanoes and earthquakes"], a: 1, why: "Paragraph 3: disease killed the predator, and the heat wave weakened the kelp." },
    { t: "multi", need: 2, ref: 1, q: "If sunflower sea stars recovered, which <b>two</b> outcomes would you predict?", opts: ["The purple urchin population would decrease.", "Kelp would have a better chance to regrow.", "Kelp would disappear completely.", "Urchins would have more food.", "Red abalone would lose more habitat."], a: [0, 1], why: "More predators mean fewer urchins, and fewer urchins means less grazing, so kelp can regrow." },
    { t: "num", ref: 2, q: "Use Table 1. By how many <b>times</b> did the urchin density increase from 2012 to 2018?", a: 60, tol: 0.001, unit: "times", why: "30 ÷ 0.5 = 60, which matches the “about 60-fold” increase in the text." },
    { t: "write", ref: 2, q: "<b>Brief write (CER).</b> Explain why Northern California’s kelp forests declined. Include a claim, evidence from the data, and reasoning that uses the food web.", min: 40,
      checks: [
        { label: "Claim: urchins (after losing sea star predators) ate the kelp", re: /urchin/i },
        { label: "Evidence: uses a number from Figure 1 or Table 1", re: /\b(100|95|70|30|12|8|7|9|10|0\.5|2|18|60)\b ?(%|percent|urchins|per|times|fold)?/i },
        { label: "Reasoning: food web: fewer predators (sea stars) → more urchins → less kelp", re: /(sea star|predator|starfish).{0,80}(urchin)|(urchin).{0,80}(sea star|predator)|food web|trophic|cascade/i }
      ],
      rubric: "2 points: a clear claim, data, and food-web reasoning that connects the predator loss to the kelp decline. 1 point: two of the three parts. 0 points: one or none.",
      model: "Northern California’s kelp forests declined because purple urchins ate them. At the study site, urchins rose from 0.5 to 30 per square meter while kelp fell to about 10% of its 2012 amount. When sea star wasting disease killed the sunflower sea stars that eat urchins, the urchin population exploded, and the hungry urchins grazed the kelp down to bare rock." }
  ]
});
