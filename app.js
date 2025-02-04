// usando el metodo DOCUMENT OBJET MODEL  (DOM)

//Conectamos el archivo JavaScript al HTML usando la etiqueta <script> con el atributo src.
// Aprendimos a acceder a los elementos HTML desde JavaScript usando el 
// Document Object Model (DOM) y
//  el método document.querySelector(). que es un selector generico
//Seleccionamos el elemento <h1> y el elemento <p> del HTML y les asignamos un texto usando la propiedad innerHTML.
//Esto nos permitió mostrar el título "Juego del número secreto" y el mensaje "Selecciona un número del 1 al 20" en la página web.


/*

let titulo = document.querySelector (" h1");
titulo.innerHTML = " Juego del Numero Secreto";


let parrafo = document.querySelector ("p");
parrafo.innerHTML = " Inserta un Digito del 1 al 20 ";

//PARA INTERACTUAL CON BOTONES INTERACTIVOS EN LA PAGINA
function intentoDeUsuario (){
    alert (" CLICK DESDE EL BOTON y verificar el funcionamiento de LA FUNCION"); 
}   

*/

/*
 Para optimizar el código, se crea una función llamada asignarTextoElemento ( ){ } 
que encapsulara la lógica de asignar texto a un elemento HTML.

La función recibe dos parámetros: ELEMENTO (el elemento HTML al que se asignará el texto pueden ser headers parrafos) 
y texto (el texto a asignar), estos parametros NO son encerrados entre comillas " " ya que estan asignados dentro de la propia funcion

Dentro de la función, se utiliza el document.querySelector ()   para seleccionar el elemento y se le asigna el texto usando innerHTML.

Al llamar a la función asignarTextoElemento ()  con los parámetros adecuados, se logra el mismo resultado que antes, 
pero con código más optimizado y reutilizableara n cantidad de veces  
*/

// elementoHTML es la sustitucion del nombre de la varaible llamada titulo
// elemento es la sustitucion del header o encabezado h1 

//Se crea una variable numeroSecreto fuera de la función y se le asigna el valor retornado por 
// la función GenerarNumeroSecreto();   
// Se muestra que se puede tener variables con el mismo nombre dentro y fuera de la función, pero se 
// recomienda evitarlo para evitar confusiones.


        // estas dos varianles se inisializan en 0 ya que los valores reales se veran reflejados en la funcion llamada
         // condicionesIniciales ();
let numeroSecreto = 0;  
let contadorIntentos = 0;    



let numeroGenerado = 0;
 
let listanumeroSorteado = [];    //variable para listado

let numeroMaximo = 20;        //numero limite maximo que tiene la lista que tiene un rango del 1 a 20, RANGO MAXIMO DE 20
    


// FUNCION 1
function asignarTextoElemento ( eLemento, texto) {   
    let elementoHTML = document.querySelector ( eLemento );
    elementoHTML.innerHTML = texto ;
    return;
}
//PARA INTERACTUAL CON BOTONES INTERACTIVOS EN LA PAGINA
function verificacionDeIntentoUsuario (){
    // ingresado por el usuario a través del elemento input en HTML, utilizando 
    // la función getElementById() de JavaScript.
    // Revisamos que el valor capturado del input es de tipo string, mientras que el número secreto generado 
    // por la función es de tipo number. Por lo tanto, tuvimos que utilizar parseInt() 
    // para convertir el valor del input a número antes de compararlo.

    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
        console.log (numeroDeUsuario);

    // Explicamos la importancia de comparar valores no solo por su valor, sino también
    // por su tipo de dato, utilizando el operador de igualdad estricta ===.
    // y se ocupa dentro de la funcion el operador ternario y temple string
        if ( numeroDeUsuario === numeroSecreto){
            asignarTextoElemento ( " p ", `Por fin le atinaste 😑👽🤟🏻 , lo hiciste en ${contadorIntentos} ${ (contadorIntentos === 1) ? "vez 😎" : " veces 😡" } ` );

            //aqui se abilitara el boton de NUEVO JUEGO YA QUE ES CUANDO EL USUARIO ACIERTA AL NUMERO SECRETO con el
            //usando el atributo removeAttribute ("disabled"); se desabilita el disable
            document.getElementById ("reiniciar").removeAttribute ("disabled");

            }

        else {
                 // ESTA SECCION ES DONDE EL USARARIO NO ACERTO AL NUMERO SECRETO Y SON EVALUADAS LAS RESPUESTAS
                if ( numeroDeUsuario > numeroSecreto ) {
                    asignarTextoElemento (" p ", "Intenta de nuevo, el numero Secreto es Menor" );
                    }
                else {
                    asignarTextoElemento (" p ", "Intenta de nuevo, el numero Secreto es Mayor" );
                }

                    contadorIntentos = contadorIntentos +1;   // contador de intentos
                    limparCaja ();         // aqui se manda llamar a la funcion cuando NO se acierta al valor

            }

    return;
}


