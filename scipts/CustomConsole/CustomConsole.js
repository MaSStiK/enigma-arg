import { displayMessages, scrollToBottom } from './typeMessage.js'
import { DISABLED_COMMANDS, COMMANDS, COLORS } from './basicCommands.js'
import {
    replyCommandNotAllowed,
    replyCommandNotFound,
    replyCommandHelp,
    replyCommandColor,
    replyCommandColorChanged,
    replyCommandStartBat,
    replyCommandKey,
    replyCommandKeyAnswer
} from './basicReply.js'

export class CustomConsole {
    static DISABLED_COMMANDS = DISABLED_COMMANDS;
    static COMMANDS = COMMANDS;
    static COLORS = COLORS;

    // Отображение/скрытие поля ввода
    static showInput(state=true) {
        state ? $("#command-input-wrapper").show() : $("#command-input-wrapper").hide()
    }

    // Инициализация инпута для ввода команд
    static initInput() { 
        const $input = $("#command-input");
        const $blink = $("#blink");

        // Активируем инпут при клике на консоль
        $(".console-inner").on("click tap", function() {
            if (window.getSelection().toString().length === 0) {
                $input.focus();
            }
        })
    
        $input.on("focus input", function() {
            $blink.hide(); // Скрываем при фокусе и вводе
        });
    
        $input.on("blur", function() {
            if ($(this).val().trim() === "") {
                $blink.show(); // Показываем, если поле осталось пустым
            }
        });

        function executeCommand() {
            CustomConsole.showInput(false)
            CustomConsole.executeCommand($input.val())
            $input.val("") // Очищаем поле ввода после выполнения команды
        }
    
        $(document).on('keydown', function(e) {
            if (e.keyCode == 13 || e.which == 13) {
                executeCommand();
            }
        });
    }

    // Отображение сообщений в консоли
    static replyCommand(messages, afterShowInput = true) { 
        return new Promise((resolve) => {
            this.showInput(false)
            displayMessages(messages, $("#console-container")).then(() => {
                if (afterShowInput) this.showInput(true)
                resolve()
            })
        })
    }


    // Выполнение команды из консоли
    static executeCommand(_command, typeCommandLine = true) {
        const originalCommand = _command.replace(/\s+/g, " ").trim()
        const splittedCommand = originalCommand.split(" ")
        const command = splittedCommand[0].toLowerCase()
        const arg = splittedCommand.slice(1).join(' ')
        console.log(`command: ${command}, arg: ${arg}`);
        

        // Вставляем текущую команду в консоль
        if (typeCommandLine) {
            $("#console-container").append(`<p>C:\\Users\\Enigma\\arg>${originalCommand}</p>`)
            scrollToBottom()
        }

        // Если команда отключена
        let isCommandDisabled = this.DISABLED_COMMANDS.find(c => command === c.toLowerCase())
        if (isCommandDisabled) {
            replyCommandNotAllowed(originalCommand)
            return
        }

        if (command.startsWith("key")) {
            arg ? replyCommandKeyAnswer(command, arg) : replyCommandKey(command);
            return
        }

        // Выполняем команду
        switch (command) {
            case "help":
                replyCommandHelp(originalCommand)
                break;

            case "cls":
                $("#console-container").empty()
                this.showInput(true)
                break;

            case "color":
                const argInt = parseInt(arg)

                // Если цвет не указан или недопустим
                if (isNaN(argInt) || argInt > COLORS.length - 1 || argInt < 0) { 
                    replyCommandColor()
                } else {
                    // Если цвет указан и допустим
                    const color = COLORS[parseInt(argInt)]
                    document.documentElement.style.setProperty("--console-text-color", color.color);
                    localStorage.setItem("consoleTextColor", color.name);
                    replyCommandColorChanged(color.name)
                }
                break;

            case "start.bat":
                replyCommandStartBat()
                break;
                
            default:
                // Если команда не найдена
                replyCommandNotFound(originalCommand)
                break;
        }
    }
}