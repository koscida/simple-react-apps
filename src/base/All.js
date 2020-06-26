import React from 'react';
import { navLinks } from './navLinks'

export default function Home() {
	return (
		<>
			<h1>All projects (event the incomplete ones)</h1>
			{navLinks.map( (nav,i) => <div key={i}><a href={nav.link}>{nav.name}</a></div>)}
		</>
	);
}