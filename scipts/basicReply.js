function replyCommand(command, messages) {
    $("#console-container").find("p").last().append(command)
    $(".blink").remove()
    $(".command-input").remove()
    
    displayMessages(messages, $("#console-container")).then(() => {
        setBlinkInput(".command-input");
        $("#console-container .command-input")[0].scrollIntoView({behavior: "smooth"});
        $("#console-container .command-input").focus();
    })
}

function checkCommand(command, endLine) {
    command = command.replace(/\s+/g, " ").trim()
    let _command = command.toLowerCase().split(" ")[0]

    // Если команда отключена
    let foundDisabledCommand = DISABLED_COMMANDS.find(c => _command === c.toLowerCase())
    if (foundDisabledCommand) {
        let reply = [
            {text: `Доступ к команде "${command}" ограничен.`, speed: "instant", pause: 0},
            {text: `Обратитесь к администратору для получения доступа.`, speed: "instant", pause: 0},
            {text: "&nbsp;"},
            {text: endLine, speed: "instant", type: "code", pause: 0}
        ]
        replyCommand(command, reply)
        return
    }

    // Если команда не найдена
    let foundCommand = COMMANDS.find(c => _command === c.name.toLowerCase())
    if (!foundCommand) {
        let reply = [
            {text: `"${command}" не является внутренней или внешней`, speed: "instant", pause: 0},
            {text: `командой, исполняемой программой или пакетным файлом.`, speed: "instant", pause: 0},
            {text: "&nbsp;"},
            {text: endLine, speed: "instant", type: "code", pause: 0}
        ]
        replyCommand(command, reply)
        return
    }

    // Если команда найдена
    if (_command === "help") {
        let reply = [
            {text: `Информация о событии:`, speed: "instant", pause: 0},
            {text: `1. Вам не потребуются навыки программирования, чтобы выполнять задания;`, speed: "instant", pause: 0},
            {text: `2. Для участия в событии вы можете использовать сайты из интернета, и это будет необходимо;`, speed: "instant", pause: 0},
            {text: `3. Если у вас возникли трудности, попросите организатора предоставить ссылку на сайт с определенным функционалом;`, speed: "instant", pause: 0},
            {text: `4. При возникновении вопросов, не стесняйтесь обращаться к организатору в чате;`, speed: "instant", pause: 0},
            {text: `5. Ответ на вопрос нужно просто вставить в строку ввода;`, speed: "instant", pause: 0},
            {text: `6. Время неограничено, награду получит первый участник, который пройдет все задания до конца;`, speed: "instant", pause: 0},
            {text: `7. В случае ошибок или неправильных ответов, вам нужно будет повторить попытку.`, speed: "instant", pause: 0},
            {text: "&nbsp;"},
            {text: `Список доступных команд:`, speed: "instant", pause: 0},
        ]
        COMMANDS.forEach(c => {
            reply.push({text: `${c.name} ${c.desc}`, speed: "instant", type: "code", pause: 0})
        })
        reply.push(
            {text: "&nbsp;"},
            {text: endLine, speed: "instant", type: "code", pause: 0}
        )
        replyCommand(command, reply)
        return
    }

    if (_command === "cls") {
        $("#console-container").empty()
        let reply = [
            {text: endLine, speed: "instant", type: "code", pause: 0}
        ]
        replyCommand(command, reply)
        return
    }

    if (_command === "color") {
        let color = command.replace(/\s+/g, " ").trim().toLowerCase().split(" ")[1]

        // Если цвет не указан или недопустим
        if (color === undefined || color > COLORS.length - 1) {
            let reply = [
                {text: "COLOR [attr]", speed: "instant", type: "code", pause: 0},
                {text: "attr Установка атрибута цветов текста для вывода в консоли.", speed: "instant", type: "code", pause: 0},
                {text: "Доступные цвета:", speed: "instant", type: "code", pause: 0},
            ]
            COLORS.forEach((c, i) => {
                reply.push({text: `${i} = ${c.name}`, speed: "instant", type: "code", pause: 0})
            })
            reply.push(
                {text: "&nbsp;"},
                {text: endLine, speed: "instant", type: "code", pause: 0}
            )
            replyCommand(command, reply)
            return
        }

        // Если цвет указан и допустим
        color = COLORS[parseInt(color)]
        document.documentElement.style.setProperty("--console-text-color", color.color);
        localStorage.setItem("consoleTextColor", color.name);
        let reply = [
            {text: `Установлен цвет текста: ${color.name}`, speed: "instant", type: "code", pause: 0},
            {text: "&nbsp;"},
            {text: endLine, speed: "instant", type: "code", pause: 0}
        ]
        replyCommand(command, reply)
        return
    }
}