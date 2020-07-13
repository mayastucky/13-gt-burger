const orm = require("../config/orm.js");

const burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cb) {
    orm.insertOne("burgers", columns, values, function (res) {
      cb(res);
    });
  },
  updateOne: function (cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
