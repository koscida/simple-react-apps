import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { navLinks } from './navLinks'

import Home from './Home'
import Dots from '../dots/Dots'
import Sketch from '../sketch/Sketch'
import TicTacToe from '../tictactoe/index'
import Books from '../books/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
	return (
		<Router>
			<Navbar bg="light" expand="lg" fixed="top">
				<Container fluid>
					<Navbar.Brand href="/">things</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav>
							<NavDropdown title="Links" id="basic-nav-dropdown">
								{navLinks.filter( nav => nav.display ).map( (nav, i) => 
									<NavDropdown.Item href={nav.link} key={i}>{nav.name}</NavDropdown.Item>
								)}
							</NavDropdown>
							<Nav.Link href="http://brittanyannkos.com/">BrittanyAnnKos.com</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
			<Container fluid className='app'>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/dots" element={<Dots />} />
					<Route path="/sketch" element={<Sketch />} />
					{/* <Route path="/material" element={<Material />} />*/}
					<Route path="/tictactoe" element={<TicTacToe />} />
					<Route path="/books" element={<Books />} />
					{/* <Route path="*" render={() => <Redirect to="/" />} />
					<Route component={Error} /> */}
				</Routes>
			</Container>
			
		</Router>
	);
}

export default App;
