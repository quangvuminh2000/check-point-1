import React from 'react';
import { Link } from 'react-router-dom';

import '../Assets/Styles/MenuBar.css';


const MenuBar = () => {
	return (
		<>
			<div className='MenuBar'>
				<h5>MENU</h5>
				<ul className='list'>
					<li><Link to='/input'>Input</Link></li>
					<li><Link to='/output'>Output</Link></li>
				</ul>
			</div>
			<hr />
		</>
	);
};


export default MenuBar;
