/* =====================================================================
   ENGLISH CHALLENGE PROBLEMS (shown on challenge.html)
   Same format as ch-math.js (see the notes at the top of that file).
   Passages are either public domain (Shakespeare, Lincoln, Douglass)
   or original practice texts written for this hub.
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · English 9 ---------------- */
{ id: "e9-rose", grade: 9, subject: "English", course: "English 9", unit: "Drama: Romeo and Juliet", std: "RL.9-10.3 · RL.9-10.5", spice: 2,
  title: "What’s in a Name? Juliet vs. the Prologue",
  teaser: "Juliet says names don’t matter. The audience already knows a name will destroy her. Explain the dramatic irony.",
  ask: "How does Shakespeare use Juliet’s “What’s in a name?” speech to create dramatic irony?",
  prompt: `<p>In Act 2, Scene 2 of <i>Romeo and Juliet</i>, Juliet stands on her balcony, not knowing Romeo can hear her:</p>
    <blockquote>’Tis but thy name that is my enemy.<br>Thou art thyself, though not a Montague.<br>What’s Montague? It is nor hand, nor foot,<br>Nor arm, nor face, nor any other part<br>Belonging to a man. O, be some other name!<br>What’s in a name? That which we call a rose<br>By any other word would smell as sweet.</blockquote>
    <p>Before the play even starts, the Prologue tells the audience that two “star-crossed lovers take their life” and that the feud between their families will only end with their deaths.</p>
    <p><b>Your challenge:</b> Juliet argues that a name is meaningless. Explain how the rest of the play <b>proves her wrong</b>, and why Shakespeare lets the audience know the ending before Juliet does. Use at least one quote and the word <b>dramatic irony</b>.</p>`,
  why: "Juliet’s argument is logical, and it sounds romantic. To see the problem, you have to step outside the scene and think about what the audience knows, and why a writer would give away the ending on purpose.",
  answer: { type: "mc", prompt: "First, choose the statement that BEST explains the dramatic irony in this speech.",
    opts: ["Juliet is lying because she secretly hates Romeo.",
      "The audience knows from the Prologue that the feud between the names Montague and Capulet will lead to both lovers’ deaths, so Juliet’s claim that a name doesn’t matter is tragically wrong.",
      "Romeo is hiding in the garden, which is a surprise to the audience.",
      "A rose really does smell the same no matter what it is called, so Juliet is correct."], a: 1,
    why: { 0: "❌ Nothing in the speech suggests she is lying. She means every word.", 2: "❌ That is part of the scene, but dramatic irony is when the AUDIENCE knows something a character does not.", 3: "❌ About roses, yes! But think about people. Does the play treat the name “Montague” as harmless?" } },
  hints: ["Dramatic irony = the audience knows something the character doesn’t. What does the audience know from the Prologue?",
    "Find a moment later in the play when a name causes real harm (think of Tybalt, Mercutio, or why Romeo is banished).",
    "Try this frame: “Juliet believes ___, but the audience already knows ___. Shakespeare reveals the ending early so that ___.”"],
  solution: `<p><b>Model answer:</b> Juliet argues that “Montague” is “nor hand, nor foot,” just a word, so it should not keep her from Romeo. This creates <b>dramatic irony</b> because the Prologue has already told the audience that these “star-crossed lovers take their life” because of their families’ feud. The rest of the play proves that names have deadly power: Tybalt challenges Romeo only because he is a Montague, Mercutio dies in that feud, and Romeo is banished for killing Tybalt. Shakespeare gives away the ending so the audience watches with dread instead of surprise. Every hopeful line, like “a rose by any other word would smell as sweet,” becomes painful, because we know the world will not let Juliet’s logic win.</p>
    <p><b>What makes it strong:</b> a clear claim, a quote from the speech, specific events as evidence, and an explanation of the <i>effect</i> on the audience (dread, tension), not just a summary.</p>`,
  deeper: "Is Juliet’s argument actually right, even if her world ignores it? Debate: Is <i>Romeo and Juliet</i> a story about fate, about bad choices, or about a society that values names over people?" },

{ id: "e9-trophy", grade: 9, subject: "English", course: "English 9", unit: "Short Story: Structure", std: "RL.9-10.5 · RL.9-10.3", spice: 2,
  title: "The Trophy in the Trash",
  teaser: "A very short story told backward. Why start at the end, and what does the last line really mean?",
  ask: "How does telling the story out of order create tension, and what does the final line reveal about the narrator?",
  prompt: `<p>Read this original short story.</p>
    <blockquote><p>The trophy is still in the trash can by the gym doors. I can see its gold arm sticking up between a pizza box and someone’s broken umbrella.</p>
    <p>Three hours earlier, Coach Ramos had handed it to me in front of the whole team. “Most Improved,” she said, and everyone clapped, and I smiled so hard my face hurt.</p>
    <p>Two hours earlier, I had heard Dani in the locker room. “Most Improved is what they give you when you started as the worst,” she laughed. “It’s a participation trophy with a better name.”</p>
    <p>One hour earlier, I walked out the gym doors and dropped it in.</p>
    <p>Now I am standing in the rain, looking at it. My hand is already reaching for the lid.</p></blockquote>
    <p><b>Your challenge:</b> (1) Explain how the author’s choice to <b>start with the ending</b> and then move through time creates tension. (2) The last line is open-ended. Make a claim about what the narrator has realized, and support it with at least <b>two</b> details from the story.</p>`,
  why: "The story never tells you what the narrator thinks. You have to infer a change in a character from structure, small details, and one action in the final line.",
  answer: { type: "open" },
  rubric: ["I explained how starting with the trophy in the trash makes the reader ask a question (why is it there?).",
    "I described how the time markers (“three hours earlier…”) slowly answer that question.",
    "I made a clear claim about what the narrator realizes at the end.",
    "I used at least two details from the story as evidence (a quote or a specific image).",
    "I explained how the details support my claim instead of only summarizing."],
  hints: ["List the events in the order they actually happened. Now compare that to the order the author chose. What do you learn first?",
    "Look at the time words: “three hours earlier,” “two hours earlier,” “one hour earlier,” “now.” What is the story counting down to?",
    "Why would someone reach for something they threw away? Think about who made the narrator throw it away, and whose opinion should matter more: Coach Ramos’s or Dani’s?"],
  solution: `<p><b>Model answer:</b> The author starts with the image of the trophy “sticking up between a pizza box and someone’s broken umbrella,” which immediately makes the reader ask why someone would throw away an award. Each time marker, “three hours earlier,” “two hours earlier,” “one hour earlier,” works like a countdown that slowly answers that question, so the tension builds toward the moment we return to the present.</p>
    <p>The final line, “My hand is already reaching for the lid,” shows that the narrator has decided Dani’s opinion should not erase the real moment of pride. Earlier, the narrator “smiled so hard my face hurt” when Coach Ramos gave the award, which proves the trophy meant something before Dani’s comment. Standing “in the rain” suggests the narrator has thought about it for an hour and chose to come back. The narrator realizes that improving is something to be proud of, no matter how someone else labels it.</p>`,
  deeper: "Rewrite the story in normal time order (beginning to end). What is lost? What, if anything, is gained? Which version would you choose to publish, and why?" },

