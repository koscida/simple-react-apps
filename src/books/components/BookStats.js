import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookStats = () => {
	const { books } = useContext(BookContext)
	const booksCount = books.length
	
	return (
		<div id="bookStats" className='mb-2'>
				You have {booksCount} book{booksCount === 1 ? '' : 's'} on your reading list! <br/>
				{Object.entries(
					books.reduce( (acc, {genre}) => {
						acc[genre] ? acc[genre]+=1 : acc[genre] = 1
						return acc
					}, {})
				).map( ([genre, count], i) => 
					<span key={i} style={{display:'block'}}>{genre}: {count}</span>
				)}
		</div>
	)
}

export default BookStats