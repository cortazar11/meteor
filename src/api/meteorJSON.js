import axios from 'axios';

export default axios.create({
    baseURL: 'https://data.nasa.gov/resource/gh4g-9sfh.json'
})