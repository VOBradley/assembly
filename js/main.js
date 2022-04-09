let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Член']
let vegetables = ['Огурец', 'Помидор', 'Картофель', 'Капуста']
let meat = ['Мясо', 'Свинина', 'Курица', 'Говядина']
let dairy = ['Молоко', 'Масло', 'Сыр', 'Сливки']
let grains = ['Крупа', 'Пшено', 'Овсяная каша', 'Ячмень']
let other = ['Масло растительное', 'Масло сливочное', 'Масло подсолнечное', 'Масло парфеновое']
let all = fruits.concat(vegetables, meat, dairy, grains, other)

let fruits_list = document.getElementById('fruits')
let vegetables_list = document.getElementById('vegetables')
let meat_list = document.getElementById('meat')
let dairy_list = document.getElementById('dairy')
let grains_list = document.getElementById('grains')
let other_list = document.getElementById('other')
let all_list = document.getElementById('all')

fruits.forEach(function (item) {
	let liFirst = document.createElement('li')
	liFirst.innerHTML = item
	fruits_list.prepend(liFirst) // вставить liFirst в начало <ol>
})
vegetables.forEach(function (item) {
	let liFirst = document.createElement('li')
	liFirst.innerHTML = item
	vegetables_list.prepend(liFirst) // вставить liFirst в начало <ol>
})
meat.forEach(function (item) {
	let liFirst = document.createElement('li')
	liFirst.innerHTML = item
	meat_list.prepend(liFirst) // вставить liFirst в начало <ol>
})
dairy.forEach(function (item) {
	let liFirst = document.createElement('li')
	liFirst.innerHTML = item
	dairy_list.prepend(liFirst) // вставить liFirst в начало <ol>
})
grains.forEach(function (item) {
	let liFirst = document.createElement('li')
	liFirst.innerHTML = item
	grains_list.prepend(liFirst) // вставить liFirst в начало <ol>
})
other.forEach(function (item) {
	let liFirst = document.createElement('li')
	liFirst.innerHTML = item
	other_list.prepend(liFirst) // вставить liFirst в начало <ol>
})

all.forEach(function (item) {
	let liFirst = document.createElement('li')
	liFirst.innerHTML = item
	all_list.prepend(liFirst) // вставить liFirst в начало <ol>
})
