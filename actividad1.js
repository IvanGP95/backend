// Actividad 1: Clases
/*
Consigna:
1) Declarar una clase "Usuario"
2) Hacer que el usuario cuente con los siguientes atributos:
    {nombre: string, apellido: string, libros: object[{nombre, autor}], mascotas[string]}

3) Hacer que el usuario cuente con los siguientes metodos:
    getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
    addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
    addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.    
*/


class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombre) {
        this.mascotas.push(nombre)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor })
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }

}

let usuario = new Usuario("Ivan", "Guerrero")

usuario.addMascota("Boster")
usuario.addMascota("Hachi")
usuario.addMascota("Susana")
usuario.addBook("Harry Potter", "J.K. Rowling")
usuario.addBook("Game of Thrones: Song of Ice and Fire", "George R.R. Martin")


console.log(`Nombre completo: ${usuario.getFullName()}`)
console.log(`Mascotas: ${usuario.countMascotas()}`)
console.log('libros', usuario.getBookNames())







