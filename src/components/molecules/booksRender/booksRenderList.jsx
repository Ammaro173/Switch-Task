import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
const axios = require('axios');
import Image from 'next/image';

import Link from 'next/link';

export default function BooksRenderList({ data }) {
	return (
		<div style={{ marginLeft: '10vw', marginRight: '10vw', marginTop: '5vw' }}>
			<ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{data?.map((item) => (
					<ImageListItem key={item.id} cols={2} sx={{ width: 250, marginRight: 10 }}>
						<Image
							src={item.volumeInfo.imageLinks?.thumbnail}
							srcSet={item.volumeInfo.imageLinks?.thumbnail}
							alt={item.volumeInfo.title}
							loading='lazy'
							width={300}
							height={350}
						/>
						<ImageListItemBar
							title={`Title : ${item.volumeInfo.title}`}
							subtitle={`Author : ${item.volumeInfo.authors}`}
							actionIcon={
								<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.volumeInfo.title}`}>
									<Link href={item.volumeInfo.previewLink} color='secondary'>
										<InfoIcon />
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
