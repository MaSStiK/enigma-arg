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
  4. Используем файл: `key-1.bat`
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
  4. Умножаем их на количество букв (33 * 7 = 231)
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
  2. По такому же принципу сдвинуть все символы в тексте `swwo_axykj_iuk.ibuib/gevb => deep_sculk_oil.onion/hrbn`
  3. Либо использовать [специальный сайт](https://www.dcode.fr/keyboard-shift-cipher) который сам расшифрует эту строку
  4. Вводим ответ: `key-3-secured.bat deep_sculk_oil.onion/hrbn`
  <img src="https://github.com/user-attachments/assets/9aa2a25d-adad-4216-be3f-4a80f8d9fdca" alt="key-3-secured.bat">
</details>
</details>

---

## 🔍 Этап 4
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-4-crypted.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-4-crypted.bat
* Задание: Используя сайты в сети Tor отыскать финальный файл

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/dc5ea080-d12f-424f-982f-d3e36a007898" alt="key-4-crypted.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. Использовать уже имеющуюся ссылку `key-4-crypted.bat deep_sculk_oil.onion/hrbn`

<details>
  <summary>🔗 Первый сайт</summary>
  <img src="https://github.com/user-attachments/assets/9f2c9c5b-71a0-4961-8b94-335056c87e6f" alt="key-4-crypted.bat">
</details>

  2. На открывшимся сайте нажать на ссылку ведущую на специальную [группу вк](https://vk.com/enigma2347) созданную для ARG
  3. Обратить внимание на описание группы где написана подсказка "Шифр Виженера"

<details>
  <summary>🔗 Описание группы</summary>
  <img src="https://github.com/user-attachments/assets/b99f8f98-8ef3-4585-b5c9-81bc417e6325" alt="key-4-crypted.bat">
</details>

4. Скопировать зашифрованную ссылку из группы `hrmv_ecyys_uul.saquz/hvov*ggtl=qqxqcxvdk-7`

<details>
  <summary>🔗 Контент группы</summary>
  <img src="https://github.com/user-attachments/assets/8ca0dd44-0386-4e6a-847e-7c8ecb62dd95" alt="key-4-crypted.bat">
</details>

  5. Используя сайт с [шифром Виженера](https://planetcalc.ru/2468/) преобразовать ссылку в ее первоначальный вид
  6. Ввести новую ссылку в консоль `key-4-crypted.bat deep_sculk_oil.onion/hrbn*auth=directive-7n`

<details>
  <summary>🔗 Второй сайт</summary>
  <img src="https://github.com/user-attachments/assets/95781d6a-73e4-4d43-8e52-0bdd50e6fe97" alt="key-4-crypted.bat">
</details>

  7. Открыть картинку и найти еле заметную фразу:
     - **7.1.** Скачать картинку и открыть ее
     - **7.2.** Внимательно рассмотреть картинку и найти на ней название файла `key-5-XX-XX-XX-XX.bat`
     - **7.3.** Повысить контрастность, чтобы сделать текст более заметным, если текст не видно
  8. На сервере "Новая жизнь" добраться до координат указанных на сайте `X-95.5130, Z488.4790`

<details>
  <summary>🗺️ Локация с сервера</summary>
  <img src="https://github.com/user-attachments/assets/62bfbcaf-82ad-4201-833d-b154df1220c8" alt="key-4-crypted.bat">
</details>

  8. Заменить XX в названии файла на цифры с сервера
  9. Используем файл: `key-5-25-14-99-37.bat`
</details>
</details>

---

## 🔍 Этап 5
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-5-25-14-99-37.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-5-25-14-99-37.bat
* Задание: Добраться до финальной загадки на сервере и отыскать приз

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/b7ea53b6-139a-420b-b28e-df06a0277473" alt="key-5-25-14-99-37.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. На сервере "Новая жизнь" добраться до координат указанных в сообщении `X37 Z618`

<details>
  <summary>🗺️ Локация с сервера</summary>
  <img src="https://github.com/user-attachments/assets/71b31af0-e9ab-4b65-9e08-c29dcd987cfe" alt="key-5-25-14-99-37.bat">
</details>

  3. Берем за 0 закрытый люк и за 1 открытый люк
  4. Используя сайт для преобразования [бинарного кода в текст](https://decodeit.ru/binary/) получаем координаты приза
</details>
</details>

---

## 🔍 Приз
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
<details>
  <summary>Шалкер с наградой</summary>
  <img src="https://github.com/user-attachments/assets/1ef511b2-f5c2-4a5e-8810-14f55d5775f6" alt="reward">
</details>

<details>
  <summary>Книжка с поздравлениями</summary>
  <img src="https://github.com/user-attachments/assets/f1d2a744-d3f4-4511-8d62-01deffaa8c17" alt="reward">
  <img src="https://github.com/user-attachments/assets/96663cd7-2f8a-46a0-aef0-304261ec8f16" alt="reward">
  <img src="https://github.com/user-attachments/assets/ada545e0-2380-4a27-9a89-47aa9326156a" alt="reward">
  <img src="https://github.com/user-attachments/assets/43e4fc6d-7179-4707-ab7b-547fc97d54eb" alt="reward">
</details>
</details>
