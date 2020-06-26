import React from 'react'
import ToggleTheme from './ToggleTheme'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => (
	<Navbar>
	
		<Navbar.Brand href="#">Book List</Navbar.Brand>
		
		<ToggleTheme />
		
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		
		<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
			<Nav>
				<Nav.Link href="/home">Home</Nav.Link>
				<NavDropdown title="Projects" id="basic-nav-dropdown">
					<NavDropdown.Item href="/dots">Dots</NavDropdown.Item>
					<NavDropdown.Item href="/material">Material UI</NavDropdown.Item>
					<NavDropdown.Item href="/sketch">Sketch</NavDropdown.Item>
					<NavDropdown.Item href="/tictactoe">Tic Tac Toe</NavDropdown.Item>
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
		
	</Navbar>
)

export default NavBar