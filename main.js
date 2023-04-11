const form = document.forms[0];
const display = document.getElementById('display');
const equals = document.getElementById('equals');
const clear = document.querySelector('#clear'); 
const backspace = document.getElementById('backspace');
const backspaceI = document.querySelector('i');


window.onload = alert("This website is in development, some functionalities are not going to work yet.");



form.addEventListener('click', (e) => {
     display.value += e.target.value;
})










// -------------------------------- MATH OPERATION ------------------------


async function mathOperation() {
    let regExp = /[a-z]/g;
    let mathPromise = new Promise(function(resolve) {
        parseInt(display.value);
         if(regExp.test(display.value) == true) {
            resolve((display.value = ""), alert('Ooops! You must use numbers'));
         }
         else if(display.value == "") {
            resolve(display.value = "");
         }
         else {
            resolve(eval(display.value));
         }
    });

    display.value = await mathPromise;
}

equals.onclick = mathOperation;







// ------------------------ BUTTON BEHAVIOR ------------------------

clear.addEventListener('click', ()=> {
    display.value = "";
})







