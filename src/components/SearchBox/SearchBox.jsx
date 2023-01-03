import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBox.module.css";

const SearchBox = ({ query = "", onChange }) => {
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		if (query) {
			setSearchQuery(query);
		}
	}, [query]);

	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onChange(searchQuery);
		setSearchQuery("");
	};

	return (
		<div className={css.Wrapper}>
			<form className={css.Form} onSubmit={handleSubmit}>
				<button className={css.Button} type="submit">
					<FaSearch />
				</button>
				<input
					className={css.Input}
					type="text"
					name="searchQuery"
					value={searchQuery}
					placeholder="Search movies"
					autoComplete="off"
					autoFocus
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

SearchBox.propTypes = {
	onChange: PropTypes.func.isRequired,
};
export default SearchBox;
