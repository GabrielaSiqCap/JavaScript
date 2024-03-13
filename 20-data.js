//Criando um objeto do tipo data
var data1 = new Date("2024=03-13");
console.log(data1);

//Criando um objeto do tipo "data" com data específica Date()
var data2 = new Date("2006=05-12");
console.log(data2);

//estraindo partes de uma data
var data3 = new Date("2008=03-16");
console.log(`Data:  ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(`Retorna o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

const diferenca = data1.getTime() - data3.getTime();
console.log(`Diferença: ${diferenca}`);
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade}`);

console.log("-------------------------------------------");

const diferencaAnos = data1.getFullYear() - data3.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);

if (
  data1.getMonth() < data3.getMonth() ||
  (data1.getMonth() === data1.getMonth() && data1.getDate() < data3.getDate())
) {
  console.log(`Ainda não fez aniversário!`);
  console.log(`Oi, eu sou a Gabi e tenho ${diferencaAnos - 1} anos`);
}
