import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light", // Change to "dark" for dark mode by default
		primary: {
			main: "#1976d2", // Default MUI blue
		},
		secondary: {
			main: "#ff4081", // Pink accent
		},
		background: {
			default: "#f5f5f5", // Light gray background
			paper: "#ffffff", // White for cards and surfaces
		},
		text: {
			primary: "#212121", // Dark text
			secondary: "#757575", // Lighter gray text
		},
	},
	typography: {
		fontFamily: "'Roboto', sans-serif",
		h1: {
			fontSize: "2.5rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 600,
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.6,
		},
	},
});

export default theme;
