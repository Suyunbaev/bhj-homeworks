let items = document.getElementById('items');
let img = document.getElementById('loader');


var request = new XMLHttpRequest();

request.open('GET', 'https://netology-slow-rest.herokuapp.com');

request.addEventListener('readystatechange', function() {
    if (this.readyState == request.DONE && this.status == 200) {
        img.classList.remove('loader_active')
        let data = JSON.parse(this.responseText);
        let responseValute = data.response.Valute;
        
        for (let charCode in responseValute) {
            let item = responseValute[charCode].CharCode;
            let value = responseValute[charCode].Value;
            items.innerHTML += `
                <div class = 'container' style= 'display: Flex'>
                    <div class="item__code">
                       ${item}
                    </div>
                    <div class="item__value">
                         ${value} </b>
                    </div>
                    <div class="item__currency">
                         руб. 
                    </div> 
                </div>`; 
        }
    }
});

request.send();

