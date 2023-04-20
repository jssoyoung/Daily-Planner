var eventsData;
var timeDisplayEl = $('#time-display');

// Displays the date
var day = dayjs();
$('#currentDay').text(day.format('MMM D, YYYY'));

//Function to change the hours using the "past", "present", and "future" css
function setHourColors() {
    var now = dayjs();
    for (var i = 9; i < 18; i++) {
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        } else if (i > now.hour()) {
            $("#hour-" + i + " textarea").addClass("future");
        };
    };
};

//Function get items from local storage
function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9:"",
            hour10:"",
            hour11:"",
            hour12:"",
            hour13:"",
            hour14:"",
            hour15:"",
            hour16:"",
            hour17:"",
        };
    };  
    renderEvents(eventsData);
};

//Function to display saved events onto screen
function renderEvents(events) {
    console.log(events)
  var eventKeys = Object.keys(events);
  for (var i = 0; i < eventKeys.length; i++) {
    var eventKey = eventKeys[i];
    var timeBlockEl = $(`#hour-${i+9}`).children("textarea").val(events[eventKey]);
  };
};

function handleSaveClick(event) {
    // grab data from HTML
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];
    
    // modify our data object
    eventsData["hour" + hour] = value;

    // store in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
};

$('.saveBtn').on('click', handleSaveClick);

//Function upon loading screen
$(function() {
    loadStoredData();
    setHourColors();
});