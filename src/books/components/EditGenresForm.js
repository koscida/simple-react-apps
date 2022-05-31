import React, { useState, useContext } from 'react'
import { GenreContext } from '../contexts/GenreContext'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EditGenresForm = () => {
	const { genres, addGenre, deleteGenre } = useContext(GenreContext)
	const [ newGenre, setNewGenre ] = useState('')
	
	const handleAdd = (e) => {
		e.preventDefault()
		addGenre(newGenre)
		setNewGenre('')
	}
	
	return (
			<Accordion.Item eventKey="1">
				<Accordion.Header>
					Edit Genres
				</Accordion.Header>
				<Accordion.Body>
						
						<Form onSubmit={handleAdd}>
							<Form.Group controlId="formGenre">
								<Form.Label>New Genre</Form.Label>
								<Form.Control
									required
									type="text" 
									placeholder="Enter genre name..." 
									onChange={(e) => setNewGenre(e.target.value)} 
									value={newGenre}
								/>
							</Form.Group>
							<Button variant="primary" type="submit" onClick={handleAdd}>
								Add Genre
							</Button>
						</Form>
						
						<div className="mt-sm-3 pt-sm-3 deleteGenres">
							<p>Delete Genres</p>
							{genres.map( (g,i) => (
								<Button 
									key={i}
									onClick={() => deleteGenre(g)} 
									size="sm" 
									variant="outline-danger"
									className="deleteButton mr-sm-2 mb-sm-2"
								>{g}</Button>
							))}
						</div>
						
				</Accordion.Body>
			</Accordion.Item>
	)
}

export default EditGenresForm