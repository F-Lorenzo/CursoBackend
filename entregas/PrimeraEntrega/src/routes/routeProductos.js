import Productos from "../controllers/Productos.js";
import { Router } from "express";
const routerProductos = new Router();

routerProductos.get("/productos/:id", (req, res) => {
  try {
    let { id } = req.params;
    if (id) {
      res.send(Productos.getById(id));
    }
    Productos.getAll().then((p) => {
      res.send(p);
    });
  } catch (error) {
    console.log(error);
  }
});
routerProductos.post("/productos?", (req, res) => {
  try {
    Productos.save(req.body);
  } catch (error) {
    console.log(error);
  }
});
routerProductos.put("/productos/:id?", (req, res) => {
  try {
    let id = req.params.id;
    const productData = JSON.parse(
      fs.readFileSync("../db/dbProductos", "utf-8")
    );
    const producto = productData.find((p) => p.id === id);
    producto.modify(req.body); //esto no se si esta muy bien
  } catch (error) {
    console.log(error);
  }
});
routerProductos.delete("/productos/:id?", (req, res) => {
  try {
    let id = req.params.id;
    res.send(Productos.getById(id));
  } catch (error) {
    console.log(error);
  }
});

export { routerProductos };
