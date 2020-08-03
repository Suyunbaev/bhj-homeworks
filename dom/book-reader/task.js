let controlFontSize = document.getElementsByClassName('book__control_font-size')
let book = document.getElementById('book')
let fontSize = document.getElementsByClassName('font-size')
let arr = Array.from(fontSize);


controlFontSize[0].addEventListener('click', function() {

    if (event.target == arr[0]){
        clearClassList()
        book.classList.add('font-size_small')
        arr[0].classList.add('font-size_active')
        event.preventDefault()
    }
    if (event.target == arr[2]){
        clearClassList()
        book.classList.add('font-size_big')
        arr[2].classList.add('font-size_active')
        event.preventDefault()
    }
    if (event.target == arr[1]){
        clearClassList()
        book.classList.add('font-size_active')
        arr[1].classList.add('font-size_active')
        event.preventDefault()
    }
}) 

function clearClassList(){
    book.classList.remove(...book.classList);
    for (let i = 0; i < arr.length; i++){
        arr[i].classList.remove('font-size_active')
    }   
}