//permite a solicitaçao do calculo feita pelo usuario no terminal
const prompt = require('prompt-sync')();

// solicita ao usuario que faça as operações do calculo
let numero1 = +prompt("digite um numero ")
let operador = prompt('digite a operação desejada ( +, -, *, /, %  ) ')
let numero2 = +prompt("digite outro numero ")

// variavel onde será colocado o resultado final do calculo 
let total;

//  adicionada função que verifica se o usuario colocou algo diferente de numero
if  (isNaN(numero1) || isNaN(numero2)) {
        console.log("isso não é numero  tente novamente "); 

    // se o calculo estiver correto será feita as verificações dentro do 'else' 
    }else {
        // condicionais que fazem a verificação de qual calculo será realizado 
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
        
        // mensagem que é impressa, caso o usuario cometa erro na digitação do operador
        }else {
        total  = 'ERRO de digitação encontrado tente novamente! '
    }

}
// mensagem do resultado da operação 
console.log(total);
