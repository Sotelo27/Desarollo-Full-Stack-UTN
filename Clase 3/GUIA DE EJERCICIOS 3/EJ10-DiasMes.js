function diasDelMes(){
    //se utilizo html en este ejercicio
    let mes = prompt('Ingrese el mes a continuacion: ');
    switch (mes.toLowerCase()) {
        case 'enero':
            alert('31');
            break;
        case 'febrero':
            let biciesto = prompt("Ingrese a continuacion si el anio es biciesto o no: ")
            biciesto = biciesto.toLowerCase();
            if (biciesto == 'si'){
                alert('29');
            }
            else{
                alert('28')
            }
            break;
        case 'marzo':
            alert('31');
            break;
        case 'abril':
            alert('30');
            break;
        case 'mayo':
            alert('31');
            break;
        case 'junio':
            alert('30');
            break;
        case 'julio':
            alert('31');
            break;
        case 'agosto':
            alert('31');
            break;
        case 'septiembre':
            alert('30');
            break;
        case 'octubre':
            alert('31');
            break;
        case 'noviembre':
            alert('30');
            break;
        case 'diciembre':
            alert('31');
            break;
        default:
            alert('Ese mes no existe')
            break;
        
    }
}
diasDelMes();
