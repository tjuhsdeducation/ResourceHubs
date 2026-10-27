/* =====================================================================
   ✏️ MATH TUTOR GUIDE: ALGEBRA 1 (shown on tutor-math.html, tutors only)
   One { ... } block per unit. Same format as tutor-geo.js:
     id, course, unit, title, standards, bigIdea, vocab:[[term, meaning]],
     steps:[{name, list:[...]}], examples:[{q, steps:[...], answer}],
     mistakes:[[what the student does, what to say]], ask:[...],
     check:[{q, a}], visual (optional SVG/HTML), tips (optional HTML)
   ===================================================================== */
(function () {
  /* small graph helper for the visuals: TGA.graph({ x:[min,max], y:[min,max], fns:[{f, c, label}], lines:[[x1,y1,x2,y2,c]], pts:[[x,y,label,c]] }) */
  const graph = o => {
    const W = o.w || 320, H = o.h || 260, [x0, x1] = o.x, [y0, y1] = o.y, P = 26;
    const X = v => P + (v - x0) / (x1 - x0) * (W - 2 * P), Y = v => H - P - (v - y0) / (y1 - y0) * (H - 2 * P);
    let g = "";
    for (let v = Math.ceil(x0); v <= x1; v++) g += `<line x1="${X(v)}" y1="${Y(y0)}" x2="${X(v)}" y2="${Y(y1)}" stroke="${v === 0 ? "#555" : "#e2e2ea"}" stroke-width="${v === 0 ? 1.6 : 1}"/>` + (v && v % (o.step || 2) === 0 ? `<text x="${X(v)}" y="${Y(0) + 13}" font-size="10" text-anchor="middle" fill="#666">${v < 0 ? "−" + -v : v}</text>` : "");
    for (let v = Math.ceil(y0); v <= y1; v++) g += `<line x1="${X(x0)}" y1="${Y(v)}" x2="${X(x1)}" y2="${Y(v)}" stroke="${v === 0 ? "#555" : "#e2e2ea"}" stroke-width="${v === 0 ? 1.6 : 1}"/>` + (v && v % (o.step || 2) === 0 ? `<text x="${X(0) - 4}" y="${Y(v) + 4}" font-size="10" text-anchor="end" fill="#666">${v < 0 ? "−" + -v : v}</text>` : "");
    (o.fns || []).forEach(F => { let d = "", on = false; for (let i = 0; i <= 200; i++) { const x = x0 + (x1 - x0) * i / 200, y = F.f(x); if (y < y0 - 1 || y > y1 + 1 || !isFinite(y)) { on = false; continue; } d += (on ? "L" : "M") + X(x).toFixed(1) + " " + Y(y).toFixed(1); on = true; }
      g += `<path d="${d}" fill="none" stroke="${F.c || "#2b7de9"}" stroke-width="3"/>` + (F.label ? `<text x="${X(F.lx ?? x1 - 1)}" y="${Y(F.f(F.lx ?? x1 - 1)) - 8}" font-size="12" font-weight="700" fill="${F.c || "#2b7de9"}" text-anchor="end">${F.label}</text>` : ""); });
    (o.lines || []).forEach(l => g += `<line x1="${X(l[0])}" y1="${Y(l[1])}" x2="${X(l[2])}" y2="${Y(l[3])}" stroke="${l[4] || "#e08a00"}" stroke-width="2.5" stroke-dasharray="6 4"/>`);
    (o.shade || []).forEach(s => g += s(X, Y));
    (o.pts || []).forEach(p => g += `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="5" fill="${p[3] || "#d0453a"}"/>` + (p[2] ? `<text x="${X(p[0]) + 7}" y="${Y(p[1]) - 7}" font-size="12" font-weight="700" fill="#333">${p[2]}</text>` : ""));
    return `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="${o.alt || "graph"}" style="background:#fff;border-radius:12px">${g}</svg>`;
  };
  /* number line helper: TGA.nline(min, max, marks:[{v, open, label, c}], shade:[from, to, c]) */
  const nline = (a, b, marks, shades) => {
    const W = 360, X = v => 20 + (v - a) / (b - a) * (W - 40); let g = `<line x1="10" y1="40" x2="${W - 10}" y2="40" stroke="#333" stroke-width="2"/>`;
    for (let v = a; v <= b; v++) g += `<line x1="${X(v)}" y1="34" x2="${X(v)}" y2="46" stroke="#333"/><text x="${X(v)}" y="62" font-size="11" text-anchor="middle">${v < 0 ? "−" + -v : v}</text>`;
    (shades || []).forEach(s => g += `<line x1="${X(Math.max(a, s[0]))}" y1="40" x2="${X(Math.min(b, s[1]))}" y2="40" stroke="${s[2] || "#2b7de9"}" stroke-width="7" stroke-linecap="round"/>`);
    (marks || []).forEach(m => g += `<circle cx="${X(m.v)}" cy="40" r="7" fill="${m.open ? "#fff" : (m.c || "#2b7de9")}" stroke="${m.c || "#2b7de9"}" stroke-width="3"/>` + (m.label ? `<text x="${X(m.v)}" y="22" font-size="12" font-weight="700" text-anchor="middle">${m.label}</text>` : ""));
    return `<svg viewBox="0 0 ${W} 72" width="${W}" role="img" style="background:#fff;border-radius:12px">${g}</svg>`;
  };
  window.TGA = { graph, nline };
})();

