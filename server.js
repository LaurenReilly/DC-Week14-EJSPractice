const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setting our view engine as ejs and telling it where the views will be located
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// var animals = {animals: [
// {
//     name:"Minerva",
//     description:"My first born",
//     imgURL:"app/images/minerva.jpg"
// },
// {
//     name:"Luna",
//     description:"The cuddliest loving cat",
//     imgURL:"app/images/luna.jpg"
// },
// {
//     name:"Frances",
//     description:"Found her on the streets",
//     imgURL:"app/images/frances.jpg"
// },
// {
//     name:"Boethiah",
//     description:"Surprise baby",
//     imgURL:"app/images/boethiah.jpg"
// },
// {
//     name:"Selwyn",
//     description:"Rescued friend",
//     imgURL:"app/images/selwyn.jpg"
// }]};

// app.get('/pets', function(req, res){
//     res.render('pets', {
//         title: "Lauren's Page",
//         tagline: "I hope I can become pro!"
//     });
// });

//telling server where the files are located that it can use
app.use(express.static(__dirname + '/app'));

app.get('/pets', function(req, res){
    res.render('pets', {animals: [
        {
            name:"Minerva",
            description:"My first born",
            imgURL:"images/minerva.jpg"
        },
        {
            name:"Luna",
            description:"The cuddliest loving cat",
            imgURL:"images/luna.jpg"
        },
        {
            name:"Frances",
            description:"Found her on the streets",
            imgURL:"images/frances.jpg"
        },
        {
            name:"Boethiah",
            description:"Surprise baby",
            imgURL:"images/boethiah.jpg"
        },
        {
            name:"Selwyn",
            description:"Rescued friend",
            imgURL:"images/selwyn.jpg"
        }]}
    );
});

//server listening for requests
app.listen(3000, function(){
    console.log("Listening on port 3000");
});