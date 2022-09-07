import * as React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
import Copyright from '../src/components/organisms/footer/Copyright';
// import { useEffect, useState } from 'react';
// import BooksRenderList from '../src/components/organisms/booksRender/booksRenderList';
import ProductHero from '../src/components/organisms/hero/hero';

// const axios = require('axios');

export default function Main() {
	return (
		<div className='body'>
			<ProductHero />
			{/* <BooksRenderList /> */}
			<Copyright />
		</div>
	);
}
