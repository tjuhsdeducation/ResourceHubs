/* =====================================================================
   SCIENCE CHALLENGE PROBLEMS (shown on challenge.html)
   Same format as ch-math.js (see the notes at the top of that file).
   Standards: NGSS / CA NGSS high school performance expectations.
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · Biology ---------------- */
{ id: "s9-colorblind", grade: 9, subject: "Science", course: "Biology", std: "HS-LS3-1 · HS-LS3-3", spice: 2,
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

{ id: "s9-hawks", grade: 9, subject: "Science", course: "Biology", std: "HS-LS2-4 · HS-LS2-3", spice: 2,
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
{ id: "s10-limiting", grade: 10, subject: "Science", course: "Chemistry", std: "HS-PS1-7 · HS-PS1-2", spice: 3,
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

{ id: "s10-syringe", grade: 10, subject: "Science", course: "Chemistry", std: "HS-PS1-6 · HS-PS1-5", spice: 3,
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
{ id: "s11-table", grade: 11, subject: "Science", course: "Physics", std: "HS-PS2-1", spice: 2,
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

{ id: "s11-loop", grade: 11, subject: "Science", course: "Physics", std: "HS-PS3-1 · HS-PS2-1", spice: 3,
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
{ id: "s12-hyponatremia", grade: 12, subject: "Science", course: "Anatomy & Physiology", std: "HS-LS1-3 · HS-LS1-2", spice: 3,
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

{ id: "s12-keeling", grade: 12, subject: "Science", course: "Earth & Environmental Science", std: "HS-ESS2-6 · HS-ESS3-6", spice: 3,
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
