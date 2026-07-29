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
  ставки IRS/CRA, галерея скріншотів, звіти, Pro, FAQ, форма підписки на запуск)
- `privacy/index.html` — політика конфіденційності, доступна за `/privacy`
- `support/index.html` — сторінка підтримки, доступна за `/support`
- `styles.css` — адаптивні стилі + темна тема (`:root[data-theme="dark"]`)
- `script.js` — переклад EN/UK, перемикач теми, анімації появи, обробка форми (головна сторінка)
- `legal.js` — переклад EN/UK і перемикач теми для сторінок `/privacy` та `/support`
- `assets/marv-route-icon.png` — іконка додатку (favicon, apple-touch-icon)
- `assets/og-image.png` — 1200×630 картинка для соцмереж (Open Graph / Twitter)
- `assets/screens/*.png` — справжні скріншоти додатку (540×1200, знято на емуляторі Pixel 6)

## Що треба зробити перед публікацією

1. ~~**Правила Firestore для форми.**~~ ✅ **Зроблено 29.07.2026** — форма працює
   на живому сайті, заявки долітають до Firestore.

   Заявки з форми пишуться у колекцію `leads` Firebase-проєкту
   `route-mint-app-2026` через REST API (без SDK). Чинні правила безпеки:

   ```
   match /leads/{leadId} {
     allow create: if request.resource.data.keys()
                        .hasOnly(['name', 'email', 'driverType', 'language', 'createdAt'])
                   && request.resource.data.name is string
                   && request.resource.data.name.size() > 0
                   && request.resource.data.name.size() <= 100
                   && request.resource.data.email is string
                   && request.resource.data.email.size() <= 200
                   && request.resource.data.email.matches('^[^@]+@[^@]+[.][^@]+$')
                   && request.resource.data.driverType is string
                   && request.resource.data.driverType.size() <= 100
                   && request.resource.data.language in ['en', 'uk']
                   && request.resource.data.createdAt is timestamp;
     allow read, update, delete: if false;
   }
   ```

   Що роблять правила: дозволяють будь-кому **лише створити** запис і лише
   з цими п'ятьма полями та обмеженнями довжини. Читати, змінювати й видаляти
   з клієнта не можна взагалі — заявки видно тільки вам у Firebase Console.

   Перевірено на живому сайті (усе, крім першого рядка, має відхилятися):

   | Спроба | Результат |
   | --- | --- |
   | Коректна заявка | ✅ 200 |
   | Зайве поле (`isAdmin`) | 🚫 403 |
   | Невалідний email | 🚫 403 |
   | Порожнє ім'я | 🚫 403 |
   | Мова поза `en`/`uk` | 🚫 403 |
   | Ім'я 500 символів | 🚫 403 |
   | Читання колекції `leads` | 🚫 403 |
   | Читання чужих `backups` | 🚫 403 |

   Ключ `FIREBASE_API_KEY` у `script.js` — це публічний клієнтський ключ Firebase.
   Він ідентифікує проєкт і **не дає доступу**: доступ визначають саме правила вище.

   Що вже вбудовано у форму:
   - валідація імені, email і галочки згоди;
   - honeypot-поле проти спам-ботів (приховане, боти його заповнюють — заявка тихо відкидається);
   - поле `language` — якою мовою людина дивилась сайт;
   - `createdAt` — час заявки;
   - стани «надсилаємо / успіх / помилка», які перекладаються при зміні мови;
   - причина збою пишеться в консоль браузера (`[MarV Route] signup failed: …`).

   **Де дивитись заявки:** Firebase Console → Firestore Database → колекція `leads`.
   Листів на пошту не буде — за потреби це окремо налаштовується через
   Firebase Extension «Trigger Email» або Cloud Function.
2. **og-image.** Перегенерувати можна скриптом — див. нижче.

## Скріншоти галереї

`assets/screens/{home,trips,reports,add-trip}.png` — реальні знімки додатку, зняті
на емуляторі Pixel 6 (1080×2400) і зменшені до 540×1200. Співвідношення сторін **9:20**;
CSS розрахований саме на нього, тож заміна на знімки з іншого телефона потребує
або того ж співвідношення, або правки `aspect-ratio` в `.screen-frame img`.

Знімки зроблено в темній темі з демо-режимом статусбару Android (`sysui_demo`), тому
на них фіксований час 9:30, повна батарея й без сторонніх іконок.

## Перегенерація картинок

og-картинка генерується через Pillow:

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
