import React, {PureComponent} from 'react'
import { withContext } from './Context'
import { AppBar, Tab, Tabs, withWidth } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
	appBar: {
		top: 'auto', 
		bottom: 0
	},
})

class Bottom extends PureComponent {
	
	onIndexSelect = (e, index) => {
		const { onCategorySelect, muscles } = this.props
		onCategorySelect(index === 0 ? '' : muscles[index-1])
	}
	
	getIndex = () => {
		const { selectedCategory, muscles } = this.props
		return selectedCategory ? muscles.findIndex(muscle => muscle === selectedCategory) + 1 : 0
	}
	
	render() {
		const { classes, width, muscles } = this.props
		
		return (
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Tabs
					value={this.getIndex()}
					onChange={this.onIndexSelect}
					indicatorColor="secondary"
					textColor="secondary"
					centered={ (width !== 'xs' && width !== 'sm') }
					variant={(width === 'xs' || width === 'sm') ? "scrollable" : "standard"}
					scrollButtons="auto"
				>
					<Tab label="All" />
					{muscles.map( (muscle) =>
						<Tab label={muscle} key={muscle} />
					)}
				</Tabs>
			</AppBar>
		)
	}
}

export default withContext(
	withStyles(useStyles)(
		withWidth()(
			Bottom
		)
	)
)