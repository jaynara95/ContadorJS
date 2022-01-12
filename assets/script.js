let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    
}

function mudaCor() {
    let number = document.getElementById("currentNumber");
    if(count <= -1) {
        number.style.color = '#f02';
    } else {
        number.style.color = '#fff';
    }
    
}

function load() {
	let el = document.getElementById('counter');
    el.addEventListener("click", mudaCor, false);
}


document.addEventListener("DOMContentLoaded", load, false);