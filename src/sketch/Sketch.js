import React from 'react';
import './style.scss';
import { Button, Typography, Slider, Radio } from '@material-ui/core';

const backgroundColor = "#ffccff";
const drawColors = [
	"#ccccff",
	"#ccffcc",
	"#ffffcc",
	"#ccffff",
];

function Square(props) {
	return(
		<div 
			className="square"
			onMouseEnter={props.updateColor}
			style={{background : props.color}}
		></div>
	);
}

function Grid(props) {
	let styles = {
		gridTemplateColumns : `repeat(${props.gridSize}, [col] 1fr)`,
		gridTemplateRows : `repeat(${props.gridSize}, [row] 1fr)`
	}
	
	let gridSquares = props.gridData.map( (sq, index) => {
		return(
			<Square
				key={index}
				updateColor={ () => props.changeColor(index) }
				color={sq}
			/>
		);
	});
	
	return(
		<div id="grid" style={styles}>
			{gridSquares}
		</div>
	);
}

class Sketch extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			gridSize : 16,
			drawColor : drawColors[0],
			gridData : new Array(25*25).fill(backgroundColor)
		}
	}
	
	changeSquareColor(i) {
		let newGridData = this.state.gridData.slice();
		newGridData[i] = this.state.drawColor;
		
		//console.log(i);
		this.setState({
			gridData : newGridData
		});
	}
	
	clearGrid = () => {
		this.setState({
			gridData : new Array((this.state.gridSize * this.state.gridSize)).fill(backgroundColor)
		});
	}
	
	changeGridSize = (e, value) => {
		if(value !== this.state.gridSize) {
			this.setState({
				gridSize: value,
				gridData : new Array((25*25)).fill(backgroundColor)
			});
		}
	}
	
	changeDrawColor = (e) => {
		let value = e.target.value;
		this.setState({
			drawColor : value
		});
	}
	
	render() {
		let radios = [];
		drawColors.forEach( (color, index) => {
			radios.push(
				<Radio
					key={index}
					checked={this.state.drawColor === color}
					onChange={this.changeDrawColor}
					value={color}
					inputProps={{ 'aria-label': color }}
					style={{
						color: color
					}}
				/>
			);
		});
		
		return (   
			<div id="sketch">
				<div id="options">
					<div className="option">
						<Typography id="gridSlider" gutterBottom>
							Grid Size
						</Typography>
						<Slider
							defaultValue={16}
							aria-labelledby="gridSlider"
							step={1}
							marks
							min={10}
							max={25}
							valueLabelDisplay="on"
							onChange={this.changeGridSize}
						/>
					</div>
					<div className="option">
						<Typography id="gridSlider" gutterBottom>
							Draw Color
						</Typography>
						{radios}
					</div>
					<div className="option">
						<Button 
							variant="outlined" 
							color="secondary" 
							onClick={this.clearGrid}
						>
							Clear grid
						</Button>
					</div>
					<div>
						<h1>Project Etch-A-Sketch</h1>
						<p>"a browser version of something between a sketchpad and an Etch-A-Sketch"</p>
						<p>Project idea from: <a href="https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project?ref=lnav">theodinproject.com/courses/web-development-101</a></p>
					</div>
				</div>
				<Grid 
					gridSize={this.state.gridSize}
					gridData={this.state.gridData.slice(0,(this.state.gridSize*this.state.gridSize))}
					changeColor = { i => this.changeSquareColor(i) }
				/>
			</div>
		);
	}
}

export default Sketch;
