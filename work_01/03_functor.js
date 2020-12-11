const fp = require('lodash/fp')

const { MayBe, Container } = require('./support')

let maybe = MayBe.of([5, 6, 1])

let ex1 = val => fp.map(fp.add(1), val)

const m = maybe.map(ex1)

console.log(m)

// 获取第一个元素

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

let ex2 = val => fp.first(val)

console.log(xs.map(ex2))

// 找到user的名字

let safeProp = fp.curry(function (x, o) {
	return MayBe.of(o[x])
})

let user = { id: 2, name: 'Albert' }

let ex3 = user => safeProp('name')(user).map(fp.first)._value

console.log(ex3(user))

// 使用重写ex4

let ex4 = n => MayBe.of(n).map(parseInt)._value

console.log(ex4(10.1))
