#!/usr/bin/node
const request = require('request');

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request and display the status code
request(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
