//EJ6

let numerosAleatorios = [];

for (let numeros = 0 ; numeros < 10 ; numeros ++){
    valor = Math.floor(Math.random()*100);
    numerosAleatorios[numeros] = valor;
}

console.log(numerosAleatorios);