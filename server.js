var express = require('express');

var app = express();

app.get('/', (req, res) => {
res.send("Hi, I created a server using express.js!")
console.log("working")
}
);

app.listen(3000, () => {
console.log("Server running in port 8080. Visit: http://localhost:8080")});

//run on localhost:3000