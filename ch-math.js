/* =====================================================================
   MATH CHALLENGE PROBLEMS (shown on challenge.html)
   Each problem: id (unique, used in the link), grade, subject, course,
   std (standard), spice (1–3 🌶️), title, teaser (card text), ask (the
   initial question for the TRF), prompt (HTML), why, answer, hints [3],
   solution (HTML), deeper (Level 3 question).
   answer types:  { type:"num", value, tol, unit }   number check
                  { type:"mc", opts:[...], a:index } multiple choice
                  { type:"multi", opts:[...], a:[indexes] } select all
                  { type:"open" } + rubric:[...]     self-check list
   ✏️ Edit text between the quotes/backticks. Keep the commas.
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · Algebra 1 ---------------- */
{ id: "m9-nosolution", grade: 9, subject: "Math", course: "Algebra 1", unit: "Systems of Equations", std: "A.REI.6 · A.CED.3", spice: 2,
  title: "The System That Refuses to Be Solved",
  teaser: "Find the value of k that makes a system have NO solution, then build one with infinitely many.",
  ask: "For what value of k does the system y = 2x + 3 and kx − 4y = 8 have no solution?",
  prompt: `<p>Here is a system of linear equations:</p>
    <blockquote style="font-size:1.15rem"><b>y = 2x + 3</b><br><b>kx − 4y = 8</b></blockquote>
    <p><b>(a)</b> Find the value of <b>k</b> that makes the system have <b>no solution</b>. Prove your answer is right.</p>
    <p><b>(b)</b> Now change the second equation to <b>kx − 4y = c</b>. Find values of <b>k</b> and <b>c</b> that make the system have <b>infinitely many</b> solutions.</p>
    <p><b>(c)</b> Explain, using the graphs, why there is no value of k that gives exactly <b>two</b> solutions.</p>`,
  why: "You are not solving for x and y. You have to think about what makes a system have 0, 1, or infinitely many solutions, and work backward.",
  answer: { type: "num", value: 8, tol: 0, prompt: "Part (a): what is k?" },
  hints: ["Think about the graphs. When do two lines never cross?",
    "Solve kx − 4y = 8 for y so it is in slope-intercept form. What is its slope? What is its y-intercept?",
    "The slope of the second line is k/4. Parallel lines need the same slope as y = 2x + 3. Then check that the y-intercepts are different."],
  solution: `<p><b>(a)</b> Solve the second equation for y: −4y = −kx + 8, so <b>y = (k/4)x − 2</b>.</p>
    <p>No solution means the lines are <b>parallel</b>: same slope, different y-intercepts. Set k/4 = 2, so <b>k = 8</b>. The y-intercepts are 3 and −2, which are different, so the lines never meet. ✅</p>
    <p><b>(b)</b> Infinitely many solutions means the <b>same line</b>. Multiply y = 2x + 3 to match the form kx − 4y = c: 4y = 8x + 12, so 8x − 4y = −12. <b>k = 8, c = −12</b>.</p>
    <p><b>(c)</b> Two different straight lines can cross at most once. If they share two points, they share the whole line (infinitely many). So a linear system can only have 0, 1, or infinitely many solutions.</p>`,
  deeper: "If one equation were a parabola (like y = x²) instead of a line, how many solutions could the system have? Sketch every possibility and explain why." },

{ id: "m9-doubling", grade: 9, subject: "Math", course: "Algebra 1", unit: "Linear vs. Exponential Functions", std: "F.LE.1 · F.LE.3", spice: 2,
  title: "$50 a Week or Double Every Week?",
  teaser: "A steady paycheck vs. money that doubles. When does doubling finally win, and is the answer what you expect?",
  ask: "In which week does the total from Plan B first beat the total from Plan A?",
  prompt: `<p>You get two job offers for a summer job.</p>
    <ul><li><b>Plan A:</b> You earn <b>$50 every week</b>.</li>
    <li><b>Plan B:</b> You earn <b>$1 in week 1</b>, <b>$2 in week 2</b>, <b>$4 in week 3</b>, and the pay keeps <b>doubling</b> every week.</li></ul>
    <p><b>(a)</b> Write an expression for your <b>total earnings</b> after <b>n</b> weeks for each plan.</p>
    <p><b>(b)</b> In which week does your <b>TOTAL</b> money from Plan B first become greater than your total from Plan A?</p>
    <p><b>(c)</b> The summer job lasts 10 weeks. How much more does the better plan pay in all?</p>`,
  why: "Most people compare the weekly paychecks instead of the totals. Finding a formula for the total of a doubling pattern takes real pattern-spotting.",
  answer: { type: "num", value: 9, tol: 0, prompt: "Part (b): which week number?" },
  hints: ["Make a table with columns: week, Plan B pay that week, Plan B total, Plan A total.",
    "Look at the Plan B totals: 1, 3, 7, 15, 31… Compare each one to the next power of 2.",
    "The Plan B total after n weeks is 2ⁿ − 1. Plan A’s total is 50n. Find the first n where 2ⁿ − 1 > 50n."],
  solution: `<p><b>(a)</b> Plan A total = <b>50n</b>. Plan B totals are 1, 3, 7, 15, 31, … which is always one less than a power of 2, so Plan B total = <b>2ⁿ − 1</b>.</p>
    <table><tr><th>Week n</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr><tr><td>Plan A: 50n</td><td>300</td><td>350</td><td>400</td><td>450</td><td>500</td></tr><tr><td>Plan B: 2ⁿ − 1</td><td>63</td><td>127</td><td>255</td><td><b>511</b></td><td>1,023</td></tr></table>
    <p><b>(b)</b> Plan B’s total first passes Plan A in <b>week 9</b> ($511 vs. $450). Note: Plan B’s <i>weekly</i> pay passes $50 in week 7 ($64), but the <i>total</i> takes two more weeks to catch up.</p>
    <p><b>(c)</b> After 10 weeks: Plan B = $1,023, Plan A = $500. Plan B pays <b>$523 more</b>.</p>`,
  deeper: "If the summer job lasted only 8 weeks, which plan should you pick? Write a rule a friend could use to choose between a linear plan and an exponential plan for ANY number of weeks." },

