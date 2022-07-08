import Carrito from "../controllers/carrito.js";
const routerCarrito = new router();

routerCarrito("/carrito")
  .get("/:id/productos", (req, res) => {
    try {
      Carrito.getProductos(req.params.id).then((p) => {
        res.send(p);
      });
    } catch (error) {
      console.log(error);
    }
  })
  .post("/", (req, res) => {
    try {
      const newCarrito = Carrito.create();
      console.log(newCarrito.id);
      res.send(newCarrito.id);
    } catch (error) {
      console.log(error);
    }
  })
  .post("/:id/productos", (req, res) => {
    try {
      const addProducto = Carrito.saveProductos(req.params.id, this.carrito.id);
      res.send(addProducto);
    } catch (error) {
      console.log(error);
    }
  })
  .delete("/:id", (req, res) => {
    try {
      const { id } = req.params;
      Carrito.deleteAll(id);
      res.send(`carrito eliminado${id}`);
    } catch (error) {
      console.log(error);
    }
  })
  .delete("/:id/productos/:id_prod", (req, res) => {
    try {
      const { id, id_prod } = req.params;
      Carrito.deleteById(id_prod, id);
      res.send(`producto con id${id_prod} eleminado del carrito número ${id}`);
    } catch (error) {
      console.log(error);
    }
  });

export { routerCarrito };
