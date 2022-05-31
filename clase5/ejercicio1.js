const numeros = [];

for (let i = 0; i < 10000; i++) {
  const valor = Math.ceil(Math.random() * 20);
  numeros.push(valor);
}

console.log(numeros);
