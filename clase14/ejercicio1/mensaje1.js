import mensaje2 from "./mensaje2.js";
import mensaje3 from "./mensaje3.js";
const mensaje1 = "hola soy mensaje 1";

setTimeout(() => {
  console.log(mensaje1);
}, 1000);

setTimeout(() => {
  console.log(mensaje2);
}, 2000);

setTimeout(() => {
  console.log(mensaje3);
}, 3000);
