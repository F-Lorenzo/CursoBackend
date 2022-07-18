import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router } from "./routes/routes.js";
import { HttpServer } from "http";
import { IOServer } from "socket.io";

const PORT = process.env.PORT || 8080;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

// const messages = [
//     { author: "Juan", text: "¡Hola! ¿Que tal?" },
//     { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
//     { author: "Ana", text: "¡Genial!" },
//   ];
/* ------------------------- remplazar por SQL base ------------------------- */

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);

  socket.on("new-message", (data) => {
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});

const server = httpServer.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
