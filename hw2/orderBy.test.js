const orderBy = require('./orderBy');

test('sorts by age in ascending order', () => {
    const data = [
        { name: 'Aventurine', age: 22 },
        { name: 'Boothill', age: 19 },
        { name: 'Venti', age: 27 }
    ];
    const sorted = orderBy(data, ['age']);
    expect(sorted).toEqual([
        { name: 'Boothill', age: 19 },
        { name: 'Aventurine', age: 22 },
        { name: 'Venti', age: 27 }
    ]);
});

test('sorts by name in alphabetical order', () => {
    const data = [
        { name: 'Venti', age: 27 },
        { name: 'Aventurine', age: 22 },
        { name: 'Boothill', age: 19 }
    ];
    const sorted = orderBy(data, ['name']);
    expect(sorted).toEqual([
        { name: 'Aventurine', age: 22 },
        { name: 'Boothill', age: 19 },
        { name: 'Venti', age: 27 }
    ]);
});

test('sorts by multiple properties (age then name)', () => {
    const data = [
        { name: 'Aventurine', age: 22 },
        { name: 'Boothill', age: 19 },
        { name: 'Venti', age: 22 },
        { name: 'Zhongli', age: 19 }
    ];
    const sorted = orderBy(data, ['age', 'name']);
    expect(sorted).toEqual([
        { name: 'Boothill', age: 19 },
        { name: 'Zhongli', age: 19 },
        { name: 'Aventurine', age: 22 },
        { name: 'Venti', age: 22 }
    ]);
});