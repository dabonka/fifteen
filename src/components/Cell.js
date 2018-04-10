import React from 'react';
import PropTypes from 'prop-types';

function Cell(props){
	const {position, cellClick} = props
	return (
    <div 
        className={`${position ? "cell" : "cellNull"}`}
        onClick={cellClick} 
    >
        <div>{position}</div>
    </div>
)
}

Cell.propTypes = {
 position: PropTypes.number,
 cellClick: PropTypes.func
}

export default Cell;