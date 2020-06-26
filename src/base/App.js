import React from 'react';
import { Home, All, Error } from './'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dots from '../dots/Dots'
import Sketch from '../sketch/Sketch'
import Material from '../materialui/Material'
import TicTacToe from '../tictactoe/index'
import Books from '../books/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/all" component={All} />
				<Route path="/dots" component={Dots} />
				<Route path="/sketch" component={Sketch} />
				<Route path="/material" component={Material} />
				<Route path="/tictactoe" component={TicTacToe} />
				<Route path="/books" component={Books} />
				<Route component={Error} />
			</Switch>
		</Router>
	);
}

export default App;
