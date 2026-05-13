import { useEvolutionGet } from "../../hooks/useEvolutionGet";
import { usePokemonSpeciesGet } from "../../hooks/usePokemonSpeciesGet";
import { mapEvolutions } from "../../utils/utils";
import EvolutionSprites from "../EvolutionSprites/EvolutionSprites";
import "./Unit.css";

const Unit = ({ pokeData, evolutionData, setSearch }) => {
	const frontSprite = pokeData?.sprites?.front_default;
	const backSprite = pokeData?.sprites?.back_default;

	const handleTargetSrc = (event, src) => {
		event.currentTarget.src = src;
	};

	const evolutionNames = mapEvolutions(evolutionData?.chain);

	return (
		<div className="unitWrapper">
			<div className="spriteWrapper">
				<img
					src={frontSprite}
					onMouseEnter={(event) => handleTargetSrc(event, backSprite)}
					onMouseLeave={(event) =>
						handleTargetSrc(event, frontSprite)
					}
					alt="Sprite"
				/>
			</div>
			<div className="evolutionSpritesWrapper">
				<EvolutionSprites
					names={evolutionNames}
					setSearch={setSearch}
				/>
			</div>
		</div>
	);
};

export default Unit;
