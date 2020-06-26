import React from 'react'

export const AuthContext = React.createContext()

class AuthContextProvider extends React.Component {
	state = {
		isAuth: true,
	}
	
	toggleAuth = () => {
		this.setState({ isAuth : !this.state.isAuth })
	}
	
	render() {
		return(
			<AuthContext.Provider value={{
				...this.state,
				toggleAuth : this.toggleAuth
			}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}

export default AuthContextProvider