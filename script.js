// ─────────────────────────────────────────────────────────────────────────
// MarV Route landing page
// ─────────────────────────────────────────────────────────────────────────

// Launch-list signups are written straight to Firestore in the app's own
// Firebase project, via the REST API — no SDK bundle to download.
//
// The API key below is a public client key (that is what Firebase web keys are;
// they identify the project, they do not grant access). Access is controlled by
// the Firestore security rules — see README, "Форма підписки на запуск".
const FIREBASE_PROJECT_ID = "route-mint-app-2026";
const FIREBASE_API_KEY = "AIzaSyDTEkO_fcrP1ovbQr1U7tu5lMeDYOV80Jw";
const LEADS_COLLECTION = "leads";

const FIRESTORE_ENDPOINT =
  `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}` +
  `/databases/(default)/documents/${LEADS_COLLECTION}?key=${FIREBASE_API_KEY}`;

// ─── Translations ──────────────────────────────────────────────────────────

const i18n = {
  en: {
    metaDescription:
      "MarV Route automatically tracks business mileage, keeps a clean trip log, records fuel and expenses, and exports accountant-friendly PDF and CSV reports.",
    navFeatures: "Features",
    navHow: "How it works",
    navScreens: "Screens",
    navFaq: "FAQ",
    navCta: "Get notified",
    heroEyebrow: "Mileage tracking for real driving days",
    heroTitle: "Every business mile logged. Ready when tax time comes.",
    heroBody:
      "MarV Route detects your trips automatically, keeps a clean log of your business miles and kilometers, estimates your US mileage deduction at the IRS standard rate, logs fuel and driving costs, and exports PDF or CSV reports your accountant will actually like.",
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
    feat4Title: "Ready for tax time",
    feat4Body:
      "In the US, see an estimate of your mileage deduction at the IRS standard rate. In Canada, keep the business-kilometer log you need to claim actual vehicle expenses. Estimates only — not tax advice.",
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
    rateUsa: "USA · IRS standard rate",
    rateUsaNote: "from July 1, 2026; $0.725 before",
    rateCanada: "Canada · kilometer log",
    rateCanadaValue: "Business km <em>logged trip by trip</em>",
    rateNote: "US amounts are estimates at the IRS standard mileage rate. In Canada the app logs kilometers only, because self-employed drivers claim actual vehicle expenses. Not tax advice.",
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
      "MarV Route turns daily driving data into simple or detailed reports with business mileage, an estimated US mileage deduction, fuel summaries, parking, tolls, custom date ranges, and one-tap PDF or CSV export.",
    reportPanelMonth: "Monthly close",
    reportPanelReady: "Ready to export",
    reportLineMileage: "Business mileage",
    reportLineTax: "Est. deduction (IRS rate)",
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
      "Yes, while it's on. Auto detection keeps high-accuracy GPS running and shows a notification the whole time it's watching for trips, so it uses battery much like a navigation app. Keep your phone plugged in on long shifts, or leave auto detection off and tap Start trip when you drive.",
    faqQ2: "Is my driving data private?",
    faqA2:
      "Your trips and expenses are stored on your device. If you sign in and use cloud backup, a copy — without detailed GPS traces — is saved to your own account so you can restore it on a new phone. We don't sell your data, and it never goes to advertisers.",
    faqQ3: "Does it work offline?",
    faqA3:
      "Yes. Tracking, logging, and reports all work without a connection. Maps and address lookup need the internet, and cloud backup runs the next time you're online.",
    faqQ4: "Which mileage rates does it use?",
    faqA4:
      "For the US, the IRS standard mileage rate: 72.5¢ per mile for January–June 2026 and 76¢ per mile from July 1, 2026. The amount is an estimate of the standard-rate deduction — if you use that rate you can't also deduct fuel or repairs, though business parking and tolls still count. For Canada the app applies no rate: self-employed drivers claim actual vehicle expenses by the business share of their kilometers, so MarV Route keeps the kilometer log and leaves the amount to you or your accountant. None of this is tax advice.",
    faqQ5: "How much will Pro cost?",
    faqA5:
      "Pricing isn't final yet, and nothing is charged today: until paid plans launch, Pro features can be switched on for free in the app. Trip tracking, manual trips, and on-screen reports stay free for everyone; PDF and CSV export, cloud backup, auto detection, and the other features marked Pro will need a subscription once it launches.",
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
      "I agree to receive one email from MarV Space when MarV Route launches. I can withdraw my consent at any time. See our <a href=\"privacy/\">Privacy Policy</a>.",
    formSender: "Sender: MarV Space, 5212 S. Missoula Way, Boise, ID 83709, USA · <a href=\"mailto:marv.labs.it@gmail.com\">marv.labs.it@gmail.com</a>",
    formSubmit: "Notify me at launch",
    footerSupport: "Support",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerTop: "Back to top",
    formSending: "Sending…",
    formSuccess: "{name}, you're on the list. We'll email you the day MarV Route launches.",
    formError: "Something went wrong. Please try again or email us.",
    formInvalid: "Please add your name, a valid email, and accept the consent.",
  },
  uk: {
    metaDescription:
      "MarV Route автоматично відстежує робочий пробіг, веде чіткий журнал поїздок, облік пального й витрат та експортує зручні для бухгалтера звіти PDF і CSV.",
    navFeatures: "Можливості",
    navHow: "Як працює",
    navScreens: "Екрани",
    navFaq: "Питання",
    navCta: "Сповістити мене",
    heroEyebrow: "Облік пробігу для реальних робочих днів",
    heroTitle: "Кожна робоча миля врахована. Усе готове до податкового сезону.",
    heroBody:
      "MarV Route автоматично визначає поїздки, веде чіткий журнал робочих миль і кілометрів, оцінює відрахування за пробіг у США за стандартною ставкою IRS, веде облік пального та витрат на авто й експортує звіти PDF або CSV, які сподобаються вашому бухгалтеру.",
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
    feat4Title: "Готово до податкового сезону",
    feat4Body:
      "У США — орієнтовне відрахування за пробіг за стандартною ставкою IRS. У Канаді — журнал робочих кілометрів, потрібний, щоб заявити фактичні витрати на авто. Це лише оцінки, а не податкова консультація.",
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
      "Авто-визначення записує поїздки у фоні — або торкніться «Почати поїздку» для живого відстеження з картою.",
    how2Title: "Перевірте",
    how2Body:
      "Перегляньте вхідні на перевірку: робоча чи особиста, платформа, мета. Робочий режим зробить більшу частину за вас.",
    how3Title: "Експортуйте",
    how3Body:
      "Оберіть період і надішліть PDF чи CSV з пробігом, пальним, паркуванням і зборами прямо бухгалтеру.",
    rateUsa: "США · стандартна ставка IRS",
    rateUsaNote: "з 1 липня 2026; до того $0.725",
    rateCanada: "Канада · журнал кілометрів",
    rateCanadaValue: "Робочі км <em>запис кожної поїздки</em>",
    rateNote: "Суми для США — оцінки за стандартною ставкою IRS. У Канаді додаток веде лише облік кілометрів, бо самозайняті водії заявляють фактичні витрати на авто. Це не податкова консультація.",
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
      "MarV Route перетворює щоденні дані поїздок на прості чи докладні звіти з робочим пробігом, орієнтовним відрахуванням за пробіг для США, підсумками пального, паркуванням, зборами, довільними періодами та експортом PDF чи CSV в один дотик.",
    reportPanelMonth: "Закриття місяця",
    reportPanelReady: "Готово до експорту",
    reportLineMileage: "Робочий пробіг",
    reportLineTax: "Орієнт. відрахування (ставка IRS)",
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
      "Так, поки воно ввімкнене. Авто-визначення тримає ввімкненим GPS високої точності й показує сповіщення весь час, поки стежить за поїздками, тож витрачає батарею приблизно як навігатор. На довгих змінах тримайте телефон на зарядці — або залиште авто-визначення вимкненим і торкайтеся «Почати поїздку», коли їдете.",
    faqQ2: "Чи приватні мої дані поїздок?",
    faqA2:
      "Ваші поїздки та витрати зберігаються на вашому пристрої. Якщо ви ввійшли в акаунт і користуєтеся резервною копією в хмарі, копія — без детальних GPS-треків — зберігається у вашому акаунті, щоб її можна було відновити на новому телефоні. Ми не продаємо ваші дані, і вони ніколи не потрапляють до рекламодавців.",
    faqQ3: "Чи працює без інтернету?",
    faqA3:
      "Так. Відстеження, облік і звіти працюють без з'єднання. Для карт і пошуку адрес потрібен інтернет, а резервна копія в хмарі створюється, щойно ви знову онлайн.",
    faqQ4: "Які ставки пробігу використовуються?",
    faqA4:
      "Для США — стандартна ставка IRS: 72,5¢ за милю за січень–червень 2026 і 76¢ за милю з 1 липня 2026. Сума в додатку — це оцінка відрахування за стандартною ставкою: якщо ви користуєтеся нею, окремо відраховувати пальне чи ремонт не можна, а от паркування і платні дороги під час робочих поїздок — можна. Для Канади ставка не застосовується: самозайняті водії заявляють фактичні витрати на авто відповідно до частки робочих кілометрів, тому MarV Route веде журнал кілометрів, а суму визначаєте ви або ваш бухгалтер. Усе це не є податковою консультацією.",
    faqQ5: "Скільки коштуватиме Pro?",
    faqA5:
      "Ціни ще не остаточні, і зараз нічого не списується: поки платні плани не запущено, функції Pro можна безкоштовно ввімкнути в додатку. Відстеження поїздок, ручні поїздки та звіти на екрані залишаються безкоштовними для всіх; експорт PDF і CSV, резервна копія в хмарі, авто-визначення та інші функції з позначкою Pro потребуватимуть підписки після її запуску.",
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
      "Я погоджуюся отримати один лист від MarV Space, коли MarV Route вийде. Я можу будь-коли відкликати згоду. Див. нашу <a href=\"privacy/\">Політику конфіденційності</a>.",
    formSender: "Відправник: MarV Space, 5212 S. Missoula Way, Boise, ID 83709, USA · <a href=\"mailto:marv.labs.it@gmail.com\">marv.labs.it@gmail.com</a>",
    formSubmit: "Повідомити про запуск",
    footerSupport: "Підтримка",
    footerPrivacy: "Конфіденційність",
    footerTerms: "Умови",
    footerTop: "Нагору",
    formSending: "Надсилаємо…",
    formSuccess: "{name}, вас додано до списку. Ми напишемо в день запуску MarV Route.",
    formError: "Щось пішло не так. Спробуйте ще раз або напишіть нам.",
    formInvalid: "Заповніть ім'я, дійсний email і поставте згоду.",
  },
};