/* ---------------- 10th grade · English 10 ---------------- */
{ id: "e10-fallacy", grade: 10, subject: "English", course: "English 10", unit: "Argument & Reasoning", std: "RI.9-10.8 · W.9-10.1", spice: 2,
  title: "Find the Broken Reasoning",
  teaser: "An editorial with 8 sentences. Some use solid reasoning. Five do not. Can you find all five and name the flaw?",
  ask: "Which sentences in the phone-ban editorial use flawed reasoning, and what kind of flaw is each one?",
  prompt: `<p>A student wrote this editorial for the school newspaper. (Practice text.)</p>
    <blockquote>
    <p><b>(1)</b> Our school should ban phones during lunch.
    <b>(2)</b> Last year, Valley High banned phones at lunch, and their test scores went up 6%, which proves the ban caused higher scores.
    <b>(3)</b> A survey of 400 students at our school found that 64% feel distracted by their phones during the school day.
    <b>(4)</b> I asked my three best friends, and all of them said lunch is more fun without phones, so most students clearly agree.
    <b>(5)</b> Either we ban phones at lunch, or students will never learn to talk to each other face to face.
    <b>(6)</b> Besides, lots of other schools in the county are doing it, so we should too.
    <b>(7)</b> Teachers who disagree with this policy just don’t care about students.
    <b>(8)</b> A phone-free lunch would give students 30 minutes a day to connect in person, and our counselors say this kind of time helps students build friendships.</p></blockquote>
    <p><b>Your challenge:</b> Select every sentence that uses <b>flawed reasoning</b>. Then, in Step 1, <b>name the flaw</b> for each one (for example: false cause, hasty generalization, false dilemma, bandwagon, attack on the person) and <b>rewrite one</b> of them so it uses valid reasoning.</p>`,
  why: "The flawed sentences sound confident and use numbers. Telling a real piece of evidence apart from a fake one, and naming exactly what is wrong, takes careful reading.",
  answer: { type: "multi", prompt: "Select ALL the sentences that use flawed reasoning.",
    opts: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4", "Sentence 5", "Sentence 6", "Sentence 7", "Sentence 8"], a: [1, 3, 4, 5, 6] },
  hints: ["Sentence 1 is the claim. It is an opinion, but stating an opinion isn’t a reasoning error. Look at the support sentences.",
    "Ask of each sentence: Does it prove too much from too little? Does it give only two choices? Does it attack people instead of ideas? Does it just say “everyone’s doing it”?",
    "There are five flawed sentences. Sentence 2 confuses “happened after” with “was caused by.” Sentence 4 uses only three people."],
  solution: `<p><b>Flawed: 2, 4, 5, 6, 7.</b></p>
    <ul><li><b>(2) False cause:</b> Scores rose <i>after</i> the ban, but many other things could have caused that (new teachers, new tests). One example can’t “prove” cause.</li>
    <li><b>(4) Hasty generalization:</b> Three friends are not a fair sample of the whole school.</li>
    <li><b>(5) False dilemma:</b> There are more than two possibilities. Students can learn to talk face to face in many other ways.</li>
    <li><b>(6) Bandwagon:</b> Other schools doing something doesn’t prove it works here.</li>
    <li><b>(7) Attack on the person (ad hominem):</b> It insults people who disagree instead of answering their reasons.</li></ul>
    <p><b>Valid: 3 and 8.</b> Sentence 3 uses a large survey of our own students. Sentence 8 gives a logical benefit backed by an expert source (counselors).</p>
    <p><b>Sample rewrite of (2):</b> “After Valley High banned phones at lunch, its test scores rose 6%. While other factors could explain this, it suggests a ban is worth trying here.”</p>`,
  deeper: "Remove all five flawed sentences. Is the argument still convincing? What kind of evidence would you need to add to make it truly persuasive to someone who disagrees?" },

{ id: "e10-gettysburg", grade: 10, subject: "English", course: "English 10", unit: "Rhetoric & Speeches", std: "RI.9-10.4 · RI.9-10.6", spice: 3,
  title: "Lincoln’s Paradox",
  teaser: "Lincoln came to dedicate a cemetery, then said he couldn’t. Why would a speaker undercut his own purpose?",
  ask: "Why does Lincoln say “we can not dedicate” the ground at an event held to dedicate it?",
  prompt: `<p>On November 19, 1863, President Abraham Lincoln spoke at the dedication of a national cemetery for Union soldiers who died at the Battle of Gettysburg. Near the end of his short speech he said:</p>
    <blockquote>But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here.</blockquote>
    <p><b>Your challenge:</b> Analyze <b>two</b> of Lincoln’s choices and explain their purpose:</p>
    <ol><li>The <b>paradox</b>: He says they cannot dedicate the ground at the very event held to dedicate it.</li>
    <li>The <b>three verbs</b>: dedicate → consecrate → hallow. Why these three, in this order?</li>
    <li>The <b>irony</b> of “The world will little note, nor long remember what we say here.”</li></ol>`,
  why: "On the surface Lincoln seems to contradict himself. You have to figure out how a contradiction can be a deliberate rhetorical move, and look up what the three verbs mean.",
  answer: { type: "open" },
  rubric: ["I explained the paradox and what Lincoln is really saying (the soldiers’ actions already made the ground sacred).",
    "I explained why the three verbs build in intensity (dedicate = set aside, consecrate = make sacred, hallow = make holy).",
    "I explained the irony that this speech is now one of the most remembered in U.S. history.",
    "I connected these choices to Lincoln’s purpose and audience (honoring the dead and inspiring the living during the war).",
    "I quoted the text at least twice."],
  hints: ["Look up “consecrate” and “hallow.” How is each one a step up from “dedicate”?",
    "Who does Lincoln say actually made the ground sacred? Why might he want to give the credit to them instead of to the officials at the ceremony?",
    "Think about the next part of the speech: Lincoln goes on to say it is for the living to be dedicated to “the unfinished work.” How does the paradox set that up?"],
  solution: `<p><b>Model answer:</b> Lincoln uses a <b>paradox</b>, saying “we can not dedicate” the ground at a ceremony meant to dedicate it, to shift the honor away from the speakers and onto the soldiers. The “brave men, living and dead” already “consecrated it” through their sacrifice, so any words would add nothing. This humility makes the audience feel the weight of what the soldiers did.</p>
    <p>The three verbs build like a staircase: <i>dedicate</i> means to set aside for a purpose, <i>consecrate</i> means to make sacred, and <i>hallow</i> means to make holy. Each step raises the importance of the ground, and the dashes slow the speech down, which makes it feel solemn.</p>
    <p>Finally, “The world will little note, nor long remember what we say here” is <b>ironic</b>, because this short speech became one of the most quoted in American history. Lincoln’s humility is exactly what made it memorable. All three choices serve his purpose: to honor the dead and turn the audience’s grief into a commitment to finish the war and preserve the nation.</p>`,
  deeper: "Lincoln’s whole speech is only about 270 words, and the main speaker that day talked for about two hours. Argue: Is a shorter speech more powerful than a longer one? When would a long speech be the better choice?" },

/* ---------------- 11th grade · American Literature ---------------- */
{ id: "e11-douglass", grade: 11, subject: "English", course: "American Literature", unit: "Rhetoric: Voices of Abolition", std: "RI.11-12.6 · RI.11-12.9", spice: 3,
  title: "“This Fourth of July Is Yours, Not Mine”",
  teaser: "Frederick Douglass was invited to celebrate the Fourth. Analyze how his pronouns turn a celebration into an accusation.",
  ask: "How does Douglass use pronouns like “your” and “mine” to build his argument, and why is that effective for his audience?",
  prompt: `<p>On July 5, 1852, Frederick Douglass, who had escaped slavery, spoke to the Rochester Ladies’ Anti-Slavery Society in New York. The audience was mostly white Northerners who opposed slavery. Two short excerpts:</p>
    <blockquote>This Fourth of July is yours, not mine. You may rejoice, I must mourn.</blockquote>
    <blockquote>What, to the American slave, is your 4th of July? I answer; a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim.</blockquote>
    <p><b>Your challenge:</b> Analyze how Douglass uses <b>pronouns</b> (you, your, yours vs. I, mine, him) to make his argument. Why might separating himself from an audience that <i>agreed</i> with him about slavery be a powerful (and risky) choice?</p>`,
  why: "The audience was on Douglass’s side, so it seems strange that he pushes them away. You have to analyze rhetoric, audience, and purpose at the same time.",
  answer: { type: "mc", prompt: "First, choose the BEST explanation of Douglass’s pronoun choice.",
    opts: ["He wants to insult the audience so they will leave.",
      "He uses “your” and “mine” to show that the freedoms the holiday celebrates belong only to some Americans, which forces even sympathetic listeners to see the nation’s hypocrisy.",
      "He is confused about which day the holiday falls on.",
      "He wants the audience to stop celebrating all holidays."], a: 1,
    why: { 0: "❌ He accepted their invitation and wanted their support. Why would he push them away on purpose?", 2: "❌ The speech was given on July 5, but the pronouns are about who the holiday belongs to.", 3: "❌ He is not against celebration in general. Think about what THIS holiday celebrates." } },
  hints: ["Underline every “you/your/yours” and circle every “I/mine/him.” What two groups does Douglass create?",
    "The Fourth of July celebrates freedom and independence. Who was excluded from that freedom in 1852?",
    "Even abolitionists were celebrating the Fourth. How does Douglass make them feel uncomfortable, and why would that move them to act?"],
  solution: `<p><b>Model answer:</b> Douglass builds his argument by dividing the room with pronouns. When he says “This Fourth of July is <b>yours</b>, not <b>mine</b>,” he separates the free audience from the enslaved people he speaks for. The holiday celebrates liberty, but by calling it “<b>your</b> 4th of July,” he shows that the nation’s freedom is not shared. Switching to “the American slave… <b>him</b>” makes the enslaved person the center of the question instead of the audience.</p>
    <p>This choice is risky because his listeners already opposed slavery and might feel accused. But it is powerful because it forces even sympathetic Northerners to see that celebrating freedom while slavery exists is hypocrisy. Douglass does not want comfortable agreement; he wants urgent action. The parallel structure “You may rejoice, I must mourn” makes the contrast impossible to ignore.</p>`,
  deeper: "Douglass later in the speech says he finds hope in the Declaration of Independence itself. How can someone criticize a nation so strongly while still believing in its founding ideals? Find a modern speaker who does the same thing." },

{ id: "e11-synthesis", grade: 11, subject: "English", course: "American Literature", unit: "Synthesis Writing", std: "W.11-12.1 · RI.11-12.7", spice: 3,
  title: "The Four-Day School Week: Two Sources Disagree",
  teaser: "Two sources, two different conclusions. Write a qualified claim that respects both.",
  ask: "How do I write a claim about the four-day school week that accounts for two sources that disagree?",
  prompt: `<p>Read these two practice sources about a district that switched to a four-day school week (longer days, Fridays off).</p>
    <blockquote><b>Source A: District Survey (practice text)</b><br>After one year, 81% of teachers said they were less burned out, teacher job applications doubled, and student attendance rose from 91% to 94%. The district saved about 2% of its budget on buses and utilities.</blockquote>
    <blockquote><b>Source B: Research Brief (practice text)</b><br>Across several districts, students in four-day weeks scored slightly lower in math after two to three years than similar students in five-day weeks. The gap was largest for students from low-income families, who often lost access to school meals and supervision on Fridays.</blockquote>
    <p><b>Your challenge:</b> Write a <b>qualified claim</b> (not just “yes” or “no”) about whether districts should adopt a four-day week. Use evidence from <b>both</b> sources and explain <b>under what conditions</b> your position is true.</p>`,
  why: "It is easy to pick a side and ignore the source that disagrees. A qualified claim has to hold both sets of evidence at once and explain the trade-off.",
  answer: { type: "open" },
  rubric: ["My claim is qualified (uses words like “only if,” “when,” “unless,” or “for districts that…”).",
    "I used specific evidence from Source A.",
    "I used specific evidence from Source B.",
    "I explained the trade-off or tension between the two sources.",
    "I noticed a difference between the sources (one district vs. several, one year vs. 2–3 years, survey vs. test scores)."],
  hints: ["Make a T-chart: benefits (Source A) vs. costs (Source B). Who benefits? Who pays the cost?",
    "Compare the sources themselves: How long did each one study? How many districts? What did each one measure?",
    "Try this frame: “Districts should adopt a four-day week only if ___, because although ___ (Source A), ___ (Source B).”"],
  solution: `<p><b>Model qualified claim:</b> Districts should consider a four-day week <b>only if</b> they also provide Friday meals, supervision, and tutoring for students who need them, because the schedule helps teachers but can hurt the students with the fewest resources.</p>
    <p>Source A shows real benefits: 81% of teachers felt less burned out, applications doubled, and attendance rose from 91% to 94%. However, Source B found that after two to three years, students in four-day weeks scored slightly lower in math, especially low-income students who “lost access to school meals and supervision on Fridays.”</p>
    <p>The sources also measure different things: Source A covers <b>one district for one year</b> using surveys and attendance, while Source B covers <b>several districts over a longer time</b> using test scores. Short-term happiness and long-term learning are not the same, so a district needs a plan to protect learning before switching.</p>`,
  deeper: "Source A’s district saved 2% of its budget. If you were on the school board, how would you decide whether that savings is worth a small drop in math scores? What values are you weighing?" },

/* ---------------- 12th grade · English 12 / ERWC ---------------- */
{ id: "e12-hamlet", grade: 12, subject: "English", course: "English 12 / British Literature", unit: "Shakespearean Tragedy: Hamlet", std: "RL.11-12.4 · RL.11-12.3", spice: 3,
  title: "Taking Arms Against a Sea",
  teaser: "Hamlet mixes two metaphors: fighting with weapons and fighting the ocean. Was it a mistake, or the whole point?",
  ask: "Why does Shakespeare give Hamlet the mixed metaphor “take arms against a sea of troubles”?",
  prompt: `<p>In Act 3, Scene 1 of <i>Hamlet</i>, the prince thinks aloud about whether to endure his suffering or fight back:</p>
    <blockquote>To be, or not to be, that is the question:<br>Whether ’tis nobler in the mind to suffer<br>The slings and arrows of outrageous fortune,<br>Or to take arms against a sea of troubles,<br>And by opposing end them.</blockquote>
    <p>Critics have pointed out that “to take arms against a sea” is a <b>mixed metaphor</b>: you cannot fight the ocean with a sword.</p>
    <p><b>Your challenge:</b> Argue whether the mixed metaphor is a flaw or a deliberate choice. Explain what the image of fighting the sea suggests about Hamlet’s two options, and connect it to his character (his tendency to think instead of act).</p>`,
  why: "This speech is so famous that it is easy to skim it. You have to slow down to the level of a single image and connect it to the whole play.",
  answer: { type: "mc", prompt: "First, choose the BEST interpretation of the image.",
    opts: ["Hamlet is planning to sail away from Denmark.",
      "Fighting the sea is hopeless, which suggests that “opposing” his troubles might destroy Hamlet himself, so both of his choices seem impossible.",
      "Hamlet is excited to go to war against Norway.",
      "Shakespeare did not know what a metaphor was."], a: 1,
    why: { 0: "❌ This is figurative, not literal. What would happen to someone who attacks the ocean?", 2: "❌ The “arms” are figurative. He is talking about his own troubles, not a war.", 3: "❌ Shakespeare is a master of figurative language. Assume the choice is deliberate and ask why." } },
  hints: ["Picture it literally: a soldier with a sword charging into ocean waves. How does that end?",
    "Compare the two images: “slings and arrows” (being attacked, passive) vs. “take arms” (attacking, active). Is either option good?",
    "Hamlet spends most of the play thinking instead of acting. How might an image of an unwinnable fight explain why he hesitates?"],
  solution: `<p><b>Model answer:</b> The mixed metaphor is a <b>deliberate</b> choice. The first option, to “suffer / The slings and arrows of outrageous fortune,” pictures Hamlet as a target, passively hit again and again. The second option, to “take arms against a sea of troubles,” sounds heroic until we picture it: no one can defeat the ocean with a weapon. The image suggests that fighting back would overwhelm and drown Hamlet. That is why “by opposing end them” is ambiguous: opposing might end the troubles, or end Hamlet.</p>
    <p>By breaking the logic of the metaphor, Shakespeare shows Hamlet’s mind racing faster than his reasoning, and shows that <b>both</b> paths look hopeless to him. This explains his central flaw: he delays action because, in his mind, acting looks like a battle he cannot win. The “flaw” in the language mirrors the conflict in the character.</p>`,
  deeper: "Hamlet says “conscience does make cowards of us all” later in this speech. Is thinking carefully before acting a weakness or a strength? Use Hamlet and one real-world example." },

{ id: "e12-assume", grade: 12, subject: "English", course: "English 12 / ERWC", unit: "Argument: Assumptions", std: "RI.11-12.6 · W.11-12.1b", spice: 3,
  title: "The Hidden Assumptions",
  teaser: "An argument about AI and college essays sounds logical. Find the unstated assumptions it secretly depends on.",
  ask: "What unstated assumptions does the argument against college essays depend on?",
  prompt: `<p>Read this short argument (practice text):</p>
    <blockquote>Colleges should stop requiring personal essays. AI tools can now write a polished essay in seconds, so admissions officers can no longer tell which essays reflect a student’s own voice. Therefore, the essay no longer gives colleges useful information about applicants.</blockquote>
    <p>Every argument rests on <b>assumptions</b>: ideas the writer needs to be true but never says. If an assumption is false, the argument falls apart.</p>
    <p><b>Your challenge:</b> Select every <b>unstated assumption</b> the argument depends on. Then, in Step 1, write a <b>counterargument</b> that attacks the weakest assumption.</p>`,
  why: "Assumptions are invisible by definition. You have to read what is NOT on the page, and tell the difference between something the writer said, something they assumed, and something unrelated.",
  answer: { type: "multi", prompt: "Select ALL the unstated assumptions the argument NEEDS to be true.",
    opts: ["Many students would actually use AI to write their essays.",
      "The only useful thing an essay shows is a student’s own writing voice.",
      "AI tools can write essays quickly.",
      "Admissions officers have no other way (like interviews or in-person writing) to check if an essay is authentic.",
      "Colleges should use test scores instead of essays.",
      "Students who use AI are dishonest people."], a: [0, 1, 3] },
  hints: ["One of the choices is actually STATED in the argument, so it is not an unstated assumption. Find it and cross it off.",
    "For each choice, use the “negation test”: imagine it is FALSE. Does the argument fall apart? If yes, it is an assumption.",
    "If an essay could show other things (what a student chooses to write about, their experiences), would the essay still be useful even with AI around?"],
  solution: `<p><b>Assumptions: 1, 2, and 4.</b></p>
    <ul><li><b>Many students would use AI.</b> If only a few did, most essays would still reflect real voices.</li>
    <li><b>Voice is the only value of an essay.</b> If essays also show a student’s experiences, priorities, and the story they choose to tell, they still give useful information.</li>
    <li><b>No other way to check authenticity.</b> If colleges can use interviews, timed writing, or follow-up questions, the problem can be solved without dropping the essay.</li></ul>
    <p><b>Not assumptions:</b> “AI can write quickly” is <i>stated</i>. “Use test scores” and “AI users are dishonest” are not needed for the argument to work.</p>
    <p><b>Sample counterargument:</b> The argument assumes an essay’s only value is a student’s writing voice, but an essay also reveals what experiences a student values and how they reflect on them. Even an AI-polished essay starts with a student’s own story, so colleges should change how they use essays, not eliminate them.</p>`,
  deeper: "Pick a rule at your school (dress code, phone policy, grading policy). What unstated assumptions does it rest on? Which assumption would you challenge first, and how?" }
);


