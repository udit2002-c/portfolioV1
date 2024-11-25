
const contentDiv = document.getElementById("content");
const changeButton = document.getElementById("changeButton");


function changeContent() {
    contentDiv.textContent = "The content has been changed!";
}


changeButton.addEventListener("click", changeContent);