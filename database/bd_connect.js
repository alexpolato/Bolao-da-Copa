const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

const config = require ('./bdconfig.json')
const connection = new Connection(config);

connection.on('connect', function(err) {
    if (err){
        console.log(err)
    }else {
        console.log("Connected")
        executeSQL()
    }
});

connection.connect();

function executeSQL() {
    request = new Request("SELECT * FROM TIME.Nome", function(err) {
    if (err) {
        console.log(err);}
    });
    let result = "";
    request.on('row', function(columns) {
        columns.forEach(function(column) {
          if (column.value === null) {
            console.log('NULL');
          } else {
            result+= column.value + " ";
          }
        });
        console.log(result);
        result ="";
    });

    request.on('done', function(rowCount, more) {
    console.log(rowCount + ' rows returned');
    });
    
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);
}