/* =====================================================================
   SET 2: more English challenges from different units
   Passages are public domain (Dunbar, Thoreau, Fitzgerald, Shelley,
   Swift) or original practice texts.
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · English 9 (set 2) ---------------- */
{ id: "e9-mask", grade: 9, subject: "English", course: "English 9", unit: "Poetry", std: "RL.9-10.4 · RL.9-10.2", spice: 3,
  title: "Who Wears the Mask?",
  teaser: "A poem about hiding pain behind a smile. Figure out who “we” are, and why the poem itself takes the mask off.",
  ask: "Who is the “we” in Dunbar’s “We Wear the Mask,” and why is the poem ironic?",
  prompt: `<p>Paul Laurence Dunbar, one of the first nationally famous Black American poets, published this poem in 1895, about 30 years after the end of slavery. Here is the first stanza:</p>
    <blockquote>We wear the mask that grins and lies,<br>It hides our cheeks and shades our eyes,—<br>This debt we pay to human guile;<br>With torn and bleeding hearts we smile,<br>And mouth with myriad subtleties.</blockquote>
    <p><b>Your challenge:</b> (1) Explain what the “mask” is and why someone would wear it. (2) Use the poem’s date and the poet’s life to argue who “we” most likely refers to. (3) Explain the <b>irony</b>: if the mask hides the truth, what does the poem itself do?</p>`,
  why: "The poem never names who “we” are. You have to use historical context to make an inference, and then notice something about the poem as a whole instead of just one line.",
  answer: { type: "mc", prompt: "First: What does the mask that “grins and lies” MOST represent?",
    opts: ["A Halloween costume.",
      "A cheerful outward face that hides pain and anger, worn because showing true feelings would be unsafe.",
      "The poet’s wish to become an actor.",
      "A medical mask worn during illness."], a: 1,
    why: { 0: "❌ It’s figurative. Look at “torn and bleeding hearts we smile.”", 2: "❌ There’s no mention of acting. Why would someone need to hide feelings?", 3: "❌ Read it figuratively. It “grins and lies.”" } },
  hints: ["Find the contrast in line 4: “torn and bleeding hearts” vs. “we smile.” What is being hidden?",
    "In 1895, Black Americans faced segregation laws and racial violence. Why might showing anger or sadness in public be dangerous?",
    "The mask hides the truth from the world. A poem is published for the world to read. What is Dunbar doing by writing this?"],
  solution: `<p><b>Model answer:</b> The “mask that grins and lies” is a cheerful outward face that hides deep pain, shown in the contrast “With torn and bleeding hearts we smile.” People wear it as a “debt we pay to human guile,” meaning they hide their true feelings to survive in a deceptive, hostile world.</p>
    <p>Because Dunbar was a Black poet writing in 1895, during the rise of segregation laws and racial violence after Reconstruction, “we” most likely refers to <b>Black Americans</b>, who often had to appear content and nonthreatening in public to stay safe. The poem’s “we” can also speak to anyone forced to hide suffering.</p>
    <p>The <b>irony</b> is that the poem itself removes the mask: by describing the hidden pain to readers, Dunbar reveals exactly what the mask is meant to hide.</p>`,
  deeper: "Do people still wear “masks” today? Think about social media, school, or work. Is wearing a mask always harmful, or can it sometimes protect a person?" },

