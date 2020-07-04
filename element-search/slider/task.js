let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let nextArrow = document.querySelector('.slider__arrow_next');
let prevArrow = document.querySelector('.slider__arrow_prev');

let classIndex = 0;
      
function activeItem() {
    sliderItems[classIndex].classList.add('slider__item_active');
}

function deactiveItem() {
    sliderItems[classIndex].classList.remove('slider__item_active');
}

prevArrow.onclick = () => {
    deactiveItem();
    if (classIndex === 0) {
        classIndex = sliderItems.length - 1;
    } else {
        classIndex --;
    }  
    activeItem();
}

nextArrow.onclick = () => {
    deactiveItem();
    if (classIndex === sliderItems.length - 1) {
        classIndex = 0;
    } else {
        classIndex ++;
    }
    activeItem();
}


