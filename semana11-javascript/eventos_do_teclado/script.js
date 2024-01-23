//capturando elementos do DOM
let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciDaEsquerda = 0;

//manipulação de eventos

document.addEventListener("keyup", (e)=>{
   keyText.innerText = e.key;
   codeText.innerText = e.code;
});

document.addEventListener("keydown", (e)=>{
    if(e.code == "ArrowRight"){
        distanciDaEsquerda = distanciDaEsquerda + 10;
        console.log(distanciDaEsquerda);
    
        quadrado.style.left = distanciDaEsquerda + "px";
    }


});