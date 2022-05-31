import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Pencil} from 'react-bootstrap-icons'

import './style.scss';

const backgroundColor = "#ffccff";
const drawColors = [
	["#ccccff", "#aaaadd"],
	["#ccffcc", "#aaddaa"],
	["#ffffcc", "#ddddaa"],
	["#ccffff", "#aadddd"],
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
		<div id="grid" className="mx-sm-auto" style={styles}>
			{gridSquares}
		</div>
	);
}

class Sketch extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			gridSize : 16,
			drawColor : drawColors[0][0],
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
	
	changeGridSize = (e) => {
		let value = e.target.value
		console.log(value)
		if(value !== this.state.gridSize) {
			this.setState({
				gridSize: value,
				gridData : new Array((25*25)).fill(backgroundColor)
			});
		}
	}
	
	changeDrawColor = (e) => {
		let value = e.target.value;
		console.log(value)
		this.setState({
			drawColor : value
		});
	}
	
	render() {
		const { gridSize, gridData, drawColor } = this.state
		return (   
			<div id="sketch" className="py-sm-3 text-center">
				<Container>
					<Row>
						<Col>
							<h1 className="text-center mb-sm-3">Sketch</h1>
						</Col>
					</Row>
					<Form>
						<Row className="justify-content-md-center">
							<Col>
								<Form.Group controlId="formSize" className="mb-3">
									<Form.Range id="myRange" value={gridSize} onChange={this.changeGridSize} min="10" max="25" />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="formColor" className="mb-3">
									<Form.Label className="mx-3"><Pencil /></Form.Label>
									<ButtonGroup aria-label="Edit color" size="sm">
										{drawColors.map( ([color, hoverColor], index) => 
											<Button
												key={index}
												checked={drawColor === color}
												value={color}
												// style={{
												// 	background: (drawColor===color?hoverColor:color),
												// 	color: (drawColor===color?'#fff':'#444')
												// }}
												style={{
													color: (drawColor===color?'#aaa':hoverColor),
													background: (drawColor===color?color:'#fafafa'),
													fontWeight: 'bold'
												}}
												onClick={this.changeDrawColor}
											>{color}</Button>
										)}
									</ButtonGroup>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group controlId="formClear" className="mb-3">
									<Button 
										variant="primary" 
										onClick={this.clearGrid}
										size="sm"
									>Clear grid</Button>
								</Form.Group>
							</Col>
						</Row>
					</Form>
					<Row>
						<Col>
							<Grid 
								gridSize={gridSize}
								gridData={gridData.slice(0,(gridSize*gridSize))}
								changeColor = { i => this.changeSquareColor(i) }
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Sketch
