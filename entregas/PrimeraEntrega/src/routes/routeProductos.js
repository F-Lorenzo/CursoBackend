import Productos from "../controllers/Productos.js";
import { Router } from "express";
const routerProductos = new Router();

routerProductos.get("/productos/:id", (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      res.send(Productos.getById(id));
    }
    res.send(Productos.getAll());
  } catch (error) {
    console.log(error);
  }
});
routerProductos.post("/productos?", (req, res) => {
  try {
    let user = req.query.user;
    const userData = JSON.parse(
      fs.readFileSync("../db/dbUsuarios.js", "utf-8")
    );
    const usuario = userData.find((usuario) => usuario.name === user);
    if (usuario.authorized == true) {
      Productos.save(req.body);
    } else {
      res.send("error : -1, descripcion: ruta 'x' método 'y' no autorizada ");
    }
  } catch (error) {
    console.log(error);
  }
});
routerProductos.put("/productos/:id?", (req, res) => {
  try {
    let id = req.params.id;
    let user = req.query.user;
    const userData = JSON.parse(
      fs.readFileSync("../db/dbUsuarios.js", "utf-8")
    );
    const usuario = userData.find((usuario) => usuario.name === user);
    if (usuario.authorized == true) {
      const productData = JSON.parse(
        fs.readFileSync("../db/dbProductos", "utf-8")
      );
      const producto = productData.find((p) => p.id === id);
      producto.modify(req.body); //esto no se si esta muy bien
    } else {
      res.send("error : -1, descripcion: ruta 'x' método 'y' no autorizada ");
    }
  } catch (error) {
    console.log(error);
  }
});
routerProductos.delete("/productos/:id?", (req, res) => {
  try {
    let user = req.query.user;
    let id = req.params.id;
    const userData = JSON.parse(
      fs.readFileSync("../db/dbUsuarios.js", "utf-8")
    );
    const usuario = userData.find((usuario) => usuario.name === user);
    if (usuario.authorized == true) {
      res.send(Productos.getById(id));
    }
  } catch (error) {
    console.log(error);
  }
});

export { routerProductos };
