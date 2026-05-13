

export const mapEvolutions = (chain, result = []): string[] => {
    
    const speciesName = chain?.species?.name;

    if (!chain && !speciesName) return result;    

    result.push(speciesName);

	chain.evolves_to.forEach((evo) => {
		mapEvolutions(evo, result);
	});

	return result;    
};	

