$(document).ready(function () {
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));
});