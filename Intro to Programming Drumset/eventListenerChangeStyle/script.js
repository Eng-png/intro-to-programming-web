// 1. Get the element you want to change
let b1Button = document.getElementById('b1')

// 2. Add the event listener (what event, what function to call)
b1Button.addEventListener('click', changeB1);

// 3. Write the function that changes something
function changeB1() {
    document.getElementById("startsTransparent").style.backgroundColor = 'pink';
}



let b2Button = document.getElementById("b2")

b2Button.addEventListener('click', changeB2);

function changeB2() {
    document.getElementById("startsTransparent").style.backgroundColor = 'white';
}
