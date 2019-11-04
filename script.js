var friends = ['Jake', 'Justin', 'Reggie', 'Dave', 'Ryan'];

  var locations = ['kitchen', 'bedroom', 'parlor', 'bathroom', 'basement',
    'backyard', 'garage', 'living room', 'closet', 'driveway'];

  var weapons = ['knife', 'baseball bat', 'cheese grater', 'spear', 'vase',
    'sledge hammer', 'chainsaw', 'rope', 'clothes iron', 'ice cream scoop',
    'broad sword', 'cross bow', 'ice pick', 'axe', '2x4', 'rocket launcher',
    'plasma sword', 'slingshot', 'katana', 'throwing star'];


//create 100 h3 headings on page load
for (var i = 0; i < 101; i++) {
  var heading = $('<h3>Accusation: ' + i + '</h3>');
  $('body').append(heading);
  if (i === 0) {
    heading.hide();
  }
  heading.click(clickEvent(i));
};

//this function will execute on a click event. (in the function above)
//It brings up an alert window with an accusation sentence using objects from the arrays above
function clickEvent(num) {
  
  return function () {
    alert('I accuse ' + friends[num % friends.length] + ', with the ' + weapons[num % weapons.length] + ' in the ' + locations[num % locations.length] + '!');
  }
}
