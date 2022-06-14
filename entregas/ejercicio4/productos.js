const fs = require("fs");

const baseDatos = JSON.parse(fs.readFileSync("./listaProductos.json", "utf-8"));

class Productos {
  constructor(producto) {
    this.listaProductos = producto;
  }

  /**
   * It reads a JSON file, pushes a new object to the array, and then writes the array back to the JSON
   * file
   * @param obj - {
   */
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
      fs.writeFileSync(
        "./listaProductos.json",
        JSON.stringify(listaProductos, null, 2)
      );
      fs.writeFileSync(
        "./listaProductos.txt",
        JSON.stringify(listaProductos, null, 2)
      );
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * It takes an id number as an argument, reads a JSON file, filters the JSON file for the id number,
   * and returns the product with that id number.
   * </code>
   * @param idNumber - number
   */
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
  /**
   * It reads a JSON file, parses it, and then maps the parsed data to a new array.
   */
  async getAll() {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      let productos = data;
      if (productos.length > 0) {
        const listaCompleta = productos.map((producto) => producto);
      } else {
        console.log("No hay productos");
      }
    } catch (err) {
      console.log(err);
    }
  }
  /**
   * It takes an id number as an argument, reads the JSON file, filters the array of objects for the
   * object with the matching id number, and then deletes that object from the array.
   * @param idNumber - number
   */
  async deleteById(idNumber) {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      this.listaProductos = data;
      let producto = this.listaProductos.filter(
        (producto) => producto.id === idNumber
      );
      if (producto) {
        this.listaProductos.splice(this.listaProductos.indexOf(producto));
        fs.writeFileSync(
          "./listaProductos.json",
          JSON.stringify(this.listaProductos, null, 2)
        );
        fs.writeFileSync(
          "./listaProductos.txt",
          JSON.stringify(this.listaProductos, null, 2)
        );
        console.log(`el producto con id ${idNumber} fue eliminado`);
      } else {
        console.log("No existe producto con ese id asignado");
      }
    } catch (err) {
      console.log(err);
    }
  }

  /* Deleting all the products in the JSON file. */
  async deleteAll() {
    try {
      const data = JSON.parse(
        await fs.promises.readFile("./listaProductos.json", "utf-8")
      );
      let productos = data;
      if (productos.length > 0) {
        const listaCompleta = productos.map((producto) => producto);
        listaCompleta.splice(0, listaCompleta.length);
        fs.writeFileSync(
          "./listaProductos.json",
          JSON.stringify(listaCompleta, null, 2)
        );
        fs.writeFileSync(
          "./listaProductos.txt",
          JSON.stringify(listaCompleta, null, 2)
        );
      } else {
        console.log("No hay productos");
      }
    } catch (err) {
      console.log(err);
    }
  }
}
const productos = new Productos(baseDatos);

module.exports = Productos;
