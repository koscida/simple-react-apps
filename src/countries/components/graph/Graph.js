import React from 'react'

const Graph = ({data}) => {
	if(data && data.length > 0) {
		const max = data[0][1]
		return <div className="graph">
			{data.map( ([key, value]) => {
				const width = (value / max * 100 ) + "%"
				return (<div className='graphRow row align-items-center' key={key}>
					<div className='barLabel col-2'>{key}</div>
					<div className='barWrapper col-8'><div className='bar' style={{width: width}}></div></div>
					<div className='barValue col-2'>{value.toLocaleString("en-US")}</div>
				</div>)
			})}
		</div>
	} else return <></>
}

export default Graph;