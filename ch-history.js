/* =====================================================================
   HISTORY / SOCIAL SCIENCE CHALLENGE PROBLEMS (shown on challenge.html)
   Same format as ch-math.js (see the notes at the top of that file).
   Standards: CA History–Social Science Content Standards and
   Historical and Social Sciences Analysis Skills (HI = Historical
   Interpretation, HR = Historical Research, CST = Chronological and
   Spatial Thinking).
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · Ethnic Studies / Geography ---------------- */
{ id: "h9-delano", grade: 9, subject: "History", course: "Ethnic Studies", unit: "Labor & Civil Rights Movements", std: "HI 4 · HR 4 · CA Ethnic Studies Model Curriculum", spice: 3,
  title: "Who Started the Delano Grape Strike?",
  teaser: "The famous 1965 farmworker strike near us is often remembered through one leader. The full story is bigger.",
  ask: "Why is the Delano Grape Strike often remembered through César Chávez, when Filipino farmworkers started it?",
  prompt: `<p>On <b>September 8, 1965</b>, Filipino American grape workers in <b>Delano, California</b> (less than an hour south of Tulare) walked out of the vineyards. They were members of the <b>Agricultural Workers Organizing Committee (AWOC)</b>, led by organizers including <b>Larry Itliong</b>. They asked the mostly Mexican American <b>National Farm Workers Association (NFWA)</b>, led by <b>César Chávez</b> and <b>Dolores Huerta</b>, to join them. On <b>September 16</b>, the NFWA voted to join the strike.</p>
    <p>In 1966 the two groups merged into the United Farm Workers Organizing Committee, later known as the <b>United Farm Workers (UFW)</b>. The strike and a national grape boycott lasted until <b>1970</b>, when growers signed union contracts.</p>
    <p><b>Your challenge:</b> (1) Explain why the coalition between Filipino and Mexican American workers was important to the strike’s success. (2) Many textbooks and holidays tell this story mostly through César Chávez. Give <b>two</b> possible reasons why the Filipino workers’ role is less remembered, and explain why it matters <b>who</b> gets remembered in history.</p>`,
  why: "This asks you to think about history AND about how history gets told (historiography). There is no single answer to look up; you have to reason about memory, power, and evidence.",
  answer: { type: "mc", prompt: "First, a fact check: Which group began the strike on September 8, 1965?",
    opts: ["The National Farm Workers Association (NFWA), led by César Chávez", "Filipino American workers in the Agricultural Workers Organizing Committee (AWOC)", "The grape growers", "The California state government"], a: 1,
    why: { 0: "❌ Look at the dates. The NFWA voted to join on September 16.", 2: "❌ Growers were on the other side of the strike.", 3: "❌ The strike was organized by workers, not the government." } },
  hints: ["Growers sometimes tried to break strikes by bringing in workers from another group. Why would a united Filipino and Mexican American strike be harder to break?",
    "Think about who wrote the books, made the films, and led the union in later years. Who was the public face of the national boycott?",
    "Why does it matter? Think about the Filipino American students in your school, and what message it sends when their history is left out."],
  solution: `<p><b>(1) Why the coalition mattered:</b> Growers could replace striking workers from one group with workers from another. When Filipino and Mexican American workers struck <b>together</b>, it was much harder to break the strike. Combining AWOC’s experienced organizers with the NFWA’s large membership and Chávez’s national boycott strategy made the movement strong enough to last five years and win contracts.</p>
    <p><b>(2) Possible reasons the Filipino role is less remembered:</b></p>
    <ul><li>Chávez became the public face of the national boycott and of the UFW, so media coverage focused on him.</li>
    <li>Filipino farmworkers (often called <i>manongs</i>) were an older, smaller, mostly male community, and fewer of their stories were written down or taught.</li>
    <li>Itliong and other Filipino leaders later left the UFW, so later histories of the union centered on its remaining leaders.</li></ul>
    <p><b>Why it matters:</b> Who gets remembered shapes who students see as leaders. Leaving out the Filipino workers gives an incomplete picture of how the movement actually succeeded: through cooperation across ethnic groups. California now recognizes <b>Larry Itliong Day</b> (October 25) as one effort to correct this.</p>`,
  deeper: "Choose another event you have learned about. Whose story is usually told, and whose might be missing? What sources would you need to find the missing voices?" },

{ id: "h9-tularelake", grade: 9, subject: "History", course: "Geography", unit: "Human–Environment Interaction", std: "CST 3 · HI 1 · Human–environment interaction", spice: 2,
  title: "The Lake That Came Back",
  teaser: "Tulare Lake was once the largest freshwater lake west of the Mississippi. It disappeared, then returned in 2023. Why?",
  ask: "Why did Tulare Lake disappear in the early 1900s and reappear in 2023, and what does this show about human–environment interaction?",
  prompt: `<p>Before the late 1800s, <b>Tulare Lake</b> in the southern San Joaquin Valley was the largest freshwater lake (by surface area) west of the Mississippi River. It was fed by snowmelt rivers from the Sierra Nevada, including the <b>Kings, Kaweah, Tule, and Kern</b> rivers. The Yokuts people lived around the lake for thousands of years, fishing and gathering tule reeds.</p>
    <p>As farming expanded, the rivers were dammed and their water was diverted into canals for irrigation. By the early 1900s the lake bed had mostly dried up and was turned into farmland.</p>
    <p>In <b>2023</b>, after a winter of powerful atmospheric-river storms and a record Sierra snowpack, floodwater and snowmelt refilled the old lake bed, flooding farms and roads and covering roughly 100,000 acres at its peak.</p>
    <p><b>Your challenge:</b> Explain (1) the <b>physical</b> reasons the lake returned, (2) the <b>human</b> decisions that made the flooding so damaging, and (3) one <b>trade-off</b> communities face today: should the lake bed stay farmland, or should some land be allowed to flood?</p>`,
  why: "You have to connect physical geography (rivers, snow, landforms) with human decisions made over 150 years, then weigh competing needs with no perfect answer.",
  answer: { type: "multi", prompt: "Select ALL the reasons the lake was able to return in 2023.",
    opts: ["The lake bed is the lowest point in a basin, so water naturally flows there.",
      "A record snowpack in the Sierra Nevada melted into the rivers that once fed the lake.",
      "Farmers dug a new lake on purpose.",
      "Atmospheric-river storms brought heavy rain.",
      "The Pacific Ocean flooded inland."], a: [0, 1, 3] },
  hints: ["Think about elevation. Where does water go when there is too much of it?",
    "Dams and canals can control normal amounts of water. What happens when there is far more snowmelt than they were built to handle?",
    "For the trade-off, list who benefits from farmland (jobs, food, local economy) and who benefits from letting land flood (towns downstream, wildlife, groundwater)."],
  solution: `<p><b>(1) Physical reasons:</b> The lake bed is the low point of a closed basin, so water naturally collects there. In 2023, atmospheric rivers brought heavy rain, and a record Sierra snowpack sent huge amounts of meltwater down the Kings, Kaweah, Tule, and Kern rivers, more than the reservoirs and canals could hold.</p>
    <p><b>(2) Human decisions:</b> Draining the lake and building farms, roads, and communities on the old lake bed put people and property in the place where water naturally returns. Over time, groundwater pumping also made land in parts of the valley sink (subsidence), which can change how water flows and pools.</p>
    <p><b>(3) Trade-off:</b> Keeping the lake bed as farmland protects jobs and food production, but repeats the flood risk in very wet years. Allowing some land to flood could protect towns, refill groundwater, and restore wildlife habitat, but it would cost farm income. Many experts suggest a middle path, such as setting aside some land as a flood zone.</p>`,
  deeper: "The Yokuts people lived with the lake for thousands of years. What could modern planners learn from how Indigenous communities adapted to a lake that grew and shrank?" },

