# Руководство по ARG для сервера "Новая жизнь"

## 📚 Оглавление
- [📌 Введение](#введение)
- [📖 Правила](#📖-правила-проведения-и-команды)
- [🚀 Начало](#🚀-начало)
- [🔑 Этап 1](#🔑-этап-1)
- [🧩 Этап 2](#🧩-этап-2)
- [🔢 Этап 3](#🔢-этап-3)
- [🕵️‍♂️ Этап 4](#🕵️‍♂️-этап-4)
- [🎯 Этап 5](#🎯-этап-5)
- [🏆 Финальная награда](#🏆-финальная-награда)
- [🧰 Дополнительные фичи](#🧰-дополнительные-фичи)

## 📌 Введение
Данное ARG (Alternate Reality Game) было создано в рамках события, проведенного мной, на Minecraft сервере "Новая Жизнь".
Сайт оформлен в стиле консоли Windows и выполняет частичный функционал стандартной консоли.

Основные особенности:
* Сайт имитирует интерфейс консоли Windows, позволяя пользователям взаимодействовать с командной строкой.
* В консоли можно запускать различные файлы и выполнять команды, что добавляет элемент интерактивности и погружает игроков в игровой процесс.
* Однако большая часть команд, которые обычно доступны в стандартной консоли Windows, отключены из-за ненадобности, что помогает сохранить фокус на специфике заданий и сюжета.


## 📖 Правила проведения и команды
Список правил и дополнительных команд, которые пользователь может вводить в консоль, доступны по команде `help`. Эта команда выводит справочную информацию и список доступных опций.
<details>
  <summary>🖥️ Содержимое команды</summary>
  <img src="https://github.com/user-attachments/assets/d56031f8-0221-4d76-a1a3-fea3f532705e" alt="start.bat">
</details>

## 🚀 Начало
Игрокам отправляется ссылка, по которой они переходят и видят вступительное задание  
`https://enigma-arg.vercel.app/?cmd=start.bat`

### 📜 Задание:
* Файл: `start.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=start.bat
* Цель: Найти следующий файл среди строк текста

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/c3863d30-12fe-44fe-a02b-3b5155f9a9f3" alt="start.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>
  
  1. Выделяем текст сообщения
  2. Копируем название файла следующего задания
  3. Используем его: `key-1.bat`
  <img src="https://github.com/user-attachments/assets/1c039035-44b7-4a28-9706-9f9330f77a74" alt="start.bat">
</details>

---

## 🔑 Этап 1
<details>
<summary>Нажмите, чтобы раскрыть</summary>

  ### 📜 Задание:
  - Файл: `key-1.bat`  
  - Ссылка: https://enigma-arg.vercel.app/?cmd=key-1.bat  
  - Цель: Понять какие числа необходимо выбрать, найти их сумму и умножить на количество чисел  

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

## 🧩 Этап 2
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-2-hashed.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-2-hashed.bat
* Цель: Преобразовать строку с числами в знаменитую фразу Цезаря

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/3ba0c334-f31b-4cc5-9e89-2b5ff2f5e06c" alt="key-2-hashed.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. Преобразовываем набор чисел в строку букв по [порядковому номеру букв](https://planetcalc.ru/3514/) (ЩЪТВОХ, ЭЛТНОХ, ЩШКОНТХ)
  2. Используя [шифр Цезаря](https://planetcalc.ru/1434/) расшифровываем послание
  3. Вводим ответ: `key-2-hashed.bat ПРИШЕЛ, УВИДЕЛ, ПОБЕДИЛ`
  <img src="https://github.com/user-attachments/assets/f262028d-29ca-45fb-971e-9b6e4cfcf723" alt="key-2-hashed.bat">
</details>
</details>

---

## 🔢 Этап 3
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-3-secured.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-3-secured.bat
* Цель: Преобразовать строку с символами в ссылку

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/ac5c6263-3377-4e0b-8320-065b15d67767" alt="key-3-secured.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. Используя клавиатуру сдвигаем цифры в числе вправо тем самым получив простые числа `12 26 32 => 23 37 43`
  2. По такому же принципу сдвигаем все символы в тексте `swwo_axykj_iuk.ibuib/gevb => deep_sculk_oil.onion/hrbn`
  3. Либо используем [специальный сайт](https://www.dcode.fr/keyboard-shift-cipher) который сам расшифрует эту строку
  4. Вводим ответ: `key-3-secured.bat deep_sculk_oil.onion/hrbn`
  <img src="https://github.com/user-attachments/assets/9aa2a25d-adad-4216-be3f-4a80f8d9fdca" alt="key-3-secured.bat">
</details>
</details>

---

## 🕵️‍♂️ Этап 4
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-4-crypted.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-4-crypted.bat
* Цель: Используя сайты в сети Tor отыскать финальный файл

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/dc5ea080-d12f-424f-982f-d3e36a007898" alt="key-4-crypted.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. Используем уже имеющуюся ссылку `key-4-crypted.bat deep_sculk_oil.onion/hrbn`

<details>
  <summary>🔗 Первый сайт</summary>
  <img src="https://github.com/user-attachments/assets/9f2c9c5b-71a0-4961-8b94-335056c87e6f" alt="key-4-crypted.bat">
</details>

  2. На открывшимся сайте нажимаем на ссылку ведущую на специальную [группу вк](https://vk.com/enigma2347) созданную для ARG
  3. Обращаем внимание на описание группы где написана подсказка "Шифр Виженера", так же там указан ключ для расшифровки

<details>
  <summary>🔗 Описание группы</summary>
  <img src="https://github.com/user-attachments/assets/b99f8f98-8ef3-4585-b5c9-81bc417e6325" alt="key-4-crypted.bat">
</details>

4. Копируем зашифрованную ссылку из группы `hrmv_ecyys_uul.saquz/hvov*ggtl=qqxqcxvdk-7`

<details>
  <summary>🔗 Контент группы</summary>
  <img src="https://github.com/user-attachments/assets/8ca0dd44-0386-4e6a-847e-7c8ecb62dd95" alt="key-4-crypted.bat">
</details>

  5. Используя сайт с [шифром Виженера](https://planetcalc.ru/2468/) преобразовываем ссылку в ее первоначальный вид
  6. Вводим новую ссылку в консоль `key-4-crypted.bat deep_sculk_oil.onion/hrbn*auth=directive-7n`

<details>
  <summary>🔗 Второй сайт</summary>
  <img src="https://github.com/user-attachments/assets/95781d6a-73e4-4d43-8e52-0bdd50e6fe97" alt="key-4-crypted.bat">
</details>

  7. Открываем картинку и находим на ней название файла:
     - **7.1.** Скачиваем картинку и открываем ее
     - **7.2.** Внимательно рассматриваем картинку и находим на ней название файла `key-5-XX-XX-XX-XX.bat`
     - **7.3.** Повышаем контрастность, чтобы сделать текст более заметным, если текст не видно
  8. На сервере "Новая жизнь" добираемся до координат указанных на сайте `X-95.5130, Z488.4790`

<details>
  <summary>🗺️ Локация с сервера</summary>
  <img src="https://github.com/user-attachments/assets/62bfbcaf-82ad-4201-833d-b154df1220c8" alt="key-4-crypted.bat">
</details>

  8. Заменяем XX в названии файла на цифры указанные на сервере
  9. Используем файл: `key-5-25-14-99-37.bat`
</details>
</details>

---

## 🎯 Этап 5
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
  ### 📜 Задание:
* Файл: `key-5-25-14-99-37.bat`
* Ссылка: https://enigma-arg.vercel.app/?cmd=key-5-25-14-99-37.bat
* Цель: Добраться до финальной загадки и отыскать приз

<details>
  <summary>🖥️ Содержимое файла</summary>
  <img src="https://github.com/user-attachments/assets/b7ea53b6-139a-420b-b28e-df06a0277473" alt="key-5-25-14-99-37.bat">
</details>

<details>
  <summary>💡 Спойлер: Как решить</summary>

  1. На сервере "Новая жизнь" добираемся до координат указанных в сообщении `X37 Z618`

<details>
  <summary>🗺️ Локация с сервера</summary>
  <img src="https://github.com/user-attachments/assets/71b31af0-e9ab-4b65-9e08-c29dcd987cfe" alt="key-5-25-14-99-37.bat">
</details>

  2. Берем за 0 закрытый люк и за 1 открытый люк
  3. Используем сайт для преобразования [бинарного кода в текст](https://decodeit.ru/binary/) и получаем координаты приза
  4. Добираемся до месторасположения награды
</details>
</details>

---

## 🏆 Финальная награда
<details>
  <summary>Нажмите, чтобы раскрыть</summary>
  
<details>
  <summary>📦 Шалкер с наградой</summary>
  <img src="https://github.com/user-attachments/assets/1ef511b2-f5c2-4a5e-8810-14f55d5775f6" alt="reward">
</details>

<details>
  <summary>📜 Книжка с поздравлениями</summary>
  <img src="https://github.com/user-attachments/assets/cb286990-3a2d-484e-a132-50902900af9c" alt="reward">
  <img src="https://github.com/user-attachments/assets/9fd73f86-649d-4c6a-ae1f-1c42788fbc83" alt="reward">
  <img src="https://github.com/user-attachments/assets/df5985a0-9a93-40fe-b9a1-50838b9cfb5e" alt="reward">
  <img src="https://github.com/user-attachments/assets/f428d7d2-80f9-4af5-bdce-5acbf61ad82f" alt="reward">
</details>
</details>


---

## 🧰 Дополнительные фичи

