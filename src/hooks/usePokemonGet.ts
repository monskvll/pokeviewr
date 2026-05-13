import { useEffect, useState } from "react";

export const usePokemonGet = (pokemon: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

    const fetchPokemon = async () => {        
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase().trim()}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch Pokémon data");
                }

                const json = await response.json();

                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [pokemon]);

    return { data, loading, error };
}
    

