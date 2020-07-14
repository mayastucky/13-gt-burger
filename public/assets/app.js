//this file doesn't work right 
$(function () {
  $("#devouredButton").on("click", function (event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers" + id, {
      type: "PUT",
    }).then(function () {
      console.log("devoured burgs");
      location.reload();
    });
  });
  $("#addButton").on("submit", function (event) {
    console.log("in the submit");
    event.preventDefault();
    var newBurgs = {
      burger_name: $("#bn").val().trim(),
      //burger_name: $("#bn"),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgs,
    }).then(function () {
      console.log("new burger created");
      location.reload();
    });
  });
});
