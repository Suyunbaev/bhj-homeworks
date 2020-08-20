let taskList = document.getElementById("tasks__list")
let taskInput = document.getElementById("task__input")
let butonAdd = document.getElementById("tasks__add")
let taskRemove = document.getElementsByClassName("task__remove")


function active(){
    event.preventDefault();
    let quest = taskInput.value
   if (quest == "" ){
       return 0
   }
    taskList.innerHTML += `
    <div class="task">
    <div class="task__title">
      ${quest}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>
    `;
    taskInput.value = ""
}

taskInput.addEventListener('keydown', event => {

    if (event.key == 'Enter'){
        active()
    }
})

butonAdd.addEventListener('click', function () {
    active()
    taskInput.focus()
})

taskList.addEventListener('click', (e)=>{
    let target = e.target
    if (target.classList.contains('task__remove')){
        target.parentElement.remove()
    }
})

