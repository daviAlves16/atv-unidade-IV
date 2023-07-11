function converterSegundos(horas, minutos, segundos){
    let segundosHora = horas*60*60
    let segundosMinutos = minutos*60

    let qtdSegundos = segundosHora+segundosMinutos+segundos
    return qtdSegundos
}

console.log('A qtd de segundos informados nos valores são: ', converterSegundos(2, 50, 25),'segundos')