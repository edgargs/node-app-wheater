const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "938ce641e7msh80e538a73daa881p1bdd3bjsnc215ccc0cd37"
        }
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados.');
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    };
}

module.exports = {
    getLugarLatLng
}