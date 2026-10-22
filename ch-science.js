/* =====================================================================
   SCIENCE CHALLENGE PROBLEMS (shown on challenge.html)
   Same format as ch-math.js (see the notes at the top of that file).
   Standards: NGSS / CA NGSS high school performance expectations.
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · Biology ---------------- */
{ id: "s9-colorblind", grade: 9, subject: "Science", course: "Biology", unit: "Heredity & Genetics", std: "HS-LS3-1 · HS-LS3-3", spice: 2,
  title: "The Colorblind Puzzle",
  teaser: "Neither parent is a colorblind woman, yet their daughter could be colorblind. Find the probability.",
  ask: "What is the probability that the first child of a colorblind man and a woman whose father was colorblind is a colorblind girl?",
  prompt: `<p>Red-green colorblindness is caused by a <b>recessive allele on the X chromosome</b>. Use X<sup>B</sup> for normal vision and X<sup>b</sup> for colorblindness.</p>
    <ul><li><b>Marcus</b> is colorblind.</li>
    <li><b>Elena</b> has normal vision, but her <b>father was colorblind</b>.</li></ul>
    <p><b>(a)</b> Write the genotypes of Marcus and Elena. Explain how you know Elena’s.</p>
    <p><b>(b)</b> Make a Punnett square for their children.</p>
    <p><b>(c)</b> What is the probability that their <b>first child is a colorblind girl</b>? Give a percent.</p>
    <p><b>(d)</b> Explain why colorblindness is much more common in men than in women.</p>`,
  why: "You have to infer a hidden genotype from a family member, track X and Y chromosomes, and read the question carefully: “a colorblind girl” is not the same as “a girl who is colorblind.”",
  answer: { type: "num", value: 25, tol: 0, prompt: "Part (c): probability as a percent", unit: "%" },
  hints: ["A father gives his daughter his only X chromosome. What X did Elena get from her colorblind dad?",
    "Marcus = X<sup>b</sup>Y. Elena = X<sup>B</sup>X<sup>b</sup>. Put Marcus’s X<sup>b</sup> and Y across the top and Elena’s two X’s down the side.",
    "Count the boxes that are BOTH a girl AND colorblind (X<sup>b</sup>X<sup>b</sup>) out of all 4 boxes."],
  solution: `<p><b>(a)</b> Marcus: <b>X<sup>b</sup>Y</b> (men have one X, so one recessive allele shows). Elena: <b>X<sup>B</sup>X<sup>b</sup></b>. She has normal vision, so she has at least one X<sup>B</sup>, and her colorblind father could only give her X<sup>b</sup>. She is a <b>carrier</b>.</p>
    <table><tr><th></th><th>X<sup>b</sup> (Marcus)</th><th>Y (Marcus)</th></tr>
    <tr><th>X<sup>B</sup> (Elena)</th><td>X<sup>B</sup>X<sup>b</sup> girl, carrier</td><td>X<sup>B</sup>Y boy, normal</td></tr>
    <tr><th>X<sup>b</sup> (Elena)</th><td>X<sup>b</sup>X<sup>b</sup> <b>girl, colorblind</b></td><td>X<sup>b</sup>Y boy, colorblind</td></tr></table>
    <p><b>(c)</b> 1 out of 4 boxes = <b>25%</b>. (Careful: among <i>daughters only</i>, the chance is 50%. The question asks about the first child, who could be a boy or a girl.)</p>
    <p><b>(d)</b> Males have only one X, so a single recessive allele causes colorblindness. Females need two recessive alleles, one from each parent, which is much less likely.</p>`,
  deeper: "Can a colorblind woman ever have a son with normal vision? Can a normal-vision man ever have a colorblind daughter? Prove each answer with a Punnett square." },

{ id: "s9-hawks", grade: 9, subject: "Science", course: "Biology", unit: "Ecosystems & Energy Flow", std: "HS-LS2-4 · HS-LS2-3", spice: 2,
  title: "How Many Hawks Can a Meadow Feed?",
  teaser: "Use the 10% rule to find how many hawks a meadow supports, then see what happens when the food chain gets shorter.",
  ask: "Using the 10% rule, how many hawks can this meadow support each day, and why does a shorter food chain support more?",
  prompt: `<p>In a meadow, energy flows through this food chain:</p>
    <blockquote style="font-size:1.1rem">🌾 Grass → 🐭 Mice → 🐍 Snakes → 🦅 Hawks</blockquote>
    <p>Each day the grass captures <b>50,000 kcal</b> of energy that is available to the mice. Assume only about <b>10%</b> of the energy at one level is passed to the next level. One hawk needs <b>25 kcal per day</b>.</p>
    <p><b>(a)</b> How many hawks can this food chain support each day?</p>
    <p><b>(b)</b> The snakes die out, and the hawks start eating the mice directly. Now how many hawks could be supported?</p>
    <p><b>(c)</b> Explain where the other 90% of the energy goes at each level, and use your answers to explain why there are always fewer top predators than plants.</p>`,
  why: "The math is not hard, but you have to keep track of which level you are on, then explain energy loss with biology, not just numbers.",
  answer: { type: "num", value: 2, tol: 0, prompt: "Part (a): number of hawks", unit: "hawks" },
  hints: ["Mice get 10% of 50,000. Snakes get 10% of what the mice got. Hawks get 10% of what the snakes got.",
    "Hawks get 50 kcal per day. Each hawk needs 25 kcal.",
    "For (b), remove one level. How much energy reaches the hawks now?"],
  solution: `<p><b>(a)</b> Mice: 10% × 50,000 = 5,000 kcal. Snakes: 500 kcal. Hawks: <b>50 kcal</b>. 50 ÷ 25 = <b>2 hawks</b>.</p>
    <p><b>(b)</b> Grass → Mice → Hawks: Hawks get 10% × 5,000 = 500 kcal. 500 ÷ 25 = <b>20 hawks</b>, which is 10 times more.</p>
    <p><b>(c)</b> At each level, most of the energy is used for <b>cellular respiration</b> (movement, staying warm, growing), lost as <b>heat</b>, or never eaten or digested (bones, fur, waste). Only about 10% is stored in body tissue that the next level can eat. Because energy shrinks so much at each step, the top level can support only a few organisms, and long food chains are rare.</p>`,
  deeper: "Use the 10% rule to explain why eating more plants and less meat could feed more people on the same amount of farmland. What other factors (nutrition, land type, culture) complicate this argument?" },

