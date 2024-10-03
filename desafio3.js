// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoDiario = JSON.parse(data);

    const valores = faturamentoDiario
        .filter(item => item.valor > 0)  
        .map(item => item.valor);        

    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);

    const somaFaturamento = valores.reduce((acc, val) => acc + val, 0);
    const mediaMensal = somaFaturamento / valores.length;

    const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    // RESULTADOS
    console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
});
