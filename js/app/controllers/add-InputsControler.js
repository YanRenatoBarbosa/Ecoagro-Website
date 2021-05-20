class AddInputs {
    
    constructor(){
        
        this.form = $('#formAddInputs');
        this.view = new AddInputsView();

        this.info = { tensiosRasos: 0, tensiosProfundos: 0, tipoIrrigacao: null, cultura: null };
    }

    add(event){
        event.preventDefault();

        this._updateInfo();

        if( isNaN( parseInt((this.form.inputAddTensios).value) ) ){
         
            this.form.inputAddTensios.classList.add('wrong');
            return;
        }

        else {
            this.form.inputAddTensios.classList.remove('wrong');

            let btnAnalise = $all('.goToAnalise');
            
            btnAnalise.forEach(element => {

                element.classList.remove('invisible');
            });
            
            this.form.inputAddTensios.value = '';
        }
        
    }

    showInfo(){

        let tipoIrr = classificar('any', parseInt((this.form.selectType).value))

        alert( `\nTensiometros da Profundidade Rasa:  ${this.info.tensiosRasos}\nTensiometros Profundos:  ${this.info.tensiosProfundos}\nTipo de irrigação escolhido:  ${tipoIrr.tipoIrrigacao}` );
    }
    
    goToAnalise(){
        
        this.view.update( this.info.tensiosRasos, this.info.tensiosProfundos, parseInt((this.form.selectType).value), (this.form.SelectCultura).value );
    }

    _updateInfo(){

        let inputQtd = parseInt((this.form.inputAddTensios).value);

        if( (this.form.selectAdd).value == '0' && !isNaN(inputQtd) ){
         
            this.info.tensiosRasos += inputQtd;
        }
        
        else if ( (this.form.selectAdd).value == '1' && !isNaN(inputQtd) ) {
         
            this.info.tensiosProfundos += inputQtd;
        }
        
        this.info.tipoIrrigacao = parseInt((this.form.selectType).value);
 
        this.info.cultura = (this.form.SelectCultura).value;
    }
}