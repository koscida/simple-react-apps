import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import * as uuid from 'uuid'


const BookList = () => {
	const [songs, setSongs] = useState([
		{ id: 1, title: 'almost home', artist: 'moby' },
		{ id: 2, title: 'memory gospel', artist: 'moby' },
		{ id: 3, title: 'this wild darkness', artist: 'the beatles' },
	])
	
	const addSong = () => {
		setSongs([
			...songs, 
			{ id: uuid.v1(), title: "new song", artist: "new artist"}
		])
	}
	
	return (
		<div id="songList">
			<CardColumns>
				{songs.map( song => (
					<Card key={song.id}>
						<Card.Header>{song.title}</Card.Header>
						<Card.Body>{song.artist}</Card.Body>
					</Card>
				))}
			</CardColumns>
			<button onClick={addSong}>Add default song</button>
		</div>
	)
}

export default BookList