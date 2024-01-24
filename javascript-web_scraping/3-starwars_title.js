#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const startWarsUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(startWarsUrl, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data.title);
});
