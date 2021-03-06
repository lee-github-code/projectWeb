/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 09:13:06
*/
import React, { Component,Fragment } from 'react';
import ios from 'iosselect';

//定义组件
//必须继承React.Component
class App extends Component {
	//必须有一个render方法

	constructor(props){
		super(props)
		this.state={
			dataArr:[
				"吃饭",
				"睡觉",
				"打豆豆"
			],
			addval:''
			
		}
	}

	handleAdd(){
		this.setState({
			dataArr:[
				...this.state.dataArr,
				this.state.addval
			],
			addval:''

		})
	}
	handleChange(e){
		this.setState({
			addval:e.target.value
		})
		

	}
	handleDelete(index){
		const dataArr=  [...this.state.dataArr]
		dataArr.splice(index,1)
		// this.state.dataArr.splice(index,1)
		this.setState({
			dataArr:dataArr
		})
	}
	render() {
		console.log(0)
		console.log(ios)
		return (
			<Fragment>
				<input onChange={this.handleChange.bind(this)}></input>
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.dataArr.map((data,index)=>(
							<li key={data} onClick={this.handleDelete.bind(this,index)} value={this.state.addval}>{data}</li>
						))
					}
				</ul>
			</Fragment>
		)
	}
}

//导出组件 ==  module.exports = App
export default App;

//1. 当export为default时，import可以以合法的变量任意命名
//2. 当export为default时，不应该加{}，后面不能跟变量声明语句
//3. 当export时，后边跟{}，可以选择在export{a as a1},或者在import中另外命名。注意:在export中另外命名，import必须用别名

