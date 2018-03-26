import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
	const cellPosition = props.position 
	if (cellPosition) {
	return(
		<div className="cell">
			{cellPosition}
		</div>
	)
	} else {
			return(
		<div className="cellNull">
			{cellPosition}
		</div>
	)

	} 
}

Cell.propTypes = {
 position: PropTypes.number
}

export default Cell;