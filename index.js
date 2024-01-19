//Display the current day at the top of the calendar
var today = dayjs();
$("#currentDay").text(today.format('dddd, MMMM D'))



//Array for standard business hours
var businessHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var hour = 0;

// //Add timeblocks inside div with class container
function timeblocks(){
for (let i=0; i<businessHour.length; i++){
var block = $('<div class= "row">')
$(".container").append(block)

var timeSection = $('<div class="col-2 time-block hour">').text(businessHour[hour])
var eventSection = $('<textarea class = "col-8">')
var saveSection = $('<button class="col-2 saveBtn">').text("save")

$(block).append(timeSection)
$(block).append(eventSection)
$(block).append(saveSection)

hour++
} 
}
timeblocks()