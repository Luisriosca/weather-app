import axios from "axios"


const getWeatherInfo = async (lat, long) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=53044d140d8b7eb26d57f74ac1c56056&lang=en&units=metric`
    const request = axios(URL)
    return request
}

export default getWeatherInfo