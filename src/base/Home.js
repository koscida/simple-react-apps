import React from 'react';
import { navLinks } from './navLinks'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import { ArrowUpRight } from 'react-bootstrap-icons';

export default function Home() {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">Fun Projects</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="http://brittanyannkos.com/">Back to BrittanyAnnKos.com</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			
			<Container fluid="md">
				<Row>
					<Col>
						<CardColumns>
							{navLinks.filter( nav => nav.display ).map( (nav, i) => 
								<Card key={i}>
									<Card.Body>
										<Card.Title>{nav.name}</Card.Title>
										<Card.Text>Some text</Card.Text>
										<Card.Link href={nav.link}>Project <ArrowUpRight /></Card.Link>
									</Card.Body>
								</Card>
							)}
						</CardColumns>
					</Col>
				</Row>
			</Container>
		</>
	);
}