function intercambiarValores(valor_a,valor_b){
    console.log('valor de a es: ',valor_a,' valor de b es: ',valor_b);
    let auxiliar = valor_b;
    valor_b = valor_a;
    valor_a = auxiliar;
    console.log('valor de a es: ',valor_a,' valor de b es: ',valor_b);
}

intercambiarValores(2,1);