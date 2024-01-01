const { Router } = require("express");
const {
  getCharactersHandler,
  getCharacterByIdHandler,
} = require("../handlers/charactersHandler");

const characterRouter = Router();

characterRouter.get("/", getCharactersHandler);
characterRouter.get("/:id", getCharacterByIdHandler);

module.exports = characterRouter;
