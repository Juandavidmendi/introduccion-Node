const colores = require("colors/safe");
const commandLineArgs = require("command-line-args");

const params = [{ name: "name", alias: "n", type: String}];

const options = commandLineArgs(params);
const nombre = options.name || "Friend";
const hora = new Date().getHours();

// segun la hora hacer 
if(hora >= 6 && hora < 12){
    console.log(colores.yellow(`Buenos días ${nombre}`));
}else if(hora >= 12 && hora < 18){
    console.log(colores.green(`Buenas tardes ${nombre}`));
}else if(hora >= 18 && hora < 23){
    console.log(colores.cyan(`Buenas noches ${nombre}`));
}else{
    console.log(colores.blue(`Buenas noches ${nombre}`));
}
