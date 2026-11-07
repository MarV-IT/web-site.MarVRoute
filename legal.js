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
    p_effective: "Effective date: November 7, 2026",
    p_intro: "MarV Route is made by MarV Labs, the trade name of an independent developer based in Boise, Idaho, USA (\"we\", \"us\"). This Privacy Policy explains what data the MarV Route mobile app and the marvroute.com website collect, how we use and protect it, and the choices you have.",
    p_calloutTitle: "📍 Background location notice",
    p_calloutBody: "MarV Route collects location data to record your trips, and can do so <strong>in the background</strong> — including when the app is closed or not in use — but only while you have trip tracking or automatic trip detection switched on. This data is used solely to measure and save <em>your own</em> trips inside the app. It is never sold, and it is not used for advertising or cross-app tracking. You can turn tracking off at any time in the app or in your device settings.",
    p_h1: "1. Information We Collect",
    p_1intro: "What we collect depends on how you use MarV Route:",
    p_1locH: "📍 Location Data",
    p_1locList: "<li>Precise GPS location while a trip is being recorded, including in the background when tracking or automatic trip detection is on.</li><li>We use it to measure distance and to record each trip's route, start and end points, date and time.</li><li>Detailed GPS route traces stay on your device. They are never uploaded to the cloud.</li>",
    p_1tripH: "🚗 Trips, Expenses and Settings",
    p_1tripList: "<li>Whether a trip is business or personal, its platform and purpose, and any edits you make.</li><li>Fuel fill-ups, parking, tolls, repairs and other expenses you log, and your maintenance reminders.</li><li>Your preferences: distance unit, country and currency, language, theme and Work Mode settings.</li>",
    p_1accH: "👤 Account Information (optional)",
    p_1accList: "<li>You can use MarV Route without an account. In that case we don't receive your email address, and nothing is stored in the cloud.</li><li>If you create an account with an email and password: your email address and the user ID that Firebase Authentication assigns to you. Your password is checked by Firebase Authentication — we never see it.</li><li>If you sign in with Google: Google shares your name, email address and profile picture with Firebase Authentication.</li><li>To keep you signed in, the app may keep your sign-in details in your phone's secure storage (Keychain on iPhone, Keystore on Android). They are not sent anywhere from there and are removed when you sign out.</li>",
    p_1webH: "🌐 Website Launch List",
    p_1webList: "<li>If you ask to be notified about the launch on marvroute.com, we collect the name and email address you enter, the driver type you select, the language you viewed the site in, and the time of your request.</li><li>We use them only to send you the launch announcement. Every email we send will include a way to unsubscribe.</li>",
    p_1diagH: "🛠 Diagnostics and Statistics",
    p_1diagList: "<li>If you allow it in your phone's settings, Apple or Google may share crash reports and basic diagnostics with us, such as the device model, OS version and where the app crashed.</li><li>Apple (App Store Connect) and Google (Google Play Console) also give us aggregated statistics about installs, usage and crashes. These statistics do not identify you individually.</li><li>We use this information only to fix bugs and improve the app. MarV Route itself does not contain advertising or analytics SDKs.</li>",
    p_h2: "2. How We Use Your Information",
    p_2intro: "We use your data to:",
    p_2list: "<li>Provide and maintain app functionality</li><li>Record trips and generate reports</li><li>Calculate mileage and tax estimates for your records</li><li>Back up and restore your data, if you turn on cloud backup</li><li>Send the notifications you allow, such as trip alerts and maintenance reminders</li><li>Answer your support requests, fix bugs and improve the app</li><li>Send the launch announcement, if you asked for it on our website</li>",
    p_2note: "We do not use your location or trip data for advertising, profiling, or automated decision-making.",
    p_h3: "3. Where Your Data Is Stored",
    p_3intro: "Where your data lives depends on the choices you make:",
    p_3list: "<li><strong>On your device</strong> — by default, all your trips, expenses and settings stay on your phone.</li><li><strong>In the cloud, only if you turn on cloud backup</strong> — your trips with their start and end points, expenses, fuel records, Work Mode settings and app preferences are stored in Google Firebase (Cloud Firestore) and linked to your account.</li><li><strong>Website launch list</strong> — requests from the form on marvroute.com are stored in Google Firebase (Cloud Firestore).</li>",
    p_3note: "Google may store this data on servers in the United States or other countries. <strong>We do not sell your personal data.</strong>",
    p_h4: "4. Data Retention",
    p_4list: "<li>Trips, fuel logs and expenses stay on your device until you delete them or uninstall the app.</li><li>If cloud backup is enabled, backups are kept until you delete them or delete your account.</li><li>Account information is kept for as long as your account exists.</li><li>Launch-list requests are kept only as long as we need them to send the launch announcement, or until you ask us to remove them.</li>",
    p_h5: "5. Data Sharing",
    p_5intro: "We do not sell or rent your personal data, and we do not share it with advertisers or data brokers. We share it only:",
    p_5list: "<li>With Google Firebase (Authentication and Cloud Firestore), which runs sign-in, cloud backup and the website launch list for us, and with Google Sign-In if you choose to sign in with Google</li><li>When you choose to, for example when you export a PDF or CSV report and send it to someone</li><li>When required by law, or to protect someone's safety</li>",
    p_5note: "Maps in the app are OpenStreetMap map images downloaded from the OpenStreetMap Foundation's servers (tile.openstreetmap.org), which receive your IP address and the map area on screen, as with any website. Addresses for your trips, and addresses you search for, are looked up with your phone's built-in geocoding service (Apple on iPhone, Google on Android), which receives the coordinates or the address text. These services never receive your email address or account ID.",
    p_h6: "6. Permissions",
    p_6intro: "The app may request:",
    p_6list: "<li>📍 <strong>Location</strong> — for trip tracking</li><li>📱 <strong>Storage</strong> — for saving data/export files</li><li>🔔 <strong>Notifications</strong> — for trip alerts and maintenance reminders</li>",
    p_6note: "Each permission is optional. Denying one only disables the related feature — the rest of the app keeps working.",
    p_h7: "7. Data Security",
    p_7body: "We take reasonable measures to protect your data, but no method of transmission or storage is 100% secure. Cloud connections are encrypted in transit, and access to backups is restricted to your own authenticated account. If a security breach affects your personal information, we will notify you without unreasonable delay, as required by law, including Idaho Code § 28-51-105.",
    p_h8: "8. Your Rights",
    p_8intro: "You can:",
    p_8list: "<li>Delete individual trips and expenses in the app</li><li>Remove your cloud backup in the Profile tab</li><li>Delete your account and its cloud data in the app — <strong>Profile → Privacy &amp; Data → Delete account</strong> — or by email (see <a href=\"../delete-account/\">Delete account</a>)</li><li>Stop location tracking at any time</li><li>Uninstall the app to remove the data stored on your device</li><li>Request a copy of the personal data associated with your account</li><li>Ask us to remove you from the launch list</li>",
    p_8note: "Depending on where you live (the USA, Canada, the EU, and others), you may have additional rights to access, correct, port, or erase your personal data. If you live in Canada, your data may be stored and processed outside Canada, including in the United States. Contact us using the details below and we will respond within 30 days, or sooner where the law requires.",
    p_h9: "9. Children's Privacy",
    p_9body: "This app is not intended for children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us and we will delete it.",
    p_h10: "10. Do Not Track",
    p_10body: "MarV Route and this website do not track you across other companies' apps or websites and do not show ads, so they do not change how they work in response to \"Do Not Track\" signals.",
    p_h11: "11. Changes to This Policy",
    p_11body: "We may update this Privacy Policy. Changes will be posted on this page and in the app or store listing, and the effective date at the top of this page will be updated.",
    p_h12: "12. Contact Us",
    p_12intro: "If you have questions or requests about your data:",
    p_emailLabel: "📧 Email:",
    p_12note: "MarV Route is developed by MarV Labs, the trade name of an independent developer based in Boise, Idaho, USA.",

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
      "You can delete individual trips and expenses in the app, remove your cloud backups from the Profile tab, or uninstall the app to erase everything stored locally. To delete your account and all of its cloud data, open <strong>Profile → Privacy &amp; Data → Delete account</strong> in the app. If you no longer have the app, email us from the address your account is registered with — see <a href=\"../delete-account/\">Delete account</a>.",

    s_bugH: "Reporting a bug",
    s_bugIntro: "To help us fix things faster, include as much of this as you can:",
    s_bugList:
      "<li>Phone model and Android (or iOS) version</li><li>App version, shown at the bottom of the Profile tab</li><li>What you did, what you expected, and what happened instead</li><li>A screenshot, if the problem is visible on screen</li>",

    s_featH: "Feature requests",
    s_featBody:
      "MarV Route is in active development and your feedback shapes what gets built next. If something is missing from your workflow, write to us — those messages genuinely change the roadmap.",

    // ── Delete account page ──
    d_docTitle: "Delete Your Account | MarV Route",
    d_title: "Delete Your Account",
    d_updated: "Last updated: July 31, 2026",
    d_intro:
      "You can delete your MarV Route account and everything stored with it at any time — from inside the app, or by writing to us. This page covers both routes and exactly what is removed.",
    d_calloutTitle: "⚠️ Deletion is permanent",
    d_calloutBody:
      "Deleting your account erases your cloud backup and the app data on your device. There is no recovery and no waiting period — once you confirm, the data is gone. If you want to keep a copy, export a backup from the Profile tab first.",

    d_h1: "1. Delete from inside the app",
    d_1intro: "The fastest route, and it takes effect immediately:",
    d_1list:
      "<li>Open <strong>MarV Route</strong> and go to the <strong>Profile</strong> tab.</li><li>Scroll to the bottom and open the <strong>Privacy &amp; Data</strong> section.</li><li>Tap <strong>Delete account</strong>.</li><li>Confirm with <strong>Delete permanently</strong>.</li>",
    d_1note:
      "You need to be signed in. If you use MarV Route without an account, nothing is stored in the cloud at all — uninstalling the app removes all of your data.",

    d_h2: "2. Request deletion by email",
    d_2intro:
      "If you no longer have the app installed, write to us from the address your account is registered with:",
    d_2note:
      'Use the subject "Delete my account". We confirm the request comes from the registered address and complete the deletion within 30 days — usually much sooner.',

    d_h3: "3. What gets deleted",
    d_3list:
      "<li><strong>Your account</strong> — the email address and user ID you sign in with.</li><li><strong>Your cloud backup</strong> — trips, trip start and end points, expenses, fuel records, work-mode settings and app preferences.</li><li><strong>Local app data</strong> on the device you delete from — trips, expenses, fuel records and settings.</li>",

    d_h4: "4. Data on other devices",
    d_4body:
      "Deleting your account removes the cloud copy and the data on the device you deleted from. If MarV Route is also installed on another phone, that phone still holds its own local copy — uninstall the app there, or delete the account from that device too.",

    d_h5: "5. What we keep",
    d_5body:
      "Nothing. We do not retain account data after deletion, and we never sell or share it with third parties. Detailed GPS route traces are never uploaded to the cloud in the first place — they stay on your device and go away with it.",

    d_h6: "6. Contact",
    d_emailLabel: "📧 Email:",
    toDelete: "Delete account →",
    footerDelete: "Delete account",

    // ── Terms of Service page ──
    t_docTitle: "Terms of Service | MarV Route",
    footerTerms: "Terms",
    toTerms: "Terms of Service →",
    t_title: "Terms of Service",
    t_effective: "Effective date: November 7, 2026",
    t_intro:
      "These Terms are an agreement between you and MarV Labs, the trade name of an independent developer based in Boise, Idaho, USA (\"we\", \"us\"). They govern your use of the MarV Route mobile application and this website. Please read them before you rely on the app for anything that matters — your mileage records, your expenses, or your taxes.",
    t_calloutTitle: "⚠️ Estimates, not professional advice",
    t_calloutBody:
      "MarV Route measures distance with your phone's GPS and calculates deductions using published mileage rates. Both are <strong>estimates</strong>. The app is a record-keeping tool, not an accountant — review your trips before you file anything, and consult a qualified tax professional about your own situation.",

    t_h1: "1. Accepting these Terms",
    t_1body:
      "By installing or using MarV Route, you agree to these Terms. If you do not agree, please do not use the app. If you use MarV Route for an employer or a business, you confirm you are allowed to accept these Terms on its behalf.",

    t_h2: "2. Who can use MarV Route",
    t_2list:
      "<li>You must be at least 18 years old.</li><li>You must hold a valid driver's licence for the trips you record.</li><li>The app is built around United States and Canadian mileage rules. You may use it elsewhere, but the built-in tax rates will not apply to you.</li>",

    t_h3: "3. Using the app responsibly",
    t_3intro: "You agree not to:",
    t_3list:
      "<li>Operate the app while driving in a way that distracts you or breaks local traffic law.</li><li>Falsify trips, distances or expenses in order to mislead a tax authority, employer or client.</li><li>Use the app for any unlawful purpose, or to track another person without their knowledge.</li><li>Copy, resell, decompile or reverse engineer the app, or try to extract its source code.</li><li>Interfere with the app's operation, or attempt to access accounts or data that are not yours.</li>",
    t_3note:
      "<strong>Drive first, tap later.</strong> Start and stop tracking before you set off or after you park. Automatic detection exists precisely so you never need to touch your phone while the car is moving. In Idaho, the law allows phone use while driving only in hands-free mode (Idaho Code § 49-1401A), and many other states and provinces have similar rules.",

    t_h4: "4. GPS tracking and mileage accuracy",
    t_4intro:
      "Distances come from your device's location sensors, so their accuracy depends on things we do not control:",
    t_4list:
      "<li>GPS signal quality — tunnels, parking garages and dense city blocks all degrade it.</li><li>Your device, its operating system and its battery-saving settings.</li><li>Permissions: if location access is limited, or the system stops the app in the background, trips can be recorded short, split in two, or missed entirely.</li><li>Automatic detection may also record a trip you did not intend to log.</li>",
    t_4note:
      "Recorded distances are estimates, not certified measurements. MarV Route lets you edit any trip by hand for exactly this reason, and you remain responsible for checking that your records are correct and complete.",

    t_h5: "5. Reports are not tax advice",
    t_5body:
      "MarV Route calculates estimated deductions using standard mileage rates — the IRS rate in the United States and the CRA rate in Canada. This is a convenience calculation, nothing more.",
    t_5list:
      "<li>We are not accountants, tax advisors or legal advisors, and we do not provide such services.</li><li>Official rates change. The app may not reflect a new rate immediately, and an outdated rate produces an outdated estimate.</li><li>Whether a trip is deductible at all, and which method you may use, depends on your own circumstances and your tax authority's rules.</li><li>Reports exported from the app are not certified documents and are not filed on your behalf.</li>",
    t_5note:
      "Before filing anything, have your figures checked by a qualified professional. You are solely responsible for what you submit to a tax authority.",

    t_h6: "6. Your records are your responsibility",
    t_6body:
      "Keep your own copies of anything you need. Cloud backup is a convenience, not an archival guarantee: data can be lost through device failure, an uninstall, an account deletion, or a service interruption. Export a PDF or CSV of anything you may need later.",

    t_h7: "7. MarV Route Pro subscription",
    t_7intro:
      "The core app — trip tracking, manual trips and basic reports — is free. Some features are planned to become part of <strong>MarV Route Pro</strong>, an optional paid subscription. When it launches, these terms will apply:",
    t_7list:
      "<li>Pro will be sold as an <strong>annual subscription</strong>. The current price and currency are always shown in the App Store or Google Play before you confirm.</li><li>Payment is charged to your Apple or Google account when you confirm the purchase, not to us — we never see or store your card details.</li><li>The subscription <strong>renews automatically</strong> each year unless you cancel at least 24 hours before the current period ends. Renewal is charged within 24 hours before that date.</li><li>Prices may change for future periods. You will be told in advance, and a price increase never applies to a period you have already paid for.</li><li>If a free trial is offered and you subscribe before it ends, any unused part of the trial is forfeited.</li>",
    t_7note:
      "Features that are free today stay free. Pro adds to the app — it does not lock away what you already rely on.",

    t_h8: "8. Cancellation and refunds",
    t_8intro:
      "You can cancel at any time, and cancelling is always done in the store you bought from — not in the app:",
    t_8list:
      "<li><strong>iPhone / iPad:</strong> Settings → your name → Subscriptions → MarV Route → Cancel Subscription.</li><li><strong>Android:</strong> Google Play → profile icon → Payments &amp; subscriptions → Subscriptions → MarV Route → Cancel.</li>",
    t_8note1:
      "After cancelling you keep Pro features until the end of the period you already paid for. Nothing is deleted — your trips, expenses and reports stay in the app, and you can carry on using the free features.",
    t_8note2:
      "<strong>Refunds are handled by Apple and Google</strong>, under their own policies, because the payment is made to them. We cannot issue a refund for a store purchase ourselves. If something went wrong, write to us anyway — we will help you put the request together and support it where we can.",

    t_h9: "9. Changes to the app",
    t_9body:
      "MarV Route is under active development. We may add, change or remove features, and we may suspend the service for maintenance. We will avoid removing anything you depend on without notice, but we cannot promise that every feature will exist forever.",

    t_h10: "10. Ownership",
    t_10body:
      "The app, its name, logo, design and code belong to MarV Labs. You get a personal, non-transferable licence to use the app — not ownership of it. Your data, however, is yours: your trips, expenses and reports belong to you, and you can export or delete them at any time.",

    t_h11: "11. No warranty",
    t_11body:
      'MarV Route is provided "as is" and "as available". To the extent the law allows, we make no warranty that the app will be uninterrupted, error-free, or accurate in every measurement, and no warranty of fitness for a particular purpose.',

    t_h12: "12. Limitation of liability",
    t_12body:
      "To the extent the law allows, we are not liable for indirect or consequential losses arising from your use of the app — including lost or inaccurate mileage records, rejected deductions, penalties or interest charged by a tax authority, lost profits, or data loss. Nothing in these Terms limits liability that cannot legally be limited.",

    t_h13: "13. Suspension and termination",
    t_13body:
      "You may stop using MarV Route at any time by uninstalling it, and you can delete your account and data in the app under Profile → Privacy & Data → Delete account. We may suspend or close an account that breaks these Terms or is used unlawfully. If we close your account, we will tell you why where we are permitted to.",

    t_h14: "14. Changes to these Terms",
    t_14body:
      "We may update these Terms as the app develops. The effective date at the top of this page will change, and significant changes will be announced in the app or in the store listing. Continuing to use MarV Route after an update means you accept the revised Terms.",

    t_h15: "15. Governing law",
    t_15body:
      "These Terms are governed by the laws of the State of Idaho, United States, without regard to its conflict-of-law rules. Disputes will be heard by the state or federal courts located in Ada County, Idaho, unless the law of the place where you live gives you the right to go to a court there. This does not take away any protection you have under the mandatory consumer law of the country you live in.",

    t_h16: "16. Third-party services and trademarks",
    t_16body: "MarV Route relies on services from other companies, such as Google Firebase, OpenStreetMap map data and your phone's location services. They can change or be unavailable, and we are not responsible for them. MarV Route is not affiliated with, endorsed or sponsored by any rideshare or delivery platform, such as Uber, Lyft, DoorDash or Instacart. Their names are trademarks of their respective owners and are used only to describe which services the app can be used with.",
    t_h17: "17. Apple App Store",
    t_17intro: "If you downloaded MarV Route from the Apple App Store, the following also applies:",
    t_17list: "<li>These Terms are between you and us, not Apple. We, not Apple, are solely responsible for the app and its content.</li><li>Your licence is limited to Apple-branded devices that you own or control, as allowed by the Usage Rules in the Apple Media Services Terms and Conditions.</li><li>Apple has no obligation to provide maintenance or support for the app.</li><li>If the app fails to meet any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any. Apple has no other warranty obligation for the app.</li><li>We, not Apple, are responsible for addressing any claims about the app, including product liability claims, claims that it fails to meet legal or regulatory requirements, and consumer protection or privacy claims.</li><li>If someone claims that the app infringes their intellectual property, we, not Apple, are responsible for investigating, defending and settling that claim.</li><li>You confirm that you are not located in a country subject to a US government embargo and that you are not on any US government list of prohibited or restricted parties.</li><li>You must follow any third-party terms that apply when you use the app, such as your wireless data plan.</li><li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</li>",
    t_h18: "18. Contact",
    t_18body: "Questions about these Terms, or about a subscription:",
    t_emailLabel: "📧 Email:",
    t_18note: "MarV Route is developed by MarV Labs, the trade name of an independent developer based in Boise, Idaho, USA. We reply to most messages within 2–3 business days.",
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
    p_effective: "Дата набрання чинності: 7 листопада 2026",
    p_intro: "MarV Route створює MarV Labs — торгова назва незалежного розробника з Бойсе, штат Айдахо, США («ми»). Ця Політика конфіденційності пояснює, які дані збирають мобільний додаток MarV Route і сайт marvroute.com, як ми їх використовуємо й захищаємо та що ви можете з цим зробити.",
    p_calloutTitle: "📍 Повідомлення про геолокацію у фоні",
    p_calloutBody: "MarV Route збирає дані геолокації, щоб записувати ваші поїздки, і може робити це <strong>у фоновому режимі</strong> — зокрема коли додаток закритий або не використовується — але лише поки увімкнено відстеження поїздок чи автоматичне виявлення поїздок. Ці дані використовуються виключно для вимірювання та збереження <em>ваших власних</em> поїздок у додатку. Ми ніколи їх не продаємо і не використовуємо для реклами чи стеження між додатками. Ви можете вимкнути відстеження будь-коли — у додатку або в налаштуваннях пристрою.",
    p_h1: "1. Які дані ми збираємо",
    p_1intro: "Що саме ми збираємо, залежить від того, як ви користуєтеся MarV Route:",
    p_1locH: "📍 Дані геолокації",
    p_1locList: "<li>Точна GPS-геолокація під час запису поїздки, зокрема у фоновому режимі, коли ввімкнено відстеження чи автоматичне визначення поїздок.</li><li>Ми використовуємо її, щоб виміряти відстань і записати маршрут, точки початку й кінця, дату й час кожної поїздки.</li><li>Детальні GPS-треки маршрутів залишаються на вашому пристрої й ніколи не завантажуються в хмару.</li>",
    p_1tripH: "🚗 Поїздки, витрати й налаштування",
    p_1tripList: "<li>Чи була поїздка робочою чи особистою, її платформа й мета, а також ваші правки.</li><li>Заправки, паркування, платні дороги, ремонти й інші витрати, які ви вносите, та нагадування про обслуговування.</li><li>Ваші налаштування: одиниця відстані, країна й валюта, мова, тема й параметри Work Mode.</li>",
    p_1accH: "👤 Дані облікового запису (необовʼязково)",
    p_1accList: "<li>MarV Route можна користуватися без облікового запису. Тоді ми не отримуємо вашу адресу пошти, а в хмарі нічого не зберігається.</li><li>Якщо ви створюєте обліковий запис з email і паролем: адреса електронної пошти та ідентифікатор користувача, який призначає Firebase Authentication. Пароль перевіряє Firebase Authentication — ми його ніколи не бачимо.</li><li>Якщо ви входите через Google: Google передає Firebase Authentication ваше імʼя, адресу пошти й фото профілю.</li><li>Щоб ви залишалися в системі, додаток може зберігати дані для входу в захищеному сховищі телефона (Keychain на iPhone, Keystore на Android). Звідти вони нікуди не передаються й видаляються, коли ви виходите з облікового запису.</li>",
    p_1webH: "🌐 Список очікування на сайті",
    p_1webList: "<li>Якщо ви просите повідомити про запуск на marvroute.com, ми збираємо імʼя та адресу пошти, які ви вводите, вибраний тип водія, мову, якою ви переглядали сайт, і час заявки.</li><li>Ми використовуємо їх лише для того, щоб надіслати вам повідомлення про запуск. У кожному нашому листі буде спосіб відписатися.</li>",
    p_1diagH: "🛠 Діагностика й статистика",
    p_1diagList: "<li>Якщо ви дозволили це в налаштуваннях телефона, Apple чи Google можуть передавати нам звіти про збої та базову діагностику: модель пристрою, версію ОС і місце збою.</li><li>Apple (App Store Connect) і Google (Google Play Console) також надають нам узагальнену статистику встановлень, використання й збоїв. Ця статистика не ідентифікує вас особисто.</li><li>Ми використовуємо ці дані лише для виправлення помилок і покращення додатку. Сам MarV Route не містить рекламних чи аналітичних SDK.</li>",
    p_h2: "2. Як ми використовуємо ваші дані",
    p_2intro: "Ми використовуємо ваші дані, щоб:",
    p_2list: "<li>Забезпечувати та підтримувати роботу додатку</li><li>Записувати поїздки й формувати звіти</li><li>Обчислювати пробіг і податкові оцінки для ваших записів</li><li>Створювати й відновлювати резервну копію, якщо ви ввімкнули резервне копіювання в хмару</li><li>Надсилати дозволені вами сповіщення, як-от про поїздки й обслуговування</li><li>Відповідати на звернення в підтримку, виправляти помилки й покращувати додаток</li><li>Надіслати повідомлення про запуск, якщо ви попросили про це на сайті</li>",
    p_2note: "Ми не використовуємо ваші дані геолокації чи поїздок для реклами, профілювання або автоматизованого ухвалення рішень.",
    p_h3: "3. Де зберігаються дані",
    p_3intro: "Де зберігаються ваші дані, залежить від вашого вибору:",
    p_3list: "<li><strong>На вашому пристрої</strong> — за замовчуванням усі поїздки, витрати й налаштування залишаються на телефоні.</li><li><strong>У хмарі, лише якщо ви ввімкнули резервне копіювання</strong> — поїздки з точками початку й кінця, витрати, записи про пальне, налаштування Work Mode і параметри додатку зберігаються в Google Firebase (Cloud Firestore) і привʼязані до вашого облікового запису.</li><li><strong>Список очікування на сайті</strong> — заявки з форми на marvroute.com зберігаються в Google Firebase (Cloud Firestore).</li>",
    p_3note: "Google може зберігати ці дані на серверах у США чи інших країнах. <strong>Ми не продаємо ваші персональні дані.</strong>",
    p_h4: "4. Строки зберігання даних",
    p_4list: "<li>Поїздки, записи про пальне та витрати залишаються на вашому пристрої, доки ви їх не видалите або не видалите додаток.</li><li>Якщо ввімкнено резервне копіювання в хмару, копії зберігаються, доки ви їх не видалите або не видалите обліковий запис.</li><li>Дані облікового запису зберігаються, доки існує ваш обліковий запис.</li><li>Заявки зі списку очікування зберігаються лише стільки, скільки потрібно, щоб надіслати повідомлення про запуск, або доки ви не попросите їх видалити.</li>",
    p_h5: "5. Передача даних",
    p_5intro: "Ми не продаємо й не здаємо в оренду ваші персональні дані та не передаємо їх рекламодавцям чи брокерам даних. Ми передаємо їх лише:",
    p_5list: "<li>Google Firebase (Authentication і Cloud Firestore), який забезпечує для нас вхід, резервне копіювання в хмару та список очікування на сайті, а також Google Sign-In, якщо ви входите через Google</li><li>Коли ви самі так вирішуєте, наприклад експортуєте звіт PDF чи CSV і надсилаєте його комусь</li><li>Коли цього вимагає закон або щоб захистити чиюсь безпеку</li>",
    p_5note: "Карти в додатку — це зображення OpenStreetMap, які завантажуються із серверів OpenStreetMap Foundation (tile.openstreetmap.org); ці сервери отримують вашу IP-адресу й ділянку карти на екрані, як і будь-який сайт. Адреси ваших поїздок і адреси, які ви шукаєте, визначає вбудований сервіс геокодування телефона (Apple на iPhone, Google на Android), який отримує координати або текст адреси. Ці сервіси ніколи не отримують вашу адресу пошти чи ідентифікатор облікового запису.",
    p_h6: "6. Дозволи",
    p_6intro: "Додаток може запитувати:",
    p_6list: "<li>📍 <strong>Геолокація</strong> — для відстеження поїздок</li><li>📱 <strong>Сховище</strong> — для збереження даних та файлів експорту</li><li>🔔 <strong>Сповіщення</strong> — для повідомлень про поїздки й нагадувань про обслуговування</li>",
    p_6note: "Кожен дозвіл є необовʼязковим. Відмова вимикає лише повʼязану функцію — решта додатку працює далі.",
    p_h7: "7. Безпека даних",
    p_7body: "Ми вживаємо розумних заходів для захисту ваших даних, але жоден спосіб передавання чи зберігання не є на 100% безпечним. Зʼєднання з хмарою шифруються під час передавання, а доступ до резервних копій обмежений вашим власним автентифікованим обліковим записом. Якщо витік зачепить ваші персональні дані, ми повідомимо вас без невиправданої затримки, як того вимагає закон, зокрема Idaho Code § 28-51-105.",
    p_h8: "8. Ваші права",
    p_8intro: "Ви можете:",
    p_8list: "<li>Видаляти окремі поїздки й витрати в додатку</li><li>Прибрати резервну копію в хмарі у вкладці «Профіль»</li><li>Видалити обліковий запис і його хмарні дані в додатку — <strong>Профіль → Конфіденційність і дані → Видалити акаунт</strong> — або поштою (див. <a href=\"../delete-account/\">Видалення акаунта</a>)</li><li>Будь-коли зупинити відстеження геолокації</li><li>Видалити додаток, щоб стерти дані на пристрої</li><li>Запитати копію персональних даних, повʼязаних з вашим обліковим записом</li><li>Попросити видалити вас зі списку очікування</li>",
    p_8note: "Залежно від того, де ви проживаєте (США, Канада, ЄС та інші), ви можете мати додаткові права на доступ, виправлення, перенесення або стирання ваших персональних даних. Якщо ви живете в Канаді, ваші дані можуть зберігатися й оброблятися за її межами, зокрема в США. Звертайтеся до нас за контактами нижче — ми відповімо протягом 30 днів або швидше, якщо цього вимагає закон.",
    p_h9: "9. Конфіденційність дітей",
    p_9body: "Цей додаток не призначений для дітей віком до 13 років. Ми свідомо не збираємо персональні дані дітей. Якщо ви вважаєте, що дитина надала нам персональні дані, звʼяжіться з нами — і ми їх видалимо.",
    p_h10: "10. Сигнали «Do Not Track»",
    p_10body: "MarV Route і цей сайт не відстежують вас у додатках і на сайтах інших компаній і не показують рекламу, тож не змінюють роботу у відповідь на сигнали «Do Not Track».",
    p_h11: "11. Зміни до цієї Політики",
    p_11body: "Ми можемо оновлювати цю Політику конфіденційності. Зміни буде опубліковано на цій сторінці, а також у додатку або на сторінці в магазині застосунків, а дату набрання чинності вгорі сторінки буде оновлено.",
    p_h12: "12. Звʼязок з нами",
    p_12intro: "Якщо у вас є запитання чи запити щодо ваших даних:",
    p_emailLabel: "📧 Email:",
    p_12note: "MarV Route розробляє MarV Labs — торгова назва незалежного розробника з Бойсе, штат Айдахо, США.",

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
      "Ви можете видаляти окремі поїздки та витрати в додатку, прибрати хмарні резервні копії у вкладці Profile або видалити додаток, щоб стерти все збережене локально. Щоб видалити обліковий запис і всі його хмарні дані, відкрийте в додатку <strong>Профіль → Конфіденційність і дані → Видалити акаунт</strong>. Якщо додатка у вас більше немає, напишіть нам з адреси, на яку зареєстровано акаунт, — див. <a href=\"../delete-account/\">Видалення акаунта</a>.",

    s_bugH: "Повідомити про помилку",
    s_bugIntro: "Щоб ми виправили швидше, вкажіть якомога більше з цього:",
    s_bugList:
      "<li>Модель телефона та версію Android (або iOS)</li><li>Версію додатку — вона внизу вкладки Profile</li><li>Що ви робили, чого очікували і що сталося натомість</li><li>Знімок екрана, якщо проблему видно на екрані</li>",

    s_featH: "Побажання щодо функцій",
    s_featBody:
      "MarV Route активно розробляється, і ваші відгуки впливають на те, що буде створено далі. Якщо вам чогось бракує у роботі — напишіть нам: такі повідомлення справді змінюють плани розробки.",

    // ── Сторінка видалення акаунта ──
    d_docTitle: "Видалення акаунта | MarV Route",
    d_title: "Видалення акаунта",
    d_updated: "Оновлено: 31 липня 2026",
    d_intro:
      "Ви можете будь-коли видалити свій акаунт MarV Route і все, що з ним зберігається — просто в додатку або написавши нам. Тут описано обидва способи і те, що саме видаляється.",
    d_calloutTitle: "⚠️ Видалення незворотне",
    d_calloutBody:
      "Видалення акаунта стирає резервну копію в хмарі та дані додатку на вашому пристрої. Відновити їх неможливо, періоду очікування немає — щойно ви підтвердите, дані зникнуть. Якщо хочете зберегти копію, спершу експортуйте резервну копію на вкладці «Профіль».",

    d_h1: "1. Видалення в додатку",
    d_1intro: "Найшвидший спосіб — усе зникає одразу:",
    d_1list:
      "<li>Відкрийте <strong>MarV Route</strong> і перейдіть на вкладку <strong>Профіль</strong>.</li><li>Прокрутіть донизу й розгорніть розділ <strong>Конфіденційність і дані</strong>.</li><li>Натисніть <strong>Видалити акаунт</strong>.</li><li>Підтвердьте кнопкою <strong>Видалити назавжди</strong>.</li>",
    d_1note:
      "Потрібно бути в акаунті. Якщо ви користуєтеся MarV Route без акаунта, у хмарі не зберігається нічого — видалення додатку прибирає всі ваші дані.",

    d_h2: "2. Запит на видалення поштою",
    d_2intro:
      "Якщо додатка у вас більше немає, напишіть нам з адреси, на яку зареєстровано акаунт:",
    d_2note:
      "Тема листа — «Delete my account». Ми переконуємось, що запит надійшов із зареєстрованої адреси, і виконуємо видалення протягом 30 днів, зазвичай значно швидше.",

    d_h3: "3. Що саме видаляється",
    d_3list:
      "<li><strong>Ваш акаунт</strong> — електронна адреса та ідентифікатор користувача, з якими ви входите.</li><li><strong>Резервна копія в хмарі</strong> — поїздки, точки початку й кінця поїздок, витрати, записи про пальне, налаштування режиму роботи та параметри додатку.</li><li><strong>Локальні дані</strong> на пристрої, з якого ви видаляєте — поїздки, витрати, записи про пальне й налаштування.</li>",

    d_h4: "4. Дані на інших пристроях",
    d_4body:
      "Видалення акаунта прибирає хмарну копію та дані на пристрої, з якого ви його видалили. Якщо MarV Route встановлено ще й на іншому телефоні, там залишається власна локальна копія — видаліть додаток на тому пристрої або видаліть акаунт і з нього.",

    d_h5: "5. Що ми зберігаємо",
    d_5body:
      "Нічого. Ми не залишаємо дані акаунта після видалення і ніколи не продаємо та не передаємо їх третім сторонам. Детальні GPS-треки маршрутів узагалі не завантажуються в хмару — вони лишаються на вашому пристрої та зникають разом із ним.",

    d_h6: "6. Контакти",
    d_emailLabel: "📧 Пошта:",
    toDelete: "Видалення акаунта →",
    footerDelete: "Видалення акаунта",

    // ── Сторінка умов використання ──
    t_docTitle: "Умови використання | MarV Route",
    footerTerms: "Умови",
    toTerms: "Умови використання →",
    t_title: "Умови використання",
    t_effective: "Дата набрання чинності: 7 листопада 2026",
    t_intro:
      "Ці Умови — угода між вами та MarV Labs, торговою назвою незалежного розробника з Бойсе, штат Айдахо, США («ми»). Вони регулюють користування мобільним додатком MarV Route і цим сайтом. Прочитайте їх, перш ніж покладатися на додаток у важливих речах — обліку пробігу, витратах чи податках.",
    t_calloutTitle: "⚠️ Це оцінки, а не професійна консультація",
    t_calloutBody:
      "MarV Route вимірює відстань за допомогою GPS вашого телефона й обчислює відрахування за офіційними ставками пробігу. І те, і те — <strong>оцінки</strong>. Додаток є інструментом обліку, а не бухгалтером: перевіряйте поїздки, перш ніж щось подавати, і консультуйтеся з кваліфікованим податковим фахівцем щодо вашої ситуації.",

    t_h1: "1. Прийняття цих Умов",
    t_1body:
      "Встановлюючи або використовуючи MarV Route, ви погоджуєтеся з цими Умовами. Якщо ви не згодні — не користуйтеся додатком. Якщо ви використовуєте MarV Route для роботодавця чи бізнесу, ви підтверджуєте, що маєте право прийняти ці Умови від його імені.",

    t_h2: "2. Хто може користуватися MarV Route",
    t_2list:
      "<li>Вам має бути щонайменше 18 років.</li><li>Ви повинні мати чинне водійське посвідчення для поїздок, які записуєте.</li><li>Додаток побудований на правилах обліку пробігу США та Канади. Ви можете користуватися ним і в інших країнах, але вбудовані податкові ставки до вас не застосовуватимуться.</li>",

    t_h3: "3. Відповідальне користування додатком",
    t_3intro: "Ви зобовʼязуєтеся не:",
    t_3list:
      "<li>Користуватися додатком під час руху так, що це відволікає вас або порушує місцеві правила дорожнього руху.</li><li>Фальсифікувати поїздки, відстані чи витрати, щоб ввести в оману податковий орган, роботодавця або клієнта.</li><li>Використовувати додаток у протиправних цілях або для стеження за іншою людиною без її відома.</li><li>Копіювати, перепродавати, декомпілювати додаток чи намагатися отримати його вихідний код.</li><li>Втручатися в роботу додатка або намагатися отримати доступ до чужих акаунтів і даних.</li>",
    t_3note:
      "<strong>Спершу дорога, потім екран.</strong> Запускайте й зупиняйте відстеження до виїзду або після паркування. Автоматичне визначення існує саме для того, щоб вам не доводилося торкатися телефона під час руху. В Айдахо закон дозволяє користуватися телефоном за кермом лише в режимі hands-free (Idaho Code § 49-1401A), і в багатьох інших штатах і провінціях діють схожі правила.",

    t_h4: "4. GPS-відстеження та точність пробігу",
    t_4intro:
      "Відстані беруться з датчиків місцезнаходження вашого пристрою, тож їхня точність залежить від речей, які ми не контролюємо:",
    t_4list:
      "<li>Якість сигналу GPS — тунелі, підземні паркінги й щільна міська забудова погіршують його.</li><li>Ваш пристрій, його операційна система та налаштування енергозбереження.</li><li>Дозволи: якщо доступ до геолокації обмежено або система зупиняє додаток у фоні, поїздки можуть записатися коротшими, розділитися надвоє або не записатися взагалі.</li><li>Автоматичне визначення може також записати поїздку, яку ви не збиралися фіксувати.</li>",
    t_4note:
      "Записані відстані — це оцінки, а не сертифіковані вимірювання. Саме тому MarV Route дозволяє відредагувати будь-яку поїздку вручну, і саме ви відповідаєте за перевірку того, що ваші записи правильні й повні.",

    t_h5: "5. Звіти не є податковою консультацією",
    t_5body:
      "MarV Route обчислює орієнтовні відрахування за стандартними ставками пробігу — ставкою IRS у США та ставкою CRA в Канаді. Це розрахунок для зручності, не більше.",
    t_5list:
      "<li>Ми не бухгалтери, не податкові й не юридичні радники та не надаємо таких послуг.</li><li>Офіційні ставки змінюються. Додаток може не відобразити нову ставку одразу, а застаріла ставка дає застарілу оцінку.</li><li>Чи підлягає поїздка відрахуванню взагалі та який метод можна застосувати — залежить від ваших обставин і правил вашого податкового органу.</li><li>Експортовані з додатка звіти не є сертифікованими документами й не подаються від вашого імені.</li>",
    t_5note:
      "Перш ніж щось подавати, дайте перевірити свої цифри кваліфікованому фахівцю. Ви одноосібно відповідаєте за те, що подаєте до податкового органу.",

    t_h6: "6. Ваші записи — ваша відповідальність",
    t_6body:
      "Зберігайте власні копії всього, що вам потрібно. Резервна копія в хмарі — це зручність, а не гарантія вічного зберігання: дані можна втратити через поломку пристрою, видалення додатка, видалення акаунта чи перебій у роботі сервісу. Експортуйте PDF або CSV усього, що може знадобитися пізніше.",

    t_h7: "7. Підписка MarV Route Pro",
    t_7intro:
      "Основний додаток — відстеження поїздок, ручні поїздки та базові звіти — безкоштовний. Частина функцій планується як <strong>MarV Route Pro</strong>, необовʼязкова платна підписка. Коли її буде запущено, діятимуть такі умови:",
    t_7list:
      "<li>Pro продаватиметься як <strong>річна підписка</strong>. Поточна ціна й валюта завжди показані в App Store або Google Play до підтвердження покупки.</li><li>Оплата списується з вашого акаунта Apple або Google у момент підтвердження покупки, а не нами — ми ніколи не бачимо й не зберігаємо дані вашої картки.</li><li>Підписка <strong>поновлюється автоматично</strong> щороку, якщо ви не скасуєте її щонайменше за 24 години до кінця поточного періоду. Оплату за поновлення списують протягом 24 годин до цієї дати.</li><li>Ціни можуть змінюватися для майбутніх періодів. Вас попередять заздалегідь, і підвищення ціни ніколи не стосується вже оплаченого періоду.</li><li>Якщо пропонується безкоштовний пробний період і ви оформлюєте підписку до його завершення, невикористана частина пробного періоду згорає.</li>",
    t_7note:
      "Функції, безкоштовні сьогодні, такими й залишаться. Pro додає можливості, а не забирає те, чим ви вже користуєтесь.",

    t_h8: "8. Скасування підписки та повернення коштів",
    t_8intro:
      "Скасувати підписку можна будь-коли, і робиться це завжди в магазині, де ви її придбали, а не в додатку:",
    t_8list:
      "<li><strong>iPhone / iPad:</strong> Налаштування → ваше імʼя → Підписки → MarV Route → Скасувати підписку.</li><li><strong>Android:</strong> Google Play → значок профілю → Платежі та підписки → Підписки → MarV Route → Скасувати.</li>",
    t_8note1:
      "Після скасування Pro-функції лишаються у вас до кінця вже оплаченого періоду. Нічого не видаляється — ваші поїздки, витрати та звіти залишаються в додатку, і ви можете далі користуватися безкоштовними функціями.",
    t_8note2:
      "<strong>Поверненням коштів займаються Apple і Google</strong> за власними правилами, бо саме їм здійснюється оплата. Ми не можемо самостійно повернути кошти за покупку в магазині. Якщо щось пішло не так — усе одно напишіть нам: ми допоможемо оформити запит і підтримаємо його, наскільки це можливо.",

    t_h9: "9. Зміни в додатку",
    t_9body:
      "MarV Route активно розробляється. Ми можемо додавати, змінювати чи прибирати функції, а також призупиняти роботу сервісу для обслуговування. Ми намагатимемось не прибирати без попередження те, від чого ви залежите, але не можемо обіцяти, що кожна функція існуватиме вічно.",

    t_h10: "10. Право власності",
    t_10body:
      "Додаток, його назва, логотип, дизайн і код належать MarV Labs. Ви отримуєте особисту ліцензію на користування додатком без права передачі — але не право власності на нього. Ваші дані, натомість, належать вам: поїздки, витрати та звіти ваші, і ви можете будь-коли експортувати або видалити їх.",

    t_h11: "11. Відсутність гарантій",
    t_11body:
      "MarV Route надається «як є» та «як доступно». У межах, дозволених законом, ми не гарантуємо безперебійної роботи додатка, відсутності помилок, точності кожного вимірювання чи придатності для конкретної мети.",

    t_h12: "12. Обмеження відповідальності",
    t_12body:
      "У межах, дозволених законом, ми не відповідаємо за непрямі чи похідні збитки, що виникли внаслідок користування додатком, — зокрема за втрачені чи неточні записи пробігу, відхилені відрахування, штрафи чи пеню, нараховані податковим органом, втрачений прибуток або втрату даних. Ніщо в цих Умовах не обмежує відповідальність, яку не можна обмежити за законом.",

    t_h13: "13. Призупинення та припинення",
    t_13body:
      "Ви можете припинити користування MarV Route будь-коли, видаливши додаток, а також видалити акаунт і дані в додатку: Профіль → Конфіденційність і дані → Видалити акаунт. Ми можемо призупинити або закрити акаунт, який порушує ці Умови чи використовується протиправно. Якщо ми закриваємо ваш акаунт, ми повідомимо причину там, де нам це дозволено.",

    t_h14: "14. Зміни до цих Умов",
    t_14body:
      "Ми можемо оновлювати ці Умови з розвитком додатка. Дата набрання чинності вгорі сторінки змінюватиметься, а про суттєві зміни буде оголошено в додатку або на сторінці в магазині застосунків. Продовження користування MarV Route після оновлення означає, що ви приймаєте нову редакцію Умов.",

    t_h15: "15. Застосовне право",
    t_15body:
      "Ці Умови регулюються законодавством штату Айдахо, США, без урахування його колізійних норм. Спори розглядають суди штату або федеральні суди в окрузі Ада, штат Айдахо, якщо закон вашого місця проживання не дає вам права звернутися до суду за місцем проживання. Це не позбавляє вас захисту, передбаченого імперативними нормами споживчого права країни вашого проживання.",

    t_h16: "16. Сторонні сервіси й торгові марки",
    t_16body: "MarV Route спирається на сервіси інших компаній — Google Firebase, картографічні дані OpenStreetMap і служби геолокації вашого телефона. Вони можуть змінюватися або бути недоступними, і ми за них не відповідаємо. MarV Route не повʼязаний з жодною платформою таксі чи доставки, як-от Uber, Lyft, DoorDash чи Instacart, і не схвалений та не спонсорований ними. Їхні назви — торгові марки відповідних власників і згадуються лише для того, щоб показати, з якими сервісами можна використовувати додаток.",
    t_h17: "17. Apple App Store",
    t_17intro: "Якщо ви завантажили MarV Route з Apple App Store, також діє таке:",
    t_17list: "<li>Ці Умови укладено між вами й нами, а не з Apple. Лише ми, а не Apple, відповідаємо за додаток і його вміст.</li><li>Ваша ліцензія обмежена пристроями Apple, якими ви володієте або керуєте, у межах Правил використання (Usage Rules) з Умов Apple Media Services.</li><li>Apple не зобовʼязана надавати обслуговування чи підтримку додатку.</li><li>Якщо додаток не відповідає застосовній гарантії, ви можете повідомити Apple, і Apple поверне вартість покупки, якщо вона була. Інших гарантійних зобовʼязань щодо додатку Apple не має.</li><li>Розгляд будь-яких претензій щодо додатку, зокрема щодо відповідальності за продукт, невідповідності вимогам законодавства, захисту прав споживачів чи конфіденційності, — наша відповідальність, а не Apple.</li><li>Якщо хтось заявить, що додаток порушує його інтелектуальну власність, розслідування, захист і врегулювання такої претензії — наша відповідальність, а не Apple.</li><li>Ви підтверджуєте, що не перебуваєте в країні під ембарго уряду США і не входите до жодного списку осіб, щодо яких уряд США встановив заборони чи обмеження.</li><li>Ви маєте дотримуватися умов третіх сторін, які застосовуються під час користування додатком, наприклад умов вашого мобільного тарифу.</li><li>Apple та її дочірні компанії є сторонніми вигодонабувачами цих Умов і можуть вимагати від вас їх виконання.</li>",
    t_h18: "18. Контакти",
    t_18body: "Питання щодо цих Умов або щодо підписки:",
    t_emailLabel: "📧 Email:",
    t_18note: "MarV Route розробляє MarV Labs — торгова назва незалежного розробника з Бойсе, штат Айдахо, США. На більшість повідомлень ми відповідаємо протягом 2–3 робочих днів.",
  },
};

const LEGAL_LANGS = ["en", "uk"];
let legalLang = "en";

// Links use clean paths ("../", "../support/"), which a server resolves to the
// folder's index.html. Opening from disk has no server to do that, so point
// those links at the file itself.
function fixFileProtocolLinks() {
  if (location.protocol !== "file:") return;
  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (/^[a-z]+:/i.test(href)) return; // mailto:, https:, …
    const parts = href.match(/^([^#?]*\/)([#?].*)?$/);
    if (parts) a.setAttribute("href", parts[1] + "index.html" + (parts[2] || ""));
  });
}

// Drop a trailing /index.html from the address bar without reloading.
function canonicalizeUrl() {
  if (location.protocol.indexOf("http") !== 0) return;
  if (!/\/index\.html$/.test(location.pathname)) return;
  history.replaceState(
    null,
    "",
    location.pathname.replace(/index\.html$/, "") + location.search + location.hash
  );
}

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

  fixFileProtocolLinks();

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
  canonicalizeUrl();

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
