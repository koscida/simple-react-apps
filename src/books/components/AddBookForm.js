import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import { GenreContext } from '../contexts/GenreContext'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const AddBookForm = () => {
	const initState = () => {
		return ({
			title: '',
			author: '',
			genre: ''
		})
	}
	
	const [ newBook, setNewBook ] = useState(initState())
	const { addBook } = useContext(BookContext)
	const { genres } = useContext(GenreContext)
	
	const handleChange = (name) => (e) => {
		setNewBook({
			...newBook,
			[name] : e.target.value
		})
	}
	
	const handleAdd = (e) => {
		e.preventDefault()
		addBook(newBook)
		setNewBook(initState())
	}
	
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey="0">
				Add Book
			</Accordion.Toggle>
			<Accordion.Collapse eventKey="0">
				<Card.Body>
					
					<Form onSubmit={handleAdd}>
					
						<Form.Group controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control 
								required
								type="text" 
								placeholder="Enter title..." 
								onChange={handleChange("title")} 
								value={newBook.title}
							/>
						</Form.Group>

						<Form.Group controlId="formAuthor">
							<Form.Label>Author</Form.Label>
							<Form.Control 
								required 
								type="text" 
								placeholder="Enter author..." 
								onChange={handleChange("author")} 
								value={newBook.author}
							/>
						</Form.Group>
						
						<Form.Group controlId="formGenre">
							<Form.Label>Genre</Form.Label>
							<Form.Control 
								required
								as="select"
								onChange={handleChange("genre")} 
							>
								{genres.map( (genre, index) => <option key={index} value={genre}>{genre}</option> )}
							</Form.Control>
						</Form.Group>
						
						<Button variant="primary" type="submit" onClick={handleAdd}>
							Add Book
						</Button>
						
					</Form>
					
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	)
}

export default AddBookForm