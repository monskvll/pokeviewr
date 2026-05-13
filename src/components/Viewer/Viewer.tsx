import { useState } from "react";
import { usePokemonGet } from "../../hooks/usePokemonGet";
import Description from "../Description/Description";
import Header from "../Header/Header";
import Unit from "../Unit/Unit";
import { usePokemonSpeciesGet } from "../../hooks/usePokemonSpeciesGet";
import { useEvolutionGet } from "../../hooks/useEvolutionGet";

const Viewer = () => {
	const [search, setSearch] = useState("pikachu");

	const { data: pokeData, loading, error } = usePokemonGet(search);

	const {
		data: pokemonSpeciesData,
		loading: pokemonSpeciesDataLoading,
		error: pokemonSpeciesDataError,
	} = usePokemonSpeciesGet(search);

	const {
		data: evolutionData,
		loading: evolutionDataLoading,
		error: evolutionDataError,
	} = useEvolutionGet(pokemonSpeciesData?.evolution_chain?.url);

	const isDesktop = window.innerWidth >= 768;

	const handleSubmit = (event) => {
		event.preventDefault();
		const searchTerm = event.target.elements.pokesearch.value;
		setSearch(searchTerm);
	};

	return (
		<div>
			{isDesktop ? (
				<div>
					<Header handleSubmit={handleSubmit} />
					<Unit
						pokeData={pokeData}
						evolutionData={evolutionData}
						setSearch={setSearch}
					/>
					<Description
						pokeData={pokeData}
						pokemonSpeciesData={pokemonSpeciesData}
					/>
				</div>
			) : (
				<div>
					<div>
						<Header handleSubmit={handleSubmit} />
						<Unit
							pokeData={pokeData}
							evolutionData={evolutionData}
							setSearch={setSearch}
						/>
					</div>
					<div>
						<Description
							pokeData={pokeData}
							pokemonSpeciesData={pokemonSpeciesData}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Viewer;
