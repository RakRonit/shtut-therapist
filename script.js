// -----------------------------
// Data model – אפשר לערוך ולהוסיף חופשי
// -----------------------------

const modules = [
  {
    id: "core",
    name: "ליבת כלב טיפולי",
    description: "משימות בסיסיות להכשרת כלב טיפולי, לפי יעדי הלמידה.",
    tasks: [
      {
        id: "core-people",
        title: "התנהגות רגועה ליד אנשים זרים",
        subtitle: "כולל גברים, טיפוסים שונים וסיטואציות חדשות.",
        subtasks: [
          "צפייה באדם זר ממרחק גדול",
          "מעבר ליד אדם עומד בלי מגע",
          "אדם זר מדבר ברקע",
          "אדם זר זורק חטיף לכיוון הכלבה",
          "עמידה קצרה ליד אדם זר",
        ],
      },
      {
        id: "core-noise",
        title: "רוגע בנוכחות רעשים חזקים או מפתיעים",
        subtitle: "בניית ביטחון מרעש קל → לרעש בסביבה אמיתית.",
        subtasks: [
          "האזנה לרעשים מוקלטים בעוצמה נמוכה בבית",
          "רעש מטבח / טריקת דלת קלה",
          "הליכה ברחוב שקט עם רעשי רקע",
          "רעש פתאומי בדרגה קלה – התאוששות מהירה",
        ],
      },
      {
        id: "core-touch",
        title: "קבלה של מגע וטיפול על ידי אדם זר",
        subtitle: "כולל הברשה במברשת.",
        subtasks: [
          "מגע של המלווה בראש ובגב",
          "מגע של המלווה בכפות ובאוזניים",
          "אדם זר מתקרב בלי לגעת",
          "אדם מוכר מבריש בעדינות במברשת",
          "אדם זר מבריש בעדינות (בשלב מאוחר בלבד)",
        ],
      },
      {
        id: "core-dogs",
        title: "התנהגות יציבה ליד כלבים אחרים",
        subtitle: "מכלב מרוחק → לנוכחות טיפולית עם כלב נוסף.",
        subtasks: [
          "צפייה בכלב ממרחק גדול",
          "מעבר ליד כלב בצד השני של הכביש",
          "הליכה בקו מקביל לכלב רגוע",
          "צפייה בגינת כלבים מבחוץ",
          "נוכחות קצרה בחדר טיפול עם כלב נוסף",
        ],
      },
    ],
  },
  {
    id: "kids",
    name: "מודול ילדים",
    description: "הכנה לעבודה בטוחה ורגישה עם ילדים – תנועה, קול, מגע ורגש.",
    tasks: [
      {
        id: "kids-presence",
        title: "נוכחות ילד בלי אינטראקציה",
        subtitle: "הכלבה לומדת להיות בסביבה של ילדים בלי הצפה.",
        subtasks: [
          "ילד יושב בשקט בחדר",
          "ילד הולך ליד הכלבה",
          "ילד משחק לבד במרחק",
        ],
      },
      {
        id: "kids-movement",
        title: "תנועה והתלהבות של ילדים",
        subtitle: "ריצה, קפיצה, נפנופי ידיים.",
        subtasks: [
          "ילד מדבר בקול גבוה",
          "ילד קופץ במקום",
          "ילד רץ מרחוק",
          "ילד רץ קרוב אבל לא לכיוונה",
          "ילד רץ לכיוון הכלבה – עצירה לפני מגע",
        ],
      },
      {
        id: "kids-touch",
        title: "מגע של ילד",
        subtitle: "רק בשלבים מתקדמים, כשהכלבה מרגישה בטוחה.",
        subtasks: [
          "ילד מושיט יד ומוריד אותה בלי לגעת",
          "ילד נוגע נגיעה קצרה ומיד מפסיק",
          "ילד מלטף באיטיות כשיש סימני רוגע",
          "ילד מחבק – רק אם הכלבה מזמינה",
        ],
      },
    ],
  },
  {
    id: "men",
    name: "מודול גברים",
    description: "עבודה הדרגתית עם גברים – נוכחות, תנועה, קול ומגע בטוח.",
    tasks: [
      {
        id: "men-presence",
        title: "נוכחות גבר בלי אינטראקציה",
        subtitle: "הכלבה בוחרת מרחק בטוח.",
        subtasks: [
          "גבר יושב בחדר ומתעלם",
          "גבר עומד מרחוק עם גב מופנה",
          "גבר עובר ליד בלי להסתכל עליה",
        ],
      },
      {
        id: "men-voice",
        title: "קול גברי ותנועה",
        subtitle: "קול, צחוק ותנועה ללא הצפה.",
        subtasks: [
          "גבר מדבר בשקט ברקע",
          "גבר מדבר בטון רגיל",
          "גבר צוחק מרחוק",
          "גבר מתקדם שני צעדים ועוצר",
        ],
      },
      {
        id: "men-touch",
        title: "אינטראקציה אפשרית עם גבר",
        subtitle: "רק אם הכלבה בוחרת להתקרב.",
        subtasks: [
          "גבר זורק חטיף ומתרחק",
          "גבר מושיט יד בלי לגעת",
          "מגע קצר מאוד – והכלבה יכולה לסגת",
        ],
      },
    ],
  },
  {
    id: "noise",
    name: "מודול רעשים",
    description: "רעשים בבית, בחוץ, ובסביבה טיפולית – חשיפה רגישה ומבוקרת.",
    tasks: [
      {
        id: "noise-home",
        title: "רעשים חלשים בבית",
        subtitle: "בנייה מתוך המקום הבטוח.",
        subtasks: [
          "רעש מטבח קל (צלחות, מים)",
          "טריקת דלת קלה",
          "צעדים במסדרון",
        ],
      },
      {
        id: "noise-out",
        title: "רעשים בחוץ",
        subtitle: "רחוב, בנייה, ילדים – בהדרגה.",
        subtasks: [
          "הליכה ברחוב שקט",
          "שיחה רועשת מרחוק",
          "עבודות קלות בשכונה במרחק",
        ],
      },
      {
        id: "noise-vehicles",
        title: "כלי רכב ורעש מנוע",
        subtitle: "אופנוע, משאית, אוטובוס – ממרחק קרוב יותר.",
        subtasks: [
          "אופנוע עובר מרחוק",
          "משאית עוברת רחוק",
          "אוטובוס בתחנה במרחק בטוח",
          "אופנוע מאיץ – צפייה מרחוק",
        ],
      },
    ],
  },
  {
    id: "dogs",
    name: "מודול כלבים",
    description: "חשיפה לכלבים אחרים, גינת כלבים ומפגש טיפולי בנוכחות כלבים.",
    tasks: [
      {
        id: "dogs-distance",
        title: "כלב במרחק גדול",
        subtitle: "הכלבה לומדת להישאר איתך גם כשיש כלב ברקע.",
        subtasks: [
          "כלב עומד מרחוק",
          "כלב הולך בקו מקביל בצד השני של הכביש",
          "כלב משחק בגינה רחוקה – צפייה בלבד",
        ],
      },
      {
        id: "dogs-park",
        title: "גינת כלבים",
        subtitle: "צפייה מבחוץ → קרבה הדרגתית.",
        subtasks: [
          "צפייה בגינת כלבים מחוץ לגדר",
          "התקרבות לגינה ונשארת זמן קצר",
          "כניסה קצרה מאוד לקצה הגינה עם יציאה מהירה",
        ],
      },
      {
        id: "dogs-therapy",
        title: "מפגש טיפולי בנוכחות כלבים נוספים",
        subtitle: "נוכחות בחדר עם כלב נוסף, בצורה מבוקרת.",
        subtasks: [
          "כלב נוסף בחדר טיפול – שניהם בשמירת מקום",
          "שני כלבים בזמן פעילות טיפולית קצרה",
        ],
      },
    ],
  },
  {
    id: "movement",
    name: "מודול תנועה פתאומית",
    description: "ריצה, קפיצה, אופניים, קורקינט ורכב זז – בלי הצפה.",
    tasks: [
      {
        id: "move-people",
        title: "תנועת אנשים",
        subtitle: "מתנועה איטית עד הופעה פתאומית.",
        subtasks: [
          "אדם הולך לאט ליד הכלבה",
          "אדם מסתובב ומשנה כיוון",
          "מישהו קם פתאום מהכיסא",
        ],
      },
      {
        id: "move-wheels",
        title: "אופניים וקורקינט",
        subtitle: "מצפייה מרחוק עד מעבר קרוב.",
        subtasks: [
          "אופניים חולפים מרחוק",
          "קורקינט עובר בקו מקביל",
          "אופניים מתקרבים ואז פונים לפני הכלבה",
        ],
      },
      {
        id: "move-cars",
        title: "רכב זז (כולל משאית / אוטובוס)",
        subtitle: "תנועה ורעש בסביבת כביש.",
        subtasks: [
          "רכב עובר רחוק ברחוב",
          "רכב מתקרב ועובר על יד המדרכה",
          "אוטובוס או משאית עוברים במרחק בטוח",
        ],
      },
    ],
  },
];

