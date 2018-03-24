import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
	return(
		<div>
			{props.position}
		</div>
	)
}

Cell.propTypes = {
 position: PropTypes.number
}

export default Cell;