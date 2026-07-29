// ─────────────────────────────────────────────────────────────────────────
// MarV Route landing page
// ─────────────────────────────────────────────────────────────────────────

// Paste your Formspree form ID here (https://formspree.io → New form).
// While it still says "your-form-id", the form runs in demo mode (no network).
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

// ─── Translations ──────────────────────────────────────────────────────────

const i18n = {
  en: {
    metaDescription:
      "MarV Route automatically tracks business mileage, estimates your tax deduction, logs fuel and expenses, and exports accountant-ready PDF and CSV reports.",
    navFeatures: "Features",
    navHow: "How it works",
    navScreens: "Screens",
    navFaq: "FAQ",
    navCta: "Get notified",
    heroEyebrow: "Mileage tracking for real driving days",
    heroTitle: "Every business mile logged. Every deduction counted.",
    heroBody:
      "MarV Route detects your trips automatically, estimates your mileage deduction with built-in IRS and CRA rates, logs fuel and driving costs, and exports clean PDF or CSV reports your accountant will actually like.",
    heroCtaPrimary: "Notify me at launch",
    heroCtaSecondary: "See what it tracks",
    storeSoon: "Coming soon on",
    trustRegion: "USA & Canada",
    trustUnit: "Miles or kilometers",
    trustLang: "6 languages",
    trustExport: "PDF & CSV export",
    featuresEyebrow: "What it tracks",
    featuresTitle: "A complete record of your driving — not just a route on a map.",
    featuresBody:
      "MarV Route is a mileage and expense companion for people who drive for work: delivery, rideshare, field service, or plain business miles that need clean records at tax time.",
    feat1Title: "Automatic trip detection",
    feat1Body:
      "Drive as usual — trips are detected and recorded in the background, with live tracking you can start manually any time.",
    feat2Title: "Review before export",
    feat2Body:
      "Detected trips land in a review inbox so you confirm business or personal, purpose, and platform before anything reaches a report.",
    feat3Title: "Work Mode",
    feat3Body:
      "Set your work shifts once, and every trip driven during a shift is classified as business automatically.",
    feat4Title: "Tax estimates built in",
    feat4Body:
      "Deductions are calculated as you drive using the IRS standard mileage rate and CRA's tiered per-kilometer rates.",
    feat5Title: "Fuel & driving costs",
    feat5Body:
      "Log fuel fill-ups, parking, tolls, repairs, and service expenses alongside your mileage history.",
    feat6Title: "Maintenance reminders",
    feat6Body:
      "Track oil changes and brake pads against your odometer so the car that earns is also the car that's ready.",
    feat7Title: "Cloud backup",
    feat7Body:
      "Daily automatic backup tied to your account, with restore on a fresh install — your records survive a lost phone.",
    feat8Title: "Localized setup",
    feat8Body:
      "English, Spanish, French, Russian, Ukrainian, and Dari. Miles or kilometers, your currency, light or dark theme.",
    howEyebrow: "How it works",
    howTitle: "Drive. Review. Export. Done.",
    how1Title: "Drive",
    how1Body:
      "Auto detection records your trips in the background — or tap Start trip for live tracking with a map.",
    how2Title: "Review",
    how2Body:
      "Swipe through the review inbox: business or personal, platform, purpose. Work Mode handles most of it for you.",
    how3Title: "Export",
    how3Body:
      "Pick a date range and send a PDF or CSV with mileage, fuel, parking, and tolls straight to your accountant.",
    rateUsa: "USA · IRS rate",
    rateCanada: "Canada · CRA rate",
    rateCanadaNote: "first 5,000 km, then $0.67",
    rateNote: "Rates are built into the app, so your tax estimate updates with every trip.",
    screensEyebrow: "Inside the app",
    screensTitle: "Real screens, real driving data.",
    screensBody:
      "A clean Material You interface in light or dark theme — built for quick taps between trips, not spreadsheets.",
    screenHome: "Home dashboard",
    screenTrips: "Trip history",
    screenReports: "Reports & export",
    screenAdd: "Add a trip",
    reportsEyebrow: "Reports",
    reportsTitle: "Accountant-friendly mileage and expense reports.",
    reportsBody:
      "MarV Route turns daily driving data into simple or detailed reports with business mileage, tax estimates, fuel summaries, parking, tolls, custom date ranges, and one-tap PDF or CSV export.",
    reportPanelMonth: "Monthly close",
    reportPanelReady: "Ready to export",
    reportLineMileage: "Business mileage",
    reportLineTax: "Tax estimate",
    reportLineFuel: "Fuel cost",
    reportLineParking: "Parking & tolls",
    exportPdf: "Export PDF",
    exportCsv: "Export CSV",
    proEyebrow: "MarV Route Pro",
    proTitle: "Cleaner reports, safer data, better cost tracking.",
    proBody: "Everything in the free app, plus the tools that make monthly close effortless.",
    pro1: "Unlimited PDF and CSV reports",
    pro2: "Cloud backup",
    pro3: "Fuel summaries in reports",
    pro4: "Monthly close checklist",
    pro5: "Auto trip detection",
    pro6: "Maintenance reminders",
    faqEyebrow: "FAQ",
    faqTitle: "Questions drivers ask before installing.",
    faqQ1: "Does trip detection drain my battery?",
    faqA1:
      "Auto detection uses Android's low-power location and only wakes up when you actually start moving. You can also leave it off and tap Start trip when you drive — your call.",
    faqQ2: "Is my driving data private?",
    faqA2:
      "Your trips and expenses are stored on your device. Cloud backup is optional and tied to your own account — we don't sell or share your data, and routes never go to advertisers.",
    faqQ3: "Does it work offline?",
    faqA3:
      "Yes. Tracking, logging, and reports all work without a connection. Cloud backup simply syncs the next time you're online.",
    faqQ4: "Which mileage rates does it use?",
    faqA4:
      "The US IRS standard rate ($0.725/mile) and Canada's CRA tiered rate ($0.73/km for the first 5,000 km, then $0.67). Estimates update automatically as you drive.",
    faqQ5: "How much will Pro cost?",
    faqA5:
      "Pricing isn't final yet. The core app — tracking, manual trips, and basic reports — stays free for everyone.",
    faqQ6: "When does it launch?",
    faqA6:
      "MarV Route is in the final stretch before release on the App Store and Google Play, and it will be available to everyone from day one. Leave your email below and we'll tell you the moment it's live.",
    downloadEyebrow: "Stay in the loop",
    downloadTitle: "Know the moment MarV Route is out.",
    downloadBody:
      "MarV Route is coming to the App Store and Google Play, free for everyone from day one. Leave your email and we'll send a single message on launch day — no newsletter, no spam.",
    formName: "Name",
    formNamePh: "Your name",
    formEmail: "Email",
    formEmailPh: "name@example.com",
    formDrive: "I drive for",
    formOpt1: "Business mileage",
    formOpt2: "Delivery / rideshare",
    formOpt3: "Field service",
    formOpt4: "Personal expense records",
    formConsent:
      'I agree to be emailed when MarV Route launches. See our <a href="privacy/index.html">Privacy Policy</a>.',
    formSubmit: "Notify me at launch",
    footerSupport: "Support",
    footerPrivacy: "Privacy",
    footerTop: "Back to top",
    formSending: "Sending…",
    formSuccess: "{name}, you're on the list. We'll email you the day MarV Route launches.",
    formError: "Something went wrong. Please try again or email us.",
    formInvalid: "Please add your name, a valid email, and accept the consent.",
  },
  uk: {
    metaDescription:
      "MarV Route автоматично відстежує робочий пробіг, оцінює податкове відрахування, веде облік пального й витрат та експортує готові для бухгалтера звіти PDF і CSV.",
    navFeatures: "Можливості",
    navHow: "Як працює",
    navScreens: "Екрани",
    navFaq: "Питання",
    navCta: "Сповістити мене",
    heroEyebrow: "Облік пробігу для реальних робочих днів",
    heroTitle: "Кожна робоча миля врахована. Кожне відрахування пораховане.",
    heroBody:
      "MarV Route автоматично визначає поїздки, оцінює податкове відрахування за вбудованими ставками IRS і CRA, веде облік пального та витрат на авто й експортує чисті звіти PDF або CSV, які сподобаються вашому бухгалтеру.",
    heroCtaPrimary: "Повідомити про запуск",
    heroCtaSecondary: "Що відстежує додаток",
    storeSoon: "Незабаром у",
    trustRegion: "США та Канада",
    trustUnit: "Милі або кілометри",
    trustLang: "6 мов",
    trustExport: "Експорт PDF та CSV",
    featuresEyebrow: "Що відстежує",
    featuresTitle: "Повний запис ваших поїздок — а не просто маршрут на карті.",
    featuresBody:
      "MarV Route — це помічник з обліку пробігу та витрат для тих, хто їздить по роботі: доставка, таксі, виїзні послуги чи звичайні робочі милі, для яких потрібен чіткий облік на час сплати податків.",
    feat1Title: "Автоматичне визначення поїздок",
    feat1Body:
      "Їдьте як завжди — поїздки визначаються й записуються у фоні, а живе відстеження можна запустити вручну будь-коли.",
    feat2Title: "Перевірка перед експортом",
    feat2Body:
      "Виявлені поїздки потрапляють до вхідних на перевірку, щоб ви підтвердили: робоча чи особиста, мету й платформу, перш ніж вони потраплять у звіт.",
    feat3Title: "Робочий режим",
    feat3Body:
      "Налаштуйте робочі зміни один раз — і кожна поїздка під час зміни автоматично позначається як робоча.",
    feat4Title: "Вбудована оцінка податку",
    feat4Body:
      "Відрахування рахуються під час їзди за стандартною ставкою IRS та багаторівневою покілометровою ставкою CRA.",
    feat5Title: "Пальне та витрати на авто",
    feat5Body:
      "Записуйте заправки, паркування, збори, ремонти та обслуговування поряд з історією пробігу.",
    feat6Title: "Нагадування про обслуговування",
    feat6Body:
      "Стежте за заміною оливи й гальмівними колодками за показником одометра, щоб авто, яке заробляє, було готове до роботи.",
    feat7Title: "Резервна копія в хмарі",
    feat7Body:
      "Щоденне автоматичне резервування, прив'язане до вашого акаунта, з відновленням на новому пристрої — ваші записи переживуть втрату телефона.",
    feat8Title: "Локалізоване налаштування",
    feat8Body:
      "Англійська, іспанська, французька, російська, українська та дарі. Милі чи кілометри, ваша валюта, світла чи темна тема.",
    howEyebrow: "Як це працює",
    howTitle: "Їдьте. Перевірте. Експортуйте. Готово.",
    how1Title: "Їдьте",
    how1Body:
      "Авто-визначення записує поїздки у фоні — або торкніться «Start trip» для живого відстеження з картою.",
    how2Title: "Перевірте",
    how2Body:
      "Перегляньте вхідні на перевірку: робоча чи особиста, платформа, мета. Робочий режим зробить більшу частину за вас.",
    how3Title: "Експортуйте",
    how3Body:
      "Оберіть період і надішліть PDF чи CSV з пробігом, пальним, паркуванням і зборами прямо бухгалтеру.",
    rateUsa: "США · ставка IRS",
    rateCanada: "Канада · ставка CRA",
    rateCanadaNote: "перші 5 000 км, далі $0.67",
    rateNote: "Ставки вбудовані в додаток, тож оцінка податку оновлюється з кожною поїздкою.",
    screensEyebrow: "Усередині додатку",
    screensTitle: "Справжні екрани, справжні дані поїздок.",
    screensBody:
      "Чистий інтерфейс Material You у світлій чи темній темі — створений для швидких дотиків між поїздками, а не для таблиць.",
    screenHome: "Головний екран",
    screenTrips: "Історія поїздок",
    screenReports: "Звіти та експорт",
    screenAdd: "Додати поїздку",
    reportsEyebrow: "Звіти",
    reportsTitle: "Звіти про пробіг і витрати, зручні для бухгалтера.",
    reportsBody:
      "MarV Route перетворює щоденні дані поїздок на прості чи докладні звіти з робочим пробігом, оцінкою податку, підсумками пального, паркуванням, зборами, довільними періодами та експортом PDF чи CSV в один дотик.",
    reportPanelMonth: "Закриття місяця",
    reportPanelReady: "Готово до експорту",
    reportLineMileage: "Робочий пробіг",
    reportLineTax: "Оцінка податку",
    reportLineFuel: "Витрати на пальне",
    reportLineParking: "Паркування та збори",
    exportPdf: "Експорт PDF",
    exportCsv: "Експорт CSV",
    proEyebrow: "MarV Route Pro",
    proTitle: "Чистіші звіти, надійніші дані, кращий облік витрат.",
    proBody: "Усе з безкоштовного додатку, а також інструменти, що роблять закриття місяця легким.",
    pro1: "Необмежені звіти PDF та CSV",
    pro2: "Резервна копія в хмарі",
    pro3: "Підсумки пального у звітах",
    pro4: "Чекліст закриття місяця",
    pro5: "Авто-визначення поїздок",
    pro6: "Нагадування про обслуговування",
    faqEyebrow: "Питання",
    faqTitle: "Що водії питають перед встановленням.",
    faqQ1: "Чи розряджає визначення поїздок батарею?",
    faqA1:
      "Авто-визначення використовує енергоощадну геолокацію Android і прокидається лише тоді, коли ви справді починаєте рухатися. Можна й залишити його вимкненим і торкатися «Start trip», коли їдете — як вам зручніше.",
    faqQ2: "Чи приватні мої дані поїздок?",
    faqA2:
      "Ваші поїздки та витрати зберігаються на вашому пристрої. Резервна копія в хмарі — за бажанням і прив'язана до вашого акаунта. Ми не продаємо й не передаємо ваші дані, а маршрути ніколи не йдуть до рекламодавців.",
    faqQ3: "Чи працює без інтернету?",
    faqA3:
      "Так. Відстеження, облік і звіти працюють без з'єднання. Резервна копія просто синхронізується, щойно ви знову онлайн.",
    faqQ4: "Які ставки пробігу використовуються?",
    faqA4:
      "Стандартна ставка IRS США ($0.725/милю) та багаторівнева ставка CRA Канади ($0.73/км за перші 5 000 км, далі $0.67). Оцінки оновлюються автоматично під час їзди.",
    faqQ5: "Скільки коштуватиме Pro?",
    faqA5:
      "Ціни ще не остаточні. Основний додаток — відстеження, ручні поїздки та базові звіти — залишається безкоштовним для всіх.",
    faqQ6: "Коли реліз?",
    faqA6:
      "MarV Route на фінішній прямій перед виходом в App Store і Google Play, і від першого дня буде доступний усім. Залиште email нижче — ми повідомимо, щойно він з'явиться.",
    downloadEyebrow: "Будьте в курсі",
    downloadTitle: "Дізнайтеся, щойно MarV Route вийде.",
    downloadBody:
      "MarV Route готується до виходу в App Store і Google Play — безкоштовно для всіх від першого дня. Залиште email, і ми надішлемо один лист у день запуску. Жодних розсилок і спаму.",
    formName: "Ім'я",
    formNamePh: "Ваше ім'я",
    formEmail: "Email",
    formEmailPh: "name@example.com",
    formDrive: "Я їжджу для",
    formOpt1: "Робочий пробіг",
    formOpt2: "Доставка / таксі",
    formOpt3: "Виїзні послуги",
    formOpt4: "Облік особистих витрат",
    formConsent:
      'Я погоджуюся отримати лист, коли MarV Route вийде. Див. нашу <a href="privacy/index.html">Політику конфіденційності</a>.',
    formSubmit: "Повідомити про запуск",
    footerSupport: "Підтримка",
    footerPrivacy: "Конфіденційність",
    footerTop: "Нагору",
    formSending: "Надсилаємо…",
    formSuccess: "{name}, вас додано до списку. Ми напишемо в день запуску MarV Route.",
    formError: "Щось пішло не так. Спробуйте ще раз або напишіть нам.",
    formInvalid: "Заповніть ім'я, дійсний email і поставте згоду.",
  },
};

