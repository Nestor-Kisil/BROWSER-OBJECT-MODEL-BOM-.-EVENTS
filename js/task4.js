document.getElementById('removeOption').addEventListener('click', function () {
	const select = document.getElementById('mySelect')
	const selectedOption = select.options[select.selectedIndex]
	if (selectedOption) {
		select.removeChild(selectedOption)
	}
})
