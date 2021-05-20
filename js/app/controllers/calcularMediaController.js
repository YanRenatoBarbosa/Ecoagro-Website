class calcularMedia {

    constructor(modelDB){
		this.modelDB = modelDB
        this.selects;
        this.inputs;
        this.btn;
		this.dados;
    }

	calcular(){

		this._updateInfo();
		this.converter();

		this.dados = separaInputs($all('.inputPotencial'));

		let dadosAux = []; // MediaGeral, Media dos Rasos, Média dos Profundos, tipo de irrigação, cultura

		let mediaGeral = calculaMediaCrua(this.inputs);
		dadosAux.push(mediaGeral);
			
		dadosAux.push(calculaMedia(this.dados[0]));
		dadosAux.push(calculaMedia(this.dados[1]));
		dadosAux.push(this.dados[2]);
		dadosAux.push(this.dados[3]);
	
		let DataDB = new Media(...dadosAux);

		this.modelDB.addAnalise(DataDB);

		setTimeout( () => {
			console.log(DataDB);
			
			let win = window.open('./results.html')
		}, 100)
	}

    converter(){

        var cont = 0

		this.selects.forEach( select => {
			
			if (select.value == 1){
				
				let newValue = this.inputs[cont].value * 100;
				this.inputs[cont].value = newValue.toFixed(2);
				select.value = 0;
			}
			
			else if(select.value == 2){
				
				let newValue = this.inputs[cont].value * 101.325;
				this.inputs[cont].value = newValue.toFixed(2);
				select.value = 0;
			}

			else {
				select.value = 0;
			}

			cont++
		});
    }

	_updateInfo(){
		this.selects = $all('.selectMedidas');
        this.inputs = $all('.inputPotencial');
        this.btn = $('.btnCalcular');
	}
}