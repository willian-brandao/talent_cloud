//capturando os elementos do DOM

elementoH2 = document.querySelector("h2");
elementoBotao = document.querySelector("button");

//manipulando os elementos do DOM
elementoH2.style.color = "blue";
elementoH2.style.fontSize = "2.5rem";

elementoBotao.style.border= "1px solid blue";

//declarando variaveis
login = "admin";
senha = "123mudar"

//Primeira interação do usuário

//Usuário digitou um nome de usuário não válido
loginUsuario = document.getElementById("login-usuario");
errorText = document.querySelector(".error-text");


loginUsuario.classList.add("error");
errorText.classList.add('visible');

//Usuário digitou uma senha não válida
loginSenha = document.getElementById("login-senha");
errorTextSenha = document.getElementById(".error-text");






