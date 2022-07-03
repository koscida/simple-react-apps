import React, {useState} from 'react'
import Note from './Note'
import CreateArea from './CreateArea'
import startingNotes from "../notes";

function Body() {
	const [notes, setNotes] = useState(startingNotes)
	
	const handleNewNote = (newNote) => {
		const key = notes.length + 1
		setNotes([...notes, {...newNote, key}])
	}
	const handleDeleteNote = (key) => {
		const newList = notes.filter(note => note.key !== key)
		setNotes(newList)
	}
	const handleEditNote = (newNote) => {
		const newList = notes.filter(note => note.key !== newNote.key)
		setNotes([...newList, newNote])
	}
	
	return <section className="notes p-2">
		<div className="container-fluid">
			<CreateArea saveNewNote={handleNewNote} />
			<div className="card-group row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-lg-6 g-4">
				{notes.map( cardData => 
					<Note 
						key={cardData.key} 
						cardData={cardData}
						deleteNote={handleDeleteNote} 
						saveNote={handleEditNote} 
					/> 
				)}
			</div>
			
		</div>
	</section>
}

export default Body