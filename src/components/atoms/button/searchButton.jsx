import React from 'react';

export default function SearchButton({ handleSearch }) {
	return (
		<div>
			<button
				className='search-btn'
				type='submit'
				onClick={handleSearch}
				style={{ minWidth: '5vw', border: '1px solid', borderRadius: '20px', fontSize: 14 }}
			>
				<span>Search</span>
			</button>
		</div>
	);
}