/* ---------------- 10th grade · Chemistry ---------------- */
{ id: "s10-limiting", grade: 10, subject: "Science", course: "Chemistry", unit: "Stoichiometry", std: "HS-PS1-7 · HS-PS1-2", spice: 3,
  title: "The Limiting Reactant Trap",
  teaser: "You have more grams of oxygen than hydrogen. So hydrogen runs out first… right? Prove it either way.",
  ask: "When 10.0 g of hydrogen reacts with 64.0 g of oxygen, which is the limiting reactant and how many grams of water form?",
  prompt: `<p>Hydrogen gas and oxygen gas react to form water:</p>
    <blockquote style="font-size:1.15rem"><b>2 H₂ + O₂ → 2 H₂O</b></blockquote>
    <p>You start with <b>10.0 g of H₂</b> and <b>64.0 g of O₂</b>. Use molar masses: H₂ = 2.0 g/mol, O₂ = 32.0 g/mol, H₂O = 18.0 g/mol.</p>
    <p><b>(a)</b> Which reactant is the <b>limiting reactant</b>? Show your proof.</p>
    <p><b>(b)</b> What is the maximum mass of water that can form?</p>
    <p><b>(c)</b> How many grams of the excess reactant are left over? Show that mass is conserved.</p>`,
  why: "There is more oxygen by mass, which tricks most people into thinking hydrogen runs out first. You have to convert to moles and use the mole ratio.",
  answer: { type: "num", value: 72, tol: 0.5, near: 4, prompt: "Part (b): mass of water", unit: "grams" },
  hints: ["Never compare grams. Convert each reactant to moles first.",
    "H₂: 10.0 ÷ 2.0 = 5.0 mol. O₂: 64.0 ÷ 32.0 = 2.0 mol. The ratio says 2 H₂ for every 1 O₂. How many mol of H₂ do 2.0 mol of O₂ need?",
    "2.0 mol O₂ needs only 4.0 mol H₂, and you have 5.0, so O₂ runs out first. Use O₂ to find water: 2.0 mol O₂ × (2 mol H₂O / 1 mol O₂)."],
  solution: `<p><b>(a)</b> Moles: H₂ = 10.0 ÷ 2.0 = <b>5.0 mol</b>; O₂ = 64.0 ÷ 32.0 = <b>2.0 mol</b>. The equation needs 2 mol H₂ per 1 mol O₂, so 2.0 mol O₂ needs 4.0 mol H₂. We have 5.0 mol H₂, which is more than enough, so <b>O₂ is the limiting reactant</b> (even though there are more grams of it).</p>
    <p><b>(b)</b> 2.0 mol O₂ × (2 mol H₂O / 1 mol O₂) = 4.0 mol H₂O × 18.0 g/mol = <b>72.0 g H₂O</b>.</p>
    <p><b>(c)</b> H₂ used = 4.0 mol; left over = 1.0 mol × 2.0 g/mol = <b>2.0 g H₂</b>. Check: 10.0 g + 64.0 g = 74.0 g before; 72.0 g + 2.0 g = 74.0 g after ✅</p>`,
  deeper: "Rocket engines that burn hydrogen often use more hydrogen than the balanced ratio requires. Research or reason out why an engineer might choose NOT to use the exact ratio." },

{ id: "s10-syringe", grade: 10, subject: "Science", course: "Chemistry", unit: "Chemical Equilibrium", std: "HS-PS1-6 · HS-PS1-5", spice: 3,
  title: "The Syringe That Changes Color Twice",
  teaser: "Push a plunger on brown gas: it gets darker, then lighter. Explain both changes with Le Chatelier’s principle.",
  ask: "Why does compressed NO₂/N₂O₄ gas get darker at first and then lighter?",
  prompt: `<p>A sealed syringe holds a mixture of two gases at equilibrium:</p>
    <blockquote style="font-size:1.15rem"><b>2 NO₂ (brown) ⇌ N₂O₄ (colorless)</b></blockquote>
    <p>You quickly push the plunger in, making the volume <b>half</b> as big. Students observe:</p>
    <ol><li>The instant the plunger is pushed, the gas looks <b>darker brown</b>.</li>
    <li>Over the next few seconds, the color gets <b>lighter</b>, but it does not go all the way back to the original color.</li></ol>
    <p><b>Your challenge:</b> Explain <b>both</b> observations at the molecular level. Use the words <b>concentration</b>, <b>pressure</b>, <b>moles of gas</b>, and <b>equilibrium shift</b>.</p>`,
  why: "Most people explain only one of the color changes. You have to separate what happens instantly (physics) from what happens over time (chemistry).",
  answer: { type: "mc", prompt: "First: Why does the color get LIGHTER after the first few seconds?",
    opts: ["The NO₂ molecules leak out of the syringe.",
      "The equilibrium shifts toward N₂O₄ because that side has fewer moles of gas, which reduces the pressure.",
      "Pushing the plunger cools the gas, which turns it colorless.",
      "The equilibrium shifts toward NO₂ because the system wants more molecules."], a: 1,
    why: { 0: "❌ The syringe is sealed. The total mass stays the same.", 2: "❌ Compressing a gas quickly actually tends to warm it slightly. Think about moles of gas.", 3: "❌ Increasing pressure favors the side with FEWER gas molecules." } },
  hints: ["Step 1 is not a chemical change. If you squeeze the same number of brown molecules into half the space, what happens to their concentration?",
    "Count gas molecules on each side: 2 NO₂ vs. 1 N₂O₄. Which side has fewer?",
    "Le Chatelier: when pressure increases, the system shifts to the side with fewer moles of gas to partly undo the change. It only partly undoes it."],
  solution: `<p><b>Darker at first:</b> Pushing the plunger halves the volume, so the <b>concentration</b> of brown NO₂ instantly doubles. Same molecules, less space → darker color. No reaction has happened yet.</p>
    <p><b>Then lighter:</b> The smaller volume raises the <b>pressure</b>. The reaction has 2 moles of gas on the left and 1 mole on the right. By <b>Le Chatelier’s principle</b>, the equilibrium shifts <b>toward N₂O₄</b> (fewer moles of gas), which lowers the pressure. As NO₂ is converted to colorless N₂O₄, the brown color fades.</p>
    <p><b>Not all the way back:</b> The shift only <b>partly</b> counteracts the change. At the new equilibrium, the NO₂ concentration is still higher than at the start, so the gas stays somewhat darker than the original.</p>`,
  deeper: "This reaction is exothermic in the forward direction (2 NO₂ → N₂O₄ releases heat). Predict what happens to the color if you put the syringe in ice water instead of pushing the plunger, and explain why." },

