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

const listPlaces = async (places = []) => {
 const choices = places.map((place, index) => {
  const idx = `${index + 1}.`.green;
  return {
   value: place.id,
   name: `${idx} ${place.name}`,
  };
 });

 choices.unshift({
  value: '0',
  name: '0.'.green + ' Cancel',
 });

 const questions = [
  {
   type: 'list',
   name: 'id',
   message: 'Select a place:',
   choices,
  },
 ];

 const { id } = await inquirer.prompt(questions);
 return id;
};

module.exports = {
 inquirerMenu,
 StopMenu,
 readInputUser,
 listPlaces,
};
