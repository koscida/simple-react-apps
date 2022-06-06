import React, { useState } from 'react'

import CountryCard from './CountryCard'
import PopulationGraph from './PopulationGraph'
import LanguageGraph from './LanguageGraph'

const sortFunc = (a,b) => (a.name.common).localeCompare(b.name.common)

const CountryList = ({ 
	data, 
	handleKeyClick,
	searchTerm,
	setSearchTerm
}) => {
	// setting initial state and method to update state
	const [searchResults, setSearchResults] = useState(data)
	const [stat, setStat] = useState('population')
	
	const searchFilter = (country) => {
		const n1 = country.name.common.toLowerCase().includes(searchTerm)
		const n2 = country.name.official.toLowerCase().includes(searchTerm)
		const c = country.capital !== undefined && country.capital.length > 1 && country.capital.map(x => x.toLowerCase()).includes(searchTerm)
		const l = country.languages !== undefined && country.languages.length > 1 && Object.values(country.languages).map(x => x.toLowerCase()).includes(searchTerm)
		return n1 || n2 || c || l
	}
	
	const handleSearchChange = (e) => {
		// set value
		setSearchTerm(e.target.value)
		
		// set fetch data again
		searchTerm && setSearchResults(data.filter(searchFilter))
	}  
	
	return (<>
		<section className='controls text-center p-lg-5 p-md-3 p-1'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-9'>
						<input 
							type="text" 
							onChange={handleSearchChange} 
							name="searchTerm" 
							id="searchTerm" 
							className='form-conrtol flex-fill w-100' 
							placeholder='Search countries by name, city, and languages' />
						{searchTerm && (<p className='feedback my-3'>
							{searchResults.length} satisfied the search criteria
							</p>)}
					</div>
					<div className='col-md-3'>
						<a href="#stat" className='graphIcon flex-fill'>
							<i className='fa-solid fa-chart-bar m-2'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
		
		<section className='countries-wrapper py-lg-5 py-md-3 py-1'>
			<div className='container-fluid'>
				<div className='row'>
				{searchResults.sort(sortFunc).map((c) => 
					<CountryCard 
						country={c} 
						handleClick={handleKeyClick}
						key={c.cca3} />
					)}
				</div>
			</div>
		</section>
		
		
		<section className='graph-wrapper p-lg-5 p-md-3 p-1'>
			<a name="stat"></a>
			<div className='container-fluid'>
				<div className='row'>
					<div className='text-center m-2'>
						<button className='btn btn-danger btn-lg m-3' onClick={() => setStat('population')}>Population</button>
						<button className='btn btn-danger btn-lg m-3' onClick={() => setStat('languages')}>Languages</button>
					</div>
				</div>
				<div className='row'>
					{data &&
						stat === 'population' 
							? <PopulationGraph data={searchResults} /> 
							: <LanguageGraph data={searchResults} />
					}
				</div>
			</div>
		</section>
	</>)
}

export default CountryList;
