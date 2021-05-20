class analisar {

    constructor(){
        throw new Error('Não é possível instaciar esta classe!')
    }

    static getStatus(Geral, Rasos, Profundos, tipoIrrigacao, cultura){
        
        return new Promise( (resolve, reject) => {

            let profundidade = [Geral, Rasos, Profundos];
            
            analisar.getAnalise(tipoIrrigacao, cultura).then( (resultado) => {
                
                let statusCondicao = [];
                let textoCondicao = [];

                for (let i = 0; i < 3; i++) {
                    
                    if ( profundidade[i] >= resultado[0] && profundidade[i] <= resultado[1] ) {

                        statusCondicao.push('good');
                        textoCondicao.push('Solo em ótima condição!');
                    }
                    else if ( profundidade[i] < resultado[0] ) {
                        
                        statusCondicao.push('bad')
                        textoCondicao.push('Solo com umidade alta!');
                    }
                    else if( profundidade[i] > resultado[1] ) {
                        
                        statusCondicao.push('bad')
                        textoCondicao.push('Solo com umidade baixa!');
                    }
                }
            
                resolve([ statusCondicao, textoCondicao ]);
                
            });

        } )
    }

    static getTexto(Geral, tipoIrrigacao, cultura){

        return new Promise( (resolve, reject) => {

            analisar.getAnalise(tipoIrrigacao, cultura).then( (resultado) => {

                // resultado[0] = tensão minima
                // resultado[1] = tensão máxima
            
                if ( Geral >= resultado[0] && Geral <= resultado[1] ) {
                   resolve('Com base nos dados, nota-se que o solo já está com a umidade ideal, recomenda-se que não se irrigue a plantação!')
                }
                
                else if( Geral < resultado[0] ) {
                    resolve('Com base nos dados, nota-se que o solo está com a umidade acima do ideal, portanto recomenda-se que não se irrigue a plantação!')
                }
                
                else if( Geral > resultado[1] ) {
                    resolve('Com base nos dados, nota-se que o solo está com a umidade abaixo do ideal, portanto recomenda-se que se irrigue a plantação!')
                }
            
            });

        });
    }

    static getAnalise(tipoIrrigacao, planta){
        
        return new Promise( (resolve, reject) => {

            let baseDados;
            let baseDadosAux;
            let tensao;

            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {

                    baseDadosAux = JSON.parse(xhttp.responseText);
                    baseDados = baseDadosAux["tensão-limite"];

                    baseDados.forEach(item => {

                        if (item.group == tipoIrrigacao) {
                            
                            item.data.forEach(element => {
                                
                                if ( element.hortalicas.includes(planta) ) {
                                    
                                    tensao = element.tensao
                                    resolve(tensao)
                                }
                            });
                        }
                    });
                }
            };

            xhttp.open("GET", "./js/app/data/tensaoLimite.json", true);
            xhttp.send();

        } );
    }
}