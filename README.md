# MarV Route Landing Page

Landing page for the MarV Route mobile app (Flutter): automatic trip detection, trip review,
Work Mode, built-in IRS/CRA tax estimates, fuel and expense logging, PDF/CSV reports,
maintenance reminders, cloud backup, and Pro features.

## Запуск

Відкрийте `index.html` у браузері або запустіть локальний сервер:

```powershell
python -m http.server 8000
```

Сайт буде доступний за адресою `http://localhost:8000`.

## Структура

- `index.html` — головна сторінка (hero з мокапами екранів Home/Reports, фічі, how it works,
  ставки IRS/CRA, галерея скріншотів, звіти, Pro, FAQ, форма тестерів)
- `privacy/index.html` — політика конфіденційності, доступна за `/privacy`
- `support/index.html` — сторінка підтримки, доступна за `/support`
- `styles.css` — адаптивні стилі + темна тема (`:root[data-theme="dark"]`)
- `script.js` — переклад EN/UK, перемикач теми, анімації появи, обробка форми (головна сторінка)
- `legal.js` — переклад EN/UK і перемикач теми для сторінок `/privacy` та `/support`
- `assets/marv-route-icon.png` — іконка додатку (favicon, apple-touch-icon)
- `assets/og-image.png` — 1200×630 картинка для соцмереж (Open Graph / Twitter)
- `assets/screens/*.png` — зображення галереї (зараз брендовані плейсхолдери)

## Що треба зробити перед публікацією

1. **Форма тестерів.** У `script.js` змініть `FORM_ENDPOINT` на ваш Formspree ID
   (formspree.io → New form → скопіюйте `https://formspree.io/f/xxxx`). Поки там
   `your-form-id`, форма працює в демо-режимі без надсилання. Альтернатива — Firebase,
   який уже є в додатку (можна писати ліди у Firestore).
2. **Скріншоти.** Замініть `assets/screens/{home,trips,reports,add-trip}.png` реальними
   знімками з телефона (співвідношення 360×760). Імена файлів лишіть ті самі.
3. **og-image.** Перегенерувати можна скриптом — див. нижче.

## Перегенерація картинок

og-картинка та плейсхолдери галереї генеруються через Pillow:

```powershell
python -m pip install Pillow
python scripts/gen_images.py
```

## URL-структура

Сторінки лежать у власних теках з `index.html`, тому адреси чисті, без `.html`:

| Сторінка | URL |
| --- | --- |
| Головна | `www.marvroute.com/` |
| Політика конфіденційності | `www.marvroute.com/privacy` |
| Підтримка | `www.marvroute.com/support` |

Це працює на будь-якому статичному хостингу (Netlify, Vercel, GitHub Pages, Cloudflare Pages)
і на локальному `python -m http.server` без додаткових налаштувань. Обидві адреси —
з кінцевим слешем і без нього — віддають сторінку.

Внутрішні посилання навмисно вказують на `privacy/index.html`, а не на `privacy/`.
Так сторінки відкриваються **і через сервер, і при відкритті `index.html` подвійним кліком**
(протокол `file://` не вміє сам підставляти `index.html` для теки). На живому домені
канонічна адреса `marvroute.com/privacy` при цьому працює як звичайно.

Посилання на `/privacy` потрібне для сторінок додатку в Google Play і App Store,
`/support` — обовʼязкове поле «Support URL» в App Store Connect.

## Контактна пошта

Email підтримки — `marv.labs.it@gmail.com`. Вказаний у трьох місцях:

- `privacy/index.html` — розділ 11 «Contact Us» (тема листа: *Privacy question*)
- `support/index.html` — блок «Contact us» (тема листа: *MarV Route support*)
- `index.html` — футер головної сторінки

Щоб змінити адресу, шукайте `marv.labs.it@gmail.com` по цих трьох файлах.

## Можливості сайту

- Перемикач **світла/темна тема** (зберігається в localStorage, поважає системну тему)
- Перемикач мови **EN/UK** з повним перекладом (авто-визначення української за локаллю)
- Анімація появи секцій при скролі (поважає `prefers-reduced-motion`)
- Бейджі App Store / Google Play («Coming soon»)
- FAQ-акордеон, секція галереї екранів, згода + посилання на політику у формі

## Відповідність додатку

Контент і мокапи звірено з кодом `route_mint_app` (продукт — MarV Route): вкладки
Home / Trips / Add / Reports / Profile, авто-визначення поїздок, review inbox, Work Mode,
ставки USA $0.725/mi та Canada $0.73/$0.67 за км, 6 мов, Pro-переваги з екрана Go Pro.
Мокапи відтворюють реальні екрани в темній темі додатку.
