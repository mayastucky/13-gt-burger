const express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerObject = {
      burgers: data,
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  //var condition = "id = " + req.params.id;

  burger.updateOne(true, parseInt(req.params.id), function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
