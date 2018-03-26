import React from 'react';
import {render} from 'react-dom';
import App from './App';

let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null] 

render(<App sequenceOfNumbers = {gameBoard} />, document.getElementById('root'));
