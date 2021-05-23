import axios from "axios";
import { DEFAULT_API_URLS } from "./enum";

const { stringify, parse } = JSON;
export const parseNetworkError = (error) => parse(stringify(error));

const withBaseURLContext = () =>
  process.env.NODE_ENV
    ? DEFAULT_API_URLS[process.env.NODE_ENV.toUpperCase()]
    : DEFAULT_API_URLS.development;

const HTTPClient = axios.create({
  baseURL: withBaseURLContext(),
});

export { HTTPClient };
