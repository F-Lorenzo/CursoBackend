class Color {
  constructor() {
    this.rgb = randomColor();

    function randomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }
  }
}
console.log(`rgb(${r},${g},${b})`);
