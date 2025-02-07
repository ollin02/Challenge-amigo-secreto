// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreamigo = [];
let itemInput = document.getElementById('amigo');
let listaNombre = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
//sdocument.querySelector('#sortear').setAttribute('disabled','true');

//funcion para borra datos
function limpiarCaja(elemento) {
    elemento.value = '';
}

//funcion para agregar a lista desordenada
function agregarItem(elemeto, lista){
    //crea un nuevo elemento
    let listItem = document.createElement('li');
    listItem.textContent = elemeto;
    //se imprime como lista desordenada
    lista.appendChild(listItem);
}

//funcio para agregar nombre del amigo
function agregarAmigo(){
    //obtenemos el valor del campo input
    let nombre = itemInput.value.trim();
  
    // checa the input no este vacio
    if(nombre){
        //agregamos el valor a una lista
        nombreamigo.push(nombre);
        
        //Se agrega la lista desordenada
        agregarItem(nombre,listaNombre);

        //Limpiar el campo de entrada para el siguiente elemento
        limpiarCaja(itemInput)

    }else {
        //Mensaje de alerta cuando no ingresa ningun nombre y aprieta el boton añadir
        alert('Por favor, ingresae un nombre valido.');
    }
}

//funcion que hace el sorteo
function sortearAmigo(){
    //Elimina los datos de lista
    eliminarLista(listaNombre);
    
    // se genera numero aleatorio del tamaño de la lista
    let posicionAleatoria = Math.floor(Math.random()*nombreamigo.length);

    //Se imprime el ganador
    agregarItem(nombreamigo[posicionAleatoria], resultado);

    //Deshabilitar el botón de Sortear amigo
    document.querySelector('#sortear').setAttribute('disabled','true');
}

//funcion para eliminar datos del DOM
function eliminarLista(elemento){
    elemento.remove();
}