import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sequenceOfNumbers: this.props.sequenceOfNumbers};
	}

	render() {
		return (
			<div>
				<Header title={"Пятнашки"}/>
				<div className="mainBox">
					{this.state.sequenceOfNumbers.map((n, i) => <Cell key={i} position={n}/>)}
				</div>	

				<div className="buttonBox">
      		<div className="buttonPosition">
        		<button id="button" onClick={this.mixNumbers}>Перемешать</button>    
      		</div>
    		</div>

			</div>
		)
	}
	
}

App.propTypes = {
 sequenceOfNumbers: PropTypes.array.isRequired
}

export default App;




