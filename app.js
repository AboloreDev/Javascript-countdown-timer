const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Select from HTML
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const timer = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
console.log(tempDate)
let tempYear = tempDate.getFullYear()
console.log(tempYear)
let tempMonth = tempDate.getMonth()
console.log(tempMonth)
let tempDay = tempDate.getDate()
console.log(tempDay)

// set a future date for the giveaway
// const futureDate = new Date(2023, 1, 29, 11, 59, 0)
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59)
//  console.log(futureDate)

// get each date, months and year
// get year 
const years = futureDate.getFullYear()
// console.log(years)

// get months from the months array
let month = futureDate.getMonth()
    month = months [month]
    // console.log(month)

// get weekday from the weekDays array
let weekday = futureDate.getDay()
    weekday = weekdays[weekday]
    // console.log(weekday)

// get date
const days = futureDate.getDate()
// console.log(days)

// get hours
const hours = futureDate.getHours()
// console.log(hours)

// get Minute
const minutes = futureDate.getMinutes()
// console.log(minutes)

// get Seconds
const seconds = futureDate.getSeconds()
// console.log(seconds)

// Dynamically add it to tyhe html
giveaway.textContent = `Giveaway ends on ${weekday}, ${days} ${month} ${years} at ${hours}:${minutes}am `;

// get the futureDate in milliseconds
const futureTime = futureDate.getTime()
// console.log(futureTime)

// get the remaining time difference between the givaway amd the countDown timer and store it in a function
function getRemainingTime () {
  // get todayDate in milliseconds
  const todayTime = new Date().getTime()
  // console.log(todayTime)
  // get the difference betwwn todaysTime and futureTime
  const timeDifference = futureTime - todayTime
  // console.log(timeDifference)

  // 1day = 24hrs
  // 1hr = 60minutes
  // 1min = 60seconds
  // 1sec = 1000ms

  // get values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000
  const oneSec = 1000

// calculate all values
// math.floor rounds up to the whole number
let day = Math.floor(timeDifference / oneDay)
// console.log(day)
let hour = Math.floor((timeDifference % oneDay) / oneHour)
// console.log(hour)
let minute = Math.floor((timeDifference % oneHour) / oneMin)
let seconds = Math.floor((timeDifference % oneMin) / oneSec)

// store all values in an array
const values = [day, hour, minute, seconds]

// set a statement that if time format is less than 10 it should display 09
  function format (item) {
    if(item < 10) {
      return item = `0${item}`
    }else {
      return item
    }

  }
// dynamically display the values in the webpage
  // loop through the timer
  const timer = document.querySelectorAll('.deadline-format h4');

  timer.forEach ((item, index) => {
    item.innerHTML = format(values[index])
  })

  if(timeDifference < 0) {
    clearInterval(countdown)
    deadline.innerHTML =`<h4 class="expired">sorry, This giveaway has expired</h4>`;
  }
}

// set the countdown
const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();