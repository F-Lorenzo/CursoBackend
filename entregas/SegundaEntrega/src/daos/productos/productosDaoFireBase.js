import FirebaseContainer from "../../classes/firebaseContainer.js";

class ProductDAOFirebase extends FirebaseContainer {
  constructor() {
    super("products");
  }
}

export default ProductDAOFirebase;
