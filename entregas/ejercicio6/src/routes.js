const express = require("express");
const { Router } = express;
const router = Router();
const fs = require("fs");
const Productos = require("./productos.js");

/* -------------------------------------------------------------------------- */
/*                                     Routes                                 */
/* -------------------------------------------------------------------------- */

router.get("/", (req, res) => {
  try {
    const productos = Productos.getAll().then((data) => {
      res.send(data);
    });
    res.render("index", { productos });
  } catch (err) {
    console.log(err);
  }
});

router.post("/productos", (req, res) => {
  try {
    const newProducto = Productos.Save(req.body);
    res.redirect("/").render("listaProductos", { newProducto });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
