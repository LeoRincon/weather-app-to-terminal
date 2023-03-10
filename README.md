# weather-app-to-terminal

A simple weather app that displays the weather in your terminal. It uses the OpenWeatherMap API to get the weather data. It is written in NodeJS.

## Requirements

- NodeJS 18 or higher [here](https://nodejs.org)
- OpenWeatherMap API key [here](https://openweathermap.org/api)
- MapBox API key [here](https://www.mapbox.com/)

## Installation

1. Clone the [repository](https://github.com/LeoRincon/weather-app-to-terminal)
2. Install the dependencies with `yarn add` or `npm install`.
3. Create a `.env` file in the root directory and add the following variables:

```bash
MAPBOX_KEY=YOUR_MAPBOX_API_KEY
OPENWEATHER_KEY=YOUR_OPENWEATHERMAP_API_KEY

```

## Usage

1. Run the app with `node index.js`.
2. You will have 3 options to choose from:
   - Find city
   - View history
   - Exit the app
3. If you choose `Find city` you will be asked to enter the name of the city you want to get the weather from.

4. If you choose `View history` you will be able to see the last 6 cities you searched for.

5. If you choose `Exit the app` the app will close.