/* ---------------- 11th grade · Physics ---------------- */
{ id: "s11-table", grade: 11, subject: "Science", course: "Physics", unit: "Projectile Motion", std: "HS-PS2-1", spice: 2,
  title: "How Fast Did It Leave the Table?",
  teaser: "A ball rolls off a table and lands 2.0 m away. With no speedometer, find its launch speed.",
  ask: "If a ball rolls off a 1.25 m table and lands 2.0 m away, how fast was it moving when it left the table?",
  prompt: `<p>A marble rolls across a table and off the edge. The tabletop is <b>1.25 m</b> above the floor. The marble lands <b>2.0 m</b> from the base of the table. Ignore air resistance and use <b>g = 9.8 m/s²</b>.</p>
    <div class="fig"><svg viewBox="0 0 320 170" width="320" role="img" aria-label="Marble rolling off a table in a curved path to the floor">
      <rect x="10" y="50" width="90" height="10" fill="#8a6a43"/><rect x="85" y="60" width="8" height="95" fill="#8a6a43"/>
      <line x1="0" y1="155" x2="320" y2="155" stroke="#555" stroke-width="2"/>
      <path d="M100 45 Q 190 50 270 152" fill="none" stroke="#2b7de9" stroke-width="3" stroke-dasharray="6 5"/>
      <circle cx="96" cy="44" r="6" fill="#d0453a"/><circle cx="270" cy="149" r="6" fill="#d0453a"/>
      <text x="105" y="110" font-size="13">1.25 m</text><line x1="100" y1="60" x2="100" y2="155" stroke="#999" stroke-dasharray="3 3"/>
      <text x="170" y="168" font-size="13">2.0 m</text></svg></div>
    <p><b>(a)</b> How long is the marble in the air?</p>
    <p><b>(b)</b> What was its speed when it left the table? Round to the nearest hundredth.</p>
    <p><b>(c)</b> A second marble leaves the table <b>twice as fast</b>. Does it hit the floor sooner, later, or at the same time? How far away does it land?</p>`,
  why: "You have to treat horizontal and vertical motion as two separate problems connected only by time, which is not how most people naturally think about a curved path.",
  answer: { type: "num", value: 3.96, tol: 0.03, near: 0.1, prompt: "Part (b): launch speed", unit: "m/s" },
  hints: ["Vertical motion only: the marble starts with 0 vertical velocity and falls 1.25 m. Use Δy = ½gt².",
    "t = √(2 × 1.25 ÷ 9.8) ≈ 0.505 s. Horizontally there is no acceleration.",
    "Horizontal speed = horizontal distance ÷ time."],
  solution: `<p><b>(a)</b> Vertical: 1.25 = ½(9.8)t² → t² = 0.2551 → <b>t ≈ 0.505 s</b>.</p>
    <p><b>(b)</b> Horizontal speed is constant: v = 2.0 m ÷ 0.505 s ≈ <b>3.96 m/s</b>.</p>
    <p><b>(c)</b> It hits the floor at the <b>same time</b> (0.505 s), because horizontal speed doesn’t affect how fast it falls. It lands twice as far: about <b>4.0 m</b> away.</p>`,
  deeper: "A bullet fired horizontally and a bullet dropped from the same height at the same moment hit the ground at the same time (ignoring air). Why does this surprise people? Design a quick classroom experiment to test it." },

{ id: "s11-loop", grade: 11, subject: "Science", course: "Physics", unit: "Energy & Circular Motion", std: "HS-PS3-1 · HS-PS2-1", spice: 3,
  title: "The Loop-the-Loop Height",
  teaser: "How high must a roller coaster start to make it around a 10 m loop without falling? (It’s not 20 m.)",
  ask: "What is the minimum starting height for a frictionless cart to make it around a loop with a 10 m radius?",
  prompt: `<p>A roller coaster cart starts <b>from rest</b> at height <b>h</b> and rolls down a frictionless track into a vertical circular loop with radius <b>R = 10 m</b>. Heights are measured from the bottom of the loop.</p>
    <p>At the very <b>top</b> of the loop, the cart must be moving fast enough that the track still pushes on it (or just barely touches it). Otherwise, it falls off.</p>
    <p><b>(a)</b> At the top of the loop, what is the <b>minimum speed</b> needed? (Gravity alone must provide the centripetal force.)</p>
    <p><b>(b)</b> Use conservation of energy to find the <b>minimum starting height h</b>.</p>
    <p><b>(c)</b> Explain why starting at h = 20 m (the height of the top of the loop) is not enough.</p>`,
  why: "You have to combine two big ideas, circular motion and conservation of energy, in one problem. Most people only use one and get 20 m.",
  answer: { type: "num", value: 25, tol: 0.2, prompt: "Part (b): minimum starting height", unit: "meters" },
  hints: ["At the top, the minimum condition is when gravity alone provides the centripetal force: mg = mv²/R. Solve for v².",
    "v² = gR at the top. The top of the loop is at height 2R.",
    "Energy: mgh = mg(2R) + ½mv². Substitute v² = gR and cancel m and g."],
  solution: `<p><b>(a)</b> At the top: mg = mv²/R → v² = gR → v = √(9.8 × 10) ≈ <b>9.9 m/s</b>.</p>
    <p><b>(b)</b> Energy conservation from the start to the top of the loop:<br>mgh = mg(2R) + ½mv² → gh = 2gR + ½gR → <b>h = 2.5R = 25 m</b>.</p>
    <p><b>(c)</b> At h = 20 m, the cart would reach the top of the loop with <b>zero speed</b>, and with zero speed nothing provides the centripetal force needed to stay on a circle. It would leave the track and fall before reaching the top. The extra 5 m gives it kinetic energy to keep moving in the circle.</p>`,
  deeper: "Real coasters have friction and use teardrop-shaped (clothoid) loops instead of circles. How would friction change your answer? Why might a tighter curve at the top of the loop make the ride both safer and more comfortable?" },

