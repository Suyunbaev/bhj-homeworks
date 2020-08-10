
let interestCheck = document.querySelectorAll('.interest__check');

interestCheck.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
        let clickedBox = event.currentTarget;
        let parent = clickedBox.closest('.interest');
        let childBoxes = parent.querySelectorAll('.interest__check');
        childBoxes.forEach((box) => box.checked = clickedBox.checked);
    });
});
