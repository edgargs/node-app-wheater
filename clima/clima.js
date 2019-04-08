const axios = require('axios');

const getClima = async (lat, lng) => {
    
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lng}&units=metric`,
        headers: {
            "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
            "X-RapidAPI-Key": "938ce641e7msh80e538a73daa881p1bdd3bjsnc215ccc0cd37"
        }
    });
    
    const resp = await instance.get();

    //console.log(resp);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}