/* ---------------- 12th grade · Anatomy & Physiology / Earth & Environmental ---------------- */
{ id: "s12-hyponatremia", grade: 12, subject: "Science", course: "Anatomy & Physiology", unit: "Homeostasis & Osmosis", std: "HS-LS1-3 · HS-LS1-2", spice: 3,
  title: "Too Much Water?",
  teaser: "A marathon runner drinks huge amounts of plain water and becomes confused and sick. Explain it with osmosis.",
  ask: "How can drinking too much plain water during a marathon cause brain cells to swell?",
  prompt: `<p>During a hot marathon, a runner sweats out a lot of water <b>and salt (sodium)</b>. Worried about dehydration, she drinks large amounts of <b>plain water</b> at every station. By mile 22 she has a headache, nausea, and confusion. At the medical tent, a blood test shows her blood <b>sodium is very low</b>. This condition is called <b>hyponatremia</b>.</p>
    <p><b>Your challenge:</b> Explain, step by step, how drinking plain water led to her symptoms. Use the terms <b>osmosis</b>, <b>hypotonic</b>, <b>solute concentration</b>, and <b>homeostasis</b>. Then explain why sports drinks or salty snacks help prevent this problem.</p>`,
  why: "Everyone knows water is healthy. You have to trace a chain from the whole body (sweat, drinking) down to what water does across a single cell membrane.",
  answer: { type: "mc", prompt: "First: What happens to her brain cells?",
    opts: ["They shrink, because water leaves the cells.",
      "They swell, because the fluid around the cells becomes hypotonic, so water moves INTO the cells by osmosis.",
      "Nothing happens, because cell membranes block water.",
      "They burst instantly, because salt enters the cells."], a: 1,
    why: { 0: "❌ That happens when the fluid outside is hypertonic (too salty). Here, sodium is LOW outside the cells.", 2: "❌ Water crosses cell membranes easily, especially through aquaporins.", 3: "❌ The problem is water moving in, not salt. And swelling, not instant bursting." } },
  hints: ["Sweat removes both water AND sodium. Plain water replaces only one of them. What happens to the sodium concentration of her blood?",
    "Compare the solute concentration outside her cells to inside. Which side is now hypotonic? Which way does water move?",
    "The brain is inside the skull. Why is swelling especially dangerous there?"],
  solution: `<p><b>Step by step:</b> Sweating removed water <b>and</b> sodium. Drinking large amounts of plain water replaced the water but not the salt, so the <b>solute concentration</b> of her blood and the fluid around her cells dropped. That fluid became <b>hypotonic</b> compared with the inside of her cells.</p>
    <p>By <b>osmosis</b>, water moves from lower solute concentration to higher solute concentration, so water rushed <b>into</b> her cells and they swelled. In most tissues this is mild, but the brain is enclosed by the skull, so swelling raises pressure and causes headache, nausea, confusion, and in severe cases seizures. Her body’s <b>homeostasis</b> system (kidneys, hormones like ADH) could not remove the extra water fast enough.</p>
    <p><b>Prevention:</b> Sports drinks and salty snacks replace sodium along with water, keeping the fluid around cells close to <b>isotonic</b>. Drinking to thirst, instead of forcing large amounts, also helps.</p>`,
  deeper: "Doctors treat severe hyponatremia carefully and slowly. Why might raising blood sodium TOO fast also be dangerous for brain cells? Use osmosis to predict what would happen." },

{ id: "s12-keeling", grade: 12, subject: "Science", course: "Earth & Environmental Science", unit: "Carbon Cycle & Climate", std: "HS-ESS2-6 · HS-ESS3-6", spice: 3,
  title: "Why Does the Earth “Breathe”?",
  teaser: "The CO₂ record climbs every year, but it also zigzags up and down each year. Explain the zigzag.",
  ask: "Why does CO₂ at Mauna Loa rise and fall each year, and why is the yearly swing bigger in the Arctic than at the South Pole?",
  prompt: `<p>Since 1958, scientists have measured carbon dioxide (CO₂) in the air at <b>Mauna Loa, Hawaii</b>. The graph (the Keeling Curve) has two patterns: a <b>long-term rise</b> and a yearly <b>zigzag</b>. At Mauna Loa, CO₂ usually peaks around <b>May</b> and is lowest around <b>September–October</b>.</p>
    <div class="fig"><svg viewBox="0 0 320 150" width="320" role="img" aria-label="Rising zigzag line showing yearly ups and downs in carbon dioxide">
      <line x1="30" y1="130" x2="310" y2="130" stroke="#555"/><line x1="30" y1="10" x2="30" y2="130" stroke="#555"/>
      <polyline fill="none" stroke="#1aa36f" stroke-width="2.5" points="30,118 45,110 60,122 75,104 90,116 105,98 120,110 135,92 150,104 165,86 180,98 195,80 210,92 225,74 240,86 255,68 270,80 285,62 300,74"/>
      <text x="40" y="146" font-size="11">time (years) →</text><text x="2" y="12" font-size="11">CO₂</text></svg></div>
    <p>Scientists also measure CO₂ at other stations. The yearly zigzag is much <b>larger</b> in northern Alaska and much <b>smaller</b> at the South Pole.</p>
    <p><b>Your challenge:</b> Explain (1) what causes the yearly zigzag and why the timing is May and September–October, (2) why the zigzag is bigger in the Arctic than at the South Pole, and (3) what causes the long-term rise.</p>`,
  why: "You have to connect the carbon cycle, seasons, and the geography of the whole planet (where the land and forests are) to read a graph you have probably seen many times.",
  answer: { type: "mc", prompt: "First: Why is CO₂ LOWEST in September–October?",
    opts: ["Volcanoes in Hawaii are quiet in the fall.",
      "Plants in the Northern Hemisphere have been photosynthesizing all summer, pulling CO₂ out of the air.",
      "People drive less in the fall.",
      "The ocean releases CO₂ in the fall."], a: 1,
    why: { 0: "❌ The station is designed to filter out local volcanic signals, and volcanoes don’t follow seasons.", 2: "❌ Human emissions are fairly steady through the year and keep rising; they explain the long-term trend, not the zigzag.", 3: "❌ That would make CO₂ go UP, not down." } },
  hints: ["Think about leaves. In which months do Northern Hemisphere forests and crops grow the most? What gas do they take in?",
    "In fall and winter, leaves fall and decompose, and respiration continues. What happens to CO₂ then?",
    "Look at a globe: Where is most of Earth’s land and forest, the Northern or Southern Hemisphere? What is around the South Pole?"],
  solution: `<p><b>(1) The zigzag:</b> Most of Earth’s land and forests are in the <b>Northern Hemisphere</b>. In spring and summer, plants there photosynthesize heavily and pull CO₂ out of the air, so CO₂ drops until <b>September–October</b>, the end of the growing season. In fall and winter, photosynthesis slows while respiration and decomposition of dead leaves continue, releasing CO₂, so it builds to a peak around <b>May</b>, just before the new growing season takes off.</p>
    <p><b>(2) Arctic vs. South Pole:</b> Northern Alaska is close to huge northern forests (the boreal forest) with a short, intense growing season, so the seasonal signal is strong. The South Pole is surrounded by ice and the Southern Ocean, far from large seasonal forests, and the Southern Hemisphere has much less land, so the swing there is small.</p>
    <p><b>(3) Long-term rise:</b> Burning fossil fuels (and deforestation) adds more CO₂ each year than plants and oceans can absorb, so each year’s zigzag starts a little higher.</p>`,
  deeper: "Scientists have found that the size of the yearly zigzag in the far north has grown over the decades. Propose two possible explanations and describe data you could collect to test them." }
);


