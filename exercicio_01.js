// Este programa verifica se um número é par ou ímpar

// Usamos o 'prompt-sync' para pegar o valor digitado pelo usuário
const prompt = require('prompt-sync')();

// Pedimos para o usuário digitar um número
let numero = prompt("Digite um número inteiro: ");

// Transformamos o valor em número inteiro
numero = parseInt(numero);

// Verificamos se o número é par ou ímpar
if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}
