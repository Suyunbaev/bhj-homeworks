function getHole(index) {
    for (let i = 1; i < 10; i++) {
        let clickHole = document.getElementById(`${index}${i}`);

        clickHole.onclick = function () {
            const dead1 = document.getElementById('dead');
            const lost1 = document.getElementById('lost');

            if (clickHole.classList.contains('hole_has-mole')) {
                dead1.textContent++;
            } else {
                lost1.textContent++;
            }

            if (dead1.textContent == 10) {
                dead1.textContent = 0;
                lost1.textContent = 0;
                alert('Победа!');
            } 
            else if (lost1.textContent == 5) {
                lost1.textContent = 0;
                dead1.textContent = 0;
                alert('Вы проиграли');
            }
        }
    }
}

getHole('hole');
