'use strict'

// от 50 до 250, рандомный цвет, рандомная позиция

let circleList = []

let bodyWidth = window.innerWidth
let bodyHeight = window.innerHeight

function generateRandomCircle(counter) {
	for (let i = 0; i < counter; i++) {
		let width = Math.floor(Math.random() * (250 - 50) + 50)
		let x = Math.floor(Math.random() * ((bodyWidth - width) - 0) + 0)
		let y = Math.floor(Math.random() * ((bodyHeight - width) - 0) + 0)
		let obj = {
			radius: '50%',
			x: x,
			y: y,
			color: '#' + Math.floor(Math.random() * 16777215).toString(16),
			width: width,
			height: width,
		}
    circleList.push(obj)
	}
  showCircle(circleList)
  console.log(circleList);
}

function showCircle(circleList) {
	for (let i = 0; i < circleList.length; i++) {
		let circle = document.createElement('div')
		circle.style.width = circleList[i].width + 'px'
		circle.style.height = circleList[i].height + 'px'
		circle.style.borderRadius = circleList[i].radius
		circle.style.backgroundColor = circleList[i].color
		circle.style.position = 'absolute'
		circle.style.top = circleList[i].y + 'px'
		circle.style.left = circleList[i].x + 'px'
		document.getElementById('circle-list').appendChild(circle)
	}
}

generateRandomCircle(100)