const inputCalculate = document.querySelector('#inputCalculate')

window.addEventListener('load', function () {
    let buttons = document.getElementsByClassName("NumberButtons");
    addListenerToButton(buttons)
})

function addListenerToButton(buttons, app_path){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (){
            inputButton(buttons[i].innerHTML)
        })
    }
}

function inputButton(text) {
    if ((inputCalculate.value == 0 && text != "." && inputCalculate.value[1] != ".")) {
        inputCalculate.value = String(text)
    } else if (!(text == ".") || !inputCalculate.value.includes(".")){
        inputCalculate.value += String(text)  
    }
}

function ereseText() {
    inputCalculate.value = inputCalculate.value.slice(0, -1); 
}

function ereseAllText() {
    inputCalculate.value = inputCalculate.value.slice(0, -inputCalculate.length); 
}

function calculate() {
    inputCalculate.value = eval(inputCalculate.value)
}
