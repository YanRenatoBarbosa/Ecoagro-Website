function separaInputs(inputs) {
    
    var tensiosRasos = [];
    var tensiosProf = [];
    var tipoIrrigacao = inputs[0].classList[2];
    var cultura = inputs[0].classList[3];
    
    for (let i = 0; i < inputs.length; i++) {
        
        if( inputs[i].classList[1] == 0 ){
            tensiosRasos.push(inputs[i].value);
        }

        else {
            tensiosProf.push(inputs[i].value);
        }
    }


    var resultados = [tensiosRasos, tensiosProf, tipoIrrigacao, cultura];

    return resultados;
}


function calculaMedia(arrayInputs){
    
    var cont = 0;
    arrayInputs.forEach( item => {

        cont += parseFloat(item);
    });

    var media = cont/arrayInputs.length;
    return media;
}


function calculaMediaCrua(arrayInputs){
    
    var cont = 0;
    arrayInputs.forEach(item => {
        
        cont += parseFloat(item.value);
    });

    var media = cont/arrayInputs.length;
    return media;
}

