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
   return res.data.features.map((place) => ({
    id: place.id,
    name: place.place_name,
    lng: place.center[0],
    lat: place.center[1],
   }));
  } catch (error) {
   console.log(error);
  }
 }

 async weatherCityByLatLon(lat, lon) {
  try {
   const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather`,
    params: {
     lat,
     lon,
     appid: process.env.OPENWEATHER_KEY,
     units: 'metric',
    },
   });

   const res = await instance.get();
   const { main } = res.data;

   return main;
  } catch (error) {
   console.log(error);
  }
 }
}

module.exports = Searches;
