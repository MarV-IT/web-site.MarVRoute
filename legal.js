// ─────────────────────────────────────────────────────────────────────────
// Shared script for /privacy, /terms, /support and /delete-account:
// theme toggle + EN/UK/FR translation.
// Keys prefixed p_ belong to the privacy page, t_ to the terms, s_ to the
// support page and d_ to the delete-account page. A page only uses the keys
// present in its own markup. The English text is repeated in each page's HTML
// as the no-JavaScript fallback — change both places together.
// ─────────────────────────────────────────────────────────────────────────

const legalI18n = {
  en: {
    // ── Shared ──
    backToSite: "← Back to site",
    backHome: "← Back to MarV Route",
    toSupport: "Support →",
    toPrivacy: "Privacy Policy →",
    toTerms: "Terms of Service →",
    toDelete: "Delete account →",
    footerHome: "Home",
    footerFaq: "FAQ",
    footerSupport: "Support",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerDelete: "Delete account",
    eyebrowLegal: "Legal",
    eyebrowSupport: "Support",
    langNote: "<span lang=\"fr\">Version française\u00a0: <a href=\"?lang=fr\" hreflang=\"fr\">lire ce document en français</a>.</span>",
    mailLabel: "✉️ Mail:",
    postalAddress: "MarV Space, 5212 S. Missoula Way, Boise, ID 83709, USA",

    // ── Privacy page ──
    p_docTitle: "Privacy Policy | MarV Route",
    p_title: "Privacy Policy",
    p_effective: "Effective date: November 10, 2026",
    p_intro: "MarV Route is made by MarV Space, an assumed business name registered in the State of Idaho, USA, by an independent developer based in Boise, Idaho (\"we\", \"us\"). This Privacy Policy explains what data the MarV Route mobile app and the marvroute.com website collect, how we use and protect it, and the choices you have.",
    p_calloutTitle: "📍 Background location notice",
    p_calloutBody: "MarV Route collects location data to record your trips, and can do so <strong>in the background</strong> — including when the app is closed or not in use — but only while you have trip tracking or automatic trip detection switched on. Your phone shows when this is happening: a persistent notification on Android, the location indicator on iPhone. This data is used solely to measure and save <em>your own</em> trips inside the app. It is never sold, and it is not used for advertising or cross-app tracking. You can turn tracking off at any time in the app or in your device settings.",
    p_h1: "1. Information We Collect",
    p_1intro: "What we collect depends on how you use MarV Route:",
    p_1locH: "📍 Location Data",
    p_1locList: "<li>Precise GPS location while a trip is being recorded and while automatic trip detection is watching for a trip to start — including in the background.</li><li>We use it to measure distance and to record each trip's route, start and end points, date and time.</li><li>Detailed GPS route traces stay on your device. They are never uploaded to the cloud; they leave your phone only inside a backup file that you export yourself.</li>",
    p_1tripH: "🚗 Trips, Expenses and Settings",
    p_1tripList: "<li>Whether a trip is business or personal, its platform and purpose, and any edits you make.</li><li>Fuel fill-ups, parking, tolls, repairs and other expenses you log, and your maintenance reminders.</li><li>Your preferences: distance unit, country and currency, language, theme and Work Mode settings.</li>",
    p_1profH: "🪪 Profile, Vehicle and Report Details (optional)",
    p_1profList: "<li>Details you choose to enter so they can appear on your reports: your name and your business name.</li><li>Your vehicle: its name, make, model, year, licence plate and odometer readings, and the oil-change and brake-pad service data you enter for maintenance reminders.</li><li>Your insurance: the company's name and contact details, and your policy name and number.</li><li>Your accountant's name, phone number and address.</li><li>Every one of these fields is optional. If you enter details about another person, such as your accountant, make sure you are allowed to share them.</li>",
    p_1accH: "👤 Account Information (optional)",
    p_1accList: "<li>You can use MarV Route without an account. In that case we don't receive your email address, and nothing is stored in the cloud.</li><li>If you create an account with an email and password: your email address and the user ID that Firebase Authentication assigns to you. Your password is checked by Firebase Authentication — we never see it.</li><li>If you sign in with Google: Google shares your name, email address and profile picture with Firebase Authentication.</li><li>To keep you signed in, the app may keep your sign-in details in your phone's secure storage (Keychain on iPhone, Keystore on Android). They are not sent anywhere from there and are removed when you sign out.</li>",
    p_1webH: "🌐 Website and Launch List",
    p_1webList: "<li>If you ask to be notified about the launch on marvroute.com, we collect the name and email address you enter, the driver type you select, the language you viewed the site in, and the time of your request.</li><li>We use them only to send you the launch announcement — a single email. It will show our postal address and include a way to unsubscribe, and you can withdraw your consent at any time by writing to us.</li><li>The website sets no cookies and has no advertising or analytics trackers. It only remembers your language and theme in your own browser. It is hosted on GitHub Pages; like any web host, GitHub receives your IP address when you open a page and may keep it in its security logs.</li>",
    p_1diagH: "🛠 Diagnostics and Statistics",
    p_1diagList: "<li>If you allow it in your phone's settings, Apple or Google may share crash reports and basic diagnostics with us, such as the device model, OS version and where the app crashed.</li><li>Apple (App Store Connect) and Google (Google Play Console) also give us aggregated statistics about installs, usage and crashes. These statistics do not identify you individually.</li><li>We use this information only to fix bugs and improve the app. MarV Route itself does not contain advertising or analytics SDKs.</li>",
    p_h2: "2. How We Use Your Information",
    p_2intro: "We use your data to:",
    p_2list: "<li>Provide and maintain app functionality</li><li>Record trips and generate reports</li><li>Add up your mileage and, for drivers in the United States, estimate the standard mileage deduction for your records</li><li>Back up and restore your data while you are signed in and cloud backup is active</li><li>Send the notifications you allow, such as trip alerts and maintenance reminders</li><li>Answer your support requests, fix bugs and improve the app</li><li>Send the launch announcement, if you asked for it on our website</li>",
    p_2note: "We do not use your location or trip data for advertising, profiling, or automated decision-making.",
    p_h3: "3. Where Your Data Is Stored",
    p_3intro: "Where your data lives depends on how you use the app:",
    p_3list: "<li><strong>On your device</strong> — your trips, expenses and settings are always saved on your phone. If you use the app without an account, that is the only place they are kept.</li><li><strong>In the cloud, while you are signed in and cloud backup is active</strong> — cloud backup is a Pro feature. While you are signed in and Pro features are on, the app saves a backup automatically about once a day, and you can also start one yourself in the Profile tab. The backup contains your trips with their start and end points (not the detailed GPS route), expenses, fuel records, Work Mode settings and your app settings, including any profile, vehicle, insurance and accountant details you entered. It is stored in Google Firebase (Cloud Firestore) and linked to your account.</li><li><strong>Files you export</strong> — PDF and CSV reports and backup files are created on your phone and go only where you save or send them. We never receive them.</li><li><strong>Website launch list</strong> — requests from the form on marvroute.com are stored in Google Firebase (Cloud Firestore).</li>",
    p_3note: "Google may store this data on servers in the United States or other countries. <strong>We do not sell your personal data.</strong>",
    p_h4: "4. Data Retention",
    p_4list: "<li>Trips, fuel logs and expenses stay on your device until you delete them or uninstall the app.</li><li>Your cloud backup is kept until you delete your account or ask us to delete the backup. Each new backup replaces the previous one.</li><li>Account information is kept for as long as your account exists.</li><li>Launch-list requests are kept only as long as we need them to send the launch announcement, or until you ask us to remove them.</li><li>When we delete data from our Firebase project, Google may take up to 180 days to clear it from its backup systems.</li>",
    p_h5: "5. Data Sharing",
    p_5intro: "We do not sell or rent your personal data, and we do not share it with advertisers or data brokers. We share it only:",
    p_5list: "<li>With Google Firebase (Authentication and Cloud Firestore), which runs sign-in, cloud backup and the website launch list for us, and with Google Sign-In if you choose to sign in with Google</li><li>With GitHub, which hosts the marvroute.com website</li><li>When you choose to, for example when you export a PDF or CSV report and send it to someone</li><li>When required by law, or to protect someone's safety</li>",
    p_5note: "Maps in the app are OpenStreetMap map images downloaded from the OpenStreetMap Foundation's servers (tile.openstreetmap.org), which receive your IP address and the map area on screen, as with any website. Addresses for your trips, and addresses you search for, are looked up with your phone's built-in geocoding service (Apple on iPhone, Google on Android), which receives the coordinates or the address text. These services never receive your email address or account ID.",
    p_h6: "6. Permissions",
    p_6intro: "The app may request:",
    p_6list: "<li>📍 <strong>Location</strong> — for trip tracking and automatic trip detection</li><li>🔔 <strong>Notifications</strong> — for trip alerts and maintenance reminders, and for the notice shown while tracking runs in the background</li><li>🔋 <strong>Battery optimization exemption</strong> (Android) — so the system does not stop trip recording in the background</li>",
    p_6note: "Each permission is optional. Denying one only disables the related feature — the rest of the app keeps working. Saving and sharing files goes through your phone's own save and share screens, so the app does not need a storage permission.",
    p_h7: "7. Data Security",
    p_7body: "We take reasonable measures to protect your data, but no method of transmission or storage is 100% secure. Cloud connections are encrypted in transit, and access to backups is restricted to your own authenticated account. If a security breach affects your personal information, we will notify you without unreasonable delay, as required by law — including Idaho Code § 28-51-105 and, for people in Canada, the rules described in section 9.",
    p_h8: "8. Your Rights",
    p_8intro: "You can:",
    p_8list: "<li>Delete individual trips and expenses in the app</li><li>Stop automatic cloud backups by signing out of your account or by switching Pro features off — backups are made only while you are signed in with Pro features on</li><li>Delete your account together with its cloud backup in the app — <strong>Profile → Privacy &amp; Data → Delete account</strong> — or by email (see <a href=\"../delete-account/\">Delete account</a>)</li><li>Ask us by email to delete only your cloud backup and keep your account</li><li>Stop location tracking at any time</li><li>Uninstall the app to remove the data stored on your device</li><li>Request a copy of the personal data associated with your account, or ask us to correct it</li><li>Ask us to remove you from the launch list</li>",
    p_8note: "Depending on where you live (the USA, Canada, the EU, and others), you may have additional rights to access, correct, port, or erase your personal data. Contact us using the details in section 13 and we will respond within 30 days, or sooner where the law requires.",
    p_h9: "9. If You Live in Canada",
    p_9intro: "MarV Route is offered to drivers in Canada, so Canadian privacy laws — the federal PIPEDA and, in Québec, the Act respecting the protection of personal information in the private sector — may apply to how we handle your personal information.",
    p_9list: "<li><strong>Person responsible.</strong> The owner of MarV Space is accountable for how we handle personal information and is the person in charge of the protection of personal information. Contact details are in section 13.</li><li><strong>Consent.</strong> We handle your information with your consent, which you give when you use the app's features and enter information. You can withdraw it at any time — by switching a feature off, deleting the data or your account, or writing to us — although the related features will then stop working.</li><li><strong>Location.</strong> Trip tracking and automatic trip detection are off until you switch them on yourself, and you can switch them off again at any time.</li><li><strong>Storage outside Canada.</strong> Your account, your cloud backup and your launch-list request are stored by Google in the United States or other countries — outside Canada and Québec. They are subject to the laws of those countries and may be accessible to courts and authorities there.</li><li><strong>Access and correction.</strong> You can ask to see the personal information we hold about you and to have it corrected. We answer within 30 days.</li><li><strong>Security incidents.</strong> If a breach creates a real risk of significant harm, we will notify you and the Office of the Privacy Commissioner of Canada — and, for people in Québec, the Commission d'accès à l'information — and we keep a record of every breach for as long as the law requires.</li><li><strong>Complaints.</strong> If you are not satisfied with our answer, you can contact the Office of the Privacy Commissioner of Canada (priv.gc.ca) or, in Québec, the Commission d'accès à l'information (cai.gouv.qc.ca).</li>",
    p_h10: "10. Children's Privacy",
    p_10body: "This app is not intended for children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us and we will delete it.",
    p_h11: "11. Do Not Track",
    p_11body: "MarV Route and this website do not track you across other companies' apps or websites and do not show ads, so they do not change how they work in response to \"Do Not Track\" signals.",
    p_h12: "12. Changes to This Policy",
    p_12body: "We may update this Privacy Policy. Changes will be posted on this page and in the app or store listing, and the effective date at the top of this page will be updated.",
    p_h13: "13. Contact Us",
    p_13intro: "For questions or requests about your data, write to the person responsible for privacy at MarV Space:",
    p_13who: "<strong>Person responsible for privacy:</strong> the owner of MarV Space",
    p_emailLabel: "📧 Email:",
    p_13note: "MarV Route is developed by MarV Space, an assumed business name registered in the State of Idaho, USA, by an independent developer based in Boise, Idaho.",

    // ── Support page ──
    s_docTitle: "Support | MarV Route",
    s_title: "Help with MarV Route",
    s_sub: "MarV Route is made by an independent developer — a real person reads every message.",
    s_contactTitle: "📧 Contact us",
    s_emailLabel: "Email:",
    s_reply: "We aim to reply within 2–3 business days.",
    s_aboutH: "About the app",
    s_about1: "<strong>MarV Route</strong> is a mileage and expense tracker for people who drive for work — delivery and rideshare drivers, field service techs, and anyone who needs clean business-mileage records at tax time.",
    s_about2: "The app records your trips automatically in the background or manually when you tap Start trip, then lets you confirm whether each trip was business or personal. Alongside mileage it keeps your fuel fill-ups, parking, tolls, and repairs, shows drivers in the United States an estimate of their mileage deduction at the IRS standard rate, keeps a business-kilometer log for drivers in Canada, reminds you about oil changes and brake pads, and exports everything as a PDF or CSV report for your accountant.",
    s_aboutList: "<li>Available for the USA and Canada, in miles or kilometers</li><li>Six interface languages: English, Spanish, French, Russian, Ukrainian, and Dari</li><li>Light and dark theme</li><li>Cloud backup to your own account, so your records survive a lost phone</li>",
    s_qaH: "Quick answers",
    s_q1H: "Trips aren't being detected automatically",
    s_q1p: "Automatic detection needs three things enabled on your phone:",
    s_q1list: "<li>Location turned on, and location permission allowed for MarV Route — <strong>While using the app</strong> is enough, because tracking runs with a visible notification</li><li>Battery optimization turned <strong>off</strong> for MarV Route, so Android doesn't stop it in the background</li><li>Notifications allowed — while the app is watching for trips, it shows a persistent notification</li>",
    s_q1note: "The app has a built-in <strong>Permission check</strong> screen that tests all three and tells you what's missing. Automatic detection is a Pro feature: until paid plans launch, you can switch Pro on for free under <strong>Profile → Subscription</strong>.",
    s_q2H: "The recorded distance looks wrong",
    s_q2p: "GPS accuracy drops in tunnels, parking garages, and dense downtown areas, so a trip can come out short. You can open any trip and correct the distance by hand before it goes into a report.",
    s_q3H: "How do I export a report?",
    s_q3p: "Open the <strong>Reports</strong> tab, pick a period (this month, last month, or a custom date range), then tap <strong>Export Simple PDF</strong>, <strong>Export Detailed PDF</strong> or <strong>Export CSV</strong>. The file can be shared straight to email or cloud storage. Export is a Pro feature: until paid plans launch, you can switch Pro on for free under <strong>Profile → Subscription</strong>.",
    s_q4H: "How do I get my data back on a new phone?",
    s_q4p: "If you were signed in and cloud backup was running, sign in with the same account on the new phone. On a fresh install the app restores your backup automatically; you can also tap <strong>Restore from cloud</strong> in the Profile tab. Detailed GPS routes are not part of the cloud backup. Without a cloud backup, you can move everything with <strong>Export Backup</strong> on the old phone and <strong>Import Backup</strong> on the new one.",
    s_q5H: "How do I change units, currency, or language?",
    s_q5p: "Everything is in the <strong>Profile</strong> tab — distance unit (miles or kilometers), country and currency, interface language, and theme.",
    s_q6H: "How do I delete my data?",
    s_q6p: "You can delete individual trips and expenses in the app, or uninstall the app to erase everything stored on the phone. To delete your account together with its cloud backup, open <strong>Profile → Privacy &amp; Data → Delete account</strong> in the app. If you no longer have the app, or you want only the cloud backup removed, email us from the address your account is registered with — see <a href=\"../delete-account/\">Delete account</a>.",
    s_q7H: "Why is there no deduction amount for Canada?",
    s_q7p: "In the United States, self-employed drivers can generally use the IRS standard mileage rate, so the app can estimate a deduction from your business miles. In Canada, self-employed drivers instead claim the business share of their actual vehicle expenses; the per-kilometer rates that the CRA publishes are limits for allowances that employers pay to employees. So for Canada MarV Route keeps your kilometer log and your expenses, and leaves the calculation to you or your accountant. Either way, the app gives you records and estimates — not tax advice.",
    s_bugH: "Reporting a bug",
    s_bugIntro: "To help us fix things faster, include as much of this as you can:",
    s_bugList: "<li>Phone model and Android (or iOS) version</li><li>App version, shown under About in the Profile tab</li><li>What you did, what you expected, and what happened instead</li><li>A screenshot, if the problem is visible on screen</li>",
    s_featH: "Feature requests",
    s_featBody: "MarV Route is in active development and your feedback shapes what gets built next. If something is missing from your workflow, write to us — those messages genuinely change the roadmap.",

    // ── Delete account page ──
    d_docTitle: "Delete Your Account | MarV Route",
    d_title: "Delete Your Account",
    d_updated: "Last updated: November 10, 2026",
    d_intro: "You can delete your MarV Route account and everything stored with it at any time — from inside the app, or by writing to us. This page covers both routes and exactly what is removed.",
    d_calloutTitle: "⚠️ Deletion is permanent",
    d_calloutBody: "Deleting your account erases your cloud backup and the app data on your device. There is no recovery and no waiting period — once you confirm, the data is gone. If you want to keep a copy, use Export Backup in the Profile tab first.",
    d_h1: "1. Delete from inside the app",
    d_1intro: "The fastest route, and it takes effect immediately:",
    d_1list: "<li>Open <strong>MarV Route</strong> and go to the <strong>Profile</strong> tab.</li><li>Scroll to the bottom and open the <strong>Privacy &amp; Data</strong> section.</li><li>Tap <strong>Delete account</strong>.</li><li>Confirm with <strong>Delete permanently</strong>.</li>",
    d_1note: "You need to be signed in. If you use MarV Route without an account, nothing is stored in the cloud at all — uninstalling the app removes all of your data.",
    d_h2: "2. Request deletion by email",
    d_2intro: "If you no longer have the app installed, write to us from the address your account is registered with:",
    d_2note: "Use the subject \"Delete my account\". We confirm the request comes from the registered address and complete the deletion within 30 days — usually much sooner.",
    d_2note2: "You can also ask us to delete only your cloud backup and keep your account — just say so in your message.",
    d_h3: "3. What gets deleted",
    d_3list: "<li><strong>Your account</strong> — the email address and user ID you sign in with.</li><li><strong>Your cloud backup</strong> — trips, trip start and end points, expenses, fuel records, Work Mode settings and app settings, including any profile, vehicle, insurance and accountant details you entered.</li><li><strong>Local app data</strong> on the device you delete from — trips, expenses, fuel records and settings.</li>",
    d_h4: "4. Data on other devices",
    d_4body: "Deleting your account removes the cloud copy and the data on the device you deleted from. If MarV Route is also installed on another phone, that phone still holds its own local copy — uninstall the app there to remove it.",
    d_h5: "5. What we keep",
    d_5body: "Nothing. Your account and your cloud backup are removed from our Firebase project as soon as the deletion is carried out; Google, which hosts it, may take up to 180 days to clear deleted data from its backup systems. We never sell your data. Detailed GPS route traces are never uploaded to the cloud in the first place — they stay on your device and go away with it.",
    d_h6: "6. Contact",
    d_emailLabel: "📧 Email:",

    // ── Terms of Service page ──
    t_docTitle: "Terms of Service | MarV Route",
    t_title: "Terms of Service",
    t_effective: "Effective date: November 10, 2026",
    t_intro: "These Terms are an agreement between you and MarV Space, an assumed business name registered in the State of Idaho, USA, by an independent developer based in Boise, Idaho (\"we\", \"us\"). They govern your use of the MarV Route mobile application and this website. Please read them before you rely on the app for anything that matters — your mileage records, your expenses, or your taxes.",
    t_calloutTitle: "⚠️ Estimates, not professional advice",
    t_calloutBody: "MarV Route measures distance with your phone's GPS and, for drivers in the United States, estimates a mileage deduction using the published IRS standard mileage rate. Both are <strong>estimates</strong>. The app is a record-keeping tool, not an accountant — review your trips before you file anything, and consult a qualified tax professional about your own situation.",
    t_h1: "1. Accepting these Terms",
    t_1body: "By installing or using MarV Route, you agree to these Terms. If you do not agree, please do not use the app. If you use MarV Route for an employer or a business, you confirm you are allowed to accept these Terms on its behalf.",
    t_h2: "2. Who can use MarV Route",
    t_2list: "<li>You must be at least 18 years old, or the age of majority where you live if that is higher.</li><li>You must hold a valid driver's licence for the trips you record.</li><li>The app is built around mileage record-keeping in the United States and Canada. You may use it elsewhere, but the built-in US mileage rate will not apply to you.</li>",
    t_h3: "3. Using the app responsibly",
    t_3intro: "You agree not to:",
    t_3list: "<li>Operate the app while driving in a way that distracts you or breaks local traffic law.</li><li>Falsify trips, distances or expenses in order to mislead a tax authority, employer or client.</li><li>Use the app for any unlawful purpose, or to track another person without their knowledge.</li><li>Copy, resell, decompile or reverse engineer the app, or try to extract its source code.</li><li>Interfere with the app's operation, or attempt to access accounts or data that are not yours.</li>",
    t_3note: "<strong>Drive first, tap later.</strong> Start and stop tracking before you set off or after you park. Automatic detection exists precisely so you never need to touch your phone while the car is moving. In Idaho, the law allows phone use while driving only in hands-free mode (Idaho Code § 49-1401A), and many other states and provinces have similar rules.",
    t_h4: "4. GPS tracking and mileage accuracy",
    t_4intro: "Distances come from your device's location sensors, so their accuracy depends on things we do not control:",
    t_4list: "<li>GPS signal quality — tunnels, parking garages and dense city blocks all degrade it.</li><li>Your device, its operating system and its battery-saving settings.</li><li>Permissions: if location access is limited, or the system stops the app in the background, trips can be recorded short, split in two, or missed entirely.</li><li>Automatic detection may also record a trip you did not intend to log.</li>",
    t_4note: "Recorded distances are estimates, not certified measurements. MarV Route lets you edit any trip by hand for exactly this reason, and you remain responsible for checking that your records are correct and complete.",
    t_h5: "5. Reports are not tax advice",
    t_5body: "For drivers in the United States, MarV Route shows an estimated deduction calculated with the IRS standard mileage rate. For drivers in Canada, the app keeps a log of business kilometers and does not calculate a deduction amount, because self-employed drivers there generally claim the business share of their actual vehicle expenses. Either way, this is a convenience for your record-keeping, nothing more.",
    t_5list: "<li>We are not accountants, tax advisors or legal advisors, and we do not provide such services.</li><li>The US estimate assumes you use the standard mileage rate. If you do, you generally cannot also deduct actual running costs such as fuel, repairs or insurance for the same vehicle, while business parking fees and tolls can usually be deducted on top. The app does not check whether you qualify for the standard rate.</li><li>Official rates change. The app may not reflect a new rate immediately, and an outdated rate produces an outdated estimate.</li><li>Whether a trip is deductible at all, and which method you may use, depends on your own circumstances and your tax authority's rules.</li><li>Reports exported from the app are not certified documents and are not filed on your behalf.</li>",
    t_5note: "Before filing anything, have your figures checked by a qualified professional. You are solely responsible for what you submit to a tax authority.",
    t_h6: "6. Your records are your responsibility",
    t_6body: "Keep your own copies of anything you need. Cloud backup is a convenience, not an archival guarantee: data can be lost through device failure, an uninstall, an account deletion, or a service interruption. Export a PDF or CSV of anything you may need later.",
    t_h7: "7. MarV Route Pro subscription",
    t_7intro: "Recording trips, adding trips by hand, logging fuel and expenses and viewing your reports in the app are free. Other features are marked <strong>Pro</strong> in the app — at present PDF and CSV export, cloud backup, automatic trip detection, fuel summaries, the monthly close checklist and maintenance reminders. We do not sell subscriptions yet: until we do, you can switch Pro features on at no charge in the Profile tab. When <strong>MarV Route Pro</strong> launches as an optional paid subscription, Pro features will require it, and these terms will apply:",
    t_7list: "<li>Pro will be sold as an <strong>annual subscription</strong>. The current price and currency are always shown in the App Store or Google Play before you confirm.</li><li>Payment is charged to your Apple or Google account when you confirm the purchase, not to us — we never see or store your card details.</li><li>The subscription <strong>renews automatically</strong> each year unless you cancel at least 24 hours before the current period ends. Renewal is charged within 24 hours before that date.</li><li>Prices may change for future periods. You will be told in advance, and a price increase never applies to a period you have already paid for.</li><li>If a free trial is offered and you subscribe before it ends, any unused part of the trial is forfeited.</li>",
    t_7note: "Nothing is charged unless you choose to subscribe and confirm the purchase in the App Store or Google Play. Which features are part of Pro may change over time (see section 9).",
    t_h8: "8. Cancellation and refunds",
    t_8intro: "You can cancel at any time, and cancelling is always done in the store you bought from — not in the app:",
    t_8list: "<li><strong>iPhone / iPad:</strong> Settings → your name → Subscriptions → MarV Route → Cancel Subscription.</li><li><strong>Android:</strong> Google Play → profile icon → Payments &amp; subscriptions → Subscriptions → MarV Route → Cancel.</li>",
    t_8note1: "After cancelling you keep Pro features until the end of the period you already paid for. Nothing is deleted — your trips, expenses and reports stay in the app, and you can carry on using the free features.",
    t_8note2: "<strong>Refunds are handled by Apple and Google</strong>, under their own policies, because the payment is made to them. We cannot issue a refund for a store purchase ourselves. If something went wrong, write to us anyway — we will help you put the request together and support it where we can.",
    t_h9: "9. Changes to the app",
    t_9body: "MarV Route is under active development. We may add, change or remove features, and we may suspend the service for maintenance. We will avoid removing anything you depend on without notice, but we cannot promise that every feature will exist forever.",
    t_h10: "10. Ownership",
    t_10body: "The app, its name, logo, design and code belong to us. You get a personal, non-transferable licence to use the app — not ownership of it. Your data, however, is yours: your trips, expenses and reports belong to you, and you can export or delete them at any time.",
    t_qcNo: "<strong>Consumers in Québec:</strong> this section does not apply to you.",
    t_h11: "11. No warranty",
    t_11body: "MarV Route is provided \"as is\" and \"as available\". To the extent the law allows, we make no warranty that the app will be uninterrupted, error-free, or accurate in every measurement, and no warranty of fitness for a particular purpose.",
    t_h12: "12. Limitation of liability",
    t_12body: "To the extent the law allows, we are not liable for indirect or consequential losses arising from your use of the app — including lost or inaccurate mileage records, rejected deductions, penalties or interest charged by a tax authority, lost profits, or data loss. Nothing in these Terms limits liability that cannot legally be limited.",
    t_h13: "13. Suspension and termination",
    t_13body: "You may stop using MarV Route at any time by uninstalling it, and you can delete your account and data in the app under Profile → Privacy & Data → Delete account. We may suspend or close an account that breaks these Terms or is used unlawfully. If we close your account, we will tell you why where we are permitted to.",
    t_h14: "14. Changes to these Terms",
    t_14qc: "<strong>Consumers in Québec:</strong> the paragraph below does not apply to you. A change to these Terms applies to you only in the way the Consumer Protection Act allows.",
    t_14body: "We may update these Terms as the app develops. The effective date at the top of this page will change, and significant changes will be announced in the app or in the store listing. Continuing to use MarV Route after an update means you accept the revised Terms.",
    t_h15: "15. Governing law and language",
    t_15qc: "<strong>Consumers in Québec:</strong> the paragraph below does not apply to you. These Terms are governed by the laws of Québec and the federal laws of Canada that apply there, and you may bring a dispute before the courts of Québec.",
    t_15body: "These Terms are governed by the laws of the State of Idaho, United States, without regard to its conflict-of-law rules. Disputes will be heard by the state or federal courts located in Ada County, Idaho, unless the law of the place where you live gives you the right to go to a court there. This does not take away any protection you have under the mandatory consumer law of the country you live in.",
    t_15lang: "These Terms are available in English, French and Ukrainian. If the versions differ, the English version prevails, unless the law of the place where you live provides otherwise. If you live in Québec, the French version is the one provided to you first; you may choose to use the English version, and where the two differ you may rely on whichever is more favourable to you.",
    t_h16: "16. Third-party services and trademarks",
    t_16body: "MarV Route relies on services from other companies, such as Google Firebase, OpenStreetMap map data and your phone's location services. They can change or be unavailable, and we are not responsible for them. MarV Route is not affiliated with, endorsed or sponsored by any rideshare or delivery platform, such as Uber, Lyft, DoorDash or Instacart. Their names are trademarks of their respective owners and are used only to describe which services the app can be used with.",
    t_h17: "17. Apple App Store",
    t_17intro: "If you downloaded MarV Route from the Apple App Store, the following also applies:",
    t_17list: "<li>These Terms are between you and us, not Apple. We, not Apple, are solely responsible for the app and its content.</li><li>Your licence is limited to Apple-branded devices that you own or control, as allowed by the Usage Rules in the Apple Media Services Terms and Conditions.</li><li>Apple has no obligation to provide maintenance or support for the app.</li><li>If the app fails to meet any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any. Apple has no other warranty obligation for the app.</li><li>We, not Apple, are responsible for addressing any claims about the app, including product liability claims, claims that it fails to meet legal or regulatory requirements, and consumer protection or privacy claims.</li><li>If someone claims that the app infringes their intellectual property, we, not Apple, are responsible for investigating, defending and settling that claim.</li><li>You confirm that you are not located in a country subject to a US government embargo and that you are not on any US government list of prohibited or restricted parties.</li><li>You must follow any third-party terms that apply when you use the app, such as your wireless data plan.</li><li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</li>",
    t_h18: "18. Contact",
    t_18body: "Questions about these Terms, or about a subscription:",
    t_emailLabel: "📧 Email:",
    t_18note: "MarV Route is developed by MarV Space, an assumed business name registered in the State of Idaho, USA, by an independent developer based in Boise, Idaho. We reply to most messages within 2–3 business days.",
  },

  uk: {
    // ── Shared ──
    backToSite: "← На сайт",
    backHome: "← Назад на MarV Route",
    toSupport: "Підтримка →",
    toPrivacy: "Політика конфіденційності →",
    toTerms: "Умови використання →",
    toDelete: "Видалення акаунта →",
    footerHome: "Головна",
    footerFaq: "Питання",
    footerSupport: "Підтримка",
    footerPrivacy: "Конфіденційність",
    footerTerms: "Умови",
    footerDelete: "Видалення акаунта",
    eyebrowLegal: "Правова інформація",
    eyebrowSupport: "Підтримка",
    langNote: "<span lang=\"fr\">Version française\u00a0: <a href=\"?lang=fr\" hreflang=\"fr\">lire ce document en français</a>.</span>",
    mailLabel: "✉️ Поштова адреса:",
    postalAddress: "MarV Space, 5212 S. Missoula Way, Boise, ID 83709, США",

    // ── Privacy page ──
    p_docTitle: "Політика конфіденційності | MarV Route",
    p_title: "Політика конфіденційності",
    p_effective: "Дата набрання чинності: 10 листопада 2026",
    p_intro: "MarV Route створює MarV Space — комерційна назва (assumed business name), зареєстрована в штаті Айдахо, США, незалежним розробником із Бойсе, штат Айдахо («ми»). Ця Політика конфіденційності пояснює, які дані збирають мобільний додаток MarV Route і сайт marvroute.com, як ми їх використовуємо й захищаємо та що ви можете з цим зробити.",
    p_calloutTitle: "📍 Повідомлення про геолокацію у фоні",
    p_calloutBody: "MarV Route збирає дані геолокації, щоб записувати ваші поїздки, і може робити це <strong>у фоновому режимі</strong> — зокрема коли додаток закритий або не використовується — але лише поки увімкнено відстеження поїздок чи автоматичне виявлення поїздок. Телефон показує, коли це відбувається: постійне сповіщення на Android, індикатор геолокації на iPhone. Ці дані використовуються виключно для вимірювання та збереження <em>ваших власних</em> поїздок у додатку. Ми ніколи їх не продаємо і не використовуємо для реклами чи стеження між додатками. Ви можете вимкнути відстеження будь-коли — у додатку або в налаштуваннях пристрою.",
    p_h1: "1. Які дані ми збираємо",
    p_1intro: "Що саме ми збираємо, залежить від того, як ви користуєтеся MarV Route:",
    p_1locH: "📍 Дані геолокації",
    p_1locList: "<li>Точна GPS-геолокація під час запису поїздки та поки автоматичне виявлення очікує початку поїздки — зокрема у фоновому режимі.</li><li>Ми використовуємо її, щоб виміряти відстань і записати маршрут, точки початку й кінця, дату й час кожної поїздки.</li><li>Детальні GPS-треки маршрутів залишаються на вашому пристрої. Вони ніколи не завантажуються в хмару й залишають телефон лише у файлі резервної копії, який ви експортуєте самі.</li>",
    p_1tripH: "🚗 Поїздки, витрати й налаштування",
    p_1tripList: "<li>Чи була поїздка робочою чи особистою, її платформа й мета, а також ваші правки.</li><li>Заправки, паркування, платні дороги, ремонти й інші витрати, які ви вносите, та нагадування про обслуговування.</li><li>Ваші налаштування: одиниця відстані, країна й валюта, мова, тема й параметри Робочого режиму.</li>",
    p_1profH: "🪪 Профіль, авто й дані для звітів (необовʼязково)",
    p_1profList: "<li>Дані, які ви самі вносите, щоб вони зʼявлялися у звітах: ваше імʼя та назва вашого бізнесу.</li><li>Ваше авто: назва, марка, модель, рік, номерний знак і показники одометра, а також дані про заміну оливи й гальмівних колодок, які ви вносите для нагадувань про обслуговування.</li><li>Ваше страхування: назва й контакти страхової компанії, назва й номер поліса.</li><li>Імʼя, телефон і адреса вашого бухгалтера.</li><li>Кожне з цих полів необовʼязкове. Якщо ви вносите дані іншої людини, наприклад бухгалтера, переконайтеся, що маєте право ними ділитися.</li>",
    p_1accH: "👤 Дані облікового запису (необовʼязково)",
    p_1accList: "<li>MarV Route можна користуватися без облікового запису. Тоді ми не отримуємо вашу адресу пошти, а в хмарі нічого не зберігається.</li><li>Якщо ви створюєте обліковий запис з email і паролем: адреса електронної пошти та ідентифікатор користувача, який призначає Firebase Authentication. Пароль перевіряє Firebase Authentication — ми його ніколи не бачимо.</li><li>Якщо ви входите через Google: Google передає Firebase Authentication ваше імʼя, адресу пошти й фото профілю.</li><li>Щоб ви залишалися в системі, додаток може зберігати дані для входу в захищеному сховищі телефона (Keychain на iPhone, Keystore на Android). Звідти вони нікуди не передаються й видаляються, коли ви виходите з облікового запису.</li>",
    p_1webH: "🌐 Сайт і список очікування",
    p_1webList: "<li>Якщо ви просите повідомити про запуск на marvroute.com, ми збираємо імʼя та адресу пошти, які ви вводите, вибраний тип водія, мову, якою ви переглядали сайт, і час заявки.</li><li>Ми використовуємо їх лише для того, щоб надіслати вам повідомлення про запуск — один лист. У ньому буде наша поштова адреса і спосіб відписатися, а відкликати згоду можна будь-коли, написавши нам.</li><li>Сайт не встановлює cookie й не містить рекламних чи аналітичних трекерів. Він лише запамʼятовує мову й тему у вашому браузері. Сайт розміщено на GitHub Pages; як і будь-який хостинг, GitHub отримує вашу IP-адресу, коли ви відкриваєте сторінку, і може зберігати її у своїх журналах безпеки.</li>",
    p_1diagH: "🛠 Діагностика й статистика",
    p_1diagList: "<li>Якщо ви дозволили це в налаштуваннях телефона, Apple чи Google можуть передавати нам звіти про збої та базову діагностику: модель пристрою, версію ОС і місце збою.</li><li>Apple (App Store Connect) і Google (Google Play Console) також надають нам узагальнену статистику встановлень, використання й збоїв. Ця статистика не ідентифікує вас особисто.</li><li>Ми використовуємо ці дані лише для виправлення помилок і покращення додатку. Сам MarV Route не містить рекламних чи аналітичних SDK.</li>",
    p_h2: "2. Як ми використовуємо ваші дані",
    p_2intro: "Ми використовуємо ваші дані, щоб:",
    p_2list: "<li>Забезпечувати та підтримувати роботу додатку</li><li>Записувати поїздки й формувати звіти</li><li>Підсумовувати ваш пробіг і — для водіїв у США — оцінювати стандартне відрахування за пробіг для ваших записів</li><li>Створювати й відновлювати резервну копію, поки ви в обліковому записі й резервне копіювання в хмару активне</li><li>Надсилати дозволені вами сповіщення, як-от про поїздки й обслуговування</li><li>Відповідати на звернення в підтримку, виправляти помилки й покращувати додаток</li><li>Надіслати повідомлення про запуск, якщо ви попросили про це на сайті</li>",
    p_2note: "Ми не використовуємо ваші дані геолокації чи поїздок для реклами, профілювання або автоматизованого ухвалення рішень.",
    p_h3: "3. Де зберігаються дані",
    p_3intro: "Де зберігаються ваші дані, залежить від того, як ви користуєтеся додатком:",
    p_3list: "<li><strong>На вашому пристрої</strong> — поїздки, витрати й налаштування завжди зберігаються на телефоні. Якщо ви користуєтеся додатком без облікового запису, вони зберігаються лише там.</li><li><strong>У хмарі, поки ви в обліковому записі й резервне копіювання активне</strong> — резервна копія в хмарі є функцією Pro. Поки ви ввійшли в обліковий запис і функції Pro ввімкнені, додаток автоматично створює резервну копію приблизно раз на добу; її також можна запустити вручну у вкладці «Профіль». Копія містить поїздки з точками початку й кінця (без детального GPS-маршруту), витрати, записи про пальне, параметри Робочого режиму та налаштування додатку, зокрема внесені вами дані профілю, авто, страхування й бухгалтера. Вона зберігається в Google Firebase (Cloud Firestore) і привʼязана до вашого облікового запису.</li><li><strong>Файли, які ви експортуєте</strong> — звіти PDF і CSV та файли резервних копій створюються на телефоні й потрапляють лише туди, куди ви їх зберігаєте чи надсилаєте. Ми їх ніколи не отримуємо.</li><li><strong>Список очікування на сайті</strong> — заявки з форми на marvroute.com зберігаються в Google Firebase (Cloud Firestore).</li>",
    p_3note: "Google може зберігати ці дані на серверах у США чи інших країнах. <strong>Ми не продаємо ваші персональні дані.</strong>",
    p_h4: "4. Строки зберігання даних",
    p_4list: "<li>Поїздки, записи про пальне та витрати залишаються на вашому пристрої, доки ви їх не видалите або не видалите додаток.</li><li>Резервна копія в хмарі зберігається, доки ви не видалите обліковий запис або не попросите нас видалити копію. Кожна нова копія замінює попередню.</li><li>Дані облікового запису зберігаються, доки існує ваш обліковий запис.</li><li>Заявки зі списку очікування зберігаються лише стільки, скільки потрібно, щоб надіслати повідомлення про запуск, або доки ви не попросите їх видалити.</li><li>Коли ми видаляємо дані з нашого проєкту Firebase, Google може знадобитися до 180 днів, щоб прибрати їх зі своїх резервних систем.</li>",
    p_h5: "5. Передача даних",
    p_5intro: "Ми не продаємо й не здаємо в оренду ваші персональні дані та не передаємо їх рекламодавцям чи брокерам даних. Ми передаємо їх лише:",
    p_5list: "<li>Google Firebase (Authentication і Cloud Firestore), який забезпечує для нас вхід, резервне копіювання в хмару та список очікування на сайті, а також Google Sign-In, якщо ви входите через Google</li><li>GitHub, який розміщує сайт marvroute.com</li><li>Коли ви самі так вирішуєте, наприклад експортуєте звіт PDF чи CSV і надсилаєте його комусь</li><li>Коли цього вимагає закон або щоб захистити чиюсь безпеку</li>",
    p_5note: "Карти в додатку — це зображення OpenStreetMap, які завантажуються із серверів OpenStreetMap Foundation (tile.openstreetmap.org); ці сервери отримують вашу IP-адресу й ділянку карти на екрані, як і будь-який сайт. Адреси ваших поїздок і адреси, які ви шукаєте, визначає вбудований сервіс геокодування телефона (Apple на iPhone, Google на Android), який отримує координати або текст адреси. Ці сервіси ніколи не отримують вашу адресу пошти чи ідентифікатор облікового запису.",
    p_h6: "6. Дозволи",
    p_6intro: "Додаток може запитувати:",
    p_6list: "<li>📍 <strong>Геолокація</strong> — для відстеження поїздок і автоматичного виявлення поїздок</li><li>🔔 <strong>Сповіщення</strong> — для повідомлень про поїздки й нагадувань про обслуговування, а також для сповіщення, яке видно, поки відстеження працює у фоні</li><li>🔋 <strong>Виняток з оптимізації батареї</strong> (Android) — щоб система не зупиняла запис поїздок у фоні</li>",
    p_6note: "Кожен дозвіл є необовʼязковим. Відмова вимикає лише повʼязану функцію — решта додатку працює далі. Файли зберігаються й надсилаються через системні вікна збереження та поширення, тому дозвіл на доступ до сховища додатку не потрібен.",
    p_h7: "7. Безпека даних",
    p_7body: "Ми вживаємо розумних заходів для захисту ваших даних, але жоден спосіб передавання чи зберігання не є на 100% безпечним. Зʼєднання з хмарою шифруються під час передавання, а доступ до резервних копій обмежений вашим власним автентифікованим обліковим записом. Якщо витік зачепить ваші персональні дані, ми повідомимо вас без невиправданої затримки, як того вимагає закон, — зокрема Idaho Code § 28-51-105, а для людей у Канаді — правила, описані в розділі 9.",
    p_h8: "8. Ваші права",
    p_8intro: "Ви можете:",
    p_8list: "<li>Видаляти окремі поїздки й витрати в додатку</li><li>Зупинити автоматичне резервне копіювання в хмару, вийшовши з облікового запису або вимкнувши функції Pro, — копії створюються лише поки ви в обліковому записі з увімкненими функціями Pro</li><li>Видалити обліковий запис разом із його резервною копією в хмарі в додатку — <strong>Профіль → Конфіденційність і дані → Видалити акаунт</strong> — або поштою (див. <a href=\"../delete-account/\">Видалення акаунта</a>)</li><li>Попросити нас листом видалити лише резервну копію в хмарі й залишити обліковий запис</li><li>Будь-коли зупинити відстеження геолокації</li><li>Видалити додаток, щоб стерти дані на пристрої</li><li>Запитати копію персональних даних, повʼязаних з вашим обліковим записом, або попросити їх виправити</li><li>Попросити видалити вас зі списку очікування</li>",
    p_8note: "Залежно від того, де ви проживаєте (США, Канада, ЄС та інші), ви можете мати додаткові права на доступ, виправлення, перенесення або стирання ваших персональних даних. Звертайтеся до нас за контактами в розділі 13 — ми відповімо протягом 30 днів або швидше, якщо цього вимагає закон.",
    p_h9: "9. Якщо ви живете в Канаді",
    p_9intro: "MarV Route пропонується водіям у Канаді, тому до того, як ми поводимося з вашими персональними даними, можуть застосовуватися канадські закони про приватність — федеральний PIPEDA, а в Квебеку — Закон про захист персональної інформації в приватному секторі.",
    p_9list: "<li><strong>Відповідальна особа.</strong> Власник MarV Space відповідає за те, як ми поводимося з персональними даними, і є особою, відповідальною за захист персональної інформації. Контакти — у розділі 13.</li><li><strong>Згода.</strong> Ми обробляємо ваші дані за вашою згодою, яку ви надаєте, коли користуєтеся функціями додатку й вносите дані. Ви можете будь-коли її відкликати — вимкнувши функцію, видаливши дані чи обліковий запис або написавши нам, — але тоді відповідні функції перестануть працювати.</li><li><strong>Геолокація.</strong> Відстеження поїздок і автоматичне виявлення поїздок вимкнені, доки ви самі їх не ввімкнете, і їх можна будь-коли вимкнути знову.</li><li><strong>Зберігання за межами Канади.</strong> Ваш обліковий запис, резервну копію в хмарі та заявку зі списку очікування Google зберігає у США чи інших країнах — за межами Канади й Квебеку. На них поширюються закони цих країн, і вони можуть бути доступні тамтешнім судам і органам влади.</li><li><strong>Доступ і виправлення.</strong> Ви можете попросити показати персональні дані, які ми про вас зберігаємо, і виправити їх. Ми відповідаємо протягом 30 днів.</li><li><strong>Інциденти безпеки.</strong> Якщо витік створює реальний ризик значної шкоди, ми повідомимо вас і Офіс Уповноваженого з питань приватності Канади (Office of the Privacy Commissioner of Canada), а для жителів Квебеку — також Commission d'accès à l'information, і зберігаємо запис про кожен витік стільки, скільки вимагає закон.</li><li><strong>Скарги.</strong> Якщо наша відповідь вас не влаштовує, ви можете звернутися до Office of the Privacy Commissioner of Canada (priv.gc.ca) або, у Квебеку, до Commission d'accès à l'information (cai.gouv.qc.ca).</li>",
    p_h10: "10. Конфіденційність дітей",
    p_10body: "Цей додаток не призначений для дітей віком до 13 років. Ми свідомо не збираємо персональні дані дітей. Якщо ви вважаєте, що дитина надала нам персональні дані, звʼяжіться з нами — і ми їх видалимо.",
    p_h11: "11. Сигнали «Do Not Track»",
    p_11body: "MarV Route і цей сайт не відстежують вас у додатках і на сайтах інших компаній і не показують рекламу, тож не змінюють роботу у відповідь на сигнали «Do Not Track».",
    p_h12: "12. Зміни до цієї Політики",
    p_12body: "Ми можемо оновлювати цю Політику конфіденційності. Зміни буде опубліковано на цій сторінці, а також у додатку або на сторінці в магазині застосунків, а дату набрання чинності вгорі сторінки буде оновлено.",
    p_h13: "13. Звʼязок з нами",
    p_13intro: "Із запитаннями чи запитами щодо ваших даних пишіть особі, відповідальній за приватність у MarV Space:",
    p_13who: "<strong>Відповідальний за приватність:</strong> власник MarV Space",
    p_emailLabel: "📧 Email:",
    p_13note: "MarV Route розробляє MarV Space — комерційна назва (assumed business name), зареєстрована в штаті Айдахо, США, незалежним розробником із Бойсе, штат Айдахо.",

    // ── Support page ──
    s_docTitle: "Підтримка | MarV Route",
    s_title: "Допомога з MarV Route",
    s_sub: "MarV Route створює незалежний розробник — кожне повідомлення читає жива людина.",
    s_contactTitle: "📧 Напишіть нам",
    s_emailLabel: "Email:",
    s_reply: "Намагаємося відповідати протягом 2–3 робочих днів.",
    s_aboutH: "Про додаток",
    s_about1: "<strong>MarV Route</strong> — це облік пробігу та витрат для тих, хто їздить по роботі: курʼєрів і водіїв таксі, спеціалістів з виїзних робіт та всіх, кому потрібні чіткі записи робочого пробігу до сплати податків.",
    s_about2: "Додаток записує поїздки автоматично у фоні або вручну, коли ви торкаєтеся «Почати поїздку», а потім дає підтвердити, робоча була поїздка чи особиста. Разом із пробігом він зберігає заправки, паркування, збори й ремонти, показує водіям у США орієнтовне відрахування за пробіг за стандартною ставкою IRS, веде журнал робочих кілометрів для водіїв у Канаді, нагадує про заміну оливи та гальмівні колодки й експортує все у звіт PDF або CSV для бухгалтера.",
    s_aboutList: "<li>Доступний для США та Канади, у милях або кілометрах</li><li>Шість мов інтерфейсу: англійська, іспанська, французька, російська, українська та дарі</li><li>Світла й темна тема</li><li>Резервна копія в хмарі у вашому акаунті — записи переживуть втрату телефона</li>",
    s_qaH: "Швидкі відповіді",
    s_q1H: "Поїздки не визначаються автоматично",
    s_q1p: "Для автоматичного визначення на телефоні мають бути ввімкнені три речі:",
    s_q1list: "<li>Геолокацію ввімкнено, а MarV Route має дозвіл на неї — достатньо варіанта <strong>«Під час використання додатка»</strong>, бо відстеження працює з видимим сповіщенням</li><li>Оптимізацію батареї для MarV Route <strong>вимкнено</strong>, щоб Android не зупиняв додаток у фоні</li><li>Сповіщення дозволено — поки додаток стежить за поїздками, він показує постійне сповіщення</li>",
    s_q1note: "У додатку є вбудований екран <strong>«Перевірка дозволів»</strong>, який перевіряє всі три пункти й показує, чого бракує. Автоматичне визначення — функція Pro: поки платні плани не запущено, Pro можна безкоштовно ввімкнути в розділі <strong>Профіль → Підписка</strong>.",
    s_q2H: "Записана дистанція виглядає неправильною",
    s_q2p: "Точність GPS падає в тунелях, підземних паркінгах і щільній міській забудові, тому поїздка може вийти коротшою. Ви можете відкрити будь-яку поїздку й виправити дистанцію вручну, перш ніж вона потрапить у звіт.",
    s_q3H: "Як експортувати звіт?",
    s_q3p: "Відкрийте вкладку <strong>«Звіти»</strong>, оберіть період (цей місяць, минулий місяць або власний діапазон дат) і торкніться <strong>«Експорт простого PDF»</strong>, <strong>«Експорт детального PDF»</strong> чи <strong>«Експорт CSV»</strong>. Файл можна одразу надіслати поштою або в хмарне сховище. Експорт — функція Pro: поки платні плани не запущено, Pro можна безкоштовно ввімкнути в розділі <strong>Профіль → Підписка</strong>.",
    s_q4H: "Як повернути дані на новому телефоні?",
    s_q4p: "Якщо ви були в акаунті й резервне копіювання в хмару працювало, увійдіть тим самим акаунтом на новому телефоні. Після нового встановлення додаток відновлює копію автоматично; також можна натиснути <strong>«Відновити з хмари»</strong> у вкладці «Профіль». Детальні GPS-маршрути до хмарної копії не входять. Без хмарної копії все можна перенести через <strong>«Експорт резервної копії»</strong> на старому телефоні та <strong>«Імпорт резервної копії»</strong> на новому.",
    s_q5H: "Як змінити одиниці, валюту чи мову?",
    s_q5p: "Усе це у вкладці <strong>«Профіль»</strong> — одиниця відстані (милі або кілометри), країна й валюта, мова інтерфейсу та тема.",
    s_q6H: "Як видалити свої дані?",
    s_q6p: "Ви можете видаляти окремі поїздки та витрати в додатку або видалити додаток, щоб стерти все, що зберігається на телефоні. Щоб видалити акаунт разом із його резервною копією в хмарі, відкрийте в додатку <strong>Профіль → Конфіденційність і дані → Видалити акаунт</strong>. Якщо додатка у вас більше немає або ви хочете прибрати лише хмарну копію, напишіть нам з адреси, на яку зареєстровано акаунт, — див. <a href=\"../delete-account/\">Видалення акаунта</a>.",
    s_q7H: "Чому для Канади немає суми відрахування?",
    s_q7p: "У США самозайняті водії зазвичай можуть користуватися стандартною ставкою IRS за милю, тому додаток може оцінити відрахування за робочим пробігом. У Канаді самозайняті водії натомість заявляють робочу частку фактичних витрат на авто, а покілометрові ставки, які публікує CRA, — це межі компенсацій, що їх роботодавці виплачують працівникам. Тому для Канади MarV Route веде журнал кілометрів і ваші витрати, а розрахунок залишає вам або вашому бухгалтеру. В обох випадках додаток дає записи й оцінки, а не податкову консультацію.",
    s_bugH: "Повідомити про помилку",
    s_bugIntro: "Щоб ми виправили швидше, вкажіть якомога більше з цього:",
    s_bugList: "<li>Модель телефона та версію Android (або iOS)</li><li>Версію додатку — вона в розділі «Про додаток» у вкладці «Профіль»</li><li>Що ви робили, чого очікували і що сталося натомість</li><li>Знімок екрана, якщо проблему видно на екрані</li>",
    s_featH: "Побажання щодо функцій",
    s_featBody: "MarV Route активно розробляється, і ваші відгуки впливають на те, що буде створено далі. Якщо вам чогось бракує у роботі — напишіть нам: такі повідомлення справді змінюють плани розробки.",

    // ── Delete account page ──
    d_docTitle: "Видалення акаунта | MarV Route",
    d_title: "Видалення акаунта",
    d_updated: "Оновлено: 10 листопада 2026",
    d_intro: "Ви можете будь-коли видалити свій акаунт MarV Route і все, що з ним зберігається — просто в додатку або написавши нам. Тут описано обидва способи і те, що саме видаляється.",
    d_calloutTitle: "⚠️ Видалення незворотне",
    d_calloutBody: "Видалення акаунта стирає резервну копію в хмарі та дані додатку на вашому пристрої. Відновити їх неможливо, періоду очікування немає — щойно ви підтвердите, дані зникнуть. Якщо хочете зберегти копію, спершу скористайтеся «Експортом резервної копії» на вкладці «Профіль».",
    d_h1: "1. Видалення в додатку",
    d_1intro: "Найшвидший спосіб — усе зникає одразу:",
    d_1list: "<li>Відкрийте <strong>MarV Route</strong> і перейдіть на вкладку <strong>Профіль</strong>.</li><li>Прокрутіть донизу й розгорніть розділ <strong>Конфіденційність і дані</strong>.</li><li>Натисніть <strong>Видалити акаунт</strong>.</li><li>Підтвердьте кнопкою <strong>Видалити назавжди</strong>.</li>",
    d_1note: "Потрібно бути в акаунті. Якщо ви користуєтеся MarV Route без акаунта, у хмарі не зберігається нічого — видалення додатку прибирає всі ваші дані.",
    d_h2: "2. Запит на видалення поштою",
    d_2intro: "Якщо додатка у вас більше немає, напишіть нам з адреси, на яку зареєстровано акаунт:",
    d_2note: "Тема листа — «Delete my account». Ми переконуємось, що запит надійшов із зареєстрованої адреси, і виконуємо видалення протягом 30 днів, зазвичай значно швидше.",
    d_2note2: "Ви також можете попросити видалити лише резервну копію в хмарі й залишити акаунт — просто зазначте це в листі.",
    d_h3: "3. Що саме видаляється",
    d_3list: "<li><strong>Ваш акаунт</strong> — електронна адреса та ідентифікатор користувача, з якими ви входите.</li><li><strong>Резервна копія в хмарі</strong> — поїздки, точки початку й кінця поїздок, витрати, записи про пальне, параметри Робочого режиму та налаштування додатку, зокрема внесені вами дані профілю, авто, страхування й бухгалтера.</li><li><strong>Локальні дані</strong> на пристрої, з якого ви видаляєте, — поїздки, витрати, записи про пальне й налаштування.</li>",
    d_h4: "4. Дані на інших пристроях",
    d_4body: "Видалення акаунта прибирає хмарну копію та дані на пристрої, з якого ви його видалили. Якщо MarV Route встановлено ще й на іншому телефоні, там залишається власна локальна копія — щоб прибрати її, видаліть додаток на тому пристрої.",
    d_h5: "5. Що ми зберігаємо",
    d_5body: "Нічого. Ваш акаунт і резервна копія в хмарі видаляються з нашого проєкту Firebase, щойно видалення виконано; Google, на чиїх серверах він розміщений, може знадобитися до 180 днів, щоб прибрати видалені дані зі своїх резервних систем. Ми ніколи не продаємо ваші дані. Детальні GPS-треки маршрутів узагалі не завантажуються в хмару — вони лишаються на вашому пристрої та зникають разом із ним.",
    d_h6: "6. Контакти",
    d_emailLabel: "📧 Пошта:",

    // ── Terms of Service page ──
    t_docTitle: "Умови використання | MarV Route",
    t_title: "Умови використання",
    t_effective: "Дата набрання чинності: 10 листопада 2026",
    t_intro: "Ці Умови — угода між вами та MarV Space, комерційною назвою (assumed business name), зареєстрованою в штаті Айдахо, США, незалежним розробником із Бойсе, штат Айдахо («ми»). Вони регулюють користування мобільним додатком MarV Route і цим сайтом. Прочитайте їх, перш ніж покладатися на додаток у важливих речах — обліку пробігу, витратах чи податках.",
    t_calloutTitle: "⚠️ Це оцінки, а не професійна консультація",
    t_calloutBody: "MarV Route вимірює відстань за допомогою GPS вашого телефона й — для водіїв у США — оцінює відрахування за пробіг за опублікованою стандартною ставкою IRS. І те, і те — <strong>оцінки</strong>. Додаток є інструментом обліку, а не бухгалтером: перевіряйте поїздки, перш ніж щось подавати, і консультуйтеся з кваліфікованим податковим фахівцем щодо вашої ситуації.",
    t_h1: "1. Прийняття цих Умов",
    t_1body: "Встановлюючи або використовуючи MarV Route, ви погоджуєтеся з цими Умовами. Якщо ви не згодні — не користуйтеся додатком. Якщо ви використовуєте MarV Route для роботодавця чи бізнесу, ви підтверджуєте, що маєте право прийняти ці Умови від його імені.",
    t_h2: "2. Хто може користуватися MarV Route",
    t_2list: "<li>Вам має бути щонайменше 18 років або стільки, скільки становить вік повноліття у вашому місці проживання, якщо він вищий.</li><li>Ви повинні мати чинне водійське посвідчення для поїздок, які записуєте.</li><li>Додаток побудований навколо обліку пробігу у США та Канаді. Ви можете користуватися ним і в інших країнах, але вбудована ставка пробігу США до вас не застосовуватиметься.</li>",
    t_h3: "3. Відповідальне користування додатком",
    t_3intro: "Ви зобовʼязуєтеся не:",
    t_3list: "<li>Користуватися додатком під час руху так, що це відволікає вас або порушує місцеві правила дорожнього руху.</li><li>Фальсифікувати поїздки, відстані чи витрати, щоб ввести в оману податковий орган, роботодавця або клієнта.</li><li>Використовувати додаток у протиправних цілях або для стеження за іншою людиною без її відома.</li><li>Копіювати, перепродавати, декомпілювати додаток чи намагатися отримати його вихідний код.</li><li>Втручатися в роботу додатка або намагатися отримати доступ до чужих акаунтів і даних.</li>",
    t_3note: "<strong>Спершу дорога, потім екран.</strong> Запускайте й зупиняйте відстеження до виїзду або після паркування. Автоматичне визначення існує саме для того, щоб вам не доводилося торкатися телефона під час руху. В Айдахо закон дозволяє користуватися телефоном за кермом лише в режимі hands-free (Idaho Code § 49-1401A), і в багатьох інших штатах і провінціях діють схожі правила.",
    t_h4: "4. GPS-відстеження та точність пробігу",
    t_4intro: "Відстані беруться з датчиків місцезнаходження вашого пристрою, тож їхня точність залежить від речей, які ми не контролюємо:",
    t_4list: "<li>Якість сигналу GPS — тунелі, підземні паркінги й щільна міська забудова погіршують його.</li><li>Ваш пристрій, його операційна система та налаштування енергозбереження.</li><li>Дозволи: якщо доступ до геолокації обмежено або система зупиняє додаток у фоні, поїздки можуть записатися коротшими, розділитися надвоє або не записатися взагалі.</li><li>Автоматичне визначення може також записати поїздку, яку ви не збиралися фіксувати.</li>",
    t_4note: "Записані відстані — це оцінки, а не сертифіковані вимірювання. Саме тому MarV Route дозволяє відредагувати будь-яку поїздку вручну, і саме ви відповідаєте за перевірку того, що ваші записи правильні й повні.",
    t_h5: "5. Звіти не є податковою консультацією",
    t_5body: "Для водіїв у США MarV Route показує орієнтовне відрахування, обчислене за стандартною ставкою IRS за милю. Для водіїв у Канаді додаток веде журнал робочих кілометрів і не обчислює суму відрахування, бо самозайняті водії там зазвичай заявляють робочу частку фактичних витрат на авто. В обох випадках це зручність для вашого обліку, не більше.",
    t_5list: "<li>Ми не бухгалтери, не податкові й не юридичні радники та не надаємо таких послуг.</li><li>Оцінка для США виходить із того, що ви користуєтеся стандартною ставкою за милю. У такому разі ви зазвичай не можете додатково відраховувати фактичні витрати на те саме авто — пальне, ремонт чи страхування, — а от плату за паркування і платні дороги під час робочих поїздок зазвичай можна відрахувати окремо. Додаток не перевіряє, чи маєте ви право на стандартну ставку.</li><li>Офіційні ставки змінюються. Додаток може не відобразити нову ставку одразу, а застаріла ставка дає застарілу оцінку.</li><li>Чи підлягає поїздка відрахуванню взагалі та який метод можна застосувати — залежить від ваших обставин і правил вашого податкового органу.</li><li>Експортовані з додатка звіти не є сертифікованими документами й не подаються від вашого імені.</li>",
    t_5note: "Перш ніж щось подавати, дайте перевірити свої цифри кваліфікованому фахівцю. Ви одноосібно відповідаєте за те, що подаєте до податкового органу.",
    t_h6: "6. Ваші записи — ваша відповідальність",
    t_6body: "Зберігайте власні копії всього, що вам потрібно. Резервна копія в хмарі — це зручність, а не гарантія вічного зберігання: дані можна втратити через поломку пристрою, видалення додатка, видалення акаунта чи перебій у роботі сервісу. Експортуйте PDF або CSV усього, що може знадобитися пізніше.",
    t_h7: "7. Підписка MarV Route Pro",
    t_7intro: "Запис поїздок, додавання поїздок вручну, облік пального й витрат і перегляд звітів у додатку безкоштовні. Інші функції позначені в додатку як <strong>Pro</strong> — зараз це експорт PDF і CSV, резервна копія в хмарі, автоматичне виявлення поїздок, підсумки пального, чекліст закриття місяця та нагадування про обслуговування. Підписки ми поки не продаємо: до того часу функції Pro можна безкоштовно ввімкнути у вкладці «Профіль». Коли <strong>MarV Route Pro</strong> буде запущено як необовʼязкову платну підписку, функції Pro потребуватимуть її, і діятимуть такі умови:",
    t_7list: "<li>Pro продаватиметься як <strong>річна підписка</strong>. Поточна ціна й валюта завжди показані в App Store або Google Play до підтвердження покупки.</li><li>Оплата списується з вашого акаунта Apple або Google у момент підтвердження покупки, а не нами — ми ніколи не бачимо й не зберігаємо дані вашої картки.</li><li>Підписка <strong>поновлюється автоматично</strong> щороку, якщо ви не скасуєте її щонайменше за 24 години до кінця поточного періоду. Оплату за поновлення списують протягом 24 годин до цієї дати.</li><li>Ціни можуть змінюватися для майбутніх періодів. Вас попередять заздалегідь, і підвищення ціни ніколи не стосується вже оплаченого періоду.</li><li>Якщо пропонується безкоштовний пробний період і ви оформлюєте підписку до його завершення, невикористана частина пробного періоду згорає.</li>",
    t_7note: "Нічого не списується, доки ви самі не оформите підписку й не підтвердите покупку в App Store або Google Play. Перелік функцій Pro може з часом змінюватися (див. розділ 9).",
    t_h8: "8. Скасування підписки та повернення коштів",
    t_8intro: "Скасувати підписку можна будь-коли, і робиться це завжди в магазині, де ви її придбали, а не в додатку:",
    t_8list: "<li><strong>iPhone / iPad:</strong> Налаштування → ваше імʼя → Підписки → MarV Route → Скасувати підписку.</li><li><strong>Android:</strong> Google Play → значок профілю → Платежі та підписки → Підписки → MarV Route → Скасувати.</li>",
    t_8note1: "Після скасування Pro-функції лишаються у вас до кінця вже оплаченого періоду. Нічого не видаляється — ваші поїздки, витрати та звіти залишаються в додатку, і ви можете далі користуватися безкоштовними функціями.",
    t_8note2: "<strong>Поверненням коштів займаються Apple і Google</strong> за власними правилами, бо саме їм здійснюється оплата. Ми не можемо самостійно повернути кошти за покупку в магазині. Якщо щось пішло не так — усе одно напишіть нам: ми допоможемо оформити запит і підтримаємо його, наскільки це можливо.",
    t_h9: "9. Зміни в додатку",
    t_9body: "MarV Route активно розробляється. Ми можемо додавати, змінювати чи прибирати функції, а також призупиняти роботу сервісу для обслуговування. Ми намагатимемось не прибирати без попередження те, від чого ви залежите, але не можемо обіцяти, що кожна функція існуватиме вічно.",
    t_h10: "10. Право власності",
    t_10body: "Додаток, його назва, логотип, дизайн і код належать нам. Ви отримуєте особисту ліцензію на користування додатком без права передачі — але не право власності на нього. Ваші дані, натомість, належать вам: поїздки, витрати та звіти ваші, і ви можете будь-коли експортувати або видалити їх.",
    t_qcNo: "<strong>Споживачі у Квебеку:</strong> цей розділ до вас не застосовується.",
    t_h11: "11. Відсутність гарантій",
    t_11body: "MarV Route надається «як є» та «як доступно». У межах, дозволених законом, ми не гарантуємо безперебійної роботи додатка, відсутності помилок, точності кожного вимірювання чи придатності для конкретної мети.",
    t_h12: "12. Обмеження відповідальності",
    t_12body: "У межах, дозволених законом, ми не відповідаємо за непрямі чи похідні збитки, що виникли внаслідок користування додатком, — зокрема за втрачені чи неточні записи пробігу, відхилені відрахування, штрафи чи пеню, нараховані податковим органом, втрачений прибуток або втрату даних. Ніщо в цих Умовах не обмежує відповідальність, яку не можна обмежити за законом.",
    t_h13: "13. Призупинення та припинення",
    t_13body: "Ви можете припинити користування MarV Route будь-коли, видаливши додаток, а також видалити акаунт і дані в додатку: Профіль → Конфіденційність і дані → Видалити акаунт. Ми можемо призупинити або закрити акаунт, який порушує ці Умови чи використовується протиправно. Якщо ми закриваємо ваш акаунт, ми повідомимо причину там, де нам це дозволено.",
    t_h14: "14. Зміни до цих Умов",
    t_14qc: "<strong>Споживачі у Квебеку:</strong> наведений нижче абзац до вас не застосовується. Зміни до цих Умов поширюються на вас лише так, як це дозволяє квебекський Закон про захист прав споживачів (Consumer Protection Act).",
    t_14body: "Ми можемо оновлювати ці Умови з розвитком додатка. Дата набрання чинності вгорі сторінки змінюватиметься, а про суттєві зміни буде оголошено в додатку або на сторінці в магазині застосунків. Продовження користування MarV Route після оновлення означає, що ви приймаєте нову редакцію Умов.",
    t_h15: "15. Застосовне право і мова",
    t_15qc: "<strong>Споживачі у Квебеку:</strong> наведений нижче абзац до вас не застосовується. Ці Умови регулюються законами Квебеку та застосовними там федеральними законами Канади, і ви можете звернутися зі спором до судів Квебеку.",
    t_15body: "Ці Умови регулюються законодавством штату Айдахо, США, без урахування його колізійних норм. Спори розглядають суди штату або федеральні суди в окрузі Ада, штат Айдахо, якщо закон вашого місця проживання не дає вам права звернутися до суду за місцем проживання. Це не позбавляє вас захисту, передбаченого імперативними нормами споживчого права країни вашого проживання.",
    t_15lang: "Ці Умови доступні англійською, французькою та українською мовами. У разі розбіжностей перевагу має англійська версія, якщо закон вашого місця проживання не передбачає іншого. Якщо ви живете у Квебеку, вам насамперед надається французька версія; ви можете обрати англійську, а в разі розбіжностей між ними — спиратися на ту, що для вас вигідніша.",
    t_h16: "16. Сторонні сервіси й торгові марки",
    t_16body: "MarV Route спирається на сервіси інших компаній — Google Firebase, картографічні дані OpenStreetMap і служби геолокації вашого телефона. Вони можуть змінюватися або бути недоступними, і ми за них не відповідаємо. MarV Route не повʼязаний з жодною платформою таксі чи доставки, як-от Uber, Lyft, DoorDash чи Instacart, і не схвалений та не спонсорований ними. Їхні назви — торгові марки відповідних власників і згадуються лише для того, щоб показати, з якими сервісами можна використовувати додаток.",
    t_h17: "17. Apple App Store",
    t_17intro: "Якщо ви завантажили MarV Route з Apple App Store, також діє таке:",
    t_17list: "<li>Ці Умови укладено між вами й нами, а не з Apple. Лише ми, а не Apple, відповідаємо за додаток і його вміст.</li><li>Ваша ліцензія обмежена пристроями Apple, якими ви володієте або керуєте, у межах Правил використання (Usage Rules) з Умов Apple Media Services.</li><li>Apple не зобовʼязана надавати обслуговування чи підтримку додатку.</li><li>Якщо додаток не відповідає застосовній гарантії, ви можете повідомити Apple, і Apple поверне вартість покупки, якщо вона була. Інших гарантійних зобовʼязань щодо додатку Apple не має.</li><li>Розгляд будь-яких претензій щодо додатку, зокрема щодо відповідальності за продукт, невідповідності вимогам законодавства, захисту прав споживачів чи конфіденційності, — наша відповідальність, а не Apple.</li><li>Якщо хтось заявить, що додаток порушує його інтелектуальну власність, розслідування, захист і врегулювання такої претензії — наша відповідальність, а не Apple.</li><li>Ви підтверджуєте, що не перебуваєте в країні під ембарго уряду США і не входите до жодного списку осіб, щодо яких уряд США встановив заборони чи обмеження.</li><li>Ви маєте дотримуватися умов третіх сторін, які застосовуються під час користування додатком, наприклад умов вашого мобільного тарифу.</li><li>Apple та її дочірні компанії є сторонніми вигодонабувачами цих Умов і можуть вимагати від вас їх виконання.</li>",
    t_h18: "18. Контакти",
    t_18body: "Питання щодо цих Умов або щодо підписки:",
    t_emailLabel: "📧 Email:",
    t_18note: "MarV Route розробляє MarV Space — комерційна назва (assumed business name), зареєстрована в штаті Айдахо, США, незалежним розробником із Бойсе, штат Айдахо. На більшість повідомлень ми відповідаємо протягом 2–3 робочих днів.",
  },

  fr: {
    // ── Shared ──
    backToSite: "← Retour au site",
    backHome: "← Retour à MarV Route",
    toSupport: "Assistance →",
    toPrivacy: "Politique de confidentialité →",
    toTerms: "Conditions d'utilisation →",
    toDelete: "Suppression du compte →",
    footerHome: "Accueil",
    footerFaq: "FAQ",
    footerSupport: "Assistance",
    footerPrivacy: "Confidentialité",
    footerTerms: "Conditions",
    footerDelete: "Suppression du compte",
    eyebrowLegal: "Mentions légales",
    eyebrowSupport: "Assistance",
    langNote: "<span lang=\"en\">English version: <a href=\"?lang=en\" hreflang=\"en\">read this document in English</a>.</span>",
    mailLabel: "✉️ Adresse postale\u00a0:",
    postalAddress: "MarV Space, 5212 S. Missoula Way, Boise, ID 83709, États-Unis",

    // ── Privacy page ──
    p_docTitle: "Politique de confidentialité | MarV Route",
    p_title: "Politique de confidentialité",
    p_effective: "Date d'entrée en vigueur\u00a0: 10 novembre 2026",
    p_intro: "MarV Route est conçue par MarV Space, nom commercial («\u00a0assumed business name\u00a0») enregistré dans l'État de l'Idaho, aux États-Unis, par un développeur indépendant établi à Boise, en Idaho («\u00a0nous\u00a0»). La présente Politique de confidentialité explique quelles données l'application mobile MarV Route et le site marvroute.com recueillent, comment nous les utilisons et les protégeons, et quels choix s'offrent à vous.",
    p_calloutTitle: "📍 Avis sur la localisation en arrière-plan",
    p_calloutBody: "MarV Route recueille des données de localisation pour enregistrer vos trajets et peut le faire <strong>en arrière-plan</strong> — y compris lorsque l'application est fermée ou n'est pas utilisée — mais seulement tant que le suivi des trajets ou la détection automatique des trajets est activé. Votre téléphone vous l'indique\u00a0: une notification permanente sur Android, l'indicateur de localisation sur iPhone. Ces données servent uniquement à mesurer et à enregistrer <em>vos propres</em> trajets dans l'application. Elles ne sont jamais vendues et ne servent ni à la publicité ni au suivi entre applications. Vous pouvez désactiver le suivi à tout moment dans l'application ou dans les réglages de votre appareil.",
    p_h1: "1. Renseignements que nous recueillons",
    p_1intro: "Ce que nous recueillons dépend de la façon dont vous utilisez MarV Route\u00a0:",
    p_1locH: "📍 Données de localisation",
    p_1locList: "<li>Localisation GPS précise pendant l'enregistrement d'un trajet et pendant que la détection automatique attend le début d'un trajet — y compris en arrière-plan.</li><li>Nous l'utilisons pour mesurer la distance et pour enregistrer l'itinéraire, les points de départ et d'arrivée, la date et l'heure de chaque trajet.</li><li>Les tracés GPS détaillés restent sur votre appareil. Ils ne sont jamais téléversés dans le nuage\u00a0; ils ne quittent votre téléphone que dans un fichier de sauvegarde que vous exportez vous-même.</li>",
    p_1tripH: "🚗 Trajets, dépenses et réglages",
    p_1tripList: "<li>Le caractère professionnel ou personnel d'un trajet, sa plateforme et son motif, ainsi que les modifications que vous y apportez.</li><li>Les pleins de carburant, le stationnement, les péages, les réparations et les autres dépenses que vous consignez, ainsi que vos rappels d'entretien.</li><li>Vos préférences\u00a0: unité de distance, pays et devise, langue, thème et réglages du Mode travail.</li>",
    p_1profH: "🪪 Profil, véhicule et renseignements pour les rapports (facultatif)",
    p_1profList: "<li>Les renseignements que vous choisissez d'entrer pour qu'ils figurent dans vos rapports\u00a0: votre nom et le nom de votre entreprise.</li><li>Votre véhicule\u00a0: son nom, sa marque, son modèle, son année, sa plaque d'immatriculation et les relevés de l'odomètre, ainsi que les données de vidange et de plaquettes de frein que vous entrez pour les rappels d'entretien.</li><li>Votre assurance\u00a0: le nom et les coordonnées de la compagnie, le nom et le numéro de votre police.</li><li>Le nom, le numéro de téléphone et l'adresse de votre comptable.</li><li>Chacun de ces champs est facultatif. Si vous entrez des renseignements sur une autre personne, par exemple votre comptable, assurez-vous d'avoir le droit de les communiquer.</li>",
    p_1accH: "👤 Renseignements sur le compte (facultatif)",
    p_1accList: "<li>Vous pouvez utiliser MarV Route sans compte. Dans ce cas, nous ne recevons pas votre adresse courriel et rien n'est stocké dans le nuage.</li><li>Si vous créez un compte avec une adresse courriel et un mot de passe\u00a0: votre adresse courriel et l'identifiant d'utilisateur que Firebase Authentication vous attribue. Votre mot de passe est vérifié par Firebase Authentication — nous ne le voyons jamais.</li><li>Si vous vous connectez avec Google\u00a0: Google communique votre nom, votre adresse courriel et votre photo de profil à Firebase Authentication.</li><li>Pour que vous restiez connecté, l'application peut conserver vos identifiants de connexion dans le stockage sécurisé de votre téléphone (Trousseau sur iPhone, Keystore sur Android). Ils ne sont transmis nulle part à partir de là et sont supprimés lorsque vous vous déconnectez.</li>",
    p_1webH: "🌐 Site Web et liste de lancement",
    p_1webList: "<li>Si vous demandez à être avisé du lancement sur marvroute.com, nous recueillons le nom et l'adresse courriel que vous entrez, le type de conducteur que vous sélectionnez, la langue dans laquelle vous avez consulté le site et l'heure de votre demande.</li><li>Nous les utilisons uniquement pour vous envoyer l'annonce du lancement — un seul courriel. Il indiquera notre adresse postale et comportera un moyen de vous désabonner\u00a0; vous pouvez aussi retirer votre consentement à tout moment en nous écrivant.</li><li>Le site ne dépose aucun témoin (cookie) et ne contient aucun traceur publicitaire ou d'analyse. Il mémorise seulement votre langue et votre thème dans votre propre navigateur. Il est hébergé sur GitHub Pages\u00a0; comme tout hébergeur, GitHub reçoit votre adresse IP lorsque vous ouvrez une page et peut la conserver dans ses journaux de sécurité.</li>",
    p_1diagH: "🛠 Diagnostic et statistiques",
    p_1diagList: "<li>Si vous l'autorisez dans les réglages de votre téléphone, Apple ou Google peuvent nous transmettre des rapports de plantage et des données de diagnostic de base, comme le modèle de l'appareil, la version du système et l'endroit où l'application a planté.</li><li>Apple (App Store Connect) et Google (Google Play Console) nous fournissent aussi des statistiques agrégées sur les installations, l'utilisation et les plantages. Ces statistiques ne vous identifient pas individuellement.</li><li>Nous utilisons ces renseignements uniquement pour corriger les bogues et améliorer l'application. MarV Route ne contient aucun SDK de publicité ou d'analyse.</li>",
    p_h2: "2. Utilisation de vos renseignements",
    p_2intro: "Nous utilisons vos données pour\u00a0:",
    p_2list: "<li>Fournir et maintenir les fonctions de l'application</li><li>Enregistrer les trajets et produire des rapports</li><li>Additionner votre kilométrage et, pour les conducteurs aux États-Unis, estimer la déduction au taux standard pour vos dossiers</li><li>Sauvegarder et restaurer vos données tant que vous êtes connecté et que la sauvegarde cloud est active</li><li>Envoyer les notifications que vous autorisez, comme les alertes de trajet et les rappels d'entretien</li><li>Répondre à vos demandes d'assistance, corriger les bogues et améliorer l'application</li><li>Envoyer l'annonce du lancement, si vous l'avez demandée sur notre site</li>",
    p_2note: "Nous n'utilisons pas vos données de localisation ou de trajets à des fins de publicité, de profilage ou de prise de décision automatisée.",
    p_h3: "3. Lieu de conservation de vos données",
    p_3intro: "L'endroit où vos données sont conservées dépend de la façon dont vous utilisez l'application\u00a0:",
    p_3list: "<li><strong>Sur votre appareil</strong> — vos trajets, vos dépenses et vos réglages sont toujours enregistrés sur votre téléphone. Si vous utilisez l'application sans compte, ils ne sont conservés nulle part ailleurs.</li><li><strong>Dans le nuage, tant que vous êtes connecté et que la sauvegarde cloud est active</strong> — la sauvegarde cloud est une fonction Pro. Tant que vous êtes connecté et que les fonctions Pro sont activées, l'application enregistre automatiquement une sauvegarde environ une fois par jour\u00a0; vous pouvez aussi en lancer une vous-même dans l'onglet Profil. La sauvegarde contient vos trajets avec leurs points de départ et d'arrivée (mais pas le tracé GPS détaillé), vos dépenses, vos pleins de carburant, les réglages du Mode travail et les réglages de l'application, y compris les renseignements sur votre profil, votre véhicule, votre assurance et votre comptable que vous avez entrés. Elle est stockée dans Google Firebase (Cloud Firestore) et liée à votre compte.</li><li><strong>Fichiers que vous exportez</strong> — les rapports PDF et CSV et les fichiers de sauvegarde sont créés sur votre téléphone et ne vont que là où vous les enregistrez ou les envoyez. Nous ne les recevons jamais.</li><li><strong>Liste de lancement du site</strong> — les demandes provenant du formulaire de marvroute.com sont stockées dans Google Firebase (Cloud Firestore).</li>",
    p_3note: "Google peut stocker ces données sur des serveurs situés aux États-Unis ou dans d'autres pays. <strong>Nous ne vendons pas vos renseignements personnels.</strong>",
    p_h4: "4. Conservation des données",
    p_4list: "<li>Les trajets, les pleins de carburant et les dépenses restent sur votre appareil jusqu'à ce que vous les supprimiez ou que vous désinstalliez l'application.</li><li>Votre sauvegarde cloud est conservée jusqu'à ce que vous supprimiez votre compte ou que vous nous demandiez de supprimer la sauvegarde. Chaque nouvelle sauvegarde remplace la précédente.</li><li>Les renseignements sur le compte sont conservés tant que votre compte existe.</li><li>Les demandes d'inscription à la liste de lancement sont conservées seulement le temps nécessaire pour envoyer l'annonce du lancement, ou jusqu'à ce que vous nous demandiez de les retirer.</li><li>Lorsque nous supprimons des données de notre projet Firebase, Google peut mettre jusqu'à 180 jours à les effacer de ses systèmes de sauvegarde.</li>",
    p_h5: "5. Communication des données",
    p_5intro: "Nous ne vendons ni ne louons vos renseignements personnels, et nous ne les communiquons pas à des annonceurs ni à des courtiers en données. Nous les communiquons uniquement\u00a0:",
    p_5list: "<li>À Google Firebase (Authentication et Cloud Firestore), qui assure pour nous la connexion, la sauvegarde cloud et la liste de lancement du site, ainsi qu'à Google Sign-In si vous choisissez de vous connecter avec Google</li><li>À GitHub, qui héberge le site marvroute.com</li><li>Lorsque vous le décidez vous-même, par exemple lorsque vous exportez un rapport PDF ou CSV et l'envoyez à quelqu'un</li><li>Lorsque la loi l'exige ou pour protéger la sécurité d'une personne</li>",
    p_5note: "Les cartes de l'application sont des images OpenStreetMap téléchargées depuis les serveurs de l'OpenStreetMap Foundation (tile.openstreetmap.org), qui reçoivent votre adresse IP et la zone de carte affichée, comme n'importe quel site Web. Les adresses de vos trajets et celles que vous recherchez sont obtenues au moyen du service de géocodage intégré à votre téléphone (Apple sur iPhone, Google sur Android), qui reçoit les coordonnées ou le texte de l'adresse. Ces services ne reçoivent jamais votre adresse courriel ni votre identifiant de compte.",
    p_h6: "6. Autorisations",
    p_6intro: "L'application peut demander\u00a0:",
    p_6list: "<li>📍 <strong>Localisation</strong> — pour le suivi des trajets et la détection automatique des trajets</li><li>🔔 <strong>Notifications</strong> — pour les alertes de trajet et les rappels d'entretien, ainsi que pour l'avis affiché pendant que le suivi fonctionne en arrière-plan</li><li>🔋 <strong>Exemption de l'optimisation de la batterie</strong> (Android) — pour que le système n'interrompe pas l'enregistrement des trajets en arrière-plan</li>",
    p_6note: "Chaque autorisation est facultative. En refuser une désactive seulement la fonction correspondante — le reste de l'application continue de fonctionner. L'enregistrement et le partage de fichiers passent par les écrans d'enregistrement et de partage de votre téléphone\u00a0; l'application n'a donc pas besoin d'une autorisation d'accès au stockage.",
    p_h7: "7. Sécurité des données",
    p_7body: "Nous prenons des mesures raisonnables pour protéger vos données, mais aucune méthode de transmission ou de stockage n'est sûre à 100\u00a0%. Les connexions au nuage sont chiffrées en transit, et l'accès aux sauvegardes est réservé à votre propre compte authentifié. Si une atteinte à la sécurité touche vos renseignements personnels, nous vous en aviserons sans délai déraisonnable, comme l'exige la loi — notamment l'article 28-51-105 du Code de l'Idaho et, pour les personnes au Canada, les règles décrites à la section 9.",
    p_h8: "8. Vos droits",
    p_8intro: "Vous pouvez\u00a0:",
    p_8list: "<li>Supprimer des trajets et des dépenses un à un dans l'application</li><li>Arrêter les sauvegardes cloud automatiques en vous déconnectant de votre compte ou en désactivant les fonctions Pro — les sauvegardes ne sont effectuées que lorsque vous êtes connecté et que les fonctions Pro sont activées</li><li>Supprimer votre compte ainsi que sa sauvegarde cloud dans l'application — <strong>Profil → Confidentialité et données → Supprimer le compte</strong> — ou par courriel (voir <a href=\"../delete-account/\">Suppression du compte</a>)</li><li>Nous demander par courriel de supprimer seulement votre sauvegarde cloud en conservant votre compte</li><li>Arrêter le suivi de la localisation à tout moment</li><li>Désinstaller l'application pour supprimer les données stockées sur votre appareil</li><li>Demander une copie des renseignements personnels associés à votre compte, ou nous demander de les corriger</li><li>Nous demander de vous retirer de la liste de lancement</li>",
    p_8note: "Selon l'endroit où vous vivez (États-Unis, Canada, Union européenne ou ailleurs), vous pouvez avoir d'autres droits d'accès, de rectification, de portabilité ou d'effacement à l'égard de vos renseignements personnels. Écrivez-nous aux coordonnées de la section 13\u00a0; nous répondrons dans un délai de 30 jours, ou plus tôt si la loi l'exige.",
    p_h9: "9. Si vous vivez au Canada",
    p_9intro: "MarV Route est offerte aux conducteurs au Canada\u00a0; les lois canadiennes sur la protection des renseignements personnels — la LPRPDE fédérale et, au Québec, la Loi sur la protection des renseignements personnels dans le secteur privé — peuvent donc s'appliquer à notre traitement de vos renseignements personnels.",
    p_9list: "<li><strong>Personne responsable.</strong> Le propriétaire de MarV Space est responsable de notre traitement des renseignements personnels et agit à titre de responsable de la protection des renseignements personnels. Ses coordonnées figurent à la section 13.</li><li><strong>Consentement.</strong> Nous traitons vos renseignements avec votre consentement, que vous donnez en utilisant les fonctions de l'application et en y entrant des renseignements. Vous pouvez le retirer à tout moment — en désactivant une fonction, en supprimant les données ou votre compte, ou en nous écrivant —, mais les fonctions concernées cesseront alors de fonctionner.</li><li><strong>Localisation.</strong> Le suivi des trajets et la détection automatique des trajets sont désactivés tant que vous ne les activez pas vous-même, et vous pouvez les désactiver de nouveau à tout moment.</li><li><strong>Conservation à l'extérieur du Canada.</strong> Votre compte, votre sauvegarde cloud et votre demande d'inscription à la liste de lancement sont stockés par Google aux États-Unis ou dans d'autres pays, donc à l'extérieur du Canada et du Québec. Ils sont soumis aux lois de ces pays et peuvent être accessibles aux tribunaux et aux autorités de ces pays.</li><li><strong>Accès et rectification.</strong> Vous pouvez demander à consulter les renseignements personnels que nous détenons à votre sujet et à les faire rectifier. Nous répondons dans un délai de 30 jours.</li><li><strong>Incidents de sécurité.</strong> Si une atteinte présente un risque réel de préjudice grave, nous vous en aviserons, ainsi que le Commissariat à la protection de la vie privée du Canada — et, pour les personnes au Québec, la Commission d'accès à l'information —, et nous tenons un registre de chaque incident aussi longtemps que la loi l'exige.</li><li><strong>Plaintes.</strong> Si notre réponse ne vous satisfait pas, vous pouvez vous adresser au Commissariat à la protection de la vie privée du Canada (priv.gc.ca) ou, au Québec, à la Commission d'accès à l'information (cai.gouv.qc.ca).</li>",
    p_h10: "10. Protection des enfants",
    p_10body: "Cette application ne s'adresse pas aux enfants de moins de 13 ans. Nous ne recueillons pas sciemment de renseignements personnels auprès d'enfants. Si vous croyez qu'un enfant nous a fourni des renseignements personnels, écrivez-nous et nous les supprimerons.",
    p_h11: "11. Signaux «\u00a0Do Not Track\u00a0»",
    p_11body: "MarV Route et ce site ne vous suivent pas dans les applications ou sur les sites d'autres entreprises et n'affichent aucune publicité\u00a0; leur fonctionnement ne change donc pas en réponse aux signaux «\u00a0Do Not Track\u00a0» (ne pas me pister).",
    p_h12: "12. Modifications de la présente politique",
    p_12body: "Nous pouvons mettre à jour la présente Politique de confidentialité. Les modifications seront publiées sur cette page ainsi que dans l'application ou sur la fiche de l'application dans la boutique, et la date d'entrée en vigueur indiquée en haut de la page sera mise à jour.",
    p_h13: "13. Nous joindre",
    p_13intro: "Pour toute question ou demande concernant vos données, écrivez à la personne responsable de la protection des renseignements personnels chez MarV Space\u00a0:",
    p_13who: "<strong>Responsable de la protection des renseignements personnels\u00a0:</strong> le propriétaire de MarV Space",
    p_emailLabel: "📧 Courriel\u00a0:",
    p_13note: "MarV Route est développée par MarV Space, nom commercial («\u00a0assumed business name\u00a0») enregistré dans l'État de l'Idaho, aux États-Unis, par un développeur indépendant établi à Boise, en Idaho.",

    // ── Support page ──
    s_docTitle: "Assistance | MarV Route",
    s_title: "Aide pour MarV Route",
    s_sub: "MarV Route est conçue par un développeur indépendant — chaque message est lu par une vraie personne.",
    s_contactTitle: "📧 Nous joindre",
    s_emailLabel: "Courriel\u00a0:",
    s_reply: "Nous nous efforçons de répondre dans un délai de 2 à 3 jours ouvrables.",
    s_aboutH: "À propos de l'application",
    s_about1: "<strong>MarV Route</strong> est une application de suivi du kilométrage et des dépenses pour les personnes qui conduisent dans le cadre de leur travail — livreurs et chauffeurs de plateformes, techniciens de service sur le terrain, et quiconque a besoin de registres clairs de ses déplacements professionnels au moment des impôts.",
    s_about2: "L'application enregistre vos trajets automatiquement en arrière-plan, ou manuellement lorsque vous touchez Démarrer, puis vous permet de confirmer si chaque trajet était professionnel ou personnel. En plus du kilométrage, elle conserve vos pleins de carburant, vos frais de stationnement, vos péages et vos réparations, montre aux conducteurs des États-Unis une estimation de leur déduction au taux standard de l'IRS, tient un registre des kilomètres professionnels pour les conducteurs au Canada, vous rappelle les vidanges et le remplacement des plaquettes de frein, et exporte le tout dans un rapport PDF ou CSV pour votre comptable.",
    s_aboutList: "<li>Offerte aux États-Unis et au Canada, en milles ou en kilomètres</li><li>Six langues d'interface\u00a0: anglais, espagnol, français, russe, ukrainien et dari</li><li>Thème clair et thème sombre</li><li>Sauvegarde cloud dans votre propre compte, pour que vos registres survivent à la perte de votre téléphone</li>",
    s_qaH: "Réponses rapides",
    s_q1H: "Les trajets ne sont pas détectés automatiquement",
    s_q1p: "La détection automatique a besoin de trois choses sur votre téléphone\u00a0:",
    s_q1list: "<li>La localisation est activée et MarV Route a l'autorisation d'y accéder — l'option <strong>«\u00a0Lorsque l'app est active\u00a0»</strong> suffit, car le suivi fonctionne avec une notification visible</li><li>L'optimisation de la batterie est <strong>désactivée</strong> pour MarV Route, afin qu'Android ne l'arrête pas en arrière-plan</li><li>Les notifications sont autorisées — pendant que l'application surveille les trajets, elle affiche une notification permanente</li>",
    s_q1note: "L'application comprend un écran <strong>Vérification des autorisations</strong> qui teste ces trois points et vous indique ce qui manque. La détection automatique est une fonction Pro\u00a0: tant que les forfaits payants ne sont pas lancés, vous pouvez activer Pro gratuitement sous <strong>Profil → Abonnement</strong>.",
    s_q2H: "La distance enregistrée semble erronée",
    s_q2p: "La précision du GPS diminue dans les tunnels, les stationnements intérieurs et les centres-villes denses\u00a0; un trajet peut donc paraître plus court. Vous pouvez ouvrir n'importe quel trajet et corriger la distance à la main avant qu'elle ne soit reprise dans un rapport.",
    s_q3H: "Comment exporter un rapport\u00a0?",
    s_q3p: "Ouvrez l'onglet <strong>Rapports</strong>, choisissez une période (ce mois-ci, le mois dernier ou une plage de dates personnalisée), puis touchez <strong>Exporter PDF simple</strong>, <strong>Exporter PDF détaillé</strong> ou <strong>Exporter CSV</strong>. Le fichier peut être partagé directement par courriel ou vers un service de stockage en ligne. L'exportation est une fonction Pro\u00a0: tant que les forfaits payants ne sont pas lancés, vous pouvez activer Pro gratuitement sous <strong>Profil → Abonnement</strong>.",
    s_q4H: "Comment récupérer mes données sur un nouveau téléphone\u00a0?",
    s_q4p: "Si vous étiez connecté et que la sauvegarde cloud fonctionnait, connectez-vous avec le même compte sur le nouveau téléphone. Après une nouvelle installation, l'application restaure votre sauvegarde automatiquement\u00a0; vous pouvez aussi toucher <strong>Restaurer depuis le cloud</strong> dans l'onglet Profil. Les tracés GPS détaillés ne font pas partie de la sauvegarde cloud. Sans sauvegarde cloud, vous pouvez tout transférer avec <strong>Exporter la sauvegarde</strong> sur l'ancien téléphone et <strong>Importer la sauvegarde</strong> sur le nouveau.",
    s_q5H: "Comment changer les unités, la devise ou la langue\u00a0?",
    s_q5p: "Tout se trouve dans l'onglet <strong>Profil</strong> — unité de distance (milles ou kilomètres), pays et devise, langue de l'interface et thème.",
    s_q6H: "Comment supprimer mes données\u00a0?",
    s_q6p: "Vous pouvez supprimer des trajets et des dépenses un à un dans l'application, ou désinstaller l'application pour effacer tout ce qui est stocké sur le téléphone. Pour supprimer votre compte ainsi que sa sauvegarde cloud, ouvrez <strong>Profil → Confidentialité et données → Supprimer le compte</strong> dans l'application. Si vous n'avez plus l'application, ou si vous voulez seulement faire retirer la sauvegarde cloud, écrivez-nous à partir de l'adresse courriel associée à votre compte — voir <a href=\"../delete-account/\">Suppression du compte</a>.",
    s_q7H: "Pourquoi n'y a-t-il pas de montant de déduction pour le Canada\u00a0?",
    s_q7p: "Aux États-Unis, les travailleurs indépendants peuvent généralement utiliser le taux standard par mille de l'IRS\u00a0; l'application peut donc estimer une déduction à partir de vos milles professionnels. Au Canada, les travailleurs indépendants déduisent plutôt la part professionnelle de leurs frais de véhicule réels\u00a0; les taux par kilomètre que publie l'ARC sont des plafonds pour les allocations que les employeurs versent à leurs employés. Pour le Canada, MarV Route tient donc votre registre de kilomètres et vos dépenses, et vous laisse le calcul, à vous ou à votre comptable. Dans les deux cas, l'application fournit des registres et des estimations — pas des conseils fiscaux.",
    s_bugH: "Signaler un bogue",
    s_bugIntro: "Pour nous aider à corriger le problème plus vite, indiquez autant de ces éléments que possible\u00a0:",
    s_bugList: "<li>Le modèle du téléphone et la version d'Android (ou d'iOS)</li><li>La version de l'application, indiquée sous À propos dans l'onglet Profil</li><li>Ce que vous avez fait, ce que vous attendiez et ce qui s'est produit</li><li>Une capture d'écran, si le problème est visible à l'écran</li>",
    s_featH: "Suggestions de fonctions",
    s_featBody: "MarV Route est en développement actif et vos commentaires orientent ce qui sera créé ensuite. S'il manque quelque chose à votre façon de travailler, écrivez-nous — ces messages influencent réellement la feuille de route.",

    // ── Delete account page ──
    d_docTitle: "Suppression du compte | MarV Route",
    d_title: "Supprimer votre compte",
    d_updated: "Dernière mise à jour\u00a0: 10 novembre 2026",
    d_intro: "Vous pouvez supprimer votre compte MarV Route et tout ce qui y est associé à tout moment — directement dans l'application ou en nous écrivant. Cette page décrit les deux façons de faire et ce qui est supprimé exactement.",
    d_calloutTitle: "⚠️ La suppression est définitive",
    d_calloutBody: "La suppression de votre compte efface votre sauvegarde cloud et les données de l'application sur votre appareil. Aucune récupération n'est possible et il n'y a aucun délai d'attente — dès que vous confirmez, les données disparaissent. Si vous voulez en garder une copie, utilisez d'abord Exporter la sauvegarde dans l'onglet Profil.",
    d_h1: "1. Supprimer à partir de l'application",
    d_1intro: "C'est la façon la plus rapide, et l'effet est immédiat\u00a0:",
    d_1list: "<li>Ouvrez <strong>MarV Route</strong> et allez à l'onglet <strong>Profil</strong>.</li><li>Faites défiler jusqu'en bas et ouvrez la section <strong>Confidentialité et données</strong>.</li><li>Touchez <strong>Supprimer le compte</strong>.</li><li>Confirmez avec <strong>Supprimer définitivement</strong>.</li>",
    d_1note: "Vous devez être connecté. Si vous utilisez MarV Route sans compte, rien n'est stocké dans le nuage — la désinstallation de l'application supprime toutes vos données.",
    d_h2: "2. Demander la suppression par courriel",
    d_2intro: "Si l'application n'est plus installée, écrivez-nous à partir de l'adresse courriel associée à votre compte\u00a0:",
    d_2note: "Indiquez «\u00a0Delete my account\u00a0» en objet. Nous vérifions que la demande provient bien de l'adresse associée au compte et nous effectuons la suppression dans un délai de 30 jours — généralement bien plus vite.",
    d_2note2: "Vous pouvez aussi nous demander de supprimer seulement votre sauvegarde cloud en conservant votre compte — précisez-le simplement dans votre message.",
    d_h3: "3. Ce qui est supprimé",
    d_3list: "<li><strong>Votre compte</strong> — l'adresse courriel et l'identifiant d'utilisateur avec lesquels vous vous connectez.</li><li><strong>Votre sauvegarde cloud</strong> — les trajets, leurs points de départ et d'arrivée, les dépenses, les pleins de carburant, les réglages du Mode travail et les réglages de l'application, y compris les renseignements sur votre profil, votre véhicule, votre assurance et votre comptable que vous avez entrés.</li><li><strong>Les données locales de l'application</strong> sur l'appareil à partir duquel vous faites la suppression — trajets, dépenses, pleins de carburant et réglages.</li>",
    d_h4: "4. Données sur d'autres appareils",
    d_4body: "La suppression de votre compte efface la copie dans le nuage et les données de l'appareil à partir duquel vous l'avez supprimé. Si MarV Route est aussi installée sur un autre téléphone, celui-ci conserve sa propre copie locale — désinstallez-y l'application pour la retirer.",
    d_h5: "5. Ce que nous conservons",
    d_5body: "Rien. Votre compte et votre sauvegarde cloud sont retirés de notre projet Firebase dès que la suppression est effectuée\u00a0; Google, qui l'héberge, peut mettre jusqu'à 180 jours à effacer les données supprimées de ses systèmes de sauvegarde. Nous ne vendons jamais vos données. Les tracés GPS détaillés ne sont de toute façon jamais téléversés dans le nuage — ils restent sur votre appareil et disparaissent avec lui.",
    d_h6: "6. Nous joindre",
    d_emailLabel: "📧 Courriel\u00a0:",

    // ── Terms of Service page ──
    t_docTitle: "Conditions d'utilisation | MarV Route",
    t_title: "Conditions d'utilisation",
    t_effective: "Date d'entrée en vigueur\u00a0: 10 novembre 2026",
    t_intro: "Les présentes Conditions constituent un contrat entre vous et MarV Space, nom commercial («\u00a0assumed business name\u00a0») enregistré dans l'État de l'Idaho, aux États-Unis, par un développeur indépendant établi à Boise, en Idaho («\u00a0nous\u00a0»). Elles régissent votre utilisation de l'application mobile MarV Route et de ce site. Veuillez les lire avant de vous fier à l'application pour tout ce qui compte — vos registres de kilométrage, vos dépenses ou vos impôts.",
    t_calloutTitle: "⚠️ Des estimations, pas des conseils professionnels",
    t_calloutBody: "MarV Route mesure la distance au moyen du GPS de votre téléphone et, pour les conducteurs aux États-Unis, estime une déduction pour kilométrage à l'aide du taux standard publié par l'IRS. Dans les deux cas, il s'agit d'<strong>estimations</strong>. L'application est un outil de tenue de registres, pas un comptable — vérifiez vos trajets avant de produire quoi que ce soit et consultez un fiscaliste qualifié au sujet de votre situation.",
    t_h1: "1. Acceptation des présentes Conditions",
    t_1body: "En installant ou en utilisant MarV Route, vous acceptez les présentes Conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser l'application. Si vous utilisez MarV Route pour un employeur ou une entreprise, vous confirmez être autorisé à accepter les présentes Conditions en son nom.",
    t_h2: "2. Qui peut utiliser MarV Route",
    t_2list: "<li>Vous devez avoir au moins 18 ans, ou l'âge de la majorité là où vous vivez s'il est plus élevé.</li><li>Vous devez être titulaire d'un permis de conduire valide pour les trajets que vous enregistrez.</li><li>L'application est conçue pour la tenue de registres de kilométrage aux États-Unis et au Canada. Vous pouvez l'utiliser ailleurs, mais le taux par mille américain intégré ne s'appliquera pas à vous.</li>",
    t_h3: "3. Utilisation responsable de l'application",
    t_3intro: "Vous acceptez de ne pas\u00a0:",
    t_3list: "<li>Manipuler l'application en conduisant d'une manière qui vous distrait ou qui enfreint le code de la route local.</li><li>Falsifier des trajets, des distances ou des dépenses afin de tromper une autorité fiscale, un employeur ou un client.</li><li>Utiliser l'application à des fins illégales, ou pour suivre une autre personne à son insu.</li><li>Copier, revendre ou décompiler l'application, en faire l'ingénierie inverse ou tenter d'en extraire le code source.</li><li>Nuire au fonctionnement de l'application, ou tenter d'accéder à des comptes ou à des données qui ne sont pas les vôtres.</li>",
    t_3note: "<strong>Conduisez d'abord, touchez l'écran ensuite.</strong> Démarrez et arrêtez le suivi avant de partir ou après vous être stationné. La détection automatique existe justement pour que vous n'ayez jamais à toucher votre téléphone pendant que le véhicule roule. En Idaho, la loi n'autorise l'usage du téléphone au volant qu'en mode mains libres (Idaho Code § 49-1401A), et de nombreux autres États et provinces ont des règles semblables.",
    t_h4: "4. Suivi GPS et exactitude du kilométrage",
    t_4intro: "Les distances proviennent des capteurs de localisation de votre appareil\u00a0; leur exactitude dépend donc d'éléments que nous ne contrôlons pas\u00a0:",
    t_4list: "<li>La qualité du signal GPS — les tunnels, les stationnements intérieurs et les quartiers urbains denses la dégradent.</li><li>Votre appareil, son système d'exploitation et ses réglages d'économie d'énergie.</li><li>Les autorisations\u00a0: si l'accès à la localisation est limité, ou si le système arrête l'application en arrière-plan, des trajets peuvent être enregistrés trop courts, scindés en deux ou complètement manqués.</li><li>La détection automatique peut aussi enregistrer un trajet que vous ne vouliez pas consigner.</li>",
    t_4note: "Les distances enregistrées sont des estimations, non des mesures certifiées. C'est précisément pour cela que MarV Route vous permet de modifier n'importe quel trajet à la main, et il vous incombe de vérifier que vos registres sont exacts et complets.",
    t_h5: "5. Les rapports ne sont pas des conseils fiscaux",
    t_5body: "Pour les conducteurs aux États-Unis, MarV Route affiche une déduction estimative calculée au taux standard par mille de l'IRS. Pour les conducteurs au Canada, l'application tient un registre des kilomètres professionnels et ne calcule aucun montant de déduction, car les travailleurs indépendants y déduisent généralement la part professionnelle de leurs frais de véhicule réels. Dans les deux cas, il s'agit d'une commodité pour la tenue de vos registres, rien de plus.",
    t_5list: "<li>Nous ne sommes ni comptables, ni conseillers fiscaux, ni conseillers juridiques, et nous n'offrons pas de tels services.</li><li>L'estimation américaine suppose que vous utilisez le taux standard par mille. Dans ce cas, vous ne pouvez généralement pas déduire en plus les frais réels d'utilisation du même véhicule, comme le carburant, les réparations ou l'assurance\u00a0; les frais de stationnement et les péages liés au travail peuvent en général être déduits en sus. L'application ne vérifie pas si vous avez droit au taux standard.</li><li>Les taux officiels changent. L'application peut ne pas refléter immédiatement un nouveau taux, et un taux périmé donne une estimation périmée.</li><li>La question de savoir si un trajet est déductible, et quelle méthode vous pouvez utiliser, dépend de votre situation et des règles de votre autorité fiscale.</li><li>Les rapports exportés depuis l'application ne sont pas des documents certifiés et ne sont pas produits en votre nom auprès d'une autorité.</li>",
    t_5note: "Avant de produire quoi que ce soit, faites vérifier vos chiffres par un professionnel qualifié. Vous êtes seul responsable de ce que vous soumettez à une autorité fiscale.",
    t_h6: "6. Vos registres sont votre responsabilité",
    t_6body: "Conservez vos propres copies de tout ce dont vous avez besoin. La sauvegarde cloud est une commodité, non une garantie d'archivage\u00a0: des données peuvent être perdues en raison d'une panne d'appareil, d'une désinstallation, de la suppression d'un compte ou d'une interruption de service. Exportez en PDF ou en CSV tout ce dont vous pourriez avoir besoin plus tard.",
    t_h7: "7. Abonnement MarV Route Pro",
    t_7intro: "L'enregistrement des trajets, l'ajout manuel de trajets, la consignation du carburant et des dépenses et la consultation de vos rapports dans l'application sont gratuits. D'autres fonctions portent la mention <strong>Pro</strong> dans l'application — à l'heure actuelle, l'exportation PDF et CSV, la sauvegarde cloud, la détection automatique des trajets, les résumés de carburant, la liste de clôture mensuelle et les rappels d'entretien. Nous ne vendons pas encore d'abonnement\u00a0: d'ici là, vous pouvez activer les fonctions Pro sans frais dans l'onglet Profil. Lorsque <strong>MarV Route Pro</strong> sera lancé sous forme d'abonnement payant facultatif, les fonctions Pro l'exigeront et les conditions suivantes s'appliqueront\u00a0:",
    t_7list: "<li>Pro sera vendu sous forme d'<strong>abonnement annuel</strong>. Le prix et la devise en vigueur sont toujours affichés dans l'App Store ou Google Play avant que vous confirmiez.</li><li>Le paiement est porté à votre compte Apple ou Google au moment où vous confirmez l'achat, et non perçu par nous — nous ne voyons ni ne conservons jamais les données de votre carte.</li><li>L'abonnement <strong>se renouvelle automatiquement</strong> chaque année, sauf si vous l'annulez au moins 24 heures avant la fin de la période en cours. Le renouvellement est facturé dans les 24 heures précédant cette date.</li><li>Les prix peuvent changer pour les périodes futures. Vous en serez informé à l'avance, et une hausse de prix ne s'applique jamais à une période déjà payée.</li><li>Si un essai gratuit est offert et que vous vous abonnez avant sa fin, la partie non utilisée de l'essai est perdue.</li>",
    t_7note: "Rien n'est facturé à moins que vous ne choisissiez de vous abonner et que vous ne confirmiez l'achat dans l'App Store ou Google Play. La liste des fonctions Pro peut changer avec le temps (voir la section 9).",
    t_h8: "8. Annulation et remboursements",
    t_8intro: "Vous pouvez annuler à tout moment, et l'annulation se fait toujours dans la boutique où vous avez acheté — pas dans l'application\u00a0:",
    t_8list: "<li><strong>iPhone / iPad\u00a0:</strong> Réglages → votre nom → Abonnements → MarV Route → Annuler l'abonnement.</li><li><strong>Android\u00a0:</strong> Google Play → icône de profil → Paiements et abonnements → Abonnements → MarV Route → Annuler.</li>",
    t_8note1: "Après l'annulation, vous conservez les fonctions Pro jusqu'à la fin de la période déjà payée. Rien n'est supprimé — vos trajets, vos dépenses et vos rapports restent dans l'application, et vous pouvez continuer d'utiliser les fonctions gratuites.",
    t_8note2: "<strong>Les remboursements sont traités par Apple et Google</strong>, selon leurs propres politiques, puisque c'est à eux que le paiement est fait. Nous ne pouvons pas rembourser nous-mêmes un achat effectué dans une boutique. Si quelque chose s'est mal passé, écrivez-nous quand même — nous vous aiderons à préparer la demande et l'appuierons dans la mesure du possible.",
    t_h9: "9. Modifications de l'application",
    t_9body: "MarV Route est en développement actif. Nous pouvons ajouter, modifier ou retirer des fonctions, et nous pouvons suspendre le service pour en assurer la maintenance. Nous éviterons de retirer sans préavis ce dont vous dépendez, mais nous ne pouvons pas promettre que chaque fonction existera toujours.",
    t_h10: "10. Propriété",
    t_10body: "L'application, son nom, son logo, son design et son code nous appartiennent. Vous obtenez une licence personnelle et non transférable d'utilisation de l'application — pas sa propriété. Vos données, en revanche, sont à vous\u00a0: vos trajets, vos dépenses et vos rapports vous appartiennent, et vous pouvez les exporter ou les supprimer à tout moment.",
    t_qcNo: "<strong>Consommateurs du Québec\u00a0:</strong> la présente section ne s'applique pas à vous.",
    t_h11: "11. Absence de garantie",
    t_11body: "MarV Route est fournie «\u00a0telle quelle\u00a0» et «\u00a0selon sa disponibilité\u00a0». Dans la mesure permise par la loi, nous ne garantissons pas que l'application fonctionnera sans interruption ni erreur, ni qu'elle sera exacte dans chaque mesure, et nous n'offrons aucune garantie d'adaptation à un usage particulier.",
    t_h12: "12. Limitation de responsabilité",
    t_12body: "Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes ou consécutives découlant de votre utilisation de l'application — y compris les registres de kilométrage perdus ou inexacts, les déductions refusées, les pénalités ou intérêts imposés par une autorité fiscale, le manque à gagner ou la perte de données. Rien dans les présentes Conditions ne limite une responsabilité qui ne peut légalement être limitée.",
    t_h13: "13. Suspension et résiliation",
    t_13body: "Vous pouvez cesser d'utiliser MarV Route à tout moment en la désinstallant, et vous pouvez supprimer votre compte et vos données dans l'application sous Profil → Confidentialité et données → Supprimer le compte. Nous pouvons suspendre ou fermer un compte qui enfreint les présentes Conditions ou qui est utilisé de façon illégale. Si nous fermons votre compte, nous vous en indiquerons la raison lorsque nous y sommes autorisés.",
    t_h14: "14. Modifications des présentes Conditions",
    t_14qc: "<strong>Consommateurs du Québec\u00a0:</strong> le paragraphe ci-dessous ne s'applique pas à vous. Une modification des présentes Conditions ne s'applique à vous que de la manière permise par la Loi sur la protection du consommateur.",
    t_14body: "Nous pouvons mettre à jour les présentes Conditions à mesure que l'application évolue. La date d'entrée en vigueur indiquée en haut de la page changera, et les modifications importantes seront annoncées dans l'application ou sur la fiche de l'application dans la boutique. En continuant d'utiliser MarV Route après une mise à jour, vous acceptez les Conditions révisées.",
    t_h15: "15. Droit applicable et langue",
    t_15qc: "<strong>Consommateurs du Québec\u00a0:</strong> le paragraphe ci-dessous ne s'applique pas à vous. Les présentes Conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s'y appliquent, et vous pouvez porter un litige devant les tribunaux du Québec.",
    t_15body: "Les présentes Conditions sont régies par les lois de l'État de l'Idaho, aux États-Unis, sans égard à ses règles de conflit de lois. Les litiges seront entendus par les tribunaux d'État ou fédéraux situés dans le comté d'Ada, en Idaho, sauf si la loi du lieu où vous vivez vous donne le droit de vous adresser à un tribunal de ce lieu. Cela ne vous prive d'aucune protection que vous accorde le droit impératif de la consommation du pays où vous vivez.",
    t_15lang: "Les présentes Conditions sont offertes en français, en anglais et en ukrainien. En cas de divergence, la version anglaise prévaut, sauf si la loi du lieu où vous vivez prévoit autre chose. Si vous vivez au Québec, la version française est celle qui vous est remise en premier\u00a0; vous pouvez choisir d'utiliser la version anglaise et, en cas de divergence entre les deux, invoquer celle qui vous est la plus favorable.",
    t_h16: "16. Services de tiers et marques de commerce",
    t_16body: "MarV Route s'appuie sur des services d'autres entreprises, comme Google Firebase, les données cartographiques d'OpenStreetMap et les services de localisation de votre téléphone. Ils peuvent changer ou devenir indisponibles, et nous n'en sommes pas responsables. MarV Route n'est affiliée à aucune plateforme de transport ou de livraison, comme Uber, Lyft, DoorDash ou Instacart, et n'est ni approuvée ni commanditée par l'une d'elles. Leurs noms sont des marques de commerce de leurs propriétaires respectifs et ne sont utilisés que pour décrire les services avec lesquels l'application peut être utilisée.",
    t_h17: "17. App Store d'Apple",
    t_17intro: "Si vous avez téléchargé MarV Route depuis l'App Store d'Apple, ce qui suit s'applique également\u00a0:",
    t_17list: "<li>Les présentes Conditions sont conclues entre vous et nous, et non avec Apple. Nous seuls, et non Apple, sommes responsables de l'application et de son contenu.</li><li>Votre licence est limitée aux appareils de marque Apple que vous possédez ou contrôlez, comme le permettent les Règles d'utilisation des Conditions générales des services multimédias Apple.</li><li>Apple n'a aucune obligation de fournir des services de maintenance ou d'assistance pour l'application.</li><li>Si l'application n'est pas conforme à une garantie applicable, vous pouvez en aviser Apple, qui vous remboursera le prix d'achat, le cas échéant. Apple n'a aucune autre obligation de garantie à l'égard de l'application.</li><li>C'est à nous, et non à Apple, qu'il incombe de traiter toute réclamation concernant l'application, y compris les réclamations en responsabilité du fait du produit, celles voulant qu'elle ne respecte pas une exigence légale ou réglementaire, et celles relevant de la protection du consommateur ou de la vie privée.</li><li>Si quelqu'un prétend que l'application porte atteinte à sa propriété intellectuelle, c'est à nous, et non à Apple, qu'il incombe d'enquêter sur cette réclamation, de la contester et de la régler.</li><li>Vous confirmez que vous ne vous trouvez pas dans un pays visé par un embargo du gouvernement des États-Unis et que vous ne figurez sur aucune liste de parties interdites ou restreintes du gouvernement des États-Unis.</li><li>Vous devez respecter les conditions de tiers applicables lorsque vous utilisez l'application, par exemple celles de votre forfait de données mobiles.</li><li>Apple et ses filiales sont des tiers bénéficiaires des présentes Conditions et peuvent les faire valoir contre vous.</li>",
    t_h18: "18. Nous joindre",
    t_18body: "Questions au sujet des présentes Conditions ou d'un abonnement\u00a0:",
    t_emailLabel: "📧 Courriel\u00a0:",
    t_18note: "MarV Route est développée par MarV Space, nom commercial («\u00a0assumed business name\u00a0») enregistré dans l'État de l'Idaho, aux États-Unis, par un développeur indépendant établi à Boise, en Idaho. Nous répondons à la plupart des messages dans un délai de 2 à 3 jours ouvrables.",
  },
};

