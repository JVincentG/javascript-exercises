const ftoc = function(far) {
    let c = (far - 32) * 5/9;
    let rounded = Math.round(c * 10) / 10;
    return rounded;
};

const ctof = function(cel) {
    let f = (cel * 9/5) + 32
    let rounded = Math.round(f * 10) / 10;
    return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
