/* =====================================================================
   ✏️ HUB SETTINGS: schools, teachers, and the Google Sheets web address.

   1) scriptUrl: after you deploy Code.gs as a Web app, paste the Web app
      URL between the quotes, like:
          scriptUrl: "https://script.google.com/macros/s/AKfy.../exec",
      While it is empty, the site runs in PREVIEW MODE (saved on this
      computer only).
   2) schools: the teacher dropdown on the sign-in screen. Keep these names
      exactly the same as the SCHOOLS list at the top of Code.gs.
   ===================================================================== */
window.HUB_CONFIG = {
  scriptUrl: "",
  schools: {
    "Tulare Union":   ["Amy Mueller", "Stephanie Edwards", "Melany Miller", "Frank Mello", "Shana Duke"],
    "Tulare Western": ["Jillian Salazar", "Prescilla Carranza", "Chaundra Olsen", "Stevie Bray", "Kristen Rickard", "Eduardo Lopez", "Jordan Perry"],
    "Mission Oak":    ["Dane Maness", "Randall Leal", "Doug Jones", "Summer Trevino", "Heather Luttrell", "Alvaro Martin"]
  },
  periods: ["1", "2", "3", "4", "5", "6", "7", "8"]
};
window.HUB_CONFIG.teachers = Object.values(window.HUB_CONFIG.schools).flat();
