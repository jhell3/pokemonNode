function getInfo(dex, callback){
    //console.log("infoModels.js");
    results = {dex: dex, name: "bulb"}
    callback(results)
}
module.exports = {
    getInfo: getInfo
}