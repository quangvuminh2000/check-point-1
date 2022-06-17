import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../Assets/Styles/OutputPage.css';


const ExerraPhishing = ({domain}) => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState(false);

	const getFishingScam = async ({domain}) => {
		try {
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '685d2c8bedmsh3f533f17cc364afp19d020jsn5cae9ed05d0b',
					'X-RapidAPI-Host': 'exerra-phishing-check.p.rapidapi.com'
				}
			};

			const req_uri = `https://exerra-phishing-check.p.rapidapi.com/?url=https%3A%2F%2F${domain}`

			const response = await fetch(req_uri, options)
				.then(response => response.json())
				.then(response => console.log(response))
				.catch(err => console.error(err));

			const json = await response.json();
			setData(json.isScam);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getFishingScam(domain);
	}, [domain]);

	// JSX returns
	return (
		<div className='message-block'>
			{isLoading && <div className='title'>Loading...</div>}
			{!isLoading && (
				<>
					<div className="input">{domain}</div>
					<div className="input">{data === true ? 'Scam': 'Not Scam'}</div>
				</>
			)}
		</div>
	);
};


// Type Constraints
ExerraPhishing.propTypes = {
	domain: PropTypes.string
};


export default ExerraPhishing;