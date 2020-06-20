import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';


const styles = theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width: 300
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
})

export default class Form extends React.Component {
	
	constructor(props) {
		super(props)
		const { selectedExercise } = this.props
		
		this.state = selectedExercise ? { selectedExercise } : {selectedExercise:{}}
	}
	
	// componentDidUpdate(prevProps, prevState) {
	// 	if(prevProps.selectedExercise && this.props.selectedExercise &&
	// 		prevProps.selectedExercise.shortName !== this.props.selectedExercise.shortName){
	// 		//Perform some operation here
	// 		this.setState({ selectedExercise: {...this.props.selectedExercise} })
	// 	}
	// }	
	
	//static getDerivedStateFromProps(nextProps, prevState){
	// static getDerivedStateFromProps({ nextSelectedExercise }, prevState){
	// 	if(nextSelectedExercise && nextSelectedExercise.shortName !== prevState.selectedExercise.shortName)
	// 		return nextSelectedExercise
		
	// 	return null
	// }
	
	
	handleFormChange = name => e => {
		this.setState({
			selectedExercise : { ...this.state.selectedExercise, [name]: e.target.value }
		})
	}
	
	handleFormSubmit = () => {
		// TODO validate
		this.props.onSubmit({
			shortName: this.state.selectedExercise.title.toLowerCase().replace(/ /g, "-"), 
			...this.state.selectedExercise
		})
	}
	
	render() {
		
		const { classes, muscles, onCancel } = this.props,
			{ selectedExercise, selectedExercise : { title, description, muscleGroup } } = this.state
		
		return (
			<form>
				<TextField 
					label="Name"
					value={title}
					onChange={this.handleFormChange("title")}
					fullWidth
				/>
				<br/><br/>
				<FormControl fullWidth>
					<InputLabel id="musclesSelectLabel">Muscle Group</InputLabel>
					<Select
						labelId="musclesSelectLabel"
						id="musclesSelect"
						value={muscleGroup}
						onChange={this.handleFormChange("muscleGroup")}
					>
						{muscles.map( muscle => 
							<MenuItem value={muscle} key={muscle}>{muscle}</MenuItem>
						)}
					</Select>
				</FormControl>
				<br/><br/>
				<TextField 
					multiline
					rows={4}
					label="Description"
					value={description}
					onChange={this.handleFormChange("description")}
					fullWidth
				/>
				<DialogActions>
					<Button 
						color="primary" 
						variant="contained" 
						onClick={this.handleFormSubmit}
						disabled={!title || !muscleGroup}
					>
						{selectedExercise ? "Save" : "Create"}
					</Button>
					<Button color="secondary" variant="outlined" onClick={onCancel} >
						Cancel
					</Button>
				</DialogActions>
			</form>
		)
	}
}