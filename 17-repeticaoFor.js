//VAR = cria variável global
//CONST = cria constante, não muda
//LET = cria variável funcional dentro de um grupo de código
//tudo o que está dentro de chaves é um grupo de código.

//Laço de repetição for
//escrever para o usuário 1000x "Prestar mais atenção nas aulas!"

// //mostrando números pares
for (let i = 0; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando números impares
for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

//Escreva todos os números de 1 a 20 com FOR
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Escreva todos os números Pares entre 1 a 20 com FOR
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  if (i % 2 == 0);
    console.log(i);
}

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Calcule e exiba a somatória de seus elementos utilizando FOR
const numeros = [5,6,8,14,0,9,7,2]
var somar = 0

for (let i = 0; i < numeros.length; i++) {
    somar += numeros[i]
}
console.log(`A soma dos elementos do array é: ${somar}`);

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostre o novo vetor.
let num = [5,6,8,14,0,9,7,2]
console.table(num);
for (let i = 0; i < num.length; i++) {
num[i] *= 3;
}

console.log(num);

//Dada a matriz 2x3, escrever para o usuário todos os seus elemento 
//com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]
var matriz = [
[8, 4, 1],
[3, 7, 8],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
 for (let coluna = 0; coluna < matriz[0].length; coluna++) {
  console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`);
  
 }
  
}

