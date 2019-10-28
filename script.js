var friends = ['Jake', 'Justin', 'Reggie', 'Dave', 'Ryan'];

var accusation = 1;

var createHeading = function () {
  var heading = $('<h3></h3>').text("Accusation " + accusation);
  $('body').append(heading);
  accusation++;

  if (accusation > 100) {
    console.log("Reached 100");
    return;
  } else {
    createHeading();
  }
}

$(document).ready(function () {
  createHeading();
})
