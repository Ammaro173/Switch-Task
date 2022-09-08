import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance,  then we can use the palette names directly with the component
const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		info: {
			main: red.A200,
		},
	},
});

export default theme;
