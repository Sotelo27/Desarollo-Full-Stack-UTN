function convertirAMayusYMinus(){
    //se utilizo html en este ejercicio.
    let texto = prompt("Ingrese a continuacion un texto: ");
    let mayuscula = texto.toUpperCase();
    let minuscula = texto.toLowerCase();
    alert('El texto ingresado en Minuscula es: '+ minuscula + ' y en Mayuscula es: ' + mayuscula );
}
convertirAMayusYMinus();