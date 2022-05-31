import React, { useContext } from 'react'
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
				<Row>
					<Col md="4">
						<BookStats />
						<Accordion>
							<AddBookForm />
							<EditGenresForm />
						</Accordion>
					</Col>
					<Col md="8">
						<BookList />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Books