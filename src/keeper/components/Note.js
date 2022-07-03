import React, {useState} from 'react'

function Note({cardData, deleteNote, saveNote}) {
	const [isEditing, setIsEditing] = useState(false)
	const [newCardData, setNewCardData] = useState(cardData)
	
	const handleDeleteNote = () => {
		deleteNote(cardData.key)
	}	
	const handleEditNote = () => {
		setIsEditing(true)
	}
	
	const handleChange = (e) => {
		const {name, value} = e.target
		setNewCardData({
			...newCardData,
			[name]: value
		})
	}
	const handleCancelNote = () => {
		setNewCardData(cardData)
		setIsEditing(false)
	}
	const handleSaveNote = () => { 
		saveNote(newCardData)
		setIsEditing(false)
	}
	
	const Editing = () => <>
		<div className='card-title'>
			<input type="text" name="title" value={newCardData.title} onChange={handleChange} />
		</div>
		<div className="card-text">
			<textarea name="content" placeholder="Take a note..." rows="3" value={newCardData.content} onChange={handleChange} />
		</div>
		<div>
			<button onClick={handleCancelNote}>CANCEL</button>
			<button onClick={handleSaveNote}>SAVE</button>
		</div>
	</>
	const Viewing = () => <>
		<h5 className="card-title">{cardData.title}</h5>
		<p className="card-text">{cardData.content}</p>
		<div>
			<button onClick={handleEditNote}>EDIT</button>
			<button onClick={handleDeleteNote}>DELETE</button>
		</div>
	</>
	
	return <div className="col">
		<div className="card note">
			<div className="card-body">
				{isEditing ? <Editing /> : <Viewing />}
			</div>
		</div>
	</div>
}

export default Note