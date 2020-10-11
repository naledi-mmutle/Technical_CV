import axios from 'axios';
const KEY = 'AIzaSyCNe2G1nwPMUF833GRoLwVBglz0Z5bOUQE'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})