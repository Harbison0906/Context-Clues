var sentence = [
  friends = ['Jake', 'Justin', 'Reggie', 'Dave', 'Ryan'],

  locations = ['kitchen', 'bedroom', 'parlor', 'bathroom', 'basement',
  'backyard', 'garage', 'living room', 'closet', 'driveway'],

  weapons = ['knife', 'baseball bat', 'cheese grater', 'spear', 'vase',
  'sledge hammer', 'chainsaw', 'rope', 'clothes iron', 'ice cream scoop',
  'broad sword', 'cross bow', 'ice pick', 'axe', '2x4', 'rocket launcher',
  'plasma sword', 'slingshot', 'katana', 'throwing star']
];



//inserts 100 h3 headings when page loads
var accusation = 1;

var createHeading = function () {
  var heading = $('<h3></h3>').text("Accusation " + accusation);
  $('.col-3').append(heading);
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

$('.col-3').click(function () {
  // var accuse = [friends, locations, weapons];
  var i;
  for (i = 0; i < friends.length; i++) {
    console.log(sentence[i]);
  }
})

