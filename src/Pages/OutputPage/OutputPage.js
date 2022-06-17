import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ExerraPhishing } from '../../Middlewares';

import '../../Assets/Styles/OutputPage.css';
import { ArrowBack, FastForwardRounded } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';


const OutputField = () => {
	const location = useLocation();

	try {
		const domain = location.state.domain;

		useEffect(() => {
			console.log(domain);
		}, []);

		return (
			<ExerraPhishing domain={domain}/>
		);
	} catch (error) {
		console.warn('No domain is specified please comeback to input page')
		return (
			<div>
				<p className='error'>No domain is specified please comeback to input page</p>
			</div>
		)
	}
}

const OutputPage = () => {
	const navigation = useNavigate();

	const backToInput = () => {
		navigation('/');
	}

	const outputField = OutputField();

	return (
		<>
			<Stack flex='column' spacing={1}>
				{outputField}
				<Button
					variant='contained'
					size='large'
					onClick={backToInput}
					startIcon={<ArrowBack />}
				>
					Return To Input
				</Button>
			</Stack>
		</>
	)
}


export default OutputPage;
