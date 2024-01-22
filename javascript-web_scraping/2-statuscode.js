#!/usr/bin/node
const request = require('request');

// Get the URL from the command line argument
const url = process.argv[2];

request
  .get(url)
  .on('error', function (err) {
    console.error(err);
  }).on('response', function (response) {
    if (response.status === 200) {
      console.log(`code: ${response.statusCode}`);
    } else {
      console.log(`code: ${response.statusCode}`);
    }
  });
