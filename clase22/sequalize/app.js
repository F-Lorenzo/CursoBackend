import express from "express";
import db from "./db/index.js";
import models from "./models/index.js";

const app = express();

app.use(express.json());

db.sync({})
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3000, () =>
      console.log("Servidor escuchando en el puerto 3000")
    );
  })
  .catch(console.error());
