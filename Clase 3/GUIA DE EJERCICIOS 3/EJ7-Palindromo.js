function definirPalindromo(){
    //Para este ejercicio se utilizo html
    let texto = prompt('Ingrese a continuacion una oracion y se informara si la palabra es palindromo: ');
    let array = texto.split("");
    let texto_reverso = array.reverse();
    if (texto == texto_reverso.join("")){
        alert("El texto ingresado es palindromo")
    }
    else{
        alert("El texto no es palindromo")
    }
}

definirPalindromo();