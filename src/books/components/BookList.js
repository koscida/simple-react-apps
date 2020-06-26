import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'
import CardColumns from 'react-bootstrap/CardColumns'

const BookList = () => {
	const { books } = useContext(BookContext)
	
	return (
		<div id="bookList">
			{books.length > 0
				? <CardColumns>
						{ books.map( book => <BookDetails book={book} key={book.id} /> )}
					</CardColumns>
				: <p>No books to read :(</p>
			}
		</div>
	)
}

export default BookList