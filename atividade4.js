var matriz = [
  [16, 3, 8],
  [22, 4, 5],
  [26, 5, 1],
];

console.table(matriz);

//Exibir ao usuário valores das diagonais (4)
console.log(
  "Primeira diagonal:",
  matriz[0][0],
  ",",
  matriz[1][1],
  ",",
  matriz[2][2]
);
console.log(
  "Segunda diagonal:",
  matriz[0][2],
  ",",
  matriz[1][1],
  ",",
  matriz[2][0]
);
console.log(
  "Terceira diagonal:",
  matriz[2][0],
  ",",
  matriz[1][1],
  ",",
  matriz[0][2]
);
console.log(
  "Quarta diagonal:",
  matriz[2][2],
  ",",
  matriz[1][1],
  ",",
  matriz[0][0]
);

console.log("-----------------------");

var usuario = [
  "Nalu",
  16,
  "amarelo",
  "amora",
  "Rua Maria Tereza Gomes",
  "Amorim",
];

console.log("Olá", usuario[0] + "! Seja bem-vinda ao nosso sistema.");
console.log(
  "Você mora no endereço",
  usuario[4] +
  ", e tem um pet chamado " +
  usuario[5] +
  "."
);
console.log(
  "Sua idade é",
  usuario[1],
  "e gosta muito da fruta",
  usuario[3] +
  "."
);
console.log("Sua cor favorita é", usuario[2] + ".");
