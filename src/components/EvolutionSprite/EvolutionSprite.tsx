import { usePokemonGet } from "../../hooks/usePokemonGet";

import "./EvolutionSprite.css";

const EvolutionSprite = ({ name, setSearch }) => {
	const { data, loading, error } = usePokemonGet(name);

	const handleClick = (event) => {
		event.preventDefault();
		setSearch(name);
	};

	return (
		<div
			key={name}
			className="evoSpriteWrapper"
		>
			<a onClick={handleClick}>
				<img
					src={data?.sprites?.front_default}
					alt={name}
					className="evoSpriteImage"
				/>
			</a>
		</div>
	);
};

export default EvolutionSprite;