/* ---------------- 10th grade · Geometry ---------------- */
{ id: "m10-altitude", grade: 10, subject: "Math", course: "Geometry", unit: "Similarity & Right Triangles", std: "G.SRT.4 · G.SRT.5", spice: 2,
  title: "The Hidden Similar Triangles",
  teaser: "One altitude creates three similar triangles. Use them to find a length and an area with no Pythagorean shortcuts.",
  ask: "In right triangle ABC, the altitude to the hypotenuse makes segments of 4 and 9. How do I find the altitude and the area?",
  prompt: `<p>Triangle ABC has a <b>right angle at C</b>. Segment <b>CD</b> is drawn from C <b>perpendicular</b> to the hypotenuse AB. It splits the hypotenuse into <b>AD = 4</b> and <b>DB = 9</b>.</p>
    <div class="fig"><svg viewBox="0 10 340 185" width="340" role="img" aria-label="Right triangle ABC with altitude CD to hypotenuse AB">
      <polygon points="20,170 320,170 112,32" fill="#e8f1ff" stroke="#2b7de9" stroke-width="3"/>
      <line x1="112" y1="32" x2="112" y2="170" stroke="#d0453a" stroke-width="3" stroke-dasharray="6 4"/>
      <rect x="112" y="158" width="12" height="12" fill="none" stroke="#d0453a" stroke-width="2"/>
      <text x="8" y="186" font-weight="700">A</text><text x="322" y="186" font-weight="700">B</text><text x="105" y="26" font-weight="700">C</text><text x="107" y="186" font-weight="700">D</text>
      <text x="62" y="164" font-size="14">4</text><text x="205" y="164" font-size="14">9</text><text x="118" y="112" font-size="14" fill="#d0453a">h</text></svg></div>
    <p><b>(a)</b> Prove that triangle ACD is similar to triangle CBD.</p>
    <p><b>(b)</b> Use the similarity to find <b>CD</b> (the altitude h).</p>
    <p><b>(c)</b> Find the <b>area</b> of triangle ABC and the exact length of <b>AC</b>.</p>`,
  why: "You have to find three similar triangles inside one triangle and match their corresponding sides in the right order. That is where most people slip.",
  answer: { type: "num", value: 39, tol: 0, prompt: "Part (c): what is the area of triangle ABC", unit: "square units" },
  hints: ["Mark every angle. If angle A = x°, what is angle ACD? What is angle BCD?",
    "Triangles ACD and CBD have the same three angles, so they are similar (AA). Their matching legs: AD ↔ CD and CD ↔ DB.",
    "Set up AD/CD = CD/DB, so 4/h = h/9. Then the area of ABC = ½ × (hypotenuse) × (altitude)."],
  solution: `<p><b>(a)</b> Both small triangles have a right angle at D. Let ∠A = x. In triangle ACD, ∠ACD = 90° − x. Since ∠ACB = 90°, ∠BCD = x. So triangle ACD has angles 90°, x, 90° − x and triangle CBD has angles 90°, x (at C), 90° − x (at B). By <b>AA similarity</b>, △ACD ~ △CBD.</p>
    <p><b>(b)</b> Matching sides: AD/CD = CD/DB → 4/h = h/9 → h² = 36 → <b>h = 6</b>. (The altitude is the <i>geometric mean</i> of the two pieces.)</p>
    <p><b>(c)</b> Hypotenuse AB = 4 + 9 = 13. Area = ½ · 13 · 6 = <b>39 square units</b>.<br>AC is the hypotenuse of △ACD: AC² = 4² + 6² = 52, so <b>AC = √52 = 2√13 ≈ 7.21</b>. (Check: AC² = AD · AB = 4 · 13 = 52 ✅)</p>`,
  deeper: "Prove that in ANY right triangle, the altitude to the hypotenuse is the geometric mean of the two segments it creates. Then explain how this gives a new proof of the Pythagorean theorem." },

