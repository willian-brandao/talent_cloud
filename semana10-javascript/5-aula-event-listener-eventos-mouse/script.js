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

//função para adicionar um item no carrinho, ela incrementa a quantidade em mais um
function adicionarValor() {
  //se a quantidade for menor ou igual ao limite permitido, permite anexar mais um 1
  if(quantidade.value < quantidadeDeProdutos){
    //faz um cast de valor numero
    quantidade.value = Number(quantidade.value) + 1;
    //atualiza a variavel subtotalInfo com a quantidade inserida
    subtotalInfo.quantidade = quantidade.value
    //acrescenta a qunatidade do valor de mais 1 produto
    subtotalInfo.valor = subtotalInfo.valor + valorProduto01;
    //chamada da função de atualizar valor
    atualizarSubTotal();
  }else{
    //se caso ultrapassar a quantidade maxima, gera um alerta
    alert('Você atingiu a quantidade máxima de produtos!');
  }
}

//chamada do método de evento para que a função seja acionada assim que o usuario clicar no botão
btnAdicionar.addEventListener("click", adicionarValor);

//função para retirar um item no carrinho, ela decrementa a quantidade em menos um
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