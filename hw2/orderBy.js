function orderBy(arr, properties) {
    if (!Array.isArray(arr)) {
        throw new Error("First argument must be an array");
    }
    
    arr.forEach(item => {
        if (typeof item !== 'object' || item === null) {
            throw new Error("Array must contain only objects");
        }
        properties.forEach(prop => {
            if (!(prop in item)) {
                throw new Error(`Property '${prop}' is missing in some objects`);
            }
        });
    });
    
    return [...arr].sort((a, b) => {
        for (let prop of properties) {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
        }
        return 0;
    });
}

module.exports = orderBy;
