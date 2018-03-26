import React from 'react';
import Header from './components/Header'
import Cell from './components/Cell'
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sequenceOfNumbers: this.props.sequenceOfNumbers};
    this.shuffle = this.shuffle.bind(this);
    this.mixNumbers = this.mixNumbers.bind(this);
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




