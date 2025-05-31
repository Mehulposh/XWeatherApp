import axios from 'axios';

const url = 'https://api.weatherapi.com/v1/current.json';
const KEY = ' 80e2cbfe66f949f7927132233253105';


async function getData(city) {
    try{
        const response = await axios.get(`${url}?key=${KEY}&q=${city}`);
        console.log(response);
        return response.data;
    }catch(err){
        console.error(err);
        alert('Failed to fetch weather data');
        
    }
}

export default getData;