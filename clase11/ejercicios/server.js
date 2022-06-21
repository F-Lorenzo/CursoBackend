const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const mensajes = [];

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

httpServer.listen(3000, () => console.log("SERVER ON"));

io.on("connection", (socket) => {
  console.log("nuevo Usuario conectado");

  socket.emit("mensajes", mensajes);

  socket.on("mensaje", (data) => {
    mensajes.push({ socketid: socket.id, mensaje: data });
    io.sockets.emit("mensajes", mensajes);
  });
});
