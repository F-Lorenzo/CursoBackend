import express from "express";
import Productos from "./controllers/Productos.js";
import { router as routeProductos } from "./routes/routeProductos.js";
import { router as routeCarrito } from "./routes/routeCarrito.js";
const router = require("./routes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/public"));
app.use("/api/", router);

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  Productos.getAll().then((p) => {
    res.send(p);
  });
});

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
