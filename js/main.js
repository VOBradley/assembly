const cities = [
	{
		name: 'Москва',
		population: 10000,
	},
	{
		name: 'Санкт-Петербург',
		population: 20000,
	},
	{
		name: 'Екатеринбург',
		population: 30000,
	},
]

function getCities(obj) {
	for (let i = 0; i < obj.length; i++) {
    console.log({...obj[i]});
		for (let key in obj[i]) {
			console.log(key + " = " + obj[i][key])
		}
	}
}

getCities(cities)
