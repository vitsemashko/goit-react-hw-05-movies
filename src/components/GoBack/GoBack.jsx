import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import css from "./GoBack.module.css";

const GoBack = ({ to, children }) => {
	return (
		<Link className={css.Link} to={to}>
			<HiArrowLeft size="20" />
			{children}
		</Link>
	);
};

export default GoBack;
