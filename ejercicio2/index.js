import fs from "fs";

const array = [];

class Product {
  constructor(name, price, id) {
    this.nombre = name;
    this.id = id;
    this.precio = price;
  }

  save(producto) {}
  getById(id) {
    let products = array.filter((product) => product.id === id);
    return products;
  }
  getAll() {
    let getProducts = async () => {
      try {
        const content = await fs.promisis.readFile("./productos.txt", "utf8");
        const objContent = JSON.parse(content);
        console.log(objContent);
        return objContent;
      } catch (err) {
        throw new Error(err.message);
      }
    };
  }
  deletById(id) {
    let products = array.filter((product) => product.id === id);
    array.delete(products);
  }
  deletAll() {}
}
