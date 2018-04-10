import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
	const {position, cellClick} = props
	if (position) {
	return(
		<div className="cell" onClick={props.cellClick} >
			{position}
		</div>
	)
	} else {
			return(
		<div className="cellNull">
			{position}
		</div>
	)

	} 
}

Cell.propTypes = {
 position: PropTypes.number,
 cellClick: PropTypes.func
}

export default Cell;