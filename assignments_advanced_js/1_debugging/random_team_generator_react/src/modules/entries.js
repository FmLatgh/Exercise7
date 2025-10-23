import {findDelimiter} from "./detect-csv.js";
import {validator} from "./validator";

/**
 * validates input
 * @param entries
 */
const validateEntries = function(entries) {
    return entries.map((entry) => {
        entry.hasError = entry.test(entry.value);
        return entry;
    });
};

/**
 *
 * @param members String (i.e. csv)
 * @param size
 * @returns {*[]}
 */
const getEntries = (members, size) => {
    const separator = findDelimiter(members);
    const membersArray = members.split(separator).filter((n) => n !== "");

    return [
        {
            value: size,
            errorId: 'size-error',
            errorMsg: 'Please, enter a valid number.',
            test: validator.isInt,
            hasError:false
        },
        {
            value: membersArray,
            errorId: 'people-error',
            errorMsg: 'Please, enter names. Each name on a seperate line or on the same line but seperated by a comma or a semicolon.',
            test: validator.notEmptyArray,
            hasError:false
        }
    ];
};

export {validateEntries, getEntries};