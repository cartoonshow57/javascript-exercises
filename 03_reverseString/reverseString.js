const reverseString = function(str) {
    let ans = "";
    let len = str.length;

    for (let i = len - 1; i >= 0; i--) ans += str.charAt(i);

    return ans;
};

// Do not edit below this line
module.exports = reverseString;
