// modulo para manejar archivos
const fs = require("fs");
// modulo de rutas necesario para tomar o dejar archivos
const path = require("path");
// modulo para recibir datos por consola, por lo general estos datos vienen del front
const commandLineArgs = require("command-line-args");

const fileName = "data.json";
const filepath = `${path.resolve(".")}/${fileName}`; //directorio actual del proyecto

// leer los datos del archivo para no sobreescribirlos 
let content;
try{
    content = fs.readFileSync(filepath, 'utf-8');
}catch{
    content = "[]";
}

const items = JSON.parse(content);
const params = [
    {
        name: "item",
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
const options = commandLineArgs(params);
const { item = "", completed = false, date = "" } = options;

if(item){
    items.push({ item, completed,date });
    fs.writeFileSync(filepath, JSON.stringify(items, null , 2));
}


for (let index = 0; index < items.length; index++){
    const element = items[index];
    const checked = element.completed? "[✓]" : "[ ]";
    const duedate = element.date ? new Date(element.date) : " ";
    const name = element.item;
    
    console.log(`${index}. ${checked} ${name} [${duedate}]`);

}