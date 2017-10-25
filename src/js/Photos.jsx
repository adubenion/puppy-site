import React from 'react';

const $ = require('jquery');
console.log('jquery is working')

var index = 0
const photoPool = [

	{
		src: "",
		alt: "black-white-dog"
	},
	{
		src: "",
		alt: "lap-dog"
	},
	{
		src: "",
		alt: "puppy-in-grass"
	},
	{
		src: "",
		alt: "two-dogs"
	}

]
const click = function() {
	return index = index + 1
}

class Gallery extends React.Component {
	render() {
		return(
			<div className="photo-box">
					<img id="pic" src={photoPool[index].src} alt={photoPool[index].alt} />
			</div>
		);
	}
}
export class Photos extends React.Component {
	render() {
		$(document).ready(function() {
			if ($('#pic').attr('src') === photoPool[index].src) {
				$('#prev').hide();
			} else {
				$('#prev').show();
			}
		});

		$(document).ready(function() {
			$('#next').click(function() {
				index += 1;
				console.log(index);
				return photoPool[index]
			})
		});
		return (
			<div>
				<h1>Gallery</h1>
				<div className="row">
					<div className="col">
						<h3>About Breed</h3>
					</div>
					<div className="col-mid">
						<h3>Pictures</h3>
							<Gallery />
						<button id="prev">Prev</button><button onClick={click;} id="next">Next</button>
					</div>
					<div className="col">
						<h3>column</h3>
					</div>
				</div>
			</div>
		);
	}
}