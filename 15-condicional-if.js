//Condição simples única
var anoNascimento = 2003;

if (anoNascimento > 2003) 
console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003)
console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003)
console.log(`A pessoa nasceu em 2003!`);

//Condicional simples if-else
var anoNascimento = 2002;
if (anoNascimento > 2000)
console.log(`A pessoa nasceu depois de 2000!`)
else console.log(`A pessoa nasceu antes de 2000!`)

//Condicional composto com if
const login = "admin";
var senha = "123456";

//-----------------------------------------//
const loginUser = "admin" //banco de dados
const senhaUser = "admin" //banco de dados
//----------------------------------------//

if (login == loginUser || senha == senhaUser) // && significa E -- || significa OU
     console.log(`Acesso permitido!`);
else console.log(`Acesso negado!`);

// //Função sinaleiro 
function sinaleiro(cor){
if (cor == "vermelho")
console.log(`Pare`);
else if (cor =="amarelo")
console.log(`Preste atenção`);
else if (cor =="verde")
console.log(`Siga`);
else 
console.log(`Você informou cores diferentes de verde, amarelo ou vermelho`);
}
sinaleiro("vermelho");

//Desvio condicional if com bloco de comandos
console.log(`----------------------------------------------`);
var idade = 18;

if (idade <= 18) {
    console.log("entrou no if...");
    idade++, console.log("Incrementando idade...");
    console.log(`A nova idade é ${idade}`);
    console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei!`);

//Desvio condicional if inline(ternário)
     //validação (algo == algo) ou (algo > algumacoisa)
     // ? (IF)
     //Se for verdadeiro
     // : (ELSE)
     // Se for falso
     // testeDeValidacao == teste ? "Bla bla" : ("Ble ble")
var preco = 100;

var resultado = preco <= 100 ? "tá barato" : "Vish ta caro!"

console.log(resultado);