const messages = [
    {text: "C:\\Users\\Enigma\\arg>", speed: "instant"},
    {text: "key-1.bat", speed: 100, newLine: false},

    {text: "Pinging 77.85.11.60 with 32 bytes of data:", speed: "instant"},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Подключение зашифровано...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка кандидата...", newLine: false},

    {text: "&nbsp;"},
    {text: "NПоздравляю тебя, Искатель."},
    {text: "Ты сделал первый шаг во тьме, и теперь перед тобой открывается следующий путNь."},
    {text: "Но знай — с каждым шагом испытания будут становиться сложнNее, а ответы скрыты глубже."},

    {text: "&nbsp;"},
    {text: "Время не ждёт. Те, кто медляNт, остаются позади."},

    {text: "&nbsp;"},
    {text: "Твоя следующая пNодсказка ближе, чем кажется. Вглядись внимательнее — правда всегда на виду, но не все способны её увидеть."},
    {text: "Ответом будет сNумма чисел. Догадайся, откуда их нужно взять, и сложи их, чтобы получить ответ."},
    {text: "Запусти этот файл с параметром ответа, Nчтобы продолжить путь."},

    {text: "&nbsp;"},
    {text: "Вперёд, Искатель. ДорогNа ещё длинная."},

    {text: "&nbsp;"},
    {text: `<p>C:\\Users\\Enigma\\arg>key-1.bat --answer <span class="blink">│</span><input type="text" class="command-input"></p>`, speed: "instant", type: "code", pause: 0},
];

displayMessages(messages, $("#console-container")).then(() => {
    setBlinkInput(".command-input");

    $("#console-container").on("change", ".command-input", function() {
        const command = $(this).val().trim();
        if (command === "134") {
            let next = [
                {text: `curl -X POST 77.85.11.60 -d "answer=${command}"`, speed: "instant", pause: 2000},
                {text: `Reply from 77.85.11.60: `, speed: "instant"},
                {text: `Ты разгадал число.`, newLine: false},
                {text: `Reply from 77.85.11.60: `, speed: "instant"},
                {text: `Следующий файл part-3.bat`, newLine: false},
                {text: "&nbsp;"},
                {text: `<p>C:\\Users\\Enigma\\arg>key-1.bat --answer <span class="blink">│</span><input type="text" class="command-input"></p>`, speed: "instant", type: "code", pause: 0},
            ]
            replyCommand(command, next)
        } else {
            let error = [
                {text: `curl -X POST 77.85.11.60 -d "answer=${command}"`, speed: "instant", pause: 2000},
                {text: `Reply from 77.85.11.60: `, speed: "instant"},
                {text: `Не то число. Продолжай поиск.`, newLine: false},
                {text: "&nbsp;"},
                {text: `<p>C:\\Users\\Enigma\\arg>key-1.bat --answer <span class="blink">│</span><input type="text" class="command-input"></p>`, speed: "instant", type: "code", pause: 0},
            ]
            replyCommand(command, error)
        }
    })
})

// п - 15
// ь - 30
// e - 6
// т - 20
// о - 16
// у - 21
// ч - 25
// а - 1
// 134