const SUPPORTED_LANGS = ["en", "uk"];
let currentLang = "en";

// Declared up here on purpose: applyLanguage() → renderFormMessage() reads it
// during init, which runs before the form section further down this file.
let formState = null; // { kind: "ok" | "error" | "invalid", name }

function dict() {
  return Object.assign({}, i18n.en, i18n[currentLang] || {});
}

function applyLanguage(lang, persist) {
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

  // The form message is generated, not marked up — re-render it by hand.
  renderFormMessage();
  fixFileProtocolLinks();

  // Saved only when the visitor picks a language here. The legal pages also
  // offer French; a choice made there has to survive a visit to this page.
  if (persist) {
    try {
      localStorage.setItem("marv-lang", currentLang);
    } catch (e) {}
  }
}

// ─── URL hygiene ─────────────────────────────────────────────────────────────

// Links point at clean paths ("privacy/"), which a web server resolves to the
// folder's index.html. Opening the site straight from disk has no server to do
// that, so rewrite those links to the file itself. Runs after every render,
// because translated strings can re-inject links.
function fixFileProtocolLinks() {
  if (location.protocol !== "file:") return;
  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (/^[a-z]+:/i.test(href)) return; // mailto:, https:, …
    const parts = href.match(/^([^#?]*\/)([#?].*)?$/);
    if (parts) a.setAttribute("href", parts[1] + "index.html" + (parts[2] || ""));
  });
}

// Someone arriving at /index.html (old bookmark, shared link) sees the tidy
// path instead. replaceState, so no reload and no extra history entry.
function canonicalizeUrl() {
  if (location.protocol.indexOf("http") !== 0) return;
  if (!/\/index\.html$/.test(location.pathname)) return;
  history.replaceState(
    null,
    "",
    location.pathname.replace(/index\.html$/, "") + location.search + location.hash
  );
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
  canonicalizeUrl();

  let savedLang = null;
  try {
    savedLang = localStorage.getItem("marv-lang");
  } catch (e) {}
  if (!savedLang && navigator.language && navigator.language.toLowerCase().indexOf("uk") === 0) {
    savedLang = "uk";
  }
  applyLanguage(savedLang || "en", false);

  const langToggle = document.querySelector(".lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "uk" : "en", true);
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

// ─── Form submission (Firestore REST) ────────────────────────────────────────

function renderFormMessage() {
  const el = document.querySelector(".form-message");
  if (!el) return;
  if (!formState) {
    el.textContent = "";
    el.dataset.state = "";
    return;
  }
  const t = dict();
  el.dataset.state = formState.kind === "ok" ? "ok" : "error";
  el.textContent =
    formState.kind === "ok"
      ? t.formSuccess.replace("{name}", formState.name)
      : formState.kind === "invalid"
        ? t.formInvalid
        : t.formError;
}

function setupForm() {
  const form = document.querySelector(".lead-form");
  if (!form) return;
  const message = form.querySelector(".form-message");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const consent = data.get("consent");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !consent) {
      formState = { kind: "invalid" };
      renderFormMessage();
      return;
    }

    // Bots fill hidden fields; humans never see this one. Pretend it worked so
    // the bot has nothing to retry against, but send nothing.
    if ((data.get("_gotcha") || "").toString().trim() !== "") {
      formState = { kind: "ok", name };
      renderFormMessage();
      form.reset();
      return;
    }

    submitBtn.disabled = true;
    formState = null;
    message.dataset.state = "";
    message.textContent = dict().formSending;

    const finish = (kind) => {
      formState = { kind, name };
      renderFormMessage();
      if (kind === "ok") form.reset();
      submitBtn.disabled = false;
    };

    // Firestore REST wants every value tagged with its type.
    const body = {
      fields: {
        name: { stringValue: name.slice(0, 100) },
        email: { stringValue: email.slice(0, 200) },
        driverType: { stringValue: (data.get("driver-type") || "").toString() },
        language: { stringValue: currentLang },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    };

    try {
      const res = await fetch(FIRESTORE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        finish("ok");
      } else {
        // 403 here almost always means the Firestore rules for the leads
        // collection are missing — see README.
        console.error("[MarV Route] signup failed:", res.status, await res.text());
        finish("error");
      }
    } catch (e) {
      console.error("[MarV Route] signup failed:", e);
      finish("error");
    }
  });
}
