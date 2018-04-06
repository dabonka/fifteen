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
    this.changeButtonName = this.changeButtonName.bind(this);
    this.changeGameStatus = this.changeGameStatus.bind(this);
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

	changeGameStatus() {
		let currentGameStatus = this.state.isGameOpen
			if (currentGameStatus ) {
				changeButtonName("Закрыть")
				console.log('---', 'opened')
			} else {
				changeButtonName("Старт")
				console.log('---', 'closed')
			}
		console.log('---', 'if false')
		this.setState({isGameOpen: !this.isGameOpen})
	}

	changeButtonName(name){
		currentButtonName = name
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
        		<button id="button" onClick={this.changeGameStatus}>{currentButtonName}</button>    
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
