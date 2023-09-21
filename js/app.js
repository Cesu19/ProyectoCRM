
(function () {
  // Variable que va a guardar el valor.
    let DB;
  
    document.addEventListener('DOMContentLoaded', () => {
      crearDB();
    });
  // Crea la Base de Datos, le ponemos nombre y version.
    function crearDB() {
      const request = window.indexedDB.open('crm', 1);
  
      request.onerror = function (e) {
        console.log('Error:', e.target.error);
      };
  
      request.onsuccess = function (e) {
        DB = e.target.result; //Si la base de datos se crea correctamente, se asigna a esa variable DB
        console.log('DB Abierta');
      };
  
      request.onupgradeneeded = function (e) {
        const db = e.target.result;
  
        const objectStore = db.createObjectStore('clientes', {
          keyPath: 'id',
          autoIncrement: true,
        });
  
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('empresa', 'empresa', { unique: false });
  
        console.log('DB Lista y Creada');
      }
    }
  })();
  