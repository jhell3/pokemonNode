const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});


function getInfo(dex, callback){
    console.log("infoModels.js");
    let sql = "SELECT name, pokedex, type FROM POKEMON where pokedex=$1::int";
    let param = [dex];

    pool.query(sql, param, function(err, db_results){
        if (err){
            throw err;
        }
        else {
            console.log("From DB: " + db_results)

            results = {list: db_results.rows}
            console.log(results);
            callback(null, results)
        }
    })

}
module.exports = {
    getInfo: getInfo
}