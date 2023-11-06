const firstButton = document.getElementsByTagName('button')[0]
const secondButton = document.getElementsByTagName('button')[1]
const thirdButton = document.getElementsByTagName('button')[2]
const link = document.querySelector('a')

firstButton.addEventListener('click', function () {
	document.body.style.backgroundColor = 'blue'
})

secondButton.addEventListener('dblclick', function () {
	document.body.style.backgroundColor = 'pink'
})

thirdButton.addEventListener('mousedown', function () {
	document.body.style.backgroundColor = 'brown'
})

thirdButton.addEventListener('mouseup', function () {
	document.body.style.backgroundColor = 'white'
})

link.addEventListener('mouseover', function () {
	document.body.style.backgroundColor = 'yellow'
})

link.addEventListener('mouseout', function () {
	document.body.style.backgroundColor = 'white'
})
