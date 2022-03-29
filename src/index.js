const chatPage = "/chat/chat.html"

const buttons = document.getElementsByClassName('btn btn-default')


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        window.location.href = chatPage;
    })
}
