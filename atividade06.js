//Lista de Exercícios
//Dada a matriz abaixo, faça um programa em JavaScript que imprima os elementos da sua diagonal principal.

let matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];
console.table(matriz);
for (let mB = 0; mB < matriz.length; mB++) {
    console.log(matriz[mB][mB]);
}