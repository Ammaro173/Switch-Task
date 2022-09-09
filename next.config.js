module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['books.google.com', 'i.pinimg.com', 'today.duke.edu'],
	},
	// webpack: (config) => {
	// 	config.resolve.fallbacvk = { fs: false };
	// 	return config;
	// },
	env: {
		KEY: process.env.KEY,
	},
	resolve: {
		// add the fallback setting below
		fallback: {
			fs: false,
			os: false,
			path: false,
		},
	},
};
