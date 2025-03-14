import { CustomConsole } from "./CustomConsole/customConsole.js";

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

    CustomConsole.replyCommand(bootingMessages, false).then(() => {
        CustomConsole.executeCommand(cmd, false)
    })
} else {
    // Если нету команды из поисковой строки, показываем поле ввода
    CustomConsole.showInput(true)
}