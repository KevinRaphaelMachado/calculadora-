const prompt = require('prompt-sync')();

let numero1 = +prompt("digite um numero ")
let numero2 = +prompt("digite outro numero ")
let operador = prompt('digite a operação desejada ( +, -, *, /, %  ) ')
let total;

if(operador === "+") {
    total = numero1 + numero2;

}else if(operador === "-") {
    total = numero1 - numero2;

}else if(operador === "*") {
    total = numero1 * numero2;

}else if(operador === "/") {
        numero2 !== 0 
        total = numero1 / numero2

}else if(operador === "%") {
    total = (numero1 * numero2) / 100;

}else {
    total  = 'erro tente novamente'
}




console.log(total);
