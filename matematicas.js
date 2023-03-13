const pi = 3.141593;

// function suma(x, y){
//     return x + y;
// }

function resta(x, y){
    return x - y;
}

function areaCiculo(r){
    return pi*r*r;
}

module.exports = {
    // suma: suma,
    resta: resta,
    pi: pi
};

module.exports.suma = function(x,y){
    return x + y;
}