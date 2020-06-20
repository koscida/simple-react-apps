import React from 'react'
import Top from './Top'
import Content from './Content'
import Bottom from './Bottom'
import { Provider } from './Context'
import { muscles, exercises } from './data.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { indigo, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: {
			main: amber.A400,
			light: amber[200],
			dark: amber[700]
		},
		type: 'dark'
	},
	spacing: 10
})	

class Material extends React.Component {
	
	state = {
		exercises,
		selectedCategory: null,
		selectedExercise : {},
		editMode: false
	}
	
	getExerciseByMuscles() {
		const initialExercises = muscles.reduce( (acc, m) => ({...acc, [m] : []}), {})
		return Object.entries(
			this.state.exercises.reduce( (acc, ex)=>{
				const { muscleGroup } = ex
				acc[muscleGroup] = [...acc[muscleGroup], ex]
				return acc;	
			}, initialExercises)
		);
	}
	
	handleCategorySelect = selectedCategory => {
		this.setState({
			selectedCategory
		})
	}
	
	handleExerciseSelect = clickedShortName => {
		this.setState( ({ exercises }) => ({
			selectedExercise: exercises.find( ex => ex.shortName === clickedShortName ),
			editMode: false
		}))
	}
	
	handleExerciseCreate = exercise => {
		this.setState( ({ exercises }) => ({
			exercises: [...exercises, exercise]
		}))
	}
	
	handleExerciseDelete = shortName => {
		this.setState( ({ exercises, editMode, selectedExercise }) => ({
			exercises: exercises.filter( ex => ex.shortName !== shortName ),
			editMode: selectedExercise.shortName === shortName ? false : editMode,
			selectedExercise: selectedExercise.shortName === shortName ? {} : selectedExercise
		}))
	}
	
	handleExerciseShowEdit = shortName => {
		this.setState(({ exercises }) => ({
			selectedExercise: exercises.find( ex => ex.shortName === shortName ),
			editMode: true
		}))
	}
	
	handleExerciseEdit = updatedExercise => {
		this.setState( ({ exercises }) => ({
			exercises : [
				...exercises.filter( ex => ex.shortName !== updatedExercise.shortName),
				updatedExercise
			],
			selectedExercise: updatedExercise,
			editMode: false
		}))
	}
	
	handleExerciseCancelEdit = () => {
		this.setState(({ exercises }) => ({
			editMode: false
		}))
	}
	
	getContext = () => ({
		muscles,
		...this.state,
		onCreate: this.handleExerciseCreate,
		onCategorySelect: this.handleCategorySelect
	})
	
	render() {
		const exercisesByMuscles = this.getExerciseByMuscles(),
			{ selectedCategory, selectedExercise, editMode } = this.state
			
			
		return(
			<ThemeProvider theme={theme}>
				<Provider value={this.getContext()}>
					<CssBaseline />
					
					<Top/>
					
					<Content
						muscles={muscles}
						exercisesByMuscles={exercisesByMuscles}
						selectedCategory={selectedCategory}
						selectedExercise={selectedExercise}
						editMode={editMode}
						onSelect={this.handleExerciseSelect}
						onDelete={this.handleExerciseDelete}
						onShowEdit={this.handleExerciseShowEdit}
						onEdit={this.handleExerciseEdit}
						onCancel={this.handleExerciseCancelEdit}
					/>
					
					<Bottom />
					
				</Provider>
			</ThemeProvider>
		)
	}
}

export default Material;