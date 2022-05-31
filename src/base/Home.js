import React from 'react';
import { navLinks } from './navLinks'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { ArrowUpRight } from 'react-bootstrap-icons';

function Home() {
	return (
		<>
			<Container fluid="md">
				<h1>Home</h1>
				<p>Simple React examples</p>
				<Row>
					{navLinks.filter( nav => (nav.display && (nav.isHome === undefined || !nav.isHome)) ).map( (nav, i) => 
					<Col key={i}>
						<Card key={i}>
							<Card.Body>
								<Card.Title>{nav.name}</Card.Title>
								<Card.Text>Some text</Card.Text>
								<Card.Link href={nav.link}>Link <ArrowUpRight /></Card.Link>
							</Card.Body>
						</Card>
						</Col>
					)}
				</Row>
			</Container>
		</>
	)
}

export default Home