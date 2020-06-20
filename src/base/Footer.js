import React from 'react'
import styled from "styled-components";
import { Typography } from '@material-ui/core'

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
			<Typography variant="overline">&copy; Brittany Ann Kos</Typography>
		</FooterContainer>	
	)
}

export default Footer
