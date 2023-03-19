function calcularFactorial(){
    //Para este ejercicio se utilizo HTML
    let valor = prompt('Ingrese un valor menor a 10 para calcular su factorial:');
    while (valor > 10){
        valor = prompt("A ingresado un valor mayor a 10, ingrese nuevamente: ");
    }
    let total = 1;
    for (let contador = 1; contador <= valor ; contador ++){
        total = total * contador;
    }
    alert("El factorial del numero ingresado es: " + total);
}

calcularFactorial();