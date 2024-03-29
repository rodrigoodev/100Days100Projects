import axios from "axios";
let baseURL = `https://newsapi.org/v2`;
let apiKey = process.env.VUE_APP_APIKEY; //fd25b6cafcdc46e5aae768e8c87806af
const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
        "X-Api-Key": apiKey,
    },
});
export default instance;