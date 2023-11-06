document.getElementById('country').addEventListener('change', function () {
	const countrySelect = document.getElementById('country')
	const citySelect = document.getElementById('cities')
	const selectedCountry = countrySelect.value
	citySelect.innerHTML = ''

	if (selectedCountry === 'ger') {
		addCityOption(citySelect, ['Berlin', 'Hamburg', 'Munich'])
	} else if (selectedCountry === 'usa') {
		addCityOption(citySelect, ['New York', 'Los Angeles', 'Chicago'])
	} else if (selectedCountry === 'ukr') {
		addCityOption(citySelect, ['Kyiv', 'Lviv', 'Odessa'])
	}

	const selectedCountryName =
		countrySelect.options[countrySelect.selectedIndex].text
	const selectedCity = citySelect.options[citySelect.selectedIndex].text
	document.getElementById(
		'selectedText'
	).textContent = `Selected Country: ${selectedCountryName}, Selected City: ${selectedCity}`
})

document.getElementById('cities').addEventListener('change', function () {
	const countrySelect = document.getElementById('country')
	const citySelect = document.getElementById('cities')
	const selectedCountryName =
		countrySelect.options[countrySelect.selectedIndex].text
	const selectedCity = citySelect.options[citySelect.selectedIndex].text
	document.getElementById(
		'selectedText'
	).textContent = `Selected Country: ${selectedCountryName}, Selected City: ${selectedCity}`
})

function addCityOption(select, cities) {
	cities.forEach(city => {
		const option = document.createElement('option')
		option.value = city
		option.textContent = city
		select.appendChild(option)
	})
}