/* =====================================================================
   SET 2: more science challenges from different units
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · Biology (set 2) ---------------- */
{ id: "s9-finches", grade: 9, subject: "Science", course: "Biology", unit: "Evolution & Natural Selection", std: "HS-LS4-2 · HS-LS4-4", spice: 3,
  title: "The Drought That Changed the Finches",
  teaser: "After a drought, finch beaks got bigger, but no bird’s beak grew. Explain how a population can change when individuals don’t.",
  ask: "How did the average beak size of finches increase after the 1977 drought if no individual bird’s beak changed?",
  prompt: `<p>Scientists Peter and Rosemary Grant studied <b>medium ground finches</b> on the Galápagos island of Daphne Major for decades. These finches eat seeds. Small, soft seeds are easy to crack; large, hard seeds need a deep, strong beak.</p>
    <p>In <b>1977</b>, a severe drought hit. Plants made few seeds, and the small, soft seeds were eaten first. Mostly large, hard seeds were left. About <b>85% of the finches died</b>. The birds that survived had, on average, <b>deeper beaks</b>, and their offspring the next generation also had deeper beaks on average (about 4% deeper).</p>
    <p><b>Your challenge:</b> Explain this change using the four parts of natural selection: <b>variation</b>, <b>inheritance</b>, <b>selection (differential survival)</b>, and <b>time/reproduction</b>. Then explain the common mistake in this sentence: <i>“The finches grew bigger beaks because they needed them to eat the hard seeds.”</i></p>`,
  why: "It is very natural to think animals change because they “need” to. You have to explain evolution at the level of the population, not the individual.",
  answer: { type: "mc", prompt: "First: What is wrong with “The finches grew bigger beaks because they needed them”?",
    opts: ["Nothing. That is how evolution works.",
      "Individual birds can’t change their inherited beak size. Birds that already had deeper beaks survived and reproduced more, so the next generation’s average changed.",
      "Finches don’t have beaks.",
      "Beaks got smaller, not bigger."], a: 1,
    why: { 0: "❌ This is the most common evolution misconception. Can a bird change its own genes by needing something?", 2: "❌ They definitely do. Focus on how the change happened.", 3: "❌ Reread the data: survivors had deeper beaks." } },
  hints: ["Before the drought, did all finches have exactly the same beak size? (Variation.)",
    "Which birds were most likely to find enough food during the drought? Why?",
    "Beak size is inherited. If mostly deep-beaked birds survive to reproduce, what do their chicks look like?"],
  solution: `<p><b>Natural selection explanation:</b></p>
    <ul><li><b>Variation:</b> Before the drought, finches had a range of beak depths.</li>
    <li><b>Selection:</b> When only large, hard seeds were left, birds with deeper beaks could crack them and were more likely to survive. Many small-beaked birds starved.</li>
    <li><b>Inheritance:</b> Beak depth is largely inherited, so survivors passed deep-beak genes to their chicks.</li>
    <li><b>Reproduction over generations:</b> The next generation’s <b>average</b> beak was deeper (about 4%), because more of the parents had deep beaks.</li></ul>
    <p><b>The mistake:</b> “Needing” a trait does not create it. No individual bird’s beak grew. The <b>population</b> changed because birds that <b>already</b> had deeper beaks survived and reproduced more. Evolution happens to populations over generations, not to individuals during their lifetimes.</p>`,
  deeper: "In later years with heavy rain, small soft seeds became common again. Predict what happened to average beak size, and explain why evolution doesn’t have a “goal.”" },

{ id: "s9-cancer", grade: 9, subject: "Science", course: "Biology", unit: "Cell Cycle & Cancer", std: "HS-LS1-4 · HS-LS3-2", spice: 3,
  title: "Why Cancer Is More Common With Age",
  teaser: "Cancer usually needs several mutations in the same cell. Use cell cycle checkpoints to explain why age matters.",
  ask: "Why does the risk of cancer increase with age, using cell cycle checkpoints and mutations?",
  prompt: `<p>Your cells divide through the <b>cell cycle</b> (interphase and mitosis). At <b>checkpoints</b>, proteins check for problems such as damaged DNA. One famous checkpoint protein, <b>p53</b>, can stop the cycle to allow DNA repair, or trigger the cell to destroy itself (apoptosis) if the damage is too great.</p>
    <p>Cancer is uncontrolled cell division. Most cancers develop only after a cell collects <b>several mutations</b>, often in genes that control the cell cycle (like the gene for p53).</p>
    <p><b>Your challenge:</b> (1) Explain why a mutation in the <b>p53</b> gene is especially dangerous. (2) Explain why cancer risk rises with <b>age</b>, even for people with healthy habits. (3) Many chemotherapy drugs attack rapidly dividing cells. Explain why patients often lose their hair.</p>`,
  why: "You have to connect a molecular idea (checkpoint proteins) to a whole-body pattern (age and cancer risk), using probability over time.",
  answer: { type: "mc", prompt: "First: Why is losing p53 so dangerous?",
    opts: ["p53 makes cells divide faster.",
      "Without p53, cells with damaged DNA are not stopped or destroyed, so they keep dividing and can collect even more mutations.",
      "p53 is the only protein in the body.",
      "Losing p53 immediately causes death."], a: 1,
    why: { 0: "❌ p53 does the opposite: it can STOP the cell cycle.", 2: "❌ There are thousands of proteins. What is p53’s specific job?", 3: "❌ It doesn’t cause instant harm. It removes a safety check." } },
  hints: ["Think of p53 as a quality inspector on an assembly line. What happens if the inspector is fired?",
    "Every time DNA is copied, there is a tiny chance of a mistake. Over 70 years, how many cell divisions happen? What happens to the odds of several mutations in one cell?",
    "Which body cells divide quickly all the time? (Think about hair follicles, the stomach lining, and blood cells.)"],
  solution: `<p><b>(1) p53:</b> p53 acts as a safety check that pauses the cell cycle for repairs or triggers apoptosis if DNA damage is severe. If the p53 gene is mutated, damaged cells keep dividing, and every division gives a chance for more mutations. That’s why p53 mutations are found in a large share of human cancers.</p>
    <p><b>(2) Age:</b> Mutations build up over time from copying errors and environmental damage (UV light, chemicals). Cancer usually requires several mutations in the <b>same</b> cell lineage. The longer you live, the more cell divisions occur, and the higher the chance that one cell collects enough mutations. Repair systems also become less efficient with age.</p>
    <p><b>(3) Hair loss:</b> Chemotherapy targets rapidly dividing cells, but it can’t tell cancer cells from healthy fast-dividing cells, like those in <b>hair follicles</b>, the digestive lining, and bone marrow. That causes hair loss, nausea, and low blood counts.</p>`,
  deeper: "Elephants have many more cells than humans but rarely get cancer. Scientists found elephants have about 20 copies of the p53 gene. Explain why that might protect them, and what the downside could be." },

