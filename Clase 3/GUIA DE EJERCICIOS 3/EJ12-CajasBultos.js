function calcularCajas(bultos_Stock,bultos_Cajas){
    let cajas_llenas = bultos_Stock / bultos_Cajas;
    let sobrante_bultos = bultos_Stock % bultos_Cajas;
    console.log('Se pueden llenar un total de : ', cajas_llenas , ' cajas y el sobrante de bultos sera de: ',sobrante_bultos);
}

bultos_stock = parseInt(prompt('Ingrese a continuacion los bultos en stock: '));
bultos_cajas = parseInt(prompt('Ingrese a continuacion los bultos en cajas: '))
calcularCajas(bultos_stock,bultos_cajas);