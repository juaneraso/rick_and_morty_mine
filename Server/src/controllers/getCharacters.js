// const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const cleanArray = (characters) => {
  const newArray = characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      species: character.species,
      origin: character.origin,
      image: character.image,
      gender: character.gender,
      status: character.status,
    };
  });
  return newArray;
};

const getCharacters = async () => {
  const characters = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data.results;

  const results = cleanArray(characters);

  return results;
};

module.exports = {
  getCharacters,
};
