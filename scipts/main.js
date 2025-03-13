import { CustomConsole } from "./CustomConsole/CustomConsole.js";

// Получаем текущий цвет консоли из localStorage и присваиваем его к переменной
let consoleTextColor = localStorage.getItem("consoleTextColor");
if (consoleTextColor) {
    let color = CustomConsole.COLORS.find(c => consoleTextColor.toLowerCase() === c.name.toLowerCase())
    document.documentElement.style.setProperty("--console-text-color", color.color);
}

// Устанавливаем скрипт для командной строки
CustomConsole.initInput();

// Ввод команды из поисковой строки
const urlParams = new URLSearchParams(window.location.search);
const cmd = urlParams.get("cmd");

if (cmd) {
    CustomConsole.showInput(false)
    const bootingMessages = [
        {text: "C:\\Users\\Enigma\\arg>", speed: "instant"},
        {text: cmd, speed: 100, newLine: false}
    ]

    displayMessages(bootingMessages, $("#console-container")).then(() => {
        CustomConsole.executeCommand(cmd, false)
        CustomConsole.showInput(true)
    })
} else {
    // Если нету команды из поисковой строки, показываем поле ввода
    CustomConsole.showInput(true)
}

// displayMessages(bootingMessages, $("#console-container")).then(() => {
//     console.log("search command");
    // if (cmd === "start.bat") {
    //     
    // }
    // fetch("http://localhost:3000/api/start.bat")
    // .then(res => res.json())
    // .then(text => {
    //     displayMessages(text, $("#console-container")).then(() => {
    //         setBlinkInput(".command-input");

    //         $("#console-container").on("change", ".command-input", function() {
    //             const command = $(this).val().trim();
    //             if (command === "key-1.bat") {
    //                 window.location.href = "/key-1.html";
    //             } else if (command === "start.bat") {
    //                 replyCommand(command, messages)
    //             } else {
    //                 checkCommand(
    //                     command,
    //                     `<p>C:\\Users\\Enigma\\arg><span class="blink">│</span><input type="text" class="command-input"></p>`
    //                 )
    //             }
    //         })
    //     });
    // })
// })