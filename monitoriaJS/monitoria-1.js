//exercicio 1 - A Very Big Sum
function aVeryBigSum(ar) {
    // Write your code here
    let soma = 0;
    for (let i=0; i < ar.length; i++){
        soma = soma + ar[i];
    }
    return soma;
}

//exercicio 2 - Plus Minus 
function plusMinus(arr) {
    // Write your code here
    let positivo = 0;
    let negativo = 0;
    let zero = 0;
    
    for (let i=0;i < arr.length; i++){
        if (arr[i] > 0){
            positivo++;
        }
        else if (arr[i] < 0){
            negativo++;
        }
        else {
            zero++;
        }
    }
    
    console.log(positivo/arr.length);
    console.log(negativo/arr.length);
    console.log(zero/arr.length);
    
}

//exercicio 3 - Birthday Cake Candles 
function birthdayCakeCandles(candles) {
    // Write your code here
    let maisalto = 0;
    let quantidade = 1;
    for(let i=0; i < candles.length ; i++){
        if (candles[i] > maisalto){
            maisalto = candles[i];
        }
        else if (candles[i] == maisalto){
            quantidade++;
        }
    }
    return quantidade;
}

//exercicio 4 - Mini-Max Sum
function miniMaxSum(arr) {
    // Write your code here
    let resultados = [];
    for (let i=0; i < arr.length; i++){
        let soma = 0;
        for (let c=0; c < arr.length; c++){
            if (c != i){
                soma = soma + arr[c];
            }
        }
        resultados.push(soma);
    }
    
    let menor = resultados[0];
    let maior = resultados[0];
    for (let i=0; i < resultados.length; i++){
        if (resultados[i] < menor){
            menor = resultados[i];
        }
    }
    
    for (let i=0; i < resultados.length; i++){
        if (resultados[i] > maior){
            maior = resultados[i];
        }
    }
    
    console.log(menor, maior)
}

//exercicio 5 - Compare the Triplets
function compareTriplets(a, b) {
    let pontos1 = 0;
    let pontos2 = 0;
    for (let i=0; i < 3; i++){
        if (a[i] > b[i]){
            pontos1++;
        }
        else if (a[i] < b[i]){
            pontos2++;
        }
    }
    let resultado = [];
    resultado.push(pontos1);
    resultado.push(pontos2);
    return resultado;
}