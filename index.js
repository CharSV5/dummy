const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb:/localhost:27017/dummyDB', function (err) {

  if (err) throw err; 

  console.log('Succesfully connected')
});

var dummySchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number
});

var dummyModel = mongoose.model('name', dummySchema);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.sendFile('index.html')
});

app.post('/', function(req, res) {
  var student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  }
  console.log(student)
  var newStudent = new dummyModel(student)
  newStudent.save();
});

app.listen(4567);
console.log("if you don't know, now you know!")
