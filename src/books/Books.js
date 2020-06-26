import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import BookStats from './components/BookStats'
import AddBookForm from './components/AddBookForm'
import EditGenresForm from './components/EditGenresForm'
import { ThemeContext } from './contexts/ThemeContext'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'

const Books = () => {
	const { isLightTheme } = useContext(ThemeContext)
	return (
		<div id="books" className={ (isLightTheme ? 'light' : 'dark') + " p-sm-3" }>
			<Container>
				<Row className="mb-sm-3">
					<Col>
						<NavBar />
					</Col>
				</Row>
				<Row>
					<Col sm="4">
						<BookStats />
						<Accordion defaultActiveKey="-1">
							<AddBookForm />
							<EditGenresForm />
						</Accordion>
					</Col>
					{/* <Col sm={{ span: 8, offset: 2 }}> */}
					<Col sm="8" className="pl-sm-0">
						<BookList />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Books