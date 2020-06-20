import React from 'react';
import { Header, Footer, Home, Error } from './'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dots from '../dots/Dots'
import Sketch from '../sketch/Sketch'
import Material from '../materialui/Material'
import TicTacToe from '../tictactoe/index'

function App() {
	return (
		<>
		{/* <Header /> */}
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/dots" component={Dots} />
				<Route path="/sketch" component={Sketch} />
				<Route path="/material" component={Material} />
				<Route path="/tictactoe" component={TicTacToe} />
				<Route component={Error} />
			</Switch>
		</Router>
		{/* <Footer /> */}
		</>
	);
}

export default App;
