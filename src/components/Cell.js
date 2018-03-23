import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
	return(
		<div>{props.number}</div>
	)
}

Cell.propTypes = {
 number: PropTypes.number
}

export default Cell;