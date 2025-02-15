let hrs =document.getElementById("hrs")
let mins =document.getElementById("mins")
let sec =document.getElementById("sec")

//For current date
let date =document.getElementById("date")
let month =document.getElementById("month")
let year =document.getElementById("year")

//for current day
let day=document.getElementById("day")

//to set current time
setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML =currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)

//to set current date
let currentDate = new Date()
date.innerHTML = currentDate.getDate();      
month.innerHTML = currentDate.getMonth()+1; 
year.innerHTML = currentDate.getFullYear(); 

if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}


//To set the current day

// Array of days of the week
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current day (0-6, where 0 is Sunday and 6 is Saturday)
let currentDay = currentDate.getDay();

// Set the content of the HTML element with the current day
day.innerHTML = daysOfWeek[currentDay];
 
