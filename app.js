let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `ACERTASTE el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El ususario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es MENOR');
        } else {
            asignarTextoElemento('p', 'El número secreto es MAYOR');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo) + 1;

    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los numero posibles');
    } else{
    //Si el numero generado esta incluido en la lista 


    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push( numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('p',`indica un número del uno al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
 
condicionesIniciales();