const calcStatsFromAPI = require('./calcStatsFromAPI');
const loadData = require('./loadData');

jest.mock('./loadData'); 

test('calcStatsFromAPI should return correct stats', async () => {
    loadData.mockImplementation(() => Promise.resolve([
        { breed: 'Turkish Van', country: 'Turkey', origin: 'Natural', coat: 'Semi-long', pattern: 'Van' },
        { breed: 'York Chocolate', country: 'United States', origin: 'Natural', coat: 'Long', pattern: 'Solid' },
        { breed: 'Abyssinian', country: 'Ethiopia', origin: 'Natural/Standard', coat: 'Short', pattern: 'Ticked' }
    ]));

    const stats = await calcStatsFromAPI();

    expect(stats).toEqual({
        'Turkey': 1,
        'United States': 1,
        'Ethiopia': 1
    });
    expect(loadData).toHaveBeenCalledTimes(1);
});