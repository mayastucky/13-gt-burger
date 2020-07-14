var connection = require("./connection.js");

var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, column, val, cb) {
    var queryString =
      `INSERT INTO ` + table + " (" + column.toString() + ") VALUES (?)";
    connection.query(queryString, val, function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  updateOne: function (table, valOne, valTwo, cb) {
    var queryString = "UPDATE ?? SET devourced = ? WHERE id = ?";
    console.log(queryString);
    connection.query(queryString, [table, valOne, valTwo], function (
      err,
      result
    ) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
