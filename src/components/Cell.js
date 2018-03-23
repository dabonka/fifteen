import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
	return(
		<div>
			{props.position}
			{props.title}
		</div>
	)
}

Cell.propTypes = {
 position: PropTypes.number,
 title: PropTypes.string
}

export default Cell;