const menuOptions = [
 {
  type: 'list',
  name: 'option',
  message: 'which city do you would like to found?',
  choices: [
   {
    value: 1,
    name: `${'1.'.green} Find City`,
   },
   {
    value: 2,
    name: `${'2.'.green} View history`,
   },
   {
    value: 0,
    name: `${'0.'.green} Exit`,
   },
  ],
 },
];
const stopOptions = [
 {
  type: 'input',
  name: 'enter',
  message: `Press ${'ENTER'.green} to continue`,
 },
];
module.exports = { menuOptions, stopOptions };