{ id: "e9-odysseus", grade: 9, subject: "English", course: "English 9", unit: "Epic Poetry: The Odyssey", std: "RL.9-10.3 · W.9-10.1", spice: 2,
  title: "Hero or Fool? Odysseus and the Cyclops",
  teaser: "Odysseus outsmarts the Cyclops, then shouts his real name. Was it heroic or the biggest mistake of his journey?",
  ask: "Does Odysseus’s choice to reveal his name to the Cyclops make him more or less of a hero?",
  prompt: `<p>In Homer’s <i>Odyssey</i>, Odysseus and his men are trapped in the cave of the Cyclops Polyphemus, who eats several of the men. Odysseus tells Polyphemus his name is <b>“Nobody”</b>. He gets the giant drunk, then blinds him with a sharpened stake. When the other Cyclopes hear Polyphemus screaming and ask who is hurting him, he yells, “Nobody!” so they leave. Odysseus and his men escape by clinging to the bellies of the giant’s sheep.</p>
    <p>As his ship sails away, Odysseus can’t resist. Even though his men beg him to be quiet, he shouts back his <b>real name</b> and where he lives. Polyphemus then prays to his father, <b>Poseidon</b>, god of the sea, to curse Odysseus. Poseidon’s anger delays Odysseus’s return home for years, and none of his crew survives the journey.</p>
    <p><b>Your challenge:</b> Make an argument: Does this episode show Odysseus as a <b>hero</b>, a <b>fool</b>, or both? Use the ancient Greek ideas of <b>kleos</b> (glory, being remembered) and <b>hubris</b> (excessive pride) in your answer.</p>`,
  why: "The same character shows his best trait (cleverness) and his worst (pride) in one scene. You have to weigh both and use ideas from a different culture’s values, not just modern ones.",
  answer: { type: "open" },
  rubric: ["I made a clear claim (hero, fool, or both) and did not just summarize.",
    "I used the “Nobody” trick or the sheep escape as evidence of cleverness.",
    "I used the name-shouting as evidence of pride or hubris and explained its consequence (Poseidon’s curse).",
    "I explained kleos: why Odysseus might WANT the Cyclops to know his name.",
    "I addressed the other side of the argument."],
  hints: ["List what Odysseus does well in this episode and what he does badly.",
    "Kleos means glory that lasts after you die. Why would a Greek hero want his name known after a great victory? Why is “Nobody” a problem for kleos?",
    "Hubris is pride that challenges the gods or fate. What is the cost of his shout for his crew?"],
  solution: `<p><b>Model answer (both):</b> In the Cyclops episode, Odysseus is both a brilliant hero and a proud fool. His cleverness saves his men: calling himself “Nobody” tricks the other Cyclopes into leaving, and hiding under the sheep gets the crew out of the cave. No amount of strength could have done that.</p>
    <p>However, his victory is ruined by <b>hubris</b>. In Greek culture, a hero wanted <b>kleos</b>, lasting glory, and a win credited to “Nobody” earns none. So Odysseus shouts his real name, ignoring his men’s pleas. This lets Polyphemus call on Poseidon, whose curse delays Odysseus for years and contributes to the loss of every crew member.</p>
    <p>Some readers argue that wanting kleos was normal and even admirable for a Greek hero. But a true leader puts his crew’s safety above his own fame. This scene shows that the same pride that drives a hero to greatness can also cause his greatest suffering.</p>`,
  deeper: "Who is a modern figure (athlete, celebrity, leader) whose pride helped them succeed AND caused a downfall? Compare them to Odysseus." },

