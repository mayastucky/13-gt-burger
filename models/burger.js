const orm = require("../config/orm.js");

const burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cb) {
    orm.insertOne("burgers", column, values, function (res) {
      cb(res);
    });
  },
  //DO UPDATE ONE LATER
};

module.exports = burgers;
