var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (tableInput, column, values, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, column, values], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },

  //update is tricky so wait wait wait

  //   updateOne: function(tableInput, column, values, cb){
  //       var queryString = "UPDATE  ?? SET "
  //   }
};

module.exports = orm;
