// POST: '/' - Crea un carrito y devuelve su id.
// DELETE: '/:id' - Vacía un carrito y lo elimina.
// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
import carrito from "../controllers/carrito.js";

const routerCarrito = new router();

routerCarrito("/carrito")
  .get((req, res) => {})
  .post((req, res) => {})
  .post((req, res) => {})
  .delete((req, res) => {})
  .delete((req, res) => {});

export default { routerCarrito };
