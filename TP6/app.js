let body = document.querySelector ('body')
let titulo = document.querySelector('h1')
let parrafo = document.querySelector("p")
let fondo = document.querySelector("#b1")
let texto = document.querySelector("#b2")
let color = document.querySelector("#b3")
let CambiarTexto = document.querySelector("#b4")

fondo.onclick = function(){
 body.style.backgroundColor = 'rgb(230, 235, 164)'
}
texto.onclick = function(){
    parrafo.textContent = " hola como estan "
}
color.onclick = function(){
    parrafo.style.color = "rgb(202, 121, 0)"
}
CambiarTexto.onclick = function(){
    parrafo.style.fontFamily = "impact"
}