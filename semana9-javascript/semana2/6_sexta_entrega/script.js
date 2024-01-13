//capturando o elemento h1
let titulo = document.getElementById("titulo");
//imprimindo o h1
console.log(titulo);

let elementoUL = document.querySelector("ul");

let elementoA =  document.querySelector("a");

let  elementoOl = document.getElementById("lista-ordenada");

//manipulação do tiutlo principal da página inserindo texto
titulo.innerText = "O título da página";

//manipulção do link que possui na página inserindo texto
elementoA.innerText = "willian.brandao@email.com";

//inserindo itens na lista desordenada
elementoUL.innerHTML = `
<li>Arroz</li>
<li>Feijão</li>
<li>Batata</li>`;

//inserindo itens de links na lista ordenada

elementoOl.innerHTML = `
<li><a href="http://www.facebook.com">Facebook</></li>
<li><a href="http://www.instagram.com">Instagram</></li>
<li><a href="http://www.x.com">X</></li>
`;
