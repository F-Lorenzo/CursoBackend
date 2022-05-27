import fs from "fs";

const array = [];

class Product {
  constructor(name, price) {
    this.nombre = name;
    this.precio = price;
  }

  save(product) {
    const id = 0;
    if (product.id !== undefined) {
      throw new Error("El producto no tine id");
    } else {
      for (id in product) {
        product.id += id;
      }
      product.push(product.id);
    }
  }
  getById(id) {
    let products = array.filter((product) => product.id === id);
    return products;
  }
  getAll() {
    let getProducts = async () => {
      try {
        const content = await fs.promisis.writeFile("./productos.txt", "utf8");
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
    products.delete();
  }
  deletAll() {
    let productsToDelete = array.filter((product) => product);
    array.delete(productsToDelete);
    async function newTxt() {
      try {
        content = await fs.promisis.writeFile("./productos.txt", "utf8");
        console.log(content);
      } catch (err) {
        throw new Error(err.message);
      }
    }
  }
}

const product1 = new Product("product1", "100");
console.log(product1);
