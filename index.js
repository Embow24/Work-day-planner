//Display the current day at the top of the calendar
var today = dayjs();
$("#currentDay").text(today.format('dddd MMMM D'))

