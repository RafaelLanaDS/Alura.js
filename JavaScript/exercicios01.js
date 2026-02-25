// 1. Boas-vindas personalizadas
// Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"
let nome = 'Rafael Lana de Sousa'

console.log("Olá,", nome, "! Seja bem-vindo(a) ao curso de JavaScript!")


// 2. Cálculo de idade
// Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."
let anoAtual = 2026
let anoNascimento = 2002
let idade = anoAtual - anoNascimento
console.log('vc tem', idade,'anos')


// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."
let cidade = 'Marília'
let estado = 'SP'
let pais = 'Brasil'
console.log("Voce esta na cidade", cidade,"no estado de", estado, "no pais", pais)


// 4. Tipo da variável:
// Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
let temCarteira = true
console.log(typeof temCarteira)


// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.
var saldoInicial = 0
var deposito = 200
var saque = 50
var saldo = deposito - saque
console.log('seu saldo inicial foi de',saldoInicial,"voce realizou um deposito de",deposito,"fez um saque de",saque,"e seu saldo atual é:",saldo)

// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.
let disciplina = 'matematica'
let p1 = 8.5
let p2 = 6
let soma = (p1 + p2) / 2
console.log('sua media na disciplia',disciplina,'foi', soma)

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
let salario = 3000
let aumento = 30
let resultado = (aumento/100) * salario
let salarioAtual = salario + resultado
console.log(`voce teve um aumento de salario de ${resultado} e seu salario atual é ${salarioAtual}`)

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let cliqueUm = 1
let cliqueDois = cliqueUm + 1
let cliqueTres = cliqueDois + 1
console.log(`clique um =${cliqueUm} clique dois= ${cliqueDois} clique tres= ${cliqueTres}`)

// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.
const PI = 3.14
console.log(`${PI}`)

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = 'ola mundo'
let numero = 777
let respectivas = mensagem + numero
console.log(`${typeof respectivas}`)
