/* =====================================================================
   WICOR PRACTICE ZONE: interactive student activities (grades 9–12)
   ✏️ EDIT HERE: the content for each activity is in the CONTENT block
   right below. Change the passage, questions or scenarios as needed.
   ===================================================================== */

const CONTENT = {
  /* Shared reading passage (used by R: Mark the Text and W: Summary Lab).
     Wrap each key term in {{double braces}}. Put a * before the claim sentence. */
  passageTitle: "Sleep: The Secret Study Tool",
  passage: [
    [
      "Most teenagers need eight to ten hours of sleep each night, yet many high school students regularly get far less.",
      "Part of the reason is biological.",
      "During {{adolescence}}, the body's internal clock, known as the {{circadian rhythm}}, shifts later, so teens naturally feel wide awake late at night and groggy early in the morning."
    ],
    [
      "This gap matters more than many students realize.",
      "Researchers have linked {{sleep deprivation}} to weaker {{cognitive}} skills, including attention, memory, and problem solving.",
      "Because the brain {{consolidates}} new learning during sleep, a student who stays up late cramming may actually remember less on test day."
    ],
    [
      "*Therefore, students and schools should treat sleep as a learning tool, not a luxury.",
      "Simple habits, like keeping a consistent bedtime, putting phones away an hour before sleep, and avoiding caffeine after lunch, can help students wake up ready to learn."
    ]
  ],

  /* W: academic terms the summary checker looks for (first word = label, rest = matching pattern) */
  summaryTerms: [
    ["adolescence", /adolescen/i],
    ["circadian rhythm", /circadian/i],
    ["sleep deprivation", /deprivation|deprived/i],
    ["cognitive", /cognitiv/i],
    ["consolidate", /consolidat/i],
    ["memory", /memor/i],
    ["attention", /attention/i],
    ["habits", /habit/i]
  ],

  /* I: Costa's Levels questions. level: 1, 2 or 3 */
  costa: [
    { q: "How many hours of sleep do teenagers need each night?", level: 1, why: "It asks you to recall a fact straight from the text, which is Level 1 (gathering)." },
    { q: "What is the circadian rhythm?", level: 1, why: "It asks you to define a term, which is Level 1 (gathering)." },
    { q: "List three habits the author recommends.", level: 1, why: "\"List\" means finding information that's already in the text, which is Level 1." },
    { q: "Why do teens naturally feel awake late at night?", level: 2, why: "It asks you to explain a cause, which is Level 2 (processing)." },
    { q: "Compare how sleep affects memory and how it affects mood.", level: 2, why: "Comparing means you work with the information yourself, which is Level 2." },
    { q: "What is the relationship between cramming and test performance?", level: 2, why: "Analyzing a relationship between ideas is Level 2 (processing)." },
    { q: "What might happen if every high school started at 10 a.m.?", level: 3, why: "Predicting a scenario that isn't in the text is Level 3 (applying)." },
    { q: "Should schools be responsible for students' sleep habits? Defend your answer.", level: 3, why: "Evaluating and taking a position is Level 3 (applying)." },
    { q: "Design a weekly routine that helps a student athlete get enough sleep.", level: 3, why: "Creating something new from what you learned is Level 3 (applying)." }
  ],

  /* C: collaboration scenarios. best = index of the strongest choice */
  collab: [
    { who: "Jordan says:", say: "\"I think schools should start later because teens' internal clocks shift.\"",
      ask: "You agree, and you have something to add. What do you say?",
      choices: [
        ["\"Yeah, same.\"", "Agreeing is a start, but it doesn't move the discussion forward. Add your own idea!"],
        ["\"I agree with Jordan, and I'd add that the text says the brain consolidates learning during sleep, so later starts could help test scores too.\"", "Yes! You named the speaker, built on their idea, and brought in evidence from the text."],
        ["\"That's what I was going to say.\"", "This doesn't add anything new. Try building on the idea with evidence."]
      ], best: 1 },
    { who: "Maya says:", say: "\"Phones don't really affect sleep. I use mine until midnight and I'm fine.\"",
      ask: "You respectfully disagree. What do you say?",
      choices: [
        ["\"That's wrong.\"", "Disagreeing is fine, but this shuts down the conversation and gives no reason."],
        ["\"Okay, whatever you think.\"", "This avoids the disagreement. Good discussions need respectful pushback!"],
        ["\"I see your point that you feel fine, but the author recommends putting phones away an hour before bed. I wonder if you'd feel even more rested?\"", "Great job! You acknowledged Maya's view, used the text, and kept the tone respectful."]
      ], best: 2 },
    { who: "In your tutorial group:", say: "Alex is presenting a math problem and says, \"I'm totally stuck.\"",
      ask: "What's the most helpful thing you can do as a group member?",
      choices: [
        ["Ask a guiding question: \"What do you already know about this type of problem? What's the first step you tried?\"", "Exactly! In AVID tutorials, inquiry helps the presenter discover the answer instead of just being told."],
        ["Grab the marker and solve it for Alex.", "It's kind, but Alex won't learn the process. Tutorials use questions, not answers."],
        ["Tell Alex to ask the teacher later.", "That skips the whole point of the tutorial. Your group can help Alex think it through!"]
      ], best: 0 },
    { who: "Sam says:", say: "\"Sleep matters because of the… synaptic consolidation thing.\"",
      ask: "You're not sure what Sam means. What do you say?",
      choices: [
        ["Stay quiet so you don't look confused.", "If you're confused, others probably are too. Asking for clarification helps everyone."],
        ["\"Can you clarify what you mean by consolidation? Is that from the second paragraph?\"", "Nice! A clarifying question keeps everyone on the same page and points back to the text."],
        ["\"That doesn't make sense.\"", "This may make Sam shut down. Try asking a clarifying question instead."]
      ], best: 1 },
    { who: "During the seminar:", say: "Two students have done all the talking for five minutes. Others haven't spoken yet.",
      ask: "What could you do?",
      choices: [
        ["Keep listening. They're making good points.", "Good listening matters, but a strong seminar includes every voice."],
        ["Say, \"You two are talking too much.\"", "The intention is good, but this could feel like an attack. Try inviting others in instead."],
        ["Say, \"Let's hear from someone who hasn't shared yet. Priya, what did you think about the claim?\"", "Excellent! You invited a new voice in with a specific, friendly question."]
      ], best: 2 }
  ],

  /* O: SMART goal fields */
  smart: [
    { L: "S", label: "Specific: what exactly will you do?", hint: "Name the class or skill and the result you want.", ph: "raise my Biology grade from a C to a B",
      ex: "raise my Biology grade from a C to a B", test: v => words(v) >= 6 },
    { L: "M", label: "Measurable: how will you track it?", hint: "Include a number, percent or how often.", ph: "check my grade every Friday and aim for 80% or higher",
      ex: "check my grade portal every Friday and aim for 80% or higher", test: v => words(v) >= 4 && /\d|%|percent|every|each|times|daily|weekly/i.test(v) },
    { L: "A", label: "Achievable: what steps will you take?", hint: "List 2–3 realistic actions.", ph: "turn in all homework, go to tutoring on Tuesdays, make flashcards",
      ex: "turn in all homework on time, go to tutoring on Tuesdays, and make flashcards before each quiz", test: v => words(v) >= 6 },
    { L: "R", label: "Relevant: why does this matter to you?", hint: "Connect it to your bigger goals.", ph: "I want to apply to nursing programs that need strong science grades",
      ex: "I want to apply to nursing programs, and they look for strong science grades", test: v => words(v) >= 6 },
    { L: "T", label: "Time-bound: by when?", hint: "Give a deadline: a date, week, or end of the grading period.", ph: "by the end of the semester (Dec. 18)",
      ex: "by the end of the fall semester (December 18)", test: v => /\b(by|before|until|end|week|weeks|month|months|semester|quarter|grading period|monday|tuesday|wednesday|thursday|friday|january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sept?|oct|nov|dec)\b|\d{1,2}\/\d{1,2}/i.test(v) }
  ]
};

