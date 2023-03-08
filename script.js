const button= document.getElementById("button");
button.addEventListener('click', function mostrar_ocultar(lista_datos){
    let lista_datos= document.getElementsByClassName("lista_datos");
    let currentDisplay = lista_datos.style.display;

}
)
function mostrar_ocultar(info){
    if (currentDisplay === "none"){
        info.style.display="flex";
    } else{
        info.style.display="none";
    }
}


