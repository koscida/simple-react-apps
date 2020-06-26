import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function ToggleTheme() {
	return (
		<ThemeContext.Consumer>{ ({ isLightTheme, toggleTheme }) => {
			return (
				<ButtonGroup toggle className="float-right">
					<ToggleButton
						type="checkbox"
						variant="secondary"
						checked={isLightTheme}
						value="1"
						onChange={toggleTheme}
						size="sm"
						className="m-sm-3"
					>
						Toggle Theme
					</ToggleButton>
				</ButtonGroup>
			)
		}}</ThemeContext.Consumer>
	)
}

export default ToggleTheme
