import React from 'react';
import CreateDialog from './CreateDialog'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
	appBar: {
		top: 0,
		bottom: 'auto',
	},
}));
  
const Top = () => {
	const classes = useStyles();
	
	return (
		<AppBar position="static" color="primary" className={classes.appBar}>
			<Toolbar>
			
				<Typography variant="h6" color="inherit" className={classes.title}>
					Exercise Database
				</Typography>
				
				<CreateDialog/>
				
			</Toolbar>
		</AppBar>
	);
}
export default Top;