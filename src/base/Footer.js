import React from 'react'
import styled from "styled-components";

const FooterContainer = styled.div`
	text-align: center;
	${'' /* position: absolute; */}
	width: 100%;
	background: #ddd;
	bottom: 0;
	color: white;
`;

function Footer() {
	return (
		<FooterContainer>
			<p>&copy; Brittany Ann Kos</p>
		</FooterContainer>	
	)
}

export default Footer
