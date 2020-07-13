const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
//test port
// const PORT = 8080;
const app = express();

//MEANS I NEED TO PUT CSS IN PUBLIC FOLDER
app.use(express.static("public"));

//stuff we need to include
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//gets handlebars working
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
// app.get("/", function (req, res) {
//   //   if (err) throw err;
//   res.send("Hello");
// });
app.use(routes);

app.listen(PORT, function () {
  console.log(`App now listening at http://localhost:${PORT}`);
});
