import React, { createContext, useState, useEffect } from 'react'
import * as uuid from 'uuid'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
	const [books, setBooks] = useState( 
		localStorage.getItem("books")
			? JSON.parse(localStorage.getItem('books'))
			: []
	)
	
	useEffect( () => {
		localStorage.setItem('books', JSON.stringify(books))
	}, [books])
	
	const addBook = (book) => {
		setBooks([
			...books,
			{ id: uuid.v1(), ...book }
		])
	}
	
	const deleteBook = (id) => {
		setBooks(books.filter(book => book.id !== id ))
	} 
	
	return (
		<BookContext.Provider value={{ 
			books, addBook, deleteBook
		}}>
			{ props.children }
		</BookContext.Provider>
	)
}