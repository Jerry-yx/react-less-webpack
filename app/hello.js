import React from 'react'

class Hello extends React.Component {
	/*handleClick: () => {
		return "wwww" ;
	}*/
	render(){
		return <div  className={this.props.className}>{this.props.welcom}
			<span>ssss</span>
			<input tye="text" placeholder="qqqqqq"/>
		</div>
	}
}
export default Hello;