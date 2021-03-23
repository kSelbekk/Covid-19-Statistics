import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() =>{
    try{
        const {data: {confirmed, deaths, location, lastChecked}} = await axios.get(url);
        return {confirmed, deaths, location, lastChecked};
    } catch (error){
        console.log(error);
    }
}

export const fetchCountries = async () =>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }catch (error){
        console.log(error);
    }
}