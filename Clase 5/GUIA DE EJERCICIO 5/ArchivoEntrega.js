//EJ1

let array_colores = ['amarillo','rojo','azul','verde','violeta'];

//-----------------------------------------------------//


//EJ2

let variableGuardada = array_colores[2];

//-----------------------------------------------------//


//EJ3

let primerElemento = array_colores[0];
console.log(primerElemento[0]);

//-----------------------------------------------------//

//EJ4

console.log(Math.floor(Math.random()*100));

//-----------------------------------------------------//


//EJ5

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

//-----------------------------------------------------//


//EJ6

let numerosAleatorios = [];

for (let numeros = 0 ; numeros < 10 ; numeros ++){
    valor = Math.floor(Math.random()*100);
    numerosAleatorios[numeros] = valor;
}

console.log(numerosAleatorios);

//-----------------------------------------------------//


//EJ7

let copiaArrayNumeros = [];

for (let i = 0;i < 10 ; i++){
    valor = Math.floor(Math.random()*100);
    copiaArrayNumeros[i] = valor;
}

console.log(numerosAleatorios);
console.log(copiaArrayNumeros);

//-----------------------------------------------------//


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

//-----------------------------------------------------//


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form >
        Ingrese valor en dolar y se convertira en pesos: 
        <input type="number" placeholder="Ingrese valor en dolar" size="20" id = 'dolar'>
        <p></p>
        <a> <button onclick="conversorDolarPeso()">Convertir</button></a>
    </form>
    <script>
        //EJ9
        function conversorDolarPeso(){
            let valorpeso = document.getElementById('dolar').value * 300;
            alert(valorpeso);
        }
    </script>
</body>
</html>
*/

//-----------------------------------------------------//


//EJ10

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form >
        Ingrese valor en pesos y se convertira en dolar: 
        <input type="number" placeholder="Ingrese valor en pesos" size="20" id = 'dolar'>
        <p></p>
        <a> <button onclick="conversorDolarPeso()">Convertir</button></a>
    </form>
    <script>
        //EJ10
        function conversorDolarPeso(){
            let valordolar = document.getElementById('dolar').value / 300;
            alert(valordolar);
        }
    </script>
</body>
</html>
*/

//-----------------------------------------------------//


//EJ11

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJ11-CONVERSORGRADOS</title>
</head>
<body>
    <form >
        Ingrese valor en celsius y se convertira en Farenheit
        <input type="number" placeholder="Ingrese valor en celsius" size="20" id = 'celsius'>
        <p></p>
        <a> <button onclick="conversorCelsiusFarenheit()">Convertir</button></a>
    </form>
    <script>
        //EJ11
        function conversorCelsiusFarenheit(){
            let valorFahrenheit = (document.getElementById('celsius').value * 1.18) + 32;
            alert(valorFahrenheit);
        }
    </script>
</body>
</html>
*/

//-----------------------------------------------------//


//EJ12


//-----------------------------------------------------//


//EJ13


//-----------------------------------------------------//


//EJ14


//-----------------------------------------------------//