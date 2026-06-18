/*let numero1 = 20;
let numero2 = 10;
let suma
let resta
let multiplicacion
let divicion

suma = numero1 + numero2;

console.log("el resultado de sumar " + numero1 + " + " + numero2 + " es " + suma);
alert("el resultado de sumar " + numero1 + " + " + numero2 + " es " + suma)
      
resta = numero1 - numero2;

console.log(" el resultado de restar " + numero1 + " - " + numero2 + " es " + resta);
alert(" el resultado de restar " + numero1 + " - " + numero2 + " es " + resta)

multiplicacion = numero1 * numero2;

console.log(" el resultado de multiplicar " + numero1 + " * " + numero2 + " es " + multiplicacion);
alert(" el resultadode multiplicar " + numero1 + " * " + numero2 + " es " + multiplicacion)

divicion = numero1 / numero2;

console.log(" el resultado de dividir " + numero1 + " / " + numero2 + " es " + divicion);
alert(" el resultado de dividir " + numero1 + " / " + numero2 + " es " + divicion)

let nombreAlumno = " Sofia "
let apellidoAlumno = " Gaya "
let edadAlumno = 14

console.log(" la alumna : " + nombreAlumno + apellidoAlumno + " tiene " + edadAlumno + " años ");
alert(" la alumna : " + nombreAlumno + apellidoAlumno + " tiene " + edadAlumno + " años ");

let precio1 = 250
let precio2 = 250
let precio3 = 50
let total = precio1 + precio2 + precio3

console.log( " el total a pagar es : " + total)
alert( " el total a pagar es : " + total)

let comidaFavorito = " pastel de papa"
let colorFavorito = " azul "
let numeroFavorito = 9

console.log( " mi comida favorita es el " + comidaFavorito + ", me gusta el color " + colorFavorito + " y mi numero favorito es " + numeroFavorito) 
alert( " mi comida favorita es el " + comidaFavorito + ", me gusta el color " + colorFavorito + " y mi numero favorito es " + numeroFavorito)

let pais = " Argentina "

alert( pais )
console.log( pais )

pais = " Brasil "

alert( pais )
console.log( pais )
*/
// guardar objeto
let titulo = document.querySelector( "h1")
let boton = document.querySelector('#b1')
boton.onclick = function () {
    titulo.textContent = " Buen dia tercero "
    titulo.style.color = " yellow "
    titulo.style.backgroundColor = " purple " 
    titulo.style.fontFamily = " Arial "
}