# Getting Started with the Weather App 🌤️
<hr>
Welcome to the weather-app by luisrioscode repository👨🏻‍💻 If you want to copy and execute this project in your localhost you may check the "Repo Instructions".

**If you want to preview this app deployed you can visit** <a href="https://weatherapp-byluisrioscode.netlify.app/">this URL↗️</a> 

## Interface Preview:
[![weather-App-SS.png](https://i.postimg.cc/J7dRjyfM/weather-App-SS.png)](https://postimg.cc/fkm4NbWr)

## Description of the project
- This project was made using react, axios and pure CSS.

- The entirely project was styled inspired by the neumorphic trend.

- This project has the purpose of beef up my abilities on:

    1. React
    2. JSX
    3. Components
    4. Props
    5. Hooks
    6. UseState
    7. CSS
    8. HTTP petitions
    9. Axios

- The weather information is getting in real time using the **GEOLOCATION BROWSER API**. When the user authorizes sharing his position, a call is made using axios to <a href="https://openweathermap.org/api">Open Weather Api</a> using the GET method with the ``` latitude``` and the ```longitude``` previusly obtained.

- The call its made with a custom service called "getWeatherInfo" on APP.js using the useEffect hook.

- After the  petition, the api returns the data in JSON format like this:

```JSON                        
{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }                         
                        
```

- And finally the important variables are saved using the state hook and rendered using custom components.

<hr>
## Repo Instrutions
If you want to test my code in your pc, yo need tu use the next instructions  

### `git clone`
For download all the files of the repository.
### `npm install`
For install all the dependencies
### `npm star`
For start the project in local host.

### `npm run build`