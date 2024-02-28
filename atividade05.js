//Lista de Exercícios

//01. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorte sua idade.

function idade(nascimento, anoatual) {
  return anoatual - nascimento;
}
console.log(`A idade da pessoa é: ${idade(2008, 2024)} anos.`);

console.log(`-------------------`);

//02. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode
//viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms/L.

function médiaCombustível(litros) {
  return litros * 12;
}
var lts = 22;
console.log(`O carro percorre com ${lts} litros: ${médiaCombustível(lts)}Kms`);

console.log(`----------------------`);

//Crie uma função que receba a idade de uma pessoa e retorne uma frase dizendo se ela pode votar ou não.

function votar(idade) {
  if (idade < 16) console.log("Você não pode votar!");
  else if (idade >= 16 && idade < 18)
    console.log("Você pode votar, mas não é obrigatório");
  else console.log("Você pode votar");
}
votar(54);

console.log(`-------------`);

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`Voce nao pode votar`);
      break;
    case idade >= 16 && idade < 18:
      console.log(`Você pode votar, mas não é obrigatório`);
      break;
    default:
      console.log(`Você pode votar`);
      break;
  }
}
votacao(30);
