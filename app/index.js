import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.js'
//Index app
class Index extends	React.Component {
	render(){
		return <Hello welcom='hello world'></Hello>
	}
}
//render main component
ReactDOM.render(<Index/>,document.getElementById('root'));
export default Index;

