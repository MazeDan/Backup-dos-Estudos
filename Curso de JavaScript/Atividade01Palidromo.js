
//split() irá separar cada caractere de uma string e convertê-lo em um array.
//reverse() pegará aquele array e inverterá os elementos dentro dele.
//join() unirá os caracteres que foram revertidos pela função reverse().

function reveter(variavel){
    let msg;
    let variaveltrocada =  variavel.split("").reverse().join("");

    if(variavel === variaveltrocada){
        msg = 'A palavra '+variavel+' '+variaveltrocada+' é um palidromo';
    }else{
        msg = 'A palavra '+variavel+' '+variaveltrocada+' não é um palidromo';

    }

    return msg
}

var palavra = reveter("ovo")
console.log(palavra)