let prompt = require('prompt-sync')();

function converterPara12Horas(horas, minutos) {
    let periodo = 'A.M.';
    if (horas >= 12) {
      periodo = 'P.M.';
      
      if (horas > 12) {
        horas -= 12;
      }
    }
    
    return [horas, minutos, periodo];
  }
  function exibirResultado(horas, minutos, periodo) {
    console.log(`O horário convertido é: ${horas}:${minutos} ${periodo}`);
  }



  while (true) {
    let horas = parseInt(prompt('Digite a hora (formato de 24 horas):'));
    let minutos = parseInt(prompt('Digite os minutos:'));

    if (isNaN(horas) || isNaN(minutos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
      console.log('Entrada inválida. Certifique-se de digitar valores numéricos válidos.');
      continue;
    }
    let resultado = converterPara12Horas(horas, minutos);
    exibirResultado(resultado[0], resultado[1], resultado[2]);
    let repetir = prompt('Deseja converter outro horário? (S/N)').toUpperCase();
    if (repetir !== 'S') {
      break;
    }
  }

