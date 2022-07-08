import express from "express";
import { Router } from "express";
import { routerProductos } from "./routes/routeProductos.js";
import { routerCarrito } from "./routes/routeCarrito.js";
import { auth } from "./middlewares/auth.js";

const router = new Router();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", router);

/* ---------------------------------- rutas --------------------------------- */
app.use(auth, routerProductos);
app.use(auth, routerCarrito);

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
