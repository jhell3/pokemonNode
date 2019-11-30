const infoModels = require("../models/infoNameModels")

function getInfo(req, res){
    //console.log("infoControllers.js")
    let name = req.query.name;
    console.log("Name: " + name)
    infoModels.getInfo(name, function(err, results){
        res.json(results)
    })
        
}
    module.exports = {
        getInfo: getInfo
    }