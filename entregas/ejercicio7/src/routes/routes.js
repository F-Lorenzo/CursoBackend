import Productos from "../controllers/Productos.js";
import { Router } from "express";

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const all = await Productos.getAll().then(res.render("index", { all }));
  } catch (err) {
    console.log(err);
  }
});

router.post("/productos", async (req, res) => {
  try {
    const newProds = await Productos.save(req.body).then(
      res.redirect("/").render(newProds)
    );

    return newProds;
  } catch (err) {
    console.log(err);
  }
});

export { router };