const LEGAL_LANGS = ["en", "uk", "fr"];
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

// "?lang=fr" opens a page in that language. The app links here this way so a
// document opens in the language of the app, and the "Version française" line
// under each title uses it too. The parameter is read once, then removed from
// the address bar.
function langFromUrl() {
  try {
    const params = new URLSearchParams(location.search);
    const value = (params.get("lang") || "").toLowerCase();
    if (LEGAL_LANGS.indexOf(value) === -1) return null;
    if (location.protocol.indexOf("http") === 0) {
      params.delete("lang");
      const rest = params.toString();
      history.replaceState(
        null,
        "",
        location.pathname + (rest ? "?" + rest : "") + location.hash
      );
    }
    return value;
  } catch (e) {
    return null;
  }
}

function langFromBrowser() {
  const code = (navigator.language || "").toLowerCase().slice(0, 2);
  return code === "uk" || code === "fr" ? code : null;
}

// persist = the visitor chose this language (toggle or ?lang=). A language
// that was only guessed from the browser is not saved.
function applyLegalLanguage(lang, persist) {
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

  if (persist) {
    try {
      localStorage.setItem("marv-lang", legalLang);
    } catch (e) {}
  }
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

  const urlLang = langFromUrl();
  let savedLang = null;
  try {
    savedLang = localStorage.getItem("marv-lang");
  } catch (e) {}
  applyLegalLanguage(urlLang || savedLang || langFromBrowser() || "en", Boolean(urlLang));

  // One button cycles through the languages: EN → UK → FR → EN.
  const langToggle = document.querySelector(".lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = LEGAL_LANGS[(LEGAL_LANGS.indexOf(legalLang) + 1) % LEGAL_LANGS.length];
      applyLegalLanguage(next, true);
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
