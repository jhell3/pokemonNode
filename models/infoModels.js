const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});


function getInfo(dex, callback){
    console.log("infoModels.js");
    let sql = "SELECT name, pokedex, type FROM POKEMON where pokedex=$1::int";
    let sql2 = "SELECT * FROM evolution where id=$1::int";
    let sql3 = "SELECT * FROM stats where id=$1::int";
    let param = [dex];

    pool.query(sql, param, function(err, db_results){
        pool.query(sql2, param, function(err, db_results2){
            pool.query(sql3, param, function(err, db_results3){
                if (err){
                    throw err;
                }
                else {
                    console.log("From DB: " + db_results)
        
                    results = {list: db_results.rows, listE: db_results2.rows,            listS: db_results3.rows}
                    console.log(results);
                    callback(null, results)
                }
            })
        }) 
    })
}

module.exports = {
    getInfo: getInfo
}