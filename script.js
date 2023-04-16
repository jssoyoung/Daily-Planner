$(document).ready(function () {
    var timeDisplayEl = $('#date-display');
    var hourEl = $('#hours');

    function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
    }

    // once clicked, event is saved on calendar
    var saveButton = document.querySelector(".saveBtn");
    saveButton.addEventListener("click", function(event){
    alert("bye");
    });

    // once clicked, calendar is cleared
    var clearButton = document.querySelector(".clearBtn");
    clearButton.addEventListener("click", function(event){
    alert("hi");
    });


});