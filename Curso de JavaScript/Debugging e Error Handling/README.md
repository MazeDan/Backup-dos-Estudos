# Debugging e Error Handing

## Throw x Return
```javascript 
//SEM THROW
    function verificaPalindromo(string){
        if(!string)return"String inválida";
        return string === string.split('').reverse().join('');
        }

    verificaPalindromo('cat'); //Retorna como mensagem> "String inválida"

//COM THROW
    function verificaPalindromo(string){
    if(!string) throw "String inválida";
        return string === string.split('').reverse().join('');
    }

    verificaPalindromo('cat'); //Retorna como erro > "Uncaught String inválida"
    

```

## Try/Catch
Verifica e trata o erro
```javascript
    function verificaPalindromo(string){
        if(!string)throw"String inválida";
        return string === string.split('').reverse().join('');
    }

    function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
        }
    }
    tryCatchExemplo(''); //Retorna um log do sistema: "String inválida"

```

## Finally
Pedaço de codigo que executa de qualquer forma apos um erro

```javascript
    function verificaPalindromo(string){
        if(!string)throw"String inválida";
        return string === string.split('').reverse().join('');
    }

    function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
        }
    finally {
        console.log('A String enviada foi:' + string);
    }
    }
    tryCatchExemplo('fa'); 
    //Console.log:
    //              "String inválida"
    //              "A String enviada foi: fa "

```

## Objeto Error