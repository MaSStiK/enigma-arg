const DEFAULT_SPEED = 20;
const DEFAULT_PAUSE = 500;
let DO_INSTANT = false;

// Функция для печати текста
function typeMessage(message, container) {
    return new Promise((resolve) => {
        // Применяем значения по умолчанию
        const speed = message.speed === "instant" ? 0 : (message.speed || DEFAULT_SPEED);
        const newLine = message.newLine !== undefined ? message.newLine : true;

        // Если newLine == true, создаём новый блок <p>, если false — продолжаем в том же блоке
        let p = newLine ? $("<p>").appendTo(container) : container.find("p").last();

        if (message.text === "&nbsp;") {
            p.html("&nbsp;")
            resolve();
            return;
        }

        // Проверяем, если type === "code", вставляем HTML код
        if (message.type === "code") {
            p.html(p.html() + message.text);
            resolve();

        } else {
            let i = 0;

            function type() {
                if (i < message.text.length) {
                    p.append(message.text[i]);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
    
            if (speed === 0 || DO_INSTANT) {
                p.html(p.html() + message.text);
                resolve();
            } else {
                type();
            }
        }
    });
}

async function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// Основная функция для последовательного вывода сообщений
async function displayMessages(messages, container) {
    for (const message of messages) {
        await typeMessage(message, container);  
        if (message.text !== "&nbsp;" && !DO_INSTANT && message.pause !== 0) {
            await wait(message.pause !== undefined ? message.pause : DEFAULT_PAUSE); // Пауза между сообщениями
        }
    }
}

$(".skip-animation").on("click tap", () => {
    DO_INSTANT = true
    setTimeout(() => {
        DO_INSTANT = false
    }, 50)
})