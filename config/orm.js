var connection = require("./connection.js");

// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

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
  insertOne: function (table, column, val, cb) {
    var queryString =
      `INSERT INTO ` + table + "(" + column.toString() + ") VALUES (?)";
    connection.query(queryString, [val], function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },

  updateOne: function (table, valOne, valTwo, cb) {
    var queryString = "UPDATE ?? SET devourced = ? HWERE id = ?";
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
