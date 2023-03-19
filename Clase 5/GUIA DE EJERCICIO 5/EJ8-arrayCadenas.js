//EJ8

function concatenarValores(array,valor,posicion){
    array[posicion] = valor;
    array[posicion+1] = '-';
}

function arrayCadenas(){
    let cadena = prompt("Ingrese a continuacion una cadena de texto: ");
    let arrayCadenaDeTexto = [];
    let contador = 0;
    while (cadena.toLocaleLowerCase() != ('cancelar')){
        cadena = cadena.toLocaleLowerCase();
        concatenarValores(arrayCadenaDeTexto,cadena,contador);
        cadena = prompt("Ingrese a continuacion una cadena de texto: ");
        contador += 2;
    }
    console.log(arrayCadenaDeTexto);
    contador = 0;
    while (contador < arrayCadenaDeTexto.length){
        console.log(arrayCadenaDeTexto[contador]);
        contador++;
    }
}
arrayCadenas();

