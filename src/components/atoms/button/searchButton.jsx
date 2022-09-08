import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
export default function SearchButton({ handleSearch }) {
	return (
		<div>
			<Button
				type='submit'
				onClick={handleSearch}
				variant='contained'
				endIcon={<SearchIcon />}
				sx={{ minWidth: '5vw', border: '1px solid', borderRadius: '20px', fontSize: 14 }}
			>
				Search
			</Button>
		</div>
	);
}
