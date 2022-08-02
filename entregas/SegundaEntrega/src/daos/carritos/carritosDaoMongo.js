import MongoDBContainer from "../../classes/mongodbContainer.js";

class CartDAOMongoDB extends MongoDBContainer {
  constructor() {
    super("carts", {
      id: { type: Number, required: true },
      productos: { type: Array, required: false },
    });
  }
}

export default CartDAOMongoDB;
