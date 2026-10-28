/* =====================================================================
   ✏️ TUTOR GUIDE: AP PHYSICS 1 (shown on tutor-math.html, tutors only)
   Follows the 8 units of the College Board AP Physics 1 course.
   Same format as the other tutor files (see the top of tutor-alg1.js).
   g = 9.8 m/s² (the value on the AP equation sheet).
   Visuals marked "PHV_..." are drawn at the bottom of this file.
   ===================================================================== */
(window.TUTOR_UNITS = window.TUTOR_UNITS || []).push(

/* ---------------- UNIT 1 ---------------- */
{ id: "p1-01", course: "AP Physics 1", unit: 1, title: "Kinematics: Motion in 1 and 2 Dimensions", standards: "AP Physics 1 Unit 1",
  bigIdea: "Kinematics describes motion without asking why it happens. Position, velocity, and acceleration are connected: velocity is how fast position changes, and acceleration is how fast velocity changes. On graphs, slope and area tell the whole story. In projectile motion, horizontal and vertical motion are completely separate except that they share the same time.",
  tips: "Have the student make a <b>“knowns” list</b> before picking an equation: write v₀, v, a, t, Δx, put a ? next to the unknown, and pick the kinematic equation that uses exactly those. Remind them that AP gives an equation sheet, so the skill is choosing the equation, not memorizing it. Ask them to pick a positive direction and stick with it, since a wrong sign is the most common error.",
  vocab: [
    ["displacement (Δx)", "Change in position, with direction. Walking 3 m east then 3 m west = 0 m displacement (but 6 m distance)."],
    ["velocity (v)", "Rate of change of position, with direction (m/s). Slope of a position–time graph."],
    ["acceleration (a)", "Rate of change of velocity (m/s²). Slope of a velocity–time graph. Can be negative."],
    ["free fall", "Motion with only gravity acting: a = −9.8 m/s² (down), no matter the mass."],
    ["kinematic equations", "v = v₀ + at · Δx = v₀t + ½at² · v² = v₀² + 2aΔx (only for CONSTANT acceleration)."],
    ["area under a v–t graph", "Equals the displacement during that time."],
    ["projectile", "An object moving under gravity only. Horizontal: a = 0 (constant velocity). Vertical: a = −9.8 m/s²."],
    ["reference frame", "The point of view used to measure motion. Velocities can be different in different frames."]
  ],
  steps: [
    { name: "Solving a constant-acceleration problem", list: ["Draw a sketch and choose a positive direction.", "List the knowns: v₀, v, a, t, Δx. Mark the unknown with ?.", "Pick the equation that has the unknown and only known quantities.", "Solve with units. Check the sign and size (does the answer make sense?)."] },
    { name: "Projectile launched horizontally", list: ["Split into x and y columns.", "y column: v₀y = 0, a = −9.8 m/s², Δy = −height. Solve for time t.", "x column: a = 0, so Δx = vₓ · t, using the same t.", "Time is the only thing the two columns share."] },
    { name: "Reading motion graphs", list: ["Position–time: slope = velocity. Curved line = changing velocity.", "Velocity–time: slope = acceleration, area = displacement.", "Acceleration–time: area = change in velocity."] }
  ],
  examples: [
    { q: "A car speeds up from 5.0 m/s to 25 m/s in 4.0 s. Find its acceleration and how far it travels.", steps: ["Knowns: v₀ = 5.0 m/s, v = 25 m/s, t = 4.0 s. Unknowns: a and Δx.", "a = (v − v₀)/t = (25 − 5.0)/4.0 = 5.0 m/s².", "Distance: Δx = (v₀ + v)/2 · t = (5.0 + 25)/2 · 4.0 = 60 m.", "Check with Δx = v₀t + ½at² = 20 + 40 = 60 m ✓"], answer: "a = 5.0 m/s², Δx = 60 m" },
    { q: "A ball is dropped from rest from 20 m. How long does it fall, and how fast is it going just before it hits?", steps: ["Up is positive: v₀ = 0, a = −9.8 m/s², Δy = −20 m.", "Δy = ½at² → −20 = ½(−9.8)t² → t² = 4.08 → t = 2.0 s.", "v = v₀ + at = 0 + (−9.8)(2.02) = −19.8 m/s (the negative means downward).", "Check: v² = 2(9.8)(20) = 392 → v = 19.8 m/s ✓"], answer: "t ≈ 2.0 s, speed ≈ 20 m/s downward" },
    { q: "A ball rolls off a 1.25 m high table at 3.0 m/s. How far from the table does it land?", steps: ["Vertical: v₀y = 0, a = −9.8, Δy = −1.25 m. −1.25 = ½(−9.8)t² → t = 0.505 s.", "Horizontal: vₓ = 3.0 m/s stays constant (no horizontal force).", "Δx = vₓt = 3.0 × 0.505 = 1.5 m."], answer: "About 1.5 m from the table" },
    { q: "A v–t graph goes from 0 to 10 m/s in 5 s (a straight line), then stays at 10 m/s for 3 more seconds. Find the acceleration in the first part and the total displacement.", steps: ["Slope of the first part: (10 − 0)/5 = 2 m/s².", "Area of the triangle (0–5 s): ½ × 5 × 10 = 25 m.", "Area of the rectangle (5–8 s): 3 × 10 = 30 m.", "Total area = 55 m."], answer: "a = 2 m/s²; displacement = 55 m" }
  ],
  mistakes: [
    ["Uses g = +9.8 when up is positive.", "“Which way does gravity pull? If up is positive, what sign does that give the acceleration?”"],
    ["Thinks the velocity at the top of a throw is zero AND the acceleration is zero.", "“At the top, the velocity is zero for an instant. Is gravity turned off there?”"],
    ["Uses the horizontal velocity in the vertical equations.", "“Keep two columns. Does the horizontal speed change how fast it falls?”"],
    ["Reads the y-value of a v–t graph as the distance.", "“On a velocity graph, which part tells displacement, the height or the area?”"],
    ["Uses kinematic equations when the acceleration is changing.", "“These equations only work for constant acceleration. Is that true here?”"]
  ],
  ask: ["Which direction did you call positive?", "What are your knowns? What’s the unknown?", "Which equation has only those quantities?", "In projectile problems, what do the x and y directions share?", "What does the slope (or area) of this graph mean?"],
  check: [
    { q: "A cart goes from 12 m/s to 0 in 3.0 s. Acceleration?", a: "−4.0 m/s²" },
    { q: "Two balls are released at the same height: one dropped, one launched horizontally. Which lands first?", a: "Same time (vertical motion is the same)." },
    { q: "What is the slope of a position–time graph?", a: "Velocity" }
  ],
  visual: "PHV_VT" },

/* ---------------- UNIT 2 ---------------- */
{ id: "p1-02", course: "AP Physics 1", unit: 2, title: "Force & Translational Dynamics (Newton’s Laws, Friction, Circular Motion, Gravity)", standards: "AP Physics 1 Unit 2",
  bigIdea: "Forces cause acceleration. Newton’s second law, ΣF = ma, is the key to the whole unit: add up all the forces on ONE object (with directions), and that net force equals mass times acceleration. The free-body diagram is the most important tool. In circular motion, the net force points toward the center.",
  tips: "<b>Free-body diagram first, every time.</b> Ask the student to draw a dot for the object and an arrow for each force, labeled by what causes it (gravity from Earth, normal from the floor, tension from the rope). Then write ΣF = ma separately for each direction. If they can’t name what is pushing or pulling, that force doesn’t exist. (“Force of motion” isn’t a force!)",
  vocab: [
    ["force", "A push or pull from an interaction between two objects, in newtons (N)."],
    ["Newton’s 1st law", "An object keeps its velocity (stays at rest or moves straight at constant speed) unless a net force acts."],
    ["Newton’s 2nd law", "ΣF = ma. The net force and acceleration point the same direction."],
    ["Newton’s 3rd law", "Forces come in pairs: if A pushes B, B pushes A equally hard in the opposite direction. The pair acts on DIFFERENT objects."],
    ["weight (F<sub>g</sub>)", "The gravitational force: F<sub>g</sub> = mg, pointing down."],
    ["normal force (F<sub>N</sub>)", "A surface pushing perpendicular to itself. Not always equal to mg."],
    ["friction", "Static: f<sub>s</sub> ≤ μ<sub>s</sub>F<sub>N</sub> (not sliding). Kinetic: f<sub>k</sub> = μ<sub>k</sub>F<sub>N</sub> (sliding). Opposes sliding."],
    ["centripetal acceleration", "a<sub>c</sub> = v²/r toward the center for circular motion. The net force toward the center is F = mv²/r."],
    ["universal gravitation", "F = Gm₁m₂/r². Doubling the distance makes the force 1/4."]
  ],
  steps: [
    { name: "Solving a Newton’s 2nd law problem", list: ["Draw the free-body diagram for ONE object.", "Choose axes (on inclines, tilt them: along the slope and perpendicular).", "Break angled forces into components (sin/cos).", "Write ΣFₓ = maₓ and ΣF<sub>y</sub> = ma<sub>y</sub>.", "Solve. If the object doesn’t accelerate in a direction, that ΣF = 0."] },
    { name: "Connected objects (rope, pulley, touching blocks)", list: ["Treat the whole system as one object to find the acceleration: ΣF<sub>external</sub> = (m₁ + m₂)a.", "Then use a free-body diagram for ONE block to find the tension or contact force."] },
    { name: "Circular motion", list: ["Draw the free-body diagram at the moment in question.", "Point the positive direction toward the center.", "ΣF<sub>toward center</sub> = mv²/r.", "Name which real force (tension, normal, gravity, friction) is doing the centripetal job."] }
  ],
  examples: [
    { q: "A 10 kg box is pulled across the floor by a 50 N horizontal force. Friction is 20 N. Find the acceleration.", steps: ["Horizontal forces: 50 N forward, 20 N backward.", "ΣF = 50 − 20 = 30 N.", "a = ΣF/m = 30/10 = 3.0 m/s² forward."], answer: "3.0 m/s²" },
    { q: "A block slides down a frictionless 30° ramp. Find its acceleration.", steps: ["Forces: gravity (mg down) and normal force (perpendicular to the ramp).", "Tilt the axes. The part of gravity along the ramp is mg sin 30°.", "ma = mg sin 30° → a = g sin 30° = 9.8 × 0.5.", "Mass cancels."], answer: "4.9 m/s² down the ramp" },
    { q: "A 3.0 kg block on a frictionless table is connected over a pulley to a hanging 2.0 kg block. Find the acceleration and the tension.", steps: ["System: the only external force that makes it go is the hanging weight: (2.0)(9.8) = 19.6 N.", "Total mass = 5.0 kg. a = 19.6/5.0 = 3.92 m/s².", "Tension: look at the 3.0 kg block alone. Only the tension pulls it: T = ma = 3.0 × 3.92 = 11.8 N.", "Check with the hanging block: mg − T = ma → 19.6 − 11.8 = 7.8 = 2.0 × 3.92 ✓"], answer: "a ≈ 3.9 m/s², T ≈ 12 N" },
    { q: "A 60 kg person stands on a scale in an elevator accelerating upward at 2.0 m/s². What does the scale read?", steps: ["Forces: normal (scale) up, weight down. Up is positive.", "F<sub>N</sub> − mg = ma → F<sub>N</sub> = m(g + a).", "F<sub>N</sub> = 60(9.8 + 2.0) = 708 N.", "The scale reads more than the person’s weight (588 N)."], answer: "≈ 710 N" },
    { q: "A 0.50 kg ball on a 0.80 m string moves in a horizontal circle at 4.0 m/s. Find the tension (ignore gravity’s small effect).", steps: ["Tension is the force toward the center.", "T = mv²/r = 0.50 × 4.0² / 0.80.", "= 0.50 × 16 / 0.80 = 10 N."], answer: "10 N" }
  ],
  mistakes: [
    ["Draws a “force of motion” in the direction the object moves.", "“What object is touching it and pushing that way? If nothing is, there’s no force.”"],
    ["Always sets the normal force equal to mg.", "“Is anything else pushing up or down, or is it accelerating vertically? Then F<sub>N</sub> isn’t just mg.”"],
    ["Says Newton’s 3rd law pairs cancel out.", "“Which object does each force act on? Forces on different objects can’t cancel.”"],
    ["Draws an extra ‘centripetal force’ arrow.", "“Centripetal is a job, not a new force. Which real force points to the center?”"],
    ["Uses mg cos θ for the force down the ramp.", "“Check the extreme: at 0°, is there any force down the ramp? Which trig function gives 0 at 0°?”"]
  ],
  ask: ["What objects are touching this object? What forces do they exert?", "Which direction is the acceleration? So which way is the net force?", "Are you looking at one object or the whole system?", "For the ramp, what is the part of gravity along the slope?", "Which real force is pointing toward the center of the circle?"],
  check: [
    { q: "Net force on a car driving at constant velocity?", a: "Zero (Newton’s 1st law)" },
    { q: "Distance between two masses doubles. What happens to the gravitational force?", a: "It becomes 1/4 as large." },
    { q: "Friction if F<sub>N</sub> = 40 N and μ<sub>k</sub> = 0.25?", a: "10 N" }
  ],
  visual: "PHV_FBD" },

/* ---------------- UNIT 3 ---------------- */
{ id: "p1-03", course: "AP Physics 1", unit: 3, title: "Work, Energy & Power", standards: "AP Physics 1 Unit 3",
  bigIdea: "Energy is a way of keeping score. In a closed system with no friction, the total mechanical energy stays the same: kinetic energy (motion) and potential energy (height or spring stretch) just trade back and forth. Work is how energy gets into or out of a system: a force pushing along the direction of motion adds energy, and friction takes it out as thermal energy.",
  tips: "Teach the <b>energy bar chart</b> (LOL diagram): draw bars for the energy at the start, any work in or out, and the energy at the end. The bars on each side have to add up. Students who draw the bars almost always write the right equation. Energy is a scalar, so there are no directions to worry about. That’s why energy methods are often easier than forces.",
  vocab: [
    ["work (W)", "W = Fd cos θ. Energy transferred by a force over a distance. Only the part of the force along the motion does work."],
    ["kinetic energy (K)", "K = ½mv². Energy of motion."],
    ["gravitational potential energy (U<sub>g</sub>)", "U<sub>g</sub> = mgh, measured from a chosen zero height."],
    ["spring potential energy (U<sub>s</sub>)", "U<sub>s</sub> = ½kx², where x is the stretch or compression."],
    ["Hooke’s law", "F<sub>s</sub> = −kx. The spring force is proportional to the stretch and points back toward equilibrium."],
    ["work–energy theorem", "W<sub>net</sub> = ΔK. The net work on an object equals its change in kinetic energy."],
    ["conservation of energy", "E<sub>initial</sub> + W<sub>external</sub> = E<sub>final</sub>. With no outside work or friction, K + U stays constant."],
    ["power (P)", "P = W/t = ΔE/t, in watts (J/s). Also P = Fv."]
  ],
  steps: [
    { name: "Energy conservation problems", list: ["Pick the system and a zero height.", "Draw a bar chart: energy at the start, work done by outside forces or friction, energy at the end.", "Write: K<sub>i</sub> + U<sub>i</sub> + W = K<sub>f</sub> + U<sub>f</sub> (+ thermal energy if there’s friction).", "Plug in formulas, cancel the mass if it appears in every term, and solve."] },
    { name: "Calculating work", list: ["Find the force and the displacement.", "Find the angle between them.", "W = Fd cos θ. Same direction → positive. Opposite (like friction) → negative. Perpendicular (like the normal force on a floor) → zero."] }
  ],
  examples: [
    { q: "A 40 N force pulls a box 5.0 m. Find the work if the force is (a) horizontal, (b) at 60° above horizontal.", steps: ["(a) θ = 0°: W = 40 × 5.0 × cos 0° = 200 J.", "(b) θ = 60°: W = 40 × 5.0 × cos 60° = 200 × 0.5 = 100 J.", "Only the horizontal part of the force does work."], answer: "(a) 200 J, (b) 100 J" },
    { q: "A roller coaster starts from rest at the top of a 20 m hill (no friction). How fast is it going at the bottom?", steps: ["Start: all U<sub>g</sub>. End: all K.", "mgh = ½mv². Mass cancels.", "v = √(2gh) = √(2 × 9.8 × 20) = √392."], answer: "≈ 19.8 m/s" },
    { q: "A spring (k = 200 N/m) is compressed 0.10 m and launches a 0.50 kg block on a frictionless floor. How fast does the block go?", steps: ["Start: spring energy ½kx² = ½(200)(0.10)² = 1.0 J.", "End: all kinetic energy, ½mv² = 1.0 J.", "v² = 2(1.0)/0.50 = 4.0 → v = 2.0 m/s."], answer: "2.0 m/s" },
    { q: "A 2.0 kg box slides down a 5.0 m tall ramp from rest and reaches the bottom at 8.0 m/s. How much energy did friction remove?", steps: ["Start: U<sub>g</sub> = mgh = 2.0 × 9.8 × 5.0 = 98 J.", "End: K = ½(2.0)(8.0)² = 64 J.", "Missing energy = 98 − 64 = 34 J, turned into thermal energy by friction."], answer: "34 J" },
    { q: "A motor lifts a 600 N load 3.0 m in 2.0 s. What is its power?", steps: ["Work = Fd = 600 × 3.0 = 1800 J.", "P = W/t = 1800/2.0."], answer: "900 W" }
  ],
  mistakes: [
    ["Says the normal force does work on a box sliding across a floor.", "“What’s the angle between the normal force and the motion? What is cos 90°?”"],
    ["Uses v instead of v² in kinetic energy.", "“Kinetic energy is ½mv². What happens when speed doubles? Energy goes up 4 times.”"],
    ["Uses the length of the ramp for h.", "“Gravity only cares about the vertical height change.”"],
    ["Uses the spring’s total length for x.", "“x is how far it’s stretched or squished from its natural length.”"],
    ["Forgets friction’s thermal energy.", "“If there’s friction, where does the missing energy go?”"]
  ],
  ask: ["What forms of energy are there at the start? At the end?", "Is any outside force doing work? Is there friction?", "Where did you set h = 0?", "Does the mass cancel?", "Can you sketch the bar chart?"],
  check: [
    { q: "Speed doubles. Kinetic energy?", a: "×4" },
    { q: "Work done by gravity on a satellite in a circular orbit?", a: "Zero (force ⟂ motion)" },
    { q: "Power to do 500 J of work in 10 s?", a: "50 W" }
  ],
  visual: "PHV_BARS" },

/* ---------------- UNIT 4 ---------------- */
{ id: "p1-04", course: "AP Physics 1", unit: 4, title: "Linear Momentum: Impulse & Collisions", standards: "AP Physics 1 Unit 4",
  bigIdea: "Momentum (p = mv) is “mass in motion,” and it has a direction. A force acting over time (impulse) changes momentum. When objects collide or push apart, the total momentum of the system stays the same, as long as no outside net force acts. Kinetic energy is only conserved in elastic collisions.",
  tips: "Have the student draw a <b>before</b> and <b>after</b> picture with an arrow and a velocity for each object. Choose a positive direction and give left-moving velocities a negative sign. “Total momentum before = total momentum after” almost always gets them started.",
  vocab: [
    ["momentum (p)", "p = mv, in kg·m/s. A vector: direction matters."],
    ["impulse (J)", "J = FΔt = Δp. Area under a force–time graph."],
    ["conservation of momentum", "If the net external force is zero, the total momentum of the system before = after."],
    ["elastic collision", "Objects bounce apart and total kinetic energy is conserved."],
    ["inelastic collision", "Kinetic energy is lost (to heat, sound, bending). Momentum is still conserved."],
    ["perfectly inelastic", "Objects stick together and move with one shared velocity. Maximum kinetic energy loss."],
    ["center of mass", "The average position of the system’s mass. With no external force, its velocity doesn’t change."]
  ],
  steps: [
    { name: "Collision or explosion problems", list: ["Draw before and after pictures. Pick a positive direction.", "Write m₁v₁ + m₂v₂ (before) = m₁v₁′ + m₂v₂′ (after).", "Use negative velocities for anything moving the negative way.", "If they stick: the after side is (m₁ + m₂)v′.", "If it asks about energy: compare ½mv² before and after."] },
    { name: "Impulse problems", list: ["Δp = m(v<sub>f</sub> − v<sub>i</sub>). Watch the signs when the object bounces back.", "F = Δp/Δt.", "A longer contact time (airbags, bending your knees) means a smaller force for the same Δp."] }
  ],
  examples: [
    { q: "A 0.20 kg ball hits a wall at 10 m/s and bounces straight back at 8.0 m/s. The contact lasts 0.020 s. Find the impulse and the average force.", steps: ["Toward the wall is positive: v<sub>i</sub> = +10, v<sub>f</sub> = −8.0.", "Δp = 0.20(−8.0 − 10) = 0.20(−18) = −3.6 kg·m/s.", "F = Δp/Δt = −3.6/0.020 = −180 N (away from the wall)."], answer: "Impulse 3.6 N·s away from the wall; force 180 N" },
    { q: "A 1000 kg car at 20 m/s rear-ends a 1500 kg car at rest. They stick together. Find their speed and the kinetic energy lost.", steps: ["Before: 1000(20) + 1500(0) = 20,000 kg·m/s.", "After: (2500)v′ = 20,000 → v′ = 8.0 m/s.", "K before = ½(1000)(20)² = 200,000 J. K after = ½(2500)(8.0)² = 80,000 J.", "Lost: 120,000 J."], answer: "8.0 m/s; 1.2 × 10⁵ J lost" },
    { q: "A 60 kg skater and a 40 kg skater stand together at rest, then push apart. The 40 kg skater moves at 3.0 m/s. How fast does the 60 kg skater move?", steps: ["Total momentum before = 0.", "After: 40(3.0) + 60v = 0.", "v = −120/60 = −2.0 m/s (opposite direction)."], answer: "2.0 m/s the opposite way" },
    { q: "Is momentum conserved when a ball falls toward Earth?", steps: ["System = ball only: gravity is an outside force, so the ball’s momentum increases.", "System = ball + Earth: gravity is internal. Total momentum is conserved (Earth moves up a tiny amount)."], answer: "Depends on the system: not for the ball alone, yes for ball + Earth." }
  ],
  mistakes: [
    ["Ignores direction, adding speeds that point opposite ways.", "“Which way is each one moving? Give one of them a negative sign.”"],
    ["Says kinetic energy is conserved in every collision.", "“Did they stick or crumple? Then some energy became heat and sound.”"],
    ["Uses Δv = 8 − 10 = −2 for the bouncing ball.", "“If it reverses, the final velocity is negative. What is −8 − 10?”"],
    ["Thinks the heavier object exerts more force in a collision.", "“Newton’s 3rd law: the forces are equal. Why does the lighter one change speed more?”"],
    ["Forgets to combine masses when objects stick.", "“After they stick, how much mass is moving together?”"]
  ],
  ask: ["What is the total momentum before?", "Which direction is positive?", "Do the objects stick, bounce, or push apart?", "Is there an outside force on your system?", "Does the question ask about momentum or energy?"],
  check: [
    { q: "Momentum of a 2.0 kg ball at 5.0 m/s?", a: "10 kg·m/s" },
    { q: "Why do airbags reduce injury?", a: "They increase Δt, so the force for the same Δp is smaller." },
    { q: "Which collision type conserves kinetic energy?", a: "Elastic" }
  ],
  visual: "PHV_COLL" },

/* ---------------- UNIT 5 ---------------- */
{ id: "p1-05", course: "AP Physics 1", unit: 5, title: "Torque & Rotational Dynamics", standards: "AP Physics 1 Unit 5",
  bigIdea: "Rotation has its own version of everything from Units 1 and 2. Angle (θ), angular velocity (ω), and angular acceleration (α) match position, velocity, and acceleration. Torque is the “rotational force.” It depends on how hard you push AND how far from the pivot. Rotational inertia (I) is the “rotational mass,” and Newton’s 2nd law becomes τ<sub>net</sub> = Iα.",
  tips: "Build on what the student already knows: make a two-column chart, <b>linear | rotational</b> (x ↔ θ, v ↔ ω, a ↔ α, F ↔ τ, m ↔ I). Every rotational equation is a linear one with the symbols swapped. For torque, always ask, “Where is the pivot?” and measure distances from there.",
  vocab: [
    ["angular displacement (θ)", "How far something has turned, in radians. One full turn = 2π rad."],
    ["angular velocity (ω)", "How fast it turns, in rad/s. Linear speed at radius r: v = ωr."],
    ["angular acceleration (α)", "How fast ω changes, in rad/s². Tangential acceleration: a = αr."],
    ["torque (τ)", "τ = rF sin θ (r = distance from the pivot, θ = angle between r and F). Units N·m."],
    ["lever arm", "The perpendicular distance from the pivot to the line of the force. Longer arm = more torque."],
    ["rotational inertia (I)", "Resistance to changes in rotation. Mass farther from the axis → bigger I. Point mass: I = mr²."],
    ["τ<sub>net</sub> = Iα", "Newton’s 2nd law for rotation."],
    ["rotational equilibrium", "Στ = 0 (balanced torques), so α = 0. Seesaws and beams that aren’t rotating."]
  ],
  steps: [
    { name: "Torque and balance problems", list: ["Mark the pivot.", "For each force, find r (distance from the pivot) and the angle.", "Torque = rF sin θ. Decide if it tends to turn clockwise or counterclockwise.", "Balanced: total clockwise torque = total counterclockwise torque.", "Choose the pivot at an unknown force to make that force’s torque zero."] },
    { name: "Rotational kinematics", list: ["Use the same equations as Unit 1 with θ, ω, α: ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ.", "Use radians.", "Convert to linear quantities at a radius: v = ωr, a = αr."] }
  ],
  examples: [
    { q: "A 20 N force is applied 0.40 m from a door hinge. Find the torque if the force is (a) perpendicular, (b) at 30° to the door.", steps: ["(a) τ = rF sin 90° = 0.40 × 20 × 1 = 8.0 N·m.", "(b) τ = 0.40 × 20 × sin 30° = 8.0 × 0.5 = 4.0 N·m."], answer: "(a) 8.0 N·m, (b) 4.0 N·m" },
    { q: "A 30 kg child sits 2.0 m from the center of a seesaw. Where must a 40 kg child sit to balance it?", steps: ["Pivot at the center. Balance torques: (30g)(2.0) = (40g)(d).", "g cancels: 60 = 40d.", "d = 1.5 m on the other side."], answer: "1.5 m from the center" },
    { q: "A wheel starts from rest with α = 2.0 rad/s². Find ω and θ after 5.0 s.", steps: ["ω = ω₀ + αt = 0 + 2.0 × 5.0 = 10 rad/s.", "θ = ½αt² = ½ × 2.0 × 25 = 25 rad (about 4 turns)."], answer: "ω = 10 rad/s, θ = 25 rad" },
    { q: "A solid disk (I = ½MR²) has M = 4.0 kg and R = 0.50 m. A 2.0 N·m torque acts on it. Find α.", steps: ["I = ½(4.0)(0.50)² = 0.50 kg·m².", "α = τ/I = 2.0/0.50 = 4.0 rad/s²."], answer: "4.0 rad/s²" }
  ],
  mistakes: [
    ["Measures r from the end of the object instead of the pivot.", "“Where does it rotate around? Measure from there.”"],
    ["Uses cos instead of sin in τ = rF sin θ.", "“If you push straight toward the hinge (0°), does the door turn? Which trig function is 0 at 0°?”"],
    ["Thinks two objects with the same mass have the same I.", "“Where is the mass located? Mass farther from the axis makes I bigger.”"],
    ["Uses degrees in rotational kinematics.", "“These equations need radians. 1 turn = 2π rad.”"],
    ["Forgets the beam’s own weight acts at its center.", "“Does the beam itself have weight? Where does that act?”"]
  ],
  ask: ["Where is the pivot?", "Does this force turn it clockwise or counterclockwise?", "What is the linear version of this equation?", "Where is the mass concentrated? Is I big or small?", "What happens if you pick the pivot at the unknown force?"],
  check: [
    { q: "Why is a door handle far from the hinge?", a: "A bigger r gives more torque for the same force." },
    { q: "ω = 4.0 rad/s, r = 0.50 m. Linear speed?", a: "v = ωr = 2.0 m/s" },
    { q: "Point mass 2.0 kg at 3.0 m from the axis. I?", a: "mr² = 18 kg·m²" }
  ],
  visual: "PHV_TORQ" },

/* ---------------- UNIT 6 ---------------- */
{ id: "p1-06", course: "AP Physics 1", unit: 6, title: "Energy & Momentum of Rotating Systems", standards: "AP Physics 1 Unit 6",
  bigIdea: "Spinning objects have kinetic energy (K = ½Iω²) and angular momentum (L = Iω). A rolling object has BOTH translational and rotational kinetic energy, which is why a rolling ball is slower at the bottom of a ramp than a sliding block. When no outside torque acts, angular momentum is conserved: pull mass inward (smaller I) and you spin faster (bigger ω).",
  tips: "The ice-skater picture is the best way in: <b>arms out = slow spin, arms in = fast spin</b>, because Iω stays the same. For rolling races, ask, “Which object stores more of its energy in spinning?” That one moves slower down the ramp (the hoop loses to the solid sphere).",
  vocab: [
    ["rotational kinetic energy", "K<sub>rot</sub> = ½Iω²."],
    ["rolling without slipping", "The contact point doesn’t slide, so v = ωR. Total K = ½mv² + ½Iω²."],
    ["angular momentum (L)", "L = Iω for a spinning object; L = mvr⊥ for a point mass passing a point."],
    ["angular impulse", "τΔt = ΔL."],
    ["conservation of angular momentum", "If the net external torque is zero, I₁ω₁ = I₂ω₂."],
    ["rotational inertia comparisons", "Hoop (I = MR²) > solid disk (½MR²) > solid sphere (2/5 MR²) for the same M and R."]
  ],
  steps: [
    { name: "Rolling energy problems", list: ["Start: mgh. End: ½mv² + ½Iω².", "Replace ω with v/R and I with its formula.", "Factor out v², cancel mass, solve.", "Check: the answer should be less than √(2gh), the sliding speed."] },
    { name: "Angular momentum conservation", list: ["Check: is there an outside torque? If no, L is conserved.", "I₁ω₁ = I₂ω₂.", "Smaller I → bigger ω. Kinetic energy is NOT conserved here (the skater does work pulling her arms in)."] }
  ],
  examples: [
    { q: "A wheel with I = 0.50 kg·m² spins at 10 rad/s. Find its rotational kinetic energy and angular momentum.", steps: ["K = ½Iω² = ½(0.50)(10)² = 25 J.", "L = Iω = 0.50 × 10 = 5.0 kg·m²/s."], answer: "25 J; 5.0 kg·m²/s" },
    { q: "A solid sphere (I = 2/5 mR²) rolls without slipping from rest down a 1.4 m high ramp. Find its speed at the bottom. Compare to a block sliding with no friction.", steps: ["mgh = ½mv² + ½(2/5 mR²)(v/R)².", "The R’s cancel: mgh = ½mv² + (1/5)mv² = (7/10)mv².", "v = √(10gh/7) = √(10 × 9.8 × 1.4 / 7) = √19.6 = 4.4 m/s.", "Sliding block: √(2gh) = √27.4 = 5.2 m/s. The sphere is slower because some energy goes into spinning."], answer: "4.4 m/s (sliding block: 5.2 m/s)" },
    { q: "A skater spins at 2.0 rad/s with I = 4.0 kg·m². She pulls her arms in so I = 1.0 kg·m². What is her new spin rate?", steps: ["No outside torque (frictionless ice): I₁ω₁ = I₂ω₂.", "4.0 × 2.0 = 1.0 × ω₂.", "ω₂ = 8.0 rad/s.", "K goes from ½(4)(2)² = 8 J to ½(1)(8)² = 32 J; her muscles did the extra work."], answer: "8.0 rad/s" }
  ],
  mistakes: [
    ["Leaves out rotational KE for a rolling object.", "“Is it just sliding, or is it also spinning? Where does the spinning energy come from?”"],
    ["Thinks kinetic energy is conserved when the skater pulls in her arms.", "“Angular momentum is conserved. Did her arms do any work?”"],
    ["Thinks the heavier ball always wins a rolling race.", "“Mass cancels in the equation. What does matter? The shape (how the mass is spread).”"],
    ["Uses v = ωR for an object that is slipping.", "“That only works when it rolls without slipping.”"]
  ],
  ask: ["Is it spinning, sliding, or both?", "Is there an outside torque?", "Where is the mass: near the axis or far away?", "Does mass (or radius) cancel?", "Is energy or angular momentum the better tool here?"],
  check: [
    { q: "A hoop and a solid disk race down a ramp. Which wins?", a: "The disk (smaller I/MR², less energy stored in spinning)." },
    { q: "I is cut in half with no outside torque. ω?", a: "Doubles" },
    { q: "Formula for rotational KE?", a: "½Iω²" }
  ],
  visual: "PHV_SKATE" },

/* ---------------- UNIT 7 ---------------- */
{ id: "p1-07", course: "AP Physics 1", unit: 7, title: "Oscillations: Springs, Pendulums & Simple Harmonic Motion", standards: "AP Physics 1 Unit 7",
  bigIdea: "A mass on a spring and a small-angle pendulum both move back and forth in simple harmonic motion (SHM) because a restoring force always pulls them back toward the middle. The period (time for one full cycle) depends only on the mass and spring stiffness for a spring, and only on the length and gravity for a pendulum, not on how far you pull it (the amplitude).",
  tips: "Have students point to three places on a sketch: the <b>two ends</b> (speed 0, max force and acceleration, all potential energy) and the <b>middle</b> (max speed, zero force, all kinetic energy). Most SHM questions are just asking which of those places you are at.",
  vocab: [
    ["equilibrium position", "Where the net force is zero (the middle of the motion)."],
    ["amplitude (A)", "The maximum distance from equilibrium."],
    ["period (T) & frequency (f)", "T = time for one full cycle (s). f = 1/T (Hz)."],
    ["restoring force", "A force that points back toward equilibrium. For a spring: F = −kx."],
    ["spring period", "T = 2π√(m/k). Heavier mass → longer period. Stiffer spring → shorter period."],
    ["pendulum period", "T = 2π√(L/g) for small angles. Mass doesn’t matter."],
    ["energy in SHM", "Total E = ½kA². At the ends all potential; in the middle all kinetic: ½mv<sub>max</sub>² = ½kA²."]
  ],
  steps: [
    { name: "SHM problems", list: ["Identify the type: spring or pendulum.", "For the period, use the matching formula (from the equation sheet).", "For speed, use energy: ½kA² = ½mv² + ½kx².", "Max speed is at x = 0: v<sub>max</sub> = A√(k/m)."] },
    { name: "Reading an x–t graph", list: ["Amplitude = the height of the peak from the middle line.", "Period = time from one peak to the next.", "Speed is greatest where the graph crosses the middle line (steepest slope).", "Speed is zero at the peaks (flat slope)."] }
  ],
  examples: [
    { q: "A 0.50 kg mass on a spring (k = 200 N/m) oscillates. Find the period.", steps: ["T = 2π√(m/k) = 2π√(0.50/200).", "√0.0025 = 0.050.", "T = 2π × 0.050 = 0.31 s."], answer: "≈ 0.31 s" },
    { q: "Find the period of a 1.0 m pendulum. What happens if you double the mass of the bob?", steps: ["T = 2π√(L/g) = 2π√(1.0/9.8) = 2π × 0.319 = 2.0 s.", "Mass isn’t in the formula, so doubling it changes nothing."], answer: "≈ 2.0 s; no change" },
    { q: "The 0.50 kg mass on the k = 200 N/m spring has an amplitude of 0.10 m. Find its maximum speed.", steps: ["Total energy = ½kA² = ½(200)(0.10)² = 1.0 J.", "In the middle, all of it is kinetic: ½(0.50)v² = 1.0.", "v² = 4.0 → v = 2.0 m/s."], answer: "2.0 m/s (at equilibrium)" },
    { q: "How would the period of a spring change if the mass were 4 times larger?", steps: ["T = 2π√(m/k). m is under a square root.", "√4 = 2, so the period doubles."], answer: "It doubles." }
  ],
  mistakes: [
    ["Thinks a bigger amplitude means a longer period.", "“Look at the formula. Is A in it? It goes farther but also faster.”"],
    ["Says the mass is fastest at the ends.", "“At the ends it stops to turn around. Where is it moving fastest?”"],
    ["Thinks a heavier pendulum swings slower.", "“Is mass in the pendulum formula?”"],
    ["Says the acceleration is zero at the ends because the speed is zero.", "“How much is the spring stretched there? So how big is the force?”"],
    ["Forgets the square root when scaling.", "“If L is 4 times bigger, what is √4?”"]
  ],
  ask: ["Is this a spring or a pendulum?", "Where is the speed max? Where is it zero?", "Where is the force (or acceleration) max?", "What does (and doesn’t) change the period?", "Can you use energy to find the speed?"],
  check: [
    { q: "f = 5 Hz. Period?", a: "T = 1/5 = 0.2 s" },
    { q: "Pendulum length is quadrupled. Period?", a: "Doubles" },
    { q: "Where is a spring’s potential energy greatest?", a: "At the ends (maximum stretch or compression)" }
  ],
  visual: "PHV_SHM" },

/* ---------------- UNIT 8 ---------------- */
{ id: "p1-08", course: "AP Physics 1", unit: 8, title: "Fluids: Density, Pressure, Buoyancy & Flow", standards: "AP Physics 1 Unit 8",
  bigIdea: "Fluids (liquids and gases) push on everything in them. Pressure increases with depth because there is more fluid on top. That pressure difference between the top and bottom of an object creates the buoyant force, which equals the weight of the fluid the object pushes out of the way. Moving fluids speed up in narrow spots, and faster-moving fluid has lower pressure.",
  tips: "Buoyancy is the trickiest part. Say it the same way every time: <b>“The buoyant force equals the weight of the displaced fluid.”</b> Then ask, “How much fluid is pushed out of the way?” For floating objects, the buoyant force equals the object’s weight, so the fraction underwater = object density ÷ fluid density.",
  vocab: [
    ["density (ρ)", "ρ = m/V in kg/m³. Water = 1000 kg/m³."],
    ["pressure (P)", "P = F/A in pascals (Pa = N/m²). 1 atm ≈ 1.01 × 10⁵ Pa."],
    ["pressure at depth", "P = P₀ + ρgh. Gauge pressure is just ρgh (the extra pressure from the fluid)."],
    ["buoyant force", "F<sub>b</sub> = ρ<sub>fluid</sub>V<sub>displaced</sub>g (Archimedes’ principle)."],
    ["floating", "F<sub>b</sub> = weight. Fraction submerged = ρ<sub>object</sub>/ρ<sub>fluid</sub>."],
    ["continuity equation", "A₁v₁ = A₂v₂. A narrower pipe means faster flow."],
    ["Bernoulli’s equation", "P + ½ρv² + ρgy is the same at every point along the flow. Faster flow → lower pressure."]
  ],
  steps: [
    { name: "Buoyancy problems", list: ["Draw a free-body diagram: weight down, buoyant force up (plus tension or a push if there is one).", "Find V<sub>displaced</sub>: the whole volume if fully submerged; only the underwater part if floating.", "F<sub>b</sub> = ρ<sub>fluid</sub>gV<sub>displaced</sub>.", "Use ΣF = 0 (or ma) like any force problem."] },
    { name: "Flowing fluid problems", list: ["Use A₁v₁ = A₂v₂ to find the speed in the other section.", "Use Bernoulli’s equation to compare pressures: P₁ + ½ρv₁² + ρgy₁ = P₂ + ½ρv₂² + ρgy₂.", "Same height? The ρgy terms cancel."] }
  ],
  examples: [
    { q: "What is the gauge pressure 10 m under water? The absolute pressure?", steps: ["Gauge: ρgh = 1000 × 9.8 × 10 = 98,000 Pa.", "Absolute: add atmospheric: 98,000 + 101,000 ≈ 1.99 × 10⁵ Pa (about 2 atm)."], answer: "9.8 × 10⁴ Pa gauge; ≈ 2.0 × 10⁵ Pa absolute" },
    { q: "A 0.0020 m³ rock is fully under water. Find the buoyant force.", steps: ["Fully submerged → V<sub>displaced</sub> = 0.0020 m³.", "F<sub>b</sub> = ρgV = 1000 × 9.8 × 0.0020 = 19.6 N."], answer: "≈ 20 N" },
    { q: "A block of wood (density 600 kg/m³) floats in water. What fraction is underwater?", steps: ["Floating: F<sub>b</sub> = weight → ρ<sub>w</sub>V<sub>sub</sub>g = ρ<sub>wood</sub>V g.", "V<sub>sub</sub>/V = 600/1000 = 0.60."], answer: "60% underwater" },
    { q: "Water flows at 2.0 m/s in a pipe with area 0.040 m². The pipe narrows to 0.010 m². Find the new speed and the pressure drop (same height).", steps: ["A₁v₁ = A₂v₂ → 0.040(2.0) = 0.010v₂ → v₂ = 8.0 m/s.", "Bernoulli at the same height: P₁ − P₂ = ½ρ(v₂² − v₁²).", "= ½(1000)(64 − 4) = 30,000 Pa."], answer: "8.0 m/s; pressure drops 3.0 × 10⁴ Pa" }
  ],
  mistakes: [
    ["Uses the object’s density in the buoyant force formula.", "“Buoyant force is about the FLUID that got pushed away. Whose density goes in?”"],
    ["Uses the whole volume for a floating object.", "“Is all of it underwater? Only the submerged part displaces water.”"],
    ["Thinks a narrow pipe makes water slower.", "“Put your thumb over a hose. What happens to the water?”"],
    ["Thinks faster fluid has higher pressure.", "“Bernoulli says the opposite: fast flow, low pressure. That’s how wings get lift.”"],
    ["Thinks heavier objects get more buoyant force.", "“Two objects with the same volume fully under water displace the same water. What does that mean for F<sub>b</sub>?”"]
  ],
  ask: ["How much fluid is displaced?", "Is it floating or fully submerged?", "What forces are on your free-body diagram?", "Where is the pipe narrower? So where is it faster?", "Are the two points at the same height?"],
  check: [
    { q: "Ice (917 kg/m³) floats in water. Fraction underwater?", a: "≈ 92%" },
    { q: "Pipe area is cut in half. Speed?", a: "Doubles" },
    { q: "Does pressure at the bottom of a pool depend on the pool’s width?", a: "No, only on depth (ρgh)." }
  ],
  visual: "PHV_BUOY" }
);

