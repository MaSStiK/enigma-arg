const messages = [
    {text: "C:\\Users\\Enigma\\arg>", speed: "instant"},
    {text: "key-2.bat", speed: 100, newLine: false},

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
    {text: `C:\\Users\\Enigma\\arg>key-2.bat --answer <span class="blink">│</span><input type="text" class="command-input">`, speed: "instant", type: "code"},
];

displayMessages(messages, $("#console-container")).then(() => {
    setBlinkInput(".command-input");

    $(".command-input").on("change", function() {
        const answer = $(this).val().trim();
            if (answer === "134") {
                window.location.href = "/key-2.html";
            } else {
                
                $(".blink").remove()
                $(".command-input").remove()

                $("#console-container").append(`
                    <p>"${answer}" не является внутренней или внешней</p>
                    <p>командой, исполняемой программой или пакетным файлом.</p>
                    C:\\Users\\Enigma\\arg><span class="blink">│</span><input type="text" class="command-input">
                `)
            }
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
});