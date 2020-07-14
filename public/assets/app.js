//this file doesn't work right
$(function () {
  console.log("Hello");
  $(".burger-list").on("click", ".devouredbutton", function (event) {
    console.log("devour");
    event.preventDefault();
    console.log($(this));
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true,
    }).then(function () {
      console.log("devoured burgs");
      location.reload();
    });
  });
  $("#addButton").on("click", function (event) {
    console.log("in the submit");
    event.preventDefault();
    var newBurgs = {
      burger_name: $("#nb").val().trim(),
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
