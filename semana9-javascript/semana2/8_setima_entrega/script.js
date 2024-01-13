
//criando elemento html
let elementoJavascript =  document.createElement("li");


//inserindo conteudo textual ao elemento html
elementoJavascript.innerText = "JaVascript";
//associando um id ao elemento 
elementoJavascript.id = "ling-js";


//capturand o elemento pai do elemento que queremos adicionar, neste caso ul]
let listaLinguagens = document.querySelector(" .lista-linguagens");

//associando o elemento li ao elemento pai ul

listaLinguagens.appendChild(elementoJavascript);

//criação de elemento div
const postagemJavascript =  document.createElement("div");

postagemJavascript.innerHTML = `
    <h2 class="post-titulo">Javascript</h2>
    <p class="post-texto">
    Javascript é uma linguagem de programação
    </p>
`;

//capturando o elemento pai que seria a section onde ficam as divs 
const postagens =  document.querySelector(".postagens");

//adicionando a div com a postagem no final da seção
postagens.appendChild(postagemJavascript);

