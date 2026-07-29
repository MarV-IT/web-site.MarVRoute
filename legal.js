// ─────────────────────────────────────────────────────────────────────────
// Shared script for /privacy and /support — theme toggle + EN/UK translation.
// Keys prefixed p_ belong to the privacy page, s_ to the support page.
// A page only uses the keys present in its own markup.
// ─────────────────────────────────────────────────────────────────────────

const legalI18n = {
  en: {
    backToSite: "← Back to site",
    backHome: "← Back to MarV Route",
    toSupport: "Support →",
    toPrivacy: "Privacy Policy →",
    footerHome: "Home",
    footerFaq: "FAQ",
    footerSupport: "Support",
    footerPrivacy: "Privacy",

    // ── Privacy page ──
    p_docTitle: "Privacy Policy | MarV Route",
    eyebrowLegal: "Legal",
    p_title: "Privacy Policy",
    p_effective: "Effective date: July 27, 2026",
    p_intro:
      "MarV Route respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application.",
    p_calloutTitle: "📍 Background location notice",
    p_calloutBody:
      "MarV Route collects location data to record your trips, and can do so <strong>in the background</strong> — including when the app is closed or not in use — but only while you have trip tracking or automatic trip detection switched on. This data is used solely to measure and save <em>your own</em> trips inside the app. It is never sold, and it is not used for advertising or cross-app tracking. You can turn tracking off at any time in the app or in your device settings.",

    p_h1: "1. Information We Collect",
    p_1intro: "We may collect the following types of information:",
    p_1locH: "📍 Location Data",
    p_1locList:
      "<li>We collect location data to provide trip tracking and route functionality.</li><li>Location may be collected in the background when tracking is enabled.</li>",
    p_1accH: "👤 Account Information",
    p_1accList:
      "<li>Email address or login data (if authentication is used).</li><li>If you ask to be notified about the launch on our website, the name and email address you submit there. We use them only to send that announcement.</li>",
    p_1useH: "📊 Usage Data",
    p_1useList: "<li>Information about how you use the app (features used, interactions).</li>",
    p_1storH: "💾 Stored Data",
    p_1storList: "<li>Trips, routes, fuel logs, and related data stored locally or in the cloud.</li>",

    p_h2: "2. How We Use Your Information",
    p_2intro: "We use your data to:",
    p_2list:
      "<li>Provide and maintain app functionality</li><li>Track trips and generate reports</li><li>Calculate mileage and tax estimates for your records</li><li>Improve user experience</li><li>Fix bugs and improve performance</li>",
    p_2note:
      "We do not use your location or trip data for advertising, profiling, or automated decision-making.",

    p_h3: "3. Data Storage",
    p_3intro: "Data may be stored:",
    p_3list: "<li>Locally on your device</li><li>In cloud services (if enabled)</li>",
    p_3note: "<strong>We do not sell your personal data.</strong>",

    p_h4: "4. Data Retention",
    p_4list:
      "<li>Trips, fuel logs, and expenses stay on your device until you delete them or uninstall the app.</li><li>If cloud backup is enabled, backups are kept until you delete them or delete your account.</li><li>Account information is kept for as long as your account exists.</li>",

    p_h5: "5. Data Sharing",
    p_5intro: "We do not share your personal data with third parties except:",
    p_5list:
      "<li>When required by law</li><li>To provide essential app services (e.g., Firebase if used)</li>",
    p_5note:
      "Where cloud features are enabled, we use Google Firebase (Authentication and cloud storage) to sign you in and store your backups. These providers process data only to deliver the service to us, under their own privacy terms.",

    p_h6: "6. Permissions",
    p_6intro: "The app may request:",
    p_6list:
      "<li>📍 <strong>Location</strong> — for trip tracking</li><li>📱 <strong>Storage</strong> — for saving data/export files</li><li>🔔 <strong>Notifications</strong> — for trip alerts</li>",
    p_6note:
      "Each permission is optional. Denying one only disables the related feature — the rest of the app keeps working.",

    p_h7: "7. Data Security",
    p_7body:
      "We take reasonable measures to protect your data, but no method of transmission is 100% secure. Cloud connections are encrypted in transit, and access to backups is restricted to your own authenticated account.",

    p_h8: "8. Your Rights",
    p_8intro: "You can:",
    p_8list:
      "<li>Delete your data from the app</li><li>Stop location tracking at any time</li><li>Uninstall the app to remove all data</li><li>Request deletion of your account and any cloud backups by contacting us</li><li>Request a copy of the personal data associated with your account</li>",
    p_8note:
      "Depending on where you live (the USA, Canada, the EU, and others), you may have additional rights to access, correct, port, or erase your personal data. Contact us using the details below and we will respond as required by applicable law.",

    p_h9: "9. Children's Privacy",
    p_9body:
      "This app is not intended for children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us and we will delete it.",

    p_h10: "10. Changes to This Policy",
    p_10body:
      "We may update this Privacy Policy. Changes will be posted in the app or store listing, and the effective date at the top of this page will be updated.",

    p_h11: "11. Contact Us",
    p_11intro: "If you have questions:",
    p_emailLabel: "📧 Email:",

    // ── Support page ──
    s_docTitle: "Support | MarV Route",
    eyebrowSupport: "Support",
    s_title: "Help with MarV Route",
    s_sub: "We're a small team — real people read every message.",
    s_contactTitle: "📧 Contact us",
    s_emailLabel: "Email:",
    s_reply: "We aim to reply within 2–3 business days.",

    s_aboutH: "About the app",
    s_about1:
      "<strong>MarV Route</strong> is a mileage and expense tracker for people who drive for work — delivery and rideshare drivers, field service techs, and anyone who needs clean business-mileage records at tax time.",
    s_about2:
      "The app records your trips automatically in the background or manually when you tap Start trip, then lets you confirm whether each trip was business or personal. Alongside mileage it keeps your fuel fill-ups, parking, tolls, and repairs, estimates your deduction using the built-in IRS and CRA rates, reminds you about oil changes and brake pads, and exports everything as a PDF or CSV report for your accountant.",
    s_aboutList:
      "<li>Available for the USA and Canada, in miles or kilometers</li><li>Six interface languages: English, Spanish, French, Russian, Ukrainian, and Dari</li><li>Light and dark theme</li><li>Optional cloud backup so your records survive a lost phone</li>",

    s_qaH: "Quick answers",
    s_q1H: "Trips aren't being detected automatically",
    s_q1p: "Automatic detection needs three things enabled on your phone:",
    s_q1list:
      '<li>Location permission set to <strong>Allow all the time</strong> (not just "while using the app")</li><li>Battery optimization turned <strong>off</strong> for MarV Route, so Android doesn\'t stop it in the background</li><li>Notifications allowed — while the app is watching for trips, it shows a persistent notification</li>',
    s_q1note:
      "The app has a built-in <strong>Permission check</strong> screen that tests all three and tells you what's missing.",
    s_q2H: "The recorded distance looks wrong",
    s_q2p:
      "GPS accuracy drops in tunnels, parking garages, and dense downtown areas, so a trip can come out short. You can open any trip and correct the distance by hand before it goes into a report.",
    s_q3H: "How do I export a report?",
    s_q3p:
      "Open the <strong>Reports</strong> tab, pick a period (this month, last month, or a custom date range), then tap <strong>Export PDF</strong> or <strong>Export CSV</strong>. The file can be shared straight to email or cloud storage.",
    s_q4H: "How do I get my data back on a new phone?",
    s_q4p:
      "If cloud backup was enabled, sign in with the same account on the new device and restore from the Profile tab. Without a backup, data lives only on the old device.",
    s_q5H: "How do I change units, currency, or language?",
    s_q5p:
      "Everything is in the <strong>Profile</strong> tab — distance unit (miles or kilometers), country and currency, interface language, and theme.",
    s_q6H: "How do I delete my data?",
    s_q6p:
      "You can delete individual trips and expenses in the app, remove your cloud backups from the Profile tab, or uninstall the app to erase everything stored locally. To have your account and cloud data deleted entirely, email us using the address above.",

    s_bugH: "Reporting a bug",
    s_bugIntro: "To help us fix things faster, include as much of this as you can:",
    s_bugList:
      "<li>Phone model and Android (or iOS) version</li><li>App version, shown at the bottom of the Profile tab</li><li>What you did, what you expected, and what happened instead</li><li>A screenshot, if the problem is visible on screen</li>",

    s_featH: "Feature requests",
    s_featBody:
      "MarV Route is in active development and your feedback shapes what gets built next. If something is missing from your workflow, write to us — those messages genuinely change the roadmap.",
  },

  uk: {
    backToSite: "← На сайт",
    backHome: "← Назад на MarV Route",
    toSupport: "Підтримка →",
    toPrivacy: "Політика конфіденційності →",
    footerHome: "Головна",
    footerFaq: "Питання",
    footerSupport: "Підтримка",
    footerPrivacy: "Конфіденційність",

    // ── Сторінка політики ──
    p_docTitle: "Політика конфіденційності | MarV Route",
    eyebrowLegal: "Правова інформація",
    p_title: "Політика конфіденційності",
    p_effective: "Дата набрання чинності: 27 липня 2026",
    p_intro:
      "MarV Route поважає вашу приватність і зобовʼязується захищати ваші персональні дані. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо вашу інформацію, коли ви користуєтеся нашим мобільним додатком.",
    p_calloutTitle: "📍 Повідомлення про геолокацію у фоні",
    p_calloutBody:
      "MarV Route збирає дані геолокації, щоб записувати ваші поїздки, і може робити це <strong>у фоновому режимі</strong> — зокрема коли додаток закритий або не використовується — але лише поки увімкнено відстеження поїздок чи автоматичне виявлення поїздок. Ці дані використовуються виключно для вимірювання та збереження <em>ваших власних</em> поїздок у додатку. Ми ніколи їх не продаємо і не використовуємо для реклами чи стеження між додатками. Ви можете вимкнути відстеження будь-коли — у додатку або в налаштуваннях пристрою.",

    p_h1: "1. Які дані ми збираємо",
    p_1intro: "Ми можемо збирати такі типи інформації:",
    p_1locH: "📍 Дані геолокації",
    p_1locList:
      "<li>Ми збираємо дані геолокації, щоб забезпечити відстеження поїздок і роботу з маршрутами.</li><li>Геолокація може збиратися у фоновому режимі, коли ввімкнено відстеження.</li>",
    p_1accH: "👤 Дані облікового запису",
    p_1accList:
      "<li>Адреса електронної пошти або дані входу (якщо використовується автентифікація).</li><li>Якщо ви попросили повідомити про запуск на нашому сайті — імʼя та адреса пошти, які ви там залишили. Ми використовуємо їх лише для цього повідомлення.</li>",
    p_1useH: "📊 Дані про використання",
    p_1useList: "<li>Інформація про те, як ви користуєтеся додатком (які функції використовуєте, взаємодії).</li>",
    p_1storH: "💾 Збережені дані",
    p_1storList: "<li>Поїздки, маршрути, записи про пальне та повʼязані дані, збережені локально або в хмарі.</li>",

    p_h2: "2. Як ми використовуємо ваші дані",
    p_2intro: "Ми використовуємо ваші дані, щоб:",
    p_2list:
      "<li>Забезпечувати та підтримувати роботу додатку</li><li>Відстежувати поїздки й формувати звіти</li><li>Обчислювати пробіг і податкові оцінки для ваших записів</li><li>Покращувати зручність користування</li><li>Виправляти помилки та підвищувати продуктивність</li>",
    p_2note:
      "Ми не використовуємо ваші дані геолокації чи поїздок для реклами, профілювання або автоматизованого ухвалення рішень.",

    p_h3: "3. Зберігання даних",
    p_3intro: "Дані можуть зберігатися:",
    p_3list: "<li>Локально на вашому пристрої</li><li>У хмарних сервісах (якщо їх увімкнено)</li>",
    p_3note: "<strong>Ми не продаємо ваші персональні дані.</strong>",

    p_h4: "4. Строки зберігання даних",
    p_4list:
      "<li>Поїздки, записи про пальне та витрати залишаються на вашому пристрої, доки ви їх не видалите або не видалите додаток.</li><li>Якщо ввімкнено резервне копіювання в хмару, копії зберігаються, доки ви їх не видалите або не видалите обліковий запис.</li><li>Дані облікового запису зберігаються, доки існує ваш обліковий запис.</li>",

    p_h5: "5. Передача даних",
    p_5intro: "Ми не передаємо ваші персональні дані третім сторонам, окрім випадків:",
    p_5list:
      "<li>Коли цього вимагає закон</li><li>Для надання основних сервісів додатку (наприклад, Firebase, якщо використовується)</li>",
    p_5note:
      "Якщо хмарні функції ввімкнено, ми використовуємо Google Firebase (автентифікація та хмарне сховище) для входу й зберігання ваших резервних копій. Ці постачальники обробляють дані лише для надання нам відповідної послуги, згідно з власними умовами конфіденційності.",

    p_h6: "6. Дозволи",
    p_6intro: "Додаток може запитувати:",
    p_6list:
      "<li>📍 <strong>Геолокація</strong> — для відстеження поїздок</li><li>📱 <strong>Сховище</strong> — для збереження даних та файлів експорту</li><li>🔔 <strong>Сповіщення</strong> — для повідомлень про поїздки</li>",
    p_6note:
      "Кожен дозвіл є необовʼязковим. Відмова вимикає лише повʼязану функцію — решта додатку працює далі.",

    p_h7: "7. Безпека даних",
    p_7body:
      "Ми вживаємо розумних заходів для захисту ваших даних, але жоден спосіб передавання не є на 100% безпечним. Зʼєднання з хмарою шифруються під час передавання, а доступ до резервних копій обмежений вашим власним автентифікованим обліковим записом.",

    p_h8: "8. Ваші права",
    p_8intro: "Ви можете:",
    p_8list:
      "<li>Видалити свої дані з додатку</li><li>Будь-коли зупинити відстеження геолокації</li><li>Видалити додаток, щоб стерти всі дані</li><li>Звернутися до нас із запитом на видалення облікового запису та всіх хмарних копій</li><li>Запитати копію персональних даних, повʼязаних з вашим обліковим записом</li>",
    p_8note:
      "Залежно від того, де ви проживаєте (США, Канада, ЄС та інші), ви можете мати додаткові права на доступ, виправлення, перенесення або стирання ваших персональних даних. Звертайтеся до нас за контактами нижче — ми відповімо у порядку, передбаченому чинним законодавством.",

    p_h9: "9. Конфіденційність дітей",
    p_9body:
      "Цей додаток не призначений для дітей віком до 13 років. Ми свідомо не збираємо персональні дані дітей. Якщо ви вважаєте, що дитина надала нам персональні дані, звʼяжіться з нами — і ми їх видалимо.",

    p_h10: "10. Зміни до цієї Політики",
    p_10body:
      "Ми можемо оновлювати цю Політику конфіденційності. Зміни буде опубліковано в додатку або на сторінці в магазині застосунків, а дату набрання чинності вгорі цієї сторінки буде оновлено.",

    p_h11: "11. Звʼязок з нами",
    p_11intro: "Якщо у вас є запитання:",
    p_emailLabel: "📧 Email:",

    // ── Сторінка підтримки ──
    s_docTitle: "Підтримка | MarV Route",
    eyebrowSupport: "Підтримка",
    s_title: "Допомога з MarV Route",
    s_sub: "Ми невелика команда — кожне повідомлення читають живі люди.",
    s_contactTitle: "📧 Напишіть нам",
    s_emailLabel: "Email:",
    s_reply: "Намагаємося відповідати протягом 2–3 робочих днів.",

    s_aboutH: "Про додаток",
    s_about1:
      "<strong>MarV Route</strong> — це облік пробігу та витрат для тих, хто їздить по роботі: курʼєрів і водіїв таксі, спеціалістів з виїзних робіт та всіх, кому потрібні чіткі записи робочого пробігу до сплати податків.",
    s_about2:
      "Додаток записує поїздки автоматично у фоні або вручну, коли ви торкаєтеся «Start trip», а потім дає підтвердити, робоча була поїздка чи особиста. Разом із пробігом він зберігає заправки, паркування, збори й ремонти, оцінює ваше відрахування за вбудованими ставками IRS і CRA, нагадує про заміну оливи та гальмівні колодки й експортує все у звіт PDF або CSV для бухгалтера.",
    s_aboutList:
      "<li>Доступний для США та Канади, у милях або кілометрах</li><li>Шість мов інтерфейсу: англійська, іспанська, французька, російська, українська та дарі</li><li>Світла й темна тема</li><li>Резервне копіювання в хмару за бажанням — ваші записи переживуть втрату телефона</li>",

    s_qaH: "Швидкі відповіді",
    s_q1H: "Поїздки не визначаються автоматично",
    s_q1p: "Для автоматичного визначення на телефоні мають бути ввімкнені три речі:",
    s_q1list:
      "<li>Дозвіл геолокації — <strong>«Дозволяти завжди»</strong> (а не лише «під час використання додатка»)</li><li>Оптимізацію батареї для MarV Route <strong>вимкнено</strong>, щоб Android не зупиняв додаток у фоні</li><li>Сповіщення дозволено — поки додаток стежить за поїздками, він показує постійне сповіщення</li>",
    s_q1note:
      "У додатку є вбудований екран <strong>перевірки дозволів</strong>, який перевіряє всі три пункти й показує, чого бракує.",
    s_q2H: "Записана дистанція виглядає неправильною",
    s_q2p:
      "Точність GPS падає в тунелях, підземних паркінгах і щільній міській забудові, тому поїздка може вийти коротшою. Ви можете відкрити будь-яку поїздку й виправити дистанцію вручну, перш ніж вона потрапить у звіт.",
    s_q3H: "Як експортувати звіт?",
    s_q3p:
      "Відкрийте вкладку <strong>Reports</strong>, оберіть період (цей місяць, минулий місяць або довільний діапазон дат) і торкніться <strong>Export PDF</strong> чи <strong>Export CSV</strong>. Файл можна одразу надіслати поштою або в хмарне сховище.",
    s_q4H: "Як повернути дані на новому телефоні?",
    s_q4p:
      "Якщо резервне копіювання в хмару було ввімкнене, увійдіть тим самим обліковим записом на новому пристрої та відновіть дані у вкладці Profile. Без резервної копії дані залишаються лише на старому пристрої.",
    s_q5H: "Як змінити одиниці, валюту чи мову?",
    s_q5p:
      "Усе це у вкладці <strong>Profile</strong> — одиниця відстані (милі або кілометри), країна й валюта, мова інтерфейсу та тема.",
    s_q6H: "Як видалити свої дані?",
    s_q6p:
      "Ви можете видаляти окремі поїздки та витрати в додатку, прибрати хмарні резервні копії у вкладці Profile або видалити додаток, щоб стерти все збережене локально. Щоб повністю видалити обліковий запис і хмарні дані, напишіть нам на адресу вище.",

    s_bugH: "Повідомити про помилку",
    s_bugIntro: "Щоб ми виправили швидше, вкажіть якомога більше з цього:",
    s_bugList:
      "<li>Модель телефона та версію Android (або iOS)</li><li>Версію додатку — вона внизу вкладки Profile</li><li>Що ви робили, чого очікували і що сталося натомість</li><li>Знімок екрана, якщо проблему видно на екрані</li>",

    s_featH: "Побажання щодо функцій",
    s_featBody:
      "MarV Route активно розробляється, і ваші відгуки впливають на те, що буде створено далі. Якщо вам чогось бракує у роботі — напишіть нам: такі повідомлення справді змінюють плани розробки.",
  },
};

