# Backup de Estudos 

## Topicos
* [Funções Anônimas e Autoinvocáveil](#Tipos-de-Funções)
* [Callbacks](##Callbacks) 
* [Parâmetros](#Parâmetros) 
* [Switch/Case](#Switch/Case) 
* [This](#This) 
* [Arrow Functions](#Arrow-Functions) 

<hr>

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

**`Objetivo da função:`** Elevador todos os numeros do array, ao numero escolhido pelo parâmetro `num`.<BR>
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
**`Objetivo da função:`** Pegar o maior numero enviado

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

# Switch/Case
**`Objetivo da função:`** Fazer varias verificações
```javascript
    function getAnimal(id){
        switch(id) {
            case 1:
                return 'Cão';
            case 2:
                return 'Vaca';
            case 3:
                return 'Cavalo';
            default: //Quando digitado um valor não predefinido, utliza-se o valor padrão.
                return 'Peixe';
        }
    }

    getAnimal(1) //Cão
    getAnimal(8) //Peixe
```
# This
Palavra para referenciar o contexto da função (ou operação)
```javascript
    const pessoa = {
        firstName: 'John',
        lastName: 'Soares',
        id: '1',
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
        getId: function(){
            return this.id;
        }
    };

    pessoa.fullName();
    // Console.log = [ John Soares ]
    
    pessoa.getId();
    // Console.log = [ 1 ]
```
<hr>
<div align="center">

## Tabela de Contextos com o THIS

<br>

**Contexto** | **Referência** 
:-------:| :-----: 
Em um objeto (método) | Próprio objeto dono do método
Sozinha| Objeto Global (em navegadores, Window)
Função | Objeto Global
Evento| Elemento que recebeu o evento

</div>

## Funções com THIS


>CALL : Busca dentro de um variavel, valores
```javascript
//EXEMPLO 01
    const pessoa= {
        nome = 'Miguel';
    };
    const animal = {
        nome = 'Fifi';
    }

    function getSomething() {
        console.log(this.nome);
    }
    getSomething.call(animal) //Fifi
    getSomething.call(pessoa) //Miguel

//EXEMPLO 02
    const numeros = {
        nu01 = 2
        nu02 = 3
    }
    function soma(a,b){
        console.log(this.a + this.b)
    }
    soma.call(numeros,1,5);
    // CONSOLE.LOG = [ 6 ]
```
>BIND : Clona a estrutura da função onde é aplicado 
```javascript
    const retornaNomes = function(){
        return this.nome;
    };

    let bruno = retornaNomes.bind({nome: 'Bruno'});

    bruno();
    // Bruno
```

# Arrow Functions
Sempre armazenada em **CONST**
```javascript
    //EXEMPLO 01
    const HelloWorld = function(){
        return 'Hello World!';
    }
    //EXEMPLO 02
    const HelloWorld = () => {
        return 'Hello World!';
    }
    //ARROW FUNCTION
    const HelloWorld = () => 'Hello World!';

    console.log(HelloWorld)
    //Hello World!


    //OPERAÇÃO
    const soma = (a,b) => a + b;
    soma(2,5) // 7
```