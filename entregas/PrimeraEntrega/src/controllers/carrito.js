// POST: '/' - Crea un carrito y devuelve su id.
// DELETE: '/:id' - Vacía un carrito y lo elimina.
// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

import Productos from "./Productos";
import dbCarrito from "../db/dbCarrito.json";

const data = JSON.parse(fs.readFileSync(dbCarrito, "utf8"));

export default class Carrito {
  constructor(user, productos, id) {
    this.user = user;
    this.id = id;
    this.productos = [{ productos }];
  }
  async crete(obj) {}
  async saveProductos(productos) {}
  async getProductos(carritoId) {}
  async deleteById(carritoId) {}
  async deleteAll() {}
}
