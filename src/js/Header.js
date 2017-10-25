import React from 'react';
import {Link} from 'react-router-dom'

export class Header extends React.Component {
	render() {
		return (
			<div>
			<nav>
				<Link to="/"><button>Home</button></Link>
				<Link to="/Photos"><button className="separate">Photos</button></Link>
				<Link to="/About"><button>About</button></Link>
				<Link to="/Contact"><button>Contact</button></Link>
			</nav>
			</div>
		);
	}
}