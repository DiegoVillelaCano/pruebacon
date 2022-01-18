const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "pruebaufm",
    /*HOST: "database-2.cex0zx5newmo.us-east-1.rds.amazonaws.com",
    USER: "dev",
    PASSWORD: "dev1230_isan",
    DB: "proyecto"*/
});

conn.connect((error) => {
    if(error){
        console.log("Error en coneccion de Base de Datos");
    } else {
        console.log("Coneccion exitosa");
    }
});

module.exports=conn;