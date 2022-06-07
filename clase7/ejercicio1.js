import express from "express";

const PORT = 8080;
const app = express();

//LE FALTAN LAS COMPROBACIONES AL EJERCICIO

const frase = "Hola mundo como estan";
app.get("/api/frase", (req, res) => {
  try {
    res.status(200).json({
      ok: true,
      frase,
    });
  } catch (e) {
    res.status(400).json({
      ok: false,
      error: e.message,
    });
  }
});

app.get("/api/letras/:num", (req, res) => {
  const numero = req.params.num;
  try {
    res.status(200).json(frase[numero - 1]);
  } catch (err) {
    res.status(400).json({
      ok: false,
      error: err.message,
    });
  }
});

app.get("/api/palabras/:num", (req, res) => {
  const numero = req.params.num;
  const palabras = frase.split(" ");
  try {
    res.status(200).json(palabras[numero - 1]);
  } catch (err) {
    res.status(400).json({
      ok: false,
      error: err.message,
    });
  }
});

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
