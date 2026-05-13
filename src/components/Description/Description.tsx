import "./Description.css";

const getTypes = (pokeData) => {
	const types = pokeData?.types || [];
	return types.map((typeInfo) => typeInfo.type.name).join(" - ");
};

const formatHeight = (height) => {
	if (height === undefined) return "Unknown";
	return `${height / 10} m`;
};

const formatWeight = (weight) => {
	if (weight === undefined) return "Unknown";
	return `${weight / 10} kg`;
};

const Description = ({ pokeData, pokemonSpeciesData }) => {
	const name = pokeData?.species?.name;
	const type = getTypes(pokeData);
	const height = formatHeight(pokeData?.height);
	const weight = formatWeight(pokeData?.weight);
	const loreDescription = pokemonSpeciesData?.flavor_text_entries?.find(
		(entry) => entry.language.name === "en",
	)?.flavor_text;

	return (
		<div className="descriptionWrapper">
			<div className="description">
				<p>
					<b>Name</b>: {name}
				</p>
				<p>
					<b>Type</b>: {type}
				</p>
				<p>
					<b>Height</b>: {height}
				</p>
				<p>
					<b>Weight</b>: {weight}
				</p>
				<p>
					<i>{loreDescription}</i>
				</p>
			</div>
		</div>
	);
};

export default Description;
