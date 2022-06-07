/*
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
*/

let array1 = [1, 3, 4, 6, 80, 33, 23, 90]

function MudarNumeroPar(array){
    let tamanho = array.length

    if(tamanho === 0){
        array = -1;
    }
    else{
        for (var i = 0; i < tamanho; i++) {
            let restoDaDivisao = array[i] % 2;
            if(restoDaDivisao === 0) {
                array[i] = 0;
            }
        }
        return array;
    }
    
}

console.log(MudarNumeroPar(array1))