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
{ id: "h9-delano", grade: 9, subject: "History", course: "Ethnic Studies", std: "HI 4 · HR 4 · CA Ethnic Studies Model Curriculum", spice: 3,
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

{ id: "h9-tularelake", grade: 9, subject: "History", course: "Geography", std: "CST 3 · HI 1 · Human–environment interaction", spice: 2,
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
{ id: "h10-ww1", grade: 10, subject: "History", course: "World History", std: "10.5.1 · HI 3", spice: 3,
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

{ id: "h10-sadler", grade: 10, subject: "History", course: "World History", std: "10.3.3 · HR 4 · HI 6", spice: 2,
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
{ id: "h11-14th", grade: 11, subject: "History", course: "U.S. History", std: "11.10.2 · 11.1.3 · HI 4", spice: 3,
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

{ id: "h11-newdeal", grade: 11, subject: "History", course: "U.S. History", std: "11.6.4 · 11.7 · HI 3 · CST 1", spice: 3,
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
{ id: "h12-electoral", grade: 12, subject: "History", course: "American Government", std: "12.6.4 · 12.4.1", spice: 3,
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

{ id: "h12-sodatax", grade: 12, subject: "History", course: "Economics", std: "12.2.2 · 12.2.4", spice: 3,
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
