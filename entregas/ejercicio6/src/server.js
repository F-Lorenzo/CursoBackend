const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const fs = require("fs");
const app = require("./app");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const productos = JSON.parse(fs.readFileSync("./listaProductos.json", "utf-8"));

io.on("connection", (socket) => {
  console.log("nuevo cliente conectado");
  socket.emit("productos", productos);
});

httpServer.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:PORT");
});

module.exports;
