import { Container, Typography } from "@mui/material";

const About = () => {
	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				About Me
			</Typography>
			<Typography variant="body1">
				This page contains information about the creator of the website. Here,
				you can talk about yourself or your mission.
			</Typography>
		</Container>
	);
};

export default About;