{ id: "m10-goat", grade: 10, subject: "Math", course: "Geometry", unit: "Circles & Area", std: "G.C.5 · G.MG.1", spice: 3,
  title: "The Goat and the Shed",
  teaser: "A goat on a 15-meter rope is tied to the corner of a shed. How much grass can it reach? (The rope bends!)",
  ask: "A goat tied to the corner of a 10 m by 10 m shed with a 15 m rope: how much area can it graze?",
  prompt: `<p>A goat is tied with a <b>15 m rope</b> to the outside corner of a <b>square shed that is 10 m by 10 m</b>. The goat cannot go inside or through the shed, but the rope can wrap around the corners. The shed sits in a huge, open field.</p>
    <div class="fig"><svg viewBox="0 0 300 260" width="300" role="img" aria-label="Square shed with a goat tied to its bottom-left corner">
      <rect x="0" y="0" width="300" height="260" rx="16" fill="#e4f6ea"/>
      <rect x="120" y="70" width="70" height="70" fill="#c9a26b" stroke="#6b4d22" stroke-width="3"/>
      <text x="155" y="110" text-anchor="middle" font-weight="700">SHED</text><text x="155" y="64" text-anchor="middle" font-size="12">10 m</text>
      <circle cx="120" cy="140" r="5" fill="#d0453a"/><text x="76" y="160" font-size="22">🐐</text>
      <line x1="120" y1="140" x2="45" y2="214" stroke="#555" stroke-width="2"/><text x="60" y="196" font-size="12">15 m</text></svg></div>
    <p><b>(a)</b> Sketch the full region the goat can reach. (Hint: think about what happens when the rope wraps around a corner.)</p>
    <p><b>(b)</b> Find the total grazing area to the nearest square meter.</p>`,
  why: "The shape is not one circle. You have to see that the region is made of three different circle sectors, and figure out each radius.",
  answer: { type: "num", value: 569.4, tol: 1.5, near: 6, prompt: "Part (b): total area", unit: "square meters" },
  hints: ["Without wrapping, the goat can sweep around the corner on every side that is not blocked by the shed. What fraction of a full circle is that?",
    "When the goat walks along one wall of the shed, 10 m of rope is used up at the next corner. How much rope is left to swing around that corner?",
    "Area = ¾ of a circle with radius 15, plus two quarter circles with radius 5 (one at each neighboring corner)."],
  solution: `<p>1️⃣ The shed blocks one quarter of the circle, so the goat sweeps <b>¾ of a circle with radius 15</b>: ¾ · π · 15² = 168.75π.</p>
    <p>2️⃣ Along each wall, the rope wraps around the next corner with 15 − 10 = <b>5 m left</b>. At each of the two neighboring corners, the goat sweeps a <b>quarter circle with radius 5</b>: 2 · ¼ · π · 5² = 12.5π. (The two small pieces do not overlap, and 5 m is not enough to reach the back corner.)</p>
    <p>3️⃣ Total = 168.75π + 12.5π = <b>181.25π ≈ 569 m²</b>.</p>`,
  deeper: "Make the rope 25 m long. Now the two wrapped pieces of rope meet behind the shed and their regions overlap. Describe how you would find the area now. What new shape do you need?" },

/* ---------------- 11th grade · Algebra 2 ---------------- */
{ id: "m11-bacteria", grade: 11, subject: "Math", course: "Algebra 2", unit: "Exponentials & Logarithms", std: "F.LE.4 · A.CED.1", spice: 3,
  title: "The Bacteria Race",
  teaser: "One culture doubles every 3 hours. The other starts smaller but triples every 4 hours. When does the slow starter catch up?",
  ask: "When will culture B (40, triples every 4 hours) catch culture A (100, doubles every 3 hours)?",
  prompt: `<p>Two bacteria cultures grow in a lab.</p>
    <ul><li><b>Culture A</b> starts with <b>100</b> cells and <b>doubles every 3 hours</b>.</li>
    <li><b>Culture B</b> starts with <b>40</b> cells and <b>triples every 4 hours</b>.</li></ul>
    <p><b>(a)</b> Write a function for each culture, where t is time in hours.</p>
    <p><b>(b)</b> Which culture has the faster <b>hourly</b> growth rate? Find each hourly growth factor.</p>
    <p><b>(c)</b> Use logarithms to find the time when the two cultures are equal. Round to the nearest tenth of an hour.</p>`,
  why: "The two cultures grow on different time cycles, so you cannot compare them directly. You need to rewrite both and solve with logarithms.",
  answer: { type: "num", value: 21.0, tol: 0.15, near: 1, prompt: "Part (c): time in hours", unit: "hours" },
  hints: ["A(t) = 100 · 2^(t/3). Write B(t) the same way.",
    "Hourly growth factor: 2^(1/3) ≈ 1.260 for A. Find 3^(1/4) for B.",
    "Set 100 · 2^(t/3) = 40 · 3^(t/4). Divide by 40, then take ln of both sides: ln 2.5 + (t/3)ln 2 = (t/4)ln 3. Solve for t."],
  solution: `<p><b>(a)</b> A(t) = 100 · 2<sup>t/3</sup> and B(t) = 40 · 3<sup>t/4</sup>.</p>
    <p><b>(b)</b> A: 2<sup>1/3</sup> ≈ 1.260 (about 26.0% per hour). B: 3<sup>1/4</sup> ≈ 1.316 (about 31.6% per hour). <b>B grows faster</b>, so it will eventually catch A.</p>
    <p><b>(c)</b> 100 · 2<sup>t/3</sup> = 40 · 3<sup>t/4</sup> → 2.5 = 3<sup>t/4</sup> / 2<sup>t/3</sup>.<br>
    Take ln: ln 2.5 = (t/4)ln 3 − (t/3)ln 2 = t(0.27465 − 0.23105) = 0.04360t.<br>
    t = 0.91629 / 0.04360 ≈ <b>21.0 hours</b>. (Check: both are about 12,840 cells.)</p>`,
  deeper: "A scientist says, “Culture B is better because it triples and A only doubles.” Explain why that reasoning is flawed, and invent two cultures where the one that triples actually grows SLOWER." },

