var friends = ['Jake', 'Justin', 'Reggie', 'Dave', 'Ryan'];

var accusation = 1;

$(document).ready(function () {
    var heading = $('<h3></h3>').text("Accusation " + accusation);
    $('body').append(heading);
    accusation++;

    if (accusation > 100) {
      console.log('reached 100');
    }
    console.log(heading);
})
