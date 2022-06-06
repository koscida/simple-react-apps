import React, { useState } from 'react'

import CountryList from './CountryList'
import CountryDetail from './CountryDetail'

const Body = ({ 
	data, 
}) => {
	// setting initial state and method to update state
	const [selectedKey, setSelectedKey] = useState('')
	const [searchTerm, setSearchTerm] = useState('')
	
	const handleKeyClick = (e) => {
		// set value
		setSelectedKey(e.target.value)
	} 
	
	return (<>
		{selectedKey === '' 
			? <CountryList
				data={data}
				handleKeyClick={handleKeyClick}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				/>
			: <CountryDetail 
				country={data.find(c => c.cca3 === selectedKey)} 
				handleKeyClick={handleKeyClick}
				/>
		}
	</>)
}

export default Body;
