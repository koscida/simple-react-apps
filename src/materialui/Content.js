import React, { Fragment } from 'react'
import Form from './Form'

import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
	gridContainer : {
		margin: theme.spacing(1), 
		display: 'grid',
		gridGap: theme.spacing(1),
		[theme.breakpoints.up('xs')]: {
			gridTemplateColumns: '49% 50%',
			gridTemplateRows: '100%',
			height: 'calc(100% - 64px - 48px - 20px)'
		},
		[theme.breakpoints.down('xs')]: {
			gridTemplateColumns: '100%',
			gridTemplateRows: '50% 50%',
			height: 'calc(100% - 56px - 48px)'
		}
	},
	gridItem : {
		
		height: '100%'
		// [theme.breakpoints.up('xs')]: {
		// 	height: 'calc(100%)'
		// },
		// [theme.breakpoints.down('xs')]: {
		// 	height: 'calc(50%)'
		// }
	},
	paper : {
		overflowY: "scroll",
		padding: theme.spacing(2),
		height: '100%'
		// [theme.breakpoints.up('sm')]: {
		// 	height: 'calc(100% - 20px)',
		// 	marginTop: 10,
		// 	marginBottom: 10,
		// }
	},
	'@global' : {
		'html, body, #root': {
			height: '100%'
		}
	}
}))

const Content = ( {
	muscles,
	exercisesByMuscles,
	selectedCategory,
	selectedExercise,
	selectedExercise: { 
		shortName,
		title = "Welcome!",
		description = "Please select an exercise from the list on the left to show details..."
	},
	editMode,
	onSelect,
	onDelete,
	onShowEdit,
	onEdit,
	onCancel
}) => {
	
	const classes = useStyles()	
	
	return(
		<>
			<div className={classes.gridContainer}>
				
				<div className={classes.gridItem}>
					<Paper className={classes.paper}>
						{exercisesByMuscles.map( ([mGroup, mExercises]) => {
							if (!selectedCategory || selectedCategory === mGroup) {
								return (
									<Fragment key={mGroup}>
										<Typography 
											variant="h5" 
											color='secondary'
											style={{textTransform: 'capitalize'}}
										>
											{mGroup}
										</Typography>
										<List component="ul">
											{mExercises.map( ({ shortName, title }) => 
												<ListItem button 
													key={shortName}
													onClick={() => onSelect(shortName)}
												>
													<ListItemText 
														primary={title} 
													/>
													<ListItemSecondaryAction>
														<IconButton	
															color="secondary"
															onClick={()=> onShowEdit(shortName)}
														>
															<EditIcon/>
														</IconButton>
														<IconButton	
															color="secondary"
															onClick={()=> onDelete(shortName)}
														>
															<DeleteIcon/>
														</IconButton>
													</ListItemSecondaryAction>
												</ListItem>
											)}
										</List>
									</Fragment>
								)
							} else return null
						})}
					</Paper>
				</div>
				
				<div className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Typography 
							variant="h4" 
							color='secondary'
							gutterBottom
						>
							{title}
						</Typography>
						{editMode
							? <>
								<Form 
									key={shortName}
									muscles={muscles}
									selectedExercise={selectedExercise}
									onSubmit={onEdit}
									onCancel={onCancel}
								/>
							</>
							: <>
								<Typography variant="body1">
									{description}
								</Typography>
							</>
						}
					</Paper>
				</div>
				
			</div>
		</>
	)
}

export default Content;