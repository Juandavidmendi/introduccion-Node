const colores = require("colors/safe"); 

const args = process.argv.slice(2);
const [nombre = "Amigo"] = args;
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

console.log(process.argv);