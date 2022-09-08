import React from 'react';
import TextField from '@mui/material/TextField';
export default function SearchField({ handleChange }) {
	return (
		// <input
		// 	type='search'
		// 	onChange={handleChange}
		// 	placeholder='search for a book'
		// 	name='SearchField'
		// 	pattern='.*\S.*'
		// 	required
		// 	style={{
		// 		textAlign: 'center',
		// 		minWidth: '30vw',
		// 		borderRadius: '30px',
		// 		border: '1px solid #dcdcdc',
		// 		fontSize: '18px',
		// 	}}
		// />
		<TextField
			id='filled-search'
			label='Search for a book'
			type='search'
			variant='filled'
			pattern='.*\S.*'
			onChange={handleChange}
			sx={{
				backgroundColor: 'white',
				textAlign: 'center',
				minWidth: '30vw',
				maxWidth: '40vw',
				fontSize: '17px',
			}}
		/>
	);
}
