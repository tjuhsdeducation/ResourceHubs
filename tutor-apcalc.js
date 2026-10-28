/* =====================================================================
   ✏️ TUTOR GUIDE: AP CALCULUS AB (shown on tutor-math.html, tutors only)
   Follows the 8 units of the College Board AP Calculus AB course.
   Same format as the other tutor files (see the top of tutor-alg1.js).
   Visuals marked "CAV_..." are drawn at the bottom of this file.
   ===================================================================== */
(window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(

/* ---------------- UNIT 1 ---------------- */
{ id: "ca-01", course: "AP Calculus AB", unit: 1, title: "Limits & Continuity", standards: "AP Calculus AB Unit 1",
  bigIdea: "A limit asks, “What value is f(x) heading toward as x gets close to a number?”, even if the function isn’t defined there. Limits are the foundation of all of calculus: derivatives and integrals are both defined with limits. A function is continuous at a point if there’s no break: the limit exists and equals the function’s value.",
  tips: "Teach the order to try things: <b>1) plug in, 2) if you get 0/0, factor/simplify (or rationalize), 3) plug in again</b>. 0/0 is not an answer. It’s a signal that there’s more work to do. For limits at infinity, compare the highest powers on top and bottom. Many AP questions give a graph or table instead of a formula, so practice reading limits from those too.",
  vocab: [
    ["limit", "lim<sub>x→a</sub> f(x) = L means f(x) gets as close as we want to L when x is close to a (from both sides)."],
    ["one-sided limits", "From the left (x → a⁻) and from the right (x → a⁺). The limit exists only if both sides agree."],
    ["indeterminate form 0/0", "Plugging in gives 0/0. Not an answer: simplify first."],
    ["continuity (3 conditions)", "f is continuous at x = a if (1) f(a) is defined, (2) lim<sub>x→a</sub> f(x) exists, and (3) they are equal."],
    ["removable discontinuity", "A hole: the limit exists but doesn’t match f(a) (or f(a) is undefined)."],
    ["jump / infinite discontinuity", "Jump: left and right limits are different. Infinite: a vertical asymptote."],
    ["limits at infinity", "End behavior. Compare degrees: top bigger → ±∞; same → ratio of leading coefficients; bottom bigger → 0."],
    ["Intermediate Value Theorem (IVT)", "If f is continuous on [a, b], then f takes on every value between f(a) and f(b)."],
    ["Squeeze Theorem", "If g(x) ≤ f(x) ≤ h(x) and g and h have the same limit L, then f does too."]
  ],
  steps: [
    { name: "Evaluating a limit", list: ["Plug in the number. A real number? That’s the answer (if the function is continuous there).", "Got 0/0? Factor and cancel, rationalize (multiply by the conjugate), or use a known limit like lim<sub>x→0</sub> sin x / x = 1.", "Got (nonzero)/0? Check one-sided limits: it’s going to ±∞ (vertical asymptote).", "For a piecewise function at the break point, find both one-sided limits."] },
    { name: "Showing continuity (AP free response)", list: ["Write f(a) = ___.", "Write lim from the left and from the right, and show they are equal.", "State that the limit equals f(a), so f is continuous at x = a."] }
  ],
  examples: [
    { q: "Find lim<sub>x→3</sub> (x² − 9)/(x − 3).", steps: ["Plug in 3: (9 − 9)/(3 − 3) = 0/0. Indeterminate, so keep going.", "Factor: (x − 3)(x + 3)/(x − 3).", "Cancel: x + 3 (for x ≠ 3).", "Plug in 3: 3 + 3 = 6."], answer: "6 (the graph has a hole at (3, 6))" },
    { q: "Find lim<sub>x→∞</sub> (3x² + 1)/(5x² − x).", steps: ["Highest power on top and bottom: x² and x². Same degree.", "Limit = ratio of leading coefficients: 3/5."], answer: "3/5" },
    { q: "f(x) = x + k for x &lt; 2 and f(x) = x² for x ≥ 2. What value of k makes f continuous?", steps: ["Left limit at 2: 2 + k. Right limit and f(2): 2² = 4.", "For continuity they must match: 2 + k = 4.", "k = 2."], answer: "k = 2" },
    { q: "Find lim<sub>x→0</sub> sin(5x)/x.", steps: ["Plugging in gives 0/0.", "Rewrite to match sin(u)/u: sin(5x)/x = 5 · sin(5x)/(5x).", "As x → 0, sin(5x)/(5x) → 1.", "5 · 1 = 5."], answer: "5" },
    { q: "f is continuous on [1, 4], f(1) = −2, and f(4) = 3. Must f(c) = 0 for some c in (1, 4)? Justify.", steps: ["f is continuous on the closed interval (required for IVT).", "0 is between f(1) = −2 and f(4) = 3.", "By the Intermediate Value Theorem, there is a c in (1, 4) with f(c) = 0."], answer: "Yes, by the IVT" }
  ],
  mistakes: [
    ["Writes 0/0 as the answer or says “undefined.”", "“0/0 means we don’t know yet. What can we factor?”"],
    ["Says a limit doesn’t exist because f(a) is undefined.", "“The limit is about what happens NEAR a, not AT a. Where is the graph heading?”"],
    ["Uses IVT without stating continuity.", "“AP graders look for the word ‘continuous.’ What condition does IVT need?”"],
    ["Only checks one side at a piecewise break.", "“What does the function do coming from the other side?”"],
    ["Uses degree rule when x → a number.", "“The degree shortcut is only for x → ∞. For a number, try plugging in first.”"]
  ],
  ask: ["What do you get when you plug in?", "Is it 0/0, a number, or something over 0?", "What do the left and right sides do?", "Is x going to a number or to infinity?", "For continuity: what are the three things you need to check?"],
  check: [
    { q: "lim<sub>x→2</sub> (x² − 4)/(x − 2)?", a: "4" },
    { q: "lim<sub>x→∞</sub> (2x + 1)/(x² + 5)?", a: "0 (bottom degree is bigger)" },
    { q: "Left limit 3, right limit 5 at x = 1. Does the limit exist?", a: "No (jump discontinuity)" }
  ],
  visual: "CAV_HOLE" },

/* ---------------- UNIT 2 ---------------- */
{ id: "ca-02", course: "AP Calculus AB", unit: 2, title: "Differentiation: Definition & Basic Derivative Rules", standards: "AP Calculus AB Unit 2",
  bigIdea: "The derivative f′(x) is the instantaneous rate of change: the slope of the tangent line at a point. It is defined as the limit of the slope of secant lines as the two points get closer together. After the definition, students learn shortcut rules (power, product, quotient, and the derivatives of sin, cos, eˣ, and ln x) so they don’t have to use limits every time.",
  tips: "Keep a <b>derivative rules card</b> next to the student. Before differentiating, have them say which rule they’re using (“this is a product, so product rule”). Rewrite roots and fractions as powers first: √x = x<sup>1/2</sup>, 7/x = 7x<sup>−1</sup>. For tangent lines, they need two things: a point (plug into f) and a slope (plug into f′).",
  vocab: [
    ["derivative", "f′(x) = lim<sub>h→0</sub> [f(x + h) − f(x)]/h. The slope of the tangent line; the instantaneous rate of change."],
    ["average rate of change", "[f(b) − f(a)]/(b − a): the slope of the secant line between two points."],
    ["tangent line", "y − f(a) = f′(a)(x − a)."],
    ["differentiable", "The derivative exists. Not differentiable at corners, cusps, vertical tangents, or discontinuities."],
    ["power rule", "d/dx[xⁿ] = nxⁿ⁻¹."],
    ["product rule", "(fg)′ = f′g + fg′."],
    ["quotient rule", "(f/g)′ = (f′g − fg′)/g². “Low d-high minus high d-low, over low squared.”"],
    ["basic derivatives", "(sin x)′ = cos x, (cos x)′ = −sin x, (eˣ)′ = eˣ, (ln x)′ = 1/x."]
  ],
  steps: [
    { name: "Taking a derivative", list: ["Rewrite: roots → fractional exponents, 1/xⁿ → x⁻ⁿ.", "Decide the structure: sum (take each term separately), product, or quotient.", "Apply the rule(s).", "Simplify. Rewrite negative exponents if your teacher wants."] },
    { name: "Writing a tangent line", list: ["Find the point: (a, f(a)).", "Find the slope: f′(a).", "Point-slope form: y − f(a) = f′(a)(x − a)."] }
  ],
  examples: [
    { q: "Use the limit definition to find f′(x) for f(x) = x².", steps: ["f(x + h) = (x + h)² = x² + 2xh + h².", "[f(x + h) − f(x)]/h = (2xh + h²)/h = 2x + h.", "Take the limit as h → 0: 2x."], answer: "f′(x) = 2x" },
    { q: "Differentiate f(x) = 4x³ − 5x + 7/x.", steps: ["Rewrite 7/x as 7x⁻¹.", "Power rule each term: 12x² − 5 − 7x⁻².", "Rewrite: 12x² − 5 − 7/x²."], answer: "f′(x) = 12x² − 5 − 7/x²" },
    { q: "Differentiate y = x² sin x.", steps: ["Product: f = x², g = sin x.", "f′ = 2x, g′ = cos x.", "y′ = f′g + fg′ = 2x sin x + x² cos x."], answer: "2x sin x + x² cos x" },
    { q: "Differentiate y = (x + 1)/(x − 1).", steps: ["Quotient: top = x + 1 (derivative 1), bottom = x − 1 (derivative 1).", "y′ = [(1)(x − 1) − (x + 1)(1)]/(x − 1)².", "Top: x − 1 − x − 1 = −2."], answer: "y′ = −2/(x − 1)²" },
    { q: "Find the tangent line to y = x³ at x = 2.", steps: ["Point: y = 2³ = 8, so (2, 8).", "Slope: y′ = 3x², so y′(2) = 12.", "y − 8 = 12(x − 2)."], answer: "y − 8 = 12(x − 2), or y = 12x − 16" }
  ],
  mistakes: [
    ["Differentiates a product by multiplying the derivatives: (x² sin x)′ = 2x cos x.", "“Is the derivative of a product the product of derivatives? Check with x · x = x².”"],
    ["Gets the quotient rule backwards.", "“Say it: low d-high minus high d-low. Which goes first?”"],
    ["Plugs a into f′ for the y-value of the tangent point.", "“The point comes from f, the slope comes from f′.”"],
    ["Says (cos x)′ = sin x.", "“Check your rule card. What sign does it have?”"],
    ["Says d/dx(7/x) = 7.", "“Rewrite it as 7x⁻¹ first. Then use the power rule.”"]
  ],
  ask: ["Is this a sum, a product, or a quotient?", "Can you rewrite any terms with exponents first?", "For the tangent line, what is the point and what is the slope?", "What does f′(a) mean in words?", "Where would this function not be differentiable?"],
  check: [
    { q: "d/dx[√x]?", a: "½x<sup>−1/2</sup> = 1/(2√x)" },
    { q: "d/dx[eˣ cos x]?", a: "eˣ cos x − eˣ sin x" },
    { q: "Is |x| differentiable at 0?", a: "No (sharp corner)" }
  ],
  visual: "CAV_TAN" },

/* ---------------- UNIT 3 ---------------- */
{ id: "ca-03", course: "AP Calculus AB", unit: 3, title: "Chain Rule, Implicit Differentiation & Inverse Functions", standards: "AP Calculus AB Unit 3",
  bigIdea: "Most real functions are compositions, a function inside another function, like sin(4x³) or (3x² + 1)⁵. The chain rule handles these: take the derivative of the outside (leaving the inside alone), then multiply by the derivative of the inside. Implicit differentiation uses the chain rule on equations where y isn’t solved for, and it’s also how we get derivatives of inverse functions.",
  tips: "Teach “<b>outside, inside</b>”: cover the inside with your thumb, differentiate the outside, uncover, then multiply by the derivative of what was under your thumb. For implicit differentiation, every time they differentiate a y-term they must tack on <b>dy/dx</b>. Have them highlight each dy/dx before solving for it.",
  vocab: [
    ["composite function", "f(g(x)): g is the inside function and f is the outside."],
    ["chain rule", "d/dx[f(g(x))] = f′(g(x)) · g′(x)."],
    ["implicit differentiation", "Differentiate both sides with respect to x; every y-term gets a dy/dx (chain rule)."],
    ["inverse function derivative", "(f⁻¹)′(a) = 1 / f′(f⁻¹(a)). If f(b) = a, then (f⁻¹)′(a) = 1/f′(b)."],
    ["inverse trig derivatives", "(arcsin x)′ = 1/√(1 − x²), (arctan x)′ = 1/(1 + x²)."],
    ["higher derivatives", "f″ is the derivative of f′. With implicit differentiation, the second derivative usually needs substitution of dy/dx."]
  ],
  steps: [
    { name: "Chain rule", list: ["Identify the outside and inside functions.", "Differentiate the outside, keeping the inside the same.", "Multiply by the derivative of the inside.", "If there are more layers, keep going (outside → middle → inside)."] },
    { name: "Implicit differentiation", list: ["Take d/dx of every term on both sides.", "x-terms: normal. y-terms: differentiate, then multiply by dy/dx. xy terms: product rule.", "Move all dy/dx terms to one side; everything else to the other.", "Factor out dy/dx and divide."] },
    { name: "Derivative of an inverse at a point", list: ["We want (f⁻¹)′(a). Find b where f(b) = a (solve or use a table).", "Find f′(b).", "Answer: 1/f′(b)."] }
  ],
  examples: [
    { q: "Differentiate y = (3x² + 1)⁵.", steps: ["Outside: u⁵. Inside: 3x² + 1.", "Outside derivative: 5(3x² + 1)⁴.", "Inside derivative: 6x.", "Multiply: 5(3x² + 1)⁴ · 6x."], answer: "30x(3x² + 1)⁴" },
    { q: "Differentiate y = sin(4x³).", steps: ["Outside: sin(u) → cos(u). Inside: 4x³ → 12x².", "y′ = cos(4x³) · 12x²."], answer: "12x² cos(4x³)" },
    { q: "Differentiate y = e<sup>2x</sup> and y = ln(x² + 1).", steps: ["e<sup>2x</sup>: outside eᵘ stays eᵘ; inside 2x → 2. So 2e<sup>2x</sup>.", "ln(x² + 1): outside ln u → 1/u; inside x² + 1 → 2x. So 2x/(x² + 1)."], answer: "2e<sup>2x</sup> and 2x/(x² + 1)" },
    { q: "Find dy/dx for x² + y² = 25. Then find the slope at (3, 4).", steps: ["d/dx both sides: 2x + 2y(dy/dx) = 0.", "Solve: 2y(dy/dx) = −2x → dy/dx = −x/y.", "At (3, 4): −3/4."], answer: "dy/dx = −x/y; slope −3/4" },
    { q: "f(x) = x³ + x. Find (f⁻¹)′(2).", steps: ["Find b with f(b) = 2: b³ + b = 2 → b = 1.", "f′(x) = 3x² + 1, so f′(1) = 4.", "(f⁻¹)′(2) = 1/f′(1) = 1/4."], answer: "1/4" }
  ],
  mistakes: [
    ["Forgets to multiply by the inside derivative.", "“After the outside, what’s left? What’s the derivative of the inside?”"],
    ["Changes the inside: (sin 4x³)′ = cos(12x²).", "“Leave the inside alone while you do the outside. The inside derivative goes in front.”"],
    ["Forgets dy/dx on y-terms.", "“y depends on x. When you differentiate y², what does the chain rule add?”"],
    ["For xy, writes 1 · dy/dx only.", "“xy is a product. Which rule do we need?”"],
    ["For inverses, uses f′(a) instead of f′(b).", "“Inverses swap x and y. Where do we plug in?”"]
  ],
  ask: ["What is the inside function? The outside?", "Did you multiply by the derivative of the inside?", "Is y a function of x here? What does that add?", "Is there a product hiding in this term?", "For the inverse: which x-value gives f(x) = a?"],
  check: [
    { q: "d/dx[cos(x²)]?", a: "−2x sin(x²)" },
    { q: "d/dx[(2x − 1)³]?", a: "6(2x − 1)²" },
    { q: "dy/dx for y³ = x?", a: "3y²(dy/dx) = 1 → dy/dx = 1/(3y²)" }
  ],
  visual: "CAV_CIRC" },

/* ---------------- UNIT 4 ---------------- */
{ id: "ca-04", course: "AP Calculus AB", unit: 4, title: "Contextual Applications: Motion, Related Rates, Linearization & L’Hôpital", standards: "AP Calculus AB Unit 4",
  bigIdea: "Derivatives are rates of change in the real world. For motion, position → velocity → acceleration (each is the derivative of the one before). Related rates connect how fast different quantities change at the same moment. Linearization uses the tangent line to estimate values. L’Hôpital’s Rule uses derivatives to evaluate 0/0 or ∞/∞ limits.",
  tips: "AP free responses almost always ask students to <b>interpret in context with units</b>: “At t = 3 minutes, the water level is rising at 2 cm per minute.” Practice saying the sentence out loud. For related rates, the most important rule: <b>differentiate first, plug in numbers second</b>. Plugging in too early turns variables into constants.",
  vocab: [
    ["position, velocity, acceleration", "v(t) = s′(t), a(t) = v′(t) = s″(t)."],
    ["speed", "|v(t)|. Speed is increasing when v and a have the SAME sign, decreasing when they have opposite signs."],
    ["at rest / changes direction", "At rest: v = 0. Changes direction: v changes sign."],
    ["related rates", "Equations relating quantities that all change with time; differentiate with respect to t."],
    ["local linearization", "L(x) = f(a) + f′(a)(x − a). Approximates f near a."],
    ["over/underestimate", "If f is concave up, the tangent line is below the curve (underestimate); concave down → overestimate."],
    ["L’Hôpital’s Rule", "If a limit is 0/0 or ∞/∞, then lim f/g = lim f′/g′ (differentiate top and bottom separately)."]
  ],
  steps: [
    { name: "Related rates", list: ["Draw a picture. Label quantities that change with variables (not numbers).", "Write what you know (like dr/dt = 2) and what you want (like dV/dt) at a specific moment.", "Write an equation relating the variables (area, volume, Pythagorean theorem…).", "Differentiate both sides with respect to t (chain rule: every variable gets d/dt).", "NOW plug in the values at that moment and solve.", "Answer with units and a sentence."] },
    { name: "Particle motion", list: ["v = s′ and a = v′.", "Set v = 0 to find when it’s at rest. Check sign changes for direction changes.", "Make a sign chart for v and a to decide when speed is increasing.", "Interpret with units."] }
  ],
  examples: [
    { q: "s(t) = t³ − 6t² + 9t (meters, t ≥ 0). When is the particle at rest? When is it speeding up on 0 &lt; t &lt; 4?", steps: ["v(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3). At rest at t = 1 and t = 3.", "a(t) = 6t − 12, which is 0 at t = 2.", "Signs: (0,1) v+, a−; (1,2) v−, a−; (2,3) v−, a+; (3,4) v+, a+.", "Same sign → speeding up: (1, 2) and (3, 4)."], answer: "At rest t = 1, 3. Speeding up on (1, 2) and (3, 4)." },
    { q: "A spherical balloon’s radius increases at 2 cm/s. How fast is the volume increasing when r = 5 cm?", steps: ["V = (4/3)πr³.", "Differentiate with respect to t: dV/dt = 4πr² (dr/dt).", "Plug in: 4π(5)²(2) = 200π.", "≈ 628 cm³/s."], answer: "200π ≈ 628 cm³/s" },
    { q: "A 10 ft ladder slides down a wall. The bottom moves away at 1 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?", steps: ["x² + y² = 100 (x = bottom distance, y = top height).", "Differentiate: 2x(dx/dt) + 2y(dy/dt) = 0.", "When x = 6, y = 8 (6-8-10 triangle). dx/dt = 1.", "2(6)(1) + 2(8)(dy/dt) = 0 → dy/dt = −12/16 = −0.75."], answer: "The top slides down at 0.75 ft/s" },
    { q: "Use a tangent line at x = 4 to estimate √4.1.", steps: ["f(x) = √x, f(4) = 2, f′(x) = 1/(2√x), f′(4) = 1/4.", "L(x) = 2 + (1/4)(x − 4).", "L(4.1) = 2 + 0.025 = 2.025.", "√x is concave down, so this is an overestimate."], answer: "≈ 2.025 (overestimate)" },
    { q: "Find lim<sub>x→0</sub> (eˣ − 1)/x.", steps: ["Plug in: (1 − 1)/0 = 0/0, so L’Hôpital applies.", "Differentiate top and bottom separately: eˣ/1.", "Plug in 0: e⁰ = 1."], answer: "1" }
  ],
  mistakes: [
    ["Plugs in numbers before differentiating in related rates.", "“If you plug in r = 5 now, what’s the derivative of a constant? Differentiate first.”"],
    ["Thinks negative acceleration always means slowing down.", "“What is the velocity’s sign? Speeding up means v and a have the same sign.”"],
    ["Uses the quotient rule for L’Hôpital.", "“L’Hôpital: take the derivative of the top and the bottom separately.”"],
    ["Uses L’Hôpital when the limit isn’t 0/0 or ∞/∞.", "“What do you get when you plug in first? L’Hôpital only works for those two forms.”"],
    ["Answers without units or context.", "“AP wants a sentence: at what time, what is changing, how fast, in what units?”"]
  ],
  ask: ["What quantities are changing? What are you given and what do you want?", "What equation connects them?", "Did you differentiate before plugging in?", "What are the signs of v and a?", "Can you say your answer in a sentence with units?"],
  check: [
    { q: "v(3) = −2 and a(3) = 4. Speeding up or slowing down at t = 3?", a: "Slowing down (opposite signs)" },
    { q: "Area of a circle grows; dr/dt = 3 when r = 2. dA/dt?", a: "2πr(dr/dt) = 12π" },
    { q: "lim<sub>x→0</sub> sin x / x by L’Hôpital?", a: "cos 0 / 1 = 1" }
  ],
  visual: "CAV_VEL" },

/* ---------------- UNIT 5 ---------------- */
{ id: "ca-05", course: "AP Calculus AB", unit: 5, title: "Analytical Applications: MVT, Extrema, Increasing/Decreasing, Concavity & Optimization", standards: "AP Calculus AB Unit 5",
  bigIdea: "The first derivative tells where a function goes up or down, and its sign changes locate relative maxima and minima. The second derivative tells concavity (cupped up or down) and inflection points. These ideas let you find the best (largest or smallest) value in real situations: optimization.",
  tips: "The <b>sign chart</b> is everything in this unit. Find where f′ = 0 or is undefined, put those on a number line, test a value in each section, and mark + or −. On the AP exam, justifications must mention the derivative: “f has a relative maximum at x = −1 because f′ changes from positive to negative there.” A graph alone isn’t a justification.",
  vocab: [
    ["critical point", "Where f′(x) = 0 or f′ is undefined (and f is defined)."],
    ["increasing / decreasing", "f′ > 0 → f is increasing. f′ < 0 → f is decreasing."],
    ["First Derivative Test", "f′ changes + to − → relative max. − to + → relative min."],
    ["concavity", "f″ > 0 → concave up (holds water, f′ increasing). f″ < 0 → concave down."],
    ["inflection point", "Where concavity changes (f″ changes sign)."],
    ["Second Derivative Test", "At a critical point: f″ > 0 → relative min; f″ < 0 → relative max."],
    ["Extreme Value Theorem / Candidates Test", "A continuous f on [a, b] has an absolute max and min. Check critical points AND endpoints; the biggest/smallest output wins."],
    ["Mean Value Theorem (MVT)", "If f is continuous on [a, b] and differentiable on (a, b), some c has f′(c) = [f(b) − f(a)]/(b − a)."]
  ],
  steps: [
    { name: "Finding relative extrema", list: ["Find f′(x) and set it = 0 (also note where it’s undefined).", "Put the critical numbers on a number line.", "Test a value in each interval to get the sign of f′.", "+ to − → relative max; − to + → relative min. Write the justification sentence."] },
    { name: "Absolute extrema on a closed interval", list: ["Find critical numbers inside the interval.", "Make a table: endpoints and critical numbers with their f-values.", "Largest f-value = absolute max; smallest = absolute min."] },
    { name: "Optimization", list: ["Draw a picture and label variables.", "Write the quantity to maximize/minimize (primary equation).", "Use the constraint to write it in one variable.", "Differentiate, set = 0, solve.", "Check it’s a max/min (sign chart or endpoints) and answer the actual question."] }
  ],
  examples: [
    { q: "f(x) = x³ − 3x² − 9x + 5. Find where f is increasing/decreasing and its relative extrema.", steps: ["f′(x) = 3x² − 6x − 9 = 3(x − 3)(x + 1). Critical numbers: x = −1, 3.", "Test x = −2: f′ = 15 (+). x = 0: f′ = −9 (−). x = 4: f′ = 15 (+).", "Increasing on (−∞, −1) and (3, ∞); decreasing on (−1, 3).", "Relative max at x = −1 (f′ changes + to −): f(−1) = 10.", "Relative min at x = 3 (f′ changes − to +): f(3) = −22."], answer: "Rel. max (−1, 10); rel. min (3, −22)" },
    { q: "For the same f, find the inflection point.", steps: ["f″(x) = 6x − 6 = 0 → x = 1.", "f″ is negative for x &lt; 1 and positive for x > 1, so concavity changes.", "f(1) = 1 − 3 − 9 + 5 = −6."], answer: "Inflection point at (1, −6)" },
    { q: "Find the absolute max and min of the same f on [0, 4].", steps: ["Critical numbers in [0, 4]: only x = 3.", "f(0) = 5, f(3) = −22, f(4) = 64 − 48 − 36 + 5 = −15.", "Largest: 5. Smallest: −22."], answer: "Abs. max 5 at x = 0; abs. min −22 at x = 3" },
    { q: "Find the value c guaranteed by the MVT for f(x) = x² on [1, 3].", steps: ["f is a polynomial, so it’s continuous and differentiable.", "Average rate: (9 − 1)/(3 − 1) = 4.", "f′(c) = 2c = 4 → c = 2 (which is in (1, 3))."], answer: "c = 2" },
    { q: "A farmer has 200 m of fence to make a rectangular pen along a river (no fence on the river side). What dimensions give the most area?", steps: ["Let x = each side perpendicular to the river; the parallel side = 200 − 2x.", "A(x) = x(200 − 2x) = 200x − 2x².", "A′(x) = 200 − 4x = 0 → x = 50.", "A″ = −4 &lt; 0 → maximum. Other side: 200 − 100 = 100.", "Area = 50 × 100 = 5000 m²."], answer: "50 m by 100 m (area 5000 m²)" }
  ],
  mistakes: [
    ["Forgets to check endpoints for absolute extrema.", "“On a closed interval, could the biggest value be at an edge?”"],
    ["Says f′ = 0 always means a max or min.", "“Does f′ change sign there? Try f(x) = x³ at 0.”"],
    ["Uses f″ = 0 alone for an inflection point.", "“Does the concavity actually change? Check the sign of f″ on both sides.”"],
    ["Justifies with ‘the graph goes up then down.’", "“AP wants the derivative in the sentence: ‘because f′ changes from positive to negative.’”"],
    ["Gives x as the answer when the question asks for the area.", "“Re-read the question. What did they ask for?”"]
  ],
  ask: ["Where is f′ zero or undefined?", "What is the sign of f′ in each interval?", "Is this a relative or absolute extremum question?", "Does concavity change at that point?", "In optimization: what are we maximizing, and what’s the constraint?"],
  check: [
    { q: "f′ changes from − to + at x = 2. What happens there?", a: "Relative minimum" },
    { q: "f″(x) = 0 at x = 1 but f″ is positive on both sides. Inflection point?", a: "No (concavity doesn’t change)" },
    { q: "On a closed interval, where do you look for absolute extrema?", a: "Critical numbers AND endpoints" }
  ],
  visual: "CAV_EXT" },

/* ---------------- UNIT 6 ---------------- */
{ id: "ca-06", course: "AP Calculus AB", unit: 6, title: "Integration & Accumulation of Change", standards: "AP Calculus AB Unit 6",
  bigIdea: "Integration is the opposite of differentiation, and it measures accumulation: the area under a rate curve equals the total change. Riemann sums estimate that area with rectangles (or trapezoids). The Fundamental Theorem of Calculus (FTC) connects the two big ideas: ∫ₐᵇ f′(x) dx = f(b) − f(a).",
  tips: "Help students say what an integral means in context: <b>“the integral of a rate gives the total amount of change.”</b> If r(t) is gallons per hour, ∫ r(t) dt is gallons. Always ask what the units would be. For antiderivatives, they can check their answer by taking its derivative.",
  vocab: [
    ["Riemann sum", "An estimate of area using rectangles: left, right, midpoint, or trapezoids."],
    ["definite integral ∫ₐᵇ f(x) dx", "The signed area between f and the x-axis from a to b (area below the axis counts as negative)."],
    ["antiderivative", "F(x) with F′(x) = f(x). Indefinite integral: ∫ f(x) dx = F(x) + C."],
    ["FTC part 1 (evaluation)", "∫ₐᵇ f(x) dx = F(b) − F(a)."],
    ["FTC part 2 (accumulation function)", "d/dx ∫ₐ^x f(t) dt = f(x). With a function in the upper limit: d/dx ∫ₐ^{g(x)} f(t) dt = f(g(x)) · g′(x)."],
    ["u-substitution", "The reverse of the chain rule. Let u = the inside function, du = u′ dx."],
    ["power rule for integrals", "∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1). ∫ 1/x dx = ln|x| + C."]
  ],
  steps: [
    { name: "Riemann sums from a table or function", list: ["Find the widths Δx of each subinterval (they might not be equal in a table!).", "Left: use the left height of each rectangle. Right: the right height.", "Trapezoid: (left + right)/2 × width.", "Add up width × height for every piece."] },
    { name: "Definite integral by FTC", list: ["Find an antiderivative F (no + C needed).", "Compute F(upper) − F(lower). Use brackets to keep signs straight.", "Interpret with units if there’s context."] },
    { name: "u-substitution", list: ["Pick u = the inside function (the part whose derivative is also present).", "Find du = u′ dx. Solve for dx or match the leftover piece.", "Rewrite everything in u. Integrate.", "Substitute back (or change the limits of integration for a definite integral)."] }
  ],
  examples: [
    { q: "Estimate ∫₀² x² dx using a right Riemann sum with 4 equal subintervals.", steps: ["Δx = (2 − 0)/4 = 0.5. Right endpoints: 0.5, 1, 1.5, 2.", "Heights: 0.25, 1, 2.25, 4.", "Sum: 0.5(0.25 + 1 + 2.25 + 4) = 0.5(7.5) = 3.75.", "Exact value is 8/3 ≈ 2.67, so this right sum is an overestimate (f is increasing)."], answer: "3.75" },
    { q: "Find ∫(6x² − 4x + 3) dx.", steps: ["Power rule each term: 6x³/3 − 4x²/2 + 3x.", "Simplify: 2x³ − 2x² + 3x.", "Add + C."], answer: "2x³ − 2x² + 3x + C" },
    { q: "Evaluate ∫₁³ (2x + 1) dx.", steps: ["Antiderivative: x² + x.", "Upper: 9 + 3 = 12. Lower: 1 + 1 = 2.", "12 − 2 = 10."], answer: "10" },
    { q: "Find ∫ 2x(x² + 1)⁴ dx.", steps: ["Let u = x² + 1, so du = 2x dx (exactly the 2x dx we have).", "∫ u⁴ du = u⁵/5 + C.", "Substitute back."], answer: "(x² + 1)⁵/5 + C" },
    { q: "Find d/dx ∫₀^{x²} cos t dt.", steps: ["FTC part 2 with a function in the upper limit.", "Plug the upper limit into the integrand: cos(x²).", "Multiply by the derivative of the upper limit: 2x."], answer: "2x cos(x²)" }
  ],
  mistakes: [
    ["Forgets + C on indefinite integrals.", "“Could there be a constant that disappears when you differentiate? Add + C.”"],
    ["Uses equal widths when a table has uneven intervals.", "“Check the gaps between the x-values. Are they all the same?”"],
    ["Subtracts in the wrong order: F(a) − F(b).", "“Top minus bottom: F(upper) − F(lower).”"],
    ["In u-sub, leaves some x’s in the integral.", "“Everything needs to be in terms of u before you integrate.”"],
    ["Forgets the chain rule factor in FTC part 2.", "“The upper limit is x², not x. What extra factor does the chain rule give?”"]
  ],
  ask: ["What does this integral represent in context? What are its units?", "Left, right, midpoint, or trapezoid? What are the widths?", "What function has this as its derivative?", "What is the inside function for u-substitution?", "Can you check your antiderivative by differentiating it?"],
  check: [
    { q: "∫ 1/x dx?", a: "ln|x| + C" },
    { q: "∫₀¹ 3x² dx?", a: "1" },
    { q: "r(t) is water flow in L/min. What does ∫₀¹⁰ r(t) dt mean?", a: "Total liters of water that flowed in during the first 10 minutes." }
  ],
  visual: "CAV_RIEM" },

/* ---------------- UNIT 7 ---------------- */
{ id: "ca-07", course: "AP Calculus AB", unit: 7, title: "Differential Equations: Slope Fields, Separation of Variables & Exponential Models", standards: "AP Calculus AB Unit 7",
  bigIdea: "A differential equation describes how something changes (dy/dx in terms of x and y), and the solution is the function itself. Slope fields show the slope at many points so you can sketch solutions. Separation of variables solves many of them by algebra plus integration. Exponential growth/decay comes from dy/dt = ky: the rate is proportional to the amount.",
  tips: "Separation of variables has a strict order: <b>separate → integrate both sides → add C (once) → plug in the initial condition → solve for y</b>. On the AP exam, a free-response solution that skips separating or forgets C loses most of the points, so encourage the student to write every step.",
  vocab: [
    ["differential equation", "An equation with a derivative in it, like dy/dx = 3y."],
    ["general vs. particular solution", "General has + C (a family of curves). Particular uses an initial condition to find C."],
    ["initial condition", "A known point, like y(0) = 2."],
    ["slope field", "Small line segments showing dy/dx at many points. Solution curves follow the segments."],
    ["separation of variables", "Move all y’s (and dy) to one side and all x’s (and dx) to the other, then integrate."],
    ["exponential model", "dy/dt = ky has solution y = y₀e<sup>kt</sup>. k > 0 growth, k < 0 decay."]
  ],
  steps: [
    { name: "Separation of variables", list: ["Separate: get dy with all y’s and dx with all x’s (multiply/divide, never add/subtract across).", "Integrate both sides. Add + C to one side.", "Plug in the initial condition to find C.", "Solve for y (exponentiate if you have ln|y|).", "Check: does the solution go through the initial point?"] },
    { name: "Slope field questions", list: ["To draw: compute dy/dx at each given point and draw a short segment with that slope.", "To match: check easy places (where x = 0 or y = 0) and see if slopes depend on x only, y only, or both.", "To sketch a solution: start at the given point and follow the segments without crossing them."] }
  ],
  examples: [
    { q: "Verify that y = Ce<sup>3x</sup> solves dy/dx = 3y.", steps: ["Differentiate: dy/dx = 3Ce<sup>3x</sup>.", "3y = 3Ce<sup>3x</sup>.", "They match ✓"], answer: "Yes, it’s a solution for any C." },
    { q: "Solve dy/dx = xy with y(0) = 2.", steps: ["Separate: (1/y) dy = x dx.", "Integrate: ln|y| = x²/2 + C.", "Initial condition: ln 2 = 0 + C → C = ln 2.", "ln|y| = x²/2 + ln 2 → y = e<sup>x²/2 + ln 2</sup> = 2e<sup>x²/2</sup>."], answer: "y = 2e<sup>x²/2</sup>" },
    { q: "A population grows by dP/dt = 0.04P with P(0) = 500. Find P(10).", steps: ["This is dy/dt = ky with k = 0.04, so P = 500e<sup>0.04t</sup>.", "P(10) = 500e<sup>0.4</sup> ≈ 500 × 1.4918."], answer: "≈ 746" },
    { q: "For dy/dx = x − y, what is the slope at (2, 1)? Where are the slopes zero?", steps: ["Plug in: 2 − 1 = 1.", "Zero slope where x − y = 0, which is the line y = x (horizontal segments all along it)."], answer: "Slope 1; zero slopes along y = x" }
  ],
  mistakes: [
    ["Integrates before separating.", "“Can you integrate y with respect to x when y is unknown? Separate first.”"],
    ["Forgets + C, or adds C after solving for y.", "“Add C right after integrating, then use the initial condition.”"],
    ["Writes e<sup>x²/2 + C</sup> = e<sup>x²/2</sup> + e<sup>C</sup>.", "“Exponent rules: e<sup>a + b</sup> = e<sup>a</sup> · e<sup>b</sup>, not a sum.”"],
    ["Separates by subtracting: dy/dx = x + y → dy − y = x dx.", "“Separation needs multiplication or division. This one can’t be separated that way.”"],
    ["Draws solution curves crossing slope segments.", "“Your curve should go along the little lines, like following a current.”"]
  ],
  ask: ["Can the y’s and x’s be separated?", "Where does + C go?", "What is the initial condition, and when do you use it?", "What is dy/dx at this point?", "Is this a growth or decay model? What is k?"],
  check: [
    { q: "General solution of dy/dt = −0.2y?", a: "y = Ce<sup>−0.2t</sup> (decay)" },
    { q: "dy/dx = y². Slope at (3, −2)?", a: "4" },
    { q: "What does the initial condition do?", a: "Finds the value of C (picks one particular solution)." }
  ],
  visual: "CAV_SLOPE" },

/* ---------------- UNIT 8 ---------------- */
{ id: "ca-08", course: "AP Calculus AB", unit: 8, title: "Applications of Integration: Average Value, Motion, Area & Volume", standards: "AP Calculus AB Unit 8",
  bigIdea: "Integrals add up tiny pieces. Adding up velocity gives displacement; adding up the heights between two curves gives area; adding up the areas of cross-sections (disks, washers, squares…) gives volume. Most problems are “set up the right integral,” and often the calculator does the evaluating.",
  tips: "For area and volume, <b>draw the region and one sample slice</b> before writing anything. Ask, “What’s the top curve? What’s the bottom curve? Where do they meet?” Volume formulas are just the area of one slice, integrated. On calculator-allowed questions, the setup with correct limits earns most of the points.",
  vocab: [
    ["average value of f", "(1/(b − a)) ∫ₐᵇ f(x) dx."],
    ["displacement", "∫ₐᵇ v(t) dt (can be negative). Net change in position."],
    ["total distance", "∫ₐᵇ |v(t)| dt. Split where v changes sign, or use the calculator with absolute value."],
    ["position from velocity", "s(b) = s(a) + ∫ₐᵇ v(t) dt."],
    ["area between curves", "∫ₐᵇ [top − bottom] dx (or ∫ [right − left] dy)."],
    ["disk method", "V = π∫ₐᵇ [R(x)]² dx (no hole)."],
    ["washer method", "V = π∫ₐᵇ ([R(x)]² − [r(x)]²) dx (outer radius R, inner radius r)."],
    ["known cross-sections", "V = ∫ₐᵇ A(x) dx, where A(x) is the area of one cross-section (square: side²; semicircle: (π/8)·diameter²)."]
  ],
  steps: [
    { name: "Area between curves", list: ["Sketch the curves.", "Find intersection points (set them equal) for the limits.", "Decide top and bottom (or right and left).", "∫ (top − bottom) dx from the left intersection to the right one."] },
    { name: "Volume of revolution", list: ["Sketch the region and the axis of rotation.", "Draw a slice perpendicular to the axis.", "Radius = distance from the axis to the curve. Hole? Washer (outer² − inner²).", "V = π ∫ (R² − r²) dx."] },
    { name: "Motion problems", list: ["Displacement: ∫ v dt.", "Total distance: ∫ |v| dt.", "Final position: starting position + ∫ v dt."] }
  ],
  examples: [
    { q: "Find the average value of f(x) = x² on [0, 3].", steps: ["(1/(3 − 0)) ∫₀³ x² dx.", "∫₀³ x² dx = [x³/3]₀³ = 9.", "(1/3)(9) = 3."], answer: "3" },
    { q: "v(t) = t² − 4 on 0 ≤ t ≤ 3. Find the displacement and total distance.", steps: ["Displacement: ∫₀³ (t² − 4) dt = [t³/3 − 4t]₀³ = 9 − 12 = −3.", "v = 0 at t = 2 (negative before, positive after).", "∫₀² v dt = 8/3 − 8 = −16/3 (distance 16/3). ∫₂³ v dt = −3 − (−16/3) = 7/3.", "Total distance: 16/3 + 7/3 = 23/3 ≈ 7.67."], answer: "Displacement −3; total distance 23/3 ≈ 7.67" },
    { q: "Find the area between y = x and y = x².", steps: ["Intersections: x = x² → x = 0, 1.", "Between 0 and 1, x is on top (try x = 0.5: 0.5 > 0.25).", "∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3."], answer: "1/6" },
    { q: "The region under y = √x from x = 0 to 4 is rotated about the x-axis. Find the volume.", steps: ["Disk: radius R = √x.", "V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx.", "= π[x²/2]₀⁴ = π(8)."], answer: "8π" },
    { q: "The region between y = x and y = x² is rotated about the x-axis. Find the volume.", steps: ["Washer: outer R = x (farther from the axis), inner r = x².", "V = π ∫₀¹ (x² − x⁴) dx.", "= π[x³/3 − x⁵/5]₀¹ = π(1/3 − 1/5)."], answer: "2π/15" }
  ],
  mistakes: [
    ["Uses ∫ v dt for total distance.", "“If the particle turns around, does the distance cancel out? Use |v|.”"],
    ["Uses (R − r)² instead of R² − r² for washers.", "“Area of a washer: big circle minus small circle. πR² − πr².”"],
    ["Mixes up top and bottom curves.", "“Pick an x in between. Which function is bigger there?”"],
    ["Forgets π in disk/washer volume.", "“Each slice is a circle. What’s the area of a circle?”"],
    ["Forgets the initial position.", "“∫ v dt is the change in position. Where did it start?”"]
  ],
  ask: ["Can you sketch the region and one slice?", "Where do the curves intersect?", "Which curve is on top (or farther from the axis)?", "Displacement or total distance?", "What does one cross-section look like? What is its area?"],
  check: [
    { q: "Area between y = 4 and y = x² from −2 to 2?", a: "∫(4 − x²) dx = 32/3" },
    { q: "s(0) = 5 and ∫₀² v dt = 3. s(2)?", a: "8" },
    { q: "Formula for washer volume?", a: "π∫(R² − r²) dx" }
  ],
  visual: "CAV_AREA" }
);

/* ===== AP Calculus visuals ===== */
(function () {
  const G = window.TGA; if (!G) return;
  const t = (x, y, s, o) => `<text x="${x}" y="${y}" font-size="${(o && o.fs) || 12}" text-anchor="${(o && o.a) || "middle"}" font-weight="${o && o.b ? 700 : 400}" fill="${(o && o.c) || "#333"}">${s}</text>`;
  const note = s => `<p style="text-align:center;margin:6px 0 0;font-size:.9rem">${s}</p>`;
  const V = {
    CAV_HOLE: G.graph({ x: [-2, 6], y: [-1, 10], fns: [{ f: x => (Math.abs(x - 3) < 0.02 ? NaN : x + 3), label: "y = (x² − 9)/(x − 3)", lx: 5.6 }],
      shade: [(X, Y) => `<circle cx="${X(3)}" cy="${Y(6)}" r="6" fill="#fff" stroke="#d0453a" stroke-width="3"/>` + t(X(3) + 10, Y(6) + 18, "hole at (3, 6)", { a: "start", b: 1, fs: 11, c: "#d0453a" })], alt: "line with a hole at 3, 6" }) + note("f(3) is undefined, but the limit as x → 3 is still 6."),
    CAV_TAN: G.graph({ x: [-1, 3], y: [-2, 8], step: 1, fns: [{ f: x => x * x, label: "y = x²", lx: 2.6 }, { f: x => 2 * x - 1, c: "#e8368f", label: "tangent: slope 2", lx: 2.9 }, { f: x => 3 * x - 2, c: "#e08a00", label: "secant", lx: 2.95 }], pts: [[1, 1, "(1, 1)"], [2, 4, "", "#e08a00"]], alt: "parabola with a secant line and a tangent line" }) + note("As the second point slides toward (1, 1), the secant slope approaches the tangent slope, f′(1) = 2."),
    CAV_CIRC: G.graph({ x: [-6, 8], y: [-6, 8], step: 2, fns: [{ f: x => (Math.abs(x) <= 5 ? Math.sqrt(25 - x * x) : NaN), label: "x² + y² = 25", lx: -3 }, { f: x => (Math.abs(x) <= 5 ? -Math.sqrt(25 - x * x) : NaN) }, { f: x => -0.75 * x + 6.25, c: "#e8368f", label: "slope −3/4", lx: 7.5 }], pts: [[3, 4, "(3, 4)"]], alt: "circle with a tangent line at 3, 4" }) + note("dy/dx = −x/y gives the slope at any point on the circle."),
    CAV_VEL: G.graph({ x: [0, 4.2], y: [-4, 10], step: 1, fns: [{ f: x => 3 * (x - 1) * (x - 3), label: "v(t) = 3(t − 1)(t − 3)", lx: 4.1 }], pts: [[1, 0, "rest"], [3, 0, "rest"]],
      shade: [(X, Y) => t(X(0.5), Y(-3), "v +", { b: 1, c: "#1aa36f" }) + t(X(2), Y(-3.4), "v −", { b: 1, c: "#d0453a" }) + t(X(3.6), Y(-3), "v +", { b: 1, c: "#1aa36f" })], alt: "velocity graph crossing zero at 1 and 3" }) + note("The particle is at rest where v = 0 and changes direction where v changes sign."),
    CAV_EXT: G.graph({ w: 340, h: 300, x: [-3, 5], y: [-25, 15], step: 5, fns: [{ f: x => x ** 3 - 3 * x * x - 9 * x + 5, label: "f(x) = x³ − 3x² − 9x + 5", lx: 4.9 }], pts: [[-1, 10, "rel max (−1, 10)"], [3, -22, "rel min (3, −22)"], [1, -6, "inflection (1, −6)", "#8a54e0"]], alt: "cubic with a relative maximum, minimum and inflection point" }),
    CAV_RIEM: G.graph({ x: [0, 2.4], y: [0, 4.5], step: 1, fns: [{ f: x => x * x, label: "y = x²", lx: 2.1 }],
      shade: [(X, Y) => [0.5, 1, 1.5, 2].map(r => `<rect x="${X(r - 0.5)}" y="${Y(r * r)}" width="${X(0.5) - X(0)}" height="${Y(0) - Y(r * r)}" fill="#2b7de933" stroke="#2b7de9"/>`).join("")], alt: "right Riemann sum rectangles under y = x squared" }) + note("Right Riemann sum with 4 rectangles = 3.75. The exact area is 8/3 ≈ 2.67."),
    CAV_SLOPE: G.graph({ x: [-3, 3], y: [-3, 3], step: 1,
      shade: [(X, Y) => { let g = ""; for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) { const m = i - j, a = Math.atan(m), d = 0.32; g += `<line x1="${X(i - d * Math.cos(a))}" y1="${Y(j - d * Math.sin(a))}" x2="${X(i + d * Math.cos(a))}" y2="${Y(j + d * Math.sin(a))}" stroke="#2b7de9" stroke-width="2"/>`; } return g; }],
      fns: [{ f: x => x - 1 + 2 * Math.exp(-x), c: "#e8368f", label: "a solution curve", lx: 2.6 }], lines: [[-3, -3, 3, 3, "#999"]], alt: "slope field for dy/dx = x − y" }) + note("Slope field for dy/dx = x − y. Slopes are 0 along the dashed line y = x."),
    CAV_AREA: G.graph({ x: [-0.2, 1.3], y: [-0.2, 1.3], step: 1, fns: [{ f: x => x, label: "y = x", lx: 1.25 }, { f: x => x * x, c: "#e8368f", label: "y = x²", lx: 1.12 }],
      shade: [(X, Y) => { let p = `M${X(0)} ${Y(0)}`; for (let i = 0; i <= 40; i++) { const x = i / 40; p += `L${X(x)} ${Y(x)}`; } for (let i = 40; i >= 0; i--) { const x = i / 40; p += `L${X(x)} ${Y(x * x)}`; } return `<path d="${p}Z" fill="#8a54e044"/>` + `<line x1="${X(0.6)}" y1="${Y(0.6)}" x2="${X(0.6)}" y2="${Y(0.36)}" stroke="#e08a00" stroke-width="3"/>` + t(X(0.62), Y(0.48), "top − bottom", { a: "start", b: 1, fs: 11, c: "#e08a00" }); }], pts: [[0, 0, ""], [1, 1, "(1, 1)"]], alt: "region between y = x and y = x squared" }) + note("Area = ∫₀¹ (x − x²) dx = 1/6. Each vertical slice has height top − bottom.")
  };
  (window.TUTOR_UNITS || []).forEach(u => { if (u.course === "AP Calculus AB" && V[u.visual]) u.visual = V[u.visual]; });
})();
