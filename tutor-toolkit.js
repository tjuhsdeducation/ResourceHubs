/* =====================================================================
   ✏️ TUTOR CENTER CONTENT (used by tutor-toolkit.html)
   Adapted and condensed from the AVID Tutorial Guide training handouts
   that our tutors complete in training (Tutorology / Self-Paced Tutor
   Training). Rewritten in plain language for quick use during tutorials.
   Edit any text between the quotes. Keep the commas and brackets.
   ===================================================================== */
window.TT = {

/* ---------- THE 10 STEPS, with what the tutor does and says ---------- */
steps: [
  { n: 1, phase: "Before", title: "Students take Cornell notes in their classes",
    what: "In their academic classes, students take focused Cornell notes, then review them, add questions in the left column, and write a summary.",
    job: ["Ask students to bring their Cornell notes to every tutorial. They are the main resource for the point of confusion.", "When you check binders, notice whether notes have questions on the left and a summary at the bottom."],
    say: ["“Where are your notes from that lesson? Let’s use them.”", "“What question did you write in the left column for this part?”"] },
  { n: 2, phase: "Before", title: "Students complete the TRF pre-work",
    what: "While doing homework, reviewing notes, or studying for a test, students find a real point of confusion (POC) and fill in the pre-work on the Tutorial Request Form (TRF).",
    job: ["Know what each box of the TRF asks for (see the TRF Guide).", "Encourage students to bring authentic questions: missed quiz items, homework they couldn’t finish, upcoming test topics."],
    say: ["“What’s coming up in that class? A quiz or test?”", "“Which problem did you get wrong on your last quiz? That’s a great tutorial question.”"] },
  { n: 3, phase: "Before", title: "Check the TRF and resources at the door",
    what: "As students enter, the teacher or tutor checks the TRF pre-work and the resources students brought (Cornell notes, textbook, quizzes, worksheets).",
    job: ["Look for a complete pre-work section and an actual question (not “I don’t get it”).", "If pre-work is missing, the student gets a zero for pre-work but still joins the group and participates (follow your teacher’s policy)."],
    say: ["“Show me your initial question and where it came from.”", "“Your POC needs to be a question. Can you turn ‘I don’t get #5’ into a question about the exact step?”"] },
  { n: 4, phase: "During", title: "Form tutorial groups (7 students or fewer per tutor)",
    what: "Students are placed into groups of 7 or fewer with one tutor. Groups sit in a horseshoe facing a whiteboard so everyone can see the presenter’s work.",
    job: ["Stay with ONE group the entire period.", "Sit with the group, away from the board, not in front of it.", "Ask your teacher how groups are formed (subject, class, grades, or teacher choice)."],
    say: ["“Let’s sit in a horseshoe so everyone can see the board.”", "“Let’s go around and read our questions to see if any are similar.”"] },
  { n: 5, phase: "During", title: "The presenter gives a 30-Second Speech; the group asks questions",
    what: "The student presenter writes the POC question on the board and gives a 30-Second Speech about their pre-work. Group members ask questions at Levels 1, 2, and 3 to guide the presenter’s thinking. Everyone takes three-column notes.",
    job: ["Choose the first presenter (someone with a test or quiz soon is a good choice).", "Sit in the presenter’s seat and take three-column notes on the presenter’s paper.", "Prompt GROUP MEMBERS to ask the questions. You have one voice, the same as everyone else.", "Track participation so every member asks at least one question.", "Mark the presenter’s “ah ha” moment with a “!” in the notes."],
    say: ["“Please share your 30-Second Speech using your TRF.”", "“Who is in the same class? What question could you ask based on your notes?”", "“Remember, I’m tracking participation. I want everyone to ask at least one question.”", "“I’m putting a ! here because you just figured it out.”"] },
  { n: 6, phase: "During", title: "Check for understanding",
    what: "The presenter reviews the work and explains the steps or process they used to clear up the POC. The group checks that the presenter really understands.",
    job: ["Ask the presenter to explain the steps in their own words.", "Have them connect the steps in the third column to the notes.", "If possible, have them try a similar problem on their own."],
    say: ["“Now that you understand it, explain how the steps in the third column connect to your notes.”", "“How would you teach this to a friend?”", "“Try this similar problem without help.”"] },
  { n: 7, phase: "During", title: "Repeat Steps 5 and 6 for as many students as time allows",
    what: "Repeat the process with the next presenter. Keep transitions quick. Students who don’t get to present go first next time.",
    job: ["Keep a list of who presented and who goes first next time.", "Make transitions fast: the next presenter should be ready to walk to the board.", "If the group can’t solve a POC, write a question to take to the content teacher, ask another tutor, or ask the AVID teacher."],
    say: ["“Who’s next? Grab your TRF and head to the board.”", "“We didn’t fully solve it. Let’s write a clear question you can ask your teacher tomorrow.”"] },
  { n: 8, phase: "After", title: "Students write a reflection",
    what: "Every student writes a reflection on the TRF about what they learned. Students who did not present reflect on another presenter’s POC.",
    job: ["Leave enough time (about 5 minutes) for reflections.", "Point students to the “!” in their notes to remember their “ah ha” moment.", "Help students who struggle by giving them sentence starters."],
    say: ["“Use the ! I marked in your notes to remember what helped you.”", "“Finish this sentence: I gained a better understanding when…”"] },
  { n: 9, phase: "After", title: "Turn in TRFs for grading and feedback",
    what: "Students turn in their TRFs to the tutor or teacher for grading and feedback. Students keep their three-column notes in their binder to study.",
    job: ["Collect TRFs in the spot your teacher chooses.", "If your teacher asks you to pre-grade, follow the point values on the form (see the TRF Guide) and your teacher’s policy."],
    say: ["“Keep your three-column notes in the right section of your binder. I’ll collect the TRF.”"] },
  { n: 10, phase: "After", title: "Debrief",
    what: "The teacher, tutors, and students talk about how the tutorial went and how to make it better. Students take their new learning back to their content classes.",
    job: ["Tell the teacher about any concerns: students without pre-work, off-task students, topics the whole group struggled with.", "Ask your teacher for feedback on your facilitation."],
    say: ["“What helped our group the most today? What should we change next time?”"] }
],

/* ---------- QUESTION STEMS by level and subject ---------- */
levels: [
  { n: 1, name: "Level 1: Gathering", sub: "On the page. Find out what the student already knows and connect to prior knowledge.", verbs: "complete, define, describe, identify, list, observe, recite, select" },
  { n: 2, name: "Level 2: Processing", sub: "Between the lines. Help the student make sense of the information, find connections, and break the problem down.", verbs: "compare, contrast, classify, sort, distinguish, explain why, infer, analyze" },
  { n: 3, name: "Level 3: Applying", sub: "Off the page. Help the student check, judge, predict, and use the learning in a new way.", verbs: "evaluate, judge, predict, hypothesize, generalize, imagine, speculate, if/then" }
],
stems: {
  "Any subject": {
    1: ["What do you know about your problem?", "What does ___ mean?", "What did you write in your class notes about this?", "What does the textbook say about this topic?", "What is the question asking you to find?", "Is there a formula, rule, or memory trick (like PEMDAS) that fits this problem?"],
    2: ["Can you break this problem into smaller parts? What are they?", "How can you organize this information?", "What can you infer from what you read?", "Is there a similar example in your notes or textbook?", "What is the relationship between ___ and ___?", "What have you already tried? Where did it stop working?", "How are ___ and ___ similar? How are they different?"],
    3: ["How do you know your answer is correct? How could you check it?", "Is there more than one way to solve this?", "Could there be another correct answer?", "Can you explain it in a different way?", "Where could you use this in real life?", "Would this method work on other problems? Which ones?", "What would happen if you changed ___?"] },
  "Math": {
    1: ["What information is given in the problem?", "What are you being asked to find?", "What formula would you use?", "What does ___ mean?", "What math concept does this connect to?", "Can you draw a diagram of it?"],
    2: ["What other information do you need to solve this?", "How could you show the data as a graph or table?", "What equation could you write for the word problem?", "Explain how you calculated that.", "Does that step make sense? Why?", "Compare this problem to the example in your notes. What is the same?"],
    3: ["How can you tell if your answer is reasonable?", "Plug your answer back in. Does it work?", "What would happen if ___ increased or decreased?", "Predict what happens to ___ as ___ changes.", "Using a math rule, how could we find ___ another way?", "Make up a problem like this one for the group."] },
  "Science": {
    1: ["What information is provided?", "What are you being asked to find?", "What does ___ mean?", "Which formula or law applies?", "Can you draw a diagram of the process?", "What science concept does this connect to?"],
    2: ["How could you show the data in a graph?", "Compare and contrast ___ and ___.", "What errors could have affected the results?", "How do the results support (or not support) the hypothesis?", "What evidence supports your explanation?", "What method would you use to ___?"],
    3: ["Predict what will happen to ___ if ___ changes.", "What would happen if this variable increased or decreased?", "How would repeated trials affect the data?", "Design a lab to test ___.", "Are the results biased? How could you tell?", "Why does this experiment matter for what you are learning?"] },
  "English": {
    1: ["What information does the text give?", "Where in the text does it say ___?", "Who are the main characters?", "When and where does it take place?", "What does this word mean in this sentence?", "What events led to ___?"],
    2: ["What is the main idea or theme?", "What evidence supports your explanation?", "What does ___ suggest about the character?", "Compare and contrast ___ and ___.", "What is the author trying to prove or show?", "What other ways could this be interpreted?"],
    3: ["What do you predict will happen? Why?", "Could this story really happen? Why or why not?", "Rewrite this part from another character’s point of view.", "What is most convincing to you in this text? Why?", "If you were there, what would you do?", "How does this connect to your life or the world?"] },
  "History / Social Studies": {
    1: ["What information is provided?", "When did the event take place?", "Who were the people involved?", "Where did it happen?", "What is the definition of ___?", "Can you put the events in order on a timeline?"],
    2: ["What was the cause? What was the effect?", "What is the main idea of this source?", "Compare and contrast ___ and ___.", "What information supports your explanation?", "What would you have done in that situation?", "What other ways could this event be interpreted?"],
    3: ["What would have happened if ___?", "Was ___ fair or ethical? Why or why not?", "Why is this event significant today?", "What do you think will happen next? Why?", "How can you tell if your analysis is reasonable?", "What would it have been like to live then?"] }
},

/* ---------- CHECKING FOR UNDERSTANDING (critical thinking standards) ---------- */
checks: [
  ["Clarity", "Can you say more? Can you give an example? Can you draw a picture of what you mean?"],
  ["Accuracy", "How could we check that? How could we find out if that is true?"],
  ["Precision", "Can you be more specific? Can you give more details?"],
  ["Relevance", "How does that connect to the question? How does that help us with this problem?"],
  ["Depth", "What makes this a hard problem? What parts are tricky?"],
  ["Breadth", "Is there another way to look at this? Another point of view?"],
  ["Logic", "Does this all fit together? Does your answer follow from the evidence?"],
  ["Significance", "What is the most important part to focus on?"]
],
socratic: [
  ["Clarify", ["What do you mean by ___?", "Could you put that another way?", "Could you give an example?", "Can someone summarize what ___ just said?"]],
  ["Probe reasons and evidence", ["How do you know?", "What makes you think that?", "What evidence supports that?", "How could we find out if that’s true?"]],
  ["Probe assumptions", ["What are you assuming here?", "Is that always true?", "What could we assume instead?"]],
  ["Other viewpoints", ["Is there another way to see this?", "What would someone who disagrees say?", "What’s an alternative?"]],
  ["Implications", ["If that’s true, what else must be true?", "What would happen as a result?", "What effect would that have?"]],
  ["Question the question", ["Is the question clear to everyone?", "Can we break the question into smaller questions?", "What do we need to know first?"]]
],
flow: [
  ["1 · Identify the point of confusion", "“What is your question?”"],
  ["2 · What do they already know?", "“What can you tell me about it?”"],
  ["3 · Clarify understanding", "“What does ___ mean?”"],
  ["4 · Push the thinking", "“What have you already tried?” “Is there another way to look at it?” “Where could you find more information?”"],
  ["5 · Decide where they are", "Clearly understands → “What would happen if you changed ___?” · Needs more inquiry → “What have we overlooked?” · Still confused → “What questions do you still have?”"],
  ["6 · Check for understanding", "“How would you teach this to a friend?”"],
  ["7 · Reflect", "“What did you learn?”"]
],

/* ---------- QUICK FIXES: real situations and what to do ---------- */
fixes: [
  { t: "The question is in a subject I’m not strong in", tag: "Content",
    d: ["Remember: you are a facilitator, not the answer key. Your job is to ask questions, not to know the answer.", "Have the presenter and group use their resources: Cornell notes, textbook examples, worked examples, class handouts.", "Use Level 1 and 2 question stems to find the exact step where the student gets stuck.", "For math, open the Math Tutor Guide and find a similar worked example to reveal one step at a time.", "If the group still can’t solve it, write a clear question for the content teacher. Never bluff an answer."],
    say: "“I’m not sure either, so let’s figure it out together. What does your textbook example show for this step?”" },
  { t: "A student arrives without the TRF pre-work", tag: "Before",
    d: ["Follow your teacher’s policy (usually a zero for pre-work).", "The student still joins the group, takes three-column notes, asks questions, and reflects on another presenter’s POC.", "Afterward, help them plan when they will do the pre-work next time."],
    say: "“You can’t present today without pre-work, but I still need your questions for the group. Take notes on each presenter.”" },
  { t: "The POC is vague (“I don’t get it”)", tag: "Before",
    d: ["Have the student copy the exact problem and source.", "Ask them to show the last step they are sure about. The POC is the next step.", "Help them write the POC as a question using academic vocabulary."],
    say: "“Show me the last step you know is right. What exactly stops you after that? Let’s write that as a question.”" },
  { t: "The presenter wants me to just give the answer", tag: "During",
    d: ["Put the work on the student. Ask a question that leads to the next step instead.", "Point them to a resource: “Where in your notes is there an example like this?”", "Let the group ask questions. Give the student time to think in silence."],
    say: "“If I tell you, you’ll forget it by the test. What do you think the first step is? What does your notes example do here?”" },
  { t: "Group members are off-task or not asking questions", tag: "During",
    d: ["Remind everyone you are tracking participation (use the participation tracker in Run a Tutorial).", "Give each member a role or a specific question to ask.", "Hand out question stems by level and ask each member to pick one.", "Make sure everyone is taking three-column notes on each presenter."],
    say: "“I’m tracking questions. Maria, pick a Level 2 question from this list for Jordan.”" },
  { t: "Students only ask Level 1 questions", tag: "During",
    d: ["Model one Level 2 or Level 3 question yourself, then ask a student to try one.", "Show the three-story house: gathering, processing, applying.", "Challenge the group: “Next question has to be Level 2 or higher.”"],
    say: "“Good Level 1 question. Who can turn it into a ‘why’ or ‘what if’ question?”" },
  { t: "The student can’t check the answer or explain the process", tag: "During",
    d: ["Have them substitute the answer back into the original problem (math and science).", "Ask them to write the steps in the third column and explain each one.", "Have them solve a similar problem on their own.", "Ask them to teach it to a group member."],
    say: "“Plug your answer back in. Does it work? Now walk us through the steps in your third column.”" },
  { t: "Nobody in the group can solve the POC", tag: "During",
    d: ["That’s okay. Use the time to write a strong question for the content teacher.", "Ask the AVID teacher or another tutor to visit the group.", "Have the student reflect on what they did figure out."],
    say: "“Let’s write a specific question you can take to your teacher tomorrow, so you’ll know exactly what to ask.”" },
  { t: "The group finishes early", tag: "During",
    d: ["Have students solve a similar problem from their notes or textbook.", "Review wrong answers on recent quizzes or tests.", "Practice released test questions or SAT/ACT/PSAT problems.", "Ask the teacher for an activity."] },
  { t: "A student asks for my phone number or messages me on social media", tag: "Boundaries",
    d: ["Do not give out personal contact information, and do not respond on personal social media.", "Keep all communication through school-approved channels.", "Tell your AVID teacher about the message."],
    say: "“I can’t share my personal number, but I’ll see you in class on Tuesday. Bring your question then.”" },
  { t: "A student tells me something serious (safety, abuse, drugs, self-harm)", tag: "Boundaries",
    d: ["Listen calmly and do not promise to keep it a secret.", "You must tell the AVID teacher right away. This is a legal obligation.", "Do not investigate or try to handle it on your own."],
    say: "“Thank you for telling me. I care about you, and I need to share this with your teacher so you can get help.”" },
  { t: "The whole group did poorly on the same test", tag: "Content",
    d: ["Have each student bring a missed test question as their next POC.", "Tell the AVID teacher so the class can plan extra support.", "Encourage students to visit the content teacher and use study groups."] }
],

/* ---------- TRF GUIDE: box by box ---------- */
trf: [
  { box: "Subject, Essential Question, Name, Date", pts: "", look: "The class and the standard or Essential Question from the student’s Cornell notes.", ask: ["Which class is this from?", "What is the Essential Question from your notes for this lesson?"] },
  { box: "Initial / Original Question", pts: "1", look: "The exact question copied from the source, with the source, page, and problem number.", ask: ["Where did this question come from: book, quiz, test, or notes?", "Can you say this question in your own words?"] },
  { box: "Key Academic Vocabulary", pts: "2", look: "Two key words from the problem with definitions from notes or the textbook.", ask: ["Which words do you need to understand to solve this?", "Where did you find the definition?", "Can you define it in your own words?"] },
  { box: "What I Know About My Question", pts: "2", look: "Two facts or ideas the student already knows that connect to the question.", ask: ["What does this remind you of?", "What do you already know that connects to this?", "Can you predict a reasonable answer?"] },
  { box: "Critical Thinking About the Initial Question", pts: "3", look: "The student’s actual work and thinking, up to the point where they get stuck. Shows what they tried.", ask: ["What did your notes or textbook say about this?", "Can you break the question into smaller parts?", "Have you done a similar problem? What steps did you take?", "Can you work backwards?"] },
  { box: "Identify General Process and Steps", pts: "2", look: "The steps (math/science) or process (English/history) the student followed so far.", ask: ["What are the steps you know?", "Which step comes right before you got stuck?"] },
  { box: "Question From the Point of Confusion", pts: "2", look: "A new, specific question about the exact step where the student is stuck, using academic vocabulary. NOT “I don’t get it.”", ask: ["What exactly is the step you can’t do?", "Can you use one of your vocabulary words in your question?"] },
  { box: "Resources", pts: "1", look: "The student brought Cornell notes, textbook, worksheets, or quizzes to use.", ask: ["What did you bring that can help us?"] },
  { box: "Collaborative Inquiry", pts: "2", look: "The student asked questions of other presenters and participated in the group.", ask: [] },
  { box: "Three-Column Notes", pts: "3", look: "Notes on each presenter: Question | Notes | Steps or Process.", ask: [] },
  { box: "Reflection", pts: "7", look: "What the POC was, what they learned, when it clicked, how it connects to past learning or their world, and what was meaningful.", ask: ["Look at the ! in your notes. What helped you understand?", "How does this connect to something you learned before?"] }
],
pocExamples: [
  ["I don’t get number 5.", "I can distribute in 3(x − 4) = 2x + 5, but I don’t understand how to get the x terms on the same side when there is an x on both sides."],
  ["I’m confused about photosynthesis.", "I know photosynthesis makes glucose, but I don’t understand why plants also need cellular respiration if they already make their own food."],
  ["I don’t know how to write my essay.", "I found two quotes for my claim, but I don’t know how to explain how the quote proves the character changed."]
],

/* ---------- TUTOR BASICS ---------- */
role: {
  does: ["Works with ONE group the whole period", "Sits with the group, away from the board", "Takes three-column notes for the presenter", "Gets group members to ask the questions", "Pushes everyone’s thinking to Level 2 and 3", "Checks that the presenter really understands", "Tracks participation"],
  doesnt: ["Teaches the answer or does the problem", "Stands at the board next to the presenter", "Works one-on-one with a single student", "Talks more than the students", "Bluffs when they don’t know", "Grades papers or does unrelated tasks during tutorials"]
},
top10: [
  "Arrive on time and ready to work.",
  "Take initiative: do what needs to be done without being asked.",
  "Dress professionally, following school and district guidelines.",
  "Treat students, tutors, teachers, and staff with respect.",
  "Communicate well: ask questions and give helpful feedback.",
  "Be eager to learn and open to new ideas.",
  "Collaborate with the AVID teacher, students, and other tutors.",
  "Do quality work. Your best effort raises student achievement.",
  "Know and follow district and school policies.",
  "Know AVID’s mission and strategies (WICOR, tutorials, Cornell notes)."
],
guidelines: [
  ["Give students time to think.", "Silence is okay. If you are talking, students aren’t learning."],
  ["Put the work on the students.", "Instead of “You need a comma here,” say “There’s a punctuation mark missing between here and here. Can you find it?”"],
  ["Use their resources.", "Cornell notes, textbooks, classmates, and their teachers."],
  ["Have them explain the process.", "Ask them to write out the steps or solve another problem of the same type."],
  ["Be flexible.", "There is usually more than one way to solve a problem or learn something."],
  ["Be patient.", "Encourage them to try a different strategy when the first one doesn’t work."],
  ["Never bluff.", "If you don’t know, say so and guide them to the teacher or a resource."],
  ["Be present.", "Keep absences to a minimum and tell your teacher ahead of time."],
  ["Accept coaching.", "Act on suggestions from the AVID teacher or site coordinator."],
  ["Build trust.", "Be positive, fair, and consistent. Never take advantage of a student’s trust."],
  ["Report regularly.", "You are the teacher’s eyes and ears on how each student is doing."]
],
never: ["Write passes for students", "Send students on errands outside the classroom", "Take charge of the class when the teacher is absent", "Drive or transport students", "Give out personal contact information or connect on personal social media", "Keep a student’s safety concern secret (always tell the teacher)"],
continuum: [
  { name: "Not AVID", c: "#d0453a", items: ["Helps one student with homework the whole time", "Does not use three-column notes", "Asks a question, then teaches the solution", "Students work alone on their own homework"] },
  { name: "Tutor-centered", c: "#e08a00", items: ["Stands at the board next to the presenter", "Moves between several groups", "Asks the presenter questions, then explains the solution", "Group mostly watches the tutor and presenter talk"] },
  { name: "Student-centered", c: "#2b7de9", items: ["Stays with one or two groups", "Presenter records notes on the board", "Asks questions of the presenter and group members", "Checks the presenter’s understanding"] },
  { name: "Collaborative (the goal)", c: "#1aa36f", items: ["Works with one group the whole period and sits with the group", "Takes three-column notes for the presenter", "Facilitates so group members ask the questions", "Pushes everyone’s thinking with Level 2 and 3 questions", "Checks the presenter’s and group’s understanding", "Everyone takes notes and reflects"] }
],
wicor: [
  ["Writing", "Cornell notes from class, TRF pre-work, three-column notes during the tutorial, and the written reflection."],
  ["Inquiry", "Finding the point of confusion and asking Level 1, 2, and 3 questions to guide the presenter."],
  ["Collaboration", "Group members work together to help the presenter understand, not to give answers."],
  ["Organization", "Binders, calendars, and the steps of the tutorial process."],
  ["Reading", "Reading class notes, textbooks, and resources to support the question."]
],
cornell: [
  ["C", "Create the format", "Set up the Cornell page and heading."],
  ["O", "Organize notes", "Take notes on the right side."],
  ["R", "Review and revise", "Within 24 hours, fix and add to the notes."],
  ["N", "Note key ideas", "Write questions in the left column."],
  ["E", "Exchange ideas", "Compare and discuss with classmates."],
  ["L", "Link learning", "Write a summary that answers the Essential Question."],
  ["L", "Learning tool", "Use the notes to study and in tutorials."],
  ["W", "Written feedback", "Teacher or tutor gives feedback."],
  ["A", "Address feedback", "Student fixes the notes based on feedback."],
  ["Y", "Your reflection", "Student reflects on the notes and learning."]
],

/* ---------- TRAINING REVIEW QUIZ ---------- */
quiz: [
  { q: "What is the largest number of students one tutor should have in a tutorial group?", o: ["4", "7", "10", "The whole class"], a: 1, why: "Groups keep a 7:1 student-to-tutor ratio so every student can participate." },
  { q: "During the tutorial, where should the tutor sit?", o: ["At the board next to the presenter", "At the teacher’s desk", "With the group, in the presenter’s seat", "Moving between groups"], a: 2, why: "The tutor sits with the group (often in the presenter’s seat) and takes three-column notes for the presenter." },
  { q: "Who should ask most of the questions to the student presenter?", o: ["The tutor", "The group members", "The teacher", "Nobody; the presenter works alone"], a: 1, why: "The tutor facilitates. Group members ask the questions, and the tutor has only one equal voice." },
  { q: "What does the student presenter give at the start?", o: ["A 30-Second Speech about the pre-work", "A 5-minute lecture", "The final answer", "A quiz for the group"], a: 0, why: "The 30-Second Speech shares the initial question, what they know, and where they got stuck." },
  { q: "What are the three columns in three-column notes?", o: ["Who, What, When", "Question, Notes, Steps/Process", "Level 1, Level 2, Level 3", "Before, During, After"], a: 1, why: "Point of confusion question | tutorial notes | steps (math/science) or process (English/history)." },
  { q: "A student arrives with no TRF pre-work. What usually happens?", o: ["They go home", "They present first", "They get a zero for pre-work but still join the group and participate", "The tutor fills it in for them"], a: 2, why: "They still take notes, ask questions, and reflect on another presenter’s point of confusion." },
  { q: "What does a tutor write next to the presenter’s “ah ha” moment?", o: ["A star", "An exclamation mark (!)", "A question mark", "The final answer"], a: 1, why: "The “!” helps the student find what helped them when they write the reflection." },
  { q: "Which is a Level 3 question?", o: ["What does ‘slope’ mean?", "What did your notes say?", "How could you check that your answer is correct?", "List the steps in your notes."], a: 2, why: "Level 3 questions ask students to apply, evaluate, check, or predict." },
  { q: "A group member asks, “How is this problem similar to the example in your notes?” Which level is that?", o: ["Level 1", "Level 2", "Level 3"], a: 1, why: "Comparing and finding relationships is Level 2 (processing)." },
  { q: "You don’t know how to solve a student’s chemistry problem. What should you do?", o: ["Make up an answer so the student isn’t discouraged", "Skip that student", "Use questions and the student’s resources; if still stuck, write a question for the content teacher", "Tell the student chemistry isn’t important"], a: 2, why: "Never bluff. Guide with questions and resources, and send unresolved questions to the teacher." },
  { q: "A student messages you on your personal social media. What should you do?", o: ["Reply and share your number", "Ignore it and say nothing", "Don’t respond personally, and tell the AVID teacher", "Add them as a friend"], a: 2, why: "Keep communication professional and through school channels, and inform the teacher." },
  { q: "What do students do at the very end of the tutorial?", o: ["Leave early", "Write a reflection and turn in the TRF", "Start their homework", "Erase all notes"], a: 1, why: "Step 8 is the written reflection, and Step 9 is turning in the TRF." }
]
};
