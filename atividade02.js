//Lista de Exercícios

//01
var nome = "Gabriela";
var nascimento = 2008;

console.log(nome, "nasceu em", nascimento);
var idade = 2024 - nascimento;
console.log(nome, "tem", 2024 - nascimento, "anos de idade!");

console.log("--------------------------------");
//02.
var comprimento = 12;
var largura = 6;

comprimento *= largura;
console.log("A área do retângulo é de", comprimento, "centímetros quadrados.");

console.log("-------------------------------");
//03.
var altura = 5;

comprimento *= altura;
console.log("O volume seria", comprimento, "centímetros cúbicos.");

console.log("-------------------------------");
//04.
//2x^2+3x-1
var a = 2;
var b = 3;
var c = -1;

var delta = b ** 2 - 4 * a * c;
console.log("O valor de delta seria equivalente a", delta);

console.log("-------------------------------");
//05.
var compra = 450;
var desconto = 3;
var valDesc = (compra / 100) * desconto;

console.log("O desconto foi de R$" + valDesc);
console.log("E o valor total da compra é de R$", compra - valDesc);

console.log("-------------------------------");
//06.
var temp = 3.5;
var velo = 95;
var dist = velo * temp;
console.log("A distância percorrida é de " + dist + "km");
