const  linkPerfil = document.getElementById('link-perfil');
const navPerfil = document.getElementById("nav-perfil");

const linkPerfilDados = 

linkPerfil.addEventListener("mouseover", ()=>{
    navPerfil.style.display = "block";
});


window.addEventListener("keyup", (e)=>{
    console.log(e.key);
    console.log(e.code);

    if(e.code== "Digit1"){
        console.log("Abre o menu de perfil");
        navPerfil.style.display = "block";
    }
});

//
window.addEventListener("keyup", (e)=>{
  
  
  if(e.code == "Escape"){
      navPerfil.style.display = "none";
  }
});

