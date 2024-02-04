//capturando elementos do DOM
let inputEmail = document.getElementById("email");
let inputIdade = document.getElementById("idade");
let formulario = document.querySelector("form");



//manipulando elementos do DOM
inputEmail.style.backgroundColor = "lightgreen";

inputEmail.addEventListener("blur", (e)=> {
    e.target.backgroundColor = "";
});

inputIdade.addEventListener("change", ()=> {
    alert("Certeza que deseja alterar seus dados?")
});

formulario.addEventListener("submit", ()=>{
    alert("Dados enviados com sucesso!");
});

