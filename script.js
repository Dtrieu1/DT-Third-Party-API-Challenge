// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = $(".saveBtn");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var nineAM = $("#hour-9");
  var tenAM = $("#hour-10");
  var elevenAM = $("#hour-11");
  var twelvePM = $("#hour-12");
  var onePM = $("#hour-13");
  var twoPM = $("#hour-14");
  var threePM = $("#hour-15");
  var fourPM = $("#hour-16");
  var fivePM = $("#hour-17");

  var timeSlots = [
    nineAM,
    tenAM,
    elevenAM,
    twelvePM,
    onePM,
    twoPM,
    threePM,
    fourPM,
    fivePM,
  ];

  $("#hour-9 .description").text(localStorage.getItem("9 am"));
  tenAM.children(".description").text(localStorage.getItem("10 am"));
  elevenAM.children(".description").text(localStorage.getItem("11 am"));
  twelvePM.children(".description").text(localStorage.getItem("12 pm"));
  onePM.children(".description").text(localStorage.getItem("1 pm"));
  twoPM.children(".description").text(localStorage.getItem("2 pm"));
  threePM.children(".description").text(localStorage.getItem("3 pm"));
  fourPM.children(".description").text(localStorage.getItem("4 pm"));
  fivePM.children(".description").text(localStorage.getItem("5 pm"));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // $(".saveBtn").on("click", function(){
  //   var hour = $(this).parent().attr("id");
  //   var save = $(this).siblings(".description").val();
  //   localStorage.setItem(hour, save);
  // })

  function SaveToLocal(event) {
    event.preventDefault();
    var save = $(this).siblings(".description").val();
    console.log(save);

    var hour = $(this).siblings(".text-center").text();
    console.log(hour);

    localStorage.setItem(hour, save);
  }
  saveButton.on("click", SaveToLocal);

  function colorChange() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  // TODO: Add code to display the current date in the header of the page.
  setInterval(() => {
    var today = dayjs();
    var date = $("#currentDay");
    date.text(today.format("h:mm:ss a, dddd, MMM D, YYYY"));

    var time = today.format("h a");

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    colorChange();
  }, 1000);
});
