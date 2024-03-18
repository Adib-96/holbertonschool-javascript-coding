#!/usr/bin/node
const request = require('request');

function computeCompletedTasks(apiUrl) {
    return new Promise((resolve, reject) => {
        request(apiUrl, (error, response, body) => {
            if (error) {
                reject(error);
                return;
            }
            if (response.statusCode !== 200) {
                reject(`Error: ${response.statusCode}`);
                return;
            }

            const tasks = JSON.parse(body);
            const completedTasks = {};
            tasks.forEach(task => {
                if (task.completed) {
                    const userId = task.userId;
                    completedTasks[userId] = (completedTasks[userId] || 0) + 1;
                }
            });
            resolve(completedTasks);
        });
    });
}

function main() {
    const args = process.argv.slice(2);
    if (args.length !== 1) {
        console.log("Usage: node 6-completed_tasks.js <API_URL>");
        process.exit(1);
    }

    const apiUrl = args[0];
    computeCompletedTasks(apiUrl)
        .then(completedTasks => {
            console.log(completedTasks);
        })
        .catch(error => {
            console.error("Error computing completed tasks:", error);
        });
}

main();
