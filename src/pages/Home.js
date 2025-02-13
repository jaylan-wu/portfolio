import { Container, Typography } from "@mui/material";

const Home = () => {
	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Welcome to the Home Page!
			</Typography>
			<Typography variant="body1">
				This is the main landing page of the website. You can add any content
				you'd like here.
			</Typography>
		</Container>
	);
};

export default Home;
