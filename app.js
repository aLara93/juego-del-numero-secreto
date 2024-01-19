let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    console.log(intentos);
    console.log(numeroSecreto);
    
   if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento ('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    //el usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p', 'el numero numero secreto es menor');    
    } else {
            asignarTextoElemento ('p', 'el numero numero secreto es mayor');   
        }
        intentos++
        limpiarCaja();
    }
    return; 
}

function limpiarCaja() {
    valorCaja = document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
   console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento ('p','ya se sortearon todos los numeros posibles');
    } else {  

    // si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
   }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto!');
asignarTextoElemento('p', `elige un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    //indicar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    console.log('Botón de reinicio habilitado');
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
   


condicionesIniciales();

