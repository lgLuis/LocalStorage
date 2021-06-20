// VARIABLES
const formulario=document.querySelector("#formulario");
const listaMensajes=document.querySelector("#lista-mensajes");
let mensajes=[];

//EVENT LISTENERS
eventListeners();

function eventListeners(){
    formulario.addEventListener("submit", agregarMensaje);

}




//FUNCIONES
function agregarMensaje(e){
    e.preventDefault();

    console.log("agregando mensaje")
}