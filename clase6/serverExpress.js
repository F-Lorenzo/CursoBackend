import express from "express";

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(PORT, () => {
  console.log(`escuchando en ${PORT}`);
});

// const express = require("express");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PORT = 8080;
// const app = express();

// const server = app.listen(PORT, () => {
//   console.log(`server funcionando en port http://localhost:${PORT}`);
// });
// server.on("error", (err) => console.error(err));
