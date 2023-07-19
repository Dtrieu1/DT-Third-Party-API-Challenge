// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourSlot = $(".row"); // this showcases the row of the entity
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
  var onePM = $("#hour-1");
  var twoPM = $("#hour-2");
  var threePM = $("#hour-3");
  var fourPM = $("#hour-4");
  var fivePM = $("#hour-5");

  nineAM.children(".description").text(localStorage.getItem("9AM"));
  tenAM.children(".description").text(localStorage.getItem("10AM"));
  elevenAM.children(".description").text(localStorage.getItem("11AM"));
  twelvePM.children(".description").text(localStorage.getItem("12PM"));
  onePM.children(".description").text(localStorage.getItem("1PM"));
  twoPM.children(".description").text(localStorage.getItem("2PM"));
  threePM.children(".description").text(localStorage.getItem("3PM"));
  fourPM.children(".description").text(localStorage.getItem("4PM"));
  fivePM.children(".description").text(localStorage.getItem("5PM"));

  function SaveToLocal(event) {
    event.preventDefault();
    var save = $(this).siblings(".description").val();
    console.log(save);

    var hour = $(this).siblings(".text-center").text();
    console.log(hour);

    localStorage.setItem(hour, save);
  }
  saveButton.on("click", SaveToLocal);

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  setInterval(() => {
    var today = dayjs();
    var date = $("#currentDay");
    date.text(today.format("h:mm:ss a, dddd, MMM D, YYYY"));

    console.log(today.format("h a"));
  }, 1000);
});
``;
