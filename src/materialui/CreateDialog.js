import React from 'react'
import Form from './Form'
import { withContext } from './Context'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

class CreateDialog extends React.Component {
	state = {
		open: false
	}
	
	handleDialogToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}
	
	handleFormSubmit = exercise => {
		this.handleDialogToggle()
		this.props.onCreate(exercise)
	}
	
	handleFormCancel = () => {
		this.handleDialogToggle()
	}
	
	render() {
		const { open } = this.state,
			{ muscles } = this.props
		
		return (
			<>
				<Button 
					variant="contained" 
					color="secondary" 
					startIcon={<AddIcon />} 
					onClick={this.handleDialogToggle}
				>
					Add
				</Button>
				
				<Dialog 
					open={open} 
					onClose={this.handleToggle} 
					aria-labelledby="form-dialog-title"
					fullWidth
					maxWidth='xs'
				>
					<DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please fill out the form below
						</DialogContentText>
						<Form 
							muscles={muscles}
							onSubmit={this.handleFormSubmit}
							onCancel={this.handleFormCancel}
						/>
					</DialogContent>
				</Dialog>
			</>
		)
	}
}

export default withContext(CreateDialog);
	