/* ---------------- 10th grade · English 10 (set 2) ---------------- */
{ id: "e10-dystopia", grade: 10, subject: "English", course: "English 10", unit: "Dystopian Literature", std: "L.9-10.5b · RL.9-10.1 · RL.9-10.4", spice: 3,
  title: "Read Between the Lines of the Announcement",
  teaser: "A cheerful city announcement hides a frightening society. Decode the euphemisms to reveal what’s really happening.",
  ask: "What does the city announcement reveal about the society through its euphemisms and word choice?",
  prompt: `<p>Read this original dystopian excerpt: a morning announcement played on every screen in the city of Brightwell.</p>
    <blockquote>Good morning, grateful citizens of Brightwell! Today’s Happiness Index is 98%, our highest ever. Thank you for choosing joy!<br><br>
    Reminder: Quiet Hours now begin at 6:00 p.m. Neighbors who notice unapproved gatherings can earn bonus Harmony Points by sharing what they see.<br><br>
    This week, three residents completed their Wellness Retreats and have been relocated to new communities where they can continue growing. We celebrate their journey!<br><br>
    Remember: Questions slow us down. Trust lifts us up. Have a bright day!</blockquote>
    <p><b>Your challenge:</b> Identify at least <b>three euphemisms</b> (pleasant words used to hide something unpleasant). For each one, explain what is <b>really</b> happening. Then make a claim about what this society values and what it fears.</p>`,
  why: "Nothing in the text is openly scary. You have to infer a whole society from connotation, positive words that point to negative realities.",
  answer: { type: "multi", prompt: "Select ALL the phrases that are most likely euphemisms hiding something sinister.",
    opts: ["“Wellness Retreats”", "“relocated to new communities”", "“Good morning”", "“share what they see” for “Harmony Points”", "“Quiet Hours” starting at 6:00 p.m.", "“Have a bright day!”"], a: [0, 1, 3, 4] },
  hints: ["A euphemism makes something bad sound nice. Look for official-sounding names for programs.",
    "Ask: Why would residents be “relocated” after a “retreat”? Why would people get points for reporting neighbors?",
    "Look at the last line. What does it say about questions? What kind of government discourages questions?"],
  solution: `<p><b>Euphemisms and what they hide:</b></p>
    <ul><li><b>“Wellness Retreats”</b> → likely forced re-education or detention for people who don’t conform.</li>
    <li><b>“Relocated to new communities”</b> → people disappear or are removed from their homes; the announcement celebrates it so no one asks.</li>
    <li><b>Sharing what they see for “Harmony Points”</b> → citizens are rewarded for spying on and reporting their neighbors.</li>
    <li><b>“Quiet Hours” at 6:00 p.m.</b> → a curfew that prevents people from meeting.</li></ul>
    <p>“Good morning” and “Have a bright day!” are ordinary friendly phrases. They add to the cheerful tone but don’t hide anything by themselves.</p>
    <p><b>Claim:</b> Brightwell values <b>obedience and the appearance of happiness</b> over truth and freedom. It fears <b>questions and people gathering together</b>, because citizens who talk and question could challenge those in power. The cheerful words (“grateful,” “joy,” “celebrate”) make control feel like kindness.</p>`,
  deeper: "Find a real-world euphemism used by a government, company, or school (like “downsizing” for firing people). Why do organizations use euphemisms? When is it harmful?" },

