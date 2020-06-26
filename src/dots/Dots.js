import React from 'react';
import './style.scss';

const images = [
	// "images/casey-horner-KtlTvi8leYQ-unsplash.jpg",
	// "images/john-fowler-d2YMQ-hZ3og-unsplash.jpg",
	// "images/mathew-schwartz-UFqKI4QWd2k-unsplash.jpg",
	// "images/sean-pierce-AmkpzghJ5eo-unsplash.jpg",
	// "images/annie-spratt-pDGNBK9A0sk-unsplash.jpg",
	// "images/dlanor-s-ATgfRqpFfFI-unsplash.jpg",
	// "images/sharon-pittaway-iMdsjoiftZo-unsplash.jpg",
	// "images/yash-garg-WSTF1QEUUWw-unsplash.jpg",
	// "images/pikrepo1.jpg",
	// "images/pikrepo2.jpg",
	"images/Official_portrait_of_Barack_Obama.jpg"
]

class Dots extends React.Component {
	
	constructor(props) {
		console.log("...constructor...");
		super(props);
		
		this.state = {
			dots: [{size: 500}]
		}
		
		// this.state = {
		// 	imgSize : 1000,
		// 	imgData : null,
		// 	imgUrl : images[Math.floor(Math.random() * images.length)],
		// 	boxes : []
		// }
		// this.canvasRef = React.createRef();
		// this.imageRef = React.createRef();
	}
	
	componentDidMount () {
		console.log("...in did mount...");
		// console.log("imgSize in mount: " + this.state.imgSize);
		
		
		// var initialBox = [{
		// 	size : this.state.imgSize,
		// 	mid : [(this.state.imgSize/2),(this.state.imgSize/2)]
		// }]
		// this.setState({boxes : initialBox});
		
		// this.canvasRef.current.width = this.state.imgSize;
		// this.canvasRef.current.height = this.state.imgSize;
		// const ctx = this.canvasRef.current.getContext && this.canvasRef.current.getContext('2d');
		// const revealImage = new Image(this.state.imgSize, this.state.imgSize);
		
		// revealImage.onload = () => {
		// 	console.log("...onload...")
		// 	ctx.drawImage(revealImage, 0, 0, this.state.imgSize, this.state.imgSize);
			
		// 	var imgData = ctx.getImageData(0, 0, this.state.imgSize, this.state.imgSize);
		// 	this.setState({imgData});
		// };
		// revealImage.src = images[Math.floor(Math.random() * images.length)];
		
		// const ctx = this.canvasRef.current.getContext && this.canvasRef.current.getContext('2d');
		// console.log(ctx);
		// let imgData = ctx.getImageData(0, 0, this.state.imgSize, this.state.imgSize);
		// this.setState({imgData});
		
		// console.log("imgData: ");
		// console.log(imgData);
		
		
	}
	
	componentDidUpdate(prevProps, prevState) {
		
		
		// let initialBox = document.createElement("div");
		// this.setUpBox(initialBox);

		// let bc = document.querySelector("#boxes");
		// bc.appendChild(initialBox);

		// bc.addEventListener("mouseover", e => {
		// 	const targetSize = parseInt(e.target.dataset.size);
		// 	if(targetSize > 10 && e.target.classList.contains("box")) {
		// 		var nextSize = targetSize / 2;
		// 		var nextOffset = ~~(nextSize / 2);
		// 		var mid = JSON.parse(e.target.dataset.mid);
				
		// 		for(var i=0; i<4;i++) {
		// 			let box = document.createElement("div");
		// 			let newMid = [
		// 				(i%2 ? (mid[0]+nextOffset) : (mid[0]-nextOffset)),
		// 				(~~(i/2) ? (mid[1]+nextOffset) : (mid[1]-nextOffset))
		// 			];
		// 			this.setUpBox(box, nextSize, newMid);
		// 			e.target.appendChild(box);
		// 		}
				
		// 		e.target.classList.remove("box");
		// 		e.target.classList.add("boxContainer");
		// 		e.target.style.background = "transparent";
		// 	}
		// }, true);
	}
	
	
	// setUpBox(box, size = this.state.imgSize, mid = [(this.state.imgSize/2),(this.state.imgSize/2)]) {
	// 	box.classList.add('box');
	// 	box.dataset.size = size;
	// 	box.dataset.mid = "[" + mid + "]";
	// 	box.style.width = size + "px";
	// 	box.style.height = size + "px";
	// 	let rgb = this.getAverageRGB(mid, size);
	// 	box.style.background = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
		
	// 	return box;
	// }
	
