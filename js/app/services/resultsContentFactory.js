class ResultsFactory {

    constructor(){
        throw new Error('Não é possível instânciar esta classe.');
    }

    static getCards(Geral, Rasos, Profundos, tipoIrrigacao, cultura){

        return new Promise( (resolve, reject) => {
            
            analisar.getStatus(Geral, Rasos, Profundos, tipoIrrigacao, cultura).then( (statusSolo) => {

                let cards = ResultsFactory.makeCards( Geral, Rasos, Profundos, statusSolo);
    
                resolve(cards);
            });
        })
    }

    static getText(Geral, tipoIrrigacao, cultura){

        return new Promise( (resolve, reject) => {

            let resultsText = analisar.getTexto(Geral, tipoIrrigacao, cultura);
            
            resolve(resultsText);
        });
    }


    static makeCards( Geral, Rasos, Profundos, statusSolo){

        let arrAux = [Geral, Rasos, Profundos];
        let arrStatusCondicao = statusSolo[0];
        let arrtextoCondicao = statusSolo[1];

        let allCards = document.createElement('div');
        allCards.classList.add('all-cards');

        for (let i = 0; i < 3; i++) {

            allCards.innerHTML += ResultsFactory._template(i, arrAux[i], arrStatusCondicao[i], arrtextoCondicao[i]);
        }

        return allCards;
    }

    static _template(index, leitura, statusCondicao, textoCondicao){

        if (index == 0) {
            var prof = 'Geral';
        }
        else if (index == 1) {
            var prof = 'Rasos';
        }
        else {
            var prof = 'Profundos';
        }

        return `
            <div class="card">
                <div class="card-infos">
                    <span class="card-title"> ${prof} </span>
                    <span class="card-value"> ${leitura.toFixed(2)} Cbar </span>
                    <span class="card-specification"> Potêncial Mátrico Médio </span>
                </div>

                <div class="card-results ${statusCondicao}">
                    ${textoCondicao}
                </div>
            </div>
        `
    }
}