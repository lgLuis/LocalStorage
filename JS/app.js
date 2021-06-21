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

    const mensajeObj={
        id: Date.now(),
        // texto: mens
        // mens: mens
        mens
    }

    //Agregar los mensajes al Arreglo
    mensajes =[...mensajes, mensajeObj];
    //Creamos el html
    crearHTML();

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

//Muestra un lista de los mensajes.
function crearHTML(){
    limpiarHTML();
    if(mensajes.length>0){
        mensajes.forEach(mens=>{
            //Crear el HTML
            const li=document.createElement("li");
            //Agredo el texto
            li.innerText = mens.mens;
            //Insertando en el HTML
            listaMensajes.appendChild(li);
        });
    }
}

//Limpiar el HTML
function limpiarHTML(){
    while(listaMensajes.firstChild){
        listaMensajes.removeChild(listaMensajes.firstChild);
    }
}