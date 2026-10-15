/* =====================================================================
   TEACHER RESOURCE HUB: Google Sheets connection (Google Apps Script)

   This script turns a Google Sheet into the "backend" for the hub:
     • Discussion Board posts and replies (with automatic grading)
     • Practice activity scores
     • Full WICOR lesson turn-ins and college essay drafts
     • Community service hours (with reflections)
     • Daily "Would You Rather" votes (combined for everyone)
   Each teacher gets their own tab. Download any time as Excel:
   File → Download → Microsoft Excel (.xlsx).

   SETUP (about 10 minutes, done once):
     1. Make a new Google Sheet (name it "AVID Hub Responses").
     2. Extensions → Apps Script. Delete what's there, paste this whole file, click 💾 Save.
     3. In the toolbar choose the function "setup" and click ▶ Run. Approve the permissions.
     4. Deploy → New deployment → ⚙ Select type: Web app
          Execute as: Me      Who has access: Anyone      → Deploy
     5. Copy the Web app URL and paste it into hub-config.js on GitHub.

   ✏️ To change teachers, edit TEACHERS below, then run setup() again.
   ✏️ To hide a discussion post from students, type X in its "Hide" column.
   ✏️ To change a grade, type in the "Teacher Score" column (it is never overwritten).
   ===================================================================== */

const TEACHERS = ['Langlie', 'Maness', 'Salazar', 'Mueller'];

const POSTS = 'Discussion Posts';
const GRADES = 'Discussion Grades';
const SCORES = 'Activity Scores';
const LESSONS = 'Lesson Turn-Ins';
const SERVICE = 'Service Hours';
const VOTES = 'WYR Votes';

const HEAD = {};
HEAD[POSTS] = ['Timestamp', 'Post ID', 'Prompt ID', 'Prompt', 'Type', 'Reply To Post ID', 'Reply To', 'Teacher', 'Period', 'Student Name', 'Student ID', 'Display Name', 'Text', 'Word Count', 'Auto Points', 'Hide (type X)', 'Annotations Made'];
HEAD[GRADES] = ['Teacher', 'Period', 'Student Name', 'Student ID', 'Prompt ID', 'Prompt', 'Main Post Words', 'Main Post Points (/6)', 'Replies', 'Reply Points (/4)', 'Auto Total (/10)', 'Teacher Score', 'Last Activity'];
HEAD[SCORES] = ['Timestamp', 'Teacher', 'Period', 'Student Name', 'Student ID', 'Activity', 'Score', 'Percent', 'Responses'];
HEAD[LESSONS] = ['Timestamp', 'Teacher', 'Period', 'Student Name', 'Student ID', 'Lesson', 'Stations Done', 'Completion (/10)', 'Answers'];
HEAD[SERVICE] = ['Timestamp', 'Teacher', 'Period', 'Student Name', 'Student ID', 'Organization', 'Date of Service', 'Hours', 'Supervisor', 'Supervisor Contact', 'What I Did', 'Reflection', 'Verified (type ✓)'];
HEAD[VOTES] = ['Timestamp', 'Date', 'Choice', 'Question'];

