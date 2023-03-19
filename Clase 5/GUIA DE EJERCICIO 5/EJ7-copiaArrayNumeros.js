//EJ7

let numerosAleatorios = [0,1,2,3,4,5,6,7,8,9];
let copiaArrayNumeros = [];

for (let i = 0;i < 10 ; i++){
    valor = Math.floor(Math.random()*100);
    copiaArrayNumeros[i] = valor;
}

console.log(numerosAleatorios);
console.log(copiaArrayNumeros);