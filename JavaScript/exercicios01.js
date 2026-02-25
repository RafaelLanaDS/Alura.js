let nome = 'Rafael Lana de Sousa'

console.log("Olá,", nome, "! Seja bem-vindo(a) ao curso de JavaScript!")

let anoAtual = 2026
let anoNascimento = 2002
let idade = anoAtual - anoNascimento
console.log('vc tem', idade,'anos')

let cidade = 'Marília'
let estado = 'SP'
let pais = 'Brasil'
console.log("Voce esta na cidade", cidade,"no estado de", estado, "no pais", pais)

let temCarteira = true
console.log(typeof temCarteira)

var saldoInicial = 0
var deposito = 200
var saque = 50
var saldo = deposito - saque

console.log('seu saldo inicial foi de',saldoInicial,"voce realizou um deposito de",deposito,"fez um saque de",saque,"e seu saldo atual é:",saldo)

let disciplina = 'matematica'
let p1 = 8.5
let p2 = 6
let soma = (p1 + p2) / 2
console.log('sua media na disciplia',disciplina,'foi', soma)

let salario = 3000
let aumento = 30
let resultado = (aumento/100) * salario
let salarioAtual = salario + resultado
console.log(`voce teve um aumento de salario de ${resultado} e seu salario atual é ${salarioAtual}`)