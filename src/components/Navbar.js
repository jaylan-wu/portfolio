import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "portfolio/" },
		{ title: "About", path: "portfolio/about" },
	];

	return (
		<AppBar position="static" color="primary">
			<Toolbar>
				{/* Logo */}
				<Typography
					variant="h6"
					sx={{ flexGrow: 1 }}
					component={Link}
					to="portfolio/"
					color="inherit"
				>
					MyApp
				</Typography>

				{/* Desktop Links */}
				<Box sx={{ display: { xs: "none", md: "block" } }}>
					{navLinks.map((link) => (
						<Button
							key={link.title}
							component={Link}
							to={link.path}
							color="inherit"
						>
							{link.title}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
