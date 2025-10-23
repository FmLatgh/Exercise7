const validator = {
    isInt : (n) => !isNaN(parseFloat(n)) && isFinite(n),
    notEmptyString: (s) => s === "",
    notEmptyArray : (arr) => arr.length > 0
};

export {validator};