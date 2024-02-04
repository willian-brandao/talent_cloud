
//capturando elementos do DOM

let linkProz = document.getElementById("link-proz");
let btnSubmit = document.querySelector("button[type=submit]");


//adicionando evento ao link da página

linkProz.addEventListener("click", (e)=> {
    e.preventDefault();
    alert("Não foi possível acessar o link");
});

btnSubmit.addEventListener("click", (e)=> {
    e.preventDefault();
    
});