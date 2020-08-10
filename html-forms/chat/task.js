let chatWidget = document.getElementsByClassName('chat-widget')
let chatWidgetInput = document.getElementById('chat-widget__input')
let now = new Date();
let minutes = now.getMinutes();
if (minutes < 10){
    minutes = '0' + now.getMinutes()
}
let h = 0;

chatWidget[0].addEventListener('click', function () {
    chatWidget[0].classList.add('chat-widget_active')
})

chatWidgetInput.addEventListener('keydown', event => {
    if (event.key == 'Enter') {

        let messagesPlayrs = chatWidgetInput.value
        const messages = document.querySelector( '.chat-widget__messages' );
        messages.innerHTML += `
          <div class="message_client">
            <div class="message__time">${now.getHours()}:${minutes}
            </div>
            <div class="message__text">
            ${messagesPlayrs}
            </div>
          </div>
        `;
        chatWidgetInput.value = ""
        
        
        function getRandomInt() {
        return Math.floor(Math.random() * (4 - 0)) + 0;
}
        let i = getRandomInt()
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${now.getHours()}:${minutes}
          </div>
          <div class="message__text">
          ${robotResponse[i]}
          </div>
        </div>
      `;
      messages.scrollIntoView(false)
      function nonMeseges() {
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${now.getHours()}:${minutes}
          </div>
          <div class="message__text">
          Остались еще глупые вопросы?
          </div>
        </div>
      `;}
      let timerId = setTimeout(nonMeseges, 30000);
      }
});

let robotResponse = 
["Где Ваша совесть?", 
"Добрый день, досвидания", "Мы не чего не будем Вам продавать!", 
"К сожалению, все операторы сейчас заняты, не пишите нам больше",
"Кто тут ?",
"Я не нашел список сообщений робота, поэтому добавил свой"
]
