import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
	return (
		<Typography variant='body2' color='secondary' align='center' sx={{ position: 'fixed', bottom: 0, fontSize: 'calc(14px + 0.3vw)' }}>
			{'Copyright © '}
			<MuiLink color='inherit' href='https://github.com/Ammaro173'>
				Ammar
			</MuiLink>{' '}
			{new Date().getFullYear()}.
		</Typography>
	);
}
