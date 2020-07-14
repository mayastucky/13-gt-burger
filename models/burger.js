const orm = require("../config/orm.js");

const burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (col, val, cb) {
    orm.insertOne("burgers", col, val, function (res) {
      cb(res);
    });
  },
  updateOne: function (valOne, valTwo, cb) {
    orm.updateOne("burgers", valOne, valTwo, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
