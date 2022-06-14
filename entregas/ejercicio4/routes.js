const express = require("express");
const { Router } = express;
const fs = require("fs");
const Productos = require("./Productos.js");
const router = Router();

/* -------------------------------------------------------------------------- */
/*                                     Routes                                 */
/* -------------------------------------------------------------------------- */

class BaseDatos {
  constructor(producto) {
    this.baseDatos = producto;
  }
}

router
  .route("/productos")
  .get((req, res) => {
    try {
      res.send(Productos.getAll());
    } catch (err) {
      console.log(err);
    }
  })
  .post((req, res) => {
    try {
      const newProducto = req.body;
      Productos.save(newProducto);
    } catch (err) {
      console.log(err);
    }
  });

router
  .route("/productos/:id")
  .get((req, res) => {
    Productos.getById(req.params.id);
  })
  .put((req, res) => {
    const baseDatos = JSON.parse(
      fs.readFileSync("./listaProductos.json", "utf8")
    );
    try {
      let { modelo, marca, precio, id } = req.body;
      const producto = baseDatos.find((producto) => producto.id === id);
      producto = {
        modelo: modelo,
        marca: marca,
        precio: precio,
      };
      console.log(producto);
    } catch (err) {
      console.log(err);
    }
  })
  .delete((req, res) => {
    Productos.deletebyId(req.params.id);
  });

module.exports = router;
