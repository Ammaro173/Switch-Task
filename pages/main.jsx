import * as React from 'react';

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
