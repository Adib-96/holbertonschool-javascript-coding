#!/usr/bin/node
// a script that computes the number of tasks completed by user id
const request = require('request');
const url = process.argv[2];
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    return;
  }
  const users = JSON.parse(body);
  const usersWithCoTasks = {};
  for (let i = 0; i < users.length; i++) {
    if (users[i].completed) {
      if (!(users[i].userId in usersWithCoTasks)) {
        usersWithCoTasks[users[i].userId] = 0;
      }
      usersWithCoTasks[users[i].userId] += 1;
    }
  }
  console.log(usersWithCoTasks);
});
