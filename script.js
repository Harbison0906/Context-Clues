var friends = ['Jake', 'Justin', 'Reggie', 'Dave', 'Ryan'];

var locations = ['kitchen', 'bedroom', 'parlor', 'bathroom', 'basement',
  'backyard', 'garage', 'living room', 'closet', 'driveway'];

var weapons = ['knife', 'baseball bat', 'cheese grater', 'spear', 'vase',
  'sledge hammer', 'chainsaw', 'rope', 'clothes iron', 'ice cream scoop',
  'broad sword', 'cross bow', 'ice pick', 'axe', '2x4', 'rocket launcher',
  'plasma sword', 'slingshot', 'katana', 'throwing star'];

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
