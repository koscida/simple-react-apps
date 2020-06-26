import React from 'react';
import './index.css';

function Square(props) {
	let className = "square";
	if(props.winner)
		className += " winner";
	return (
		<button 
			className={className}  
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}
  
class Board extends React.Component {
	renderSquare(index) {
		return (
			<Square 
				key={index}
				value={this.props.squares[index]}
				onClick={() => this.props.onClick(index)}
				winner={this.props.winner.winningMoves.includes(index)}
			/>
		)
	}
	
	renderRow(rowIndex) {
		const squares = [];
		const squaresOffset = rowIndex * this.props.boardSize;
		for (let i = 0;i<this.props.boardSize;i++) {
			squares.push(
				this.renderSquare(squaresOffset + i)
			);
		}
		return (
			<div key={rowIndex} className="board-row">
				{squares}
			</div>
		)
	}
	
	render() {
		const rows = [];
		for(let i=0;i<this.props.boardSize;i++) {
			rows.push(this.renderRow(i));
		}
		return (
			<div>
				{rows}
			</div>
		);
	}
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
				moveNumber: 0,
				squares: Array(9).fill(null),
				player: null,
				movedTo: Array(2).fill(null), 
			}],
			winner: {
				winningPlayer: null,
				winningMoves: [],
			},
			stepNumber: 0,
			isXNext: true,
			boardSize: 3,
			listSortToggle: true,
		}
	}
	
	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		
		if (this.state.winner.winningPlayer || squares[i]) {
			return;
		}
		
		squares[i] = this.state.isXNext ? "X" : "O";
		const newHistory = history.concat([{
			moveNumber: history.length,
			squares: squares,
			player: squares[i],
			movedTo: [(Math.floor(i/this.state.boardSize)+1),((i%this.state.boardSize)+1)], 
		}]);
		
		this.setState({
			history: newHistory,
			stepNumber: history.length,
			isXNext: !this.state.isXNext
		}, this.checkWinner(newHistory) );
		
	}
	
	jumpTo(step) {
		this.setState({
			stepNumber: step,
			isXNext: (step % 2) === 0, //TODO base on state
		});
	}
	
	sortMoves() {
		this.setState({
			listSortToggle: !this.state.listSortToggle,
		});
	}
	
	checkWinner(newHistory) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		const current = newHistory[newHistory.length - 1];
		const squares = current.squares.slice();
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				this.setState({
					winner: {
						winningPlayer: squares[a],
						winningMoves: lines[i],
					},
				});
				return;
			}
		}
		return;
	}
	
	render() {
		let history = this.state.history;
		const winner = this.state.winner;
		const current = history[this.state.stepNumber];
		
		if(!this.state.listSortToggle) {
			history = history.slice().reverse();
		}
		
		const moves = history.map((move) => {
			const desc = move.moveNumber > 0 ?
				`Go to move #${move.moveNumber}: ${move.player} moved to (${move.movedTo[0]}, ${move.movedTo[1]})` : 
				"Go to start";
			let styles = {
				background: "#aaa",
				border: "1px solid black"
			};
			if(move.moveNumber === this.state.stepNumber) {
				styles.background = "#afa";
			}
			return (
				<li key={move.moveNumber}>
					<button 
						onClick={() => this.jumpTo(move.moveNumber)} 
						style={styles}
					>
						{desc}
					</button>
				</li>
			);
		});
		
		let status;
		if (winner.winningPlayer) {
			status = "Winner: " + winner.winningPlayer;
		} else {
			status = "Next player: " + (this.state.isXNext ? "X" : "O");
		}
		
		return (
			<div className="game">
				<div className="game-board">
					<Board 
						squares={current.squares} 
						boardSize={this.state.boardSize} 
						onClick={i => this.handleClick(i)} 
						winner={winner}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<div><button onClick={() => this.sortMoves()}>Moves Sort</button></div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

export default Game;


