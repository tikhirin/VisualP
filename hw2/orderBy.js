function orderBy(arr, properties) {
    if (!Array.isArray(arr)) {
        throw new Error("First array.");
    }
    
    arr.forEach(item => {
        if (typeof item !== 'object' || item === null) {
            throw new Error("Only objects.");
        }
        properties.forEach(prop => {
            if (!(prop in item)) {
                throw new Error(`Property '${prop}' is not.`);
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
