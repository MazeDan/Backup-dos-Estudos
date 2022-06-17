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

**Atividade** |**Objetivo**|  **Concluido** | 
:----------:| :--------: | :--------:
Atividade de Palindromo |*Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.*| Feita!
Atividade de Array |*Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.*| Feita! 


