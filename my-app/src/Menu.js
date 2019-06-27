import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return (

			<div id="menu">	
				<div className="pure-menu">
					<ul className="pure-menu-list">
						<li className="pure-menu-item"><a href="#Home" class="pure-menu-link">Home</a></li>
						<li className="pure-menu-item"><a href="#Policies" class="pure-menu-link">Policies</a></li>
						<li className="pure-menu-item"><a href="#Contact" class="pure-menu-link">Contact</a></li>
						<li className="pure-menu-item"><a href="#Archive" class="pure-menu-link">Archive</a></li>
						<li className="pure-menu-item"><a href="#External" class="pure-menu-link">Other job pages</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Menu;
