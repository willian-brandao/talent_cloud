//criando um elemento h1 para a pagina
let tituloPagina = document.createElement("h1");

//inserindo um texto nesse elemento h1
tituloPagina.innerText = "Produto à venda!";

//capturando o elemento pai do elemento que irá ser criado
let body = document.querySelector("body");

//criando um elemento section para a pagina
let areaDeVenda = document.createElement("section");

areaDeVenda.innerHTML = `

       <div class="produto">
            <h2>Carrinho de Mão</h2>
            <img src="./carrinhodemao.png"></img>
            <p>Descrição do Produto: Carrinho de mão para carregar entulhos de obra.</p>
        </div>
`;

body.appendChild(tituloPagina);
body.appendChild(areaDeVenda);
