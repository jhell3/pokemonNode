const express = require('express');
//var results = require('./results.js');
const app = express();
require('dotenv').config();
const infoDexController = require("./controllers/infoDexControllers");
const infoNameController = require("./controllers/infoNameControllers");

app.set('port', process.env.PORT || 5000)
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(express.static(__dirname + '/public'))
    .get('/', function(req, res){
        res.sendFile('pokemon.html', { root: __dirname + "/public"});
    })
    .get("/getInfo", infoDexController.getInfo)
    .get("/getInfoName", infoNameController.getInfo)
    .listen(app.get('port'), function() {
        console.log('Listening on port: ' + app.get('port'));
    })
