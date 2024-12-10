const pizzaSize = document.getElementById('itemsize')
const pizzaExtraOne = document.getElementById('itemextra1')
const pizzaExtraSecond = document.getElementById('itemextra2')

const size = [20, 25, 30]
const extras = ['Olives', 'Sausages', 'Corn', 'Tomatoes']

pizzaSize.innerHTML = size[0]
pizzaExtraOne.innerHTML = extras[0]
pizzaExtraSecond.innerHTML = extras[1]
