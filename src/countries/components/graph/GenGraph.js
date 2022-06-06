import React from 'react'
import Graph from './Graph'

const GenGraph = ({data, statKey, header}) => {
	// sort the top countries by statKey
	const topCountries = data.sort( (a,b) => b[statKey] - a[statKey] ).slice(0, 10)
	
	// get total pop
	const totalCountries = data.reduce( (i, country) => i + country[statKey], 0)
	
	return <div className="populationGraph">
		<h3>{topCountries.length} {header}</h3>
		<p>Total {statKey}: {totalCountries.toLocaleString("en-US")} </p>
		
		<Graph
			data={topCountries.reduce( (c, { name: {common}, [statKey]:value }) => [...c,[common,value]], [] )}
			/>
	</div>
}

export default GenGraph;