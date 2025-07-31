require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    const response = await axios.get(`${WEATHER_API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.get('/api/forecast', async (req, res) => {
  try {
    const { city } = req.query;
    const response = await axios.get(`${FORECAST_API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forecast data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});