import { FastForwardRounded } from "@mui/icons-material";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const InputPage = () => {
	const [domain, setDomain] = useState('google.com');

	const navigate = useNavigate();

	const submitDomain = () => {
		navigate('/output', {state:{domain}})
	}

	return (
		<>
			<Stack flex='column' spacing={1}>
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
				<Button
					variant='contained'
					size='large'
					onClick={submitDomain}
					endIcon={<FastForwardRounded />}
				>
					Check Spam
				</Button>
			</Stack>
		</>
	)
}


export default InputPage;
