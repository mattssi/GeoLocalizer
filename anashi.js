
import NodeGeocoder from 'node-geocoder';
import scanf from "scanf";
import colors from 'colors';

console.clear();

const options = {
    provider: 'locationiq',
    apiKey: 'pk.6d6f7c23e6a223d921237f99e09eb448',
    method: 'GET',
    // Formatter: 'string',
};
const geocoder = NodeGeocoder(options);
const getUbi = () => {
  
    console.log('\nIngrese una Localidad: ');
    let ubi = scanf("%S");
    return ubi.toLowerCase();
}
const script = async() => {

    try {
        
        /* Declaramos variables */
        const aux = false;
        const reso = await geocoder.geocode(getUbi());


        if (reso[0] !== reso[1]) {
            
          /* recorremos y pedimos que muestre solo lo que queremos,
               y hacemos que el auxiliar sea true para terminar el script */
            console.clear();
            return (reso.forEach((element) => {
                    aux == true;
                    
                            console.log('');
                            console.log(" |Pais: ".rainbow, element.country);
                            console.log(" |Ciudad: ".rainbow, element.city);
                            console.log(" |Latitud: ".rainbow, element.latitude, "\n |Longitud: ".rainbow, element.longitude);
                            console.log('');
                            console.log('----------------------------------')
                }));
        } 
        /* Si la localidad no se encuentra, le avisamos que hay un error y le concatenmos un texto */
        else {
            console.clear();
            throw '\tWARNING\n'.red + "\n No se encontro su localizacion...";
        }
        
    } catch (e) {
      /* Mostramos el error que lanzamos anteriormente y ejecutamos en bucle el script hasta que podamos devolver informacion */
        console.log('\n', e);
        do {
            script();
        }
        while (script.aux == true);
    }
}

script();