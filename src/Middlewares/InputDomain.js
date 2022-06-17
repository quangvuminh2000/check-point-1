import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import ExerraPhishing from "./ExerraPhishing";

import { FastForwardRounded } from "@mui/icons-material";



const InputDomain = () => {
	const [domain, setDomain] = useState('google.com');

	const submitDomain = () => {
	}

	return (
		<>
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
			<Stack
				direction='row'
				alignItems='center'
				spacing={1}
			>
				<Button
					onClick={submitDomain}
					endIcons={<FastForwardRounded />}
				>
					Check Spam
				</Button>
			</Stack>
		</>
	)
}

export default InputDomain;
