const sumAll = function(start, end) {

    if (start > end) {

        start += end;
        end = start - end;
        start -= end;
    }

    if (typeof start != "number" || typeof end != "number" || start < 0 || end < 0) return "ERROR"
    return (end - start + 1) % 2 == 0 ? (end - start + 1) / 2 * (start + end) : (start + end) / 2 * (end - start + 1);
};

// Do not edit below this line
module.exports = sumAll;
