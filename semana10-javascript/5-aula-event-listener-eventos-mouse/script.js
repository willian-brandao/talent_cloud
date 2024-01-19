//capturando os elementos de texto que aparecem na tela e serão modificados
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

//criando um array com os atributos de um produto
let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

//capturando o elemento botão que irá acrescentar um valor a quantidade de produto
let btnAdicionar = document.querySelector("#btn-adicionar-produto-01");
//capturando o campo que irá mostrar a quantidade de produto 
let quantidade =  document.querySelector("#quantidade-produto-01");
//capturando o elemento botão que irá asubtrair um valor a quantidade de produto
let btnSubtrair = document.querySelector("#btn-subtrair-produto-01");
//definindo a quantidade máxima de produtos
let quantidadeDeProdutos = 10;
//definindo o valor do produto
let valorProduto01 = 11.66;

//uma função que atualiza valor e quantidade dos produtos
function atualizarSubTotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + "itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

/*

function atualizarSubTotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor;
  subtotalInfo.quantidade = quantidade.value

}
*/

//chamada de função de atualização
//atualizarSubTotal();

function adicionarValor() {
  if(quantidade.value < quantidadeDeProdutos){
    quantidade.value = Number(quantidade.value) + 1;
    subtotalInfo.quantidade = quantidade.value

    subtotalInfo.valor = subtotalInfo.valor + valorProduto01;
    atualizarSubTotal();
  }else{
    alert('Você atingiu a quantidade máxima de produtos!');
  }
}

btnAdicionar.addEventListener("click", adicionarValor);

function subtrairValor(){
  if(quantidade.value > 1){
    quantidade.value = Number(quantidade.value) - 1;
    subtotalInfo.quantidade = quantidade.value;

    subtotalInfo.valor = subtotalInfo.valor - valorProduto01;

    atualizarSubTotal();
  }else{
    alert("Digite um valor maior que zero!");
  }
}

btnSubtrair.addEventListener("click", subtrairValor);