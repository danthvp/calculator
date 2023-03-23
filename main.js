const btnNumberList = document.querySelectorAll('input');


function setValueToNode(){
    for(let i = 2; i < btnNumberList.length; i++){
       btnNumberList[i].addEventListener('click', ()=> {
            display.value += btnNumberList[i].value;
       });
    }
}

setValueToNode();

console.log(btnNumberList)