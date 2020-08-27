let pollTitle = document.getElementById('poll__title')
let pollAnswers = document.getElementById('poll__answers')
let buttonChoice = document.getElementsByClassName('poll__answer')

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.addEventListener('readystatechange', function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText);
        
        let title = data.data.title
        let answerChoice = data.data.answers
        console.log(data)
        pollTitle.innerText = title

        for (let i = 0; i < answerChoice.length; i++){
        
            pollAnswers.innerHTML += `
                <button class="poll__answer">
                    ${answerChoice[i]}
                </button>`
        }
        
    }
})

pollAnswers.addEventListener('click', function(e) {
    if (e.target.classList.contains('poll__answer')){
        alert('Спасибо, ваш голос засчитан!');
    }
  })

xhr.send();