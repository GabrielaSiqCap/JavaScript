var habitA = 100003;
var habitB = 300004;
var ano = 0;

while (habitA < habitB) {
  ano++;
  habitA *= 1.03;
  habitB *= 1.015;
}

console.log(
  `A população A (${Math.round(habitA)}) irá passar a população B (${Math.round(
    habitA
  )}) em ${ano} anos!`
);

console.log("-------------------");

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";
var vitoria = 0;
var derrota = 0;
var velha = 0;

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}

// //Empate 
// if (!tabuleiro.some((linha) => linha.includes(" "))) {
//     return "empate";
// }

// return "";
// }

// //Loop de execução do Jogo
// let vencedor = "";
// while (!vencedor) {
//     //Jogada do jogador 1
//     jogadaAleatoria(jogador1);
// }

for (let linha = 0; linha < tabuleiro.length; linha += 9 ) {
   }
   
  if (jogar == tabuleiro) {
    console.log(`Parabéns, você ganhou!`);
    vitoria++;
  } else if {
    console.log(`Que pena, você perdeu!`);
    derrota++;
  } else {
    console.log(`Nenhum ganhador, deu velha!`);
  }