/* ---------------- 10th grade · Chemistry (set 2) ---------------- */
{ id: "s10-tire", grade: 10, subject: "Science", course: "Chemistry", unit: "Gas Laws", std: "HS-PS3-2 · HS-PS1-3 · Gas laws", spice: 3,
  title: "The Tire Pressure Trap",
  teaser: "A tire gauge reads 32 psi on a cool morning. What does it read after a long hot drive? Two traps are waiting.",
  ask: "If a tire reads 32 psi at 20 °C, what will the gauge read at 50 °C, and why do I need absolute pressure and Kelvin?",
  prompt: `<p>A tire gauge reads <b>32.0 psi</b> on a cool morning when the air in the tire is <b>20 °C</b>. After a long drive on a hot freeway, the air in the tire reaches <b>50 °C</b>. Assume the tire’s volume stays the same.</p>
    <p>Important: a tire gauge shows <b>gauge pressure</b>, which is the pressure <b>above</b> the atmosphere. Atmospheric pressure is <b>14.7 psi</b>. Gas laws need <b>absolute</b> pressure (gauge + 14.7).</p>
    <p><b>(a)</b> Find the new <b>gauge</b> reading. Round to the nearest tenth.</p>
    <p><b>(b)</b> A student solves it as 32.0 × (50 ÷ 20) = 80 psi. Explain both mistakes.</p>
    <p><b>(c)</b> Explain at the molecular level why the pressure increases.</p>`,
  why: "There are two hidden traps: Celsius vs. Kelvin, and gauge vs. absolute pressure. Most people fall into at least one.",
  answer: { type: "num", value: 36.8, tol: 0.2, near: 1.5, prompt: "Part (a): new gauge pressure", unit: "psi" },
  hints: ["Convert temperatures to Kelvin: K = °C + 273.15.",
    "Convert to absolute pressure: 32.0 + 14.7 = 46.7 psi.",
    "Gay-Lussac’s law: P₁/T₁ = P₂/T₂. Find P₂ (absolute), then subtract 14.7 to get the gauge reading."],
  solution: `<p><b>(a)</b> T₁ = 293.15 K, T₂ = 323.15 K. P₁ (absolute) = 32.0 + 14.7 = 46.7 psi.<br>
    P₂ = 46.7 × (323.15 ÷ 293.15) ≈ 51.5 psi absolute. Gauge = 51.5 − 14.7 ≈ <b>36.8 psi</b>.</p>
    <p><b>(b)</b> Mistake 1: Using <b>Celsius</b>. 50 °C is not “2.5 times as hot” as 20 °C; gas laws require Kelvin, which starts at absolute zero. Mistake 2: Using <b>gauge</b> pressure. The gas laws describe the total pressure of the gas, so you must add atmospheric pressure first.</p>
    <p><b>(c)</b> Higher temperature means the air molecules have more kinetic energy. They move faster and hit the tire walls more often and with more force, so the pressure rises.</p>`,
  deeper: "Car manuals say to check tire pressure “cold,” before driving. Explain why, and predict what would happen if you let air out of hot tires to bring them back to 32 psi." },

{ id: "s10-ionization", grade: 10, subject: "Science", course: "Chemistry", unit: "Periodic Trends", std: "HS-PS1-1 · HS-PS1-2", spice: 3,
  title: "The Mystery Element’s Big Jump",
  teaser: "An element’s ionization energies jump hugely after the third electron. Use the jump to identify its group and explain why.",
  ask: "How can successive ionization energies reveal which group a mystery element is in?",
  prompt: `<p><b>Ionization energy</b> is the energy needed to remove an electron from an atom. Here are the first four ionization energies of a mystery element in period 3:</p>
    <table><tr><th>Electron removed</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
    <tr><td>Energy (kJ/mol)</td><td>578</td><td>1,817</td><td>2,745</td><td>11,577</td></tr></table>
    <p><b>(a)</b> Where is the biggest jump? What does it tell you about how many <b>valence electrons</b> the element has?</p>
    <p><b>(b)</b> Identify the <b>group</b> and the <b>element</b>.</p>
    <p><b>(c)</b> Explain why removing the 4th electron takes so much more energy. Use the words <b>core electrons</b>, <b>energy level</b>, and <b>nuclear attraction</b>. Then predict the charge of this element’s most common ion.</p>`,
  why: "You have to read a data pattern, connect it to electron configuration, and explain the jump using atomic structure instead of memorized rules.",
  answer: { type: "mc", prompt: "Part (b): Which element is it?", opts: ["Sodium (Na), group 1", "Magnesium (Mg), group 2", "Aluminum (Al), group 13", "Silicon (Si), group 14"], a: 2,
    why: { 0: "❌ Sodium’s big jump would come after the 1st electron.", 1: "❌ Magnesium’s big jump would come after the 2nd electron.", 3: "❌ Silicon’s big jump would come after the 4th electron." } },
  hints: ["Compare each energy to the one before it. From 2,745 to 11,577 is about 4 times bigger. The others grow less.",
    "If the big jump comes after removing 3 electrons, the first 3 were valence electrons. Which period 3 group has 3 valence electrons?",
    "After 3 electrons are gone, the next electron comes from a lower energy level (n = 2), closer to the nucleus and less shielded."],
  solution: `<p><b>(a)</b> The biggest jump is from the 3rd (2,745) to the 4th (11,577), about four times larger. So the element has <b>3 valence electrons</b>.</p>
    <p><b>(b)</b> Period 3, 3 valence electrons → <b>group 13: aluminum (Al)</b>. Configuration: 1s² 2s² 2p⁶ 3s² 3p¹.</p>
    <p><b>(c)</b> The first three electrons come from energy level 3. After they are removed, the next electron is a <b>core electron</b> in <b>energy level 2</b>, much closer to the nucleus and less shielded, so it feels a much stronger <b>nuclear attraction</b>. Breaking into a stable, filled inner shell takes a huge amount of energy. That’s why aluminum forms <b>Al³⁺</b> ions.</p>`,
  deeper: "Each ionization energy is larger than the one before it, even before the big jump. Explain why removing the 2nd electron is harder than the 1st, even from the same energy level." },

