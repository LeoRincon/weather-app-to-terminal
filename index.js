const Searches = require('./models/searches');
const {
 inquirerMenu,
 StopMenu,
 readInputUser,
 listPlaces,
} = require('./helpers/inquirer');

const main = async () => {
 let selectedOptionUser = '';

 const searchesCities = new Searches();

 do {
  selectedOptionUser = await inquirerMenu();

  switch (selectedOptionUser) {
   case 1:
    const city = await readInputUser('City: '.cyan);

    const cities = await searchesCities.findCity(city);

    const idSelectedCity = await listPlaces(cities);
    if (idSelectedCity === '0') continue;

    const selectedCity = cities.find((city) => city.id === idSelectedCity);

    searchesCities.saveHistory(selectedCity.name);

    const weatherCity = await searchesCities.weatherCityByLatLon(
     selectedCity.lat,
     selectedCity.lng
    );
    // console.clear();
    console.log('\n ===== City found: ===== \n'.green);
    console.log(`${'City: '.green}${selectedCity.name}`);
    console.log(`${'Lat: '.green}${selectedCity.lat}`);
    console.log(`${'Lng: '.green}${selectedCity.lng}`);
    console.log(`${'Temperature: '.green}${weatherCity.temp} `);
    console.log(`${'Minimum: '.green}${weatherCity.temp_min} `);
    console.log(`${'Maximum: '.green}${weatherCity.temp_max} `);

    break;
   case 2:
    await searchesCities.historyCapitalized.forEach((city, index) => {
     const idx = `${index + 1}.`.green;
     console.log(`${idx}: ${city}`);
    });
    break;

   default:
    break;
  }

  if (selectedOptionUser !== 0) await StopMenu();
 } while (selectedOptionUser !== 0);
};

main();
