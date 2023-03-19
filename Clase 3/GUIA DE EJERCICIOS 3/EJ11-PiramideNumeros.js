function piramideNumeros(){
    //en este ejercicio se utilizo html
    let numero = prompt('Ingrese a continuacion un numero y se creara una "piramide" de numeros hasta el valor ingresado : ');
    let piramide = "";
    for (let i = 1;i <= numero; i++){
        for (let j = 1;j <= i;j++){
            piramide += j.toString();
        }
        console.log(piramide);
        piramide = "";
    }
}
piramideNumeros();