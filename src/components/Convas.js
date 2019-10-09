import React, { useEffect } from 'react';


const Convas = (props) => {
    const params = (x, y, size, canvas) => {
		canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
		for (let side = 0; side < 7; side++) {	
			canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
		}

	}
    useEffect(() => {
		let canvas = document.querySelector('#canvas').getContext('2d'),side = 0,
		size = 100,
		x = 100,
		y = 100;


		let imageObj = new Image();
		imageObj.onload = function()
		{
			canvas.save();
			canvas.beginPath();
			params(100, 100, 100, canvas);
			canvas.clip();
			canvas.drawImage(imageObj, 0, 0);
		};

		imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
		
		canvas.beginPath();
		canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
		for (side; side < 7; side++) {
			canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
		}

		// canvas.fillStyle = "#fff";
		canvas.strokeStyle = "gold";
		canvas.lineWidth = "2"
		canvas.stroke();
		// canvas.fill();
		
	});
    return (
        <canvas id="canvas" width="400" height="400"></canvas>
    )

}

export default Convas;

