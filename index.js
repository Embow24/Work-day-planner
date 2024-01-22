//Display the current day at the top of the calendar
var today = dayjs();
$("#currentDay").text(today.format('dddd, MMMM D'))

//Array for standard business hours
var businessHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]

var hour = 0;

//Add timeblocks inside div with class container
function timeblocks(){
for (let i=9; i<18; i++){
var block = $('<div class= "row"'+ 'id="'+i+'">')
$(".container").append(block)

var timeSection = $('<div class="col-2 time-block hour">').text(businessHour[hour])
var eventSection = $('<textarea class="col-8 description" type="text">')
var saveButton = $('<button class="col-2 saveBtn">').text("save")

$(block).append(timeSection)
$(block).append(eventSection)
$(block).append(saveButton)

hour++
} 
}

//color code each timeblock based on past, present or future viewing
function colorBlock() {
var currentTime = dayjs().hour()

$('.row').each(function(){
    var hourId = parseInt($(this).attr("id"))
   for(var i=0; i<hours.length; i++) {
    if (hourId === currentTime  ) {
        $(this).addClass("present")
        $(this).removeClass("past, future")
    } else if (hourId < currentTime){
        $(this).addClass("past")
        $(this).removeClass("present, future")
    } else{ 
        $(this).addClass("future")
        $(this).removeClass("past, present")
    }
    }
})
}

timeblocks()
colorBlock()


//when save button is clicked event is saved in the textarea
$(".saveBtn").on("click", function(){
var event = $(this).siblings(".description").val()
var time = $(this).parent().attr("id")

//saves time and event in local storage
localStorage.setItem(time, event)
})

//get data from local storage
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))