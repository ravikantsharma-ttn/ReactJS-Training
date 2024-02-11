const month = ["Jan","Feb","Mar","Apr","May","Jun",
"Jul","Aug","Sep","Oct","Nov","Dec"];
function populateDateAndTime(){
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let meridian = "AM";
  let salutation = "Good Morning";

  console.log(hours)
  if(hours >= 12 && hours < 16){
    salutation = 'Good Afternoon';
  }
  if(hours >= 16 && hours < 20){
    salutation = 'Good Evening';
  }
  if(hours >= 20 || (hours >=1 && hours < 4)){
    salutation = 'Good Night';
  }
  if (hours == 0) {
    hours = 12;
  }
  if(hours> 12){
    hours = hours - 12;
    meridian = "PM";
  }
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  
  let date = currentDate.getDate();
  let mon = currentDate.getMonth();
  let year = currentDate.getFullYear();

  let time = `${hours}:${minutes}:${seconds} ${meridian}`
  date = `${date} ${month[mon]} ${year}`; 
  $("#time").text(time);
  $("#salutation").text(salutation);
  $("#date").text(date);
}
setInterval(populateDateAndTime,1000);