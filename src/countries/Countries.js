import React from 'react'
import './styles/App.css';

import useFetchData from './useFetchData'

import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

const Countries = (props) => {
	// setting initial state and method to update state
	const {
		data,
		loading,
	} = useFetchData();
		
	return (
		<div className='App'>
			<a name="home"></a>
			
			<Header
				total={data.length}
				/>
				
			{loading 
				? <div>Loading</div>
				: <Body 
					data={data}
					/>
			}
			
			<Footer />
			
		</div>
	)
}

export default Countries;
