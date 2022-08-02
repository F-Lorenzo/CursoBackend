import fs from "fs";

export default class Carrito {
  constructor(user, productos, id) {
    this.user = user;
    this.id = id;
    this.productos = [{ productos }];
  }
  async create(obj) {
    let id = 0;
    try {
      const data = JSON.parse(
        await fs.promises.readFile("../db/dbCarrito.json", "utf-8")
      );
      let carritos = data;
      carritos.push(obj);
      //asignar id
      carritos.forEach((carrito) => {
        if (carrito.id > id) {
          id = carrito.id;
        }
      });
      obj.id = id++;
      fs.writeFileSync(
        "../db/dbCarrito.json",
        JSON.stringify(carritos, null, 2)
      );
    } catch (error) {
      console.log(error);
    }
  }
  static async saveProductos(productoId, carritoId) {
    try {
      //busco el carrito
      const data = JSON.parse(
        await fs.promises.readFile("../db/dbCarrito.json", "utf-8")
      );
      let carritos = data;
      const carrito = carritos.find((carrito) => carrito.id === carritoId);
      //busco el producto
      const productos = JSON.parse(
        await fs.promises.readFile("../db/dbProductos.json", "utf-8")
      );
      const producto = productos.find((producto) => producto.id === productoId);
      this.productos.push(producto);
      fs.writeFileSync(
        "../db/dbCarrito.json",
        JSON.stringify(this.productos, null, 2)
      );
    } catch (error) {
      console.log(error);
    }
  }
  static async getProductos(carritoId) {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("../db/dbCarrito.json", "utf-8")
      );
      let carritos = data;
      const carrito = carritos.find((carrito) => carrito.id === carritoId);
      if (carrito.productos > 0) {
        const productos = this.productos.map((p) => p);
        return productos;
      } else {
        console.log("no hay productos en el carrito");
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteById(productoId, carritoId) {
    try {
      //busco el carrito
      const data = JSON.parse(
        await fs.promises.readFile("../db/dbCarrito.json", "utf-8")
      );
      let carritos = data;
      const carrito = carritos.find((carrito) => carrito.id === carritoId);
      //busco el producto
      const productos = JSON.parse(
        await fs.promises.readFile("../db/dbProductos.json", "utf-8")
      );
      const producto = productos.find((producto) => producto.id === productoId);
      this.productos.slice(producto, 1);
      fs.writeFileSync(
        "../db/dbCarrito.json",
        JSON.stringify(this.productos, null, 2)
      );
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteAll(carritoId) {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("../db/dbCarrito.json", "utf-8")
      );
      let carritos = data;
      const carrito = carritos.find((carrito) => carrito.id === carritoId);
      carritos.slice(carrito, 1);
      fs.writeFileSync(
        "../db/dbCarrito.json",
        JSON.stringify(carritos, null, 2)
      );
    } catch (error) {
      console.log(error);
    }
  }
}