/* ---------------- 10th grade · World History ---------------- */
{ id: "h10-ww1", grade: 10, subject: "History", course: "World History", unit: "World War I", std: "10.5.1 · HI 3", spice: 3,
  title: "If the Assassin Had Missed",
  teaser: "Was the assassination of Franz Ferdinand a cause of World War I, or just a spark? Use a counterfactual to decide.",
  ask: "If Franz Ferdinand had not been assassinated, would World War I still have happened?",
  prompt: `<p>On <b>June 28, 1914</b>, Gavrilo Princip, a Bosnian Serb nationalist, assassinated <b>Archduke Franz Ferdinand</b> of Austria-Hungary in Sarajevo. About five weeks later, most of Europe was at war.</p>
    <p>Historians often separate <b>long-term causes</b> (conditions that build up over years) from <b>immediate causes</b> or <b>triggers</b> (the event that sets things off). Students often remember the long-term causes as <b>MAIN</b>: Militarism, Alliances, Imperialism, Nationalism.</p>
    <p><b>Your challenge:</b> Make a <b>counterfactual argument</b>: If Princip had missed, would a major European war still have happened by about 1920? Support your answer with at least <b>two</b> long-term causes, and explain how the alliance system turned a regional crisis into a world war.</p>`,
  why: "A counterfactual makes you weigh causes against each other instead of listing them. You have to decide how much the long-term pressures mattered compared with one event.",
  answer: { type: "mc", prompt: "First: Which of these is a LONG-TERM cause, not a trigger?",
    opts: ["Austria-Hungary’s ultimatum to Serbia in July 1914", "The assassination in Sarajevo", "The naval arms race between Britain and Germany from the late 1890s", "Germany declaring war on Russia on August 1, 1914"], a: 2,
    why: { 0: "❌ That is part of the July Crisis, which happened in the weeks right before the war.", 1: "❌ That is the classic trigger, the spark.", 3: "❌ That is one of the first declarations of war, not a long-term condition." } },
  hints: ["List the alliances: Triple Entente (France, Russia, Britain) and Triple Alliance (Germany, Austria-Hungary, Italy). How did Austria-Hungary vs. Serbia pull in Russia, then Germany, then France and Britain?",
    "Were there other crises before 1914 that almost caused war? (Look up the Moroccan Crises and the Balkan Wars.)",
    "A strong answer can go either way. If you say war was likely anyway, explain the pressures. If you say it was not, explain what would have had to change."],
  solution: `<p><b>Sample argument (war was likely anyway):</b> Even if Princip had missed, a major war was likely, because the long-term causes had made Europe a “powder keg.”</p>
    <ul><li><b>Militarism:</b> Britain and Germany were in a naval arms race, and the great powers had detailed mobilization plans (like Germany’s Schlieffen Plan) that favored attacking quickly.</li>
    <li><b>Alliances:</b> Two armed blocs meant any conflict between two powers could pull in all of them. In 1914, Austria-Hungary attacked Serbia → Russia mobilized to defend Serbia → Germany declared war on Russia and France → Germany invaded Belgium → Britain entered.</li>
    <li><b>Nationalism and imperialism:</b> Rival empires competed for colonies and influence, and Slavic nationalism in the Balkans kept threatening Austria-Hungary.</li></ul>
    <p>Earlier crises (the Moroccan Crises of 1905 and 1911, the Balkan Wars of 1912–13) nearly caused war, which shows another spark was likely.</p>
    <p><b>The other side:</b> Some historians argue the war was not inevitable. Leaders made choices during the July Crisis, and without this specific spark, diplomacy might have cooled tensions. Either position earns full credit if it weighs long-term causes against the trigger.</p>`,
  deeper: "Is it possible to prevent a war if the long-term causes are present? Pick one MAIN cause and propose a specific policy from 1905–1914 that might have reduced it." },

{ id: "h10-sadler", grade: 10, subject: "History", course: "World History", unit: "Industrial Revolution", std: "10.3.3 · HR 4 · HI 6", spice: 2,
  title: "Can a Biased Source Be Useful?",
  teaser: "A famous report on child factory workers was gathered by a reformer with an agenda. Should historians trust it?",
  ask: "How should historians use the Sadler Report if it was collected by someone who wanted reform?",
  prompt: `<p>In <b>1832</b>, a British Parliament committee led by <b>Michael Sadler</b> collected testimony from factory workers, including people who had worked in textile mills as children. They described 14- to 16-hour workdays, beatings by overseers, and injuries from machines. The report shocked the public.</p>
    <p>However, historians note several problems with it:</p>
    <ul><li>Sadler was a reformer who wanted a law limiting work to <b>10 hours a day</b>.</li>
    <li>Most witnesses were chosen by supporters of reform, and few factory owners testified before the report was published.</li>
    <li>The next year, a new <b>Factory Commission</b> gathered more evidence, including from owners. In <b>1833</b>, Parliament passed the Factory Act, limiting hours for children.</li></ul>
    <p><b>Your challenge:</b> A classmate says, “The Sadler Report is biased, so it’s useless.” Write a response explaining (1) what the report <b>can</b> and <b>cannot</b> prove, and (2) how a historian should <b>corroborate</b> it.</p>`,
  why: "The easy answers are “trust it” or “throw it out.” The historian’s answer is in between, and it takes careful thinking about purpose, audience, and corroboration.",
  answer: { type: "mc", prompt: "First: Which statement is the BEST way for a historian to use the Sadler Report?",
    opts: ["Ignore it, because biased sources are always false.",
      "Accept every statement as fact, because the witnesses were there.",
      "Use it as evidence of what workers experienced and what reformers argued, while corroborating key facts with other sources like the Factory Commission and mill records.",
      "Only use sources written by factory owners."], a: 2,
    why: { 0: "❌ Almost every source has a point of view. Bias tells you how to read a source, not whether to throw it away.", 1: "❌ Eyewitnesses are valuable, but the way witnesses were chosen matters.", 3: "❌ Factory owners had their own bias: they wanted to keep long hours and low costs." } },
  hints: ["Separate two questions: Was it biased? Is it useful? A source can be both.",
    "What does the report definitely prove? (Hint: at least some workers described these conditions, and the report changed public opinion.)",
    "Corroborate = check against other sources. What other sources from the 1830s could you compare it with?"],
  solution: `<p><b>Model response:</b> Being biased does not make the Sadler Report useless; it changes what we use it for.</p>
    <p><b>It can prove</b> that real workers described long hours, physical punishment, and injuries; that reformers were organizing for a 10-hour day; and that the testimony influenced public opinion and helped lead to the Factory Act of 1833.</p>
    <p><b>It cannot prove</b> by itself that every mill had these conditions, or how common they were, because the witnesses were mostly chosen by reformers.</p>
    <p><b>To corroborate it,</b> a historian would compare it with the 1833 Factory Commission (which included owners), mill payroll and hour records, factory inspectors’ reports, workers’ letters and memoirs, and newspapers. If many independent sources describe the same conditions, the claims become much more reliable.</p>`,
  deeper: "Think of a modern source that has a clear point of view (a company ad, a political speech, an activist video). What can it prove? What can’t it prove? How would you corroborate it?" },

