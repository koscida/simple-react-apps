import React from 'react'

const Header = ({ total }) => {
	return <header className='text-white text-center p-lg-5 p-md-3 p-1'>
		<div className='container-fluid'>
			<h1 className='fw-bold m-3'>World Countries Data</h1>
			<p className='subtitle'>
				There are {total} countries loaded using the <a href='https://restcountries.com/' target="_blank" >Countries API</a>
			</p>
		</div>
	</header>
}

export default Header;
