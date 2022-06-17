import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './Assets/Styles/App.css';
import { UserRoute } from './Routes';


const App = () => {
	return (
		<>
			<p className="message">Hello World!</p>
			<Router>
				<UserRoute />
			</Router>
		</>
	);
};

export default App;
