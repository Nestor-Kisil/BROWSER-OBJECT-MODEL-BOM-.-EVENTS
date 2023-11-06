const button = document.getElementById('myButton')

button.addEventListener('click', function () {
	alert('I was pressed!')
})

button.addEventListener('mouseover', function () {
	alert('Mouse on me!')
})

button.addEventListener('mouseout', function () {
	alert('Mouse is not on me!')
})
