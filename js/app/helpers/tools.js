function $(selector){

    return document.querySelector(selector);
}

function $all(selector){

    return document.querySelectorAll(selector);
}

function classificar(prof, tipoIrrigacao){

    if (prof == 0) {
        var profundidade = 'Raso'
    }

    else {
        var profundidade = 'Profundo'
    }

    if(tipoIrrigacao == 0){
        var tipoIrrig = "Aspersao";
    }
    
    else if(tipoIrrigacao == 1){
        var tipoIrrig = "Sulco";
    }
    
    else {
        var tipoIrrig = "Gotejamento";
    }

    return {profundidade: profundidade, tipoIrrigacao:tipoIrrig};
}