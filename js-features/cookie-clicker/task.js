const cookieGame = document.getElementById('cookie');

cookieGame.onclick = function () {
    let clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent++;

    if (clickerCounter.textContent % 2 == 0)
    {
        cookieGame.width = 200
    }
    else {
        cookieGame.width = 230
    }
};  