//Lista de Exercícios:

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");
console.table(frutas);

console.log("Exibição da quinto índice:", frutas[5]);

//frutas.splice(4, 1);
//console.table(frutas);

var position = frutas.indexOf("Uva"); //indexOf: índice de alguma coisa
console.log(position);
frutas.splice(position, 1);
console.table(frutas);

//Cópia de array
var copia = frutas.slice(2, 5);
console.table(copia);

console.log("----------------------------------------");

var ele_num = [12, 7, 26, 16, 3];
console.table(ele_num);

console.log("O terceiro elemento é o:", ele_num[2]);

var copiaNumber = ele_num.slice();

//dobro do original
copiaNumber[0] = ele_num[0]*2;
copiaNumber[1] = ele_num[1]*2;
copiaNumber[2] = ele_num[2]*2;
copiaNumber[3] = ele_num[3]*2;
copiaNumber[4] = ele_num[4]*2;

console.table(copiaNumber);