// FUNCION 2
// para limpiar la caja donde se colocan los digitos
// se ocupa el selector .querySelector , que usa el simbolo de # y el nombre del input que en este caso es #valorUsuario
// tambien se puede ocupar una version mas larga del siguinete codigo:
//   let valorCaja = document.querySelector ("#valorUsuario");
//    valorCaja.value = " ";

//    
function limparCaja () {

    document.querySelector (" #valorUsuario ").value ; 

}



// FUNCION 3 
//Se crea una función llamada GenerarNumeroSecreto() que genera un número aleatorio entre 1 y 20
//utilizando la función Math.random() y Math.floor().
//La función GenerarNumeroSecreto() retorna el número aleatorio generado.
function GenerarNumeroSecreto() {

    //return Math.floor ( Math.random( )*20 )+1;

    let numeroGenerado = Math.floor ( Math.random( )* numeroMaximo ) +1; // si el numero generado esta inlcuido en la lista entra al if
                                                              // si no, entra al else

        console.log ( `# SECRETO GENERADO EN FUNCION generarnumeroSecreto ${numeroGenerado}`);      //para ser visualizado en la consola del navegador
        console.log (listanumeroSorteado);



         //PROBLEMA CON RECURcIBIDAD, es DEBIDO A QUE EL PROGRAMA ENTRA EN UN CICLO INFINITO Y SE PASMA
         //PARA ELLO SE UTILIZA UN VALIDADOR o condicion de salida 
        //seccion donde se compara la listade numero sorteados vs el rango maximo establecido de

    if ( listanumeroSorteado.length == numeroMaximo)    {
        asignarTextoElemento ("p", "Ya fueron usados todos los numeros posibles"  );

    }

    else {


            if (listanumeroSorteado.includes(numeroGenerado))  {     // metodo includes, con este metodo verifica si un dato en esfecifco 
                                                                    // se encuetra registrado

                return GenerarNumeroSecreto ();                     // aqui se ocupa el metodo de la recursibidadel, el cual es utilizado para llamar a una 
                                                                    // funcion ya existente para ser usada nuevamente en otro momento y asi  o estar genrando variables 
                                                                    //o funciones indefinidamente
            }      
            
                else{
                    listanumeroSorteado.push(numeroGenerado);
                    return numeroGenerado;
                }

         }

    
}


//FUNCION 4
// aqui se manda a llamar la funcion asignarTextoElemento ( elemnto, texto) {  }; 
// se genera un nuevo numero aleatorio y reicia el juego con el contador
function condicionesIniciales (){

asignarTextoElemento (" h1 ", "¡ 😨NUMERO SUPER SECRETO,😭EL JUEGO 😰!" );
asignarTextoElemento (" p ", `Escribe un numero del 1 al ${numeroMaximo}`  );
numeroSecreto = GenerarNumeroSecreto (); 
    console.log ( `numero secreto generado en la funcion cond. iniciales = ${numeroSecreto}` );

contadorIntentos = 1;
}


// FUNCION 5 esta funcion anidara a otras funciones para optimizar el codigo

function reiniciarJuego () {


    //DE MANDA A LLAMAR A DISTINTAS FUNCIONES DENTRO DE ESTA FUNCION
    //limpiar caja, es decir, se simula como si se estuviera aprentando un F5
    limparCaja ();
    


    // indicar mensaje de intervalos de numero,es decir, llavar a los valores iniciales a la pagina
    // generar numero aleatorio nuevamente al reiniciar el juego
    // inicializar o reiciar el numero de intentos
    condicionesIniciales ();

    
    // deshabilitar boton de NUEVO JUEGO, ya que solo se habilita cuando hay un nuevo juego con el 
    // y se usa el atributo  .setAttribute("disabled", "true");  que es la funcion contraria de  .removeAttribute ("disabled");

        document.querySelector ("#reiniciar").setAttribute("disabled", "true");
        

}

condicionesIniciales ();







