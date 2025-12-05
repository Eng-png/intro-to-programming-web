let crashElement = document.getElementById("crash");
crashElement.addEventListener('click', playcrash);


function playcrash() {
    let crash = new Audio("Student Files/sounds/crash.mp3");
	crash.play();
}

let kickElement = document.getElementById("kick");
kickElement.addEventListener('click', playkick);


function playkick() {
    let kick = new Audio("Student Files/sounds/kick-bass.mp3");
	kick.play();
}

let snareElement = document.getElementById("snare");
snareElement.addEventListener('click', playsnare);


function playsnare() {
    let snare = new Audio("Student Files/sounds/snare.mp3");
	snare.play();
}

let tom1Element = document.getElementById("tom1");
tom1Element.addEventListener('click', playtom1);


function playtom1() {
    let tom1 = new Audio("Student Files/sounds/tom-1.mp3");
	tom1.play();
}

let tom2Element = document.getElementById("tom2");
tom2Element.addEventListener('click', playtom2);


function playtom2() {
    let tom2 = new Audio("Student Files/sounds/tom-2.mp3");
	tom2.play();
}