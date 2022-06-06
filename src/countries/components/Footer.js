import React from 'react'

const Footer = ({ total }) => {
	return <>
		<div className='topScroll m-5 d-flex justify-content-end'>
			<a href="#top"><i className='fa-solid fa-arrow-alt-circle-up'></i></a>
		</div>
		
		<footer className='text-white text-center p-lg-5 p-md-3 p-1'>
			<div className='container-fluid'>
				<p className='fw-light'>Copyright &copy;2022 Koscida</p>
			</div>
		</footer>
	</>
}

export default Footer;