{ id: "m11-complex", grade: 11, subject: "Math", course: "Algebra 2", unit: "Polynomials & Complex Numbers", std: "N.CN.7 · A.APR.3", spice: 2,
  title: "Build the Polynomial",
  teaser: "You know two zeros, and one of them is imaginary. Build the polynomial with the lowest possible degree.",
  ask: "How do I build the polynomial of least degree with zeros 2 and 1 + i?",
  prompt: `<p>A polynomial p(x) has <b>real (integer) coefficients</b>, a <b>leading coefficient of 1</b>, and the <b>lowest degree possible</b>. Two of its zeros are:</p>
    <blockquote style="font-size:1.15rem"><b>x = 2</b> and <b>x = 1 + i</b></blockquote>
    <p><b>(a)</b> What is the degree of p(x)? Explain why it can’t be 2.</p>
    <p><b>(b)</b> Write p(x) in standard form.</p>
    <p><b>(c)</b> Find p(3).</p>`,
  why: "The problem only gives you two zeros, but a polynomial with real coefficients must have a third one. You have to know the Conjugate Root Theorem and multiply complex factors.",
  answer: { type: "num", value: 5, tol: 0, prompt: "Part (c): what is p(3)?" },
  hints: ["If a polynomial with real coefficients has 1 + i as a zero, what other zero must it have?",
    "Multiply the conjugate factors first: (x − (1 + i))(x − (1 − i)). Group it as ((x − 1) − i)((x − 1) + i).",
    "That product is (x − 1)² − i² = x² − 2x + 2. Now multiply by (x − 2)."],
  solution: `<p><b>(a)</b> Complex zeros of a real polynomial come in <b>conjugate pairs</b>, so 1 − i is also a zero. That makes 3 zeros, so the degree is <b>3</b>. With only degree 2 and zeros 2 and 1 + i, some coefficients would be imaginary.</p>
    <p><b>(b)</b> (x − (1 + i))(x − (1 − i)) = (x − 1)² − i² = x² − 2x + 1 + 1 = x² − 2x + 2.<br>
    p(x) = (x − 2)(x² − 2x + 2) = x³ − 2x² + 2x − 2x² + 4x − 4 = <b>x³ − 4x² + 6x − 4</b>.</p>
    <p><b>(c)</b> p(3) = 27 − 36 + 18 − 4 = <b>5</b>. (Or: (3 − 2)(9 − 6 + 2) = 1 · 5 = 5 ✅)</p>`,
  deeper: "The graph of p(x) only crosses the x-axis once. Explain why, and describe what the imaginary zeros “do” to the shape of the graph." },

/* ---------------- 12th grade · Statistics / Precalculus ---------------- */
{ id: "m12-testpositive", grade: 12, subject: "Math", course: "Statistics", unit: "Conditional Probability", std: "S.CP.4 · S.CP.6", spice: 3,
  title: "You Tested Positive. Should You Panic?",
  teaser: "A test is 95% accurate for sick people, but a positive result might still mean you are probably healthy. Prove it.",
  ask: "If a disease affects 1% of people and the test is 95% sensitive and 90% specific, what is the chance a person who tests positive actually has it?",
  prompt: `<p>A rare disease affects <b>1%</b> of a population. A screening test has these facts:</p>
    <ul><li>If a person <b>has</b> the disease, the test is positive <b>95%</b> of the time.</li>
    <li>If a person does <b>not</b> have the disease, the test is negative <b>90%</b> of the time (so 10% get a false positive).</li></ul>
    <p><b>(a)</b> Imagine 10,000 people get tested. Fill in a two-way table: disease / no disease × positive / negative.</p>
    <p><b>(b)</b> A person tests <b>positive</b>. What is the probability that they actually <b>have</b> the disease? Give a percent to the nearest tenth.</p>
    <p><b>(c)</b> Explain to a scared friend why a “95% accurate” test can give such a surprising answer.</p>`,
  why: "Your brain wants to say 95%. The real answer depends on how rare the disease is. This is called the base rate fallacy, and even many doctors get it wrong.",
  answer: { type: "num", value: 8.8, tol: 0.15, near: 1, prompt: "Part (b): probability as a percent", unit: "%" },
  hints: ["Out of 10,000 people, how many have the disease? How many don’t?",
    "Sick and positive: 95% of 100 = 95. Healthy but positive: 10% of 9,900 = 990.",
    "P(disease | positive) = (sick and positive) ÷ (ALL positives) = 95 ÷ (95 + 990)."],
  solution: `<table><tr><th></th><th>Test +</th><th>Test −</th><th>Total</th></tr>
    <tr><td><b>Disease</b></td><td>95</td><td>5</td><td>100</td></tr>
    <tr><td><b>No disease</b></td><td>990</td><td>8,910</td><td>9,900</td></tr>
    <tr><td><b>Total</b></td><td>1,085</td><td>8,915</td><td>10,000</td></tr></table>
    <p><b>(b)</b> P(disease | positive) = 95 ÷ 1,085 ≈ <b>8.8%</b>.</p>
    <p><b>(c)</b> Because the disease is rare, there are 99 healthy people for every sick person. Even a small false-positive rate (10%) applied to that huge healthy group creates far more false positives (990) than true positives (95). So most positives are false alarms. That’s why doctors confirm a positive with a second, different test.</p>`,
  deeper: "The same person takes a second, independent test and is positive again. Use your answer from (b) as the new starting rate. What is the probability now? What does this tell you about why doctors retest?" },

