function getDataFormatada(data){
    var mes;

    if (data.getMonth() == 0) {
        mes = 'Janeiro'
    }
    else if (data.getMonth() == 1) {
        mes = 'Fevereiro'
    }
    else if (data.getMonth() == 2) {
        mes = 'Março'
    }
    else if (data.getMonth() == 3) {
        mes = 'Abril'
    }
    else if (data.getMonth() == 4) {
        mes = 'Maio'
    }
    else if (data.getMonth() == 5) {
        mes = 'Junho'
    }
    else if (data.getMonth() == 6) {
        mes = 'Julho'
    }
    else if (data.getMonth() == 7) {
        mes = 'Agosto'
    }
    else if (data.getMonth() == 8) {
        mes = 'Setembro'
    }
    else if (data.getMonth() == 9) {
        mes = 'Outubro'
    }
    else if (data.getMonth() == 10) {
        mes = 'Novembro'
    }
    else {
        mes = 'Dezembro'
    }
    
    return `<h3> Dia ${data.getDate()} de ${mes} de ${data.getFullYear()} </h3>`
}