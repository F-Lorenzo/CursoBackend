const express = require("express");
const { Router } = express;
const fs = require("fs");
const Productos = require("./productos.js");

const router = Router();

/* -------------------------------------------------------------------------- */
/*                                     Routes                                 */
/* -------------------------------------------------------------------------- */

const baseDatos = JSON.parse(fs.readFileSync("./listaProductos.json", "utf8"));

class BaseDatos {
  constructor(producto) {
    this.baseDatos = producto;
  }
}

router("/productos")
  .get((req, res) => {})
  .post((req, res) => {});

router("/productos/:id")
  .get((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
