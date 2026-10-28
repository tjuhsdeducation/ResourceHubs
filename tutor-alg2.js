/* =====================================================================
   ✏️ TUTOR GUIDE: ALGEBRA 2 (shown on tutor-math.html, tutors only)
   One { ... } block per unit. Same format as tutor-alg1.js:
     id, course, unit, title, standards, bigIdea, vocab:[[term, meaning]],
     steps:[{name, list:[...]}], examples:[{q, steps:[...], answer}],
     mistakes:[[what the student does, what to say]], ask:[...],
     check:[{q, a}], visual (optional SVG/HTML), tips (optional HTML)
   Visuals marked "A2V_..." are drawn at the bottom of this file.
   ===================================================================== */
(window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(

/* ---------------- UNIT 1 ---------------- */
{ id: "a2-01", course: "Algebra 2", unit: 1, title: "Functions, Domain & Range, and Transformations", standards: "F.IF.1–2, F.IF.5, F.BF.3",
  bigIdea: "Algebra 2 is mostly about families of functions (quadratic, absolute value, square root, cubic, exponential…). Every family has a simple “parent” graph, and every other graph in that family is the parent shifted, flipped, or stretched. If a student knows the parent and can read the numbers in the equation, they can sketch almost anything.",
  tips: "Have the student say the transformation out loud in order: “flip, stretch, then slide.” The number <i>inside</i> with x does the opposite of what it looks like (x − 3 moves RIGHT). Graphing calculators or Desmos are great for checking: type the parent and the new function and compare.",
  vocab: [
    ["function", "A rule where every input (x) has exactly one output (y). On a graph, it passes the vertical line test."],
    ["f(x) notation", "f(3) means “plug in 3 for x.” It is NOT f times 3."],
    ["domain", "All the x-values you are allowed to use (left to right on the graph)."],
    ["range", "All the y-values the function actually produces (bottom to top on the graph)."],
    ["parent function", "The simplest function in a family: y = x², y = |x|, y = √x, y = x³, y = 1/x, y = 2<sup>x</sup>."],
    ["translation", "A slide. f(x) + k moves up k. f(x − h) moves RIGHT h (opposite of the sign)."],
    ["reflection", "A flip. −f(x) flips over the x-axis (upside down). f(−x) flips over the y-axis (left-right)."],
    ["vertical stretch / compression", "a·f(x). If |a| > 1 the graph gets taller/skinnier; if 0 < |a| < 1 it gets flatter/wider."]
  ],
  steps: [
    { name: "Reading a transformation: g(x) = a·f(x − h) + k", list: ["Find the parent function (what’s the “shape”: x², |x|, √x, x³?).", "<b>a</b>: negative → flip over the x-axis. |a| > 1 → stretch; between 0 and 1 → compress.", "<b>h</b>: the number with x inside. (x − 3) → right 3; (x + 3) → left 3.", "<b>k</b>: the number added at the end. +4 → up 4; −4 → down 4.", "Move the parent’s key point (vertex or starting point) to (h, k), then use a to draw the shape."] },
    { name: "Evaluating f(x)", list: ["Rewrite the function with empty parentheses where every x was.", "Put the input inside each set of parentheses (especially negatives!).", "Follow the order of operations."] },
    { name: "Finding domain and range", list: ["Ask: is there any x I can’t use? (Square root of a negative, or dividing by zero.)", "Square root: set what’s inside ≥ 0 and solve.", "Range: look at the lowest and highest point on the graph (the vertex or starting point usually tells you)."] }
  ],
  examples: [
    { q: "Describe how g(x) = −2(x − 3)² + 4 is transformed from f(x) = x².", steps: ["The parent is x² (a U-shaped parabola).", "a = −2: the negative flips it upside down; the 2 makes it skinnier (vertical stretch by 2).", "(x − 3): moves RIGHT 3 (opposite of the sign).", "+4: moves UP 4.", "So the vertex moves from (0, 0) to (3, 4) and the parabola opens down."], answer: "Reflected over the x-axis, stretched by 2, right 3, up 4. Vertex (3, 4)." },
    { q: "Write the equation: the graph of y = |x| is moved left 5 and down 2.", steps: ["Left 5 means the inside becomes (x + 5). Remember: inside is the opposite.", "Down 2 means subtract 2 at the end.", "Put it together."], answer: "y = |x + 5| − 2, vertex (−5, −2)" },
    { q: "If f(x) = x² − 3x, find f(−2) and f(a + 1).", steps: ["f(−2) = (−2)² − 3(−2) = 4 + 6 = 10.", "For f(a + 1), put (a + 1) everywhere x was: (a + 1)² − 3(a + 1).", "Expand: (a + 1)² = a² + 2a + 1, and −3(a + 1) = −3a − 3.", "Combine: a² + 2a + 1 − 3a − 3 = a² − a − 2."], answer: "f(−2) = 10, f(a + 1) = a² − a − 2" },
    { q: "Find the domain and range of f(x) = √(x − 4) + 1.", steps: ["You can’t take the square root of a negative, so x − 4 ≥ 0.", "Solve: x ≥ 4. That is the domain.", "The parent √x starts at (0, 0). This one starts at (4, 1) because of right 4, up 1.", "From the starting point the graph only goes up, so y ≥ 1."], answer: "Domain: x ≥ 4. Range: y ≥ 1." }
  ],
  mistakes: [
    ["Says (x − 3) moves the graph left 3.", "“Inside the parentheses works backwards. What x-value makes x − 3 equal zero? That’s where the vertex goes.”"],
    ["Thinks f(3) means f × 3.", "“f(3) is a question: what comes out when 3 goes in?”"],
    ["Writes −2² = 4 when evaluating f(−2) = x².", "“Put the −2 in parentheses first: (−2)² = 4. Without parentheses the calculator gives −4.”"],
    ["Mixes up domain and range.", "“Domain is x, left to right. Range is y, bottom to top. D comes before R and x comes before y.”"],
    ["Forgets the flip when a is negative.", "“What does the negative in front do to every y-value?”"]
  ],
  ask: ["What is the parent function? What does its basic shape look like?", "Which number moves it left or right? Which number moves it up or down?", "Where does the vertex (or starting point) end up?", "Is there any x-value that would break this function?", "Can you check your sketch by plugging in one point?"],
  check: [
    { q: "Describe g(x) = (x + 2)³ − 1 compared to y = x³.", a: "Left 2, down 1." },
    { q: "f(x) = 2x² + 1. Find f(−3).", a: "2(9) + 1 = 19" },
    { q: "Domain of f(x) = √(x + 6)?", a: "x ≥ −6" }
  ],
  visual: "A2V_TRANS" },

/* ---------------- UNIT 2 ---------------- */
{ id: "a2-02", course: "Algebra 2", unit: 2, title: "Absolute Value & Piecewise Functions", standards: "A.CED.1, A.REI.11, F.IF.7b",
  bigIdea: "Absolute value means distance from zero, so it is never negative. That is why absolute value equations usually have TWO answers (one on each side) and why “|x| = −5” has no solution. Piecewise functions are just different rules for different parts of the x-axis.",
  tips: "Before solving, make sure the absolute value is <b>alone</b> on one side. That single step fixes most mistakes. For inequalities, teach “less thAND” (less than → AND, a single interval) and “greatOR” (greater than → OR, two separate pieces).",
  vocab: [
    ["absolute value |x|", "The distance from 0 on a number line. |−7| = 7 and |7| = 7."],
    ["absolute value equation", "An equation like |2x − 5| = 9. Split into two equations: inside = 9 and inside = −9."],
    ["extraneous solution", "An answer that comes out of the algebra but doesn’t work when you check it in the original."],
    ["compound inequality", "Two inequalities joined by AND (between, like −2 < x < 5) or OR (outside, like x < −2 or x > 5)."],
    ["piecewise function", "A function made of pieces, each with its own rule and its own part of the domain."],
    ["vertex of y = a|x − h| + k", "The point (h, k), the tip of the V."]
  ],
  steps: [
    { name: "Solving an absolute value equation", list: ["Get the absolute value alone (undo any + − × ÷ outside the bars).", "If it equals a negative number, STOP: no solution.", "Write two equations: inside = the number, and inside = the negative of the number.", "Solve both. Check both answers in the original."] },
    { name: "Solving an absolute value inequality", list: ["Get the absolute value alone.", "<b>|stuff| &lt; c</b> → “sandwich”: −c &lt; stuff &lt; c (AND).", "<b>|stuff| &gt; c</b> → two pieces: stuff &lt; −c OR stuff &gt; c.", "Solve. If you multiply or divide by a negative, flip the inequality sign.", "Graph: AND is one shaded segment; OR is two arrows going outward."] },
    { name: "Evaluating a piecewise function", list: ["Look at the x-value you are given.", "Find the piece whose condition (x &lt; 1, x ≥ 1, …) that x fits. Watch the = sign at the boundary.", "Plug x into ONLY that piece’s rule."] }
  ],
  examples: [
    { q: "Solve |2x − 5| = 9.", steps: ["The absolute value is already alone.", "Case 1: 2x − 5 = 9 → 2x = 14 → x = 7.", "Case 2: 2x − 5 = −9 → 2x = −4 → x = −2.", "Check: |2(7) − 5| = |9| = 9 ✓ and |2(−2) − 5| = |−9| = 9 ✓"], answer: "x = 7 or x = −2" },
    { q: "Solve |x + 3| − 4 &lt; 2 and graph.", steps: ["Get the absolute value alone: add 4 → |x + 3| &lt; 6.", "Less than → sandwich: −6 &lt; x + 3 &lt; 6.", "Subtract 3 from all three parts: −9 &lt; x &lt; 3.", "Graph: open circles at −9 and 3, shade between."], answer: "−9 &lt; x &lt; 3" },
    { q: "Solve |3x + 1| ≥ 7.", steps: ["Greater than → two pieces (OR).", "3x + 1 ≥ 7 → 3x ≥ 6 → x ≥ 2.", "3x + 1 ≤ −7 → 3x ≤ −8 → x ≤ −8/3.", "Graph: closed circles, arrows pointing outward."], answer: "x ≤ −8/3 or x ≥ 2" },
    { q: "f(x) = x + 2 when x &lt; 1, and f(x) = 3x when x ≥ 1. Find f(−4), f(1), and f(5).", steps: ["−4 &lt; 1, so use the first piece: −4 + 2 = −2.", "1 is not less than 1, but 1 ≥ 1, so use the second piece: 3(1) = 3.", "5 ≥ 1, so use the second piece: 3(5) = 15."], answer: "f(−4) = −2, f(1) = 3, f(5) = 15" }
  ],
  mistakes: [
    ["Splits into two cases before getting the absolute value alone, e.g. |x| + 4 = 10 → x + 4 = 10 and x + 4 = −10.", "“What has to happen before we can split? Get the bars alone first: |x| = 6.”"],
    ["Gives an answer for |x − 2| = −5.", "“Can a distance be negative? Then there is no solution.”"],
    ["Makes only the number negative but writes −(2x − 5) wrong, or only solves one case.", "“Absolute value equations usually have two answers. Where’s the other one?”"],
    ["Uses AND for a “greater than” problem.", "“Greater-OR. The answers are far away from the center, so they go in two directions.”"],
    ["Uses both pieces of a piecewise function.", "“Which condition does this x-value match? Only use that rule.”"]
  ],
  ask: ["Is the absolute value alone yet?", "What number is it equal to? Could that ever be a distance?", "Is this a ‘less than’ (between) or ‘greater than’ (outside) problem?", "Did you check both answers in the original equation?", "Which piece of the function does this x belong to?"],
  check: [
    { q: "Solve |x − 4| = 10.", a: "x = 14 or x = −6" },
    { q: "Solve |2x| ≤ 8.", a: "−4 ≤ x ≤ 4" },
    { q: "Solve |x + 1| + 6 = 2.", a: "|x + 1| = −4, so no solution." }
  ],
  visual: "A2V_ABS" },

/* ---------------- UNIT 3 ---------------- */
{ id: "a2-03", course: "Algebra 2", unit: 3, title: "Systems of Equations (2 and 3 Variables)", standards: "A.CED.3, A.REI.6, A.REI.11",
  bigIdea: "A system is two or more equations that must be true at the same time. The solution is the point where the graphs cross. Algebra 2 adds systems with three variables (x, y, z): the trick is to use elimination to knock out one variable and turn it into a 2-variable system students already know how to solve.",
  tips: "For 3-variable systems, have the student <b>label the equations</b> ①, ②, ③ and write which two they are combining each time. Most errors are lost negative signs while subtracting, so encourage adding the opposite instead of subtracting.",
  vocab: [
    ["system of equations", "A set of equations with the same variables. The solution makes all of them true."],
    ["solution of a system", "An ordered pair (x, y) or triple (x, y, z) that works in every equation."],
    ["substitution", "Solve one equation for a variable, then plug that expression into the other equation."],
    ["elimination", "Add or subtract equations (after multiplying if needed) so one variable cancels."],
    ["no solution / infinitely many", "Parallel lines never cross (0 = 5 → no solution). The same line twice (0 = 0 → infinitely many)."],
    ["ordered triple", "A solution with three values, written (x, y, z)."]
  ],
  steps: [
    { name: "Elimination (2 variables)", list: ["Line up x’s, y’s, and numbers.", "Multiply one or both equations so a variable has opposite coefficients (like 3y and −3y).", "Add the equations. One variable disappears.", "Solve, then plug back in to find the other variable.", "Check in BOTH original equations."] },
    { name: "Solving a 3-variable system", list: ["Label the equations ①, ②, ③.", "Pick a variable to eliminate (one with easy coefficients, like z with +1 and −1).", "Use ① and ② to eliminate it → new equation ④ (only 2 variables).", "Use a different pair (like ② and ③ or ① and ③) to eliminate the SAME variable → equation ⑤.", "Solve ④ and ⑤ as a 2-variable system.", "Plug both values into any original equation to find the third variable. Check all three."] }
  ],
  examples: [
    { q: "Solve: 2x + y = 7 and x − y = 2.", steps: ["The y’s are already opposites (+y and −y). Add the equations: 3x = 9.", "x = 3.", "Plug into x − y = 2: 3 − y = 2, so y = 1.", "Check in 2x + y = 7: 2(3) + 1 = 7 ✓"], answer: "(3, 1)" },
    { q: "Solve by substitution: y = 2x − 1 and 3x + 2y = 12.", steps: ["The first equation already says what y is. Replace y in the second equation: 3x + 2(2x − 1) = 12.", "Distribute: 3x + 4x − 2 = 12.", "Combine: 7x − 2 = 12 → 7x = 14 → x = 2.", "y = 2(2) − 1 = 3."], answer: "(2, 3)" },
    { q: "Solve: ① x + y + z = 6, ② 2x − y + z = 3, ③ x + 2y − z = 2.", steps: ["Eliminate z. ① + ③: (x + y + z) + (x + 2y − z) = 6 + 2 → ④ 2x + 3y = 8.", "② + ③: (2x − y + z) + (x + 2y − z) = 3 + 2 → ⑤ 3x + y = 5.", "From ⑤, y = 5 − 3x. Substitute into ④: 2x + 3(5 − 3x) = 8 → 2x + 15 − 9x = 8 → −7x = −7 → x = 1.", "y = 5 − 3(1) = 2.", "Use ①: 1 + 2 + z = 6 → z = 3.", "Check ②: 2 − 2 + 3 = 3 ✓ and ③: 1 + 4 − 3 = 2 ✓"], answer: "(1, 2, 3)" },
    { q: "A school sold 200 tickets for $1,270. Adult tickets cost $8 and student tickets cost $5. How many of each were sold?", steps: ["Let a = adult tickets and s = student tickets.", "Number of tickets: a + s = 200. Money: 8a + 5s = 1270.", "From the first, s = 200 − a. Substitute: 8a + 5(200 − a) = 1270.", "8a + 1000 − 5a = 1270 → 3a = 270 → a = 90.", "s = 200 − 90 = 110. Check: 8(90) + 5(110) = 720 + 550 = 1270 ✓"], answer: "90 adult tickets and 110 student tickets" }
  ],
  mistakes: [
    ["Multiplies only one side of an equation (or only one term) before eliminating.", "“Whatever you multiply, it has to be the WHOLE equation, every term on both sides.”"],
    ["In a 3-variable system, eliminates z with one pair and y with the other pair.", "“Both new equations need to be missing the SAME variable. Which one did we choose?”"],
    ["Stops after finding x.", "“A solution is a point. What else do we need?”"],
    ["Subtracts equations and loses signs.", "“Try multiplying by −1 and adding instead. It’s easier to keep track.”"],
    ["Gets 0 = 0 and writes x = 0.", "“When everything cancels and it’s true, the lines are the same: infinitely many solutions.”"]
  ],
  ask: ["Which variable looks easiest to eliminate? Why?", "Which two equations are you combining right now?", "What do you need to multiply by to make those coefficients opposites?", "Now that you have one variable, how do you find the others?", "Does your answer work in every original equation?"],
  check: [
    { q: "Solve: x + y = 10 and x − y = 4.", a: "(7, 3)" },
    { q: "Solve: y = 3x and 2x + y = 15.", a: "x = 3, y = 9 → (3, 9)" },
    { q: "What does it mean if you get 0 = 7?", a: "No solution (parallel lines / planes that don’t meet)." }
  ],
  visual: "A2V_SYS" },

/* ---------------- UNIT 4 ---------------- */
{ id: "a2-04", course: "Algebra 2", unit: 4, title: "Quadratic Functions: Forms, Vertex, Factoring & Completing the Square", standards: "A.SSE.3, A.REI.4, F.IF.7a, F.IF.8a",
  bigIdea: "A quadratic makes a parabola. The three forms each show something different: standard form y = ax² + bx + c shows the y-intercept (c), vertex form y = a(x − h)² + k shows the vertex (h, k), and factored form y = a(x − p)(x − q) shows the x-intercepts (p and q). Solving a quadratic means finding where it crosses the x-axis.",
  tips: "Always ask the student to get the equation <b>equal to zero</b> before factoring. For factoring, ask, “What two numbers multiply to c and add to b?” If the numbers won’t come, it’s fine to switch to the quadratic formula (Unit 5). The formula always works.",
  vocab: [
    ["standard form", "y = ax² + bx + c. If a > 0 it opens up; if a < 0 it opens down. c is the y-intercept."],
    ["vertex", "The turning point (the highest or lowest point) of the parabola."],
    ["axis of symmetry", "The vertical line through the vertex: x = −b/(2a)."],
    ["vertex form", "y = a(x − h)² + k with vertex (h, k)."],
    ["zeros / roots / x-intercepts / solutions", "All names for where y = 0 (where the graph crosses the x-axis)."],
    ["factored form", "y = a(x − p)(x − q). The zeros are x = p and x = q."],
    ["Zero Product Property", "If A · B = 0, then A = 0 or B = 0. This is why we set each factor equal to zero."],
    ["completing the square", "Adding (b/2)² to both sides to make a perfect square trinomial, like x² + 6x + 9 = (x + 3)²."]
  ],
  steps: [
    { name: "Finding the vertex from standard form", list: ["Identify a, b, and c.", "x-coordinate: x = −b/(2a).", "y-coordinate: plug that x back into the function.", "Opens up (a > 0) → the vertex is a minimum. Opens down → maximum."] },
    { name: "Solving by factoring", list: ["Move everything to one side so it equals 0.", "Factor out a GCF if there is one.", "If a = 1: find two numbers that multiply to c and add to b.", "If a ≠ 1: multiply a·c, find two numbers that multiply to ac and add to b, split the middle term, and factor by grouping.", "Set each factor = 0 and solve."] },
    { name: "Completing the square (when a = 1)", list: ["Move c to the other side: x² + bx = −c.", "Take half of b and square it: (b/2)². Add it to BOTH sides.", "Write the left side as (x + b/2)².", "Take the square root of both sides. Don’t forget ±.", "Solve for x."] }
  ],
  examples: [
    { q: "Find the vertex and axis of symmetry of y = 2x² − 8x + 3. Is the vertex a max or min?", steps: ["a = 2, b = −8, c = 3.", "x = −b/(2a) = −(−8)/(2·2) = 8/4 = 2.", "y = 2(2)² − 8(2) + 3 = 8 − 16 + 3 = −5.", "a = 2 is positive, so it opens up and the vertex is a minimum."], answer: "Vertex (2, −5), axis x = 2, minimum value −5" },
    { q: "Solve x² − x − 12 = 0 by factoring.", steps: ["Find two numbers that multiply to −12 and add to −1: −4 and 3.", "Factor: (x − 4)(x + 3) = 0.", "Set each factor to zero: x − 4 = 0 → x = 4; x + 3 = 0 → x = −3."], answer: "x = 4 or x = −3" },
    { q: "Solve 2x² + 7x + 3 = 0 by factoring.", steps: ["a·c = 2·3 = 6. Two numbers that multiply to 6 and add to 7: 6 and 1.", "Split the middle: 2x² + 6x + x + 3 = 0.", "Group: 2x(x + 3) + 1(x + 3) = 0 → (2x + 1)(x + 3) = 0.", "2x + 1 = 0 → x = −1/2; x + 3 = 0 → x = −3."], answer: "x = −1/2 or x = −3" },
    { q: "Solve x² + 6x − 7 = 0 by completing the square.", steps: ["Move the 7: x² + 6x = 7.", "Half of 6 is 3, and 3² = 9. Add 9 to both sides: x² + 6x + 9 = 16.", "Rewrite: (x + 3)² = 16.", "Square root both sides: x + 3 = ±4.", "x = −3 + 4 = 1 or x = −3 − 4 = −7."], answer: "x = 1 or x = −7" },
    { q: "Write y = x² − 4x + 1 in vertex form.", steps: ["Group the x-terms: y = (x² − 4x) + 1.", "Half of −4 is −2; (−2)² = 4. Add AND subtract 4: y = (x² − 4x + 4) + 1 − 4.", "Rewrite: y = (x − 2)² − 3."], answer: "y = (x − 2)² − 3, vertex (2, −3)" }
  ],
  mistakes: [
    ["Tries to factor x² + 5x = 6 without moving the 6.", "“Factoring only works when the other side is zero. What do we do with the 6 first?”"],
    ["Writes x = −b/2a and forgets the negative when b is negative.", "“−(−8) is a double negative. What does that become?”"],
    ["Gets (x − 4)(x + 3) and says the answers are −4 and 3.", "“Set each one equal to zero. What makes x − 4 equal zero?”"],
    ["Forgets the ± when taking a square root.", "“What two numbers squared give 16?”"],
    ["Adds (b/2)² to only one side when completing the square.", "“It’s an equation, so it has to stay balanced. What goes on the other side?”"]
  ],
  ask: ["Is it set equal to zero yet?", "Is there a GCF you can pull out first?", "What two numbers multiply to ___ and add to ___?", "Does the parabola open up or down? How do you know?", "Can you check one answer by plugging it in?"],
  check: [
    { q: "Vertex of y = x² + 10x + 21?", a: "x = −5, y = 25 − 50 + 21 = −4 → (−5, −4)" },
    { q: "Factor x² − 9x + 20.", a: "(x − 4)(x − 5)" },
    { q: "Solve x² = 49.", a: "x = 7 or x = −7" }
  ],
  visual: "A2V_QUAD" },

/* ---------------- UNIT 5 ---------------- */
{ id: "a2-05", course: "Algebra 2", unit: 5, title: "Complex Numbers & the Quadratic Formula", standards: "N.CN.1–2, N.CN.7, A.REI.4b",
  bigIdea: "Some parabolas never touch the x-axis, so they have no real solutions. Algebra 2 gives those equations answers anyway using the imaginary unit i, where i² = −1. The quadratic formula solves every quadratic, and the discriminant (b² − 4ac) tells you ahead of time what kind of answers you will get.",
  tips: "Treat i like a variable (like x) while adding and multiplying, then replace i² with −1 at the end. Students who are nervous about the quadratic formula do better if they first write a = __, b = __, c = __ and compute the discriminant separately before putting everything together.",
  vocab: [
    ["imaginary unit i", "i = √−1, so i² = −1."],
    ["complex number", "A number written a + bi. a is the real part and b is the imaginary part. Example: 3 − 2i."],
    ["complex conjugate", "Same number with the sign of the imaginary part flipped: the conjugate of 2 + 5i is 2 − 5i. Multiplying conjugates gives a real number."],
    ["quadratic formula", "x = (−b ± √(b² − 4ac)) / (2a) for ax² + bx + c = 0."],
    ["discriminant", "b² − 4ac. Positive → 2 real solutions. Zero → 1 real solution. Negative → 2 complex (imaginary) solutions."],
    ["powers of i", "i¹ = i, i² = −1, i³ = −i, i⁴ = 1, then the pattern repeats every 4."]
  ],
  steps: [
    { name: "Simplifying square roots of negatives", list: ["Pull out the −1 as i: √−48 = i√48.", "Simplify the rest: √48 = √16 · √3 = 4√3.", "Answer: 4i√3."] },
    { name: "Adding / multiplying complex numbers", list: ["Add or subtract: combine real parts, then combine imaginary parts.", "Multiply: use FOIL or the box method, just like (x + 2)(x − 3).", "Replace every i² with −1, then combine like terms.", "Write the answer in a + bi form."] },
    { name: "Using the quadratic formula", list: ["Write the equation as ax² + bx + c = 0. Write down a, b, c (with their signs).", "Find the discriminant b² − 4ac first.", "Plug into x = (−b ± √discriminant) / (2a).", "Simplify the square root (use i if the discriminant is negative), then split into + and − answers."] },
    { name: "Dividing complex numbers", list: ["Multiply the top and bottom by the conjugate of the bottom.", "The bottom becomes a real number (a² + b²).", "Simplify the top and split into a + bi."] }
  ],
  examples: [
    { q: "Simplify: (3 + 2i)(1 − 4i).", steps: ["FOIL: 3·1 = 3, 3·(−4i) = −12i, 2i·1 = 2i, 2i·(−4i) = −8i².", "So far: 3 − 12i + 2i − 8i².", "Replace i² with −1: −8i² = −8(−1) = +8.", "Combine: (3 + 8) + (−12i + 2i) = 11 − 10i."], answer: "11 − 10i" },
    { q: "Simplify: (5 − 3i) − (2 + 7i).", steps: ["Distribute the minus: 5 − 3i − 2 − 7i.", "Real parts: 5 − 2 = 3. Imaginary parts: −3i − 7i = −10i."], answer: "3 − 10i" },
    { q: "Solve x² − 4x + 13 = 0.", steps: ["a = 1, b = −4, c = 13.", "Discriminant: (−4)² − 4(1)(13) = 16 − 52 = −36. Negative → two complex solutions.", "x = (4 ± √−36) / 2 = (4 ± 6i) / 2.", "Divide both parts by 2: x = 2 ± 3i."], answer: "x = 2 + 3i or x = 2 − 3i" },
    { q: "Use the discriminant to describe the solutions of 3x² + 2x − 5 = 0, then solve.", steps: ["a = 3, b = 2, c = −5.", "Discriminant: 2² − 4(3)(−5) = 4 + 60 = 64. Positive and a perfect square → 2 real, rational solutions.", "x = (−2 ± √64) / 6 = (−2 ± 8) / 6.", "x = 6/6 = 1 or x = −10/6 = −5/3."], answer: "Two real solutions: x = 1 and x = −5/3" },
    { q: "Simplify (2 + i) / (1 − i).", steps: ["The conjugate of 1 − i is 1 + i. Multiply top and bottom by (1 + i).", "Top: (2 + i)(1 + i) = 2 + 2i + i + i² = 2 + 3i − 1 = 1 + 3i.", "Bottom: (1 − i)(1 + i) = 1 − i² = 1 + 1 = 2.", "(1 + 3i)/2 = 1/2 + (3/2)i."], answer: "1/2 + (3/2)i" }
  ],
  mistakes: [
    ["Leaves i² in the final answer.", "“What is i² equal to? Replace it and combine.”"],
    ["Writes −b as −4 when b = −4.", "“−b means the opposite of b. The opposite of −4 is…?”"],
    ["Squares a negative b in the calculator as −4² = −16.", "“b² is always positive. Type (−4)² with parentheses.”"],
    ["Divides only the first term by 2a: (4 ± 6i)/2 → 2 ± 6i.", "“The fraction bar is under the whole top. Both pieces get divided.”"],
    ["Says ‘no solution’ when the discriminant is negative.", "“No REAL solution. In Algebra 2 we can still write complex solutions with i.”"]
  ],
  ask: ["What are a, b, and c? Watch the signs.", "What does the discriminant tell you before you even finish?", "Where did the i² go?", "Can you write the answer in a + bi form?", "How could you check this in your calculator?"],
  check: [
    { q: "Simplify (2 + i)².", a: "4 + 4i + i² = 3 + 4i" },
    { q: "Simplify i<sup>10</sup>.", a: "10 ÷ 4 leaves remainder 2, so i² = −1" },
    { q: "Solve x² + 25 = 0.", a: "x² = −25 → x = ±5i" }
  ],
  visual: "A2V_CPLX" },

/* ---------------- UNIT 6 ---------------- */
{ id: "a2-06", course: "Algebra 2", unit: 6, title: "Polynomial Functions: Operations, Division, Factoring & Zeros", standards: "A.APR.1–3, A.APR.6, F.IF.7c",
  bigIdea: "Polynomials are sums of terms like 3x⁴ − 2x² + 7. The degree (highest exponent) and the sign of the leading coefficient tell you the end behavior. Dividing and factoring a polynomial lets you find its zeros, and the zeros tell you where the graph crosses or touches the x-axis.",
  tips: "Synthetic division only works when you divide by (x − number), and you must include a 0 for any missing power. Have the student write the coefficients in a row with placeholders before starting. A remainder of 0 is a celebration: it means the number is a zero!",
  vocab: [
    ["degree", "The highest exponent. x³ − 2x + 1 has degree 3 (cubic)."],
    ["leading coefficient", "The number in front of the highest-power term when written in order."],
    ["end behavior", "What the graph does on the far left and far right (rises or falls)."],
    ["zero (root)", "An x-value where f(x) = 0. If x = 2 is a zero, then (x − 2) is a factor."],
    ["multiplicity", "How many times a factor repeats. Odd → the graph crosses the x-axis. Even → it touches and bounces."],
    ["synthetic division", "A shortcut for dividing a polynomial by (x − c) using only the coefficients."],
    ["Remainder Theorem", "The remainder when f(x) is divided by (x − c) equals f(c)."],
    ["sum/difference of cubes", "a³ + b³ = (a + b)(a² − ab + b²) and a³ − b³ = (a − b)(a² + ab + b²)."]
  ],
  steps: [
    { name: "End behavior", list: ["Look only at the leading term.", "Even degree: both ends go the same way (up/up if positive, down/down if negative).", "Odd degree: ends go opposite ways (down-left/up-right if positive, up-left/down-right if negative)."] },
    { name: "Synthetic division by (x − c)", list: ["Write c in the box (for x − 2 write 2; for x + 3 write −3).", "Write all coefficients in order, using 0 for any missing power.", "Bring down the first coefficient.", "Multiply by c, write under the next column, add. Repeat to the end.", "The last number is the remainder. The others are the quotient’s coefficients (one degree lower)."] },
    { name: "Factoring a polynomial", list: ["Always take out a GCF first.", "4 terms → try grouping.", "Two cubes → sum/difference of cubes pattern.", "Quadratic form (like x⁴ − 5x² + 4) → factor like a quadratic.", "If you know one zero, use synthetic division to get a smaller polynomial and keep factoring."] }
  ],
  examples: [
    { q: "Describe the end behavior of f(x) = −2x⁵ + 4x² − 1.", steps: ["Leading term: −2x⁵. Degree 5 is odd, so the ends go opposite ways.", "The coefficient is negative, so it rises on the left and falls on the right."], answer: "As x → −∞, f(x) → +∞; as x → +∞, f(x) → −∞" },
    { q: "Multiply: (x + 2)(x² − 3x + 4).", steps: ["Multiply x by each term: x³ − 3x² + 4x.", "Multiply 2 by each term: 2x² − 6x + 8.", "Combine like terms: x³ + (−3x² + 2x²) + (4x − 6x) + 8."], answer: "x³ − x² − 2x + 8" },
    { q: "Divide (x³ − 4x² + x + 6) ÷ (x − 2) and find all zeros.", steps: ["Box: 2. Coefficients: 1, −4, 1, 6.", "Bring down 1. 1·2 = 2; −4 + 2 = −2.", "−2·2 = −4; 1 + (−4) = −3.", "−3·2 = −6; 6 + (−6) = 0. Remainder 0, so x = 2 is a zero.", "Quotient: x² − 2x − 3 = (x − 3)(x + 1)."], answer: "x³ − 4x² + x + 6 = (x − 2)(x − 3)(x + 1); zeros 2, 3, −1" },
    { q: "Factor completely and find the zeros: x³ + 3x² − 4x − 12.", steps: ["Four terms → group: (x³ + 3x²) + (−4x − 12).", "Factor each group: x²(x + 3) − 4(x + 3).", "Common factor: (x + 3)(x² − 4).", "Difference of squares: (x + 3)(x − 2)(x + 2)."], answer: "(x + 3)(x − 2)(x + 2); zeros −3, 2, −2" },
    { q: "Use the Remainder Theorem: what is the remainder when f(x) = x³ − 2x + 5 is divided by (x + 2)?", steps: ["Dividing by (x + 2) means c = −2.", "f(−2) = (−2)³ − 2(−2) + 5 = −8 + 4 + 5 = 1."], answer: "Remainder = 1" }
  ],
  mistakes: [
    ["Uses 2 in the box when dividing by (x + 2).", "“What makes x + 2 equal zero? That’s the number that goes in the box.”"],
    ["Skips a missing power, e.g. writes 1, −2, 5 for x³ − 2x + 5.", "“Is there an x² term? We need a 0 to hold its place: 1, 0, −2, 5.”"],
    ["Writes the quotient with the same degree as the original.", "“Dividing by x − c lowers the degree by 1.”"],
    ["Factors (x² − 4) as (x − 2)².", "“Multiply (x − 2)(x − 2) back out. Does it give x² − 4?”"],
    ["Thinks a double root crosses the x-axis.", "“Even multiplicity bounces off the axis. Check it on the graph.”"]
  ],
  ask: ["What is the degree? What’s the sign of the leading coefficient?", "Is there a GCF first?", "Is any power missing? What placeholder do we need?", "What does a remainder of zero tell you?", "Which zeros cross and which ones touch?"],
  check: [
    { q: "End behavior of f(x) = 3x⁴ − x?", a: "Even degree, positive: up on both ends." },
    { q: "Zeros of f(x) = x(x − 1)²(x + 4) and how the graph behaves?", a: "0 (crosses), 1 (multiplicity 2, touches), −4 (crosses)" },
    { q: "Factor x³ + 27.", a: "(x + 3)(x² − 3x + 9)" }
  ],
  visual: "A2V_POLY" },

/* ---------------- UNIT 7 ---------------- */
{ id: "a2-07", course: "Algebra 2", unit: 7, title: "Radicals, Rational Exponents & Inverse Functions", standards: "N.RN.1–2, A.REI.2, F.BF.4",
  bigIdea: "A fractional exponent is just another way to write a root: the bottom of the fraction is the root and the top is the power. Radical equations are solved by isolating the radical and raising both sides to a power, but that can create fake (extraneous) answers, so checking is required. An inverse function “undoes” the original; its graph is the original reflected over the line y = x.",
  tips: "Memory trick for rational exponents: “<b>power over root</b>” (like a flower: the power is on top, the root is underground). For radical equations, checking is not optional. Have the student plug every answer back in before writing it down.",
  vocab: [
    ["radical / index", "√ is a radical. The small number in the notch is the index: ∛ has index 3 (cube root). No number means square root (index 2)."],
    ["rational exponent", "x<sup>m/n</sup> = (ⁿ√x)<sup>m</sup>. Example: 8<sup>2/3</sup> = (∛8)² = 4."],
    ["negative exponent", "x<sup>−n</sup> = 1/x<sup>n</sup>. It means “flip it,” not “make it negative.”"],
    ["simplest radical form", "No perfect-square factors left under a square root: √72 = 6√2."],
    ["extraneous solution", "An answer from the algebra that doesn’t work in the original equation."],
    ["inverse function f⁻¹(x)", "Undoes f. If f(2) = 7 then f⁻¹(7) = 2. Swap x and y, then solve for y."],
    ["one-to-one", "Each output comes from only one input (passes the horizontal line test). Only one-to-one functions have inverse functions."]
  ],
  steps: [
    { name: "Evaluating a rational exponent", list: ["Bottom number = the root. Top number = the power.", "Take the root first (smaller numbers are easier).", "Then raise to the power.", "If the exponent is negative, flip to 1/(…) first."] },
    { name: "Solving a radical equation", list: ["Get the radical alone on one side.", "Raise both sides to the index (square both sides for √, cube for ∛).", "Solve the equation that is left (it may be a quadratic: set = 0 and factor).", "CHECK every answer in the original equation. Cross out any that don’t work."] },
    { name: "Finding an inverse", list: ["Replace f(x) with y.", "Swap x and y.", "Solve for y (undo the operations in reverse order).", "Replace y with f⁻¹(x)."] }
  ],
  examples: [
    { q: "Evaluate 27<sup>2/3</sup> and 16<sup>−3/4</sup>.", steps: ["27<sup>2/3</sup>: root 3, power 2. ∛27 = 3, then 3² = 9.", "16<sup>−3/4</sup>: negative means flip: 1/16<sup>3/4</sup>.", "⁴√16 = 2, then 2³ = 8, so 1/8."], answer: "9 and 1/8" },
    { q: "Simplify √72 and ∛(54x⁴).", steps: ["72 = 36 · 2, and 36 is a perfect square: √72 = 6√2.", "54 = 27 · 2, and 27 is a perfect cube. x⁴ = x³ · x.", "∛(54x⁴) = ∛27 · ∛x³ · ∛(2x) = 3x∛(2x)."], answer: "6√2 and 3x∛(2x)" },
    { q: "Solve √(x + 7) = x + 1.", steps: ["The radical is alone. Square both sides: x + 7 = (x + 1)² = x² + 2x + 1.", "Set equal to zero: 0 = x² + x − 6.", "Factor: (x + 3)(x − 2) = 0 → x = −3 or x = 2.", "Check x = 2: √9 = 3 and 2 + 1 = 3 ✓", "Check x = −3: √4 = 2 but −3 + 1 = −2 ✗ (extraneous)."], answer: "x = 2 (x = −3 is extraneous)" },
    { q: "Find the inverse of f(x) = 3x − 5.", steps: ["y = 3x − 5.", "Swap: x = 3y − 5.", "Add 5: x + 5 = 3y. Divide by 3: y = (x + 5)/3."], answer: "f⁻¹(x) = (x + 5)/3" },
    { q: "Find the inverse of f(x) = (x − 1)³ + 2.", steps: ["Swap x and y: x = (y − 1)³ + 2.", "Subtract 2: x − 2 = (y − 1)³.", "Cube root both sides: ∛(x − 2) = y − 1.", "Add 1: y = ∛(x − 2) + 1."], answer: "f⁻¹(x) = ∛(x − 2) + 1" }
  ],
  mistakes: [
    ["Thinks 16<sup>−1/2</sup> = −4.", "“A negative exponent means flip, not negative. 16<sup>−1/2</sup> = 1/4.”"],
    ["Squares both sides before isolating the radical: √x + 2 = 5 → x + 4 = 25.", "“Get the radical alone first. What do we do with the + 2?”"],
    ["Squares (x + 1) as x² + 1.", "“Write it as (x + 1)(x + 1) and FOIL. Where does the middle term come from?”"],
    ["Doesn’t check for extraneous solutions.", "“Plug each answer into the ORIGINAL equation. A square root can’t equal a negative.”"],
    ["Thinks f⁻¹(x) means 1/f(x).", "“The −1 here means ‘inverse,’ an undo, not a reciprocal.”"]
  ],
  ask: ["Which number is the root and which is the power?", "Is the radical by itself yet?", "Did both answers check in the original?", "To find the inverse, what is the first thing we swap?", "If f takes 2 to 7, what should f⁻¹ do to 7?"],
  check: [
    { q: "Evaluate 8<sup>4/3</sup>.", a: "(∛8)⁴ = 2⁴ = 16" },
    { q: "Simplify √50 + √18.", a: "5√2 + 3√2 = 8√2" },
    { q: "Inverse of f(x) = x/2 + 4?", a: "f⁻¹(x) = 2(x − 4) = 2x − 8" }
  ],
  visual: "A2V_INV" },

/* ---------------- UNIT 8 ---------------- */
{ id: "a2-08", course: "Algebra 2", unit: 8, title: "Exponential & Logarithmic Functions", standards: "F.LE.1–4, F.IF.8b, A.SSE.3c",
  bigIdea: "Exponential functions multiply by the same amount each step (growth or decay). A logarithm is the opposite question: “what exponent do I need?” log₂ 8 = 3 because 2³ = 8. Logs are the tool for solving equations when the variable is stuck in an exponent.",
  tips: "When a student sees a log, have them say it as a question: “log base 3 of 81 means <b>3 to what power is 81?</b>” Also teach the loop: the base stays the base, the answer to the log is the exponent. Most calculators only have log (base 10) and ln (base e), so use the change-of-base formula for other bases.",
  vocab: [
    ["exponential function", "y = a · b<sup>x</sup>. a is the starting value; b is the growth/decay factor."],
    ["growth / decay factor", "b > 1 means growth; 0 < b < 1 means decay. For r% growth, b = 1 + r; for r% decay, b = 1 − r."],
    ["compound interest", "A = P(1 + r/n)<sup>nt</sup>: P = principal, r = rate as a decimal, n = times per year, t = years."],
    ["e and continuous growth", "e ≈ 2.718. Continuous growth: A = Pe<sup>rt</sup>."],
    ["logarithm", "log<sub>b</sub> x = y means b<sup>y</sup> = x. The log IS the exponent."],
    ["common log / natural log", "log x means base 10. ln x means base e."],
    ["log properties", "Product: log(MN) = log M + log N. Quotient: log(M/N) = log M − log N. Power: log(M<sup>k</sup>) = k·log M."],
    ["change of base", "log<sub>b</sub> x = log x / log b (so you can use a calculator)."]
  ],
  steps: [
    { name: "Writing an exponential model", list: ["Find the starting amount (a).", "Find the factor (b): growth → 1 + rate; decay → 1 − rate; doubling → 2; half-life → 1/2.", "Write y = a·b<sup>t</sup> (for half-life: y = a(1/2)<sup>t/h</sup> where h is the half-life)."] },
    { name: "Solving exponential equations", list: ["If you can write both sides with the same base (like 27 = 3³), set the exponents equal.", "If not, get the exponential part alone, then take log (or ln) of both sides.", "Use the power property to bring the exponent down.", "Divide to solve. Round only at the end."] },
    { name: "Solving log equations", list: ["Combine logs into one log using the properties.", "Rewrite in exponential form: log<sub>b</sub>(stuff) = y → b<sup>y</sup> = stuff.", "Solve.", "Check: you can’t take the log of zero or a negative, so throw out any answer that makes the inside ≤ 0."] }
  ],
  examples: [
    { q: "You invest $2,000 at 5% interest compounded once a year. How much is there after 10 years?", steps: ["a = 2000, growth factor = 1 + 0.05 = 1.05, t = 10.", "A = 2000(1.05)<sup>10</sup>.", "1.05<sup>10</sup> ≈ 1.62889, so A ≈ 2000 × 1.62889."], answer: "≈ $3,257.79" },
    { q: "Evaluate log₃ 81, log 1000, and ln e⁵.", steps: ["log₃ 81: 3 to what power is 81? 3⁴ = 81 → 4.", "log 1000 is base 10: 10³ = 1000 → 3.", "ln e⁵: e to what power is e⁵? → 5."], answer: "4, 3, 5" },
    { q: "Solve 3<sup>x + 1</sup> = 27.", steps: ["Write 27 as a power of 3: 27 = 3³.", "Same base, so set the exponents equal: x + 1 = 3.", "x = 2."], answer: "x = 2" },
    { q: "Solve 5<sup>x</sup> = 40. Round to the nearest thousandth.", steps: ["40 isn’t a nice power of 5, so take the log of both sides: log(5<sup>x</sup>) = log 40.", "Power property: x · log 5 = log 40.", "x = log 40 / log 5 ≈ 1.60206 / 0.69897."], answer: "x ≈ 2.292" },
    { q: "Solve log₂ x + log₂(x − 2) = 3.", steps: ["Product property: log₂[x(x − 2)] = 3.", "Exponential form: x(x − 2) = 2³ = 8.", "x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0 → x = 4 or x = −2.", "x = −2 would make log₂(−2): not allowed. Throw it out."], answer: "x = 4" },
    { q: "Expand: log(x³y / z).", steps: ["Quotient: log(x³y) − log z.", "Product: log x³ + log y − log z.", "Power: 3 log x + log y − log z."], answer: "3 log x + log y − log z" }
  ],
  mistakes: [
    ["Uses 0.05 as the growth factor instead of 1.05.", "“If it grows 5%, you keep 100% and add 5%. What decimal is 105%?”"],
    ["Thinks log(M + N) = log M + log N.", "“The product rule is for multiplying inside the log, not adding. log(M + N) can’t be split.”"],
    ["Cancels the logs wrong: log 40 / log 5 → log 8.", "“Dividing two logs is not the same as the log of a division. Type each log into the calculator separately.”"],
    ["Keeps a solution that makes the inside of a log negative.", "“Plug it in. Can you take the log of a negative number?”"],
    ["Mixes up which number is the exponent when rewriting.", "“The base stays the base. The log’s answer becomes the exponent.”"]
  ],
  ask: ["Is this growth or decay? How do you know?", "What is the starting value? What is the factor?", "Say the log as a question: ‘___ to what power is ___?’", "Can both sides be written with the same base?", "Does your answer make the inside of every log positive?"],
  check: [
    { q: "Evaluate log₄ 64.", a: "4³ = 64, so 3" },
    { q: "80 g of a substance has a half-life of 5 days. How much is left after 15 days?", a: "3 half-lives: 80 → 40 → 20 → 10 g" },
    { q: "Solve 2<sup>x</sup> = 1/8.", a: "1/8 = 2<sup>−3</sup>, so x = −3" }
  ],
  visual: "A2V_EXP" },

/* ---------------- UNIT 9 ---------------- */
{ id: "a2-09", course: "Algebra 2", unit: 9, title: "Rational Expressions, Equations & Functions", standards: "A.APR.6–7, A.REI.2, F.IF.7d",
  bigIdea: "A rational expression is a fraction with polynomials in it. Everything works like regular fractions: factor, cancel common factors, and use a common denominator to add. The big new idea is that you can never divide by zero, which creates restrictions, vertical asymptotes, and holes in the graphs.",
  tips: "The #1 rule: <b>factor before you cancel</b>. Students love to cancel terms (the x’s in (x + 3)/x), but you can only cancel factors that are multiplied. Ask, “Is that piece being multiplied by everything, or added?”",
  vocab: [
    ["rational expression", "A fraction whose top and bottom are polynomials, like (x + 1)/(x² − 4)."],
    ["excluded value / restriction", "Any x that makes the denominator zero. It can never be an answer."],
    ["vertical asymptote", "A vertical line x = a the graph gets close to but never touches. Comes from a factor in the denominator that does NOT cancel."],
    ["hole", "A single missing point. Comes from a factor that cancels from the top and bottom."],
    ["horizontal asymptote", "Where the graph levels off on the far left and right. Compare degrees: bottom bigger → y = 0; same → y = (leading coef top)/(leading coef bottom); top bigger → none."],
    ["LCD", "Least common denominator: the smallest expression that every denominator divides into."],
    ["inverse variation", "y = k/x. When one goes up, the other goes down, and x·y stays the same (k)."]
  ],
  steps: [
    { name: "Simplifying", list: ["Factor the top and the bottom completely.", "Write the restrictions (what makes the ORIGINAL bottom zero).", "Cancel common factors (whole factors only)."] },
    { name: "Adding/subtracting", list: ["Factor every denominator.", "Find the LCD.", "Rewrite each fraction with the LCD (multiply top and bottom by what’s missing).", "Add the tops. Keep the bottom. Simplify if possible."] },
    { name: "Solving rational equations", list: ["Find the LCD of every fraction.", "Multiply EVERY term on both sides by the LCD. The fractions disappear.", "Solve the equation that is left.", "Check: throw out any answer that makes an original denominator zero."] },
    { name: "Graphing f(x) = (top)/(bottom)", list: ["Factor. Cancel → holes.", "Remaining bottom factors = 0 → vertical asymptotes.", "Compare degrees → horizontal asymptote.", "x-intercepts: top = 0. y-intercept: plug in x = 0."] }
  ],
  examples: [
    { q: "Simplify (x² − 9)/(x² + 5x + 6) and state the restrictions.", steps: ["Factor the top: (x − 3)(x + 3).", "Factor the bottom: (x + 2)(x + 3).", "Restrictions from the original bottom: x ≠ −2, x ≠ −3.", "Cancel (x + 3)."], answer: "(x − 3)/(x + 2), x ≠ −3, −2" },
    { q: "Find the asymptotes and intercepts of f(x) = (2x + 1)/(x − 3).", steps: ["Nothing cancels. Bottom = 0 at x = 3 → vertical asymptote x = 3.", "Same degree (1 and 1): HA y = 2/1 = 2.", "x-intercept: 2x + 1 = 0 → x = −1/2.", "y-intercept: f(0) = 1/(−3) = −1/3."], answer: "VA x = 3, HA y = 2, x-int (−1/2, 0), y-int (0, −1/3)" },
    { q: "Add: 3/x + 2/(x + 1).", steps: ["LCD: x(x + 1).", "Rewrite: 3(x + 1)/[x(x + 1)] + 2x/[x(x + 1)].", "Add the tops: 3x + 3 + 2x = 5x + 3."], answer: "(5x + 3)/[x(x + 1)]" },
    { q: "Solve 4/x + 1/2 = 3/x.", steps: ["LCD: 2x. Multiply every term by 2x.", "2x·(4/x) = 8, 2x·(1/2) = x, 2x·(3/x) = 6. So 8 + x = 6.", "x = −2.", "Check: −2 doesn’t make any denominator zero. 4/(−2) + 1/2 = −1.5 and 3/(−2) = −1.5 ✓"], answer: "x = −2" },
    { q: "f(x) = (x² − 4)/(x − 2). Is there a vertical asymptote or a hole at x = 2?", steps: ["Factor: (x − 2)(x + 2)/(x − 2).", "(x − 2) cancels, so x = 2 is a hole, not an asymptote.", "Simplified: f(x) = x + 2. Plug in 2 to find the y-value of the hole: 4."], answer: "A hole at (2, 4)" }
  ],
  mistakes: [
    ["Cancels terms instead of factors: (x + 6)/x → 6.", "“Can you cancel something that’s being added? Only factors that are multiplied can cancel.”"],
    ["Adds tops and bottoms: 1/x + 1/y = 2/(x + y).", "“Would 1/2 + 1/3 equal 2/5? What do we need first?”"],
    ["Only multiplies the fractions by the LCD, not the whole-number terms.", "“EVERY term gets multiplied, including the ones that aren’t fractions.”"],
    ["Keeps an answer that makes the denominator zero.", "“Plug it back in. Can we divide by zero?”"],
    ["Calls a cancelled factor an asymptote.", "“If it cancels, it’s a hole. Asymptotes come from what’s left on the bottom.”"]
  ],
  ask: ["Have you factored everything?", "What values of x are not allowed?", "Is this piece multiplied (can cancel) or added (can’t)?", "What is the LCD?", "Does your answer make any denominator zero?"],
  check: [
    { q: "Vertical and horizontal asymptotes of f(x) = 5/(x + 4)?", a: "VA x = −4, HA y = 0" },
    { q: "Simplify (x² − x)/x.", a: "x(x − 1)/x = x − 1, x ≠ 0" },
    { q: "y varies inversely with x. y = 6 when x = 4. Find y when x = 8.", a: "k = 24, so y = 24/8 = 3" }
  ],
  visual: "A2V_RAT" },

/* ---------------- UNIT 10 ---------------- */
{ id: "a2-10", course: "Algebra 2", unit: 10, title: "Sequences & Series", standards: "F.IF.3, F.BF.2, A.SSE.4",
  bigIdea: "A sequence is a list that follows a pattern. Arithmetic sequences ADD the same number each time (linear). Geometric sequences MULTIPLY by the same number each time (exponential). A series is what you get when you add the terms of a sequence together.",
  tips: "First question for any sequence: <b>“Are we adding or multiplying to get the next term?”</b> Subtract neighbors (same difference → arithmetic) and divide neighbors (same ratio → geometric). Then pick the matching formula.",
  vocab: [
    ["sequence / term", "An ordered list of numbers; each number is a term. a₁ is the first term, aₙ is the nth term."],
    ["arithmetic sequence", "Add the same common difference d each time: 7, 11, 15, … (d = 4)."],
    ["geometric sequence", "Multiply by the same common ratio r each time: 3, 6, 12, … (r = 2)."],
    ["explicit formula", "Finds any term directly. Arithmetic: aₙ = a₁ + (n − 1)d. Geometric: aₙ = a₁ · r<sup>n − 1</sup>."],
    ["recursive formula", "Uses the previous term: aₙ = aₙ₋₁ + d or aₙ = aₙ₋₁ · r (and a starting value)."],
    ["series", "The sum of terms. Arithmetic: Sₙ = n(a₁ + aₙ)/2. Geometric: Sₙ = a₁(1 − r<sup>n</sup>)/(1 − r)."],
    ["infinite geometric series", "If |r| < 1, the sum gets closer to S = a₁/(1 − r). If |r| ≥ 1, there is no sum."],
    ["sigma notation Σ", "Means “add up.” Σ from k = 1 to 4 of (2k + 1) means plug in k = 1, 2, 3, 4 and add."]
  ],
  steps: [
    { name: "Arithmetic or geometric?", list: ["Subtract each term from the next one. Always the same? Arithmetic (d).", "Divide each term by the one before it. Always the same? Geometric (r).", "Neither? It might be another pattern (like squares: 1, 4, 9, 16)."] },
    { name: "Finding a term", list: ["Write the right formula.", "Plug in a₁, d (or r), and n.", "Order of operations: for geometric, do the exponent BEFORE multiplying by a₁."] },
    { name: "Finding a sum", list: ["Arithmetic: find the last term aₙ, then Sₙ = n(a₁ + aₙ)/2.", "Geometric (finite): Sₙ = a₁(1 − r<sup>n</sup>)/(1 − r).", "Infinite geometric: check |r| < 1, then S = a₁/(1 − r)."] }
  ],
  examples: [
    { q: "7, 11, 15, … Write the explicit formula and find a₃₀.", steps: ["Differences: 4 each time → arithmetic, d = 4, a₁ = 7.", "aₙ = 7 + (n − 1)·4 = 4n + 3.", "a₃₀ = 4(30) + 3 = 123."], answer: "aₙ = 4n + 3, a₃₀ = 123" },
    { q: "3, 6, 12, … Write the explicit formula and find a₈.", steps: ["Ratios: 6/3 = 2, 12/6 = 2 → geometric, r = 2, a₁ = 3.", "aₙ = 3 · 2<sup>n − 1</sup>.", "a₈ = 3 · 2⁷ = 3 · 128 = 384."], answer: "aₙ = 3·2<sup>n−1</sup>, a₈ = 384" },
    { q: "Find the sum of the first 20 terms of 5, 8, 11, …", steps: ["Arithmetic: a₁ = 5, d = 3.", "a₂₀ = 5 + 19 · 3 = 62.", "S₂₀ = 20(5 + 62)/2 = 10 · 67 = 670."], answer: "670" },
    { q: "Find the sum of the first 6 terms of 2 + 6 + 18 + …", steps: ["Geometric: a₁ = 2, r = 3, n = 6.", "S₆ = 2(1 − 3⁶)/(1 − 3) = 2(1 − 729)/(−2).", "= 2(−728)/(−2) = 728.", "Check by adding: 2 + 6 + 18 + 54 + 162 + 486 = 728 ✓"], answer: "728" },
    { q: "Find the sum of the infinite series 12 + 6 + 3 + …", steps: ["r = 6/12 = 1/2. |r| < 1, so the sum exists.", "S = 12/(1 − 1/2) = 12/(1/2) = 24."], answer: "24" },
    { q: "Evaluate Σ from k = 1 to 4 of (2k + 1).", steps: ["k = 1: 3. k = 2: 5. k = 3: 7. k = 4: 9.", "Add: 3 + 5 + 7 + 9 = 24."], answer: "24" }
  ],
  mistakes: [
    ["Uses n instead of n − 1: aₙ = a₁ + nd.", "“Try n = 1. Does your formula give the first term back?”"],
    ["Computes 3 · 2⁷ as 6⁷.", "“Exponents come before multiplication. What is 2⁷ first?”"],
    ["Uses the arithmetic formula on a geometric sequence.", "“Are we adding or multiplying to get the next term?”"],
    ["Finds an infinite sum when r = 2.", "“If the terms keep getting bigger, can the total ever settle down?”"],
    ["Mixes up a term and a sum.", "“Does the question want ONE term (aₙ) or the total of several terms (Sₙ)?”"]
  ],
  ask: ["What do you add or multiply to get from one term to the next?", "What are a₁ and d (or r)?", "Does the question want a single term or a sum?", "Can you check your formula with n = 1 or n = 2?", "For an infinite series, is |r| less than 1?"],
  check: [
    { q: "Find d: 20, 14, 8, …", a: "d = −6" },
    { q: "Next two terms: 2, −6, 18, …", a: "r = −3: −54, 162" },
    { q: "Is 1, 4, 9, 16 arithmetic, geometric, or neither?", a: "Neither (perfect squares; differences 3, 5, 7)" }
  ],
  visual: "A2V_SEQ" },

/* ---------------- UNIT 11 ---------------- */
{ id: "a2-11", course: "Algebra 2", unit: 11, title: "Trigonometry: Radians, the Unit Circle & Trig Graphs", standards: "F.TF.1–2, F.TF.5, F.TF.8",
  bigIdea: "Trig starts with right triangles (SOH CAH TOA) and grows into the unit circle, a circle with radius 1 where every point is (cos θ, sin θ). Because angles keep going around the circle, sine and cosine repeat, which makes their graphs waves. Radians are just another unit for measuring angles: 180° = π radians.",
  tips: "Students don’t need to memorize the whole unit circle. Have them memorize the first quadrant (30°, 45°, 60°) and the rule <b>“All Students Take Calculus”</b> (Quadrant I: all positive, II: sin positive, III: tan positive, IV: cos positive). Check the calculator mode! Degree vs. radian mode is the most common calculator error.",
  vocab: [
    ["SOH CAH TOA", "sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent."],
    ["radian", "An angle measure. π radians = 180°. To convert degrees → radians multiply by π/180; radians → degrees multiply by 180/π."],
    ["unit circle", "A circle with radius 1 centered at the origin. The point at angle θ is (cos θ, sin θ)."],
    ["standard position / terminal side", "The angle starts on the positive x-axis and turns counterclockwise (positive) or clockwise (negative). The terminal side is where it stops."],
    ["reference angle", "The acute angle between the terminal side and the x-axis. Use it to find trig values in any quadrant."],
    ["coterminal angles", "Angles that end in the same spot, found by adding or subtracting 360° (or 2π)."],
    ["amplitude, period, midline", "For y = a sin(bx) + d: amplitude |a| (height from the middle), period 2π/b (length of one wave), midline y = d."],
    ["Pythagorean identity", "sin²θ + cos²θ = 1."]
  ],
  steps: [
    { name: "Finding a trig value for any angle", list: ["Find the quadrant the angle is in.", "Find the reference angle (180° − θ in QII, θ − 180° in QIII, 360° − θ in QIV).", "Find sin/cos/tan of the reference angle (from the first quadrant).", "Make it positive or negative based on the quadrant (All Students Take Calculus)."] },
    { name: "Reading a trig graph: y = a sin(b(x − h)) + d", list: ["Amplitude = |a|. Midline y = d.", "Max = d + |a|, min = d − |a|.", "Period = 2π/b (or 360°/b).", "h shifts the wave left/right (phase shift)."] }
  ],
  examples: [
    { q: "Convert 150° to radians and 3π/4 to degrees.", steps: ["150° × π/180 = 150π/180. Simplify by dividing by 30: 5π/6.", "3π/4 × 180/π: the π’s cancel → 3 · 180/4 = 540/4 = 135°."], answer: "5π/6 and 135°" },
    { q: "A right triangle has opposite side 5 and hypotenuse 13. Find sin, cos, and tan of the angle.", steps: ["Find the missing side with the Pythagorean theorem: 13² − 5² = 169 − 25 = 144, so adjacent = 12.", "sin = opp/hyp = 5/13.", "cos = adj/hyp = 12/13.", "tan = opp/adj = 5/12."], answer: "sin = 5/13, cos = 12/13, tan = 5/12" },
    { q: "Find sin 210° and cos 2π/3.", steps: ["210° is in Quadrant III. Reference angle: 210° − 180° = 30°. sin 30° = 1/2. Sine is negative in QIII → −1/2.", "2π/3 = 120°, Quadrant II. Reference angle 60°. cos 60° = 1/2. Cosine is negative in QII → −1/2."], answer: "sin 210° = −1/2, cos 2π/3 = −1/2" },
    { q: "Describe the graph of y = 3 sin(2x) + 1.", steps: ["Amplitude |a| = 3.", "Midline: y = 1.", "Max = 1 + 3 = 4. Min = 1 − 3 = −2.", "Period = 2π/2 = π."], answer: "Amplitude 3, period π, midline y = 1, max 4, min −2" },
    { q: "sin θ = 3/5 and θ is in Quadrant II. Find cos θ.", steps: ["Use sin²θ + cos²θ = 1: (3/5)² + cos²θ = 1.", "9/25 + cos²θ = 1 → cos²θ = 16/25.", "cos θ = ±4/5. Cosine is negative in QII."], answer: "cos θ = −4/5" }
  ],
  mistakes: [
    ["Calculator in the wrong mode (degrees vs. radians).", "“Check the top of the calculator screen. Is the problem in degrees or radians?”"],
    ["Mixes up opposite and adjacent.", "“Put your finger on the angle. Opposite is across from it. Adjacent touches it (and isn’t the hypotenuse).”"],
    ["Forgets the sign in other quadrants.", "“Which quadrant is this angle in? Is sine positive or negative there?”"],
    ["Says the period of sin(2x) is 4π.", "“A bigger b squeezes the wave. Period = 2π divided by b.”"],
    ["Uses the full angle instead of the reference angle in QII–QIV.", "“How far is the terminal side from the x-axis?”"]
  ],
  ask: ["Which side is opposite? Adjacent? The hypotenuse?", "Which quadrant is the angle in?", "What is the reference angle?", "Is your calculator in degree or radian mode?", "In the equation, which number is the amplitude and which affects the period?"],
  check: [
    { q: "Convert 90° to radians.", a: "π/2" },
    { q: "Period of y = cos(4x)?", a: "2π/4 = π/2" },
    { q: "cos π = ?", a: "−1 (the point (−1, 0))" }
  ],
  visual: "A2V_TRIG" },

/* ---------------- UNIT 12 ---------------- */
{ id: "a2-12", course: "Algebra 2", unit: 12, title: "Probability & Statistics: Normal Distributions, Conditional Probability & Counting", standards: "S.ID.4, S.CP.1–6, S.CP.9, S.IC.1–3",
  bigIdea: "Probability is “favorable outcomes ÷ total outcomes.” Conditional probability shrinks the total to just one group (“given that…”). The normal distribution is the bell curve: most data is near the mean, and the 68–95–99.7 rule tells you how much is within 1, 2, and 3 standard deviations.",
  tips: "For “given” problems, have the student <b>circle the given group</b> in the table first. That group’s total is the denominator. For counting, ask, “Does order matter?” (president/VP/secretary → yes, permutation; a committee → no, combination).",
  vocab: [
    ["mean & standard deviation (σ)", "The mean is the average (center). Standard deviation measures how spread out the data is."],
    ["normal distribution", "A symmetric bell-shaped curve centered at the mean."],
    ["68–95–99.7 rule", "About 68% of data is within 1σ of the mean, 95% within 2σ, and 99.7% within 3σ."],
    ["z-score", "How many standard deviations a value is from the mean: z = (x − mean)/σ."],
    ["conditional probability P(A | B)", "Probability of A GIVEN that B happened. P(A | B) = P(A and B)/P(B)."],
    ["independent events", "One doesn’t affect the other. Test: P(A and B) = P(A)·P(B), or P(A | B) = P(A)."],
    ["addition rule", "P(A or B) = P(A) + P(B) − P(A and B). Subtract the overlap so it isn’t counted twice."],
    ["permutation / combination", "Permutation (order matters): ₙPᵣ = n!/(n − r)!. Combination (order doesn’t matter): ₙCᵣ = n!/[r!(n − r)!]."],
    ["sampling & bias", "A random sample gives every member an equal chance. Bias happens when the sample doesn’t represent the population (like only surveying your friends)."]
  ],
  steps: [
    { name: "Using the 68–95–99.7 rule", list: ["Sketch a bell curve. Put the mean in the middle.", "Mark mean ± 1σ, ± 2σ, ± 3σ.", "Fill in the percents: 34, 34 in the middle; 13.5, 13.5 next; 2.35, 2.35 next; 0.15 in each tail.", "Add up the sections the question asks about."] },
    { name: "Conditional probability from a two-way table", list: ["Read the “given” part. That group is the new total (denominator).", "Find the cell where both things happen (numerator).", "Divide."] },
    { name: "Counting", list: ["Does order matter? Yes → permutation. No → combination.", "Use nPr or nCr on the calculator (MATH → PRB on a TI-84).", "Sanity check: a permutation is always ≥ the combination for the same n and r."] }
  ],
  examples: [
    { q: "Test scores are normal with mean 70 and standard deviation 5. What percent scored between 65 and 75? Above 80?", steps: ["65 and 75 are 1σ below and above the mean → about 68%.", "80 is 2σ above the mean. 95% is within 2σ, so 5% is outside, split into two tails.", "Above 80 is one tail: 5% ÷ 2 = 2.5%."], answer: "About 68% between 65 and 75; about 2.5% above 80" },
    { q: "A score of 82 on a test with mean 70 and standard deviation 8. Find the z-score.", steps: ["z = (82 − 70)/8 = 12/8.", "z = 1.5: the score is 1.5 standard deviations above the mean."], answer: "z = 1.5" },
    { q: "120 students: 30 juniors and 20 seniors play a sport; 40 juniors and 30 seniors don’t. Find P(plays sport | junior) and P(junior | plays sport).", steps: ["Juniors total: 30 + 40 = 70. Sport total: 30 + 20 = 50.", "P(sport | junior): the given group is juniors, so the denominator is 70. Juniors who play: 30. 30/70 = 3/7 ≈ 0.43.", "P(junior | sport): the given group is sport players, so the denominator is 50. 30/50 = 0.6."], answer: "P(sport | junior) = 3/7 ≈ 43%; P(junior | sport) = 0.6 = 60%" },
    { q: "P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Are A and B independent?", steps: ["Multiply: P(A) · P(B) = 0.5 · 0.4 = 0.2.", "That equals P(A and B), so yes."], answer: "Yes, independent" },
    { q: "One card is drawn from a standard deck. Find P(heart or face card).", steps: ["P(heart) = 13/52. P(face) = 12/52 (J, Q, K in 4 suits).", "Overlap: hearts that are face cards = 3.", "P = 13/52 + 12/52 − 3/52 = 22/52."], answer: "22/52 = 11/26 ≈ 0.42" },
    { q: "From 10 students, how many ways can you (a) choose a 3-person committee and (b) choose a president, VP, and secretary?", steps: ["(a) Committee: order doesn’t matter → ₁₀C₃ = 10!/(3!·7!) = 720/6 = 120.", "(b) Officers: order matters → ₁₀P₃ = 10 · 9 · 8 = 720."], answer: "(a) 120, (b) 720" }
  ],
  mistakes: [
    ["Uses the grand total as the denominator for a “given” question.", "“Which group are we told about? That group’s total goes on the bottom.”"],
    ["Mixes up P(A | B) and P(B | A).", "“The thing after the line is the given. Read it out loud: ‘probability of A given B.’”"],
    ["Says 95% are above mean + 2σ.", "“95% is in the MIDDLE. What’s left over, and how is it split?”"],
    ["Double counts in an “or” problem.", "“Did you count any outcomes twice? Subtract the overlap.”"],
    ["Uses a permutation for a group/committee.", "“If you switched two people, would it be a different result? If not, order doesn’t matter.”"]
  ],
  ask: ["What is the ‘given’ group? What is its total?", "How many standard deviations away is that value?", "Does order matter here?", "Could these events overlap?", "Does your probability make sense (between 0 and 1)?"],
  check: [
    { q: "Mean 50, σ = 5. z-score of 60?", a: "(60 − 50)/5 = 2" },
    { q: "₅C₂ = ?", a: "10" },
    { q: "P(sum of 7 rolling two dice)?", a: "6/36 = 1/6" }
  ],
  visual: "A2V_NORM" }
);

/* ===== Visuals (drawn with the graph helper from tutor-alg1.js) ===== */
(function () {
  const G = window.TGA; if (!G) return;
  const txt = (x, y, s, o) => `<text x="${x}" y="${y}" font-size="${(o && o.fs) || 12}" text-anchor="${(o && o.a) || "middle"}" font-weight="${(o && o.b) ? 700 : 400}" fill="${(o && o.c) || "#333"}">${s}</text>`;
  const box = (w, h, inner, alt) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${alt}" style="background:#fff;border-radius:12px;max-width:100%;height:auto">${inner}</svg>`;
  const PI = Math.PI;

  /* unit circle (first quadrant labels + quadrant signs) */
  const trig = (() => {
    const C = 170, R = 120, X = a => C + R * Math.cos(a), Y = a => C - R * Math.sin(a);
    let g = `<circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="#2b7de9" stroke-width="2.5"/>` +
      `<line x1="20" y1="${C}" x2="320" y2="${C}" stroke="#555"/><line x1="${C}" y1="20" x2="${C}" y2="320" stroke="#555"/>`;
    [[PI / 6, "30° = π/6", "(√3/2, 1/2)"], [PI / 4, "45° = π/4", "(√2/2, √2/2)"], [PI / 3, "60° = π/3", "(1/2, √3/2)"]].forEach(([a, l, p], i) => {
      g += `<line x1="${C}" y1="${C}" x2="${X(a)}" y2="${Y(a)}" stroke="#e08a00" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="${X(a)}" cy="${Y(a)}" r="4.5" fill="#d0453a"/>` + txt(X(a) + 8, Y(a) - 4 - i * 2, p, { a: "start", b: 1, fs: 11 });
    });
    g += txt(C + R + 6, C - 6, "(1, 0)", { a: "start", fs: 11 }) + txt(C + 4, C - R - 6, "(0, 1)", { a: "start", fs: 11 }) + txt(C - R - 4, C - 6, "(−1, 0)", { a: "end", fs: 11 }) + txt(C + 4, C + R + 16, "(0, −1)", { a: "start", fs: 11 });
    g += txt(270, 300, "IV: cos +", { b: 1, c: "#1aa36f" }) + txt(60, 34, "II: sin +", { b: 1, c: "#1aa36f" }) + txt(80, 300, "III: tan +", { b: 1, c: "#1aa36f" }) + txt(330, 30, "I: all +", { b: 1, c: "#1aa36f" });
    g += txt(C, 338, "Each point is (cos θ, sin θ). Radius = 1.", { fs: 12 });
    return box(380, 345, g, "unit circle with 30, 45 and 60 degree points");
  })();

  /* normal curve with 68-95-99.7 */
  const norm = (() => {
    const W = 380, H = 190, X = z => 30 + (z + 3.4) / 6.8 * (W - 60), Y = v => 150 - v * 300;
    const f = z => Math.exp(-z * z / 2) / Math.sqrt(2 * PI);
    let d = ""; for (let i = 0; i <= 120; i++) { const z = -3.4 + 6.8 * i / 120; d += (i ? "L" : "M") + X(z).toFixed(1) + " " + Y(f(z)).toFixed(1); }
    const band = (a, b, c) => { let p = `M${X(a)} 150`; for (let i = 0; i <= 30; i++) { const z = a + (b - a) * i / 30; p += `L${X(z).toFixed(1)} ${Y(f(z)).toFixed(1)}`; } return `<path d="${p}L${X(b)} 150Z" fill="${c}"/>`; };
    let g = band(-3, -2, "#f3dff0") + band(2, 3, "#f3dff0") + band(-2, -1, "#ffe9b8") + band(1, 2, "#ffe9b8") + band(-1, 1, "#d8e8ff");
    g += `<path d="${d}" fill="none" stroke="#2b7de9" stroke-width="3"/><line x1="20" y1="150" x2="${W - 20}" y2="150" stroke="#333"/>`;
    [-3, -2, -1, 0, 1, 2, 3].forEach(z => g += `<line x1="${X(z)}" y1="146" x2="${X(z)}" y2="154" stroke="#333"/>` + txt(X(z), 168, z === 0 ? "mean" : (z > 0 ? "+" : "−") + Math.abs(z) + "σ", { fs: 11 }));
    g += txt(X(-0.5), 120, "34%", { b: 1 }) + txt(X(0.5), 120, "34%", { b: 1 }) + txt(X(-1.5), 140, "13.5%", { fs: 10, b: 1 }) + txt(X(1.5), 140, "13.5%", { fs: 10, b: 1 }) + txt(X(-2.5), 142, "2.35%", { fs: 9 }) + txt(X(2.5), 142, "2.35%", { fs: 9 });
    g += txt(W / 2, 186, "68% within 1σ · 95% within 2σ · 99.7% within 3σ", { fs: 11, b: 1 }) ;
    return box(W, H, g, "bell curve showing 68, 95 and 99.7 percent");
  })();

  /* complex plane */
  const cplx = G.graph({ x: [-6, 6], y: [-5, 5], pts: [[3, 2, "3 + 2i"], [2, -3, "2 − 3i", "#8a54e0"], [-4, 1, "−4 + i", "#1aa36f"]],
    shade: [(X, Y) => txt(X(5.6), Y(0) - 6, "real", { a: "end", b: 1, fs: 11 }) + txt(X(0) + 6, Y(4.6), "imaginary", { a: "start", b: 1, fs: 11 })], alt: "complex plane with three points" });
  const disc = `<table style="border-collapse:collapse;font-size:.9rem;margin-top:8px"><tr><th style="border:1px solid #ccc;padding:5px 8px">b² − 4ac</th><th style="border:1px solid #ccc;padding:5px 8px">Solutions</th><th style="border:1px solid #ccc;padding:5px 8px">Graph</th></tr>
    <tr><td style="border:1px solid #ccc;padding:5px 8px">positive</td><td style="border:1px solid #ccc;padding:5px 8px">2 real</td><td style="border:1px solid #ccc;padding:5px 8px">crosses the x-axis twice</td></tr>
    <tr><td style="border:1px solid #ccc;padding:5px 8px">zero</td><td style="border:1px solid #ccc;padding:5px 8px">1 real (double root)</td><td style="border:1px solid #ccc;padding:5px 8px">vertex touches the x-axis</td></tr>
    <tr><td style="border:1px solid #ccc;padding:5px 8px">negative</td><td style="border:1px solid #ccc;padding:5px 8px">2 complex (a ± bi)</td><td style="border:1px solid #ccc;padding:5px 8px">never touches the x-axis</td></tr></table>`;

  const V = {
    A2V_TRANS: G.graph({ x: [-3, 7], y: [-6, 9], fns: [{ f: x => x * x, c: "#999", label: "parent y = x²", lx: -0.2 }, { f: x => -2 * (x - 3) ** 2 + 4, c: "#2b7de9", label: "y = −2(x − 3)² + 4", lx: 6.4 }], pts: [[0, 0, "(0, 0)", "#999"], [3, 4, "vertex (3, 4)"]], alt: "parent parabola and the transformed parabola" }),
    A2V_ABS: '<div style="text-align:center"><b>|x + 3| − 4 &lt; 2</b>: the V is below the line y = 2 between x = −9 and x = 3<br>' + G.graph({ x: [-11, 5], y: [-5, 7], fns: [{ f: x => Math.abs(x + 3) - 4, label: "y = |x + 3| − 4", lx: 4.5 }, { f: () => 2, c: "#e8368f", label: "y = 2", lx: -9.5 }], pts: [[-9, 2, "−9"], [3, 2, "3"], [-3, -4, "vertex (−3, −4)", "#2b7de9"]], alt: "absolute value graph and the line y = 2" }) + "</div>",
    A2V_SYS: G.graph({ x: [-2, 7], y: [-4, 8], fns: [{ f: x => 7 - 2 * x, label: "2x + y = 7", lx: 0.6 }, { f: x => x - 2, c: "#e8368f", label: "x − y = 2", lx: 6.6 }], pts: [[3, 1, "(3, 1)"]], alt: "two lines crossing at 3, 1" }) + '<p style="text-align:center;margin:6px 0 0;font-size:.9rem">With 3 variables, each equation is a flat plane. The solution (x, y, z) is the one point where all three planes meet.</p>',
    A2V_QUAD: G.graph({ x: [-2, 6], y: [-6, 8], fns: [{ f: x => 2 * x * x - 8 * x + 3, label: "y = 2x² − 8x + 3", lx: 5.3 }], lines: [[2, -6, 2, 8, "#8a54e0"]], pts: [[2, -5, "vertex (2, −5)"], [0, 3, "y-int (0, 3)", "#1aa36f"]], alt: "parabola with vertex 2, -5" }),
    A2V_CPLX: '<div style="display:grid;justify-items:center">' + cplx + disc + "</div>",
    A2V_POLY: G.graph({ x: [-2, 4.2], y: [-6, 10], fns: [{ f: x => (x - 2) * (x - 3) * (x + 1), label: "y = (x − 2)(x − 3)(x + 1)", lx: 4 }], pts: [[-1, 0, "−1"], [2, 0, "2"], [3, 0, "3"]], alt: "cubic crossing at -1, 2 and 3" }),
    A2V_INV: G.graph({ x: [-1, 7], y: [-1, 7], fns: [{ f: x => (x >= 0 ? x * x / 4 : NaN), label: "f(x) = x²/4, x ≥ 0", lx: 4.6 }, { f: x => (x >= 0 ? 2 * Math.sqrt(x) : NaN), c: "#e8368f", label: "f⁻¹(x) = 2√x", lx: 6.8 }], lines: [[-1, -1, 7, 7, "#999"]], pts: [[2, 1, "(2, 1)"], [1, 2, "(1, 2)", "#e8368f"]], alt: "a function and its inverse reflected over y = x" }) + '<p style="text-align:center;margin:6px 0 0;font-size:.9rem">The dashed line is y = x. The inverse swaps every (x, y) to (y, x).</p>',
    A2V_EXP: G.graph({ x: [-3, 8], y: [-3, 8], fns: [{ f: x => Math.pow(2, x), c: "#d0453a", label: "y = 2ˣ", lx: 2.6 }, { f: x => (x > 0 ? Math.log2(x) : NaN), c: "#2b7de9", label: "y = log₂ x", lx: 7.6 }], lines: [[-3, -3, 8, 8, "#999"]], pts: [[0, 1, "(0, 1)", "#d0453a"], [1, 0, "(1, 0)", "#2b7de9"], [3, 8, "", "#d0453a"], [8, 3, "(8, 3)", "#2b7de9"]], alt: "exponential and logarithm graphs reflected over y = x" }),
    A2V_RAT: G.graph({ x: [-5, 11], y: [-6, 10], fns: [{ f: x => (2 * x + 1) / (x - 3), label: "y = (2x + 1)/(x − 3)", lx: 10.5 }], lines: [[3, -6, 3, 10, "#e8368f"], [-5, 2, 11, 2, "#8a54e0"]], pts: [[-0.5, 0, "(−½, 0)", "#1aa36f"]], shade: [(X, Y) => txt(X(3) + 4, Y(9.3), "x = 3", { a: "start", b: 1, c: "#e8368f" }) + txt(X(-4.8), Y(2) - 6, "y = 2", { a: "start", b: 1, c: "#8a54e0" })], alt: "rational function with asymptotes x = 3 and y = 2" }),
    A2V_SEQ: G.graph({ x: [0, 7], y: [0, 10], step: 1, pts: [[1, 1, "", "#2b7de9"], [2, 2.5, "", "#2b7de9"], [3, 4, "", "#2b7de9"], [4, 5.5, "", "#2b7de9"], [5, 7, "", "#2b7de9"], [6, 8.5, "arithmetic: +1.5", "#2b7de9"], [1, 0.5, "", "#d0453a"], [2, 1, "", "#d0453a"], [3, 2, "", "#d0453a"], [4, 4, "", "#d0453a"], [5, 8, "geometric: ×2", "#d0453a"]], alt: "arithmetic sequence points in a line and geometric points curving up" }) + '<p style="text-align:center;margin:6px 0 0;font-size:.9rem">Arithmetic sequences make a line (linear). Geometric sequences curve (exponential).</p>',
    A2V_TRIG: '<div style="display:grid;gap:10px;justify-items:center">' + trig + G.graph({ w: 360, h: 200, x: [0, 7], y: [-3, 5], step: 1, fns: [{ f: x => 3 * Math.sin(2 * x) + 1, label: "y = 3 sin(2x) + 1", lx: 6.9 }], lines: [[0, 1, 7, 1, "#8a54e0"]], pts: [[PI / 4, 4, "max 4"], [3 * PI / 4, -2, "min −2"]], alt: "sine wave with amplitude 3 and midline 1" }) + "</div>",
    A2V_NORM: norm
  };
  (window.TUTOR_UNITS || []).forEach(u => { if (u.course === "Algebra 2" && typeof u.visual === "string") Object.keys(V).forEach(k => { u.visual = u.visual.split(k).join(V[k]); }); });
})();
