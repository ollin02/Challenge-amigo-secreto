// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const inputnombre = document.querySelector('#amigo');
const seleccion = document.querySelector('#seleccion');

//Asignar evento
inputnombre.addEventListener('blur',function(evento){
    
   if(evento.target.value.trim() === ""){
        mostrarAlerta('Por favor ingrese un nombre valido',evento.target.parentElement);
        return
   }
   limpiarAlerta(evento.target.parentElement);
});

function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia);
    
    const error = document.createElement('P');
    error.textContent = mensaje;

    //agregamos un color al fondo
    error.classList.add('bg-red-600','text-white', 'p-2','text-center');

    referencia.appendChild(error);   
}

function limpiarAlerta(referencia){
    //Comprovamos si ya existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if(alerta){
        alerta.remove();
    }
}

function agregarAmigo(){
    /*let nombreAmigo = document.getElementById('amigo');*/

}