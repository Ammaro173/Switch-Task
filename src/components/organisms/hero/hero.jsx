import * as React from 'react';
import { useState, useEffect } from 'react';
import ProductHeroLayout from '../../atoms/hero/heroLayout';
import BooksRenderList from '../../molecules/booksRender/booksRenderList';
import axios from 'axios';

import SearchField from '../../atoms/searchField/searchField.jsx';
import SearchButton from '../../atoms/button/searchButton';
import ControlledOpenSelect from '../../atoms/dropList/booksCount';

const backgroundImage = 'https://today.duke.edu/sites/default/files/styles/story_hero/public/Photo%207%20HERO_0.jpg?itok=Jf51DMuU';

export default function ProductHero() {
	const [data, setData] = useState();
	const [searchKey, setSearchKey] = useState();
	const [query, setQuery] = useState('javascript');
	const [booksCount, setBooksCount] = useState(10);
	const [sortKey, setSortKey] = useState(); // from google api order by relevance or by newest
	const [infoIcon, setInfoIcon] = useState(' ');
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (show) {
			axios
				.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${booksCount}&key=AIzaSyAqV-Z1VA-HOc98PyWNaG__gsPF0RaKEYk`)
				.then((res) => {
					console.log(res.data.items);
					console.log(query, booksCount);
					setData(res.data.items);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [query, booksCount, show]);

	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(searchKey);
		setShow(true);
	};

	const handleBooks = (e) => {
		// console.log(rows);
		setBooksCount(e.target.value);
	};

	const handleChange = (e) => {
		// console.log(e.target.value);

		//handle empty string error on query (using trim)
		if (e.target.value.trim() === '') {
			setSearchKey();
		} else {
			setSearchKey(e.target.value);
		}
	};

	return (
		<>
			<ProductHeroLayout
				sxBackground={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundColor: '#7fc7d9', // Average color of the background image.
					backgroundPosition: 'center',
				}}
				sx={{ gap: '10px' }}
			>
				{/* Increase the network loading priority of the background image. */}
				<SearchField handleChange={handleChange} />

				<SearchButton handleSearch={handleSearch} />

				<ControlledOpenSelect books={booksCount} handleBooks={handleBooks} />
			</ProductHeroLayout>
			{show && <BooksRenderList data={data} />}
		</>
	);
}

{
	/* 
			<Typography color='inherit' align='center' variant='h2' marked='center'>
				Upgrade your Sundays
			</Typography>
			<Typography color='inherit' align='center' variant='h5' sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}>
				Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
			</Typography>
			<Button
				color='secondary'
				variant='contained'
				size='large'
				component='a'
				href='/premium-themes/onepirate/sign-up/'
				sx={{ minWidth: 200 }}
			>
				Register
			</Button>
			<Typography variant='body2' color='inherit' sx={{ mt: 2 }}>
				Discover the experience
			</Typography> */
}