/* ---------------- 11th grade · U.S. History ---------------- */
{ id: "h11-14th", grade: 11, subject: "History", course: "U.S. History", unit: "Civil Rights & the Constitution", std: "11.10.2 · 11.1.3 · HI 4", spice: 3,
  title: "Same Amendment, Opposite Rulings",
  teaser: "Plessy (1896) and Brown (1954) both interpreted the 14th Amendment. How did they reach opposite conclusions?",
  ask: "How could the Supreme Court use the same 14th Amendment to allow segregation in 1896 and end it in 1954?",
  prompt: `<p>The <b>14th Amendment</b> (1868) says no state shall “deny to any person within its jurisdiction the equal protection of the laws.”</p>
    <ul><li>In <b>Plessy v. Ferguson (1896)</b>, the Supreme Court ruled 7–1 that a Louisiana law requiring separate railroad cars for Black and white passengers did <b>not</b> violate the 14th Amendment, as long as the facilities were equal. This became known as <b>“separate but equal.”</b></li>
    <li>In <b>Brown v. Board of Education (1954)</b>, the Court ruled 9–0 that segregated public schools <b>did</b> violate the 14th Amendment, stating that “separate educational facilities are inherently unequal.”</li></ul>
    <p><b>Your challenge:</b> Explain how the same words could lead to opposite rulings. Address: (1) what each Court believed “equal protection” required, (2) what kind of <b>evidence</b> the Brown Court used, and (3) what changed in American society between 1896 and 1954.</p>`,
  why: "You have to understand that the Constitution is interpreted, not just read, and connect legal reasoning to social change over 58 years.",
  answer: { type: "mc", prompt: "First: What was the key difference in the Brown Court’s reasoning?",
    opts: ["It said the 14th Amendment had been repealed.",
      "It focused on the effect of segregation itself, finding that separating children by race harmed Black students even if buildings and resources were equal.",
      "It ruled that schools must spend exactly the same amount of money.",
      "It said states could choose whether to segregate."], a: 1,
    why: { 0: "❌ The 14th Amendment was never repealed. Brown relied on it.", 2: "❌ Brown went further than money: it said separation itself was unequal.", 3: "❌ That is closer to how segregation continued after Plessy." } },
  hints: ["Plessy focused on whether the facilities were “equal.” Brown asked a different question. What was it?",
    "Look up the “doll studies” by psychologists Kenneth and Mamie Clark. How did the NAACP use them?",
    "Between 1896 and 1954: two world wars, the Great Migration, the desegregation of the armed forces (1948), and decades of NAACP lawsuits. How might these have changed the Court’s view?"],
  solution: `<p><b>(1) Different meanings of “equal protection”:</b> The Plessy majority read equal protection narrowly: if facilities were equal, separation was legal, and any feeling of inferiority was, in their words, only a “construction” Black citizens put on the law. Justice John Marshall Harlan dissented, writing that “our Constitution is color-blind.” The Brown Court read equal protection more broadly: separation <b>itself</b> sends a message of inferiority, so separate can never be equal.</p>
    <p><b>(2) Evidence:</b> Thurgood Marshall and the NAACP presented social science research, including Kenneth and Mamie Clark’s doll studies, to show segregation harmed Black children’s sense of self-worth. The Court cited this kind of research in its decision.</p>
    <p><b>(3) What changed:</b> The NAACP had spent decades winning cases about unequal graduate and law schools (like <i>Sweatt v. Painter</i>, 1950). WWII exposed the contradiction of fighting racism abroad while practicing it at home, the military was desegregated in 1948, and the Great Migration increased Black political power in Northern cities. The words of the amendment stayed the same, but the Court’s interpretation, the evidence, and society changed.</p>`,
  deeper: "Justice Harlan’s dissent in Plessy was the minority view in 1896 but became the majority view later. What does this suggest about the value of dissenting opinions? Should judges consider changes in society when interpreting the Constitution?" },

{ id: "h11-newdeal", grade: 11, subject: "History", course: "U.S. History", unit: "Great Depression & New Deal", std: "11.6.4 · 11.7 · HI 3 · CST 1", spice: 3,
  title: "Did the New Deal End the Depression?",
  teaser: "Use unemployment data from 1929–1944 to decide what really ended the Great Depression. The 1938 number is the key.",
  ask: "What does the unemployment data from 1929–1944 suggest about whether the New Deal ended the Great Depression?",
  prompt: `<p>Here are approximate U.S. unemployment rates (percent of the labor force):</p>
    <table><tr><th>Year</th><th>1929</th><th>1933</th><th>1937</th><th>1938</th><th>1941</th><th>1944</th></tr>
    <tr><td><b>Unemployment</b></td><td>3%</td><td>25%</td><td>14%</td><td>19%</td><td>10%</td><td>1%</td></tr></table>
    <p class="small">Key events: FDR’s New Deal begins (1933). In 1937 the government cut spending and the Federal Reserve tightened credit, trying to balance the budget. The U.S. enters World War II (December 1941), and war production expands massively.</p>
    <p><b>Your challenge:</b> Make an argument answering: <b>Did the New Deal end the Great Depression?</b> Your answer must explain the jump from 1937 to 1938 and what happened between 1941 and 1944.</p>`,
  why: "The data seems to support two different stories. You need to read a trend, explain an exception, and separate “helped” from “ended.”",
  answer: { type: "mc", prompt: "First: What does the 1937→1938 change MOST suggest?",
    opts: ["The New Deal had no effect at all.",
      "When government spending was cut, unemployment rose again, suggesting the recovery still depended on government spending.",
      "World War II started in 1938 in the United States.",
      "Unemployment was lower in 1938 than in 1929."], a: 1,
    why: { 0: "❌ Unemployment fell from 25% to 14% between 1933 and 1937. Something was helping.", 2: "❌ The U.S. entered the war in December 1941.", 3: "❌ Compare the numbers: 19% vs. 3%." } },
  hints: ["Describe the trend in three parts: 1933–1937, 1937–1938, and 1941–1944.",
    "What did the government do in 1937? What happened to unemployment right after?",
    "What did WWII do that the New Deal never did on the same scale? (Think about total government spending and the number of people in the military and factories.)"],
  solution: `<p><b>Sample argument:</b> The New Deal <b>helped</b> the economy recover, but it did not fully <b>end</b> the Great Depression. Massive World War II spending did.</p>
    <p>From 1933 to 1937, unemployment fell from about 25% to 14%, which suggests New Deal programs (jobs programs, banking reforms, relief) helped. But in 1937 the government cut spending and credit tightened, and unemployment jumped back to about 19% in 1938, the “Roosevelt Recession.” This shows the recovery still depended on government support and was not complete.</p>
    <p>Unemployment only returned to pre-Depression levels when the U.S. entered World War II. Government spending grew far beyond New Deal levels, millions joined the military, and factories hired workers to produce war supplies, bringing unemployment to about 1% by 1944.</p>
    <p><b>Counterclaim to consider:</b> Some argue the New Deal’s reforms (FDIC, Social Security, SEC) were its most lasting achievement because they made the economy more stable for decades, even if they did not end the Depression by themselves.</p>`,
  deeper: "Economists still debate this. If war spending ended the Depression, does that mean any big government spending would have worked, or was there something special about wartime? What lessons could apply to a recession today?" },

