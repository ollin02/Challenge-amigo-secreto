# Challenge Amigo Secreto
![](https://github.com/ollin02/Challenge-amigo-secreto/blob/main/assets/amigo-secreto.png)

## Introducción
<p>En este documento, se detallará el desarrollo de un sistema que permite a los usuarios ingresar los nombres de sus amigos, agregar estos nombres a una lista, y, finalmente, realizar un sorteo aleatorio para seleccionar un nombre de la lista. Este sistema incluirá validaciones para evitar que se ingresen cadenas vacías y ofrecerá una interfaz sencilla y amigable para su uso. </pEn>

## Objetivo
- desarrollar habilidades en lógica de programación del código JavaScript.
- aplicando conceptos clave como funciones, arrays, condicionales y variables.

## Requisitos del Sistema
<p>Para desarrollar este sistema, se requieren los siguientes componentes:</pPara>
- Una interfaz de usuario para ingresar los nombres de los amigos.
- Un botón para añadir los nombres ingresados a una lista.
- Una validación para evitar la inclusión de nombres vacíos en la lista.
- Un botón para realizar un sorteo aleatorio de un amigo de la lista.
- Una visualización en pantalla del nombre sorteado.

## Desarrollo del Sistema
<p>Para la interfaz de usuario, utilizaremos HTML para la estructura básica y CSS para el estilo. Proporcionado por el challenge de Alura. En la etiqueta button se genera un evento onclick donde se llama a la función agregarAmigo(). Esta función se encargará de añadir el nombre ingresado al listado de amigos y actualizar la visualización en la pantalla.</p>

```html
 <button class="button-add" onclick="agregarAmigo()">Añadir</button>
```

<p>Para empezar, declaramos el id = "amigo" en la etiqueta input de nuestro formulario HTML, lo que nos permitirá identificar y manipular fácilmente este elemento en nuestro código JavaScript. Aquí tienes un ejemplo de cómo se vería el código:</p>

```html
 <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
```

<p>Capturamos el valor del input y lo declaramos como varible general en el archivo app.js donde haremos la logica para el funcionamiento de la aplicación, tambien declaramos como varible general un arreglo para guardar la lista de los nombres de los amigos.</p>

```javascript
  let nombreamigo = [];
  let itemInput = document.getElementById('amigo');
```

<p>La función agregarAmigo() llevar la logica para mostrar la lista en la pagina conforme se agrega un nombre se guardara en una lista y tambien sera la encargada de validar que el usuario haya ingresado algun nombre.</p>

```javascript
  //funcio para agregar nombre del amigo
  function agregarAmigo(){
    //obtenemos el valor del campo input
    let nombre = itemInput.value.trim(); //la funcion trimm() es para que no se guarden espacios 
  
    // checa que el input no este vacio
    if(nombre){
        //agregamos el valor a una lista
        nombreamigo.push(nombre);
        
        //funcio que agrega la lista desordenada en el archivo index.html de forma dinamica
        agregarItem(nombre,listaNombre);

        //Limpiar el campo de entrada para el siguiente elemento
        limpiarCaja(itemInput)

    }else {
        //Mensaje de alerta cuando no ingresa ningun nombre y aprieta el boton añadir
        alert('Por favor, ingresae un nombre valido.');
    }
  }
```

<p>Para imprimir en la pagina la lista de nobres se le coloca el id =  "listaAmigos" a la etiqueta ul para generar la lista desordenada de forma dinamica </p>

```html
 <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
```

<p>Declaro como variable general listaNombre en el archivo app.js</p>

```javascript
  let listaNombre = document.getElementById('listaAmigos'); 
```

<p>Genero la function agregarItem(elemeto, lista) donde se solicita un elemento el valor que sera agregado en la lista</p>

```javascript
//funcion para agregar a lista desordenada
function agregarItem(elemeto, lista){
    //crea un nuevo elemento o etiqueta li
    let listItem = document.createElement('li');
    listItem.textContent = elemeto;
    //se imprime como lista desordenada
    lista.appendChild(listItem);
}
```

<p>Genero la function para limpiar el input una vez que el usuario da enter para agregar un nombre a la lista</p>

```javascript
//funcion para borra datos
function limpiarCaja(elemento) {
    elemento.value = '';
}
```

<p>Para mostrar el resultado se coloca el id = "resultado" a la etiqueta ul</p>

```html
 <ul id="resultado" class="result-list" aria-live="polite"></ul>
```

<p>Declaro como varible general resultado </p>

```javascript
  let resultado = document.getElementById('resultado');
```

<p>Genero la function sortearAmigo() para realizar el sorteo</p>

```javascript
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
```

<p>Para borra la lista de nombres se genero la funcion eliminarLista(elemento)</p>

```javascript
//funcion que hace el sorteo
function eliminarLista(elemento){
    elemento.remove();
}
```

## Conclusión
<p>El sistema descrito en este documento permite a los usuarios ingresar nombres de amigos, validarlos para evitar entradas vacías, y realizar un sorteo aleatorio para seleccionar a uno de los amigos de la lista. La implementación es sencilla. Este proyecto es una excelente introducción a la manipulación del DOM con JavaScript y a la creación de interfaces de usuario interactivas.</p>