/* ===== AP Physics 1 visuals ===== */
(function () {
  const G = window.TGA;
  const t = (x, y, s, o) => `<text x="${x}" y="${y}" font-size="${(o && o.fs) || 12}" text-anchor="${(o && o.a) || "middle"}" font-weight="${o && o.b ? 700 : 400}" fill="${(o && o.c) || "#333"}">${s}</text>`;
  const ln = (x1, y1, x2, y2, c, w, d) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c || "#333"}" stroke-width="${w || 2}"${d ? ' stroke-dasharray="5 4"' : ""}/>`;
  const arrow = (x1, y1, x2, y2, c, w) => { const a = Math.atan2(y2 - y1, x2 - x1), h = 10; return ln(x1, y1, x2, y2, c, w || 3) + `<polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.45)},${y2 - h * Math.sin(a - 0.45)} ${x2 - h * Math.cos(a + 0.45)},${y2 - h * Math.sin(a + 0.45)}" fill="${c || "#333"}"/>`; };
  const svg = (w, h, inner, alt) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${alt}" style="background:#fff;border-radius:12px;max-width:100%;height:auto">${inner}</svg>`;
  const BLUE = "#2b7de9", PINK = "#e8368f", ORANGE = "#e08a00", GREEN = "#1aa36f", RED = "#d0453a", PURPLE = "#8a54e0";

  const vt = G ? G.graph({ x: [0, 9], y: [0, 12], step: 2, fns: [{ f: x => (x <= 5 ? 2 * x : x <= 8 ? 10 : NaN), label: "velocity (m/s)", lx: 8 }],
    shade: [(X, Y) => `<polygon points="${X(0)},${Y(0)} ${X(5)},${Y(10)} ${X(5)},${Y(0)}" fill="#2b7de933"/><rect x="${X(5)}" y="${Y(10)}" width="${X(8) - X(5)}" height="${Y(0) - Y(10)}" fill="#1aa36f33"/>` + t(X(3.5), Y(3), "25 m", { b: 1 }) + t(X(6.5), Y(5), "30 m", { b: 1 }) + t(X(8.8), Y(0) - 6, "t (s)", { a: "end", fs: 11 }) + t(X(2.2), Y(7.5), "slope = a", { fs: 11, c: BLUE, b: 1 })], alt: "velocity time graph with area shaded" }) + `<p style="text-align:center;margin:6px 0 0;font-size:.9rem">Slope of v–t = acceleration. Area under v–t = displacement (25 + 30 = 55 m).</p>` : "";

  const fbd = (() => {
    const cx = 210, cy = 150, a = Math.PI / 6;
    let g = `<polygon points="40,250 380,250 380,${250 - 340 * Math.tan(a)}" fill="#eef3fa" stroke="#555" stroke-width="2"/>`;
    g += `<g transform="rotate(-30 ${cx} ${cy})"><rect x="${cx - 32}" y="${cy - 24}" width="64" height="48" rx="6" fill="#fff7d6" stroke="${ORANGE}" stroke-width="2.5"/></g>`;
    g += arrow(cx, cy, cx, cy + 95, RED) + t(cx + 8, cy + 92, "F<tspan font-size=\"9\">g</tspan> = mg", { a: "start", b: 1, c: RED });
    g += arrow(cx, cy, cx - 60 * Math.sin(a) * 1.4, cy - 60 * Math.cos(a) * 1.4, BLUE) + t(cx - 60, cy - 78, "F<tspan font-size=\"9\">N</tspan>", { b: 1, c: BLUE });
    g += arrow(cx, cy, cx - 70 * Math.cos(a), cy + 70 * Math.sin(a), PURPLE, 2) + t(24, 150, "mg sin θ", { fs: 11, b: 1, c: PURPLE, a: "start" }) + t(24, 164, "(down the ramp)", { fs: 11, c: PURPLE, a: "start" });
    g += arrow(cx, cy, cx + 82 * Math.sin(a), cy + 82 * Math.cos(a), GREEN, 2) + t(cx + 50, cy + 86, "mg cos θ", { fs: 11, b: 1, c: GREEN, a: "start" });
    g += t(340, 242, "θ", { fs: 14, b: 1 }) + t(210, 22, "Free-body diagram on a ramp (tilt your axes!)", { b: 1, fs: 13 });
    return svg(420, 262, g, "free body diagram of a block on an incline");
  })();

  const bars = (() => {
    const col = (x, lab, vals) => { let g = ""; vals.forEach(([v, c, n], i) => { const bx = x + i * 30; g += `<rect x="${bx}" y="${180 - v * 22}" width="22" height="${v * 22}" fill="${c}"/>` + t(bx + 11, 198, n, { fs: 10, b: 1 }); }); return g + t(x + vals.length * 15 - 4, 216, lab, { b: 1, fs: 12 }); };
    let g = ln(20, 180, 480, 180) + col(30, "Start (top)", [[0, BLUE, "K"], [5, RED, "U<tspan font-size=\"8\">g</tspan>"], [0, GREEN, "U<tspan font-size=\"8\">s</tspan>"]]) + t(150, 110, "+", { fs: 22, b: 1 }) +
      col(170, "Work in/out", [[0, ORANGE, "W"]]) + t(230, 110, "=", { fs: 22, b: 1 }) + col(250, "End (bottom)", [[3, BLUE, "K"], [0, RED, "U<tspan font-size=\"8\">g</tspan>"], [0, GREEN, "U<tspan font-size=\"8\">s</tspan>"]]) + `<rect x="370" y="${180 - 2 * 22}" width="22" height="44" fill="${PURPLE}"/>` + t(381, 198, "E<tspan font-size=\"8\">th</tspan>", { fs: 10, b: 1 }) + t(381, 216, "friction", { fs: 11, b: 1 });
    g += t(250, 30, "Energy bar chart: the box sliding down a ramp with friction", { b: 1, fs: 13 }) + t(250, 50, "5 bars of U<tspan font-size=\"8\">g</tspan> at the top = 3 bars of K + 2 bars of thermal energy", { fs: 11 });
    return svg(500, 228, g, "energy bar chart");
  })();

  const coll = (() => {
    const car = (x, y, w, c, lab) => `<rect x="${x}" y="${y}" width="${w}" height="34" rx="8" fill="${c}"/>` + t(x + w / 2, y + 22, lab, { fs: 12, b: 1, c: "#fff" }) + `<circle cx="${x + 14}" cy="${y + 36}" r="7" fill="#333"/><circle cx="${x + w - 14}" cy="${y + 36}" r="7" fill="#333"/>`;
    let g = t(20, 26, "BEFORE", { a: "start", b: 1 }) + car(30, 40, 80, BLUE, "1000 kg") + arrow(112, 57, 162, 57, BLUE) + t(140, 48, "20 m/s", { fs: 11, b: 1, c: BLUE }) + car(230, 40, 110, ORANGE, "1500 kg") + t(285, 98, "at rest", { fs: 11 });
    g += ln(10, 112, 410, 112, "#ccc", 1, 1) + t(20, 136, "AFTER (stuck together)", { a: "start", b: 1 }) + car(120, 150, 190, PURPLE, "2500 kg") + arrow(312, 167, 362, 167, PURPLE) + t(338, 158, "8.0 m/s", { fs: 11, b: 1, c: PURPLE });
    g += t(210, 214, "p before: 1000(20) = 20,000   ·   p after: 2500(8.0) = 20,000 ✓", { fs: 11, b: 1 });
    return svg(420, 226, g, "before and after picture of a collision");
  })();

  const torq = (() => {
    let g = `<rect x="40" y="60" width="16" height="140" fill="#9aa3ad"/>` + `<rect x="56" y="110" width="300" height="34" rx="6" fill="#e8f1ff" stroke="${BLUE}" stroke-width="2"/>` + `<circle cx="56" cy="127" r="7" fill="#333"/>` + t(56, 225, "pivot (hinge)", { b: 1, fs: 11 });
    g += arrow(330, 60, 330, 108, RED) + t(340, 72, "F", { a: "start", b: 1, c: RED, fs: 14 });
    g += ln(56, 160, 330, 160, GREEN, 2) + `<polygon points="330,160 320,155 320,165" fill="${GREEN}"/>` + t(193, 178, "r (from the pivot to where the force acts)", { fs: 11, b: 1, c: GREEN });
    g += t(220, 30, "τ = rF sin θ   (θ = 90° here, so τ = rF)", { b: 1, fs: 13 }) + t(220, 248, "Same force farther from the pivot → more torque", { fs: 11 });
    return svg(420, 258, g, "torque on a door from a hinge");
  })();

  const skate = (() => {
    const fig = (x, armOut, lab, w) => {
      let g = `<circle cx="${x}" cy="60" r="12" fill="#fff" stroke="#333" stroke-width="2"/>` + ln(x, 72, x, 130) + ln(x, 130, x - 14, 175) + ln(x, 130, x + 14, 175);
      g += armOut ? ln(x - 70, 92, x + 70, 92, "#333", 3) + `<circle cx="${x - 70}" cy="92" r="6" fill="${RED}"/><circle cx="${x + 70}" cy="92" r="6" fill="${RED}"/>` : ln(x - 12, 100, x + 12, 86, "#333", 3) + `<circle cx="${x - 12}" cy="100" r="6" fill="${RED}"/><circle cx="${x + 12}" cy="86" r="6" fill="${RED}"/>`;
      return g + t(x, 200, lab, { b: 1 }) + t(x, 218, w, { fs: 11 });
    };
    let g = fig(110, true, "arms out: big I", "I = 4.0, ω = 2.0 rad/s") + arrow(205, 110, 255, 110, PURPLE) + fig(340, false, "arms in: small I", "I = 1.0, ω = 8.0 rad/s");
    g += t(230, 24, "No outside torque → L = Iω stays the same (4.0 × 2.0 = 1.0 × 8.0)", { b: 1, fs: 12 });
    return svg(460, 230, g, "skater spinning with arms out and arms in");
  })();

  const shm = G ? G.graph({ w: 380, h: 220, x: [0, 9], y: [-3, 3], step: 1, fns: [{ f: x => 2 * Math.cos(2 * Math.PI * x / 4), label: "x(t)", lx: 8.6 }],
    lines: [[0, 2, 9, 2, "#aaa"], [0, -2, 9, -2, "#aaa"]], pts: [[0, 2, ""], [1, 0, "max speed", GREEN], [4, 2, "v = 0, max force"]],
    shade: [(X, Y) => `<line x1="${X(0)}" y1="${Y(2.8)}" x2="${X(4)}" y2="${Y(2.8)}" stroke="${PURPLE}" stroke-width="2"/>` + t(X(2), Y(2.8) - 4, "period T", { b: 1, c: PURPLE, fs: 11 }) + t(X(8.9), Y(-2) + 14, "amplitude A", { a: "end", fs: 11, b: 1 })], alt: "position time graph for simple harmonic motion" }) : "";

  const buoy = (() => {
    let g = `<rect x="40" y="60" width="340" height="190" fill="#d8ecff" stroke="${BLUE}" stroke-width="2"/>` + t(370, 80, "water", { a: "end", c: BLUE, b: 1 });
    g += `<rect x="170" y="120" width="80" height="70" fill="#c9b08a" stroke="#6b5232" stroke-width="2"/>` + t(210, 160, "object", { b: 1 });
    g += arrow(210, 190, 210, 245, RED) + t(220, 238, "weight mg", { a: "start", b: 1, c: RED, fs: 11 }) + arrow(210, 120, 210, 72, GREEN) + t(220, 86, "buoyant force", { a: "start", b: 1, c: GREEN, fs: 11 });
    g += arrow(140, 125, 166, 125, "#555", 1.5) + arrow(140, 185, 166, 185, "#555", 1.5) + t(132, 128, "less P", { a: "end", fs: 10 }) + t(132, 188, "more P", { a: "end", fs: 10 });
    g += t(210, 30, "F<tspan font-size=\"9\">b</tspan> = ρ<tspan font-size=\"9\">fluid</tspan> · V<tspan font-size=\"9\">displaced</tspan> · g", { b: 1, fs: 14 }) + t(210, 48, "Pressure is bigger at the bottom, so the water pushes up harder than down.", { fs: 11 });
    return svg(420, 262, g, "buoyant force diagram");
  })();

  const V = { PHV_VT: vt, PHV_FBD: fbd, PHV_BARS: bars, PHV_COLL: coll, PHV_TORQ: torq, PHV_SKATE: skate, PHV_SHM: shm, PHV_BUOY: buoy };
  (window.TUTOR_UNITS || []).forEach(u => { if (u.course === "AP Physics 1" && V[u.visual] !== undefined) u.visual = V[u.visual]; });
})();
