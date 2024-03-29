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

import 'bootstrap/dist/css/bootstrap.min.css';

import { navLinks } from './navLinks'

import Home from './Home'
import Dots from '../dots/Dots'
import Sketch from '../sketch/Sketch'
import TicTacToe from '../tictactoe/index'
import Books from '../books/index'
import CatParadise from '../cat-paradise/CatParadise'
import HexadecimalColors from '../hexadecimal-colors/App'
import Countries from '../countries/Countries'
import FakeTwitter from '../twitter-clone/App'
import Keeper from '../keeper/App'



function App() {
	return (
		<Router>
			<Navbar expand="lg" variant="dark" >
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
			
			<div className='app'>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/keeper" element={<Keeper />} />
					<Route path="/twitter-clone" element={<FakeTwitter />} />
					<Route path="/countries" element={<Countries />} />
					<Route path="/hexadecimal-colors" element={<HexadecimalColors />} />
					<Route path="/cat-paradise" element={<CatParadise />} />
					<Route path="/books" element={<Books />} />
					<Route path="/sketch" element={<Sketch />} />
					<Route path="/dots" element={<Dots />} />
					<Route path="/tictactoe" element={<TicTacToe />} />
				</Routes>
			</div>
			
		</Router>
	);
}

export default App;
