let elementActive = document.getElementsByClassName('reveal');
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', function() {
    if ((elementActive[0].getBoundingClientRect().top <=  viewportHeight) && (elementActive[0].getBoundingClientRect().top > -200)){
        elementActive[0].classList.add('reveal_active')
    }
    else if ((elementActive[1].getBoundingClientRect().top <=  viewportHeight) && (elementActive[1].getBoundingClientRect().top > -200)){
        elementActive[1].classList.add('reveal_active')
    }
    else {
        elementActive[0].classList.remove('reveal_active')
        elementActive[1].classList.remove('reveal_active')
    }
  });

