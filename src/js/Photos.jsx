import React from 'react';


export class Photos extends React.Component {
	render() {
		return (
			<div>
				<h1>Gallery</h1>
				<div className="row">
					<div className="col">
						<h3>About Breed</h3>
					</div>
					<div className="col-mid">
						<h3>Pictures</h3>
							
						<button id="prev">Prev</button><button id="next">Next</button>
					</div>
					<div className="col">
						<h3>column</h3>
					</div>
				</div>
			</div>
		);
	}
}