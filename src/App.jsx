// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.minimal.css";

// const Home = lazy(() => import("./pages/Home/Home"));
// const Movies = lazy(() => import("./pages/Movies/Movies"));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
// const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
// const Cast = lazy(() => import("./components/Cast/Cast"));
// const Reviews = lazy(() => import("./components/Reviews/Reviews"));
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import NotFound from "./pages/NotFound/NotFound";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import "./App.css";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="movies/:movieId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer />
		</div>
	);
};
export default App;
