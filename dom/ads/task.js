let rotatorCase = document.getElementsByClassName('rotator__case')
let arrCase = Array.from(rotatorCase);
i = 0;

function caseActive(){
    let clearAcive = i - 1;
    if (i >= arrCase.length){
        i = 0;  
    }
    rotatorCase[i].classList.add('rotator__case_active');
    i++
    rotatorCase[clearAcive].classList.remove('rotator__case_active');
}

let activeCaseInterval = setInterval(() => caseActive(), 1000);