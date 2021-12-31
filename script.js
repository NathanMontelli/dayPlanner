const currentDate = moment().format('MMMM Do YYYY')
$('#currentDay').text(currentDate)
const currentHour = moment().hour()
console.log(currentHour)

for(let i = 9; i < 18; i++) {
  if (currentHour < i) {
    document.getElementById(i).classList.add('past')
  } else if (currentHour === i) {
    document.getElementById(i).classList.add('present')
  } else {
    document.getElementById(i).classList.add('future')
  }
} 