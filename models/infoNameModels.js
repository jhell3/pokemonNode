const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});


function getInfo(name, callback){
    console.log("infoModels.js" + name);
    let sql = "SELECT pokedex FROM POKEMON where name=$1::text";
    let param = [name];

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