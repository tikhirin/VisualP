const calcStatsFromAPI = require('./calcStatsFromAPI');

async function main() {
    const stats = await calcStatsFromAPI();
    console.log('Статистика по странам:', stats);
}

main()