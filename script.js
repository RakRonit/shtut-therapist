// קישור אלמנטים
const homeLink = document.getElementById('homeLink');
const modulesLink = document.getElementById('modulesLink');
const weeklyLink = document.getElementById('weeklyLink');
const content = document.getElementById('content');

// דף הבית
homeLink.addEventListener('click', () => {
  content.innerHTML = `
    <h2>ברוכה הבאה 🐶</h2>
    <p>כאן תוכלי לעקוב אחרי ההתקדמות של שטות במסע להיות כלבה טיפולית.</p>
  `;
});

// דף המודולים
modulesLink.addEventListener('click', () => {
  content.innerHTML = `
    <h2>מודולי למידה</h2>
    <div class="module">ילדים</div>
    <div class="module">גברים</div>
    <div class="module">רעש</div>
    <div class="module">כלבים</div>
    <div class="module">תנועה</div>
  `;
});

// דף לוח שבועי – גרסה ראשונה, בסיסית
weeklyLink.addEventListener('click', () => {
  content.innerHTML = `
    <h2>לוח שבועי</h2>
    <p>(כאן נוסיף בחירת תאריכים ותרגולים בהמשך)</p>
  `;
});
