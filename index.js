const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb://makersacademy:123456@ds125469.mlab.com:25469/makersacademy', function(err) {

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
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', function(req, res) {
  res.sendFile('index.html')
});

app.get('/getdata', function(req, res) {
  console.log('you have clicked the button to get data')
  dummyModel.find()
    .then(function(alldocs) {
      res.send(JSON.stringify(alldocs))
    })
})

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