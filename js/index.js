function updatePage(ev) {
	ev.preventDefault()
	const f = ev.target
	const name = f.personName.value
	const age = f.age.value
	const color = f.favoriteColor.value
	
	//Add the name and the color to a Paragraph in the details div
	document.querySelector("#name").textContent = "Your Name: " + name
	document.querySelector("#age").textContent = "Your Age: " + age
	document.querySelector("#color").textContent = "Your Favorite Color: " + color
	
	//Add some color
	document.body.style.color = color
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updatePage)