{ id: "e10-sources", grade: 10, subject: "English", course: "English 10", unit: "Research Writing", std: "W.9-10.8 · RI.9-10.8", spice: 2,
  title: "Which Sources Would You Cite?",
  teaser: "Five sources about energy drinks. Only some are credible enough for a research paper. Can you tell which?",
  ask: "Which of these five sources about energy drinks are credible enough to cite in a research paper, and why?",
  prompt: `<p>You’re writing a research paper on the question: <b>“Are energy drinks safe for teenagers?”</b> You found these five sources (practice descriptions):</p>
    <ol>
    <li><b>A website run by an energy drink company</b> that says its drinks are “a safe, fun boost for active teens.”</li>
    <li><b>A report from a national pediatrics organization</b> (a group of children’s doctors) that reviews many studies and recommends teens avoid energy drinks.</li>
    <li><b>A viral video</b> with 2 million views in which an influencer says she drinks three energy drinks a day and feels “amazing.”</li>
    <li><b>A study in a peer-reviewed medical journal</b> that measured heart rate and blood pressure in 200 young adults after drinking energy drinks.</li>
    <li><b>A news article from a major newspaper</b> that interviews a cardiologist and links to the original studies it describes.</li></ol>
    <p><b>Your challenge:</b> Select the sources you would cite. Then, in Step 1, explain your reasoning using these criteria: <b>expertise</b>, <b>purpose/bias</b>, <b>evidence</b>, and <b>audience</b>. Also explain one <b>limitation</b> of a source you chose.</p>`,
  why: "Some weak sources look popular, and some strong sources have limits. You have to judge each with clear criteria, not by how convincing it sounds.",
  answer: { type: "multi", prompt: "Select ALL the sources that are credible enough to cite.", opts: ["Source 1: Company website", "Source 2: Pediatrics organization report", "Source 3: Viral influencer video", "Source 4: Peer-reviewed study", "Source 5: Newspaper article with expert and links"], a: [1, 3, 4] },
  hints: ["Ask of each source: Who made it? What do they gain if you believe them?",
    "One person’s experience is an anecdote. Is it evidence about all teenagers?",
    "A strong source can still have limits. Who were the 200 people in Source 4? Are they teenagers?"],
  solution: `<p><b>Cite: 2, 4, and 5.</b></p>
    <ul><li><b>Source 2:</b> Written by experts (children’s doctors), reviews many studies, and its purpose is health, not profit.</li>
    <li><b>Source 4:</b> Peer-reviewed means other experts checked the methods, and it uses measured data. <i>Limitation:</i> it studied young adults, not teenagers, so you should say that when you use it.</li>
    <li><b>Source 5:</b> It quotes an expert and links to original studies so you can verify claims. Best practice: also cite the original study.</li></ul>
    <p><b>Don’t cite as evidence:</b> <b>Source 1</b> has a profit motive (bias). <b>Source 3</b> is one person’s anecdote; popularity doesn’t equal accuracy. (You could mention Source 1 or 3 as an example of marketing to teens, but not as proof of safety.)</p>`,
  deeper: "Source 1 is biased, but could it still be useful in your paper? Explain a way to use a biased source honestly." },

