const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// Sets up the Express App
// =============================================================
const app = express();
const port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [
	{
		name: 'Jon Doe',
		phone: 4808044848,
		email: 'jdoe@gmail.com',
		time: '7:30'
	}
]

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

// Get all characters
app.get("/api", function(req, res) {
  res.json(reservations);
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newRes = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  console.log(newRes);

  reservations.push(newRes);

  res.json(newRes);
});


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
