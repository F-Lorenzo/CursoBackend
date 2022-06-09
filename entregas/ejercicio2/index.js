import fs from "fs";

const baseDatos = JSON.parse(fs.readFileSync("./listaProductos.json", "utf-8"));

class Productos {
  constructor(producto) {
    this.listaProductos = producto;
  }

  async save(obj) {
    let id = 0;
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      let listaProductos = data;
      listaProductos.push(obj);

      listaProductos.forEach((producto) => {
        if (producto.id > id) {
          id = producto.id;
        }
      });
      obj.id = id + 1;
      console.log(
        await fs.promisis.writeFile(
          "./listaProductos",
          JSON.stringify(listaProductos, null, 2)
        )
      );
    } catch (err) {
      console.error(err);
    }
  }
  async getById(idNumber) {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      this.listaProductos = data;
      let producto = this.listaProductos.filter(
        (producto) => producto.id === idNumber
      );
      if (producto) {
        console.log(producto);
      } else {
        console.log("No existe producto con ese id asignado");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async getAll() {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      let productos = data;
      if (productos.length > 0) {
        const listaCompleta = productos.map((producto) => producto);
        console.log(listaCompleta);
      } else {
        console.log("No hay productos");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deletById(idNumber) {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      this.listaProductos = data;
      let producto = this.listaProductos.filter(
        (producto) => producto.id === idNumber
      );
      if (producto) {
        this.listaProductos.delete(producto);
        console.log(`el producto con id ${idNumber} fue eliminado`);
      } else {
        console.log("No existe producto con ese id asignado");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deletAll() {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      let productos = data;
      if (productos.length > 0) {
        const listaCompleta = productos.map((producto) => producto);
        this.listaProductos.delete(listaCompleta);
      } else {
        console.log("No hay productos");
      }
    } catch (err) {
      console.log(err);
    }
  }
}
const productos = new Productos(baseDatos);

const newProduct_5 = {
  title: "iPhone 13",
  price: 15000,
  thumbnail:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000",
};

await productos.save(newProduct_5);
