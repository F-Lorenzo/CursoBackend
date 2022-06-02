import express from "express";

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(PORT, () => {
  console.log(`escuchando en ${PORT}`);
});
server.on("error", (err) => console.log(err));