/* ---------------- 11th grade · Physics (set 2) ---------------- */
{ id: "s11-circuit", grade: 11, subject: "Science", course: "Physics", unit: "Electric Circuits", std: "HS-PS3-1 · HS-PS3-2", spice: 3,
  title: "Which Bulb Is Brightest?",
  teaser: "One bulb in series, two in parallel. Predict the brightest bulb, then prove it with Ohm’s law and power.",
  ask: "In a circuit with a 4 Ω bulb in series with 6 Ω and 3 Ω bulbs in parallel, which bulb is brightest and what is the total current?",
  prompt: `<p>A <b>12 V</b> battery is connected to three light bulbs (treat them as resistors). Bulb A (<b>4 Ω</b>) is in series with a parallel pair: Bulb B (<b>6 Ω</b>) and Bulb C (<b>3 Ω</b>).</p>
    <div class="fig"><svg viewBox="0 0 320 170" width="320" role="img" aria-label="Circuit: battery, bulb A in series, then bulbs B and C in parallel">
      <path d="M30 80 V40 H140 M180 40 H230 V60 M230 120 V150 H30 V100" fill="none" stroke="#333" stroke-width="2"/>
      <path d="M230 60 H200 V120 H230 M230 60 H260 V120 H230" fill="none" stroke="#333" stroke-width="2"/>
      <rect x="140" y="30" width="40" height="20" fill="#fff6c2" stroke="#333"/><text x="160" y="44" text-anchor="middle" font-size="12">A 4Ω</text>
      <rect x="185" y="78" width="30" height="24" fill="#fff6c2" stroke="#333"/><text x="200" y="94" text-anchor="middle" font-size="11">B 6Ω</text>
      <rect x="245" y="78" width="30" height="24" fill="#fff6c2" stroke="#333"/><text x="260" y="94" text-anchor="middle" font-size="11">C 3Ω</text>
      <line x1="30" y1="80" x2="30" y2="85" stroke="#333" stroke-width="2"/><line x1="18" y1="85" x2="42" y2="85" stroke="#333" stroke-width="3"/><line x1="24" y1="95" x2="36" y2="95" stroke="#333" stroke-width="3"/><line x1="30" y1="95" x2="30" y2="100" stroke="#333" stroke-width="2"/>
      <text x="44" y="94" font-size="12">12 V</text></svg></div>
    <p><b>(a)</b> Find the <b>total resistance</b> and the <b>total current</b>.</p>
    <p><b>(b)</b> Find the current through and the power used by each bulb.</p>
    <p><b>(c)</b> Which bulb is brightest? Many students guess B because it has the biggest resistance. Explain why that guess is wrong.</p>`,
  why: "You have to combine series and parallel rules, track voltage and current through each part, and use power (not resistance) to judge brightness.",
  answer: { type: "num", value: 2, tol: 0.01, prompt: "Part (a): total current", unit: "amps" },
  hints: ["B and C in parallel: 1/R = 1/6 + 1/3. Then add A in series.",
    "Total current = 12 V ÷ total resistance. All of it goes through A. Find the voltage across A, then what’s left for B and C.",
    "Brightness depends on power: P = I²R or P = V²/R. Compute it for each bulb."],
  solution: `<p><b>(a)</b> Parallel: 1/R = 1/6 + 1/3 = 1/2 → R = 2 Ω. Total = 4 + 2 = <b>6 Ω</b>. Current = 12 ÷ 6 = <b>2 A</b>.</p>
    <p><b>(b)</b> Bulb A: I = 2 A, V = 2 × 4 = 8 V, P = 2² × 4 = <b>16 W</b>.<br>
    Voltage left for the parallel pair: 12 − 8 = 4 V.<br>
    Bulb B: I = 4 ÷ 6 ≈ 0.67 A, P = 4² ÷ 6 ≈ <b>2.7 W</b>. Bulb C: I = 4 ÷ 3 ≈ 1.33 A, P = 4² ÷ 3 ≈ <b>5.3 W</b>. (Check: 0.67 + 1.33 = 2 A ✅; total power 16 + 2.7 + 5.3 = 24 W = 12 V × 2 A ✅)</p>
    <p><b>(c)</b> <b>Bulb A</b> is brightest (16 W) because all the current flows through it. Brightness depends on power, not resistance alone. Among B and C, which share the same voltage, the <b>lower</b> resistance bulb (C) draws more current and is brighter.</p>`,
  deeper: "Bulb C burns out (becomes an open circuit). Predict what happens to the brightness of A and B, then calculate to check. Why do homes wire outlets in parallel instead of series?" },

{ id: "s11-collision", grade: 11, subject: "Science", course: "Physics", unit: "Momentum & Collisions", std: "HS-PS2-2 · HS-PS2-3", spice: 2,
  title: "The Crash Investigation",
  teaser: "A moving car hits a stopped car and they lock together. Find their speed, and discover where the “missing” energy went.",
  ask: "If a 1,500 kg car moving 20 m/s hits a stopped 1,000 kg car and they stick together, how fast do they move and how much energy is lost?",
  prompt: `<p>A <b>1,500 kg</b> car traveling <b>20 m/s</b> rear-ends a <b>1,000 kg</b> car stopped at a red light. The cars lock together and slide forward. Ignore friction during the very short collision.</p>
    <p><b>(a)</b> What is the speed of the two cars just after the collision?</p>
    <p><b>(b)</b> Calculate the kinetic energy before and after. What percent of the kinetic energy was “lost”?</p>
    <p><b>(c)</b> Momentum was conserved but kinetic energy was not. Explain where the energy went, and how crumple zones use this idea to protect passengers.</p>`,
  why: "Many students expect both momentum and kinetic energy to be conserved. You have to know which law applies and explain the difference.",
  answer: { type: "num", value: 12, tol: 0.01, prompt: "Part (a): speed after the collision", unit: "m/s" },
  hints: ["Momentum before = momentum after. The stopped car has 0 momentum.",
    "(1500)(20) = (1500 + 1000)v.",
    "KE = ½mv². Compare before and after. Lost energy doesn’t disappear; what forms does it turn into?"],
  solution: `<p><b>(a)</b> (1500)(20) + (1000)(0) = (2500)v → 30,000 = 2500v → <b>v = 12 m/s</b>.</p>
    <p><b>(b)</b> Before: ½(1500)(20²) = 300,000 J. After: ½(2500)(12²) = 180,000 J. Lost = 120,000 J = <b>40%</b>.</p>
    <p><b>(c)</b> Momentum is always conserved in a collision with no outside forces, but kinetic energy can change form. The “lost” 120,000 J became <b>heat, sound, and the work of bending metal</b>. Crumple zones are designed to deform, absorbing energy and making the collision last longer, which reduces the force on passengers (F = Δp/Δt).</p>`,
  deeper: "Investigators measure the skid marks after a crash to estimate speeds. Explain how they could use the slide distance after the collision, plus momentum, to estimate how fast the first car was going." },

