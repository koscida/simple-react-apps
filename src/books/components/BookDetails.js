import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
	const { deleteBook } = useContext(BookContext)
	return (
		<Card key={book.id}>
			<Card.Header>{book.title}</Card.Header>
			<Card.Body>
				<p>{book.author}</p>
				<p>{book.genre}</p>
			</Card.Body>
			<Card.Footer style={{overflow: 'auto'}}>
				<Button 
					onClick={() => deleteBook(book.id)} 
					size="sm" 
					variant="outline-danger"
					className="float-right"
				>Delete</Button>
			</Card.Footer>
		</Card>
	)
}

export default BookDetails