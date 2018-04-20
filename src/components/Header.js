import PropTypes from 'prop-types';
import React from 'react';

function Header(props){
	if (props.isGameFinished) {
		return(
			<div>
				<h1>{props.title}</h1>

				<div className="congratulation">
					Вы выиграли! Путь к победе составил {props.counter} шагов!
				</div>
			</div>
		)
	} else if (props.isGameOpen === false) {
		return(
			<div>
				<h1>{props.title}</h1>
				<div>Начните игру</div>
			</div>
		)
	} else {
		return(
			<div>
				<h1>{props.title}</h1>
				Сделано шагов: {props.counter}
			</div>
		)
	}
}

Header.propTypes = {
 title: PropTypes.string.isRequired,
 counter: PropTypes.number
}

export default Header;