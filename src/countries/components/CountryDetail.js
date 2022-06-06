// src/App.js
import React from 'react'

const CountryDetail = ({ 
	country: { 
		name: { common, official, nativeName }, 
		currencies, 
		capital, 
		region,
		subregion,
		languages, 
		flag,
		continents,
		flags : {png}, 
		coatOfArms,
		population, 
		capitalInfo 
	},
	handleKeyClick,
}) => {
	return (
		<section className='controls p-lg-5 p-md-3 p-1'>
			<div className='container'>
				
				<div className='row text-center'>
					
				</div>
				
				<div className='countryView'>
					<div className='d-flex align-items-center'>
						<div className='my-4 flex-fill'>
							<h3 className="card-title">{common.toUpperCase()}</h3>
						</div>
							<nav aria-label="breadcrumb ms-auto flex-fill">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<button 
											className="btn " 
											onClick={handleKeyClick} 
											name="countryKey" 
											value={''}>
												Back to Country List
										</button>
									</li>
								</ol>
							</nav>
					</div>
					<div className='row'>
						<div className='col-md-8'>
							
							<div className='card mb-4'>
								<div className='card-body'>
									<h5 className='card-title'>Name</h5>
									<p>English</p>
									<p><span>Common</span>{common}</p>
									<p><span>Official</span>{official}</p>
									<p>Native{nativeName && Object.keys(nativeName).length > 1 ? 's' : ''}</p>
									{Object.values(nativeName).map( ({official, common}) => <div key={common}><p><span>Common</span>{common}</p><p><span>Official</span>{official}</p></div>)}
									
								</div>
							</div>
							
							<div className='card mb-4'>
								<div className='card-body'>
									<h5 className='card-title'>Location</h5>
									<p><span>Continent</span>{continents.join(', ')}</p>
									<p><span>Region</span>{region}</p>
									<p><span>Subregion</span>{subregion}</p>
									<p>
										<span>Capital</span>
										{Object.keys(capitalInfo).length === 0 ? 'None' : Object.values(capital).join(', ')}
									</p>
									
								</div>
							</div>
							
							<div className='card mb-4'>
								<div className='card-body'>
									<h5 className='card-title'>Population</h5>
									<div className='card-text country_text'>
										{<p>
											<span>Population</span>
											{population.toLocaleString()}
										</p>}
										<p>
											<span>{languages === undefined || !(languages.length > 1) ? `Language` : `Languages`}</span>
											{languages === undefined ? 'None' : Object.values(languages).join(', ')}
										</p>
										<p>
											<span>{currencies === undefined || !(Object.keys(currencies).length > 1) ? `Currency` : `Currencies`}</span>
											{currencies === undefined ? 'None' : Object.keys(currencies).join(', ')}
										</p>
									</div>
								</div>
							</div>
							
						</div>
						<div className='col-md-4'>
							
							<div className='card mb-4'>
								<div className='card-body'>
									<h5 className='card-title'>Flag</h5>
								</div>
								<div className='card-img-top country-image'>
									<img src={png} alt={common} />
								</div>
								<div className='card-body'>
									<div className='card-text country_text'>
										<p>
											<span>Icon</span> {flag}
										</p>
									</div>
								</div>
							</div>
							
							{coatOfArms &&
								<div className='card mb-4'>
									<div className='card-body'>
										<h5 className='card-title'>Coat of Arms</h5>
									</div>
									<div className='card-img-top country-image'>
										<img src={coatOfArms.svg} alt={common} />
									</div>
								</div>
							}
							
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CountryDetail