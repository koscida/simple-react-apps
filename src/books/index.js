import React from 'react'
import ThemeContextProvider from './contexts/ThemeContext'
import { BookContextProvider } from './contexts/BookContext'
import { GenreContextProvider } from './contexts/GenreContext'
import Books from './Books'

import './books.scss'

export default function () {
	return (
		<ThemeContextProvider>
			<BookContextProvider>
				<GenreContextProvider>
					<Books />
				</GenreContextProvider>
			</BookContextProvider>
		</ThemeContextProvider>
	)
}