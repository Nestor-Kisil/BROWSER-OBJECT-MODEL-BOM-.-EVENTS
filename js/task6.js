function displayWindowSize() {
	const windowSizeSpan = document.getElementById('windowSize')

	windowSizeSpan.textContent = `Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`
}

window.addEventListener('load', displayWindowSize)
window.addEventListener('resize', displayWindowSize)
