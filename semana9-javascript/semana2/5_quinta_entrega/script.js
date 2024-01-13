//capturando o elemento h1 da pagina em uma variavel
let elementoH1 = document.querySelector("h1");

//imprimindo o elemento capturado no console com a formatação html
console.log(elementoH1);
//imprimindo o elemento no console sem a formatação
console.log(elementoH1.innerText);

//capturando o elemento main 
let elementoMain = document.querySelector("main");
//imprimindo no console o elemento capturado
console.log(elementoMain);
console.log(elementoMain.innerHTML);
console.log(elementoMain.innerText);

//alterando a propriedade do noc
//let elementoH1 = document.querySelector("h1");
elementoH1.innerText = "Novo título com JS";

//adicionando uma lista de elementos com o javascript
elementoMain.innerHTML =`
<h2>Novo Subtítulo</h2>
<ul>
    <li>Elemento de lista Js 01</li>
    <li>Elemento de lista Js 02</li>
    <li>Elemento de lista JS 03</li>
</ul>
` 
