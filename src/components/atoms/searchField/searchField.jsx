import React from 'react';

export default function SearchField({ handleChange }) {
	return (
		<input
			type='search'
			onChange={handleChange}
			placeholder='search for a book'
			name='SearchField'
			pattern='.*\S.*'
			required
			style={{
				textAlign: 'center',
				minWidth: '30vw',
				borderRadius: '30px',
				border: '1px solid #dcdcdc',
				fontSize: '18px',
			}}
		/>
	);
}
