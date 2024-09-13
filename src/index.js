import fetch from 'node-fetch';
import dotenv from 'dotenv';
import express from 'express';  

dotenv.config();

const apiKey = process.env.api_key;
const apiUrl = 'https://api.nookipedia.com/villagers?game=nh&nhdetails=true';

let allVillagersData = [];

const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'Accept-Version': '1.0.0'
        }
      });

    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    allVillagersData = data;
    } catch (error) {
        console.warn('Failed to fetch villager data:', error);
    }
};

const startServer = async () => {
  await fetchData();

  const app = express(); 
  const port = process.env.PORT || 3000;

  app.use(express.static('public'));

  app.get('/api/villagers', (req, res) => {
    res.json(allVillagersData);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();