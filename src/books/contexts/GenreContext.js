import React, { createContext, useState, useEffect } from 'react'

export const GenreContext = createContext()

export const GenreContextProvider = (props) => {
	const [genres, setGenres] = useState(
		localStorage.getItem("genres")
			? JSON.parse(localStorage.getItem('genres'))
			: [
				"Action and Adventure",
				"Biographies and Autobiographies",
				'Classics',
				"Fantasy",
				"Historical Fiction",
				"Horror",
				"Memoir",
				"Mystery",
				"Poetry",
				"Romance",
				"Sci-Fi",
				"Short Stories",
				"Suspense and Thrillers",
				"True Crime",
			]
	)
	
	useEffect( () => {
		localStorage.setItem('genres', JSON.stringify(genres))
	}, [genres])
	
	const addGenre = (genre) => {
		setGenres([
			...genres, genre
		].sort( (a,b) => {
			if (a.toLowerCase() > b.toLowerCase()) return 1;
			if (a.toLowerCase() < b.toLowerCase()) return -1;
			return 0;
		} ))
	}
	
	const deleteGenre = (genre) => {
		setGenres(genres.filter(g => g !== genre ))
	} 
	
	return (
		<GenreContext.Provider value={{ 
			genres, addGenre, deleteGenre
		}}>
			{ props.children }
		</GenreContext.Provider>
	)
}