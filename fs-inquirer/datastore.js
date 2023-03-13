// modulo para manejar 
const fs = require("fs");

// leer los datos del archivo para no sobreescribirlos 
module.exports.load = function(filepath){
    try{
        //if exist
        const content = fs.readFileSync(filepath, "utf-8");
        return JSON.parse(content);
    }catch(e){
        //si el archivo esta vacio o no existe
        return "[]";
    }
};



module.exports.save = function(filepath, content){
    fs.writeFileSync(filepath, JSON.stringify(content, null, 2));
};