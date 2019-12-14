const infoModels = require("../models/infoAllModels")

function getInfo(req, res){
    //console.log("infoControllers.js")
    let dex = req.query.dex;
    infoModels.getInfo(dex, function(err, results){
        //console.log("heading to client...");
        //console.log(results)
        res.json(results)
    })

}
    module.exports = {
        getInfo: getInfo
    }