const express = require('express');
//var results = require('./results.js');
const app = express();
const infoController = require("./controllers/infoControllers");


app.set('port', process.env.PORT || 5000)
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(express.static(__dirname + '/public'))
    .get('/', function(req, res){
        res.sendFile('pokemon.html', { root: __dirname + "/public"});
    })
    .get("/getInfo", infoController.getInfo)

    .listen(app.get('port'), function() {
        console.log('Listening on port: ' + app.get('port'));
    })
