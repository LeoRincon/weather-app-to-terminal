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
<img width="556" alt="image" src="https://user-images.githubusercontent.com/75432596/224339247-19542878-04e3-4f6e-9d04-372f57c17865.png">

2. You will have 3 options to choose from:
   - Find city
   - View history
   - Exit the app
   
3. If you choose `Find city` you will be asked to enter the name of the city you want to get the weather from.

<img width="618" alt="image" src="https://user-images.githubusercontent.com/75432596/224339336-8ba3bb42-3f8b-4371-8794-8a7390ce7303.png">

- The app shows you 5 options: 

<img width="753" alt="image" src="https://user-images.githubusercontent.com/75432596/224339733-becd49f4-4410-4620-a4ac-4acee851f761.png">

- after you select one it gives you the weather results:

<img width="742" alt="image" src="https://user-images.githubusercontent.com/75432596/224340128-c0952d24-a19f-422f-a993-ae2aaece2f8b.png">

4. If you choose `View history` you will be able to see the last 6 cities you searched for.

<img width="743" alt="image" src="https://user-images.githubusercontent.com/75432596/224340460-73f78699-5042-4a6c-b8db-f77b17144d82.png">


5. If you choose `Exit the app` the app will close.

## Dependencies: 
```json
"dependencies": {
    "axios": "0.21.1",
    "colors": "^1.4.0",
    "dotenv": "^16.0.3",
    "inquirer": "8.0.0"
 }
```
