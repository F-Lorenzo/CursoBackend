import express, { json, urlencoded } from "express";
import fs from "fs";

const PORT = 8080;
const app = express();

/* Reading the file and parsing it to JSON. */
const baseDatos = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));

/* Mapping the baseDatos array and returning the same array. */
const listaProductos = baseDatos.map((productos) => productos);

/* A function that returns the list of products. */
app.get("/productos", (req, res) => {
  try {
    res.send(listaProductos);
  } catch (err) {
    console.log(err);
  }
});

/* Getting the length of the array and then generating a random number between 0 and the length of the
array. Then it is getting the product at the random index. */
const max = parseInt(listaProductos.length);
const randomNum = parseInt(Math.floor(Math.random() * max));
const productoRandom = listaProductos[randomNum];

/* Getting the product at the random index. */
app.get("/productoRandom", (req, res) => {
  try {
    res.send(productoRandom);
  } catch (err) {
    console.log(err);
  }
});

/* Listening to the server and if there is an error it will log it. */
const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
