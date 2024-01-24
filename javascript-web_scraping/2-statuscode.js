#!/usr/bin/node
const urlRequest = process.argv[2];
const request = require('request');

request(urlRequest, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});
