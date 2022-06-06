import React from 'react'
import Graph from './Graph'

const LanguageGraph = ({data}) => {
	// reduce countries to top lanauges, sort
	const sortedLanguages = Object.entries(data.reduce( (languages, country) => {
		if(country.languages !== undefined) {
			Object.values(country.languages).forEach( lang => 
				languages[lang] === undefined 
					? languages[lang] = 1
					: languages[lang]++
			)
		}
		return languages
	}, {}))
	.sort( (a,b) => b[1] - a[1] )
	// get top 10
	const topLanguages = sortedLanguages.slice(0, 10)
	
	// get total languages
	const totalLang = sortedLanguages.length
	
	return <div className="populationGraph">
		
		<h3>{topLanguages.length} Most spoken languages</h3>
		<p>Total languages: {totalLang.toLocaleString("en-US")} </p>
		
		<Graph 
			data={topLanguages}
			/>
	</div>
}

export default LanguageGraph;