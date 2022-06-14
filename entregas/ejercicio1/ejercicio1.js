/* The class Usuario has a constructor that takes in 4 parameters, nombre, apellido, libros, and
mascotas. It also has 4 methods, obtenerNombre, agregarMascota, cantidadMascotas, and agregarLibros */
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  /**
   * The function obtenerNombre() returns the value of the nombre property of the object it is called on
   * @returns The name of the person
   */
  obtenerNombre() {
    return this.nombre;
  }
  /**
   * The function agregarMascota takes a parameter called mascota and adds it to the array mascotas
   * @param mascota - The object that we want to add to the array.
   */
  agregarMascota(mascota) {
    let mascotas = this.mascotas;
    mascotas.push(mascota);
  }
  /**
   * It returns the length of the array.
   * @returns The number of pets in the array
   */
  cantidadMascotas() {
    let mascotas = this.mascotas;
    return mascotas.length;
  }
  /**
   * It takes two parameters, name and author, and adds them to the libros array
   * @param name - The name of the book
   * @param author - The author of the book.
   */
  agregarLibros(name, author) {
    let libros = this.libros;
    libros.push({ name: name, author: author });
  }
  /* A method that takes the array of objects libros and prints the name of each book. */
  nombreLibros() {
    let libros = this.libros;
    libros.map((libro) => {
      console.log(libro.name);
    });
  }
}

const usuario1 = new Usuario(
  "facundo",
  "lorenzo",
  [
    { name: "libro1", author: "autor1" },
    { name: "libro2", author: "autor2" },
  ],
  ["perro", "tortuga", "mono"]
);

const usuario2 = new Usuario(
  "israel",
  "adesanya",
  [
    { name: "libro3", author: "autor3" },
    { name: "libro4", author: "autor4" },
  ],
  ["gato"]
);

usuario1.obtenerNombre();
usuario2.agregarMascota("loro");
usuario1.cantidadMascotas();
usuario1.agregarLibros("libro5", "author5");
usuario1.agregarLibros("libro6", "author6");
usuario1.nombreLibros();
