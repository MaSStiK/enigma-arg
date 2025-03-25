import { CustomConsole } from "./CustomConsole.js"
const API_URL = window.location.hostname === "127.0.0.1" 
  ? "http://localhost:3000/api" 
  : "https://enigma-arg-api.vercel.app/api";


export function replyCommandNotAllowed(command) {
    CustomConsole.replyCommand([
        {text: `Доступ к команде "${command}" ограничен.`, speed: "instant", pause: 0},
        {text: `Обратитесь к администратору для получения доступа.`, speed: "instant", pause: 0},
        {text: "&nbsp;"}
    ])
}

export function replyCommandNotFound(command) {
    CustomConsole.replyCommand([
        {text: `"${command}" не является внутренней или внешней`, speed: "instant", pause: 0},
        {text: `командой, исполняемой программой или пакетным файлом.`, speed: "instant", pause: 0},
        {text: "&nbsp;"}
    ])
}

export function replyCommandHelp(command) {
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

    CustomConsole.COMMANDS.forEach(c => {
        reply.push({text: `<div class="help-command"><p>${c.name}</p><p>${c.desc}</p></div>`, speed: "instant", type: "code", pause: 0})
    })
    reply.push({text: "&nbsp;"})
    CustomConsole.replyCommand(reply)
}

export function replyCommandColor() {
    let reply = [
        {text: "COLOR [attr]", speed: "instant", pause: 0},
        {text: "attr Установка атрибута цветов текста для вывода в консоли.", speed: "instant", pause: 0},
        {text: "&nbsp;"},
        {text: "Каждая цифра имеет следующие значения:", speed: "instant", pause: 0}
    ]
    CustomConsole.COLORS.forEach((c, i) => {
        reply.push({text: `${i} = ${c.name}`, speed: "instant", pause: 0})
    })
    reply.push({text: "&nbsp;"})
    CustomConsole.replyCommand(reply)
}

export function replyCommandColorChanged(color) {
    CustomConsole.replyCommand([
        {text: `Установлен цвет текста: ${color}`, speed: "instant", pause: 0},
        {text: "&nbsp;"}
    ])
}

export function replyCommandStartBat() {
    CustomConsole.replyCommand([
        {text: "Pinging 77.85.11.60 with 32 bytes of data:", speed: "instant"},
    ], false)

    $.ajax({
        url: `${API_URL}/start.bat`,
        method: "GET",
        dataType: "json",
        success: reply => {
            CustomConsole.replyCommand(reply);
        },
    });
}

export function replyCommandKey(key) {
    CustomConsole.replyCommand([
        {text: "Pinging 77.85.11.60 with 32 bytes of data:", speed: "instant"},
    ], false)

    $.ajax({
        url: `${API_URL}/${key}`,
        method: "GET",
        dataType: "json",
        success: reply => {
            CustomConsole.replyCommand(reply);
        },
    });
}

export function replyCommandKeyAnswer(key, arg) {
    if (key !== "key-4-crypted.bat") {
        CustomConsole.replyCommand([
            {text: `curl -X POST 77.85.11.60 -d "file=${key}, answer=${arg}"`, speed: "instant"},
        ], false)
    } else {
        if (arg) {
            CustomConsole.replyCommand([
                {text: `curl --socks5 127.0.0.1:9050 -X GET ${arg}`, speed: "instant"},
            ], false)
        }
    }

    $.ajax({
        url: `${API_URL}/${key}?answer=${encodeURIComponent(arg)}`,
        method: "GET",
        dataType: "json",
        success: reply => {
            CustomConsole.replyCommand(reply);
        },
    });
}