/* =====================================================================
   ENGLISH CHALLENGE PROBLEMS (shown on challenge.html)
   Same format as ch-math.js (see the notes at the top of that file).
   Passages are either public domain (Shakespeare, Lincoln, Douglass)
   or original practice texts written for this hub.
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · English 9 ---------------- */
{ id: "e9-rose", grade: 9, subject: "English", course: "English 9", std: "RL.9-10.3 · RL.9-10.5", spice: 2,
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

{ id: "e9-trophy", grade: 9, subject: "English", course: "English 9", std: "RL.9-10.5 · RL.9-10.3", spice: 2,
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
{ id: "e10-fallacy", grade: 10, subject: "English", course: "English 10", std: "RI.9-10.8 · W.9-10.1", spice: 2,
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

{ id: "e10-gettysburg", grade: 10, subject: "English", course: "English 10", std: "RI.9-10.4 · RI.9-10.6", spice: 3,
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
{ id: "e11-douglass", grade: 11, subject: "English", course: "American Literature", std: "RI.11-12.6 · RI.11-12.9", spice: 3,
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

{ id: "e11-synthesis", grade: 11, subject: "English", course: "American Literature", std: "W.11-12.1 · RI.11-12.7", spice: 3,
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
{ id: "e12-hamlet", grade: 12, subject: "English", course: "English 12 / British Literature", std: "RL.11-12.4 · RL.11-12.3", spice: 3,
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

{ id: "e12-assume", grade: 12, subject: "English", course: "English 12 / ERWC", std: "RI.11-12.6 · W.11-12.1b", spice: 3,
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
