const ftoc = function(temp) {
  return Math.round(((temp - 32) * 5 / 9) * 10) / 10; 
};

const ctof = function(temp) {
  return Math.round(temp * 9 * 10 / 5) / 10 + 32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
