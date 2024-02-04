// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório

usernameInput.addEventListener( "focus", ()=>{
    usernameLabel.classList.add("required-popup");
});


usernameInput.addEventListener( "blur", ()=>{
    usernameLabel.classList.remove("required-popup");
});

// Validar valor do input

//declarar função 

function mostrarPopup(input,label){
    
    input.addEventListener("focus",function(){
        label.classList.add("required-popup");
    })
    input.addEventListener("blur", function(){
        input.classList.remove("required-popup");
    })
}

mostrarPopup(usernameInput, usernameLabel);



usernameInput.addEventListener("change", (e)=> {
    
    let valor = e.target.value;
    
    if(valor.length < 3){
        //adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
       
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres.";
        usernameHelper.classList.add("visible");


        //estilizarInputCorreto(usernameInput, usernameHelper);
    }else{
        //Adicionar estilos dinâmicos se o valor estiver correto

        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
        
        //estilizarInputCorreto(usernameInput, usernameHelper);
    }

});

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email]');
let emailHelper = document.getElementById("email-helper");


mostrarPopup(emailInput, emailLabel); 


emailInput.addEventListener("change", function(event){
    let valor = evento.target.value;

    if( valor.includes("@") && valor.includes(".com")){
       
        emailInput.classList.remove("error");
        emailHelper.classList.remove('visible');
        emailInput.classList.add("correct");
    }else{
        
        emailInput.classList.add("error");
        emailHelper.innerText =  "Email Inválido"
        emailInput.classList.remove("correct");
        emailHelper.classList.add("visible");
    }
});



let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade]');
let idadeHelper = document.getElementById("idade-helper");

idadeInput.addEventListener("change", function(e){
    let valor = e.target.value;

    if( valor >= 18 ){
        idadeInput.classList.remove("error");
        idadeHelper.classList.remove("visible");
        idadeInput.classList.add("correct");
    }else{
        idadeInput.classList.add("error");
        idadeHelper.innerText = "Você deve ter 18 anos  ou mais";
        idadeHelper.classList.add('visible');
    }

});

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha]');
let senhaHelper = document.getElementById("senha-helper");

let confirmarSenhaInput = document.getElementById("confirma-senha");
let confirmarSenhaLabel = document.querySelector('label[for="confirma-senha]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");


senhaInput.addEventListener("change", function(e){
    let valor = e.target.value;
    if( valor )
});