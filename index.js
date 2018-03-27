const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.sendFile('index.html')
});

app.post('/', function(req, res) {
  console.log(req.body);
  console.log(req.body.postTest);
});

app.listen(4567);
console.log("if you don't know, now you know!")
