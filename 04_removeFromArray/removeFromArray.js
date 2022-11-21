const removeFromArray = function(array, ...removeElement) {
    return array.filter(x => !removeElement.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
