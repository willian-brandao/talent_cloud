//capturando os elementos do DOM
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01");
let btnSubtrairProduto01 = document.getElementById("btn-subtrair-produto-01");
let qtdProduto01 =  document.getElementById("quantidade-produto-01");
let valorProduto01 = 11.66;
let quantidadeDeProdutos = 10;

//declarando o array dos produtos da pagina 

/*
let arrayProdutos = [
    titulo, 
    valor
];

*/
//criado um objeto com quantidade e valor de cada produto
let subtotalInfo = {
    quantidade: 1,
    valor: 11.66
}

//Definir a manipulação dos elementos capturados (funções)
function atualizarSubtotal(){
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText =  subtotalInfo.valor.toFixed(2);    
}

atualizarSubtotal();

function adicionarUm(){
    if(qtdProduto01.value < quantidadeDeProdutos){
        
    //Adicionar 1 à quantidade do produto
    qtdProduto01.value = Number(qtdProduto01.value) + 1
    
    //Adicionar 1 ao subtotal
    subtotalInfo.quantidade = subtotalInfo.quantidade + 1
    
    //Adicionar o valor do produto ao subtotal 
    subtotalInfo.valor = subtotalInfo.valor + valorProduto01;
    
    //atualizar o Dom
    atualizarSubtotal()
    }else{
        alert("A quantidade estipulada ultrapassa o limite de estoque!");
    }
    
}


function subtrairUm(){

    if(qtdProduto01.value > 1){
        
    //Subtrair 1 à quantidade do produto
    qtdProduto01.value = Number(qtdProduto01.value) - 1
    
    //Subtrair 1 ao subtotal
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1
    
    //Adicionar o valor do produto ao subtotal 
    subtotalInfo.valor = subtotalInfo.valor - valorProduto01;
    
    //atualizar o Dom
    atualizarSubtotal()
    }else{
        alert("A quantidade deve ser maior que zero!");
    }

}

//manipulando quando devem ser manipulados os elementos (eventos)
btnAdicionarProduto01.addEventListener('click', adicionarUm);
btnSubtrairProduto01.addEventListener('click', subtrairUm);