/* ---------------- 12th grade · Government / Economics ---------------- */
{ id: "h12-electoral", grade: 12, subject: "History", course: "American Government", unit: "Elections & the Electoral College", std: "12.6.4 · 12.4.1", spice: 3,
  title: "Winning the Presidency While Losing the Vote",
  teaser: "It has happened twice since 2000. Explain how, then evaluate a reform that would change it.",
  ask: "How can a candidate win the Electoral College but lose the national popular vote, and is the National Popular Vote Interstate Compact a good fix?",
  prompt: `<p>In the U.S., the president is chosen by <b>538 electors</b>; a candidate needs <b>270</b> to win. Each state gets electors equal to its number of House members plus its two senators. In 48 states and D.C., the candidate who wins the state’s popular vote gets <b>all</b> of that state’s electors (“winner-take-all”). Maine and Nebraska split some electors by congressional district.</p>
    <p>In <b>2000</b> and <b>2016</b>, the candidate who won the Electoral College lost the national popular vote.</p>
    <p>One proposed reform is the <b>National Popular Vote Interstate Compact</b>: states agree to give all their electors to the winner of the <b>national</b> popular vote, but it only takes effect once states with at least 270 electoral votes have joined. (It has not yet reached 270.)</p>
    <p><b>Your challenge:</b> (1) Explain the <b>two</b> features of the system that make a split between the Electoral College and popular vote possible. (2) Evaluate the Compact: give one strong argument <b>for</b> it and one strong argument <b>against</b> it, then take a position.</p>`,
  why: "You need to understand the math of winner-take-all, the small-state advantage, and federalism, and then evaluate a reform fairly from both sides.",
  answer: { type: "multi", prompt: "Select ALL the features that make a popular-vote/Electoral College split possible.",
    opts: ["Winner-take-all: winning a state by 1 vote or by 1 million earns the same electors.",
      "Every state gets two electors for its senators, giving small states more electors per person.",
      "The Constitution requires the president to win the popular vote.",
      "Electors are chosen by state, so votes count only within each state.",
      "Only 270 people are allowed to vote."], a: [0, 1, 3] },
  hints: ["Imagine a candidate who wins big states by a few votes and loses others by a landslide. What happens to all those “extra” votes?",
    "Compare Wyoming and California: how many people does each elector represent?",
    "For the Compact, consider federalism (states’ role), campaigning (where candidates spend time), and whether an agreement like this could be challenged in court."],
  solution: `<p><b>(1) How a split happens:</b></p>
    <ul><li><b>Winner-take-all:</b> A candidate who wins several large states narrowly gets all their electors, while the opponent’s huge margins in other states earn no extra electors. “Wasted” surplus votes can add up to a national popular-vote win that doesn’t translate into electors.</li>
    <li><b>The two-senator bonus:</b> Every state gets at least 3 electors, so small states have more electors per person than large states.</li>
    <li>Because votes are counted <b>state by state</b>, the national total is never directly used.</li></ul>
    <p><b>(2) Evaluating the Compact:</b></p>
    <p><b>For:</b> Every vote would count equally no matter where the voter lives, and candidates would have reason to campaign in all states, not just a few swing states.</p>
    <p><b>Against:</b> It weakens the role of states in a federal system, it might be challenged in court because the Constitution limits interstate compacts without Congress’s approval, and a very close national election could require a messy nationwide recount.</p>
    <p><b>Position:</b> Any position earns credit if it weighs both arguments and explains which values (equality of votes vs. federalism and stability) matter more to you.</p>`,
  deeper: "The framers created the Electoral College in a nation of 13 states with limited communication. Which original reasons still apply today, and which do not?" },

{ id: "h12-sodatax", grade: 12, subject: "History", course: "Economics", unit: "Markets, Elasticity & Taxes", std: "12.2.2 · 12.2.4", spice: 3,
  title: "Who Really Pays the Soda Tax?",
  teaser: "A city taxes sellers $1 per bottle, yet the store price rises by only 80¢. Who pays the tax, and what does it reveal?",
  ask: "If a $1 soda tax raises the price buyers pay by $0.80, who really pays the tax and what does that say about elasticity?",
  prompt: `<p>A city passes a law: soda <b>sellers</b> must pay a tax of <b>$1.00 per bottle</b>. Before the tax, a bottle sold for <b>$2.00</b>. After the tax, the price at the register rises to <b>$2.80</b>.</p>
    <p><b>(a)</b> How much of the $1.00 tax is paid by <b>buyers</b>, and how much by <b>sellers</b>? (Hint: after the tax, how much of each $2.80 does the seller actually keep?)</p>
    <p><b>(b)</b> What percent of the tax burden falls on buyers?</p>
    <p><b>(c)</b> What does this tell you about the <b>price elasticity</b> of soda demand compared with supply? Would the city collect more money or less if people could easily switch to other drinks?</p>`,
  why: "The law says sellers pay, but economics says the burden is shared based on elasticity. You have to separate the legal payer from the economic payer.",
  answer: { type: "num", value: 80, tol: 0.5, prompt: "Part (b): percent of the tax paid by buyers", unit: "%" },
  hints: ["Buyers used to pay $2.00 and now pay $2.80. How much more are they paying?",
    "Sellers collect $2.80 but send $1.00 to the city. How much do they keep? Compare that to $2.00.",
    "The side that is less able to change its behavior (less elastic) ends up paying more of a tax."],
  solution: `<p><b>(a)</b> Buyers pay $2.80 − $2.00 = <b>$0.80</b> more. Sellers keep $2.80 − $1.00 = $1.80, which is <b>$0.20</b> less than before. So buyers bear $0.80 and sellers bear $0.20.</p>
    <p><b>(b)</b> $0.80 ÷ $1.00 = <b>80%</b> paid by buyers.</p>
    <p><b>(c)</b> When buyers pay most of a tax, <b>demand is more inelastic than supply</b>: soda drinkers keep buying even when the price rises, so sellers can pass most of the tax on. If people could easily switch to other drinks (more elastic demand), sales would fall more, sellers would have to absorb more of the tax, and the city would collect <b>less</b> total revenue because fewer bottles would be sold. This is why governments often tax goods with inelastic demand, and why soda taxes intended to reduce consumption work best when demand is more elastic.</p>`,
  deeper: "A city wants a soda tax both to raise money AND to reduce sugary drink consumption. Explain why those two goals conflict. Which goal should matter more, and why?" }
);


