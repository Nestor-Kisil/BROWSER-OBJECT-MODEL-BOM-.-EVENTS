document.addEventListener('DOMContentLoaded', function () {
	const button = document.getElementById('myButton')
	const outputDiv = document.getElementById('output')

	button.addEventListener('click', function () {
		outputDiv.textContent = 'I was pressed!'
	})

	button.addEventListener('mouseover', function () {
		outputDiv.textContent = 'Mouse on me!'
	})

	button.addEventListener('mouseout', function () {
		outputDiv.textContent = 'Mouse is not on me!'
	})
})
