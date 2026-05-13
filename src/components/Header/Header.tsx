import LoadingCircle from "../LoadingCircle/LoadingCircle";

import "./Header.css";

const Header = ({ handleSubmit }) => {
	return (
		<div className="headerWrapper">
			<LoadingCircle />
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					id="pokesearch"
					placeholder="Search Pokémon..."
				/>
				<input
					type="submit"
					value="Search..."
				/>
			</form>
		</div>
	);
};

export default Header;
