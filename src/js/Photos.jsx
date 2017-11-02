import React, {setState} from 'react';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
	render() {
		return(
			<div>
				<img src={'./img/prod/' + this.props.propArray[this.props.photo]} />
			</div>
		);
	}
}

Gallery.propTypes = {

	propArray: PropTypes.array,
	photos: PropTypes.number
}

Gallery.defaultProps = {
	photo: "",

	propArray: [
		"black-white-dog.png",
		"corgie.png",
		"lap-dog.png",
		"puppy-in-grass.png",
		"two-dogs.png"
	]
}


export class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		}

		this.stateIncreaseHandler = this.stateIncreaseHandler.bind(this);
		this.stateDecreaseHandler = this.stateDecreaseHandler.bind(this);
	}

	stateIncreaseHandler() {
		var upNumber = this.state.number

		if (upNumber >= 3) {
			upNumber = 3
			return this.setState({number: upNumber})
		} else {
			upNumber += 1
			return this.setState({number: upNumber})
		}			
	}

	stateDecreaseHandler() {
		var downNumber = this.state.number

		if (downNumber <= 0) {
			downNumber = 0
			return this.setState({number: downNumber})
		} else {
			downNumber -= 1
			return this.setState({number: downNumber})
		}
	}

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
							<Gallery photo={this.state.number} />
						<button onClick={this.stateDecreaseHandler} id="prev">Prev</button><button onClick={this.stateIncreaseHandler} id="next">Next</button>
					</div>
					<div className="col">
						<h3>column</h3>
					</div>
				</div>
			</div>
		);
	}
}