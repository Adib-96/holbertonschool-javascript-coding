#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
request(url, function (error, response) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});
