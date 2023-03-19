function calcularDescuento(codigo,valor_auto) {
    let descuento_aplicado = 0;
    let auxiliar = 0;
    switch (codigo) {
        case 'fiesta':
            auxiliar = (5 * valor_auto ) / 100;
            descuento_aplicado =  valor_auto - auxiliar;
            console.log('Se aplicara un descuento del %5',auxiliar,'$ su valor con el descuento aplicado sera de: ', descuento_aplicado,'$');
            break;
        case 'focus':
            auxiliar = (5 * valor_auto ) / 100;
            descuento_aplicado =  valor_auto - auxiliar;
            console.log('Se aplicara un descuento del %10',auxiliar,'$ su valor con el descuento aplicado sera de: ', descuento_aplicado,'$');
            break;
        default:
            console.log('No existe tal codigo, no se aplicara descuento.');
            break;
    }
}
let codigo_del_auto = prompt('Ingrese a continuacion el codigo del auto:');
codigo_del_auto = codigo_del_auto.toLowerCase();
let valor_del_auto = prompt("Ingrese a continuacion el valor del auto: ");
calcularDescuento(codigo_del_auto,valor_del_auto);