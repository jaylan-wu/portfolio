import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const PortfolioRoutes = () => {
	return (
		<Routes>
			<Route path="portfolio/" element={<Home />} />
			<Route path="portfolio/about" element={<About />} />
			<Route path="portfolio/*" element={<NotFound />} />
		</Routes>
	);
};

export default PortfolioRoutes;
