const Searches = require('./models/searches');
const { inquirerMenu, StopMenu, readInputUser } = require('./helpers/inquirer');

const main = async () => {
 let selectedOptionUser = '';

 const searchesCities = new Searches();

 do {
  selectedOptionUser = await inquirerMenu();

  switch (selectedOptionUser) {
   case 1:
    const city = await readInputUser('City: '.cyan);
    const cities = await searchesCities.findCity(city);

    console.log('\n ===== City found: ===== \n'.green);
    console.log('City: ');
    console.log('Lat: ');
    console.log('Lng: ');
    console.log('Temperature: ');
    console.log('Minimum: ');
    console.log('Maximum: ');

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
