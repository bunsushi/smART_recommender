var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))

app.get("/", function(req, res) {
    console.log("I'm connected");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});