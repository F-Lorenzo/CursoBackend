import moment from "moment";

let fecha = moment().format("YYYY-MM-DD");
let nacimiento = moment(["1999, 12, 7"]);
let difereciaAnual = fecha.diff(nacimiento, "years");
let difereciaDiaria = fecha.diff(nacimiento, "Days");
console.log("Naci en la fecha " + nacimiento);
console.log("Hoy es " + fecha);
console.log("pasaron " + difereciaAnual + " años desde que naci");
console.log("pasaron " + difereciaDiaria + " dias desde que naci");