(window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(

/* ---------------- UNIT 1 ---------------- */
{ id: "a1-01", course: "Algebra 1", unit: 1, title: "Foundations: Integers, Order of Operations & Expressions", standards: "A.SSE.1, A.SSE.2, 7.NS.1–3",
  bigIdea: "Almost every Algebra 1 mistake starts here. Students need to be confident with positive and negative numbers, the order of operations, and how to simplify an expression before the rest of the course makes sense.",
  tips: "If a student is stuck on a harder problem, check these basics first. Ask them to do just the arithmetic out loud. A missed negative sign is the #1 cause of wrong answers in Algebra 1.",
  vocab: [
    ["integer", "Whole numbers and their negatives: …, −3, −2, −1, 0, 1, 2, 3, …"],
    ["opposite", "The same number on the other side of zero. The opposite of 5 is −5; the opposite of −5 is 5."],
    ["absolute value", "Distance from zero, so it’s never negative. |−7| = 7."],
    ["expression", "A math phrase with numbers, variables, and operations but NO equal sign, like 3x − 5."],
    ["term", "A piece of an expression separated by + or −. In 3x − 5 + y, the terms are 3x, −5, and y."],
    ["coefficient", "The number in front of a variable. In −4x, the coefficient is −4. In x it’s 1."],
    ["like terms", "Terms with exactly the same variable part: 3x and −7x are like terms; 3x and 3x² are NOT."],
    ["distributive property", "Multiply the outside number by EVERY term inside parentheses: 3(x + 4) = 3x + 12."]
  ],
  steps: [
    { name: "Integer rules", list: ["<b>Adding, same signs:</b> add and keep the sign. −4 + (−6) = −10.", "<b>Adding, different signs:</b> subtract the sizes and keep the sign of the bigger one. −9 + 4 = −5.", "<b>Subtracting:</b> “keep, change, change.” Keep the first number, change − to +, change the second number to its opposite. 3 − (−5) = 3 + 5 = 8.", "<b>Multiplying/dividing:</b> same signs → positive; different signs → negative. (−6)(−2) = 12, −12 ÷ 3 = −4."] },
    { name: "Order of operations (PEMDAS)", list: ["<b>P</b>arentheses (and other grouping: brackets, absolute value bars, fraction bars)", "<b>E</b>xponents", "<b>M</b>ultiply and <b>D</b>ivide, left to right (whichever comes first)", "<b>A</b>dd and <b>S</b>ubtract, left to right (whichever comes first)"] },
    { name: "Simplifying an expression", list: ["Distribute to remove parentheses (watch negatives!).", "Circle or color the like terms.", "Add the coefficients of each group of like terms.", "Write the answer with the variable terms first."] }
  ],
  examples: [
    { q: "Evaluate: 18 − 3(2 − 6)² ÷ 4", steps: ["Parentheses first: 2 − 6 = −4.", "Exponent: (−4)² = (−4)(−4) = 16.", "Now we have 18 − 3 · 16 ÷ 4. Multiply/divide left to right: 3 · 16 = 48, then 48 ÷ 4 = 12.", "Subtract: 18 − 12 = 6."], answer: "6" },
    { q: "Evaluate 2x² − 5x + 1 when x = −3.", steps: ["Replace every x with (−3) in parentheses: 2(−3)² − 5(−3) + 1.", "Exponent: (−3)² = 9, so 2(9) − 5(−3) + 1.", "Multiply: 2(9) = 18 and −5(−3) = +15.", "Add: 18 + 15 + 1 = 34."], answer: "34" },
    { q: "Simplify: 4(2x − 3) − (x − 7)", steps: ["Distribute the 4: 8x − 12.", "The minus sign in front of (x − 7) means multiply each term by −1: −x + 7.", "Now: 8x − 12 − x + 7.", "Combine like terms: 8x − x = 7x and −12 + 7 = −5."], answer: "7x − 5" },
    { q: "Simplify: −2(3a + 5) + 4a − 1", steps: ["Distribute −2 to both terms: −2 · 3a = −6a and −2 · 5 = −10.", "Now: −6a − 10 + 4a − 1.", "Combine the a-terms: −6a + 4a = −2a.", "Combine the numbers: −10 − 1 = −11."], answer: "−2a − 11" }
  ],
  mistakes: [
    ["Writes −3² = 9.", "“What is the base here?” Without parentheses, only 3 is squared: −3² = −(9) = −9. With parentheses, (−3)² = 9."],
    ["Only distributes to the first term: 3(x + 4) = 3x + 4.", "“How many terms are inside the parentheses? Did the 3 multiply each one?”"],
    ["Drops the negative when distributing: −(x − 7) = −x − 7.", "“A minus outside means multiply EVERYTHING inside by −1. What is −1 times −7?”"],
    ["Adds before multiplying: 2 + 3 · 4 = 20.", "“Which comes first in PEMDAS, adding or multiplying?” (Answer is 14.)"],
    ["Combines unlike terms: 3x + 2 = 5x.", "“Is 2 an x-term? Can you add apples and oranges?” 3x + 2 is already simplified."],
    ["Thinks 5 − 8 = 3.", "“Picture a number line. Start at 5 and move 8 to the left. Where do you land?” (−3)"]
  ],
  ask: ["Can you read the problem out loud and tell me what it’s asking?", "What is the very first thing PEMDAS tells you to do here?", "When you substituted, did you put the number in parentheses?", "Which terms are like terms? How do you know?", "Can you check that step on a calculator using the (−) key?", "What would happen if this number were positive instead of negative?"],
  check: [{ q: "−7 − (−12) = ?", a: "5. Keep, change, change: −7 + 12 = 5." }, { q: "Evaluate 4 + 2(5 − 8)²", a: "22. (5 − 8) = −3, (−3)² = 9, 2 · 9 = 18, 4 + 18 = 22." }, { q: "Simplify 5(x − 2) − 3x", a: "2x − 10. 5x − 10 − 3x = 2x − 10." }, { q: "Evaluate −x² + 3x when x = −2", a: "−10. −(−2)² + 3(−2) = −4 − 6 = −10." }],
  visual: '<div style="max-width:520px"><table class="tg-mis"><thead><tr><th>Operation</th><th>Same signs</th><th>Different signs</th></tr></thead><tbody><tr><td style="color:inherit">Add</td><td>Add, keep the sign: −3 + (−4) = −7</td><td>Subtract, keep the bigger one’s sign: −8 + 5 = −3</td></tr><tr><td style="color:inherit">Multiply / divide</td><td>Positive: (−3)(−4) = 12</td><td>Negative: (−3)(4) = −12</td></tr><tr><td style="color:inherit">Subtract</td><td colspan="2">Add the opposite: 2 − (−6) = 2 + 6 = 8</td></tr></tbody></table></div>' },

/* ---------------- UNIT 2 ---------------- */
{ id: "a1-02", course: "Algebra 1", unit: 2, title: "Solving Linear Equations", standards: "A.REI.1, A.REI.3, A.CED.1, A.CED.4",
  bigIdea: "An equation is a balance. Whatever you do to one side, you must do to the other. The goal is to get the variable by itself by “undoing” operations in reverse order.",
  tips: "The best tutoring move for equations: have the student <b>check their answer</b> by plugging it into the original equation. If both sides are equal, it’s right. You don’t need to know their method to check it.",
  vocab: [
    ["equation", "A math sentence with an equal sign, like 2x + 3 = 11."],
    ["solution", "The value of the variable that makes the equation true."],
    ["inverse operation", "The operation that undoes another: + undoes −, × undoes ÷."],
    ["variable", "A letter that stands for an unknown number."],
    ["no solution", "When solving gives a false statement like 5 = 2. No number works."],
    ["infinitely many solutions (identity)", "When solving gives a true statement like 4 = 4. Every number works."],
    ["literal equation", "An equation with several letters, like a formula. You solve for one letter in terms of the others."]
  ],
  steps: [
    { name: "Solving a multi-step equation", list: ["Distribute to clear parentheses.", "Combine like terms on each side.", "Move the variable terms to one side (add or subtract a variable term from both sides).", "Move the numbers to the other side (add or subtract).", "Divide both sides by the coefficient of the variable.", "Check: plug the answer into the ORIGINAL equation."] },
    { name: "Solving a literal equation (formula)", list: ["Circle the letter you are solving for.", "Treat every other letter like a number.", "Use the same inverse operations to get the circled letter alone."] }
  ],
  examples: [
    { q: "Solve: 5x − 7 = 2x + 11", steps: ["Subtract 2x from both sides to get the x’s together: 3x − 7 = 11.", "Add 7 to both sides: 3x = 18.", "Divide both sides by 3: x = 6.", "Check: 5(6) − 7 = 23 and 2(6) + 11 = 23. ✔ Both sides match."], answer: "x = 6" },
    { q: "Solve: −3(x − 4) + 2x = 20", steps: ["Distribute −3: −3x + 12 + 2x = 20. (−3 times −4 is +12.)", "Combine like terms: −x + 12 = 20.", "Subtract 12: −x = 8.", "Divide by −1: x = −8.", "Check: −3(−8 − 4) + 2(−8) = −3(−12) − 16 = 36 − 16 = 20 ✔"], answer: "x = −8" },
    { q: "Solve: (2/3)x − 4 = 6", steps: ["Add 4 to both sides: (2/3)x = 10.", "To undo multiplying by 2/3, multiply by its reciprocal 3/2: x = 10 · 3/2.", "10 · 3 = 30, and 30 ÷ 2 = 15.", "Check: (2/3)(15) − 4 = 10 − 4 = 6 ✔"], answer: "x = 15" },
    { q: "Solve the formula P = 2L + 2W for W.", steps: ["We want W alone. Subtract 2L from both sides: P − 2L = 2W.", "Divide both sides by 2: (P − 2L)/2 = W."], answer: "W = (P − 2L)/2" }
  ],
  mistakes: [
    ["Only does the operation to one side.", "“If you take 3 off one side of a balance, what happens? What must you do to the other side?”"],
    ["Gets −x = 8 and writes x = 8.", "“−x means −1 times x. What do you divide both sides by?” (x = −8)"],
    ["Subtracts the variable term from the wrong side and ends up with more steps.", "It still works! Suggest moving the smaller variable term so the coefficient stays positive."],
    ["Stops at 0 = 0 and writes x = 0.", "“Is there an x left? A true statement with no variable means every number works: infinitely many solutions.”"],
    ["Divides only one term: (3x + 6)/3 = x + 6.", "“Did the 3 divide BOTH terms?” It should be x + 2."]
  ],
  ask: ["What is happening to x in this equation? What would undo that?", "What did you do to the left side? Did you do the same to the right side?", "Can you plug your answer back in to check it?", "Which side has more x’s? Which side would you move them to?", "Why did you divide by that number?", "If you got a strange result like 3 = 3, what do you think that means?"],
  check: [{ q: "Solve 4x + 9 = −11", a: "x = −5. 4x = −20, so x = −5." }, { q: "Solve 2(x + 3) = 5x − 9", a: "x = 5. 2x + 6 = 5x − 9 → 15 = 3x." }, { q: "Solve 3x + 2 = 3x − 4", a: "No solution. Subtracting 3x gives 2 = −4, which is false." }, { q: "Solve A = bh/2 for h", a: "h = 2A/b. Multiply by 2, then divide by b." }],
  visual: '<svg viewBox="0 0 360 150" width="360" role="img" style="background:#fff;border-radius:12px"><polygon points="170,120 190,120 180,95" fill="#8a7f68"/><line x1="60" y1="95" x2="300" y2="95" stroke="#333" stroke-width="5"/><rect x="70" y="55" width="40" height="40" rx="6" fill="#1aa36f"/><text x="90" y="81" text-anchor="middle" fill="#fff" font-weight="700">x</text><rect x="114" y="65" width="28" height="30" rx="5" fill="#e0a100"/><text x="128" y="85" text-anchor="middle" fill="#fff" font-weight="700">+3</text><rect x="220" y="55" width="50" height="40" rx="6" fill="#e0a100"/><text x="245" y="81" text-anchor="middle" fill="#fff" font-weight="700">11</text><text x="180" y="140" text-anchor="middle" font-size="13" font-weight="700">x + 3 = 11 → take 3 off BOTH sides → x = 8</text></svg>' },

/* ---------------- UNIT 3 ---------------- */
{ id: "a1-03", course: "Algebra 1", unit: 3, title: "Inequalities (One-Step to Compound & Absolute Value)", standards: "A.REI.3, A.CED.1, A.CED.3",
  bigIdea: "Inequalities are solved almost exactly like equations, but the answer is a whole range of numbers. The one special rule: when you multiply or divide by a negative number, flip the inequality sign.",
  tips: "Have students test a number from their answer. If they get x > −3, ask them to plug in 0 (which is greater than −3) and see if the original inequality is true.",
  vocab: [
    ["inequality", "A comparison using <, >, ≤, or ≥ instead of =."],
    ["< and >", "Less than / greater than. The open side faces the bigger number (the “alligator eats the bigger one”)."],
    ["≤ and ≥", "Less than or equal to / greater than or equal to. The number itself is included."],
    ["open circle / closed circle", "On a number line, open ○ for < or > (not included); closed ● for ≤ or ≥ (included)."],
    ["compound inequality", "Two inequalities joined by AND (between, overlap) or OR (either one, outside)."],
    ["absolute value inequality", "|x| < 3 means the distance from 0 is less than 3 (−3 < x < 3). |x| > 3 means x < −3 OR x > 3."]
  ],
  steps: [
    { name: "Solving an inequality", list: ["Solve like an equation (distribute, combine, move terms).", "If you multiply or divide BOTH sides by a negative number, flip the sign.", "Graph: circle at the number (open or closed), shade the direction of the solutions.", "Check with a test number."] },
    { name: "Compound inequalities", list: ["“AND” with the variable in the middle, like −2 < x + 1 ≤ 5: do the same thing to all THREE parts.", "“OR”: solve each inequality separately and graph both pieces."] }
  ],
  examples: [
    { q: "Solve and graph: −4x + 3 ≥ 15", steps: ["Subtract 3 from both sides: −4x ≥ 12.", "Divide both sides by −4. Because we divided by a NEGATIVE, flip ≥ to ≤: x ≤ −3.", "Graph: closed circle at −3 (≤ includes −3), shade to the left.", "Check with x = −4: −4(−4) + 3 = 19, and 19 ≥ 15 ✔"], answer: "x ≤ −3" },
    { q: "Solve: −5 < 2x + 3 ≤ 9", steps: ["Subtract 3 from all three parts: −8 < 2x ≤ 6.", "Divide all three parts by 2 (positive, no flip): −4 < x ≤ 3.", "Graph: open circle at −4, closed circle at 3, shade between."], answer: "−4 < x ≤ 3" },
    { q: "Solve: |x − 2| < 5", steps: ["Less than → “between”: −5 < x − 2 < 5.", "Add 2 to all three parts: −3 < x < 7.", "Meaning: x is within 5 units of 2 on the number line."], answer: "−3 < x < 7" },
    { q: "Solve: 3x − 1 < −7 OR 2x ≥ 8", steps: ["First: 3x < −6, so x < −2.", "Second: x ≥ 4.", "OR means either one: shade left of −2 (open circle) and right of 4 (closed circle)."], answer: "x < −2 or x ≥ 4" }
  ],
  mistakes: [
    ["Forgets to flip the sign after dividing by a negative.", "“What did you divide by? Is it negative? Test a number to see which way works.”"],
    ["Flips the sign when SUBTRACTING a negative or when the answer is negative.", "Only multiplying or dividing by a negative flips it. −4 on the right side doesn’t matter."],
    ["Uses an open circle for ≤.", "“Does the line under the sign mean the number is included? Included = filled in.”"],
    ["Shades the wrong direction when the variable is on the right: 5 > x.", "Rewrite it with x first: x < 5. Then shade toward smaller numbers (left)."],
    ["In a compound inequality, only changes two of the three parts.", "“Did you do it to the left, the middle, AND the right?”"]
  ],
  ask: ["Did you multiply or divide by a negative anywhere?", "Can you pick a number from your shaded part and test it in the original?", "Is the boundary number itself a solution? How does that change the circle?", "Read your answer out loud as a sentence. Does it make sense?", "For “AND,” where do the two parts overlap?", "What does the absolute value bar mean as a distance?"],
  check: [{ q: "Solve 7 − 2x > 13", a: "x < −3. −2x > 6, divide by −2 and flip." }, { q: "Graph x ≥ −1: open or closed circle? Which way?", a: "Closed circle at −1, shade right." }, { q: "Solve 1 ≤ x − 4 < 6", a: "5 ≤ x < 10. Add 4 to all three parts." }, { q: "Solve |x| ≥ 2", a: "x ≤ −2 or x ≥ 2 (at least 2 away from zero)." }],
  visual: '<div style="display:grid;gap:8px;justify-items:center"><div><b>x ≤ −3</b><br>' + "TGA_NL1" + '</div><div><b>−4 < x ≤ 3</b><br>' + "TGA_NL2" + '</div></div>' },

/* ---------------- UNIT 4 ---------------- */
{ id: "a1-04", course: "Algebra 1", unit: 4, title: "Functions: Relations, Notation, Domain & Range", standards: "F.IF.1, F.IF.2, F.IF.5, F.IF.4",
  bigIdea: "A function is a rule where every input has exactly ONE output. Function notation f(x) is just a name for the output when the input is x.",
  tips: "f(x) does NOT mean f times x. Say it out loud as “f of x” and think of it like a vending machine: put in x, get out f(x).",
  vocab: [
    ["relation", "Any set of input–output pairs, like (2, 5), (3, 7)."],
    ["function", "A relation where each input (x) has exactly ONE output (y)."],
    ["input / output", "Input is x (independent variable). Output is y or f(x) (dependent variable)."],
    ["domain", "All the inputs (x-values) that are allowed or used."],
    ["range", "All the outputs (y-values) you get."],
    ["function notation", "f(x) = 2x + 1 means “the function f takes x, doubles it, and adds 1.” f(3) is the output when x = 3."],
    ["vertical line test", "If a vertical line can hit a graph in more than one point, it is NOT a function."]
  ],
  steps: [
    { name: "Is it a function?", list: ["Table or list of points: check if any x-value repeats with a DIFFERENT y-value. If yes, not a function.", "Graph: use the vertical line test.", "Same output for different inputs is OK (like (1, 4) and (2, 4))."] },
    { name: "Evaluating f(a)", list: ["Replace every x with the number a (in parentheses).", "Follow the order of operations.", "Write the answer as f(a) = ___."] },
    { name: "Solving f(x) = a value", list: ["Set the rule equal to the value.", "Solve for x like any equation."] }
  ],
  examples: [
    { q: "Is {(1, 3), (2, 5), (1, −4), (6, 3)} a function?", steps: ["Look for repeated x-values: x = 1 appears twice.", "x = 1 goes to 3 AND to −4, two different outputs.", "So the input 1 has two outputs."], answer: "Not a function" },
    { q: "f(x) = x² − 4x + 1. Find f(−2).", steps: ["Substitute (−2): (−2)² − 4(−2) + 1.", "(−2)² = 4 and −4(−2) = +8.", "4 + 8 + 1 = 13."], answer: "f(−2) = 13" },
    { q: "g(x) = −3x + 5. For what x is g(x) = 17?", steps: ["Set it equal: −3x + 5 = 17.", "Subtract 5: −3x = 12.", "Divide by −3: x = −4.", "Check: g(−4) = −3(−4) + 5 = 12 + 5 = 17 ✔"], answer: "x = −4" },
    { q: "Give the domain and range of {(−2, 4), (0, 1), (3, 4), (5, −2)}.", steps: ["Domain = all the x-values: −2, 0, 3, 5.", "Range = all the y-values (list each only once): 4, 1, −2.", "Write them in order from least to greatest."], answer: "Domain {−2, 0, 3, 5}; Range {−2, 1, 4}" }
  ],
  mistakes: [
    ["Thinks f(x) means f times x.", "“f(x) is a name, like ‘the output when the input is x.’ Read it as ‘f of x.’”"],
    ["Says a function can’t have two of the same y-values.", "Repeated OUTPUTS are fine. Only a repeated INPUT with different outputs breaks the rule."],
    ["Mixes up domain and range.", "“Domain = x = inputs (think: D comes before R, x comes before y).”"],
    ["Finds f(4) by solving 4 = rule.", "f(4) means put 4 IN for x. f(x) = 4 means the OUTPUT is 4."],
    ["Uses a horizontal line instead of a vertical line for the test.", "“Vertical line = one x-value. Does it hit more than one point?”"]
  ],
  ask: ["What is the input here? What is the output?", "Does any input show up twice? What are its outputs?", "When you see f(3), what number goes in for x?", "If you drag a pencil straight up and down across the graph, does it ever touch twice?", "What x-values does this graph use? What y-values?", "Can you describe this function in words?"],
  check: [{ q: "f(x) = 5 − 2x. Find f(−3).", a: "11. 5 − 2(−3) = 5 + 6 = 11." }, { q: "Is y² = x a function? (Hint: try x = 4.)", a: "No. x = 4 gives y = 2 and y = −2." }, { q: "h(x) = 4x − 1. Solve h(x) = −13.", a: "x = −3. 4x = −12." }, { q: "Domain and range of {(3, 0), (−1, 2), (4, 2)}", a: "Domain {−1, 3, 4}; Range {0, 2}." }],
  visual: "TGA_FN" },

/* ---------------- UNIT 5 ---------------- */
{ id: "a1-05", course: "Algebra 1", unit: 5, title: "Linear Functions: Slope, Graphing & Writing Equations", standards: "F.IF.6, F.LE.1, F.LE.2, A.CED.2, S.ID.7",
  bigIdea: "A linear function changes by the same amount every step. That constant rate is the slope. Slope-intercept form y = mx + b shows the slope (m) and the starting value (b) right away.",
  tips: "For word problems: the “per” amount (per hour, per ticket) is the slope, and the one-time or starting amount is the y-intercept.",
  vocab: [
    ["slope (m)", "Rate of change = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁). How much y changes when x goes up 1."],
    ["y-intercept (b)", "Where the line crosses the y-axis, the point (0, b). Often the starting amount."],
    ["x-intercept", "Where the line crosses the x-axis. Set y = 0 and solve."],
    ["slope-intercept form", "y = mx + b"],
    ["point-slope form", "y − y₁ = m(x − x₁), using a point (x₁, y₁) and slope m."],
    ["standard form", "Ax + By = C, like 3x + 2y = 12. Good for finding intercepts."],
    ["parallel / perpendicular", "Parallel lines have the SAME slope. Perpendicular slopes are opposite reciprocals (2 and −1/2)."]
  ],
  steps: [
    { name: "Find slope from two points", list: ["Label (x₁, y₁) and (x₂, y₂).", "Subtract the y’s: y₂ − y₁ (use parentheses for negatives).", "Subtract the x’s in the SAME order: x₂ − x₁.", "Divide and simplify."] },
    { name: "Graph y = mx + b", list: ["Plot the y-intercept (0, b).", "From there, use the slope as rise/run: up for positive rise, down for negative; always run to the right.", "Plot a second point, then draw the line through both."] },
    { name: "Write an equation from two points", list: ["Find the slope m.", "Plug one point and m into y = mx + b and solve for b.", "Write y = mx + b with the numbers."] }
  ],
  examples: [
    { q: "Find the slope through (−2, 5) and (4, −7).", steps: ["y₂ − y₁ = −7 − 5 = −12.", "x₂ − x₁ = 4 − (−2) = 6.", "Slope = −12 ÷ 6 = −2. (Negative slope: the line goes down left to right.)"], answer: "m = −2" },
    { q: "Write the equation of the line through (1, 3) and (3, 7).", steps: ["Slope: (7 − 3) ÷ (3 − 1) = 4 ÷ 2 = 2.", "Use y = mx + b with (1, 3): 3 = 2(1) + b, so 3 = 2 + b and b = 1.", "Equation: y = 2x + 1. Check (3, 7): 2(3) + 1 = 7 ✔"], answer: "y = 2x + 1" },
    { q: "A plumber charges a $45 visit fee plus $30 per hour. Write and use an equation to find the cost of a 3.5-hour job.", steps: ["“Per hour” is the slope: m = 30. The fee is the starting amount: b = 45.", "Cost: y = 30x + 45.", "x = 3.5: y = 30(3.5) + 45 = 105 + 45 = 150."], answer: "y = 30x + 45; $150" },
    { q: "Find the intercepts of 3x − 4y = 12.", steps: ["x-intercept: set y = 0 → 3x = 12 → x = 4. Point (4, 0).", "y-intercept: set x = 0 → −4y = 12 → y = −3. Point (0, −3).", "Plot both points and connect them to graph the line."], answer: "(4, 0) and (0, −3)" }
  ],
  mistakes: [
    ["Subtracts the x’s in a different order than the y’s.", "“Did you start with the same point on top and bottom?”"],
    ["Puts x on top: run ÷ rise.", "“Slope is rise over run. Which way is rise, up or across?”"],
    ["From y = −2x + 5, says the slope is 5.", "“Which number is attached to x?” The slope is −2; 5 is the y-intercept."],
    ["Graphs a negative slope going up.", "“Negative rise means move DOWN, then run right.”"],
    ["Mixes up x- and y-intercepts.", "“On the x-axis, what is y always equal to?” (0)"],
    ["Says a horizontal line has no slope / undefined.", "Horizontal = slope 0 (no rise). Vertical = undefined (no run, can’t divide by 0)."]
  ],
  ask: ["What does the slope mean in this situation (per what)?", "Where does this line start when x = 0?", "Is the line going up or down? What does that tell you about the slope’s sign?", "Can you check your equation using the other point?", "Can you show me the rise and the run on the graph?", "Which form of the equation is easiest to use here, and why?"],
  check: [{ q: "Slope through (0, −1) and (2, 5)?", a: "3. (5 − (−1)) ÷ (2 − 0) = 6 ÷ 2." }, { q: "Slope and y-intercept of y = −x + 4?", a: "m = −1, b = 4 (point (0, 4))." }, { q: "Line with slope −2 through (3, 1)?", a: "y = −2x + 7. 1 = −6 + b, b = 7." }, { q: "Slope of a line parallel to y = 5x − 3? Perpendicular?", a: "Parallel 5; perpendicular −1/5." }],
  visual: "TGA_SLOPE" },

/* ---------------- UNIT 6 ---------------- */
{ id: "a1-06", course: "Algebra 1", unit: 6, title: "Systems of Equations & Inequalities", standards: "A.REI.5, A.REI.6, A.REI.11, A.REI.12, A.CED.3",
  bigIdea: "A system is two (or more) equations at the same time. The solution is the point that works in BOTH, which is where the lines cross.",
  tips: "Every answer can be checked: plug the (x, y) point into BOTH original equations. If either one fails, there is a mistake.",
  vocab: [
    ["system of equations", "Two or more equations with the same variables."],
    ["solution of a system", "An ordered pair (x, y) that makes ALL the equations true; where the graphs intersect."],
    ["substitution", "Solve one equation for a variable and plug that expression into the other equation."],
    ["elimination", "Add or subtract the equations so one variable cancels out."],
    ["no solution", "Parallel lines (same slope, different intercept). They never cross."],
    ["infinitely many solutions", "The same line written two ways. Every point on it works."],
    ["system of inequalities", "The solution is the region where the shaded areas overlap."]
  ],
  steps: [
    { name: "Substitution", list: ["Solve one equation for x or y (pick one that’s easy, like y = …).", "Substitute that expression into the OTHER equation (use parentheses).", "Solve for the one variable left.", "Plug it back in to find the other variable.", "Check in both equations. Write the answer as (x, y)."] },
    { name: "Elimination", list: ["Line up x’s, y’s, and numbers.", "Multiply one or both equations so a variable has opposite coefficients (like 3y and −3y).", "Add the equations to eliminate that variable.", "Solve, then substitute back to find the other variable.", "Check in both equations."] }
  ],
  examples: [
    { q: "Solve by substitution: y = 2x − 3 and 3x + y = 12", steps: ["The first equation already says y = 2x − 3.", "Substitute into the second: 3x + (2x − 3) = 12.", "Combine: 5x − 3 = 12 → 5x = 15 → x = 3.", "Find y: y = 2(3) − 3 = 3.", "Check: 3(3) + 3 = 12 ✔"], answer: "(3, 3)" },
    { q: "Solve by elimination: 2x + 3y = 7 and 4x − 3y = 23", steps: ["The y-terms are already opposites (+3y and −3y). Add the equations: 6x = 30.", "x = 5.", "Substitute into 2x + 3y = 7: 10 + 3y = 7 → 3y = −3 → y = −1.", "Check in the second: 4(5) − 3(−1) = 20 + 3 = 23 ✔"], answer: "(5, −1)" },
    { q: "Solve: x + 2y = 4 and 3x − y = −9", steps: ["Multiply the second equation by 2 so the y’s cancel: 6x − 2y = −18.", "Add to the first: 7x = −14, so x = −2.", "Substitute: −2 + 2y = 4 → 2y = 6 → y = 3.", "Check: 3(−2) − 3 = −9 ✔"], answer: "(−2, 3)" },
    { q: "Movie tickets: adults cost $12 and kids cost $8. A group buys 9 tickets for $92. How many of each?", steps: ["Let a = adults, k = kids. Count: a + k = 9. Money: 12a + 8k = 92.", "From the first: k = 9 − a. Substitute: 12a + 8(9 − a) = 92.", "12a + 72 − 8a = 92 → 4a = 20 → a = 5.", "k = 9 − 5 = 4. Check: 12(5) + 8(4) = 60 + 32 = 92 ✔"], answer: "5 adult tickets and 4 kid tickets" }
  ],
  mistakes: [
    ["Finds x and stops.", "“A solution to a system is a point. What is y?”"],
    ["Substitutes back into the same equation they used to substitute.", "That always gives a true statement. Check in the OTHER equation."],
    ["When multiplying an equation for elimination, only multiplies one term.", "“Did every term, including the number after =, get multiplied?”"],
    ["Subtracts equations and loses signs.", "Suggest multiplying by −1 and ADDING instead; it’s easier to keep track."],
    ["Gets 0 = 5 and thinks they did it wrong.", "That means no solution (parallel lines). 0 = 0 means infinitely many."]
  ],
  ask: ["What does the solution to a system look like on a graph?", "Which variable would be easiest to get by itself?", "Which variable could you cancel? What would you multiply by?", "Did your answer work in BOTH equations?", "In the word problem, what do your two equations each represent?", "What would it mean if the lines were parallel?"],
  check: [{ q: "Solve: y = x + 1 and y = −2x + 7", a: "(2, 3). x + 1 = −2x + 7 → 3x = 6." }, { q: "Solve: x + y = 10 and x − y = 4", a: "(7, 3). Add: 2x = 14." }, { q: "How many solutions: y = 3x + 2 and y = 3x − 5?", a: "None. Same slope, different intercepts (parallel)." }, { q: "Is (1, −2) a solution of 2x − y = 4 and x + y = −1?", a: "Yes. 2 + 2 = 4 ✔ and 1 − 2 = −1 ✔" }],
  visual: "TGA_SYS" }
);

(window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(

/* ---------------- UNIT 7 ---------------- */
{ id: "a1-07", course: "Algebra 1", unit: 7, title: "Exponents & Exponential Functions", standards: "N.RN.1, A.SSE.3c, F.LE.1, F.LE.2, F.LE.5, F.IF.8b",
  bigIdea: "Exponents are repeated multiplication, and the exponent rules are shortcuts for counting factors. Exponential functions grow (or shrink) by the same PERCENT or factor each step, unlike linear functions that change by the same AMOUNT.",
  tips: "When a student forgets a rule, have them write it out the long way: x³ · x² = (x·x·x)(x·x) = x⁵. Counting factors always works.",
  vocab: [
    ["base / exponent", "In 2⁵, 2 is the base (the number multiplied) and 5 is the exponent (how many times)."],
    ["product rule", "Same base, multiplying → ADD exponents: x³ · x⁴ = x⁷."],
    ["quotient rule", "Same base, dividing → SUBTRACT exponents: x⁸ ÷ x³ = x⁵."],
    ["power rule", "Power to a power → MULTIPLY exponents: (x³)⁴ = x¹²."],
    ["zero exponent", "Anything (not 0) to the 0 power is 1: 7⁰ = 1."],
    ["negative exponent", "Means reciprocal (flip), NOT negative: 2⁻³ = 1/2³ = 1/8."],
    ["exponential function", "y = a · bˣ. a is the starting amount; b is the growth factor (b > 1 grows, 0 < b < 1 decays)."],
    ["growth / decay rate", "Growth: b = 1 + r. Decay: b = 1 − r. A 5% increase → b = 1.05; a 20% decrease → b = 0.80."]
  ],
  steps: [
    { name: "Simplifying with exponent rules", list: ["Multiply the number parts (coefficients) normally.", "For each variable, apply the rule: multiply → add exponents; divide → subtract; power of a power → multiply.", "Rewrite any negative exponent by moving that factor across the fraction bar.", "Check the sign: (−2)⁴ is positive; (−2)³ is negative."] },
    { name: "Writing an exponential model", list: ["Find the starting amount a (the value when x = 0).", "Find the factor b: 1 + rate for growth, 1 − rate for decay (rate as a decimal).", "Write y = a · bˣ, then substitute the x-value you need."] }
  ],
  examples: [
    { q: "Simplify: (3x²y)(−4x⁵y³)", steps: ["Multiply the numbers: 3 · (−4) = −12.", "x-terms: x² · x⁵ = x²⁺⁵ = x⁷.", "y-terms: y¹ · y³ = y⁴. (A plain y has exponent 1.)"], answer: "−12x⁷y⁴" },
    { q: "Simplify: (2a³)⁴", steps: ["Raise EACH factor to the 4th power: 2⁴ · (a³)⁴.", "2⁴ = 16.", "(a³)⁴ = a³ˣ⁴ = a¹²."], answer: "16a¹²" },
    { q: "Simplify: 12m⁵n² ÷ (4m⁷n²)", steps: ["Numbers: 12 ÷ 4 = 3.", "m: m⁵⁻⁷ = m⁻².", "n: n²⁻² = n⁰ = 1.", "Negative exponent means move it to the bottom: 3m⁻² = 3/m²."], answer: "3/m²" },
    { q: "A town of 8,000 people grows 3% per year. Write a model and find the population after 5 years.", steps: ["Start a = 8,000. Growth → b = 1 + 0.03 = 1.03.", "Model: P = 8000(1.03)ᵗ.", "t = 5: 8000 · 1.03⁵ ≈ 8000 · 1.1593 ≈ 9,274.", "Calculator tip: type 8000 × 1.03 ^ 5."], answer: "P = 8000(1.03)ᵗ; about 9,274 people" }
  ],
  mistakes: [
    ["Multiplies exponents when multiplying: x³ · x⁴ = x¹².", "“Write it out: how many x’s are there in total?” (7)"],
    ["Thinks 2⁻³ is negative.", "“A negative exponent means flip it into a fraction. Is 1/8 negative?”"],
    ["Says 5⁰ = 0.", "Use the pattern 5³ = 125, 5² = 25, 5¹ = 5, … each step divides by 5, so 5⁰ = 1."],
    ["(2x)³ = 2x³.", "“Did the 3 apply to the 2 as well?” It’s 8x³."],
    ["Uses 0.03 as the growth factor instead of 1.03.", "“If you multiply by 0.03, does the town grow or shrink? You need to keep the 100% and add 3%.”"],
    ["Uses 1.20 for a 20% decay.", "Decay subtracts: 1 − 0.20 = 0.80."]
  ],
  ask: ["Can you write this out as repeated multiplication?", "Are the bases the same? Then what happens to the exponents?", "What does a negative exponent tell you to do?", "In the word problem, what is the starting amount? Is it growing or decaying?", "Does your answer make sense: should it be bigger or smaller than the start?", "How is this different from adding the same amount each year?"],
  check: [{ q: "Simplify x⁶ · x⁻²", a: "x⁴. 6 + (−2) = 4." }, { q: "Evaluate 4⁻²", a: "1/16. Flip: 1/4²." }, { q: "Simplify (−3y²)³", a: "−27y⁶. (−3)³ = −27, (y²)³ = y⁶." }, { q: "A $20,000 car loses 15% of its value each year. Model?", a: "V = 20000(0.85)ᵗ. Decay factor 1 − 0.15." }],
  visual: "TGA_EXP" },

/* ---------------- UNIT 8 ---------------- */
{ id: "a1-08", course: "Algebra 1", unit: 8, title: "Polynomials: Add, Subtract & Multiply", standards: "A.APR.1, A.SSE.1a",
  bigIdea: "Polynomials are expressions with terms like 3x², −5x, and 7. Adding and subtracting is combining like terms. Multiplying means every term in the first must multiply every term in the second.",
  tips: "The box (area) method is the most reliable way to multiply for students who struggle. It shows every product, so nothing gets skipped.",
  vocab: [
    ["monomial / binomial / trinomial", "One term (5x) / two terms (x + 3) / three terms (x² − 2x + 1)."],
    ["degree", "The highest exponent. x³ − 4x + 2 has degree 3."],
    ["standard form", "Terms written from highest exponent to lowest: 4x³ + 2x² − x + 9."],
    ["leading coefficient", "The number in front of the highest-degree term."],
    ["FOIL", "First, Outer, Inner, Last: a way to multiply two binomials."],
    ["box method", "Draw a grid with one factor on top and the other on the side; multiply into each box; add like terms."]
  ],
  steps: [
    { name: "Subtracting polynomials", list: ["Write the first polynomial as is.", "Change the subtraction to adding the OPPOSITE of every term in the second polynomial.", "Combine like terms."] },
    { name: "Multiplying (box method)", list: ["Put the terms of one factor across the top and the other down the side.", "Multiply to fill every box (watch the signs).", "Add like terms (usually the diagonal boxes)."] }
  ],
  examples: [
    { q: "(5x² − 3x + 2) − (2x² + 4x − 6)", steps: ["Distribute the minus to every term: 5x² − 3x + 2 − 2x² − 4x + 6.", "x²: 5x² − 2x² = 3x².", "x: −3x − 4x = −7x.", "Numbers: 2 + 6 = 8."], answer: "3x² − 7x + 8" },
    { q: "(x − 5)(x + 3)", steps: ["First: x · x = x².", "Outer: x · 3 = 3x. Inner: −5 · x = −5x.", "Last: −5 · 3 = −15.", "Combine 3x − 5x = −2x."], answer: "x² − 2x − 15" },
    { q: "(2x − 3)²", steps: ["Squaring means (2x − 3)(2x − 3). NOT 4x² + 9.", "First: 4x². Outer: −6x. Inner: −6x. Last: +9.", "Combine: −6x − 6x = −12x."], answer: "4x² − 12x + 9" },
    { q: "(x + 2)(x² − 3x + 4)", steps: ["Multiply x by each term: x³ − 3x² + 4x.", "Multiply 2 by each term: 2x² − 6x + 8.", "Combine: x³ + (−3x² + 2x²) + (4x − 6x) + 8."], answer: "x³ − x² − 2x + 8" }
  ],
  mistakes: [
    ["Only subtracts the first term of the second polynomial.", "“The minus sign belongs to the WHOLE second polynomial. What happens to each term?”"],
    ["(x + 4)² = x² + 16.", "“Write it as (x + 4)(x + 4) and use the box. Where do the middle terms come from?” (x² + 8x + 16)"],
    ["Adds exponents when adding terms: x² + x² = x⁴.", "Adding like terms adds the coefficients only: 2x²."],
    ["Sign errors in the Last product: (−5)(3) = 15.", "Negative times positive is negative."],
    ["Skips the Outer or Inner product.", "Use the box: 4 boxes means 4 products."]
  ],
  ask: ["Which terms are like terms here?", "What does the minus sign in front of the parentheses do?", "How many products should you get? Did you get them all?", "Can you check by plugging in x = 1 into the problem and your answer?", "Which boxes have like terms?", "What is the degree of your answer? Does that make sense?"],
  check: [{ q: "(3x + 1) + (x − 8)", a: "4x − 7." }, { q: "(x + 6)(x − 6)", a: "x² − 36. The middle terms cancel (difference of squares)." }, { q: "(3x − 2)(x + 4)", a: "3x² + 10x − 8. 12x − 2x = 10x." }, { q: "(4a² − a) − (a² − 5a)", a: "3a² + 4a." }],
  visual: '<svg viewBox="0 0 300 200" width="300" role="img" style="background:#fff;border-radius:12px"><text x="150" y="20" text-anchor="middle" font-weight="700">(x − 5)(x + 3)</text><text x="125" y="44" text-anchor="middle" font-weight="700">x</text><text x="215" y="44" text-anchor="middle" font-weight="700">+3</text><text x="62" y="95" text-anchor="middle" font-weight="700">x</text><text x="62" y="160" text-anchor="middle" font-weight="700">−5</text><rect x="80" y="55" width="90" height="70" fill="#fff2c4" stroke="#888"/><rect x="170" y="55" width="90" height="70" fill="#fff2c4" stroke="#888"/><rect x="80" y="125" width="90" height="70" fill="#fde0dc" stroke="#888"/><rect x="170" y="125" width="90" height="70" fill="#fde0dc" stroke="#888"/><text x="125" y="95" text-anchor="middle">x²</text><text x="215" y="95" text-anchor="middle">3x</text><text x="125" y="165" text-anchor="middle">−5x</text><text x="215" y="165" text-anchor="middle">−15</text></svg>' },

/* ---------------- UNIT 9 ---------------- */
{ id: "a1-09", course: "Algebra 1", unit: 9, title: "Factoring", standards: "A.SSE.2, A.SSE.3a, A.REI.4b",
  bigIdea: "Factoring is multiplying in reverse: turning a polynomial into a product. Always look for a greatest common factor (GCF) first, then a pattern.",
  tips: "Every factoring answer can be checked by multiplying it back out. If the student gets the original polynomial, it’s right.",
  vocab: [
    ["factor", "Something multiplied. In (x + 2)(x − 5), the factors are (x + 2) and (x − 5)."],
    ["GCF", "Greatest common factor: the biggest number and variable that divides every term."],
    ["trinomial x² + bx + c", "Factor by finding two numbers that MULTIPLY to c and ADD to b."],
    ["difference of squares", "a² − b² = (a + b)(a − b). Example: x² − 49 = (x + 7)(x − 7)."],
    ["perfect square trinomial", "a² + 2ab + b² = (a + b)². Example: x² + 6x + 9 = (x + 3)²."],
    ["prime polynomial", "Can’t be factored with integers, like x² + 1 or x² + x + 1."],
    ["zero product property", "If A · B = 0, then A = 0 or B = 0. This is why we factor to solve."]
  ],
  steps: [
    { name: "Factoring checklist", list: ["Take out the GCF (including a −1 if the first term is negative).", "Count the terms. 2 terms: difference of squares? 3 terms: trinomial.", "For x² + bx + c: list factor pairs of c, find the pair that adds to b.", "For ax² + bx + c with a ≠ 1: multiply a · c, find two numbers that multiply to ac and add to b, split the middle term, and factor by grouping.", "Check by multiplying."] }
  ],
  examples: [
    { q: "Factor: 6x³ − 15x²", steps: ["GCF of 6 and 15 is 3. GCF of x³ and x² is x².", "Divide each term by 3x²: 6x³ ÷ 3x² = 2x and −15x² ÷ 3x² = −5.", "Check: 3x²(2x − 5) = 6x³ − 15x² ✔"], answer: "3x²(2x − 5)" },
    { q: "Factor: x² − 3x − 28", steps: ["Need two numbers that multiply to −28 and add to −3.", "Factor pairs of −28: (1, −28), (−1, 28), (2, −14), (−2, 14), (4, −7), (−4, 7).", "4 + (−7) = −3 ✔", "Check: (x + 4)(x − 7) = x² − 7x + 4x − 28 = x² − 3x − 28 ✔"], answer: "(x + 4)(x − 7)" },
    { q: "Factor: 2x² + 7x + 3", steps: ["a · c = 2 · 3 = 6. Two numbers that multiply to 6 and add to 7: 6 and 1.", "Split the middle: 2x² + 6x + x + 3.", "Group: 2x(x + 3) + 1(x + 3).", "Factor out (x + 3): (x + 3)(2x + 1)."], answer: "(2x + 1)(x + 3)" },
    { q: "Factor: 3x² − 75", steps: ["GCF: 3(x² − 25).", "x² − 25 is a difference of squares: x² − 5².", "x² − 25 = (x + 5)(x − 5)."], answer: "3(x + 5)(x − 5)" }
  ],
  mistakes: [
    ["Forgets to take out the GCF first.", "“Do all the terms share a number or variable?”"],
    ["Finds numbers that add correctly but have the wrong signs.", "“Multiply your factors back out. Do you get the original?”"],
    ["Factors x² + 25 as (x + 5)(x − 5).", "Multiply it back: you get x² − 25. A SUM of squares doesn’t factor with real numbers."],
    ["Stops after the GCF when more factoring is possible.", "“Can the part in parentheses be factored again?”"],
    ["Writes x² + 5x + 6 = (x + 2) + (x + 3).", "Factors are MULTIPLIED: (x + 2)(x + 3)."]
  ],
  ask: ["What do all the terms have in common?", "How many terms are there? Which pattern could fit?", "What two numbers multiply to ___ and add to ___?", "Can you multiply your answer back out to check it?", "Is anything left that can still be factored?", "How would factoring help you solve x² − 3x − 28 = 0?"],
  check: [{ q: "Factor x² + 9x + 20", a: "(x + 4)(x + 5)." }, { q: "Factor x² − 64", a: "(x + 8)(x − 8)." }, { q: "Factor 4x² − 8x", a: "4x(x − 2)." }, { q: "Factor x² + 2x − 15", a: "(x + 5)(x − 3)." }] },

/* ---------------- UNIT 10 ---------------- */
{ id: "a1-10", course: "Algebra 1", unit: 10, title: "Quadratic Functions & Equations", standards: "F.IF.4, F.IF.7a, F.IF.8a, A.REI.4, A.SSE.3b",
  bigIdea: "A quadratic makes a U-shaped graph called a parabola. Its zeros (x-intercepts) are the solutions of ax² + bx + c = 0, found by factoring, square roots, or the quadratic formula.",
  tips: "The quadratic formula ALWAYS works. If factoring is taking more than a minute, switch to the formula. Have students write a, b, and c with their signs before plugging in.",
  vocab: [
    ["quadratic function", "y = ax² + bx + c (with a ≠ 0). Its graph is a parabola."],
    ["vertex", "The turning point: the lowest point (minimum) if a > 0, the highest (maximum) if a < 0."],
    ["axis of symmetry", "The vertical line through the vertex: x = −b ÷ (2a)."],
    ["zeros / roots / x-intercepts / solutions", "All mean the x-values where y = 0 (where the graph crosses the x-axis)."],
    ["vertex form", "y = a(x − h)² + k. The vertex is (h, k). Careful: (x + 3) means h = −3."],
    ["quadratic formula", "x = (−b ± √(b² − 4ac)) ÷ (2a)."],
    ["discriminant", "b² − 4ac. Positive → 2 solutions, zero → 1 solution, negative → no real solutions."]
  ],
  steps: [
    { name: "Solving by factoring", list: ["Get 0 on one side (ax² + bx + c = 0).", "Factor.", "Set each factor equal to 0 and solve.", "Check both answers."] },
    { name: "Solving with the quadratic formula", list: ["Write in the form ax² + bx + c = 0.", "Write a = __, b = __, c = __ (with signs).", "Find the discriminant b² − 4ac first.", "Plug into x = (−b ± √(b² − 4ac)) ÷ (2a); find the + answer and the − answer."] },
    { name: "Finding the vertex from standard form", list: ["x = −b ÷ (2a).", "Plug that x into the function to find y.", "The vertex is (x, y)."] }
  ],
  examples: [
    { q: "Solve by factoring: x² + 2x − 24 = 0", steps: ["Two numbers that multiply to −24 and add to 2: 6 and −4.", "(x + 6)(x − 4) = 0.", "x + 6 = 0 → x = −6, or x − 4 = 0 → x = 4.", "Check x = 4: 16 + 8 − 24 = 0 ✔"], answer: "x = −6 or x = 4" },
    { q: "Solve with the quadratic formula: 2x² − 5x − 3 = 0", steps: ["a = 2, b = −5, c = −3.", "Discriminant: (−5)² − 4(2)(−3) = 25 + 24 = 49.", "x = (5 ± √49) ÷ 4 = (5 ± 7) ÷ 4.", "(5 + 7) ÷ 4 = 3 and (5 − 7) ÷ 4 = −1/2."], answer: "x = 3 or x = −1/2" },
    { q: "Find the vertex of y = x² − 6x + 5. Is it a max or min?", steps: ["a = 1, b = −6. Axis: x = −(−6) ÷ (2 · 1) = 3.", "y = 3² − 6(3) + 5 = 9 − 18 + 5 = −4.", "a = 1 is positive, so the parabola opens up: the vertex is a minimum."], answer: "Vertex (3, −4), a minimum" },
    { q: "Solve: (x − 2)² = 25", steps: ["Take the square root of both sides, remembering ±: x − 2 = ±5.", "x − 2 = 5 → x = 7.", "x − 2 = −5 → x = −3."], answer: "x = 7 or x = −3" }
  ],
  mistakes: [
    ["Tries to factor or use the formula without 0 on one side.", "“What must one side equal for the zero product property to work?”"],
    ["Uses b = 5 when the equation says −5x.", "“Write a, b, and c with their signs first.” Then −b is −(−5) = 5."],
    ["Calculates −5² as −25 inside the discriminant.", "Always use parentheses: (−5)² = 25."],
    ["Forgets the ± and finds only one solution.", "“Square roots have two answers. What else squares to 25?”"],
    ["Divides only part of the numerator by 2a.", "The whole (−b ± √…) is divided by 2a."],
    ["Reads the vertex of y = (x + 3)² − 1 as (3, −1).", "“x + 3 = x − (−3), so h = −3.” Vertex (−3, −1)."]
  ],
  ask: ["Does the parabola open up or down? How can you tell?", "What are a, b, and c? Did you include the signs?", "What does the discriminant tell you before you finish?", "Where would your answers show up on the graph?", "Can you check one answer by plugging it back in?", "In a word problem, does a negative answer make sense?"],
  check: [{ q: "Solve x² − 9x + 14 = 0", a: "x = 2 or x = 7. (x − 2)(x − 7)." }, { q: "Discriminant of x² + 4x + 5? How many real solutions?", a: "−4, so no real solutions. 16 − 20 = −4." }, { q: "Vertex of y = −2(x − 1)² + 8", a: "(1, 8), a maximum (a = −2 < 0)." }, { q: "Solve 3x² = 48", a: "x = 4 or x = −4. x² = 16." }],
  visual: "TGA_QUAD" },

/* ---------------- UNIT 11 ---------------- */
{ id: "a1-11", course: "Algebra 1", unit: 11, title: "Radicals & Rational Exponents", standards: "N.RN.1, N.RN.2, N.RN.3",
  bigIdea: "A square root undoes squaring. To simplify a radical, pull out the largest perfect-square factor. A fractional exponent is another way to write a root: x^(1/2) = √x.",
  tips: "Have students keep a list of perfect squares handy: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.",
  vocab: [
    ["square root", "√25 = 5 because 5² = 25. The √ symbol means the positive (principal) root."],
    ["radicand", "The number under the radical sign. In √50, the radicand is 50."],
    ["perfect square", "A whole number times itself: 1, 4, 9, 16, 25, 36, 49, …"],
    ["simplest radical form", "No perfect-square factor left under the root, like 5√2 instead of √50."],
    ["cube root", "∛8 = 2 because 2³ = 8. Cube roots of negatives are fine: ∛−27 = −3."],
    ["rational exponent", "x^(1/n) = ⁿ√x, and x^(m/n) = (ⁿ√x)^m. Example: 8^(2/3) = (∛8)² = 4."],
    ["rational vs. irrational", "Rational: can be a fraction (√16 = 4). Irrational: never-ending, non-repeating decimal (√2 ≈ 1.414…)."]
  ],
  steps: [
    { name: "Simplifying √n", list: ["Find the largest perfect square that divides n.", "Rewrite: √n = √(perfect square) · √(what’s left).", "Take the square root of the perfect square."] },
    { name: "Adding/subtracting radicals", list: ["Simplify each radical first.", "Only combine LIKE radicals (same number under the root): 3√5 + 2√5 = 5√5.", "Add the numbers in front; the radical stays the same."] }
  ],
  examples: [
    { q: "Simplify √72", steps: ["Largest perfect square factor of 72: 36 (because 36 × 2 = 72).", "√72 = √36 · √2.", "√36 = 6."], answer: "6√2" },
    { q: "Simplify 3√20 + √45", steps: ["√20 = √4 · √5 = 2√5, so 3√20 = 6√5.", "√45 = √9 · √5 = 3√5.", "Like radicals: 6√5 + 3√5 = 9√5."], answer: "9√5" },
    { q: "Simplify √6 · √15", steps: ["Multiply under one root: √90.", "90 = 9 · 10, so √90 = 3√10."], answer: "3√10" },
    { q: "Evaluate 27^(2/3)", steps: ["The denominator 3 means cube root: ∛27 = 3.", "The numerator 2 means square it: 3² = 9."], answer: "9" }
  ],
  mistakes: [
    ["√9 + √16 = √25.", "“Check: 3 + 4 = 7, but √25 = 5.” You can’t add under one root."],
    ["Uses a perfect square that isn’t the largest (√72 = 2√18) and stops.", "“Is there still a perfect square inside 18?” Keep going, or start with the largest."],
    ["Adds unlike radicals: √2 + √3 = √5.", "Only like radicals combine, like adding x’s."],
    ["Says √(−9) = −3.", "No real number squared is negative. (In Algebra 2 they learn 3i.)"],
    ["Thinks 8^(1/3) = 8/3.", "“The 1/3 exponent means cube root. What number cubed is 8?”"]
  ],
  ask: ["What perfect squares go into this number?", "Can you check by squaring your answer?", "Are these like radicals? How do you know?", "What does the denominator of the exponent tell you?", "Is your answer rational or irrational?"],
  check: [{ q: "Simplify √50", a: "5√2. √25 · √2." }, { q: "Simplify 2√3 · 4√3", a: "24. 8 · √9 = 8 · 3." }, { q: "Evaluate 16^(1/2)", a: "4." }, { q: "Simplify √12 − √3", a: "√3. 2√3 − √3." }] },

/* ---------------- UNIT 12 ---------------- */
{ id: "a1-12", course: "Algebra 1", unit: 12, title: "Statistics & Data", standards: "S.ID.1, S.ID.2, S.ID.3, S.ID.5, S.ID.6, S.ID.7, S.ID.8, S.ID.9",
  bigIdea: "Statistics describes data: its center (mean, median), its spread (range, IQR, standard deviation), and relationships between two variables (scatter plots, lines of best fit, correlation). Correlation does NOT prove causation.",
  tips: "For data questions, ask students to say what the numbers MEAN in context: “The median of 72 means half the students scored 72 or less.”",
  vocab: [
    ["mean", "The average: add all values and divide by how many."],
    ["median", "The middle value when the data is in order (average the two middle values if there’s an even number)."],
    ["range", "Largest value − smallest value."],
    ["quartiles / IQR", "Q1 = median of the lower half, Q3 = median of the upper half. IQR = Q3 − Q1 (the middle 50%)."],
    ["outlier", "An unusually far-off value. A common test: below Q1 − 1.5·IQR or above Q3 + 1.5·IQR."],
    ["box plot", "Shows the five-number summary: minimum, Q1, median, Q3, maximum."],
    ["correlation coefficient (r)", "A number from −1 to 1. Close to 1: strong positive; close to −1: strong negative; near 0: little linear relationship."],
    ["two-way table", "Counts for two categories at once. Relative frequency = part ÷ total."]
  ],
  steps: [
    { name: "Five-number summary and box plot", list: ["Put the data in order.", "Find the minimum and maximum.", "Find the median (middle).", "Q1 = median of the lower half; Q3 = median of the upper half (don’t include the overall median if there’s an odd count).", "Draw the box from Q1 to Q3, a line at the median, and whiskers to the min and max."] },
    { name: "Interpreting a line of best fit y = mx + b", list: ["Slope m: for each 1 unit increase in x, y changes by m (on average).", "Intercept b: the predicted y when x = 0 (only meaningful if x = 0 makes sense).", "Use the equation to predict, but be careful predicting far outside the data."] }
  ],
  examples: [
    { q: "Find the mean, median, and range: 12, 7, 15, 7, 9", steps: ["Mean: 12 + 7 + 15 + 7 + 9 = 50, and 50 ÷ 5 = 10.", "Order: 7, 7, 9, 12, 15. Median = 9 (the middle).", "Range: 15 − 7 = 8."], answer: "Mean 10, median 9, range 8" },
    { q: "Five-number summary and IQR: 3, 5, 6, 8, 9, 11, 14, 20", steps: ["8 values (already in order). Median = average of 8 and 9 = 8.5.", "Lower half 3, 5, 6, 8 → Q1 = (5 + 6) ÷ 2 = 5.5.", "Upper half 9, 11, 14, 20 → Q3 = (11 + 14) ÷ 2 = 12.5.", "IQR = 12.5 − 5.5 = 7. Min 3, max 20."], answer: "3, 5.5, 8.5, 12.5, 20; IQR = 7" },
    { q: "A line of best fit for hours studied (x) and test score (y) is y = 4.5x + 62. Interpret it and predict the score for 6 hours.", steps: ["Slope 4.5: each extra hour of studying is linked to about 4.5 more points.", "Intercept 62: a student who studies 0 hours is predicted to score about 62.", "Prediction: 4.5(6) + 62 = 27 + 62 = 89."], answer: "About 89 points" },
    { q: "A two-way table: of 80 students, 50 play a sport. Of those 50, 30 also play an instrument. What fraction of sport players also play an instrument?", steps: ["The question is about sport players only, so the total is 50 (not 80).", "30 ÷ 50 = 0.6.", "0.6 = 60%."], answer: "60% of sport players" }
  ],
  mistakes: [
    ["Finds the median without ordering the data.", "“Is the list in order from least to greatest?”"],
    ["With an even number of values, picks one middle number.", "Average the two middle values."],
    ["Says ice cream sales cause sunburns because r = 0.9.", "Correlation isn’t causation. “What third thing (hot sunny weather) could cause both?”"],
    ["Uses the wrong total in a two-way table.", "“Who is the question about? That group is your total.”"],
    ["Thinks r = −0.95 is weak because it’s negative.", "The sign shows direction; the size shows strength. −0.95 is strong."]
  ],
  ask: ["What does this number mean in the situation?", "Is there an outlier? How does it affect the mean versus the median?", "Who is the question asking about? What is the total for that group?", "What does the slope mean in words, with units?", "Does one thing really cause the other, or could something else explain both?", "Is your prediction inside the range of the data?"],
  check: [{ q: "Mean of 4, 8, 10, 2", a: "6. 24 ÷ 4." }, { q: "Median of 10, 3, 8, 6", a: "7. Order 3, 6, 8, 10; (6 + 8) ÷ 2." }, { q: "Which measure of center is better with an outlier?", a: "Median. The mean gets pulled toward the outlier." }, { q: "r = 0.08 means…", a: "Almost no linear relationship." }],
  visual: "TGA_BOX" }
);

/* ---------- build the graph visuals (uses the TGA helpers at the top) ---------- */
(function () {
  const G = window.TGA, V = {
    TGA_NL1: G.nline(-7, 3, [{ v: -3, label: "−3" }], [[-8, -3]]),
    TGA_NL2: G.nline(-6, 5, [{ v: -4, open: true, label: "−4" }, { v: 3, label: "3" }], [[-4, 3]]),
    TGA_FN: '<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center"><div style="text-align:center"><b>✅ Function</b><br>' + G.graph({ x: [-4, 4], y: [-2, 9], fns: [{ f: x => x * x - 1, c: "#1aa36f" }], lines: [[1.5, -2, 1.5, 9, "#d0453a"]], w: 230, h: 220, alt: "parabola passes the vertical line test" }) + '<br><small>A vertical line hits it once.</small></div><div style="text-align:center"><b>❌ Not a function</b><br>' + G.graph({ x: [-4, 4], y: [-4, 4], fns: [{ f: x => Math.sqrt(Math.max(0, 9 - x * x)), c: "#8a54e0" }, { f: x => -Math.sqrt(Math.max(0, 9 - x * x)), c: "#8a54e0" }], lines: [[1.5, -4, 1.5, 4, "#d0453a"]], w: 230, h: 220, alt: "circle fails the vertical line test" }) + '<br><small>A vertical line hits it twice.</small></div></div>',
    TGA_SLOPE: G.graph({ x: [-5, 5], y: [-4, 8], fns: [{ f: x => 2 * x + 1, label: "y = 2x + 1", lx: 3 }], lines: [[0, 1, 1, 1], [1, 1, 1, 3]], pts: [[0, 1, "(0, 1) start"], [1, 3, "rise 2, run 1"]], alt: "line y = 2x + 1 with slope triangle" }),
    TGA_SYS: G.graph({ x: [-2, 7], y: [-4, 8], fns: [{ f: x => 2 * x - 3, label: "y = 2x − 3", lx: 5 }, { f: x => 12 - 3 * x, c: "#e8368f", label: "3x + y = 12", lx: 1.2 }], pts: [[3, 3, "(3, 3) solution"]], alt: "two lines crossing at 3, 3" }),
    TGA_EXP: G.graph({ x: [0, 6], y: [0, 10], step: 1, fns: [{ f: x => Math.pow(2, x) / 2, c: "#d0453a", label: "exponential: ×2", lx: 4.2 }, { f: x => x + 0.5, c: "#2b7de9", label: "linear: +1", lx: 5.8 }], alt: "exponential curve overtakes a line" }),
    TGA_QUAD: G.graph({ x: [-2, 8], y: [-5, 7], fns: [{ f: x => x * x - 6 * x + 5, label: "y = x² − 6x + 5", lx: 6.2 }], lines: [[3, -5, 3, 7, "#8a54e0"]], pts: [[3, -4, "vertex (3, −4)"], [1, 0, "(1, 0)"], [5, 0, "(5, 0)"]], alt: "parabola with vertex 3, -4 and zeros 1 and 5" }),
    TGA_BOX: (() => { const X = v => 20 + v * 15; return `<svg viewBox="0 0 360 110" width="360" role="img" style="background:#fff;border-radius:12px"><line x1="${X(3)}" y1="45" x2="${X(5.5)}" y2="45" stroke="#333" stroke-width="2"/><line x1="${X(12.5)}" y1="45" x2="${X(20)}" y2="45" stroke="#333" stroke-width="2"/><rect x="${X(5.5)}" y="25" width="${X(12.5) - X(5.5)}" height="40" fill="#e8f1ff" stroke="#2b7de9" stroke-width="2"/><line x1="${X(8.5)}" y1="25" x2="${X(8.5)}" y2="65" stroke="#d0453a" stroke-width="3"/>${[[3, "min 3"], [5.5, "Q1 5.5"], [8.5, "median 8.5"], [12.5, "Q3 12.5"], [20, "max 20"]].map(([v, l], i) => `<text x="${X(v)}" y="${i % 2 ? 90 : 18}" font-size="11" text-anchor="middle" font-weight="700">${l}</text>`).join("")}<text x="${(X(5.5) + X(12.5)) / 2}" y="104" font-size="11" text-anchor="middle">IQR = 12.5 − 5.5 = 7</text></svg>`; })()
  };
  (window.TUTOR_UNITS || []).forEach(u => { if (typeof u.visual === "string") Object.keys(V).forEach(k => { u.visual = u.visual.split(k).join(V[k]); }); });
})();
