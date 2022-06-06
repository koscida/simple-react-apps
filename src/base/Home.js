import React from 'react';
import { navLinks } from './navLinks'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { ArrowUpRight } from 'react-bootstrap-icons';

function Home() {
	return (
		<>
			<Container fluid="md">
				<Row className='py-4'>
					<h1 className='my-1'>Home</h1>
					<p>Simple React.js app examples</p>
				</Row>
				<Row>
					{navLinks.filter( nav => (nav.display && (nav.isHome === undefined || !nav.isHome)) ).map( (nav, i) => 
						<div className='col-lg-3 col-md-4 col-sm-6 mb-4' key={i}>
							<Card key={i}>
								<Card.Body>
									<Card.Title>{nav.name}</Card.Title>
									<Card.Text>{nav.description}</Card.Text>
									<Card.Link href={nav.link}>Link <ArrowUpRight /></Card.Link>
								</Card.Body>
							</Card>
						</div>
					)}
				</Row>
			</Container>
		</>
	)
}

export default Home