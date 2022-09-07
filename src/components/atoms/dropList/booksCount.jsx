import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect({ books, handleBooks }) {
	// const [rows, setRows] = React.useState(10);
	const [open, setOpen] = React.useState(false);

	// const handleChange = (event) => {
	// 	setRows(event.target.value);
	// };

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Button color='secondary' sx={{ display: 'block', mt: 1 }} onClick={handleOpen}>
				choose how many books to show
			</Button>
			<FormControl color='secondary' sx={{ m: 1, minWidth: 110 }}>
				<InputLabel style={{ backgroundColor: '#834bff', color: '#FFFFFF' }} id='demo-controlled-open-select-label'>
					Books
				</InputLabel>
				<Select
					style={{ backgroundColor: '#84ffff', color: '#9f3e72' }}
					labelId='demo-controlled-open-select-label'
					id='demo-controlled-open-select'
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={books}
					label='books'
					onChange={handleBooks}
				>
					<MenuItem value={5}>5</MenuItem>
					<MenuItem value={10}>10</MenuItem>
					<MenuItem value={20}>20</MenuItem>
					<MenuItem value={40}>40</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
