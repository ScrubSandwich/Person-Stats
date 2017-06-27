function updatePage(ev) {
	ev.preventDefault()
	const f = ev.target
	const name = f.personName.value
	const age = f.age.value
	const color = f.favoriteColor.value

	//Refernce the detials div
	const stats = document.querySelector('#details')

	//Create a list
	const list = document.createElement('ul')

	//Create list item: Name
	const nameItem = document.createElement('li')
	nameItem.textContent = `Name ${name}`
	list.appendChild(nameItem)

	//Create list item: Age
	const ageItem = document.createElement('li')
	ageItem.textContent = `Age: ${age}`
	list.appendChild(ageItem);

	//Create list item: Color
	const colorItem = document.createElement('li');
	colorItem.textContent = `Favorite Color: ${color}`

	const colorDiv = document.createElement('div')
	colorItem.style.backgroundColor = color
	colorDiv.style.backgroundColor = color
	colorItem.appendChild(colorDiv)

	colorDiv.style.width = '3rem'
	colorDiv.style.height = '3rem'
	list.appendChild(colorItem)
	
	//Add the name and the color to a Paragraph in the details div
	document.querySelector("#name").textContent = "Your Name: " + name
	document.querySelector("#age").textContent = "Your Age: " + age
	document.querySelector("#color").textContent = "Your Favorite Color: " + color

	//Append the ul to the end of the div
	stats.appendChild(list)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updatePage)