import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {	sequenceOfNumbers: this.props.sequenceOfNumbers,
    							 	isGameOpen: this.props.isGameOpen, 
    							 	counter: 0,
    							 	isGameFinished: false
    							 };

    this.shuffle = this.shuffle.bind(this);
    this.mixNumbers = this.mixNumbers.bind(this);
    this.putInOrder = this.putInOrder.bind(this);
    this.nextGameStep = this.nextGameStep.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.checkReplacementAble = this.checkReplacementAble.bind(this);
    this.findNullPosition = this.findNullPosition.bind(this);
    this.checkNull = this.checkNull.bind(this);
    this.replaceChips = this.replaceChips.bind(this);
    this.testFunction = this.testFunction.bind(this); // Тестирование
    this.checkIsGameFinished = this.checkIsGameFinished.bind(this);
    this.addCount = this.addCount.bind(this);
	}

	shuffle(arr) {
		const a = arr.slice();
	  for (let i = a.length - 1; i > 0; i--) {
	      const j = Math.floor(Math.random() * (i + 1));
	      [a[i], a[j]] = [a[j], a[i]];
	  }
		return a;
	}

	addCount() {
		this.setState({counter: this.state.counter + 1});
	}

	checkIsGameFinished() {
		if (JSON.stringify(this.props.sequenceOfNumbers)==JSON.stringify(this.state.sequenceOfNumbers)) {
			this.setState({isGameOpen: false});
			this.setState({isGameFinished: true});
		}
	}

	cellClick(i) {
		if (this.state.isGameOpen) {
			let nullPosition = this.findNullPosition();
			if (this.checkReplacementAble(i, nullPosition)){
				this.setState({sequenceOfNumbers: this.replaceChips(i, nullPosition)},()=>{this.checkIsGameFinished(), this.addCount()});
			}
		}
	}

	replaceChips(x, y){
		let a = this.state.sequenceOfNumbers.slice();
		let tempVar = a[y];
		a[y] = a[x];
		a[x] = tempVar;
		return a
	}

	findNullPosition() {
		let nullPosition = this.state.sequenceOfNumbers.findIndex(this.checkNull);
		return nullPosition;
	}

	checkNull(value) {
    return value === null;
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

		if (this.state.isGameFinished) {
			this.setState({isGameFinished: false})
			this.setState({counter: 0})
		} 

		this.setState({isGameOpen: !this.state.isGameOpen})
	}

	testFunction() {
		if (this.state.isGameOpen) {
			this.setState({sequenceOfNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null, 15] });
		}
	}

	checkReplacementAble(chipPosition, nullPosition) {
		let arr = this.state.sequenceOfNumbers
		switch(chipPosition) {
			case 0:
				if ((nullPosition === 1) || (nullPosition === 4)) {
					return true
				} else {
					return false
				}

			case 1:
				if ((nullPosition === 0) || (nullPosition === 2) || (nullPosition === 5)) {
					return true
				} else {
					return false
				}

			case 2:
				if ((nullPosition === 1) || (nullPosition === 3) || (nullPosition === 6)) {
					return true
				} else {
					return false
				}

			case 3:
				if ((nullPosition === 2) || (nullPosition === 7)) {
					return true
				} else {
					return false
				}

			case 4:
				if ((nullPosition === 0) || (nullPosition === 5) || (nullPosition === 8)) {
					return true
				} else {
					return false
				}

			case 5:
				if ((nullPosition === 1) || (nullPosition === 4) || (nullPosition === 6) || (nullPosition === 9)) {
					return true
				} else {
					return false
				}

			case 6:
				if ((nullPosition === 2) || (nullPosition === 5) || (nullPosition === 7) || (nullPosition === 10)) {
					return true
				} else {
					return false
				}

			case 7:
				if ((nullPosition === 3) || (nullPosition === 6) || (nullPosition === 11)) {
					return true
				} else {
					return false
				}

			case 8:
				if ((nullPosition === 4) || (nullPosition === 9) || (nullPosition === 12)) {
					return true
				} else {
					return false
				}

			case 9:
				if ((nullPosition === 5) || (nullPosition === 8) || (nullPosition === 10) || (nullPosition === 13)) {
					return true
				} else {
					return false
				}

			case 10:
				if ((nullPosition === 6) || (nullPosition === 9) || (nullPosition === 11) || (nullPosition === 14)) {
					return true
				} else {
					return false
				}

			case 11:
				if ((nullPosition === 7) || (nullPosition === 10) || (nullPosition === 15)) {
					return true
				} else {
					return false
				}

			case 12:
				if ((nullPosition === 8) || (nullPosition === 13)) {
					return true
				} else {
					return false
				}

			case 13:
				if ((nullPosition === 9) || (nullPosition === 12) || (nullPosition === 14)) {
					return true
				} else {
					return false
				}

			case 14:
				if ((nullPosition === 10) || (nullPosition === 13) || (nullPosition === 15)) {
					return true
				} else {
					return false
				}

			case 15:
				if ((nullPosition === 11) || (nullPosition === 14)) {
					return true
				} else {
					return false
				}

			default:
    		return false
		}
	}

	render() {
		return (
			<div>
				<Header title={"Пятнашки"} counter={this.state.counter} isGameFinished={this.state.isGameFinished} isGameOpen={this.state.isGameOpen} />
				<div className="mainBox">
					{this.state.sequenceOfNumbers.map((n, i) => <Cell key={i} position={n} cellClick={() => this.cellClick(i)} />)}
				</div>	

				<div className="buttonBox">
      		<div className="buttonPosition">
        		<button id="button" onClick={this.nextGameStep}>{this.state.isGameOpen ? "Закрыть" : "Старт"}</button>    
      		</div>
					{this.state.isGameOpen ? <div><button id="test" onClick={this.testFunction}>1 шаг до победы</button></div> : ""	}
    		</div>

			</div>
		)
	}
	
}

App.propTypes = {
 sequenceOfNumbers: PropTypes.array.isRequired,
 isGameOpen: PropTypes.bool,
 isGameFinished: PropTypes.bool
}

export default App;

