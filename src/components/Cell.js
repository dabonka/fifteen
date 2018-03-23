import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
	return(
		<div>
			{props.position}
			olala
		</div>
	)
}

Cell.propTypes = {
 position: PropTypes.number.isRequired
}

export default Cell;