import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import Image from 'next/image';
import Link from 'next/link';

export default function BooksRenderList({ data }) {
	return (
		<div style={{ marginLeft: '10vw', marginRight: '10vw', marginTop: '5vw' }}>
			<Container maxWidth='sm'>
				<Box sx={{ my: 4 }}>
					<Typography variant='h4' component='h1' gutterBottom sx={{ textAlign: 'center' }}>
						Search Results
					</Typography>
				</Box>
			</Container>
			<ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{data?.map((item) => (
					<ImageListItem
						key={item.id}
						cols={2}
						variant='solid'
						elevation='6'
						sx={{ width: 250, marginRight: 10, marginTop: 15, boxShadow: '0px 4px 32px 1px #00000029', borderRadius: '10px' }}
					>
						<Image
							src={item.volumeInfo.imageLinks?.thumbnail}
							srcSet={item.volumeInfo.imageLinks?.thumbnail}
							alt={item.volumeInfo.title}
							loading='lazy'
							width={300}
							height={350}
							style={{
								borderRadius: '10px',
								cursor: 'not-allowed',
							}}
						/>
						<ImageListItemBar
							title={`Title : ${item.volumeInfo.title}`}
							subtitle={`Author : ${item.volumeInfo.authors}`}
							sx={{ borderRadius: '10px' }}
							actionIcon={
								<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.volumeInfo.title}`}>
									<Link href={item.volumeInfo.previewLink} color='secondary'>
										<InfoIcon variant='solid' sx={{}} color='info' />
									</Link>
								</IconButton>
							}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
}
