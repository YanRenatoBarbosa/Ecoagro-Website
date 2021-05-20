class inputsFactory {
    
    constructor(){
        throw new Error('Não é possível instânciar esta classe.');
    }

    static makeInputs(rasos, profundos, tipoIrrigacao, cultura){

        let wrapper = document.createElement('div');
        wrapper.innerHTML += '<h2> Informe o valor dos tensiometros </h2>';

        if ( parseInt(rasos) > 0 ) {

            for (let i = 0; i < rasos; i++) {
            
                wrapper.innerHTML += inputsFactory.template( 0, tipoIrrigacao, cultura);
            } 
        }

        if (profundos > 0) {
            
            for (let i = 0; i < profundos; i++) {
                
                wrapper.innerHTML += inputsFactory.template( 1, tipoIrrigacao, cultura);
            }
        }

        wrapper.innerHTML += `
            <div class="LineAux">
                <button type="submit" class="btnCalcular" onclick="ctrlCalcularMedia.calcular();">Calcular</button>
            </div>
        `
        
        return wrapper;
    }

    static template(profTensios, tipoIrrigacao, cultura){
    
        var items = classificar(profTensios, tipoIrrigacao); 

        var prof = items.profundidade;
        var tipo = items.tipoIrrigacao;
    
        return `
            <div class="wraper">
            
                <section class="InputWraperLeft">
                    <p class="numberTitle">Potêncial Mátrico do Tensiômetro X:</p>
            
                    <div class="data">
            
                        <input type="text" class="inputPotencial ${profTensios} ${tipo} ${cultura}" required>
                        <label>Digite aqui o valor deste Tensiômetro ${prof}</label>
                    </div>
            
                </section>
                
                <section class="InputWraperRight">
                    
                    <p>Escolha a Medida:</p>
            
                    <div class="data">
            
                        <select name="selectMedidas" class="selectMedidas ${profTensios} ${tipo}">
                            <option value="0">Cbar</option>
                            <option value="1">Bar</option>
                            <option value="2">Atm</option>
                            <option value="3">Kpa</option>
                        </select>
            
                    </div>
            
                </section>
            
            </div>
        `
    }

}