import config from './config'

const apiKey = config.apikey;
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`;

export default function getTopArtists(){
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
