// Filtre e retorne todos os números pares de um array.

//tentativa 
const array = [15,82,584,5,45,8,6,51,33,1,5,7]
function funcaoarray(array) {

    const retorne = [];
    for (let i = 0;i<array.length;i++) {
        let conta = array[i] % 2
        if(conta === 0) {
            retorne.add(array[i]);
        }
    }
    return retorne;
}
const result = array.filter(funcaoarray);



//resultado

function filtraPares(arr){
    return arr.filter(callback);
   }
   function callback(item){
    return item % 2;
   }
   const meuArray=[1,23,55,67,30,2,4];

   console.log(filtraPares(meuArray))