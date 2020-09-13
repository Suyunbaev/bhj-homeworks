let text = document.getElementById('editor')


window.onload = () => {
    text.value = localStorage.getItem('value');
};

text.oninput = () => {
    let valueText = text.value;
    localStorage.setItem('value', valueText);
}

