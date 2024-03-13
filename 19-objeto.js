// Definindo uma classe Pessoa
class Pessoa {
  constructor(pNome, pIdade) {
    this.nome = pNome;
    this.idade = pIdade;
  }
  apresentarSe() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
  envelhecer() {
    this.idade++;
  }
}

// Criando objetos do "tipo" Pessoa
var pessoa1 = new Pessoa("Talda Dienifer", 52);
var p2 = new Pessoa("Taldo Pedrin", 18);

pessoa1.apresentarSe();
p2.apresentarSe();

pessoa1.envelhecer();
pessoa1.apresentarSe();

p2.envelhecer();
p2.apresentarSe();

console.log("------------------Abstração------------------");
//Abstração: abstrair características importantes e descartar detalhes irrelevantes!

class Pet {
  //toda classe precisa iniciarse com maiusculo para não ser considerada variavel
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  alimentar() {
    console.log(`${this.nome} foi alimentado!`);
  }
}

const meuPet = new Pet("Rex", 2, "Chachorro");

console.log(
  `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
);

meuPet.alimentar();

console.log("----------------------------Herença----------------------------");
class Animal {
  constructor(nome, idade, tipoAlimentacao) {
    this.nome = nome;
    this.idade = idade;
    this.tipoAlimentacao = tipoAlimentacao;
  }

  alimentar() {
    console.log(`O animal ${this.nome} foi alimentado!`);
  }

  emitirSom() {
    console.log(`Barulho padrão do animal`);
  }
}

class Catioro extends Animal {
  alimentar() {
    console.log(`O cachorro ${this.nome} foi alimentado!`);
  }
  emitirSom() {
    console.log(`🐶Au au!🐶`);
  }
}
const pet = new Animal("Carlos", 10, "Comida espacial");
const meuCachorro = new Catioro("Rex", 3, "Ração");

pet.alimentar();
pet.emitirSom();
console.log("");
meuCachorro.alimentar();
meuCachorro.emitirSom();

console.log("-------------------Encapsulamento-------------------");

class Petzinho {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  getNome() {
    retangulourn this.nome;
  }

  setNome(novoNome) {
    this.nome = novoNome;
  }
}

const novoPetizinho = new Petzinho("Bob", 3, "Cachorro");

console.log(novoPetizinho.getNome()); //"Bob"
novoPetizinho.setNome("Rex");
console.log(novoPetizinho.getNome()); //"Rex"

console.log("-----------------------Polimorfismo-----------------------");
class Animalzao {
  constructor(nome) {
    this.nome = nome;
  }

  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}

class Cachorro extends Animalzao {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O cachorro late!");
  }
}

class Gato extends Animalzao {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O gato mia!");
  }
}

// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animalzao("Bob"), // Animal genérico
];

for (const animal of animais) {
  animal.fazerBarulho();
}

console.log("-------------------------Exemplos-------------------------");
//Criando uma classe Retângulo
class Retangulo {
  constructor(comprimento, Largura) {
    this.comprimento = comprimento;
    this.largura = Largura;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}
//Criando um objeto do "tipo" Retângulo
const ret1 = new Retangulo(10, 15);

function mostrarRetangulo(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`área = ${retangulo.obterArea()}`);
  console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}
mostrarRetangulo(ret1);
ret1.setComprimento(20);
mostrarRetangulo(ret1);
ret1.setLargura(20);
mostrarRetangulo(ret1);
