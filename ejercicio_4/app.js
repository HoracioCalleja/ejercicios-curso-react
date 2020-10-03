const obtenerPokemon = require("./library");

const logPokemon = (pokemonData) => {
  const { name, abilities } = pokemonData;
  const pokemon = {
    nombre : name,
    habildades : abilities.map(abilityData => abilityData.ability.name)
  }
  console.log(pokemon);
};

obtenerPokemon("charmander").then((pokemon) => logPokemon(pokemon));
