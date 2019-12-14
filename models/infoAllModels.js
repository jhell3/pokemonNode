const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});

function getInfo(dex, callback){
    console.log("infoModels.js");
    let sql = "SELECT * FROM POKEMON";
    let sql2 = "SELECT * FROM evolution";
    let sql3 = "SELECT * FROM stats";

    pool.query(sql, function(err, db_results){
        pool.query(sql2, function(err, db_results2){
            pool.query(sql3, function(err, db_results3){
                if (err){
                    throw err;
                }
                else {
                    console.log("From DB: ")
        
                    results = {list: db_results.rows, listE: db_results2.rows, listS: db_results3.rows}
                    //console.log(results);
                    callback(null, results)
                }
            })
        }) 
    })
}

module.exports = {
    getInfo: getInfo
}