$(function () {
  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers" + id, {
      type: "PUT",
    }).then(function () {
      console.log("devoured burgs");
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurgs = {
      burger_name: $("#bn").val().trim(),
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
