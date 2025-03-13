import { DISABLED_COMMANDS, COMMANDS, COLORS } from './basicCommands.js'
import {
    replyCommandNotAllowed,
    replyCommandNotFound,
    replyCommandHelp,
    replyCommandColor,
    replyCommandColorChanged
} from './basicReply.js'

export class CustomConsole {
    static DISABLED_COMMANDS = DISABLED_COMMANDS;
    static COMMANDS = COMMANDS;
    static COLORS = COLORS;

    static initInput() { // Инициализация инпута для ввода команд
        const $input = $("#command-input");
        const $blink = $("#blink");
    
        $input.on("focus input", function() {
            $blink.hide(); // Скрываем при фокусе и вводе
        });
    
        $input.on("blur", function() {
            if ($(this).val().trim() === "") {
                $blink.show(); // Показываем, если поле осталось пустым
            }
        });
    
        $input.on("change", function() {
            CustomConsole.executeCommand($(this).val())
            $(this).val("") // Очищаем поле ввода после выполнения команды
        })
    }

    static showInput(state=true) { // Отображение/скрытие поля ввода
        if (state) $("#command-input-wrapper").show()
        else $("#command-input-wrapper").hide()
    }

    static replyCommand(messages) { // Отображение сообщений в консоли
        this.showInput(false)
        displayMessages(messages, $("#console-container")).then(() => {
            this.showInput(true)
        })
    }


    static executeCommand(_command, typeCommandLine=true) {
        const originalCommand = _command.replace(/\s+/g, " ").trim()
        const splittedCommand = originalCommand.toLowerCase().split(" ")
        const command = splittedCommand[0]

        if (typeCommandLine) $("#console-container").append(`<p>C:\\Users\\Enigma\\arg>${originalCommand}</p>`)

        if (command.startsWith("key")) {
            // this.executeKeyCommand()
        }

        // Если команда отключена
        let isCommandDisabled = this.DISABLED_COMMANDS.find(c => command === c.toLowerCase())
        if (isCommandDisabled) {
            replyCommandNotAllowed(originalCommand)
            return
        }

        // Если команда не найдена
        let isCommandFounded = this.COMMANDS.find(c => command === c.name.toLowerCase())
        if (!isCommandFounded) {
            replyCommandNotFound(originalCommand)
            return
        }

        switch (command) {
            case "help":
                replyCommandHelp(originalCommand)
                break;
            case "cls":
                $("#console-container").empty()
                break;
            case "color":
                const arg = parseInt(splittedCommand[1])

                // Если цвет не указан или недопустим
                if (isNaN(arg) || arg > COLORS.length - 1 || arg < 0) { 
                    replyCommandColor()
                } else {
                    // Если цвет указан и допустим
                    const color = COLORS[parseInt(arg)]
                    document.documentElement.style.setProperty("--console-text-color", color.color);
                    localStorage.setItem("consoleTextColor", color.name);
                    replyCommandColorChanged(color.name)
                }
                break;
        
            default:
                break;
        }
    }
}