/* ---------- one-time setup: creates every tab, header row, and teacher tab ---------- */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  [POSTS, GRADES, SCORES, LESSONS, SERVICE, VOTES].forEach(name => {
    let sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.getRange(1, 1, 1, HEAD[name].length).setValues([HEAD[name]]).setFontWeight('bold').setBackground('#e9eefb');
    sh.setFrozenRows(1);
  });
  TEACHERS.forEach(t => {
    const name = 'Teacher: ' + t;
    const sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.clear();
    const q = "\"" + t.replace(/"/g, '') + "\"";
    sh.getRange('A1').setValue('DISCUSSION GRADES').setFontWeight('bold');
    sh.getRange('A2').setFormula("=IFERROR(FILTER('" + GRADES + "'!A1:M, ('" + GRADES + "'!A1:A=" + q + ")+(ROW('" + GRADES + "'!A1:A)=1)), \"No discussion posts yet\")");
    sh.getRange('O1').setValue('PRACTICE ACTIVITY SCORES').setFontWeight('bold');
    sh.getRange('O2').setFormula("=IFERROR(FILTER('" + SCORES + "'!A1:I, ('" + SCORES + "'!B1:B=" + q + ")+(ROW('" + SCORES + "'!B1:B)=1)), \"No activity scores yet\")");
    sh.getRange('Y1').setValue('FULL LESSON TURN-INS').setFontWeight('bold');
    sh.getRange('Y2').setFormula("=IFERROR(FILTER('" + LESSONS + "'!A1:I, ('" + LESSONS + "'!B1:B=" + q + ")+(ROW('" + LESSONS + "'!B1:B)=1)), \"No lesson turn-ins yet\")");
    sh.getRange('AI1').setValue('COMMUNITY SERVICE HOURS').setFontWeight('bold');
    sh.getRange('AI2').setFormula("=IFERROR(FILTER('" + SERVICE + "'!A1:M, ('" + SERVICE + "'!B1:B=" + q + ")+(ROW('" + SERVICE + "'!B1:B)=1)), \"No service hours yet\")");
    sh.setFrozenRows(2);
  });
  const extra = ss.getSheetByName('Sheet1');
  if (extra && extra.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(extra);
}

/* ---------- grading rules (keep in sync with the website) ---------- */
function countWords(s) { return (String(s || '').trim().match(/\S+/g) || []).length; }
function usesSource(text, keys) {               // evidence point: uses a detail/number/quote from the discussion's source
  if (keys && keys.length) return keys.some(k => String(text).toLowerCase().indexOf(String(k).toLowerCase()) >= 0) || /["“][^"”]{8,}["”]/.test(text);
  return /because|for example|for instance|according to|evidence|["“]|\d/i.test(text);
}
function mainPostPoints(text, minWords, keys) {
  const w = countWords(text);
  let p = w >= minWords ? 4 : w >= minWords / 2 ? 2 : w > 0 ? 1 : 0;
  if (usesSource(text, keys)) p += 1;                                                          // supports with evidence from the source
  if (/\?/.test(text)) p += 1;                                                                 // asks classmates a question
  return Math.min(6, p);
}
function replyPoints(text) { const w = countWords(text); return w >= 30 ? 2 : w >= 15 ? 1 : 0; }

/* ---------- helpers ---------- */
function json(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function clean(v, max) {                         // trims, limits length, and blocks spreadsheet formulas
  let s = String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max || 4000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
function asText(v) { return "'" + v; }                  // keeps leading zeros in IDs
function idOf(v) { return String(v).replace(/^'/, ''); }
function displayName(full) {
  const parts = String(full).trim().split(/\s+/);
  return parts.length > 1 ? parts[0] + ' ' + parts[parts.length - 1].charAt(0).toUpperCase() + '.' : parts[0];
}
function student(d) {
  const s = d.student || {};
  const out = { name: clean(s.name, 80), id: clean(s.id, 20), period: clean(s.period, 4), teacher: clean(s.teacher, 40) };
  if (!/[A-Za-z]/.test(out.name) || !/^[A-Za-z0-9-]{3,12}$/.test(out.id) || !out.period || TEACHERS.indexOf(out.teacher) < 0) throw new Error('Please sign in with your name, student ID, period, and teacher.');
  return out;
}
function sheet(name) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sh) throw new Error('The teacher needs to run setup() in Apps Script first.');
  return sh;
}

/* ---------- GET: list posts for one prompt (student IDs are never sent back) ---------- */
function doGet(e) {
  try {
    const p = e.parameter || {};
    if (p.action === 'ping') return json({ ok: true });
    if (p.action === 'votes') {
      const rows = sheet(VOTES).getDataRange().getValues().slice(1).filter(r => String(r[1]) === String(p.date));
      return json({ ok: true, a: rows.filter(r => r[2] === 'A').length, b: rows.filter(r => r[2] === 'B').length });
    }
    if (p.action !== 'list') return json({ ok: false, error: 'Unknown request' });
    const rows = sheet(POSTS).getDataRange().getValues().slice(1);
    const posts = rows.filter(r => r[2] === p.prompt && String(r[15]).toUpperCase() !== 'X').map(r => ({
      id: r[1], parent: r[5] || '', type: r[4], name: r[11], teacher: r[7], period: String(r[8]),
      text: r[12], words: r[13], time: new Date(r[0]).toISOString(), mine: !!p.sid && idOf(r[10]) === String(p.sid)
    }));
    return json({ ok: true, posts: posts });
  } catch (err) { return json({ ok: false, error: String(err.message || err) }); }
}

/* ---------- POST: save a discussion post, an activity score, or a lesson turn-in ---------- */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    const d = JSON.parse(e.postData.contents);
    if (d.action === 'vote') {                        // anonymous: one vote per device per day (checked on the website)
      const choice = d.choice === 'B' ? 'B' : 'A', date = clean(d.date, 12);
      sheet(VOTES).appendRow([new Date(), date, choice, clean(d.question, 200)]);
      const rows = sheet(VOTES).getDataRange().getValues().slice(1).filter(r => String(r[1]) === date);
      return json({ ok: true, a: rows.filter(r => r[2] === 'A').length, b: rows.filter(r => r[2] === 'B').length });
    }
    const s = student(d);
    const now = new Date();
    if (d.action === 'post') return json(savePost(d, s, now));
    if (d.action === 'score') {
      sheet(SCORES).appendRow([now, s.teacher, s.period, s.name, asText(s.id), clean(d.activity, 200), clean(d.score, 40), clean(d.percent, 10), clean(d.responses, 1500)]);
      return json({ ok: true });
    }
    if (d.action === 'service') {
      const hrs = Math.max(0, Math.min(24, Number(d.hours) || 0));
      if (!hrs) throw new Error('Enter the number of hours (up to 24 per entry).');
      sheet(SERVICE).appendRow([now, s.teacher, s.period, s.name, asText(s.id), clean(d.org, 120), clean(d.date, 20), hrs, clean(d.supervisor, 80), clean(d.contact, 80), clean(d.what, 600), clean(d.reflection, 1500), '']);
      return json({ ok: true });
    }
    if (d.action === 'lesson') {
      const done = Math.max(0, Math.min(5, Number(d.stationsDone) || 0));
      sheet(LESSONS).appendRow([now, s.teacher, s.period, s.name, asText(s.id), clean(d.lesson, 200), done + ' of 5', done * 2, clean(d.answers, 6000)]);
      return json({ ok: true, points: done * 2 });
    }
    return json({ ok: false, error: 'Unknown request' });
  } catch (err) {
    return json({ ok: false, error: String(err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function savePost(d, s, now) {
  const text = clean(d.text, 4000);
  const minWords = Math.max(20, Math.min(300, Number(d.minWords) || 75));
  const isReply = !!d.parent;
  if (countWords(text) < 5) throw new Error('Your post is too short.');
  const sh = sheet(POSTS);
  const rows = sh.getDataRange().getValues().slice(1);
  let replyToName = '';
  if (isReply) {
    const parent = rows.find(r => r[1] === d.parent);
    if (!parent) throw new Error('That post could not be found.');
    replyToName = parent[11];
  } else if (rows.some(r => r[2] === d.prompt && r[4] === 'Main post' && idOf(r[10]) === s.id)) {
    throw new Error('You already posted. Reply to your classmates next!');
  }
  const id = Utilities.getUuid().slice(0, 8);
  const keys = Array.isArray(d.sourceKeys) ? d.sourceKeys.slice(0, 40).map(k => String(k).slice(0, 40)) : [];
  const pts = isReply ? replyPoints(text) : mainPostPoints(text, minWords, keys);
  sh.appendRow([now, id, clean(d.prompt, 60), clean(d.promptTitle, 200), isReply ? 'Reply' : 'Main post', isReply ? clean(d.parent, 20) : '', replyToName,
                s.teacher, s.period, s.name, asText(s.id), displayName(s.name), text, countWords(text), pts, '', Math.max(0, Math.min(999, Number(d.annotations) || 0))]);
  const grade = updateGrade(clean(d.prompt, 60), clean(d.promptTitle, 200), s, now);
  return { ok: true, post: { id: id, parent: isReply ? d.parent : '', type: isReply ? 'Reply' : 'Main post', name: displayName(s.name), teacher: s.teacher, period: s.period, text: text, words: countWords(text), time: now.toISOString(), mine: true }, grade: grade };
}

/* Recalculates one student's grade for one prompt and writes it to the Discussion Grades tab */
function updateGrade(prompt, title, s, now) {
  const mine = sheet(POSTS).getDataRange().getValues().slice(1).filter(r => r[2] === prompt && idOf(r[10]) === s.id);
  const main = mine.find(r => r[4] === 'Main post');
  const replies = mine.filter(r => r[4] === 'Reply').map(r => Number(r[14]) || 0).sort((a, b) => b - a);
  const mainPts = main ? Number(main[14]) || 0 : 0;
  const replyPts = (replies[0] || 0) + (replies[1] || 0);
  const row = [s.teacher, s.period, s.name, asText(s.id), prompt, title, main ? main[13] : 0, mainPts, replies.length, replyPts, mainPts + replyPts];
  const g = sheet(GRADES);
  const data = g.getDataRange().getValues();
  let at = -1;
  for (let i = 1; i < data.length; i++) if (idOf(data[i][3]) === s.id && data[i][4] === prompt) { at = i + 1; break; }
  if (at > 0) { g.getRange(at, 1, 1, 11).setValues([row]); g.getRange(at, 13).setValue(now); }   // column L (Teacher Score) is left alone
  else g.appendRow(row.concat(['', now]));
  return { main: mainPts, replies: replyPts, total: mainPts + replyPts };
}
