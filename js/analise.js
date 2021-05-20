var Resultados = [];

var titleResultados = document.querySelector('.resultados-title');
var conteudoTop = document.querySelector('.conteudo-top');
var titleRecomendacao = document.querySelector('.recomendacao-title');
var conteudoBot = document.querySelector('.conteudo-bot');

ConnectionFactory.getConnection().then( () => {

    ConnectionFactory.getStoreInfo('TimeLine').then( (results) => {

        conteudoTop.innerHTML = '';
        conteudoBot.innerHTML = '';

        Resultados = results[results.length - 1]; 

        //modificando o conteudo:

        titleResultados.textContent = `Resultados - Cultura de ${Resultados.cultura}`

        conteudoTop.innerHTML += getDataFormatada(Resultados.data);
        
        ResultsFactory.getCards(Resultados.mediaGeral, Resultados.mediaDosRasos, Resultados.mediaDosProfundos, Resultados.tipoDeIrrigacao, Resultados.cultura)
        .then( cards => conteudoTop.appendChild(cards) );

        titleRecomendacao.textContent = `Recomendações - Irrigação por ${Resultados.tipoDeIrrigacao}`;
        
        ResultsFactory.getText(Resultados.mediaGeral, Resultados.tipoDeIrrigacao, Resultados.cultura)
        .then( texto => conteudoBot.innerHTML = `<p>${texto}</p>` )
    });

} );