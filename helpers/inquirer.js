require('colors');
const inquirer = require('inquirer');

const { menuOptions, stopOptions } = require('../utils/dataOptions');

const inquirerMenu = async () => {
 console.clear();

 console.log('======== TODO ========\n'.green);
 const { option } = await inquirer.prompt(menuOptions);

 return option;
};

const StopMenu = async () => {
 console.log('\n');
 await inquirer.prompt(stopOptions);
};

const readInputUser = async (city) => {
 const inputFindCity = [
  {
   type: 'input',
   name: 'city',
   message: city,
   validate(value) {
    if (value.length === 0) {
     return 'Please enter a City';
    }
    return true;
   },
  },
 ];

 const { city: SelectedCity } = await inquirer.prompt(inputFindCity);

 return SelectedCity;
};
module.exports = {
 inquirerMenu,
 StopMenu,
 readInputUser,
};
