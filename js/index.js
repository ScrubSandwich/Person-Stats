function renderColor(favColor) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'

  return colorDiv
}

function renderListItem(text) {
  const item = document.createElement('li')
  item.textContent = text

  return item
}

function renderList(name, age, favoriteColor) {
  const list = document.createElement('ul')

  list.appendChild(renderListItem(`Name: ${name}`))
  list.appendChild(renderListItem(`Age: ${age}`))
  list.appendChild(renderListItem(`Favorite Color: ${favoriteColor}`))
  list.appendChild((renderColor(favoriteColor)))

  return list 
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const list = renderList(name, age, favoriteColor)
  const stats = document.querySelector('#stats')

  stats.appendChild(list)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)