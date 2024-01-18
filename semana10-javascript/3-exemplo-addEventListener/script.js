//captura do elemento h1 da página
let numero = document.querySelector("h1");

//captura do elemento button da página
let botao =  document.querySelector("button");

//variavel que irá guardar o valor incrementado
let contagem = 0;

/*função que irá incrementar o valor guardado na variável contagem
quando houver interação com o botão pelo usuário
*/ 
function adicionarUm(){
    contagem = contagem + 1;
    numero.innerText =  contagem;
}

//chamada da função
adicionarUm();

//adicionando do método para disparar o evento na página html
botao.addEventListener("click", adicionarUm);


//outras maneiras de escrever o código 

/*
botao.addEventListener("click", function(){
    contagem = contagem + 1;
    numero.innerText = contagem;
});

*/
/*
botao.addEventListener("click", ()=> {
    contagem = contagem + 1;
    numero.innerText = contagem;
});

*/