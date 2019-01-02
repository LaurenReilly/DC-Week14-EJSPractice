const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

var animals = [
{
    "name":"Minerva",
    "description":"My first born",
    "imgURL":"app/images/minerva.jpg"
},
{
    "name":"Luna",
    "description":"The cuddliest loving cat",
    "imgURL":"app/images/luna.jpg"
},
{
    "name":"Frances",
    "description":"Found her on the streets",
    "imgURL":"app/images/frances.jpg"
},
{
    "name":"Boethiah",
    "description":"Surprise baby",
    "imgURL":"app/images/boethiah.jpg"
},
{
    "name":"Selwyn",
    "description":"Rescued friend",
    "imgURL":"app/images/selwyn.jpg"
}];

app.listen(3000, function(){
    console.log("Listening on port 3000");
});