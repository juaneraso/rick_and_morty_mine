// const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharacters = async () => {
  const characters = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data;
  console.log(characters);

  return characters;
};

module.exports = {
  getCharacters,
};
