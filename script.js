/* selecting elements */
function insert (num){

    var numero = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = numero + num;

    if (num == '+' || num == '-' || num == '*' || num == '/'){
        document.querySelector('.preview').innerHTML = numero + num;
    }
}

function clean(){
    document.querySelector('.display').innerHTML = "";
    document.querySelector('.preview').innerHTML = "0";
}

function backspace (){
    var display = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = display.substring(0, display.length -1);
}

function res(){
    var display = document.querySelector('.display').innerHTML;
    document.querySelector('.preview').innerHTML = display;

    if (display){
        var display = document.querySelector('.display').innerHTML = eval(display);
    }
}