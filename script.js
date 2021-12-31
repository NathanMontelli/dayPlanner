const currentDate = moment().format('MMMM Do YYYY')
$('#currentDay').text(currentDate)
const currentHour = moment().hour()

$('.btn').on('click', function () {
  const time = $(this).attr('id').split('_')[0]
  const input = $('#' + time + 'txt').val()
  localStorage.setItem(time, input)
})

for (let t = 9; t < 18; t++) {
  let event = localStorage.getItem(t)
  $('#' + t + 'txt').val(event)
  if (currentHour > t) {
    $('#' + t + 'txt').addClass('past')
  } else if (currentHour === t) {
    $('#' + t + 'txt').addClass('present')
  } else {
    $('#' + t + 'txt').addClass('future')
  }
} 