const SUPPORTED_LANGS = ["en", "uk"];
let currentLang = "en";

function dict() {
  return Object.assign({}, i18n.en, i18n[currentLang] || {});
}

function applyLanguage(lang) {
  currentLang = SUPPORTED_LANGS.indexOf(lang) !== -1 ? lang : "en";
  const t = dict();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t[el.getAttribute("data-i18n")];
    if (value == null) return;
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else if (value.indexOf("<") !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const value = t[el.getAttribute("data-i18n-ph")];
    if (value != null) el.setAttribute("placeholder", value);
  });

  document.documentElement.setAttribute("lang", currentLang);
  const label = document.querySelector(".lang-current");
  if (label) label.textContent = currentLang.toUpperCase();

  try {
    localStorage.setItem("marv-lang", currentLang);
  } catch (e) {}
}

// ─── Theme toggle ────────────────────────────────────────────────────────────

function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.setAttribute("aria-pressed", String(next === "dark"));
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "dark" ? "#0a1418" : "#08131d");
  try {
    localStorage.setItem("marv-theme", next);
  } catch (e) {}
}

// ─── Boot ────────────────────────────────────────────────────────────────────

(function init() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem("marv-lang");
  } catch (e) {}
  if (!savedLang && navigator.language && navigator.language.toLowerCase().indexOf("uk") === 0) {
    savedLang = "uk";
  }
  applyLanguage(savedLang || "en");

  const langToggle = document.querySelector(".lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "uk" : "en");
    });
  }

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }

  // ─── Mobile nav ──
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    siteNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ─── Scroll reveal ──
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ─── Lead form ──
  setupForm();
})();

// ─── Form submission (Formspree) ─────────────────────────────────────────────

function setupForm() {
  const form = document.querySelector(".lead-form");
  if (!form) return;
  const message = form.querySelector(".form-message");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const t = dict();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const consent = data.get("consent");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !consent) {
      message.dataset.state = "error";
      message.textContent = t.formInvalid;
      return;
    }

    submitBtn.disabled = true;
    message.dataset.state = "";
    message.textContent = t.formSending;

    const finishOk = () => {
      message.dataset.state = "ok";
      message.textContent = t.formSuccess.replace("{name}", name);
      form.reset();
    };
    const finishErr = () => {
      message.dataset.state = "error";
      message.textContent = t.formError;
    };

    // Demo mode until a real Formspree ID is configured above.
    if (FORM_ENDPOINT.indexOf("your-form-id") !== -1) {
      setTimeout(() => {
        finishOk();
        submitBtn.disabled = false;
      }, 600);
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        finishOk();
      } else {
        finishErr();
      }
    } catch (e) {
      finishErr();
    } finally {
      submitBtn.disabled = false;
    }
  });
}
