import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'
import PropTypes from 'prop-types';

class App extends React.Component {

	render() {
		return (
			<div>
				<Header title={"Пятнашки"}/>
				<div className="mainBox">
					{this.props.arr.map((n, i) => <Cell key={i} position={n}/>)}
				</div>	
			</div>
		)
	}
	
}

App.propTypes = {
 arr: PropTypes.array.isRequired
}

export default App;
