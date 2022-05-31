import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
	const { books } = useContext(BookContext)
	
	return (
		<div id="bookList">
			{books.length > 0
				? <div>
						{ books.map( book => <BookDetails book={book} key={book.id} /> )}
					</div>
				: <p>No books to read :(</p>
			}
		</div>
	)
}

export default BookList