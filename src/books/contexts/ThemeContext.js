import React from 'react'

export const ThemeContext = React.createContext()

class ThemeContextProvider extends React.Component {
	state = {
		isLightTheme: false,
	}
	
	toggleTheme = () => {
		this.setState({ isLightTheme : !this.state.isLightTheme })
	}
	
	render() {
		return(
			<ThemeContext.Provider value={{
				...this.state,
				toggleTheme : this.toggleTheme
			}}>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}

export default ThemeContextProvider