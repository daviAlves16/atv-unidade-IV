let prompt = require('prompt-sync')();

function validarNumeroPrimo(numero) {
    if (numero <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true; 
  }


  let num = Number(prompt(`Digite um numero: `));
  for(let i = 1; i<= num; i++){
    let verificou = validarNumeroPrimo(i)
    if(verificou){
        console.log('Numero primo: ', i)
    }
  }
