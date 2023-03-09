const axios = require('axios');
require('dotenv').config();

class Searches {
 history = ['Madrid', 'Barcelona', 'Valencia', 'Malaga'];

 constructor() {
  //TODO read DB if exists
 }

 async findCity(city = '') {
  try {
   const instance = axios.create({
    baseURL: `https://api.mapbox.com`,
    params: {
     access_token: process.env.MAPBOX_KEY,
     limit: 5,
     language: 'es',
    },
   });

   const res = await instance.get(`/geocoding/v5/mapbox.places/${city}.json`);

   console.log(res.data);

   return []; // Todo return cities
  } catch (error) {
   console.log(error);
  }
 }
}

module.exports = Searches;
