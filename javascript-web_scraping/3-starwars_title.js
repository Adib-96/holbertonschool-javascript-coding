#!/usr/bin/node
const id = process.argv[2];
const req = require('request');

req.get(`https://swapi-api.hbtn.io/api/films/${id}`, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});
