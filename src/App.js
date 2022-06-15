import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Assets/Styles/App.css';
import { ExerraPhishing } from './Middlewares';


const App = () => {
	const [domain, setDomain] = useState('google.com');
	return (
		<>
			<p className="message">Hello World!</p>
			<Box
				component='form'
				noValidate
				autoComplete='off'
				alignItems='center'
				justifyContent='center'
				display='flex'
				minWidth='100vw'
				marginBottom='3vh'
			>
				<TextField
					required
					id='outline-required'
					label='Required'
					defaultValue={domain}
					onChange={(e) => setDomain(e.target.value)}
					margin='dense'
					color='secondary'
				/>
			</Box>
			<ExerraPhishing domain={domain}/>
		</>
	);
};

export default App;
