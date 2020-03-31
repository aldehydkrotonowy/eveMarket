function db_init() {
  var request = indexedDB.open("db");
  var dbShouldInit = false;
  request.onupgradeneeded = function(e) {
    var db = e.target.result;
    dbShouldInit = true;
    //store 1
    db.createObjectStore("store1", { keypath: "id", autoIncrement: true });
    //add initial datas;

    //store2
    db.createObjectStore("store2", { keypath: "id", autoIncrement: true });
  };
  request.onsuccess = function(e) {
    e.target.result.close();
    if (dbShouldInit)
      //executes only if DB init happened
      db_populate(); //close the db first and then call init
  };
}

function db_populate() {
  init_store1(init_store2); //pass init 2 as callback
}

function init_store1(callback) {
  var request = indexedDB.open("db");
  request.onsuccess = function(e) {
    var db = e.target.result;
    var tx = db.transaction("store1", "readwrite");
    var store = tx.objectStore("store1");

    //init code here

    tx.oncomplete = function(e) {
      callback(); //here call the init for second function
    };
  };
}

function init_store2() {
  var request = indexedDB.open("db");
  request.onsuccess = function(e) {
    var db = e.target.result;
    var tx = db.transaction("store2", "readwrite");
    var store = tx.objectStore("store2");

    //init code here

    tx.oncomplete = function(e) {
      //here the app can continue
    };
  };
}

///example 2
(function() {
  //indexedDB.deleteDatabase("store");
  var openDB = indexedDB.open("store", 1);
  openDB.onupgradeneeded = function() {
    var db = openDB.result;
    var store;
    if (!db.objectStoreNames.contains("example")) {
      store = db.createObjectStore("example", { keyPath: "some" });
      store.put({ some: "initData" });
    }
  };
  openDB.onsuccess = function(e) {
    var db = e.target.result;
    var rqst = db
      .transaction("example", "readonly")
      .objectStore("example")
      .get("initData");
    rqst.onsuccess = function(e) {
      console.log(rqst.result);
    };
  };
})();
