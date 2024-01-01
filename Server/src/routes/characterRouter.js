const { Router } = require("express");
const { getCharactersHandler } = require("../handlers/getCharactersHandler");

const characterRouter = Router();

characterRouter.get("/", getCharactersHandler);

module.exports = characterRouter;
