import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import Loader from "../Loader/Loader";

import css from "./SharedLayout.module.css";

const SharedLayout = () => {
	return (
		<div className={css.Container}>
			<header className={css.Header}>
				<nav>
					<Link className={css.Link} to="/">
						Home
					</Link>
					<Link className={css.Link} to="/movies">
						Movies
					</Link>
				</nav>
			</header>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	);
};
export default SharedLayout;
