# Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

Exercício 01: Verifica se um número é par ou ímpar

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este exercício solicita que o usuário digite um número inteiro pelo terminal e, utilizando a estrutura condicional `if`, verifica se o número é par ou ímpar. 
A entrada de dados é feita com a biblioteca prompt-sync, e o resultado é exibido no console.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
// Este programa verifica se um número é par ou ímpar

// Usamos o 'prompt-sync' para pegar o valor digitado pelo usuário
const prompt = require('prompt-sync')();

// Pedimos para o usuário digitar um número
let numero = prompt("Digite um número inteiro: ");

// Transformamos o valor em número inteiro
numero = parseInt(numero);

// Verificamos se o número é par ou ímpar
if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
} else {
  if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }
}

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercicio_01.js` e execute com:

```
node exercicio_01.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScrpit
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.
