import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'
import PropTypes from 'prop-types';

function App(props){
	return (
		<div>
			<Header title={"Пятнашки"}/>
			<div>
				<table>
					<tbody>
						<tr>
							{props.arr.map(n => {<td><Cell position={n} /></td> })}
						</tr>
					</tbody>
				</table>
			</div>	
		</div>
	)
}

App.propTypes = {
 arr: PropTypes.array.isRequired
}

export default App;