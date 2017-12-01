import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import '../css_components/NavBar.css';

import ZipForm from './ZipForm.js';
import LoginForm from './LoginForm.js';

const NavBar = () => {
	return (
		<div>
			<header>
				<NavLink className="NavLink" to="/zipform" activeClassName="activeLink">
					<Button>Enter Zip</Button>
				</NavLink>
				<NavLink className="NavLink" to="/login" activeClassName="activeLink">
					<Button>Login</Button>
				</NavLink>
				<NavLink className="NavLink" to="/plans" activeClassName="activeLink">
					<Button>View Plans</Button>
				</NavLink>
			</header>
		</div>
	);
};

export default NavBar;
