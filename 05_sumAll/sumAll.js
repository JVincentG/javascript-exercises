const sumAll = function(a,b) {
    if (typeof a != "number" || typeof b != "number"){
        return "ERROR"
    };
    if ( a < 0 || b < 0){
        return "ERROR"
    };
    result = 0;
    if (a < b){
        for (a; a <= b; a++){
            result = result + a
    };

    } else if (a > b){
        for (b; b <= a; b++){
            result = result + b
        }; 
    };
    return result;
};

// Do not edit below this line
module.exports = sumAll;
