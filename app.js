// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreamigo = [];
let intentos = 0;
let itemInput = document.getElementById('amigo');
let divListas = document.querySelector(".listas");
let listaNombre = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let reinicia = document.getElementById("reiniciar");
let sortea = document.getElementById("sortear");

//console.log(sortea.removeAttribute('disabled'));
// oculta botón reiniciar
reinicia.style.visibility = "hidden";

//funcion para borra datos
function limpiarCaja(elemento) {
    elemento.value = '';
}

//funcion para agregar a lista desordenada
function agregarItem(elemeto, lista) {
    if (lista != resultado) {
        //crea un nuevo elemento
        let listItem = document.createElement('li');
        listItem.id = nombreamigo.indexOf(elemeto);
        //listItem.className = "amigos";
     
        listItem.innerHTML = elemeto + `<button id="elimina" onclick="eliminaNombre(${nombreamigo.indexOf(elemeto)})">x</button>`;
        //se imprime como lista desordenada
        lista.appendChild(listItem);
    } else {
        let listItem = document.createElement('li');
        listItem.id = nombreamigo.indexOf(elemeto);
       
        listItem.innerHTML = elemeto;
        //se imprime como lista desordenada
        lista.appendChild(listItem);
    }


}

//funcio para agregar nombre del amigo
function agregarAmigo() {
    //obtenemos el valor del campo input
    let nombre = itemInput.value.trim();
    intentos++
    //Se valida para que se active el botón sortear
    if(intentos >= 1 && nombreamigo.length === 0 && nombre !=""){
        //Se avilita el botón sortear amigo
        sortea.removeAttribute('disabled');
    }
    // checa the input no este vacio
    if (nombre) {
        //agregamos el valor a una lista
        nombreamigo.push(nombre);
        //Se agrega la lista desordenada
        agregarItem(nombre, listaNombre);

        //Limpiar el campo de entrada para el siguiente elemento
        limpiarCaja(itemInput)

    } else {
        //Mensaje de alerta cuando no ingresa ningun nombre y aprieta el boton añadir
        alert('Por favor, ingresae un nombre valido.');
    }
}

    
//funcion que hace el sorteo
function sortearAmigo() {

    //Elimina los datos de lista
    //etiquetli = document.querySelector(".amigos");
    //eliminarElemento(etiquetli);
    eliminarElemento(listaNombre);

    // se genera numero aleatorio del tamaño de la lista
    let posicionAleatoria = Math.floor(Math.random() * nombreamigo.length);


    //Se imprime el ganador
    agregarItem(nombreamigo[posicionAleatoria], resultado);

     //Hace visible botón Reiciar
    reinicia.style.visibility = "visible";
    //Oculta botón Sortear amigo
    sortea.style.visibility = "hidden";

}

//funcion para eliminar datos del DOM
function eliminarElemento(elemento) {
    elemento.remove();
}

function eliminaNombre(index) {
   
    let validar = confirm("¿Desea eliminar el nombre?");

    //Se valida que se quiere eliminar un elmento
    if (validar) {
        //Elimino la etiqueta del html
        const etiqueta = document.getElementById(index);
        eliminarElemento(etiqueta);
        //Elimina los datos de lista
        nombreamigo.splice(index, 1);
        alert("El nombre fue eliminado");
    }

    //Se desavilita el oton sorteo
    if(nombreamigo.length === 0){
        sortea.setAttribute('disabled','true');
    }
}

function inicia() {
    //Oculta botón Reiciar
    reinicia.style.visibility = "hidden";
    // Refresca la pagina
    location.reload();
    nombreamigo.splice(0,nombreamigo.length);
}