{ id: "m12-ferris", grade: 12, subject: "Math", course: "Precalculus", unit: "Trigonometric Functions", std: "F.TF.5 · F.TF.7", spice: 3,
  title: "The Ferris Wheel Clock",
  teaser: "Model a Ferris wheel ride with a trig function, then use an inverse to find exactly when you reach 45 meters.",
  ask: "How do I model the height on a Ferris wheel with cosine and find when the rider first reaches 45 m?",
  prompt: `<p>A Ferris wheel has a <b>diameter of 50 m</b>. Its center is <b>30 m</b> above the ground, and it makes <b>one full turn every 4 minutes</b>. You get on at the <b>lowest point</b> at time t = 0.</p>
    <p><b>(a)</b> Write a function h(t) for your height in meters after t minutes.</p>
    <p><b>(b)</b> When do you <b>first</b> reach a height of <b>45 m</b>? Give your answer in minutes to the nearest hundredth.</p>
    <p><b>(c)</b> How many seconds of each turn are you higher than 45 m?</p>`,
  why: "You have to choose the right trig function and shift so the rider starts at the bottom, then use an inverse trig function and think about which solution is first.",
  answer: { type: "num", value: 1.41, tol: 0.015, near: 0.1, prompt: "Part (b): time in minutes", unit: "minutes" },
  hints: ["Amplitude = radius. Midline = height of the center. Period = 4 minutes, so B = 2π/4 = π/2.",
    "Starting at the bottom means the graph starts at its minimum. A negative cosine does that: h(t) = 30 − 25cos(πt/2).",
    "Set 30 − 25cos(πt/2) = 45, so cos(πt/2) = −0.6. Use arccos and remember to divide by π/2."],
  solution: `<p><b>(a)</b> Amplitude 25, midline 30, period 4 → <b>h(t) = 30 − 25cos(πt/2)</b>. (Check: h(0) = 5 m, the bottom. h(2) = 55 m, the top.)</p>
    <p><b>(b)</b> 30 − 25cos(πt/2) = 45 → cos(πt/2) = −0.6 → πt/2 = arccos(−0.6) ≈ 2.2143 → t ≈ 2.2143 × 2/π ≈ <b>1.41 minutes</b> (about 85 seconds).</p>
    <p><b>(c)</b> By symmetry, you come back down through 45 m at t = 4 − 1.41 = 2.59 minutes. Time above 45 m = 2.59 − 1.41 ≈ 1.18 minutes ≈ <b>71 seconds</b>.</p>`,
  deeper: "The operator wants every rider to spend exactly half of each ride above some height H. What is H, and why does the answer not depend on the speed of the wheel?" }
);


/* =====================================================================
   SET 2: more math challenges from different units
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · Algebra 1 (set 2) ---------------- */
{ id: "m9-garden", grade: 9, subject: "Math", course: "Algebra 1", unit: "Quadratic Equations", std: "A.CED.1 · A.REI.4b · A.SSE.3a", spice: 2,
  title: "The Garden and the Path",
  teaser: "A garden plus a path around it covers 70 m². Set up and solve a quadratic to find the garden’s size.",
  ask: "If a garden is 3 m longer than it is wide and a 1 m path around it makes the total area 70 m², what are the garden’s dimensions?",
  prompt: `<p>A rectangular garden is <b>3 m longer than it is wide</b>. A path that is <b>1 m wide</b> goes all the way around the outside of the garden. The garden <b>and</b> the path together cover <b>70 m²</b>.</p>
    <div class="fig"><svg viewBox="0 0 260 170" width="260" role="img" aria-label="A garden rectangle inside a larger rectangle with a 1 meter path"><rect x="10" y="10" width="240" height="150" fill="#e8dcc6" stroke="#8a6a43" stroke-width="2"/><rect x="40" y="40" width="180" height="90" fill="#bfe3b0" stroke="#2e7d32" stroke-width="2"/><text x="130" y="90" text-anchor="middle" font-weight="700">garden</text><text x="130" y="30" text-anchor="middle" font-size="12">1 m path</text><text x="130" y="148" text-anchor="middle" font-size="12">w + 3</text><text x="28" y="90" text-anchor="middle" font-size="12">w</text></svg></div>
    <p><b>(a)</b> Let w = the garden’s width. Write an equation for the <b>total</b> area.</p>
    <p><b>(b)</b> Solve it. Which solution makes sense, and why do you throw the other one out?</p>
    <p><b>(c)</b> What is the area of the <b>garden only</b>? How much area is <b>path</b>?</p>`,
  why: "The path adds 1 m on BOTH sides, so each dimension grows by 2, not 1. Then you have to factor a quadratic and decide which answer is realistic.",
  answer: { type: "num", value: 40, tol: 0, prompt: "Part (c): area of the garden only", unit: "m²" },
  hints: ["With the path, the width becomes w + 2 (1 m on the left and 1 m on the right). What does the length become?",
    "Total area: (w + 2)(w + 5) = 70. Multiply it out and set it equal to 0.",
    "w² + 7w − 60 = 0. Find two numbers that multiply to −60 and add to 7."],
  solution: `<p><b>(a)</b> Outer width = w + 2, outer length = (w + 3) + 2 = w + 5. So <b>(w + 2)(w + 5) = 70</b>.</p>
    <p><b>(b)</b> w² + 7w + 10 = 70 → w² + 7w − 60 = 0 → (w + 12)(w − 5) = 0 → w = −12 or <b>w = 5</b>. A width can’t be negative, so w = 5 m.</p>
    <p><b>(c)</b> Garden = 5 × 8 = <b>40 m²</b>. Path = 70 − 40 = <b>30 m²</b>. (Check: the outside is 7 × 10 = 70 ✅)</p>`,
  deeper: "The owner wants the path to cover exactly the same area as the garden. Keeping the garden 5 m × 8 m, how wide should the path be? (You’ll need the quadratic formula.)" },

