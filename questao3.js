function calcularVolume(raio){
    let volume = (4/3) * 3.14 * Math.pow(raio, 3)
    return volume
}

let raio = 3
console.log('O volume da esfera é: ', calcularVolume(raio),'cm3')
