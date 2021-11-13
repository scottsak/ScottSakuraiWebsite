//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

logoGlitches=["/images/matrix1.jpg","/images/matrix2.jpg","/images/matrix3.jpg","/images/matrix4.jpg","/images/matrix5.jpg"]
let i = 0;
let direction = true; //true = up, false = down

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    res.render("home",{logoGlitches:logoGlitches});

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
