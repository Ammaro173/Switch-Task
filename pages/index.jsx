import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/components/organisms/footer/Copyright';
import Link from '../src/Link'; // or import => import Link from 'next/link'
// import Link from 'next/link';
import Image from 'next/image';

export default function Index() {
	return (
		<Container maxWidth='sm'>
			<Box sx={{ my: 4 }}>
				<Typography variant='h4' component='h1' gutterBottom>
					Welcome to Book API
				</Typography>
				<Typography variant='h6' component='h3' gutterBottom>
					You can find your searched books and sort them based on author or title , also you get the option to click on a book and have a
					preview of it
				</Typography>

				<Link href='/main' color='secondary'>
					Go to the main page
				</Link>

				<Image
					width={600}
					height={400}
					alt='hero'
					src={'https://today.duke.edu/sites/default/files/styles/story_hero/public/Photo%207%20HERO_0.jpg?itok=Jf51DMuU'}
				/>
			</Box>
			<Copyright />
		</Container>
	);
}
