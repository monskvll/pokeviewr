import { useEffect, useState } from "react";

/* Contains evolution chain and flavor text */
export const usePokemonSpeciesGet = (name: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!name) return;
        const fetchSpecies = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon-species/${name}`
                );
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSpecies();
    }, [name]);

    return { data, loading, error };
};