/* ---------------- 11th grade · American Literature (set 2) ---------------- */
{ id: "e11-walden", grade: 11, subject: "English", course: "American Literature", unit: "Transcendentalism", std: "RI.11-12.2 · RI.11-12.6", spice: 3,
  title: "Did Thoreau Really “Go to the Woods”?",
  teaser: "Thoreau’s famous line about living deliberately sounds like he escaped society. The facts are more complicated.",
  ask: "Does the fact that Thoreau lived close to town weaken his argument in Walden?",
  prompt: `<p>In <i>Walden</i> (1854), Henry David Thoreau describes living in a small cabin he built near Walden Pond in Massachusetts for about two years. He explains why:</p>
    <blockquote>I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.</blockquote>
    <p>Critics often point out that his cabin was on land owned by his friend <b>Ralph Waldo Emerson</b>, only about a mile and a half from the town of Concord. Thoreau regularly walked into town, visited his family, and had dinner with friends.</p>
    <p><b>Your challenge:</b> Some readers say these facts make Thoreau a hypocrite. Others say they miss his point. Explain what Thoreau means by living <b>“deliberately,”</b> and argue whether his closeness to town weakens his message.</p>`,
  why: "You have to define an abstract idea (“deliberately”) from a single sentence and decide whether a writer’s life choices affect the strength of his argument.",
  answer: { type: "open" },
  rubric: ["I explained “live deliberately” in my own words (choosing on purpose instead of by habit).",
    "I quoted at least one phrase from the passage.",
    "I made a clear claim about whether the facts weaken his message.",
    "I addressed the opposing view.",
    "I connected the idea to life today (technology, school, work, or social media)."],
  hints: ["Look up “deliberately.” It means on purpose, carefully, with intention. What is the opposite?",
    "Does Thoreau say he wanted to be totally alone? Or that he wanted to focus on “the essential facts of life”?",
    "Is an experiment less valuable if it’s not extreme? What was Thoreau testing?"],
  solution: `<p><b>Model answer:</b> When Thoreau says he wanted to “live deliberately,” he means living on purpose instead of by habit: choosing what truly matters and cutting out distractions to “front only the essential facts of life.” His fear was reaching the end of his life and discovering “that I had not lived.”</p>
    <p>The facts that his cabin was on Emerson’s land and close to Concord do <b>not</b> seriously weaken his message, because his goal was not total isolation. His experiment was about <b>simplicity and attention</b>, not survival in the wilderness. Visiting town didn’t stop him from examining his life closely.</p>
    <p>Critics have a point that he had privileges, like a friend’s land and family nearby, that most people don’t. But his core idea, that we should choose our lives deliberately, does not depend on how far from town his cabin was. Today, someone could live deliberately by turning off notifications, without moving to the woods.</p>`,
  deeper: "Design your own “Walden experiment” for one week. What would you cut out of your life, and what would you hope to learn? What would count as evidence that it worked?" },

{ id: "e11-gatsby", grade: 11, subject: "English", course: "American Literature", unit: "The American Dream: The Great Gatsby", std: "RL.11-12.4 · RL.11-12.5", spice: 3,
  title: "Boats Against the Current",
  teaser: "The last line of The Great Gatsby pictures rowing forward and being pushed back. What does it say about the American Dream?",
  ask: "What does the final line of The Great Gatsby suggest about the American Dream?",
  prompt: `<p>F. Scott Fitzgerald’s <i>The Great Gatsby</i> (1925) ends with this sentence:</p>
    <blockquote style="font-size:1.12rem">So we beat on, boats against the current, borne back ceaselessly into the past.</blockquote>
    <p>Throughout the novel, Jay Gatsby builds a fortune to win back Daisy, the woman he loved five years earlier. He believes he can “repeat the past.” He fails, and dies.</p>
    <p><b>Your challenge:</b> Analyze the final sentence. Explain (1) the image of boats rowing against a current, (2) the tension between moving <b>forward</b> (“beat on”) and being pushed <b>backward</b> (“borne back”), and (3) what this suggests about Gatsby, and about the American Dream in general. Notice the pronoun <b>“we.”</b></p>`,
  why: "One sentence carries the meaning of the whole novel. You have to unpack an extended metaphor, a paradox, and a shift from one character to all of us.",
  answer: { type: "mc", prompt: "First: What is the BEST reading of “borne back ceaselessly into the past”?",
    opts: ["The characters take a boat trip at the end of the book.",
      "People keep striving toward the future, but their longing for the past keeps pulling them back, so their dreams can never fully be reached.",
      "Fitzgerald is saying rowing is good exercise.",
      "The narrator plans to travel back in time."], a: 1,
    why: { 0: "❌ It’s a metaphor, not a literal boat trip.", 2: "❌ Think figuratively. What is the “current”?", 3: "❌ It’s figurative. How was Gatsby trying to “repeat the past”?" } },
  hints: ["Picture it: rowing hard upstream while the river carries you back. Are you making progress?",
    "Gatsby’s whole plan was to get back to the past (Daisy, five years ago). How is his “future” goal actually about the past?",
    "Why does the narrator say “we” instead of “Gatsby”? Who is included?"],
  solution: `<p><b>Model answer:</b> In the final line, people are “boats against the current”: they “beat on,” rowing hard toward the future, but are “borne back ceaselessly into the past.” The effort never stops, and neither does the current, so true progress is impossible.</p>
    <p>This describes Gatsby perfectly. His dream seems to be about the future (wealth, a mansion, winning Daisy), but it is really an attempt to recapture the past. He works ceaselessly, yet the past he wants can never return.</p>
    <p>By shifting to <b>“we,”</b> Nick includes himself and the reader. The line suggests that the <b>American Dream</b> itself is built on hope and constant striving, but is often fueled by an idealized past that can’t be reached. The sentence is beautiful but tragic: we keep going anyway, which is both admirable and futile.</p>`,
  deeper: "Is it possible to chase a dream without being “borne back into the past”? Use an example from your own life or a modern story to argue whether hope is admirable or dangerous." },

