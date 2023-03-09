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

    const selectedCity = cities.find((city) => city.id === idSelectedCity);

    console.log('\n ===== City found: ===== \n'.green);
    console.log(`${'City: '.green}${selectedCity.name}`);
    console.log(`${'Lat: '.green}${selectedCity.lat}`);
    console.log(`${'Lng: '.green}${selectedCity.lng}`);
    console.log(`${'Temperature: '.green}`);
    console.log(`${'Minimum: '.green}`);
    console.log(`${'Maximum: '.green}`);

    break;
   case 2:
    console.log('View history', { selectedOptionUser });
    break;

   default:
    break;
  }

  if (selectedOptionUser !== 0) await StopMenu();
 } while (selectedOptionUser !== 0);
};

main();
