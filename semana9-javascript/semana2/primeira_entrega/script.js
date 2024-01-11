var x = document.getElementsById('posts')

//capturar o elemento do logo usando getElementById
const logoElement = document.getElementById('logo');

//impprimir o atributo
console.log('Alt do logo', logoElement.alt)

// capturar todos os elementos com a classe 'post-autor' 
const autorElements = document.getElementsByClassName('.post-autor');

//iterar sobre os elementos e imprimir os autores
console.log('Autores das postagens: ');
for( let i  = 0; i < autorElements.length; i++ ){
    const autor = autorElements[i].textContent;
    console.log('-', autor);
}

/*
O link dentro do texto do primeiro post
- A palavra em negrito dentro do texto do segundo post
- O input de nome do formulário
- Os links da lista de redes no final da página
- Os links da navegação (só os links, não os elementos de lista)
- Os 4 "Autor:" e "Data:" em negrito nos dois posts'
tem menu de contexto

*/

//capturar o link dentro do texto do primeiro post 
const linkInterno = document.querySelector()










//captura alementos utilizando query  selectorr all
let titulos = document.querySelectorAll("footer .lista_redes a ")


function imprimirTodos(lista){
    for(let i = 0; i < titulos.length; i++){~
        console.log( titulos[i].innerText)
    }

}

imprimirTodos(titulos)


//capturar 