const goods = [
	{
		id: 1,
		name: 'Ноутбук',
		price: '100000',
		img: 'http://modulesopencart.ru/image/catalog/Создание%20сайта/5555.png',
	},
	{
		id: 2,
		name: 'Мышь',
		price: '5000',
		img: 'http://modulesopencart.ru/image/catalog/Создание%20сайта/5555.png',
	},
	{
		id: 3,
		name: 'Клавиатура',
		price: '5000',
		img: 'http://modulesopencart.ru/image/catalog/Создание%20сайта/5555.png',
	},
	{
		id: 4,
		name: 'Компьютер',
		price: '100000',
		img: 'http://modulesopencart.ru/image/catalog/Создание%20сайта/5555.png',
	},
]

let cart = []
if (localStorage.getItem('cart')) {
	cart = JSON.parse(localStorage.getItem('cart'))
}

function showGoods(goods) {
	let str = ''
	for (let i = 0; i < goods.length; i++) {
		str += `<div class="goods-item">
					<img src="${goods[i].img}" alt="${goods[i].name}">
					<h3>${goods[i].name}</h3>
					<p>${goods[i].price}</p>
					<button onclick="addToCart(${goods[i].id})" class="buy-btn" data-id="${goods[i].id}">Купить</button>
				</div>`
	}
	document.querySelector('.goods-list').innerHTML = str
}

showGoods(goods)

function showCart(cart) {
	let str = ''
	for (let i = 0; i < cart.length; i++) {
		str += `<div class="cart-item">
					<img src="${cart[i].img}" alt="${cart[i].name}">
					<h3>${cart[i].name}</h3>
					<p>${cart[i].price}</p>
          <span>${cart[i].count}</span>
					<button onclick="removeGoodsCart(${cart[i].id})" class="delete-btn" data-id="${cart[i].id}">Удалить</button>
				</div>`
	}
	localStorage.setItem('cart', JSON.stringify(cart))
	document.querySelector('.cart-list').innerHTML = str

	if (cart.length == 0) {
		document.querySelector('.cart-list').innerHTML = 'Корзина пуста'
	}
}

showCart(cart)

function addToCart(id) {
	for (let i = 0; i < goods.length; i++) {
		if (goods[i].id == id) {
			if (cart.find(element => element.id == id)) {
				cart.find(element => element.id == id).count++
			} else {
				goods[i].count = 1
				cart.push(goods[i])
			}
			localStorage.setItem('cart', JSON.stringify(cart))
			showCart(cart)
		}
	}
}

function removeGoodsCart(id) {
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id == id) {
			cart.splice(i, 1)
			localStorage.setItem('cart', JSON.stringify(cart))
			showCart(cart)
			break
		}
	}
}
