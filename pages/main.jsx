import * as React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/components/organisms/footer/Copyright';

import ProductHero from '../src/components/organisms/hero/hero';

export default function Main() {
	return (
		<div className='body'>
			<ProductHero />

			<Copyright />
		</div>
	);
}
