 /*                       IMPORTANTE:
                O DESAFIO FOI REALIZADO UTILIZANDO A LINGUAGEM JAVA SCRIPT
                 AS REPOSTAS ESTÃO APÓS O FINAL DE CADA ENUNCIADO

 */

/* 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

RESPOSTA: 91 .
Na linha abaixo, criei as váriaveis e guardei os valores do enunciado; 
Depois utilizei o 'while' para iterar sobre os valores de 'k' até atingir o valor da variável indice.
 */
const indice = 13;
let soma = 0;
let k = 0;
while (k < indice) {
    k = k + 1;
    soma =  soma + k;
}
console.log(soma)

/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

RESPOSTA:
Na linha 34 criei uma função que responderá dinâmicamente a qualquer entrada; 
Na linha 48 eu crio a entrada; 
Por fim eu guardo na variável 'resultado', a chamada da função que recebe o número digitado.
*/ 
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let temp;
    while (b <= n){
    if(b === n){
        return 'O número ${n} pertence à sequência de Fibonacci.';
    }
    temp =b;
    b = a+ b;
    a = temp;
    }
    return 'O número ${n} não pertence à sequência de Fibonacci.';
}
    let n = 21;
    let resultado = fibonacci(n);
    console.log(resultado);
    // o resultado do programa irá imprimir: "O número 21 pertence à sequência Fibonacci."



/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

RESPOSTA:
Na linha 74 recebi o arquivo JSON contendo os valores;
Na linha 83 eu converti o arquivo json para o formato de objeto;
Na linha 84, criei uma variável que guarda os valores do objeto;
O código da  linha 86 é responsável por calcular o menor valor, ignorando os dias sem faturamento;
Na linha 88 è calculado o maior valor faturado;
Nas linhas 90 e 92, utilizo o método 'reduce' para somar todos os valores de faturamento, depois obtenho a média, respectivamente;
Na linha 94 utilizo o método 'filter' para contar quantos dias o faturamento foi superior à média.
Por fim, utilizo o console.log para exibir os valores requeridos no enunciado.
 */
const faturamentoDiarioJasonString = `{
    "dia1":100,
    "dia2": 200,
    "dia3": 0,
    "dia4": 150,
    "dia5": 300,
    "dia6":50,
    "dia7": 400
}` ;
const faturamentoDiarioJson = JSON.parse(faturamentoDiarioJasonString);
const faturamentoDiario = Object.values(faturamentoDiarioJson);

let menorFaturamento = Math.min(faturamentoDiario.filter(v => v > 0));

let maiorFaturamento = Math.max(faturamentoDiario);

let somaFaturamento = faturamentoDiario.reduce((acc,val)=> acc + val, 0);

let mediaMensal = somaFaturamento / faturamentoDiario.length;

let diasAcimaDaMedia = faturamentoDiario.filter(v => v> mediaMensal).length;

console.log('O menor valor de faturamento ocorrido em um dia do mês: R$${menorFaturamento}');
console.log('O maior valor de faturamento ocorrido em um dia do mês: R$${maiorFaturamento}');
console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: R$${diasAcimaDaMedia}');



/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

RESPOSTA:
Na linha 116 criei um objeto contendo as informações de faturamento das filiais;
Na linha 123 Utilizei o método 'reduce' para calcular o total do faturamento e somar o faturamento de todas as empresas;
Já na linha 125 utilizei a estrura de repetição 'for' para iterar sobre o valor total por estado e imprimir o percentual de cada um.
*/
const faturamentoTotalMensal = `{
    "SP" : 67.836.43,
    "RJ" : 36.678.66,
    "MG" : 29.229.88,
    "ES" : 27.165.48,
    "Outros" : 19.849.53
}`
const faturamentoTotalMensalJson = JSON.parse(faturamentoTotalMensal);
const faturamentoData = Object.values(faturamentoTotalMensalJson);

let faturamentoTotal = Object.values(faturamentoData).reduce((acc, val)=> acc + val, 0);

for (let estado in faturamentoData){
    let percentual = (faturamentoData.estado) / (faturamentoTotal)*100;
    console.log('Percentual de ${estado}: ${percentual.toFixed(2)}%');
}



/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

RESPOSTA:
Como resultado, criei uma função que recebe uma string e retorna a mesma invertida.
Para tanto, criei uma variável no escopo da função, depois utilizei o 'laço for' onde o indice começa na última posição da string, e vai decrementando até chegar a 0; 
*/

function inverteString(str){
    let resultadoInvertido = '';
    for (let i = str.length -1; i >=0; i--){
        resultadoInvertido +=str[i];
    }
    return resultadoInvertido;
}

let stringNormal ='Andre';
let stringInvertida = inverteString(stringNormal);

console.log('String normal: ${stringNormal}');
console.log('String invertida: ${stringInvertida}');
