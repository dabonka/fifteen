import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'
import PropTypes from 'prop-types';

function App(props){
	return (
		<div>
			<Header title={"Пятнашки"}/>
			<div>
				{props.arr.map(n => {
					<Cell position={n} title={"test1"}/>
         })}
				<Cell title={"test2"} />
			</div>	
		</div>
	)
}

App.propTypes = {
 arr: PropTypes.array.isRequired
}

export default App;

//				{props.arr.map(n => {
//          <Cell position={n} title={"test"}/>
//         })}