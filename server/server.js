var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')

// Define the port to run on
app.set('port', 3000);

//Define the directory to serve as static page
app.use(express.static(path.join(__dirname, '../static')));

//Configure to work with bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//get an instance of the express router
var router = express.Router()

//test route to check it works
// router.get('/api/v1/fruit', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// register routes
// app.use('/api/v1/fruit', router);

// Start the server and listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

//requests
app.get('/api/v1/fruit', (req, res) => {
    fs.readFile('../data/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data))
  })
})

// app.get('/api/v1/vegetables', (req, res) => {
//     fs.readFile('../data/db.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     res.json(JSON.parse(data))
//   })
// })

module.exports = app