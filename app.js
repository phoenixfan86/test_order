const orderInfo = document.getElementById('orderinfo')
const pizzaSize = document.getElementById('itemsize')
const prevSizeBtn = document.getElementById('prevsizebtn')
const nextSizeBtn = document.getElementById('nextsizebtn')
const pizzaExtraOne = document.getElementById('itemextra1')
const pizzaExtraTwo = document.getElementById('itemextra2')
const prevExtraOneBtn = document.getElementById('prevextra-1-btn')
const nextExtraOneBtn = document.getElementById('nextextra-1-btn')
const prevExtraTwoBtn = document.getElementById('prevextra-2-btn')
const nextExtraTwoBtn = document.getElementById('nextextra-2-btn')

const updateOrderInfo = () => {
	orderInfo.innerHTML =
		'Піца ' +
		size[currentSize] +
		' з ' +
		extras[currentExtraOne] +
		' і ' +
		extras[currentExtraTwo]
}

const size = [20, 25, 30, 35, 45]
let currentSize = 0

// Функція для зміни розміру
const changeSize = direction => {
	currentSize = (currentSize + direction + size.length) % size.length
	pizzaSize.innerHTML = size[currentSize]
	updateOrderInfo()
}

// Додаємо обробники подій
prevSizeBtn.addEventListener('click', () => changeSize(-1))
nextSizeBtn.addEventListener('click', () => changeSize(1))

// Зміна додаткових інгредієнтів
const extras = ['Olives', 'Sausages', 'Corn', 'Tomatoes']
let currentExtraOne = 0
let currentExtraTwo = 0

// Функція для зміни додаткових інгредієнтів
const changeExtraOne = direction => {
	currentExtraOne =
		(currentExtraOne + direction + extras.length) % extras.length
	pizzaExtraOne.innerHTML = extras[currentExtraOne]
	updateOrderInfo()
}

const changeExtraTwo = direction => {
	currentExtraTwo =
		(currentExtraTwo + direction + extras.length) % extras.length
	pizzaExtraTwo.innerHTML = extras[currentExtraTwo]
	updateOrderInfo()
}

// Додаємо обробники подій
prevExtraOneBtn.addEventListener('click', () => changeExtraOne(-1))
nextExtraOneBtn.addEventListener('click', () => changeExtraOne(1))
prevExtraTwoBtn.addEventListener('click', () => changeExtraTwo(-1))
nextExtraTwoBtn.addEventListener('click', () => changeExtraTwo(1))

updateOrderInfo()
