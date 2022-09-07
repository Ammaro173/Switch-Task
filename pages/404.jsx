import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Copyright from '../src/components/organisms/footer/Copyright';

const ErrorPage = () => {
	return (
		<div
			className='errorPage'
			style={{ minWidth: '20vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30, alignItems: 'center' }}
		>
			<Head>
				<title>404 - Page not Found</title>
				<meta name='description' content='The page you are looking for is not found go back to the homepage' />
				<link rel='shortcut icon' href='https://dret.github.io/guidelines/img/books.jpg' />
			</Head>

			<h1 className='title'>404 - Error</h1>
			<h4 className='subtitle font-light'>
				The page you are looking for is not available
				<br /> please go back to homepage
			</h4>

			<Link href='/'>
				<button className='btn btn-md m-t-30 btn-info-gradiant font-14'>Back to Homepage</button>
			</Link>
			<Image
				className='ms-auto align-self-center'
				alt='Card image cap'
				bottom
				width={'700'}
				height={'400'}
				src='https://i.pinimg.com/originals/df/2b/17/df2b17688cdb031c3849dd016666bbb5.jpg'
			/>
			<br />
			<Copyright />
		</div>
	);
};

export default ErrorPage;
