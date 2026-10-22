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
{ id: "m9-nosolution", grade: 9, subject: "Math", course: "Algebra 1", std: "A.REI.6 · A.CED.3", spice: 2,
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

{ id: "m9-doubling", grade: 9, subject: "Math", course: "Algebra 1", std: "F.LE.1 · F.LE.3", spice: 2,
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
{ id: "m10-altitude", grade: 10, subject: "Math", course: "Geometry", std: "G.SRT.4 · G.SRT.5", spice: 2,
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

{ id: "m10-goat", grade: 10, subject: "Math", course: "Geometry", std: "G.C.5 · G.MG.1", spice: 3,
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
{ id: "m11-bacteria", grade: 11, subject: "Math", course: "Algebra 2", std: "F.LE.4 · A.CED.1", spice: 3,
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

{ id: "m11-complex", grade: 11, subject: "Math", course: "Algebra 2", std: "N.CN.7 · A.APR.3", spice: 2,
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
{ id: "m12-testpositive", grade: 12, subject: "Math", course: "Statistics", std: "S.CP.4 · S.CP.6", spice: 3,
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

{ id: "m12-ferris", grade: 12, subject: "Math", course: "Precalculus", std: "F.TF.5 · F.TF.7", spice: 3,
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
