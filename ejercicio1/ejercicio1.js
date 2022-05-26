class Usuario {
  constructor(nombre,apellido,libros,mascotas){
    this.nombre=nombre;
  	this.apellido=apellido;
    this.libros=libros;
    this.mascotas=mascotas;
  }
	obtenerNombre(){
    return this.nombre
  }
	agregarMascota(mascota){
		let mascotas=this.mascotas
    mascotas.push(mascota)
  }
  cantidadMascotas(){
		let mascotas=this.mascotas
    return mascotas.length
  }
  agregarLibros(name,author){
    let libros=this.libros
    libros.push({name:name,author:author})
  }
  nombreLibros(){
    let libros=this.libros  
    libros.map((libro)=>{
      console.log(libro.name)
    })
  }
}

const usuario1 = new Usuario ('facundo','lorenzo',[{name:'libro1',author:'autor1'},{name:'libro2',author:'autor2'}],['perro','tortuga','mono'])

const usuario2 = new Usuario ('israel','adesanya',[{name:'libro3',author:'autor3'},{name:'libro4',author:'autor4'}],['gato'])



usuario1.obtenerNombre()
usuario2.agregarMascota('loro')
usuario1.cantidadMascotas()
usuario1.agregarLibros('libro5','author5')
usuario1.agregarLibros('libro6','author6')
usuario1.nombreLibros()






