let button= document.getElementById("button");

button.addEventListener('click', function mostrar_ocultar())
    
let lista_datos = document.getElementsByClassName("lista_datos");

function mostrar_ocultar(info){
    if (currentDisplay === "none"){
        info.style.display="flex";
    } else{
        info.style.display="none";
    }
}


