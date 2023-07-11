let prompt = require('prompt-sync')();

function confirmarTriangulo(lado1, lado2, lado3){
    if(lado2 + lado3 <= lado1){
        return false
    }
    if(lado2 + lado1 <= lado3){
        return false
    }
    if(lado1 + lado3 <= lado2){
        return false
    }

    return true
}

function classificarTriangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 == lado3){
        return 'Equilátero'
    }else{
        if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
            return 'Isósceles'
        }else{
            return 'Escaleno'
        }
    }

}

let lado1 = Number(prompt(`Digite o 1º lado: `));
let lado2 = Number(prompt(`Digite o 2º lado: `));
let lado3 = Number(prompt(`Digite o 3º lado: `));

let confirmar = confirmarTriangulo(lado1, lado2, lado3)

if(confirmar){
    console.log('É um triangulo!')
    console.log('O tipo de triangulo é: ', classificarTriangulo(lado1, lado2, lado3)) 
}else{
    console.log('Não é um triangulo! ')
}