import {axios} from 'axios';

const url = 'https://api.weatherapi.com/v1/current.json';
const KEY = ' 80e2cbfe66f949f7927132233253105';


function getData(city) {
    try{
        const response = axios.get(`${url}?key=${KEY}&q=${city}`);
        return response.data;
    }catch(err){
        console.error(err);
    }
}

export default getData;