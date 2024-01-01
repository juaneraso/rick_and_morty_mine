// const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const cleanCharacter = (character) => {
  return {
    id: character.id,
    name: character.name,
    species: character.species,
    origin: character.origin,
    image: character.image,
    gender: character.gener,
    status: character.status,
  };
};

const getCharById = async (id) => {
  const character = (
    await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  ).data;
  const clean = cleanCharacter(character);

  return clean;
};

module.exports = {
  getCharById,
};
