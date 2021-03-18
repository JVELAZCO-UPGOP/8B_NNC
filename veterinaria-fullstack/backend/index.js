const http = require('http');
const requestHandler = require("./request-handler");
const server = http.createServer(requestHandler);

server.listen(5000 , ()=>{
    console.log('El servidor esta escuchando peticiones en https://veterinaria-frontend-gamma.vercel.app');
});