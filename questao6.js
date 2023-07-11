let um = 0; 
let dois = 0;
let tres = 0;
let quatro = 0;
let cinco = 0;
let seis = 0; 

function sortearNumero() {
    return Math.floor(Math.random() * 6) + 1;
  }

function calcularProbabilidade(){
    for(let i = 0; i < 1000000; i++){
        let number = sortearNumero()
        if(number == 1){
            um += 1
        }
        if(number == 2){
            dois += 1
        }
        if(number == 3){
            tres += 1
        }
        if(number == 4){
            quatro += 1
        }
        if(number == 5){
            cinco += 1
        }
        if(number == 6){
            seis += 1
        }
    }
}

calcularProbabilidade()
console.log('O numero 1 apareceu: ', um, 'vezes')
console.log('O numero 2 apareceu: ', dois, 'vezes')
console.log('O numero 3 apareceu: ', tres, 'vezes')
console.log('O numero 4 apareceu: ', quatro, 'vezes')
console.log('O numero 5 apareceu: ', cinco, 'vezes')
console.log('O numero 6 apareceu: ', seis, 'vezes')