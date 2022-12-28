import * as https from 'https';
import axios from 'axios';
const config = require('config');

export const axiosClient = axios.create({
  baseURL: config.get('petstore.baseUrl'),
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  headers: {
    'Content-Type': 'application/json',
  }
});
