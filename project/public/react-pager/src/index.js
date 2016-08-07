import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

const { number, func } = PropTypes;

class Pagination extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		// 总数
		totalCount: number.isRequired,

		// 每页的数量
		maxCount: number,

		// 最多显示多少个页码
		limitCount: number,

		// 当前页
		currentPage: number,

		// 切换页面的回调
		onPageChange: func,
	};

	render() {
		return <div className='pagination'>
			
		</div>
	}
}

class Item extends Component {

	static propTypes = {

	};

	render() {
		<div className='item'>

		</div>
	}
}

// const itemStyle = {
// 	display: 'inline-block',

// }

render(<Pagination totalCount={96} maxCount={10} />, document.getElementById('container'));
