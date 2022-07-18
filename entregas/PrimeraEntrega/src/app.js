import express from "express";
import { routerProductos } from "./routes/routeProductos.js";
import { routerCarrito } from "./routes/routeCarrito.js";
import { auth } from "./middlewares/auth.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------------------------- rutas --------------------------------- */
app.use("/api", routerProductos); //falta agregar el auth
app.use("/api", routerCarrito); //falta agregar el auth

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
