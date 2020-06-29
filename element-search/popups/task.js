let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
let modalCloseTimes = document.getElementsByClassName("modal__close_times");
let btn = document.getElementsByClassName("btn");


modalMain.classList.add("modal_active");

modalCloseTimes[0].onclick = function () {
    modalMain.classList.remove("modal_active");
}
modalCloseTimes[1].onclick = function () {
    modalSuccess.classList.remove("modal_active");
}

btn[0].onclick = function () {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}
btn[1].onclick = function () {
    modalSuccess.classList.remove("modal_active");
}