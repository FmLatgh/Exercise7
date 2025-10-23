// Based on https://github.com/finnp/detect-csv
/**
 *
 * @param chunk string
 * @param opts
 * @returns {*}
 */
const findDelimiter = (chunk, opts) => {
    opts = opts || {};
    const delimiters = opts.delimiters || [',', ';', '\t', '|', '\n', '\r'];
    const lines = chunk.split(/[\n\r]+/g);
    let delimiter = determineMost(lines[0], delimiters);
    if (delimiter === undefined) delimiter = "\n";
    return delimiter;
};

const determineMost = (chunk, items) => {
    const itemCount = {};
    let maxValue = 0;
    let ignoreString = false;
    let maxChar;
    let currValue;
    items.forEach(function (item) {
        itemCount[item] = 0
    });
    for (let i = 0; i < chunk.length; i++) {
        if (chunk[i] === '"') ignoreString = !ignoreString;
        else if (!ignoreString && chunk[i] in itemCount) {
            currValue = ++itemCount[chunk[i]];
            if (currValue > maxValue) {
                maxValue = currValue;
                maxChar = chunk[i];
            }
        }
    }
    return maxChar;
};

export {findDelimiter};