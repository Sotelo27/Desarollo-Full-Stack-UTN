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
    <form>
        Nombre del cliente:
        <input type = 'text' placeholder="ingrese su nombre aqui" size="20" id = "nombre">
        <br>
        Seleccione el material de la caja: 
        <select class="" name="Material" id = "material">
            <option value = "Madera" >Madera</option>
            <option value = "Acero" >Acero</option>
            <option value = "Plastico" >Plastico</option>
        </select><br>
        <div >
            Seleccione el Tamanio: <br>
            <input type="radio" name="tamanio" value="Diminuto" id="diminuto" /> Diminuto
            <input type="radio" name="tamanio" value="Mediano" id="mediano" /> Mediano
            <input type = "radio" name="tamanio" value="Grande" id = "grande"/> Grande
        </div >
        Comentarios:<br>
        <textarea name = "Comentarios" rows = "5" cols="25" id = "comentarios"></textarea>
        <p></p>
        <button onclick="mostrarValoresSeleccionados()">Enviar</button> <button></button>
    </form>
    <script>
        function mostrarValoresSeleccionados(){
            let valor = document.getElementById("diminuto").value
            if (document.getElementById("mediano").checked){
                valor = document.getElementById("mediano").value;
            }else{
                valor = document.getElementById("grande").value;
            }
            let valores = document.getElementById("nombre").value + " ha pedido una caja de " + document.getElementById("material").value + " con unas dimensiones " + valor +"." + document.getElementById("comentarios").value + ".";
            alert(valores);
        }
    </script>
</body>
</html>
*/

//-----------------------------------------------------//


//EJ13

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
    Seleccione a continuacion uno de los siguientes numeros, tiene un total de 3 intentos para acertar el numero.
    <select class = "" name="valores" id="numeros">
        <option value = 0  onclick="evaluarCorrecta(this.value)">0</option>
        <option value = 1 onclick="evaluarCorrecta(this.value)">1</option>
        <option value = 2 onclick="evaluarCorrecta(this.value)">2</option>
        <option value = 3 onclick="evaluarCorrecta(this.value)" >3</option>
        <option value = 4 onclick="evaluarCorrecta(this.value)">4</option>
        <option value = 5 onclick="evaluarCorrecta(this.value)">5</option>
    </select>
    <script>
        let valor = Math.floor(Math.random()*5);
        valor = valor.toString();
        let intentos = 0;
        console.log(valor);
        console.log(intentos);
        function evaluarCorrecta(valorElegido){
            if (valorElegido === valor){
                alert("ACERTASTE!!!");
                valor = Math.floor(Math.random()*5);
                valor = valor.toString();
                intentos = 0;
            }else if (intentos !==3){
                intentos +=1;
            }else{
                alert("PERDISTE!!!!");
                valor = Math.floor(Math.random()*5);
                valor = valor.toString();
                intentos = 0;
            }
            console.log(valor);
            console.log(intentos);
        }
    </script>
</body>
</html>
*/

//-----------------------------------------------------//


//EJ14

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
    Introduzca a continuacion su nombre: 
    <input name="nombrePersona" size="25" id="nombrePersona" >
    <br>
    <button onclick="listarPersonas()">Registrar</button>
    <ul id="listaDesordenada">
        <li></li>
    </ul>
    <script>
        let listaPersonas =['hola'];
        let contador = 0;
        function concatenarValores(array,valor,posicion){
            array[posicion] = valor;
        }

        function agregarListaAWeb(lista){
            let li = "";
            for (let i = 0; i < lista.lenght ; i ++){
                li = "<li>" + lista[i] + "<li>";
            }
            document.getElementById("listaDesordenada").innerHTML = lista;
        }

        function listarPersonas(){
            let persona = document.getElementById("nombrePersona").value;
            concatenarValores(listaPersonas,persona,contador);
            agregarListaAWeb(listaPersonas);
            console.log(listaPersonas);
            contador ++;
        }

        
    </script>
</body>
</html>
*/

//-----------------------------------------------------//