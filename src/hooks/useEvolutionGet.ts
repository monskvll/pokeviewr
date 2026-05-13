import { useEffect, useState } from "react";

export const useEvolutionGet = (url: string) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!url) return;

		const fetchEvolution = async () => {
			try {
				setLoading(true);
				setError(null);                

				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Failed to fetch evolution chain");
				}

				const json = await response.json();

				setData(json);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchEvolution();
	}, [url]);

	return { data, loading, error };
};