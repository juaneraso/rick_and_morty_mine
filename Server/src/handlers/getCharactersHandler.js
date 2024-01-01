const { getCharacters } = require("../controllers/getCharacters");

const getCharactersHandler = async (req, res) => {
  try {
    const characters = await getCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCharactersHandler,
};
