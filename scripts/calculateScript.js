const inputCalculate = document.querySelector('#inputCalculate')

window.addEventListener('load', function () {
    let buttons = document.getElementsByClassName("NumberButtons");
    add_listener_to_button(buttons)
})

function add_listener_to_button(buttons, app_path){
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

function EreseText() {
    inputCalculate.value = inputCalculate.value.slice(0, -1); 
}

function EreseAllText() {
    inputCalculate.value = inputCalculate.value.slice(0, -inputCalculate.length); 
}

function Calculyte() {
    inputCalculate.value = eval(inputCalculate.value)
}