{ id: "m9-fivenumbers", grade: 9, subject: "Math", course: "Algebra 1", unit: "Data & Statistics", std: "S.ID.2 · S.ID.3", spice: 3,
  title: "The Five Mystery Numbers",
  teaser: "You know the mean, median, mode, and range. Work backward to find all five numbers.",
  ask: "How can I find five numbers if I only know their mean is 10, median is 12, mode is 14, and range is 10?",
  prompt: `<p>A list has <b>five whole numbers</b>. You know:</p>
    <ul><li>The <b>mean</b> is 10.</li><li>The <b>median</b> is 12.</li><li>The <b>mode</b> is 14 (and there is only one mode).</li><li>The <b>range</b> is 10.</li></ul>
    <p><b>(a)</b> Find all five numbers. Explain how each clue helped.</p>
    <p><b>(b)</b> Is there more than one possible list? Prove it.</p>
    <p><b>(c)</b> Add a sixth number that changes the <b>mean</b> but does <b>not</b> change the median. Explain.</p>`,
  why: "You usually calculate statistics from data. Here you have to reverse the process, using each clue as a rule and ruling out possibilities.",
  answer: { type: "num", value: 4, tol: 0, prompt: "Part (a): what is the SMALLEST number?" },
  hints: ["Write the numbers in order: a, b, c, d, e. The median is the middle one, so c = 12.",
    "The mode is 14, and 14 is bigger than the median, so it must appear in the d and e spots. The mean of 10 tells you the sum is 50.",
    "So a + b + 12 + 14 + 14 = 50, so a + b = 10. The range is 10, so 14 − a = 10."],
  solution: `<p><b>(a)</b> In order: a, b, 12, d, e. The mode 14 must appear at least twice, and it is above the median, so <b>d = e = 14</b>. The sum is 5 × 10 = 50, so a + b = 50 − 12 − 28 = 10. The range: 14 − a = 10, so <b>a = 4</b> and <b>b = 6</b>. The list is <b>4, 6, 12, 14, 14</b>.</p>
    <p><b>(b)</b> Only one list works: a is forced to be 4 by the range, then b is forced to be 6 by the sum. (b = 6 is not 14 or 4, so the mode stays unique.)</p>
    <p><b>(c)</b> Example: add 12. The six numbers 4, 6, 12, 12, 14, 14 have median (12 + 12) ÷ 2 = 12 (unchanged), but the mean becomes 62 ÷ 6 ≈ 10.3. Any sixth number equal to 12 keeps the median at 12.</p>`,
  deeper: "Make your own “mystery numbers” puzzle with exactly ONE answer. What is the fewest number of clues you need? Trade with a partner and solve each other’s." },

/* ---------------- 10th grade · Geometry (set 2) ---------------- */
{ id: "m10-rhombus", grade: 10, subject: "Math", course: "Geometry", unit: "Coordinate Geometry", std: "G.GPE.4 · G.GPE.5 · G.GPE.7", spice: 2,
  title: "Rhombus or Square? Prove It.",
  teaser: "Four points on a grid make a shape with four equal sides. Is it a square? Use slopes and distances to prove it.",
  ask: "How do I prove that the quadrilateral with vertices A(1, 2), B(4, 6), C(9, 6), D(6, 2) is a rhombus but not a square?",
  prompt: `<p>Quadrilateral ABCD has vertices <b>A(1, 2)</b>, <b>B(4, 6)</b>, <b>C(9, 6)</b>, and <b>D(6, 2)</b>.</p>
    <p><b>(a)</b> Prove ABCD is a <b>rhombus</b>.</p>
    <p><b>(b)</b> Prove ABCD is <b>not</b> a square.</p>
    <p><b>(c)</b> Prove the diagonals are <b>perpendicular</b>, then use the diagonals to find the <b>area</b>. Check your area a second way.</p>`,
  why: "A rhombus and a square look similar on a sketch. A proof needs exact calculations, and you have to pick the right tool (distance or slope) for each claim.",
  answer: { type: "num", value: 20, tol: 0, prompt: "Part (c): area of ABCD", unit: "square units" },
  hints: ["Use the distance formula for all four sides. A rhombus has four equal sides.",
    "A square also needs right angles. Compare the slopes of AB and BC. Are they negative reciprocals?",
    "Diagonals: AC and BD. Area of a rhombus = (d₁ × d₂) ÷ 2. For a check, use base × height with side AD."],
  solution: `<p><b>(a)</b> AB = √(3² + 4²) = 5, BC = √(5² + 0²) = 5, CD = √(3² + 4²) = 5, DA = √(5² + 0²) = 5. Four equal sides → <b>rhombus</b>.</p>
    <p><b>(b)</b> Slope AB = 4/3, slope BC = 0. These are not negative reciprocals, so angle B is not 90°. <b>Not a square</b>.</p>
    <p><b>(c)</b> Slope AC = (6 − 2)/(9 − 1) = 1/2. Slope BD = (2 − 6)/(6 − 4) = −2. (1/2)(−2) = −1, so the diagonals are <b>perpendicular</b>. AC = √80, BD = √20, area = (√80 · √20) ÷ 2 = √1600 ÷ 2 = 40 ÷ 2 = <b>20</b>.<br>
    Check: base AD = 5 (horizontal), height = 6 − 2 = 4, area = 5 × 4 = 20 ✅</p>`,
  deeper: "Move just ONE vertex so the shape becomes a square. Is there more than one way? Prove your new shape is a square." },

