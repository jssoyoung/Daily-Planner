var eventsData;
var timeDisplayEl = $('#time-display');

var now = dayjs();
$('#currentDay').text(now.format('MMM D, YYYY'));

// debug why not working
function setHourColors() {
    for (var i = 9; i < 18; i++) {
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        } else if (i > now.hour()) {
            $("#hour-" + i + " textarea").addClass("future");
        }
    }
}

function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9:"",
            hour10:"",
            hour11:"",
            hour12:"",
            hour1:"",
            hour2:"",
            hour3:"",
            hour4:"",
            hour5:"",
        }
    }
    //TODO load existing data from local storage
    var eventDisplay = document.querySelector("#hour-");
    var eventsEl = document.createElement("p");
    var calendarEvents;
    console.log(eventsData);
    eventsEl.textcontent = `${eventDisplay}`;
}

function handleSaveClick(event) {
    // grab data from HTML
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];
    
    // modify our data object
    eventsData["hour" + hour] = value;

    // store in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$('.saveBtn').on('click', handleSaveClick);

$(function() {
    loadStoredData();
    setHourColors();
});