	/* Adapted from:
	https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
	http://jsfiddle.net/xLF38/818/
	*/
	
	
	// getImgData() {
	// 	console.log("...getImgData...");
	// 	console.log("imgSize: " + this.state.imgSize);
		
	// 	try {
	// 		//console.log("trying...");
	// 		//var imgData = context.getImageData(0, 0, this.imgSize, this.imgSize);
	// 		var c = document.querySelector("canvas");
	// 		console.log(c);
	// 		var imgData = c.getImageData(0, 0, this.state.imgSize, this.state.imgSize);
	// 		this.setState({imgData});
	// 	} catch(e) {
	// 		/* security error, img on diff domain */
	// 		console.log("try failed: " + e);
	// 		return;
	// 	}
	// }
	
	// getAverageRGB(mid, size) {
	// 	console.log("...in getAverageRGB...");
		
		
	// 	let midOffset = ~~(size/2);
	// 	let startX = mid[0] - midOffset;
	// 	let startY = mid[1] - midOffset;
	// 	let imgData = this.state.imgData;
	// 	let imgSize = this.state.imgSize;
	// 	console.log("this.state.imgData: ");
	// 	console.log(this.state.imgData);
	// 	console.log("imgData: ");
	// 	console.log(imgData);
			
	// 	let blockSize = 3, // only visit every 3 pixels
	// 		pixelIndex = 1 - blockSize,
	// 		rgb = {r:0,g:0,b:0},
	// 		count = 0;
			
	// 	for(var y=startY;y<startY+size;y+=blockSize){
	// 		for(var x=startX;x<startX+size;x+=blockSize){
	// 			pixelIndex = ((x*4)+(y*4*imgSize));
	// 			++count;
	// 			rgb.r += imgData.data[pixelIndex];
	// 			rgb.g += imgData.data[pixelIndex+1];
	// 			rgb.b += imgData.data[pixelIndex+2];
	// 		}
	// 	}
		
	// 	// ~~ used to floor values
	// 	rgb.r = ~~(rgb.r/count);
	// 	rgb.g = ~~(rgb.g/count);
	// 	rgb.b = ~~(rgb.b/count);
	// 	console.log(rgb);
		
	//     return rgb;
	// }
	
	drawDots(dots) {
		return dots.map( (box, index) => {
			if(Array.isArray(box)) {
				return this.drawDots(box)
			} else {
				return <div 
					key={index} 
					style={{width: box.size, height: box.size}} 
					className="box"
					onMouseEnter={this.revealBox}
				></div>
			}
		})
	}
	// drawBoxes(boxesToGenerate, refIds="0") {
		
	// 	const boxes = boxesToGenerate.map( (box, index) => {
	// 		if(Array.isArray(box)) {
	// 			return(
	// 				<div
	// 					key={index}
	// 					className="boxContainer" 
	// 				>{this.drawBoxes(box, refIds)}</div>
	// 			);
	// 		} else {
	// 			let rgb = this.getRGB(box);
	// 			let styles = {
	// 				width : box.size,
	// 				height : box.size,
	// 				background : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
	// 			};
				
	// 			return(
	// 				<div
	// 					key={index}
	// 					className="box" 
	// 					style={styles}
	// 					ref={refIds += index}
	// 					onMouseEnter={this.revealBox}
	// 				></div>
	// 			);
	// 		}
	// 	});
			
	// 	return (boxes);
	// }
	
	// revealBox = (e) => {
	// 	// console.log("...revealBox...");
	// 	console.log(e.target);
		
	// 	// const targetSize = parseInt(e.target.dataset.size);
	// 	// if(targetSize > 10) {
	// 	// 	var nextSize = targetSize / 2;
	// 	// 	var nextOffset = ~~(nextSize / 2);
	// 	// 	var mid = JSON.parse(e.target.dataset.mid);
	// 	// }
	// }
	
	// getRGB(box) {
	// 	var rgb = {r:100,g:100,b:100};
	// 	return rgb;
	// }
	
	
	
	render() {
		const { dots } = this.state
		console.log("...render...");
		return (   
			<div id="dots">
				<div className="boxContainer">
					{this.drawDots(dots)}
					{/* <div id="boxes" className="boxContainer">
						{this.drawBoxes(this.state.boxes)}
					</div>
					<canvas ref={this.canvasRef} width={this.state.imgSize} height={this.state.imgSize}>
						<img ref={this.imageRef} src={this.state.imgUrl} alt=""/>
					</canvas> */}
				</div>
			</div>
		);
	}
}

export default Dots;