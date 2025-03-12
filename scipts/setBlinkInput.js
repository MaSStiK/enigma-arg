function setBlinkInput(inputId) {
    const $input = $(inputId);
    const $blink = $(".blink");

    $input.on("focus input", function() {
        $blink.hide(); // Скрываем при фокусе и вводе
        console.log("hide");
        
    });

    $input.on("blur", function() {
        if ($(this).val().trim() === "") {
            $blink.show(); // Показываем, если поле осталось пустым
        }
    });
}