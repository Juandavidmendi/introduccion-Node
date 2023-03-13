// funcion normal 

function suma(a, b){
    return a+b;
}

console.log(suma(40,2));

//funcion asignada a una variable

const suma2 = function(a,b){
    return a+b; 
}

console.log(suma2(40,2));

//funcion anonima asignada como referencia

const suma3 = function(a,b){
    return a+b;
}

const sumarFuncion = suma3;

console.log(sumarFuncion(40,2))

//tambien se puede usar una funcion nombrada
const factorial = function ff(number){
    if(number <= 0){
        return 1;
    }else{
        return (number * ff(number-1))
    }
}

console.log(factorial(6));

//funcion como propiedad de un objeto

const calculadora = {
    total: 0,
    suma4: function(a,b){
        return a+b;
    }
};

console.log(calculadora.suma4(40,2));

//funcion como posicion de un array

const suma5 = function(a,b){
    return a+b;
}

let arreglo = [];

arreglo.push(suma5);

const usar = arreglo[0];

console.log(usar(40,2)); 
// o
console.log(arreglo[0](40,2)); 

//first class citizens pasar una funcion como parametro dentro de otra funcion

var suma6 = function(a,b){
    return a+b;
}

function calcular(a,b,op){
    var resultado = op(a,b);
    return resultado;
}

console.log(calcular(40,2,suma6));

//es importante entender retornar una funcion apartir de otra  Por un patron llamado CPS
//ops significa que apenas se termine la funcion principal se procede a ejecutar callback
//Continuation passing style

// los callbacks son operaciones asincronas


//funcion sincrona con estilo CPS

function sumaSincrona(a,b,callback){
    callback(a+b);
}

console.log('Inicia proceso');

sumaSincrona(40, 2, function(operacion){
    console.log("Resultado:", operacion);
});

console.log('finaliza proceso');

//funcion Asincrona con estilo CPS

function sumaAsincrona(a,b,callback){
    setTimeout( function(){
        callback(a+b);
    }, 1000)
}

console.log('inicio proceso');

sumaAsincrona(40,2,function(operacion){
    console.log("Resultado:",operacion);
});

console.log('finaliza proceso');

//los callback van como ultimo parametro

const fs = require("fs");

fs.readFile('data.json', 'utf8', function(err, content){
    if(err) throw err;
    console.log(content);
})

//los errores van de primero
fs.readFile('data.json', 'utf8', function(err, content){
    if(err) throw err;
    console.log(content);
})
// el error puede ser propagados como un tipo de resultado, es pasado como primer argumento por norma, si no llega error, error es null o undefined



