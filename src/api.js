// Função para buscar um Pokémon específico por nome
export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

// Função para buscar uma lista de Pokémons com paginação
export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    // Corrigindo a interpolação de string para usar template strings
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

// Função para buscar os dados de um Pokémon específico através de uma URL
export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
