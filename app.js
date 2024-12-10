const pizzaSize = document.getElementById('itemsize')
const prevSizeBtn = document.getElementById('prevsizebtn')
const nextSizeBtn = document.getElementById('nextsizebtn')
const pizzaExtraOne = document.getElementById('itemextra1')
const pizzaExtraSecond = document.getElementById('itemextra2')
const prevExtraOneBtn = document.getElementById('prevextra-1-btn')
const nextExtraOneBtn = document.getElementById('nextextra-1-btn')

const size = [20, 25, 30, 35, 45]
let currentSize = 0

// Функція для зміни розміру
const changeSize = direction => {
	currentSize = (currentSize + direction + size.length) % size.length
	pizzaSize.innerHTML = size[currentSize]
}

// Додаємо обробники подій
prevSizeBtn.addEventListener('click', () => changeSize(-1))
nextSizeBtn.addEventListener('click', () => changeSize(1))

// Зміна додаткових інгредієнтів
const extras = ['Olives', 'Sausages', 'Corn', 'Tomatoes']
let currentExtra = 0

// Функція для зміни додаткових інгредієнтів
const changeExtras = direction => {
	currentExtra = (currentExtra + direction + extras.length) % extras.length
	pizzaExtraOne.innerHTML = extras[currentExtra]
}

// Додаємо обробники подій
prevExtraOneBtn.addEventListener('click', () => changeExtras(-1))
nextExtraOneBtn.addEventListener('click', () => changeExtras(1))