{ id: "m10-marbles", grade: 10, subject: "Math", course: "Geometry", unit: "Volume & Modeling", std: "G.GMD.3 · G.MG.1", spice: 2,
  title: "Marbles in the Glass",
  teaser: "Drop marbles into a glass of water. How much does the water rise, and how many marbles until it overflows?",
  ask: "How much does the water rise when three marbles with radius 2 cm are dropped into a cylinder with radius 4 cm?",
  prompt: `<p>A cylindrical glass has a <b>radius of 4 cm</b> and a <b>height of 15 cm</b>. It holds water <b>10 cm deep</b>. You drop in solid glass marbles, each a sphere with a <b>radius of 2 cm</b>. The marbles sink completely.</p>
    <p><b>(a)</b> How many cm does the water rise after you drop in <b>3 marbles</b>?</p>
    <p><b>(b)</b> What is the <b>fewest</b> marbles that will make the water overflow?</p>
    <p><b>(c)</b> Explain why your answer to (a) doesn’t depend on how deep the water was to start (as long as the marbles are covered).</p>`,
  why: "You have to connect two different volume formulas (sphere and cylinder) using the idea of displacement, then think about rounding in a real situation.",
  answer: { type: "num", value: 2, tol: 0.01, prompt: "Part (a): rise in water level", unit: "cm" },
  hints: ["Each marble pushes aside (displaces) water equal to its own volume. V(sphere) = (4/3)πr³.",
    "The displaced water forms a short “cylinder” of extra water: V = π(4²)(rise).",
    "Set 3 × (4/3)π(2³) = π(16)(rise). Everything has π, so it cancels."],
  solution: `<p><b>(a)</b> One marble: (4/3)π(8) = 32π/3 cm³. Three marbles: 32π cm³. Rise = 32π ÷ (π · 4²) = 32π ÷ 16π = <b>2 cm</b>.</p>
    <p><b>(b)</b> To overflow, the water must rise more than 5 cm, which takes more than 16π · 5 = 80π cm³. Each marble adds 32π/3, so 80π ÷ (32π/3) = 7.5 marbles. You can’t drop half a marble, so <b>8 marbles</b> overflow it (7 marbles raise it about 4.67 cm, not enough).</p>
    <p><b>(c)</b> The rise only depends on the volume added and the area of the glass’s circular base. The starting depth doesn’t appear in the calculation.</p>`,
  deeper: "Archimedes is said to have used displacement to test whether a crown was pure gold. Explain how displacement plus a scale could reveal a fake crown." },

/* ---------------- 11th grade · Algebra 2 (set 2) ---------------- */
{ id: "m11-avgcost", grade: 11, subject: "Math", course: "Algebra 2", unit: "Rational Functions", std: "A.REI.2 · F.IF.7d · A.CED.1", spice: 2,
  title: "The Hoodie Business",
  teaser: "Average cost per hoodie drops as you make more. Find when it hits $4.50 and why it can never reach $2.",
  ask: "If the average cost per hoodie is (5000 + 2x)/x, how many must be made to bring the average cost down to $4.50?",
  prompt: `<p>A student club starts a hoodie printing business. A heat press costs <b>$5,000</b> (one time). Each hoodie printed costs <b>$2</b> in materials.</p>
    <p><b>(a)</b> Write a function A(x) for the <b>average cost per hoodie</b> when x hoodies are printed.</p>
    <p><b>(b)</b> How many hoodies must they print to bring the average cost down to <b>$4.50</b>?</p>
    <p><b>(c)</b> Find the horizontal asymptote of A(x). Explain what it means for the business, and why the average cost can never actually reach it.</p>`,
  why: "You have to build a rational function from a story, solve a rational equation, and explain what an asymptote means in the real world.",
  answer: { type: "num", value: 2000, tol: 0, prompt: "Part (b): number of hoodies", unit: "hoodies" },
  hints: ["Total cost = 5000 + 2x. Average cost = total cost ÷ number made.",
    "Set (5000 + 2x)/x = 4.5 and multiply both sides by x.",
    "For the asymptote, think about what happens to 5000/x when x is huge. A(x) = 5000/x + 2."],
  solution: `<p><b>(a)</b> <b>A(x) = (5000 + 2x) / x</b>, which can also be written A(x) = 5000/x + 2.</p>
    <p><b>(b)</b> (5000 + 2x)/x = 4.5 → 5000 + 2x = 4.5x → 5000 = 2.5x → <b>x = 2,000 hoodies</b>.</p>
    <p><b>(c)</b> As x gets very large, 5000/x gets close to 0, so A(x) approaches <b>y = 2</b>. The $5,000 machine cost gets spread over more and more hoodies, but each hoodie still costs $2 in materials, and 5000/x is never exactly 0. So the average cost gets closer and closer to $2 but never reaches it.</p>`,
  deeper: "The club sells hoodies for $25 each. Write a function for profit and find the break-even point. Then argue: should they buy a $12,000 press that lowers materials to $1.50 per hoodie?" },

{ id: "m11-bounce", grade: 11, subject: "Math", course: "Algebra 2", unit: "Sequences & Series", std: "A.SSE.4 · F.BF.2", spice: 3,
  title: "The Ball That Never Stops (or Does It?)",
  teaser: "A ball bounces forever, getting smaller each time. Can an infinite number of bounces add up to a finite distance?",
  ask: "If a ball dropped from 10 m bounces back to 60% of its height each time, what total distance does it travel?",
  prompt: `<p>A ball is dropped from a height of <b>10 m</b>. Each time it hits the ground, it bounces back up to <b>60%</b> of the height it just fell.</p>
    <p><b>(a)</b> List the heights of the first four bounces.</p>
    <p><b>(b)</b> In theory the ball bounces forever. Find the <b>total vertical distance</b> it travels (down and up) using an infinite geometric series.</p>
    <p><b>(c)</b> Explain how an infinite number of bounces can add up to a finite number.</p>`,
  why: "Most people forget that each bounce is traveled twice (up AND down) except the first drop. Then you need the infinite series formula and a convincing explanation of convergence.",
  answer: { type: "num", value: 40, tol: 0.01, prompt: "Part (b): total distance", unit: "meters" },
  hints: ["Bounce heights: 6, 3.6, 2.16, … Each is 0.6 times the one before.",
    "The ball falls 10 m once. Every bounce height is traveled twice (up and back down).",
    "Total = 10 + 2(6 + 3.6 + 2.16 + …). The sum of an infinite geometric series is a ÷ (1 − r)."],
  solution: `<p><b>(a)</b> 6 m, 3.6 m, 2.16 m, 1.296 m.</p>
    <p><b>(b)</b> Bounce heights form a geometric series with a = 6 and r = 0.6: sum = 6 ÷ (1 − 0.6) = 15 m. Each bounce is traveled twice: 2 × 15 = 30 m. Add the first 10 m drop: total = <b>40 m</b>.</p>
    <p><b>(c)</b> Each term is a fixed fraction (60%) of the one before, so the terms shrink fast. The partial sums get closer and closer to 40 but never pass it. When |r| &lt; 1, an infinite geometric series converges to a finite sum.</p>`,
  deeper: "A different ball travels a total of 50 m when dropped from 10 m. What percent of its height does it bounce back? Is there a bounce percent that gives an INFINITE total distance?" },

