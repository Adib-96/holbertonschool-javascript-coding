const http = require('http')
const app= http.createServer((req,res) => {
    console.log(res.end("Hello Holberton School!"));
})
app.listen(1245)
module.exports = app;