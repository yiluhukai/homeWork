### 创建一个目录 cli

```shell
npm init -y
```

修改 package.json 文件

```json
{
	"name": "cli-demo",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"bin": "lib/index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC"
}
```

安装 ejs 模版引擎和`inquirer`模块

```shell
npm install -D ejs inquirer
```

修改 index.js

```js
 #!/usr/bin/env node
//@ts-check
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

/**
 * type { import("inquirer")}
 */
inquirer
	.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Project name?'
		}
	])
	.then(anwsers => {
		// console.log(anwsers)
		// 根据用户回答的结果生成文件
		// 创建一个文件夹

		// 模板目录
		const tmplDir = path.join(__dirname, '../templates')
		const destDir = path.join(process.cwd(), anwsers.name)
		fs.mkdirSync(destDir)
		// 目标目录

		// 将模板下的文件全部转换到目标目录
		fs.readdir(tmplDir, (err, files) => {
			if (err) throw err
			files.forEach(file => {
				// 通过模板引擎渲染文件
				ejs.renderFile(path.join(tmplDir, file), anwsers, (err, result) => {
					if (err) throw err
					// 将结果写入目标文件路径
					fs.writeFileSync(path.join(destDir, file), result)
				})
			})
		})
	})

```

将模版文件放入到 templates/

```jsx
// index.jsx

import React from 'react'

import './<%= name %>.css'

export default () => <div className="<%= name %>"></div>

// componnets.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import <%= name %> from './<%= name %>';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<<%= name %> />, div);
ReactDOM.unmountComponentAtNode(div);
});

```

将这个模块注册到全局

```shell
npm link
```
