import * as React from 'react';
import { useState, useEffect } from 'react';
import ProductHeroLayout from '../../atoms/hero/heroLayout';
import BooksRenderList from '../../molecules/booksRender/booksRenderList';
import axios from 'axios';

import SearchField from '../../atoms/searchField/searchField.jsx';
import SearchButton from '../../atoms/button/searchButton';
import ControlledOpenSelect from '../../atoms/dropList/ControlledOpenSelect';

const backgroundImage = 'https://today.duke.edu/sites/default/files/styles/story_hero/public/Photo%207%20HERO_0.jpg?itok=Jf51DMuU';

export default function ProductHero() {
	const [data, setData] = useState();
	const [searchKey, setSearchKey] = useState();
	const [query, setQuery] = useState('javascript');
	const [booksCount, setBooksCount] = useState(10);
	const [orderBy, setOrderBy] = useState('relevance'); // from google api order by relevance or by newest
	const [sortBy, setSortBy] = useState('title');
	// const [infoIcon, setInfoIcon] = useState(' ');
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (show) {
			axios
				.get(
					`https://www.googleapis.com/books/v1/volumes?q=${query}+${sortBy}:${query}&orderBy=${orderBy}&maxResults=${booksCount}&key=AIzaSyAqV-Z1VA-HOc98PyWNaG__gsPF0RaKEYk`
				)
				.then((res) => {
					console.log(res.data.items);
					console.log(query, booksCount, orderBy, sortBy);
					setData(res.data.items);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [query, booksCount, show, orderBy, sortBy]);

	const handleSearch = (e) => {
		if (booksCount === undefined) {
			setBooksCount(10);
		}
		if (orderBy === undefined) {
			setOrderBy('relevance');
		}
		if (sortBy === undefined) {
			setSortBy('title');
		}
		e.preventDefault();
		setQuery(searchKey);
		setShow(true);
	};

	const handleBooks = (e) => {
		setBooksCount(e.target.value);
	};
	const handleOrderBy = (e) => {
		setOrderBy(e.target.value);
	};
	const handleSortBy = (e) => {
		console.log(sortBy);
		setSortBy('in' + e.target.value);
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

				<ControlledOpenSelect key={'books'} id={'books'} forWho={'books'} books={booksCount} handleBooks={handleBooks} />
				<ControlledOpenSelect key={'orderBy'} id={'orderBy'} forWho={'orderBy'} orderBy={orderBy} handleOrderBy={handleOrderBy} />
				<ControlledOpenSelect key={'sortBy'} id={'sortBy'} forWho={'sortBy'} sortBy={sortBy} handleSortBy={handleSortBy} />
			</ProductHeroLayout>

			{show && <BooksRenderList data={data} />}
		</>
	);
}