const LEGAL_LANGS = ["en", "uk"];
let legalLang = "en";

function applyLegalLanguage(lang) {
  legalLang = LEGAL_LANGS.indexOf(lang) !== -1 ? lang : "en";
  const t = Object.assign({}, legalI18n.en, legalI18n[legalLang] || {});

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t[el.getAttribute("data-i18n")];
    if (value == null) return;
    if (value.indexOf("<") !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  const titleKey = document.body.getAttribute("data-title-key");
  if (titleKey && t[titleKey]) document.title = t[titleKey];

  document.documentElement.setAttribute("lang", legalLang);
  const label = document.querySelector(".lang-current");
  if (label) label.textContent = legalLang.toUpperCase();

  try {
    localStorage.setItem("marv-lang", legalLang);
  } catch (e) {}
}

function applyLegalTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.setAttribute("aria-pressed", String(next === "dark"));
  try {
    localStorage.setItem("marv-theme", next);
  } catch (e) {}
}

(function initLegal() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem("marv-lang");
  } catch (e) {}
  if (!savedLang && navigator.language && navigator.language.toLowerCase().indexOf("uk") === 0) {
    savedLang = "uk";
  }
  applyLegalLanguage(savedLang || "en");

  const langToggle = document.querySelector(".lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLegalLanguage(legalLang === "en" ? "uk" : "en");
    });
  }

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-pressed",
      String(document.documentElement.getAttribute("data-theme") === "dark")
    );
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyLegalTheme(isDark ? "light" : "dark");
    });
  }
})();
