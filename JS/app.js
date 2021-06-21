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
    //TextArea Donde el usuario escribe:
    const mens =document.querySelector("#mensaje").value;
    console.log(mens);
    //Validación
    if(mens === ""){
        mostrarError("El mensaje: No puede ir vacio")
        return; //Evita que se sigan ejecutando más líneas de cód.
    }
}

//Mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement("p");
    mensajeError.textContent=error;
    mensajeError.classList.add("error");

    //Insertarlo en el contenido
    const contenido=document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    //Eliminar mensaje error luego de  3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 4000);

}