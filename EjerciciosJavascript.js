//Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

/*
#
##
###
####
#####
######
#######
*/ 


function triangulo(numTriangulo){
let marca="#"

    for(let j=0;j<numTriangulo;j++){
        console.log(marca)
        marca=marca+"#";
    }
}

//triangulo(7);

console.log("")
console.log("")

//Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. 
//Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), 
//imprime "Buzz" en su lugar.

function numImprimir(numfinal){

    for(let i=0;i<=numfinal;i++){

        if(i%3==0){
            console.log("Fizz")
        }else if(i%5==0&&i%3!=0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
//numImprimir(100)

console.log("")
console.log("")

//Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
//para números que sean divisibles entre 3 y 5 
//(y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).

console.log("Cuando tengas eso funcionando, modifica tu programa para imprimir \"FizzBuzz\",para números que sean divisibles entre 3 y 5 (y aún imprimir \"Fizz\" o \"Buzz\" para números divisibles por solo uno de ellos).")

function numImprimir2(numfinal2){

    for(let i=0;i<=numfinal2;i++){

        if(i%3==0&&i%5!=0){
            console.log("Fizz")
        }else if(i%5==0&&i%3!=0){
            console.log("Buzz")
        }else if(i%5==0&&i%3==0){
            console.log("FizzBuzz")}
        else{
            console.log(i)
        }
    }
}
//numImprimir2(100)

console.log("")
console.log("")

console.log("Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter \"#\". Los caracteres deberían de formar un tablero de ajedrez.")

function ajedrez(cuadricula){
let marca;
for(let i=0;i<cuadricula;i++){
    if(i%2==0){
        marca=" ";
    }else{
        marca="#";
    }
    for(let j=0;j<cuadricula;j++){
            if(i%2==0){
                    if(j%2==0){
                        marca=marca+"#"
                    }else{
                        marca=marca+" "
                    }
            }else{
                if(j%2==0){
                    marca=marca+" "
                }else{
                    marca=marca+"#"
                }
            }
    }
    console.log(marca)
}
}

ajedrez(8)