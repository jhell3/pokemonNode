const infoModels = require("../models/infoModels")
function getInfo(req, res){
    //console.log("infoControllers.js")
    let dex = req.query.dex;
    infoModels.getInfo(dex, function(err, results){
        res.json(results)
    })
    /*infoModels.getInfoS(dex, function(err, resultsE){
        res.json(resultsE)
    })*/  

}
    module.exports = {
        getInfo: getInfo
    }