/* ---------------- 12th grade · Statistics / Precalculus (set 2) ---------------- */
{ id: "m12-poll", grade: 12, subject: "Math", course: "Statistics", unit: "Inference & Sampling", std: "S.IC.1 · S.IC.4 · S.IC.6", spice: 3,
  title: "Is the Candidate Really Winning?",
  teaser: "A poll says 52% support. A news anchor says “She’s winning!” Use the margin of error to decide if that’s fair.",
  ask: "If a poll of 1,000 voters shows 52% support, is it fair to say the candidate is winning?",
  prompt: `<p>A random poll of <b>1,000 likely voters</b> finds that <b>52%</b> support Candidate Reyes and 48% support her opponent. A news anchor announces, “Reyes is winning!”</p>
    <p><b>(a)</b> Find the <b>95% margin of error</b> using ME = 1.96 · √( p̂(1 − p̂) / n ). Give a percent to the nearest tenth.</p>
    <p><b>(b)</b> Write the 95% confidence interval. Does the data prove Reyes is ahead?</p>
    <p><b>(c)</b> About how many voters would need to be polled to cut the margin of error in <b>half</b>? Explain why.</p>`,
  why: "52% sounds like a lead. You have to understand that a sample has random variation, calculate how big it is, and decide what can honestly be claimed.",
  answer: { type: "num", value: 3.1, tol: 0.12, near: 0.5, prompt: "Part (a): margin of error as a percent", unit: "%" },
  hints: ["p̂ = 0.52, n = 1000. Compute 0.52 × 0.48 ÷ 1000 first.",
    "√(0.0002496) ≈ 0.0158. Multiply by 1.96.",
    "For (c): n is under a square root. To make √(1/n) half as big, n must be multiplied by what?"],
  solution: `<p><b>(a)</b> ME = 1.96 · √(0.52 · 0.48 / 1000) = 1.96 · 0.0158 ≈ 0.031 = <b>3.1%</b>.</p>
    <p><b>(b)</b> Interval: 52% ± 3.1% → <b>48.9% to 55.1%</b>. Because the interval includes values below 50%, the poll does <b>not</b> prove Reyes is ahead. A fair statement: “Reyes appears to have a slight edge, but the race is within the margin of error.”</p>
    <p><b>(c)</b> ME depends on 1/√n. To cut it in half, √n must double, so n must be multiplied by <b>4</b>: about <b>4,000 voters</b>.</p>`,
  deeper: "A margin of error only covers random sampling error. Name two other ways a poll could be wrong (bias) that a bigger sample would NOT fix." },

{ id: "m12-vectors", grade: 12, subject: "Math", course: "Precalculus", unit: "Vectors", std: "N.VM.1 · N.VM.3 · N.VM.4", spice: 3,
  title: "Flying Into the Wind",
  teaser: "A pilot wants to fly due north, but a strong wind blows east. Which way should the plane point, and how fast will it go?",
  ask: "If a plane flies at 200 km/h and the wind blows east at 50 km/h, what heading does the pilot need to travel due north?",
  prompt: `<p>A small plane flies at <b>200 km/h</b> relative to the air. A steady wind blows <b>due east at 50 km/h</b>. The pilot needs to travel <b>due north</b> to an airport.</p>
    <p><b>(a)</b> Draw a vector diagram. Which direction should the pilot point the plane?</p>
    <p><b>(b)</b> Find the angle (in degrees, to the nearest tenth) <b>west of north</b> the plane must head.</p>
    <p><b>(c)</b> Find the plane’s actual speed over the ground. The airport is 300 km away. How much longer does the trip take than with no wind?</p>`,
  why: "You have to set up the vectors so the RESULT points north, which is the reverse of most vector problems where you just add two given vectors.",
  answer: { type: "num", value: 14.5, tol: 0.06, near: 1, prompt: "Part (b): angle west of north", unit: "degrees" },
  hints: ["The plane’s velocity + the wind’s velocity = the ground velocity, and the ground velocity must point straight north.",
    "The plane must aim partly west so its westward part cancels the 50 km/h east wind. The 200 km/h airspeed is the hypotenuse of a right triangle.",
    "sin θ = 50 / 200. The ground speed is the other leg: √(200² − 50²)."],
  solution: `<p><b>(a)</b> The pilot must point the plane <b>slightly west of north</b>, so the west part of the plane’s velocity cancels the east wind.</p>
    <p><b>(b)</b> The airspeed (200) is the hypotenuse; the west part must equal 50. sin θ = 50/200 = 0.25 → θ ≈ <b>14.5° west of north</b>.</p>
    <p><b>(c)</b> Ground speed = √(200² − 50²) = √37,500 ≈ <b>193.6 km/h</b>. Time = 300 ÷ 193.6 ≈ 1.55 h vs. 300 ÷ 200 = 1.50 h. It takes about <b>0.05 h ≈ 3 minutes longer</b>.</p>`,
  deeper: "What happens if the wind speed is greater than the plane’s airspeed? Can the plane ever fly due north? Explain using the triangle." }
);
