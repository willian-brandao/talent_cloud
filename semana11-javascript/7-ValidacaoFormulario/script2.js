


//mostrar popu de campo obrigatorio
/*
usernameInput.addEventListener("focus", function(){
    usernameInput.classList.add("required-popup");
});

//ocultar o popup
usernameInput.addEventListener('blur',function () {
    usernameInput.classList.remove("required-pop");
});

*/


const formulario = document.querySelectorAll('form input');
 
formulario.forEach(elemento => {
    elemento.addEventListener('focus', () => {
        //console.log('Elemento focado:', elemento);
        elemento.style.border = "2px solid red";
    });
});