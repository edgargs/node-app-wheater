const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//lugar.getLugarLatLng("Lima")
//.then(resp => console.log(resp));

// clima.getClima('-5.710000', '-79.279999')
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion) => {

    try {
        
        const resp = await lugar.getLugarLatLng(direccion);
        const info = await clima.getClima(resp.lat, resp.lng);

        return `El clima de ${direccion} es ${info}`;
    } catch(e) {
        return 'No se pudo determinar clima.'
    }

}    

getInfo("Lima").then(console.log);