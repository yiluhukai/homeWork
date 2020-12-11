function Wait(str) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(str)
		}, 10)
	})
}
let a = '',
	b = '',
	c = ''
Wait('hello')
	.then(val => {
		a = val
		return Wait('lagou')
	})
	.then(val => {
		b = val
		return Wait('I ❤️ you')
	})
	.then(val => {
		c = val
		console.log(a + b + c)
	})
