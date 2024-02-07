//Criando conta de banco de um personagem com JavaScript
var nome = "Amelie";
var banco = "Itaú";
var agência = 20468;
var conta = 13579;
var saldo = 5000;

console.log("Olá, que bom te ter de volta", nome);
console.log("Bem-vinda ao banco", banco);
console.log(
  "Seu número da agência é",
  agência,
  "e o número da conta é:",
  conta
);
console.log("Atualmente seu saldo é de R$", saldo);

console.log("");

console.log(
  "Você recebeu um pix de Safira de R$ 12,00. Agora seu saldo é de R$",
  (saldo = saldo + 12)
);

console.log(
  "Trasnferência de R$ 5,00 realizada para Padre Anderson no pix. Saldo atual: R$",
  (saldo = saldo - 5)
);
console.log(
  "Você fez uma compra na loja Roth de R$ 50,00. Saldo atual: R$",
  (saldo = saldo - 50)
);
console.log(
  "Você fez uma compra no supermercado Jaú Serve de R$ 1.025,00. Saldo atual:R$",
  (saldo = saldo - 1025)
);
console.log(
  "Você recebeu um pix de Luna de R$ 68,00. Saldo atual:R$",
  (saldo = saldo + 68)
);

console.log("");

console.log("Olá, que bom te ter novamente aqui", nome);
console.log("Bem-vinda ao banco", banco);
console.log(
  "Seu número da agência é",
  agência,
  "e o número da conta é:",
  conta
);
console.log("Seu saldo atual é de R$", saldo);
