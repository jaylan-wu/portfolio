import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import PortfolioRoutes from "./routes/PortfolioRoutes";
import theme from "./theme/theme";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Navbar />
				<PortfolioRoutes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
