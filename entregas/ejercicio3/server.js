import express, { json, urlencoded } from "express";
import fs from "fs";

const PORT = 8080;
const app = express();

const baseDatos = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));

const listaProductos = baseDatos.map((productos) => productos);

app.get("/productos", (req, res) => {
  try {
    res.send(listaProductos);
  } catch (err) {
    console.log(err);
  }
});

const max = parseInt(listaProductos.length);
const randomNum = parseInt(Math.floor(Math.random() * max));
const productoRandom = listaProductos[randomNum];

app.get("/productoRandom", (req, res) => {
  try {
    res.send(productoRandom);
  } catch (err) {
    console.log(err);
  }
});

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
