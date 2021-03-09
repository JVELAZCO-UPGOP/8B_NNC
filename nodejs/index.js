const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

let recursos ={
    mascotas: [
        {tipo: "Perro", nombre: "Lus", dueno: "Nora"},
        {tipo: "Gato", nombre: "Miss", dueno: "Melissa"},
        {tipo: "Pez", nombre: "Susy", dueno: "Karen"},
        {tipo: "Pez", nombre: "asl", dueno: "Nora"},
        {tipo: "Perro", nombre: "Mory", dueno: "Melissa"},
    ],
};

const callbackDelServidor= (req, res) => {
    //Obtener url desde el objeto request
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);

    //Obtener la ruta
    const ruta = urlParseada.pathname;
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "");

   // obtener metodo http
    const metodo = req.method.toLowerCase();

    //Obtener las variables del query url
    
    const {query = {}}=urlParseada;

    //Obtener los headers
    const {headers = {}}=req;
    //Obtener pay en el caso de haber uno
    const decoder= new StringDecoder('utf-8');
    let buffer = "";

    //Ir acumulando la data cuando el request reciba un payload
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    //terminar de acumunar datos y finalizarlo
    req.on('end', () => {
        buffer += decoder.end();

        if (headers["content-type"] === "application/json") {
            buffer = JSON.parse(buffer);
        }

          //3.4.3 revisar si tiene subrutas en este caso es el indice del array
        let indice = null;
        if (rutaLimpia.indexOf("/") > -1) {
            indice = rutaLimpia.split("/");
            rutaLimpia = indice[0];
            indice = indice[1];
        }

        //ordenar data
        const data ={
            ruta: rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer
        };

        console.log({data});
        //Elegir el manejador de la ruta y asignar la funcion que el enrutador tiene
        let handler;
        if(ruta && enrutador[rutaLimpia] && enrutador[rutaLimpia][metodo]){
            handler = enrutador[rutaLimpia][metodo];
        }
        else{
            handler=enrutador.noEncontrado;
        }

        //ejecutar handler
        if(typeof handler === 'function'){
            handler(data, (statusCode=200, mensaje) => {
                const respuesta = JSON.stringify(mensaje);
                res.setHeader("Content-Type", "application/json");
                res.writeHead(statusCode);

                //linea donde se esta respondiendo a la aplicacion cliente
                res.end(respuesta);
            });
        }

    });

};

const enrutador = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'esta es /ruta'});
    },
    mascotas: {
        get: (data, callback) => {
        callback(200, recursos.mascotas );
    },
    post: (data, callback) => {
        recursos.mascotas.push(data.payload);
        callback(201, data.payload);
    },
    },
    noEncontrado: (data, callback) => {
        callback(404, {mensaje: 'no encontrado' });
    },
};


const server = http.createServer(callbackDelServidor);

server.listen(5000 , ()=>{
    console.log('El servidor esta escuchando peticiones en http://localhost:5000/');
});