/* =====================================================================
   SET 2: more history / social science challenges from different units
   ===================================================================== */
(window.CHALLENGES = window.CHALLENGES || []).push(

/* ---------------- 9th grade · Ethnic Studies / Geography (set 2) ---------------- */
{ id: "h9-paperson", grade: 9, subject: "History", course: "Ethnic Studies", unit: "Immigration & Exclusion", std: "HI 1 · HI 4 · CA Ethnic Studies Model Curriculum", spice: 3,
  title: "Paper Sons and the Earthquake",
  teaser: "A 1906 earthquake destroyed records and opened a door for Chinese immigrants blocked by law. Was using it right?",
  ask: "Why did the “paper son” system develop, and was it ethical to break an unjust law?",
  prompt: `<p>The <b>Chinese Exclusion Act of 1882</b> was the first major U.S. law to ban immigration based on a specific nationality. It blocked most Chinese workers from entering the United States. One of the few exceptions: children of U.S. citizens could still come.</p>
    <p>In <b>1906</b>, the San Francisco earthquake and fire destroyed many city records, including birth records. Many Chinese Americans then claimed to have been born in San Francisco, which made them citizens, and they could then claim children living in China. Some sold these “slots” to young people who were not related to them. These immigrants became known as <b>“paper sons”</b> (and paper daughters). They memorized hundreds of details about their “families” to pass long interrogations at the <b>Angel Island Immigration Station</b> (1910–1940), where some detainees carved poems into the walls.</p>
    <p>The Exclusion Act was not repealed until <b>1943</b>.</p>
    <p><b>Your challenge:</b> (1) Explain the chain of causes that created the paper son system. (2) Was it ethical for families to break an unjust law this way? Defend your answer. (3) Why might many descendants of paper sons not have known their real family names until recently?</p>`,
  why: "You have to connect a law, a natural disaster, and a bureaucratic loophole, then wrestle with an ethical question that has no simple answer.",
  answer: { type: "mc", prompt: "First: What made the paper son system possible?",
    opts: ["The Exclusion Act allowed all Chinese immigrants to enter.",
      "The 1906 earthquake and fire destroyed birth records, so claims of U.S. birth (and citizenship) were hard to disprove.",
      "Angel Island had no inspectors.",
      "China paid the U.S. to accept immigrants."], a: 1,
    why: { 0: "❌ The Exclusion Act blocked most Chinese workers. That’s why a loophole was needed.", 2: "❌ Inspectors at Angel Island used long, detailed interrogations.", 3: "❌ This was not a government agreement." } },
  hints: ["Start with the law: Who could still legally enter? Then ask what the earthquake destroyed.",
    "For the ethics question, consider: Was the law fair? What were families trying to do? Did anyone get hurt?",
    "Paper sons had to live under false family names for safety. Why might they keep that secret even from their own children?"],
  solution: `<p><b>(1) Chain of causes:</b> The Exclusion Act banned most Chinese immigration but still allowed children of citizens → the 1906 earthquake and fire destroyed birth records → Chinese Americans could claim San Francisco birth and citizenship → they could sponsor “children” from China, including unrelated young people who bought these papers → Angel Island inspectors used long interrogations to catch them, so paper sons memorized detailed family histories.</p>
    <p><b>(2) Ethics (sample position):</b> Using false papers was illegal, but many historians and descendants see it as a reasonable response to a law that discriminated by race. Families were trying to work, reunite, and escape poverty, the same goals other immigrant groups could pursue legally. A strong opposing view: breaking the law put people at risk of deportation and made honest communities a target for suspicion.</p>
    <p><b>(3) Hidden names:</b> Paper sons lived under false identities for decades and feared deportation if discovered, so many kept their real names secret, even from their children. Some families only learned the truth through records, a confession late in life, or programs that later let paper sons correct their status.</p>`,
  deeper: "The U.S. officially expressed regret for the Chinese Exclusion laws in 2011–2012 resolutions in Congress. Is an apology meaningful decades later? What else could repair look like?" },

{ id: "h9-pyramids", grade: 9, subject: "History", course: "Geography", unit: "Population Geography", std: "CST 3 · HI 6 · Population patterns", spice: 2,
  title: "Two Population Pyramids, Two Futures",
  teaser: "One country is getting older; one is very young. Read their population pyramids and predict each country’s biggest challenge.",
  ask: "How do the population pyramids of an aging country and a young country predict different future challenges?",
  prompt: `<p>A <b>population pyramid</b> shows how many people in a country are in each age group (youngest at the bottom). Here are simplified shapes for two real countries:</p>
    <div class="fig"><svg viewBox="0 0 340 170" width="340" role="img" aria-label="Two population pyramids: Country A is wide at the top, Country B is wide at the bottom">
      <text x="85" y="14" text-anchor="middle" font-weight="700">Country A</text><text x="255" y="14" text-anchor="middle" font-weight="700">Country B</text>
      ${[55, 60, 70, 80, 84, 82, 74, 64].map((w, i) => `<rect x="${85 - w / 2}" y="${148 - i * 16}" width="${w}" height="13" fill="#2b7de9" rx="2"/>`).join("")}
      ${[150, 128, 106, 86, 66, 46, 28, 14].map((w, i) => `<rect x="${255 - w / 2}" y="${148 - i * 16}" width="${w}" height="13" fill="#e08a00" rx="2"/>`).join("")}
      <text x="4" y="160" font-size="10">0–9</text><text x="4" y="44" font-size="10">70+</text></svg></div>
    <p><b>Country A</b> (like Japan) has a median age near 49. <b>Country B</b> (like Nigeria) has a median age near 18.</p>
    <p><b>Your challenge:</b> (1) Describe each pyramid’s shape and what it tells you about birth rates and life expectancy. (2) Predict one major challenge each country faces in the next 20 years. (3) Propose one policy for each country and explain a trade-off.</p>`,
  why: "You have to read a graph, connect it to demographic causes, and then predict economic and social effects decades into the future.",
  answer: { type: "mc", prompt: "First: Which challenge is MOST likely for Country A?",
    opts: ["Building enough new schools for a huge number of children.",
      "Too few working-age people to support a large elderly population with pensions and health care.",
      "Too many young people looking for their first jobs.",
      "Very low life expectancy."], a: 1,
    why: { 0: "❌ That fits Country B, which has a wide base (many children).", 2: "❌ That also fits Country B.", 3: "❌ A pyramid that is wide at the top means many people live a long time." } },
  hints: ["Wide base = many young people (high birth rate). Wide top = many older people (long life, low birth rate).",
    "Who pays taxes and works? Who needs pensions and health care? Compare those groups in each country.",
    "Policies might include immigration, family support, education, or job creation. Every policy costs something."],
  solution: `<p><b>(1) Shapes:</b> Country A’s pyramid is narrow at the bottom and wide in the middle and top: a <b>low birth rate and long life expectancy</b>, so the population is aging. Country B’s is a true pyramid with a very wide base: a <b>high birth rate</b> and fewer people reaching old age.</p>
    <p><b>(2) Challenges:</b> Country A will have <b>fewer workers supporting more retirees</b>, straining pensions, health care, and labor supply. Country B must provide <b>schools, health care, and millions of jobs</b> for a fast-growing young population.</p>
    <p><b>(3) Sample policies:</b> Country A could increase immigration or support families with child care. Trade-off: immigration can face political resistance, and family support is expensive. Country B could invest heavily in education and job training. Trade-off: it requires large spending now for benefits years later, and jobs must exist for graduates.</p>
    <p><b>Bonus insight:</b> If Country B can educate and employ its young people, it can gain a “demographic dividend”: a large working-age population that boosts economic growth.</p>`,
  deeper: "Draw what you think the U.S. population pyramid looks like, then look it up. What surprised you? How might immigration change its shape?" },

/* ---------------- 10th grade · World History (set 2) ---------------- */
{ id: "h10-berlin", grade: 10, subject: "History", course: "World History", unit: "New Imperialism", std: "10.4.1 · 10.4.3 · HI 3", spice: 3,
  title: "Borders Drawn Without a Single African",
  teaser: "At the Berlin Conference, European leaders divided Africa on a map. Trace how those lines still matter today.",
  ask: "How did the Berlin Conference of 1884–85 shape conflicts and challenges in Africa that continued after independence?",
  prompt: `<p>At the <b>Berlin Conference (1884–1885)</b>, representatives of European powers and the United States met to set rules for claiming African territory. <b>No African leaders were invited.</b> In the following decades, European powers drew borders based on their own claims and treaties, often with straight lines, and many borders ignored existing ethnic, linguistic, and political boundaries.</p>
    <p>By <b>1914</b>, nearly all of Africa was under European control. Only <b>Ethiopia</b> and <b>Liberia</b> remained independent. Most African countries gained independence between the 1950s and 1970s and generally <b>kept the colonial borders</b>.</p>
    <p><b>Your challenge:</b> (1) Explain two ways the colonial borders created problems for new nations after independence. (2) A classmate claims, “Imperialism helped Africa by building railroads and schools.” Evaluate this claim: what is true about it, and what does it leave out?</p>`,
  why: "You have to trace effects across 100 years and evaluate a claim that contains partial truth. That means weighing evidence, not just rejecting or accepting it.",
  answer: { type: "multi", prompt: "Select ALL that were long-term effects of colonial borders.",
    opts: ["Some ethnic groups were split across two or more countries.",
      "Some rival groups were combined into a single country.",
      "Every African country became wealthy right after independence.",
      "Some borders cut people off from traditional trade and grazing routes.",
      "Borders were drawn by African leaders based on local needs."], a: [0, 1, 3] },
  hints: ["If a border is a straight line on a map, what happens to the people who lived on both sides of it?",
    "When independence came, why might leaders have chosen to keep colonial borders rather than redraw them?",
    "For the railroad claim: Where did colonial railroads usually go? From farms and mines to... where? Who benefited?"],
  solution: `<p><b>(1) Problems from colonial borders:</b></p>
    <ul><li><b>Divided groups:</b> Some ethnic groups (for example, the Somali people) were split among several countries, which later contributed to border disputes.</li>
    <li><b>Combined rivals:</b> Some countries brought together groups with different languages, religions, and histories under one government, which sometimes fueled civil conflict (for example, the Nigerian Civil War, 1967–1970).</li>
    <li>Borders also cut across traditional trade and grazing routes.</li></ul>
    <p>After independence, the Organization of African Unity (founded 1963) agreed in 1964 to keep existing borders, because redrawing them could have caused even more wars.</p>
    <p><b>(2) Evaluating the claim:</b> It is true that colonial powers built some railroads, ports, and schools. But railroads were mostly built to carry raw materials from mines and plantations to ports for <b>European</b> profit, not to connect African communities. Schools reached a small number of people. The claim leaves out forced labor, land seizures, violence (such as in the Congo Free State), and the loss of self-government. Any benefits came at an enormous cost and were designed to serve the colonizers.</p>`,
  deeper: "Should African nations redraw their borders today? Consider stability, self-determination, and the risk of conflict. What would be the best and worst outcomes?" },

{ id: "h10-frenchrev", grade: 10, subject: "History", course: "World History", unit: "Age of Revolutions", std: "10.2.2 · 10.2.3 · HI 2", spice: 3,
  title: "Liberty, Equality… Terror?",
  teaser: "The French Revolution promised liberty and equality. Use a timeline to decide whether it kept its promise.",
  ask: "Did the French Revolution achieve its goals of liberty, equality, and fraternity?",
  prompt: `<p>The French Revolution’s motto was <b>“Liberty, Equality, Fraternity.”</b> Use this timeline:</p>
    <table><tr><th>Year</th><th>Event</th></tr>
    <tr><td>1789</td><td>Storming of the Bastille. The Declaration of the Rights of Man and of the Citizen says men are “born and remain free and equal in rights.”</td></tr>
    <tr><td>1791</td><td>Olympe de Gouges writes the Declaration of the Rights of Woman. Women are still denied the vote.</td></tr>
    <tr><td>1793–94</td><td>Reign of Terror: about 17,000 people officially executed, many more die in prison. De Gouges is executed in 1793.</td></tr>
    <tr><td>1794</td><td>France abolishes slavery in its colonies (after the Haitian Revolution began). Robespierre is executed.</td></tr>
    <tr><td>1799–1804</td><td>Napoleon seizes power, then crowns himself Emperor.</td></tr>
    <tr><td>1802</td><td>Napoleon restores slavery in French colonies.</td></tr>
    <tr><td>1804</td><td>Napoleonic Code: equality before the law for men, but women lose many rights to husbands.</td></tr></table>
    <p><b>Your challenge:</b> Make an argument about whether the Revolution achieved its goals. Evaluate <b>each</b> of the three goals separately, and decide whether short-term failure means the Revolution failed overall.</p>`,
  why: "The timeline shows progress and backsliding happening at the same time. You have to evaluate three goals separately and think about short-term vs. long-term impact.",
  answer: { type: "mc", prompt: "First: Which event MOST directly contradicts the goal of “liberty”?",
    opts: ["The Declaration of the Rights of Man (1789)", "The abolition of slavery in the colonies (1794)", "The Reign of Terror (1793–94)", "The storming of the Bastille (1789)"], a: 2,
    why: { 0: "❌ That document was written to PROMOTE liberty.", 1: "❌ Abolishing slavery expanded liberty.", 3: "❌ The Bastille was a symbol of royal tyranny; storming it was seen as a step toward liberty." } },
  hints: ["Make a T-chart for each goal: events that advanced it and events that betrayed it.",
    "Equality for whom? Check the timeline for women and enslaved people.",
    "Short term: France ended up with an emperor. Long term: Did ideas from 1789 spread? (Think about the Napoleonic Code and revolutions in other countries.)"],
  solution: `<p><b>Sample argument:</b> In the short term, the Revolution <b>failed</b> to achieve its goals, but in the long term it <b>succeeded</b> in spreading them.</p>
    <ul><li><b>Liberty:</b> The Declaration of 1789 promised freedom, but the Reign of Terror executed about 17,000 people for being “enemies,” and Napoleon ended up with near-total power.</li>
    <li><b>Equality:</b> Feudal privileges were abolished and the Napoleonic Code made men equal before the law. But women were denied the vote, Olympe de Gouges was executed, and slavery was abolished in 1794 only to be restored in 1802.</li>
    <li><b>Fraternity:</b> National unity grew, but the Terror turned citizens against each other.</li></ul>
    <p><b>Long-term view:</b> The ideas of 1789 spread across Europe and Latin America, inspired later revolutions, and became the basis of modern human rights. A revolution can fail its own generation while changing the world for the next.</p>`,
  deeper: "Why do so many revolutions that begin with ideals of freedom end with a strong ruler (France → Napoleon)? Compare with another revolution you know." },

/* ---------------- 11th grade · U.S. History (set 2) ---------------- */
{ id: "h11-cuba", grade: 11, subject: "History", course: "U.S. History", unit: "The Cold War", std: "11.9.3 · HI 3 · HI 4", spice: 3,
  title: "Thirteen Days: Who Won the Cuban Missile Crisis?",
  teaser: "The public thought Khrushchev backed down. Then a secret deal came out. Decide who really won.",
  ask: "Who “won” the Cuban Missile Crisis once you consider the secret deal about missiles in Turkey?",
  prompt: `<p>In <b>October 1962</b>, U.S. spy planes discovered Soviet nuclear missile sites being built in <b>Cuba</b>, about 90 miles from Florida. For <b>13 days</b>, the world came closer to nuclear war than ever before.</p>
    <ul><li>President <b>Kennedy</b> announced a naval “quarantine” (blockade) of Cuba and demanded the missiles be removed.</li>
    <li>Soviet leader <b>Khrushchev</b> agreed to remove the missiles in exchange for a public U.S. promise <b>not to invade Cuba</b>.</li>
    <li><b>Secretly</b>, the U.S. also agreed to remove its own <b>Jupiter missiles from Turkey</b>, near the Soviet border. This part was kept from the public for years.</li>
    <li>Afterward, the two sides set up a direct <b>“hotline”</b> (1963) and signed the Limited Test Ban Treaty (1963).</li></ul>
    <p><b>Your challenge:</b> Argue who won the crisis: the U.S., the Soviet Union, both, or neither. Your answer must consider the <b>secret deal</b> and how the <b>public perception</b> differed from what actually happened.</p>`,
  why: "The answer changes depending on what information you have. You have to separate public perception from reality and define what “winning” means in a nuclear standoff.",
  answer: { type: "open" },
  rubric: ["I made a clear claim about who won (or defined “winning” in a new way).",
    "I used the public deal (missiles out of Cuba, no invasion of Cuba) as evidence.",
    "I used the secret deal (Jupiter missiles out of Turkey) as evidence.",
    "I explained how public perception differed from reality, and why that mattered.",
    "I considered the long-term results (hotline, test ban treaty, Cuba’s government)."],
  hints: ["List what each side GOT out of the deal. Then list what the public THOUGHT each side got.",
    "Why would Kennedy want the Turkey part kept secret? How would it look if it were public?",
    "Khrushchev was removed from power in 1964, partly because rivals saw him as weak. Does that change your answer?"],
  solution: `<p><b>Sample argument (both, and neither):</b> Publicly, the United States appeared to win: Khrushchev removed the missiles after Kennedy stood firm. But the full deal shows a <b>compromise</b>. The Soviets got a promise that the U.S. would not invade Cuba, protecting their ally, and secretly got the Jupiter missiles removed from Turkey.</p>
    <p>Public perception mattered: Kennedy looked strong, which helped him politically, while Khrushchev looked weak and was removed from power in 1964, partly for this. The secrecy shows each leader needed a way to back down without looking defeated.</p>
    <p>The true “win” was that nuclear war was avoided. Both sides learned how dangerous the standoff was and created the Moscow–Washington hotline and the 1963 Limited Test Ban Treaty. In a nuclear crisis, the outcome where both sides survive may be the only real victory.</p>`,
  deeper: "Is it ever acceptable for leaders to hide parts of a deal from the public? Use the Cuban Missile Crisis and one modern example to argue your position." },

{ id: "h11-korematsu", grade: 11, subject: "History", course: "U.S. History", unit: "World War II Home Front", std: "11.7.5 · 11.10 · HI 4", spice: 3,
  title: "Incarceration at the Tulare Fairgrounds",
  teaser: "In 1942, Japanese Americans were held at the fairgrounds in Tulare. How did the Supreme Court allow it?",
  ask: "How did the Supreme Court justify Japanese American incarceration in Korematsu v. United States, and why is the decision now seen as wrong?",
  prompt: `<p>After the attack on Pearl Harbor, President Franklin Roosevelt signed <b>Executive Order 9066</b> (February 1942). It led to the forced removal of about <b>120,000 people of Japanese ancestry</b> from the West Coast, about two-thirds of them U.S. citizens. Before being sent to camps, many families were held at temporary “assembly centers,” including the <b>Tulare Assembly Center</b> at the Tulare County Fairgrounds.</p>
    <p><b>Fred Korematsu</b>, a U.S. citizen, refused to leave and was arrested. In <b>Korematsu v. United States (1944)</b>, the Supreme Court ruled 6–3 that the order was constitutional because of “military necessity.” Justice Frank Murphy, dissenting, called the exclusion a fall “into the ugly abyss of racism.”</p>
    <p>Later: In <b>1983</b>, a federal court overturned Korematsu’s conviction after evidence showed the government had withheld reports that Japanese Americans were not a threat. The <b>Civil Liberties Act of 1988</b> gave a formal apology and $20,000 to each surviving incarceree. In <b>2018</b>, Chief Justice John Roberts wrote that Korematsu “was gravely wrong the day it was decided.”</p>
    <p><b>Your challenge:</b> (1) Explain how the Court justified the decision. (2) Use the later evidence to explain why it is now considered wrong. (3) What does this case teach about protecting rights during a crisis?</p>`,
  why: "You have to understand a decision you disagree with on its own terms, then use new evidence to evaluate it, and apply the lesson to the present.",
  answer: { type: "mc", prompt: "First: What later discovery MOST undermined the “military necessity” argument?",
    opts: ["The war ended in 1945.",
      "The government had suppressed its own intelligence reports showing Japanese Americans were not a security threat.",
      "Fred Korematsu moved to another state.",
      "The camps were expensive to run."], a: 1,
    why: { 0: "❌ The end of the war doesn’t tell us whether the order was necessary in 1942.", 2: "❌ That doesn’t address the government’s justification.", 3: "❌ Cost doesn’t answer whether it was necessary or constitutional." } },
  hints: ["The Court said the decision was not about race but about “military necessity.” What would you need to prove necessity?",
    "German Americans and Italian Americans were not removed on a mass scale. What does that suggest?",
    "In 1983, Korematsu’s lawyers found documents. What did those documents show the government knew?"],
  solution: `<p><b>(1) The Court’s reasoning:</b> The majority said that during war, the government could take extraordinary measures for national security. It accepted the military’s claim that it was impossible to quickly separate loyal from disloyal people of Japanese ancestry, so mass exclusion was a “military necessity,” not racial discrimination.</p>
    <p><b>(2) Why it’s now seen as wrong:</b> The government had evidence, including intelligence reports, that Japanese Americans were not a threat, and withheld it from the Court. No Japanese American was convicted of espionage during the war. German and Italian Americans were not removed on the same scale, which shows the policy was based on race. That is why Korematsu’s conviction was overturned in 1983, Congress apologized in 1988, and the Chief Justice said in 2018 that the decision was “gravely wrong the day it was decided.”</p>
    <p><b>(3) Lesson:</b> In times of fear, governments may use “security” to justify violating the rights of an unpopular group. Courts and citizens must demand evidence, not just fear, before rights are taken away.</p>`,
  deeper: "Fred Korematsu received the Presidential Medal of Freedom in 1998. California recognizes January 30 as Fred Korematsu Day. Why might it matter to honor someone who lost his case?" },

/* ---------------- 12th grade · Government / Economics (set 2) ---------------- */
{ id: "h12-tinker", grade: 12, subject: "History", course: "American Government", unit: "Civil Liberties & Student Speech", std: "12.2.1 · 12.5.1", spice: 3,
  title: "Can Your School Punish That Post?",
  teaser: "Apply Tinker v. Des Moines and Mahanoy v. B.L. to three student speech cases. Where is the line?",
  ask: "Using Tinker and Mahanoy, can a school legally punish a student for an off-campus social media post?",
  prompt: `<p>Two key Supreme Court cases on student speech:</p>
    <ul><li><b>Tinker v. Des Moines (1969):</b> Students who wore black armbands to protest the Vietnam War could not be punished. Students do not “shed their constitutional rights to freedom of speech or expression at the schoolhouse gate.” Schools may restrict speech only if it would cause a <b>“substantial disruption”</b> or invade the rights of others.</li>
    <li><b>Mahanoy Area School District v. B.L. (2021):</b> A cheerleader posted a profane Snapchat on a weekend, off campus, criticizing her team. The Court ruled 8–1 the school violated her First Amendment rights, though schools may still regulate some off-campus speech, such as serious bullying or threats.</li></ul>
    <p><b>Apply the rules. Can the school punish each student?</b></p>
    <ol><li>A student wears a T-shirt to school with a peaceful political slogan that some classmates dislike.</li>
    <li>On a Saturday, from home, a student posts a meme mocking the school’s new lunch menu.</li>
    <li>From home, a student posts repeated threats to hurt a specific classmate at school on Monday.</li></ol>`,
  why: "You have to turn court opinions into rules, then apply them to new situations, which is exactly what lawyers and judges do.",
  answer: { type: "multi", prompt: "Select ALL the cases where the school could most likely LEGALLY punish the student.", opts: ["Case 1: political T-shirt", "Case 2: off-campus lunch meme", "Case 3: off-campus threats against a classmate"], a: [2] },
  hints: ["For each case, ask: Is it on campus or off? Does it cause a substantial disruption? Does it invade the rights of others?",
    "Disliking a message is not the same as a substantial disruption. What did the Tinker armbands show?",
    "Mahanoy protected off-campus criticism, but said schools can still act on serious threats and bullying. Which case fits that?"],
  solution: `<ul><li><b>Case 1: Protected.</b> Like the Tinker armbands, a peaceful political message is protected even if some people dislike it, unless it causes a substantial disruption.</li>
    <li><b>Case 2: Protected.</b> Like Mahanoy, it’s off-campus criticism with no threat or substantial disruption. Schools generally can’t punish students for criticizing the school from home.</li>
    <li><b>Case 3: Can be punished.</b> Threats against a specific classmate invade the rights of others and are likely to disrupt school. Mahanoy specifically said schools can still address serious threats and bullying, even off campus. True threats are not protected speech anywhere.</li></ul>
    <p><b>The line:</b> Schools can’t punish speech just because it’s offensive, unpopular, or critical. They can act when speech substantially disrupts learning, threatens or targets others, or (in later cases) promotes illegal drug use or is lewd at school events.</p>`,
  deeper: "Should schools have MORE power to regulate students’ social media because so much bullying happens online, or LESS because students need free speech? Propose a fair school policy." },

{ id: "h12-inflation", grade: 12, subject: "History", course: "Economics", unit: "Money, Inflation & the Federal Reserve", std: "12.5.2 · 12.5.3 · 12.5.4", spice: 3,
  title: "The Raise That Was Really a Pay Cut",
  teaser: "Your boss gives you a 4% raise in a year with 6% inflation. Did your pay go up or down? Then decide what the Fed should do.",
  ask: "If my wage rose 4% but prices rose 6%, what happened to my real wage, and how does the Federal Reserve fight inflation?",
  prompt: `<p>You earn <b>$16.00/hour</b>. Your boss gives you a <b>4% raise</b>. During the same year, prices rise by <b>6%</b> (inflation).</p>
    <p><b>(a)</b> What is your new <b>nominal</b> wage?</p>
    <p><b>(b)</b> What happened to your <b>real</b> wage (your buying power), in percent? Use: real change = (1 + wage growth) ÷ (1 + inflation) − 1. Round to the nearest tenth.</p>
    <p><b>(c)</b> To fight high inflation, the Federal Reserve often <b>raises interest rates</b>. Explain the chain of effects from higher rates to lower inflation, and one cost of this policy for people like you.</p>`,
  why: "A raise feels like a win. You have to separate nominal from real values, then trace a monetary policy through borrowing, spending, and jobs.",
  answer: { type: "num", value: -1.9, tol: 0.12, near: 0.5, prompt: "Part (b): change in real wage as a percent (use a negative number for a decrease)", unit: "%" },
  hints: ["New nominal wage = $16.00 × 1.04.",
    "Real change = 1.04 ÷ 1.06 − 1. Is it positive or negative?",
    "Higher interest rates make borrowing more expensive. What happens to spending on houses, cars, and business expansion? What happens to prices when demand falls?"],
  solution: `<p><b>(a)</b> $16.00 × 1.04 = <b>$16.64/hour</b>.</p>
    <p><b>(b)</b> 1.04 ÷ 1.06 − 1 ≈ −0.0189 = <b>about −1.9%</b>. Your buying power went <b>down</b>: even with a raise, your paycheck buys less than before. (A quick estimate is 4% − 6% = −2%.)</p>
    <p><b>(c)</b> Higher interest rates → borrowing becomes more expensive (car loans, mortgages, credit cards, business loans) → people and businesses spend and invest less → overall demand falls → prices rise more slowly. <b>Cost:</b> slower spending can mean businesses hire less or lay workers off, so unemployment may rise, and loans cost more for families.</p>`,
  deeper: "The Fed must balance two goals: stable prices and maximum employment. If inflation is high AND unemployment is rising, which goal should come first? Defend your choice." }
);
