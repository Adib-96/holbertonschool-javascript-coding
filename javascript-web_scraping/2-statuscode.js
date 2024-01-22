#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const URL = process.argv[2];

request.get(URL, function (req, res) {
  if (res.statusCode === 200) {
    console.log(`code: ${res.statusCode}`);
  } else if (res.statusCode === 404) {
    console.log(`code: ${res.statusCode}`);
  } else {
    console.log(`code: ${res.statusCode}`);
  }
});
