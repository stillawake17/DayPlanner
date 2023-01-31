var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  

// handle printing the schedule and its data to the page

function printPlannerData() {
  var projectRowEl = $('<tr>');
}




  setInterval(displayTime, 1000);