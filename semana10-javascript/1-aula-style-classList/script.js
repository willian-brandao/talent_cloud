const elementoH2 = document.querySelector("h2");

//alterar a cor para vermelho
elementoH2.style.color = "red";

//alterar tamanho do elemento
elementoH2.style.fontSize = '30px';

elementoH2.style.fontWeight = "bold";

elementoH2.style.fontFamily = "Roboto";


/*
// selecionando o elemento main
const elementoMain = document.querySelector("main");

elementoMain.style.backgroundColor = 'yellow';

// selecionando o elemento main
const elementoButton = document.querySelector("button");

elementoButton.on
*/


// Adicionar um comentário indicando a primeira interação
console.log("Primeira interação do usuario");

//capturando elemento relacionado ao login
const usernameInput = document.getElementById('login-usuario');

//Adiciona a classe de 'error' ao input do nome do usuario
usernameInput.classList.add('error');

//capturando elemento realcionado a senha
const passwordInput = document.getElementById('login-senha');

let usuario =  true;
let senha = true;

elementoP = document.querySelectorAll("p");



if(usuario == true && senha == true ){
    usernameInput.classList.add('correct');
    passwordInput.classList.add('correct');
    

}else if(usuario == false && senha == true ){
    usernameInput.classList.add('error');
    passwordInput.classList.add('correct');
    elementoP[0].classList.add('visible');

}else if(usuario == true && senha == false ){
    usernameInput.classList.add('correct');
    passwordInput.classList.add('error');
}else(usuario == true && senha == true ) 
    usernameInput.classList.add('error');
    passwordInput.classList.add('error');
