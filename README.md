# KidsPhotoStudio

### Використанні технології:

- HTML&CSS - зовнішній вигляд сайту.
- JavaScript - поведінка сайту, переходи між вкладками, взаємодія із Telegram-ботом та інша внутрішня логіка.
- JQuery - зручніша, ніж у JavaScript робота із DOM-елементами.
- Бібліотеки:
    - telegraf.js - робота із Telegram-ботом.
    - express - створення веб-серверу для слухання Telegram-бота.
    - body-parser - полегшує обробку даних з HTTP-запитів.
    - cors - додавання підтримки Cross-Origin Resource Sharing для забезпечення безпечної роботи із API Telegram-бота.

### Запуск проекту

- Для запуску потрібно використовувати IDE, що надає доступ для створення локального веб-серверу, такі як WebStorm або
  VS Code із встановленим плагіном Live Server.
- Для роботи Telegram-бота необхідно встановити необіхідні бібліотеки: `npm i telegraf express body-parser cors`.
- Боту необхідно написати та узяти власний Telegram ID, та встановити його у telegraf.js.

### Робота сайту:

- Перехід між вкладками здійснюється за допомогою динамічної зміни контенту JavaScript скриптами. При натиску на
  відповідну вкладку спрацьовує обробник події, який переглядає на яку вкладку було натиснути та змінює html код на
  інший.

### Користування сайтом:

- Користувач може переглядати варіанти інтер'єрів, послуг (фотосесій), їхні описи, ціни та приклади фото, а також
  вільний час студії.
- Опісля того як клієнт обрав те, чим саме зацікавлений, він може заповнити форму із власними даними, а також (за
  бажанням) із обраною послугою та коментарем.
- Заявка надходить у чат Telegram-бота Адміну сайту і він може переглянути заповнену форму.
- Адмін сайту телефонує до клієнта та обговорює деталі фотосесій та інших питань, що їх цікавлять.
- Після затвердження усіх питань, адмін створює нову подію у Google Календарі та додає до неї клієнта.
- Фотосесія зареєстрована і усі щасливі.
