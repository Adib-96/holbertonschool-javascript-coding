#!/usr/bin/node
const reqUrl = process.argv[2];
const req = require('request');

req.get(reqUrl, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const movies = JSON.parse(body);
    const WedgeAntilles = 'https://swapi-api.hbtn.io/api/people/18/';
    const moviesWedgeAntilles = movies.results.filter(
      (movie) => movie.characters.includes(WedgeAntilles)
    );
    console.log(moviesWedgeAntilles.length);
  }
});
