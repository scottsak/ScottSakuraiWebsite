//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

logoGlitches=["/images/matrix1.jpg","/images/matrix2.jpg","/images/matrix3.jpg","/images/matrix4.jpg","/images/matrix5.jpg"];


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    res.render("home",{logoGlitches:logoGlitches});

});
var i = 0;
const message="hello, my name is scott."


function typeWriter(){
  if (i < message.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
$(document).ready( function () {
typeWriter();
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
