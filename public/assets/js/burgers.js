// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devoured: newdevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        console.log("changed status:", newdevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name").val().trim()
    };
    if(!newBurger.burger_name){
      alert("Enter burger name!")
    } else {
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
    });
  

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(document).ready(function() {
  var backgroundImages = [
      'url(/assets/images/burger3.png)',
      'url(/assets/images/burger4.png)',
      'url(/assets/images/burger5.png)',
      'url(/assets/images/burger6.png)'
  ];
  $('.jumbotron').css('background-image', backgroundImages[0]);

var backgroundImageCounter = 0;
var jumbotron = $('.jumbotron');

window.setInterval(function() {
    jumbotron.css('background-image', backgroundImages[backgroundImageCounter]);

    backgroundImageCounter++;
    if(backgroundImageCounter >= backgroundImages.length) {
        backgroundImageCounter = 0;
    }
},1000);
}) 