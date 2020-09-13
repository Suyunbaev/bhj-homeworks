let modalMain = document.getElementById("subscribe-modal");
let modalCloseTimes = document.getElementsByClassName("modal__close_times");

if (document.cookie === '') {
modalMain.classList.add("modal_active");
}
modalCloseTimes[0].onclick = function () {
    modalMain.classList.remove("modal_active");
    document.cookie = 'notification=received'; 
    console.log(document.cookie)
}


