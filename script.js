// Connecting button to the function
document.getElementById('button').addEventListener('click', check)
let age = 0
let day = 0

function check () {
  // Taking user input to display appropriate message
  age = document.getElementById('userage').value
  age = parseInt(age)
  day = document.getElementById('userday').value

  if ((day === 'Tuesday' || day === 'Thursday') || (age > 12 && age < 21)) {
    document.getElementById('response').innerHTML = 'You are eligble for a discount today!'
  } else {
    document.getElementById('response').innerHTML = 'You will need to pay full price today.'
  }
}
