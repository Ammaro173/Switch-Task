import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect({ forWho, books, orderBy, handleBooks, handleOrderBy, handleSortBy }) {
	const [open, setOpen] = React.useState(false);
	const [values, setValues] = React.useState([]);
	// const [handler, setHandler] = React.useState();  // this idea will cause an error
	const [message, setMessage] = React.useState('');

	React.useEffect(() => {
		if (forWho === 'books') {
			setValues([5, 10, 20, 40]);
			setMessage('choose how many books to show');
			// setHandler(handleBooks); // this idea will cause an error
		} else if (forWho === 'orderBy') {
			setValues(['relevance', 'newest']);
			setMessage('choose the Order setting');
			// setHandler(handleOrderBy); // this idea will cause an error
		} else if (forWho === 'sortBy') {
			setValues(['author', 'title']);
			setMessage('choose the Sort setting');
		}
	}, [forWho, handleBooks, handleOrderBy]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	// const handleOnChange = () => {
	// 	if (forWho === 'books') {
	// 		return handleBooks;
	// 	} else if (forWho === 'orderBy') {
	// 		return handleOrderBy;
	// 	} else if (forWho === 'sortBy') {
	// 		return handleSortBy;
	// 	}
	// };
	// const handleLabel = () => {};
	// const handleValue = () => {};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Button color='secondary' sx={{ display: 'block', mt: 1 }} onClick={handleOpen}>
				{message}
			</Button>
			<FormControl color='secondary' sx={{ m: 1, minWidth: 110 }}>
				<InputLabel style={{ backgroundColor: '#834bff', color: '#FFFFFF' }} id='demo-controlled-open-select-label'>
					{forWho}
				</InputLabel>
				<Select
					style={{ backgroundColor: '#84ffff', color: '#9f3e72' }}
					labelId='demo-controlled-open-select-label'
					id='demo-controlled-open-select'
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					// value={forWho === 'books' ? books : orderBy}

					label={forWho === 'books' ? 'books' : forWho === 'orderBy' ? 'orderBy' : 'sortBy'}
					onChange={forWho === 'books' ? handleBooks : forWho === 'orderBy' ? handleOrderBy : handleSortBy}
				>
					{values?.map((ele, index) => {
						return (
							<MenuItem key={index} value={ele}>
								{ele}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}
