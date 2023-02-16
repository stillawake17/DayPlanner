$(document).ready(function () {
  $('.save-button').on('click', function () {
    // get text from area and time attached to it
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')

    localStorage.setItem(time, text)
  })

  // repeat this for every time block
  $('#9-hour .description').val(localStorage.getItem('9-hour'))
  $('#10-hour .description').val(localStorage.getItem('10-hour'))
  $('#11-hour .description').val(localStorage.getItem('11-hour'))
  $('#12-hour .description').val(localStorage.getItem('12-hour'))
  $('#13-hour .description').val(localStorage.getItem('13-hour'))
  $('#14-hour .description').val(localStorage.getItem('14-hour'))
  $('#15-hour .description').val(localStorage.getItem('15-hour'))
  $('#16-hour .description').val(localStorage.getItem('16-hour'))
  $('#17-hour .description').val(localStorage.getItem('17-hour'))

  function updateHour() {
    var currentTime = moment().hour()
    console.log('current', currentTime)
    $('.time-block').each(function () {
      var blockTime = parseInt($(this).attr('id').split('-')[0])
      console.log('blocktime', blockTime)
      if (blockTime < currentTime) {
        $(this).addClass('past')
      } else if (blockTime === currentTime) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })
  }

  updateHour()

  setInterval(updateHour, 20000)
})

// var timeDisplayEl = $('#time-display');
// var currentTime = moment();


// // handle displaying the time
// function displayTime() {
//     var rightNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
//     timeDisplayEl.text(rightNow);
//   }

//   // pseudocode
//   // if time of rightNow matches the id of the timeblock the colour should be red .present css selector
//   // if time of rightNow is before the id of the timeblock the colour should be .past css selector
//   // if time of rightNow is after the time of the timeblock the colour should be .future css selector

//   // Get the value of the input element with id "am8-text" HOW?
// var am8Value = $('#am8-text').val();

// // Print the value to the console NOT WORKING YET
// console.log(am8Value);

// // Save the value to a variable or send it to a server using AJAX
// // For example:
// var am8Data = {am8: am8Value};

// // Save the value to localStorage
// localStorage.setItem('am8Value', am8Value);

// // Retrieve the value from localStorage and print it to the console
// var savedValue = localStorage.getItem('am8Value');
// console.log(savedValue);

// // handle printing the schedule and its data to the page
// const Container= $('<div>').addClass("container");
// const text1= $('<textarea>').addClass("description");
// const input1 = $('<input>').addClass("input");
// const text2= $('<textarea>').addClass("description");
// const input2 = $('<input>').addClass("input");
// const text3= $('<textarea>').addClass("description");
// const input3 = $('<input>').addClass("input");
// const text4= $('<textarea>').addClass("description");
// const input4 = $('<input>').addClass("input");
// const text5= $('<textarea>').addClass("description");
// const input5 = $('<input>').addClass("input");
// const text6= $('<textarea>').addClass("description");
// const input6 = $('<input>').addClass("input");
// const text7= $('<textarea>').addClass("description");
// const input7 = $('<input>').addClass("input");
// const text8= $('<textarea>').addClass("description");
// const input8 = $('<input>').addClass("input");
// const text9= $('<textarea>').addClass("description");
// const input9 = $('<input>').addClass("input");
// const text10= $('<textarea>').addClass("description");
// const input10 = $('<input>').addClass("input");
// const text11= $('<textarea>').addClass("description");
// const input11 = $('<input>').addClass("input");
// const text12= $('<textarea>').addClass("description");
// const input12 = $('<input>').addClass("input");
// const textData1 =  text1.attr("data-entry");

//   setInterval(displayTime, 1000);