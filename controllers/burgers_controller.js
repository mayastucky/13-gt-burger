const express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//root route that redirects to see the list of burgers 
router.get("/", function (req, res) {
  res.redirect("/burgers");
});
//renders the burgers on the page using the index handlebars file and passes in a burgerObject 
router.get("/burgers", function (req, res) {
  burger.selectAll(function (data) {
    var burgerObject = {
      burgers: data,
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});
//route for inserting a new burger 
router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
    res.json({ id: result.insertId });
  });
});

// router.post("/api/burgers", function (req, res) {
//   burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
//     // res.json({ id: result.insertId });
//     console.log(req.body.burger_name);
//     res.redirect("/");
//   });
// });

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("put route");

  burger.updateOne(true, parseInt(req.params.id), function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
