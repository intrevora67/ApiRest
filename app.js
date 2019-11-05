var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();



router.get('/results/:n1/:n2', function(req, res) {
  var sum = n1 + n2;
    res.send(n1);
});

router.get('/results/', function(req, res) {
  
   res.send("Resultados");
});
router.post('/results/', function(req, res) {
 
  let multi = n1*n2;
   res.send(multi);
});


router.put('/results/', function(req, res) {
  
  
  let divi = n1 / n2;

   res.send(divi);
});

router.delete('/results/:n1/:n2', function(req, res) {
  
  let resta = n1 - n2;

   res.send(resta);
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});