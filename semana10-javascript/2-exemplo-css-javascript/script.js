//capturando o elemento que será utilizado, neste caso uma div
let div = document.querySelector("div");



/* manipulando o elemento utilizando o método contains() 
que faz parte do objeto classList. Ele recebe o nome da classe do html e 
modifica seus atributos. Esse método tem o objetivo de mostrar se uma classe
existe ou não retornando valor true ou false.
*/
let incluiClasse = div.classList.contains("texto-novo");



div.classList.add("texto-novo");
div.classList.remove("borda-azul");

div.classList.toggle("borda-zul");