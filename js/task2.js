function changeCSS() {
	const paragraph = document.getElementById('text')
	paragraph.style.color = 'orange'
	paragraph.style.fontSize = '20px'
	paragraph.style.fontFamily = 'Comic Sans MS'
}

document.getElementById('styleButton').addEventListener('click', changeCSS)
