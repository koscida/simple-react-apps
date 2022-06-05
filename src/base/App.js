import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
			<Navbar expand="lg" fixed="top" variant="dark" >
				<Container>
					<Navbar.Brand href="/">Simple React Apps</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav>
							<NavDropdown title="React Apps" id="basic-nav-dropdown">
								{navLinks.filter( nav => nav.display ).map( (nav, i) => 
									<NavDropdown.Item href={nav.link} key={i}>{nav.name}</NavDropdown.Item>
								)}
							</NavDropdown>
							<Nav.Link href="https://koscida-simple-node-apps.herokuapp.com/">Simple-Node-Apps</Nav.Link>
							<Nav.Link href="http://brittanyannkos.com/" target="_blank">BrittanyAnnKos.com</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
			<Container fluid className='app'>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/dots" element={<Dots />} />
					<Route path="/sketch" element={<Sketch />} />
					<Route path="/tictactoe" element={<TicTacToe />} />
					<Route path="/books" element={<Books />} />
				</Routes>
			</Container>
			
		</Router>
	);
}

export default App;
