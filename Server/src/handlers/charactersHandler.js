const { getCharById } = require("../controllers/getCharById");
const { getCharacters } = require("../controllers/getCharacters");

const getCharactersHandler = async (req, res) => {
  try {
    const characters = await getCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCharacterByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharById(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCharactersHandler,
  getCharacterByIdHandler,
};
