var timeDisplayEl = $('#time-display');
var currentTime = moment();
alert(currentTime);

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  

// handle printing the schedule and its data to the page
const Container= $('<div>').addClass("container");
const text1= $('<textarea>').addClass("description");
const input1 = $('<input>').addClass("input");
const text2= $('<textarea>').addClass("description");
const input2 = $('<input>').addClass("input");
const text3= $('<textarea>').addClass("description");
const input3 = $('<input>').addClass("input");
const text4= $('<textarea>').addClass("description");
const input4 = $('<input>').addClass("input");
const text5= $('<textarea>').addClass("description");
const input5 = $('<input>').addClass("input");
const text6= $('<textarea>').addClass("description");
const input6 = $('<input>').addClass("input");
const text7= $('<textarea>').addClass("description");
const input7 = $('<input>').addClass("input");
const text8= $('<textarea>').addClass("description");
const input8 = $('<input>').addClass("input");
const text9= $('<textarea>').addClass("description");
const input9 = $('<input>').addClass("input");
const text10= $('<textarea>').addClass("description");
const input10 = $('<input>').addClass("input");
const text11= $('<textarea>').addClass("description");
const input11 = $('<input>').addClass("input");
const text12= $('<textarea>').addClass("description");
const input12 = $('<input>').addClass("input");


  setInterval(displayTime, 1000);