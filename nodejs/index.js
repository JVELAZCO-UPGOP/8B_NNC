const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const enrutador = require("./enrutador");
const requestHandler = require("./request-handler");

global.recursos ={
    mascotas: [
        {tipo: "Perro", nombre: "Lus", dueno: "Nora"},
        {tipo: "Gato", nombre: "Miss", dueno: "Melissa"},
        {tipo: "Pez", nombre: "Susy", dueno: "Karen"},
        {tipo: "Pez", nombre: "asl", dueno: "Nora"},
        {tipo: "Perro", nombre: "Mory", dueno: "Melissa"},
    ],
};

const server = http.createServer(requestHandler);

server.listen(5000 , ()=>{
    console.log('El servidor esta escuchando peticiones en http://localhost:5000/');
});