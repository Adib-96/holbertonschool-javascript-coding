#!/usr/bin/node
const request = require('request');

// Get the URL from the command line argument
const url = process.argv[2];

request('http://www.google.com', function (error, response) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
