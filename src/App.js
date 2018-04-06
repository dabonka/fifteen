import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'
import PropTypes from 'prop-types';

let currentButtonName = "Старт"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sequenceOfNumbers: this.props.sequenceOfNumbers, isGameOpen: this.props.isGameOpen};
    this.shuffle = this.shuffle.bind(this);
    this.mixNumbers = this.mixNumbers.bind(this);
    this.putInOrder = this.putInOrder.bind(this);
    this.nextGameStep = this.nextGameStep.bind(this);
	}

	shuffle(a) {
	  for (let i = a.length - 1; i > 0; i--) {
	      const j = Math.floor(Math.random() * (i + 1));
	      [a[i], a[j]] = [a[j], a[i]];
	  }
		return a;
	}

	mixNumbers() {
		this.setState({sequenceOfNumbers: this.shuffle(this.state.sequenceOfNumbers)});
	}

	putInOrder() {
		this.setState({sequenceOfNumbers: this.props.sequenceOfNumbers});
	}

	nextGameStep() {
		this.state.isGameOpen ? this.putInOrder() : this.mixNumbers()
		this.setState({isGameOpen: !this.state.isGameOpen})
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
        		<button id="button" onClick={this.nextGameStep}>{this.state.isGameOpen ? "Закрыть" : "Старт"}</button>    
      		</div>
    		</div>

			</div>
		)
	}
	
}

App.propTypes = {
 sequenceOfNumbers: PropTypes.array.isRequired,
 isGameOpen: PropTypes.bool
}

export default App;
