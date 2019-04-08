const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Lima',
    headers: {
        "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "938ce641e7msh80e538a73daa881p1bdd3bjsnc215ccc0cd37"
    }
});

instance.get()
    .then(resp => console.log(resp.data.Results[0]))
    .catch(err => console.log('ERROR!',err));