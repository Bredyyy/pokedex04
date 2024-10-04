const fetchPokemons = async () => {
  try {
    setLoading(true);
    setNotFound(false);
    const data = await getPokemons(itensPerPage, itensPerPage * page);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });

    const results = await Promise.all(promises);
    setPokemons(results);
    setLoading(false);
    setTotalPages(Math.ceil(data.count / itensPerPage));
  } catch (error) {
    console.log("fetchPokemons error: ", error);
  }
};
