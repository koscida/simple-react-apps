// src/App.js
import React from 'react'

const CountryCard = ({ 
	country: { 
		name: { common, official }, 
		cca3, 
		capital, 
		flags : {png}, 
		languages, 
		population, 
		capitalInfo },
	handleClick,
}) => {
	return (
		<div className='col-md-6 col-lg-3 mb-4'>
			<div className='country card'>
				<div className='card-img-top country-image'>
					<img src={png} alt={common} />
				</div>
				<div className='card-body'>
					<h5 className="card-title">{common.toUpperCase()}</h5>
					<div className='card-text country_text'>
						<p>
							<span>Official Name: </span>
							{official}
						</p>
						<p>
							<span>Capital: </span>
							{Object.keys(capitalInfo).length === 0 ? 'None' : Object.values(capital).join(', ')}
						</p>
						<p>
							<span>{languages === undefined || !(languages.length > 1) ? `Language` : `Languages`}: </span>
							{languages === undefined ? 'None' : Object.values(languages).join(', ')}
						</p>
						<p>
							<span>Population: </span>
							{population.toLocaleString()}
						</p>
					</div>
					<button className="btn card-link btn-outline-success btn-sm" onClick={handleClick} name="countryKey" value={cca3}>View Country</button>
				</div>
			</div>
		</div>
	)
}

export default CountryCard