const calcular = document.getElementById('calcular');


function pace () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const distancia = document.getElementById('distancia').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && distancia !== '' && peso !== '' && tempo !== '') {

        const tempo_corte = tempo.split(':');
        
        const horas    = parseInt(tempo_corte[0]);
        const minutos  = parseInt(tempo_corte[1]);
        const segundos = parseInt(tempo_corte[2]);
        
        const tempo_horas   = horas + minutos/60 + segundos/3600;
        const tempo_minutos = horas*60 + minutos + segundos/60;
        const velocidade    = (distancia/(tempo_horas)).toFixed(2);
        const pace          = ((60/velocidade)).toFixed(2);
        const calorias      = (velocidade*peso*0.0175*(tempo_minutos)).toFixed(2);
    
        resultado.textContent = `Olá ${nome}! Você percorreu ${distancia}km em ${horas}h${minutos}min${segundos}s, o que significa que você tem uma velocidade média de ${pace}km/h com um consumo de ${calorias}calorias!`;

   }else { 
       resultado.textContent = 'Para calcular o Pace, preencha todos os campos;'
   }  

   
   
}
calcular.addEventListener('click', pace);