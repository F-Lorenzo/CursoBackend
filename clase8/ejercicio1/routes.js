const express = require("express");
const { Router } = express;

const router = Router();

const mascotas = [];

router("/mascotas")
  .get((req, res) => {
    res.send(mascotas);
  })
  .post((req, res) => {
    const newMascota = req.body;
    mascotas.push(newMascota);
    res.sendStatus(201);
  });

module.exports = router;
