
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Saiba mais sobre isNaN(): 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// Entrada dos valores com a função gets():
const capitalInicial = 500;
const taxaJuros = 10;
const tempoMeses = 3;

//!isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(capitalInicial) && !isNaN(taxaJuros) && !isNaN(tempoMeses) && tempoMeses > 0) {
//TODO: Calcule o montante usando a fórmula de juros simples e o montante final somando o juros simples ao capital inicial:
  const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
  const montanteFinal = capitalInicial + jurosSimples;

//TODO: Imprima o resultado com formatação, incluindo o período, o capital inicial, a taxa de juros e o montante final:
//Lembre-se: Até duas casas decimais para o Capital Inicial e o Montante Final.
  console.log(`Montante em ${tempoMeses} meses, com R$ ${capitalInicial.toFixed(2)} iniciais, ${taxaJuros}% juros, e: R$ ${montanteFinal.toFixed(2)}.`);
} else {
  console.log('Por favor, insira valores validos e um periodo de tempo adequado.');
}

//Dado de entrada:
//500.00
//10
//3
//Saída esperada:
//Montante em 3 meses, com R$ 500.00 iniciais, 10% juros, e: R$ 650.00.