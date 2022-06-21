/*
 Some todos os números de um array

 Crie uma função que recebe uma lista de
 preços e um número representando o saldo 
 disponível. Calcule qual será o saldo final 
 após subtrair todos os preços da lista enviada

*/

const meuarray = [15,15,5,5,8,9,4]
function arrayJuncao(antes,depois,total){
    const soma = antes + depois;
    return soma - total
}
console.log(meuarray.reduce(arrayJuncao))

const lista = [
    {
        nome: 'Sabão',
        valor: 20
    },
    {
        nome: 'Carne',
        valor: 52
    },
    {
        nome: 'Carne2',
        valor: 20
    }
]


function resultadoCompras(lista){
    let resultado = [];

    for(let i = 0; i < lista.length; i++){
        let {valor, nome} = lista[i]
        resultado.push(valor)
    }
    return resultado;
}

const valorTotal = 100;

//CERTO

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function (prev,current,index){
      console.log('rodada', index + 1);
      console.log({prev});
      console.log({current});
      return prev-current.valor;
    },saldoDisponivel);
   }
   console.log(calculaSaldo(valorTotal,lista));
                                  