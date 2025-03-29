# Руководство по прохождению ARG для сервера "Новая жизнь"

## 📌 Введение
Данное ARG (Alternate Reality Game) было создано в рамках события, проведенного мной, на Minecraft сервере "Новая Жизнь".
Сайт оформлен в стиле консоли Windows и выполняет частичный функционал стандартной консоли.

Основные особенности:
* Сайт имитирует интерфейс консоли Windows, позволяя пользователям взаимодействовать с командной строкой.
* В консоли можно запускать различные файлы и выполнять команды, что добавляет элемент интерактивности и погружает игроков в игровой процесс.
* Однако большая часть команд, которые обычно доступны в стандартной консоли Windows, отключены из-за ненадобности, что помогает сохранить фокус на специфике игрового мира и поддерживает баланс.

---

## 🔍 Начало
### 📜 Задание:
Игрокам отправляется ссылка, по которой они переходят и видят вступительное задание: https://enigma-arg.vercel.app/?cmd=start.bat
* Файл: `start.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=start.bat
* Задание: Игроку нужно найти следующий файл среди строк текста

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/c3863d30-12fe-44fe-a02b-3b5155f9a9f3" alt="start.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>
  
  1. Выделяем текст сообщения
  2. Копируем название файла следующего задания
  3. Запускаем его в консоли
  4. Вводим ответ: `key-1.bat`
  <img src="https://github.com/user-attachments/assets/1c039035-44b7-4a28-9706-9f9330f77a74" alt="start.bat">
</details>

---

## 🔍 Этап 1
<details>
<summary>Нажмите, чтобы раскрыть</summary>

  ### 📜 Задание:
  - Файл: `key-1.bat`  
  - Ссылка: https://enigma-arg.vercel.app/?cmd=key-1.bat  
  - Задание: Понять какие числа необходимо выбрать, найти их сумму и умножить на количество чисел  

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/83a2bd9f-1e7f-4457-bf7f-19593a851619" alt="key-1.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>
  
  1. Ищем все заглавные буквы которые выбиваются из основного текста (Из букв можно составить слово ЗАГАДКА)
  2. Находим [порядковый номер буквы](https://planetcalc.ru/3514/) в алфавите
  3. Суммируем каждый порядковый номер (9+1+4+1+5+12+1 = 33)
  4. Умножаем их на колличество букв (33 * 7 = 231)
  5. Вводим ответ: `key-1.bat 231`
  <img src="https://github.com/user-attachments/assets/bc0cfdcb-1511-464b-a27d-f060a6b43745" alt="key-1.bat">
</details>
</details>

---

## 🔍 Этап 2
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-2-hashed.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-2-hashed.bat
* Задание: Преобразовать строку с числами в знаменитую фразу Цезаря

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/3ba0c334-f31b-4cc5-9e89-2b5ff2f5e06c" alt="key-2-hashed.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. Преобразовать набор чисел в строку букв по [порядковому номеру букв](https://planetcalc.ru/3514/) (ЩЪТВОХ, ЭЛТНОХ, ЩШКОНТХ)
  2. Используя [шифр Цезаря](https://planetcalc.ru/1434/) расшифровать послание
  3. Вводим ответ: `key-2-hashed.bat ПРИШЕЛ, УВИДЕЛ, ПОБЕДИЛ`
  <img src="https://github.com/user-attachments/assets/f262028d-29ca-45fb-971e-9b6e4cfcf723" alt="key-2-hashed.bat">
</details>
</details>

---

## 🔍 Этап 3
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-3-secured.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-3-secured.bat
* Задание: Преобразовать строку с символами в ссылку

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/97cf21d9-1af0-46dc-b154-4ee971a81a5d" alt="key-3-secured.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. Используя клавиатуру сдвинуть цифры в числе вправо получив тем самым получив простые числа `12 26 32 => 23 37 43`
  2. По такому же принцепу сдивнуть все символы в тексте `swwo_axykj_iuk.ibuib/gevb => deep_sculk_oil.onion/hrbn`
  3. Либо использовать [специальный сайт](https://www.dcode.fr/keyboard-shift-cipher) который сам расшифрует это строку
  4. Вводим ответ: `key-3-secured.bat deep_sculk_oil.onion/hrbn`
  <img src="https://github.com/user-attachments/assets/9aa2a25d-adad-4216-be3f-4a80f8d9fdca" alt="key-3-secured.bat">
</details>
</details>
