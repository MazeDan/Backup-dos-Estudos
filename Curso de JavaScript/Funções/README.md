# Backup de Estudos 


## *Tipos de Funções*

```javascript
//FUNÇÃO ANÔNIMA
    const soma = function(a,b){
        return a + b;
    }

    soma(1,2) //Console.log = [3]
    soma(7,7) //Console.log = [14]
```

```javascript
//FUNÇÃO AUTOINVOCÁVEL
    (
        function() {
            let name = "Digital One";
            return name;
        }
    )();

    //Console log = [ Digital One ] 
```

## *Callbacks*
```javascript
//Função passada como argumento para outra

    const calcular = function(operacao,nu01,nu02){
        return operacao(nu01,nu02);
    } 
    const somar = function(nu01,nu02){
        return nu01+nu02;
    }
     const sub = function(nu01,nu02){
        return nu01-nu02;
    }

    const ResulSoma = calcular(somar,5,5) 
    const ResulSub = calcular(sub,5,5)

    console.log(resulSoma) //Console.log = [10]
    console.log(resulSub) //Console.log = [0]
```

# Parâmetros
## Valor Padrão

**`Objetivo da função: `** Elevador todos os numeros do array, ao numero escolhido pelo parâmetro `num`.<BR>
**[Num = 1]** - Parâmetro para deixar ele com um valor Padrão 
```javascript

    function exponencial(array,num = 1){
        const result = [];
        for(let i = 0; i < array.length; i++){
            result.push(array[i] ** num);
        }
        return result;
    }

    exponencial([1,2,3,4]) // [1,2,3,4]
    // Como não foi colocado valor, foi utlizalado o valor padrão

    exponencial([1,2,3,4],4) // [1,8,27,64]
    // Como foi colocado um valor após, foi elevado ao numero escolhido
```

## Objeto "Arguments"
Parametro para a função pegar quantidades infinitas de valores<br>
**`Objetivo da função: `** Pegar o maior numero enviado

```javascript
    function acharMaior() {
        let max = -Infinity

        for(let i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i]
            }
        }
    return max;
    }
    console.log(acharMaior(1,5,8,94))
    //CONSOLE.LOG = 90
```


**Atividade** |**Objetivo**|  **Concluido** | 
:----------:| :--------: | :--------:
Atividade de Palindromo |*Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.*| Feita!
Atividade de Array |*Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.*| Feita! 


