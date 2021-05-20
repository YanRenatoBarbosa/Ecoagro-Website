class DataBase {
    
	constructor(){
		this.connection = ConnectionFactory.getConnection();
	}

	addAnalise(newInfo){

		ConnectionFactory.addInfo('TimeLine', newInfo);

	}

}
