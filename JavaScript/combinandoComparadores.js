const idade = 18
const maioridade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorIdade && possuiCNH //AND  Retorna verdadeiro apenas se todas as condições forem verdadeiras.
console.log(`pode dirigir ${podeDirigir}`)

const podeViajarSozinha = maiorIdade || possuiCNH // OR  Retorna verdadeiro se pelo menos uma condição for verdadeira.
console.log(`pode viajar sozinha ${podeDirigir}`)

const precisaDeAcompanhante = !maiorIdade // NOT Inverte o valor lógico, transforma verdadeiro em falso e vice-versa.
console.log(`precisa de acompanhante? ${precisaDeAcompanhante}`)


let maiorIdade = true

let possuiDocumento = false

 

if (maiorIdade && possuiDocumento) { 

console.log('Pode entrar na festa'); 

} else { 

console.log('Não pode entrar na festa'); 

} 
// Resultado: Não pode entrar na festa 


let temCartaoCredito = false; 

let temDinheiro = true; 

 

if (temCartaoCredito || temDinheiro) { 

console.log('Pode fazer a compra'); 

} else { 

console.log('Não pode fazer a compra'); 

} 
// Resultado: Pode fazer a compra 


let estaChovendo = true; 

 

if (!estaChovendo) { 

console.log('Pode sair sem guarda-chuva'); 

} else { 

console.log('Leve o guarda-chuva'); 

} 
// Resultado: Leve o guarda-chuva 


let Idade = 20; 

let possuiIngresso = true; 

let entradaPermitida = (idade >= 18 && possuiIngresso); 

 

if (entradaPermitida) { 

console.log('Entrada permitida!'); 

} else { 

console.log('Entrada não permitida!'); 

}
// Resultado: Entrada permitida! 