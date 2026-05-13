import EvolutionSprite from "../EvolutionSprite/EvolutionSprite";

import "./EvolutionSprites.css";

const EvolutionSprites = ({
	names,
	setSearch,
}: {
	names: string[];
	setSearch: (name: string) => void;
}) => {
	if (!names || names.length <= 1)
		return <p className="noEvolutionsText">No evos</p>;

	return (
		<div>
			{names.map((name) => (
				<EvolutionSprite
					name={name}
					setSearch={setSearch}
				/>
			))}
		</div>
	);
};

export default EvolutionSprites;
