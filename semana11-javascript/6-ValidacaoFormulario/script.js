// -----------------Funções Gerais -----------//

function togglePopup(input, label){
    
    //Mostrar popup de campo obrigatorio
    input.addEventListener("focus", ()=>{
        label.classList.add("required-popup");
    });

    //Ocultar popup de campo obrigatorio
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

//----------Validação USERNAME----------//

let usernameInput =  document.getElementById("username");
let usernameHelper = document.querySelector("username-helper");
let usernameLabel = document.querySelector('label[for="username"]');

togglePopup(usernameInput, usernameLabel);


//Validar o valor do input 
usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if(valor.length < 3){
        //adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres.";
        estilizarInputCorreto(usernameInput, usernameHelper);
    }else{
        //Adcionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(usernameInput, usernameHelper);
    }

});


//--------------Validação de Email--------//

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);




emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if(valor.includes('@') && valor.includes(".com")){
        //Adicionar dinâmicos se o valor estiver correto
        estilizarInputCorreto(emailInput, emailHelper)
    }else{
        emailHelper.innerHTML = "Precisa inserir um email válido";
        estilizarInputIncorreto(emailInput, emailHelper);
    }
});


//----------------Validação de Senha------------------/

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel);

senhaInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;

    if(valor == ""){
        //Adicionar dinâmicos se o valor estiver correto
        senhaHelper.innerText = "O campo senha não pode estar vazio!";
       estilizarInputIncorreto(senhaInput, senhaHelper);
    }else{

        estilizarInputCorreto(senhaInput,senhaHelper);
    }
});

