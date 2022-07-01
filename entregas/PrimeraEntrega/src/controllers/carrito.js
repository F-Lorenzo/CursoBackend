import Productos from "./Productos";
import dbCarrito from "../db/dbCarrito.json";

const data = JSON.parse(fs.readFileSync(dbCarrito, "utf8"));

export default class Carrito {
  constructor(user, productos, id) {
    this.user = user;
    this.productos = productos;
    this.id = id;
  }
  async save(productos) {}
  async deleteById(id) {}
  async deleteAll() {}
}
