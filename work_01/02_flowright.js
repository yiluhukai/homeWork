const fp = require('lodash/fp')
const cars = [
	{
		name: 'Ferrari FF',
		horsepower: 660,
		dollar_value: 700000,
		in_stock: true
	},
	{
		name: 'Spyker C12 Zagato',
		horsepower: 650,
		dollar_value: 648000,
		in_stock: false
	},
	{
		name: 'Jaguar XKR-S',
		horsepower: 550,
		dollar_value: 132000,
		in_stock: false
	},
	{
		name: 'Audio R8',
		horsepower: 525,
		dollar_value: 114200,
		in_stock: false
	},
	{
		name: 'Aston Martin One-77',
		horsepower: 750,
		dollar_value: 1850000,
		in_stock: true
	},
	{
		name: 'Pagani Huayra',
		horsepower: 700,
		dollar_value: 1300000,
		in_stock: false
	}
]

//  获取最后一辆车的in_stock属性

const in_stock_prop = fp.curry(fp.prop)('in_stock')

const isLastInStock = fp.flowRight(in_stock_prop, fp.last)

const last_in_stock = isLastInStock(cars)

console.log(last_in_stock)

//  获取第一辆车的名字

const name_prop = fp.curry(fp.prop)('name')

const getFirstName = fp.flowRight(name_prop, fp.first)

const last_car_name = getFirstName(cars)

console.log(last_car_name)

// 重构averageDollarValue

const _map = fp.curry(fp.map)(val => val.dollar_value)

const _reduce = fp.curry(fp.reduce)(fp.add)(0)

const _len = arr => arr.length

const average = (length, total) => {
	return total / length
}
// 返回一个接受total的函数
const _average = fp.flowRight(fp.curry(average), _len)

const averageDollarValue = fp.flowRight(_average(cars), _reduce, _map)

console.log(averageDollarValue(cars))
