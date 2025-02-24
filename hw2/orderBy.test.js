const orderBy = require('./orderBy');

test('sorts objects by given properties', () => {
    const data = [
        { name: 'John', age: 25 },
        { name: 'Alice', age: 30 },
        { name: 'John', age: 22 }
    ];
    const sorted = orderBy(data, ['name', 'age']);
    expect(sorted).toEqual([
        { name: 'Alice', age: 30 },
        { name: 'John', age: 22 },
        { name: 'John', age: 25 }
    ]);
});

test('throws error if first argument is not an array', () => {
    expect(() => orderBy({}, ['name'])).toThrow("First argument must be an array");
});

test('throws error if array contains non-object elements', () => {
    expect(() => orderBy([1, 'string', null], ['name'])).toThrow("Array must contain only objects");
});

test('throws error if some objects lack required properties', () => {
    const data = [
        { name: 'John' },
        { age: 25 }
    ];
    expect(() => orderBy(data, ['name'])).toThrow("Property 'name' is missing in some objects");
});
