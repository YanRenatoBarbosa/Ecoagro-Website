class AddInputsView {

    constructor(){

        this.target = $('.conteudo-principal');
        this.factory = inputsFactory;
    }

    update(rasos, profundos, tipoIrrigacao, cultura){

        this.target.textContent = '';
    
        let newContent = this.factory.makeInputs(rasos, profundos, tipoIrrigacao, cultura);

        this.target.appendChild(newContent);
        this.renameInputs();
    }

    renameInputs() {

        let contador = 1;
        let titles = $all('.numberTitle');
        let inputs = $all('.inputPotencial');
        let selects = $all('.selectMedidas');
    
        inputs.forEach( item => {
    
            titles[contador - 1].textContent = `Potêncial Mátrico do Tensiômetro ${contador}:`
    
            let prof = item.classList[1];
            item.setAttribute('id', `tensio${contador}-prof${prof}`);
            contador++;
        });

        for (let i in selects){

            let prof = selects[i].classList[1];
            selects[i].setAttribute('id', `tensio${parseInt(i)+1}Prof${prof}`);

            if (i == selects.length - 1) return;
        }
    }
}