function converterDataString(dia, mes, ano){
    let mesExtenso = ''
    switch(mes){
        case 1: mesExtenso = 'Janeiro';
        break;
        case 2: mesExtenso = 'Fevereiro';
        break;
        case 3: mesExtenso = 'Março';
        break;
        case 4: mesExtenso = 'Abril';
        break;
        case 5: mesExtenso = 'Maio';
        break;
        case 6: mesExtenso = 'Junho';
        break;
        case 7: mesExtenso = 'Julho';
        break;
        case 8: mesExtenso = 'Agosto';
        break;
        case 9: mesExtenso = 'Setembro';
        break;
        case 10: mesExtenso = 'Outubro';
        break;
        case 11: mesExtenso = 'Novembro';
        break;
        case 12: mesExtenso = 'Dezembro';
        break;
    }

    return `${dia} de ${mesExtenso} de ${ano}`
}

let dia = 5
let mes = 1
let ano = 2000

console.log('A data por extenso é: ', converterDataString(dia, mes, ano))

