import LoadingCircle from "../LoadingCircle/LoadingCircle";

import "./Header.css";

const Header = ({ handleSubmit }) => {
	return (
		<div className="headerWrapper">
			<form
				onSubmit={handleSubmit}
				className="searchForm"
			>
				<input
					type="search"
					id="pokesearch"
					placeholder="Search Pokémon..."
					className="searchInput"
				/>
				<input
					type="submit"
					value="Search"
					className="searchSubmit"
				/>
				<LoadingCircle />
			</form>
		</div>
	);
};

export default Header;