/* ===================== (no need to edit below) ===================== */

function words(s) { return (s.trim().match(/[A-Za-z0-9'’%-]+/g) || []).length; }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const $ = (id) => document.getElementById(id);

/* ---------- Passport (progress saved in this browser) ---------- */
const LETTERS = [
  { L: "W", name: "Writing", c: "#0b6fb8" },
  { L: "I", name: "Inquiry", c: "#7b5cff" },
  { L: "C", name: "Collaboration", c: "#fb6f5b" },
  { L: "O", name: "Organization", c: "#2ec4b6" },
  { L: "R", name: "Reading", c: "#e09b00" }
];
let stamps = {};
try { stamps = JSON.parse(localStorage.getItem("wicorPassport") || "{}"); } catch (e) { stamps = {}; }

const passport = $("passport");
LETTERS.forEach(x => {
  const s = document.createElement("span");
  s.className = "stamp"; s.id = "stamp-" + x.L; s.textContent = x.L;
  s.style.setProperty("--c", x.c); s.title = x.name;
  passport.appendChild(s);
});
const resetBtn = document.createElement("button");
resetBtn.className = "reset"; resetBtn.textContent = "reset";
resetBtn.onclick = () => { stamps = {}; save(); paintStamps(); };
passport.appendChild(resetBtn);

function save() { try { localStorage.setItem("wicorPassport", JSON.stringify(stamps)); } catch (e) {} }
function paintStamps() { LETTERS.forEach(x => $("stamp-" + x.L).classList.toggle("done", !!stamps[x.L])); }
function earn(L) {
  if (stamps[L]) return;
  stamps[L] = true; save(); paintStamps(); confetti(60);
  if (LETTERS.every(x => stamps[x.L])) setTimeout(() => { confetti(160); alert("🎉 You completed your WICOR Passport! Show your teacher!"); }, 700);
}
paintStamps();

function confetti(n) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#ffb703", "#fb6f5b", "#7b5cff", "#0b6fb8", "#2ec4b6"];
  for (let i = 0; i < n; i++) {
    const d = document.createElement("div");
    d.className = "confetti";
    d.style.left = Math.random() * 100 + "vw";
    d.style.background = colors[i % colors.length];
    d.style.animationDuration = 1.6 + Math.random() * 1.6 + "s";
    d.style.animationDelay = Math.random() * 0.4 + "s";
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 3800);
  }
}

/* ---------- Tabs ---------- */
const ptabs = $("ptabs");
LETTERS.forEach((x, i) => {
  const b = document.createElement("button");
  b.className = "ptab"; b.style.setProperty("--c", x.c);
  b.textContent = `${x.L} · ${x.name}`; b.setAttribute("role", "tab");
  b.onclick = () => openTab(x.L);
  ptabs.appendChild(b);
});
function openTab(L) {
  ptabs.querySelectorAll(".ptab").forEach((b, i) => b.classList.toggle("on", LETTERS[i].L === L));
  LETTERS.forEach(x => { $("act-" + x.L).hidden = x.L !== L; });
}
openTab("W");

/* ---------- Passage rendering ---------- */
function renderPassage(el, interactive) {
  el.innerHTML = `<h4 style="margin:0 0 10px;font:700 1.15rem Fredoka,sans-serif">${CONTENT.passageTitle}</h4>`;
  CONTENT.passage.forEach((para, pi) => {
    const p = document.createElement("p");
    if (interactive) p.innerHTML = `<span class="pnum">${pi + 1}</span>`;
    para.forEach(raw => {
      const claim = raw.startsWith("*");
      const text = claim ? raw.slice(1) : raw;
      const sent = document.createElement("span");
      sent.className = "sent"; if (claim) sent.dataset.claim = "1";
      text.split(/(\{\{.*?\}\})/).forEach(part => {
        if (!part) return;
        if (part.startsWith("{{")) {
          const w = document.createElement("span");
          w.className = "w"; w.dataset.key = "1"; w.textContent = part.slice(2, -2);
          sent.appendChild(w);
        } else if (interactive) {
          part.split(/(\s+)/).forEach(tok => {
            if (/^\s+$/.test(tok) || !tok) { sent.appendChild(document.createTextNode(tok)); return; }
            const w = document.createElement("span"); w.className = "w"; w.textContent = tok; sent.appendChild(w);
          });
        } else sent.appendChild(document.createTextNode(part));
      });
      p.appendChild(sent); p.appendChild(document.createTextNode(" "));
    });
    el.appendChild(p);
  });
  if (!interactive) el.querySelectorAll(".w").forEach(w => w.className = "");
}

/* ---------- R: Mark the Text ---------- */
(function () {
  const box = $("markPassage"), fb = $("markFb"), act = $("act-R");
  renderPassage(box, true);
  let mode = "circle";
  act.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => {
    if (b.dataset.mode === "number") { box.classList.toggle("numbered"); b.classList.toggle("on", box.classList.contains("numbered")); return; }
    mode = b.dataset.mode;
    act.querySelectorAll("[data-mode=circle],[data-mode=underline]").forEach(x => x.classList.toggle("on", x === b));
    box.classList.toggle("underline-mode", mode === "underline");
  });
  box.addEventListener("click", e => {
    clearMarks();
    if (mode === "circle") { const w = e.target.closest(".w"); if (w) w.classList.toggle("circled"); }
    else { const s = e.target.closest(".sent"); if (s) s.classList.toggle("underlined"); }
  });
  function clearMarks() { box.querySelectorAll(".right,.wrong").forEach(x => x.classList.remove("right", "wrong")); }
  $("markClear").onclick = () => {
    box.querySelectorAll(".circled,.underlined").forEach(x => x.classList.remove("circled", "underlined"));
    box.classList.remove("numbered"); act.querySelector("[data-mode=number]").classList.remove("on");
    clearMarks(); fb.textContent = ""; fb.className = "feedback";
  };
  $("markCheck").onclick = () => {
    clearMarks();
    const keys = box.querySelectorAll(".w[data-key]");
    let found = 0, extra = 0;
    box.querySelectorAll(".w.circled").forEach(w => { if (w.dataset.key) { found++; w.classList.add("right"); } else { extra++; w.classList.add("wrong"); } });
    const unders = box.querySelectorAll(".sent.underlined");
    let claimOk = false, wrongUnder = 0;
    unders.forEach(s => { if (s.dataset.claim) { claimOk = true; s.classList.add("right"); } else { wrongUnder++; s.classList.add("wrong"); } });
    const numbered = box.classList.contains("numbered");
    const tips = [];
    if (!numbered) tips.push("Number the paragraphs first.");
    if (found < keys.length) tips.push(`You've circled ${found} of ${keys.length} key terms. Look for academic or scientific vocabulary.`);
    if (extra) tips.push(`${extra} circled word${extra > 1 ? "s aren't" : " isn't a"} key term${extra > 1 ? "s" : ""} (shown in red). Key terms are words you'd put in a glossary.`);
    if (!claimOk) tips.push("Underline the claim: the sentence that states the author's argument. Hint: look for a signal word like \"Therefore.\"");
    if (wrongUnder) tips.push("Only underline the one claim sentence. Supporting details aren't the claim.");
    if (!tips.length) { fb.className = "feedback good"; fb.textContent = "🌟 Perfect marking! You found every key term and the author's claim. R stamp earned!"; earn("R"); }
    else { fb.className = "feedback try"; fb.innerHTML = "Almost there:<br>• " + tips.join("<br>• "); }
  };
})();

/* ---------- W: Summary Lab ---------- */
(function () {
  renderPassage($("sumPassage"), false);
  const chips = $("sumTerms");
  CONTENT.summaryTerms.forEach(([label]) => { const c = document.createElement("span"); c.className = "termchip"; c.textContent = label; chips.appendChild(c); });

  const passageWords = CONTENT.passage.flat().join(" ").replace(/[{}*]/g, "").toLowerCase().match(/[a-z']+/g);
  const grams = new Set();
  for (let i = 0; i + 6 <= passageWords.length; i++) grams.add(passageWords.slice(i, i + 6).join(" "));

  const ta = $("sumText");
  ta.addEventListener("input", () => {
    const v = ta.value, n = words(v);
    const sentences = (v.match(/[.!?](\s|$)/g) || []).length;
    let termHits = 0;
    [...chips.children].forEach((c, i) => { const hit = CONTENT.summaryTerms[i][1].test(v); c.classList.toggle("hit", hit); if (hit) termHits++; });
    const sw = v.toLowerCase().match(/[a-z']+/g) || [];
    let copied = false;
    for (let i = 0; i + 6 <= sw.length; i++) if (grams.has(sw.slice(i, i + 6).join(" "))) { copied = true; break; }
    const checks = {
      len: n >= 30 && n <= 80,
      sent: sentences >= 2 && sentences <= 4,
      terms: termHits >= 3,
      claim: /sleep/i.test(v) && /learn|study|grade|school|test|academic/i.test(v),
      own: n >= 10 && !copied
    };
    let passed = 0;
    $("sumChecks").querySelectorAll("li").forEach(li => { const ok = checks[li.dataset.k]; li.classList.toggle("ok", ok); if (ok) passed++; });
    $("sumMeter").style.width = passed * 20 + "%";
    const fb = $("sumFb");
    if (passed === 5) { fb.className = "feedback good"; fb.textContent = "🌟 Strong summary! It's concise, uses academic language, and captures the main idea. W stamp earned!"; earn("W"); }
    else if (copied && n >= 10) { fb.className = "feedback try"; fb.textContent = "Heads up: part of your summary matches the passage word for word. Try paraphrasing it in your own words."; }
    else { fb.className = "feedback"; fb.textContent = ""; }
  });
})();

/* ---------- Generic quiz runner (used by I and C) ---------- */
function runQuiz({ items, prog, score, render, choicesEl, fb, isRight, explain, pass, L, label }) {
  let order, i, pts;
  function start() { order = shuffle(items); i = 0; pts = 0; show(); }
  function show() {
    fb.className = "feedback"; fb.textContent = "";
    $(prog).textContent = `${label} ${i + 1} of ${order.length}`;
    $(score).textContent = `⭐ ${pts}`;
    render(order[i]);
    [...choicesEl.children].forEach((btn, k) => btn.onclick = () => pick(k));
  }
  function pick(k) {
    const item = order[i], right = isRight(item, k);
    [...choicesEl.children].forEach((btn, j) => { btn.disabled = true; if (isRight(item, j)) btn.classList.add("right"); else if (j === k) btn.classList.add("wrong"); });
    if (right) pts++;
    $(score).textContent = `⭐ ${pts}`;
    fb.className = "feedback " + (right ? "good" : "try");
    fb.innerHTML = (right ? "✅ " : "🤔 ") + explain(item, k) + " ";
    const next = document.createElement("button");
    next.className = "chip-btn primary"; next.style.marginLeft = "6px";
    const last = i === order.length - 1;
    next.textContent = last ? "See results" : "Next →";
    next.onclick = () => last ? finish() : (i++, show());
    fb.appendChild(next);
  }
  function finish() {
    const ok = pts >= pass;
    fb.className = "feedback " + (ok ? "good" : "try");
    fb.innerHTML = ok ? `🌟 You scored ${pts}/${order.length}! ${L} stamp earned! ` : `You scored ${pts}/${order.length}. Get ${pass} or more to earn the stamp. You've got this! `;
    const again = document.createElement("button");
    again.className = "chip-btn"; again.textContent = "Play again"; again.onclick = start;
    fb.appendChild(again);
    if (ok) earn(L);
  }
  start();
}

/* ---------- I: Costa's sort ---------- */
runQuiz({
  items: CONTENT.costa, prog: "costaProg", score: "costaScore", label: "Question",
  choicesEl: $("costaChoices"), fb: $("costaFb"), pass: 7, L: "I",
  render: (it) => {
    $("costaCount").textContent = "What level is this question?";
    $("costaQ").textContent = it.q;
    $("costaChoices").innerHTML = [["Level 1", "Gather"], ["Level 2", "Process"], ["Level 3", "Apply"]]
      .map(([a, b]) => `<button class="choice">${a}<small>${b}</small></button>`).join("");
  },
  isRight: (it, k) => it.level === k + 1,
  explain: (it) => it.why
});

/* ---------- C: Collaboration scenarios ---------- */
runQuiz({
  items: CONTENT.collab, prog: "collabProg", score: "collabScore", label: "Moment",
  choicesEl: $("collabChoices"), fb: $("collabFb"), pass: 4, L: "C",
  render: (it) => {
    $("collabWho").textContent = it.who; $("collabSay").textContent = it.say; $("collabAsk").textContent = it.ask;
    const el = $("collabChoices"); el.innerHTML = "";
    it.choices.forEach(([t]) => { const b = document.createElement("button"); b.className = "choice"; b.textContent = t; el.appendChild(b); });
  },
  isRight: (it, k) => it.best === k,
  explain: (it, k) => it.choices[k][1]
});

/* ---------- O: SMART goal builder ---------- */
(function () {
  const grid = $("smartGrid");
  CONTENT.smart.forEach((f, i) => {
    const row = document.createElement("div"); row.className = "smart-row";
    row.innerHTML = `<div class="smart-letter" id="sl-${i}">${f.L}</div>
      <div><label for="sf-${i}">${f.label}</label><input class="box" id="sf-${i}" placeholder="e.g., ${f.ph}" />
      <div class="hint">${f.hint}</div></div>`;
    grid.appendChild(row);
  });
  const inputs = CONTENT.smart.map((_, i) => $("sf-" + i));
  function check() {
    let all = true;
    CONTENT.smart.forEach((f, i) => { const ok = f.test(inputs[i].value); $("sl-" + i).classList.toggle("ok", ok); if (!ok) all = false; });
    const out = $("goalOut");
    if (!all) { out.innerHTML = ""; return; }
    if (out.firstChild) { fill(); return; }
    out.innerHTML = `<div class="goal-card"><h4>🎯 My SMART Goal</h4><p id="goalText"></p>
      <button class="chip-btn" id="goalCopy">📋 Copy my goal</button></div>`;
    fill();
    $("goalCopy").onclick = () => {
      const t = $("goalText").textContent;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
        () => $("goalCopy").textContent = "✅ Copied! Paste it in your planner.",
        () => $("goalCopy").textContent = "Select the text above to copy it");
    };
    earn("O");
  }
  function fill() {
    const v = inputs.map(x => x.value.trim().replace(/[.\s]+$/, ""));
    $("goalText").textContent = `I will ${v[0]}. I'll track my progress this way: ${v[1]}. My action steps: ${v[2]}. This matters to me because ${v[3].replace(/^because\s+/i, "")}. Deadline: ${v[4]}.`;
  }
  inputs.forEach(x => x.addEventListener("input", check));
  // Show an example (without filling in the boxes, so students still write their own)
  const ex = document.createElement("div");
  ex.className = "feedback"; ex.hidden = true;
  ex.innerHTML = "<b>Example:</b> " + CONTENT.smart.map(f => `<br><b>${f.L}:</b> ${f.ex}`).join("");
  grid.before(ex);
  $("smartEx").onclick = () => { ex.hidden = !ex.hidden; $("smartEx").textContent = ex.hidden ? "See an example" : "Hide example"; };
})();