/* ---------------- 12th grade · English 12 (set 2) ---------------- */
{ id: "e12-frankenstein", grade: 12, subject: "English", course: "English 12 / British Literature", unit: "Gothic & Romantic Literature: Frankenstein", std: "RL.11-12.3 · RL.11-12.1", spice: 3,
  title: "Who Is the Real Monster?",
  teaser: "Frankenstein’s creature says “misery made me a fiend.” Was he born a monster or made into one?",
  ask: "In Frankenstein, is the creature responsible for his violence, or is Victor Frankenstein to blame?",
  prompt: `<p>In Mary Shelley’s <i>Frankenstein</i> (1818), Victor Frankenstein creates a living being, then abandons it in horror the moment it opens its eyes. The creature teaches himself to speak and read, and tries to befriend a family, but everyone who sees him attacks him or runs. Eventually he murders people close to Victor. He tells Victor:</p>
    <blockquote>I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous.</blockquote>
    <p><b>Your challenge:</b> Argue who bears <b>more responsibility</b> for the creature’s crimes: the creature or Victor. You must address the creature’s claim (<b>nature vs. nurture</b>) and Victor’s choice to abandon him. Acknowledge the strongest point on the other side.</p>`,
  why: "The novel deliberately makes both characters sympathetic and guilty. You have to weigh responsibility, not just pick a villain, and use the text’s own argument about nature vs. nurture.",
  answer: { type: "open" },
  rubric: ["I made a clear claim about who bears MORE responsibility.",
    "I used the quote “misery made me a fiend” and explained the nature vs. nurture argument.",
    "I used Victor’s abandonment as evidence.",
    "I addressed the creature’s own choices (the murders).",
    "I acknowledged the strongest counterargument."],
  hints: ["Make a two-column list: Victor’s choices and the creature’s choices. Which happen first?",
    "The creature says he was born “benevolent and good.” What happened to him that changed him?",
    "Even if the creature was mistreated, he still chose to kill. Does mistreatment excuse violence, or only explain it?"],
  solution: `<p><b>Model answer:</b> Victor bears <b>more</b> responsibility, although the creature is still guilty of his crimes. Victor created a living being and then abandoned it the moment it opened its eyes, refusing the responsibility any creator or parent owes. The creature insists, “I was benevolent and good; misery made me a fiend,” and the novel supports this: he learns language and kindness on his own and tries to help a family, but every person rejects or attacks him. Shelley suggests that cruelty and isolation, not nature, created the monster.</p>
    <p>However, the creature still chooses to murder innocent people like William, who did nothing to him. Mistreatment can <b>explain</b> violence without <b>excusing</b> it. The strongest counterargument is that the creature is intelligent and knows right from wrong, so he is fully responsible for his actions.</p>
    <p>In the end, both are guilty, but Victor’s abandonment set everything in motion. The novel’s real warning is about creators who refuse responsibility for what they make.</p>`,
  deeper: "Scientists and tech companies today create powerful new things (AI, gene editing). What responsibilities does a creator have for how their creation is used? Use Frankenstein as a warning or a model." },

{ id: "e12-modest", grade: 12, subject: "English", course: "English 12 / ERWC", unit: "Satire", std: "RL.11-12.6 · RI.11-12.6", spice: 3,
  title: "A Modest (and Horrifying) Proposal",
  teaser: "Jonathan Swift calmly suggests the poor sell their children as food. Explain how a shocking “solution” attacks the real problem.",
  ask: "What is Swift really criticizing in “A Modest Proposal,” and why does he use a calm, logical tone?",
  prompt: `<p>In 1729, Ireland was suffering from extreme poverty and famine, while many wealthy English landlords profited from Irish land and paid little attention to the starving tenants. Jonathan Swift published an essay called <b>“A Modest Proposal.”</b> Written in the voice of a calm, reasonable economist, it suggests that poor Irish families sell their babies to the rich as food. The speaker writes that a young healthy child, well nursed, is at a year old</p>
    <blockquote>a most delicious, nourishing, and wholesome food, whether stewed, roasted, baked, or boiled</blockquote>
    <p>and lists the “benefits”: fewer poor people, income for families, and a new dish for the wealthy.</p>
    <p><b>Your challenge:</b> Explain (1) what Swift is <b>really</b> criticizing, (2) why the <b>calm, logical tone</b> makes the satire more powerful than an angry essay, and (3) the <b>risk</b> of writing satire this way.</p>`,
  why: "Satire says the opposite of what it means. You have to separate the speaker from the author and explain how tone and logic are used as weapons.",
  answer: { type: "mc", prompt: "First: What is Swift’s main target?",
    opts: ["Irish parents who don’t love their children.",
      "Cooking and recipes of the 1700s.",
      "The wealthy and the government, whose cruel, profit-focused treatment of the poor was already “consuming” the Irish.",
      "People who eat too much meat."], a: 2,
    why: { 0: "❌ Swift sympathized with the starving Irish. The proposal is meant to be monstrous.", 1: "❌ The food details are there to shock. What are they pointing at?", 3: "❌ The proposal isn’t really about diet. Who is “devouring” the poor already?" } },
  hints: ["Satire uses exaggeration to criticize something real. What real situation does “the rich eating the poor” exaggerate?",
    "Imagine the essay written angrily: “The rich are cruel!” Now compare it to a calm speaker who treats babies as a business plan. Which one sounds more like the actual policies of the time?",
    "What happens if a reader doesn’t realize it’s satire?"],
  solution: `<p><b>(1) The real target:</b> Swift is attacking the wealthy English landlords and policymakers who treated the Irish poor as economic resources instead of human beings. Selling babies as food is an exaggerated version of what was already happening: the rich were metaphorically “devouring” the poor through high rents and neglect.</p>
    <p><b>(2) Why the calm tone works:</b> The speaker sounds like a reasonable economist, using statistics and listing “benefits.” This copies the cold logic of real policies that discussed the poor as numbers. Seeing that logic applied to babies makes readers realize how inhumane it was all along. An angry essay is easy to dismiss; a calm one forces readers to feel the horror themselves.</p>
    <p><b>(3) The risk:</b> Some readers may miss the irony and take it literally, or be so offended that they miss the point. Satire depends on readers recognizing that the author does not agree with the speaker.</p>`,
  deeper: "Find a modern piece of satire (a satirical news site, a comedy sketch, a cartoon). What is its real target? Did anyone take it literally? Is satire still an effective way to create change?" }
);
