let tabСontent = document.getElementsByClassName('tab__content')
let tab = document.getElementsByClassName('tab')
let tabNavigation = document.getElementsByClassName('tab__navigation')
let tabClear = document.getElementsByClassName('tab_active')
let tabСontentClear = document.getElementsByClassName('tab__content_active')



tabNavigation[0].addEventListener('click', function() {
    
    if (event.target == tab[0]) {
        clear()
        tab[0].classList.add('tab_active')
        tabСontent[0].classList.add('tab__content_active')
    }
    else if (event.target == tab[1]) {
        clear()
        tab[1].classList.add('tab_active')
        tabСontent[1].classList.add('tab__content_active')
    }
    else if (event.target == tab[2]) {
        clear()
        tab[2].classList.add('tab_active')
        tabСontent[2].classList.add('tab__content_active')
    }
})
let clear =  function () {
    tabClear[0].classList.remove('tab_active');
    tabСontentClear[0].classList.remove('tab__content_active')
}