class ConnectionFactory {

    static stores = ['UserInfo', 'TimeLine'];
    static version = 1;
    static dbName = 'Ecoagro';
    static connection = null;

    constructor() {

        throw new Error('Não é possível criar instâncias de ConnectionFactory');
    }

    static getConnection() {
        
        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(ConnectionFactory.dbName, ConnectionFactory.version);

            openRequest.onupgradeneeded = e => {

                ConnectionFactory._createStores(e.target.result);

            };

            openRequest.onsuccess = e => {

                if(!ConnectionFactory.connection) {
                    ConnectionFactory.connection = e.target.result;
                }

                resolve(ConnectionFactory.connection);

            };

            openRequest.onerror = e => {

                console.log(e.target.error);

                reject(e.target.error.name);
            };

        });
    }

    static _createStores(connection) {

        ConnectionFactory.stores.forEach(store => {

            if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);
            connection.createObjectStore(store, { autoIncrement: true });
        });

    }

    static addInfo(storeName, newInfo) {
    
        let transaction = ConnectionFactory.connection.transaction([`${storeName}`], 'readwrite');
        let store = transaction.objectStore(`${storeName}`);
        let request = store.add(newInfo);
    
        request.onsuccess = e => {
    
            ConnectionFactory.version += 1;
        };
    
        request.onerror = e => {
    
            console.log('Não foi possível realizar a operação');
        };
    }

    static getStoreInfo(storeName) {
    
        return new Promise( (resolve, reject) => {
            
            let transaction = ConnectionFactory.connection.transaction([`${storeName}`], 'readwrite');
            let store = transaction.objectStore(`${storeName}`);
            let cursor = store.openCursor();
        
            let results = [];
        
            cursor.onsuccess = e => {
        
                let atual = e.target.result;
        
                if(atual) {
        
                    let dado = atual.value;
        
                    results.push(dado);
        
                    atual.continue();
        
                } 
                
                else {
        
                    resolve(results);
                }
        
            };
        
            cursor.onerror = e => {
        
                reject(e.target.error.name);
            };

        });
        
    }
    
}
