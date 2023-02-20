const { inquirerMenu, StopMenu, readInputUser } = require('./helpers/inquirer');

const main = async () => {
 let selectedOptionUser = '';

 do {
  selectedOptionUser = await inquirerMenu();

  switch (selectedOptionUser) {
   case 1:
    const city = await readInputUser('City: ');
    console.log({ city });
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