// -----------------------------
// State & persistence
// -----------------------------

const STORAGE_KEY_PROGRESS = "shtut-progress-v1";
const STORAGE_KEY_WEEKLY = "shtut-weekly-v1";

function loadJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveJson(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

let progressState = loadJson(STORAGE_KEY_PROGRESS);

// weeklyPlan = { [weekStartISO]: { [dayOffset0-6]: [{moduleId, taskId, success?, note?}] } }
let weeklyPlan = loadJson(STORAGE_KEY_WEEKLY);

// -----------------------------
// Elements
// -----------------------------

const moduleListEl = document.getElementById("module-list");
const moduleDetailsEl = document.getElementById("module-details");
const modulesViewEl = document.getElementById("modules-view");
const weeklyViewEl = document.getElementById("weekly-view");
const sidebarEl = document.getElementById("sidebar");
const navButtons = document.querySelectorAll(".nav-button");

const weekDatePicker = document.getElementById("week-date-picker");
const weeklyRangeLabel = document.getElementById("weekly-range-label");
const weeklyGridEl = document.getElementById("weekly-grid");
const prevWeekBtn = document.getElementById("prev-week");
const nextWeekBtn = document.getElementById("next-week");

// -----------------------------
// Helpers
// -----------------------------

function makeSubtaskId(moduleId, taskId, index) {
  return `${moduleId}::${taskId}::${index}`;
}

function formatDateShort(date) {
  return date.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit" });
}

function getWeekStart(date) {
  const day = date.getDay(); // 0=Sunday
  const diff = day; // כמה ימים לחזור אחורה להגיע לראשון
  const start = new Date(date);
  start.setDate(start.getDate() - diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

function addDays(date, offset) {
  const d = new Date(date);
  d.setDate(d.getDate() + offset);
  return d;
}

function weekKeyFromDate(date) {
  const start = getWeekStart(date);
  return start.toISOString().slice(0, 10);
}

function getWeekPlan(weekStartKey) {
  if (!weeklyPlan[weekStartKey]) {
    weeklyPlan[weekStartKey] = {};
  }
  return weeklyPlan[weekStartKey];
}

// רשימת כל המשימות כ-option ללו"ז
function getAllTaskOptions() {
  const options = [];
  modules.forEach((mod) => {
    mod.tasks.forEach((task) => {
      options.push({
        moduleId: mod.id,
        taskId: task.id,
        label: `${mod.name} – ${task.title}`,
      });
    });
  });
  return options;
}

// -----------------------------
// Render – Modules
// -----------------------------

function renderModuleList(activeId = null) {
  moduleListEl.innerHTML = "";
  modules.forEach((mod) => {
    const btn = document.createElement("button");
    btn.className = "module-button" + (mod.id === activeId ? " active" : "");
    btn.dataset.moduleId = mod.id;

    const nameEl = document.createElement("div");
    nameEl.className = "module-name";
    nameEl.textContent = mod.name;

    const descEl = document.createElement("div");
    descEl.className = "module-desc";
    descEl.textContent = mod.description;

    btn.appendChild(nameEl);
    btn.appendChild(descEl);

    btn.addEventListener("click", () => {
      renderModuleDetails(mod.id);
      renderModuleList(mod.id);
    });

    moduleListEl.appendChild(btn);
  });
}

function renderModuleDetails(moduleId) {
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) return;

  const totalSubtasks = mod.tasks.reduce(
    (sum, t) => sum + (t.subtasks?.length || 0),
    0
  );
  const doneSubtasks = mod.tasks.reduce((sum, t) => {
    return (
      sum +
      (t.subtasks || []).filter((_, idx) =>
        Boolean(progressState[makeSubtaskId(mod.id, t.id, idx)])
      ).length
    );
  }, 0);

  const percent =
    totalSubtasks === 0 ? 0 : Math.round((doneSubtasks / totalSubtasks) * 100);

  moduleDetailsEl.innerHTML = "";

  const header = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = mod.name;
  const meta = document.createElement("div");
  meta.className = "module-meta";
  meta.innerHTML = `
    ${mod.description}<br/>
    <span class="badge">
      <span class="badge-dot"></span>
      הושלמו ${doneSubtasks} מתוך ${totalSubtasks} תתי־משימות (${percent}%)
    </span>
  `;
  header.appendChild(h2);
  header.appendChild(meta);
  moduleDetailsEl.appendChild(header);

  mod.tasks.forEach((task) => {
    const card = document.createElement("article");
    card.className = "task-card";

    const title = document.createElement("h3");
    title.className = "task-title";
    title.textContent = task.title;

    const subtitle = document.createElement("p");
    subtitle.className = "task-subtitle";
    subtitle.textContent = task.subtitle || "";

    card.appendChild(title);
    card.appendChild(subtitle);

    if (task.subtasks?.length) {
      const ul = document.createElement("ul");
      ul.className = "subtask-list";

      task.subtasks.forEach((st, idx) => {
        const li = document.createElement("li");
        li.className = "subtask-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const id = makeSubtaskId(mod.id, task.id, idx);
        checkbox.checked = Boolean(progressState[id]);

        checkbox.addEventListener("change", () => {
          progressState[id] = checkbox.checked;
          saveJson(STORAGE_KEY_PROGRESS, progressState);
          renderModuleDetails(mod.id);
          renderModuleList(mod.id);
        });

        const label = document.createElement("span");
        label.className = "subtask-label";
        label.textContent = st;

        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);
      });

      card.appendChild(ul);
    }

    moduleDetailsEl.appendChild(card);
  });
}

// -----------------------------
// Render – Weekly plan
// -----------------------------

const weekdayNames = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

let currentWeekStartDate = getWeekStart(new Date());

function renderWeeklyView() {
  const weekStart = currentWeekStartDate;
  const weekEnd = addDays(weekStart, 6);

  const weekKey = weekKeyFromDate(weekStart);
  const plan = getWeekPlan(weekKey);

  weeklyRangeLabel.textContent = `שבוע ${formatDateShort(
    weekStart
  )} – ${formatDateShort(weekEnd)}`;

  if (weekDatePicker) {
    const iso = weekStart.toISOString().slice(0, 10);
    weekDatePicker.value = iso;
  }

  weeklyGridEl.innerHTML = "";
  const allOptions = getAllTaskOptions();

  for (let i = 0; i < 7; i++) {
    const dayDate = addDays(weekStart, i);
    const dayKey = String(i);
    const dayPlans = plan[dayKey] || [];

    const card = document.createElement("div");
    card.className = "weekday-card";

    const header = document.createElement("div");
    header.className = "weekday-header";

    const nameEl = document.createElement("div");
    nameEl.className = "weekday-name";
    nameEl.textContent = weekdayNames[i];

    const dateEl = document.createElement("div");
    dateEl.className = "weekday-date";
    dateEl.textContent = formatDateShort(dayDate);

    header.appendChild(nameEl);
    header.appendChild(dateEl);
    card.appendChild(header);

    const plansEl = document.createElement("div");
    plansEl.className = "day-plans";

    if (dayPlans.length === 0) {
      const empty = document.createElement("div");
      empty.style.opacity = "0.7";
      empty.style.fontSize = "0.75rem";
      empty.textContent = "אין תרגולים מתוכננים";
      plansEl.appendChild(empty);
    } else {
      dayPlans.forEach((p, idx) => {
        const planDiv = document.createElement("div");
        planDiv.className = "plan-item";

        // כותרת – שם המשימה + מחיקה
        const headerRow = document.createElement("div");
        headerRow.className = "plan-header-row";

        const mod = modules.find((m) => m.id === p.moduleId);
        const task = mod?.tasks.find((t) => t.id === p.taskId);
        const text = task ? `${mod.name} – ${task.title}` : "תרגול";

        const textSpan = document.createElement("span");
        textSpan.className = "plan-text";
        textSpan.textContent = text;

        const removeBtn = document.createElement("button");
        removeBtn.className = "plan-remove";
        removeBtn.textContent = "✕";
        removeBtn.title = "הסרת תרגול";

        removeBtn.addEventListener("click", () => {
          dayPlans.splice(idx, 1);
          plan[dayKey] = dayPlans;
          weeklyPlan[weekKey] = plan;
          saveJson(STORAGE_KEY_WEEKLY, weeklyPlan);
          renderWeeklyView();
        });

        headerRow.appendChild(textSpan);
        headerRow.appendChild(removeBtn);
        planDiv.appendChild(headerRow);

        // חלק נוסף – אחוזי הצלחה + הערות
        const extraDiv = document.createElement("div");
        extraDiv.className = "plan-extra";

        // אחוזי הצלחה
        const progressRow = document.createElement("div");
        progressRow.className = "plan-progress-row";

        const progressLabel = document.createElement("span");
        progressLabel.textContent = "הצלחה:";

        const percentSpan = document.createElement("span");
        percentSpan.className = "plan-percent-label";
        const initialValue = typeof p.success === "number" ? p.success : 0;
        percentSpan.textContent = `${initialValue}%`;

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0";
        slider.max = "100";
        slider.value = initialValue;
        slider.className = "plan-slider";

        slider.addEventListener("input", () => {
          const val = Number(slider.value);
          p.success = val;
          percentSpan.textContent = `${val}%`;
          saveJson(STORAGE_KEY_WEEKLY, weeklyPlan);
        });

        progressRow.appendChild(progressLabel);
        progressRow.appendChild(percentSpan);
        progressRow.appendChild(slider);

        // שדה הערות
        const note = document.createElement("textarea");
        note.className = "plan-note";
        note.placeholder = "הערות / חיזוקים לתרגול הבא";
        note.value = p.note || "";

        note.addEventListener("change", () => {
          p.note = note.value;
          saveJson(STORAGE_KEY_WEEKLY, weeklyPlan);
        });

        extraDiv.appendChild(progressRow);
        extraDiv.appendChild(note);
        planDiv.appendChild(extraDiv);

        plansEl.appendChild(planDiv);
      });
    }

    card.appendChild(plansEl);

    // בלוק הוספת תרגול
    const addDiv = document.createElement("div");
    addDiv.className = "add-plan";

    const select = document.createElement("select");
    const defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.textContent = "בחרי משימה להוסיף...";
    select.appendChild(defaultOpt);

    allOptions.forEach((opt) => {
      const o = document.createElement("option");
      o.value = `${opt.moduleId}::${opt.taskId}`;
      o.textContent = opt.label;
      select.appendChild(o);
    });

    const addBtn = document.createElement("button");
    addBtn.textContent = "הוסף";

    addBtn.addEventListener("click", () => {
      if (!select.value) return;
      const [moduleId, taskId] = select.value.split("::");
      const newEntry = { moduleId, taskId, success: 0, note: "" };
      const arr = plan[dayKey] || [];
      arr.push(newEntry);
      plan[dayKey] = arr;
      weeklyPlan[weekKey] = plan;
      saveJson(STORAGE_KEY_WEEKLY, weeklyPlan);
      renderWeeklyView();
    });

    addDiv.appendChild(select);
    addDiv.appendChild(addBtn);

    card.appendChild(addDiv);

    weeklyGridEl.appendChild(card);
  }
}

// -----------------------------
// View switching
// -----------------------------

function setView(view) {
  if (view === "modules") {
    modulesViewEl.classList.remove("hidden");
    weeklyViewEl.classList.add("hidden");
    sidebarEl.classList.remove("hidden");
  } else if (view === "weekly") {
    modulesViewEl.classList.add("hidden");
    weeklyViewEl.classList.remove("hidden");
    sidebarEl.classList.add("hidden");
    renderWeeklyView();
  }

  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
}

// -----------------------------
// Init
// -----------------------------

renderModuleList(modules[0]?.id);
renderModuleDetails(modules[0]?.id);

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const v = btn.dataset.view;
    setView(v);
  });
});

// Weekly controls
if (weekDatePicker) {
  currentWeekStartDate = getWeekStart(new Date());
  renderWeeklyView();

  weekDatePicker.addEventListener("change", () => {
    if (!weekDatePicker.value) return;
    const d = new Date(weekDatePicker.value);
    currentWeekStartDate = getWeekStart(d);
    renderWeeklyView();
  });
}

prevWeekBtn?.addEventListener("click", () => {
  currentWeekStartDate = addDays(currentWeekStartDate, -7);
  renderWeeklyView();
});

nextWeekBtn?.addEventListener("click", () => {
  currentWeekStartDate = addDays(currentWeekStartDate, 7);
  renderWeeklyView();
});

// ברירת מחדל – תצוגת מודולים
setView("modules");
