// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hola");
// });

// const connected = server.listen(8080, () => {
//   console.log("servidor funcionando");
// });
import http from "http";

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

// Funcion que determina el saludo de inicio de pagina
function saludo() {
  let miSaludo = " ";

  hoy.toLocaleTimeString() >= "00:00:00" &&
  hoy.toLocaleTimeString() <= "06:00:00"
    ? (miSaludo = "Epa!!!, laburando de madrugada !!")
    : hoy.toLocaleTimeString() > "06:00:00" &&
      hoy.toLocaleTimeString() <= "12:59:59"
    ? (miSaludo = "Buenos Dias !!!")
    : hoy.toLocaleTimeString() >= "13:00:00" &&
      hoy.toLocaleTimeString() <= "18:59:59"
    ? (miSaludo = "Buenas Tardes !!!")
    : (miSaludo = "Buenas Noches !!!");
  console.log(miSaludo);
}

const server = http.createServer((peticion, respuesta) => {
  respuesta.end(saludo());
});

/* Listening to the port 8080. */
const connectedServer = server.listen(8080, () => {
  console.log(
    `Servidor Http escuchando en el puerto ${connectedServer.address().port}`
  );
});
