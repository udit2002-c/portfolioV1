const textBox = document.getElementById("textBox");
const passwordBox = document.getElementById("passwordBox");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");

textBox.addEventListener("input", function () {
    message.textContent = `Text box input: ${textBox.value}`;
});

passwordBox.addEventListener("focus", function () {
    message.textContent = "Password field focused";
});

passwordBox.addEventListener("blur", function () {
    message.textContent = "Password field lost focus";
});

submitButton.addEventListener("click", function () {
    const textValue = textBox.value;
    const passwordValue = passwordBox.value;

    if (textValue && passwordValue) {
        message.textContent = `Form submitted! Text: ${textValue}, Password: ${passwordValue}`;
    } else {
        message.textContent = "Please fill in both fields.";
    }
});

document.body.addEventListener("keydown", function (event) {
    message.textContent = `Key pressed: ${event.key}`;
});