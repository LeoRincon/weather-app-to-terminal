const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

class Searches {
 history = [];
 dbPath = './db/database.json';

 constructor() {
  this.readDB();
 }

 get historyCapitalized() {
  return this.history.map((city) => {
   let words = city.split(' ');
   words = words.map((word) => word[0].toUpperCase() + word.substring(1));

   return words.join(' ');
  });
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

 async saveHistory(city = '') {
  console.log(city);
  if (this.history.includes(city.toLocaleLowerCase())) return;

  this.history = this.history.splice(0, 5);

  this.history.unshift(city.toLocaleLowerCase());

  //TODO save in DB
  this.saveDB();
 }

 saveDB = () => {
  const payload = {
   history: this.history,
  };

  fs.writeFileSync(this.dbPath, JSON.stringify(payload));
 };

 readDB = () => {
  if (!fs.existsSync(this.dbPath)) return;
  const informationDB = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
  const data = JSON.parse(informationDB);
  this.history = data.history;
 };
}

module.exports = Searches;
