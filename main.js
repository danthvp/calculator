const form = document.forms[0];
const display = document.getElementById('display');
const equals = document.getElementById('equals');


display.addEventListener('input', () => {
    parseInt(display.value);
    if(isNaN(display.value) == true) {
        alert("Oops! You must use numbers");
        display.value = "";
    }
})

form.addEventListener('click', (e) => {
     display.value += e.target.value;
})

equals.onclick = function parse() {
    parseInt(display.value);
    let result = eval(display.value);

    return display.value = result;
}