/* ---------------- 12th grade · Anatomy & Physiology / Earth & Environmental (set 2) ---------------- */
{ id: "s12-pufferfish", grade: 12, subject: "Science", course: "Anatomy & Physiology", unit: "Nervous System", std: "HS-LS1-2 · HS-LS1-3", spice: 3,
  title: "The Pufferfish Toxin",
  teaser: "A toxin in pufferfish blocks one type of channel on nerve cells, and the body stops moving. Explain why, step by step.",
  ask: "How does tetrodotoxin, which blocks sodium channels, cause paralysis?",
  prompt: `<p>Some pufferfish contain <b>tetrodotoxin (TTX)</b>, one of the most powerful toxins known. Chefs must be specially licensed to prepare pufferfish (fugu) in Japan. TTX works by <b>blocking voltage-gated sodium (Na⁺) channels</b> on neurons.</p>
    <p>Normally, a nerve signal (an <b>action potential</b>) travels like this: a stimulus opens Na⁺ channels → Na⁺ rushes <b>into</b> the neuron (depolarization) → K⁺ channels open and K⁺ flows <b>out</b> (repolarization) → the signal moves down the axon to the next cell.</p>
    <p><b>Your challenge:</b> (1) Explain why blocking Na⁺ channels stops action potentials. (2) Explain why this leads to <b>paralysis</b> and why poisoning can become life-threatening (think about breathing). (3) Doctors use a related idea on purpose: <b>local anesthetics</b> like lidocaine also block Na⁺ channels. Explain why a dentist’s shot numbs only your mouth.</p>`,
  why: "You have to connect a molecular event (a blocked channel) to the behavior of a whole organism, and recognize the same mechanism in a helpful medicine.",
  answer: { type: "mc", prompt: "First: Why does blocking Na⁺ channels stop the nerve signal?",
    opts: ["Na⁺ can’t rush into the neuron, so it can’t depolarize, and no action potential can start or travel.",
      "The neuron fills up with too much sodium and bursts.",
      "Potassium can no longer leave the cell.",
      "The neuron produces too many neurotransmitters."], a: 0,
    why: { 1: "❌ The channels are blocked, so sodium CAN’T get in.", 2: "❌ TTX targets sodium channels, not potassium channels.", 3: "❌ Without an action potential, the signal never reaches the end of the axon to release neurotransmitters." } },
  hints: ["What is the very first step of an action potential? Which ion is involved?",
    "Muscles only contract when motor neurons send them signals. Which muscle do you need to breathe?",
    "A shot puts the drug in one small area. Which nerves are affected, and which are not?"],
  solution: `<p><b>(1)</b> An action potential begins when voltage-gated Na⁺ channels open and Na⁺ rushes into the neuron, depolarizing it. With the channels blocked, <b>no depolarization</b> can occur, so no action potential can start or travel along the axon.</p>
    <p><b>(2)</b> Motor neurons can no longer send signals to muscles, so muscles can’t contract: <b>paralysis</b>, often starting with numbness and weakness. If the nerves that control the <b>diaphragm</b> are affected, the person can’t breathe. There is no common antidote; patients may need a ventilator until the toxin clears.</p>
    <p><b>(3)</b> Lidocaine also blocks Na⁺ channels, but it is injected into one small area. It only blocks the <b>sensory neurons</b> there, so pain signals from your mouth can’t reach your brain. Nerves elsewhere work normally, and the effect wears off as the drug is carried away.</p>`,
  deeper: "Pufferfish have Na⁺ channels too. Why don’t they poison themselves? Propose a hypothesis based on protein structure and how it could evolve." },

{ id: "s12-earthquake", grade: 12, subject: "Science", course: "Earth & Environmental Science", unit: "Earthquakes & Earth’s Interior", std: "HS-ESS2-3 · HS-ESS2-1 · HS-ESS3-1", spice: 3,
  title: "How Far Away Was the Earthquake?",
  teaser: "P-waves arrive first, S-waves arrive 40 seconds later. Use the delay to find the distance to the epicenter.",
  ask: "If the S-wave arrives 40 seconds after the P-wave, how far away was the earthquake?",
  prompt: `<p>An earthquake sends out two main types of body waves:</p>
    <ul><li><b>P-waves</b> (primary) are compression waves and travel about <b>6.0 km/s</b> in the crust.</li>
    <li><b>S-waves</b> (secondary) are shear waves and travel about <b>3.5 km/s</b>.</li></ul>
    <p>A seismograph station in the Central Valley records the P-wave, then the S-wave arrives <b>40 seconds later</b>.</p>
    <p><b>(a)</b> How far away was the earthquake (to the nearest kilometer)?</p>
    <p><b>(b)</b> One station gives you a distance but not a direction. How many stations are needed to locate the epicenter, and why?</p>
    <p><b>(c)</b> S-waves cannot travel through liquid. Scientists noticed a large “S-wave shadow zone” on the far side of Earth from big earthquakes. What did this reveal about Earth’s interior?</p>`,
  why: "You don’t know the distance OR the travel times, only their difference. You have to set up an equation with one unknown, then connect wave behavior to the structure of the planet.",
  answer: { type: "num", value: 336, tol: 3, near: 20, prompt: "Part (a): distance to the earthquake", unit: "km" },
  hints: ["Time = distance ÷ speed. Write the travel time of each wave in terms of the distance d.",
    "The difference in arrival times is 40 s: d/3.5 − d/6.0 = 40.",
    "Find a common denominator, or compute 1/3.5 − 1/6.0 ≈ 0.119. Then d = 40 ÷ 0.119."],
  solution: `<p><b>(a)</b> d/3.5 − d/6.0 = 40 → d(0.2857 − 0.1667) = 40 → d(0.1190) = 40 → <b>d ≈ 336 km</b>.</p>
    <p><b>(b)</b> One station gives a <b>circle</b> of possible locations (all points 336 km away). Two circles cross at two points. A third station’s circle picks out <b>one</b> point: this is <b>triangulation</b>, so at least <b>3 stations</b> are needed.</p>
    <p><b>(c)</b> Because S-waves can’t travel through liquid and disappear on the far side of Earth, scientists concluded that Earth has a <b>liquid outer core</b>. The way P-waves bend and speed up also revealed a solid inner core.</p>`,
  deeper: "Earthquake early-warning systems in California (like ShakeAlert) detect P-waves and send alerts before the S-waves arrive. If you are 336 km from the epicenter, how many seconds of warning could you get? What could people do with that time?" }
);
