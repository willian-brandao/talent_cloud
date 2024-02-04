// ----------------------- Funcões Gerais ----------------------- //

function togglePopup(input, label){
	
	//mostrar o popup de campo obrigatório
	input.addEventListener("focus", () => {
			
		label.classList.add("required-popup");
		
	});
	
	// ocultar popup de campo obrigatório
	input.addEventListener("blur", () => {
		label.classList.add("required-popup");
	});
	
}


function estilizarInputCorreto(input, helper){
	helper.classList.remove("visible");
	input.classList.remove("error");
	input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper){
	helper.classList.add("visible");
	input.classList.add("error");
	input.classList.remove("correct");
}



//------------- evitar envio do formulário -------------//

let btnSubmit = document.querySelector("button[type='submit']");
let inputsCorretos = {
	username : false,
	email: false,
	senha: false, 
	confirmaSenha: false 
}

btnSubmit.addEventListener("click", (e)=>{
	
	
		if(inputsCorretos.username == false || inputsCorretos.email == false || 
			inputsCorretos.senha == false || inputsCorretos.confirmaSenha == false  ){
			e.preventDefault();
			alert("Preencha todos os campos corretamente!");
		}else{
			alert("formulário enviado com sucesso.")
		}

});

// ----------------- Validação de Username -------------//
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");



togglePopup(usernameInput, usernameLabel);


// Validar valor do input

usernameInput.addEventListener("change", (e)=> {
	
	let valor = e.target.value
	
	if( valor.length < 3 ){
		// adicionar estilos dinâmicos se  valor tiver menos de 3 caracteres
		usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres.";
		estilizarInputIncorreto(usernameInput, usernameHelper);
		inputsCorretos.username = false;
	}else{
		//adicionar estilos dinâmicos se o valor estiver correto
		estilizarInputCorreto(usernameInput, usernameHelper);
		inputsCorretos.username= true;
	}
});

// ----------------------- Validação de email ---------------------- //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper =  document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);


emailInput.addEventListener("change", (e)=> {
	let valor = e.target.value;
	
	if( valor.includes("@") && valor.includes(".com")){
		//adiciona esilos dinâmicos se o valor estiver correto
		estilizarInputCorreto(emailInput, emailHelper);
		inputsCorretos.email = true;
	}else{
		//adicionar estilos dinâmicos de o valor estiver incorreto
		emailHelper.innerText = "Precisa inserir um email válido";
		estilizarInputIncorreto(emailInput, emailHelper);
		inputsCorretos.email = false;
	}
});

// -------------------- Validação de Idade -----------------------//
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper =  document.getElementById("idade-helper");

togglePopup(idadeInput, idadeLabel);

idadeInput.addEventListener("change", (e)=> {
	let valor = e.target.value;
	
	if( valor >= 18){
		//adiciona esilos dinâmicos se o valor estiver correto
		estilizarInputCorreto(idadeInput, idadeHelper);
		inputsCorretos.idade = true;
	}else{
		//adicionar estilos dinâmicos de o valor estiver incorreto
		idadeHelper.innerText = "Necessita ter idade maior ou igual a 18 anos";
		estilizarInputIncorreto(idadeInput, idadeHelper);
		inputsCorretos.idade = false;
	}
});


// -------------------- Validação de Senha -----------------------//




let senhaInput =  document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById('senha-helper');

togglePopup(senhaInput, senhaLabel);



senhaInput.addEventListener("blur", (e)=> {
	let valor = e.target.value;
	
	if(valor != "") {
		//adiciona estilos dinâmicos se o valor estive correto
		estilizarInputCorreto(senhaInput, senhaHelper);
		inputsCorretos.senha = true;
		
	}else{
		//estilizar o valor incorreto do input
		
		estilizarInputIncorreto(senhaInput, senhaHelper);
		senhaHelper.innerText = "A senha não pode ser vazia";
		inputsCorretos.senha = false;
	}
});


let confirmaSenhaInput =  document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper');


togglePopup(confirmaSenhaInput, confirmaSenhaLabel);


confirmaSenhaInput.addEventListener("blur", (e)=> {
	let valorConfirmacaoSenha = e.target.value;
	
	if( valorConfirmacaoSenha == senhaInput.value ){
		//adiciona estilos dinâmicos se o valor estive correto
		estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
		inputsCorretos.confirmarSenha = true;
	}else{
		//estilizar o valor incorreto do input
		confirmaSenhaHelper.innerText = "As senhas tem que ser iguais";
		
		estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
		inputsCorretos.confirmarSenha = false;
			
	}

});

