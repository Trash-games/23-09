/*
Exercício: Calculadora Simples
Objetivo: Criar uma calculadora simples que realiza as quatro operações básicas (soma, subtração, multiplicação e divisão) com dois números fornecidos pelo usuário.
Passos:

Solicitar ao usuário que insira dois números.
Armazenar esses números em variáveis.
Calcular a soma, subtração, multiplicação e divisão.
Exibir os resultados das operações em um formato claro.

*/

// Solicitar ao usuário para inserir os númeos
let num1 = Number(prompt("insira o primeiro número: "))
let num2 = Number(prompt("insira o segundo número; "))

// Calcular as operações
const soma = num1 + num2
const subtração = num1 - num2
const multiplicação = num1*num2
const divisão = num1/num2

// Exibir os resultados
// console.log("A soma entre: ", num1, " e ", num2, " = ", soma );
// console.log("A subtração entre: ", num1, " e ", num2, " = ", subtração );
// console.log("A multiplacação entre: ", num1, " e ", num2, " = ", multiplicação );
// console.log("A divisão entre: ", num1, " e ", num2, " = ", divisão );

// Exibir os resultados usando template strings
console.log(`a soma entre ${num1} e ${num2} é: ${soma}`);
console.log(`a subtração entre ${num1} e ${num2} é: ${subtração}`);
console.log(`a multiplicação entre ${num1} e ${num2} é: ${multiplicação}`);
console.log(`a divisão entre ${num1} e ${num2} é: ${divisão}`);
