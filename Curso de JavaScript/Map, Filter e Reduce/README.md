# Map, Filter e Reduce

## Map - Aula 01

```javascript
//Map
    array.map(callback,thisArg)
    callback(item,index,array)

    //Usando Map para multiplicar por 02 os itens de um array

    const array = [1,2,3,4,5]
    array.map((item) => item * 2); // console.log 2,4,6,8,10

```
## Filter - Aula 02


```javascript
const frutas=['maçã',
            'maçã verde',
            'laranja',
            'abacaxi',
            'banana maçã'];

//Filtrando a palavra MAÇÃ
frutas.filter((fruta)=>fruta.includes('maçã'))

//console.log(fruta) = [maçã,maçã verde,'banana maçã'];
```