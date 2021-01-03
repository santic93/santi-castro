function Mamifero(nombre,descendencia){
this.nombre = nombre;
this.descendencia = [];

}


Mamifero.prototype.saludar = function(){
return ('Hola, mi nombre es ' + this.nombre)
}


Mamifero.prototype.nuevoHijo = function (){
let hijo = new Mamifero(this.nombre + " Jr")
this.descendencia.push(hijo)
return hijo}


function Gato(nombre,color) {
    Mamifero.call(this,nombre)
    this.color=color
}
Gato.prototype = Object.create(Mamifero.prototype)
Gato.prototype.constructor = Gato

Gato.prototype.nuevoHijo = function(color) {
    let cat = new Gato(this.nombre + " Jr",color)
    this.descendencia.push(cat)
    return cat
}
