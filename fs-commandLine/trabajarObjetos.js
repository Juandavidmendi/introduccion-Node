//modulo para leer datos de consola
const commandLineArgs = require("command-line-args");

const items = [];
const params = [
    {
        name: "carro",
        alias: "i",
        type: String
    },
    {
        name: "completed",
        alias: "c",
        type: Boolean
    },
    {
        name: "date",
        alias: "d",
        type: String
    }
];
//se declara la escructura que va a recibir
const options = commandLineArgs(params);

const { carro = "", completed = false, date = ""} = options;

if(carro){
    items.push({carro,  completed, date});
}

console.log(items);

