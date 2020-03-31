export default class Database {
  constructor(config = {}) {
    this.dbConfig = config;
    this.shouldFetchData = false;
  }

  init = () => {
    return this.initStructure().then(db => {
      const config = this.dbConfig;
      const fetch = this.shouldFetchData;
      return this.initData(db, config, fetch);
    });
  };

  initStructure = () => {
    return new Promise((resolve, reject) => {
      const indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB;

      if (indexedDB) {
        const { dbName, version } = this.dbConfig;
        const request = indexedDB.open(dbName, version);

        request.onerror = event => {
          reject(event.error);
        };

        request.onsuccess = event => {
          const db = event.target.result;
          db.close();
          resolve(db);
        };

        request.onupgradeneeded = event => {
          console.log("[onupgradeneeded]", event.target.result);
          this.shouldFetchData = true;
          const db = event.target.result;

          this.dbConfig.stores.forEach(({ name, storeOpts, indexes }) => {
            if (!db.objectStoreNames.contains(name)) {
              console.log(`DB update phase: creating store ${name}`);

              const store = db.createObjectStore(name, storeOpts);
              indexes.forEach(({ name, property, unique }) => {
                store.createIndex(name, property, { unique });
              });
            } else {
              console.log(`DB update phase: store ${name} exists`);
            }
          });
        };
      } else {
        reject("indexedDB not supported");
      }
    });
  };

  initData = (db, dbConfig, shouldFetchData) => {
    return new Promise((resolve, reject) => {
      if (shouldFetchData) {
        const { dbName, stores } = dbConfig;
        const promises = [];

        stores.forEach(({ name, inLineKeyPath, dataFetchCallback }) => {
          promises.push(dataFetchCallback(name, inLineKeyPath));
        });

        Promise.all(promises).then(results => {
          const request = indexedDB.open(dbName);
          request.onsuccess = e => {
            const insertPromises = results.reduce((acc, result) => {
              const insertPromis = new Promise(resolve => {
                const { storeName, data, inLineKeyPath } = result;
                const db = e.target.result;

                const transaction = db.transaction(storeName, "readwrite");
                const store = transaction.objectStore(storeName);
                console.log(
                  `number of all entities for store: _${storeName}_ ids is: ${data.length}`
                );
                if (inLineKeyPath) {
                  //with keypath provided
                  data.forEach(entity => store.put(entity));
                } else {
                  data.forEach(entity => store.put(entity, entity));
                }

                transaction.oncomplete = e => {
                  console.log(`initialization of ${storeName} success`);
                  resolve(true);
                };
              });

              acc.push(insertPromis);
              return acc;
            }, []);

            Promise.all(insertPromises).then(() => resolve(db));
          };

          request.onerror = err => {
            reject(request.error);
          };
        });
      } else {
        console.log(`no fetch`);
        resolve(db);
      }
    });
  };
}
