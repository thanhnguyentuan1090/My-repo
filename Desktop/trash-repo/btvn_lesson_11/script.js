function add() {
    const list = document.getElementById("title").value
    const li = document.createElement("li")
    document.getElementById("ul1").appendChild(li)
    li.innerHTML = list
}
function remove2() {
    const remove = document.getElementById("ul1")
    remove.innerHTML = ""
}
const button = document.querySelector('.random');
button.addEventListener('click', changeColor);
function changeColor() {
    const background = document.querySelector('.background');
    const arrayColor = ['red', 'yellow', 'pink', 'gray', 'black', 'orange', 'blue'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
}
function randomColor(array) {
    return Math.floor(Math.random() * array.length);
}