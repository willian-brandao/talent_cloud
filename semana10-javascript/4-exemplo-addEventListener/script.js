//capturar o elemento button 
let button =  document.querySelector("button");
//capturar o elemento o span 
let span = document.querySelector("span");
//capturar o elemento section
let section = document.querySelector("section");


//função que torna o elemento visível página
function mostrarSpan(){
    span.style.opacity = "100";
}

button.addEventListener("mouseover", mostrarSpan);

function ocultarSpan(){
    span.style.opacity = "0";
}

button.addEventListener("mouseout", ocultarSpan);

/*
button.addEventListener("mouseover", function(){
    span.style.opacity = "100";
});

button.addEventListener("mouseover", ()=> {
    span.style.opacity = "100";
});

*/


function fazerUmClick(){
    section.innerText = "Fez um click simples!";
}

button.addEventListener("click", fazerUmClick);



function fazerDoisClicks(){
    section.innerText = "Fez um duplo click!";
}

button.addEventListener("dblclick", fazerDoisClicks);