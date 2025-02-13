import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				404 - Page Not Found
			</Typography>
			<Typography variant="body1">
				Oops! The page you are looking for does not exist. You can go back to
				the <Link to="/">home page</Link>.
			</Typography>
		</Container>
	);
};

export default NotFound;
